import { render } from '@testing-library/react';
import LineGraph from '../../../src/components/molecules/LineGraph';
import Highcharts from 'highcharts';

describe('LineGraph', () => {
  it('renders correctly', () => {
    const props = {
      data: [
        {
          type: 'line',
          name: '和歌山県',
          data: [
            3443176, 4430743, 5472247, 6397748, 6924348, 7431974, 7980391,
            8245900, 8489974, 8791597, 9048331, 9126214, 9141394, 9069562,
            8933474, 8750958, 8541016, 8312524,
          ],
        },
      ],
    };

    if (process.env.NODE_ENV === 'test') {
      Highcharts.useSerialIds(true);
    }

    const tree = render(<LineGraph {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
