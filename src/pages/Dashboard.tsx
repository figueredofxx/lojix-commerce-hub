
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { OverviewPage } from '@/components/dashboard/pages/OverviewPage';
import { ProductsPage } from '@/components/dashboard/pages/ProductsPage';
import { InventoryPage } from '@/components/dashboard/pages/InventoryPage';
import { POSPage } from '@/components/dashboard/pages/POSPage';
import { SalesPage } from '@/components/dashboard/pages/SalesPage';
import { CatalogPage } from '@/components/dashboard/pages/CatalogPage';
import { CRMPage } from '@/components/dashboard/pages/CRMPage';
import { ForecastPage } from '@/components/dashboard/pages/ForecastPage';
import { SettingsPage } from '@/components/dashboard/pages/SettingsPage';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          
          <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-x-hidden">
            <Routes>
              <Route index element={<OverviewPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="pos" element={<POSPage />} />
              <Route path="sales" element={<SalesPage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="crm" element={<CRMPage />} />
              <Route path="forecast" element={<ForecastPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
