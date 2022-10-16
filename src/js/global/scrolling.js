const scrolling = () => {


    try {
        let link = document.querySelectorAll('a[href="#_"]');
        link.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                return false;
            });
        });
    } catch {}

    try {
        let links = document.querySelectorAll('[href^="#_"]'),
            speed = 0.3;


        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                let widthTop, hash, toBlock, start;

                widthTop = document.body.scrollTop - 30,
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;

                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) {
                        start = time;
                    }

                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                    document.body.scrollTo(0, r);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        //location.hash = hash;
                    }
                }
            });
        });
    } catch {}
};

scrolling();