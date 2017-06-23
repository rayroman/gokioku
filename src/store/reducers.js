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

export const total = (state = 0, action) => (
    (action.type === C.INCREMENT_TOTAL) ?
        state + 1 :
        state
);

export const correct = (state = 0, action) => (
    (action.type === C.INCREMENT_CORRECT) ?
        state + 1 :
        state
);

export const retire = (state = {}, action) => {
    switch (action.type) {
        case C.RETIRE_CARD:
            // Detect to see if the character is already retired; if it is, do nothing; if it isn't, turn it to true
            return (!state[action.payload]) ?
                Object.assign({}, state, {[action.payload]: true}) :
                state;
        case C.CREATE_RETIRE:
            // Payload is an array of characters that should be mapped to values false (no characters are retired at first)
            let retire = {};
            action.payload.forEach(char => {
                retire[char] = false;
            });
            return retire;
        default:
            return state;
    }
};

export const selection = (state = [], action) => {
    switch (action.type) {
        case C.PUSH_SELECTION:
            if (state.length < 2) {
                return [...state, action.payload];
            } else {
                return state;
            }
        case C.EMPTY_SELECTION:
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

export default combineReducers({
    difficulty,
    characters,
    retire,
    count: combineReducers({
        total,
        correct
    }),
    selection,
    errors
});
