import { createContext } from 'react';
import { observable, action } from 'mobx';

export class TimerStore {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
}

export default createContext(new TimerStore());
