const openSubMenu = () => {
    const subMenu = document.querySelectorAll('.nav__sub-menu');
    if (subMenu.length == 0) return;
    subMenu.forEach(elem => {
        const title = elem.querySelector('.nav__sub-menu--title');
        const list = elem.querySelector('.nav__sub-menu--list');

        title.addEventListener('click', () => {

            _clickOutside(title, list, 'nav__sub-menu--show');
            if (!list.classList.contains('nav__sub-menu--show')) {
                list.classList.add('nav__sub-menu--show');
            } else {
                list.classList.remove('nav__sub-menu--show');
            }
        });
    })
}

const openSearch = () => {
    const searchBtn = document.querySelector('.nav-search');
    const search = document.querySelector('.search');

    if (!searchBtn || !search) return;

    searchBtn.addEventListener('click', () => {

        _clickOutside(searchBtn, search, 'search-show');
        if (!search.classList.contains('search-show'))
            search.classList.add('search-show');
        else
            search.classList.remove('search-show');

    });
}

function _clickOutside(openClick, openOverflow, className) {
    document.addEventListener('click', function (event) {

        event.stopPropagation();

        if (event.target == openClick) return;
        let a = 0;

        for (let i = 0; i < openClick.children.length; i++) {
            if (event.target == openClick.children[i]) return a = 1;
        }

        for (let i = 0; i < openOverflow.children.length; i++) {
            if (event.target == openOverflow.children[i]) return a = 1;
        }
        if (a == 1) return;

        openOverflow.classList.remove(className);
    });
}

openSubMenu();
openSearch();

const changeBurger = () => {
    const burder = document.querySelectorAll('.burger');

    if (burder.length == 0) return;

    burder.forEach(elem => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('open'))
                elem.classList.add('open');
            else
                elem.classList.remove('open');
        });
    })
}

changeBurger();

const showMenuMobile = () => {
    const btn = document.querySelector('.header-burger');
    const menu = document.querySelector('.menu-mobile');

    if (!btn || !menu) return;

    const menuItem = menu.querySelectorAll('a');

    btn.addEventListener('click', () => {
        if (!menu.classList.contains('menu-mobile-show')) {
            document.documentElement.style.overflowY = 'hidden';
            menu.classList.add('menu-mobile-show');
        } else {
            menu.classList.remove('menu-mobile-show');
            document.documentElement.style.overflowY = 'auto';
        }
    });

    menuItem.forEach(elem => {
        elem.addEventListener('click', () => {
            menu.classList.remove('menu-mobile-show');
            document.documentElement.style.overflowY = 'auto';
            btn.classList.remove('open');
        });
    })

}

showMenuMobile()