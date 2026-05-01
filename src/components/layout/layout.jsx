import './layout.styl';
import { useTranslation } from '@compilorama/polang';
import spaceVideoUrl from '@src/images/space.mp4';
import LocaleSelect from '@src/components/locale-select';
import Logo from '@src/components/logo';
import translations from './layout.t';

const Layout = ({ children }) => {
  const { t } = useTranslation(translations);

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
          <LocaleSelect aria-label={t('language')}/>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
