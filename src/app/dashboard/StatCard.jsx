import React from 'react';
import { Card } from "@heroui/react";

export const StatsCard = ({ title, value, icon, colorClass = "bg-blue-100 text-blue-600" }) => {
  return (
    // We use Tailwind classes for shadow and rounding instead of props
    <Card className="shadow-sm border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
      <Card.Content className="flex flex-row items-center gap-4 p-5">
        <div className={`p-3 rounded-lg ${colorClass}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </Card.Content>
    </Card>
  );
};