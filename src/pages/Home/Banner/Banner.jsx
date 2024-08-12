const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Job Tracking Link</h1>
          <p className="mb-5">
          A tracking link is a unique job post URL that takes the candidates to your job application page or your careers website. The only part that stands out is at the end of the job post URL is the tracking identifier or source.
          </p>
          <button className="btn btn-primary">Get New Job</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
