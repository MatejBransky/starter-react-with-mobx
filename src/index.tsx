import React from 'react';
import { render } from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react-lite';

type AppStateInterface = {
  timer: number;
  reset: () => void;
};

class AppState implements AppStateInterface {
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

type Props = {
  appState: AppStateInterface;
};

const TimerView = observer(({ appState }: Props) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

render(
  <div>
    <TimerView appState={new AppState()} />
  </div>,
  document.getElementById('app')
);
