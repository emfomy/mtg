<template>
  <Deck
    name="MonoBlue - Stasis"
    :mainboard="mainboard"
    :sideboard="sideboard"
  />
</template>

<script>
import Deck from './_deck.vue';

export default {
  name: 'Stasis',
  components: {
    Deck,
  },
  data() {
    /* eslint-disable object-curly-newline */
    return {
      mainboard: [
        { num: 22, code: 'j14', id: '2★', zhName: '海島' },
        { num: 4, code: 'zen', id: '218', zhName: '水簾馬格西' },

        { num: 2, code: 'm11', id: '58', zhName: '傑斯貝連' },

        { num: 4, code: 'fut', id: '50', zhName: '受縛生魂' },
        { num: 4, code: '10e', id: '123', zhName: '維多肯謀士' },
        { num: 3, code: 'bbd', id: '131', zhName: '傳惑師' },
        { num: 3, code: 'mm3', id: '55', zhName: '塑形學者凡瑟' },
        { num: 2, code: 'cmd', id: '194', zhName: '忠貞主宰' },

        { num: 2, code: 'wth', id: '32', zhName: '先人的智慧' },
        { num: 3, code: 'usg', id: '73', zhName: '能量力場' },
        { num: 4, code: 'prm', id: '65648', zhName: '靜態平衡' },

        { num: 2, code: 'c18', id: '96', zhName: '沉思' },

        { num: 2, code: 'prm', id: '36228', zhName: '回力鏢' },
        { num: 2, code: 'mm3', id: '47', zhName: '倒退' },
        { num: 2, code: 'ima', id: '48', zhName: '地下指命' },
      ],
      sideboard: [
        { num: 2, code: 'a25', id: '62', zhName: '心靈術師傑斯' },

        { num: 3, code: 'mor', id: '35', zhName: '秘錄竊賊' },
        { num: 4, code: 'a25', id: '65', zhName: '掠奪人魚' },

        { num: 2, code: 'a25', id: '50', zhName: '反擊咒語' },
        { num: 2, code: 'gpt', id: '26', zhName: '催眠浪潮' },
        { num: 2, code: 'zen', id: '57', zhName: '殲智陷阱' },
      ],
    };
    /* eslint-disable object-curly-newline */
  },
};
</script>
