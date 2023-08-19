<?php
require_once 'connect.php';				//коннект с базой данных

$potok = fopen('php://input','r');   // Откываем поток для получение данных
$d = stream_get_contents($potok);   // Получаем данные посланные методом post с клиента
$d = json_decode($d, true);   // Преобразуем полученные данные из JSON в php массив.

$poisk = $d['poisk'];
$mlength = $d['mlength'];

if (isset($d['poisk'][0])){$p1=$d['poisk'][0];}
if (isset($d['poisk'][1])){$p2=$d['poisk'][1];}
if (isset($d['poisk'][2])){$p3=$d['poisk'][2];}
if (isset($d['poisk'][3])){$p4=$d['poisk'][3];}
if (isset($d['poisk'][4])){$p5=$d['poisk'][4];}

// Обработка запроса из строки поиска
// Предварительно данные запроса обработаны, удалены знаки припенания и слова состоящие из 1 или двух букв типа (в, у, на) и обрезаны окончания слов чтобы не учитывать склонения по падежам и числам
// Ниже перебраны условия постепенно упрощающие параметры поиска если предыдущий более сложный запрос не дал результатов.

if(isset($p4)){
 $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%$p3%$p4%' AND `adpost`>0 ");
 	$query->execute();
     $kanals = $query->fetchAll(PDO::FETCH_ASSOC);

if(empty($kanals[0])){
    $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%$p3%' AND `adpost`>0 ");
    $query->execute();
    $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
  }

  if(empty($kanals[0])){
    $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%' AND `adpost`>0 ");
    $query->execute();
    $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
  }

  if(empty($kanals[0])){
    $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%' AND `adpost`>0 ");
    $query->execute();
    $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
    }
  } elseif (isset($p3)) {

    
        $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%$p3%' AND `adpost`>0 ");
        $query->execute();
        $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
      
    
      if(empty($kanals[0])){
        $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%' AND `adpost`>0 ");
        $query->execute();
        $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
      }
    
      if(empty($kanals[0])){
        $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%' AND `adpost`>0 ");
        $query->execute();
        $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
      }

  } elseif (isset($p2)) {
  
        $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%$p2%' AND `adpost`>0 ");
        $query->execute();
        $kanals = $query->fetchAll(PDO::FETCH_ASSOC);

    
      if(empty($kanals[0])){
        $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%' AND `adpost`>0 ");
        $query->execute();
        $kanals = $query->fetchAll(PDO::FETCH_ASSOC);
      }
}  else {

    $query = $connect->prepare("SELECT `id`, `login`, `protema`, `protext`, `userfoto`, `mylist`, `nummoi`, `datapost`, `prosmot` FROM lpusers WHERE `protema` LIKE '%$p1%' AND `adpost`>0 ");
    $query->execute();
    $kanals = $query->fetchAll(PDO::FETCH_ASSOC);

}

if(empty($kanals[0])){$kanals['result']='no';}


$kanals = json_encode($kanals);

echo $kanals;

?>