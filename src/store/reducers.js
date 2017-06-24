/**
 * Created by rroman681 on 6/20/17.
 * Reducers
 */

import {combineReducers} from "redux";
import C from "./constants";

export const difficulty = (state = null, action) => (
    (action.type === C.SET_DIFFICULTY) ?
        action.payload :
        state
);

export const characters = (state = [], action) => {
    if (action.type === C.SET_CHARACTERS) {
        let {payload: p} = action;
        const cards = [];
        for (let i = 0; i < p.unique; i++) {
            let len = p.characters.length;

            // Pick a random index, swap the characters, and pop it
            let index = Math.random() * len | 0;
            [p.characters[index], p.characters[len - 1]] = [p.characters[len - 1], p.characters[index]];

            cards.push(p.characters.pop());
        }

        return cards;
    } else {
        return state;
    }
};

export const count = (state = {total: 0, correct: 0}, action) => {
    switch (action.type) {
        case C.INCREMENT_TOTAL:
            return Object.assign({}, state, {total: state.total + 1});
        case C.INCREMENT_CORRECT:
            return Object.assign({}, state, {correct: state.correct + 1});
        case C.RESET_ALL:
            return {total: 0, correct: 0};
        default:
            return state;
    }
};

export const retire = (state = [], action) => {
    switch (action.type) {
        case C.RETIRE_CHAR:
            // Detect to see if the character is already retired; if it is, do nothing; if it isn't, turn it to true
            return (!state.includes(action.payload)) ?
                [...state, action.payload] :
                state;
        case C.RESET_RETIRE:
        case C.CREATE_RETIRE:
            // Payload is an array of characters
            return [];
        default:
            return state;
    }
};

export const guess = (state = [], action) => {
    switch (action.type) {
        case C.PUSH_GUESS:
            if (state.length < 2) {
                return [...state, action.payload];
            } else {
                return state;
            }
        case C.EMPTY_GUESS:
            return [];
        default:
            return state;
    }
};

export const errors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [...state, action.payload];
        case C.CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload);
        default:
            return state;
    }
};

export const active = (state = [], action) => {
    switch (action.type) {
        case C.CREATE_ACTIVE:
            return new Array(action.payload).fill(false);
        case C.ACTIVATE_CARD:
            state[action.payload] = true;
            return state;
        case C.RETIRE_CARD:
            state[action.payload] = 1;
            return state;
        case C.DEACTIVATE_CARD:
            if (action.payload) {
                state[action.payload] = false;
                return state;
            } else {
                return new Array(action.payload).fill(false);
            }
        default:
            return state;
    }
};

export const finished = (state = false, action) => {
    switch (action.type) {
        case C.FINISH_GAME:
            return true;
        case C.RESET_GAME:
            return false;
        default:
            return state;
    }
};

export const isUpdatingStyle = (state = false, action) => (
    (action.type === C.IS_UPDATING_STYLE) ?
        action.payload :
        state
);

export default combineReducers({
    difficulty,
    characters,
    retire,
    count,
    guess,
    active,
    errors,
    finished,
    isUpdatingStyle
});
