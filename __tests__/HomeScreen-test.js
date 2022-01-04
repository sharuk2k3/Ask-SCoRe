import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../src/screens/HomeScreen/HomeScreen";

jest.useFakeTimers();

test("render HomeScreen Correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
