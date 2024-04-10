import { bannerImages } from "../../utilities/banner.js";
import BannerImageSlide from "../BannerImageSlide/BannerImageSlide";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Declutter Market for New and Used Items</h1>
      <div>
        <BannerImageSlide images={bannerImages} />
      </div>
      <p>
        DonoDeclutter envisions creating a cleaner, more organized, and socially
        responsible society, where transitioning individuals can effortlessly
        manage their belongings, contributing to a sustainable cycle of use and
        reuse.
      </p>
    </section>
  );
}
