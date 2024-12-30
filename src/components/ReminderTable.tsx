import React from 'react';
import { Reminder } from '../../types/health'; // Make sure to define this type

interface ReminderTableProps {
  reminders: Reminder[];
  deleteReminder: (id: string) => void;
}

const ReminderTable: React.FC<ReminderTableProps> = ({ reminders, deleteReminder }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Reminder</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder) => (
            <tr key={reminder.id}>
              <td className="py-2 px-4 border-b">{reminder.name}</td>
              <td className="py-2 px-4 border-b">{reminder.time}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-red-500"
                  onClick={() => deleteReminder(reminder.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReminderTable;
