// Function to import all mdx files
function importAll(r: any) {
  return r
    .keys()
    .filter((fileName: string) => fileName.startsWith('.'))
    .map((fileName: string) => ({
      slug: fileName.substr(2).replace(/\/index\.mdx$/, ''),
      fileName,
      module: r(fileName),
    }))
    .filter(({slug}: any) => !slug.included('/snippets'))
    .filter((p: any) => p.module.meta.private !== true)
    .sort((a: any, b: any) => dateSortDec(a.module.meta.date, b.module.meta.date));
}

// Sorting date in descending order
function dateSortDec(a: Date, b: Date) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

// Function to get all posts previews in the blog
export function getAllPostPreviews() {
  return importAll(require.context('../pages/blog/?preview', true, /\.mdx$/));
}

// Function to get all posts in the blog
export function getAllPosts() {
  return importAll(require.context('../pages/blog/?rss', true, /\.mdx$/));
}
