export const getPlainComponentsList = (list = []) => {
  let plainComponentsArray = []
  list.forEach(item => {
    if (item.children) {
      const arr = getPlainComponentsList(item.children)
      plainComponentsArray = [...plainComponentsArray, ...arr]
    } else {
      plainComponentsArray.push(item)
    }
  })

  return plainComponentsArray
}
