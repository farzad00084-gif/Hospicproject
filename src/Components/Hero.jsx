function Hero() {
  return (
    <div className="px-8 py-8">
      <div
        className="h-[550px] rounded-3xl bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/pZWEUfZK7goYm8x4NLlezXMQ1FY.png?height=970&width=1600')",
        }}
      >
        <div className="text-white max-w-xl ml-10">
          <p className="mb-4">Trusted medical care</p>

          <h1 className="text-5xl font-bold mb-5">
            Exceptional care.
            <br />
            Better health.
          </h1>

          <p className="text-lg mb-7">
            We provide quality healthcare with experienced doctors and modern
            medical facilities.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-full cursor-pointer">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
