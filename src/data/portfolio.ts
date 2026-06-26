export interface PortfolioCompany {
  id:          string
  name:        string
  description: string
  logo:        string
  slug:        string
}

export const portfolio: PortfolioCompany[] = [
  {
    id:          'data-direct',
    name:        'Data Direct Technology',
    description: "One of Ireland's longest established IT distributors. Hardware, software and managed services to the mid-market and public sector. The group's foundation.",
    logo:        '/images/homepage/logos/data-direct-technology.png',
    slug:        'data-direct',
  },
  {
    id:          'funteron',
    name:        'Funteron',
    description: 'A specialist software business held from an earlier acquisition cycle. Being prepared for orderly exit in line with the 2026 strategy.',
    logo:        '/images/homepage/logos/funteron.png',
    slug:        'funteron',
  },
  {
    id:          'vivo-hotels',
    name:        'Vivo Hotels',
    description: "Everlough's hospitality operating company, running a portfolio of design-led properties with a focus on guest experience and place-making.",
    logo:        '/images/homepage/logos/vivo-hotels.png',
    slug:        'vivo-hotels',
  },
  {
    id:          'dd-intelligence',
    name:        'Data Direct Intelligence',
    description: 'Data, analytics and applied-AI services for regulated industries across the UK and Ireland. Built deliberately as the services engine alongside distribution.',
    logo:        '/images/homepage/logos/data-direct-intelligence.png',
    slug:        'dd-intelligence',
  },
  {
    id:          'schoolhouse-lane',
    name:        'Schoolhouse Lane',
    description: 'AI-powered creative design and development. Works with Private Equity and VCs to create new asset classes through strategic creative positioning.',
    logo:        '/images/homepage/logos/schoolhouse.png',
    slug:        'schoolhouse-lane',
  },
]
