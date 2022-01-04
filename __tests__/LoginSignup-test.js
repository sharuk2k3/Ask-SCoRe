import React from "react";
import LoginSignupScreen from "../src/screens/LoginSignupScreen/LoginSignupScreen";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", () => {
  const tree = renderer.create(<LoginSignupScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
