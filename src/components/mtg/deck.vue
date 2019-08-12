<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>{{ name }}</h1>
      <b-badge
        v-for="(item, key) in legality"
       :key="key"
        pill
       :variant="item.color"
        class="mx-1"
      >
        {{ key }} | {{ item.name }}
      </b-badge>
      <p></p>
    </header>

    <b-card no-body>
      <b-tabs card align="center">
        <b-tab active>
          <template slot="title">
            Mainboard ({{ mainboardSize }})
          </template>
          <Card v-for="(item, key) in this.mainboard" :key="key" v-bind="item" v-on:updateLegalityData="updateLegalityData" class="mb-3" />
        </b-tab>
        <b-tab>
          <template slot="title">
            Sideboard ({{ sideboardSize }})
          </template>
          <Card v-for="(item, key) in this.sideboard" :key="key" v-bind="item" v-on:updateLegalityData="updateLegalityData" class="mb-3" />
        </b-tab>
        <b-tab>
          <template slot="title">
            Maybe ({{ maybeKinds }})
          </template>
          <Card v-for="(item, key) in this.maybes" :key="key" v-bind="item" class="mb-3" />
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

import Legality from '@/data/legality';

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
    maybes: {
      type: Array,
      default: () => [],
    },
    tokens: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      legalityData: {
        standard: 0,
        modern: 0,
        legacy: 0,
      },
    };
  },
  computed: {
    legality() {
      return _.mapValues(this.legalityData, Legality.decode);
    },
    mainboardSize() {
      return _.sumBy(this.mainboard, 'num');
    },
    sideboardSize() {
      return _.sumBy(this.sideboard, 'num');
    },
    maybeKinds() {
      return _.size(this.maybes);
    },
    tokenKinds() {
      return _.size(this.tokens);
    },
  },
  methods: {
    updateLegalityData(value) {
      this.legalityData.standard = _.max([this.legalityData.standard, value.standard]);
      this.legalityData.modern = _.max([this.legalityData.modern, value.modern]);
      this.legalityData.legacy = _.max([this.legalityData.legacy, value.legacy]);
    },
  },
};
</script>
