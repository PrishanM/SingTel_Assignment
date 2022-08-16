import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from "../src/components/ButtonComponent";

test('renders correctly', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
})
