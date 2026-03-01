import { Link } from 'react-router-dom';
import { ShoppingBag, Lightbulb, Map, Users, Gamepad2 } from 'lucide-react';

export default function Home() {
    const modules = [
        { title: 'Item Exchange', desc: 'Trade aprons, calculators, question papers.', icon: <ShoppingBag size={40} className="text-primary" />, path: '/market' },
        { title: 'Skill Connect', desc: 'Find people with essential skills.', icon: <Lightbulb size={40} className="text-secondary" />, path: '/skills' },
        { title: 'Travel Buddies', desc: 'Travel together with peers to home/station.', icon: <Map size={40} className="text-success" />, path: '/travel' },
        { title: 'Roommate Matcher', desc: 'Find hostel mates with similar routines.', icon: <Users size={40} className="text-warning" />, path: '/roommate' },
        { title: 'Activity Partners', desc: 'Find someone to play sports / games.', icon: <Gamepad2 size={40} className="text-danger" />, path: '/activity' },
    ];

    return (
        <div className="animate-fade-in">
            <header style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
                <h1>Welcome to CampusConnect</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Your ultimate student coordination app. Connect with peers to exchange items, find roommates, travel together, and more!
                </p>
            </header>

            <div className="grid-layout">
                {modules.map((mod, idx) => (
                    <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{mod.icon}</div>
                        <h3>{mod.title}</h3>
                        <p>{mod.desc}</p>
                        <Link to={mod.path} className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', textDecoration: 'none' }}>
                            Explore
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
