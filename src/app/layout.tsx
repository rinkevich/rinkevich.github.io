import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"

import { env } from "@/env.mjs"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ScreenSizeIndicator } from "@/components/devtools/screen-size-indicator"

import "./globals.css"

const fontDisplay = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
})

const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: siteConfig.firstName,
    lastName: siteConfig.lastName,
    username: siteConfig.username,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterCreator,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

// Runs before paint to set the theme class and avoid a flash of the wrong mode.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={cn(
          "bg-background text-foreground min-h-dvh font-sans antialiased",
          fontDisplay.variable,
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}
        <ScreenSizeIndicator />
        {env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
