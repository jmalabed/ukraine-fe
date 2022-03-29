import { useState, useEffect } from "react";
import Video from "../components/Video";

const Videos = (props) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const allVideos = await fetch("https://ukrainebe.herokuapp.com/video");
      const parsedVideos = await allVideos.json();
      setVideos(parsedVideos);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const vidList =
    videos.length > 0 ? (
      videos.map((vid) => (
        <>
          <Video title={vid.title} url={vid.url} />
        </>
      ))
    ) : (
      <>
        <p>No videos loaded :(</p>
        <p>
          Please add the finished URL's to the{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1avr1swLuMXuCaM1h3CtYi9OWcTOYc7oQMwg2epe9CB8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            google doc
          </a>
          .
        </p>
        <Video />
      </>
    );

  return (
    <div>
      <h1 className="header d-flex">Videos</h1>
      {vidList}
      <Video />
    </div>
  );
};
export default Videos;
