import PropTypes from 'prop-types';

function Video({ url }) {
  return <iframe className="w-full h-screen" src={url} title="movie trailer" />;
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
