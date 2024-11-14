import { Validate, getLocalStorage, CreateCard } from './index.js';
const form = document.querySelector('form');
const wrapper = document.querySelector('.result_wrapper');
const logoUrl = document.querySelector('#logo-url');
const companyName = document.querySelector('#company-name');
const New = document.querySelector('#new');
const featured = document.querySelector('#featured');
const position = document.querySelector('#position');
const time = document.querySelector('#time');
const jobType = document.querySelector('#job-type');
const location = document.querySelector('#location');
const python = document.querySelector('#python');
const react = document.querySelector('#react');
const JavaScript = document.querySelector('#JavaScript');
const html = document.querySelector('#html');
const css = document.querySelector('#css');
const sass = document.querySelector('#sass');
const btn = document.querySelector('#btn');
const deleteAll = document.querySelector('#deleteAll');

btn && btn.addEventListener('click', function(event) {
    event.preventDefault();
    if (!Validate()) {
        return;
    }
    const InfoUser = {
        id: Date.now(),
        logoUrl: logoUrl.value,
        companyName: companyName.value,
        New: New.checked,
        featured: featured.checked,
        position: position.value,
        time: time.value,
        jobType: jobType.value,
        location: location.value,
        python: python.checked,
        react: react.checked,
        JavaScript: JavaScript.checked,
        html: html.checked,
        css: css.checked,
        sass: sass.checked
    };

    const card = CreateCard(InfoUser);
    wrapper.innerHTML += card;

    let InfoUsers = getLocalStorage();
    InfoUsers.push(InfoUser);

    localStorage.setItem('InfoUsers', JSON.stringify(InfoUsers));
    form.reset();
    viewAllDelete();
    deleteEl();
});

document.addEventListener('DOMContentLoaded', function() {
    let InfoUsers = getLocalStorage();
    InfoUsers.forEach(card => {
        let block = CreateCard(card);
        wrapper.innerHTML += block;
    });
    viewAllDelete();
    deleteEl();
});

function deleteEl() {
    let buttons = document.querySelectorAll('#delete');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let isDelete = confirm('Rostdan ham o`chirmoqchimisiz??');
            if (isDelete) {
                let id = this.getAttribute('data-id');
                if (id) {
                    let InfoUsers = getLocalStorage();
                    InfoUsers = InfoUsers.filter(value => value.id != id);
                    localStorage.setItem('InfoUsers', JSON.stringify(InfoUsers));
                    this.closest('.block').remove();
                    viewAllDelete();
                }
            }
        });
    });
}

function viewAllDelete() {
    let InfoUsers = JSON.parse(localStorage.getItem('InfoUsers')) || [];
    if (InfoUsers.length > 0) {
        deleteAll.style.display = "block";
    } else {
        deleteAll.style.display = "none";
    }
}

deleteAll && deleteAll.addEventListener('click', function(event) {
    event.preventDefault();
    let isClear = confirm('Rostdan ham hammasini o`chirmoqchimisiz??');
    if (isClear) {
        wrapper.innerHTML = '';
        localStorage.removeItem('InfoUsers');
        viewAllDelete();
    }
});

// Saytni responsivi ham bor ko'rib qoyishingizni tavsiya qilaman.