export const mdxComponents = {
  img: (props: any) => (
    <div className="not-prose relative my-[2em] overflow-hidden rounded first:mt-0 last:mb-0">
      <img {...props} />
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/10" />
    </div>
  ),
  Footer: ({ children }: any) => (
    <p className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-200/5">
      {children}
    </p>
  ),
}
