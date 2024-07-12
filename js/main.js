"use strict"

const header = document.querySelector('header.header');
const openingButtons = [...document.querySelectorAll('.js-open-toggle')];
openingButtons.forEach(button => button.addEventListener('click', onToggleClick));

const burgers = [...document.querySelectorAll('.js-burger')];
const burgerMenu = document.querySelector('.js-burger-menu');
burgers.forEach(burger => burger.addEventListener('click', onBurgerClick));

function onBurgerClick() {
    burgerMenu.classList.toggle('show');
    openingButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
}

function onToggleClick(evt) {
    let expanded = evt.currentTarget.getAttribute('aria-expanded') == 'true' ? true : false;
    evt.currentTarget.setAttribute('aria-expanded', !expanded)
    if (window.innerWidth >= 1236) {
        header.classList.toggle('dark');
    }
}

$(document).ready(function() {
    $(".accordion__text").on("click", function() {
        if ($(this).hasClass("accordion__text-opened")) {
            $(this).removeClass("accordion__text-opened");
            $(this).siblings(".accordion__body").slideUp(300);
        } else {
            $(".accordion__text").removeClass("accordion__text-opened");
            $(this).addClass("accordion__text-opened");
            $(".accordion__body").slideUp(300);
            $(this).siblings(".accordion__body").slideDown(300);
        }
    });
});

const videoLink = document.querySelector('.js-video-link');
const videoPopup = document.querySelector('.video-popup');
const closeButton = videoPopup.querySelector('.close-button');
videoLink.addEventListener('click', onVideoLinkClick);

function onVideoLinkClick(evt) {
    if (window.innerWidth < 1000) return;
    evt.preventDefault();
    showVideoPopup();
}

function showVideoPopup() {
    videoPopup.classList.add('show');
    document.body.classList.add('no-overflow');
    closeButton.addEventListener('click', hidePopup);
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleSideClick);
}

function hidePopup() {
    videoPopup.classList.remove('show');
    document.body.classList.remove('no-overflow');
    closeButton.removeEventListener('click', hidePopup);
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', handleSideClick);
}

function handleEsc(evt) {
    if (evt.key !== "Escape") return;
    hidePopup();
}

function handleSideClick(evt) {
    if (!evt.target.classList.contains('video-popup')) return;
    hidePopup();
}