import { render } from '@testing-library/react';
import Graph from '../../../src/components/organisms/Graph';
import Highcharts from 'highcharts';

describe('CheckItem', () => {
  it('renders correctly', () => {
    const props = {
      name: '和歌山県',
      value: 40,
      onChange: () => {},
    };

    if (process.env.NODE_ENV === 'test') {
      Highcharts.useSerialIds(true);
    }

    const tree = render(<Graph {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
