'use strict';

import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});
