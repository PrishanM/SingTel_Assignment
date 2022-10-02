import React from 'react';
import renderer from 'react-test-renderer';
import NumberCard from "../src/components/NumberCard";
import { describe } from "@jest/globals";

describe('Number Card',()=>{
  test('renders correctly', () => {
    const tree = renderer.create(<NumberCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
