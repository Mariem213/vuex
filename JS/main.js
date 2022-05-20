/*---------------------- [ SideBar Navigation 'Dropdown' ] --------------------------*/

function dashboardDropDown() {
    document.getElementById("dash-dropdown-header").classList.toggle("dropdown-Background");
    document.getElementById("dash-dropdown-content").classList.toggle("dropdown-show");
}

function invoiceDropDown() {
    document.getElementById("invoice-dropdown-header").classList.toggle("dropdown-Background");
    document.getElementById("invoice-dropdown-content").classList.toggle("dropdown-show");
}

function ecoDropDown() {
    document.getElementById("eco-dropdown-header").classList.toggle("dropdown-Background");
    document.getElementById("eco-dropdown-content").classList.toggle("dropdown-show");
}

function userDropDown() {
    document.getElementById("user-dropdown-header").classList.toggle("dropdown-Background");
    document.getElementById("user-dropdown-content").classList.toggle("dropdown-show");
}

function pageDropDown() {
    document.getElementById("page-dropdown-header").classList.toggle("dropdown-Background");
    document.getElementById("page-dropdown-content").classList.toggle("dropdown-show");
}

/*---------------------- [ SideBar Navigation Toggle Menu ] --------------------------*/

let togglebtn = document.querySelector(".toggle-menu");
let dash = document.getElementById('sideNav');
let out = document.querySelector(".close");
let circle = document.querySelector(".circle");
togglebtn.onclick = function() {
    dash.style.left = "0px";
    out.style.display = "block";
    circle.style.display = "none";
};
out.onclick = () => {
    dash.style.left = "-350px";
}


/*---------------------- [ Theme Icon ] --------------------------*/

function darkTheme() {
    document.body.classList.toggle("dark-mode");
}

/*---------------------- [ Search Icon ] --------------------------*/

let search_icon = document.getElementById('search-icon');
search_icon.onclick = function() {
    document.getElementById('search').classList.toggle("searchIcon-hide");
}
document.getElementById('close-setting-icon').onclick = () => {
    document.getElementById('search').classList.toggle("searchIcon-hide");
}

/*---------------------- [ Star Icon 'Dropdown' ] --------------------------*/

let star = document.getElementById('StarIcon');
star.onclick = () => {
    document.getElementById('starDropdown').classList.toggle("star-active");
}

/*---------------------- [ Notification Icon 'Dropdown' ] --------------------------*/

let noti = document.getElementById('notification');
noti.onclick = () => {
    document.getElementById('notifiDropdown').classList.toggle("noti-active");
    document.getElementById("notifi-num").style.display = "none";
}

/*---------------------- [ Setting Icon 'Dropdown' ] --------------------------*/

let setting = document.getElementById('setting');
setting.onclick = () => {
    document.getElementById('settingDropdown').classList.toggle("setting-active");
}

/*---------------------- [ Range Input ] --------------------------*/

let sliderOne = document.getElementById("range-slide-1");
let sliderTwo = document.getElementById("range-slide-2");
let valueOne = document.getElementById("range-1");
let valueTwo = document.getElementById("range-2");
let minGap = 10;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("range-slide-1").max;

function slideOneFun() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    valueOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwoFun() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    valueTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #7367f0 ${percent1}%, #7367f0 ${percent2}%, #dadae5 ${percent2}%)`;
}

window.onload = function() {
    slideOneFun();
    slideTwoFun();
}

/*---------------------- [ Filter Toggle Menu ] --------------------------*/

let togglebtnTwo = document.querySelector(".toggle-menu-two");
let filt = document.getElementById('filter');
let outfilt = document.querySelector(".closefilter");
togglebtnTwo.onclick = function() {
    filt.style.left = "-25px";
    outfilt.style.display = "block";
};
outfilt.onclick = () => {
    filt.style.left = "-390px";
}

/*---------------------- [ Featured Dropdown ] --------------------------*/

let feature = document.getElementById('feature');
feature.onclick = () => {
    document.getElementById('featureDropdown').classList.toggle("feature-active");
}

/*---------------------- [ Setting Box ] --------------------------*/

document.querySelector(".settings-icon i").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("searchBox-hide");

    document.getElementById('close-option-icon').onclick = () => {
        document.querySelector(".settings-box").classList.toggle("searchBox-hide");
    }
};

/*---------------------- [ Show Cards Data ] --------------------------*/

const productResult = [{
        "id": 1,
        "name": "Apple Watch Series 5",
        "price": 339.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "watch"
    },
    {
        "id": 2,
        "name": "Apple iPhone 11 (64GB, Black)",
        "price": 669.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "phone"
    },
    {
        "id": 3,
        "name": "Apple iMac 27-inch",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "tv"
    },
    {
        "id": 4,
        "name": "OneOdio A71 Wired Headphones",
        "price": 49.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "headphone"
    },
    {
        "id": 5,
        "name": "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "laptop"
    },
    {
        "id": 6,
        "name": "Switch Pro Controller",
        "price": 429.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "game"
    },
    {
        "id": 7,
        "name": "Google - Google Home - White/Slate fabric",
        "price": 129.29,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "samsung",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "watch"
    },
    {
        "id": 8,
        "name": "Sony 4K Ultra HD LED TV",
        "price": 799.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "sony",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "laptop"
    },
    {
        "id": 9,
        "name": "OnePlus 7 Pro",
        "price": 14.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "metra",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "phone"
    },
    {
        "id": 10,
        "name": "Logitech K380 Wireless Keyboard",
        "price": 81.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.a197f12f.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "metra",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "game"
    },
    {
        "id": 11,
        "name": "Nike Air Max",
        "price": 81.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/11.196910d4.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "hp",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "fitness"
    },
    {
        "id": 12,
        "name": "New Apple iPad Pro",
        "price": 799.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/12.87084176.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "laptop"
    },
    {
        "id": 13,
        "name": "Vankyo leisure 3 mini projector",
        "price": 99.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13.e7c28d6c.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "hp",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "supply"
    },
    {
        "id": 14,
        "name": "Wireless Charger 5W Max",
        "price": 10.83,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/14.df784ed6.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "supply"
    },
    {
        "id": 15,
        "name": "Laptop Bag",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/15.2b721276.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "ge",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "game"
    },
    {
        "id": 16,
        "name": "Adidas Mens Tech Response Shoes",
        "price": 54.59,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/16.a9b3f7ab.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "incipio",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "fitness"
    },
    {
        "id": 17,
        "name": "Oculus Quest All-in-one VR",
        "price": 645,
        "rating": 1,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/18.fac01044.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "incipio",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "camera"
    },
    {
        "id": 18,
        "name": "Handbags for Women Large Designer bag",
        "price": 39.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/17.024d4a22.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "whirlpool",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "appli"
    },
    {
        "id": 19,
        "name": "Giotto 32oz Leakproof BPA Free Drinking Water",
        "price": 16.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/19.1c1f4cf1.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "fitness"
    },
    {
        "id": 20,
        "name": "PlayStation 4 Console",
        "price": 339.95,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/20.ad629602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "sony",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "laptop"
    },
    {
        "id": 21,
        "name": "Bugani M90 Portable Bluetooth Speaker",
        "price": 56,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/21.940a62ff.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "sony",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "appli"
    },
    {
        "id": 22,
        "name": "Toshiba Canvio Advance 2TB Portable External Hard Drive",
        "price": 69.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/23.ec286c40.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "hp",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "laptop"
    },
    {
        "id": 23,
        "name": "Tile Pro - High Performance Bluetooth Tracker",
        "price": 29.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/22.450e8e03.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "incipio",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "electrony"
    },
    {
        "id": 24,
        "name": "Ronyes Unisex College Bag Bookbags for Women",
        "price": 23.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/24.79a14740.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "incipio",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "appli"
    },
    {
        "id": 25,
        "name": "Willful Smart Watch for Men Women 2020,",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/25.e1f92d21.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "whirlpool",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "watch"
    },
    {
        "id": 26,
        "name": "VicTsing Wireless Mouse,",
        "price": 10.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/27.9b4c2313.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "ge",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "game"
    },
    {
        "id": 27,
        "name": "Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses",
        "price": 249,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/26.257af602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "samsung",
        "available": true,
        "colors": ["red", "purple", "green"],
        "category": "appli"
    }
];

const productLength = productResult.length;
let data = ``;

function showData(list) {
    let data = ``;
    for (let i = 0; i < list.length; i++) {
        data += `
            <div class="card" id="card">
                <div class="image" id="card-image">
                    <img src="${list[i].img}" alt="${list[i].name}" />
                </div>
                <div class="card-info" id="card-info">
                    <div class="card-info-first">
                        <div>`;
        for (let x = 0; x < 5; x++) {
            if (x < list[i].rating) {
                data += `<i class="fas fa-star"></i>`;
            } else {
                data += `<i class="far fa-star"></i>`;
            }
        }
        data += `
                        </div>
                        <span>${list[i].price}</span>
                    </div>
                    <div class="card-info-second">
                        <h3>${list[i].name}</h3>
                        <p>${list[i].discription}</p>
                    </div>
                </div>
                <div class="card-link" id="card-link">
                        <button id="card-link-btn"><i class="fas fa-heart" id="heart-icon" onclick="changeHeart()"></i> Washlist</button>`;
        data += `<button><i class="fas fa-cart-arrow-down"></i> View In Cart</button>
                </div>
            </div>

            `;
    }
    var element = document.getElementById("shopDescriptionContent");
    element.innerHTML = data;
}

showData(productResult);

/*---------------------- [ Heart Icon Color ] --------------------------*/

function changeHeart() {
    document.getElementById('heart-icon').classList.toggle("heart-active");
}

/*---------------------- [ Filtered Search ] --------------------------*/

function searchFilteredFunction(searchValue) {
    let searchProduct = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
            console.log("tttt");
            searchProduct.push(productResult[i]);
            console.log(searchProduct);
        } else {
            console.log("errorrrrrrrrrrrrrrrrrrrrr");
        }
    }
    showData(searchProduct);
}

/*---------------------- [ Filtered Multi-Range ] --------------------------*/

function multiRange(min, max) {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price >= min && productResult[i].price <= max) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('all').addEventListener('click', function() { multiRange(0, 1000000) });
document.getElementById('ls10').addEventListener('click', function() { multiRange(0, 10) });
document.getElementById('x10w100').addEventListener('click', function() { multiRange(10, 100) });
document.getElementById('100w500').addEventListener('click', function() { multiRange(100, 500) });
document.getElementById('gt500').addEventListener('click', function() { multiRange(500, 1000000) });

/*---------------------- [ Filtered Price-Range ] --------------------------*/

function priceRange(min, max) {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price >= min && productResult[i].price <= max) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
    console.log(min, max)
    console.log(arrProductResult)
}
document.getElementById('range-slide-1').addEventListener('click', function() {
    var s1 = document.getElementById('range-slide-1').value;
    var s2 = document.getElementById('range-slide-2').value;
    priceRange(s1, s2)
});
document.getElementById('range-slide-2').addEventListener('click', function() {
    var s1 = document.getElementById('range-slide-1').value;
    var s2 = document.getElementById('range-slide-2').value;
    priceRange(s1, s2)
});

/*---------------------- [ Filtered Some Category ] --------------------------*/

function cate(e) {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].category == e) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('appli').addEventListener('click', function() { cate('appli') });
document.getElementById('audio').addEventListener('click', function() { cate('phone') });
document.getElementById('cc').addEventListener('click', function() { cate('camera') });
document.getElementById('ceg').addEventListener('click', function() { cate('electrony') });
document.getElementById('cp').addEventListener('click', function() { cate('phone') });
document.getElementById('ct').addEventListener('click', function() { cate('laptop') });
document.getElementById('hfb').addEventListener('click', function() { cate('fitness') });
document.getElementById('oss').addEventListener('click', function() { cate('supply') });
document.getElementById('tv').addEventListener('click', function() { cate('tv') });
document.getElementById('vg').addEventListener('click', function() { cate('game') });


/*---------------------- [ Filtered Some Brands ] --------------------------*/

function brand(e) {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].brand == e) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('insignia').addEventListener('click', function() { brand('3M') });
document.getElementById('samsung').addEventListener('click', function() { brand('samsung') });
document.getElementById('metra').addEventListener('click', function() { brand('metra') });
document.getElementById('hp').addEventListener('click', function() { brand('hp') });
document.getElementById('apple').addEventListener('click', function() { brand('apple') });
document.getElementById('ge').addEventListener('click', function() { brand('ge') });
document.getElementById('sony').addEventListener('click', function() { brand('sony') });
document.getElementById('incipio').addEventListener('click', function() { brand('incipio') });
document.getElementById('kitchenAid').addEventListener('click', function() { brand('') });
document.getElementById('whirlpool').addEventListener('click', function() { brand('whirlpool') });

/*---------------------- [ Sorting Card ] --------------------------*/

let low = document.getElementById('lowest');
low.onclick = function sortLowest() {
    data += `${productResult.sort((cardOne, cardTwo) => parseFloat(cardOne.price) - parseFloat(cardTwo.price))}`;
    document.getElementById("shopDescriptionContent").innerHTML = data;
    showData(productResult);
}


let high = document.getElementById('heighest');
high.onclick = () => {
    data += `${productResult.sort((cardOne, cardTwo) => parseFloat(cardTwo.price) - parseFloat(cardOne.price))}`;
    document.getElementById("shopDescriptionContent").innerHTML = data;
    showData(productResult);
}

/*---------------------- [ Landscape And Portrait Button ] --------------------------*/

let landscapeBtn = document.getElementById('landscapeBtn');
landscapeBtn.onclick = () => {
    document.getElementById("shopDescriptionContent").classList.add('shopDescriptionContent-landscape');
    document.getElementById("card").classList.add('card-landscape');
    document.getElementById("card-image").classList.add('image-landscape');
    document.getElementById("card-info").classList.add('card-info-landscape');
    document.getElementById("card-link").classList.add('card-link-landscape');
    let data = '';
    for (let i = 0; i < productLength; i++) {
        data += `
        <div class="card card-landscape" id="card">
            <div class="image image-landscape" id="card-image">
                <img src="${productResult[i].img}" alt="" />
            </div>
            <div class="card-info card-info-landscape" id="card-info">
                <div class="card-info-first">
                    <div>`;
        for (let x = 0; x < 5; x++) {
            if (x < productResult[i].rating) {
                data += `<i class="fas fa-star"></i>`;
            } else {
                data += `<i class="far fa-star"></i>`;
            }
        }
        data += `
                    </div>
                    <span>${productResult[i].price}</span>
                </div>
                <div class="card-info-second">
                    <h3>${productResult[i].name}</h3>
                    <p>${productResult[i].discription}</p>
                </div>
            </div>
            <div class="card-link card-link-landscape" id="card-link">
                    <button id="card-link-btn"><i class="fas fa-heart" id="heart-icon" onclick="changeHeart()"></i> Washlist</button>`;
        data += `<button><i class="fas fa-cart-arrow-down"></i> View In Cart</button>
            </div>
        </div>
        
        `;
    }
    document.getElementById("shopDescriptionContent").innerHTML = data;
}

let portraitBtn = document.getElementById('portraitBtn');
portraitBtn.onclick = () => {
    document.getElementById("shopDescriptionContent").classList.remove('shopDescriptionContent-landscape');
    document.getElementById("card").classList.remove('card-landscape');
    document.getElementById("card-image").classList.remove('image-landscape');
    document.getElementById("card-info").classList.remove('card-info-landscape');
    document.getElementById("card-link").classList.remove('card-link-landscape');
    showData(productResult);
}

/*---------------------- [ Button Up ] --------------------------*/

let btnUP = document.querySelector(".btn-up");
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnUP.style.display = "block";
    } else {
        btnUP.style.display = "none";
    }
}

btnUP.onclick = function topFunction() {
    document.body.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    document.documentElement.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}