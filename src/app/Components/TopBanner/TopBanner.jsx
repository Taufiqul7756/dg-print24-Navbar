import React from "react";

const TopBanner = () => {
  return (
    <section className="bg-[#282828] h-[50px] text-white hidden xl:block text-lg">
      <div className="flex justify-between items-center h-full mx-auto w-full lg:pl-32 2xl:pl-6 z-50 py-2">
        <div className="flex-1 text-center">
          <p>25% off for new customers, use DG24 at checkout</p>
        </div>

        <div className="flex-none w-1/6">
          <p>1+800 985 8916</p>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
