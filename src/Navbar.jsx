import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className="top-nav" style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '1rem 2rem',
            zIndex: 1000,
            width: 'auto'
        }}>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar