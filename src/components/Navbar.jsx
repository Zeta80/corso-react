import './Navbar.css'
function Navbar() {
  const x = 11; // Example value for x, you can replace it with your actual variable

  return (
    <>
      <div className={`h-40 w-40 ${x > 10 ? ' bg-sky-500 rotate' : ' rotate-45 bg-red-500'}`}></div>
      <nav>
        <ul style={{ backgroundColor: 'red' }} className='nav-links'>
          <li>
            <a to='/'>Home</a>
          </li>
          <li>
            <a>linkette</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;