
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_EARNINGS } from '../constants';
import { geminiService } from '../services/gemini';

export const Monetization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'programs'>('overview');
  const [aiInsights, setAiInsights] = useState<{ analysis: string; tips: string[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      const dataStr = JSON.stringify(MOCK_EARNINGS);
      const result = await geminiService.getCreatorInsights(dataStr);
      setAiInsights(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const totalEarnings = MOCK_EARNINGS.reduce((acc, curr) => acc + curr.creatorFund + curr.gifts + curr.brandDeals, 0);

  return (
    <div className="p-6 pb-32 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Creator Hub</h1>
        <p className="text-gray-400">Manage your earnings and scale your brand.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <p className="text-zinc-400 text-sm mb-1">Total Balance</p>
          <h2 className="text-3xl font-bold">${totalEarnings.toLocaleString()}</h2>
          <span className="text-green-500 text-xs">+12% from last week</span>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <p className="text-zinc-400 text-sm mb-1">Creator Fund</p>
          <h2 className="text-3xl font-bold">$489.20</h2>
          <span className="text-zinc-500 text-xs">Based on 2.4M views</span>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <p className="text-zinc-400 text-sm mb-1">Virtual Gifts</p>
          <h2 className="text-3xl font-bold">14.2K</h2>
          <span className="text-purple-400 text-xs">Diamonds earned</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-zinc-800 mb-6">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'overview' ? 'text-white border-b-2 border-white' : 'text-zinc-500'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('insights')}
          className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'insights' ? 'text-white border-b-2 border-white' : 'text-zinc-500'}`}
        >
          AI Insights
        </button>
        <button 
          onClick={() => setActiveTab('programs')}
          className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'programs' ? 'text-white border-b-2 border-white' : 'text-zinc-500'}`}
        >
          Programs
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-6">Earnings Breakdown</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_EARNINGS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="date" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="creatorFund" fill="#3b82f6" stackId="a" />
                <Bar dataKey="gifts" fill="#a855f7" stackId="a" />
                <Bar dataKey="brandDeals" fill="#10b981" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded" /> Creator Fund</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded" /> Gifts</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded" /> Brand Deals</div>
          </div>
        </div>
      )}

      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-2">Gemini Smart Insights</h3>
            <p className="text-indigo-100 mb-4">Let our AI analyze your performance to unlock more revenue streams.</p>
            <button 
              onClick={fetchInsights}
              disabled={loading}
              className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold hover:bg-indigo-50 transition-colors disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Generate New Insights'}
            </button>
          </div>

          {aiInsights && (
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl animate-fade-in">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Performance Analysis</h4>
              <p className="text-zinc-300 leading-relaxed mb-6">{aiInsights.analysis}</p>
              
              <h4 className="text-lg font-semibold mb-4 text-green-400">Actionable Tips</h4>
              <ul className="space-y-3">
                {aiInsights.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                    <span className="text-green-500">✓</span>
                    <span className="text-zinc-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {activeTab === 'programs' && (
        <div className="grid gap-4">
          {[
            { name: 'TikTok Shop for Creators', status: 'Eligible', icon: '🛍️' },
            { name: 'Series (Paid Content)', status: 'Active', icon: '🎬' },
            { name: 'Subscription Beta', status: 'Join Waiting List', icon: '⭐' },
            { name: 'Branded Content Toggle', status: 'Enabled', icon: '🤝' },
          ].map((program, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{program.icon}</span>
                <div>
                  <h4 className="font-bold">{program.name}</h4>
                  <p className="text-sm text-zinc-500">Program details and settings</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${program.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-zinc-800 text-zinc-400'}`}>
                {program.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
