# Global Ultra Tech - RVSF Website

A premium, professional website for **Global Ultra Tech**, a Registered Vehicle Scrapping Facility (RVSF) located in Rampur, Uttar Pradesh, India. Built with React, TypeScript, and Tailwind CSS.

![Global Ultra Tech](public/images/glob4.png)

## 🌐 Live Demo

[https://global-ultra-tech-website.vercel.app](https://global-ultra-tech-website.vercel.app)

## 📋 Overview

Global Ultra Tech is a government-authorized vehicle scrapping facility operating under India's Vehicle Scrappage Policy. This website serves as the digital presence for the facility, providing information about services, pricing, compliance, and enabling customers to request scrapping services or schedule vehicle pickups.

### Key Features

- **🌓 Light/Dark Theme Toggle** - Premium design with smooth theme switching
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **⚡ Fast & Modern** - Built with Vite for lightning-fast performance
- **🎨 Premium UI Design** - Clean, professional aesthetic with emerald accent colors
- **📊 Scrap Value Calculator** - Interactive tool to estimate vehicle scrap value
- **📍 Google Maps Integration** - Embedded facility location
- **📝 Contact Forms** - Request scrapping quotes and schedule pickups

## 🏗️ Project Structure

\`\`\`
src/
├── context/
│   └── ThemeContext.tsx      # Light/Dark theme state management
├── layouts/
│   └── SiteLayout.tsx        # Header, Footer, and main layout
├── pages/
│   ├── Home.tsx              # Landing page with hero, process, benefits
│   ├── Services.tsx          # Vehicle scrapping services offered
│   ├── Pricing.tsx           # Scrap value calculator
│   ├── PolicyCompliance.tsx  # MoRTH compliance information
│   ├── About.tsx             # Company information and team
│   ├── Contact.tsx           # Contact forms and facility info
│   └── FAQ.tsx               # Frequently asked questions
├── App.tsx                   # Router configuration
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and design system
\`\`\`

## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/anshveerturna/global-ultra-tech-website.git

# Navigate to project directory
cd global-ultra-tech-website

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | \`/\` | Hero section, process overview, benefits, government linkage |
| Services | \`/services\` | Vehicle scrapping, CoD, CoVS, Trade CoD services |
| Scrap Value | \`/pricing\` | Interactive calculator to estimate scrap value |
| Compliance | \`/policy-compliance\` | MoRTH guidelines and regulatory compliance |
| About | \`/about\` | Company history, mission, and facility information |
| Contact | \`/contact\` | Contact info, scrapping request & pickup forms |
| FAQ | \`/faq\` | Frequently asked questions with accordion UI |

## 🎨 Design System

### Colors

- **Primary Accent:** Emerald (\`#10b981\` / \`#059669\`)
- **Dark Theme Background:** Black (\`#000000\`)
- **Light Theme Background:** White (\`#ffffff\`)
- **Text:** Adaptive based on theme

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Semi-bold, tight letter-spacing
- **Body:** Regular weight, optimized line-height

### Components

- Glass-morphism cards with backdrop blur
- Gradient text for headlines
- Smooth theme transitions
- Responsive navigation with mobile menu

## 🏢 About Global Ultra Tech

Global Ultra Tech is a Registered Vehicle Scrapping Facility (RVSF) authorized by the Ministry of Road Transport and Highways (MoRTH), Government of India. Located in Village Bishanpur Jagir, District Rampur, Uttar Pradesh.

### Services Offered

1. **Vehicle Scrapping** - Complete end-of-life vehicle dismantling
2. **Certificate of Deposit (CoD)** - Official documentation for deposited vehicles
3. **Certificate of Vehicle Scrappage (CoVS)** - Final scrapping certification
4. **Trade CoD** - Exchange certificates for additional value

### Government Linkages

- MoRTH Registered
- Vahan Portal Linked
- Compliant with Vehicle Scrappage Policy 2021

## 📞 Contact

**Global Ultra Tech**  
Village Bishanpur Jagir  
District Rampur-244921  
Uttar Pradesh, India

- **Email:** info@globalultratech.in
- **Phone:** +91 98765 43210

## 📜 License

This project is proprietary software for Global Ultra Tech.

---

Built with ❤️ by [Anshveer Turna](https://github.com/anshveerturna)
