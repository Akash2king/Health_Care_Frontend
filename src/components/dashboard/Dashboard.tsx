import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../config/firebase';
import { HealthData, HealthLog } from '../../types/health';
import RealtimeMetrics from './RealtimeMetrics';
import HealthChart from './HealthChart';
import LogsTable from './LogsTable';
import ReminderForm from './ReminderForm';

const Dashboard = () => {
  const [logs, setLogs] = useState<HealthLog[]>([]);
  const [realtimeData, setRealtimeData] = useState<HealthData>({
    temperature: 0,
    spo2: 0,
    heartRate: 0
  });

  // State to store reminders
  const [reminders, setReminders] = useState<{ time: string }[]>([]);

  useEffect(() => {
    // Subscribe to logs
    const logsRef = ref(db, 'logs');
    const unsubscribeLogs = onValue(logsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const logArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...(value as HealthData)
        }));
        setLogs(logArray);
      }
    });

    // Subscribe to realtime health data
    const healthRef = ref(db, 'health');
    const unsubscribeHealth = onValue(healthRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRealtimeData(data);
      }
    });

    // Subscribe to reminders (assuming reminders are stored in Firebase under a 'reminders' path)
    const remindersRef = ref(db, 'reminders');
    const unsubscribeReminders = onValue(remindersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setReminders(Object.values(data)); // Assuming reminders are an array
      }
    });

    // Cleanup subscriptions
    return () => {
      unsubscribeLogs();
      unsubscribeHealth();
      unsubscribeReminders();
    };
  }, []);

  useEffect(() => {
    // Function to check reminders and trigger API call
    const checkReminders = () => {
      const currentTime = new Date();
      reminders.forEach((reminder) => {
        const reminderTime = new Date(reminder.time); // Assuming reminder.time is a valid ISO string
        if (currentTime.getHours() === reminderTime.getHours() && currentTime.getMinutes() === reminderTime.getMinutes()) {
          // Send GET request when it's time for a reminder
          fetch('http://127.0.0.1:5000/get-call')
            .then((response) => response.json())
            .then((data) => {
              console.log('Reminder triggered, response:', data);
            })
            .catch((error) => {
              console.error('Error triggering reminder:', error);
            });
        }
      });
    };

    // Check reminders every minute
    const reminderInterval = setInterval(checkReminders, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(reminderInterval);
  }, [reminders]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Health Dashboard</h1>
      
      <div className="space-y-6">
        <RealtimeMetrics data={realtimeData} />
        <HealthChart data={logs} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-4">
            <LogsTable logs={logs} />
          </div>
          {/* <div>
            <ReminderForm />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
