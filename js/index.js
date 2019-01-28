const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/* Images */
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];


/* Nav */

const mainNavItems = document.querySelectorAll("nav a");
//console.log(mainNavItems);

mainNavItems[0].textContent = siteContent["nav"]["nav-item-1"];
mainNavItems[1].textContent = siteContent["nav"]["nav-item-2"];
mainNavItems[2].textContent = siteContent["nav"]["nav-item-3"];
mainNavItems[3].textContent = siteContent["nav"]["nav-item-4"];
mainNavItems[4].textContent = siteContent["nav"]["nav-item-5"];
mainNavItems[5].textContent = siteContent["nav"]["nav-item-6"];

// querySelect nav
let newNavItem = document.querySelector("nav");

// anchor tag
let newAnchorTag = document.createElement("a")

/* CTA */
//h1 selector
const ctaH1 = document.getElementsByTagName('h1');
ctaH1[0].textContent = siteContent.cta.h1;  // DOM IS AWESOME

//button selector
const ctaBtn = document.querySelector('button')
ctaBtn.textContent = siteContent.cta.button;

//h4 selectors
const ctaH4 = document.querySelectorAll('h4')
//h4 headers
ctaH4[0].textContent = siteContent["main-content"]["features-h4"];
ctaH4[1].textContent = siteContent["main-content"]["about-h4"];
ctaH4[2].textContent = siteContent["main-content"]["services-h4"];
ctaH4[3].textContent = siteContent["main-content"]["product-h4"];
ctaH4[4].textContent = siteContent["main-content"]["vision-h4"];

//paragraph selectors
const para = document.querySelectorAll('p')
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];

//contact 
para[2].textContent = siteContent["contact"]["address"];
para[3].textContent = siteContent["contact"]["phone"];
para[4].textContent = siteContent["contact"]["email"];

//footer
para[8].textContent = siteContent["footer"]["copyright"];




