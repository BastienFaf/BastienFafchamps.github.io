// #################################################
//                 Title Animation
// #################################################
const textWrapper = document.querySelector('.title-animation .letters');
var animate = null;

const letter0 = document.getElementById('title-letter-0');
const letter1 = document.getElementById('title-letter-1');
const letter2 = document.getElementById('title-letter-2');
const letter3 = document.getElementById('title-letter-3');
const letter4 = document.getElementById('title-letter-4');
const letter5 = document.getElementById('title-letter-5');

var index = 0;
const words = [
    ['D', 'e', 's', 'i', 'g', 'n'],
    ['C', 'o', 'd', 'e', '', ''],
    ['C', 'r', 'e', 'a', 't', 'e'],
]

letter0.innerHTML = words[index][0];
letter1.innerHTML = words[index][1];
letter2.innerHTML = words[index][2];
letter3.innerHTML = words[index][3];
letter4.innerHTML = words[index][4];
letter5.innerHTML = words[index][5];

var translateValue = [0, textWrapper.getBoundingClientRect().width + 10];

function onLoopComplete(anim) {
    index += 1;
    if (index >= words.length) {
        index = 0;
    }

    letter0.innerHTML = words[index][0];
    letter1.innerHTML = words[index][1];
    letter2.innerHTML = words[index][2];
    letter3.innerHTML = words[index][3];
    letter4.innerHTML = words[index][4];
    letter5.innerHTML = words[index][5];

    translateValue = [0, textWrapper.getBoundingClientRect().width + 10];
    animate();
};

function getTranslate() {
    return [0, textWrapper.getBoundingClientRect().width + 10];
}

animate = () => {
    anime.timeline({
        loopComplete: () => {
            onLoopComplete();
        }
    })
        .add({
            targets: '.title-animation .line',
            scaleY: 0,
            opacity: 0,
            translateX: [0, 0],
            duration: 10
        })
        .add({
            targets: '.title-animation',
            opacity: 1,
            duration: 10
        })
        .add({
            targets: '.title-animation .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 350
        })
        .add({
            targets: '.title-animation .line',
            translateX: translateValue,
            easing: "easeOutExpo",
            duration: 350,
            delay: 100
        })
        .add({
            targets: '.title-animation .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 400,
            delay: (el, i) => 34 * (i + 1)
        }, '-=380')
        .add({
            targets: '.title-animation .line',
            scaleY: [1, 0],
            opacity: [1, 0],
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '.title-animation',
            opacity: 0,
            duration: 500,
            easing: "easeOutExpo",
            delay: 1000,
        });
}
animate();

// #################################################
//                 Fade In
// #################################################

const appearOptions = {
    threshold: 1
};

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach(element => {
            if (!element.isIntersecting) {
                return;
            } else {
                element.target.classList.add('appear');
                appearOnScroll.unobserve(element.target);
            }
        });
    }, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

// #################################################
//                 Skills
// #################################################

const skillsButtons = [
    { id: 'overall', element: document.getElementById('skill-button-overall') },
    { id: 'gamedev', element: document.getElementById('skill-button-gamedev') },
    { id: 'front', element: document.getElementById('skill-button-front') },
    { id: 'back', element: document.getElementById('skill-button-back') },
    { id: 'data', element: document.getElementById('skill-button-data') },
]

const skillsTables = [
    { id: 'overall', element: document.getElementById('skills-overall') },
    { id: 'gamedev', element: document.getElementById('skills-gamedev') },
    { id: 'front', element: document.getElementById('skills-front') },
    { id: 'back', element: document.getElementById('skills-back') },
    { id: 'data', element: document.getElementById('skills-data') },
]

function setSkills(id) {
    skillsTables.forEach(table => {
        if (table.id === id) {
            table.element.classList.add('selected');
        } else {
            table.element.classList.remove('selected');
        }
    });
    skillsButtons.forEach(button => {
        if (button.id === id) {
            button.element.classList.add('selected');
        } else {
            button.element.classList.remove('selected');
        }
    });
}

skillsButtons.forEach(button => {
    button.element.addEventListener('click', event => {
        setSkills(button.id);
    });
});


// #################################################
//                 Projects
// #################################################
const scrollController = new ScrollMagic.Controller();
const scrollTl = new TimelineMax();

const innerContainer = document.getElementById('projects-inner-container');

// scrollTl.from(innerContainer, 1, {opacity: 0});
scrollTl.fromTo(innerContainer, 5, { ease: Power0.easeNone, x: 300}, { ease: Power0.easeNone, x: -innerContainer.offsetWidth * 2.45})

const scrollScene = new ScrollMagic.Scene({
    triggerElement: '#projects-container',
    triggerHook: 'onLeave',
    duration: '200%',
})
.setPin('#projects-container')
.setTween(scrollTl)
.addTo(scrollController);

