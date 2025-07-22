import { useState } from "react";

export default function EntrepreneurProfile() {
  const [formData, setFormData] = useState({
    name: "Jane Founder",
    bio: "Passionate entrepreneur building tech solutions.",
    startup: "TechLeap",
    description: "Innovative platform providing AI-powered SaaS tools for startups.",
    fundingNeed: "$150,000",
    pitchDeck: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entrepreneur Profile Submitted:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex justify-center items-center px-6 py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Entrepreneur Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex items-center gap-6">
            <img
              src={profileImage || "https://via.placeholder.com/100x100.png?text=Upload"}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border shadow"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Full Name */}
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          {/* Bio */}
          <InputField
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            multiline
          />

          {/* Startup Name */}
          <InputField
            label="Startup Name"
            name="startup"
            value={formData.startup}
            onChange={handleInputChange}
          />

          {/* Startup Description */}
          <InputField
            label="Startup Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            multiline
          />

          {/* Funding Need */}
          <InputField
            label="Funding Needed"
            name="fundingNeed"
            value={formData.fundingNeed}
            onChange={handleInputChange}
          />

          {/* Pitch Deck */}
          <InputField
            label="Pitch Deck (URL)"
            name="pitchDeck"
            value={formData.pitchDeck}
            onChange={handleInputChange}
          />

          {/* Save */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

//  Reusable Input Field
function InputField({ label, name, value, onChange, multiline }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-purple-300"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-300"
        />
      )}
    </div>
  );
}
