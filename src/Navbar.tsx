const Navbar = () => {
  return (
    <nav className="w-full mb-4 bg-gray-800">
      <div className="container pt-4 pb-4 mx-auto flex gap-4">
        <h2 className="text-xl font-medium text-gray-300"><a href="#">Moments</a></h2>
        <ul className="list-none flex">
          <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><a href="#">All moments</a></li>
          <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><a href="#">Favorites</a></li>
        </ul>
        <form action="">
          <button>New moment</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
