import React from "react";
import LoginForm from "../src/components/LoginForm/LoginForm";
import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Login Component correctly", () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
