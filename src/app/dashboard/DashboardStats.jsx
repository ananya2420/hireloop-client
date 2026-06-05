// DashboardStats.jsx
import React from 'react';
import { StatsCard } from './StatCard';

// Change 'stats' to 'statsData' to match the parent
export const DashboardStats = ({ statsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Ensure you use statsData here */}
      {statsData?.map((item, index) => (
        <StatsCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          colorClass={item.colorClass}
        />
      ))}
    </div>
  );
};