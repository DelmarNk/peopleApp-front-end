import { Link } from "react-router-dom"

function Header() {
  return (
    <header style={{
        height: '480px',
        overflow: 'hidden'
        }}>
        <nav className="nav">
            <Link to={'/'}><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" /></Link>
            <div>People App</div>
        </nav>
    </header>
  )
}

export default Header