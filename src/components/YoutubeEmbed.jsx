import PropTypes from "prop-types";

const YoutubeEmbed = (props) => {
  return (
    <div>
      <iframe
        width="853"
        height="480"
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
