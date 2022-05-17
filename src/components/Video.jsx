import YoutubeEmbed from "./YoutubeEmbed";
import { useEffect } from "react";

const Video = (props) => {
  return (
    <>
      {props.title && (
        <div>
          <h2>{props.title}</h2>
          <YoutubeEmbed embedId={props.url} />
        </div>
      )}
    </>
  );
};

export default Video;
