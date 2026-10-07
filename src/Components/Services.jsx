
function Services() {
  return (
    <section className="bg-gray-50 px-8 py-20">

      <div className="max-w-7xl mx-auto">

        <p className="text-blue-600 font-semibold">
          OUR SERVICES
        </p>

        <h2 className="text-4xl font-bold mt-3 mb-10">
          Our medical services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src="https://framerusercontent.com/images/B4Rc39GW0ZOgFFOeSapzyp5tF3o.png?height=660&width=660"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Emergency Care
              </h3>

              <p className="text-gray-600">
                Our emergency department is available
                whenever you need medical help.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src="https://framerusercontent.com/images/Wc2Igy1XlkSwsPPbUDOUp4uUqzQ.png?height=1320&width=1200"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                General Medicine
              </h3>

              <p className="text-gray-600">
                Get professional medical treatment
                from our experienced doctors.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-3xl overflow-hidden">
            <img
              src="https://framerusercontent.com/images/u5KDmsEaFhyj2ja56OHXOHoA424.webp?height=958&width=1641"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Diagnostic Imaging
              </h3>

              <p className="text-gray-600">
                We use modern equipment to help doctors
                find and understand health problems.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;
