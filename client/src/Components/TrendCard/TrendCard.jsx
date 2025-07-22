import React from 'react';
import { TrendData } from '../Data/TrendData';

const TrendCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-[rgba(255,255,255,0.64)] p-4 rounded-xl pl-8">
      <h3 className="text-lg font-semibold">Trending for you</h3>

      {TrendData.map((trend, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="font-bold">#{trend.name}</span>
          <span className="text-sm">{trend.shares}k Shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
