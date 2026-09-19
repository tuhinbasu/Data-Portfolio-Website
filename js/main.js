document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle')
  var nav = document.querySelector('nav.primary-nav')
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open')
      toggle.classList.toggle('open', isOpen)
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    })
  }

  // Reveal-on-scroll for elements with class "reveal"
  var revealEls = document.querySelectorAll('.reveal')
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    revealEls.forEach(function (el) { observer.observe(el) })
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view') })
  }
})
