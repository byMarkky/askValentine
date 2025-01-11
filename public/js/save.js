const params = new URLSearchParams(window.location.search)
sessionStorage.setItem("activitie", params.getAll("activitie"))

/*
console.log("Date: ", sessionStorage.getItem("date"))
console.log("Foods: ", sessionStorage.getItem("food"))
console.log("Desserts: ", sessionStorage.getItem("dessert"))
console.log("Activities: ", sessionStorage.getItem("activitie"))
*/

const content = [sessionStorage.getItem("date"), sessionStorage.getItem("food"),
    sessionStorage.getItem("dessert"), sessionStorage.getItem("activitie")];

console.log(content.join(', '))

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: content.join(', ') })
        });
    
        if (response.ok) {
            console.log('Archivo guardado exitosamente.');
          } else {
            console.log('Error al guardar el archivo.');
          }
    
    } catch (error) {
        console.error('Error al comunicarse con el servidor:', error);
    }
})



