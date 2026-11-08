/**
 * FLEXORA - Products Catalog, Category Filtering & Live Search
 * 5 Menu Topics - Each Topic Head Contains Exactly 3 Items (15 Total Products)
 * Full Interactive Product Details Dynamic Binding & Image Gallery
 */

(function () {
  'use strict';

  const PRODUCTS = [
    // -------------------------------------------------------------
    // TOPIC 1: Flex & Outdoor Banners (3 Items)
    // -------------------------------------------------------------
    {
      id: 'flex-banner',
      category: 'flex-banner',
      categoryName: 'Flex & Outdoor Banners',
      name: 'Standard Flex Banner Printing',
      description: 'Heavy-duty 340 GSM flex banner printed with vibrant Eco-Solvent inks. Weatherproof and ideal for hoardings and outdoor branding.',
      sizes: 'Custom up to 10ft width',
      price: '$1.20 / sq.ft',
      image: 'assets/images/products/standard-flex-banner-printing.jpg',
      gallery: [
        'assets/images/products/standard-flex-banner-printing.jpg',
        'assets/images/services/high-definition-flex-banner.jpg',
        'assets/images/commercial printing hero/highway-hoarding-flex.jpg',
        'assets/images/services/large-format-billboard.jpg'
      ],
      material: '340 GSM Premium Flex',
      specs: 'UV Resistant, Tear Resistant, High Durability',
      turnaround: 'Same-Day / 24 Hours Express',
      techSpecs: {
        weight: '340 GSM (approx 10 oz/sq.yd) – 510 GSM available',
        base: 'High-tenacity 500D x 500D polyester woven yarn',
        ink: 'Eco-Solvent, Hard Solvent, UV-Curable',
        tensile: 'Warp 1200 N/5cm / Weft 1000 N/5cm (Tear-proof)',
        temp: '-20°C to +70°C (-4°F to 158°F)'
      },
      applications: [
        'Outdoor Highway Hoardings & Giant Billboards',
        'Retail Storefront Sale & Promotional Banners',
        'Building Scaffolding Wraps & Real Estate Site Signs',
        'Trade Show Backdrops & Event Stage Wall Facings'
      ],
      finishing: [
        {
          icon: 'fa-ring',
          title: 'Brass Eyelets / Grommets',
          desc: 'Rust-proof solid brass eyelets machine-stamped through double-folded hems every 2 feet for fast rope/zip-tie rigging.'
        },
        {
          icon: 'fa-fire',
          title: 'Heat-Sealed Welded Hems',
          desc: '1.5-inch continuous perimeter heat weld preventing thread fraying and drastically enhancing wind resistance.'
        },
        {
          icon: 'fa-tent',
          title: 'Pole Pockets (Top & Bottom)',
          desc: '2-inch to 4-inch sleeve loops stitched or heat-welded along edges to accommodate aluminum pipes, rods, or scaffolding bars.'
        }
      ],
      faq: [
        {
          q: 'How long will this flex banner last outdoors under intense sunlight?',
          a: 'Our industrial Eco-Solvent and UV curable inks are rated for 2 to 3 years of direct outdoor exposure without visible color fading or brittleness.'
        },
        {
          q: 'Can you print seamless banners wider than 10 feet?',
          a: 'Yes, our industrial roll press prints up to 10.5 feet seamless width. For larger sizes, multiple panels are invisibly heat-welded with continuous graphics.'
        },
        {
          q: 'What file formats should I submit for printing?',
          a: 'We accept PDF, TIFF (with LZW compression), PSD, AI, EPS, and high-resolution JPG in CMYK color mode at 100-150 DPI.'
        }
      ]
    },
    {
      id: 'frontlit-banner',
      category: 'flex-banner',
      categoryName: 'Flex & Indoor Banners',
      name: 'Ultra-Smooth Indoor Banners & Retail Hanging Displays',
      description: 'Designed specifically for close-up consumer scrutiny in luxury malls, automotive showrooms, and corporate headquarters. Printed with certified odorless water-based latex and micro-piezo inks on composite anti-curl PET film for dead-flat hanging presentation.',
      sizes: '2x4 ft, 3x6 ft, 4x8 ft, Custom up to 60" width',
      price: '$2.80 / sq.ft',
      image: 'assets/images/products/ultra-smooth-indoor-hanging-banners.jpg',
      gallery: [
        'assets/images/products/ultra-smooth-indoor-hanging-banners.jpg',
        'assets/images/products/high-resolution-frontlit-banner.jpg',
        'assets/images/services/high-definition-flex-banner.jpg',
        'assets/images/products/standard-flex-banner-printing.jpg'
      ],
      material: 'Anti-Curl Composite PET / Ultra-Smooth Matte Film',
      specs: 'Zero Curl Memory, GREENGUARD Gold Certified, B1 Fire-Rated',
      turnaround: 'Same-Day / 24–48 Hours',
      techSpecs: {
        weight: '320–420 GSM multi-layer anti-curl blockout composite',
        base: 'Bi-axially oriented PET film with dead-flat stay-flat memory',
        ink: 'Certified Odorless Water-Based Latex & 1200 DPI Micro-Piezo',
        tensile: 'Warp 950 N/5cm / Weft 900 N/5cm (Zero Edge Curl)',
        temp: '-10°C to +65°C (14°F to 149°F) Climate Controlled'
      },
      applications: [
        'Luxury Retail Mall Atrium Hanging Banners',
        'Department Store Seasonal Promotion & Sale Drops',
        'Automobile Showroom Feature Ceiling Displays',
        'Corporate Lobby Architecture & Wayfinding Hangings'
      ],
      finishing: [
        {
          icon: 'fa-grip-lines',
          title: 'Aluminum Snap Rail Hanging Grippers',
          desc: 'Anodized aluminum top and bottom clamp bars with ceiling suspension eyes for perfectly weighted vertical tension.'
        },
        {
          icon: 'fa-shield',
          title: 'Anti-Curl Edge Stabilization',
          desc: 'PET composite core prevents edge fraying and eliminates inward curling common to unsupported ceiling hangings.'
        },
        {
          icon: 'fa-leaf',
          title: 'UL GREENGUARD Gold Certified Inks',
          desc: '100% odorless water-based latex chemistry safe for enclosed food courts, schools, and high-traffic shopping centers.'
        }
      ],
      faq: [
        {
          q: 'Why choose anti-curl composite PET over traditional flex for indoor hanging?',
          a: 'Standard flex has a woven fabric texture and tends to curl along unsupported edges when hung freely from ceilings. Our ultra-smooth composite PET has an internal blockout core that stays dead flat with photographic sharpness.'
        },
        {
          q: 'Are the inks odor-free for indoor shopping malls and retail centers?',
          a: 'Yes, we use certified odorless water-based latex and micro-piezo inks that emit zero VOC fumes, meeting strict commercial indoor air quality standards.'
        },
        {
          q: 'Do you supply ceiling suspension cables and hardware?',
          a: 'Yes, we offer complete ceiling hanging kits including aircraft wire cables, ceiling grid twist clips, and aluminum snap rails.'
        }
      ]
    },
    {
      id: 'backlit-banner',
      category: 'flex-banner',
      categoryName: 'Flex & Outdoor Banners',
      name: 'Translucent Backlit Flex Banner',
      description: 'Uniform light dispersion fabric designed for lightboxes, airport displays, and retail store illumination.',
      sizes: 'Custom up to 10.5ft seamless',
      price: '$2.40 / sq.ft',
      image: 'assets/images/products/translucent-backlit-flex-banner.jpg',
      gallery: [
        'assets/images/products/translucent-backlit-flex-banner.jpg',
        'assets/images/creative showcase hero/luminescent-airport-lightbox.jpg',
        'assets/images/commercial printing hero/retail-backlit-glow-sign.jpg',
        'assets/images/services/backlit-glow-signage.jpg'
      ],
      material: '510 GSM High-Translucency Flex',
      specs: '1440 DPI Ultra High Definition, No hotspotting',
      turnaround: '24–48 Hours',
      techSpecs: {
        weight: '510 GSM translucent light-dispersion composite',
        base: 'Micro-cellular optical diffusion polyester membrane',
        ink: 'Dual-Strike High-Density UV Pigment Inks',
        tensile: 'Warp 2100 N/5cm / Weft 1900 N/5cm (Tension-tested)',
        temp: '-25°C to +75°C (-13°F to 167°F)'
      },
      applications: [
        'Airport Concourse & Metro Station Lightboxes',
        'Retail Shopping Mall Storefront Illuminated Fascias',
        'Cinema Movie Posters & Illuminated Marquees',
        'Highway 24/7 Night-Glow Commercial Hoardings'
      ],
      finishing: [
        {
          icon: 'fa-cubes',
          title: 'Silicone Edge Beading (SEG)',
          desc: '12mm silicone welt stitched into perimeter for tool-free snap insertion into aluminum lightbox extrusions.'
        },
        {
          icon: 'fa-sun',
          title: 'Dual-Strike Color Boost',
          desc: 'Printed with 200% color density so colors remain vivid and rich whether backlit or unlit.'
        },
        {
          icon: 'fa-border-all',
          title: 'Zero Hotspotting Membrane',
          desc: 'Diffuses LED point sources into smooth, uninterrupted ambient glow across the entire graphic.'
        }
      ],
      faq: [
        {
          q: 'Why does backlit printing require dual-strike mode?',
          a: 'Standard single-pass prints wash out and look pale when bright LED backlight shines through. Dual-strike ensures deep, rich contrast.'
        },
        {
          q: 'Will heat from lightbox lamps warp this material?',
          a: 'No, our 510 GSM fabric is dimensionally stable and rated up to +75°C, easily withstanding enclosed LED and fluorescent lamp fixtures.'
        },
        {
          q: 'Can this be shipped folded without permanent creases?',
          a: 'Yes, backlit flex has high elasticity. Once tensioned onto the frame, any minor packing lines vanish completely.'
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 2: Vinyl & Window Films (3 Items)
    // -------------------------------------------------------------
    {
      id: 'vinyl-printing',
      category: 'vinyl-films',
      categoryName: 'Vinyl & Window Films',
      name: 'Self-Adhesive Cast Vinyl Printing',
      description: 'Premium self-adhesive vinyl with bubble-free air release channels. Ideal for glass partitions, metal sheets, and smooth wall graphics.',
      sizes: 'Rolls up to 60" width',
      price: '$2.50 / sq.ft',
      image: 'assets/images/products/self-adhesive-cast-vinyl-printing.jpg',
      gallery: [
        'assets/images/products/self-adhesive-cast-vinyl-printing.jpg',
        'assets/images/services/commercial-vinyl-wrap.jpg',
        'assets/images/commercial printing hero/fleet-vehicle-branding.jpg',
        'assets/images/gallery/full-vehicle-cast-wrap-commercial-cargo-van.jpg'
      ],
      material: 'Polymeric Calendered Vinyl (100 micron)',
      specs: 'Cold / Hot Matte & Gloss Lamination available',
      turnaround: 'Same-Day / 24 Hours Express',
      techSpecs: {
        weight: '100 Micron Polymeric PVC Film + 140g PE Liner',
        base: 'Pressure-sensitive clear solvent acrylic with air channels',
        ink: 'Eco-Solvent / Latex / UV High-Pigment Inks',
        tensile: 'Elongation > 130% without tearing',
        temp: '-40°C to +90°C (-40°F to 194°F)'
      },
      applications: [
        'Corporate Office Glass Walls & Partition Murals',
        'Smooth Painted Drywall Commercial Murals',
        'Point of Sale Retail Counter Wraps',
        'Industrial Machine Warning & Branding Labels'
      ],
      finishing: [
        {
          icon: 'fa-shield',
          title: 'UV Protective Overlaminate',
          desc: 'Choice of crystal gloss or anti-reflective matte laminate to protect against cleaning solvents and fingerprints.'
        },
        {
          icon: 'fa-scissors',
          title: 'CNC Vector Kiss-Cutting',
          desc: 'Cut precisely to the contours of your custom logos, letters, or irregular product shapes.'
        },
        {
          icon: 'fa-mask',
          title: 'Pre-Mask Application Tape',
          desc: 'Semi-rigid transfer film pre-applied to allow easy, bubble-free alignment during DIY installation.'
        }
      ],
      faq: [
        {
          q: 'Does this vinyl leave sticky residue upon removal?',
          a: 'No, our polymeric formulation features clean-peel removable adhesive that releases cleanly without harming paint or glass.'
        },
        {
          q: 'Can it be installed on textured or damp walls?',
          a: 'We recommend applying to clean, dry, non-porous surfaces. For textured walls, we supply our High-Tack Cast Vinyl substrate.'
        },
        {
          q: 'Is it waterproof for outdoor use?',
          a: 'Yes, paired with our UV overlaminate, it is 100% waterproof and weatherproof for up to 5 years outdoors.'
        }
      ]
    },
    {
      id: 'oneway-vision',
      category: 'vinyl-films',
      categoryName: 'Vinyl & Window Films',
      name: 'Perforated One Way Vision Window Film',
      description: 'Allows clear outward visibility while showcasing vibrant, bold high-res branding to people outside. Ideal for store glass and windows.',
      sizes: 'Custom window sizes',
      price: '$3.20 / sq.ft',
      image: 'assets/images/products/perforated-one-way-vision-window-film.jpg',
      gallery: [
        'assets/images/products/perforated-one-way-vision-window-film.jpg',
        'assets/images/blog/perforated-vinyl-one-way-vision-film-guide.jpg',
        'assets/images/blog/perforated-vinyl-storefront-watch.jpg',
        'assets/images/commercial printing hero/one-way-vision-storefront.jpg',
        'assets/images/products/architectural-frosted-privacy-film.jpg',
        'assets/images/products/self-adhesive-cast-vinyl-printing.jpg'
      ],
      material: '60/40 Perforated PVC Vinyl',
      specs: 'UV inks, removable adhesive with zero residue',
      turnaround: '24 Hours Express',
      techSpecs: {
        weight: '160 Micron Perforated PVC Film + Dual Liner',
        base: '60% printable area / 40% micro-perforated holes (1.6mm)',
        ink: 'UV-LED Weatherproof Inks',
        tensile: 'Dimensional stability across hot glass surfaces',
        temp: '-15°C to +65°C (5°F to 149°F)'
      },
      applications: [
        'Retail Storefront Full Window Exterior Advertising',
        'Commercial Van & Fleet Vehicle Rear Windows',
        'City Transit Bus Wrap Glazing',
        'Gym & Fitness Studio Privacy Window Graphics'
      ],
      finishing: [
        {
          icon: 'fa-eye',
          title: 'Optically Clear Laminate',
          desc: 'Specialized cast clear laminate prevents dirt and rain from clogging micro-perforations.'
        },
        {
          icon: 'fa-tape',
          title: 'Edge Sealing Protection Tape',
          desc: 'Clear 1/2-inch border tape sealing prevents edge lifting caused by high-pressure car washes.'
        },
        {
          icon: 'fa-sun',
          title: 'Solar Heat Reduction',
          desc: 'Blocks up to 45% of solar heat gain through large storefront windows, reducing AC power load.'
        }
      ],
      faq: [
        {
          q: 'Can people see inside the building at night?',
          a: 'One Way Vision works based on lighting contrast. During the day it is completely opaque from outside; at night if bright interior lights are on, some visibility into the store occurs.'
        },
        {
          q: 'Is it legal on vehicle windows?',
          a: 'Yes, it is DOT-compliant on rear and rear-side windows because it maintains 60% optical transparency from the driver perspective.'
        },
        {
          q: 'How is it applied to the glass?',
          a: 'It uses a dry application method with a felt-edged squeegee for fast, bubble-free installation.'
        }
      ]
    },
    {
      id: 'frosted-film',
      category: 'vinyl-films',
      categoryName: 'Vinyl & Window Films',
      name: 'Architectural Frosted Privacy Film',
      description: 'Translucent dusted crystal frosted film with precision contour kiss-cutting. Enhances office privacy while diffusing natural light.',
      sizes: 'Rolls up to 54" width',
      price: '$3.80 / sq.ft',
      image: 'assets/images/products/architectural-frosted-privacy-film.jpg',
      gallery: [
        'assets/images/products/architectural-frosted-privacy-film.jpg',
        'assets/images/products/self-adhesive-cast-vinyl-printing.jpg',
        'assets/images/products/perforated-one-way-vision-window-film.jpg',
        'assets/images/commercial printing hero/one-way-vision-storefront.jpg'
      ],
      material: 'Dusted Crystal Polymeric Vinyl (80 micron)',
      specs: 'Precision Plotter Cut, Residue-Free Removal',
      turnaround: '24–48 Hours',
      techSpecs: {
        weight: '80 Micron Polymeric Vinyl Film with Sandblast Etch Texture',
        base: 'High-purity transparent solvent acrylic adhesive',
        ink: 'Eco-Solvent / Latex printable or plain etched contour cut',
        tensile: 'Uniform shrinkage < 0.2% on glass panels',
        temp: '-20°C to +80°C (-4°F to 176°F)'
      },
      applications: [
        'Corporate Conference Room & Boardroom Glass Partitions',
        'Medical Clinics, Law Firms & Banking Consultation Cubicles',
        'Architectural Manifestation Lines & Glass Safety Bands',
        'Custom Company Logo Window Etching & Reception Glass'
      ],
      finishing: [
        {
          icon: 'fa-wand-magic',
          title: 'Custom Vector Plotter Cutout',
          desc: 'Logos, negative spaces, and decorative geometric bands cut with computer-guided micro-blade accuracy.'
        },
        {
          icon: 'fa-droplet',
          title: 'Wet-Application Transfer',
          desc: 'Formulated for wet application method ensuring zero trapped air bubbles and flawless crystal finish.'
        },
        {
          icon: 'fa-feather',
          title: 'Low-Tack Carrier Tape',
          desc: 'High-grade paper application tape holds delicate letter cutouts perfectly aligned during installation.'
        }
      ],
      faq: [
        {
          q: 'Does frosted film make the office dark?',
          a: 'Not at all. It transmits over 85% of natural sunlight while obscuring direct views, creating a soft, glare-free ambient illumination.'
        },
        {
          q: 'Can custom company logos be cut into the frosted film?',
          a: 'Yes, we precision-cut intricate logos, stripes, privacy bands, or gradient patterns into the film.'
        },
        {
          q: 'Can it be cleaned with standard window cleaner?',
          a: 'Yes, after a 48-hour cure period, it can be wiped down with standard ammonia-free glass cleaners and microfiber cloths.'
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 3: Rigid Boards & Signage (3 Items)
    // -------------------------------------------------------------
    {
      id: 'sunboard-printing',
      category: 'boards-signage',
      categoryName: 'Rigid Boards & Signage',
      name: 'Rigid Sunboard (Foam Sheet) Printing',
      description: 'Direct UV flatbed print or vinyl mounted on durable PVC foam board. Lightweight, rigid, and perfect for retail point-of-sale displays.',
      sizes: '3mm, 5mm / up to 8x4 ft',
      price: '$4.10 / sq.ft',
      image: 'assets/images/products/rigid-sunboard-foam-sheet-printing.jpg',
      gallery: [
        'assets/images/products/rigid-sunboard-showroom-display.jpg',
        'assets/images/products/rigid-sunboard-foam-sheet-printing.jpg',
        'assets/images/commercial printing hero/rigid-sunboard-pop-displays.jpg',
        'assets/images/Recent Large Format Projects/rigid-sunboard-cafe-wall-1.jpg',
        'assets/images/blog/rigid-sunboard-vs-corrugated-flute-boards.jpg'
      ],
      material: 'High-density PVC foam sheet',
      specs: 'CNC contour cutting, Direct UV Flatbed Printing',
      turnaround: '24 Hours',
      techSpecs: {
        weight: '3mm (0.55 density) or 5mm (0.60 density) rigid foam PVC',
        base: 'Closed-cell lightweight expanded rigid foam core',
        ink: 'Direct Flatbed UV LED Inks (Instant Curable)',
        tensile: 'Flexural strength 35 MPa, impact resistant',
        temp: '0°C to +60°C (32°F to 140°F)'
      },
      applications: [
        'Retail Store Aisle Header & Hanging Directional Signs',
        'Supermarket Endcap Displays & Promotional Cutouts',
        'Trade Show Exhibition Panel Inserts & Poster Boards',
        'Real Estate Site For-Sale & Project Information Boards'
      ],
      finishing: [
        {
          icon: 'fa-crosshairs',
          title: 'CNC Computerized Router Cutting',
          desc: 'Cut to lifelike human standee shapes, character cutouts, or custom geometric outlines with burr-free edges.'
        },
        {
          icon: 'fa-box',
          title: 'Thermal UV Overlaminate',
          desc: 'Matt or gloss scratch-resistant laminate applied for high-traffic retail environments.'
        },
        {
          icon: 'fa-layer-group',
          title: '3M Double-Sided Foam Mounting',
          desc: 'Pre-applied industrial adhesive strips on reverse for fast stick-and-peel wall installation.'
        }
      ],
      faq: [
        {
          q: 'Should I choose 3mm or 5mm thickness?',
          a: '3mm is ideal for indoor poster frames, wall panels, and ceiling hangings. 5mm is recommended for standalone self-standing boards and structural displays.'
        },
        {
          q: 'Is this direct printing or pasted vinyl on sunboard?',
          a: 'We offer both! Our direct UV flatbed printing prints directly onto the board with zero risk of peeling or bubbling.'
        },
        {
          q: 'Is sunboard waterproof for outdoor usage?',
          a: 'The PVC material is 100% waterproof, making it great for semi-outdoor yard signs and sheltered exterior entries.'
        }
      ]
    },
    {
      id: 'glow-sign-board',
      category: 'boards-signage',
      categoryName: 'Rigid Boards & Signage',
      name: 'Commercial LED Glow Sign Board',
      description: 'Fabricated aluminum box with high-efficiency waterproof LED modules and translucent flex or acrylic fascia for 24/7 retail illumination.',
      sizes: '8x3 ft, 10x4 ft, Custom',
      price: '$6.50 / sq.ft',
      image: 'assets/images/products/commercial-led-glow-sign-board.jpg',
      gallery: [
        'assets/images/products/commercial-led-glow-sign-board.jpg',
        'assets/images/products/commercial-led-glow-sign-board-storefront.jpg',
        'assets/images/services/backlit-glow-signage.jpg',
        'assets/images/commercial printing hero/retail-backlit-glow-sign.jpg'
      ],
      material: 'Rust-proof GI/Aluminum frame + Samsung LED',
      specs: 'IP67 Waterproof, Low power consumption',
      turnaround: '3–5 Business Days',
      techSpecs: {
        weight: '18-Gauge Galvanized Iron / Anodized Aluminum Enclosure',
        base: '3mm Polycarbonate / Translucent Flex with UV Graphic Print',
        ink: 'Double-strike UV Curable Pigment Inks',
        tensile: 'Structural wind load rated up to 120 km/h',
        temp: '-20°C to +70°C (-4°F to 158°F)'
      },
      applications: [
        'High-Street Retail Storefront Main Glow Sign Boards',
        '24/7 Pharmacy, Clinic & Urgent Care Exterior Fascias',
        'Restaurant, Cafe & Bar Outdoor Illuminated Displays',
        'Automobile Dealership & Petrol Station Canopy Branding'
      ],
      finishing: [
        {
          icon: 'fa-bolt',
          title: 'IP67 Waterproof Samsung LEDs',
          desc: 'High-lumens modules with 160-degree wide-angle optical lens for uniform light dispersion and 50,000-hour lifespan.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Powder-Coated Structural Framework',
          desc: 'Marine-grade anti-corrosive powder coating engineered to withstand monsoon rains and coastal humidity.'
        },
        {
          icon: 'fa-plug',
          title: 'MeanWell Industrial 12V SMPS',
          desc: 'Surge-protected industrial power supply guaranteeing stable voltage and zero flicker.'
        }
      ],
      faq: [
        {
          q: 'How much electricity does an LED glow sign board consume?',
          a: 'Our high-efficiency LED modules consume up to 70% less power than legacy tube lights—averaging just 60 to 120 Watts for a standard 10x4 ft board.'
        },
        {
          q: 'Does it come with an on-site installation warranty?',
          a: 'Yes, all our LED glow signboards come with a comprehensive 2-year warranty covering LED modules, drivers, and structural frame stability.'
        },
        {
          q: 'Can the graphic face be updated later without replacing the box?',
          a: 'Yes, the front fascia can be easily swapped with new artwork whenever you rebrand or update promotions.'
        }
      ]
    },
    {
      id: 'acrylic-signage',
      category: 'boards-signage',
      categoryName: 'Rigid Boards & Signage',
      name: 'Acrylic 3D Dimensional Lettering',
      description: 'Laser-cut precision cast acrylic letters with beveled edges and halo-backlit LED illumination for corporate lobbies and retail facades.',
      sizes: 'Custom up to 48" height',
      price: '$8.50 / sq.ft',
      image: 'assets/images/products/acrylic-3d-dimensional-lettering.jpg',
      gallery: [
        'assets/images/products/acrylic-3d-dimensional-lettering.jpg',
        'assets/images/services/industrial-cnc-contour-routing-3d-dimensional-shaping.jpg',
        'assets/images/creative showcase hero/backlit-3d-acrylic-lettering.jpg',
        'assets/images/gallery/illuminated-storefront-acrylic-letters-backlit-sign.jpg',
        'assets/images/products/commercial-led-glow-sign-board.jpg'
      ],
      material: '5mm–12mm Cast Acrylic + Standoff Studs',
      specs: 'Diamond Polished Edges, Halo / Front Lit',
      turnaround: '3–4 Business Days',
      techSpecs: {
        weight: '5mm to 12mm Virgin Cast Acrylic Sheet',
        base: 'High-purity PMMA polymer with 92% light transmittance',
        ink: 'Direct UV print or opaque colored cast acrylic + LED modules',
        tensile: 'Shatter-proof impact resistance, UV stabilized',
        temp: '-30°C to +80°C (-22°F to 176°F)'
      },
      applications: [
        'Corporate Reception & Lobby Architectural Wall Logos',
        'Luxury Fashion Boutique & Jewelry Store Entrance Fascias',
        'Executive Conference Room & Boardroom Feature Walls',
        'Hotel & Resort Architectural Room Suite Numbers'
      ],
      finishing: [
        {
          icon: 'fa-gem',
          title: 'Diamond Flame Edge Polishing',
          desc: 'High-speed diamond cutting and flame polishing create crystal-clear, jewel-like letter perimeters.'
        },
        {
          icon: 'fa-lightbulb',
          title: 'Halo Floating Backlit Glow',
          desc: 'Letters mounted 1-inch off the wall with reverse-facing LEDs producing an ethereal ambient halo.'
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'Stainless Steel Standoff Studs',
          desc: 'Brushed chrome or matte black standoff hardware included along with a 1:1 scale paper template for foolproof mounting.'
        }
      ],
      faq: [
        {
          q: 'Can acrylic lettering be installed on an outdoor facade?',
          a: 'Yes, virgin cast acrylic is UV stabilized and will not yellow, craze, or crack under prolonged outdoor sunlight.'
        },
        {
          q: 'How are the letters mounted to drywall or stone?',
          a: 'We provide blind stud mounts with high-bond anchors and a 1:1 printed paper template showing exact drill hole positions.'
        },
        {
          q: 'Can you match custom brand PMS / Pantone colors?',
          a: 'Yes, we match exact Pantone shades using premium automotive paint finishes or UV reverse flood-coating.'
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 4: Displays & Exhibitions (3 Items)
    // -------------------------------------------------------------
    {
      id: 'rollup-standee',
      category: 'displays-events',
      categoryName: 'Displays & Exhibitions',
      name: 'Aluminum Roll-Up Standee Pull-Up Banner',
      description: 'Portable, sleek anodized aluminum roll-up standee with premium non-curling star flex or PP synthetic graphic sheet. Includes carry bag.',
      sizes: '6x2.5 ft, 6x3 ft, 6x4 ft',
      price: '$35.00 / piece',
      image: 'assets/images/products/aluminum-rollup-standee.jpg',
      gallery: [
        'assets/images/products/aluminum-rollup-standee.jpg',
        'assets/images/products/standard-flex-banner-printing.jpg',
        'assets/images/services/event-backdrops-trade-show-exhibition-graphics.jpg',
        'assets/images/commercial printing hero/exhibition-booth-backdrop.jpg'
      ],
      material: 'Anti-curl synthetic media + Aluminum cartridge',
      specs: 'Instant 30-second setup, Padded nylon carrying bag',
      turnaround: 'Same-Day Express Available',
      techSpecs: {
        weight: '2.8kg Heavy Aluminum Base + 220 Micron PP Film',
        base: 'High-grade anodized aluminum cassette with dual swing feet',
        ink: 'Eco-Solvent / UV High-Resolution 1440 DPI',
        tensile: 'Non-tear grey-back blockout synthetic film',
        temp: '-10°C to +50°C (14°F to 122°F)'
      },
      applications: [
        'Corporate Seminars, Workshops & AGM Presentations',
        'Trade Show Booth Entrances & Product Showcase Spots',
        'Hospitality & Hotel Lobby Directional Announcements',
        'University & Campus Educational Recruitment Fairs'
      ],
      finishing: [
        {
          icon: 'fa-shield-halved',
          title: 'Anti-Curl Greyback Film',
          desc: '100% blockout opaque grey backing eliminates background shadows and guarantees edges stay laser-flat.'
        },
        {
          icon: 'fa-bag-shopping',
          title: 'Padded Oxford Travel Bag',
          desc: 'Water-resistant nylon padded carrying case with shoulder strap included with every standee unit.'
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'Snap-Lock Top Rail',
          desc: 'Tool-free mechanical clamp rail locks graphics firmly without adhesive tape.'
        }
      ],
      faq: [
        {
          q: 'Can I replace the graphic in the existing base later?',
          a: 'Yes, our snap-lock aluminum cartridges are designed for simple graphic replacement for future campaigns.'
        },
        {
          q: 'How fast can one person assemble the standee?',
          a: 'Less than 30 seconds! Simply swing out the base feet, insert the support pole, and pull up the banner.'
        },
        {
          q: 'Is it light enough for airline travel as carry-on?',
          a: 'Yes, the total unit weighs only 2.8 kg and packs into a sleek shoulder bag easily accepted as checked or overhead baggage.'
        }
      ]
    },
    {
      id: 'promotional-banners',
      category: 'displays-events',
      categoryName: 'Displays & Exhibitions',
      name: 'Promotional Teardrop & Feather Banners',
      description: 'Dynamic outdoor advertising flags engineered to withstand gusty winds. Complete with fiberglass pole and water bag/ground spike.',
      sizes: '8ft, 10ft, 12ft, 14ft height',
      price: '$45.00 / set',
      image: 'assets/images/products/promotional-teardrop-feather-banners.jpg',
      gallery: [
        'assets/images/products/promotional-teardrop-feather-banners.jpg',
        'assets/images/services/dynamic-teardrop-flags-popup-canopies-pos-hardware.jpg',
        'assets/images/products/aluminum-rollup-standee.jpg',
        'assets/images/services/event-backdrops-trade-show-exhibition-graphics.jpg',
        'assets/images/commercial printing hero/exhibition-booth-backdrop.jpg'
      ],
      material: '110 GSM Knitted Polyester Flag Media',
      specs: 'Dye-sublimation print, 95% reverse bleedthrough',
      turnaround: '24–48 Hours',
      techSpecs: {
        weight: '110 GSM Warp-Knitted Polyester Fabric',
        base: 'High-flex carbon-composite fiberglass pole sections',
        ink: 'Direct Dye-Sublimation with Heat Fixation at 210°C',
        tensile: 'Wind-resistant aerodynamic flutter up to 45 km/h',
        temp: '-30°C to +70°C (-22°F to 158°F)'
      },
      applications: [
        'Automobile Dealership Forecourts & Roadside Displays',
        'Outdoor Sports Tournaments, Marathons & Beach Events',
        'Open-Air Music Festivals, Food Truck Fairs & Markets',
        'Retail Plaza Sidewalk Walkway Promotions'
      ],
      finishing: [
        {
          icon: 'fa-arrows-rotate',
          title: '360° Rotating Ball-Bearing Spindle',
          desc: 'Allows the flag to turn effortlessly with the wind direction without wrapping around the pole.'
        },
        {
          icon: 'fa-anchor',
          title: 'Dual Base Hardware Options',
          desc: 'Includes an outdoor ground spike for lawns/sand plus an indoor cross-base with 10L water doughnut ballast.'
        },
        {
          icon: 'fa-water',
          title: 'Machine-Washable Flag Fabric',
          desc: 'Colorfast dye-sublimation inks will not bleed or run when washed in a gentle laundry cycle.'
        }
      ],
      faq: [
        {
          q: 'Is the graphic printed on both sides?',
          a: 'Our standard flag features 95% reverse bleedthrough, meaning graphics are vibrant on both sides (mirror on reverse). We also offer 3-layer blackout double-sided flags.'
        },
        {
          q: 'How does it hold up in heavy wind and rain?',
          a: 'The knitted polyester weave allows wind to pass through smoothly, preventing tip-overs up to 45 km/h wind speeds.'
        },
        {
          q: 'Can I purchase just replacement flag prints without buying new poles?',
          a: 'Yes, we sell replacement flag fabric skins tailored to your existing pole dimensions.'
        }
      ]
    },
    {
      id: 'event-exhibition',
      category: 'displays-events',
      categoryName: 'Displays & Exhibitions',
      name: 'Exhibition Stall Backdrop & Truss Graphics',
      description: 'Seamless exhibition backdrop banners and pop-up spider display walls. Vibrant color saturation with zero glare under bright hall spotlights.',
      sizes: '10x8 ft, 20x10 ft, Custom',
      price: '$2.80 / sq.ft',
      image: 'assets/images/products/exhibition-stall-backdrop-truss-graphics.jpg',
      gallery: [
        'assets/images/products/exhibition-stall-backdrop-truss-graphics.jpg',
        'assets/images/services/event-backdrops-trade-show-exhibition-graphics.jpg',
        'assets/images/commercial printing hero/exhibition-booth-backdrop.jpg',
        'assets/images/Recent Large Format Projects/truss-wall-backdrop-global-tech-summit.jpg'
      ],
      material: 'Matte non-reflective blackout flex',
      specs: 'Wrinkle-resistant, eyeleted or velcro attached',
      turnaround: '24–48 Hours',
      techSpecs: {
        weight: '440 GSM Matte Black-Back Blockout Flex',
        base: 'High-density multi-layer blackout scrim',
        ink: 'Eco-Solvent / UV Curable Matte Inks (Zero Reflection)',
        tensile: 'Warp 1900 N / Weft 1700 N, B1 Fire Certified',
        temp: '-20°C to +70°C (-4°F to 158°F)'
      },
      applications: [
        'International Convention & Exhibition Center Stalls',
        'Press Conference & Media Interview Step-and-Repeat Walls',
        'Red Carpet Awards Ceremonies & VIP Photo Backdrops',
        'Corporate Annual General Meeting (AGM) Stage Walls'
      ],
      finishing: [
        {
          icon: 'fa-grip',
          title: 'Heavy-Duty Hook-and-Loop Velcro',
          desc: '2-inch industrial perimeter velcro stitched for lightning-fast installation on modular pop-up aluminum frames.'
        },
        {
          icon: 'fa-camera',
          title: 'Zero Flash-Glare Anti-Reflective Surface',
          desc: 'Engineered specifically for broadcast TV cameras and high-intensity flash photography.'
        },
        {
          icon: 'fa-compress',
          title: 'Wrinkle-Resistant Folding Formulation',
          desc: 'Can be folded into luggage for international flights without permanent creases.'
        }
      ],
      faq: [
        {
          q: 'Will exhibition hall safety marshals accept this material?',
          a: 'Yes, our blackout exhibition media comes with B1 and DIN 4102-1 fire safety certifications required by major expo venues worldwide.'
        },
        {
          q: 'Do you supply the pop-up frame and magnetic struts as well?',
          a: 'Yes, we supply complete turnkey pop-up spider frames, LED spotlights, and rolling hardcases.'
        },
        {
          q: 'Can this backdrop be made seamless up to 20 feet wide?',
          a: 'Yes, we print seamless single-piece backdrops up to 10.5 ft height by 50 ft continuous length.'
        }
      ]
    },

    // -------------------------------------------------------------
    // TOPIC 5: Specialty & Fleet Graphics (3 Items)
    // -------------------------------------------------------------
    {
      id: 'wall-posters',
      category: 'specialty-fleet',
      categoryName: 'Specialty & Fleet Graphics',
      name: 'Large Format Photo-Quality Wall Posters',
      description: 'Stunning 12-color archival pigment printing on 260 GSM satin or gloss photo paper. Perfect for architectural renderings and retail posters.',
      sizes: 'A2, A1, A0, 24x36 in, 40x60 in',
      price: '$3.50 / sq.ft',
      image: 'assets/images/products/large-format-photo-quality-wall-posters.jpg',
      gallery: [
        'assets/images/products/large-format-photo-quality-wall-posters.jpg',
        'assets/images/creative showcase hero/textured-fine-art-canvas-mural.jpg',
        'assets/images/creative showcase hero/corporate-spatial-graphics.jpg',
        'assets/images/products/high-resolution-frontlit-banner.jpg'
      ],
      material: '260 GSM Premium Photo Satin Paper',
      specs: '2400 DPI UltraChrome Pigment Inks',
      turnaround: 'Same-Day Express',
      techSpecs: {
        weight: '260 GSM Micro-Porous Resin-Coated Paper',
        base: 'High-purity alpha-cellulose with true photographic satin finish',
        ink: '12-Color Archival Pigment Inks (UltraChrome HDX)',
        tensile: '99.8% Adobe RGB gamut coverage, 2400 x 1200 DPI',
        temp: 'Indoor archival rating: 75+ years lightfastness'
      },
      applications: [
        'Architectural Masterplans, Elevation Renderings & CAD Drawings',
        'Art Gallery Exhibitions & Limited-Edition Giclée Prints',
        'High-End Fashion & Luxury Retail In-Store Visuals',
        'Scientific Research & Medical Conference Poster Presentations'
      ],
      finishing: [
        {
          icon: 'fa-shield',
          title: 'Thermal Encapsulation Lamination',
          desc: 'Matte or crystal gloss thermal seal that makes prints 100% moisture-proof and wipe-clean.'
        },
        {
          icon: 'fa-cubes',
          title: 'Rigid Foam Core Mounting',
          desc: 'Mounted onto 5mm rigid foam core board for immediate easel display or wall hanging.'
        },
        {
          icon: 'fa-box-archive',
          title: 'Heavy-Duty Postal Tube Packing',
          desc: 'Rolled with acid-free glassine paper and shipped in 3mm thick protective mailing tubes.'
        }
      ],
      faq: [
        {
          q: 'Will these posters fade under office fluorescent lighting?',
          a: 'No, our 12-color archival pigment inks are museum-rated for over 75 years without fading under indoor lighting.'
        },
        {
          q: 'Can you print custom dimensions not listed in standard A-sizes?',
          a: 'Yes, our roll printer handles custom widths up to 60 inches by any length.'
        },
        {
          q: 'What resolution should my artwork file be?',
          a: 'For photo prints viewed up close, we recommend 300 DPI at 100% actual print dimensions.'
        }
      ]
    },
    {
      id: 'vehicle-graphics',
      category: 'specialty-fleet',
      categoryName: 'Specialty & Fleet Graphics',
      name: 'Commercial Van & Truck Vinyl Wraps',
      description: 'Turn commercial delivery vans, trucks, and buses into mobile billboards. Cast wrap vinyl with protective UV-blocking gloss overlaminate.',
      sizes: 'Full & Partial wraps, Decals',
      price: '$5.50 / sq.ft',
      image: 'assets/images/products/commercial-van-truck-vinyl-wraps.jpg',
      gallery: [
        'assets/images/products/commercial-van-truck-vinyl-wraps.jpg',
        'assets/images/services/high-impact-commercial-van-truck-fleet-wraps.jpg',
        'assets/images/services/commercial-vinyl-wrap.jpg',
        'assets/images/commercial printing hero/fleet-vehicle-branding.jpg',
        'assets/images/gallery/full-vehicle-cast-wrap-commercial-cargo-van.jpg'
      ],
      material: '3M / Avery Dennison Cast Wrap Vinyl',
      specs: '5-year outdoor warranty against fading and peeling',
      turnaround: '2–3 Business Days',
      techSpecs: {
        weight: '50 Micron Ultra-Conformable Cast PVC Film',
        base: '3M Comply micro-replicated air release channels with controltac',
        ink: 'Eco-Solvent with UV Barrier Gloss Overlaminate',
        tensile: 'Elongation > 150% around rivets, deep corrugations & curves',
        temp: '-50°C to +110°C (-58°F to 230°F)'
      },
      applications: [
        'Commercial Delivery Van & Courier Vehicle Fleet Branding',
        'Service Plumbing, Electrical & HVAC Fleet Truck Graphics',
        'Mobile Food Truck Complete 360-Degree Brand Wraps',
        'Corporate Sales Fleet Magnetic & Removable Door Decals'
      ],
      finishing: [
        {
          icon: 'fa-car',
          title: 'Knifeless Tape Surface Trimming',
          desc: 'Precision cuts executed without touching vehicle paintwork using filament knifeless tape.'
        },
        {
          icon: 'fa-sun',
          title: 'Cast UV Barrier Overlaminate',
          desc: 'Shields printed graphics from stone chips, road grime, salt, and sun fading for 5+ years.'
        },
        {
          icon: 'fa-fire-burner',
          title: 'Post-Heating Thermal Memory Lock',
          desc: 'Post-heated to 90°C in vehicle recesses to permanently lock the vinyl shape and prevent lifting.'
        }
      ],
      faq: [
        {
          q: 'Will vehicle wrap damage the original factory car paint?',
          a: 'No, high-grade cast vinyl actually protects the underlying factory paint from UV sun oxidation, minor scratches, and stone chips.'
        },
        {
          q: 'Can the wrapped vehicle be washed in automated car washes?',
          a: 'Hand washing is recommended for longevity, though touchless automated car washes are fully compatible after a 7-day initial cure period.'
        },
        {
          q: 'How long does a vehicle wrap typically last?',
          a: 'Our premium 3M cast wraps typically last 5 to 7 years with vibrant colors and clean edges.'
        }
      ]
    },
    {
      id: 'floor-graphics',
      category: 'specialty-fleet',
      categoryName: 'Specialty & Fleet Graphics',
      name: 'Heavy-Duty Slip-Resistant Floor Graphics',
      description: 'R10-certified textured anti-slip floor decals engineered for high-traffic retail aisles, airport concourses, and trade show pathways.',
      sizes: 'Custom die-cut up to 54"',
      price: '$4.50 / sq.ft',
      image: 'assets/images/products/heavy-duty-slip-resistant-floor-graphics.jpg',
      gallery: [
        'assets/images/products/heavy-duty-slip-resistant-floor-graphics.jpg',
        'assets/images/products/self-adhesive-cast-vinyl-printing.jpg',
        'assets/images/products/perforated-one-way-vision-window-film.jpg',
        'assets/images/products/architectural-frosted-privacy-film.jpg'
      ],
      material: 'High-Tack Vinyl + R10 Anti-Slip Overlaminate',
      specs: 'Certified Anti-Slip, Scuff Resistant, Residue-Free',
      turnaround: '24 Hours Express',
      techSpecs: {
        weight: '180 Micron Total Composite Thickness (Vinyl + Textured Laminate)',
        base: 'High-tack acrylic adhesive engineered for tile, sealed concrete & wood',
        ink: 'UV-LED Heavy-Wear Pigments',
        tensile: 'R10 DIN 51130 certified anti-slip wet/dry safety rating',
        temp: '-10°C to +70°C (14°F to 158°F)'
      },
      applications: [
        'Supermarket & Department Store Promotional Aisle Decals',
        'Airport, Train Station & Bus Terminal Directional Pathways',
        'Warehouse & Factory Safety Walkway & Hazard Markings',
        'Trade Show Exhibition Booth Floor Branding'
      ],
      finishing: [
        {
          icon: 'fa-shoe-prints',
          title: 'DIN 51130 R10 Anti-Slip Texture',
          desc: 'Deep micro-embossed textured surface preventing pedestrian slip-and-fall hazards even when wet.'
        },
        {
          icon: 'fa-shield',
          title: 'Scuff & Pallet Truck Resistant',
          desc: 'Withstands high-volume pedestrian footfall and supermarket shopping cart wheel friction.'
        },
        {
          icon: 'fa-scissors',
          title: 'Custom Die-Cut Contour Cutting',
          desc: 'Cut to directional arrows, footprints, circles, or custom brand silhouette outlines.'
        }
      ],
      faq: [
        {
          q: 'Does this floor decal meet building safety regulations for slip resistance?',
          a: 'Yes, our floor graphics carry official R10 and ASTM slip resistance certification, fully indemnifying retail venues.'
        },
        {
          q: 'Can it be installed on waxed supermarket vinyl tile floors?',
          a: 'Yes, our high-tack adhesive bonds securely to clean waxed tiles, epoxy surfaces, terrazzo, polished concrete, and hardwood.'
        },
        {
          q: 'How is it removed when the promotion ends?',
          a: 'Simply lift a corner and peel at a 45-degree angle. It releases in large intact sections without leaving stubborn adhesive residue.'
        }
      ]
    }
  ];

  // Topic Metadata map
  const TOPIC_LABELS = {
    'all': 'All Products (15 Items across 5 Topics)',
    'flex-banner': 'Topic 1: Flex & Outdoor Banners (3 Items)',
    'vinyl-films': 'Topic 2: Vinyl & Window Films (3 Items)',
    'boards-signage': 'Topic 3: Rigid Boards & Signage (3 Items)',
    'displays-events': 'Topic 4: Displays & Exhibitions (3 Items)',
    'specialty-fleet': 'Topic 5: Specialty & Fleet Graphics (3 Items)'
  };

  // Render product cards on products.html
  function renderProducts(list, container) {
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-box-open fa-3x text-muted mb-3"></i>
          <h4 class="fw-bold">No printing products found</h4>
          <p class="text-muted">Try searching with a different keyword or select one of the category buttons.</p>
          <button class="btn btn-outline-primary btn-sm rounded-pill px-4 mt-2" id="resetFiltersBtn">Reset Filters &amp; View All 15 Products</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const allBtn = document.querySelector('.product-filter-btn[data-filter="all"]');
          if (allBtn) allBtn.click();
          const searchInput = document.getElementById('productSearchInput');
          if (searchInput) searchInput.value = '';
        });
      }
      return;
    }

    container.innerHTML = list.map(p => `
      <div class="col-lg-4 col-md-6 mb-4 animate-on-scroll is-animated" data-animate="fade-up">
        <div class="card-product">
          <div class="product-img-box">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="product-category-badge">${p.categoryName.split('&')[0].trim()}</span>
          </div>
          <div class="product-body">
            <h4 class="product-title">${p.name}</h4>
            <p class="product-desc">${p.description}</p>
            <div class="product-meta">
              <span class="product-meta-sizes"><strong>Sizes:</strong> ${p.sizes}</span>
              <span class="product-meta-price text-primary fw-bold">${p.price}</span>
            </div>
            <div class="product-actions">
              <a href="product-details.html?id=${p.id}" class="btn btn-outline-primary btn-sm">
                <i class="fa-regular fa-eye me-1"></i> Details
              </a>
              <button type="button" class="btn btn-primary btn-sm btn-open-quote" data-product-id="${p.id}">
                <i class="fa-solid fa-paper-plane me-1"></i> Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    if (typeof window.initScrollAnimations === 'function') {
      window.initScrollAnimations();
    }
  }

  // Setup catalog page interaction
  function initProductsPage() {
    const container = document.getElementById('productsGridContainer');
    if (!container) return;

    let currentCategory = 'all';
    let searchQuery = '';
    const topicLabelEl = document.getElementById('activeTopicLabel');

    function filterItems() {
      let filtered = PRODUCTS;

      if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
        if (topicLabelEl) {
          topicLabelEl.textContent = TOPIC_LABELS[currentCategory] || currentCategory;
        }
      } else {
        if (topicLabelEl) {
          topicLabelEl.textContent = TOPIC_LABELS['all'];
        }
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.specs.toLowerCase().includes(q)
        );
        if (topicLabelEl) {
          topicLabelEl.textContent = `Found ${filtered.length} product(s) matching "${searchQuery}"`;
        }
      }

      renderProducts(filtered, container);
    }

    renderProducts(PRODUCTS, container);

    const filterButtons = document.querySelectorAll('.product-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterItems();
      });
    });

    const searchInput = document.getElementById('productSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterItems();
      });
    }
  }

  // Populate product details dynamically on product-details.html
  function initProductDetailsPage() {
    const detailTitle = document.getElementById('detailProductName') || document.querySelector('.bind-product-name');
    if (!detailTitle) return;

    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id') || 'flex-banner';
    const product = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];

    // Text bindings
    document.querySelectorAll('.bind-product-name').forEach(el => el.textContent = product.name);
    document.querySelectorAll('.bind-product-desc').forEach(el => el.textContent = product.description);
    document.querySelectorAll('.bind-product-price').forEach(el => el.textContent = product.price);
    document.querySelectorAll('.bind-product-sizes').forEach(el => el.textContent = product.sizes);
    document.querySelectorAll('.bind-product-category').forEach(el => el.textContent = product.categoryName);
    document.querySelectorAll('.bind-product-material').forEach(el => el.textContent = product.material);
    document.querySelectorAll('.bind-product-specs').forEach(el => el.textContent = product.specs);

    const turnaroundEl = document.getElementById('detailProductTurnaround');
    if (turnaroundEl) turnaroundEl.textContent = product.turnaround || 'Same-Day / 24 Hours Express';

    // Main Image
    const mainImg = document.getElementById('detailProductImage');
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    // Dynamic Clickable Thumbnail Strip (Unique Non-Repeating Images)
    const thumbsContainer = document.getElementById('detailThumbnailsRow');
    const uniqueGallery = product.gallery ? Array.from(new Set(product.gallery)) : [];
    if (thumbsContainer && uniqueGallery.length > 0) {
      thumbsContainer.innerHTML = uniqueGallery.map((imgUrl, idx) => `
        <div class="col-3">
          <div class="product-thumb-item ${idx === 0 ? 'active' : ''}">
            <img src="${imgUrl}" alt="${product.name} angle ${idx + 1}" class="product-thumb-img" data-full="${imgUrl}">
          </div>
        </div>
      `).join('');

      thumbsContainer.querySelectorAll('.product-thumb-item').forEach(item => {
        item.addEventListener('click', () => {
          const thumbImg = item.querySelector('.product-thumb-img');
          if (thumbImg && mainImg) {
            mainImg.style.opacity = '0.3';
            setTimeout(() => {
              mainImg.src = thumbImg.getAttribute('data-full');
              mainImg.style.opacity = '1';
            }, 120);
          }
          thumbsContainer.querySelectorAll('.product-thumb-item').forEach(t => t.classList.remove('active'));
          item.classList.add('active');
        });
      });
    }

    // Quote button
    const quoteLink = document.getElementById('detailQuoteBtn');
    if (quoteLink) {
      quoteLink.setAttribute('data-product-id', product.id);
      quoteLink.classList.add('btn-open-quote');
      quoteLink.removeAttribute('href');
    }

    // Dynamic Technical Specifications Table
    if (product.techSpecs) {
      const wEl = document.getElementById('detailTechWeight');
      if (wEl) wEl.textContent = product.techSpecs.weight;
      const bEl = document.getElementById('detailTechBase');
      if (bEl) bEl.textContent = product.techSpecs.base;
      const iEl = document.getElementById('detailTechInk');
      if (iEl) iEl.textContent = product.techSpecs.ink;
      const tEl = document.getElementById('detailTechTensile');
      if (tEl) tEl.textContent = product.techSpecs.tensile;
      const tempEl = document.getElementById('detailTechTemp');
      if (tempEl) tempEl.textContent = product.techSpecs.temp;
    }

    // Dynamic Recommended Applications List
    const appsContainer = document.getElementById('detailApplicationsList');
    if (appsContainer && product.applications) {
      appsContainer.innerHTML = product.applications.map(app => `
        <div class="material-item-row p-3 rounded-3 d-flex align-items-center gap-3">
          <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 34px; height: 34px; background: rgba(124, 58, 237, 0.12); color: #7C3AED;">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <span class="fw-semibold text-dark">${app}</span>
        </div>
      `).join('');
    }

    // Dynamic Finishing & Mounting Options
    const finishingContainer = document.getElementById('detailFinishingRow');
    if (finishingContainer && product.finishing) {
      finishingContainer.innerHTML = product.finishing.map(f => `
        <div class="col-md-4">
          <div class="h-100 p-4 border rounded-4 bg-white shadow-sm d-flex flex-column" style="background-color: var(--surface) !important; border-color: rgba(139, 92, 246, 0.22) !important;">
            <h5 class="fw-bold mb-2"><i class="fa-solid ${f.icon} text-primary me-2"></i> ${f.title}</h5>
            <p class="small text-muted mb-0 leading-relaxed">${f.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Dynamic FAQ Accordion
    const faqContainer = document.getElementById('productFaqAccordion');
    if (faqContainer && product.faq) {
      faqContainer.innerHTML = product.faq.map((item, idx) => `
        <div class="accordion-item mb-2 border rounded-3 overflow-hidden">
          <h2 class="accordion-header" id="faqHeading${idx}">
            <button class="accordion-button ${idx !== 0 ? 'collapsed' : ''} fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}">
              ${item.q}
            </button>
          </h2>
          <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#productFaqAccordion">
            <div class="accordion-body text-muted leading-relaxed">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Dynamic Related Products (Pick 3 different products from other categories)
    const relatedContainer = document.getElementById('detailRelatedProductsRow');
    if (relatedContainer) {
      const otherProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
      relatedContainer.innerHTML = otherProducts.map(p => `
        <div class="col-lg-4 col-md-6">
          <div class="card-product">
            <div class="product-img-box">
              <img src="${p.image}" alt="${p.name}" loading="lazy">
              <span class="product-category-badge">${p.categoryName.split('&')[0].trim()}</span>
            </div>
            <div class="product-body">
              <h4 class="product-title">${p.name}</h4>
              <p class="product-desc">${p.description}</p>
              <div class="product-meta">
                <span class="product-meta-sizes"><strong>Sizes:</strong> ${p.sizes}</span>
                <span class="product-meta-price text-primary fw-bold">${p.price}</span>
              </div>
              <div class="product-actions">
                <a href="product-details.html?id=${p.id}" class="btn btn-outline-primary btn-sm">
                  <i class="fa-regular fa-eye me-1"></i> Details
                </a>
                <button type="button" class="btn btn-primary btn-sm btn-open-quote" data-product-id="${p.id}">
                  <i class="fa-solid fa-paper-plane me-1"></i> Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // -------------------------------------------------------------
  // Interactive Quick Quote Modal System
  // Keeps users on the current page with live dimension & price calculations
  // -------------------------------------------------------------
  let activeQuoteProduct = null;

  function ensureQuickQuoteModal() {
    let modalEl = document.getElementById('quickQuoteModal');
    if (modalEl) return modalEl;

    const modalHTML = `
      <div class="modal fade" id="quickQuoteModal" tabindex="-1" aria-labelledby="quickQuoteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg" style="border-radius: var(--radius-lg); overflow: hidden; background-color: var(--surface);">
            
            <!-- Modal Header -->
            <div class="modal-header px-3 px-sm-4 py-3 align-items-start" style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(236, 72, 153, 0.06)); border-bottom: 1px solid rgba(124, 58, 237, 0.15);">
              <div class="d-flex flex-column align-items-start gap-1 pe-2">
                <span class="badge bg-primary text-white px-2 py-1 rounded-pill small" style="font-size: 0.72rem; letter-spacing: 0.02em;"><i class="fa-solid fa-bolt me-1"></i> Fast Trade Quote</span>
                <h5 class="modal-title fw-bold mb-0" id="quickQuoteModalLabel" style="line-height: 1.25;">Get Instant Product Quote</h5>
              </div>
              <button type="button" class="btn-close mt-1 flex-shrink-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <!-- Modal Body: Form View -->
            <div class="modal-body p-3 p-sm-4" id="quoteModalFormBody">
              
              <!-- Product Overview Card -->
              <div class="quote-product-overview d-flex align-items-center gap-3 p-3 mb-4 rounded-4" style="background: rgba(124, 58, 237, 0.04); border: 1px solid rgba(124, 58, 237, 0.15);">
                <img id="quoteModalImg" src="" alt="Product" class="rounded-3 border" style="width: 64px; height: 64px; object-fit: cover; flex-shrink: 0;">
                <div class="quote-product-info flex-grow-1" style="min-width: 0;">
                  <div class="d-flex align-items-center gap-2 flex-wrap mb-1">
                    <span class="badge bg-primary-subtle text-primary rounded-pill small" id="quoteModalCategory">Category</span>
                    <span class="badge bg-success-subtle text-success rounded-pill small" id="quoteModalTurnaround">24h Turnaround</span>
                  </div>
                  <h5 class="fw-bold mb-1" id="quoteModalTitle" style="font-size: 1.05rem; line-height: 1.35; word-wrap: break-word;">Product Name</h5>
                  <div class="small text-muted" id="quoteModalMaterial" style="line-height: 1.4; word-wrap: break-word;">Material specs</div>
                </div>
                <div class="quote-product-rate text-end ps-2 flex-shrink-0">
                  <div class="small text-muted">Base Rate</div>
                  <div class="fw-bold text-primary fs-5" id="quoteModalBasePrice">$1.20 / sq.ft</div>
                </div>
              </div>

              <!-- Quote Form -->
              <form id="quickQuoteForm" novalidate>
                <input type="hidden" id="quoteProductId" name="productId" value="">
                
                <!-- Dimensions & Quantity Row -->
                <div class="row g-3 mb-3">
                  <div class="col-sm-4" id="quoteWidthCol">
                    <label class="form-label fw-bold small text-muted mb-1">Width (Feet)</label>
                    <div class="input-group">
                      <input type="number" step="0.5" min="1" max="100" class="form-control fw-bold" id="quoteWidth" value="8" required>
                      <span class="input-group-text small">ft</span>
                    </div>
                  </div>
                  <div class="col-sm-4" id="quoteHeightCol">
                    <label class="form-label fw-bold small text-muted mb-1">Height (Feet)</label>
                    <div class="input-group">
                      <input type="number" step="0.5" min="1" max="100" class="form-control fw-bold" id="quoteHeight" value="4" required>
                      <span class="input-group-text small">ft</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <label class="form-label fw-bold small text-muted mb-1">Quantity</label>
                    <div class="input-group">
                      <button class="btn btn-outline-secondary" type="button" id="quoteQtyMinus"><i class="fa-solid fa-minus"></i></button>
                      <input type="number" min="1" max="1000" class="form-control text-center fw-bold" id="quoteQty" value="1" required>
                      <button class="btn btn-outline-secondary" type="button" id="quoteQtyPlus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                  </div>
                </div>

                <!-- Finishing Options & Live Calculation Strip -->
                <div class="row g-3 mb-4 align-items-center">
                  <div class="col-md-7">
                    <label class="form-label fw-bold small text-muted mb-1">Edge Finishing / Mounting</label>
                    <select class="form-select" id="quoteFinishing">
                      <option value="grommets">Solid Marine Brass Eyelets (Every 2 Ft)</option>
                      <option value="welded-hems">RF Continuous Heat-Welded Hems</option>
                      <option value="pole-pockets">Pole Pockets (Top &amp; Bottom Sleeves)</option>
                      <option value="clean-cut">Straight Laser Clean Cut Edge</option>
                      <option value="none">Standard Factory Raw Edge</option>
                    </select>
                  </div>
                  <div class="col-md-5">
                    <div class="p-2 px-3 rounded-3 text-center border" style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(0, 245, 255, 0.05)); border-color: rgba(124, 58, 237, 0.25) !important;">
                      <div class="small text-muted" id="quoteSqFtDisplay">32 sq.ft total</div>
                      <div class="fw-bold text-primary fs-4" id="quoteEstimatedTotal">$38.40</div>
                      <div class="text-muted" style="font-size: 0.72rem;">*Estimated factory wholesale subtotal</div>
                    </div>
                  </div>
                </div>

                <!-- Customer Details Row -->
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-muted mb-1">Your Name *</label>
                    <input type="text" class="form-control" id="quoteClientName" placeholder="e.g. John Doe / Company" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-muted mb-1">Business Email *</label>
                    <input type="email" class="form-control" id="quoteClientEmail" placeholder="name@company.com" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-muted mb-1">Phone Number *</label>
                    <input type="tel" class="form-control" id="quoteClientPhone" placeholder="+1 (555) 000-0000" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-muted mb-1">Turnaround Priority</label>
                    <select class="form-select" id="quotePriority">
                      <option value="standard">Standard Dispatch (24–48 Hours)</option>
                      <option value="express">Same-Day Priority Express Rush</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label fw-bold small text-muted mb-1">Project Notes / Artwork Instructions (Optional)</label>
                    <textarea class="form-control" id="quoteNotes" rows="2" placeholder="Tell us about your installation location, Pantone color codes, or artwork file links..."></textarea>
                  </div>
                </div>

                <!-- Submit Row -->
                <div class="d-flex gap-2 justify-content-end align-items-center pt-2 border-top">
                  <button type="button" class="btn btn-outline-secondary px-3" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary px-4 fw-bold">
                    <i class="fa-solid fa-paper-plane me-1"></i> Submit Trade Quote
                  </button>
                </div>
              </form>
            </div>

            <!-- Modal Body: Success Confirmation View -->
            <div class="modal-body p-5 text-center d-none" id="quoteModalSuccessBody">
              <div class="mb-4">
                <div class="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm" style="width: 76px; height: 76px; background: rgba(34, 197, 94, 0.15); color: #22C55E;">
                  <i class="fa-solid fa-circle-check fa-3x"></i>
                </div>
              </div>
              <span class="badge bg-success-subtle text-success px-3 py-1 rounded-pill fw-bold mb-2">Quote Request Submitted</span>
              <h3 class="fw-bold mb-2">Thank You, <span id="successClientName">Client</span>!</h3>
              <p class="text-muted mx-auto mb-4" style="max-width: 480px;">
                Your quote request for <strong id="successProductName">Product</strong> (<span id="successDimensions">Dimensions</span>) has been assigned reference ID <strong class="text-primary" id="successRefId">#FX-8492</strong>.
              </p>
              
              <div class="p-3 rounded-4 mb-4 text-start mx-auto border" style="max-width: 480px; background: rgba(124, 58, 237, 0.04); border-color: rgba(124, 58, 237, 0.2) !important;">
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted small">Estimated Total:</span>
                  <strong class="text-primary fs-5" id="successTotalAmount">$0.00</strong>
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <span class="text-muted small">Pre-Press Review:</span>
                  <span class="fw-semibold small text-success">Under 15 Minutes</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="text-muted small">Official PDF Invoice:</span>
                  <span class="fw-semibold small" id="successEmailTarget">Emailed to you</span>
                </div>
              </div>

              <div class="d-flex gap-2 justify-content-center flex-wrap">
                <button type="button" class="btn btn-primary px-4" data-bs-dismiss="modal">
                  <i class="fa-solid fa-arrow-left me-1"></i> Continue Browsing
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modalEl = document.getElementById('quickQuoteModal');

    // Attach form and live calculator listeners
    const form = document.getElementById('quickQuoteForm');
    const widthInput = document.getElementById('quoteWidth');
    const heightInput = document.getElementById('quoteHeight');
    const qtyInput = document.getElementById('quoteQty');
    const qtyMinus = document.getElementById('quoteQtyMinus');
    const qtyPlus = document.getElementById('quoteQtyPlus');

    function updateLiveEstimate() {
      if (!activeQuoteProduct) return;
      const w = Math.max(0.5, parseFloat(widthInput.value) || 8);
      const h = Math.max(0.5, parseFloat(heightInput.value) || 4);
      const qty = Math.max(1, parseInt(qtyInput.value) || 1);

      const priceStr = activeQuoteProduct.price || '$2.50';
      const isUnit = /set|pc|stand/i.test(priceStr);
      const numRate = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 2.50;

      const totalEl = document.getElementById('quoteEstimatedTotal');
      const sqFtEl = document.getElementById('quoteSqFtDisplay');

      if (isUnit) {
        const total = (numRate * qty).toFixed(2);
        if (totalEl) totalEl.textContent = `$${total}`;
        if (sqFtEl) sqFtEl.textContent = `${qty} unit(s) @ ${priceStr}`;
      } else {
        const singleSqFt = w * h;
        const totalSqFt = singleSqFt * qty;
        const total = (totalSqFt * numRate).toFixed(2);
        if (totalEl) totalEl.textContent = `$${total}`;
        if (sqFtEl) sqFtEl.textContent = `${totalSqFt.toFixed(1)} sq.ft total (${qty} pcs)`;
      }
    }

    [widthInput, heightInput, qtyInput].forEach(inp => {
      if (inp) inp.addEventListener('input', updateLiveEstimate);
    });

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
          qtyInput.value = val - 1;
          updateLiveEstimate();
        }
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        qtyInput.value = val + 1;
        updateLiveEstimate();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('quoteClientName');
        const emailInput = document.getElementById('quoteClientEmail');
        const phoneInput = document.getElementById('quoteClientPhone');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
          form.classList.add('was-validated');
          return;
        }

        const refId = 'FX-' + Math.floor(1000 + Math.random() * 9000);
        const w = widthInput.value;
        const h = heightInput.value;
        const qty = qtyInput.value;
        const totalEstimated = document.getElementById('quoteEstimatedTotal').textContent;

        document.getElementById('successClientName').textContent = nameInput.value.trim();
        document.getElementById('successProductName').textContent = activeQuoteProduct ? activeQuoteProduct.name : 'Product';
        document.getElementById('successDimensions').textContent = `${w}x${h} ft, Qty: ${qty}`;
        document.getElementById('successRefId').textContent = '#' + refId;
        document.getElementById('successTotalAmount').textContent = totalEstimated;
        document.getElementById('successEmailTarget').textContent = emailInput.value.trim();

        document.getElementById('quoteModalFormBody').classList.add('d-none');
        document.getElementById('quoteModalSuccessBody').classList.remove('d-none');
      });
    }

    return modalEl;
  }

  function openQuickQuoteModal(productId) {
    const modalEl = ensureQuickQuoteModal();
    activeQuoteProduct = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    // Reset view
    const formBody = document.getElementById('quoteModalFormBody');
    const successBody = document.getElementById('quoteModalSuccessBody');
    if (formBody) formBody.classList.remove('d-none');
    if (successBody) successBody.classList.add('d-none');

    const form = document.getElementById('quickQuoteForm');
    if (form) form.classList.remove('was-validated');

    // Populate product details
    const imgEl = document.getElementById('quoteModalImg');
    if (imgEl) {
      imgEl.src = activeQuoteProduct.image;
      imgEl.alt = activeQuoteProduct.name;
    }
    const titleEl = document.getElementById('quoteModalTitle');
    if (titleEl) titleEl.textContent = activeQuoteProduct.name;

    const catEl = document.getElementById('quoteModalCategory');
    if (catEl) catEl.textContent = activeQuoteProduct.categoryName.split('&')[0].trim();

    const matEl = document.getElementById('quoteModalMaterial');
    if (matEl) matEl.textContent = activeQuoteProduct.material;

    const priceEl = document.getElementById('quoteModalBasePrice');
    if (priceEl) priceEl.textContent = activeQuoteProduct.price;

    const turnEl = document.getElementById('quoteModalTurnaround');
    if (turnEl) turnEl.textContent = activeQuoteProduct.turnaround || '24h Turnaround';

    const pIdInput = document.getElementById('quoteProductId');
    if (pIdInput) pIdInput.value = activeQuoteProduct.id;

    // Reset default sizes
    const wInput = document.getElementById('quoteWidth');
    const hInput = document.getElementById('quoteHeight');
    const qInput = document.getElementById('quoteQty');

    if (wInput) wInput.value = '8';
    if (hInput) hInput.value = '4';
    if (qInput) qInput.value = '1';

    // Check if unit item (like rollup standee or teardrop flag)
    const isUnit = /set|pc|stand/i.test(activeQuoteProduct.price);
    const widthCol = document.getElementById('quoteWidthCol');
    const heightCol = document.getElementById('quoteHeightCol');
    if (isUnit) {
      if (widthCol) widthCol.style.opacity = '0.5';
      if (heightCol) heightCol.style.opacity = '0.5';
    } else {
      if (widthCol) widthCol.style.opacity = '1';
      if (heightCol) heightCol.style.opacity = '1';
    }

    // Trigger calculation
    const totalEl = document.getElementById('quoteEstimatedTotal');
    const sqFtEl = document.getElementById('quoteSqFtDisplay');
    const numRate = parseFloat(activeQuoteProduct.price.replace(/[^0-9.]/g, '')) || 2.50;

    if (isUnit) {
      if (totalEl) totalEl.textContent = `$${numRate.toFixed(2)}`;
      if (sqFtEl) sqFtEl.textContent = `1 unit @ ${activeQuoteProduct.price}`;
    } else {
      if (totalEl) totalEl.textContent = `$${(32 * numRate).toFixed(2)}`;
      if (sqFtEl) sqFtEl.textContent = `32.0 sq.ft total (1 pcs)`;
    }

    // Show modal
    if (window.bootstrap && window.bootstrap.Modal) {
      const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    } else {
      modalEl.classList.add('show');
      modalEl.style.display = 'block';
    }
  }

  window.openQuickQuoteModal = openQuickQuoteModal;

  // Intercept any click on quote buttons across the document
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-quote, [href*="contact.html?product="]');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      let prodId = btn.getAttribute('data-product-id');
      if (!prodId && btn.href) {
        try {
          const url = new URL(btn.href, window.location.origin);
          prodId = url.searchParams.get('product');
        } catch (err) {}
      }
      openQuickQuoteModal(prodId || 'flex-banner');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    initProductsPage();
    initProductDetailsPage();
  });
})();
