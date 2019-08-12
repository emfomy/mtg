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
  data() {
    return {
      legalityData: {
        standard: 0,
        modern: 0,
        legacy: 0,
        commander: 0,
      },
    };
  },
  computed: {
    legality() {
      return _.mapValues(this.legalityData, this.decodeLegality);
    },
  },
  methods: {
    encodeLegality(key) {
      return _.get(dataInv, `${key}[0]`, 0);
    },
    decodeLegality(key) {
      return _.get(data, key, data.unknown);
    },
  },
};
