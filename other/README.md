### Roman Numerals Conversion

1. Given a Roman Numeral, return as an Integer
1. Given an Integer, return as a Roman Numeral

### Extending String Calculator

The purpose of this kata is to demonstrate the importance and value of the SOLID principles.

**Recommended Prework:** Read up on SOLID principles. Some resources:
1. [SOLID Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
2. [SOLID: The First 5 Principles of OOP](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) (examples in PHP)

**The Kata:** Extend string calculator so that it:
1. can add roman numerals
1. can return the result in roman numerals, specified by a command in the string input
1. remembers and adds to a running total
1. can reset the running total, specified by a command in the string input
1. validates input to avoid unexpected behaviour

### Bowling Game
See the original [presentation](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata).

This kata demonstrates the power of doing tests first, and how up-front design decisions can change
and give way to a simpler implementation by coding iteratively.

Write a `BowlingGame` object with methods `roll(pins)` and `getScore()`.

This will be the game engine which follows the rules of bowling:

* The game consists of 10 frames, in each frame the player has the ability to knock down 10 pins.
* The score for the frame is the total number of pins knocked down + bonuses for `strikes` and `spares`.
* A `spare` is when the player knocks down all 10 pins in 2 tries. The bonus for a spare is the next roll.
* A `strike` is when the player knocks down all 10 pins in 1 try. The bonus is the next 2 rolls.
* In the tenth frame a player who rolls a spare / strike gets an extra roll(s) to complete the frame.
* No more than 3 rolls can be rolled in the 10th frame.

## Prime Factors
Made popular by [Uncle Bob](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata).

This kata demonstrates the [`transformation priority premise`](https://en.wikipedia.org/wiki/Transformation_Priority_Premise).

Write a function `generate` under a module `PrimeFactors` that, given an integer, returns the list
containing the prime factors in numerical sequence.

* 1 should return `[]`
* 2 should return `[2]`
* 3 should return `[3]`
* 4 should return `[2,2]`
* 5 should return `[5]`
* 6 should return `[2,3]`
* 7 should return `[7]`
* 8 should return `[2,2,2]`
* 9 should return `[3,3]`
* 4620 should return `[2,2,3,5,7,11]`

## Refactoring katas

 * Refactoring Journey : https://ythirion.github.io/refactoring-journey/
 * Gilded rose : https://github.com/emilybache/GildedRose-Refactoring-Kata
 * Theatrical players Kata : https://github.com/ythirion/Theatrical-Players-Refactoring-Kata
 * Person-kata : https://github.com/ythirion/person-kata
 * Untangled Conditionals kata : https://github.com/tomphp/untangled-conditionals-kata
   * Article : https://cloudnative.ly/refactoring-untangling-conditionals-cc5693b8ec3c
   * Video : Untangled Conditionals Kata


## Links

- [Dave Thomas' Code katas](http://codekata.com/)
