import Link from "next/link";
import Burger from "./burger";
const myNav = () => {
  return (
    <nav className="nav">
      <span className="logo">
        <Link href="/">
          <a>Uberman</a>
        </Link>
      </span>
      <ul className="navlinks">
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/programs">
            <a>programs</a>
          </Link>
        </li>
        <li>
          <Link href="/gains">
            <a>gains</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>login</a>
          </Link>
        </li>
      </ul>
      <div className="burger">
        <Burger />
      </div>

      <style jsx>
        {`
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 8vh;
            min-width: 100%;
            background-color: #1b262c;
          }
          .logo {
            font-size: 1.5em;
            padding-left: 1em;
          }
          .logo a {
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.3em;
          }
          .navlinks {
            display: flex;
            // align-items: center;
            justify-content: space-around;
            list-style-type: none;
            width: 30%;
          }
          li {
            padding: 6px 8px;
            border-radius: 0.2em;
          }
          li:hover {
            background-color: #0f4c75;
          }
          a {
            text-decoration: none;
            color: black;
            letter-spacing: 0.1em;
            font-weight: bold;
            color: #bbe1fa;
          }
          .burger {
            display: none;
          }
          @media screen and (max-width: 1024px) {
            .navlinks {
              width: 60%;
            }
            .burger {
              display: none;
            }
          }
          @media screen and (max-width: 768px) {
            .navlinks {
              display: none;
            }
            .burger {
              display: block;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default myNav;
