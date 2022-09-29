function fiveDay (){
    let place = $('#vityname').val();
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}')
    .then(response => return response.json();
})
    .then(data => {
        console.log(data);|
        displayfiveDay(data.list,data.city.name);
    }, (error)=> {
        console.log("doesnt exist");
    })
})