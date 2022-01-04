import React from "react";
import SignupForm from "../src/components/SignupForm/SignupForm.js";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("render SignupForm Component Correctly", () => {
  const tree = renderer.create(<SignupForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
