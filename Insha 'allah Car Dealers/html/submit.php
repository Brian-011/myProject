<?php
    if(!empty($_POST["submit"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $toEmail = "kichumaundertaking@gmail.com";
        $mailHeaders = "Name: " . $name .
        "\r\n Email: " . $email .
        "\r\n Message: " . $message .;
    }
?>