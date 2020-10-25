import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";

import { API_URL } from "@/Config";

import { StoreState, BasketPayload, CardType } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [
      {
        id: 1,
        image: "1.jpg",
        title: "«Рождение Венеры» Сандро Боттичелли",
        isSold: false,
        price: 1000000,
        priceOld: 2000000,
      },
      {
        id: 2,
        image: "2.jpg",
        title: "«Тайная вечеря»  Леонардо да Винчи",
        isSold: false,
        price: 3000000,
      },
      {
        id: 3,
        image: "3.jpg",
        title: "«Сотворение Адама» Микеланджело",
        isSold: false,
        price: 3000000,
        priceOld: 6000000,
      },
      {
        id: 4,
        image: "4.jpg",
        title: "«Урок анатомии»  Рембрандт",
        isSold: true,
      },
    ],
    basket: [4],
  },
  mutations: {
    setImages(state: StoreState, payload: Array<CardType>) {
      state.images = payload;
    },
    setBasketItems(state: StoreState, payload: BasketPayload) {
      const newData = payload.clear ? [] : [...state.basket, ...payload.items];
      state.basket = [...new Set(newData)];
    },
  },
  actions: {
    addToBasket({ commit }, payload: BasketPayload) {
      return axios
        .get(API_URL)
        .then((res: any) => {
          commit("setBasketItems", payload);
          return res;
        })
        .catch((e) => console.error(e));
    },
  },
  modules: {},
});
