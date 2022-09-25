const searchEl = document.querySelector('.search');
const searchInpuEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInpuEl.focus();
});

searchInpuEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInpuEl.setAttribute('placeholder', '통합검색');
});

searchInpuEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInpuEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간)


window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrolly > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
