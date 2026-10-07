function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold text-blue-600">Hospic</h1>

      <div className="flex gap-6 ">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Blog</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-3 rounded-full cursor-pointer">
        Book Appointment
      </button>
    </nav>
  ); 
}

export default Navbar;
