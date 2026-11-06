# FLEXORA – Flex & Banner Printing Shop Website Template

**FLEXORA** is a premium, modern, bold, and commercially presentable multipurpose HTML template designed specifically for professional **Flex, Banner, Signage, and Large Format Printing businesses**.

Built strictly with **HTML5, CSS3, and Vanilla JavaScript** with **Bootstrap 5.3** responsive grid architecture, FLEXORA requires zero build tools or complex framework dependencies (no React, Next.js, or Vue). It is completely ready for production deployment, ThemeForest / TemplateMonster sales, or custom client delivery.

---

## 🎨 Design System

Designed around a **Cosmic Studio + Neon Creative Printing** aesthetic:

| Token | Color Code | Purpose |
| :--- | :--- | :--- |
| **Primary** | `#8B5CF6` | Electric Neon Violet (Key highlights, active accents, border glows) |
| **Secondary** | `#FFFFFF` | High-contrast Heading White for cosmic dark canvases |
| **Accent** | `#EC4899` | Hot Neon Pink / Magenta (Gradient buttons, badge highlights) |
| **Cyan Flare** | `#00F5FF` | Electric Cyan (Nebula lighting flares, calibration dots) |
| **Background** | `#0B041C` | Deep Cosmic Midnight Violet Canvas with multi-layer nebula mesh |
| **Surface** | `#14092E` | Glassmorphic cards with translucent backdrop blur (`rgba(22,10,48,0.65)`) |
| **Text Main** | `#F3EEFF` | High-contrast lavender-white body typography |
| **Text Muted** | `#A89CC4` | Secondary notes, specs, metadata |
| **Wave Ribbon** | S-Curve 3D | Flowing 3D undulating wave platform with illuminated neon crest |

### Typography
- **Headings**: `'Outfit', sans-serif` (Modern, bold geometric display with industrial precision, weights 500–900)
- **Body**: `'Plus Jakarta Sans', sans-serif` (Contemporary, clean legibility for technical specifications and tables)
- **Accent Badges**: `'Space Grotesk'`
- **Icons**: Font Awesome 6 Free CDN

---

## 📂 Project Folder Structure

```
flexora/
│
├── index.html              # Home 1 – General Printing Services
├── home-2.html             # Home 2 – Creative Printing Showcase
├── about.html              # About Us (Story, Milestones, Team, Capabilities)
├── products.html           # Products Catalog (12 Categories with Live Search & Filter)
├── product-details.html    # Product Details (Specifications, Finishing, FAQ)
├── services.html           # Services Grid (10 Specialized Printing Services)
├── service-details.html    # Service Deep Dive (Large Format Machinery Specs & Rigging)
├── rate-card.html          # Rate Card with Interactive Live Price Calculator
├── pricing.html            # Commercial Packages & Bundles (Basic, Business, Event, Custom)
├── blog.html               # Blog Listing (Search, 6 Categories, Pagination)
├── blog-details.html       # Blog Article (TOC, Author Bio, Social Sharing, Sidebar)
├── contact.html            # Contact Us & Comprehensive 11-Field Order Enquiry Form
├── login.html              # Split-Screen Auth Login UI
├── register.html           # Split-Screen Registration UI
├── forgot-password.html    # Split-Screen Password Reset UI
├── 404.html                # Creative Printing-Themed Error Page
├── coming-soon.html        # Coming Soon Page with Working Countdown Timer
├── maintenance.html        # Scheduled Press Calibration Maintenance Page
├── terms.html              # Terms of Service & Proofing Conditions
├── privacy.html            # Privacy & Artwork Confidentiality
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Core layout, industrial components & CMYK styling
│   │   ├── dark-mode.css   # Full dark mode token overrides
│   │   ├── responsive.css  # Breakpoint fine-tuning (Mobile, Tablet, Laptop, Desktop)
│   │   └── rtl.css         # Right-to-Left (RTL) layout readiness
│   │
│   ├── js/
│   │   ├── theme.js        # Dark/Light mode switcher with localStorage persistence
│   │   ├── main.js         # Sticky header, Back to Top, Lightbox, Before/After, Countdown
│   │   ├── products.js     # 12 Products catalog, dynamic search & category filtering
│   │   ├── calculator.js   # Interactive price calculator (width × height × qty × rate)
│   │   └── forms.js        # Form validation, toast engine, password toggles
│   │
│   └── images/
│       ├── logos/
│       │   ├── logo.svg        # Horizontal brand logo with animated CMYK registration mark
│       │   ├── logo-white.svg  # Inverted white brand logo for dark themes and footers
│       │   ├── logo-mark.svg   # Standalone animated roll press & UV laser monogram
│       │   └── favicon.svg     # Modern vector SVG favicon
│       ├── hero/
│       ├── products/
│       ├── services/
│       ├── gallery/
│       ├── blog/
│       ├── team/
│       └── logos/
│
└── README.md
```

---

## ⚡ Interactive Features (Vanilla JavaScript)

1. **Dark & Light Mode Switcher** (`assets/js/theme.js`)
   - Instant toggle with moon/sun icon change.
   - Saves choice in `localStorage`.
   - Supports OS color-scheme preference fallback.
   - Seamless color variable transition across all cards and typography.

2. **Instant Rate Card & Price Calculator** (`assets/js/calculator.js`)
   - Dynamically calculates: `Width × Height × Quantity × Product Rate + Finishing Options`.
   - Allows input in both **Feet** and **Inches**.
   - Live square footage calculation.
   - Pre-populates parameters directly into the quotation form on `contact.html`.

3. **Dynamic Product Search & Category Filtering** (`assets/js/products.js`)
   - Live real-time search across 12 distinct product categories.
   - Smooth category button tabs.
   - Dynamic parameter binding on `product-details.html?id=...`.

4. **Before and After Image Comparison Slider** (`assets/js/main.js`)
   - Featured on `home-2.html`.
   - Touch and mouse draggable slider comparing standard resolution prints vs. 1440 DPI Japanese printhead UV outputs.

5. **Full-Featured Custom Lightbox Modal** (`assets/js/main.js`)
   - Click any gallery project to view high-resolution imagery and technical installation details.
   - Supports keyboard `Escape` dismissal and backdrop closing.

6. **Order Enquiry & Contact Form Validation with Toasts** (`assets/js/forms.js`)
   - Includes all 11 required commercial order fields: Customer Name, Phone, Email, Product Category, Banner Width, Banner Height, Quantity, Material Selection, Delivery Date, Design File Upload, and Additional Requirements.
   - Front-end validation with animated toast notifications.

7. **Working Countdown Timer** (`assets/js/main.js`)
   - Featured on `coming-soon.html` with real-time days, hours, minutes, and seconds countdown.

8. **Password Visibility Toggle** (`assets/js/forms.js`)
   - Featured on `login.html` and `register.html` for password inspection.

9. **Scroll-Triggered Reveal Animation Engine** (`assets/js/main.js` & `assets/css/style.css`)
   - Native lightweight `IntersectionObserver` animation engine.
   - Smooth staggered transitions (`fade-up`, `fade-left`, `fade-right`, `zoom-in`) with custom delays.
   - Zero external libraries or heavy dependencies.

10. **Dynamic Live Statistics Counter** (`assets/js/main.js`)
    - Smooth cubic-bezier numerical count-up when scrolling into view (e.g. 45K+ Sq.Ft, 14+ Machines, 99.8% On-Time, 1,800+ Clients).

11. **Micro-Interactions & Hover Dynamics**
    - Floating hero badge bobbing (`@keyframes floatSlow`), animated CMYK top bar light shimmer, arrow slide on button hover, and pulsing Before-After comparison slider handle.

---

## 🛠️ How to Customize

### 1. Changing Primary Colors
Edit the root CSS variables at the top of `assets/css/style.css`:
```css
:root {
  --primary: #F15A24;     /* Your brand primary */
  --secondary: #1D2329;   /* Your brand dark neutral */
  --accent: #FFC857;      /* Your accent color */
}
```

### 2. Updating Material Rates in the Calculator
Edit `PRODUCT_RATES` inside `assets/js/calculator.js`:
```javascript
const PRODUCT_RATES = {
  'frontlit-flex': { name: 'Frontlit Flex (340 GSM)', rate: 1.20 },
  'backlit-flex':  { name: 'Backlit Flex Translucent (510 GSM)', rate: 2.40 },
  // Add or adjust rates here
};
```

### 3. Adding New Products to the Catalog
Add product objects to `PRODUCTS` in `assets/js/products.js`:
```javascript
{
  id: 'custom-product-id',
  category: 'flex-banner',
  categoryName: 'Flex Banner Printing',
  name: 'Your Product Name',
  description: 'Detailed description...',
  sizes: 'Roll width up to 10.5ft',
  price: '$1.50 / sq.ft',
  image: 'path/to/image.jpg'
}
```

---

## 📱 Responsive & Cross-Browser Compatibility

Tested and optimized for:
- **Ultra Desktop**: 1440px and higher
- **Standard Laptop / Desktop**: 1024px – 1439px
- **Tablet**: 768px – 1023px
- **Mobile**: 320px – 767px (Zero horizontal overflow, touch-friendly UI)
- Fully compatible with Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera.

---

## 📜 Credits & Libraries
- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Font Awesome 6 Free](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/) – Space Grotesk & Inter
- [Unsplash](https://unsplash.com/) – Clean industrial printing & large-format signage imagery

---

© 2026 **FLEXORA**. Commercial Flex & Banner Printing Shop Website Template.
