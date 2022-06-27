import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href='/'>
          <a className="title">Home</a>
        </Link>
        <ul>
          <li>
            <Link href='/posts'>
              <a>All posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}