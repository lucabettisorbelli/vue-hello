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

// const { createImg } = Vue

// createImg({
//     data() {
//         return {
//             imagine: 
//         }
//     },
// }).mount('#img')