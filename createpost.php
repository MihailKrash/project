<?php
require_once 'connect.php';				// коннект с базой данных

// получаем данные в переменные из формы (post)
$tema = htmlspecialchars($_POST['tema']);
$post = htmlspecialchars($_POST['post']);
$userid = $_POST['userid'];
$username = $_POST['username'];

$posturl = htmlspecialchars($_POST['posturl']);
$nameposturl = htmlspecialchars($_POST['nameposturl']);
$youtubeurl = htmlspecialchars($_POST['youtubeurl']);
$kuda = $_POST['kuda'];

$key1 = htmlspecialchars($_POST['key1']);
$key2 = htmlspecialchars($_POST['key2']);
//$key3 = htmlspecialchars($_POST['key3']);
//$key4 = htmlspecialchars($_POST['key4']);
//$key5 = htmlspecialchars($_POST['key5']);
$key3 = '';
$key4 = '';
$key5 = '';


// запрашиваем из базы данных количество постов у юзера
$query = $connect->prepare("SELECT `adpost` FROM lpusers WHERE `id`='$userid'");
	$query->execute();
    $adpost = $query->fetch();
  

if($adpost['adpost']>20){   // ЛИМИТ на количество постов у юзера

  $query = $connect->prepare("SELECT `id`, `kuda` FROM posts WHERE `userid`='$userid'");
	$query->execute();
    $massid = $query->fetchAll(PDO::FETCH_ASSOC);

$minnews=0;
$mincont=0;

$min='no';

// подсчитываем количество постов со статусом 'контент' и 'новости'
  for($i=0;$i<count($massid);$i++){
    if($massid[$i]['kuda']==1){
      $masscont[$mincont]=$massid[$i]['id'];
      $mincont++;
    }
    if($massid[$i]['kuda']==0){
      $massnews[$minnews]=$massid[$i]['id'];
      $minnews++;
    }
  }

        // определяем в какой категории привышен лимит и вычисляем id поста для удаления
  if($minnews>20){$min = min($massnews);}elseif($mincont>20){$min = min($masscont);}else{$min='no';}


$postid = $min;

if($postid != 'no'){
/////////////// удаление лишнего поста /////////////////
$query = $connect->prepare("SELECT `file` FROM posts WHERE `id`='$postid '");
$query->execute();
$filename = $query->fetch();

$f = $filename['file'];

if(empty($f)){}else{    // удаление картинки поста если она есть
    unlink('../'.$f);
    $filenamev2 = substr_replace($f, '2v', 44, 0);
    $filenamev2 = substr_replace($filenamev2, '2', 14, 0);
    unlink('../'.$filenamev2);
}

$query = $connect->prepare("DELETE FROM posts WHERE `id`='$postid '");
$query->execute();

$query = $connect->prepare("UPDATE lpusers SET `adpost`=`adpost`-1 WHERE `id`='$userid' ");
$query->execute();

    }

}  /////////////// конец удаления лишнего поста /////////////////


$result['fileload']='ok';

$date = date("Y-m-d-H-i-s");					
$datepost = date("Y-m-d-H-i");


// генерация имени файла картинки
$letters = 'qwertyuiopasdfghjklzxcvbenm';
$name = '';
for($i=0;$i<10;$i++){
$name = $name.substr($letters, rand(0, 25), 1);
}

$filename = $_FILES['fileinput']['name'];

if($_FILES['fileinput']['name']){ // проверка, обработка и сохранение картинки поста

    $jpg = substr($filename, strpos($filename,'.')); 

    $filename = $name.substr($filename, strpos($filename,'.'));

    if($_FILES['fileinput']['size'] > 7*1024*1024) {$result['filesize']='error'; echo  json_encode($result);exit();}   // Проверка файла на превышение размера

    $filename = 'pics/'.'postspics/'.$date.$filename; 

    $filename2v = 'pics/'.'postspics2/'.$date.$name.'2v'.$jpg;


    $myimg = imagecreatefromjpeg($_FILES['fileinput']['tmp_name']);

    $wi = imagesx($myimg);
    $hi = imagesy($myimg);
    $resultimg1 = imagecreatetruecolor(200, 300);
    $resultimg2 = imagecreatetruecolor(300, 200);
    $resultimg3 = imagecreatetruecolor(250, 250);

    // Обрезание картинки в зависимости от ее пропорций.

    if($wi>800){
      $resultbig = imagescale($myimg, 800);
    } else {
      $resultbig = imagescale($myimg, $wi);
    }

    if(imagesy($resultbig)>1000){
      $resultbig = imagecrop($resultbig, ['x' => 0, 'y' => 50, 'width' => 800, 'height' => 850]);
    }

    if ($wi<$hi&&$wi>200) {
      imagecopyresampled($resultimg1, $myimg, 0, 0, 0, 0, 200, 300, $wi, $hi);
      imagejpeg($resultimg1, '../'.$filename2v, 70);
    } elseif ($wi>$hi&&$hi>300) {
      imagecopyresampled($resultimg2, $myimg, 0, 0, 0, 0, 300, 200, $wi, $hi);
      imagejpeg($resultimg2, '../'.$filename2v, 70);
    } else {
      imagecopyresampled($resultimg3, $myimg, 0, 0, 0, 0, 250, 250, $wi, $hi);
      imagejpeg($resultimg3, '../'.$filename2v, 70);
    }

    imagejpeg($resultbig, '../'.$filename, 80);

}


if(!$_FILES['fileinput']['name']){$filename='';}


 $query = $connect->prepare("INSERT INTO posts SET `id`=NULL, `userid`='$userid', `username`='$username', `tema`='$tema', `post`='$post', `file`='$filename' , `data`='$datepost' , `posturl`='$posturl', `nameposturl`='$nameposturl',`youtubeurl`='$youtubeurl', `key1`='$key1', `key2`='$key2',`key3`='$key3',`key4`='$key4',`key5`='$key5', `poststatus`=0, `comments`='', `col`= 0, `likeid`='', `likecol`= 0, `kuda`= '$kuda'");
	$query->execute();

   $query = $connect->prepare("UPDATE lpusers SET `datapost` = '$date', `adpost`=`adpost`+1 WHERE `id`='$userid' ");
    $query->execute();

// передаем джейсон чтобы удостоверится что код выполнился без ошибок.
   
 $ult['rsdtgdrg']='erterte';

 $ult= json_encode($ult);
   
echo $ult;

?>