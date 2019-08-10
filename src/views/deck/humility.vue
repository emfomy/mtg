<template>
  <Deck
    name="MonoWhite - Humility"
    :mainboard="mainboard"
    :sideboard="sideboard"
    :tokens="tokens"
  />
</template>

<script>
import Deck from './_deck.vue';

export default {
  name: 'Humility',
  components: {
    Deck,
  },
  data() {
    /* eslint-disable object-curly-newline */
    return {
      mainboard: [
        { num: 22, code: 'j14', id: '1★', zhName: '平原' },
        { num: 4, code: 'td2', id: '39', zhName: '險要的瞭望臺' },

        { num: 2, code: 'm11', id: '1', zhName: '金鬃阿耶尼' },
        { num: 2, code: 'mma', id: '13', zhName: '遊俠艾紫培' },

        { num: 3, code: 'lrw', id: '8', zhName: '仕紳傳人' },
        { num: 3, code: 'mor', id: '5', zhName: '仕紳策士' },
        { num: 3, code: 'cma', id: '16', zhName: '鏡身靈' },

        { num: 2, code: 'ons', id: '6', zhName: '點金術' },
        { num: 2, code: 'tpr', id: '16', zhName: '謙卑' },
        { num: 3, code: 'lrw', id: '30', zhName: '義勇軍之傲' },
        { num: 2, code: '9ed', id: '55', zhName: '崇拜' },
        { num: 2, code: 'cmd', id: '27', zhName: '刑期' },

        { num: 4, code: 'mor', id: '12', zhName: '田園導師' },
        { num: 3, code: 'c18', id: '69', zhName: '軍事壯舉' },
        { num: 4, code: 'mma', id: '4', zhName: '天使恩典' },
      ],
      sideboard: [
        { num: 3, code: 'mor', id: '14', zhName: '英莊園邊界守衛' },
        { num: 3, code: 'shm', id: '7', zhName: '高等靈氣術' },
        { num: 2, code: 'ons', id: '13', zhName: '康復期護理' },
      ],
      tokens: [
        { num: 0, code: 'tm11', id: '1', zhName: '' },
        { num: 0, code: 'tlrw', id: '3', zhName: '' },
        { num: 0, code: 'tmma', id: '3', zhName: '' },
      ],
    };
    /* eslint-disable object-curly-newline */
  },
};
</script>
