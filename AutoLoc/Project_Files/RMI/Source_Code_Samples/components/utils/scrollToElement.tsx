import { scroller } from 'react-scroll'

export const scrollToElement = (element: string, { sec, containerElement }: { sec?: number; containerElement?: string} = {}) => {
  scroller.scrollTo(element, {
    duration: sec ? sec : 100,
    smooth: 'true',
    containerId: containerElement || undefined,
  })
}
