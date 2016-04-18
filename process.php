<?php

    $to = "sokratchet@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Pedido de reserva";

    $fields = array();
    $fields{"name"} = "Nome";
    $fields{"email"} = "Email";
    $fields{"from"} = "Desde";
    $fields{"to"} = "Até";
    $fields{"rooms"} = "Nº Quartos";
    $fields{"observations"} = "Observações adicionais";

    $body = "Pedido de reserva:\n\n";
    
    foreach($fields as $a => $b){
        $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]);
    }

    $send = mail($to, $subject, $body, $headers);
?>
