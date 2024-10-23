import Link from "next/link";
import { stackServerApp } from "@/stack";

export default async function SideBar() {

    const data = await fetch('http://localhost:8888/sections')
    const sections = await data.json();
    await stackServerApp.getUser({ or: 'redirect' });

    return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
            </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <div>
                <h2>Sections</h2>
            </div>
            <ul className="menu text-base-content min-h-full w-80 p-4 ">
            {/* Sidebar content here */}
                {sections.map((section) => 
                <li key={ sections.section_id }>
                    <Link href={`/learn/${section.slug_field}`} className='hover:text-indigo-800 hover:text-lg'>{section.section_name}</Link>
                </li>)}
            </ul>
        </div>
    </div>
    )
}