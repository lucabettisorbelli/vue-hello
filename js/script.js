const { createApp } = Vue

createApp({
    data() {
        return {
            nome: "",
            cognome: "",
            colore: "",
            immagine: ""
        }
    },
    methods: {
        btnClick() {
            this.immagine = "https://cdn.bimmertoday.de/wp-content/uploads/2017/04/2017-BMW-M550i-xDrive-G30-M-Performance-07.jpg"
        }
    },
}).mount('#app')
