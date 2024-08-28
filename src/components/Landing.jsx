import React from "react";

const Landing = () => {
  return (
    <div id="home"
      data-poster-url="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-poster-00001.jpg"
      data-video-urls="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-transcode.mp4,https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-transcode.webm"
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      className="LandingPage relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      <video
        id="09516fd7-c51b-141d-2b6e-6c69f28f74ca-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-poster-00001.jpg')`,
        }}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0"
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62486e0e275ea300b0bb80d0_15%20seconds-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
      <div className="relative bg-hero-transparent w-full h-full flex items-center justify-start lg:mx-32 sm:mx-10 z-10">
        <div className="twf-container px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-w-id="e04cfbbc-c687-cf90-d90b-4e76b4810bd1"
            className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 text-left leading-snug"
          >
            REACH&nbsp;NEW&nbsp;
            <br />
            HEIGHTS.
          </h1>
          <p
            data-w-id="0bb43f52-8070-3db7-bdc7-a1cf88bc3ce8"
            className="paragraph-4 text-white text-base mb-12 text-left"
          >
            Full-service talent management and digital marketing agency
            <br />
            <br />
            Achieve unprecedented results using our data-driven strategies
          </p>
          <a
            href="#"
            className="scroll-arrow-link margin-top-mobile w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62451d7a6e48bc025188aa4d_Arrow.svg"
              loading="lazy"
              className="transform hover:scale-105 transition-transform duration-300"
              data-w-id="1d1a0182-eb3d-5a6f-be78-e7d548af1ed4"
              alt="Scroll down arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
