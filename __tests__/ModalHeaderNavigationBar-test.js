import "react-native";
import React from "react";
import ModalHeaderNavigationBar from "../src/components/ModalHeaderNavigationBar/modalHeaderNavigationBar";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", () => {
  const tree = renderer.create(<ModalHeaderNavigationBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
