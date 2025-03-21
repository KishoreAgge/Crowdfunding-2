import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.raised / campaign.goal) * 100;
  const timeLeft = formatDistanceToNow(new Date(campaign.endDate), { addSuffix: true });

  return (
    <Link to={`/campaign/${campaign.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>
          
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                ₹{campaign.raised.toLocaleString('en-IN')} raised
              </span>
              <span className="text-gray-600">
                ₹{campaign.goal.toLocaleString('en-IN')} goal
              </span>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">by {campaign.creator}</span>
              <span className="text-sm text-gray-500">{timeLeft}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}