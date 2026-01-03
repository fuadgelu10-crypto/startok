
import React, { useState } from 'react';
import { geminiService } from '../services/gemini';

export const AdManager: React.FC = () => {
  const [productDesc, setProductDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [adScripts, setAdScripts] = useState<any[]>([]);

  const handleGenerateAds = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productDesc) return;
    setLoading(true);
    try {
      const results = await geminiService.generateAdCopy(productDesc);
      setAdScripts(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 pb-32 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Ad Manager</h1>
        <p className="text-gray-400">Reach millions with high-impact short-form video ads.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Creator Tool */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">AI Ad Script Generator</h2>
            <form onSubmit={handleGenerateAds} className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">What are you advertising?</label>
                <textarea 
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                  placeholder="e.g. A sustainable coffee brand that uses 100% compostable pods..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none h-32"
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Magic...' : 'Generate AI Scripts'}
              </button>
            </form>
          </div>

          {adScripts.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Suggested Ad variations</h3>
              {adScripts.map((ad, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black px-3 py-1 rounded-lg text-xs font-bold">Use This</button>
                  </div>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 block">{ad.hookType} Hook</span>
                  <h4 className="text-xl font-bold mb-3">{ad.headline}</h4>
                  <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 italic text-zinc-400">
                    "{ad.script}"
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Active Stats */}
        <div className="space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4">Active Campaigns</h3>
            <div className="space-y-4">
              {[
                { name: 'Summer Sale 24', budget: '$5,000', spend: '$2,410', roi: '3.2x' },
                { name: 'App Install Pro', budget: '$1,200', spend: '$800', roi: '1.8x' },
              ].map((camp, idx) => (
                <div key={idx} className="pb-4 border-b border-zinc-800 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{camp.name}</h4>
                    <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Active</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>Spend: {camp.spend} / {camp.budget}</span>
                    <span className="text-green-500">ROI: {camp.roi}</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '48%' }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border border-zinc-700 rounded-lg text-sm hover:bg-zinc-800 transition-colors">
              View All Campaigns
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4">Audience Insights</h3>
            <div className="flex flex-wrap gap-2">
              {['Gen Z', 'Eco-Conscious', 'Gamers', 'Pet Owners', 'DIYers'].map(tag => (
                <span key={tag} className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
