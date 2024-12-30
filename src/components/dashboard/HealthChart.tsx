import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface HealthData {
  timestamp: string;
  heartRate: number;
  temperature: number;
  spo2: number;
}

interface HealthChartProps {
  data: HealthData[];
}

const HealthChart = ({ data }: HealthChartProps) => {
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: data.map(d => d.heartRate),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
      },
      {
        label: 'Temperature (°C)',
        data: data.map(d => d.temperature),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      },
      {
        label: 'SpO2 (%)',
        data: data.map(d => d.spo2),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Health Metrics Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default HealthChart;