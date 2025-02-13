import './Navbar.css'
import Link from './Link'
function Navbar() {
  const x = 9; // Example value for x, you can replace it with your actual variable

  return (
    <>
      <div className={`box ${x > 10 ? 'rotate' : ''}`}></div>
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