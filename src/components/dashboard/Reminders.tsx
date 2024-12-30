import React, { useState } from 'react';
import { Bell, Plus } from 'lucide-react';

interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'medication' | 'checkup' | 'other';
}

const Reminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    type: 'medication' as const
  });

  const handleAddReminder = () => {
    if (newReminder.title && newReminder.time) {
      setReminders([...reminders, { ...newReminder, id: Date.now().toString() }]);
      setNewReminder({ title: '', time: '', type: 'medication' });
      setShowForm(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Reminders</h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Reminder
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Reminder title"
              value={newReminder.title}
              onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="datetime-local"
              value={newReminder.time}
              onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <select
              value={newReminder.type}
              onChange={(e) => setNewReminder({ ...newReminder, type: e.target.value as any })}
              className="w-full p-2 border rounded"
            >
              <option value="medication">Medication</option>
              <option value="checkup">Check-up</option>
              <option value="other">Other</option>
            </select>
            <button
              onClick={handleAddReminder}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-gray-900">{reminder.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(reminder.time).toLocaleString()}
              </p>
            </div>
            <span className="text-sm font-medium text-blue-600 capitalize">
              {reminder.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;