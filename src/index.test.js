import { screen, act } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    act(() => {
      require('./index.jsx');
    });
  });

  it('should render app', () => {
    expect(screen.getByRole('heading', { name: 'Polang' })).toBeInTheDocument();
  });
});
