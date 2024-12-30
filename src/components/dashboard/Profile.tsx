import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">John Doe</h1>
              <p className="text-blue-100">Patient ID: #123456</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Mail className="h-5 w-5 text-blue-600" />}
              label="Email"
              value="john.doe@example.com"
            />
            <InfoCard
              icon={<Phone className="h-5 w-5 text-blue-600" />}
              label="Phone"
              value="+1 (555) 123-4567"
            />
            <InfoCard
              icon={<MapPin className="h-5 w-5 text-blue-600" />}
              label="Address"
              value="123 Health Street, Medical City, MC 12345"
            />
            <InfoCard
              icon={<User className="h-5 w-5 text-blue-600" />}
              label="Blood Type"
              value="A+"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h2>
            <div className="space-y-4">
              {medicalHistory.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.condition}</h3>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </div>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.relation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{contact.phone}</p>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ 
  icon, 
  label, 
  value 
}: { 
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
};

const medicalHistory = [
  {
    condition: 'Hypertension',
    details: 'Diagnosed with high blood pressure, managed with medication',
    date: 'Jan 2023'
  },
  {
    condition: 'Appendectomy',
    details: 'Surgical removal of appendix',
    date: 'Mar 2022'
  },
  {
    condition: 'Allergies',
    details: 'Seasonal allergies, pollen sensitivity',
    date: 'Ongoing'
  }
];

const emergencyContacts = [
  {
    name: 'Jane Doe',
    relation: 'Spouse',
    phone: '+1 (555) 987-6543',
    email: 'jane.doe@example.com'
  },
  {
    name: 'Robert Doe',
    relation: 'Son',
    phone: '+1 (555) 456-7890',
    email: 'robert.doe@example.com'
  }
];

export default Profile;