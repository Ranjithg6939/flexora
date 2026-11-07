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
      image: 'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80'
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
      categoryName: 'Flex & Outdoor Banners',
      name: 'High-Resolution Frontlit Banner',
      description: 'Engineered specifically for front-illuminated billboards and wall mounts. Smooth matte finish delivers crystal-clear legibility.',
      sizes: '8x4 ft, 10x6 ft, Custom',
      price: '$1.35 / sq.ft',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1520375412562-eab222cb8d43?auto=format&fit=crop&w=600&q=80'
      ],
      material: '440 GSM Frontlit Vinyl Fabric',
      specs: 'Flame Retardant, Matte / Gloss Finish',
      turnaround: '24–48 Hours',
      techSpecs: {
        weight: '440 GSM heavy-grade frontlit substrate',
        base: 'High-tenacity 1000D x 1000D polyester woven fabric',
        ink: 'Japanese UV-LED Curable Inks with Micro-Droplet Technology',
        tensile: 'Warp 1800 N/5cm / Weft 1500 N/5cm (Industrial Rigging)',
        temp: '-30°C to +80°C (-22°F to 176°F)'
      },
      applications: [
        'Illuminated Commercial Outdoor Billboards',
        'Architectural Building Facade Murals',
        'Sports Stadium Perimeter Advertising Banners',
        'High-End Commercial Real Estate Signage'
      ],
      finishing: [
        {
          icon: 'fa-shield-halved',
          title: 'Reinforced Webbing Perimeter',
          desc: 'High-strength nylon webbing welded inside hems to withstand high-altitude hurricane wind shear.'
        },
        {
          icon: 'fa-wind',
          title: 'Engineered Wind Slits',
          desc: 'Half-moon wind pressure relief cuts precisely positioned to prevent banner tearing on high towers.'
        },
        {
          icon: 'fa-certificate',
          title: 'Anti-Glare Matte Topcoat',
          desc: 'Eliminates headlight and spotlight glare for 100% legibility 24 hours a day.'
        }
      ],
      faq: [
        {
          q: 'What is the main difference between Frontlit and Standard Flex?',
          a: 'Frontlit uses a higher density 1000D woven fabric with an anti-glare micro-embossed surface that maximizes external spotlight reflection without glare.'
        },
        {
          q: 'Is this material fire retardant for indoor public exhibitions?',
          a: 'Yes, our 440 GSM Frontlit is B1 and NFPA-701 certified flame-retardant, meeting international safety codes.'
        },
        {
          q: 'Do you offer installation rigging hardware?',
          a: 'Yes, we provide heavy-duty D-rings, turnbuckles, wire ropes, and stainless steel tension hooks upon request.'
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
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1568017122356-f401efd3324c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1513663055714-73414173c839?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1520375412562-eab222cb8d43?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1520375412562-eab222cb8d43?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1568017122356-f401efd3324c?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1568017122356-f401efd3324c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1513663055714-73414173c839?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1520375412562-eab222cb8d43?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1568017122356-f401efd3324c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1513663055714-73414173c839?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
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
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80'
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
      <div class="col-lg-4 col-md-6 mb-4 animate-on-scroll" data-animate="fade-up">
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
                <i class="fa-regular fa-eye"></i> Details
              </a>
              <a href="contact.html?product=${p.id}" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-paper-plane"></i> Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
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

    // Dynamic Clickable Thumbnail Strip
    const thumbsContainer = document.getElementById('detailThumbnailsRow');
    if (thumbsContainer && product.gallery && product.gallery.length > 0) {
      thumbsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
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
      quoteLink.href = `contact.html?product=${product.id}`;
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
                <a href="contact.html?product=${p.id}" class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-paper-plane me-1"></i> Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProductsPage();
    initProductDetailsPage();
  });
})();
