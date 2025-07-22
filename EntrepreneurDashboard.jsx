import { useEffect, useState } from "react";

export default function EntrepreneurDashboard() {
  // State to hold collaboration requests
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch collaboration requests
    const mockRequests = [
      {
        id: 1,
        investorName: "Alice Ventures",
        message: "Interested in your startup. Let’s talk!",
        status: "Pending",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      {
        id: 2,
        investorName: "Bright Capital",
        message: "Can we schedule a call this week?",
        status: "Accepted",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        id: 3,
        investorName: "Vision Fund",
        message: "Need more details about your product.",
        status: "Declined",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
    ];

    // Simulate loading delay
    setTimeout(() => {
      setRequests(mockRequests);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center px-6 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">
        {/* Dashboard Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Collaboration Requests from Investors
        </h2>

        {/* If there are no requests */}
        {requests.length === 0 ? (
          <p className="text-center text-gray-500">No collaboration requests yet.</p>
        ) : (
          // Request List
          <ul className="space-y-4">
            {requests.map((req) => (
              <li
                key={req.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Investor Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={req.avatar}
                    alt={req.investorName}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {req.investorName}
                    </h3>
                    <p className="text-gray-600 text-sm">{req.message}</p>
                  </div>
                </div>

                {/* Request Status */}
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold
                    ${
                      req.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : req.status === "Declined"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
