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

export function Validate() {
    if (logoUrl.value.trim() === '') {
        alert('Iltimos rasmni url manzilini kiriting!!');
        logoUrl.focus();
        logoUrl.style.borderColor = 'red';
        return false;
    } else if (!logoUrl.value.startsWith('https')) {
        alert('Rasmni url manzili https bilan boshlanishi kerak!!');
        logoUrl.focus();
        logoUrl.style.borderColor = 'red';
        return false;
    } else if (companyName.value.trim() === '') {
        alert('Iltimos kompaniyangizni nomini kiriting!!');
        companyName.focus();
        companyName.style.borderColor = 'red';
        return false;
    } else if (companyName.value.trim().length < 5) {
        alert('Bunday kompaniya nomi yo\'q!!');
        companyName.focus();
        companyName.style.borderColor = 'red';
        return false;
    } else if (!New.checked && !featured.checked) {
        alert('Iltimos yangi yoki featuredni tanlang!!');
        return false;
    } else if (position.value.trim() === '') {
        alert('Iltimos lavozimingizni kiriting!!');
        position.focus();
        position.style.borderColor = 'red';
        return false;
    } else if (position.value.trim().length < 3) {
        alert('Bunday lavozim turi yo\'q!!');
        position.focus();
        position.style.borderColor = 'red';
        return false;
    } else if (time.value === '' || jobType.value === '' || location.value === '') {
        alert('Vaqt, Ish turi yoki Joylashuv kiritilmagan!!');
        return false;
    } else if (!python.checked && !react.checked && !JavaScript.checked && !html.checked && !css.checked && !sass.checked) {
        alert('Iltimos ko\'nikmalarni tanlang!!');
        return false;
    }
    return true;
}