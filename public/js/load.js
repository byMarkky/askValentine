document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/load');
    
        if (!response.ok) {
            console.log('Error al guardar el archivo.');
            throw new Error('Error al obtener los datos del archivo')
        }

        const rawData = await response.json();
        const data = rawData.content.split(', ');
        
        const date = data[0];
        const food = data[1].split(',');
        const dessert = data[2].split(',');
        const activity = data[3].split(',');

        const dateLI = document.createElement('li');
        dateLI.textContent = date;
        document.getElementById('date_list').appendChild(dateLI);

        const foodList = document.getElementById('food_list');
        food.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            foodList.appendChild(li);
        });

        const dessertList = document.getElementById('dessert_list');
        dessert.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            dessertList.appendChild(li);
        });

        const activityList = document.getElementById('activity_list');
        activity.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            activityList.appendChild(li);
        });
    
    } catch (error) {
        console.error('Error al comunicarse con el servidor:', error);
    }
})