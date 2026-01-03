
import React, { useState } from 'react';
import { MOCK_VIDEOS, Icons } from './constants';
import { NavigationTab } from './types';
import { VideoCard } from './components/VideoCard';
import { Monetization } from './components/Monetization';
import { AdManager } from './components/AdManager';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.FEED);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const height = e.currentTarget.clientHeight;
    const index = Math.round(scrollTop / height);
    if (index !== currentVideoIndex) {
      setCurrentVideoIndex(index);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.FEED:
        return (
          <div 
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar video-container"
            onScroll={handleScroll}
          >
            {MOCK_VIDEOS.map((video, idx) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                isActive={currentVideoIndex === idx} 
              />
            ))}
          </div>
        );
      case NavigationTab.MONETIZATION:
        return <Monetization />;
      case NavigationTab.AD_MANAGER:
        return <AdManager />;
      case NavigationTab.DISCOVER:
        return (
          <div className="p-6 h-screen flex items-center justify-center text-zinc-500">
            Discover feature coming soon...
          </div>
        );
      case NavigationTab.PROFILE:
        return (
          <div className="p-6 h-screen flex items-center justify-center text-zinc-500">
            User Profile view coming soon...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white relative">
      {/* Top Header (Only on non-feed tabs for better focus) */}
      {activeTab !== NavigationTab.FEED && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md z-40 border-b border-zinc-800 flex items-center px-6 justify-between">
          <div className="text-2xl font-black text-white tracking-tighter">TokStar</div>
          <div className="flex gap-4">
             <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">🔍</button>
             <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">🔔</button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 ${activeTab !== NavigationTab.FEED ? 'mt-16' : ''}`}>
        {renderContent()}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black border-t border-white/10 flex items-center justify-around px-2 z-50">
        <button 
          onClick={() => setActiveTab(NavigationTab.FEED)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === NavigationTab.FEED ? 'text-white' : 'text-zinc-500'}`}
        >
          <Icons.Home />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        
        <button 
          onClick={() => setActiveTab(NavigationTab.DISCOVER)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === NavigationTab.DISCOVER ? 'text-white' : 'text-zinc-500'}`}
        >
          <Icons.Discover />
          <span className="text-[10px] font-bold">Discover</span>
        </button>

        <div className="relative -mt-4">
          <button className="bg-white rounded-xl px-4 py-2 hover:opacity-90 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="text-black text-xl font-bold">+</span>
          </button>
        </div>

        <button 
          onClick={() => setActiveTab(NavigationTab.MONETIZATION)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === NavigationTab.MONETIZATION ? 'text-white' : 'text-zinc-500'}`}
        >
          <Icons.Monetize />
          <span className="text-[10px] font-bold">Earn</span>
        </button>

        <button 
          onClick={() => setActiveTab(NavigationTab.AD_MANAGER)}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === NavigationTab.AD_MANAGER ? 'text-white' : 'text-zinc-500'}`}
        >
          <Icons.AdManager />
          <span className="text-[10px] font-bold">Ads</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
