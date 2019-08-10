import Vue from 'vue';

import ScryfallClient from 'scryfall-client';

const scryfall = new ScryfallClient();

Vue.prototype.$scryfall = scryfall;
