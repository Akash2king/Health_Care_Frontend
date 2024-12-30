import React from 'react';
import { HealthData } from '../../types/health';

interface RealtimeMetricsProps {
  data: HealthData;
}

const RealtimeMetrics: React.FC<RealtimeMetricsProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Realtime Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricItem label="Temperature" value={data.temperature} unit="°C" />
        <MetricItem label="SpO2" value={data.spo2} unit="%" />
        <MetricItem label="Heart Rate" value={data.heartRate} unit="bpm" />
      </div>
    </div>
  );
};

const MetricItem = ({ label, value, unit }: { label: string; value: number; unit: string }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <p className="text-gray-600">{label}</p>
    <p className="text-2xl font-semibold">
      {value} <span className="text-sm text-gray-500">{unit}</span>
    </p>
  </div>
);

export default RealtimeMetrics;