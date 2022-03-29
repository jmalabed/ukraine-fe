import YoutubeEmbed from "./YoutubeEmbed";
import { useEffect } from "react";

const Video = (props) => {
  return (
    <>
      {props.title && (
        <>
          <h2>{props.title}</h2>
          <YoutubeEmbed embedId={props.embedId} />
          <p>Short description possibly located here</p>
        </>
      )}
    </>
  );
};

export default Video;
