import './icon.styl';

export const Icon = ({ name, children, className, ...rest }) => {
  return (
    <div
      className={['pg-icon', `pg-icon-${name}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        {children}
      </svg>
    </div>
  );
};
