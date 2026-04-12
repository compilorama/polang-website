import { useTranslation } from '@compilorama/polang';
import Counter from '@src/components/counter'
import translations from './home.t';

const Home = () => {
  const { t } = useTranslation(translations);
  console.log('rendered Home')
  return (
    <>
      <h1>{t('heading')}</h1>
      <p>{t('description')}</p>
      <Counter />
    </>
  );
};

export default Home;
