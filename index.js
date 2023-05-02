let preguntasObject = [];
let imprimir = document.querySelector("#imprimir");
let guardar = document.querySelector("#guardar");

function copyToClipboard(text) {
    text = text.split("{\"frontal\":\"\",\"reverso\":\"\"},").join("");
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
        console.error("Error al copiar el texto al portapapeles: ", error);
    });
}

guardar.addEventListener("click", (e) => {
    const inputFrontal = document.querySelector("#frontal");
    const inputReverso = document.querySelector("#reverso");

    let flashcard = {
        frontal: inputFrontal.value,
        reverso: inputReverso.value
    };
    preguntasObject.push(flashcard)
    
    inputFrontal.value = "";
    inputReverso.value = "";
})

imprimir.addEventListener("click", () => copyToClipboard(JSON.stringify(preguntasObject)));