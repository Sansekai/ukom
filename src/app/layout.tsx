'use client';
import { ThemeProvider } from '@/components/theme-provider';
import React, { useState } from 'react';
import './globals.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from '@/components/ui/toggle-dark-mode';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  const router = useRouter();

  const [keyword, setKeyword] = useState('');

  //check active route
  const isActive = (pathname: string) => {
    return currentPath === pathname ? 'font-bold' : '';
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Info Movie</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sheet>
            <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                  <Link
                    className="mr-4 flex items-center space-x-2 lg:mr-6"
                    href="/"
                  >
                    <span className="hidden font-bold lg:inline-block">
                      Movie Info
                    </span>
                  </Link>
                  <nav className="flex items-center gap-4 text-sm lg:gap-6">
                    <Link
                      className={`transition-colors hover:text-foreground/80 text-foreground/60 ${isActive(
                        '/'
                      )}`}
                      href="/"
                    >
                      Home
                    </Link>
                    {/* <Link
                    className={`transition-colors hover:text-foreground/80 text-foreground/60 ${isActive(
                      '/latest'
                    )}`}
                    href="/latest"
                  >
                    Latest
                  </Link> */}
                  </nav>
                </div>
                <SheetTrigger>
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                    <svg
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3 5H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 12H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 19H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                  </div>
                </SheetTrigger>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <div className="w-full flex-1 md:w-auto md:flex-none">
                    <input
                      type="text"
                      value={keyword}
                      placeholder="Cari..."
                      onChange={(e) => setKeyword(e.currentTarget.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          router.push(`/search/${e.currentTarget.value}`);
                          //reset input value
                          setKeyword('');
                        }
                      }}
                      className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                    />
                  </div>
                  <nav className="flex items-center">
                    <ModeToggle />
                  </nav>
                </div>
              </div>
            </header>
            <main className="container max-w-screen-2xl pt-5 pb-28">
              {children}
              <Analytics />
            </main>
            <footer className="container text-center py-5 max-w-screen-2xl fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950">
              <p>
                Made with <span className="text-red-500"> &hearts;</span>{' '}
                <a
                  href="https://github.com/sansekai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline cursor-pointer"
                >
                  Yusril
                </a>
              </p>
            </footer>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Movie Info</SheetTitle>
              </SheetHeader>
              <div className="pt-5">
                <ul className="text-md space-y-1">
                  <li>
                    <SheetClose asChild>
                      <Link
                        className={`transition-colors hover:text-foreground/80 text-foreground/60 ${isActive(
                          '/'
                        )}`}
                        href="/"
                      >
                        Home
                      </Link>
                    </SheetClose>
                  </li>
                  {/* <li>
                  <SheetClose asChild>
                    <Link
                      className={`transition-colors hover:text-foreground/80 text-foreground/60 ${isActive(
                        '/latest'
                      )}`}
                      href="/latest"
                    >
                      Latest
                    </Link>
                  </SheetClose>
                </li> */}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </ThemeProvider>
      </body>
    </html>
  );
}
