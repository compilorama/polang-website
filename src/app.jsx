import { I18nProvider } from '@compilorama/polang';
import { RouterProvider } from 'react-router';
import Layout from '@src/components/layout';
import router from '@src/router';

const locales = [
  { code: 'en-US', name: 'English US' },
  { code: 'pt-BR', name: 'Português BR' },
  { code: 'es-ES', name: 'Español ES' },
  { code: 'fr-FR', name: 'Français FR' },
  { code: 'de-DE', name: 'Deutsch DE' },
  { code: 'nl-NL', name: 'Nederlands NL' },
  { code: 'it-IT', name: 'Italiano IT' },
  { code: 'da-DK', name: 'Dansk DK' },
  { code: 'sv-SE', name: 'Svenska SE' },
  { code: 'nb-NO', name: 'Norsk NO' },
  { code: 'ru-RU', name: 'Русский RU' },
  { code: 'hi-IN', name: 'हिन्दी IN' },
  { code: 'zh-CN', name: '中文 CN' },
  { code: 'ja-JP', name: '日本語 JP' },
];

const App = () => (
  <I18nProvider locales={locales}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </I18nProvider>
);

export default App;
