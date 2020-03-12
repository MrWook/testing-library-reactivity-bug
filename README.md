# testing-library-reactivity-bug
Reproduction repo for a testing-library reactivity bug.
For some reasons the template isn't updated correctly if you push a new item into an array inside the mounted hook.

- download repo
- install dependencies
- run yarn test

The HTML of the testing library is missing the updated state. The vue test utils test has an updated state
