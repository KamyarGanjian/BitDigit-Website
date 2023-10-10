$('document').ready(function () {
  var typed = new Typed(".hero-text", {
    strings: ["با بیت دیجیت معاملات خود را در سریع‌ترین زمان ممکن انجام دهید."],
    typeSpeed: 70,

  });
});

let sections2 = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .container a');

window.onscroll = () => {
  sections2.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .container a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

const myArray = [
  {
    "enName": "Bitcoin",
    "faName": "بیت کوین",
    "price": "56,623.54",
    "update": "+1.45%",
    "benefit": "1",
    "situation": "green",
  },
  {
    "enName": "Ethereum",
    "faName": "اتریوم",
    "price": "56,623.54",
    "update": "-5.12%",
    "benefit": "2",
    "situation": "red",
  },
  {
    "enName": "Tether",
    "faName": "تتر",
    "price": "56,623.54",
    "update": "+1.45%",
    "benefit": "1",
    "situation": "green",
  },
  {
    "enName": "BNB",
    "faName": "بایننس کوین",
    "price": "56,623.54",
    "update": "-3.75%",
    "benefit": "2",
    "situation": "red",
  },
  {
    "enName": "Solana",
    "faName": "سولانا",
    "price": "56,623.54",
    "update": "+1.45%",
    "benefit": "1",
    "situation": "green",
    "class": "hidden",
  },
  {
    "enName": "XRP",
    "faName": "ریپل",
    "price": "56,623.54",
    "update": "-2.22%",
    "benefit": "2",
    "situation": "red",
    "class": "hidden",
  },
  {
    "enName": "Cardano",
    "faName": "کاردانو",
    "price": "56,623.54",
    "update": "+0.8%",
    "benefit": "1",
    "situation": "green",
    "class": "hidden",
  },
  {
    "enName": "Avalanche",
    "faName": "اولانچ",
    "price": "56,623.54",
    "update": "+1.41%",
    "benefit": "1",
    "situation": "green",
    "class": "hidden",
  }
]

buildTable(myArray);

function buildTable(data) {
  var table = document.querySelector('.table-body');

  for (var i = 0; i < data.length; i++) {
    var row = `                <tr class="table-row ${data[i].class}">

    <td class="table-data">
      <button class="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
        <ion-icon name="star-outline" aria-hidden="true" class="icon-outline"></ion-icon>
        <ion-icon name="star" aria-hidden="true" class="icon-fill"></ion-icon>
      </button>
    </td>



    <td class="table-data">
      <div class="wrapper">
        <img src="../../public/assets/images/coin-${[i + 1]}.svg" width="20" height="20" alt="Bitcoin logo" class="img">

        <h3>
          <a href="#" class="coin-name">${data[i].enName}<span class="span">${data[i].faName}</span></a>
        </h3>
      </div>
    </td>

    <td class="table-data last-price">${data[i].price}<span class="dollar-span">$</span></td>

    <td class="table-data last-update ${data[i].situation}">${data[i].update}</td>



    <td class="table-data">
      <img src="../../public/assets/images/chart-${data[i].benefit}.svg" width="100" height="40" alt="profit chart" class="chart">
    </td>

    <td class="table-data">
      <button class="btn btn-outline buying${[i + 1]}">خرید</button>
    </td>

    <td class="table-data">
      <button class="btn btn-outline selling${[i + 1]}">فروش</button>
    </td>

  </tr>`

    table.innerHTML += row

  }
}

const dropdowns = document.querySelectorAll('.dropdown');
const imgActive1 = document.querySelector('.img-avtive1');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected1 = dropdown.querySelector('.selected1');
  const selected2 = dropdown.querySelector('.selected2');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedImg = option.querySelector('img');
      imgActive1.src = selectedImg.src;
      selected1.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });

})

const dropdowns2 = document.querySelectorAll('.dropdown2');
const imgActive2 = document.querySelector('.img-active2');

dropdowns2.forEach(dropdown2 => {
  const select2 = dropdown2.querySelector('.select2');
  const caret2 = dropdown2.querySelector('.caret2');
  const menu2 = dropdown2.querySelector('.menu2');
  const options2 = dropdown2.querySelectorAll('.menu2 li');
  const selected2 = dropdown2.querySelector('.selected2');

  select2.addEventListener('click', () => {
    select2.classList.toggle('select2-clicked');
    caret2.classList.toggle('caret2-rotate');
    menu2.classList.toggle('menu2-open');
  });

  options2.forEach(option2 => {
    option2.addEventListener('click', () => {
      const selectedImg2 = option2.querySelector('img');
      imgActive2.src = selectedImg2.src;
      selected2.innerText = option2.innerText;
      select2.classList.remove('select2-clicked');
      caret2.classList.remove('caret2-rotate');
      menu2.classList.remove('menu2-open');

      options2.forEach(option2 => {
        option2.classList.remove('active');
      });

      option2.classList.add('active');
    });
  });

})

const market = document.querySelector(".table-body");
const selected1 = document.querySelector(".selected1");
const selected2 = document.querySelector(".selected2");

market.addEventListener('click', function (event) {

  for (var i = 1; i <= 8; i++) {
    if (event.target.classList.value === 'btn btn-outline buying' + i) {
      selected1.innerText = myArray[i - 1].enName
    }
    else if (event.target.classList.value === 'btn btn-outline selling' + i) {
      selected2.innerText = myArray[i - 1].enName
    }
  }

})

'use strict';


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);




const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);


const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

document.getElementById('span').addEventListener('click', function () {
  document.getElementById('container').classList.toggle('active');
});

var loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener('click', function () {
  window.location.assign("../../src/login-page/login-page.html");
})


fetch('https://bit-digit-default-rtdb.firebaseio.com/users.json')
  .then(response => response.json())
  .then(data => {
    const users = Object.entries(data);
    console.log(users)

    users.map((user => {
      console.log(user[1].username)
      loginBtn.innerText = user[1].username;
    }))
    
  })