import sectionStyles from "../styles/HomeSection3.module.css";
import Image from "next/image";
import Meta from "./Meta";

const HomeSection2 = () => {
  return (
    <div className={sectionStyles.section}>
      <Meta />
      <div className={sectionStyles.container}>
        <div className={sectionStyles.frame}>
          <Image
            src="/assets/home-stranger-things.jpg"
            width={500}
            height={100}
            alt="stranger things picture"
          />
          <div className={sectionStyles.download}>
            <Image
              src="/assets/st-cover.png"
              width={55}
              height={0}
              alt="stranger things cover picture"
            />
            <div className={sectionStyles["download-status"]}>
              <p className={sectionStyles.pTag}>Stranger Things</p>
              <p className={sectionStyles.downTag}>Downloading...</p>
            </div>
            <div className={sectionStyles.icon}>
              <i className="fa-solid fa-download"></i>
            </div>
          </div>
        </div>

        <div className={sectionStyles["text-content"]}>
          <h2 className="base-heading">
            Download your shows to watch offline.
          </h2>
          <p className="base-text">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
