import { products } from "../constantsFolder/index"
import { star } from "../assets/icons"

const PopularProducts = () => {
  return (
   <section className="flex flex-col w-full h-full gap-6  flex-wrap justify-center">
    <div className="flex flex-col gap-8 text-start relative top-0 mb-10">
      <h1 className="font-montserrat text-4xl font-bold max-lg:text-3xl">Our <span className="font-palanquin text-coral-red">Popular</span> Products</h1>
      <p className="flex flex-col text-2xl max-sm:text-1xl max-md:text-2xl max-lg:text-2xl max-lg:max-w-lg text-slate-500 max-lg:-mt-2">Experience top-notch quality and style with our sought-after selections.Discover a world of comfort, design, and value</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {products.map((item) => (
        <div className="w-full">
          <img src={item.imgURL} alt="ImageURL"/>
          <h2 className="flex flex-col flex-wrap mt-10 gap-2 text-2xl sm:text-sm md:text-xl">
           <span className="flex flex-row gap-3"> <img src={star} alt="Star"/><h2 className="text-[1.5rem] text-slate-500 font-montserrat">(4.5)</h2></span>
           <h2 className="text-2xl text-start font-montserrat font-bold flex flex-col gap-3">
            <span>{item.name} </span>
            <span className="text-coral-red">{item.price}</span>
            </h2>
          </h2>
        </div>
      ))}
      </div>
   </section>
  )
}

export default PopularProducts
// {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     }