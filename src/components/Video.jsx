import YoutubeEmbed from "./YoutubeEmbed";

const Video = (props) => {
  const fProps = {
    embedId: "B1CPE6WWsAQ",
    title: "Dogs Sample Video",
  };
  return (
    <div>
      <h1>I am a video component</h1>
      <h2>{fProps.title}</h2>
      <YoutubeEmbed embedId={fProps.embedId} />
      <p>Short description possibly located here</p>
    </div>
  );
};

export default Video;
