/**
 * Created by rroman681 on 6/20/17.
 * Testing action creators
 */

import storeFactory from "../index";
import {fetchCharactersAction} from "../actions";
import C from "../constants";
import nock from "nock";
import fetch from "isomorphic-fetch";

describe("API fetch", () => {
    let store, diff;
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

    /*
    describe("change of state", () => {
        let currState;
        beforeAll(() => {
            store.dispatch(fetchCharactersAction(diff));
            currState = store.getState();
        });

        test("state should show difficulty", () => {
            expect(currState.difficulty).toBe(diff);
        });

        test("characters should be limited to unique number", () => {
            expect(currState.characters.length).toBe(10);
        });
    });
    */
});
