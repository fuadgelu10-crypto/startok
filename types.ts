
export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  isVerified: boolean;
}

export interface Video {
  id: string;
  author: User;
  url: string;
  description: string;
  music: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

export interface AdCampaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'ended';
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
}

export interface EarningReport {
  date: string;
  creatorFund: number;
  gifts: number;
  brandDeals: number;
}

export enum NavigationTab {
  FEED = 'feed',
  DISCOVER = 'discover',
  MONETIZATION = 'monetization',
  AD_MANAGER = 'ad_manager',
  PROFILE = 'profile'
}
