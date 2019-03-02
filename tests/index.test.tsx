import React from 'react';
import { render } from 'react-testing-library';
import Foo from '@/Foo';

test('Foo', () => {
  const { debug } = render(<Foo />);
  debug();
});
