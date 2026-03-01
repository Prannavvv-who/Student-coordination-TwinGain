import { MapPin, Search, PlusCircle, Car } from 'lucide-react';

export default function TravelBuddies() {
    const rides = [
        { id: 1, to: 'Railway Station', from: 'Campus Main Gate', time: 'Friday 4:00 PM', seats: 2, user: 'Arjun', vehicle: 'Cab' },
        { id: 2, to: 'Airport', from: 'Campus Hostel 4', time: 'Saturday 8:00 AM', seats: 1, user: 'Neha', vehicle: 'Uber XL' },
        { id: 3, to: 'City Mall', from: 'Campus South Gate', time: 'Today 6:00 PM', seats: 3, user: 'Rohan', vehicle: 'Auto' },
    ];

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2><Car style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Travel Buddies</h2>
                <button className="btn btn-primary"><PlusCircle size={18} /> Offer a Ride / Share Fare</button>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Where are you going?"
                        style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }}
                    />
                    <button className="btn btn-secondary"><Search size={18} /></button>
                </div>
            </div>

            <div className="grid-layout">
                {rides.map(ride => (
                    <div key={ride.id} className="glass-card">
                        <h3>{ride.to}</h3>
                        <p><MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} /> <strong>From:</strong> {ride.from}</p>
                        <p><strong>Time:</strong> {ride.time}</p>
                        <p><strong>Seats Available:</strong> {ride.seats}</p>
                        <p><strong>Vehicle:</strong> {ride.vehicle} (by {ride.user})</p>
                        <button className="btn btn-success" style={{ width: '100%', marginTop: '1rem', background: 'var(--success-color)', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Join Ride</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
