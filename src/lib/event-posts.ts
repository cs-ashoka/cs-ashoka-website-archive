import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

type EventPost = {
    slug: string,
    title: string,
    date: string,
    imgList: string[]
    type: "image" | "video"
    // Optional frontmatter `cover:` picks the photo shown on the /events page.
    cover?: string
}

const postsDirectory = path.join(process.cwd(), '/src/eventposts')

// Event dates are written as DD/MM/YYYY (e.g. '25/09/2023' or '4/4/2024').
export function parseEventDate(date: string): Date {
    const [day, month, year] = String(date).split('/').map(Number)
    return new Date(year, month - 1, day)
}

// Shows a date as DD/MM/YYYY even if the file says '4/4/2024'.
export function formatEventDate(date: string): string {
    const d = parseEventDate(date)
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
}

// Ashoka's academic year starts in August: 18/09/2023 belongs to "2023–24".
export function getAcademicYear(date: Date): string {
    const start = date.getMonth() >= 7 ? date.getFullYear() : date.getFullYear() - 1
    return `${start}–${String(start + 1).slice(-2)}`
}

// The photo shown for an event: `cover` if set, else the first image in the
// gallery, else /img/events/<file-name>.png.
export function getCoverImage(event: EventPost): string {
    if (event.cover) return event.cover
    const imgList = event.imgList ?? []
    const types = (event.type ?? []) as unknown as string[]
    const firstImage = imgList.find((_, i) => types[i] !== 'video')
    return firstImage ?? `/img/events/${event.slug}.png`
}

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const eventPost: EventPost = {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            imgList: matterResult.data.imgList,
            type: matterResult.data.type,
            cover: matterResult.data.cover
        }

        // Combine the data with the id
        return eventPost
    });
    // Sort posts by date, newest first
    return allPostsData.sort(
        (a, b) => parseEventDate(b.date).getTime() - parseEventDate(a.date).getTime()
    );
}

export async function getPostData(slug: string) {
    // console.log(slug);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const eventPostWithHTML: EventPost & { contentHtml: string } = {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
        imgList: matterResult.data.imgList,
        type: matterResult.data.type
    }

    // Combine the data with the id
    return eventPostWithHTML
}
