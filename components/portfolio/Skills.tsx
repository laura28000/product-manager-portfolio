"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutGrid,
  Bot,
  BarChart2,
  Globe,
  Workflow,
} from "lucide-react"

// Tool logos as SVG components
const ToolLogos: Record<string, React.FC<{ className?: string }>> = {
  Notion: ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z"/>
      <path d="M61.35 16.903l-46.1 3.42c-2.07.18-2.643.36-4.143 1.65l-6.57 5.13c-.54.36-.36.72.36.72l47.52-3.06c2.07-.18 4.14.36 5.46 1.44l6.21 4.5c.54.36 1.08.18 1.08-.54v-8.46c0-.9-.54-1.26-1.62-1.08z" fill="var(--background)"/>
      <path d="M23.267 32.287v53.703c0 2.297.63 3.237 2.61 3.057l48.6-2.79c1.98-.18 2.61-1.26 2.61-3.237V30.197c0-1.8-.72-2.7-2.25-2.52l-50.85 2.97c-1.62.18-2.72 1.08-2.72 1.62z" fill="var(--background)"/>
      <path d="M71.817 35.847c.18.9 0 1.8-.9 1.89l-2.43.45v39.78c-2.07 1.08-4.05 1.71-5.67 1.71-2.61 0-3.33-.81-5.31-3.33l-16.29-25.56v24.75l5.04 1.17s0 1.8-2.52 1.8l-6.93.36c-.18-.36 0-1.26.63-1.44l1.62-.45V39.837l-2.25-.18c-.18-.9.27-2.16 1.62-2.25l7.47-.54 16.92 25.92V39.117l-4.23-.45c-.18-1.08.54-1.8 1.53-1.89z" fill="currentColor"/>
    </svg>
  ),
  Jira: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23.013 0z" fill="#2684FF"/>
    </svg>
  ),
  Figma: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  ),
  Canva: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="12" fill="#00C4CC"/>
      <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 9.6a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z" fill="white"/>
    </svg>
  ),
  ChatGPT: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10A37F"/>
    </svg>
  ),
  Claude: ({ className }) => (
    <svg className={className} viewBox="0 0 46 46" fill="none">
      <path d="M22.934 8.375c.914-2.17 3.274-2.17 4.188 0l2.46 5.84 6.29.516c2.34.192 3.286 2.4 1.834 4.003l-4.642 5.13 1.49 6.17c.556 2.298-1.418 3.952-3.44 2.74L26 29.5l-5.114 3.274c-2.022 1.213-3.996-.442-3.44-2.74l1.49-6.17-4.642-5.13c-1.452-1.603-.506-3.811 1.834-4.003l6.29-.516 2.516-5.84z" fill="#D97757"/>
    </svg>
  ),
  "Claude Code": ({ className }) => (
    <svg className={className} viewBox="0 0 46 46" fill="none">
      <path d="M22.934 8.375c.914-2.17 3.274-2.17 4.188 0l2.46 5.84 6.29.516c2.34.192 3.286 2.4 1.834 4.003l-4.642 5.13 1.49 6.17c.556 2.298-1.418 3.952-3.44 2.74L26 29.5l-5.114 3.274c-2.022 1.213-3.996-.442-3.44-2.74l1.49-6.17-4.642-5.13c-1.452-1.603-.506-3.811 1.834-4.003l6.29-.516 2.516-5.84z" fill="#D97757"/>
      <text x="23" y="42" textAnchor="middle" fontSize="8" fill="#D97757" fontFamily="monospace" fontWeight="bold">{`</>`}</text>
    </svg>
  ),
  Gemini: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 24A14.3 14.3 0 0 0 0 12 14.3 14.3 0 0 0 12 0a14.3 14.3 0 0 0 12 12 14.3 14.3 0 0 0-12 12z" fill="url(#gemini-grad)"/>
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285F4"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  "V0 Vercel": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 19.5h20L12 2z"/>
    </svg>
  ),
  Lovable: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF6B6B"/>
    </svg>
  ),
  Airtable: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.386.356L.893 4.46A.9.9 0 0 0 .9 6.15l10.49 3.91a1.8 1.8 0 0 0 1.265 0l10.49-3.91a.9.9 0 0 0 .007-1.689L12.657.356a1.8 1.8 0 0 0-1.271 0zm11.227 7.274l-6.318 2.355a.9.9 0 0 0-.595.847v9.188a.9.9 0 0 0 1.21.846l6.318-2.355a.9.9 0 0 0 .595-.847V8.477a.9.9 0 0 0-1.21-.847zM.9 8.477v9.188c0 .37.228.7.573.833l6.086 2.27c.66.245 1.364-.245 1.364-.938V11.42a.9.9 0 0 0-.627-.856L1.478 7.992A.9.9 0 0 0 .9 8.477z" fill="#FCB400"/>
    </svg>
  ),
  Make: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.64 5.637A8.37 8.37 0 0 0 3.648 12a8.37 8.37 0 0 0 8.37 8.37 8.37 8.37 0 0 0 8.37-8.37 8.37 8.37 0 0 0-1.993-5.363l1.504-1.504A10.35 10.35 0 0 1 22.37 12c0 5.73-4.64 10.37-10.37 10.37S1.63 17.73 1.63 12a10.35 10.35 0 0 1 2.508-6.867L5.64 5.637zM12 1.63l3.464 3.464-3.464 3.464L8.536 5.094 12 1.63zm0 2.829L10.365 6.094 12 7.73l1.635-1.635L12 4.459z" fill="#6D00CC"/>
    </svg>
  ),
  n8n: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm6 6a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" fill="#EA4B71"/>
      <path d="M13.5 7.5h-3v9h3v-9z" fill="#EA4B71"/>
    </svg>
  ),
  Mixpanel: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.108 0C9.867 0 5.62 4.247 5.62 9.488c0 5.24 4.247 9.487 9.488 9.487 5.24 0 9.487-4.247 9.487-9.487C24.595 4.247 20.348 0 15.108 0zm0 15.405a5.917 5.917 0 1 1 0-11.834 5.917 5.917 0 0 1 0 11.834z" fill="#7856FF"/>
      <path d="M4.085 9.488C4.085 4.247-.162 0-5.403 0v4.57a5.917 5.917 0 0 1 0 11.834v4.571c5.24 0 9.488-4.247 9.488-9.487z" fill="#7856FF" transform="translate(5.62)"/>
    </svg>
  ),
  Hotjar: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.5 18c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9.75c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V18zm0-10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5S11.172 6 12 6s1.5.672 1.5 1.5z" fill="#FF3C00"/>
    </svg>
  ),
  "Google Analytics": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.84 2.998v17.999a3.003 3.003 0 01-6.006 0V2.998a3.003 3.003 0 016.006 0zM13.5 21a3 3 0 11-6 0 3 3 0 016 0zm-7.497-6a3.003 3.003 0 00-3.003 3.003v3a3.003 3.003 0 006.006 0v-3A3.003 3.003 0 006.003 15z" fill="#F9AB00"/>
    </svg>
  ),
  "Google Business Profile": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
    </svg>
  ),
  WordPress: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.443 12c0-1.175.238-2.295.67-3.316l3.688 10.104A8.568 8.568 0 013.443 12zm8.557 8.557c-.883 0-1.733-.141-2.53-.4l2.687-7.807 2.753 7.544c.018.044.04.085.063.124-.893.352-1.874.539-2.973.539zm1.173-12.592c.54-.028 1.026-.085 1.026-.085.483-.057.426-.767-.057-.74 0 0-1.453.114-2.39.114-.883 0-2.365-.114-2.365-.114-.483-.028-.54.71-.057.74 0 0 .46.057.943.085l1.4 3.838-1.967 5.899-3.27-9.737c.54-.028 1.025-.085 1.025-.085.484-.057.427-.767-.056-.74 0 0-1.453.114-2.39.114-.168 0-.366-.004-.578-.01A8.534 8.534 0 0112 3.443c2.253 0 4.31.87 5.846 2.29-.037-.003-.073-.008-.111-.008-.883 0-1.51.768-1.51 1.595 0 .74.427 1.368.883 2.108.342.598.74 1.368.74 2.48 0 .768-.296 1.66-.684 2.903l-.896 2.994-3.095-9.203zm4.028 12.028l2.736-7.906c.512-1.276.681-2.296.681-3.204 0-.33-.022-.637-.062-.924a8.544 8.544 0 01.998 4.04c0 3.33-1.8 6.234-4.353 7.994z" fill="#21759B"/>
    </svg>
  ),
  "SEO local": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#34A853"/>
    </svg>
  ),
  "React.js": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  "React Native": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      <text x="12" y="22.5" textAnchor="middle" fontSize="3.5" fill="#61DAFB" fontFamily="sans-serif">Native</text>
    </svg>
  ),
  "Node.js": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.143-.139.242v10.15c0 .097.054.189.137.236l2.409 1.392c1.307.653 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.509 0-.909 0-2.026-.551l-2.304-1.327A1.85 1.85 0 011.35 17.07V6.921c0-.678.362-1.311.948-1.65L11.093.193a1.929 1.929 0 011.812 0l8.795 5.078c.585.339.949.972.949 1.65v10.15c0 .678-.364 1.309-.949 1.647l-8.795 5.078c-.28.164-.601.247-.921.247z" fill="#339933"/>
    </svg>
  ),
  "Express.js": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="currentColor"/>
    </svg>
  ),
  MongoDB: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248"/>
    </svg>
  ),
  "MongoDB Compass": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248" opacity="0.7"/>
      <circle cx="18" cy="6" r="4" fill="#47A248" opacity="0.5"/>
      <circle cx="18" cy="6" r="2" fill="#47A248"/>
    </svg>
  ),
  "MongoDB Atlas": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#47A248"/>
      <path d="M19 3l2 2-2 2-2-2 2-2zm0 0" fill="#13AA52"/>
    </svg>
  ),
  "API REST": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M6 9l2 3-2 3M12 9h4" strokeLinecap="round"/>
    </svg>
  ),
  HTML5: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75H12l.21-2.25H8.31L8.1 5.25h7.8l-.226 2.5H10.5l-.211 2.25H14.1l-.473 5.25-2.652.75-2.618-.734-.172-1.941H5.96l.338 3.999L12 19.016l5.703-1.562.766-8.516H12l.21-2.25H8.31L8.1 5.25" fill="#E34F26"/>
    </svg>
  ),
  CSS3: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H6.24l.24 2.573h8.55l-.289 3.052-2.712.805-2.729-.81-.177-1.967H6.55l.327 3.68 5.145 1.425 5.094-1.425.588-6.49.063-.7 1.233-13.88z" fill="#264DE4"/>
    </svg>
  ),
  JSX: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
      <path d="M4 7l4 5-4 5M12 17h8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Expo: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.399.678.678-.523 5.783-9.382 6.915-10.838 1.132 1.456 6.238 10.315 6.916 10.838.822.637 1.818.17 2.398-.678.489-.715.676-1.248.72-1.778.042-.53-.282-1.225-.72-2.063C16.178 12.754 12.274 5.17 12.032 4.87c-.242-.299-.53-.298-.77 0-.242.3-4.146 7.884-7.317 13.151-.437.838-.762 1.533-.72 2.063z" fill="#000020"/>
    </svg>
  ),
  GitHub: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Netlify: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.507 3.9l.543.543-2.038 2.038-.543-.543zM6.586 9.43l3.414 3.414-3.415 3.414L3.17 12.844zM17.414 9.43l3.415 3.414-3.415 3.415-3.415-3.415zM12 3.172l3.414 3.414L12 10 8.586 6.586z" fill="#00C7B7"/>
      <path d="M12 14l3.414 3.414L12 20.828l-3.414-3.414z" fill="#00C7B7"/>
    </svg>
  ),
  Northflank: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1E1E1E"/>
      <path d="M7 8h10v2H7zm0 3h10v2H7zm0 3h6v2H7z" fill="#00D4AA"/>
    </svg>
  ),
  Stripe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635BFF"/>
    </svg>
  ),
  Cloudinary: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.02 6.589c-2.31 0-4.24 1.585-4.79 3.723l-.183.71-.7-.21a2.64 2.64 0 00-.77-.117c-1.45 0-2.63 1.18-2.63 2.63 0 1.45 1.18 2.63 2.63 2.63h6.444a3.54 3.54 0 003.536-3.535c0-1.951-1.585-3.536-3.536-3.536v-2.295zm0 0c3.23 0 5.85 2.575 5.92 5.79a4.27 4.27 0 011.11 2.85c0 2.37-1.92 4.29-4.29 4.29H5.58c-2.56 0-4.64-2.08-4.64-4.64a4.64 4.64 0 014.03-4.596A6.79 6.79 0 0112.02 4.29v2.299z" fill="#3448C5"/>
    </svg>
  ),
  Dust: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1C1C1C"/>
      <circle cx="12" cy="12" r="4" fill="#E8E0D4"/>
      <circle cx="12" cy="12" r="2" fill="#1C1C1C"/>
      <circle cx="12" cy="7" r="1.2" fill="#E8E0D4"/>
      <circle cx="12" cy="17" r="1.2" fill="#E8E0D4"/>
      <circle cx="7" cy="12" r="1.2" fill="#E8E0D4"/>
      <circle cx="17" cy="12" r="1.2" fill="#E8E0D4"/>
    </svg>
  ),
  Perplexity: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#20808D"/>
      <path d="M12 4l5 4.5V14h-4v5h-2v-5H7V8.5L12 4zm0 2.5L9 9v3h2V9.5l1-1 1 1V12h2V9L12 6.5z" fill="white"/>
    </svg>
  ),
  Cursor: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#1A1A1A"/>
      <path d="M5 5l7 14 2.5-5.5L20 11 5 5z" fill="white"/>
      <path d="M14.5 13.5l3 5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Zapier: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.003 0C5.376 0 0 5.376 0 12.003c0 6.626 5.376 11.997 12.003 11.997 6.626 0 11.997-5.37 11.997-11.997C23.994 5.376 18.63 0 12.003 0zm5.506 14.703c.104-.39.155-.79.155-1.2a5.04 5.04 0 00-.155-1.2h2.16l-.02.15c.03.345.046.69.046 1.05 0 .36-.016.705-.046 1.05l.02.15h-2.16zm-1.68-4.8a5.193 5.193 0 00-1.05-1.485l1.53-1.53c.645.63 1.17 1.38 1.53 2.205l.12.27-1.98.6-.15-.06zm-1.755-2.355c-.45-.36-.96-.645-1.5-.84l.6-1.98.27.09c.825.33 1.575.825 2.19 1.44l-1.56 1.29zm-2.67-1.11a5.1 5.1 0 00-1.2-.15c-.405 0-.81.05-1.2.15V4.338l.15-.02c.345-.03.69-.046 1.05-.046.36 0 .705.016 1.05.046l.15.02v2.145zm-3.57.27a5.195 5.195 0 00-1.5.84l-1.29-1.56.27-.21a7.44 7.44 0 012.16-1.47l.27-.12.6 1.98-.51.54zm-2.355 1.755c-.39.45-.705.96-.9 1.5l-1.98-.6.09-.27a7.293 7.293 0 011.44-2.16l1.35 1.53zm-1.11 2.64c-.1.39-.15.795-.15 1.2 0 .405.05.81.15 1.2H4.14l-.02-.15a8.427 8.427 0 010-2.1l.02-.15h2.16v-.015.015zm1.11 3.57c.195.54.51 1.05.9 1.5l-1.35 1.53a7.293 7.293 0 01-1.44-2.16l-.09-.27 1.98-.6zm2.355 1.755c.45.36.96.645 1.5.84l-.6 1.98-.27-.09a7.44 7.44 0 01-2.16-1.44l1.53-1.29zm2.67 1.11c.39.1.795.15 1.2.15.405 0 .81-.05 1.2-.15v2.145l-.15.02c-.345.03-.69.046-1.05.046a8.538 8.538 0 01-1.05-.046l-.15-.02V19.8zm3.57-.27c.54-.195 1.05-.48 1.5-.84l1.29 1.53-.27.21a7.44 7.44 0 01-2.19 1.44l-.27.09-.6-1.98.54-.45zm2.355-1.755c.39-.45.705-.96.9-1.5l1.98.6-.09.27a7.293 7.293 0 01-1.53 2.19l-1.53-1.29.27-.27zM12 8.628a3.375 3.375 0 100 6.75 3.375 3.375 0 000-6.75z" fill="#FF4A00"/>
    </svg>
  ),
  "Looker Studio": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#4285F4" opacity="0.15"/>
      <circle cx="9" cy="12" r="5" fill="#EA4335" opacity="0.85"/>
      <circle cx="15" cy="12" r="5" fill="#FBBC04" opacity="0.85"/>
      <path d="M12 8.07a5 5 0 010 7.86A5 5 0 0112 8.07z" fill="#FF6D00" opacity="0.9"/>
    </svg>
  ),
  "Google Sheets": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.727 0H3.273C2.418 0 1.636.782 1.636 1.636v20.728C1.636 23.218 2.418 24 3.273 24h17.454c.855 0 1.637-.782 1.637-1.636V7.636L14.727 0z" fill="#23A566"/>
      <path d="M14.727 0v7.636H22.4L14.727 0z" fill="#18794E"/>
      <path d="M17.454 12.545H6.546v1.637h10.908v-1.637zm0 3.273H6.546v1.637h10.908v-1.637zm-5.454-6.545H6.546v1.636h5.454V9.273z" fill="white"/>
    </svg>
  ),
  Slack: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" fill="#E01E5A"/>
    </svg>
  ),
}

const categories = [
  {
    id: "pm",
    label: "Product Management & Collaboration",
    icon: LayoutGrid,
    color: "var(--teal)",
    tools: [
      { name: "Notion", desc: "Documentation produit, roadmap, cadrage, suivi d'actions" },
      { name: "Jira", desc: "Backlog, tickets, priorisation, suivi delivery" },
      { name: "Figma", desc: "Wireframes, prototypes, parcours utilisateur" },
      { name: "Canva", desc: "Supports visuels, présentations, contenus marketing" },
      { name: "Confluence", desc: "Documentation collaborative, wiki produit, alignement équipe" },
      { name: "Google Stitch", desc: "Idéation produit, génération d'interfaces et prototypage rapide" },
      { name: "Slack", desc: "Communication équipe, notifications, workflows collaboratifs" },
    ],
  },
  {
    id: "ai",
    label: "IA générative & Assistants",
    icon: Bot,
    color: "oklch(0.58 0.14 300)",
    tools: [
      { name: "ChatGPT", desc: "Recherche, structuration, analyse, productivité" },
      { name: "Claude", desc: "Analyse, cadrage produit, rédaction structurée" },
      { name: "Claude Code", desc: "Assistance au développement, refactoring, prototypage" },
      { name: "Gemini", desc: "Recherche, analyse, génération d'idées" },
      { name: "V0 Vercel", desc: "Prototypage rapide d'interfaces web" },
      { name: "Lovable", desc: "Création rapide d'applications, MVP et interfaces" },
      { name: "Dust", desc: "Assistants IA, workflows internes, recherche et automatisation métier" },
      { name: "RAG", desc: "Retrieval-Augmented Generation : LLMs contextuels et recherche sémantique" },
      { name: "Perplexity", desc: "Recherche augmentée, veille, analyse rapide" },
      { name: "Cursor", desc: "Prototypage rapide, assistance au développement et cadrage technique" },
    ],
  },
  {
    id: "automation",
    label: "Automatisation & Data Ops",
    icon: Workflow,
    color: "oklch(0.52 0.18 280)",
    tools: [
      { name: "Airtable", desc: "Base de données no-code, CRM, suivi projet, structuration d'informations" },
      { name: "Make", desc: "Automatisation de workflows, connexions entre outils, gain de temps opérationnel" },
      { name: "n8n", desc: "Automatisation avancée, workflows personnalisés, intégrations API" },
      { name: "Zapier", desc: "Automatisation no-code, connexions entre applications, workflows simples" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Insights",
    icon: BarChart2,
    color: "var(--gold)",
    tools: [
      { name: "Mixpanel", desc: "Analyse comportementale produit" },
      { name: "Hotjar", desc: "Analyse UX, heatmaps, feedback utilisateur" },
      { name: "Google Analytics", desc: "Mesure d'audience et performance" },
      { name: "Google Business Profile", desc: "Visibilité locale, avis clients, acquisition" },
      { name: "Looker Studio", desc: "Dashboards, reporting, visualisation de données" },
      { name: "Google Sheets", desc: "Suivi KPI, tableaux de bord légers, structuration de données" },
    ],
  },
  {
    id: "web",
    label: "CMS, Web & Acquisition",
    icon: Globe,
    color: "oklch(0.55 0.13 160)",
    tools: [
      { name: "WordPress", desc: "Création de sites, contenus, SEO local" },
      { name: "Google Business Profile", desc: "Présence locale, avis clients, visibilité Google" },
      { name: "SEO local", desc: "Optimisation de visibilité et acquisition locale" },
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState("pm")

  const current = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section id="skills" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
        >
          Outils & Technologies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          Des outils au service{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            des besoins, pas l&apos;inverse
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mb-6 leading-relaxed text-sm"
        >
          Les outils évoluent constamment. Ma valeur ajoutée ne réside pas dans la maîtrise d&apos;une
          technologie particulière, mais dans ma capacité à comprendre les besoins, sélectionner les
          bons leviers et accompagner leur mise en œuvre.
        </motion.p>

        {/* Manifeste bloc */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 max-w-2xl px-5 py-4 rounded-lg border text-sm leading-relaxed text-muted-foreground"
          style={{
            borderColor: "color-mix(in oklch, var(--teal) 25%, transparent)",
            background: "color-mix(in oklch, var(--teal) 5%, var(--background))",
          }}
        >
          <p className="mb-2">
            Dans un environnement où les technologies évoluent en permanence, je privilégie{" "}
            <span className="font-medium text-foreground">la compréhension des besoins, l&apos;expérimentation et la capacité d&apos;adaptation</span>{" "}
            plutôt que la maîtrise d&apos;un outil unique.
          </p>
          <p>
            Veille active autour des{" "}
            <span className="font-medium text-foreground">LLMs, workflows IA, architectures RAG, agents IA, orchestration et automatisation de processus</span>{" "}
            afin d&apos;identifier les usages capables d&apos;apporter un réel gain opérationnel ou business.
          </p>
        </motion.div>

        {/* Schéma raisonnement outils */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 text-xs font-medium overflow-x-auto pb-1 sm:pb-0"
        >
          {["BESOIN", "PROBLÈME", "ANALYSE", "SOLUTION", "OUTIL"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2 shrink-0">
              <span
                className="px-3 py-1.5 rounded-md border"
                style={{
                  color: "var(--teal)",
                  borderColor: "var(--teal)",
                  background: "var(--teal-dim)",
                }}
              >
                {step}
              </span>
              {i < arr.length - 1 && (
                <span className="text-muted-foreground">→</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Veille continue */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-xl text-xs text-muted-foreground leading-relaxed"
        >
          L&apos;IA et l&apos;automatisation sont des moyens, jamais une finalité. Je les mobilise
          lorsqu&apos;ils simplifient, fiabilisent ou libèrent du temps pour ce qui compte vraiment.
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors duration-200 ${
                active === cat.id
                  ? "text-white border-transparent"
                  : "text-muted-foreground bg-card border-border hover:border-primary/40 hover:text-foreground"
              }`}
              style={
                active === cat.id
                  ? { background: cat.color, borderColor: cat.color }
                  : {}
              }
            >
              <cat.icon size={14} />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tool cards for active category */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.tools.map((tool, index) => {
            const LogoComponent = ToolLogos[tool.name]
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  {LogoComponent ? (
                    <LogoComponent className="w-5 h-5 shrink-0" />
                  ) : (
                    <div
                      className="w-5 h-5 shrink-0 rounded flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: current.color }}
                    >
                      {tool.name.charAt(0)}
                    </div>
                  )}
                  <p className="text-sm font-semibold text-foreground">{tool.name}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-8">{tool.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technical fluency note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 px-5 py-4 rounded-lg border text-sm leading-relaxed text-muted-foreground"
          style={{
            borderColor: "color-mix(in oklch, var(--teal) 20%, transparent)",
            background: "color-mix(in oklch, var(--teal) 4%, var(--background))",
          }}
        >
          <span className="font-medium text-foreground">Technical fluency :</span>{" "}
          compréhension des stacks front/back, API, base de données et déploiement pour mieux cadrer les besoins, dialoguer avec les développeurs et suivre la delivery.
        </motion.div>

      </div>
    </section>
  )
}
