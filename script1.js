function edit(event) {
    console.log("Edit");
    event.preventDefault();
    if (document.getElementById("gusto").value === '') return;

    const gusto = document.getElementById("gusto").value;
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const button = document.createElement("button")
    var id = generateId();


    button.innerText = "Edit";
    button.setAttribute("aria-identifier", id);

    tbody.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(button);

    document.getElementById('head-gusto').innerHTML += `<td id="${id}">${gusto}</td>`;
    document.getElementById('head-prtg').innerHTML += `<td id="${id}p">0</td>`;
    document.getElementById("head-edit").appendChild(tbody)


    console.log(document.querySelector(`button[aria-identifier="${id}"]`));

    button.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if ($("td button.active").length) {
            alert("No se puede editar más de un gusto a la vez.")
            console.log($("td button"));
            return false;
        }

        $("#simple").addClass("active");
        $(`#${id}`).html(`<input type="text" value="${gusto}" name="gusto" style="width: 100%" />`)
        $(`#${id}p`).html('<input type="text" value="0" name="porc" style="width: 100%" />')

        this.classList.add("active");
        this.innerText = "In Edition"
        return false;
        // })
    }

    document.getElementById("gusto").value = "";
    return false;
}
    


$(document).ready(function () {
    // enviar
    $("#boton1").on('click', function () {
        $("formulario").submit()
    });
    //  cancelar
    $("#boton2").on('click', function (event) {
        event.preventDefault();
        $("td button.active").each(function () {
            const targetId = this.getAttribute("aria-identifier");
            const gusto = $(`#${targetId} input`).val();
            $(`#${targetId}`).html(gusto);
            $(`#${targetId}p`).html("0");
            this.classList.remove("active");
            this.innerText = "Edit"

        });

        $("#simple").removeClass("active");
    });

    $("#btn-gustos").on("click", edit);

});

function generateId(){
    return Math.floor(Math.random() * Date.now())
}





