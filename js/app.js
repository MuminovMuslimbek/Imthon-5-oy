const form = document.querySelector('form')
const wrapper = document.querySelector('.result_wrapper')
const logoUrl = document.querySelector('#logo-url')
const companyName = document.querySelector('#company-name')
const New = document.querySelector('#new')
const featured = document.querySelector('#featured')
const position = document.querySelector('#position')
const time = document.querySelector('#time')
const jobType = document.querySelector('#job-type')
const location = document.querySelector('#location')
const python = document.querySelector('#python')
const react = document.querySelector('#react')
const JavaScript = document.querySelector('#JavaScript')
const html = document.querySelector('#html')
const css = document.querySelector('#css')
const sass = document.querySelector('#sass')
const btn = document.querySelector('#btn')
const deleted = document.querySelectorAll('#delete')
const deleteAll = document.querySelector('#deleteAll')

function Validate() {
    if (logoUrl.value.trim() == '') {
        alert('Iltimos rasmni url manzilini kiriting!!')
        logoUrl.focus()
        logoUrl.style.borderColor = 'red'
        return false;
    } else if (!logoUrl.value.startsWith('https')) {
        alert('Rasmni url manzili https bilan boshlanishi kerak!!')
        logoUrl.focus()
        logoUrl.style.borderColor = 'red'
        return false;
    } else if (companyName.value.trim() == '') {
        alert('Iltimos companiyangizni nomini kiriting!!')
        companyName.focus()
        companyName.style.borderColor = 'red'
        return false;
    } else if (companyName.value.trim() < 5) {
        alert('Bunday kompaniya nomi yoq!!')
        companyName.focus()
        companyName.style.borderColor = 'red'
        return false;
    } else if (!New.checked && !featured.checked) {
        alert('Iltimos yangi yoki featutedni tanlang!!')
        return false;
    } else if (position.value.trim() == '') {
        alert('Iltimos lavozimingizni kiriting!!')
        position.focus()
        position.style.borderColor = 'red'
        return false;
    } else if (position.value.trim() < 3) {
        alert('Bunday lavozim turi yoq!!')
        position.focus()
        position.style.borderColor = 'red'
        return false;
    } else if (time.value === '' &&
        jobType.value === '' &&
        location.value === '') {
        alert('Vaqt, Ish turi yoki Joylashuv kiritilmagan!!')
        return false;
    } else if (!python.checked && !react.checked && !JavaScript.checked && !html.checked && !css.checked && !sass.checked) {
        alert('Iltimos konikmalarni kiriting!!')
        return false
    }
    return true;
}

function CreateCard(data) {
    return `
        <div class="block">
            <div class="block_left">
                <img src="${data.logoUrl}" width="88px" height="88px">
                <div class="block_left2">
                    <div class="block_left2Top">
                        <h5>${data.companyName}</h5>
                        ${data.New ? '<p id="new">NEW</p>' : ""}
                        ${data.featured ? '<p id="featured">featured</p>' : ""}
                    </div>
                    <h2>${data.position}</h2>
                    <ul class="block_left2_ul">
                        <li>${data.time}</li>
                        <li></li>
                        <li>${data.jobType}</li>
                        <li></li>
                        <li>${data.location}</li>
                    </ul>
                </div>
            </div>
            <div class="block_right">
                <div class="block_skills">
                    ${data.python ? '<p>Python</p>' : ""}
                    ${data.react ? '<p>React</p>' : ""}
                    ${data.JavaScript ? '<p>JavaScript</p>' : ""}
                    ${data.html ? '<p>HTML</p>' : ""}
                    ${data.css ? '<p>CSS</p>' : ""}
                    ${data.sass ? '<p>Sass</p>' : ""}
                </div>
                <button id="delete">delete</button>
            </div>
        </div>
    `;
}


function getLocStor() {
    let data = [];
    if (localStorage.getItem('InfoUsers')) {
        data = JSON.parse(localStorage.getItem('InfoUsers'));
    }
    return data;
}

btn && btn.addEventListener('click', function(event) {
    event.preventDefault()
    if (!Validate()) {
        return
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
    }
    const card = CreateCard(InfoUser)
    wrapper.innerHTML += card;


    let InfoUsers = getLocStor()
    InfoUsers.push(InfoUser)

    localStorage.setItem('InfoUsers', JSON.stringify(InfoUsers))
    form.reset()
})

document.addEventListener('DOMContentLoaded', function() {
    let InfoUsers = getLocStor()
    InfoUsers.forEach(card => {
        let block = CreateCard(card)
        wrapper.innerHTML += block;
    });
})

function attachDeleteEvents() {
    let buttons = document.querySelectorAll('#delete');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let isDelete = confirm('Rostdan ham o`chirmoqchimisiz??');
            if (isDelete) {
                let id = this.getAttribute('data-id');
                this.parentNode.remove();
                if (id) {
                    let InfoUsers = getDataFromLocalStorage();
                    InfoUsers = InfoUsers.filter(value => value.id != id);
                    localStorage.setItem('InfoUsers', JSON.stringify(InfoUsers));
                }
            }
        });
    });
}