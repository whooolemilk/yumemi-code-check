import { render } from '@testing-library/react';
import Home from '../../src/pages/index';
import Highcharts from 'highcharts';

describe('Home', () => {
  it('renders correctly', () => {
    if (process.env.NODE_ENV === 'test') {
      Highcharts.useSerialIds(true);
    }

    const tree = render(<Home />);

    expect(tree).toMatchSnapshot();
  });
});
