# LANDAS - Performance-Ready Apparel E-commerce

A responsive React frontend application built for the LANDAS brand, implementing a modern e-commerce interface based on Figma designs.

## 🚀 Project Overview

This project is a competency assessment implementation focusing on:
- **Duration**: 3-5 days
- **Purpose**: Responsive web application based on Figma design
- **Focus**: Code quality, component architecture, and guideline compliance
- **Core**: UI implementation with static dummy data (no server integration)

## 🛠 Tech Stack

### Required Dependencies
- **React**: ^19.1.0
- **React DOM**: ^19.1.0
- **React Router DOM**: ^7.6.3
- **Tailwind CSS**: ^4.1.11
- **@tailwindcss/vite**: ^4.1.11
- **Zustand**: ^5.0.6
- **clsx**: ^2.1.1
- **tailwind-merge**: ^3.3.1
- **Pretendard**: ^1.3.9

### Development Dependencies
- **TypeScript**: ~5.8.3
- **Vite**: ^7.0.4
- **ESLint**: ^9.30.1
- **Prettier**: ^3.6.2

## 📁 Project Structure

```
src/
├── features/              # Business feature modules (Feature-Based Architecture)
│   └── domain/            # Domain-specific features
│       ├── components/    # Components (Atomic Design)
│       │   ├── atoms/     # Basic building blocks
│       │   ├── molecules/ # Combinations of atoms
│       │   └── organisms/ # Combinations of molecules
│       ├── hooks/         # Business logic custom hooks
│       ├── types/         # Domain-specific type definitions
│       └── utils/         # Domain-specific utilities
├── pages/                 # Page components (routing targets)
├── routes/                # Routing configuration
│   ├── Router.tsx         # Main router component
│   └── route.ts           # Route path constants
└── shared/                # Shared modules (reusable across features)
    ├── components/        # Reusable components (Atomic Design)
    │   ├── atoms/         # Basic building blocks
    │   ├── molecules/     # Combinations of atoms
    │   └── organisms/     # Combinations of molecules
    ├── constants/         # Constant definitions
    ├── hooks/             # Custom hooks
    ├── layouts/           # Layout components
    ├── stores/            # Global state management (Zustand)
    ├── styles/            # Style definitions
    ├── types/             # Common type definitions
    └── utils/             # Utility functions
```

## 🎨 Design System

### Architecture Pattern
- **Feature-Based Architecture (FBA)** + **Atomic Design Pattern**
- **Atoms**: Button, Input, Text - basic building blocks
- **Molecules**: FormInput, TableRow - combinations of atoms
- **Organisms**: Table, Header - combinations of molecules

### Naming Conventions
- **Components**: PascalCase (e.g., BasicButton, MemberTable)
- **Files**: 
  - Components: PascalCase (e.g., BasicButton.tsx)
  - Hooks: camelCase (e.g., useMemberList.ts)
- **Folders**: camelCase (e.g., memberManage, serviceManage)
- **Variables/Functions**: camelCase (e.g., formData, handleSubmit)
- **Constants**: UPPER_SNAKE_CASE (e.g., PASSWORD_REGEX)

### Component Props Design
- Required props without default values
- Default values for optional props
- Event handlers in `on[Action]` format
- Styling props as `className`

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landas-frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## 📱 Features Implemented

### Core Features
- ✅ **Responsive Design**: Mobile, tablet, and desktop support
- ✅ **Navigation**: Header with navigation menu and mobile hamburger menu
- ✅ **Authentication**: Login and registration forms with validation
- ✅ **Product Showcase**: Product grid with cards, ratings, and color variants
- ✅ **Layout System**: Consistent header and footer across pages
- ✅ **Routing**: React Router DOM implementation

### Pages Implemented
- ✅ **Homepage**: Hero section with product showcase
- ✅ **Login Page**: Authentication form with validation
- ✅ **Register Page**: Registration form with validation
- ✅ **Products Page**: Product listing with grid/list view toggle

### Component Library
- ✅ **Atoms**: BasicButton, BasicInput, Logo
- ✅ **Molecules**: ProductCard, FormField
- ✅ **Organisms**: Header, Footer
- ✅ **Layouts**: MainLayout

## 🎯 Implementation Decisions

### Architecture Choices
1. **Feature-Based Architecture**: Organized by business domains for scalability
2. **Atomic Design**: Systematic component hierarchy for reusability
3. **TypeScript**: Full type safety with strict configuration
4. **Tailwind CSS**: Utility-first styling for rapid development

### State Management
- **Zustand**: Lightweight state management (prepared but not extensively used due to static data requirement)
- **React State**: Local component state for forms and UI interactions

### Styling Approach
- **Tailwind CSS**: Utility classes for consistent design system
- **Custom Color Palette**: Brand colors (primary yellow, black, grays)
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component Variants**: Systematic variant system for buttons and inputs

### Data Management
- **Static Mock Data**: Dummy data for products and navigation
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures

## 🔧 Code Quality

### ESLint Configuration
- React hooks rules
- TypeScript strict rules
- Import/export consistency

### Prettier Configuration
- Consistent code formatting
- Tailwind CSS class sorting
- 2-space indentation

### TypeScript Configuration
- Strict mode enabled
- Path aliases for clean imports
- Comprehensive type checking

## 📋 Assumptions and Decisions

### Design Assumptions
1. **Korean Language**: Primary language based on Figma designs
2. **Brand Colors**: Yellow (#FFC107) as primary accent, black for text/backgrounds
3. **Typography**: Pretendard font family for Korean text support
4. **Responsive Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl)

### Technical Decisions
1. **No Server Integration**: Static data as per requirements
2. **Client-Side Routing**: React Router DOM for SPA behavior
3. **Form Validation**: Client-side validation with error states
4. **Image Placeholders**: Placeholder paths for product images
5. **Accessibility**: Basic accessibility features (semantic HTML, keyboard navigation)

### Future Enhancements
- Server integration with API endpoints
- Advanced filtering and search functionality
- Shopping cart and checkout flow
- User authentication with JWT
- Product detail pages
- Admin dashboard

## 🚀 Deployment

### Build for Production
```bash
yarn build
```

### Deployment Configuration
- **SPA Routing**: Configure 404 redirect to `/index.html`
- **Static Assets**: Ensure proper asset paths
- **Environment Variables**: Configure for production environment

### Recommended Platforms
- **Vercel**: Automatic SPA configuration
- **Netlify**: Built-in SPA redirect rules

## 📝 License

This project is created for assessment purposes.

---

**Note**: This implementation focuses on UI/UX accuracy, code quality, and architectural best practices as specified in the competency assessment criteria.