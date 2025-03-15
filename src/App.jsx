import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./Sections";
import Nav from './Components/Nav'
const App = () => {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:p-36 wide:padding-r padding-b"><Hero /></section>
      <section className="padding w-full flex justify-center"><PopularProducts /></section>
      <section className="padding"><SuperQuality /></section>
      <section className="padding-x py-10"><Services /></section>
      <section className="padding"><SpecialOffer /></section>
      <section className="bg-pale-blue padding"><CustomerReviews /></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
      <section className="bg-black padding-x padding-t pb-10"><Footer /></section>
    </main>
  );
};

export default App;
