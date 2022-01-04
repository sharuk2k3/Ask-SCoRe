import React from "react";
import OnboardingScreen from "../src/screens/OnboardingScreen/OnboardingScreen";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", () => {
  const tree = renderer.create(<OnboardingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
