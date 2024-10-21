import Link from 'next/link';

export default async function Home() {

  const data = await fetch('http://localhost:8888/sections', {cache: 'no-store'});
  const sections = await data.json();
  
  return (
    <div className="m-8 p-8 prose">
      <h1 className="pb-5">Learn</h1>
      <ul>
        {sections.map((section) => 
          <li key={ section.section_id }>
            <Link href={`/learn/${section.slug_field}`} className='hover:text-indigo-800 hover:text-lg'>{section.section_name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
