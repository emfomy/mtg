import _ from 'lodash';

const data = {
  0: {
    key: 'unknown',
    name: 'unknown',
    color: 'white',
  },
  1: {
    key: 'legal',
    name: 'legal',
    color: 'success',
  },
  2: {
    key: 'restricted',
    name: 'restricted',
    color: 'warning',
  },
  3: {
    key: 'banned',
    name: 'banned',
    color: 'danger',
  },
  4: {
    key: 'not_legal',
    name: 'illegal',
    color: 'secondary',
  },
};

const dataInv = _.invertBy(data, 'key');

export default {
  encode(key) {
    return _.get(dataInv, `${key}[0]`, 0);
  },
  decode(key) {
    return _.get(data, key, data.unknown);
  },
};
