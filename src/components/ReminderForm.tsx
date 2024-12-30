import React, { useState } from 'react';
import { Reminder } from '../../types/health'; // Make sure to define this type

interface ReminderFormProps {
  addOrEditReminder: (reminder: Reminder) => void;
  reminderToEdit?: Reminder;
}

const ReminderForm: React.FC<ReminderFormProps> = ({ addOrEditReminder, reminderToEdit }) => {
  const [name, setName] = useState(reminderToEdit?.name || '');
  const [time, setTime] = useState(reminderToEdit?.time || '');
  const [id] = useState(reminderToEdit?.id || Date.now().toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addOrEditReminder({ id, name, time });
    setName('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{reminderToEdit ? 'Edit' : 'Add'} Reminder</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Reminder Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        {reminderToEdit ? 'Save Changes' : 'Add Reminder'}
      </button>
    </form>
  );
};

export default ReminderForm;
