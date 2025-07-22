import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Step 1: Simulated Entrepreneur Data (Could later be fetched from a real or mock API)
const mockEntrepreneurs = [
  {
    id: 1,
    name: "Umair Khan",
    startup: "GreenTech Solutions",
    pitch:
      "Building sustainable agriculture using AI-powered irrigation systems to optimize crop yield.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Ali Raza",
    startup: "EduVerse",
    pitch:
      "Revolutionizing online learning with gamified and immersive digital education experiences.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Fatima Zubair",
    startup: "HealthTrack",
    pitch:
      "Remote monitoring platform for chronic conditions to empower patients with real-time data.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function InvestorDashboard() {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Step 2: Simulate loading data (Mock API Delay)
    const timer = setTimeout(() => {
      setEntrepreneurs(mockEntrepreneurs);
    }, 600);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-600 py-10 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-10">
        Entrepreneur Directory
      </h1>

      {/* Step 3: Grid Layout for Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {entrepreneurs.map((entrepreneur) => (
          <EntrepreneurCard
            key={entrepreneur.id}
            entrepreneur={entrepreneur}
            onView={() =>
              navigate(`/profile/entrepreneur/${entrepreneur.id}`)
            }
          />
        ))}
      </div>

      {/* Step 4: Show loading if data is empty */}
      {entrepreneurs.length === 0 && (
        <p className="text-white mt-8">Loading entrepreneurs...</p>
      )}
    </div>
  );
}

// Step 5: Reusable Card Component
function EntrepreneurCard({ entrepreneur, onView }) {
  const { name, startup, pitch, avatar } = entrepreneur;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-indigo-600 font-medium">{startup}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6">{pitch}</p>

      <button
        onClick={onView}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        View Full Profile
      </button>
    </div>
  );
}
