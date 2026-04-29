"use client"

import React from "react"
import Link from "next/link"
import { NavRoute } from "@/lib/types"
import signOut from "@/actions/auth/signOut"
import { usePathname, useRouter } from "next/navigation"
import { InboxIcon, LogOutIcon, NewspaperIcon, Trash2Icon, UsersIcon } from "lucide-react"
import LogoPlaceholder from "./LogoPlaceholder"

function SidebarLink({ name, href, children }: NavRoute) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      aria-selected={pathname === href}
      className="w-full px-3 py-1.5 flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100 aria-selected:bg-red-100 aria-selected:text-primary"
    >
      <div> {children} </div>
      <span>{name}</span>
    </Link>
  )
}

export default function SideBar() {
  const router = useRouter()

  return (
    <aside className='w-56 h-full min-h-screen flex flex-col justify-between border-r border-gray-100'>
      <div>
        <div className="h-14 p-2 flex items-center border-b border-gray-100">
          {/* profile component goes here */}
          <LogoPlaceholder />
        </div>

        <div className='p-2 flex flex-col gap-1'>
          <SidebarLink name="Inbox" href="/enquiries" ><InboxIcon className="w-4 h-4" aria-hidden /> </SidebarLink>
          <SidebarLink name="Team" href="/team" ><UsersIcon className="w-4 h-4" aria-hidden /> </SidebarLink>
        </div>
      </div>

      <form action={signOut} className="p-2">
        <button className='px-3 py-1.5 w-full flex items-center gap-2 bg-transparent hover:bg-gray-100 text-gray-500 rounded-lg'>
          <LogOutIcon size={16} aria-hidden />
          <span className='text-sm'>Sign out</span>
        </button>
      </form>

    </aside>
  )
}
