const { useState, useEffect } = React;
const { DollarSign, Calendar, Users, Star, Award, Eye, Filter, ArrowRight, Target, CheckCircle, Zap, TrendingUp, Search } = lucide;

function SponsorshipMarketplace() {
  const [userType, setUserType] = useState("creator");
  const [filterGenre, setFilterGenre] = useState("all");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => lucide.createIcons());

  const campaigns = [
    { id: 1, brand: "SportsWear Co.", title: "Adventure Game Sponsorship", description: "Feature our clothing line in adventure games.", budget: 5000, impressions: 100000, genre: "Adventure", duration: "30 days", applicants: 23, status: "active", image: "🏔️" },
    { id: 2, brand: "Tech Gadgets Inc", title: "Simulator Game Partnership", description: "Integrate our gadgets into simulator games.", budget: 8000, impressions: 250000, genre: "Simulator", duration: "45 days", applicants: 45, status: "active", image: "🎮" },
    { id: 3, brand: "FoodieWorld", title: "Roleplay Cafe Integration", description: "Add branded food items to roleplay games.", budget: 3500, impressions: 75000, genre: "Roleplay", duration: "20 days", applicants: 12, status: "active", image: "🍕" },
    { id: 4, brand: "MusicStream", title: "Music-Based Promotion", description: "Feature our songs in creative rhythm games.", budget: 12000, impressions: 500000, genre: "Music", duration: "60 days", applicants: 67, status: "featured", image: "🎵" },
  ];

  const creatorProfile = { totalRevenue: 45000, completedSponsors: 8, avgRating: 4.9 };

  const filtered = filterGenre === "all" ? campaigns : campaigns.filter((c) => c.genre === filterGenre);

  const CampaignCard = ({ c }) => (
    <div onClick={() => setSelectedCampaign(c)} className="border-2 border-white rounded-lg p-6 hover:bg-gray-900 cursor-pointer transition">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{c.image}</div>
          <div>
            <h3 className="font-bold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-400">{c.brand}</p>
          </div>
        </div>
        {c.status === "featured" && (
          <span className="bg-white text-black text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
            <i data-lucide="star" className="w-3 h-3"></i> FEATURED
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-3">{c.description}</p>
      <div className="flex justify-between text-sm text-gray-400 border-t border-white pt-3">
        <span><i data-lucide="calendar" className="w-4 h-4 inline"></i> {c.duration}</span>
        <span><i data-lucide="users" className="w-4 h-4 inline"></i> {c.applicants}</span>
      </div>
    </div>
  );

  const CampaignModal = ({ campaign }) => (
    <div onClick={() => setSelectedCampaign(null)} className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-black border-2 border-white rounded-xl max-w-2xl w-full p-6 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{campaign.image}</div>
            <div>
              <h2 className="text-3xl font-bold">{campaign.title}</h2>
              <p className="text-gray-400">{campaign.brand}</p>
            </div>
          </div>
          <button onClick={() => setSelectedCampaign(null)} className="text-white text-3xl font-bold hover:text-gray-400">✕</button>
        </div>

        <p className="text-gray-300 mb-4">{campaign.description}</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-900 border border-white p-4 rounded text-center">
            <i data-lucide="dollar-sign" className="w-5 h-5 mx-auto"></i>
            <p>${campaign.budget.toLocaleString()}</p>
          </div>
          <div className="bg-gray-900 border border-white p-4 rounded text-center">
            <i data-lucide="eye" className="w-5 h-5 mx-auto"></i>
            <p>{(campaign.impressions / 1000).toFixed(0)}K Views</p>
          </div>
          <div className="bg-gray-900 border border-white p-4 rounded text-center">
            <i data-lucide="calendar" className="w-5 h-5 mx-auto"></i>
            <p>{campaign.duration}</p>
          </div>
        </div>

        <button onClick={() => alert("Applied successfully!")} className="w-full bg-white text-black py-3 rounded font-bold hover:bg-gray-200">
          Apply Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b-2 border-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded"><i data-lucide="target" className="w-6 h-6 text-black"></i></div>
          <div>
            <h1 className="text-xl font-bold">SPONSORSHIP HUB</h1>
            <p className="text-xs text-gray-400">Connect • Create • Earn</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className="px-3 py-2 border border-white bg-black rounded">
            <option value="creator">👤 Creator</option>
            <option value="brand">🏢 Brand</option>
          </select>
          <button className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200">
            {userType === "creator" ? "My Apps" : "Post Campaign"}
          </button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <StatCard label="Active" value="142" icon="trending-up" />
        <StatCard label="Budget" value="$2.4M" icon="dollar-sign" />
        <StatCard label="Creators" value="8,547" icon="users" />
        <StatCard label="Avg Deal" value="$6.2K" icon="award" />
      </div>

      {/* Filters */}
      <div className="p-4 border-t border-b border-white flex gap-3 items-center">
        <i data-lucide="search" className="w-5 h-5 text-gray-400"></i>
        <input placeholder="Search campaigns..." className="flex-1 bg-black text-white border border-white rounded px-3 py-2 placeholder-gray-500" />
        <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)} className="px-3 py-2 border border-white rounded bg-black text-white">
          <option value="all">All Genres</option>
          <option value="Adventure">Adventure</option>
          <option value="Simulator">Simulator</option>
          <option value="Roleplay">Roleplay</option>
          <option value="Music">Music</option>
        </select>
        <button className="border border-white px-3 py-2 rounded hover:bg-gray-900 flex items-center gap-2">
          <i data-lucide="filter" className="w-5 h-5"></i> Filters
        </button>
      </div>

      {/* Campaign Cards */}
      <div className="grid md:grid-cols-2 gap-6 p-4">
        {filtered.map((c) => <CampaignCard key={c.id} c={c} />)}
      </div>

      {/* Creator Profile */}
      {userType === "creator" && (
        <div className="p-6 border-t border-white">
          <h2 className="text-2xl font-bold mb-4">Your Creator Profile</h2>
          <div className="grid grid-cols-3 gap-4">
            <ProfileStat label="Revenue" value={`$${creatorProfile.totalRevenue.toLocaleString()}`} />
            <ProfileStat label="Deals" value={creatorProfile.completedSponsors} />
            <ProfileStat label="Rating" value={`${creatorProfile.avgRating} ⭐`} />
          </div>
        </div>
      )}

      {selectedCampaign && <CampaignModal campaign={selectedCampaign} />}
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="border-2 border-white rounded-lg p-4 hover:bg-gray-900 transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400 uppercase mb-1">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="bg-gray-900 p-3 rounded border border-white">
          <i data-lucide={icon} className="w-6 h-6"></i>
        </div>
      </div>
    </div>
  );
}

function ProfileStat({ label, value }) {
  return (
    <div className="bg-gray-900 border border-white rounded-lg text-center p-4">
      <p className="text-xs text-gray-400 uppercase">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SponsorshipMarketplace />);
