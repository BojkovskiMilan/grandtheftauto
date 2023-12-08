
// Smooth scrolling preko JQuery Plugin-a
$(document).ready(function() {
    $('a[href*="#"]').smoothScroll({
      speed: 150, 
    });
  });
  
//Dropdown answer (Read-More funkcionalnost) za FAQ pitanja preko JQuery-a
$(document).ready(function () {
    //Prva 3 pitanja
    $('#accordionGeneral .accordion-button').click(function () {
        var targetCollapse = $($(this).data('target'));

        if (targetCollapse.is(':visible')) {
            targetCollapse.slideUp(500);
        } else {
            $('.accordion-collapse').not(targetCollapse).slideUp(500);
            targetCollapse.slideDown(500);
        }
    });

    //Poslednja 2 pitanja
    $('#accordionProduct .accordion-button').click(function () {
        var targetCollapse = $($(this).data('target'));

        if (targetCollapse.is(':visible')) {
            targetCollapse.slideUp(500);
        } else {
            $('.accordion-collapse').not(targetCollapse).slideUp(500);
            targetCollapse.slideDown(500);
        }
    });
});

(function ($) {
  "use strict";
      // loader
      $(window).load(function(){
        $('.preloader').delay(500).slideUp('slow'); 
      });
  
      // nav
      $(".navbar").headroom();
  
      $('.navbar-collapse a').click(function(){
          $(".navbar-collapse").collapse('hide');
      });
      // slideshow
      $('.slick-slideshow').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        fade: true,
        dots: true,
      });      
    })(window.jQuery);


//Dinamicki ispisan nav
var navbar = document.getElementById("navbarNav");

var pages = [
    { name: "Home", url: "index.html" },
    { name: "Gallery", url: "gallery.html" },
    { name: "Products", url: "products.html" },
    { name: "FAQs", url: "faq.html" },
    { name: "Contact", url: "contact.html" }
];

var ul = document.createElement("ul");
ul.className = "navbar-nav mx-auto ml-auto";

for (var i = 0; i < pages.length; i++) {
    var li = document.createElement("li");
    li.className = "nav-item";

    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = pages[i].url;
    a.textContent = pages[i].name;

    li.appendChild(a);

    ul.appendChild(li);
}

navbar.insertBefore(ul, navbar.querySelector('.d-none.d-lg-block'));


// Dinamicki ispisan futer
var existingFooter = document.getElementById("futer");

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";
container.appendChild(row);

var col1 = document.createElement("div");
col1.className = "col-lg-3 col-10 me-auto mb-4";
row.appendChild(col1);

var h4 = document.createElement("h4");
h4.className = "text-white mb-3";
var a = document.createElement("a");
a.href = "index.html";
a.textContent = "Grand Theft Auto";
h4.appendChild(a);

var copyright1 = document.createElement("p");
copyright1.className = "copyright-text text-muted mt-lg-5 mb-4 mb-lg-0";
copyright1.textContent = "Copyright © 2023";

var br = document.createElement("br");

var copyright2 = document.createElement("p");
copyright2.className = "copyright-text";
var designerLink = document.createElement("a");
designerLink.href = "author.html";
designerLink.target = "_blank";
designerLink.textContent = "Milan Bojkovski";
copyright2.textContent = "Designed by ";
copyright2.appendChild(designerLink);

col1.appendChild(h4);
col1.appendChild(copyright1);
col1.appendChild(br);
col1.appendChild(copyright2);

var col2 = document.createElement("div");
col2.className = "col-lg-5 col-8";
row.appendChild(col2);

var h5Col2 = document.createElement("h5");
h5Col2.className = "text-white mb-3";
h5Col2.textContent = "Pages";
col2.appendChild(h5Col2);

var ulCol2 = document.createElement("ul");
ulCol2.className = "footer-menu d-flex flex-container flex-wrap";

var links = ["Home", "Gallery", "Products", "FAQs", "Contact"];

for (var i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    li.className = "footer-menu-item";

    var aCol2 = document.createElement("a");
    aCol2.href = `${links[i].toLowerCase()}.html`;
    aCol2.className = "footer-menu-link";
    aCol2.textContent = links[i];

    li.appendChild(aCol2);
    ulCol2.appendChild(li);
}

col2.appendChild(ulCol2);

var col3 = document.createElement("div");
col3.className = "col-lg-3 col-4 no-bullets";
row.appendChild(col3);

var h5Col3 = document.createElement("h5");
h5Col3.className = "text-white mb-3";
h5Col3.textContent = "Links";
col3.appendChild(h5Col3);

var ulCol3 = document.createElement("ul");
ulCol3.className = "social-icon";

var socialLinks = [
    { href: "sitemap.xml", iconClass: "bi-diagram-3" },
    { href: "documentation.pdf", iconClass: "bi-file-earmark" },
    { href: "https://www.instagram.com/bojkovskimilan/", iconClass: "bi-instagram" },
    { href: "rss.xml", iconClass: "bi-rss" },
];

for (var j = 0; j < socialLinks.length; j++) {
    var liCol3 = document.createElement("li");

    var aCol3 = document.createElement("a");
    aCol3.href = socialLinks[j].href;
    aCol3.className = `social-icon-link ${socialLinks[j].iconClass}`;

    liCol3.appendChild(aCol3);
    ulCol3.appendChild(liCol3);
}

col3.appendChild(ulCol3);

existingFooter.appendChild(container);



//Dinamicko ispisivanje produkta na home stranici (featured)
var container = document.getElementById("featuredprodukti");

var products = [
  {
    imgSrc: 'images/product/gta6.jpg',
    alt: 'Gta 6 Game',
    alert: 'New Arrival',
    title: 'GTA VI',
    description: 'The latest installment of the GTA franchise',
    price: '$69.99'
  },
  {
    imgSrc: 'images/product/gta5.png',
    alt: 'Gta 5 Game',
    title: 'GTA V',
    description: 'Often referred to as game of the decade.',
    price: '$59.99'
  },
  {
    imgSrc: 'images/product/gtade.png',
    alt: 'Gta Trilogy Games',
    alert: 'Low Price',
    title: 'GTA Trilogy',
    description: 'Definitive edition of the classic GTA games',
    price: '$29.99'
  }
];
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("featuredprodukti");
    

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  container.innerHTML += `
  <div class="col-lg-4 col-12 mb-3">
  <div class="product-thumb" onmouseover="brightenImage(this)" onmouseout="resetImage(this)">
      <a href="products.html">
          <img src="${product.imgSrc}" class="img-fluid product-image" alt="${product.alt}">
      </a>
      ${product.alert ? `<div class="product-top d-flex"><span class="product-alert">${product.alert}</span></div>` : '<div class="product-top d-flex"></div>'}
      <div class="product-info d-flex">
          <div>
              <h5 class="product-title mb-0"><a href="${product.link}" class="product-title-link">${product.title}</a></h5>
              <p class="product-p">${product.description}</p>
          </div>
          <small class="product-price text-muted ms-auto mt-auto mb-5">${product.price}</small>
      </div>
   </div>
   </div>`;
}
});

//Funkcije za hover preko produkta
function brightenImage(element) {
    element.querySelector('.product-image').classList.add('brighten');
}
function resetImage(element) {
    element.querySelector('.product-image').classList.remove('brighten');
}

// Dinamicko uletanje elemenata
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//Dinamicko ispisivanje galerije
        const galleryData = [
            { class: 'gta5', src: 'images/gallery/gta52.jpg', alt: 'GTA5 2' },
            { class: 'gta4', src: 'images/gallery/gta44.jpg', alt: 'GTA4 4' },
            { class: 'gta6', src: 'images/gallery/gta63.jfif', alt: 'GTA6 3' },
            { class: 'gtaSA', src: 'images/gallery/gtasa1.jpg', alt: 'GTASA 1' },
            { class: 'gta6', src: 'images/gallery/gta61.jfif', alt: 'GTA6 1' },
            { class: 'gta5', src: 'images/gallery/gta51.jpg', alt: 'GTA5 1' },
            { class: 'gtaSA', src: 'images/gallery/gtasa2.jpg', alt: 'GTASA 2' },
            { class: 'gtaSA', src: 'images/gallery/gtasa3.jpg', alt: 'GTASA 3' },
            { class: 'gta4', src: 'images/gallery/gta42.jpg', alt: 'GTA4 2' },
            { class: 'gta5', src: 'images/gallery/gta53.jpg', alt: 'GTA5 3' },
            { class: 'gta6', src: 'images/gallery/gta62.jfif', alt: 'GTA6 2' },
            { class: 'gta4', src: 'images/gallery/gta43.jpg', alt: 'GTA4 3' },
            { class: 'gta6', src: 'images/gallery/gta64.jfif', alt: 'GTA6 4' },
            { class: 'gtaSA', src: 'images/gallery/gtasa4.jpg', alt: 'GTASA 4' },
            { class: 'gta5', src: 'images/gallery/gta54.jpg', alt: 'GTA5 4' }
        ];

        var galleryContainer = document.getElementById('gallery-container');

        function generateGallery() {
            let galleryHTML = '';
            galleryData.forEach(item => {
                galleryHTML += `
                    <div class="gallery-item ${item.class}">
                        <div class="image-container">
                            <img src="${item.src}" alt="${item.alt}" class="img-fluid">
                        </div>
                    </div>
                `;
            });
            return galleryHTML;
        }
        document.addEventListener("DOMContentLoaded", function() {
        galleryContainer.innerHTML = generateGallery();
    });
    

//Filtriranje slika u galeriji
 function filterSelection(category) {
    var items = document.getElementsByClassName('gallery-item');

    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'inline-block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'inline-block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}

//Dinamicko ispisivanje produkta sa modalom
document.addEventListener("DOMContentLoaded", function() {
    var container1 = document.getElementById("daproducts1");
    var container2 = document.getElementById("daproducts2");
  
    var products1 = [
      {
        imgSrc: 'images/product/gtaonline.jpg',
        alt: 'Gta Online Game',
        alert: 'Hot',
        title: 'GTA Online',
        description: 'Crime, Chaos, Multiplayer Mayhem',
        price: '$19.99'
      },
      {
        imgSrc: 'images/product/gta6.jpg',
        alt: 'Gta 6 Game',
        title: 'GTA VI',
        description: 'The latest installment of the GTA franchise',
        price: '$69.99'
      },
      {
        imgSrc: 'images/product/gtade.png',
        alt: 'Gta Trilogy Games',
        alert: 'Low Price',
        title: 'GTA Trilogy',
        description: 'Definitive edition of the classic GTA games',
        price: '$29.99'
      }
    ];
  
    var products2 = [
      {
        imgSrc: 'images/product/gta5.png',
        alt: 'Gta 5 Game',
        alert: 'Trending',
        title: 'GTA V',
        description: 'Often referred to as the game of the decade.',
        price: '$59.99'
      },
      {
        imgSrc: 'images/product/gtasa.jpg',
        alt: 'Gta San Andreas Game',
        alert: 'Low Price',
        title: 'GTA San Andreas',
        description: 'City life, gangs, and turf battles.',
        price: '$29.99'
      },
      {
        imgSrc: 'images/product/gtavs.jpg',
        alt: 'Gta Vice City Game',
        alert: 'Low Price',
        title: 'GTA Vice City',
        description: 'Tropical glamour, 80s excess, underworld intrigue.',
        price: '$25.99'
      }
    ];
  
    // Produkti 1
    for (var i = 0; i < products1.length; i++) {
      var product = products1[i];
  
      container1.innerHTML += `
        <div class="col-lg-4 col-12 mb-3">
          <div class="product-thumb clickable-image" data-id="${i + 1}">
            <img src="${product.imgSrc}" class="img-fluid product-image" alt="${product.alt}">
            ${product.alert ? `<div class="product-top d-flex"><span class="product-alert">${product.alert}</span></div>` : '<div class="product-top d-flex"></div>'}
            <div class="product-info d-flex">
              <div>
                <h5 class="product-title mb-0">${product.title}</h5>
                <p class="product-p">${product.description}</p>
              </div>
              <small class="product-price text-muted ms-auto mt-auto mb-5">${product.price}</small>
            </div>
          </div>
        </div>`;
    }
  
    // Produkti 2
    for (var i = 0; i < products2.length; i++) {
      var product = products2[i];
  
      container2.innerHTML += `
        <div class="col-lg-4 col-12 mb-3">
          <div class="product-thumb clickable-image" data-id="${i + 1}">
            <img src="${product.imgSrc}" class="img-fluid product-image" alt="">
            ${product.alert ? `<div class="product-top d-flex"><span class="product-alert">${product.alert}</span></div>` : '<div class="product-top d-flex"></div>'}
            <div class="product-info d-flex">
              <div>
                <h5 class="product-title mb-0">${product.title}</h5>
                <p class="product-p">${product.description}</p>
              </div>
              <small class="product-price text-muted ms-auto mt-auto mb-5">${product.price}</small>
            </div>
          </div>
        </div>`;
    }
  
    //Modal
    function openModal(productSet, index) {
        document.getElementById('modalImage').src = productSet[index].imgSrc;
        document.getElementById('modalTitle').textContent = productSet[index].title;
        document.getElementById('modalDescription').textContent = productSet[index].description;
        document.getElementById('modalPrice').textContent = productSet[index].price;
    
        var modal = document.getElementById('myModal');
        var overlay = document.getElementById('overlay');
        modal.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(function() {
          modal.classList.add('show');
          overlay.classList.add('show');
        }, 10);
      }

      var clickableImages1 = container1.querySelectorAll('.clickable-image');
      clickableImages1.forEach(function(image, index) {
        image.addEventListener('click', function() {
          openModal(products1, index);
        });
      });
    
      var clickableImages2 = container2.querySelectorAll('.clickable-image');
      clickableImages2.forEach(function(image, index) {
        image.addEventListener('click', function() {
          openModal(products2, index);
        });
      });

      function closeModal() {
        var modal = document.getElementById('myModal');
        var overlay = document.getElementById('overlay');
        modal.classList.remove('show'); 
        overlay.classList.remove('show');
        setTimeout(function() {
          modal.style.display = 'none'; 
          overlay.style.display = 'none';
        }, 500);
      }
    
  document.querySelector('.close-button').addEventListener('click', closeModal);
});


//Dinamicko ispisivanje forme
const nizIdNameLabel = ["full-name", "email", "message"];
const nizFormLabel = ["Full Name*", "Email address*", "Message*"];
const nizPlaceholders = ["Full Name", "Email address", "Tell us anything"];
const nizIspisGreske = [
  "First and Last name must start with uppercase",
  "Email must be in format me@example.com",
  "Field cannot be empty",
];

const tipPolje = ["text", "text", "textarea"];

let formaIspis = `<form class="contact-form me-lg-5 pe-lg-3" role="form">`;

for (let i = 0; i < nizIdNameLabel.length; i++) {
  formaIspis += `
    <label for="${nizIdNameLabel[i]}" class="form-label-bold">${nizFormLabel[i]}</label>
    <div class="form-floating my-4">`;

  if (tipPolje[i] === "textarea") {
    formaIspis += `
      <textarea id="${nizIdNameLabel[i]}" placeholder="${nizPlaceholders[i]}" name="${nizIdNameLabel[i]}" class="form-control" style="height: 160px"></textarea>`;
  } else {
    formaIspis += `
      <input type="${tipPolje[i]}" id="${nizIdNameLabel[i]}" placeholder="${nizPlaceholders[i]}" name="${nizIdNameLabel[i]}" class="form-control"/>`;
  }

  formaIspis += `
      <p class="display-none error-message">${nizIspisGreske[i]}</p>
    </div>
  `;
}

const nizValue = ["0", "male", "female", "other"];
const nizTekst = [
  "Please select a subject:",
  "Technical Support",
  "Account Issues",
  "Feedback and Suggestions",
];

formaIspis += `
  <div class="form-floating my-4">
    <label for="ddl-subject"></label>
    <select id="ddl-subject" name="ddl-subject" class="form-control">
  `;
for (let i = 0; i < nizValue.length; i++) {
  formaIspis += `<option value="${nizValue[i]}">${nizTekst[i]}</option>`;
}
formaIspis += `</select>
    <p class="display-none error-message">You must select an option</p>
  </div>`;

formaIspis += `
  <div class="col-lg-5 col-6">
    <input type="button" value="Send" class="btn form-control" id="btnForma"/>
  </div>
</form>`;

const divForma = document.querySelector("#kontejnerforme");
divForma.innerHTML = formaIspis;
  
//Validacija forme onBlur
function proveraFormeOnBlur() {
    const ime = document.querySelector("#full-name");
    let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
  
    //Ime validacija
    ime.addEventListener("blur", () => {
      if (regIme.test(ime.value)) {
        ime.nextElementSibling.classList.add("display-none");
      } else {
        ime.nextElementSibling.classList.remove("display-none");
      }
    });
  
    //Email validacija
    const email = document.querySelector("#email");
    let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;
  
    email.addEventListener("blur", () => {
      if (regEmail.test(email.value)) {
        email.nextElementSibling.classList.add("display-none");
      } else {
        email.nextElementSibling.classList.remove("display-none");
      }
    });
  
    //Message validacija
    const message = document.querySelector("#message");
  message.addEventListener("blur", () => {
    if (message.value.trim() !== '') {
      message.nextElementSibling.classList.add("display-none");
    } else {
      message.nextElementSibling.classList.remove("display-none");
    }
  });

    //DDL validacija
    const ddlSub = document.querySelector("#ddl-subject");
    ddlSub.addEventListener("change", () => {
      if (ddlSub.options[ddlSub.options.selectedIndex].value == "0") {
        ddlSub.nextElementSibling.classList.remove("display-none");
      } else {
        ddlSub.nextElementSibling.classList.add("display-none");
      }
    });
  }
  
  proveraFormeOnBlur();
  
  //Validacija forme na submit
  window.addEventListener("load", () => {
    const dugmeForma = document.querySelector("#btnForma");
    dugmeForma.addEventListener("click", proveriFormu);
  });
  
  function proveriFormu() {
    let brojGresaka = 0;
    //Ime validacija
    const ime = document.querySelector("#full-name");
    let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
  
    if (regIme.test(ime.value)) {
      ime.nextElementSibling.classList.add("display-none");
    } else {
      ime.nextElementSibling.classList.remove("display-none");
      brojGresaka++;
    }
  
    //Email validacija
    const email = document.querySelector("#email");
    let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;
  
    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.add("display-none");
    } else {
      email.nextElementSibling.classList.remove("display-none");
      brojGresaka++;
    }

    const message = document.querySelector("#message");
    if (message.value.trim() !== '') {
      message.nextElementSibling.classList.add("display-none");
    } else {
      message.nextElementSibling.classList.remove("display-none");
    }
  
  
    //DDL validacija
    const ddlSub = document.querySelector("#ddl-subject");
  
    if (ddlSub.options[ddlSub.options.selectedIndex].value == "0") {
      ddlSub.nextElementSibling.classList.remove("display-none");
      brojGresaka++;
    } else {
      ddlSub.nextElementSibling.classList.add("display-none");
    }
    console.log(brojGresaka);
    if (brojGresaka == 0) {
      ime.value = "";
      email.value = "";
      message.value = "";
      ddlSub.selectedIndex = 0;
      alert("You message has been sent.");
    }
  }
