import { star } from "../assets/icons";
import { reviews } from "../constants/index";

const CustomerReviews = () => {
  return (
    <section className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-wrap flex-col items-center justify-center -mt-10 gap-y-2">
        <h1 className="text-4xl font-serif text-center font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <p className="text-center text-[19px] text-gray-700">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center w-full gap-7">
        {reviews.map((item) => (
          <div className="flex flex-col items-center justify-center w-full gap-5 text-xl font-montserrat text-gray-600">
            <img className="rounded-full" height={120} width={120} src={item.imgURL} alt="Review person" />
            <p className="review-feedback text-center w-[50%]">{item.feedback}</p>
            <p className="flex flext-row"><img src={star} alt="Star Image"/>{item.rating}</p>
            <p className="font-bold -mt-2 text-[25px]">{item.customerName}</p>
          </div>

        ))}
        <div>
        </div>
      </div>
    </section>
  );
};
//  const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     }
export default CustomerReviews;
