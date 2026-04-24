import './layout.styl';
import spaceVideoUrl from '@src/images/space.mp4';
import LocaleSelect from '@src/components/locale-select';
import Logo from '@src/components/logo';

const Layout = ({ children }) => {
  return (
    <div className="pg-layout">
      <video
        className="pg-layout-bg"
        src={spaceVideoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="pg-layout-content-wrapper">
        <Logo />
        <div className="pg-layout-content">
          {children}
        </div>
        <footer>
          <LocaleSelect />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
