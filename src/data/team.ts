export interface TeamMember {
  id:    string
  name:  string
  role:  string
  image: string
}

export const team: TeamMember[] = [
  {
    id:    'keith-oloughlin',
    name:  "Keith O'Loughlin",
    role:  'Chairman',
    image: '/images/team/keith-oloughlin.jpg',
  },
  {
    id:    'aine-gleghorne',
    name:  'Aine Gleghorne',
    role:  'Chief Financial Officer',
    image: '/images/team/aine-gleghorne.jpg',
  },
  {
    id:    'andy-hoskins',
    name:  'Andy Hoskins',
    role:  'Advisor to the Board',
    image: '/images/team/andy-hoskins.jpg',
  },
  {
    id:    'adam-ferris',
    name:  'Adam Ferris',
    role:  'Managing Director',
    image: '/images/team/adam-ferris.jpg',
  },
]
