<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $services = $_POST['services'];
    $master = $_POST['master'];
    $date = $_POST['datepicker'];
    $time = $_POST['time-for'];

    $content = $name . ' оставил заявку на бронирование ' . $phone . ' его телефон ' . $services . '. сервис ' . $master . ' мастер ' . $date . ' дата ' . $time . ' время ';

    $success = mail("admin@barbershop.com", 'Запрос на бронирование', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
