import React from 'react';
import { SidebarLayout } from '../components/Layout/SidebarLayout';
import { DashboardContent } from '@/components/Content';
import { data } from 'src/storage/dashboard';

export default function Index() {
  return (
    <SidebarLayout>
      <DashboardContent data={data} />
    </SidebarLayout>
  );
}
