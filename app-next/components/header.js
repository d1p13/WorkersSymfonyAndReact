import Link from 'next/link'
import nav from '../styles/nav-footer.module.css'

const Header = () => {
    return (
        <header>
            <nav className={`${nav.bg} navbar navbar-expand-lg`}>
                <div className="container">
                    <Link className="navbar-brand" href="/">Workers</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link className="nav-link" href="/">Home</Link></li>
                            <li><Link className="nav-link" href="/all-workers">All Workers</Link></li>
                        </ul>
                        <Link href="/" className="btn btn-outline-secondary">Logout</Link>
                        <Link href="/auth/sign-in" className="btn btn-primary">Sign In</Link>
                        <Link href="/auth/registration" className="btn btn-outline-secondary">Registration</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;