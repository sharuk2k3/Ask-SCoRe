import "react-native";
import React from "react";
import NotificationScreen from "../src/screens/NotificationScreen/NotificationScreen";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Notification Screen correctly", async () => {
  const tree = renderer.create(<NotificationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
