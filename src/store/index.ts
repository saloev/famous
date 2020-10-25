import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [
      {
        image: "1.jpg",
        title: "«Рождение Венеры» Сандро Боттичелли",
        isSold: false,
        price: 1000000,
        priceOld: 2000000,
      },
      {
        image: "2.jpg",
        title: "«Тайная вечеря»  Леонардо да Винчи",
        isSold: false,
        price: 3000000,
      },
      {
        image: "3.jpg",
        title: "«Сотворение Адама» Микеланджело",
        isSold: false,
        price: 3000000,
        priceOld: 6000000,
        isInBasket: true,
      },
      {
        image: "4.jpg",
        title: "«Урок анатомии»  Рембрандт",
        isSold: true,
      },
    ],
    basket: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
