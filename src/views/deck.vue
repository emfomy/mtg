<template>
  <b-container class="py-3">

    <header class="text-center">
      <h1>{{ title }}</h1>
      <p></p>
    </header>

    <b-card>
      <Card v-for="(item, key) in card_metas" :key="key" :meta="item" class="mb-3" />
    </b-card>

  </b-container>
</template>

<script>
import $ from 'jquery';

import Card from '@/components/mtg/card.vue';

export default {
  name: 'Deck',
  components: {
    Card,
  },
  props: {
    deck: String,
  },
  data() {
    return {
      title: '\xa0',
      card_metas: null,
    };
  },
  mounted() {
    this.fetch(this.deck);
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.card_metas = null;
      this.fetch(this.deck);
    },
  },
  methods: {
    fetch(deck) {
      const url = 'http://tappedout.net/api/deck/widget/';
      const params = new URLSearchParams();
      params.append('deck', deck);
      params.append('c', 'board');

      this.$http
        .post(`${url}`, params)
        .then((res) => {
          this.title = res.data.title;
          this.card_metas = this.parse_board(res.data.board);
        });
    },
    parse_board(html) {
      return $(html).first().find('li');
    },
  },
};
</script>
