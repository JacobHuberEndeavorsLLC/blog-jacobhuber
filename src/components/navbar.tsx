'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import ConnectButton from './connect-button'

const routes = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/resume',
    label: 'Resume',
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between w-full px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Jacob Huber</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === route.href ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
          ))}
          <ConnectButton />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block px-2 py-1 text-lg transition-colors hover:text-primary',
                    pathname === route.href ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <ConnectButton />
              </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}