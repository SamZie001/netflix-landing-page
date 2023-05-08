import sectionStyles from "../styles/HomeSection2.module.css";
import Image from "next/image";

const HomeSection2 = () => {
  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles["text-content"]}>
          <h2 className="base-heading">Enjoy on your TV.</h2>
          <p className="base-text">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className={sectionStyles.video}>
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
            width={365}
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
          <Image src="/assets/video-frame.png" width={500} height={0} alt="video-frame"/>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
