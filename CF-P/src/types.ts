export interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  endDate: string;
  imageUrl: string;
  creator: string;
  category: string;
  story: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Donation {
  id: number;
  amount: number;
  campaignId: number;
  userId: string;
  createdAt: string;
  message?: string;
}