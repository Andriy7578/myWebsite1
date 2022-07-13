const form = document.getElementById("form");

function retrieveFormValue(event) {
    event.preventDefault();

    const fields = document.querySelectorAll("input, select, textarea");
    const values = {};

    fields.forEach(field => {
        const {name, value} = field;

        values[name] = value;
    })

    console.log("v2", values);
}

form.addEventListener("submit", retrieveFormValue);


