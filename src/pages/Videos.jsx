import React from "react";
import Layout from "../components/Layout";
import ReactPlayer from "react-player";

function Videos() {
  const videoArr = [
    "https://www.youtube.com/watch?v=S_KFDsENWac",
    "https://www.youtube.com/watch?v=RMgC4_RLbNI",
    "https://www.youtube.com/watch?v=SfxaVEWkfr8",
    "https://www.youtube.com/watch?v=JyzKMX56BBk",
  ];

  return (
    <Layout>
      <div>
        <h2>Videos</h2>

        {videoArr !== null &&
          videoArr.map((eachVideo) => {
            return <ReactPlayer url={eachVideo} />;
          })}
      </div>
    </Layout>
  );
}

export default Videos;
