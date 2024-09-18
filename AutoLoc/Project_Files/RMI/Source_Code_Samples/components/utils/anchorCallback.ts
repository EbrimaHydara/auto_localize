import { scroller } from 'react-scroll'

export const anchorCallback = (
  element: React.MouseEvent<HTMLElement>,
  target: string,
) => {
  element.preventDefault()
  const targetElem = document.getElementById(target)
  if (targetElem) {
    const d =
      targetElem.getBoundingClientRect().top +
      (window.scrollY || window.pageYOffset)
    scroller.scrollTo(target, {
      duration: Math.round((300 * d) / 3000),
      smooth: 'true',
    })
    if (window.location.hash !== `#${target}`) {
      window.history.pushState(null, '', `#${target}`)
    }
  }
}
