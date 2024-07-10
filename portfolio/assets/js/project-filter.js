(function() {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    window.addEventListener('load', () => {
      let projectContainer = select('.project-container');
      if (projectContainer) {
        let projectIsotope = new Isotope(projectContainer, {
          itemSelector: '.project-item',
          layoutMode: 'fitRows'
        });

        let projectFilters = select('#project-filters div', true);

        on('click', '#project-filters div', function(e) {
          e.preventDefault();
          projectFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          projectIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          projectIsotope.on('arrangeComplete', function() {
            AOS.refresh();
          });
        }, true);
      }
    });
  })();