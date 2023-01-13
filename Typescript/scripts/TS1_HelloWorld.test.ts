import '@types/jest';
import { hello } from '../TS1_HelloWorld/TS1_HelloWorld';

describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
