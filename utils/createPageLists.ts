import { importAll } from './importAll'

// Function to create pages lists from the file names
export function createPageList(files: any, base: any) {
  return importAll(files).reduce((accumulator: any, currentValue: any) => {
    let slug = currentValue.fileName.substr(2).replace(/\.mdx$/, '')
    return {
      ...accumulator,
      [slug]: { ...currentValue.module.default, href: `/${base}/${slug}` },
    }
  }, {})
}
