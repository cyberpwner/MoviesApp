/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

function Error({ message = 'An error occured', styles = '' }) {
  return (
    <h1 className={`text-5xl font-bold text-yellow-500 text-center ${styles}`}>
      {message}
    </h1>
  );
}

Error.propTypes = {
  message: PropTypes.string,
  styles: PropTypes.string,
};

export default Error;
