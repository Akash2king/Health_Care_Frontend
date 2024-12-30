export interface HealthData {
  temperature: number;
  spo2: number;
  heartRate: number;
  timestamp?: string;
}

export interface HealthLog extends HealthData {
  id: string;
}

export interface Reminder {
  id: string;
  name: string;
  time: string; // You could store this as a timestamp if needed
}
