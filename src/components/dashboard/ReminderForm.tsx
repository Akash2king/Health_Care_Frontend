import React, { useState } from 'react';
import { set, ref } from 'firebase/database';
import { db } from '../../config/firebase';

const ReminderForm = () => {
  const [reminder, setReminder] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSetReminder = async () => {
    if (!reminder || !reminderTime) return;

    try {
      const newReminderId = new Date().getTime().toString();
      await set(ref(db, `reminders/${newReminderId}`), {
        reminder,
        time: reminderTime
      });
      
      setReminder('');
      setReminderTime('');
      alert('Reminder set successfully!');
    } catch (error) {
      console.error('Error setting reminder:', error);
      alert('Failed to set reminder. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Set Reminder</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="reminder" className="block text-sm font-medium text-gray-700">
            Reminder
          </label>
          <input
            id="reminder"
            type="text"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter reminder text"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            id="time"
            type="datetime-local"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSetReminder}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default ReminderForm;