window.addEventListener('scroll', () => {
  const storyText = document.querySelectorAll('.story__texterea');
  const storyTitle = document.querySelector('.story__title');
  const storyImg = document.querySelectorAll('.story__imgs');
  let i = 660;
  let j = 1000;

  if (scrollY > i && scrollY < 5000) {
    storyTitle.classList.add('on');
  } else if (scrollY < i || scrollY > 5000) {
    storyTitle.classList.remove('on');
  };

  storyText.forEach(ele => {

    if (scrollY > i && scrollY < j) {
      ele.classList.add('on');
    } else if (scrollY < i || scrollY > j) {
      ele.classList.remove('on');
    };
    i += 500;
    j += 500;
  });

  i = 660;
  j = 1000;

  storyImg.forEach(ele => {
    if (scrollY > i && scrollY < j) {
      ele.classList.add('on');
    } else if (scrollY < i || scrollY > j) {
      ele.classList.remove('on');
    };

    i += 500;
    j += 500;
  });


});