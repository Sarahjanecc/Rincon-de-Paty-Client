import React from "react";
import Layout from "../components/Layout";
import ReactPlayer from "react-player";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Videos() {
  const videoArr = [
    "https://www.youtube.com/watch?v=A4pAMUq0W5g&t=29s",
    "https://www.youtube.com/watch?v=S_KFDsENWac",
    "https://www.youtube.com/watch?v=RMgC4_RLbNI",
    "https://www.youtube.com/watch?v=SfxaVEWkfr8",
    "https://www.youtube.com/watch?v=JyzKMX56BBk",
    "https://www.youtube.com/watch?v=b7dFrdMPLgY",
    "https://www.youtube.com/watch?v=o9LAzzLKrTQ",
    "https://www.youtube.com/watch?v=SrrPMDX_PNM",
    "https://www.youtube.com/watch?v=iEHMc4rKTzY&t=17s",
  ];

  return (
    <Layout>
      <Row>
        {videoArr !== null &&
          videoArr.map((eachVideo) => {
            return (
              <Col sm={6} className="d-flex justify-content-center p-4">
                <ReactPlayer url={eachVideo} />
              </Col>
            );
          })}
      </Row>
    </Layout>
  );
}

export default Videos;
