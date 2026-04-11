import './container.styl';
import { LocaleSelect } from '@compilorama/polang';

const Container = ({ children }) => {
  return (
    <div className="pd-container">
      <div className="pd-container-content">
        {children}
      </div>
      <footer>
        <LocaleSelect />
      </footer>
    </div>
  );
};

export default Container;
