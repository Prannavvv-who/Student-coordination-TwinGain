import { Lightbulb, Search, PlusCircle } from 'lucide-react';

export default function SkillConnect() {
    const skills = [
        { id: 1, name: 'Guitar Tutoring', user: 'Priya', type: 'Offering', detail: 'Beginner friendly' },
        { id: 2, name: 'React Development', user: 'Sam', type: 'Looking', detail: 'Need help with a project' },
        { id: 3, name: 'Photography', user: 'Karan', type: 'Offering', detail: 'Event shoots' },
    ];

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2><Lightbulb style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Skill Connect</h2>
                <button className="btn btn-primary"><PlusCircle size={18} /> Add Skill</button>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Search skills (e.g., Coding, Music, Art)..."
                        style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'white' }}
                    />
                    <button className="btn btn-secondary"><Search size={18} /></button>
                </div>
            </div>

            <div className="grid-layout">
                {skills.map(skill => (
                    <div key={skill.id} className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>{skill.name}</h3>
                            <span style={{ color: skill.type === 'Offering' ? 'var(--success-color)' : 'var(--warning-color)' }}>{skill.type}</span>
                        </div>
                        <p><strong>User:</strong> {skill.user}</p>
                        <p>{skill.detail}</p>
                        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>Connect</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
