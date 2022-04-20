import { render } from '@testing-library/react';
import CheckItem from '../../../src/components/Molecules/CheckItem';

describe('CheckItem', () => {
  it('renders correctly', () => {
    const props = {
      prefData: [{ prefCode: 40, prefName: '和歌山県' }],
      onChange: () => {},
    };

    const tree = render(<CheckItem {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
