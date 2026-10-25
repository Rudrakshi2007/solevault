# SOLEVAULT | Premium Sneaker E-Commerce Experience

> **Tagline:** Find Your Next Obsession.  
> **Market:** Global sneaker culture with INR (₹) pricing for the Indian market.  
> **Visual Direction:** Dark luxury, cinematic sportswear campaigns, editorial typography, and precision technical footwear.

SOLEVAULT is a cinematic, deployable, luxury sneaker storefront designed to feel like the digital flagship of an exclusive streetwear and footwear boutique.

---

## ⚡ Key Highlights & Architecture

- **Next.js 14 App Router:** Modern server and client component architecture.
- **Cinematic Signature Hero Carousel:** Automatic sliding hero carousel featuring 5 iconic footwear grails (Air Jordan 1 Lost & Found, Adidas Samba OG, New Balance 990v6, ASICS GEL-KAYANO 14, and Nike Air Max 90) with coordinated Framer Motion animations, timer progress bars, touch/pointer swiping, and keyboard arrow navigation.
- **62+ Distinct Footwear Listings:** Complete demonstration catalogue with authentic specifications across Running, Basketball, Lifestyle, Training, Skate, Hiking/Trail, Formal, Boots, Slides, Women's, and Kids' footwear.
- **UK / India Sizing System:** Standard UK shoe sizing with interactive size selector, unavailable/sold out state management, and an interactive international size conversion modal (UK, US Men, US Women, EU, CM).
- **Interactive Quick-Add:** Select size and color directly from card hover states without arbitrary defaults.
- **Persistent Shopping Cart & Wishlist:** Zustand state management with hydration-safe `localStorage` persistence, item subtotals, free shipping threshold (₹10,000), and slide-over cart drawer.
- **Validated Demo Checkout:** React Hook Form + Zod validation with Indian PIN code verification, city/state inputs, simulated payment options (UPI, Card, COD), and a local demo order confirmation screen with celebratory micro-interactions.
- **Honest Prototype Disclosures:** Clear labeling of simulated prices, inventory, and demo-only checkout.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS with custom obsidian (`#090909`), deep charcoal (`#141414`), soft ivory (`#F4F1EA`), and electric lime (`#D7FF3F`) color palette
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand (with `persist` middleware)
- **Forms & Validation:** React Hook Form + Zod
- **Celebration Effects:** Canvas Confetti

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js:** v18.18.0 or newer (tested on v24.x)
- **npm:** v9.x or newer

### 2. Installation
Clone or navigate to the project directory:
```bash
cd solevault
npm install
```

### 3. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Running Production Build
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

---

## 🚢 GitHub & Vercel Deployment Guide

### Push to GitHub
1. Initialize git in the `solevault` directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for SOLEVAULT digital flagship"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/solevault.git
   git push -u origin main
   ```

### Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your `solevault` repository.
4. Framework Preset will automatically detect **Next.js**.
5. No environment variables are required for initial deployment.
6. Click **Deploy**.
7. Once deployed, open the live URL (e.g. `https://solevault.vercel.app`) to verify the full user journey:
   - Hero carousel auto-progression and controls
   - Product filtering, searching, and sorting
   - Product detail page and UK size selection
   - Slide-over bag drawer and demo checkout confirmation

---

## ⚖️ Legal & Brand Disclaimer

SOLEVAULT is an interactive conceptual e-commerce prototype created for design, engineering demonstration, and portfolio showcase purposes. All product names, logos, silhouettes, and trademarks (including Nike, Jordan, Adidas, New Balance, ASICS, Converse, Vans, Puma, Reebok, Salomon, Hoka, Dr. Martens, Birkenstock, and Clarks) are property of their respective trademark holders. No real commercial transactions, live inventory bookings, or payment processing occur.
