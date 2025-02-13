import './Navbar.css'
import Link from './Link'
function Navbar() {
  const x = 11; // Example value for x, you can replace it with your actual variable

  return (
    <>
      <div className={`h-40 w-40 ${x > 10 ? ' bg-sky-500 rotate' : ' rotate-45 bg-red-500'}`}></div>
      <nav>
        <ul style={{ backgroundColor: 'red' }} className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link>linkette</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;