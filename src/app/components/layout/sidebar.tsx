// components/SidebarLink.tsx
import React from 'react';

export type SidebarLinkProps = {
  icon: React.ReactNode;
  label: string;
  color?: string;
  onClick?: () => void;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, color = 'text-gray-700', onClick }) => {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer hover:text-blue-600 transition font-medium ${color}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SidebarLink;
