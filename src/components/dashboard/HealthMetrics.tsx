import React from 'react';
import { Heart, Thermometer, Activity } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
}

const MetricCard = ({ icon, title, value, unit, trend }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600">{icon}</div>
        <span className={`text-sm font-medium ${getTrendColor()}`}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} 
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="ml-1 text-sm text-gray-500">{unit}</p>
      </div>
    </div>
  );
};

const HealthMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard
        icon={<Heart className="h-6 w-6" />}
        title="Heart Rate"
        value={72}
        unit="bpm"
        trend="stable"
      />
      <MetricCard
        icon={<Thermometer className="h-6 w-6" />}
        title="Temperature"
        value={36.6}
        unit="°C"
        trend="up"
      />
      <MetricCard
        icon={<Activity className="h-6 w-6" />}
        title="SpO2"
        value={98}
        unit="%"
        trend="stable"
      />
    </div>
  );
};

export default HealthMetrics;