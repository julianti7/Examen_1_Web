$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const email = document.createElement("p");
    const phone = document.createElement("p");
    const like = document.createElement("p");
    const perc = document.createElement("p");

    document.getElementById("nombre").innerText = urlParams.get("name") || "N/A";
    
    email.innerText = urlParams.get("email") || "N/A";
    email.classList.add("text__stats","bg-info");

    phone.innerText = urlParams.get("telefono") || "N/A";
    phone.classList.add("text__stats", "bg-info");

    like.innerText = urlParams.get("gusto") || "N/A";
    like.classList.add("text__stats", "bg-info");

    perc.innerText = urlParams.get("porc") || "N/A";
    perc.classList.add("text__stats", "bg-info");

    document.getElementById("email").appendChild(email);
    document.getElementById("telefono").appendChild(phone);
    document.getElementById("gusto").appendChild(like);
    document.getElementById("porc").appendChild(perc);

    console.log()
});