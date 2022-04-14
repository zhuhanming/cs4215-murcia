import { anyFunction } from './any';
import { length } from './length';
import { negative } from './negative';
import { positive } from './positive';
import { zero } from './zero';

export const globalEnvironmentDefaultFunctions = {
  any: {
    value: anyFunction,
    type: anyFunction.getType(),
  },
  positive: {
    value: positive,
    type: positive.getType(),
  },
  negative: {
    value: negative,
    type: negative.getType(),
  },
  zero: {
    value: zero,
    type: zero.getType(),
  },
  length: {
    value: length,
    type: length.getType(),
  },
};
