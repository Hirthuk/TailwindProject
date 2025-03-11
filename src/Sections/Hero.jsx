import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex xl:flex-row flex-col gap-10 justify-center max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-montserrat text-coral-red">Check out our collections</p>
      <h1>
        <span>The New Arrival</span>
        <br />
        <span>Nike</span>
        Shoes
      </h1>
      <p>
        Discover the awesome collection and affordabl shoe collections
        like never before in Madurai.
      </p>
      <Button label="Shop now" iconURL= {arrowRight}/>
      <div className="flex justify-starts items-start mt-20 gap-16 flex-wrap">
        {statistics.map((stat,index)=> (
          <div key={index}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Hero;
