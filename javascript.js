$(document).ready(function () {
    $(".submit").click(function () {
        console.log("Clicked");
        var city = $(".city").val();
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=568db8685beec15f7aa11e66af5b8b99";
        console.log(uri);
        $.get(uri, onRes);
    });
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description)
}
