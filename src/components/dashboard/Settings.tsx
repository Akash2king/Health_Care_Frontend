import React from 'react';
import { Bell, Shield, User, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="space-y-6">
        <SettingSection
          icon={<User className="h-6 w-6" />}
          title="Profile Settings"
          description="Manage your personal information and preferences"
        >
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update Profile
            </button>
          </div>
        </SettingSection>

        <SettingSection
          icon={<Bell className="h-6 w-6" />}
          title="Notification Preferences"
          description="Configure how and when you receive alerts"
        >
          <div className="space-y-4">
            <NotificationToggle
              label="Email Notifications"
              description="Receive updates via email"
            />
            <NotificationToggle
              label="Push Notifications"
              description="Get instant alerts on your device"
            />
            <NotificationToggle
              label="SMS Alerts"
              description="Receive critical alerts via SMS"
            />
          </div>
        </SettingSection>

        <SettingSection
          icon={<Shield className="h-6 w-6" />}
          title="Privacy & Security"
          description="Manage your security preferences and data sharing"
        >
          <div className="space-y-4">
            <NotificationToggle
              label="Two-Factor Authentication"
              description="Add an extra layer of security"
            />
            <NotificationToggle
              label="Data Sharing"
              description="Allow anonymous data sharing for research"
            />
          </div>
        </SettingSection>

        <SettingSection
          icon={<Globe className="h-6 w-6" />}
          title="Regional Settings"
          description="Configure your location and units preferences"
        >
          <div className="grid gap-4">
            <select className="w-full p-2 border rounded">
              <option>Celsius (°C)</option>
              <option>Fahrenheit (°F)</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>24-hour format</option>
              <option>12-hour format</option>
            </select>
          </div>
        </SettingSection>
      </div>
    </div>
  );
};

const SettingSection = ({ 
  icon, 
  title, 
  description, 
  children 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-3">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

const NotificationToggle = ({ 
  label, 
  description 
}: { 
  label: string;
  description: string;
}) => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium text-gray-900">{label}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default Settings;