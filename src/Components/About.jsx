function About() {
  return (
    <section className="px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-3">ABOUT US</p>

          <h2 className="text-4xl font-bold mb-5">We care about your health</h2>

          <p className="text-gray-600 leading-7 mb-6">
            Our hospital provides professional healthcare with experienced
            doctors and modern facilities. We always try to make our patients
            feel comfortable and safe.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer">
            Learn More
          </button>
        </div>

        <div>
          <img
            src="https://framerusercontent.com/images/Wc2Igy1XlkSwsPPbUDOUp4uUqzQ.png?height=1320&width=1200"
            alt="Doctor and patient"
            className="rounded-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
