export interface TeamMember {
  id:    string
  name:  string
  role:  string
  image: string
  width: number
  height: number
}

export const team: TeamMember[] = [
  {
    id:     'keith-oloughlin',
    name:   "Keith O'Loughlin",
    role:   'Chairman',
    image:  '/images/team/keith-oloughlin.png',
    width:  363,
    height: 412,
  },
  {
    id:     'aine-gleghorne',
    name:   'Aine Gleghorne',
    role:   'Chief Financial Officer',
    image:  '/images/team/aine-gleghorne.png',
    width:  389,
    height: 412,
  },
  {
    id:     'andy-hoskins',
    name:   'Andy Hoskins',
    role:   'Advisor to the Board',
    image:  '/images/team/andy-hoskins.png',
    width:  384,
    height: 413,
  },
  {
    id:     'adam-ferris',
    name:   'Adam Ferris',
    role:   'Managing Director',
    image:  '/images/team/adam-ferris.png',
    width:  375,
    height: 408,
  },
]
