import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

async function getPost(slug: string) {
    const mdxFile = fs.readFileSync(
        path.join(process.cwd(), 'src', 'sections', `${slug}.mdx`), 
        'utf-8');

    const { frontmatter, content } = await compileMDX({
        source: mdxFile,
        options: { parseFrontmatter: true }
    });

    return {
        frontmatter,
        content,
    }
}

export default async function Section({ params }: { params: { slug: string } }) {
    const res = await fetch(`http://localhost:8888/sections/${params.slug}`);
    // Essentially, the [slug] folder is passed to the slug as string and this gets passed to params.
    const section = await res.json();
    const { frontmatter, content } = await getPost(params.slug);

    return (
        <div className="p-8 m-8 prose">
            <h1>{section.section_name}</h1>
            <p>Difficulty: {section.difficulty}</p>
            <br />
            {content}
        </div>
    )
}