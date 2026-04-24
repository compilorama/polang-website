import './layout.styl';
import LocaleSelect from '@src/components/locale-select';
import Logo from '@src/components/logo';

const Layout = ({ children }) => {
  return (
    <div className="pg-layout">
      <Logo />
      <div className="pg-layout-content">
        {children}
      </div>
      <footer>
        <LocaleSelect />
      </footer>
    </div>
  );
};

export default Layout;
