import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex flex-row w-full gap-[10%] align-top">
      <div className="w-[50%] flex flex-col flex-wrap justify-evenly">
        <h1 className="font-montserrat text-4xl font-bold -mt-7">We Provide You Super Quality Shoes</h1>
        <p>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
          <br />
          Our dedication to detail and excellence ensures your satisfaction</p>
          <button className="bg-sky-500">View details</button>
      </div>
      <div className="w-[50%]">
        <img src={shoe8} alt="" srcset="" />
      </div>
    </section>
  )
}

export default SuperQuality
