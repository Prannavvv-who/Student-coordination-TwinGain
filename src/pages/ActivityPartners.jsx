import { Gamepad2, Calendar, MapPin, Plus } from 'lucide-react';

export default function ActivityPartners() {
    const activities = [
        { id: 1, sport: 'Badminton', level: 'Intermediate', time: 'Today 6:00 PM', location: 'SAC Court 2', user: 'Vikas', playersNeeded: 1 },
        { id: 2, sport: 'FIFA 23', level: 'Any', time: 'Tonight 9:00 PM', location: 'Hostel 3 Common Room', user: 'Amit', playersNeeded: 3 },
        { id: 3, sport: 'Basketball', level: 'Beginner', time: 'Tomorrow 6:00 AM', location: 'Main Court 1', user: 'Sneha', playersNeeded: 4 },
    ];

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2><Gamepad2 style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Activity Partners</h2>
                <button className="btn btn-primary"><Plus size={18} /> Host Activity</button>
            </div>

            <div className="grid-layout">
                {activities.map(activity => (
                    <div key={activity.id} className="glass-card">
                        <h3>{activity.sport}</h3>
                        <p><Calendar size={16} style={{ display: 'inline', marginRight: '5px' }} /> <strong>Time:</strong> {activity.time}</p>
                        <p><MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} /> <strong>Location:</strong> {activity.location}</p>
                        <p><strong>Level:</strong> {activity.level}</p>
                        <p><strong>Looking for:</strong> {activity.playersNeeded} more player(s)</p>
                        <p><strong>Host:</strong> {activity.user}</p>
                        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem', borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>I'm In!</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
