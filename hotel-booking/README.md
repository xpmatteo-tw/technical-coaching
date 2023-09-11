
# Hotel booking kata

## The importance of the test list

Kent Beck himself in his book *TDD: By Example* starts with a test list.  Here is what he says:

> What should you test? Before you begin, write a list of all the tests you know you will have to write.
> The first part of our strategy for dealing with programming stress is to never take a step forward unless we know where our foot is going to land. When we sit down to a programming session, what is it we intend to accomplish?
> ... what we put on the list are the tests we want to implement.  First, **put on the list examples of every operation that you know you need to implement.** Next, ..., list all the refactorings that you think you will have to do to have clean code at the end of this session.
 
What is in Kent Beck's test list?  His problem is implementing multi-currency money.  He starts with two tests:

    $5 + 10 CHF = $10 if rate is 2:1
    $5 * 2 = $10

Note that Kend does not start with the first test in the list.  He starts with the one he knows how to make pass, in this case it was the second.

While working, he crosses off the tests he's done, and then adds more tests and notes

    $5 + 10 CHF = $10 if rate is 2:1
    $5 * 2 = $10
    Dollar rounding?

## Hotel booking kata

You are requested to implement an application that allows the owners of the Hotel next to where you live to manage bookings.

You must support the **Make booking** operation.
 - The input is a booking request: a date range, the number of people, and maybe even the number of rooms.
 - The output is either "NO_AVAILABILITY", or "BOOKING_CONFIRMED"

### First step: write a test list

When you start writing a test list, you'll see that there are multiple axes of complexity in this problem.  Are you exploring the date range axis?  Or the number of rooms axis?  Or the number of beds in each room?

You are welcome to explore all of this complexity in your test list!

When you start TDD, though, you should choose carefully the first test, and then you probably should explore all of a complexity axis before you switch to another.

