import { Users, Filter, Coffee, Moon, Sun } from 'lucide-react';

export default function RoommateMatcher() {
    const roommates = [
        { id: 1, name: 'Siddharth', routine: 'Night Owl', cleanliness: 'Very Neat', noise: 'Quiet', lookingFor: '2 seater room' },
        { id: 2, name: 'Pooja', routine: 'Early Bird', cleanliness: 'Moderate', noise: 'Likes Music', lookingFor: '3 seater room' },
        { id: 3, name: 'Kunal', routine: 'Flexible', cleanliness: 'Neat', noise: 'Quiet', lookingFor: 'Single room flatmate' },
    ];

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2><Users style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Roommate Matcher</h2>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary"><Filter size={18} /> All Preferences</button>
                <button className="btn btn-secondary"><Moon size={18} /> Night Owls</button>
                <button className="btn btn-secondary"><Sun size={18} /> Early Birds</button>
                <button className="btn btn-secondary"><Coffee size={18} /> Clean Freaks</button>
            </div>

            <div className="grid-layout">
                {roommates.map(profile => (
                    <div key={profile.id} className="glass-card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {profile.name.charAt(0)}
                            </div>
                            {profile.name}
                        </h3>
                        <p><strong>Routine:</strong> {profile.routine}</p>
                        <p><strong>Cleanliness:</strong> {profile.cleanliness}</p>
                        <p><strong>Noise:</strong> {profile.noise}</p>
                        <p><strong>Looking For:</strong> {profile.lookingFor}</p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Message</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
