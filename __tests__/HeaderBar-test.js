import React from "react";
import HeaderBar from "../src/components/HeaderBar/HeaderBar";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", () => {
  const tree = renderer.create(<HeaderBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
