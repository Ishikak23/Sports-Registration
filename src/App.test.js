/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import React from "react";
import Body from "./components/Body";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
it("renders react component", () => {
  render(<App />);
  const renderedComponent = screen.getByTestId("sport-registration");
  expect(renderedComponent).toMatchSnapshot();
});

it("renders body component", () => {
  const spy = jest.fn();
  const container = mount(<Body />);
  console.log("container", container.debug());
  const addButton = container.find('[data-testid="add-btn"]');
  console.log("a", addButton.first().debug());
  addButton.first().simulate("click");
  expect(spy.mock.calls.length).toEqual(0);
});
