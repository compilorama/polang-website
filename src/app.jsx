import { I18nProvider } from '@compilorama/polang';
import { RouterProvider } from 'react-router';
import Container from '@src/components/container';
import router from '@src/router';

const locales = [
  { code: 'en-US', name: 'English US' },
  { code: 'pt-BR', name: 'Português BR' },
];

const App = () => (
  <I18nProvider locales={locales}>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </I18nProvider>
);

export default App;
