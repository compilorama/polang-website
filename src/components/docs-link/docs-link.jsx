import './docs-link.styl';
import { useTranslation } from '@compilorama/polang';
import { GithubIcon } from '@src/icons/github';
import translations from './docs-link.t';

const DocsLink = () => {
  const { t } = useTranslation(translations);

  return (
    <a
      className='pg-docs-link'
      href={t('doc_url')}
      rel='noopener noreferrer'
      target='_blank'
    >
      <GithubIcon />
      {t('label')}
    </a>
  );
};

export default DocsLink;
