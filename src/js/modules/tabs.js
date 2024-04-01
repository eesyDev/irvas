const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    
    function hideContent() {
        content.forEach(i => {
            i.style.display = 'none';
        });

        tab.forEach(i => {
            i.classList.remove(activeClass);
        })
    };

    function showContent(i) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass)
    };

    header.addEventListener('click', e => {
        const target = e.target;
        if(target && 
            (target.classList.contains(tabSelector.replace(/\./, ''))) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
            ) {
                tab.forEach((t, i) => {
                    if (target == t || target.parentNode == t) {
                        hideContent();
                        showContent(i);
                        e.preventDefault();
                    }
                })
            }
    })
}

export default tabs;