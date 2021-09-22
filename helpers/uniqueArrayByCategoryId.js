export const uniqueArrayByCategoryId = (array) => {
  return array.filter((v, i, a) => a.findIndex(t => (t.category.id === v.category.id)) === i)
}
