export interface CardType {
  id: number;
  image: string;
  title: string;
  isSold: boolean;
  price?: number;
  priceOld?: number;
  isInBasket?: boolean;
  isLoading?: boolean;
}

export interface StoreState {
  images: Array<CardType>;
  basket: Array<number>;
}

export interface BasketPayload {
  clear?: boolean;
  items: Array<number>;
}
