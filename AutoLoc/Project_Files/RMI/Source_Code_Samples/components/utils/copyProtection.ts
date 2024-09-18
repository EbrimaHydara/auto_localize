export const copyProtection = () => {
  const contents = document.body
  contents.onselectstart = () => false
  contents.onmousedown = () => false
}
