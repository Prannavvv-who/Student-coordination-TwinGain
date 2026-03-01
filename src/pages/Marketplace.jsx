import { ShoppingBag, Search, Plus } from 'lucide-react';

export default function Marketplace() {
    const items = [
        { id: 1, name: 'Scientific Calculator fx-991EX', user: 'Rahul', type: 'Borrow', time: '2 days' },
        { id: 2, name: 'Chemistry Lab Apron (M)', user: 'Anjali', type: 'Exchange', time: 'Permanent' },
        { id: 3, name: 'CS201 Previous Year Papers', user: 'Vikram', type: 'Giveaway', time: 'Permanent' },
    ];

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2><ShoppingBag style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Item Exchange</h2>
                <button className="btn btn-primary"><Plus size={18} /> Post Item</button>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Search for aprons, calculators, papers..."
                    style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }}
                />
                <button className="btn btn-secondary"><Search size={18} /> Search</button>
            </div>

            <div className="grid-layout">
                {items.map(item => (
                    <div key={item.id} className="glass-card">
                        <h3>{item.name}</h3>
                        <p><strong>Posted by:</strong> {item.user}</p>
                        <p><strong>Type:</strong> <span style={{ color: 'var(--primary-color)' }}>{item.type}</span></p>
                        <p><strong>Duration:</strong> {item.time}</p>
                        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>Request Item</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
