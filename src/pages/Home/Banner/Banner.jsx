const Banner = () => {
  return (
    <div
      className="hero min-h-min md:min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/6YqmHj6/job-hiring.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-2 md:mb-5 text-xl md:text-5xl font-bold">Hiring or Find your next job</h1>
          <p className="mb-2 md:mb-5 text-xs md:text-base">
          Each month, more than 2 million job seekers turn to website in their search for work, making over 100,000 applications every single day
          </p>
          
          <div class="relative w-3/4 mx-auto">
          <input type="text" name="search" placeholder="Industry  |  Location  |  Keyword" className="input input-bordered rounded-3xl w-full h-8 md:h-12 text-xs md:text-base text-black" />
          <button class="absolute bg-[#797DFC] btn btn-sm rounded-2xl md:rounded-3xl px-2 md:px-8 text-white top-0 md:top-1 right-0 md:right-1 text-xs md:text-base h-4 md:h-10">Search</button>
        </div> 
        <div className="flex justify-center items-center mt-2 md:mt-6 gap-2 md:gap-8">
        <div>
          <h3 className="text-sm md:text-2xl text-center font-semibold">250k+</h3>
          <p className="text-xs md:text-base text-center">Daily jobs posted</p>
        </div>
        <div>
          <h3 className="text-sm md:text-2xl text-center font-semibold">15k+</h3>
          <p className="text-xs md:text-base text-center">Recruiters</p>
        </div>
        <div>
          <h3 className="text-sm md:text-2xl text-center font-semibold">10k+</h3>
          <p className="text-xs md:text-base text-center">Freelancers</p>
        </div>
        <div>
          <h3 className="text-sm md:text-2xl text-center font-semibold">25k+</h3>
          <p className="text-xs md:text-base text-center">Blog Tips</p>
        </div>
        </div>
        </div>        
      </div>      
    </div>
  );
};

export default Banner;
