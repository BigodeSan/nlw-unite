import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableCell extends ComponentProps<'th'> {}

export function TableCell(props: TableCell) {
  return (
    <th
      {...props}
      className={twMerge(
        'px-4 py-3 text-left text-sm font-semibold',
        props.className,
      )}
    />
  )
}
