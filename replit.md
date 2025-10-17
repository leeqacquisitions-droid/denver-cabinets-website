# Estate Solutions - Custom Cabinetry Installation Website

## Overview

Estate Solutions is a professional cabinetry installation business serving the Denver metro area. This is a marketing and lead generation website built to showcase the company's portfolio, communicate services, and facilitate customer contact. The application features a single-page website with multiple sections (hero, portfolio gallery, materials showcase, process explanation, testimonials, FAQ, and contact form) along with an AI-powered chat assistant to answer customer questions.

The business specializes in professional assembly and installation of pre-manufactured cabinets (not custom cabinet building) for three main customer segments: general contractors, property managers, and homeowners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for styling with custom design system

**UI Component Library:**
- shadcn/ui components (Radix UI primitives) for accessible, customizable components
- Custom design system with specific color palette for cabinetry business aesthetic
- Dark/light theme support with theme toggle functionality

**Design System:**
- Color palette defined in CSS variables supporting light/dark modes
- Deep Navy Blue and Warm Charcoal as primary colors
- Copper/Bronze accent colors to complement wood tones
- Typography: Montserrat (headings), Open Sans (body), Playfair Display (accents)
- Custom border radius and spacing tokens

**Component Architecture:**
- Single-page application with smooth scroll navigation between sections
- Modular section components (HeroSection, PortfolioSection, AboutSection, etc.)
- Reusable UI primitives from shadcn/ui library
- Floating chat assistant component for customer support

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js
- TypeScript for type safety across the stack
- ESM (ES Modules) for modern JavaScript module system

**API Design:**
- RESTful API endpoint for chat functionality (`POST /api/chat`)
- AI integration using OpenAI-compatible API (via Replit's AI Integrations service)
- GPT-5-mini model for cost-effective customer support

**Development Features:**
- Vite middleware integration for HMR (Hot Module Replacement) in development
- Custom request/response logging middleware
- Error handling middleware for consistent error responses
- Static file serving in production

### Data Storage

**Database:**
- PostgreSQL configured via Drizzle ORM
- Schema defined with Drizzle's type-safe schema builder
- User table structure (currently minimal: id, username, password)
- Database migrations managed through Drizzle Kit

**Storage Strategy:**
- In-memory storage fallback (MemStorage class) for development
- Interface-based storage abstraction (IStorage) for flexibility
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`

### External Dependencies

**AI Services:**
- Replit AI Integrations for OpenAI-compatible API access
- No separate OpenAI API key required (handled by Replit infrastructure)
- GPT-5-mini model for chat assistant functionality
- System prompts customized for Estate Solutions business context

**Asset Management:**
- Static images stored in `attached_assets` directory
- Portfolio images (38+ cabinet installation photos)
- Material showcase images
- Company/team photos
- 3D renders and design specifications

**Third-Party UI Libraries:**
- Radix UI primitives for accessible components (accordion, dialog, dropdown, etc.)
- Lucide React for icon system
- Embla Carousel for image galleries
- cmdk for command palette functionality
- react-day-picker for date selection
- vaul for drawer components

**Development Tools:**
- Replit-specific plugins for development environment
- Runtime error overlay for better debugging
- Cartographer for code navigation (Replit)
- Dev banner for development mode indication

**Font Services:**
- Google Fonts CDN for typography (Montserrat, Open Sans, Playfair Display)

**Form Handling:**
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for validation integration

**Session Management:**
- connect-pg-simple for PostgreSQL-backed sessions (configured but not actively used)

**Build & Deployment:**
- esbuild for server-side bundling in production
- Vite for client-side bundling
- Separate build outputs: client to `dist/public`, server to `dist`