export function CreateCard(data) {
    return `
        <div class="block" data-id="${data.id}">
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
                <button id="delete" data-id="${data.id}">delete</button>
            </div>
        </div>
    `;
}