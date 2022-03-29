import PropTypes from "prop-types";

const YoutubeEmbed = (props) => {
  return (
    <div>
      <iframe
        className="video-frame"
        src={`https://www.youtube.com/embed/${props.embedId}`}
        frameBorder="0"
        allow="accelerometer; encrypted-media"
        allowFullScreen
        title="Embedded Youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
