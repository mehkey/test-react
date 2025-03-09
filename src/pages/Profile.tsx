import { Avatar, IconButton, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Profile = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white px-6 py-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        {/* Profile Info */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              alt="User Profile"
              sx={{ width: 80, height: 80 }}
            />
            <div>
              <h2 className="text-xl font-semibold">Alex Johnson</h2>
              <p className="text-gray-500">alex.johnson@example.com</p>
              <p className="text-sm text-gray-400 mt-1">Member since 2024</p>
            </div>
          </div>
          <IconButton>
            <EditIcon />
          </IconButton>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-6 py-6 bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold">127</p>
          <p className="text-sm text-gray-500">Articles Read</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">35</p>
          <p className="text-sm text-gray-500">Bookmarks</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* Settings */}
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        
        <div className="space-y-4">
          {/* Notifications */}
          <div className="flex items-center justify-between p-4 bg-white rounded-xl">
            <div className="flex items-center space-x-3">
              <NotificationsIcon className="text-gray-600" />
              <span>Notifications</span>
            </div>
            <Switch />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between p-4 bg-white rounded-xl">
            <div className="flex items-center space-x-3">
              <DarkModeIcon className="text-gray-600" />
              <span>Dark Mode</span>
            </div>
            <Switch />
          </div>

          {/* Security */}
          <button className="flex items-center justify-between w-full p-4 bg-white rounded-xl">
            <div className="flex items-center space-x-3">
              <SecurityIcon className="text-gray-600" />
              <span>Security</span>
            </div>
            <ChevronRightIcon className="text-gray-400" />
          </button>

          {/* Language */}
          <button className="flex items-center justify-between w-full p-4 bg-white rounded-xl">
            <div className="flex items-center space-x-3">
              <LanguageIcon className="text-gray-600" />
              <span>Language</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">English</span>
              <ChevronRightIcon />
            </div>
          </button>

          {/* Help & Support */}
          <button className="flex items-center justify-between w-full p-4 bg-white rounded-xl">
            <div className="flex items-center space-x-3">
              <HelpOutlineIcon className="text-gray-600" />
              <span>Help & Support</span>
            </div>
            <ChevronRightIcon className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 