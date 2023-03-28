/* commponents > layouts >  */
import { LayoutGeneral } from "../layouts/LayoutGeneral";
import { Admin } from "../pages/admin/Admin";
import { Singin } from "../pages/admin/Singin";

import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";
/* Components > Layouts > Pages > Routes */
const AdminRoutes=[
    {path: "/admin",component: Admin,layout: LayoutGeneral},
    {path: "/admin/sign-in", component: Singin, layout: LayoutGeneral}
];

const GeneralRoutes=[
    {path: "/",component: Home,layout: LayoutGeneral},
    {path: "/Contact",component: Contact,layout: LayoutGeneral},
    {path: "*",component: NotFound,layout: LayoutGeneral}
]


const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
