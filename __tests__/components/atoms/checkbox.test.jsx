import { render } from '@testing-library/react';
import CheckBox from '../../../src/components/Atoms/CheckBox';

describe('CheckBox', () => {
  it('renders correctly', () => {
    const props = {
      name: '和歌山県',
      value: 40,
      onChange: () => {},
    };

    const tree = render(<CheckBox {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
