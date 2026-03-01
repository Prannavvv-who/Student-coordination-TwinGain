import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Lightbulb, Map, Users, Gamepad2, Sun, Moon, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
    const location = useLocation();
    const [theme, setTheme] = useState('light');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Check local storage or system preference on load
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (systemDark) {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    async function handleLogout() {
        try {
            await logout();
            navigate('/auth');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    }

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Market', path: '/market', icon: <ShoppingBag size={20} /> },
        { name: 'Skills', path: '/skills', icon: <Lightbulb size={20} /> },
        { name: 'Travel', path: '/travel', icon: <Map size={20} /> },
        { name: 'Roommate', path: '/roommate', icon: <Users size={20} /> },
        { name: 'Activity', path: '/activity', icon: <Gamepad2 size={20} /> },
    ];

    return (
        <nav className="navbar">
            <div className="brand">
                <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>CampusConnect</h2>
            </div>

            <div className="desktop-nav nav-links" style={{ display: 'flex', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}

                <div style={{ borderLeft: '1px solid var(--border-color)', height: '24px', margin: '0 0.5rem' }}></div>

                {currentUser ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{currentUser.email}</span>
                        <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/auth" className="btn btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem' }}>
                        <User size={16} /> Login
                    </Link>
                )}

                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </nav>
    );
}
