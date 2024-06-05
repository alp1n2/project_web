function getCurrentTime() {
fetch("http://worldtimeapi.org/api/ip") 
        .then(response => response.json())
        .then(data => {
        const currentTime = new Date(data.datetime);
        const formattedTime = currentTime.toLocaleTimeString();
        document.getElementById('current-time').textContent = formattedTime;
        console.log(data.datetime);
        })
        .catch(error => console.error('Ошибка:', error));
    }
    setInterval(getCurrentTime, 1000);