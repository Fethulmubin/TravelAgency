// routes/admin/admin-layout.tsx
// import { Outlet } from "react-router/dev";
import React from 'react';
import { Outlet } from 'react-router';
// import { Outlet } from 'react-router';

export default function AdminLayout() {
    return (
        <div className='admin-layout'>
          mobileSidebar
          <aside className='w-full max-w-[270px] hidden lg:block'>
            Sidebar
          </aside>
          <aside className='children'>
            <Outlet/>
          </aside>
        </div>
    );
}
