import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Page from '../../../sections/simple-present-tense.mdx'

export default async function Section({ params }: { params: { slug: string } }) {
    const res = await fetch(`http://localhost:8888/sections/${params.slug}`);
    // Essentially, the [slug] folder is passed to the slug as string an this gets passed to params.
    const section = await res.json();
    const mdDir = path.join(process.cwd(), "src", "sections");
    const mdFiles = fs.readdirSync(mdDir);

    const bodyContent = mdFiles.map((mdFile) => {
        const slug = mdFile.replace('.mdx', '');
        const fullPath = path.join(mdDir, mdFile);
        const mdFileContents = fs.readFileSync(fullPath, 'utf8');

        const { data: frontMatter } = matter(mdFileContents);

        return {
            slug,
            meta: frontMatter
        }

    })

    // const file = matter.read(`src/sections/${params.slug}.mdx`)
    // console.log(file.matter)
    return (
        <div className="p-8 m-8 prose">
            <h1>{section.section_name}</h1>
            <p>Difficulty: {section.difficulty}</p>
            <Page />
            {/* {file.matter} */}
        </div>
    )
}