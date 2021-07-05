var header = document.querySelector("header")
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", scrollY > 0)
})

var toggle = document.getElementById("toggle")
var logo = document.querySelector(".logo")
var navItem = document.querySelector(".navItem")
toggle.onclick = function () {
    toggle.classList.toggle("active")
    // logo.classList.toggle("invisible")
    navItem.classList.toggle("invisible")
    header.classList.toggle("v-header")
}

var items = document.getElementsByClassName("items")
window.addEventListener("scroll", () => {
    // console.log(this.scrollY)
    var scrolly = this.scrollY

    function manageActive(item) {
        var activeItem = document.querySelector(".is-active")
        activeItem.classList.remove("is-active")
        item.classList.add("is-active")
    }
    if (scrolly < 558) {
        var item = items[0]
        manageActive(item)
    }
    // 320 718
    else if (scrolly > 558 && scrolly < 1162) {
        var item = items[1]
        manageActive(item)
    }
    else if (scrolly > 1162 && scrolly < 1802) {
        var item = items[2]
        manageActive(item)
    }
    else if (scrolly > 1802) {
        var item = items[3]
        manageActive(item)
    }
})

let content = ["Hello,  Bonjour नमस्ते. . . !", "I Am Dhiraj Kumar . . . !", "WelCome To My Page . . !", "Here You Can Know About Me . .!", "I am A Web Developer . . !", "I Am A Flutist . . !", "This is A Learning Purpose Website . . !", "Thanks For Visiting My Page . . !"];
var itemlist = document.getElementById("itemlist")
let typingDelay = 25;
let eraseDelay = 20;
let newTxtDelay = 500;
let textArrayIndex = 0;
let charindex = 0;

typing()

function typing() {
    if (charindex < content[textArrayIndex].length) {
        itemlist.textContent += content[textArrayIndex].charAt(charindex)
        charindex++;
        setTimeout(typing, typingDelay)
    }
    else {
        setTimeout(erase, newTxtDelay)
    }
}
function erase() {
    if (charindex > 0) {
        itemlist.textContent = content[textArrayIndex].substring(0, charindex - 1)
        charindex--;
        setTimeout(erase, eraseDelay)
    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= content.length) {
            textArrayIndex = 0
        }
        setTimeout(typing, typingDelay + 1100)
    }
}

// ------------SM------------------
let list = document.querySelectorAll(".sci li")
let bg = document.querySelector(".socialMedia")
list.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        let color = e.target.getAttribute('data-color')
        bg.style.backgroundColor = color
    })
    element.addEventListener("mouseleave", (e) => {

        bg.style.backgroundColor = 'purple'
    })
});

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

// -----------------slider-----------------
var crouselVid = document.querySelector('.videos')
var crouselBtn = document.querySelectorAll(".button")
var no_of_vid = document.querySelectorAll(".videos video").length

let list_append = document.querySelector("#list_append")
for (let i = 0; i < no_of_vid; i++) {
    list_append.innerHTML += `<li><div class="item"></div></li>`

}
let corouselItems = document.querySelectorAll(".item")
corouselItems.forEach(element => {
    element.className = "divOpacityLow"
});
corouselItems[0].className = "divOpacityHigh"



var vidIndex = 1
var translateX = 0;
var x = window.matchMedia("(max-width: 1350px)")
crouselBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.id == 'prev') {
            if (vidIndex !== 1) {
                vidIndex--
                if (x.matches) { // If media query matches
                    translateX += 300
                } else {
                    translateX += 500
                }
                // console.log(translateX)
            }
        }
        else if (e.target.id == 'next') {
            if (vidIndex !== no_of_vid) {
                vidIndex++
                if (x.matches) { // If media query matches
                    translateX -= 300
                } else {
                    translateX -= 500
                }
                // console.log(translateX)
            }
        }
        document.getElementsByClassName("divOpacityHigh")[0].className = "divOpacityLow"
        document.getElementsByClassName("divOpacityLow")[vidIndex - 1].className = "divOpacityHigh"
        crouselVid.style.transform = `translateX(${translateX}px)`

    })
});

(function () {
    var videos = [
        document.getElementById("vid1"),
        document.getElementById("vid2"),
        document.getElementById("vid3"),
        document.getElementById("vid4"),

    ];

    function stopOthers() {
        var id = this.id, i = 0;
        for (var j = videos.length; i < j; i++) {
            if (videos[i].id !== id) {
                videos[i].pause();
            }
        }
    }

    var i = 0;
    for (var j = videos.length; i < j; i++) {
        videos[i].addEventListener("play", stopOthers, false);
    }
})();