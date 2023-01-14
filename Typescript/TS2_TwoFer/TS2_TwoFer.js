"use strict";
/**
 * Instructions
    Two-fer or 2-fer is short for two for one. One for you and one for me.
    Given a name, return a string with the message:

    One for name, one for me.

    Where "name" is the given name.
    However, if the name is missing, return the string:
    One for you, one for me.

    Here are some examples:
    Alice	One for Alice, one for me.
    Bob	    One for Bob, one for me.
            One for you, one for me.
    Zaphod	One for Zaphod, one for me.

 */
exports.__esModule = true;
exports.twoFer = void 0;
function twoFer(name) {
    return "One for ".concat(name !== '' ? name : 'you', " and One for me");
}
exports.twoFer = twoFer;
console.log(twoFer('Alice'));
