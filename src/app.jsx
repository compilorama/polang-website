import { I18nProvider } from '@compilorama/polang';
import { RouterProvider } from 'react-router';
import Layout from '@src/components/layout';
import router from '@src/router';

const locales = [
  { code: 'en-US', name: 'English US' },
  { code: 'pt-BR', name: 'Português BR' },
];

const App = () => (
  <I18nProvider locales={locales}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </I18nProvider>
);

export default App;
