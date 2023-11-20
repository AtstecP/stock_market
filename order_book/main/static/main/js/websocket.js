var socket = new WebSocket(`ws://${window.location.host}/ws/some_path/`);

socket.onmessage = function (e) {
    var data = JSON.parse(e.data);
    console.log(data);
    // Обновите таблицу с использованием полученных данных
};
