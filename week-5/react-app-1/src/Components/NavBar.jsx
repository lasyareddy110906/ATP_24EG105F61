function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      
      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex gap-6">
          <li >Login</li>
          <li >Register</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  );
}

export default NavBar;