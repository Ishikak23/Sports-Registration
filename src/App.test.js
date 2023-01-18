import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from "react";
import Body from './components/Body';

it('renders react component', () => {
  render(<App />);
  const renderedComponent = screen.getByTestId('sport-registration');
   expect(renderedComponent).toMatchSnapshot();
});

it('renders body component', () => {
  render(<Body />);
  const renderedComponent = screen.getByTestId('sport-registration-body');
  console.log('link', renderedComponent)
  expect(renderedComponent).toMatchSnapshot();
});

// describe("EngineeringArea Screen", () => {
//   it("EngineeringArea Screen renders correctly", () => {
//     const renderer = ShallowRenderer.createRenderer();
//     const component = renderer.render(<EngineeringArea />);
//     expect(component).toMatchSnapshot();
//   });
// });