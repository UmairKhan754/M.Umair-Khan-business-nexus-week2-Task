import { useState } from "react";

export default function InvestorProfile() {
  const [formData, setFormData] = useState({
    name: "John Capital",
    bio: "Angel investor focused on early-stage startups.",
    interests: "FinTech, EdTech, SaaS",
    portfolio: "EduBoost, PayLink",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!formData.name || !formData.bio || !formData.interests || !formData.portfolio) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Investor Profile Submitted:", formData);
    setSubmitted(true);
    alert("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Investor Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex items-center gap-5">
            <img
              src={profileImage || "https://via.placeholder.com/100x100.png?text=Upload"}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border shadow"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Profile Image
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
            onChange={handleChange}
            required
          />

          {/* Bio */}
          <InputField
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            multiline
            required
          />

          {/* Investment Interests */}
          <InputField
            label="Investment Interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            required
          />

          {/* Portfolio Companies */}
          <InputField
            label="Portfolio Companies"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Save Profile
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 text-center font-medium">
             Your investor profile has been saved!
          </p>
        )}
      </div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ label, name, value, onChange, multiline, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          required={required}
          className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-indigo-300"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-300"
        />
      )}
    </div>
  );
}
