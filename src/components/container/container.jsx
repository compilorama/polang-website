import './container.styl';

const Container = ({ children }) => {
  return (
    <div className="pd-container">
      {children}
    </div>
  );
};

export default Container;
