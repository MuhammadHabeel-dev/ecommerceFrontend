'use client';

import { ReactNode, useState } from 'react';
import {
    Store,
    Package,
    BarChart2,
    Settings,
    LogOut,
} from 'lucide-react';

const SidebarLink = ({ icon, label, color = 'text-gray-700', onClick }: { icon: ReactNode; label: string; color?: string; onClick?: () => void }) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 transition font-medium px-2 py-1 rounded ${color} hover:text-blue-600 cursor-pointer`}
    >
        {icon}
        {label}
    </div>
);

const StatCard = ({ title, value }: { title: string; value: string | number }) => (
    <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
);

const StoreOverview = () => (
    <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Store Details</h3>
        <form className="space-y-4">
            <input type="text" placeholder="Phone" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="text" placeholder="Store Name" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="text" placeholder="Store Slug" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />
            <input type="file" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />
            <textarea placeholder="Description" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />
            <input type="text" placeholder="Address" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="text" placeholder="City" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="text" placeholder="Country" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <button type="submit" className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 transition">Save Store</button>
        </form>
    </div>
);

const AddProduct = () => (
    <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Add Product</h3>
        <form className="space-y-4">
            <input type="text" placeholder="Product Name" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="text" placeholder="Title" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />
            <input type="text" placeholder="Short Description" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />
            <textarea placeholder="Full Description" rows={4} className="w-full border border-gray-300 py-2 px-2 rounded focus:outline-none" />
            <input type="number" placeholder="Price" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="number" placeholder="Sale Price" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />
            <input type="date" className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <button type="submit" className="bg-green-500 text-white w-full py-3 rounded hover:bg-green-600 transition">Add Product</button>
        </form>
    </div>
);

const AllProducts = () => (
    <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">All Products</h3>
        <table className="w-full text-left">
            <thead>
                <tr>
                    <th className="py-2 border-b">Name</th>
                    <th className="py-2 border-b">Price</th>
                    <th className="py-2 border-b">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 border-b">Sample Product</td>
                    <td className="py-2 border-b">$100</td>
                    <td className="py-2 border-b">2025-07-08</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const SalesReport = () => (
    <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Sales Report</h3>
        <table className="w-full text-left">
            <thead>
                <tr>
                    <th className="py-2 border-b">Date</th>
                    <th className="py-2 border-b">Product</th>
                    <th className="py-2 border-b">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 border-b">2025-07-08</td>
                    <td className="py-2 border-b">Sample Product</td>
                    <td className="py-2 border-b">$100</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const Seller = () => {
    const [activeSection, setActiveSection] = useState<'store' | 'products' | 'addProduct' | 'sales'>('store');

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-8">Seller Panel</h2>
                    <nav className="flex flex-col gap-5 text-gray-700 font-medium">
                        <SidebarLink icon={<Store size={20} />} label="Store Overview" onClick={() => setActiveSection('store')} />
                        <SidebarLink icon={<Package size={20} />} label="Manage Products" onClick={() => setActiveSection('products')} />
                        <SidebarLink icon={<Package size={20} />} label="Add Product" onClick={() => setActiveSection('addProduct')} />
                        <SidebarLink icon={<BarChart2 size={20} />} label="Sales Report" onClick={() => setActiveSection('sales')} />
                        <SidebarLink icon={<Settings size={20} />} label="Settings" />
                        <SidebarLink icon={<LogOut size={20} />} label="Logout" color="text-red-500" />
                    </nav>
                </div>
            </aside>

            <main className="w-full lg:w-3/4 p-6 space-y-6">
                <section className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-2">Welcome Seller 👋</h2>
                    <p className="text-gray-600">Manage your products and track sales here.</p>
                </section>

                {activeSection === 'store' && <StoreOverview />}
                {activeSection === 'addProduct' && <AddProduct />}
                {activeSection === 'products' && <AllProducts />}
                {activeSection === 'sales' && <SalesReport />}
                
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StatCard title="Total Products" value="120" />
                    <StatCard title="Monthly Sales" value="$4,500" />
                </section>

            </main>
        </div>
    );
};

export default Seller;
