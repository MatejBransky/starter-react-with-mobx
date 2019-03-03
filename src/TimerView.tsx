import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import TimerContext from './TimerStore';

const TimerView = observer(() => {
  const timerStore = useContext(TimerContext);

  return (
    <button onClick={timerStore.reset}>
      Seconds passed: {timerStore.timer}
    </button>
  );
});

export default TimerView;
