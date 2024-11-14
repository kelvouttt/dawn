import Link from "next/link";
import { stackServerApp } from "@/stack";

export default async function SideBar() {

    const data = await fetch('http://localhost:8888/sections', { next: { revalidate: 600 }});
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
            <div className="pl-10">
                <h2>Sections</h2>
            </div>
            <ul className="menu w-80 p-2 border-l">
            {/* Sidebar content here */}
                {sections.data.map((section) => 
                <li key={ sections.section_id }>
                    <Link href={`/learn/${section.slug_field}`} 
                    className='hover:bg-inherit hover:text-indigo-800 no-underline block hover:font-bold hover:border-none'>
                        {section.section_name}
                    </Link>
                </li>)}
            </ul>
        </div>
    </div>
    )
}