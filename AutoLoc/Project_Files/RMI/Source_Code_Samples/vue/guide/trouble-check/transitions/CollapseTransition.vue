<script lang="js">
const getPropNumericValue = (propValue) => {
 return Number((propValue ?? '0').replace(/([\d\.]*)(.*)/g, '$1'))
}

const getCompStyles = (el) => {
  const styles = document.defaultView?.getComputedStyle(el)
  const scrollHeight = el.scrollHeight
  const paddingTop = getPropNumericValue(styles?.getPropertyValue('padding-top'))
  const paddingBottom = getPropNumericValue(styles?.getPropertyValue('padding-bottom'))
  const boxSizing = styles?.getPropertyValue('box-sizing')
  const height = (() => {
    if (boxSizing === 'content-box') {
      return scrollHeight - paddingTop - paddingBottom
    } else {
      const borderTop = getPropNumericValue(styles?.getPropertyValue('border-top'))
      const borderBottom = getPropNumericValue(styles?.getPropertyValue('border-bottom'))
      // return scrollHeight + borderTop + borderBottom
      return scrollHeight + borderTop + borderBottom
    }
  })()
  const overFlow = styles.getPropertyValue('overflow')
  return { paddingTop, paddingBottom, height, boxSizing, overFlow }
}

const on = {
  beforeEnter(el) {
    const { paddingTop, paddingBottom } = getCompStyles(el)
    el.classList.add('collapse-transition')
    el.dataset.oldPaddingTop = `${paddingTop}px`
    el.dataset.oldPaddingBottom = `${paddingBottom}px`
    el.style.setProperty('height', '0')
    el.style.setProperty('padding-top', '0')
    el.style.setProperty('padding-bottom', '0')
  },

  enter(el) {
    const { height, overFlow, boxSizing } = getCompStyles(el)
    const newHeight = (() => {
      if (height === 0) return ''
      if (boxSizing === 'content-box') return `${height}px`
      const paddingTop = getPropNumericValue(el.dataset.oldPaddingTop)
      const paddingBottom = getPropNumericValue(el.dataset.oldPaddingBottom)
      return `${paddingTop + paddingBottom + height}px` 
    })()

    el.dataset.oldOverflow = overFlow
    el.style.setProperty('height', newHeight)
    el.style.setProperty('padding-top', el.dataset.oldPaddingTop || '')
    el.style.setProperty('padding-bottom', el.dataset.oldPaddingBottom || '')
    el.style.overflow = 'hidden'
  },

  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    el.classList.remove('collapse-transition')
    el.style.setProperty('height', '')
    el.style.setProperty('overflow', el.dataset.oldOverflow || '')
  },

  beforeLeave(el) {
    const { paddingTop, paddingBottom, overflow, height } = getCompStyles(el)    
    el.dataset.oldPaddingTop = `${paddingTop}px`
    el.dataset.oldPaddingBottom = `${paddingBottom}px`
    el.dataset.oldOverflow = overflow
    el.style.height = `${height}px`
    el.style.overflow = 'hidden'

  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weird.
      el.classList.add('collapse-transition')
      el.style.setProperty('height', '0')
      el.style.setProperty('padding-top', '0')
      el.style.setProperty('padding-bottom', '0')
    }
  },

  afterLeave(el) {
    el.classList.remove('collapse-transition')
    el.style.height = ''
    el.style.setProperty('overflow', el.dataset.oldOverflow || '')
    el.style.setProperty('padding-top', el.dataset.oldPaddingTop || '')
    el.style.setProperty('padding-bottom', el.dataset.oldPaddingBottom || '')
  },
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render(h, { children }) {
    return h('transition', { on }, children)
  },
}
</script>
