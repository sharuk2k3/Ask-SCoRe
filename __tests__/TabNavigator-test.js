import "react-native";
import React from "react";
import TabNavigator from "../src/screens/TabNavigator/TabNavigator";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", async () => {
  const tree = renderer.create(<TabNavigator />).toJSON();
  expect(tree).toMatchSnapshot();
});
