import { ServiceItem } from '../components/ServiceDetail';

export interface ServiceCategory {
  id: string;
  title: string;
  services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "digital-printing",
    title: "Digital Printing",
    services: [
      {
        id: "business-cards",
        title: "Business Cards",
        description: "Professional business cards printed on premium paper stock with crisp text and vibrant colors. Choose from various finishes including matte, glossy, or specialty textures.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659196/Business-Cards_co0rbz.jpg"
      },
      {
        id: "advertising-brochure",
        title: "Advertising Brochure",
        description: "High-quality advertising brochures that effectively showcase your products and services. Available in various sizes and fold options to suit your marketing needs.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659196/Advertising-Brochure_yyyceg.jpg"
      },
      {
        id: "paper-pamphlet",
        title: "Paper Pamphlet",
        description: "Informative pamphlets printed on quality paper with sharp text and graphics. Ideal for distributing information at events, trade shows, or as mailers.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659200/Paper-Pamphlet_nbrofq.jpg"
      },
      {
        id: "certificate-frames",
        title: "Certificate Frames",
        description: "Elegant certificate frames with precision printing, suitable for awards, recognitions, and certifications in professional settings.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659197/Certificate-Frames_x0k1um.jpg"
      },
      {
        id: "corporate-gift",
        title: "Corporate Gift",
        description: "Customized corporate gifts with high-quality printing, perfect for client appreciation, employee recognition, or special occasions.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659197/corprate-gift_re7ho0.jpg"
      },
      {
        id: "schedule-whiteboard",
        title: "Schedule Whiteboard",
        description: "Custom printed schedule whiteboards with durable surface for writing and erasing, perfect for planning and organization.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659196/Schedule-Whiteboard_hr2mst.jpg"
      },
      {
        id: "pvc-file-folder",
        title: "PVC File Folder",
        description: "Durable PVC file folders with clear printing, resistant to water and wear, ideal for document storage and organization.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659196/PVC-File-Folder_ftfnmj.jpg"
      },
      {
        id: "acrylic-card-holder",
        title: "Acrylic Card Holder",
        description: "Elegant acrylic card holders with custom printing, perfect for business cards, table numbers, or information display.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659195/Acrylic-Card-Holder_gilkhw.jpg"
      },
      {
        id: "gift-vouchers",
        title: "Gift Vouchers",
        description: "Professionally designed and printed gift vouchers with security features and custom branding for your business.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659197/Gift-Vouchers_zhebn8.jpg"
      },
      {
        id: "invitation-card",
        title: "Invitation Card",
        description: "Beautiful invitation cards printed on premium paper with exquisite details, suitable for corporate events or special occasions.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Invitation-Card_intsxo.jpg"
      }
    ]
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    services: [
      {
        id: "name-plate",
        title: "Name Plate",
        description: "Professional name plates with precise printing, suitable for offices, desks, doors, and organizational identification.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Name-Plate_yacyao.jpg"
      },
      {
        id: "bag-labels",
        title: "Bag Labels",
        description: "Durable bag labels with clear printing, perfect for branding, product information, or packaging identification.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659196/Bag-Labels_jftpzr.jpg"
      },
      {
        id: "taffeta-label",
        title: "Taffeta Label",
        description: "Soft and durable taffeta labels with precise printing, ideal for garments, textiles, and fabric products.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Taffeta-Label_slx6ro.jpg"
      },
      {
        id: "printed-badge",
        title: "Printed Badge",
        description: "Professional printed badges with custom designs, perfect for events, identification, or organizational recognition.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Printed-Badge_k3yfsu.jpg"
      },
      {
        id: "kraft-paper-bags",
        title: "Kraft Paper Bags",
        description: "Eco-friendly kraft paper bags with custom printing, ideal for retail packaging, gifts, or promotional materials.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Kraft-Paper-Bags_uvlzlf.jpg"
      },
      {
        id: "printed-jute-shopping-bag",
        title: "Printed Jute Shopping Bag",
        description: "Durable jute shopping bags with custom printing, environmentally friendly alternative to plastic bags.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659199/Printed-Jute-Shopping-Bag_y6kets.jpg"
      },
      {
        id: "wash-label",
        title: "Wash Label",
        description: "Detailed wash labels with clear printing, providing care instructions for garments and textile products.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659199/wash-label_wcgquf.jpg"
      }
    ]
  },
  {
    id: "screen-printing",
    title: "Screen Printing",
    services: [
      {
        id: "sign-board",
        title: "Sign Board",
        description: "Durable sign boards with vibrant screen printing, suitable for outdoor use, directional guidance, or business identification.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Name-Plate_yacyao.jpg"
      },
      {
        id: "tyvek-wristbands",
        title: "Tyvek Wristbands",
        description: "Tear-resistant Tyvek wristbands with custom printing, ideal for events, access control, or identification purposes.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Tyvek-Wristbands_rl83mo.jpg"
      },
      {
        id: "magnetic-badge",
        title: "Magnetic Badge",
        description: "Custom magnetic badges with professional printing, perfect for staff identification or temporary access credentials.",
        image: "https://res.cloudinary.com/dia8x6y6u/image/upload/v1742659198/Magnetic-Badge_vutrjh.jpg"
      }
    ]
  }
];
