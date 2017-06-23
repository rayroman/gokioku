/**
 * Created by rroman681 on 6/22/17.
 * Create configuration for each setting as follows:
 * - Easy: keep selection on screen, keep correct guesses shown
 * - Hard: hide selection after one second, hide correct guesses
 *
 * Easier to compose these settings
 */

const config = (showActiveSelection, keepCorrectGuesses) => ({
    showActiveSelection,
    keepCorrectGuesses
});

export const hard = config(false, false);
export const easy = config(true, true);