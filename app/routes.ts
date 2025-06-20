import {type RouteConfig, route, layout, index} from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx' ),
    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all_users', 'routes/admin/All_users.tsx'),
    ]),
] satisfies RouteConfig;