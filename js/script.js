const { createApp } = Vue

createApp({
    data() {
        return {
            nome: "",
            cognome: "",
            colore: ""
        }
    },
}).mount('#app')

const { createImg } = Vue

createImg({
    data() {
        return {
            imagine: "https://www.coches.com/fotos_historicas/bmw/M5-Nighthawk-F10-Australia-2015/bmw_m5-nighthawk-f10-australia-2015_r15.jpg"
        }
    },
}).mount('#img')