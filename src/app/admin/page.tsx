// 'use client';

// import React from 'react';
// import { logoutUser } from '../apifolder/auth'; // make sure path is correct
// import {
//   BarChart3,
//   Package,
//   ShoppingCart,
//   Users,
//   LogOut,
// } from 'lucide-react';

// // Type for sidebar link props
// type SidebarLinkProps = {
//   icon: React.ReactNode;
//   label: string;
//   color?: string;
//   onClick?: () => void;
// };

// // Reusable SidebarLink component
// const SidebarLink: React.FC<SidebarLinkProps> = ({
//   icon,
//   label,
//   color = 'text-gray-700',
//   onClick,
// }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-3 cursor-pointer hover:text-blue-600 transition font-medium ${color}`}
//   >
//     {icon}
//     <span>{label}</span>
//   </button>
// );

// // Reusable Card component
// const Card: React.FC<{ title: string; value: string }> = ({ title, value }) => (
//   <div className="bg-white rounded-xl shadow p-6">
//     <h3 className="text-lg font-semibold mb-2">{title}</h3>
//     <p className="text-2xl font-bold text-blue-600">{value}</p>
//   </div>
// );

// const Admin = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-full lg:w-1/4 bg-white shadow-lg flex flex-col justify-between p-6">
//         <div>
//           <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
//           <nav className="flex flex-col gap-4">
//             <SidebarLink icon={<BarChart3 />} label="Dashboard" />
//             <SidebarLink icon={<Package />} label="Products" />
//             <SidebarLink icon={<ShoppingCart />} label="Sales" />
//             <SidebarLink icon={<Users />} label="Users" />
//           </nav>
//         </div>
//         <SidebarLink
//           icon={<LogOut size={20} />}
//           label="Logout"
//           color="text-red-500"
//           onClick={logoutUser}
//         />
//       </aside>

//       {/* Main Content */}
//       <main className="w-full lg:w-3/4 p-6 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Card title="Total Sales" value="$12,430" />
//           <Card title="New Users" value="1,230" />
//         </div>

//         <div className="grid grid-cols-1 gap-6">
//           <div className="bg-white rounded-xl shadow p-6 h-64">
//             <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
//             <div className="text-gray-400 text-sm">[Insert Chart or Data Here]</div>
//           </div>
//           <div className="bg-white rounded-xl shadow p-6 h-64">
//             <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
//             <div className="text-gray-400 text-sm">[Insert Logs or Table Here]</div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Admin;
