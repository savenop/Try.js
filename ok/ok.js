var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var one = document.querySelector("#one")
var btnp = document.querySelector("#btnp")
var game1 = document.querySelector("#game-search")
var navh = document.querySelector("#navh")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.1,
        // ease:"back.out"
    })
})

one.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:0.5,
        duration:0.2,
        backgroundColor: "red",
    })
})

one.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        duration:0.2,
        backgroundColor: "white",
    })
})

btnp.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:0.5,
        duration:0.2,
        backgroundColor: "red",
    })
})

btnp.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        duration:0.2,
        backgroundColor: "white",
    })
})


navh.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:0.5,
        duration:0.2,
        backgroundColor: "red",
    })
})

navh.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        duration:0.2,
        backgroundColor: "white",
    })
})

game1.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:1.2,
        duration:0,
        width: 1,
        backgroundColor: "gray",
    })
})

game1.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        duration:0,
        width: 20,
        backgroundColor: "white",
    })
})


document.querySelectorAll(".game").forEach(game => {
    game.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 0.5,
            duration: 0.2,
            backgroundColor: "red"
        
        });
    });

    game.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            backgroundColor: "white",
        });
    });
});

document.querySelectorAll(".botn").forEach(botn => {
    botn.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 0.5,
            duration: 0.2,
            backgroundColor: "red",
        });
    });

    botn.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            backgroundColor: "white",
        });
    });
});


// // did With the help of a yt Tutorial and a bit of an Ai
// var searchInput = document.getElementById("game-search");
// if (searchInput) {
//     searchInput.addEventListener("input", function() {
//         var val = searchInput.value.trim().toLowerCase();
//         document.querySelectorAll(".game").forEach(function(card) {
//             var title = card.querySelector("h1")?.textContent.trim().toLowerCase() || "";
//             if (title.startsWith(val) || val === "") {
//                 card.style.display = "";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     });
// }
// // upto there only 


// document.querySelector('#nav h1').addEventListener('click', () => {
//   window.location.href = 'index.html';
// });

// document.querySelector('#btnp').addEventListener('click', () => {
//   window.location.href = '#page2';
// });

// document.querySelector('.botn').addEventListener('click', () => {
//   window.location.href = '#';
// });

// window.addEventListener('DOMContentLoaded', function() {
//     var modal = document.getElementById('name-modal');
//     var input = document.getElementById('username-input');
//     var submit = document.getElementById('username-submit');
//     var welcome = document.getElementById('welcome-message');

//     function showWelcome(name) {
//         welcome.textContent = `Welcome, ${name}!`;
//         welcome.style.display = 'block';
//         setTimeout(() => {
//             welcome.style.display = 'none';
//         }, 3500);
//     }

//     function closeModal() {
//         modal.style.display = 'none';
//     }

//     function handleSubmit() {
//         var name = input.value.trim();
//         if (name) {
//             closeModal();
//             showWelcome(name);
//         } else {
//             input.focus();
//         }
//     }

//     submit.addEventListener('click', handleSubmit);
//     input.addEventListener('keydown', function(e) {
//         if (e.key === 'Enter') handleSubmit();
//     });

//     setTimeout(() => input.focus(), 100);
// });

