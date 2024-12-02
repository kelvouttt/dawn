import { stackServerApp } from "@/stack";
import { 
    getServerUrl,
    getHtmlPost,
 } from '@/lib/utils';
import SideBar from '@/components/SideBar';
import Link from 'next/link';

export default async function Section({ params }: { params: { slug: string } }) {
    const res = await fetch(`${getServerUrl()}/sections/${params.slug}`, { next: { revalidate: 600 } });
    // Essentially, the [slug] folder is passed to the slug as string and this gets passed to params.
    const section = await res.json();

    // const { content } = await getPost(params.slug);
    const { contentHtml } = await getHtmlPost(params.slug);

    await stackServerApp.getUser({ or: 'redirect' });
    return (
        <div className="flex m-8 md:my-24 md:mx-24 lg:my-12 lg:mx-24 2xl:my-16 2xl:mx-48">
        {/* this is the container of the elements inside (sidebar) and the contents of the page */}
            <div className="grow-0 prose">
            {/* using prose here so it can be formatted / styled correctly 
                also using grow-0 to prevent it to fill any empty space*/}
                <SideBar />
            </div>
            <div className="prose grow max-w-6xl mx-16">
            {/* 1. using grow to fill empty space and max-w-4xl to control the max width, caveat: won't work without the grow */}
                <div id="main-header" className="">
                    <div id="inner-header" className="breadcrumbs text-lg">
                        <ul>
                            <li><Link href="/" scroll={false} className="no-underline text-amber-600 hover:text-blue-700 hover:underline">Home</Link></li>
                            <li>{section.section_name}</li>
                        </ul>
                    </div>
                    <h1>{section.section_name}</h1>
                    <h4>Difficulty level: {section.difficulty}</h4>
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
        </div>
    )
}