<template>
  <b-card>
    <h5 slot="header" class="d-flex flex-row justify-content-between mb-0">
      <span class="align-self-center flex-grow-1">{{ num }}x {{ zhName }}</span>
      <b-button size="sm" variant="outline-secondary" @click="fetch">Refresh</b-button>
    </h5>
    <b-row>
      <b-col cols="8" sm="6" md="4" lg="3">
        <b-link :href="link" target="_blank">
          <b-img thumbnail fluid-grow :src="img" :id="`img-${name}`" />
        </b-link>
      </b-col>
      <b-col cols="12" md="8" lg="9">
        <h4>{{ name }}</h4>
        <h5>{{ type }}</h5>
        <p v-for="item in rules" v-html="item.innerHTML" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import $ from 'jquery';

const zhMap = {
  'Ajani Goldmane' :'金鬃阿耶尼',
  'Ancestral Knowledge': '先人的智慧',
  'Angel\'s Grace' :'天使恩典',
  'Apprentice Necromancer': '死靈術士學徒',
  'Aurification' :'點金術',
  'Aven Riftwatcher': '艾文時縫看守',
  'Beseech the Queen': '懇求女王',
  'Body Double': '替身妖',
  'Bonded Fetch': '受縛生魂',
  'Boomerang': '回力鏢',
  'Cenn\'s Heir' :'仕紳傳人',
  'Cenn\'s Tactician' :'仕紳策士',
  'Cryptic Command': '地下指命',
  'Damnation': '破滅',
  'Dominus of Fealty': '忠貞主宰',
  'Drowned Catacomb': '水沒墓穴',
  'Elspeth, Knight-Errant' :'遊俠艾紫培',
  'Energy Field': '能量力場',
  'Entomb': '入土',
  'Forbidding Watchtower' :'險要的瞭望',
  'Gaea\'s Cradle': '蓋亞的育苗地',
  'Humility' :'謙卑',
  'Idyllic Tutor' :'田園導師',
  'Island': '海島',
  'Jace Beleren': '傑斯貝連',
  'Magosi, the Waterveil': '水簾馬格西',
  'Martial Coup' :'軍事壯舉',
  'Merfolk Looter': '掠奪人魚',
  'Militia\'s Pride' :'義勇軍之傲',
  'Mirror Entity' :'鏡身靈',
  'Murderous Redcap': '奪魂紅帽客',
  'Peregrine Drake': '隼龍獸',
  'Phyrexian Ghoul': '非瑞克西亞食屍鬼',
  'Plains' :'平原',
  'Ponder': '沉思',
  'Prismatic Lens': '虹彩透鏡',
  'Prison Term' :'刑期',
  'Profane Command': '瀆神指命',
  'Reveillark': '醒靈雲雀',
  'Rewind': '倒退',
  'River Kelpie': '河流凱爾比',
  'Sakura-Tribe Elder': '櫻宗長老',
  'Sower of Temptation': '傳惑師',
  'Stasis': '靜態平衡',
  'Sunken Ruins': '沉沒廢墟',
  'Swamp': '沼澤',
  'Thousand-Year Elixir': '千年瓊漿',
  'Vedalken Mastermind': '維多肯謀士',
  'Venser, Shaper Savant': '塑形學者凡瑟',
  'Vivid Marsh': '虹霓泥沼',
  'Worship' :'崇拜',
  'Yawgmoth\'s Will': '約格莫夫的意志',
};

export default {
  name: 'Card',
  props: {
    meta: HTMLLIElement,
  },
  data() {
    return {
      num: 0,
      name: null,
      type: null,
      link: null,
      img: null,
      rules: null,
    };
  },
  computed: {
    zhName() {
      return _.get(zhMap, this.name, this.name);
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
    const card = this.meta.children[0].children[0];
    const num = this.meta.firstChild.textContent.trim();
    this.num = num.substring(0, num.length - 1);
    this.name = card.text;
    this.link = card.href;
    this.img = card.getAttribute('data-card-img');

    const proxy = 'http://learn.iis.sinica.edu.tw:9185/';

    this.$http
      .get(`${proxy}${this.link}`)
      .then((res) => {
        this.parse_card(res.data);
      });
    },
    parse_card(html) {
      const htmlEl = $(html);
      this.img = htmlEl.find('#body .container-fluid img')[0].getAttribute('src');
      const ruleEl = htmlEl.find('.well.well-jumbotron > div > div').first();
      this.name = ruleEl.find('h1').text().trim(); ruleEl.find('h1').remove();
      this.type = ruleEl.find('h3').text().trim(); ruleEl.find('h3').remove();
      this.rules = ruleEl;
    },
  },
};
</script>
