import Image from "next/image";
import LapTop from "public/assets/laptop.jpg";
import Button from "../Utils/Button";
import Headers from "../Utils/Headers";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          src={LapTop}
          alt="Laptop analytics"
          width={500}
          className="mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-primary font-bold">
            Data analytics dashboard
          </p>
          <Headers>Manage Data Analytics Centrally</Headers>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repudiandae modi blanditiis inventore sunt magnam accusamus
            praesentium cupiditate, nam voluptatibus dolor nihil molestias
            tenetur ad voluptatem eaque culpa neque sint!
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
