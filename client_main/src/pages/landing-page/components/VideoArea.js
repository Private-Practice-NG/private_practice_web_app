import React from 'react';
import videoPoster from '../../../assets/images/in-surgery.png';

function VideoArea() {
  return (
    <section className="video-area container">
      <div className="row">
        <div className="col-lg-8">
          <div className="video-wrapper">
            <video width="100%" height="100%" controls poster={videoPoster}>
              <source src="" type="" />
              <source src="" type="" />
              Opps!!! - Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-lg-4 text-wrapper">
          <h1>
            <span className="open-sans">THE</span> <br />
            <span className="montserrat">PROCESS</span>
          </h1>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            officiis, quibusdam expedita quos officia ipsa, consectetur aut
            accusantium saepe recusandae id inventore molestiae at sapiente
            libero nulla, fuga dignissimos nemo sit eius veritatis voluptatibus
            modi! Fugit maiores quaerat adipisci itaque unde minima accusantium
            cumque, explicabo excepturi asperiores odio labore? Saepe a illo
            ipsa voluptatem numquam vero temporibus dolores dolore velit
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoArea;
