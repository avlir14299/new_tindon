const humburger = document.querySelector("#hum");
const nav = document.querySelector(".header__nav");

humburger.addEventListener('click', () => {
  humburger.classList.toggle('on');
  nav.classList.toggle('on');
})

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
  const slide = document.querySelectorAll('.slide')
  targets.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
  slide.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
});