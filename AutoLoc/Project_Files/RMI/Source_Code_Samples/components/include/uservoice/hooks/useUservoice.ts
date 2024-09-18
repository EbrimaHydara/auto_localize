import { useState, useEffect } from 'react'

export const useUservoice = (refTrigger: React.RefObject<HTMLDivElement>) => {
  const [isExpanded, setIsExpanded] = useState(false)
  useEffect(() => {
    const fixedBottomBtn = (trigger: HTMLDivElement | null) => {
      let scrollY = window.pageYOffset

      if (!trigger) {
        return
      }

      const triggerRect = trigger.getBoundingClientRect()
      const triggerY = scrollY + triggerRect.top

      if (scrollY > triggerY) {
        setIsExpanded(true)
      } else {
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', () => fixedBottomBtn(refTrigger.current))
  }, [refTrigger])

  return {
    isExpanded,
  }
}
