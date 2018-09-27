export {fields,} from '../interfaces/crud'

export const name = 'Entry'
export const query = 'entry'

export const root = (parent, {where,}, {prisma,}) => {
  return prisma.entry(where)
}