<?php
    $content = '';
    foreach ($_POST as $key => $value) {
        if ($value){
            $content .= "<b>$key</b>: <i>$value</i>\n";
        }
    }
    if(trim($content)) {
        $content = "<b>Message from Site:</b>\n".$content;

        $apiToken = "6215398274:AAElV_0yRMADoBMXHY0c-b2BphpElUggaew";
        $data = [
            'chat_id' => '@RSmotoSendMessage',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];
        $response = file_get_contents("https//api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    }
?>