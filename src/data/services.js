export const SERVICES = [
  {
    id: 'cad',
    icon: 'pen',
    title: 'Custom Design & CAD',
    hook: 'A napkin sketch to a signed 3D file in eleven days.',
    description:
      'Our two CAD benches translate a photograph, a crayon sketch or a wax model into production-ready 3D files with exact gram weights, so the sample on your desk matches the invoice exactly.',
    points: [
      '3D-printed wax models for tactile approval before metal is poured',
      'Gem-accurate setting renders with prongs, gallery and pavilion clearance',
      'Weight and cost engineering to hit your target price per gram',
      'Rhino, Matrix and 3D printing exports supplied to your CAD team',
    ],
    tags: ['retail', 'bespoke'],
  },
  {
    id: 'wholesale',
    icon: 'layers',
    title: 'Bulk & Wholesale Manufacturing',
    hook: 'Sixty pieces a week, and the sixtieth is as good as the first.',
    description:
      'Running orders of 50 to 5,000 units for multi-brand retailers and jewellers, with scheduled dispatch windows, consolidated shipping and a named production manager.',
    points: [
      'MOQ from 25 units per design, with tiered pricing above 500',
      'Staggered dispatch against a rolling 12-week production calendar',
      'Pre-shipment inspection reports and AQL sampling on request',
      'Export packing, HS codes, GSP-certified invoicing and airway bill support',
    ],
    tags: ['wholesale'],
  },
  {
    id: 'gem-setting',
    icon: 'gem',
    title: 'Gem Setting & Stone Sourcing',
    hook: 'Conflict-free stones, set by hand under a loupe.',
    description:
      'We source melee and singles from Kimberley Process-compliant partners and set them with micro-pavé, bead, prong, invisible and channel techniques on 14k–22k gold and sterling.',
    points: [
      'GIA and IGI grading reports supplied with every centre stone above 0.30 ct',
      'Custom melee cutting and calibrated layouts cut to your CAD geometry',
      'Recycled and lab-grown options with documented chain of custody',
      'Laser-calibrated melee for invisible-set pavé at 0.8 mm minimum',
    ],
    tags: ['retail', 'wholesale', 'bespoke'],
  },
  {
    id: 'hallmarking',
    icon: 'badge',
    title: 'Hallmarking & Certification',
    hook: 'Every gram, verified by the government, stamped on the piece.',
    description:
      "BIS-hallmarked gold and silver, hand-engraved with the correct purity mark and our BIS registration number, then filed with a digital certificate tied to the buyer's batch.",
    points: [
      'BIS 22K / 18K / 14K gold and 925 silver with our registered hallmark number',
      'ISO 9001:2015 certified quality management across casting and assembly',
      'Per-piece digital certificates linked to batch and artisan ID',
      'Return-swap promise if any piece fails an independent assay',
    ],
    tags: ['retail', 'wholesale', 'bespoke'],
  },
  {
    id: 'restoration',
    icon: 'wrench',
    title: 'Repair & Restoration',
    hook: 'Heirlooms re-brightened, rewritten, returned to service.',
    description:
      'Sizing, re-stringing, clasp replacement, stone re-setting, rhodium and full re-polishing — including dismantling and rebuilding antique pieces that no modern workshop will touch.',
    points: [
      'Free assessment with photographs before a quote is issued',
      'Re-polishing and re-plating for inherited 22k wedding sets',
      'Lost-stone replacement matched to your original melee parcel',
      'Collector-grade restoration of antique polki and kundan settings',
    ],
    tags: ['retail', 'bespoke'],
  },
  {
    id: 'private-label',
    icon: 'tag',
    title: 'Private Label & White Label',
    hook: 'Your name on the clasp, your logo on the box, ours on the tools.',
    description:
      "We manufacture under your brand and ship in your packaging — including engraved maker's marks, custom boxes, care cards, hang tags and printed certificates with no trace of us.",
    points: [
      "Engraved maker's marks and laser-etched logos to 0.2 mm tolerance",
      'Custom rigid boxes, pouches, inserts and printed care cards',
      'Photography-ready samples and line sheets for your catalogue',
      'White-label shipping on your carrier account, direct to your customers',
    ],
    tags: ['wholesale', 'retail'],
  },
]

export const SERVICE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'retail', label: 'Retail' },
  { id: 'wholesale', label: 'Wholesale' },
  { id: 'bespoke', label: 'Bespoke' },
]
