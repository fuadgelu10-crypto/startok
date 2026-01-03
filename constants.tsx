
import React from 'react';
import { Video, User, EarningReport } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', username: 'tech_guru', avatar: 'https://picsum.photos/seed/tech/200', followers: 1200000, isVerified: true },
  { id: '2', username: 'cooking_with_sam', avatar: 'https://picsum.photos/seed/cook/200', followers: 450000, isVerified: false },
  { id: '3', username: 'daily_vlog', avatar: 'https://picsum.photos/seed/vlog/200', followers: 890000, isVerified: true },
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'v1',
    author: MOCK_USERS[0],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-dancing-23046-large.mp4',
    description: 'Check out these new AI features! #tech #ai #future',
    music: 'Original Sound - tech_guru',
    likes: 45200,
    comments: 1200,
    shares: 890,
    tags: ['tech', 'ai', 'future']
  },
  {
    id: 'v2',
    author: MOCK_USERS[1],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-preparing-a-delicious-fruit-salad-4504-large.mp4',
    description: 'The easiest fruit salad you will ever make! 🍓 #cooking #foodie',
    music: 'Lofi Beats - Chillhop',
    likes: 12000,
    comments: 450,
    shares: 120,
    tags: ['cooking', 'foodie']
  },
  {
    id: 'v3',
    author: MOCK_USERS[2],
    url: 'https://assets.mixkit.co/videos/preview/mixkit-urban-street-fashion-shoot-with-a-model-34440-large.mp4',
    description: 'Street vibes in Tokyo. Missing this place! 🇯🇵 #travel #fashion',
    music: 'J-Pop Radio Mix',
    likes: 89000,
    comments: 3400,
    shares: 12000,
    tags: ['travel', 'fashion']
  }
];

export const MOCK_EARNINGS: EarningReport[] = [
  { date: 'Mon', creatorFund: 45, gifts: 120, brandDeals: 0 },
  { date: 'Tue', creatorFund: 52, gifts: 85, brandDeals: 500 },
  { date: 'Wed', creatorFund: 48, gifts: 210, brandDeals: 0 },
  { date: 'Thu', creatorFund: 60, gifts: 150, brandDeals: 0 },
  { date: 'Fri', creatorFund: 75, gifts: 340, brandDeals: 1200 },
  { date: 'Sat', creatorFund: 90, gifts: 450, brandDeals: 0 },
  { date: 'Sun', creatorFund: 82, gifts: 290, brandDeals: 0 },
];

export const Icons = {
  Home: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
  Discover: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>,
  Monetize: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>,
  AdManager: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg>,
  Profile: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>,
  Heart: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
  Comment: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>,
  Share: () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
};
