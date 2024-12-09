import PropTypes from 'prop-types';

const Input = ({ jm, stitek, surname }) => (
  <>
    <label htmlFor={jm}>
      <span className="stitek">{stitek}</span>
    </label>
    <input name={jm} id={jm} value={surname} />
  </>
);
Input.propTypes = {
  jm: PropTypes.string,
  stitek: PropTypes.string,
  surname: PropTypes.string,
};
export default Input;
