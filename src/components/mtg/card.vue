<template>
  <b-card>
    <h5 slot="header" class="d-flex flex-row justify-content-between mb-0">
      <span class="align-self-center flex-grow-1">{{ num }}x {{ zhName }}</span>
      <b-button size="sm" variant="outline-secondary" @click="fetch">Refresh</b-button>
    </h5>
    <b-row>
      <b-col cols="8" sm="6" md="4" lg="3">
        <b-link :href="link" target="_blank">
          <b-img fluid-grow :src="img" />
        </b-link>
      </b-col>
      <b-col cols="12" md="8" lg="9">
        <hr class="d-md-none" />
        <h4 class="d-flex flex-row justify-content-between">
          <span>{{ name }}</span>
          <span v-html="cost" />
        </h4>
        <h5 class="d-flex flex-row justify-content-between">
          <span>{{ type }}</span>
          <span>{{ stats }}</span>
        </h5>

        <hr v-if="oracle && oracle.length" />
        <p v-for="(line, key) in oracle" :key="`oracle-${key}`" v-html="line" />

        <hr v-if="flaver && flaver.length" />
        <p v-for="(line, key) in flaver" :key="`flaver-${key}`"><i v-html="line" /></p>
      </b-col>
    </b-row>
    <b-alert show v-if="errorTitle" variant="danger" class="m-0">
      <h6 class="alert-heading font-weight-bold mb-0">{{ errorTitle }}</h6>{{ errorMsg }}
    </b-alert>
  </b-card>
</template>

<script>
import _ from 'lodash';
import symbols from '@/plugins/scryfall-symbols';

export default {
  name: 'Card',
  props: {
    num: Number,
    code: String,
    id: String,
    zhName: String,
  },
  data() {
    return {
      name: null,
      cost: null,
      type: null,
      stats: null,
      img: null,
      oracle: null,
      flaver: null,

      errorTitle: null,
      errorMsg: null,
    };
  },
  computed: {
    link() {
      return `https://scryfall.com/card/${this.code}/${this.id}`;
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.errorTitle = null;
      this.errorMsg = null;

      this.$scryfall
        .get(`cards/${this.code}/${this.id}`)
        .then((json) => {
          this.name = json.name;
          this.type = json.type_line;
          this.stats = _.join(_.filter([json.power, json.toughness, json.loyalty]), ' / ');
          this.img = json.image_uris.png;
          this.cost = this.parse_symbol(json.mana_cost);
          this.oracle = _.filter(_.split(this.parse_text(json.oracle_text), '\n'));
          this.flaver = _.filter(_.split(json.flavor_text, '\n'));
        })
        .catch((error) => {
          this.errorTitle = error.name;
          this.errorMsg = error.message;
        });
    },

    parse_text(text) {
      /* eslint-disable no-param-reassign */
      if (!text) return text;

      const matches = text.match(/\([^)]*\)/g);
      if (matches) {
        matches.forEach((slice) => {
          text = text.replace(slice, `<i>${slice}</i>`);
        });
      }
      return this.parse_symbol(text);
      /* eslint-disable no-param-reassign */
    },

    parse_symbol(text) {
      /* eslint-disable no-param-reassign */
      if (!text) return text;

      const matches = text.match(/{(.)(\/(.))?}/g);
      if (matches) {
        matches.forEach((symbol) => {
          const key = symbol.slice(1, -1);
          text = text.replace(symbol, `<img class="scryfall-symbol" src="${symbols[key]}"/>`);
        });
      }
      return text;
      /* eslint-disable no-param-reassign */
    },
  },
};
</script>
