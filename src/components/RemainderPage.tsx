import React, { useState, useEffect } from 'react';
import { ref, onValue, set, remove } from 'firebase/database';
import { db } from '../config/firebase';
import ReminderTable from './ReminderTable';
import ReminderForm from './ReminderForm';
import { Reminder } from '../types/health';

const ReminderPage = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch reminders from Firebase on page load
  useEffect(() => {
    const remindersRef = ref(db, 'reminders');
    const unsubscribe = onValue(remindersRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Fetched reminders from Firebase:", data); // Debugging log
      if (data) {
        const reminderList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setReminders(reminderList);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to calculate remaining time
  const getRemainingTime = (reminderTime: number) => {
    const currentTime = new Date().getTime();
    const timeDiff = reminderTime - currentTime;
    console.log("Time diff:", timeDiff); // Debugging log
    if (timeDiff <= 0) {
      return { minutes: 0, seconds: 0 };
    }
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    return { minutes, seconds };
  };

  // Function to trigger the URL when reminder time is due
  const triggerCall = (id: string) => {
    console.log("Triggering API call for reminder ID:", id); // Debugging log
    fetch('http://127.0.0.1:5000/get-call')
      .then((response) => response.json())
      .then((data) => {
        console.log("API call success:", data); // Debugging log
        setSuccessMessage('Call triggered successfully!');
        deleteReminder(id);
      })
      .catch((error) => {
        console.error('Error triggering the call:', error); // Debugging log
        setSuccessMessage('Error triggering the call.');
      });
  };

  // Delete a reminder
  const deleteReminder = (id: string) => {
    const reminderRef = ref(db, `reminders/${id}`);
    remove(reminderRef); // Remove reminder from Firebase
  };

  // Update countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReminders((prevReminders) => {
        return prevReminders.map((reminder) => {
          const remainingTime = getRemainingTime(new Date(reminder.time).getTime());
          
          // Check if the reminder time has passed
          if (remainingTime.minutes === 0 && remainingTime.seconds === 0) {
            triggerCall(reminder.id);
          }

          return {
            ...reminder,
            remainingTime, // Update remaining time for display
          };
        });
      });
    }, 1000); // Update every second

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [reminders]);

  // Add or edit a reminder
  const addOrEditReminder = (reminder: Reminder) => {
    const reminderRef = ref(db, `reminders/${reminder.id}`);
    set(reminderRef, reminder); // Add or overwrite reminder in Firebase
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Reminders</h1>
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <ReminderForm addOrEditReminder={addOrEditReminder} />
      <ReminderTable
        reminders={reminders}
        deleteReminder={deleteReminder}
      />
    </div>
  );
};

export default ReminderPage;
