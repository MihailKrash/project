<?php
require_once 'connect.php';				// коннекта с базой данных

$potok = fopen('php://input','r');   // Откываем поток для получение данных, посланных на этот скрипт из браузера
$d = stream_get_contents($potok);   // Получаем данные посланные методом post с клиента
$d = json_decode($d, true);   // Преобразуем полученные данные из JSON в php массив.

$key1 = $d['key1'];
$key2 = $d['key2'];
$video = $d['video'];
$foto = $d['foto'];

// Запрос к базе данных на получение постов в зависимости от настроек фильтра
// Фильтр состоит из двух ключевых слов и двух чекбоксов (фото и видео)
// Вычисляем все варианты комбинаций этих четырех показателей.

if($key1!='0') {

    if($foto!='0' && $video=='0'){
    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
    AND `file`!='' AND `youtubeurl`='' AND `key1`='$key1' ");   
        $query->execute();
        $postsMass = $query->fetchAll();
        } elseif ($video!='0'&&$foto=='0') {
            $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
            AND `youtubeurl`!='' AND `key1`='$key1' ");
                $query->execute();
                $postsMass = $query->fetchAll();
    
        } elseif ($video!='0'&&$foto!='0'){
            $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY
            AND `youtubeurl`!='' OR `file`!=''  AND `key1`='$key1' ");
                $query->execute();
                $postsMass = $query->fetchAll();
        } else{
            $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
            AND `key1`='$key1' ");
                $query->execute();
                $postsMass = $query->fetchAll();
        }
    }

    if($key2!='0') {

        if($foto!='0' && $video=='0'){
        $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
        AND `file`!='' AND `youtubeurl`='' AND `key2`='$key2' ");  
            $query->execute();
            $postsMass = $query->fetchAll();
            } elseif ($video!='0'&&$foto=='0') {
                $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
                AND `youtubeurl`!='' AND `key2`='$key2' ");
                    $query->execute();
                    $postsMass = $query->fetchAll();
        
            } elseif ($video!='0'&&$foto!='0'){
                $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY
                AND `youtubeurl`!='' OR `file`!=''  AND `key2`='$key2' ");
                    $query->execute();
                    $postsMass = $query->fetchAll();
            } else{
                $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
                AND `key2`='$key2' ");
                    $query->execute();
                    $postsMass = $query->fetchAll();
            }
        }

        if($key2!='0'&&$key1!='0') {

            if($foto!='0' && $video=='0'){
            $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
            AND `file`!='' AND `youtubeurl`='' AND `key2`='$key2' AND `key1`='$key1'");  
                $query->execute();
                $postsMass = $query->fetchAll();
                } elseif ($video!='0'&&$foto=='0') {
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
                    AND `youtubeurl`!='' AND `key2`='$key2' AND `key1`='$key1' ");
                        $query->execute();
                        $postsMass = $query->fetchAll();
            
                } elseif ($video!='0'&&$foto!='0'){
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY
                    AND `youtubeurl`!='' OR `file`!=''  AND `key2`='$key2' AND `key1`='$key1'");
                        $query->execute();
                        $postsMass = $query->fetchAll();
                } else{
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
                    AND `key2`='$key2' AND `key1`='$key1' ");
                        $query->execute();
                        $postsMass = $query->fetchAll();
                }
            }
    


    if(($key1=='0' && $key2=='0')) {

        if($foto!='0' && $video=='0'){
            $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
            AND `file`!='' AND `youtubeurl`='' ");  
                $query->execute();
                $postsMass = $query->fetchAll();
                } elseif ($video!='0'&&$foto=='0') {
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY 
                    AND `youtubeurl`!='' ");
                        $query->execute();
                        $postsMass = $query->fetchAll();
            
                } elseif ($video!='0'&&$foto!='0'){
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY
                    AND `youtubeurl`!='' OR `file`!=''");
                        $query->execute();
                        $postsMass = $query->fetchAll();
                } else{
                    $query = $connect->prepare("SELECT * FROM posts WHERE `data` > NOW() - INTERVAL 1117 DAY");
                        $query->execute();
                        $postsMass = $query->fetchAll();
                }

        }



$postsMass = json_encode($postsMass);

echo $postsMass;

?>