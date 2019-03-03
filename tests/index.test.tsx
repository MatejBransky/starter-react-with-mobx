import React from 'react';
import { render } from 'react-testing-library';
import TimerView from '@/TimerView';

test('TimerView', () => {
  const { debug } = render(<TimerView />);
  debug();
});
