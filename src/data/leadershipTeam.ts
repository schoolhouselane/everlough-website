export interface LeadershipMember {
  id:            string
  name:          string
  role:          string
  bio:           string[]
  image:         string
  imagePosition: 'left' | 'right'
  linkedin?:     string
}

export const leadershipTeam: LeadershipMember[] = [
  {
    id:            'keith-oloughlin',
    name:          "Keith O'Loughlin",
    role:          'Chairman',
    image:         '/images/team/keith-oloughlin.png',
    imagePosition: 'left',
    bio: [
      'As Chairman of Everlough Holdings, he understands that in a world of “good enough,” the exceptional is found through relentless inquiry.',
      "Keith’s support guides the agency in building ecosystems that accelerate business goals, ensuring that innovation isn’t just a buzzword, but a tool for navigating complex category shifts with agility. He shows how to amplify agency strategy so our clients move beyond metrics to find the questions that drive true growth.",
    ],
  },
  {
    id:            'andy-hoskins',
    name:          'Andy Hoskins',
    role:          'Advisor to the Board',
    image:         '/images/team/andy-hoskins.png',
    imagePosition: 'right',
    bio: [
      'Andy brings 15 years of CFO, M&A, and investment expertise to the intersection of finance and imagination. In the pursuit of Conscious Capitalism, he ensures that altruistic brand visions are anchored in fiscal reality.',
      'Andy views diversity of thought as a competitive advantage, helping clients navigate capital raises and exits by treating brand as a high-leverage strategic asset. He is the architect of the “measurable advantage,” ensuring our creative commerce methodology delivers the outsized returns modern investors demand.',
    ],
  },
  {
    id:            'aine-gleghorne',
    name:          'Aine Gleghorne',
    role:          'Chief Financial Officer',
    image:         '/images/team/aine-gleghorne.png',
    imagePosition: 'left',
    bio: [
      'Fellow Chartered Certified Accountant (FCCA). Former Assistant Director, Strategy and Transactions, EY Big Four (2019–2025). 10+ years in private equity, M&A and restructuring across buy-side, sell-side and VDD.',
      'Specialist in building finance functions to support growth, M&A and investor exits. Led complex diligence engagements for private equity sponsors, management teams and lenders. Deep expertise in adjusted EBITDA, NWC analysis, financial modelling.',
    ],
  },
  {
    id:            'darren-mcgrath',
    name:          'Darren Mc Grath',
    role:          'Chief Marketing Officer',
    image:         '/images/team/darren-mcgrath.png',
    imagePosition: 'right',
    bio: [
      'A brand builder and campaign director with more than two decades of practice across agency, founder and operating roles. He served as Managing Director of Brando, one of Ireland’s leading independent creative agencies, where he led the strategic and creative direction of the business across its full client portfolio.',
      'During that period he directed pan-European campaigns for Heineken, O2 and Mastercard — brands operating at scale, with the commercial discipline those mandates require.',
    ],
  },
  {
    id:            'adam-ferris',
    name:          'Adam Ferris',
    role:          'Managing Director',
    image:         '/images/team/adam-ferris.png',
    imagePosition: 'left',
    bio: [
      'Adam Ferris is a seasoned B2B SaaS revenue leader with expertise in sales, revenue operations, and go-to-market strategy. He is currently Chief Revenue Officer at Honor Education, where he focuses on helping organisations preserve and scale institutional knowledge and decision-making.',
      'Throughout his career, he has held leadership roles in high-growth technology companies and is recognised for his customer-centric approach, operational excellence, and advocacy for the future of work and AI-enabled organisations.',
    ],
  },
]
