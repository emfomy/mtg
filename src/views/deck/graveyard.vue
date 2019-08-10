<template>
  <Deck
    name="Black - Graveyard"
    :mainboard="mainboard"
    :sideboard="sideboard"
  />
</template>

<script>
import Deck from './_deck.vue';

export default {
  name: 'Graveyard',
  components: {
    Deck,
  },
  data() {
    /* eslint-disable object-curly-newline */
    return {
      mainboard: [
        { num: 4, code: 'j14', id: '2★', zhName: '海島' },
        { num: 8, code: 'j14', id: '3★', zhName: '沼澤' },
        { num: 4, code: 'xln', id: '253', zhName: '水沒墓穴' },
        { num: 1, code: 'prm', id: '59655', zhName: '蓋亞的育苗地' },
        { num: 3, code: 'shm', id: '280', zhName: '沉沒廢墟' },
        { num: 3, code: 'c17', id: '292', zhName: '虹霓泥沼' },

        { num: 4, code: 'uma', id: '84', zhName: '死靈術士學徒' },
        { num: 1, code: 'ema', id: '1', zhName: '艾文時縫看守' },
        { num: 1, code: 'c17', id: '83', zhName: '替身妖' },
        { num: 4, code: 'a25', id: '65', zhName: '掠奪人魚' },
        { num: 1, code: 'uma', id: '217', zhName: '奪魂紅帽客' },
        { num: 1, code: 'bbd', id: '128', zhName: '隼龍獸' },
        { num: 2, code: 'a25', id: '100', zhName: '非瑞克西亞食屍鬼' },
        { num: 1, code: 'uma', id: '31', zhName: '醒靈雲雀' },
        { num: 1, code: 'shm', id: '49', zhName: '河流凱爾比' },
        { num: 2, code: 'c18', id: '160', zhName: '櫻宗長老' },

        { num: 2, code: 'uma', id: '234', zhName: '虹彩透鏡' },
        { num: 2, code: 'cma', id: '236', zhName: '千年瓊漿' },

        { num: 4, code: 'wth', id: '32', zhName: '先人的智慧' },

        { num: 2, code: 'hop', id: '19', zhName: '懇求女王' },
        { num: 2, code: 'mm3', id: '63', zhName: '破滅' },
        { num: 2, code: 'mm2', id: '90', zhName: '瀆神指命' },
        { num: 2, code: 'vma', id: '148', zhName: '約格莫夫的意志' },

        { num: 4, code: 'uma', id: '94', zhName: '入土' },
      ],
      sideboard: [
        { num: 0, code: 'vma', id: '323', zhName: '沉落幽谷' },
        { num: 0, code: 'ima', id: '246', zhName: '清淚長河' },
        { num: 0, code: 'grn', id: '259', zhName: '積水墓地' },
        { num: 0, code: 'cm2', id: '275', zhName: '伏流' },
        { num: 0, code: 'c18', id: '232', zhName: '玄秘聖所' },
        { num: 0, code: 'ktk', id: '238', zhName: '奢華宮殿' },

        { num: 0, code: 'gvl', id: '32', zhName: '莉蓮娜維斯' },

        { num: 0, code: 'sok', id: '103', zhName: '入聖僧人焰村' },

        { num: 0, code: '7ed', id: '115', zhName: '深淵驚懼獸' },
        { num: 0, code: 'mm3', id: '61', zhName: '死屍鑒賞家' },
        { num: 0, code: 'a25', id: '91', zhName: '墮天使' },
        { num: 0, code: 'fut', id: '87', zhName: '烏鋒傳人寇列許' },
        { num: 0, code: 'c18', id: '94', zhName: '漂念精' },
        { num: 0, code: '7ed', id: '152', zhName: '壓制' },
        { num: 0, code: '10e', id: '178', zhName: '潛藏密探' },
        { num: 0, code: 'mm3', id: '55', zhName: '塑形學者凡瑟' },
        { num: 0, code: 'a25', id: '115', zhName: '鬼火' },

        { num: 0, code: 'usg', id: '123', zhName: '污化' },
        { num: 0, code: 'uds', id: '61', zhName: '潰膿創傷' },

        { num: 0, code: 'ema', id: '83', zhName: '柯幫療法' },
        { num: 0, code: 'cma', id: '54', zhName: '惡魔導師' },
        { num: 0, code: 'uds', id: '59', zhName: '侵蝕' },

        { num: 0, code: 'mma', id: '84', zhName: '根除' },
        { num: 0, code: 'c14', id: '164', zhName: '瞬息腐壞' },
      ],
    };
    /* eslint-disable object-curly-newline */
  },
};
</script>
