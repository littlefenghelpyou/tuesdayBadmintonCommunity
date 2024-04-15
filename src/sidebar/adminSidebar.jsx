import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"


export default function AdminSidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}

