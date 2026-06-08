"use client"

import type { ComponentType, ReactNode, SVGProps } from "react"

import { ArrowUpRight, CalendarClock } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LinkedInIcon, ThreadsIcon } from "@/components/brand-icons"
import FacePhoto from "@/components/facephoto"
import { ThemeToggle } from "@/components/theme-toggle"

const ROLE = "System Architect · Full-stack Engineer"
const LEAD =
  "When you have an idea but no path to production, I architect it and build it — services and UIs, end to end."
const ABOUT =
  "10+ years turning ideas into production products. I define the architecture and migration path, then ship the system on top — from WebRTC conferencing and 11-nines data access to payment platforms and content systems."

const STACK = [
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Next.js",
  "Go",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Linux",
  "NGINX",
]

const PROJECTS = [
  {
    name: "riga.tech",
    url: "https://riga.tech",
    job: "The job: help Latvia's tech community find work, learn, and connect — jobs, courses & events in one platform.",
  },
  {
    name: "skipperkit.com",
    url: "https://skipperkit.com",
    job: "The job: get sailors certified — maritime courses, training & certification, end to end.",
  },
]

type Contact = {
  label: string
  handle: string
  url: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const CONTACTS: Contact[] = [
  {
    label: "LinkedIn",
    handle: "in/andrejsrinkevics",
    url: "https://www.linkedin.com/in/andrejsrinkevics/",
    icon: LinkedInIcon,
  },
  {
    label: "Threads",
    handle: "@rinkevich",
    url: "https://www.threads.com/@rinkevich",
    icon: ThreadsIcon,
  },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-muted-foreground font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase">
      {children}
    </h2>
  )
}

export function BusinessCard() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.04 },
    },
  }
  const item = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
        },
      }

  return (
    <Card className="rounded-primary border-border/60 bg-card shadow-primary relative w-full max-w-[34rem] gap-0 p-7 sm:p-9">
      <ThemeToggle className="absolute top-3 right-3" />

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Header */}
        <motion.header
          variants={item}
          className="flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <Avatar className="ring-border size-20 rounded-3xl ring-1 sm:size-24">
            <FacePhoto />
          </Avatar>
          <div className="space-y-2">
            <p className="text-muted-foreground pr-9 font-mono text-[0.7rem] tracking-[0.18em] uppercase sm:pr-12">
              {ROLE}
            </p>
            <h1 className="font-display text-foreground text-3xl font-semibold tracking-tight">
              Andrejs Rinkevičs
            </h1>
            <Badge
              variant="outline"
              className="text-muted-foreground gap-2 rounded-full py-1 pr-3 pl-2.5 font-mono text-[0.7rem] font-normal"
            >
              <span className="relative flex size-2">
                <span className="bg-online absolute inline-flex size-full animate-ping rounded-full opacity-70 motion-reduce:hidden" />
                <span className="bg-online relative inline-flex size-2 rounded-full" />
              </span>
              Riga, Latvia · Available
            </Badge>
          </div>
        </motion.header>

        {/* Lead + about */}
        <motion.div variants={item} className="mt-7 space-y-3">
          <p className="text-foreground text-base leading-relaxed text-pretty">
            {LEAD}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {ABOUT}
          </p>
        </motion.div>

        <Separator className="my-7" />

        {/* Stack */}
        <motion.section variants={item}>
          <SectionLabel>Stack</SectionLabel>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {STACK.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-md font-mono text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        <Separator className="my-7" />

        {/* Projects */}
        <motion.section variants={item}>
          <SectionLabel>Building now</SectionLabel>
          <ul className="mt-3 space-y-2.5">
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-border/60 bg-background/40 hover:border-brand/40 hover:bg-accent focus-visible:ring-brand block rounded-xl border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-foreground font-medium">
                      {project.name}
                    </span>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-brand size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {project.job}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        <Separator className="my-7" />

        {/* Contacts */}
        <motion.section variants={item}>
          <SectionLabel>Get in touch</SectionLabel>
          <div className="mt-3 space-y-3">
            <Button
              asChild
              className="focus-visible:ring-brand w-full gap-2 focus-visible:ring-2"
            >
              <a
                href="https://cal.com/rinkevich/intro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarClock className="size-4" />
                Book an intro call
              </a>
            </Button>
            <TooltipProvider delayDuration={150}>
              <div className="flex flex-wrap gap-2">
                {CONTACTS.map((contact) => {
                  const Icon = contact.icon
                  const external = contact.url.startsWith("http")
                  return (
                    <Tooltip key={contact.label}>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="focus-visible:ring-brand flex-1 justify-center gap-1.5 px-2 focus-visible:ring-2"
                        >
                          <a
                            href={contact.url}
                            {...(external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            <Icon className="size-3.5 shrink-0" />
                            <span className="text-xs">{contact.label}</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="font-mono">
                        {contact.handle}
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </TooltipProvider>
          </div>
        </motion.section>
      </motion.div>
    </Card>
  )
}
