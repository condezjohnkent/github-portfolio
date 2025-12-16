// import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 items-center justify-center`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 sm:h-60 h-40 bg-gradient-to-b from-cyan-400/100 via-blue-500/80 to-purple-500/50 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]' />
        </div>

        <div className='justify-center '>
          <p className={`${styles.heroSubText} text-white-100`}>
            <span className={`${styles.textGradient}`}>S</span>oftware <span className={`${styles.textGradient}`}>D</span>eveloper
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className={`${styles.textGradient}`}>P</span>ORTFOLIO
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
