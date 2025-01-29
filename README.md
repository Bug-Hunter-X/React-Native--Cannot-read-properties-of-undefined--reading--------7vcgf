# React Native: Cannot read properties of undefined (reading '...')

This repository demonstrates a common error in React Native: "Cannot read properties of undefined (reading '...')."  This error typically occurs when attempting to access a property of an object that is null or undefined.  The example provided shows how this might happen when dealing with asynchronous data fetching, and presents a solution using optional chaining and nullish coalescing.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the initial error.  Then, after a short delay, notice the solution takes effect.

## Solution

The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties of potentially undefined objects. This ensures that if the data is still undefined, there is no error, and instead, a default value is used.
