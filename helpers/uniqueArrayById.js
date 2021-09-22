export const uniqueArrayById = (array) => {
  return array.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
}
