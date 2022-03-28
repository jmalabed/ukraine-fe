import YoutubeEmbed from "./YoutubeEmbed";
import { useEffect } from "react";

const Video = (props) => {
  return (
    <div>
      {props.title && (
        <>
          <h2>{props.title}</h2>
          <YoutubeEmbed embedId={props.embedId} />
          <p>Short description possibly located here</p>
        </>
      )}
    </div>
  );
};

export default Video;
