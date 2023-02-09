let $resumen = document.querySelector("#resumen"),
    $tema = document.querySelector("#tema"),
    $mostrar = document.querySelector("#mostrar"),
    $siguiente = document.querySelector("#next"),
    $anterior = document.querySelector("#anterior"),
    indice = 0;

    (async () => {
    let data = await fetch("./prueba.json").then(res => res.json())
    $resumen.innerHTML = data[indice].resumen
    $tema.innerHTML = data[indice].tema
})();
$mostrar.addEventListener("click",()=>{
    $tema.classList.toggle("visible")
})
$siguiente.addEventListener("click",async ()=>{
    indice++;
    let data = await fetch("./prueba.json").then(res => res.json())
    if (indice >= data.length) indice = 0
    $resumen.innerHTML = data[indice].resumen
    $tema.innerHTML = data[indice].tema
})
$anterior.addEventListener("click",async ()=>{
    indice--;
    let data = await fetch("./prueba.json").then(res => res.json())
    if (indice < 0) indice = data.length -1
    $resumen.innerHTML = data[indice].resumen
    $tema.innerHTML = data[indice].tema
    })
