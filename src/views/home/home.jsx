import './home.styl';
import { useTranslation } from '@compilorama/polang';
import DocsLink from '@src/components/docs-link';
import translations from './home.t';

const Home = () => {
  const { t } = useTranslation(translations);

  return (
    <div className='pg-home'>
      <h1 className='pg-home-heading'>{t('heading')}</h1>
      <p className='pg-home-description'>
        {t('description', {
          hook: <strong>{t('description_hook')}</strong>,
          provider: <strong>{t('description_provider')}</strong>,
          selector: <strong>{t('description_selector')}</strong>,
        })}
      </p>
      <DocsLink />
    </div>
  );
};

export default Home;
