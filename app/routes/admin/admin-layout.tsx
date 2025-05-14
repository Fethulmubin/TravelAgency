// routes/admin/admin-layout.tsx
// import { Outlet } from "react-router/dev";
import React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { Outlet } from 'react-router';
import NavItems from 'components/NavItems';
import MobileSidebar from 'components/MobileSidebar';

// import { Outlet } from 'react-router';

export default function AdminLayout() {
    return (
        <div className='admin-layout'>
            <MobileSidebar/>
            <aside className='w-full max-w-[270px] hidden lg:block'>
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems/>
                </SidebarComponent>
            </aside>
            <aside className='children'>
                <Outlet />
            </aside>
        </div>
    );
}
