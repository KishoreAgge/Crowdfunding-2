import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
let campaigns = [
  {
    id: 1,
    title: "Save the Local Theater",
    description: "Help us renovate and preserve our historic community theater that has been entertaining families for generations.",
    goal: 5000000,
    raised: 3200000,
    endDate: "2024-05-01",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    creator: "Community Arts Group",
    category: "community",
    story: "Our local theater has been a cornerstone of the community for over 50 years..."
  },
  {
    id: 2,
    title: "Green Energy Initiative",
    description: "Support our project to install solar panels in underprivileged communities and reduce carbon footprint.",
    goal: 7500000,
    raised: 4500000,
    endDate: "2024-06-15",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    creator: "Green Future",
    category: "environment",
    story: "Climate change affects us all, but some communities are more vulnerable..."
  }
];

let donations = [];
let nextCampaignId = 3;
let nextDonationId = 1;

// Routes
app.get('/api/campaigns', (req, res) => {
  res.json(campaigns);
});

app.get('/api/campaigns/:id', (req, res) => {
  const campaign = campaigns.find(c => c.id === parseInt(req.params.id));
  if (!campaign) return res.status(404).json({ error: 'Campaign not found' });
  res.json(campaign);
});

app.post('/api/campaigns', (req, res) => {
  const campaign = {
    ...req.body,
    id: nextCampaignId++,
    raised: 0
  };
  campaigns.push(campaign);
  res.status(201).json(campaign);
});

app.post('/api/donations', (req, res) => {
  const donation = {
    ...req.body,
    id: nextDonationId++,
    createdAt: new Date().toISOString()
  };
  donations.push(donation);
  
  // Update campaign raised amount
  const campaign = campaigns.find(c => c.id === donation.campaignId);
  if (campaign) {
    campaign.raised += donation.amount;
  }
  
  res.status(201).json(donation);
});

app.get('/api/campaigns/:id/donations', (req, res) => {
  const campaignDonations = donations.filter(d => d.campaignId === parseInt(req.params.id));
  res.json(campaignDonations);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});