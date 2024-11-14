function getLocStor() {
    let data = [];
    if (localStorage.getItem('InfoUsers')) {
        data = JSON.parse(localStorage.getItem('InfoUsers'));
    }
    return data;
}

export { getLocStor as getLocalStorage }