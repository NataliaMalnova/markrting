const tabs = (tabsSelector, tabSelector, tabContentSelector) => {

    const tabs = document.getElementById(tabsSelector);

    if (!tabs) return;

    const tab = tabs.querySelectorAll(tabSelector);
    const tabContent = tabs.querySelectorAll(tabContentSelector);

    if (tabs.length == 0 || tabContent.length == 0) return;

    hideTabsContent(1);

    tabs.onclick = function (event) {
        let target = event.target;

        if ('.' + target.className == tabSelector || '.' + target.parentElement.className == tabSelector) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] || target.parentElement == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    };

    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //tabContent[i].classList.add("hide");

            tab[i].classList.remove('active');
        }
    }

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('active'); //tabContent[b].classList.remove('hide');

            tabContent[b].classList.add('show');
        }
    }
};

tabs('tabs-result', '.tabs-title-item', '.tabs-item');