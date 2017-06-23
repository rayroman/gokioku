/**
 * Created by rroman681 on 6/20/17.
 * Testing action creators
 */

import storeFactory from "../index";
import {
    fetchCharactersAction, addErrorAction, clearErrorAction, pushGuessAction,
    emptyGuessAction, selectionAction, resetAllAction, tickCorrectAction, tickTotalAction
} from "../actions";
import C from "../constants";
import nock from "nock";
import fetch from "isomorphic-fetch";
import {incrementCount} from "../../selectors/index";

describe("API fetch", () => {
    let store, diff, currState;
    beforeEach(() => {
        nock("http://localhost:5000")
            .get("/api/difficulty/EASY")
            .reply(200, {
                setting: "EASY",
                unique: 10,
                characters: "abcdefghijklmnopqrstuvwxyz".split("")
            });
        store = storeFactory({
            difficulty: null,
            characters: [],
        });
        diff = "EASY";
    });

    afterEach(() => {
        nock.cleanAll();
    });

    test("replies with the correct document", done => {
        fetch("http://localhost:5000/api/difficulty/EASY")
            .then(res => res.json())
            .then(data => {
                expect(data.setting).toBe(diff);
                done();
            })
            .catch(err => {
                if (err) {
                    console.error(err.message);
                    process.exit(1);
                }
            });
    });

    test("state should show difficulty and characters", done => {
        expect.assertions(2);
        store.dispatch(fetchCharactersAction(diff))
            .then(() => {
                currState = store.getState();
                expect(currState.difficulty).toBe(diff);
                expect(currState.characters.length).toBe(10);
                done();
            });
    });
});

describe("Error handling", () => {
    let store, errors;
    beforeEach(() => {
        errors = [
            "Documents not found",
            "Database not available"
        ];
        store = storeFactory({
            errors: []
        });
        store.dispatch(addErrorAction(errors[0]));
    });

    test("adding and deleting errors", () => {
        expect.assertions(3);
        store.dispatch(addErrorAction(errors[1]));
        expect(store.getState().errors.length).toBe(2);
        store.dispatch(clearErrorAction(0));
        expect(store.getState().errors.length).toBe(1);
        expect(store.getState().errors[0]).toBe("Database not available");
    });
});

describe("Counts", () => {
    let store, state;
    beforeEach(() => {
        store = storeFactory({
            count: {
                total: 5,
                correct: 3
            }
        })
    });

    test("incrementing the counts", () => {
        store.dispatch(tickTotalAction());
        store.dispatch(tickCorrectAction());
        expect(store.getState().count).toMatchObject({total: 6, correct: 4});
    });

    test("resetting the counts", () => {
        store.dispatch(resetAllAction());
        expect(store.getState().count).toMatchObject({total: 0, correct: 0});
    });
});

describe("Selections", () => {
    let store, chars = [{char: "a", index: 1}, {char: "b", index: 2}, {char: "a", index: 3}], state;
    beforeEach(() => {
        store = storeFactory({
            guess: [],
            retire: {
                "a": false,
                "b": false
            },
            count: {
                total: 0,
                correct: 0
            }
        });
    });

    test("adding a single selection", () => {
        expect.assertions(2);
        store.dispatch(selectionAction(chars[0]));
        state = store.getState();
        expect(state.count.total).toBe(0);
        expect(state.guess.length).toBe(1);
    });

    test("adding two dissimilar selections", () => {
        expect.assertions(2);
        store.dispatch(selectionAction(chars[0]));
        store.dispatch(selectionAction(chars[1]));
        state = store.getState();

        expect(state.count).toMatchObject({correct: 0, total: 1});
        expect(state.guess.length).toBe(2);
    });

    test("adding two similar selections of the same index", () => {
        expect.assertions(2);
        store.dispatch(selectionAction(chars[0]));
        store.dispatch(selectionAction(chars[0]));
        state = store.getState();

        // Equivalent to selecting and deselecting
        expect(state.count).toMatchObject({correct: 0, total: 0});
        expect(state.retire).toMatchObject({"a": false, "b": false});
    });

    test("adding two similar selections of different index", () => {
        expect.assertions(2);
        store.dispatch(selectionAction(chars[0]));
        store.dispatch(selectionAction(chars[2]));
        state = store.getState();

        expect(state.count).toMatchObject({correct: 1, total: 1});
        expect(state.retire).toMatchObject({"a": true, "b": false});
    });

    test("adding two already-retired similar selections", () => {
        expect.assertions(2);
        for (let i = 0; i < 2; i++) {
            store.dispatch(selectionAction(chars[0]));
            store.dispatch(selectionAction(chars[2]));
            state = store.getState();

            store.dispatch(emptyGuessAction());
        }
        state = store.getState();
        expect(state.count).toMatchObject({correct: 1, total: 2});
        expect(state.retire).toMatchObject({"a": true, "b": false});
    });

    test("clearing selections", () => {
        store.dispatch(selectionAction(chars[0]));
        store.dispatch(emptyGuessAction());

        expect(store.getState().guess.length).toBe(0);
    });
});