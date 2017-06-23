/**
 * Created by rroman681 on 6/20/17.
 * Dispatch actions
 */

import C from "./constants";
import fetch from "isomorphic-fetch";
import {host} from "../config";

/*
Setting the difficulty and fetching the characters
 */
const selectDifficultyAction = (difficulty = "EASY") => ({
    type: C.SET_DIFFICULTY,
    payload: difficulty
});

const setCharactersAction = (charsDoc = {}) => ({
    type: C.SET_CHARACTERS,
    payload: charsDoc
});

/*
Modify errors
 */
export const addErrorAction = err => ({
    type: C.ADD_ERROR,
    payload: err
});

export const clearErrorAction = index => ({
    type: C.CLEAR_ERROR,
    payload: index
});

export const fetchCharactersAction = difficulty => (dispatch, getState) => {
    // Set the difficulty
    dispatch(selectDifficultyAction(difficulty));

    // Show that characters are being fetched
    dispatch({type: C.FETCH_CHARACTERS});

    return fetch(`${host}/api/difficulty/${difficulty}`)
        .then(response => response.json())
        .then(doc => {
            if (doc.setting) {
                // Set the characters and cancel the fetching
                dispatch(setCharactersAction(doc));

                // Create the retire object with the characters we already selected
                let pureChars = getState().characters;
                console.assert(typeof pureChars[0] === "string", "Something went wrong pulling characters...");
                dispatch(createRetireAction(pureChars));
                dispatch(createActiveAction(pureChars.length * 2));

                dispatch({type: C.CANCEL_FETCHING});
            } else {
                // We don't get what we want
                console.assert(doc.setting === difficulty, "Something went wrong? Fetched the following:\n%o", doc);
                dispatch(addErrorAction("Characters not properly fetched."));
                dispatch({type: C.CANCEL_FETCHING});
            }

        })
        .catch(err => {
            if (err) {
                console.error(err);
                dispatch(addErrorAction(err.message));
                dispatch({type: C.CANCEL_FETCHING});
            }
        })
};

/*
Modifying the counts
 */

export const tickTotalAction = () => ({
    type: C.INCREMENT_TOTAL
});

export const tickCorrectAction = () => ({
    type: C.INCREMENT_CORRECT
});

export const resetTotalAction = () => ({
    type: C.RESET_TOTAL
});

// correct selection available in reselect (two correct selections = increment correct)

/*
Modifying the selection
 */

export const pushGuessAction = (selection = null) => ({
    type: C.PUSH_GUESS,
    payload: selection
});

export const emptyGuessAction = () => ({
    type: C.EMPTY_GUESS
});

/*
Retiring cards
 */
export const retireCharAction = card => ({
    type: C.RETIRE_CHAR,
    payload: card
});

export const retireCardAction = index => ({
    type: C.RETIRE_CARD,
    payload: index
});

export const createRetireAction = chars => ({
    type: C.CREATE_RETIRE,
    payload: chars
});

/*
Handling all of the pushing selection action + styling
 */

export const createActiveAction = num => ({
    type: C.CREATE_ACTIVE,
    payload: num
});

export const activateAction = index => ({
    type: C.ACTIVATE_CARD,
    payload: index
});

export const deactivateAction = (index = null) => ({
    type: C.DEACTIVATE_CARD,
    payload: index
});

const retireOrDeactivate = (dispatch, state) => card => {
    if (!state.retire[card.char]) {
        dispatch(deactivateAction(card.index));
    } else {
        dispatch(retireCardAction(card.index));
    }
};

export const selectionAction = card => (dispatch, getState) => {
    // Before card is added
    let state = getState();
    if (state.guess.length === 1) {
        if (state.guess.filter(s => s.index === card.index).length > 0) {
            // it's the same card that's begin added...remove it
            retireOrDeactivate(dispatch, state)(card);
            dispatch(emptyGuessAction());
        } else {
            // Card is added. Now the state is different
            dispatch(activateAction(card.index));
            dispatch(pushGuessAction(card));
        }
    } else if (state.guess.length === 0) {
        console.log(4);
        dispatch(activateAction(card.index));
        dispatch(pushGuessAction(card));
    }

    // After card is added
    state = getState();
    const {guess, retire} = state;
    if (guess.length === 2) {
        // Increment the count
        dispatch(tickTotalAction());

        // If they're the same and they aren't retired, increment and then retire
        if (guess[0].char === guess[1].char && !retire[guess[0].char]) {
            dispatch(tickCorrectAction());
            dispatch(retireCharAction(guess[0].char));
            guess.forEach(card => {
                dispatch(retireCardAction(card.index));
            });
            dispatch(emptyGuessAction());
        } else {
            setTimeout(() => {
                guess.forEach(retireOrDeactivate(dispatch, state));
                dispatch(emptyGuessAction());
            }, 1000);
        }
    }

    return "done";
};