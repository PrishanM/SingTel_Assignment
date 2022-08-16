import React from 'react';
import renderer from 'react-test-renderer';
import NumberCard from "../src/components/NumberCard";

test('renders correctly', () => {
  const tree = renderer.create(<NumberCard />).toJSON();
  expect(tree).toMatchSnapshot();
})
