/**
 * FLEXORA - Dynamic Service Details Engine
 * Comprehensive technical profiles, engineering specifications,
 * certified materials inventory, and authentic imagery for all 12 industrial services.
 */

(function () {
  'use strict';

  const SERVICES = {
    // -------------------------------------------------------------
    // 1. Digital Flex Printing
    // -------------------------------------------------------------
    'digital-flex': {
      id: 'digital-flex',
      name: 'Digital Flex Printing',
      breadcrumb: 'Digital Flex Printing',
      badgeTag: 'Frontlit & Backlit Engineering',
      pageTitle: 'High-Definition <span class="highlight">Digital Flex Printing</span>',
      pageDesc: 'Continuous 10.5ft rolls with weatherproof 3-year UV pigment saturation calibrated for high-impact highway hoardings, commercial retail launches, and giant promotional displays.',
      metaChips: [
        { icon: 'fa-shield-halved text-success', text: '3-Year UV Anti-Fade' },
        { icon: 'fa-maximize text-accent', text: '10.5 Ft Seamless Width' },
        { icon: 'fa-bolt text-primary', text: 'RF Seam Welded Hems' },
        { icon: 'fa-truck-fast text-cyan', text: '24-Hr Rush Turnaround' }
      ],
      heroBadge: 'Industrial Press Production',
      heroTitle: 'Continuous Industrial High-Definition Flex Banners',
      heroDesc: 'Fabricated with industrial Japanese micro-piezo printheads producing 1440 DPI razor-sharp photographic accuracy. Engineered with heavy-duty 500D x 500D polyester scrim bases, sealed RF welded perimeter hems, and solid brass grommets built to resist 80 MPH sustained storm crosswinds.',
      featuresDesc: 'Why billboard contractors, event organizers, and national brands partner with FLEXORA for superwide executions.',
      materialsDesc: 'Certified industrial frontlit, blackout, and heavy-duty star flex media ready for automated machine feeding.',
      image: 'assets/images/services/high-definition-flex-banner.jpg',
      imageAlt: 'Continuous Industrial High-Definition Flex Banners – Roll-to-Roll Press & Highway Billboard',
      features: [
        {
          icon: 'fa-maximize',
          title: 'Continuous 10.5 Ft Seamless Roll',
          desc: 'Print massive continuous graphic panels up to 3.2m / 10.5ft without seams, preserving pristine creative art layout and brand typography.'
        },
        {
          icon: 'fa-sun',
          title: '3-Year Anti-Fade UV Stability',
          desc: 'Dual-cure UV-solvent pigments polymerized deep into the flex substrate, resisting intense solar UV degradation, rain, and smog wash-out.'
        },
        {
          icon: 'fa-wind',
          title: 'Wind-Resistant RF Welded Edges',
          desc: 'Continuous 1.5-inch high-frequency electromagnetic RF welded hems with solid brass eyelets machine-stamped every 2 feet for zero tear-out.'
        }
      ],
      materials: [
        {
          title: '340 GSM Economy Frontlit Flex',
          desc: 'Standard outdoor media for short-to-medium duration retail sales, trade announcements, and local real estate banners.',
          price: 'From $1.20 / sq.ft'
        },
        {
          title: '440 GSM Heavy Blackout Flex',
          desc: 'Dense blackout core preventing rear sunlight show-through on double-sided highway billboards and illuminated gantries.',
          price: 'From $1.75 / sq.ft'
        },
        {
          title: '510 GSM Star Heavy-Duty Flex',
          desc: 'Ultra-smooth micro-finish producing vibrant photographic color saturation, high contrast ratios, and deep blacks.',
          price: 'From $2.10 / sq.ft'
        },
        {
          title: '280 GSM Airflow Perforated Mesh',
          desc: '37% aerodynamic airflow micro-perforations ideal for high-altitude rooftop hoardings and coastal storm zones.',
          price: 'From $2.40 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Composition', value: 'High-tenacity composite polyester core woven with pure white exterior PVC vinyl coating' },
        { label: 'Tensile Breaking Strength', value: 'Warp: 1950 N/5cm | Weft: 1800 N/5cm (ISO 13934-1 certified)' },
        { label: 'Print Chemistry & Curing', value: 'Low-VOC Eco-Solvent / Industrial Dual-Strike UV Curable Pigments' },
        { label: 'Environmental & Fire Safety', value: 'DIN 4102-1 B1 flame-retardant and RoHS heavy-metal compliance certified' },
        { label: 'Maximum Seamless Span', value: '3.20 meters (10.5 feet) roll width by up to 50 meters continuous roll length' },
        { label: 'Turnaround & Logistics', value: 'Same-day rush dispatch for press-ready files; standard 24–48 hours nationwide' }
      ],
      faq: [
        {
          q: 'How long will these flex banners resist fading under direct outdoor sunlight?',
          a: 'Our banners utilize industrial UV-stabilized pigments polymerized into the substrate under ultraviolet lamps, guaranteed against noticeable fading, chalking, or color shifting for a minimum of 36 months outdoors.'
        },
        {
          q: 'Can you print banners wider than 10.5 feet without visible seams?',
          a: 'For spans exceeding 10.5 ft (3.2m), we use computerized high-frequency RF overlap seam welders. The bond melts the PVC layers together at molecular levels, making the seam virtually invisible from normal viewing distance and stronger than the base fabric.'
        },
        {
          q: 'What perimeter finishing options are included standard?',
          a: 'Every banner includes 1.5-inch welded perimeter hems, internal reinforcement webbing, and machine-stamped rust-proof brass eyelets spaced every 24 inches along all four edges at no additional cost.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 2. Large Format Printing
    // -------------------------------------------------------------
    'large-format': {
      id: 'large-format',
      name: 'Large Format Printing',
      breadcrumb: 'Large Format Printing',
      badgeTag: 'Superwide Billboards & Hoardings',
      pageTitle: 'Superwide Industrial <span class="highlight">Large Format Printing</span>',
      pageDesc: 'Industrial 3.2m and 5.0m super-wide platforms capable of producing seamless building wraps, highway hoardings, and monumental stadium mesh banners.',
      metaChips: [
        { icon: 'fa-maximize text-cyan', text: '16.4 Ft Seamless Width' },
        { icon: 'fa-wind text-warning', text: '80 MPH Storm Rated' },
        { icon: 'fa-building text-primary', text: 'Giant Building Wraps' },
        { icon: 'fa-truck-fast text-success', text: 'Nationwide Logistics' }
      ],
      heroBadge: 'Mega Scale Hoardings Division',
      heroTitle: 'Superwide Building Wraps & Highway Hoarding Graphics',
      heroDesc: 'Engineered for massive outdoor visual dominance. Our superwide 3.2m and 5.0m continuous roll printing presses produce photorealistic highway hoardings, building wraps, and stadium mesh banners with exceptional color density and structural integrity.',
      featuresDesc: 'Why national outdoor advertising networks and mega-event organizers rely on FLEXORA for monumental installations.',
      materialsDesc: 'Heavy-duty architectural scrims and airflow mesh engineered for high-altitude wind resistance.',
      image: 'assets/images/services/superwide-building-wraps-highway-hoarding.jpg',
      imageAlt: 'Mega Scale Hoardings Division - Superwide Building Wraps & Highway Hoarding Graphics',
      features: [
        {
          icon: 'fa-maximize',
          title: 'Monumental 16.4 Ft Single-Piece Width',
          desc: 'Our 5-meter continuous roll press eliminates vertical seams across massive building wraps, sports arena banners, and multi-lane highway gantries.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'High-Tension Seatbelt Webbing Hems',
          desc: 'Perimeters are reinforced with 2-inch commercial seatbelt webbing and 3-ply corner patches rated to withstand 80 MPH hurricane-grade wind gusts.'
        },
        {
          icon: 'fa-eye',
          title: 'Triple-Strike Color Saturation',
          desc: 'Multi-layer pigment deposition ensures pitch-black shadows, punchy neon vibrance, and razor-sharp brand clarity even from 500+ feet viewing distance.'
        }
      ],
      materials: [
        {
          title: '510 GSM Interstate Blackout Flex',
          desc: 'Dense blackout interior barrier prevents structure cross-beams and gantry scaffolding from showing through under direct sunlight.',
          price: 'From $1.90 / sq.ft'
        },
        {
          title: '270 GSM Aerodynamic Scaffolding Mesh',
          desc: '38% open area engineered to release catastrophic wind pressure on building facades and scaffolding while maintaining 85% graphic legibility.',
          price: 'From $2.30 / sq.ft'
        },
        {
          title: '650 GSM Heavy Architectural Scrim',
          desc: 'Ultra-tough multi-filament PVC engineered for long-term multi-year highway gantry installations and bridge spans.',
          price: 'From $2.85 / sq.ft'
        },
        {
          title: '440 GSM Premium Frontlit Flex',
          desc: 'Standard commercial media for high-impact urban billboard hoardings and retail park entrance monoliths.',
          price: 'From $1.45 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Composition', value: '1000D x 1000D high-tenacity woven polyester scrim with smooth polymer weather-coating' },
        { label: 'Tensile Strength Rating', value: 'Warp: 3200 N/5cm | Weft: 2800 N/5cm (Tear strength: 480 N / 420 N)' },
        { label: 'Color Gamut & Inks', value: 'Industrial UV-Curable Pigments / Multi-Pass High-Density Solvent' },
        { label: 'Fire Safety Certifications', value: 'B1 (DIN 4102-1), NFPA-701, and California Title 19 compliant' },
        { label: 'Maximum Seamless Roll Span', value: '5.00 meters (16.4 feet) seamless width; continuous lengths up to 100m' },
        { label: 'Logistics & Packaging', value: 'Heavy-duty cardboard roll tubes or folded in protective waterproof tarpaulins' }
      ],
      faq: [
        {
          q: 'How do you handle shipping and handling for huge 50-foot banners?',
          a: 'Banners under 16 feet in short dimension are rolled on heavy-gauge industrial cardboard cores to prevent creasing. Larger monolithic wraps are folded with soft protective foam sheets and packed in weatherproof double-wall cartons.'
        },
        {
          q: 'How does aerodynamic mesh compare to solid flex on scaffolding?',
          a: 'Airflow mesh allows 38% of wind volume to pass directly through the fabric. This reduces the mechanical wind load on scaffolding structures by over 45%, preventing structural fatigue while maintaining vibrant graphic visibility.'
        },
        {
          q: 'Can you provide certified structural wind calculations?',
          a: 'Yes, our engineering team provides substrate tensile data sheets, grommet pull-out ratings, and wind-load certificates required by municipal building inspectors and structural engineers.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 3. Indoor Banner Printing
    // -------------------------------------------------------------
    'indoor-banner': {
      id: 'indoor-banner',
      name: 'Indoor Banner Printing',
      breadcrumb: 'Indoor Banner Printing',
      badgeTag: 'Retail & Commercial Interiors',
      pageTitle: 'Indoor Retail & Showroom <span class="highlight">Banner Printing</span>',
      pageDesc: 'Odorless water-based latex and eco-solvent prints on smooth anti-curl media designed for retail malls, luxury showrooms, and indoor corporate spaces.',
      metaChips: [
        { icon: 'fa-leaf text-success', text: '100% Odorless Inks' },
        { icon: 'fa-ban text-accent', text: 'Zero-Curl Blockout' },
        { icon: 'fa-certificate text-warning', text: 'GREENGUARD Gold' },
        { icon: 'fa-eye text-cyan', text: 'Photographic 2400 DPI' }
      ],
      heroBadge: 'Interior & Showroom Media',
      heroTitle: 'Ultra-Smooth Indoor Banners & Retail Hanging Displays',
      heroDesc: 'Designed specifically for close-up consumer scrutiny in luxury malls, automotive showrooms, and corporate headquarters. Printed with certified odorless water-based latex and micro-piezo inks on composite anti-curl PET film for dead-flat hanging presentation.',
      featuresDesc: 'Why premier retail designers and interior branding agencies choose FLEXORA indoor media.',
      materialsDesc: 'Engineered multi-layer composite films and woven fabrics with zero chemical off-gassing.',
      image: 'assets/images/creative showcase hero/corporate-spatial-graphics.jpg',
      imageAlt: 'Indoor Retail & Showroom Banner Printing - High Resolution Corporate Wall Display',
      features: [
        {
          icon: 'fa-leaf',
          title: '100% Odorless GREENGUARD Gold Inks',
          desc: 'Zero volatile organic compounds (VOCs). Safe for immediate hanging in hospitals, food courts, schools, and enclosed luxury boutiques.'
        },
        {
          icon: 'fa-arrows-left-right-to-line',
          title: 'Zero-Curl Multi-Layer Composite',
          desc: 'Bi-axially oriented polyester (PET) core guarantees edges stay dead-flat without edge curling, even in dry air-conditioned retail interiors.'
        },
        {
          icon: 'fa-eye',
          title: 'Micro-Detail 2400 DPI Resolution',
          desc: 'Microscopic 3.5 picoliter droplet ejection produces razor-sharp 4pt micro-text, smooth skin tones, and rich photographic contrast.'
        }
      ],
      materials: [
        {
          title: '220 Micron Anti-Curl Blockout PET Film',
          desc: 'Rigid composite film with light-blocking greyback layer. Guaranteed zero edge curl in roll-up standees and hanging rails.',
          price: 'From $1.85 / sq.ft'
        },
        {
          title: '260 GSM Polyester Indoor Banner Fabric',
          desc: 'Lightweight woven satin fabric with fluid drape and zero reflection under harsh retail spotlights.',
          price: 'From $2.20 / sq.ft'
        },
        {
          title: '380 GSM Smooth Super-Fine Polyvinyl',
          desc: 'Micro-textured smooth surface optimized for vibrant cosmetic and fashion advertising posters.',
          price: 'From $1.50 / sq.ft'
        },
        {
          title: '200 Micron Optical Lightbox Film',
          desc: 'Diffusion-coated translucent film engineered for edge-lit and rear-illuminated slim LED snap frames.',
          price: 'From $2.60 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Composition', value: 'Multi-layer PET / PVC composite film with optical light-diffusing velvet coating' },
        { label: 'Edge-Curl Resistance', value: 'Delta < 0.5mm across 48-hour continuous climate test at 22°C / 45% RH' },
        { label: 'Ink Chemistry & Odor', value: 'Water-based HP Latex / Eco-Solvent with zero airborne VOC off-gassing' },
        { label: 'Indoor Environmental Safety', value: 'GREENGUARD Gold Certified (UL 2818) & Class A ASTM E84 Fire Rated' },
        { label: 'Maximum Seamless Width', value: '2.50 meters (8.2 feet) continuous width by 30 meters roll length' },
        { label: 'Hardware Compatibility', value: 'Snap rails, aluminum roll-ups, banner clips, magnetic hanging tracks' }
      ],
      faq: [
        {
          q: 'Will these indoor banners smell like chemicals when unboxed inside a retail store?',
          a: 'Not at all. We utilize genuine water-based latex inks and eco-certified pigments that are cured completely dry inside the press tunnel. They are 100% odorless and safe for immediate installation in enclosed occupied spaces.'
        },
        {
          q: 'Why do regular banners curl at the edges and how does your PET media prevent it?',
          a: 'Standard PVC flex contracts unevenly along the cut edges when humidity changes. Our indoor banners use an internal dimensionally stable polyester core that cannot shrink or expand, keeping the edges perfectly flat.'
        },
        {
          q: 'Can indoor banners be fitted with top and bottom aluminum snap rails?',
          a: 'Yes, we provide anodized aluminum snap rails, invisible hanging clips, and nylon ceiling suspension wires custom-cut to your banner width.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 4. Outdoor Banner Printing
    // -------------------------------------------------------------
    'outdoor-banner': {
      id: 'outdoor-banner',
      name: 'Outdoor Banner Printing',
      breadcrumb: 'Outdoor Banner Printing',
      badgeTag: 'Heavy-Duty Weatherized Flex',
      pageTitle: 'Weather-Resistant <span class="highlight">Outdoor Banner Printing</span>',
      pageDesc: 'Heavy-duty weatherized flex banners with reinforced double welded hems and brass eyelets engineered to resist sustained gale winds, torrential rains, and solar heat.',
      metaChips: [
        { icon: 'fa-shield-halved text-success', text: 'Stormproof 80 MPH' },
        { icon: 'fa-bolt text-primary', text: 'RF Double Welded Hems' },
        { icon: 'fa-sun text-warning', text: 'UV Anti-Degradation' },
        { icon: 'fa-ring text-accent', text: 'Marine Brass Grommets' }
      ],
      heroBadge: 'Storm-Rated Outdoor Division',
      heroTitle: 'Heavy-Duty Reinforced Outdoor Commercial Banners',
      heroDesc: 'Built to survive the toughest outdoor conditions. Manufactured with high-tenacity 1000D x 1000D warp-knit polyester yarn embedded in weatherized polyvinyl. Every banner is finished with continuous thermal weld hems, load-bearing corner reinforcement patches, and solid marine brass grommets spaced every 18 inches.',
      featuresDesc: 'Why civil contractors, sports stadiums, and commercial plazas depend on FLEXORA outdoor banners.',
      materialsDesc: 'Marine-grade reinforced flex substrates with all-weather thermal stability from -30°C to +70°C.',
      image: 'assets/images/services/heavy-duty-reinforced-outdoor-commercial-banners.jpg',
      imageAlt: 'Storm-Rated Outdoor Division - Heavy-Duty Reinforced Outdoor Commercial Banners on Construction Site Barricade',
      features: [
        {
          icon: 'fa-wind',
          title: '80 MPH Gale Wind Resistance',
          desc: 'High-frequency thermal welded hems and 3-ply corner patches prevent eyelet tear-out under high wind pressure.'
        },
        {
          icon: 'fa-temperature-arrow-up',
          title: 'Extreme Climate Thermal Stability',
          desc: 'Specially plasticized PVC compound prevents freezing brittleness in winter (-30°C) and sagging deformation in intense summer heat (+70°C).'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Solid Marine Brass Eyelets',
          desc: 'Machine-punched nickel-plated brass grommets engineered with toothed spurs that bite into the internal webbing for zero pull-out.'
        }
      ],
      materials: [
        {
          title: '440 GSM Weather-Shield Frontlit Flex',
          desc: 'General commercial outdoor media with anti-wicking yarn and smooth matte face for vibrant readability.',
          price: 'From $1.35 / sq.ft'
        },
        {
          title: '510 GSM Heavy-Duty Rip-Stop Flex',
          desc: 'High-density 1000D x 1000D scrim engineered for windy highway bridges, fence lines, and sports fields.',
          price: 'From $1.80 / sq.ft'
        },
        {
          title: '370 GSM Airflow Perforated Wind Mesh',
          desc: 'Permeable mesh releasing 40% wind drag for temporary construction fences and open scaffolding.',
          price: 'From $2.15 / sq.ft'
        },
        {
          title: '550 GSM Blockout Double-Sided Flex',
          desc: 'Complete light barrier core for hanging street pole banners with dual-sided outdoor graphics.',
          price: 'From $2.75 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Yarn Structure', value: '1000D x 1000D high-tenacity warp-knit polyester with anti-wick treatment' },
        { label: 'Tensile Breaking Strength', value: 'Warp: 2400 N/5cm | Weft: 2100 N/5cm | Tear Resistance: 350 N' },
        { label: 'Perimeter Seam Construction', value: '1.5-inch high-frequency electromagnetic thermal RF welded folded hems' },
        { label: 'Fastener Hardware', value: 'Heavy-gauge solid brass toothed grommets spaced every 18 or 24 inches' },
        { label: 'Weather & Chemical Resistance', value: 'IP67 waterproof, UV resistant, salt-spray and industrial smog proof' },
        { label: 'Standard Production Time', value: '24 hours for standard runs; same-day rush dispatch on request' }
      ],
      faq: [
        {
          q: 'How far apart are the grommets placed and can I request custom spacing?',
          a: 'Standard eyelet spacing is every 24 inches along the entire perimeter, with reinforced double grommets on all four corners. We can customize spacing to every 12 or 18 inches at no extra charge.'
        },
        {
          q: 'Should I choose solid flex or perforated mesh for a windy fence?',
          a: 'For open wire chain-link fences or high-altitude scaffolding where wind speeds exceed 30 MPH, we strongly recommend airflow mesh to reduce wind load on your fence posts. For solid walls or hoardings, solid 510 GSM flex is best.'
        },
        {
          q: 'Can the banners be cleaned if they get dirty from road splash?',
          a: 'Yes. Our UV-curable inks are chemical and water resistant. You can safely wash the banner face using warm water, mild soap, and a soft microfiber sponge or pressure washer at low setting.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 5. Promotional Printing
    // -------------------------------------------------------------
    'promotional': {
      id: 'promotional',
      name: 'Promotional Printing',
      breadcrumb: 'Promotional Printing',
      badgeTag: 'Portable Displays & Hardware',
      pageTitle: 'Promotional Flags, Gazebos & <span class="highlight">Event Displays</span>',
      pageDesc: 'Teardrop advertising flags, pop-up gazebos, roll-up banner standees, and portable point-of-sale display hardware built for high-traffic promotions.',
      metaChips: [
        { icon: 'fa-flag text-accent', text: '95% Reverse Bleed' },
        { icon: 'fa-cube text-primary', text: 'Anodized Aluminum' },
        { icon: 'fa-stopwatch text-warning', text: '60-Sec Tool-Free Setup' },
        { icon: 'fa-suitcase text-success', text: 'Padded Travel Bags' }
      ],
      heroBadge: 'Point-of-Sale Hardware Division',
      heroTitle: 'Dynamic Teardrop Flags, Pop-Up Canopies & POS Hardware',
      heroDesc: 'Capture foot traffic instantly at trade expos, product launches, and car dealership forecourts. We manufacture vibrant dye-sublimated fabric flags, commercial hexagonal pop-up canopies, and luxury aluminum roll-up standees engineered for rapid deployment.',
      featuresDesc: 'Engineered for field durability and effortless mobile marketing across hundreds of activations.',
      materialsDesc: 'Knitted polyester fabrics, PU-coated waterproof canvas, and aircraft-grade aluminum hardware.',
      image: 'assets/images/services/dynamic-teardrop-flags-popup-canopies-pos-hardware.jpg',
      imageAlt: 'Dynamic Teardrop Flags, Pop-Up Canopies & POS Hardware - Roadside Teardrop Banners',
      features: [
        {
          icon: 'fa-flag',
          title: '95% True Reverse Bleed Through',
          desc: 'Dye sublimation pushes pigments directly through 110 GSM knitted polyester, ensuring vivid brand visibility from both sides on a single fabric layer.'
        },
        {
          icon: 'fa-wrench',
          title: '60-Second Tool-Free Assembly',
          desc: 'Flexible carbon composite pole tips and interlocking aluminum bases snap together effortlessly without tools or screws.'
        },
        {
          icon: 'fa-wind',
          title: '45 MPH Wind-Tested Hardware',
          desc: 'Equipped with heavy steel cross-bases, rotating bearing spindles, and refillable donut water weights for outdoor stability.'
        }
      ],
      materials: [
        {
          title: '110 GSM Knitted Polyester Flag Fabric',
          desc: 'Lightweight aerodynamic fabric with reinforced black polyester pole pockets and triple-stitched fly hems.',
          price: 'From $45.00 / kit'
        },
        {
          title: 'Luxury Retractable Roll-Up Standee',
          desc: 'Heavy-gauge anodized aluminum cassette with chrome end-caps, hybrid bungee pole, and padded carry case.',
          price: 'From $35.00 / pc'
        },
        {
          title: '600D Waterproof PU Pop-Up Canopy',
          desc: 'Commercial 40mm hexagonal aluminum gazebo frame with full-color UV printed canopy roof and side walls.',
          price: 'From $240.00 / kit'
        },
        {
          title: '240 GSM Tension Fabric Display Wall',
          desc: 'Pillowcase zippered fabric graphic that slips tightly over curved or straight tubular aluminum frames.',
          price: 'From $180.00 / kit'
        }
      ],
      specs: [
        { label: 'Pole Hardware Material', value: 'Aircraft-grade anodized aluminum with flexible carbon composite top rods' },
        { label: 'Base Options', value: 'Heavy steel flat plate, scissor cross-base, ground spike, and 12L water weight ring' },
        { label: 'Printing Technology', value: 'Direct-to-textile Disperse Dye-Sublimation heat fixed at 210°C' },
        { label: 'Fabric Washability', value: 'Machine washable on cold gentle cycle; wrinkle and fade resistant' },
        { label: 'Available Flag Heights', value: 'Small (2.8m / 9ft) | Medium (3.4m / 11ft) | Large (4.5m / 15ft)' },
        { label: 'Packaging & Transit', value: 'Individual reinforced 600D padded Cordura travel duffel bags included' }
      ],
      faq: [
        {
          q: 'Do the flag kits include the ground base or are they sold separately?',
          a: 'All our flag kits come complete with the printed graphic skin, carbon composite pole set, ground base of your choice (spike for grass or cross-base for hard surfaces), and a zippered travel bag.'
        },
        {
          q: 'Can I purchase replacement graphic skins without re-buying the poles?',
          a: 'Yes, absolutely. We stock precision templates for all standard teardrop and feather flag sizes so you can refresh campaigns by ordering replacement skins only.'
        },
        {
          q: 'How well do the flags perform in gusty coastal winds?',
          a: 'Our flags feature sealed ball-bearing rotator spindles that allow the flag to spin 360 degrees with the wind direction, preventing toppling and reducing aerodynamic stress.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 6. Event Banner Printing
    // -------------------------------------------------------------
    'event-banner': {
      id: 'event-banner',
      name: 'Event Banner Printing',
      breadcrumb: 'Event Banner Printing',
      badgeTag: 'Exhibition & Stage Graphics',
      pageTitle: 'Event & Exhibition <span class="highlight">Banner Printing</span>',
      pageDesc: 'Custom step-and-repeat media backdrops, concert stage truss graphics, trade show booth walls, and gala red carpet media walls delivered overnight.',
      metaChips: [
        { icon: 'fa-camera text-accent', text: 'Anti-Glare Matte' },
        { icon: 'fa-bolt text-warning', text: 'Overnight Rush Ready' },
        { icon: 'fa-fire-flame-curved text-danger', text: 'B1 Fire Retardant' },
        { icon: 'fa-maximize text-cyan', text: 'Seamless Truss Fits' }
      ],
      heroBadge: 'Trade Show & Red Carpet Division',
      heroTitle: 'Event Backdrops & Trade Show Exhibition Graphics',
      heroDesc: 'Designed specifically for photographic clarity under intense flash photography and broadcast television lighting. Printed on specialized glare-free matte substrates with flame-retardant B1 certifications required by global convention centers.',
      featuresDesc: 'Why international fashion galas, tech expos, and award shows choose FLEXORA event backdrops.',
      materialsDesc: 'Anti-reflective velvet matte media and acoustic tension fabric meeting strict convention hall codes.',
      image: 'assets/images/services/event-backdrops-trade-show-exhibition-graphics.jpg',
      imageAlt: 'Event Backdrops & Trade Show Exhibition Graphics - 6th Antalya Fashion Week Step and Repeat Red Carpet Wall',
      features: [
        {
          icon: 'fa-camera',
          title: 'Zero Flash Flare Matte Coating',
          desc: 'Specialized velvet-matte texture eliminates harsh studio flash glare and camera lens reflections on press media walls.'
        },
        {
          icon: 'fa-fire',
          title: 'B1 & NFPA 701 Fire Certified',
          desc: 'Certified flame-retardant substrates meeting strict safety compliance regulations mandated by convention centers and expo halls.'
        },
        {
          icon: 'fa-truck-fast',
          title: 'Overnight 24/7 Emergency Dispatch',
          desc: 'Late sponsor changes? Our 24-hour press shift prints and couriers emergency replacement backdrops straight to your venue.'
        }
      ],
      materials: [
        {
          title: '440 GSM Anti-Glare Matte Flex',
          desc: 'Heavyweight matte flex for step-and-repeat media walls, press conferences, and red carpet photo backdrops.',
          price: 'From $1.40 / sq.ft'
        },
        {
          title: '260 GSM Seamless Tension SEG Fabric',
          desc: 'Wrinkle-free stretch fabric with silicone edge beading (SEG) for modular aluminum exhibition booth frames.',
          price: 'From $2.90 / sq.ft'
        },
        {
          title: '5mm Rigid Sunboard Truss Panels',
          desc: 'Direct UV printed rigid foam boards cut to exact trade show aluminum modular frame dimensions.',
          price: 'From $3.80 / sq.ft'
        },
        {
          title: '300 GSM Blackout Pop-Up Wall Media',
          desc: 'Light-blocking blockout film designed for curved or straight magnetic pop-up accordion frames.',
          price: 'From $2.50 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Face Finish', value: 'Micro-textured velvet ultra-matte (glare index < 3.2 GU under 60° flash)' },
        { label: 'Flame Retardancy Rating', value: 'B1 (DIN 4102-1), NFPA-701, and EN 13501-1 certified for public assembly' },
        { label: 'Inks & Color Saturation', value: 'Eco-Solvent / UV Curable Matte Inks (Photographic Delta-E < 1.0)' },
        { label: 'Mounting Options', value: 'Grommets, top/bottom pole pockets, Velcro perimeter, or Silicone Edge Gasket (SEG)' },
        { label: 'Frame Structure', value: 'Aircraft-grade lightweight anodized aluminum frame systems' },
        { label: 'Turnaround & Dispatch', value: '24-Hour emergency trade show and red carpet dispatch' }
      ],
      faq: [
        {
          q: 'Will the backdrop reflect camera flash during photo shoots?',
          a: 'No. Our event flex and fabrics use micro-textured anti-glare coatings specifically formulated for high-end celebrity press calls and broadcast television studios.'
        },
        {
          q: 'What fire certificates do convention halls require for indoor backdrops?',
          a: 'Convention centers globally require DIN 4102-1 B1 or NFPA-701 flame-retardant certificates. All our event media comes with official laboratory test certificates stamped for venue marshals.'
        },
        {
          q: 'Can you accommodate same-day emergency reprint requests?',
          a: 'Yes. If artwork changes or last-minute sponsors are added, our express 24/7 print shifts can reprint and courier backdrops directly to your venue in hours.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 7. Custom Signage Printing
    // -------------------------------------------------------------
    'signage': {
      id: 'signage',
      name: 'Custom Signage Printing',
      breadcrumb: 'Custom Signage Printing',
      badgeTag: 'Illuminated & Architectural Signage',
      pageTitle: 'Architectural Commercial <span class="highlight">Signage & LED Lightboxes</span>',
      pageDesc: 'Architectural commercial signage, illuminated LED glow sign boxes, 3D acrylic letters, and ACP sheet cladding fabrication for luxury retail fascias.',
      metaChips: [
        { icon: 'fa-lightbulb text-warning', text: '50,000-Hr Samsung LEDs' },
        { icon: 'fa-shield-halved text-success', text: 'IP67 Waterproof' },
        { icon: 'fa-ruler-combined text-primary', text: 'CNC Routed ACP' },
        { icon: 'fa-certificate text-cyan', text: 'UL / CE Listed' }
      ],
      heroBadge: 'Architectural Signage Engineering',
      heroTitle: 'Illuminated LED Glow Signs & 3D Dimensional Facias',
      heroDesc: 'Architectural commercial signage built with precision CNC-routed 4mm aluminum composite panels (ACP), cast 3D acrylic lettering, and Samsung IP67 waterproof LED modules with 50,000-hour operational lifespans.',
      featuresDesc: 'Engineered for luxury flagship stores, airport transit corridors, and corporate headquarters.',
      materialsDesc: 'Premium cast acrylics, architectural aluminum composites, and light-diffusing substrates.',
      image: 'assets/images/services/backlit-glow-signage.jpg',
      imageAlt: 'Architectural Commercial Signage & LED Lightboxes - Luxury Mall Storefront',
      features: [
        {
          icon: 'fa-ruler-combined',
          title: 'Computerized CNC Routed ACP',
          desc: 'Computerized CNC routing delivers micro-millimeter precision for 3D channel letters, push-through acrylic graphics, and seamless panel returns.'
        },
        {
          icon: 'fa-lightbulb',
          title: 'High-Flux IP67 LED Backlighting',
          desc: 'Samsung optical lens LED modules deliver uniform, spot-free luminance across the entire graphic face with 80% lower energy draw.'
        },
        {
          icon: 'fa-gem',
          title: 'Flame-Polished 3D Cast Acrylic',
          desc: 'Laser-cut and diamond flame-polished acrylic lettering provides stunning dimensional depth and edge glow.'
        }
      ],
      materials: [
        {
          title: '4mm Architectural ACP Sheet Cladding',
          desc: 'Heavy-duty aluminum composite panel with PVDF exterior coating resistant to acid rain, UV chalking, and corrosion.',
          price: 'From $4.50 / sq.ft'
        },
        {
          title: '10mm Cast Optix Acrylic Sheet',
          desc: 'Ultra-clear cast acrylic for dimensional laser-cut letters, push-through illuminated faces, and halo-lit signage.',
          price: 'From $6.20 / sq.ft'
        },
        {
          title: '500 GSM Translucent Backlit Flex',
          desc: 'Special optical light-diffusing flex banner engineered for giant storefront lightboxes and pylon signs.',
          price: 'From $2.40 / sq.ft'
        },
        {
          title: 'Extruded Heavy Aluminum Sign Box Profile',
          desc: 'Powder-coated structural aluminum casing with internal heat sinks and quick-access maintenance doors.',
          price: 'From $18.00 / linear ft'
        }
      ],
      specs: [
        { label: 'Face Substrates', value: '4mm PVDF Aluminum Composite / 10mm Cast Acrylic / Optical Backlit Flex' },
        { label: 'Illumination Engine', value: 'Samsung 2835 High-Flux IP67 Waterproof LED Modules (6500K / 4000K / 3000K)' },
        { label: 'Power Supply Units', value: 'Mean Well IP67 Industrial Power Drivers with short-circuit and surge protection' },
        { label: 'Electrical Compliance', value: 'CE, UL Listed, RoHS compliant components with grounded safety circuitry' },
        { label: 'Structural Durability', value: 'Engineered for 10+ years exterior architectural performance' },
        { label: 'Fabrication Lead Time', value: '3 to 5 business days for standard sign boxes; 7 days for complex 3D fascias' }
      ],
      faq: [
        {
          q: 'How do you prevent dark spots and hot spots inside LED lightboxes?',
          a: 'We use optical wide-angle lens LED modules spaced according to computerized depth-to-pitch ratios. Combined with our light-diffusing substrates, this ensures 100% uniform surface luminance without visible LED hotspots.'
        },
        {
          q: 'Can these illuminated signs handle rain, snow, and extreme temperatures?',
          a: 'Yes. All electrical components, including LED modules and Mean Well power drivers, are IP67 certified waterproof. Sign casings feature integrated weep holes for condensation drainage and sealed rubber gaskets.'
        },
        {
          q: 'Do you provide structural engineering shop drawings for municipal sign permits?',
          a: 'Yes, our drafting department provides detailed CAD section drawings, electrical load specifications, and mounting anchor diagrams needed for local municipal sign permits.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 8. Vinyl Sticker Printing
    // -------------------------------------------------------------
    'vinyl-sticker': {
      id: 'vinyl-sticker',
      name: 'Vinyl Sticker Printing',
      breadcrumb: 'Vinyl Sticker Printing',
      badgeTag: 'Precision Die-Cut Decals',
      pageTitle: 'Commercial <span class="highlight">Vinyl Sticker Printing</span> & Decals',
      pageDesc: 'Self-adhesive vinyl printing with precision digital die-cutting for branding decals, floor graphics, product labels, and architectural window displays.',
      metaChips: [
        { icon: 'fa-crosshairs text-primary', text: '0.2mm Digital Die-Cut' },
        { icon: 'fa-wind text-accent', text: 'Bubble-Free Air Release' },
        { icon: 'fa-shield-halved text-success', text: 'UV Overlaminated' },
        { icon: 'fa-shoe-prints text-warning', text: 'R10 Slip-Resistant Floor' }
      ],
      heroBadge: 'Precision Die-Cut Department',
      heroTitle: 'Custom Self-Adhesive Vinyl Decals & Surface Graphics',
      heroDesc: 'High-performance adhesive graphics printed on polymeric vinyl with micro-grooved air-release liners for 100% bubble-free installation. Finished with optical-eye contour plotters capable of 0.2mm kiss-cut precision.',
      featuresDesc: 'Engineered for smooth application, vibrant color retention, and clean residue-free removal.',
      materialsDesc: 'Commercial polymeric films, anti-scratch floor laminates, and optical clear cast window vinyls.',
      image: 'assets/images/services/commercial-vinyl-wrap.jpg',
      imageAlt: 'Commercial Vinyl Sticker Printing & Precision Die-Cut Decals - Storefront & Van Graphics',
      features: [
        {
          icon: 'fa-wind',
          title: 'Micro Air-Release Adhesive Channels',
          desc: 'Microscopic embossed channels in the adhesive layer allow trapped air bubbles to squeegee out effortlessly during installation.'
        },
        {
          icon: 'fa-crosshairs',
          title: 'Optical Sensor Digital Kiss-Cutting',
          desc: 'High-speed tangential knife plotters read optical registration marks to cut intricate shapes, letters, and custom contours with 0.2mm precision.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Anti-Scratch UV Protective Overlaminate',
          desc: 'Matte, gloss, or textured floor overlaminates protect the ink layer against heavy footwear scuffs, cleaning chemicals, and weather.'
        }
      ],
      materials: [
        {
          title: '100 Micron Polymeric Gloss Vinyl',
          desc: 'High-grade 5-year vinyl for storefront window graphics, branding decals, and outdoor commercial equipment.',
          price: 'From $1.60 / sq.ft'
        },
        {
          title: '80 Micron Matte Removable Wall Vinyl',
          desc: 'Low-tack acrylic adhesive that sticks firmly to painted interior drywall and removes cleanly with zero paint damage.',
          price: 'From $1.85 / sq.ft'
        },
        {
          title: '200 Micron R10 Slip-Resistant Floor Vinyl',
          desc: 'Heavy-duty textured anti-slip laminate certified for retail supermarket aisles and airport concourses.',
          price: 'From $2.75 / sq.ft'
        },
        {
          title: '75 Micron Ultra-Clear Cast Decal Film',
          desc: 'Optically transparent film where unprinted areas remain crystal clear like bare architectural glass.',
          price: 'From $3.10 / sq.ft'
        }
      ],
      specs: [
        { label: 'Film Composition', value: 'High-grade monomeric and polymeric PVC with grey or clear acrylic adhesive' },
        { label: 'Adhesive Technology', value: 'Pressure-sensitive solvent acrylic with micro air-egress release liner' },
        { label: 'Print Resolution', value: '1440 DPI photographic micro-piezo with variable droplet technology' },
        { label: 'Outdoor Durability', value: '3 to 5 years outdoor exposure when finished with protective overlaminate' },
        { label: 'Floor Safety Rating', value: 'DIN 51130 R10 anti-slip certified and ASTM C1028 static coefficient compliant' },
        { label: 'Finishing Options', value: 'Supplied on rolls, sheeted individual pieces, or crack-and-peel kiss-cut sets' }
      ],
      faq: [
        {
          q: 'What is the difference between kiss-cut and die-cut stickers?',
          a: 'Kiss-cut stickers cut through the vinyl layer only, leaving the paper backing intact so stickers peel off a sheet easily. Die-cut stickers cut completely through both the vinyl and the backing paper into individual custom shapes.'
        },
        {
          q: 'Will floor graphics withstand heavy retail foot traffic and industrial floor scrubbers?',
          a: 'Yes. Our floor graphics are protected with a thick 200-micron embossed non-slip overlaminate that resists scuff marks, shopping cart wheels, and commercial chemical floor detergents.'
        },
        {
          q: 'Does the adhesive leave a sticky residue when removed from glass or painted walls?',
          a: 'Our removable wall and window vinyls utilize specialized clean-peel acrylic adhesives that remove cleanly without leaving glue residue or stripping paint for up to 2 years.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 9. Custom Graphic Printing
    // -------------------------------------------------------------
    'custom-graphic': {
      id: 'custom-graphic',
      name: 'Custom Graphic Printing',
      breadcrumb: 'Custom Graphic Printing',
      badgeTag: 'Fine Art & Spatial Murals',
      pageTitle: 'Fine Art Custom Graphics & <span class="highlight">Wall Murals</span>',
      pageDesc: 'High-resolution fine art canvas prints, frosted glass vinyl etching, and photo wall murals printed up to 2400 DPI with archival museum-grade pigments.',
      metaChips: [
        { icon: 'fa-palette text-accent', text: '2400 DPI Fine Art' },
        { icon: 'fa-hourglass text-warning', text: '100-Yr Archival Inks' },
        { icon: 'fa-scroll text-primary', text: '380 GSM Pure Cotton' },
        { icon: 'fa-fire-flame-curved text-danger', text: 'Class A Fire Rated' }
      ],
      heroBadge: 'Fine Art & Architectural Division',
      heroTitle: 'Museum-Grade Fine Art Canvas & Architectural Murals',
      heroDesc: 'Ultra-high-resolution spatial graphics for executive boardrooms, luxury hotel suites, and museum exhibitions. Output on 12-color giclée pigment engines delivering Delta-E < 1.0 color fidelity across archival cotton canvas and textured wallpaper.',
      featuresDesc: 'Crafted for interior architects, museum curators, and corporate branding designers.',
      materialsDesc: 'Archival artist-grade canvas, textured non-woven wallcoverings, and optical films.',
      image: 'assets/images/services/museum-grade-fine-art-canvas-architectural-murals.jpg',
      imageAlt: 'Museum-Grade Fine Art Canvas & Architectural Murals - Luxury Hotel Gallery Wall',
      features: [
        {
          icon: 'fa-palette',
          title: '12-Color Archival Pigment Engine',
          desc: 'Extended color gamut with dedicated photo black, matte black, grey, and photo cyan inks producing smooth photographic tonal gradation.'
        },
        {
          icon: 'fa-scroll',
          title: 'Textured Seamless Wallcoverings',
          desc: 'Heavyweight paste-the-wall and pre-pasted architectural wallpapers that mask minor drywall imperfections.'
        },
        {
          icon: 'fa-shield-halved',
          title: '100-Year Indoor Lightfastness',
          desc: 'Certified Wilhelm Imaging Research archival rating guaranteeing prints resist indoor UV fading for over a century.'
        }
      ],
      materials: [
        {
          title: '380 GSM 100% Pure Cotton Canvas',
          desc: 'Traditional woven artist canvas with natural texture, acid-free coating, and high tensile stretch stability.',
          price: 'From $3.20 / sq.ft'
        },
        {
          title: '300 GSM Textured Fabric Wallpaper',
          desc: 'Commercial Class A fire-rated non-woven wallcovering with subtle linen or stucco surface embossing.',
          price: 'From $2.80 / sq.ft'
        },
        {
          title: '80 Micron Frosted Dusted Crystal Film',
          desc: 'Translucent architectural window vinyl simulating sandblasted etched glass for privacy in office conference rooms.',
          price: 'From $2.60 / sq.ft'
        },
        {
          title: '240 GSM Satin Photo Lustre Paper',
          desc: 'Micro-porous photographic paper with pearl finish preventing fingerprint reflections under gallery lights.',
          price: 'From $1.90 / sq.ft'
        }
      ],
      specs: [
        { label: 'Canvas Substrate', value: '380 GSM 100% natural cotton core with acid-free polyurethane gesso primer' },
        { label: 'Color Gamut & Inks', value: '12-Color Archival Mineral Pigments (Lucia PRO / UltraChrome PRO)' },
        { label: 'Maximum Resolution', value: '2400 x 1200 DPI with microscopic 3.0 picoliter droplet control' },
        { label: 'Archival Longevity', value: '100+ years indoor lightfastness under glass; 60 years exposed' },
        { label: 'Fire Safety Standard', value: 'Class A ASTM E84 / EN 13501-1 fire rating for hospitality wallcoverings' },
        { label: 'Stretching & Framing', value: 'Hand-stretched over 1.5-inch kiln-dried FSC certified pine stretcher bars' }
      ],
      faq: [
        {
          q: 'What is the difference between standard digital canvas and museum-grade giclée canvas?',
          a: 'Standard canvas uses 4-color solvent inks that can look harsh up close and fade in 3-5 years. Our museum-grade giclée uses 12 archival mineral pigment inks on 100% acid-free cotton that will never yellow or fade for over 100 years.'
        },
        {
          q: 'Can custom wall murals be washed or sanitized in hotels and healthcare facilities?',
          a: 'Yes. Our commercial wallcoverings feature a breathable, washable acrylic topcoat that can be sanitized using standard hospital-grade detergents without damaging the pigments.'
        },
        {
          q: 'Do you deliver stretched gallery-wrapped canvas ready to hang on walls?',
          a: 'Yes. We offer fully finished gallery wrapping over solid kiln-dried wood frames with corner tension keys and pre-installed hanging wire, or shipped rolled in heavy mailing tubes.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 10. Installation Services
    // -------------------------------------------------------------
    'installation': {
      id: 'installation',
      name: 'Installation Services',
      breadcrumb: 'Installation Services',
      badgeTag: 'Certified Rigging & Mounting',
      pageTitle: 'Certified Rigging & <span class="highlight">Installation Services</span>',
      pageDesc: 'Certified rigging, boom lift crane operators, and professional installers for rooftop billboards, building wraps, and nationwide retail fit-outs.',
      metaChips: [
        { icon: 'fa-helmet-safety text-warning', text: 'OSHA Certified Riggers' },
        { icon: 'fa-truck-pickup text-primary', text: '150 Ft Boom Lift Capable' },
        { icon: 'fa-shield-halved text-success', text: '$5M Liability Insured' },
        { icon: 'fa-moon text-cyan', text: '24/7 Night Shift Execution' }
      ],
      heroBadge: 'Structural Installation Fleet',
      heroTitle: 'Heavy-Duty Structural Rigging & Building Facade Installations',
      heroDesc: 'Full-service turnkey installation teams equipped with boom lifts, spider staging, and certified high-altitude rigging hardware. Delivering flawless, safety-compliant mounting for highway hoardings, stadium mesh, and multi-story architectural wraps.',
      featuresDesc: 'Why corporate enterprises, billboard operators, and general contractors trust FLEXORA crews.',
      materialsDesc: 'Marine-grade 316 stainless cables, drop-forged turnbuckles, and heavy anchor systems.',
      image: 'assets/images/services/heavy-duty-structural-rigging-facade-installations.jpg',
      imageAlt: 'Structural Installation Fleet - Heavy-Duty Structural Rigging & Building Facade Installations with Scissor Lifts',
      features: [
        {
          icon: 'fa-helmet-safety',
          title: 'OSHA & SPRAT Certified Riggers',
          desc: 'All field technicians are certified in rope access (SPRAT), aerial boom operation, and fall protection safety protocols.'
        },
        {
          icon: 'fa-moon',
          title: '24/7 Nighttime Commercial Changeovers',
          desc: 'We execute complete retail storefront graphics and mall installations overnight with zero disruption to regular business hours.'
        },
        {
          icon: 'fa-shield-halved',
          title: '$5,000,000 Commercial Liability Coverage',
          desc: 'Comprehensive general liability and worker compensation insurance covering high-altitude structural and public space operations.'
        }
      ],
      materials: [
        {
          title: '316 Marine-Grade Stainless Steel Rigging Cable',
          desc: 'Heavy 7x19 strand aircraft-grade cable resisting saltwater corrosion and high dynamic wind strain.',
          price: 'Supplied with installation'
        },
        {
          title: 'Drop-In Heavy Concrete Expansion Anchors',
          desc: 'Hilti structural anchors engineered for high pull-out loads on reinforced concrete and brick masonry.',
          price: 'Supplied with installation'
        },
        {
          title: '5,000 lb Rated Turnbuckles & Shackle Links',
          desc: 'Drop-forged galvanized turnbuckles for precision tensioning of building wraps and facade mesh.',
          price: 'Supplied with installation'
        },
        {
          title: 'High-Tension Perimeter Aircraft Webbing',
          desc: 'Industrial poly webbing sewn into banner hems to distribute anchor loads uniformly across the face.',
          price: 'Supplied with installation'
        }
      ],
      specs: [
        { label: 'Crew Certifications', value: 'OSHA 30, SPRAT Rope Access, IPAF / ANSI Aerial Lift Qualified Technicians' },
        { label: 'Maximum Working Height', value: 'Up to 150 ft (45m) with mobile boom lifts; unlimited height via rope access' },
        { label: 'Insurance Coverage', value: '$5,000,000 Commercial General Liability & Full Worker Compensation' },
        { label: 'Wind-Load Engineering', value: 'Certified calculations for fasteners, structural frames, and masonry pull-out' },
        { label: 'Operating Windows', value: '24/7 capability including overnight shifts (10 PM to 6 AM) for shopping centers' },
        { label: 'Service Coverage', value: 'Metropolitan rapid dispatch + nationwide project installation network' }
      ],
      faq: [
        {
          q: 'Do you obtain municipal permits and road closures for crane installations?',
          a: 'Yes. Our project management team handles traffic control plans, sidewalk encroachment permits, and local municipal approvals required for boom lift operations.'
        },
        {
          q: 'Can you provide Certificates of Insurance (COI) naming our building management as additional insured?',
          a: 'Yes. We issue customized COIs with up to $5,000,000 liability limits naming your property management, landlord, or general contractor as additional insured within 24 hours.'
        },
        {
          q: 'What happens if there are high winds on the scheduled installation day?',
          a: 'Safety is paramount. OSHA regulations prohibit crane and high-altitude fabric tensioning in sustained winds exceeding 20-25 MPH. In such events, our dispatch automatically reschedules to the next available calm window.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 11. Vehicle Fleet Branding
    // -------------------------------------------------------------
    'vehicle-wrap': {
      id: 'vehicle-wrap',
      name: 'Vehicle Fleet Branding',
      breadcrumb: 'Vehicle Fleet Branding',
      badgeTag: 'Commercial Transit Graphics',
      pageTitle: 'Commercial Vehicle Fleet <span class="highlight">Branding & Wraps</span>',
      pageDesc: 'Complete vinyl wrap solutions for delivery vans, trucks, and company fleets with premium 3M cast vinyl and UV protective overlaminates.',
      metaChips: [
        { icon: 'fa-truck text-primary', text: '3M Certified Cast Vinyl' },
        { icon: 'fa-shield-halved text-success', text: '5-Year Anti-Peel Warranty' },
        { icon: 'fa-wind text-cyan', text: 'Comply Air-Release' },
        { icon: 'fa-car-side text-accent', text: 'OEM Digital 3D Templates' }
      ],
      heroBadge: 'Fleet & Transit Division',
      heroTitle: 'High-Impact Commercial Van & Truck Fleet Wraps',
      heroDesc: 'Commercial vehicle wrapping executed in climate-controlled indoor bays by 3M-certified installers. We utilize 3M Controltac cast vinyl with Comply air-release technology to guarantee smooth, bubble-free application over complex deep body contours and rivets.',
      featuresDesc: 'Transforming commercial service fleets into 24/7 mobile marketing powerhouses.',
      materialsDesc: 'Premium 3M and Avery Dennison ultra-conformable cast wrapping films and overlaminates.',
      image: 'assets/images/services/high-impact-commercial-van-truck-fleet-wraps.jpg',
      imageAlt: 'High-Impact Commercial Van & Truck Fleet Wraps - 3D Semi-Trailer Wrap',
      features: [
        {
          icon: 'fa-truck-fast',
          title: '3M Cast Vinyl with Comply Channels',
          desc: 'Premium 50-micron cast vinyl with micro-replicated adhesive channels allows trapped air to escape for a smooth, paint-like finish.'
        },
        {
          icon: 'fa-car-burst',
          title: 'Deep Recess & Compound Curve Mastery',
          desc: 'Heat-tempered post-heating to 95°C sets the vinyl memory permanently into deep door recesses and bumper curves with zero lifting.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Stone-Chip & Chemical Overlaminate',
          desc: 'Cast optical overlaminate shields your graphics from highway gravel, winter road salts, and high-pressure commercial washes.'
        }
      ],
      materials: [
        {
          title: '3M IJ180mC Cast Wrap Vinyl + 8518 Gloss Lamination',
          desc: 'The gold standard in fleet wrapping. 50-micron ultra-conformable film with 7-year outdoor durability.',
          price: 'From $8.50 / sq.ft installed'
        },
        {
          title: 'Avery Dennison MPI 1105 SuperCast Wrap Film',
          desc: 'High-gloss cast film with patented Easy Apply RS technology for rich color saturation and fast installation.',
          price: 'From $8.20 / sq.ft installed'
        },
        {
          title: '60/40 Perforated Rear Window Film',
          desc: 'One-way vision window film providing full-color exterior advertising while maintaining 100% driver rear visibility.',
          price: 'From $4.50 / sq.ft installed'
        },
        {
          title: 'Commercial Calendered Vinyl for Flat Box Trucks',
          desc: 'Cost-effective high-impact vinyl engineered specifically for large flat aluminum trailer sidewalls.',
          price: 'From $3.80 / sq.ft installed'
        }
      ],
      specs: [
        { label: 'Film Architecture', value: '50-micron ultra-thin cast PVC film with pressure-activated Controltac adhesive' },
        { label: 'Adhesive Technology', value: '3M Comply micro air-release channels with low initial tack for repositionability' },
        { label: 'Overlaminate Protection', value: '3M 8518 High Gloss / 8520 Matte Cast overlaminate with UV inhibitors' },
        { label: 'Warranty Coverage', value: '5-Year FLEXORA warranty against peeling, cracking, blistering, or delamination' },
        { label: 'Installation Facility', value: 'Dedicated 60-ft climate-controlled indoor cleanroom bays with dust filtration' },
        { label: 'Turnaround Time', value: '1 to 2 business days per vehicle; staggered schedules for multi-vehicle fleets' }
      ],
      faq: [
        {
          q: 'Will removing the wrap damage our vehicle factory paint?',
          a: 'No. When applied over sound OEM factory paint, 3M cast wrap vinyl actually protects the underlying paint from stone chips, UV rays, and scratches. Upon removal, the original paint remains in factory showroom condition.'
        },
        {
          q: 'How should wrapped fleet vehicles be washed and maintained?',
          a: 'Wrapped vehicles can be washed by hand with mild automotive car shampoo, or run through brushless automated car washes. Avoid holding high-pressure spray nozzles closer than 12 inches from vinyl seams and edges.'
        },
        {
          q: 'Can you handle national fleet rollouts across multiple branches or cities?',
          a: 'Yes. We manage centralized design, color management, and printing at our central industrial plant, then coordinate precision installation through our certified installer network across all branches.'
        }
      ]
    },

    // -------------------------------------------------------------
    // 12. CNC Routing & Finishing
    // -------------------------------------------------------------
    'cnc-cutting': {
      id: 'cnc-cutting',
      name: 'CNC Routing & Finishing',
      breadcrumb: 'CNC Routing & Finishing',
      badgeTag: 'Digital Precision Fabrication',
      pageTitle: 'Automated CNC Digital <span class="highlight">Routing & Edge Finishing</span>',
      pageDesc: 'Computerized high-precision contour routing, diamond flame edge polishing, and custom shape carving for acrylic, ACP sheets, and foam boards.',
      metaChips: [
        { icon: 'fa-crosshairs text-primary', text: '0.05mm Micro Tolerance' },
        { icon: 'fa-gem text-accent', text: 'Diamond Flame Polishing' },
        { icon: 'fa-layer-group text-warning', text: '2-Inch Thick Cutting' },
        { icon: 'fa-robot text-cyan', text: 'Multi-Spindle Tool Change' }
      ],
      heroBadge: 'Digital Fabrication Cleanroom',
      heroTitle: 'Industrial CNC Contour Routing & 3D Dimensional Shaping',
      heroDesc: 'High-speed computerized flatbed CNC routing operating at 24,000 RPM with oscillating knife and high-torque routing spindles. Capable of carving complex architectural filigrees, beveled edge letters, and slotted interlocking displays out of rigid substrates up to 2 inches thick.',
      featuresDesc: 'Why sign manufacturers, exhibition booth builders, and architects rely on our digital fabrication plant.',
      materialsDesc: 'Industrial acrylics, aluminum composite panels, high-density PVC, and hardwood substrates.',
      image: 'assets/images/services/industrial-cnc-contour-routing-3d-dimensional-shaping.jpg',
      imageAlt: 'Digital Fabrication Cleanroom - Industrial CNC Contour Routing & 3D Dimensional Shaping',
      features: [
        {
          icon: 'fa-robot',
          title: '0.05mm Computerized Tolerances',
          desc: 'High-precision helical rack-and-pinion gantry routers reproduce complex CAD vector paths with absolute repeatability.'
        },
        {
          icon: 'fa-gem',
          title: 'Optical Diamond Flame Edge Polishing',
          desc: 'High-speed diamond polishing tools and hydrogen flame torches transform cloudy routed acrylic edges into crystal-clear optical glass finishes.'
        },
        {
          icon: 'fa-arrows-split-up-and-left',
          title: 'V-Grooving & Interlocking Paneling',
          desc: 'Precision 90° and 135° V-groove carving enables ACP and foam sheets to fold into crisp, seamless 3D columns and tray signs.'
        }
      ],
      materials: [
        {
          title: '3mm to 25mm Cast Acrylic Sheets',
          desc: 'High-molecular optical cast acrylic for 3D dimensional lettering, push-through lightbox faces, and luxury awards.',
          price: 'From $4.80 / sq.ft'
        },
        {
          title: '3mm to 6mm PVDF Aluminum Composite (ACP)',
          desc: 'Architectural aluminum composite panel routed for architectural facade cladding, column covers, and tray signs.',
          price: 'From $5.20 / sq.ft'
        },
        {
          title: '3mm to 18mm High-Density Rigid PVC Sunboard',
          desc: 'Closed-cell rigid foam PVC board engineered for self-supporting retail standees, POS displays, and showroom walls.',
          price: 'From $3.50 / sq.ft'
        },
        {
          title: '12mm to 25mm High-Density MDF & Hardwoods',
          desc: 'Dense timber composite routed for decorative interior acoustic partition screens and textured wall panels.',
          price: 'From $4.10 / sq.ft'
        }
      ],
      specs: [
        { label: 'Machining Bed Work Area', value: '2000mm x 4000mm (6.5 x 13.1 ft) single bed with multi-zone vacuum hold-down' },
        { label: 'Spindle Power & Speed', value: 'Italian HSD 9.0 kW high-frequency spindle running at 6,000 to 24,000 RPM' },
        { label: 'Positional Accuracy', value: '±0.05mm repeatability with digital servo drive motors on all 3 axes' },
        { label: 'Tooling & Cutting Heads', value: '12-Tool automatic rotary carousel (spiral end-mills, V-grooving, oscillating knife)' },
        { label: 'Edge Finishing Capabilities', value: 'Diamond wheel edging, hydrogen flame polishing, micro-chamfering' },
        { label: 'Supported File Formats', value: 'DXF, DWG, AI, EPS, STEP, PDF vector formats with closed cut paths' }
      ],
      faq: [
        {
          q: 'What vector file formats do you accept for CNC routing?',
          a: 'We accept standard vector files including DXF, DWG, Adobe Illustrator (.AI), EPS, and vector PDF. All vector paths should be 1:1 scale with closed paths and text converted to outlines.'
        },
        {
          q: 'Can you polish the edges of thick acrylic letters so they look crystal clear?',
          a: 'Yes. We run routed acrylic through automated diamond wheel edge polishers followed by precision hydrogen flame annealing. This leaves the edges completely transparent and glass-smooth without saw marks.'
        },
        {
          q: 'How thick of a material can your CNC machines cut?',
          a: 'Our high-clearance gantry and heavy-duty 9kW spindles can rout rigid sheets up to 50mm (2 inches) thick in a single multi-pass setup.'
        }
      ]
    },

    // -------------------------------------------------------------
    // Additional Dedicated Profiles (One-Way Vision & Sunboard)
    // -------------------------------------------------------------
    'one-way-vision': {
      id: 'one-way-vision',
      name: 'One Way Vision Graphics',
      breadcrumb: 'One Way Vision Graphics',
      badgeTag: 'Perforated Window Privacy',
      pageTitle: 'Perforated <span class="highlight">One Way Vision Films</span>',
      pageDesc: 'Micro-perforated 60/40 and 70/30 window films delivering vibrant exterior full-color advertising while maintaining unobstructed interior outward transparency.',
      metaChips: [
        { icon: 'fa-eye text-primary', text: '60/40 Optical Ratio' },
        { icon: 'fa-sun text-warning', text: '55% Solar Heat Rejection' },
        { icon: 'fa-shield-halved text-success', text: 'Optically Clear Lamination' },
        { icon: 'fa-building text-cyan', text: 'Commercial Glazing Safe' }
      ],
      heroBadge: 'Architectural Glazing Division',
      heroTitle: 'Architectural Window Graphics & Transit Glazing Wraps',
      heroDesc: 'Engineered for commercial storefronts, corporate glass curtain walls, and transit buses. The micro-perforated film features a black interior face that appears transparent to people inside, while the white exterior face displays high-resolution advertising graphics to passersby.',
      featuresDesc: 'The ultimate dual-purpose solution combining vibrant billboard advertising with daytime sun shading and privacy.',
      materialsDesc: 'Certified optical polymeric perforated vinyls and ultra-clear cast protective overlaminates.',
      image: 'assets/images/services/one-way-vision-graphics.jpg',
      imageAlt: 'One Way Vision Storefront - Corporate Bank Glass Graphic',
      features: [
        {
          icon: 'fa-eye',
          title: '60/40 Micro-Perforation Pattern',
          desc: '1.6mm micro-holes spaced across 40% open area deliver 100% sharp exterior readability with zero interior blind spots.'
        },
        {
          icon: 'fa-sun',
          title: '55% Solar Heat & Glare Reduction',
          desc: 'Acts as an architectural solar film, rejecting up to 55% of solar heat gain and reducing interior cooling loads.'
        },
        {
          icon: 'fa-droplet',
          title: 'Optically Clear Rain-Proof Overlaminate',
          desc: 'Ultra-clear cast overlaminate seals the perforations, preventing dirt, rain, and road grime from blinding the driver or glass.'
        }
      ],
      materials: [
        {
          title: '160 Micron Polymeric 60/40 Perforated Film',
          desc: 'Premium 3-year outdoor film for commercial vehicle windows and retail storefront glazing.',
          price: 'From $2.20 / sq.ft'
        },
        {
          title: '140 Micron Monomeric 70/30 Promo Perforated Film',
          desc: 'Higher print surface area (70%) for short-term promotional campaigns requiring punchy color density.',
          price: 'From $1.80 / sq.ft'
        },
        {
          title: '50 Micron Ultra-Clear Cast Optically Clear Overlaminate',
          desc: 'Distortion-free cast protective laminate preventing water collection in perforations during rain.',
          price: 'From $1.60 / sq.ft'
        }
      ],
      specs: [
        { label: 'Perforation Ratio', value: '60% printable vinyl area / 40% open optical micro-perforations (1.6mm hole diameter)' },
        { label: 'Adhesive Type', value: 'Semi-permanent solvent-based black acrylic adhesive with clean-removable liner' },
        { label: 'Solar Heat Rejection', value: 'Up to 55% reduction in solar heat transmission through glass' },
        { label: 'Outdoor Durability', value: 'Up to 3 years without overlaminate; 5 years when paired with optically clear cast film' },
        { label: 'Roll Dimensions', value: 'Widths available: 0.98m (38"), 1.27m (50"), 1.37m (54"), 1.52m (60") x 50m length' },
        { label: 'Turnaround Time', value: '24 to 48 hours from artwork sign-off' }
      ],
      faq: [
        {
          q: 'Can people see inside through one-way vision graphics at night?',
          a: 'One-way vision functions based on light contrast. During the day, it is brighter outside, so the outside graphic is visible and the inside is private. At night, if interior store lights are on and it is dark outside, the effect reverses. For 24/7 nighttime privacy, we recommend adding ambient exterior illumination over the glass.'
        },
        {
          q: 'Is one-way vision legal on vehicle rear and side windows?',
          a: 'Yes, 60/40 perforated film is fully legal on rear and rear-side passenger windows of commercial vans and buses in most jurisdictions because it maintains clear rearward driver vision.'
        },
        {
          q: 'Why is optically clear overlaminate recommended for vehicle windows?',
          a: 'When it rains, water droplets can sit inside the tiny 1.6mm holes and act as tiny lenses, temporarily obstructing vision. Applying our ultra-clear cast overlaminate keeps the surface completely smooth and hydrophobic, so water sheets right off.'
        }
      ]
    },

    'sunboard-mounting': {
      id: 'sunboard-mounting',
      name: 'Rigid Sunboard Displays',
      breadcrumb: 'Rigid Sunboard Displays',
      badgeTag: 'Rigid POP & Showroom Displays',
      pageTitle: 'Rigid Sunboard POP Displays & <span class="highlight">Showroom Foam Mounting</span>',
      pageDesc: 'Direct UV flatbed printing and vinyl mounting onto 3mm and 5mm high-density rigid foam PVC sheets for retail point-of-sale displays, showroom standees, and exhibition gallery backdrops.',
      metaChips: [
        { icon: 'fa-square text-primary', text: '3mm & 5mm High-Density' },
        { icon: 'fa-print text-accent', text: 'Direct UV Flatbed' },
        { icon: 'fa-shield-halved text-success', text: 'Waterproof Rigid PVC' },
        { icon: 'fa-scissors text-warning', text: 'CNC Contour Cut' }
      ],
      heroBadge: 'Rigid POP & Showroom Displays',
      heroTitle: 'Rigid Sunboard POP Displays & Showroom Foam Mounting',
      heroDesc: 'Direct UV flatbed printing and vinyl mounting onto 3mm and 5mm high-density rigid foam PVC sheets for showroom displays. Engineered with automated CNC digital flatbed contour cutting for retail point-of-sale (POS) displays, showroom standees, and exhibition gallery backdrops.',
      featuresDesc: 'Why national retail brands, supermarket chains, and exhibition designers trust FLEXORA for precision sunboard display fabrication.',
      materialsDesc: 'High-density Forex PVC foam sheets, lightweight foam boards, and commercial protective laminates stocked in all standard gauges.',
      image: 'assets/images/services/sunboard-foam-mounting.jpg',
      imageAlt: 'Rigid Sunboard POP Displays & Showroom Foam Mounting - Showroom Wall Display',
      features: [
        {
          icon: 'fa-print',
          title: 'Direct-to-Board UV Flatbed Printing',
          desc: 'High-precision UV curable flatbed inks bond directly to the foam board, eliminating lamination delamination and edge peeling.'
        },
        {
          icon: 'fa-scissors',
          title: 'Computerized Digital Contour Knife Cutting',
          desc: 'Swiss-engineered flatbed knife cutting carves life-size retail character standees and custom POS display header shapes with razor edges.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'High-Density Warp-Resistant Closed-Cell PVC',
          desc: 'Premium Forex foam structure resists bending, humidity warping, and denting in busy air-conditioned retail showrooms.'
        }
      ],
      materials: [
        {
          title: '3mm High-Density Rigid PVC Sunboard',
          desc: 'Standard commercial gauge for retail shelf endcaps, wall graphics, and framed posters.',
          price: 'From $2.10 / sq.ft'
        },
        {
          title: '5mm Heavy-Duty Architectural Sunboard',
          desc: 'Extra-rigid thickness ideal for free-standing life-size character cutouts, easel displays, and exhibition partitions.',
          price: 'From $2.95 / sq.ft'
        },
        {
          title: '10mm Ultra-Thick Exhibition Board',
          desc: 'Heavyweight architectural display panels with self-supporting rigidity for corporate lobbies and museum galleries.',
          price: 'From $4.20 / sq.ft'
        },
        {
          title: '5mm Ultra-Light Paper-Faced Foam Core',
          desc: 'Feather-light board for short-term indoor promotional presentations and ceiling hanging mobile signage.',
          price: 'From $1.70 / sq.ft'
        }
      ],
      specs: [
        { label: 'Substrate Composition', value: 'High-density closed-cell rigid polyvinyl chloride (PVC) foam sheet' },
        { label: 'Surface Finish', value: 'Smooth semi-gloss / matte white face optimized for direct UV ink adhesion' },
        { label: 'Printing Technology', value: 'Direct UV flatbed printing with instant LED photo-polymerization' },
        { label: 'Cutting & Shaping', value: 'Digital flatbed oscillating knife + high-speed routing with optical sensor alignment' },
        { label: 'Maximum Single Sheet Size', value: '1.22m x 2.44m (4x8 ft) and 1.52m x 3.05m (5x10 ft) monolithic panels' },
        { label: 'Mounting Accessories', value: 'Rear collapsible cardboard easels, metal standee feet, 3M VHB foam tape' }
      ],
      faq: [
        {
          q: 'Can sunboard standees be cut to custom human-silhouette shapes?',
          a: 'Yes! Using our computerized optical flatbed cutters, we can contour-cut any shape, including celebrity silhouettes, mascot cutouts, and branded product shapes with rear collapsible support easels.'
        },
        {
          q: 'What is the difference between direct UV printing and vinyl mounted on sunboard?',
          a: 'Direct UV printing prints inks directly onto the board surface, creating a scratch-resistant, glare-free finish that will never peel at the edges. Vinyl mounting is preferred when a high-gloss photo overlaminate is required.'
        },
        {
          q: 'Can sunboard displays be used outdoors?',
          a: 'PVC sunboard is waterproof and impervious to rain or rot. For short-to-medium outdoor events, 5mm sunboard performs exceptionally well. For permanent outdoor installations, we recommend our ACP (aluminum composite) or flex banners due to extreme solar thermal expansion.'
        }
      ]
    }
  };

  // Aliases for related / alternative URL slugs
  SERVICES['flex-banners'] = SERVICES['digital-flex'];
  SERVICES['backlit-glow'] = SERVICES['signage'];
  SERVICES['vinyl-graphics'] = SERVICES['vinyl-sticker'];
  SERVICES['sunboard'] = SERVICES['sunboard-mounting'];

  // Initialize Dynamic Service Details Page
  function initServiceDetails() {
    const params = new URLSearchParams(window.location.search);
    const serviceSlug = params.get('service') || 'digital-flex';
    const service = SERVICES[serviceSlug] || SERVICES['digital-flex'];

    // 1. Breadcrumbs & Header
    const breadcrumbEl = document.getElementById('serviceBreadcrumb');
    if (breadcrumbEl) breadcrumbEl.textContent = service.breadcrumb;

    const badgeTagEl = document.getElementById('serviceBadgeTag');
    if (badgeTagEl) badgeTagEl.textContent = service.badgeTag;

    const pageTitleEl = document.getElementById('servicePageTitle');
    if (pageTitleEl) pageTitleEl.innerHTML = service.pageTitle;

    const pageDescEl = document.getElementById('servicePageDesc');
    if (pageDescEl) pageDescEl.textContent = service.pageDesc;

    // Meta Chips Row
    const metaContainer = document.getElementById('serviceMetaChips');
    if (metaContainer && service.metaChips) {
      metaContainer.innerHTML = service.metaChips.map(chip => `
        <span class="page-meta-item">
          <i class="fa-solid ${chip.icon}"></i> ${chip.text}
        </span>
      `).join('');
    }

    // 2. Hero Section
    const heroBadgeEl = document.getElementById('serviceHeroBadge');
    if (heroBadgeEl) heroBadgeEl.textContent = service.heroBadge;

    const heroTitleEl = document.getElementById('serviceHeroTitle');
    if (heroTitleEl) heroTitleEl.textContent = service.heroTitle;

    const heroDescEl = document.getElementById('serviceHeroDesc');
    if (heroDescEl) heroDescEl.textContent = service.heroDesc;

    const heroImgEl = document.getElementById('serviceHeroImg');
    if (heroImgEl) {
      heroImgEl.src = service.image;
      heroImgEl.alt = service.imageAlt || service.name;
    }

    // Quote link update
    const quoteBtn = document.getElementById('serviceQuoteBtn');
    if (quoteBtn) {
      quoteBtn.href = `contact.html?service=${service.id}`;
    }

    // 3. Features & Benefits
    const featuresDescEl = document.getElementById('serviceFeaturesDesc');
    if (featuresDescEl && service.featuresDesc) featuresDescEl.textContent = service.featuresDesc;

    const featuresRow = document.getElementById('serviceFeaturesRow');
    if (featuresRow && service.features) {
      featuresRow.innerHTML = service.features.map(f => `
        <div class="col-md-4">
          <div class="feature-benefit-card">
            <div class="feature-benefit-icon">
              <i class="fa-solid ${f.icon}"></i>
            </div>
            <h4 class="feature-benefit-title">${f.title}</h4>
            <p class="feature-benefit-desc">${f.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 4. Materials List & Header
    const materialsDescEl = document.getElementById('serviceMaterialsDesc');
    if (materialsDescEl && service.materialsDesc) materialsDescEl.textContent = service.materialsDesc;

    const gradesBadgeEl = document.getElementById('serviceGradesBadge');
    if (gradesBadgeEl && service.materials) {
      gradesBadgeEl.textContent = `${service.materials.length} Certified Grades`;
    }

    const materialsList = document.getElementById('serviceMaterialsList');
    if (materialsList && service.materials) {
      materialsList.innerHTML = service.materials.map(m => `
        <div class="material-item-row p-3 rounded-3 d-flex justify-content-between align-items-center">
          <div class="pe-3">
            <div class="fw-bold material-title">${m.title}</div>
            <div class="small text-muted">${m.desc}</div>
          </div>
          <span class="price-chip">${m.price}</span>
        </div>
      `).join('');
    }

    // 5. Specs Table
    const specsTbody = document.getElementById('serviceSpecsTbody');
    if (specsTbody && service.specs) {
      specsTbody.innerHTML = service.specs.map(s => `
        <tr>
          <th class="spec-label-col">${s.label}</th>
          <td class="spec-value-col">${s.value}</td>
        </tr>
      `).join('');
    }

    // 6. FAQ Accordion
    const faqContainer = document.getElementById('serviceFaqAccordion');
    if (faqContainer && service.faq) {
      faqContainer.innerHTML = service.faq.map((item, idx) => `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button ${idx !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#servFaqDynamic${idx}">
              ${item.q}
            </button>
          </h2>
          <div id="servFaqDynamic${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#serviceFaqAccordion">
            <div class="accordion-body">
              ${item.a}
            </div>
          </div>
        </div>
      `).join('');
    }

    // 7. Dynamic Document Title
    document.title = `${service.name} Technical Specifications – FLEXORA`;
  }

  // Auto-run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceDetails);
  } else {
    initServiceDetails();
  }

  // Export to window
  window.initServiceDetails = initServiceDetails;
})();
