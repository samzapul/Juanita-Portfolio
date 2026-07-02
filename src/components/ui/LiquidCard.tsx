import clsx from 'clsx'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type Shade = 'cream' | 'dark' | 'pink'

interface LiquidCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  shade?: Shade
  as?: ElementType
}

const shades: Record<Shade, string> = {
  cream: 'bg-[#FAF9F6] border border-[#E8E6E1] shadow-[0_4px_28px_rgba(26,26,26,0.07)]',
  dark:  'bg-[#1B1F3B] shadow-[0_4px_28px_rgba(27,31,59,0.18)]',
  pink:  'bg-[#F19DAF] shadow-[0_4px_28px_rgba(241,157,175,0.22)]',
}

export default function LiquidCard({
  children,
  className,
  style,
  shade = 'cream',
  as: Tag = 'div',
}: LiquidCardProps) {
  return (
    <Tag
      className={clsx('rounded-[24px] overflow-hidden', shades[shade], className)}
      style={style}
    >
      {children}
    </Tag>
  )
}
