import PropTypes from 'prop-types';

function Video({ url }) {
  if (!url.trim()) {
    return null;
  }

  return (
    <iframe
      className="w-full min-h-96 xl:h-screen"
      src={url}
      title="movie trailer"
    />
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
