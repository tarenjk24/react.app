import { styles } from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100px] h-[100px] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
        </p>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
        </p>
    </div>
  </div>
);

export default GetStarted;
