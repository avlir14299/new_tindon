const eastTab = document.querySelector('#east'), eastBorder = document.querySelector('#eastBorder');
const middleTab = document.querySelector('#middle'), middleBorder = document.querySelector('#middleBorder');
const northTab = document.querySelector('#north'), northBorder = document.querySelector('#northBorder');

const tbodyTime = document.querySelector('#tbody');
const tbodyEvent = document.querySelector('#tbody2');
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://tindon.microcms.io/api/v1/event", {
    headers: {
      "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
    }
  })
    .then(res => res.json())
    .then(json => {
      for (i = 0; i < json.contents.length; i++) {
        const tr = document.createElement('tr');
        const tr2 = document.createElement('tr');
        const teamName = document.createElement('td');
        const tdEast = document.createElement('td');
        teamName.textContent = json.contents[i].teamName;
        tdEast.textContent = json.contents[i].east;
        tbodyTime.append(tr), tbodyEvent.append(tr2);
        tr.append(tdEast), tr2.append(teamName);
      }
    });
}, false);
eastTab.addEventListener('click', () => {
  eastTab.classList.add('show');
  eastBorder.classList.add('show');
  northTab.classList.remove('show');
  northBorder.classList.remove('show');
  middleTab.classList.remove('show');
  middleBorder.classList.remove('show');
  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
    tbody2.removeChild(tbody2.lastChild);
  }
  fetch("https://tindon.microcms.io/api/v1/event", {
    headers: {
      "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
    }
  })
    .then(res => res.json())
    .then(json => {
      for (i = 0; i < json.contents.length; i++) {
        const tr = document.createElement('tr');
        const tr2 = document.createElement('tr');
        const teamName = document.createElement('td');
        const tdEast = document.createElement('td');
        teamName.textContent = json.contents[i].teamName;
        tdEast.textContent = json.contents[i].east;
        tbodyTime.append(tr), tbodyEvent.append(tr2);
        tr.append(tdEast), tr2.append(teamName);
      }
    });
});

middleTab.addEventListener('click', () => {
  middleTab.classList.add('show');
  middleBorder.classList.add('show');
  eastTab.classList.remove('show');
  eastBorder.classList.remove('show');
  northTab.classList.remove('show');
  northBorder.classList.remove('show');
  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
    tbody2.removeChild(tbody2.lastChild);
  }
  fetch("https://tindon.microcms.io/api/v1/event", {
    headers: {
      "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
    }
  })
    .then(res => res.json())
    .then(json => {
      for (i = 0; i < json.contents.length; i++) {
        const tr = document.createElement('tr');
        const tr2 = document.createElement('tr');
        const teamName = document.createElement('td');
        const tdMiddle = document.createElement('td');
        teamName.textContent = json.contents[i].teamName;
        tdMiddle.textContent = json.contents[i].middle;
        tbodyTime.append(tr), tbodyEvent.append(tr2);
        tr.append(tdMiddle), tr2.append(teamName);
      }
    });
});

northTab.addEventListener('click', () => {
  northTab.classList.add('show');
  northBorder.classList.add('show');
  eastTab.classList.remove('show');
  eastBorder.classList.remove('show');
  middleTab.classList.remove('show');
  middleBorder.classList.remove('show');
  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
    tbody2.removeChild(tbody2.lastChild);
  }
  fetch("https://tindon.microcms.io/api/v1/event", {
    headers: {
      "X-MICROCMS-API-KEY": "IjdEpiSfHh8bBqHW8mvDSSghmo9pFdKIUgAu"
    }
  })
    .then(res => res.json())
    .then(json => {
      for (i = 0; i < json.contents.length; i++) {
        const tr = document.createElement('tr');
        const tr2 = document.createElement('tr');

        const teamName = document.createElement('td');
        const tdNorth = document.createElement('td');

        teamName.textContent = json.contents[i].teamName;
        tdNorth.textContent = json.contents[i].north;

        tbodyTime.append(tr), tbodyEvent.append(tr2);
        tr.append(tdNorth), tr2.append(teamName);
      }
    });
});

const venueBtn = document.querySelector('#venueBtn');
const seasonMay = document.querySelector('.venue__season-5');
const seasonOctober = document.querySelector('.venue__season-10');
let season = 5;
venueBtn.addEventListener('click', () => {
  if (season === 5) {
    seasonMay.classList.add('showMonth');
    seasonOctober.classList.remove('showMonth');
    venueBtn.textContent = "10月へ";
    season = 10
    return;
  } else if (season === 10) {
    seasonMay.classList.remove('showMonth');
    seasonOctober.classList.add('showMonth');
    venueBtn.textContent = "5月へ";
    season = 5;
  }

})