
import { LayoutDashboard, Package, ShoppingCart, Globe, Users, TrendingUp, Settings, Box, Receipt } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';

const navigation = [
  { title: 'Visão Geral', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Produtos', url: '/dashboard/products', icon: Box },
  { title: 'Inventário', url: '/dashboard/inventory', icon: Package },
  { title: 'PDV', url: '/dashboard/pos', icon: ShoppingCart },
  { title: 'Vendas', url: '/dashboard/sales', icon: Receipt },
  { title: 'Catálogo', url: '/dashboard/catalog', icon: Globe },
  { title: 'CRM', url: '/dashboard/crm', icon: Users },
  { title: 'Previsão', url: '/dashboard/forecast', icon: TrendingUp },
  { title: 'Configurações', url: '/dashboard/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-gray-200" style={{ backgroundColor: '#F7F7F7' }}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A535C' }}>
            <span className="text-white font-bold text-sm">L</span>
          </div>
          {state !== 'collapsed' && (
            <div>
              <h2 className="font-semibold text-lg" style={{ color: '#1A535C' }}>Lojix</h2>
              <p className="text-xs text-gray-500">Mini ERP SaaS</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'text-white' 
                            : 'text-gray-700 hover:text-white'
                        }`
                      }
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#1A535C' : 'transparent',
                        '&:hover': { backgroundColor: isActive ? '#1A535C' : '#4ECDC4' }
                      })}
                    >
                      <item.icon className="w-5 h-5" />
                      {state !== 'collapsed' && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
