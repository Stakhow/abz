// import scrollToElement from 'scroll-to-element/build/scrollToElement';
//
// window.onload = function () {
//
//     scrollToId( '.main-menu' );
//     window.onscroll = function () {
//         headerScrolled();
//     }
//
// }
//
//
// const headerScrolled = () => {
//     let header = document.querySelector('.header');
//     if (window.scrollY > 150) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// }
//
//
// const scrollToId = (menuSelector) => {
//     let links, linkHref, targetID, headerHeight;
//     links = document.querySelectorAll(`${menuSelector} a[href^="#"]`);
//     links.forEach( (link) => {
//         link.onclick = (e) => {
//             linkHref = e.target.hash;
//             targetID = document.querySelector(linkHref);
//             headerHeight = document.querySelector('.header').offsetHeight;
//             scrollToElement(
//                 targetID,
//                 {
//                     offset: -headerHeight, // adjust the upper indent due to header
//                     ease: 'linear',
//                     duration: 1500
//                 }
//             );
//         }
//     });
// }
//
