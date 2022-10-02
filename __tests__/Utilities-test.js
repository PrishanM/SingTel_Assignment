import {describe, expect, test,jest} from '@jest/globals';
import { toBeArray } from 'jest-extended';
import {generateRandomNumbers,getListNumbers} from "../src/utils/Utilities";

describe('generateRandomNumbers function',()=>{

  test('Passes when return value is array', () =>{
    const list = generateRandomNumbers(1,100,6);
    expect(list).toBeArray();
  });

  test('Passes when element count is 6', () =>{
    const list = generateRandomNumbers(1,100,6);
    expect(list.length).toEqual(6);
  });
  
});
