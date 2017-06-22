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
                let pureChars = getState().characters.map(item => item.char);
                console.assert(typeof pureChars[0] === "string", "Something went wrong pulling characters...");
                dispatch(createRetireAction(pureChars));

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

export const resetTotalAction = () => ({
    type: C.RESET_TOTAL
});

// correct selection available in reselect (two correct selections = increment correct)

/*
Modifying the selection
 */

export const pushSelectionAction = (selection = null) => ({
    type: C.PUSH_SELECTION,
    payload: selection
});

export const emptySelectionAction = () => ({
    type: C.EMPTY_SELECTION
});

/*
Retiring cards
 */
export const retireCardAction = card => ({
    type: C.RETIRE_CARD,
    payload: card
});

export const createRetireAction = chars => ({
    type: C.CREATE_RETIRE,
    payload: chars
});