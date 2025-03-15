import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex  max-sm:flex-col max-md:flex-cols max-lg:flex-col flex-row w-full align-top justify-evenly gap-10">
      <div className="max-md:w-[100%] max-lg:w-[100%] w-[50%] flex flex-col justify-evenly gap-3 max-md:justify-center">
        <h1 className="font-montserrat text-4xl font-bold -mt-8 w-full text-start flex-wrap">
          We Provide You <span className="text-coral-red font-serif">Super Quality</span>{" "}
          Shoes
        </h1>
        <div className="w-[90%] relative flex flex-col max-md:gap-3 gap-7">
          <p className="text-xl text-slate-500 text-start">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-xl text-slate-500 text-start"> Our
          dedication to detail and excellence ensures your satisfaction</p>
          <button className="bg-coral-red sm:w-[65%] md:w-[50%] lg:w-[40%] w-[40%] h-12 text-slate-50 rounded-full text-xl font-light px-1">View details</button>
        </div>
      </div>
      <div className="max-sm:shoe-8-mid max-md:shoe-8-mid max-lg:shoe-8-mid w-[50%] max-xl:-mr-15"> 
        <img src={shoe8} alt="" srcset="" />
      </div>
    </section>
  );
};

export default SuperQuality;
