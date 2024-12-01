import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import DOMPurify from 'isomorphic-dompurify';
import rehypeFormat from 'rehype-format';
import { rehype } from 'rehype';
// All the helper functions will live here

export function getUrl() {
    if (process.env.NODE_ENV === "development") { 
        return process.env.NEXT_PUBLIC_APP_URL
    }
}

export function getServerUrl() {
    if (process.env.NODE_ENV === "development") {
        return process.env.MARIADB_BACKEND_URL
    }
}

export async function getHtmlPost(slug: string) {
    const htmlFile = fs.readFileSync(
        path.join(process.cwd(), 'src', 'sections', `${slug}.html`),
        'utf-8');

    const dom = new JSDOM(htmlFile)
    // Sanitize the HTML to protect from XSS attack, this is needed as we are using 'dangerouslySetInnerHTML' below
    const bodyContent = DOMPurify.sanitize(dom.window.document.body.innerHTML);
    const formatContent = await rehype()
        .use(rehypeFormat)
        .process(bodyContent)

    return {
        contentHtml: String(formatContent)
    }
}