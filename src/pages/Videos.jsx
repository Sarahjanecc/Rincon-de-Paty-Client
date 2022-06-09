import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { getVideosService } from "../services/video.services";

const Videos = () => {
  const [allVideos, setAllVideos] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    try {
      const response = await getVideosService();
      setAllVideos(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (allVideos === null) {
    return <h3>... Loading</h3>;
  }

  return (
    <Layout>
      {allVideos !== null &&
        allVideos.map((eachVideo) => {
          return (
            <div key={eachVideo._id}>
              <h2>{eachVideo.title}</h2>
              <img src={eachVideo.img} />
              <a href={eachVideo.url}>See the video</a>
            </div>
          );
        })}
    </Layout>
  );
};

export default Videos;
