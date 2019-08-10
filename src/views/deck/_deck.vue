<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>{{ name }}</h1>
      <p></p>
    </header>

    <b-card no-body>
      <b-tabs card align="center">
        <b-tab active>
          <template slot="title">
            Mainboard ({{ mainboardSize }})
          </template>
          <Card v-for="(item, key) in this.mainboard" :key="key" v-bind="item" class="mb-3" />
        </b-tab>
        <b-tab>
          <template slot="title">
            Sideboard ({{ sideboardSize }})
          </template>
          <Card v-for="(item, key) in this.sideboard" :key="key" v-bind="item" class="mb-3" />
        </b-tab>
        <b-tab>
          <template slot="title">
            Tokens ({{ tokenKinds }})
          </template>
          <Card v-for="(item, key) in this.tokens" :key="key" v-bind="item" class="mb-3" />
        </b-tab>
      </b-tabs>
    </b-card>

  </b-container>
</template>

<script>
import _ from 'lodash';

import Card from '@/components/mtg/card.vue';

export default {
  name: 'Deck',
  components: {
    Card,
  },
  props: {
    name: String,
    mainboard: {
      type: Array,
      default: () => [],
    },
    sideboard: {
      type: Array,
      default: () => [],
    },
    tokens: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    mainboardSize() {
      return _.sumBy(this.mainboard, 'num');
    },
    sideboardSize() {
      return _.sumBy(this.sideboard, 'num');
    },
    tokenKinds() {
      return _.size(this.tokens);
    },
  },
};
</script>
