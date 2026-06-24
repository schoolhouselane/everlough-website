export interface OperatingStage {
  number:      string
  title:       string
  description: string
}

export const operatingModel: OperatingStage[] = [
  {
    number:      '01',
    title:       'Stabilise',
    description: 'Establish governance and cash control in the first ninety days. Stop value leakage, secure key relationships, and create the conditions for clear decisions.',
  },
  {
    number:      '02',
    title:       'Reset',
    description: 'Reshape the business around what works. Reset the cost base, the operating cadence, and the team where required. Prove unit economics before any scaling.',
  },
  {
    number:      '03',
    title:       'Rebuild',
    description: 'Reinvest in the parts of the business that earn it. Build commercial discipline, recruit operating depth, and re-establish the company in its market.',
  },
  {
    number:      '04',
    title:       'Scale or Exit',
    description: 'Scale where the economics warrant it. Exit where the value is realised and stewardship is best continued elsewhere. Both outcomes are planned for from day one.',
  },
]
