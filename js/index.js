

const btn = document.querySelectorAll(".btn");
btn.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('on');
  })

  element.addEventListener('mouseout', () => {
    element.classList.remove('on');
  })
});

window.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素が画面内に入った場合に実行する処理
        entry.target.classList.add('on');
      } else {
        // 要素が画面から外れた場合に実行する処理
        // entry.target.classList.remove('on');
      }
    })
  };
  const targets = document.querySelectorAll(".float");
  const slideR = document.querySelectorAll('.slider');
  const slideL = document.querySelectorAll('.slidel');
  targets.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
  slideR.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
  slideL.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
});

const question = document.querySelectorAll('.question');
const item = document.querySelectorAll('.questions__item');

for (let i = 0; i < item.length; i++) {
  question[i].addEventListener('click', () => {
    console.log('aaa');
    item[i].classList.toggle('off');
  })
};
const acordion = document.querySelector('.index__title');
const acordionON = document.querySelector('.index__contents');

acordion.addEventListener('click', () => {
  console.log('aaa')
  acordionON.classList.toggle('Invincibles');
})

console.log(acordion);


const tindon = document.querySelector('#tindon');
let timeoutId;
window.addEventListener("scroll", function () {
  tindon.classList.add('on');

  clearTimeout(timeoutId);



  timeoutId = setTimeout(function () {
    tindon.classList.remove('on');
  }, 200);
});

// const tbody = document.querySelector('#tbody');
// const venueEvent = document.querySelector('#event');

// fetch("https://tindon.microcms.io/api/v1/event", {
//   headers: {
//     "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
//   }

// })
//   .then(res => res.json())
//   .then(json => {
//     for (i = 0; i < json.contents.length; i++) {
//       const tr = document.createElement('tr');
//       const th = document.createElement('th');
//       const tdMiddle = document.createElement('td');

//       th.textContent = json.contents[i].teamName;
//       tdMiddle.textContent = json.contents[i].middle;

//       tr.append(tdMiddle);
//       tbody.append(tr);

//     }
//   });



const header = document.querySelector('.header');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.header__menu');
const nav = document.querySelector('#nav');
const link = document.querySelectorAll('.nav__link');
hamburger.addEventListener('click', () => {
  header.classList.toggle('active');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});
hamburger.addEventListener('mouseover', () => {
  header.classList.add('active');
  hamburger.classList.add('active');
  menu.classList.add('active');
  nav.classList.add('active');
  link.forEach(ele => {
    ele.classList.add('over');
  })
});
menu.addEventListener('mouseleave', () => {
  header.classList.remove('active');
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  nav.classList.remove('active');
  link.forEach(ele => {
    ele.classList.remove('over');
  })
});
window.addEventListener('resize', () => {
  header.classList.remove('active');
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  nav.classList.remove('active');
});

window.addEventListener('scroll', () => {

  if (scrollY > 400) {
    header.classList.remove('off');
  } else {
    header.classList.add('off');
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const firstView = document.querySelector('.firstview__logo');
  const chindon = document.querySelector('.firstview__chindon');
  const chindon2 = document.querySelector('.firstview__chindon2');

  firstView.classList.add('on');
  chindon.classList.add('on');
  chindon2.classList.add('on');
})
