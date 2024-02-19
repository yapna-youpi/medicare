import React from "react";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help many people to get a choice of god professional.
                </h1>
                <p className="text_para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  quo molestiae doloremque dolorem sed, dolores sint ducimus
                  facere consequatur vel fugit laboriosam minima architecto
                  esse? Ullam quidem deleniti aliquam nisi.
                </p>

                <button className="btn">Request an appointement</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
