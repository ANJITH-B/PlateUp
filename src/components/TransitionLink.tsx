"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import { cn } from "@/utils/cn"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }
  const text = pathname !== href ? "text-white" : "text-orange-500"
  return (
    <button
      className={cn("text-md font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:to-orange-500 hover:from-orange-600 transition-all", text)}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink
