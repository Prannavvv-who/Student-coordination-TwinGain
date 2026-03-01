import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import SkillConnect from './pages/SkillConnect';
import TravelBuddies from './pages/TravelBuddies';
import RoommateMatcher from './pages/RoommateMatcher';
import ActivityPartners from './pages/ActivityPartners';
import AuthPage from './pages/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Marketplace />} />
            <Route path="/skills" element={<SkillConnect />} />
            <Route path="/travel" element={<TravelBuddies />} />
            <Route path="/roommate" element={<RoommateMatcher />} />
            <Route path="/activity" element={<ActivityPartners />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
