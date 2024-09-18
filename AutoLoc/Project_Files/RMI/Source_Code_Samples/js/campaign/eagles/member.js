const stickyStartPoint = document.getElementById('js-sticky-start');

const showToggleNav = (entries) => {
  const navSticky = document.getElementById('js-nav-sticky');
  console.log({entries})
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('out');
      navSticky.setAttribute('aria-hidden', true);
    } else {
      console.log('in');
      navSticky.setAttribute('aria-hidden', false);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

const observer = new IntersectionObserver(showToggleNav, options);
observer.observe(stickyStartPoint);
