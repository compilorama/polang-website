import './home.styl';
import { useTranslation } from '@compilorama/polang';
import translations from './home.t';

const Home = () => {
  const { t } = useTranslation(translations);
  return (
    <>
      <h1>{t('heading')}</h1>
      <p>{t('description')}</p>
    </>
  );
};

export default Home;
