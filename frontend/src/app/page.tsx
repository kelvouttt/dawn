import Link from 'next/link';
import { stackServerApp } from "@/stack";
import { getServerUrl } from '@/lib/utils';

interface Section {
  section_id: number,
  section_name: string,
  difficulty: number,
  slug_field: string,
}

export default async function Home() {

  const data = await fetch(`${getServerUrl()}/sections`, { next: { revalidate: 600 }});
  const sections = await data.json();
  await stackServerApp.getUser({ or: 'redirect' });

  return (
    <div className="flex flex-col max-w-none min-h-screen m-8 md:my-24 md:mx-24 lg:my-12 lg:mx-24 2xl:my-16 2xl:mx-48 prose">
      <div className="mb-6">
        <h1>Start learning</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {sections.data.map((section: Section) => 
          <div key={ section.section_id }>
            <Link href={`/learn/${section.slug_field}`} scroll={false} className='hover:text-indigo-800 hover:font-bold no-underline'>{section.section_name}</Link>
          </div>
        )}
      </div>
    </div>
  )
}
