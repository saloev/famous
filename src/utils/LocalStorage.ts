import { LS_KEY } from "@/Config";

export default class LS {
  static save(data: Array<number>) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  }

  static get(key: string = LS_KEY) {
    const val = localStorage.getItem(key);
    return val && JSON.parse(val);
  }
}
