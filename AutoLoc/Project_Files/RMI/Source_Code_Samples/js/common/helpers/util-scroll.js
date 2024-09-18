import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const toggleStickeyBottom = (target, trigger) => {
  if (!target || !trigger) {
    return;
  }

  // Initialize
  target.style.position = 'fixed';
  target.style.bottom = '0';
  target.style.transForm = 'translateY: 100%;';
  gsap.set(target, {y: '100%'});

  gsap.to(target, {
    y: 0,
    duration: .3,
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      toggleActions: 'play none none reverse',
      // markers: true,
      onEnter: () => target.setAttribute('aria-expanded', 'true'),
      onLeaveBack: () => target.setAttribute('aria-expanded', 'false'),
    },
  });

  const footer = document.querySelector('footer');
  if (!footer) {
    return;
  }

  const setFooterBottomSpace = () => {
    const targetHeight = target.clientHeight;
    footer.style.paddingBottom = `${targetHeight}px`;
  }

  window.addEventListener('resize', setFooterBottomSpace);
  setFooterBottomSpace();
}
