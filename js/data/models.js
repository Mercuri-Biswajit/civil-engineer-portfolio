// ===========================
// DATA MODELS
// Central repository for all
// static content / data arrays.
// Edit content here — renderers read from here.
// ===========================

// ===========================
// SKILLS
// icon (emoji), name, description
// ===========================

export const skills = [
  {
    icon: "📐",
    name: "AutoCAD 2D",
    description:
      "Proficient in AutoCAD, Revit, and Building Information Modeling for precise technical drawings",
  },
  {
    icon: "🏗️",
    name: "Structural Design",
    description:
      "Expert in designing safe and efficient structural systems for buildings and infrastructure",
  },
  {
    icon: "🔬",
    name: "Materials Analysis",
    description:
      "Deep understanding of construction materials, their properties, and optimal applications",
  },
  {
    icon: "⚙️",
    name: "Cost Estimation",
    description:
      "Accurate budget planning and material quantity surveying for projects",
  },
  {
    icon: "🌱",
    name: "Sustainable Design",
    description:
      "Committed to eco-friendly practices and LEED certification standards",
  },
];

// ===========================
// PROJECTS
// id, category, title, description, tags[], image
// ===========================

export const projects = [
  {
    id: 1,
    category: "RESIDENTIAL",
    title: "G-Floor Residential Layout",
    description:
      "Architectural and structural layout planning for a G-floor residential unit measuring approximately 41 ft × 28 ft. The plan includes two bedrooms, a combined living and dining area, and an integrated staircase block for future vertical expansion. The design follows an RCC framed structure with clearly defined room zoning, efficient circulation, and adequate natural light and ventilation.",
    tags: [
      "Residential Planning",
      "G-Floor Design",
      "RCC Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "../assets/images/projects/G-Floor_Model_28_x_41__foot.png",
  },
  {
    id: 2,
    category: "COMMERCIAL",
    title: "Warehouse cum Residential Building (G+1)",
    description:
      "Planning and structural layout design for a G+1 mixed-use building measuring approximately 57 ft × 47 ft. The ground floor is designed as a large open-span warehouse with an RCC framed structure and integrated staircase block, allowing efficient storage and movement. The first floor accommodates a complete residential unit comprising multiple bedrooms, living and dining areas, kitchen, bathrooms, and verandas.",
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "G+1 Residential",
      "RCC Frame Structure",
      "Open Span Planning",
    ],
    image:
      "../assets/images/projects/Warehouse_cum_Residential_(G+1)_57_x_47_foot.png",
  },
  {
    id: 3,
    category: "COMMERCIAL",
    title: "Warehouse cum Residential Building",
    description:
      "Structural and space planning for a mixed-use building measuring approximately 46 ft × 30 ft, combining a large open-span warehouse area on the lower level with a dedicated residential access core. The layout includes an RCC framed structure with optimized column placement, a staircase block for vertical circulation, and clear segregation between storage and residential functions.",
    tags: [
      "Mixed-Use Building",
      "Warehouse Design",
      "Residential Structure",
      "RCC Frame",
      "Staircase Block",
    ],
    image:
      "../assets/images/projects/Warehouse_cum_Residential_46_x_30_foot.png",
  },
  {
    id: 4,
    category: "RESIDENTIAL",
    title: "Ground Floor Residential Layout",
    description:
      "Architectural and structural layout planning for a ground floor residential unit measuring approximately 28 ft × 41 ft. The plan comprises three bedrooms, a central living and dining area, and an integrated staircase block for vertical circulation. Designed with an RCC framed structure, the layout ensures efficient room zoning, smooth internal movement, and adequate natural light and ventilation.",
    tags: [
      "Residential Planning",
      "Ground Floor Design",
      "RCC Frame Structure",
      "Staircase Block",
      "Compact Housing",
    ],
    image: "../assets/images/projects/Ground_Floor_28_x_41_foot.png",
  },
];

// ===========================
// SERVICES
// name, price, description, features[], icon, popular
// ===========================

export const services = [
  {
    name: "Architectural Plan",
    price: "Custom Quote",
    description: "Complete architectural design and planning services",
    features: [
      "Site analysis and planning",
      "Floor plans and elevations",
      "Interior space planning",
      "Up to 3 design revisions",
      "CAD drawings delivery",
    ],
    icon: "📐",
    popular: false,
  },
  {
    name: "Structural Plan",
    price: "Custom Quote",
    description: "Comprehensive structural engineering and design",
    features: [
      "Structural analysis",
      "Foundation design",
      "Load calculations",
      "Reinforcement detailing",
      "Up to 3 design revisions",
    ],
    icon: "🏗️",
    popular: false,
  },
  {
    name: "Cost Estimate",
    price: "Custom Quote",
    description: "Detailed project cost estimation and BOQ",
    features: [
      "Material quantity takeoff",
      "Bill of Quantities (BOQ)",
      "Cost breakdown analysis",
      "Up to 3 revisions",
      "Market rate comparison",
    ],
    icon: "💰",
    popular: false,
  },
];

// ===========================
// EDUCATION & CERTIFICATIONS
// year, degree, school
// ===========================

export const education = [
  {
    year: "2020",
    degree: "B.Tech Civil Engineering",
    school: "Surendra Institute of Engineering and Management",
  },
  {
    year: "2021",
    degree: "AutoCAD 2D",
    school: "Udemy",
  },
  {
    year: "2022",
    degree: "Learn Practical Building Construction",
    school: "Udemy",
  },
];
