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

//Brute force approach
function twoFer(name: string): string {
  return `One for ${name !== '' ? name : 'you'} and One for me.`;
}

//Optimized solution (function name is updated, the concept remains the same.)
//Here, name has a default value so that we avoid using condition in return statement.
function twoFerOpt(name = 'you'): string {
  return `One for ${name}, one for me.`;
}

console.log(twoFer('Salz'));
//console.log(twoFer(undefined));
