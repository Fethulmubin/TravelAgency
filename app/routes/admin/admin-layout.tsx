// routes/admin/admin-layout.tsx
// import { Outlet } from "react-router/dev";
import React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { Outlet, redirect } from 'react-router';
import NavItems from 'components/NavItems';
import MobileSidebar from 'components/MobileSidebar';
import { account } from '~/appwrite/client';
import { getExistingUser, storeUserData } from '~/appwrite/auth';

// import { Outlet } from 'react-router';
export async function clientLoader() {
    try {
        const user = await account.get();
        console.log(user)

        if(!user.$id) return redirect('/sign-in');

        const existingUser = await getExistingUser(user.$id);

        if(existingUser?.status === 'user') {
            console.log(existingUser)
            return redirect('/');
        }

        return existingUser?.$id ? existingUser : await storeUserData();
    } catch (e) {
        console.log('Error in clientLoader', e)
        return redirect('/sign-in')
    }
}

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
