
const Subscribe = () => {
  return (
   <section className="w-full flex  justify-evenly items-center">
    <div className="flex max-md:flex-col lg:flex-row lg:justify-end lg:w-[100%] ig:justify-items-end gap-10">
      <div className="w-1/2">
      <h1 className="text-4xl font-bold font-serif flex justify-start">Sign Up for Updates & Newsletter</h1>
      </div>
      <div className="w-1/2">
       <div className="border border-gray-900 rounded-full h-14 w-full lg:h-20 flex items-center justify-between px-6 py-3">
        <input className="border-none outline-none" type="text" placeholder="subscriben@nike.com" />
        <button className="bg-coral-red text-current w-28 h-10 lg:h-14 lg:w-36 rounded-full">Sign Up</button>
       </div>
      </div>
    </div>
   </section>
  )
}

export default Subscribe
