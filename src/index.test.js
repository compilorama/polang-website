import { screen, act } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    act(() => {
      require('./index.jsx');
    });
  });

  it('should render app', () => {
    expect(screen.getByRole('img', { name: 'Polang\'s logo' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'A tiny i18n library for small React apps' })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Language' })).toBeInTheDocument();
  });
});
