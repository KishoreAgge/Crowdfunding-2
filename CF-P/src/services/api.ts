import axios from 'axios';
import { Campaign, Donation } from '../types';

const API_URL = 'http://localhost:3000/api';

export const api = {
  // Campaigns
  getCampaigns: () => 
    axios.get<Campaign[]>(`${API_URL}/campaigns`),
  
  getCampaign: (id: number) =>
    axios.get<Campaign>(`${API_URL}/campaigns/${id}`),
  
  createCampaign: (campaign: Omit<Campaign, 'id' | 'raised'>) =>
    axios.post<Campaign>(`${API_URL}/campaigns`, campaign),
  
  // Donations
  createDonation: (donation: Omit<Donation, 'id' | 'createdAt'>) =>
    axios.post<Donation>(`${API_URL}/donations`, donation),
  
  getCampaignDonations: (campaignId: number) =>
    axios.get<Donation[]>(`${API_URL}/campaigns/${campaignId}/donations`)
};