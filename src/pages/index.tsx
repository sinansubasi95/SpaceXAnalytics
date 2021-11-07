import React from 'react';
import { SidebarLayout } from '../components/Layout/SidebarLayout';
import { DashboardContent } from '@/components/Content';

export default function Index() {
  return (
    <SidebarLayout>
      <DashboardContent />
    </SidebarLayout>
  );
}
