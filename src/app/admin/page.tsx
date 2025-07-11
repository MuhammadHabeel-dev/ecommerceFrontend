'use client'; // Added this directive to mark the component as a Client Component

import React, { useState } from 'react';

// Inline SVG Icons to replace lucide-react for compilation in this environment
const IconBarChart3 = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-6" />
  </svg>
);

const IconPackage = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m7.5 4.27 9 5.15" /><path d="M21 8.25V19l-9 5.25L3 19V8.25L12 3z" /><path d="m3 8.25 9 5.25 9-5.25" /><line x1="12" x2="12" y1="2.25" y2="14.75" /><line x1="12" x2="12" y1="14.75" y2="21.75" />
  </svg>
);

const IconShoppingCart = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const IconUsers = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconLogOut = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="17 16 22 12 17 8" /><line x1="22" x2="10" y1="12" y2="12" />
  </svg>
);

const IconChevronRight = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconDollarSign = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconUserPlus = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" />
  </svg>
);

const IconBox = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8m18 0h-6.6l-2.3-2.3a2 2 0 0 0-2.8 0L9.6 8H3" /><path d="M12 22V12" />
  </svg>
);

const IconTruck = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M10 18h10a2 2 0 0 0 2-2V7.5L14 4h-4v4" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
  </svg>
);

const IconArrowRightLeft = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 3L4 7L8 11" /><path d="M4 7H20" /><path d="M16 21L20 17L16 13" /><path d="M20 17H4" />
  </svg>
);


// Mock logoutUser function for this isolated environment
const logoutUser = () => {
  console.log('Mock: User logged out. In a real app, this would clear session/cookies and redirect.');
  // Using console.log for immediate feedback in this isolated context
};

// Type for sidebar link props
type SidebarLinkProps = {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  color?: string; // Optional prop for custom text color
};

// Reusable SidebarLink component
const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, isActive, onClick, color = 'text-gray-700' }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 p-3 rounded-lg w-full text-left transition-all duration-200
      ${isActive ? 'bg-blue-600 text-white shadow-md' : `${color} hover:bg-gray-100 hover:text-blue-600`}
      font-medium text-lg`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// Reusable Card component for dashboard metrics
const Card: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({
  title,
  value,
  icon,
  color,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start justify-between border border-gray-200 transform transition-transform duration-200 hover:scale-[1.02]">
    <div className={`p-3 rounded-full ${color} bg-opacity-20 mb-4`}>{icon}</div>
    <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

const Admin = () => {
  // State to manage the active section in the sidebar
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-inter">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-white shadow-2xl flex flex-col justify-between p-6 lg:p-8 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center lg:text-left">
            Admin Panel
          </h2>
          <nav className="flex flex-col gap-3">
            <SidebarLink
              icon={<IconBarChart3 size={20} />}
              label="Dashboard"
              isActive={activeSection === 'dashboard'}
              onClick={() => setActiveSection('dashboard')}
            />
            <SidebarLink
              icon={<IconPackage size={20} />}
              label="Products"
              isActive={activeSection === 'products'}
              onClick={() => setActiveSection('products')}
            />
            <SidebarLink
              icon={<IconShoppingCart size={20} />}
              label="Sales"
              isActive={activeSection === 'sales'}
              onClick={() => setActiveSection('sales')}
            />
            <SidebarLink
              icon={<IconUsers size={20} />}
              label="Users"
              isActive={activeSection === 'users'}
              onClick={() => setActiveSection('users')}
            />
            <SidebarLink
              icon={<IconArrowRightLeft size={20} />}
              label="Returns"
              isActive={activeSection === 'returns'}
              onClick={() => setActiveSection('returns')}
            />
            <SidebarLink
              icon={<IconTruck size={20} />}
              label="Suppliers"
              isActive={activeSection === 'suppliers'}
              onClick={() => setActiveSection('suppliers')}
            />
          </nav>
        </div>
        {/* Logout button at the bottom of the sidebar */}
        <SidebarLink
          icon={<IconLogOut size={20} />}
          label="Logout"
          color="text-red-600"
          isActive={false} // Logout is never "active" in terms of navigation
          onClick={logoutUser}
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 space-y-8">
        {/* Dashboard Overview Section */}
        {activeSection === 'dashboard' && (
          <>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card
                title="Total Sales"
                value="$12,430"
                icon={<IconDollarSign size={24} className="text-green-600" />}
                color="bg-green-100"
              />
              <Card
                title="New Users"
                value="1,230"
                icon={<IconUserPlus size={24} className="text-purple-600" />}
                color="bg-purple-100"
              />
              <Card
                title="Products in Stock"
                value="5,876"
                icon={<IconBox size={24} className="text-blue-600" />}
                color="bg-blue-100"
              />
              <Card
                title="Pending Orders"
                value="45"
                icon={<IconShoppingCart size={24} className="text-orange-600" />}
                color="bg-orange-100"
              />
            </div>

            {/* Charts and Recent Activity Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sales Overview Chart Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6 h-80 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview (Last 30 Days)</h3>
                <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                  [Placeholder for a Sales Line Chart (e.g., using Recharts)]
                </div>
              </div>

              {/* Recent Activity Table Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6 h-80 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="text-gray-600 text-sm overflow-y-auto h-56">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span>Order #1001 processed by Admin.</span>
                      <span className="text-xs text-gray-500">2 mins ago</span>
                    </li>
                    <li className="flex items-center justify-between p-2">
                      <span>New product "Wireless Mouse" added.</span>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </li>
                    <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span>User "John Doe" registered.</span>
                      <span className="text-xs text-gray-500">3 hours ago</span>
                    </li>
                    <li className="flex items-center justify-between p-2">
                      <span>Stock updated for "Gaming Keyboard".</span>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </li>
                    <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span>Sale #998 refunded.</span>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </li>
                    <li className="flex items-center justify-between p-2">
                      <span>New supplier "Tech Supplies Inc." added.</span>
                      <span className="text-xs text-gray-500">3 days ago</span>
                    </li>
                    <li className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span>Order #997 fulfilled.</span>
                      <span className="text-xs text-gray-500">4 days ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Placeholder for other sections */}
        {activeSection !== 'dashboard' && (
          <div className="bg-white rounded-xl shadow-lg p-10 h-96 flex items-center justify-center text-gray-500 text-2xl font-semibold">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Management Section
            <IconChevronRight size={24} className="ml-2" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
