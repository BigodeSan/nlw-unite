import { ComponentProps } from 'react'

interface TableHeader extends ComponentProps<'th'> {}

export function TableHeader(props: TableHeader) {
  return <th className="px-4 py-3 text-left text-sm text-zinc-300" {...props} />
}
