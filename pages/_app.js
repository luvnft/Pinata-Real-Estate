import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import '../styles/heroes.css';
import 'sf-font';
import Image from 'next/image'; // Added import for Next.js Image component
import Link from 'next/link'; // Added import for Next.js Link component

export default function App({ Component, pageProps }) {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-start justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {/* Replaced img tag with Next.js Image component */}
        <Image src="/pinatalogo.png" alt="Pinata Logo" width={50} height={50} className='col-md-1 px-2' />

        {/* Replaced <a> tag with Next.js Link component */}
        <Link href="/" className="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none">
          {/* Add content here if needed */}
        </Link>

        <ul className="nav col-10 col-md-auto mb-2 justify-content-center mb-md-1">
          <li>
            {/* Replaced <a> tag with Next.js Link component */}
            <Link href="/" className="nav-link px-4 link-dark" style={{ fontFamily: 'SF Pro Display', fontWeight: "bold", fontSize: '20px' }}>
              Listed
            </Link>
          </li>
          <li>
            {/* Replaced <a> tag with Next.js Link component */}
            <Link href="/list" className="nav-link px-4 link-dark" style={{ fontFamily: 'SF Pro Display', fontWeight: "bold", fontSize: '20px' }}>
              List My Property!
            </Link>
          </li>
        </ul>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
