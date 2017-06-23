/**
 * Created by rroman681 on 6/22/17.
 * Create selectors for...
 * Todo: incrementing correct
 */

import {createSelector} from "reselect";

// Pull the appropriate keys
const getSelection = state => state.selection;
const getCount = state => state.count;
const getRetire = state => state.retire;

export const incrementCount = createSelector(
    [getSelection, getCount, getRetire],
    (selection, count, retire) => {
        // Check to see if there are two entities in selection
        if (selection.length === 2) {
            // Increment any attempt
            count.total++;

            // Check if they're the same AND that the character isn't already retired
            if (selection[0] === selection[1] && !retire[selection[0]]) {
                count.correct++;
                retire[selection[0]] = true; // make that the case
            }
            selection = [];
            return count;
        } else {
            // Too few selections were made; just return the count
            return count;
        }
    }
);