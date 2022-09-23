// Utility function to convert a kebab-case string into a Title Case string

export function kebabToTitleCase(str: string): string {
  return str
    .replace(/(?:^|-)([a-z])/gi, (match, group1) => `${group1.toUpperCase()}`)
    .trim()
}
