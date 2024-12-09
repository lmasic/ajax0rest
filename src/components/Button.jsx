import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({
  children = 'Sem rozhodně neklikat',
  className,
  large = false,
  type = 'button',
  variant,
  onClick = () => { },
}) => (
  <button
    type={type ? 'submit' : 'button'}
    className={clsx('react-button', variant, large && 'large', className)}
    onClick={() => onClick(Date.now())}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  large: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
