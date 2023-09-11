# Technical Coaching Program

Please follow these instructions to set up your computer for participating in the technical coaching program.

## Purpose

Learn TDD and Emergent Design by Pair Programming on katas.

## Setup

### Prerequisites

* Your Thoughtworks MacBook (please don't use a client machine)
* [Homebrew](https://brew.sh)
* [Visual Studio Code](https://code.visualstudio.com) or IntelliJ IDEA

### Installation

1. Update Homebrew
```
brew update
```
2. Install node and npm
```
brew install node npm
```
3. Ensure you have installed Jest globally if you haven't already
```
npm install jest --global
```
or
```
yarn global add jest
```
4. Install the remote collaboration plugin for your IDE:
    - VS Code: install [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
    - IntelliJ: ensure [Code With Me](https://www.jetbrains.com/help/idea/code-with-me.html) is enabled


### Environment setup

1. Fork repo. Click the Fork button at the top right. See [forking a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) for further details.

2. Clone your forked repo
```
git clone git@github.com:<username>/technical-coaching.git
```

3. Change directory
```
cd technical-coaching/<kata of choice>
```

4. Open in your favorite IDE
```
code .
```
or
```
idea .
```


## Usage

### Run tests
```
./test.sh
```

### Run tests continuously
```
./test.sh --watch
```

## Katas

### Greeter

#### Before you start:
* **Try not to read ahead.**
* **Do one task at a time. The trick is to learn to work incrementally.**
* **Remember the Three Rules of TDD:**
  1. You are not allowed to write any production code unless it is to make a failing unit test pass.
  2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
  3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

This kata introduces the red-green-refactor workflow of TDD via ping-pong pairing.

1. Write a `Greeter` class with `greet` instance method. Initially, the method receives a `name` as input and outputs `Hello <name>`.
2. `greet` trims the input
3. `greet` capitalizes the first letter of the name
4. `greet` returns `Good morning <name>` when the time is 06:00-12:00
5. `greet` returns `Good evening <name>` when the time is 18:00-22:00
6. `greet` returns `Good night <name>` when the time is 22:00-06:00
7. `greet` logs on console every time it is run


### String Calculator
Made popular by [Roy Osherove](http://osherove.com/tdd-kata-1/).

#### Before you start:
* **Try not to read ahead.**
* **Do one task at a time. The trick is to learn to work incrementally.**
* **Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata**

This kata is one of the simplest and best ways to practice step-by-step fluent tdd, and provides an easy way to get proficient in a language.

Write a method `add` under an object `StringCalculator` that, given a delimited string, returns the sum of the numbers in the string.

1. An empty string returns zero `'' => 0`
2. A single number returns the value `'1' => 1` `'2' => 2`
3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`
4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`
6. Negative numbers throw an exception with the message `'-1,2,-3' => 'negatives not allowed: -1,-3'`
7. Numbers greater than 1000 are ignored
8. A single char delimiter can be defined on the first line starting with `//` (e.g `//#\n1#2` for a ‘#’ as the delimiter)
9. A multi char delimiter can be defined on the first line starting with `//` (e.g. `//###\n1###2` for ‘###’ as the delimiter)

### Url shortener

--> see the README in the `url_shortener` directory

