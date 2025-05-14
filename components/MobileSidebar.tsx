import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Link } from "react-router"
import NavItems from "./NavItems"

const MobileSidebar = () => {
    let sidebar: SidebarComponent
    const toogleSidebar = () => {
        // @ts-ignore
        sidebar.toggle();
    }
    return (
        <div className="mobile-sidebar wrapper">
            <header>
                <Link to='/'>
                    <img src='/assets/icons/logo.svg' alt="" className="size-[30px]" />
                    <h1>TourHabasha</h1>
                </Link>
                {/* @ts-ignore */}
                <button onClick={toogleSidebar} className="cursor-pointer">
                    <img src="/assets/icons/menu.svg" alt="" className="size-7" />
                </button>
            </header>
            {/* @ts-ignore */}
            <SidebarComponent width={270} ref={(Sidebar) => sidebar = Sidebar} closeOnDocumentClick={true} showBackdrop={true} type="over">
                <NavItems handleClick = {toogleSidebar} />
            </SidebarComponent>
        </div>
    )
}

export default MobileSidebar