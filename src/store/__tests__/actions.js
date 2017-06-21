/**
 * Created by rroman681 on 6/20/17.
 * Testing action creators
 */

import storeFactory from "../index";
import {fetchCharactersAction, addErrorAction, clearErrorAction} from "../actions";
import C from "../constants";
import nock from "nock";
import fetch from "isomorphic-fetch";

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