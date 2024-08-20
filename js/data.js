let display = document.querySelector("#display");
let id = document.querySelector("#id");
let submitBtn = document.querySelector("#submit");

submitBtn.onclick = (() => {
    let idValue = id.value;
    show(idValue);
});

let article = document.createElement("article");

let show = (idValue) => {
    fetch(`http://localhost:3000/${idValue}`)
    .then(response => response.json())
    .then(result => {
        display.appendChild(article);
        article.innerHTML = `<h1>${result.first_name} ${result.last_name}</h1>
                        <p><b>Email:</b> ${result.email}</p>
                        <p><b>Department:</b> ${result.department}</p>
                        <p><b>Gender:</b> ${result.gender}</p>
                        <p><b>Address:</b> ${result.address}</p>`
    }).catch(error => {
        display.appendChild(article);
        article.innerHTML = `<h1>Invalid Id</h1>`;
    });
}
