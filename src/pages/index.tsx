export default function Home() {
  return (
    <div className="">
      <div className="hero">
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="">
            <img src="nav/navIcon.png" alt="" className="h-87 w-115" />
          </div>
          <div>
            <ul className="flex">
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Executives</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <h3>Green Explore Society</h3>
        <button>Explore</button>
      </div>
    </div>
  );
}
