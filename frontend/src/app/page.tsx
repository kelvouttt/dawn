import Link from 'next/link';
import { stackServerApp } from "@/stack";
import SideBar from "@/components/SideBar";

export default async function Home() {

  const data = await fetch('http://localhost:8888/sections');
  const sections = await data.json();

  await stackServerApp.getUser({ or: 'redirect' });

  return (
    <div className="flex flex-col max-w-none min-h-screen m-8 md:my-24 md:mx-24 lg:my-12 lg:mx-24 2xl:my-16 2xl:mx-48 prose">
      <div className="mb-6">
        <h1>Start learning</h1>
      </div>
      <div className="">
        <ul>
          {sections.map((section) => 
            <li key={ section.section_id }>
              <Link href={`/learn/${section.slug_field}`} className='hover:text-indigo-800 hover:text-lg'>{section.section_name}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
