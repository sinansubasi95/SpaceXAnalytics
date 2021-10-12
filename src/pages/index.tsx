import React from 'react';
import { SidebarLayout } from '../components/Layout/SidebarLayout';

export default function Index() {
  return (
    <SidebarLayout>
      <div>homepage</div>
    </SidebarLayout>
  )
}

/*

{
  heading: string,
  summary: {
    launched: string,
    location: string,
    mission: string,
    orbit: string,
    launch_status: string,
    rocket: string,
    booster: string,
    booster_landing: string,
    landing_location: string
  },
  details: string,
  images: [
    {
      id: string,
      url: string
    }
  ]
}

*/