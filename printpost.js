import ajaxsend from './ajaxrequest.js';
import User from './user.js';
import addComment from './addcomment.js';
import userProfile from './userprofile.js';

let indikator=0;
let massdel=[0];

function dataEdit(data){
    const mass = data.split('-');
    const result = mass[0]+'.'+mass[1]+'.'+mass[2]+'('+mass[3]+'.'+mass[4]+')';
    return result;
}

        // функция преобразования обычной ссылки на страницу с (youtube видео) в формат для отображения в фрейме

function urlCut(url){   //='https://www.youtube.com/watch?v=PvQgt03IPfw
    const start = url.indexOf('.com/')+5;
    const end = url.indexOf('=')+1;
    let result = url.substring(start, end); 
    result = url.replace(result, '');
    let mass = result.split('.com');
    result = mass[0]+'.com/embed'+mass[1];
  
    return result;
}

function printPost(postBody, roditelId, pokazpost=0){  // mainpostsdiv

       if(pokazpost==0){postBody.reverse()}
     
if(document.getElementById('mainpostsdiv')){
    document.getElementById('mainpostsdiv').replaceChildren(); // удаление перед выводом
    document.getElementById('mainpostsdiv').remove();
}
    const roditel = document.createElement('div');
    roditel.setAttribute('id', 'mainpostsdiv');
    roditel.style.backgroundImage="url('../files/fffffff.jpg')";
    roditel.style.margin='0px';
    roditel.style.padding='0px';
    document.getElementById('content').appendChild(roditel);
    document.getElementById('content').style.padding='0px';

const print = (postBody, i)=>{  // функция для цикла вывода постов
    const mainPostDiv = document.createElement('div');
    const mainPostDiv2 = document.createElement('div');
    mainPostDiv2.setAttribute('id', 'div'+postBody[i]['id']);
    mainPostDiv2.setAttribute('name', 'div'+postBody[i]['userid']);

    mainPostDiv.style.border="1px solid #393939"; 
    mainPostDiv.style.borderRadius="4px";
    mainPostDiv2.style.padding="5px 0px";

    mainPostDiv.style.backgroundColor="#262626";       //  ФОН
    mainPostDiv.style.width="100%";

const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id','zz'+postBody[i]['userid']);
    contentDiv.setAttribute('class','contentDiv');
    contentDiv.style.width='100%';

const buttonsDiv = document.createElement('div');       
    buttonsDiv.setAttribute('id', 'postbuts'+postBody[i]['id']);
    buttonsDiv.setAttribute('name', postBody[i]['userid']);
    buttonsDiv.style.display="flex";
    buttonsDiv.style.alignItems="center";
    buttonsDiv.style.justifyContent="end";

const div1 = document.createElement('div');
     div1.style.display="flex";
     div1.style.alignItems="center";
     div1.style.flexWrap="wrap";

const div2 = document.createElement('div');
        div2.style.width="100%";
const dataPost = document.createElement('span');
       
            // динамическое создание ссылки на страницу канала
const userName = document.createElement('a');
        userName.setAttribute('id', 'i'+postBody[i]['username']);   
        userName.setAttribute('class', 'usernamelink');
        userName.setAttribute('href', 'https://vsena.ru/'+postBody[i]['username'].toLowerCase());

const tema = document.createElement('h2');
    tema.style.padding='0px';
    tema.style.margin='0px auto';
       
    dataPost.innerHTML=postBody[i]['data'].slice(0, 10);

    userName.innerHTML=postBody[i]['username'];
    tema.innerHTML=postBody[i]['tema'];
    dataPost.style.color="#a3a3a3";
    dataPost.style.marginRight="10px";
    dataPost.style.textShadow='2px 2px 2px black';

    userName.style.fontSize="16px";
    userName.style.color="#b6ddee";
    userName.style.letterSpacing="2px";
    userName.style.fontFamily="Arial, sans-serif";
    userName.style.textShadow='2px 2px 2px black';

    tema.style.fontSize="18px";
    tema.style.color="#aaedd1";
    tema.style.fontFamily="Courier, monospace";
    tema.style.fontWeight="200";
    tema.style.textShadow='2px 2px 2px black';

  mainPostDiv.style.display='block';

    const edit = document.createElement('input');
        edit.setAttribute('type', 'button');
        edit.setAttribute('value', '>');
        edit.style.backgroundColor="#c3f0bf";
        edit.style.borderRadius="5px";
        edit.style.fontSize="16px";
        edit.style.fontWeight="bold";
        edit.style.margin="auto 5px";
        edit.style.marginBottom="5px";
        edit.style.paddingLeft="13px";
        edit.style.paddingRight="9px";
        edit.style.height='30px';
        edit.style.border="1px solid grey";

    const del = document.createElement('input');
        del.setAttribute('type', 'button');
        del.setAttribute('value', 'X');
        del.style.backgroundColor="#f9e9f1";
        del.style.fontSize="16px";
        del.style.fontWeight="bold";
        del.style.height='30px';
        del.style.borderRadius="5px";
        del.style.margin="auto 5px";
        del.style.padding="0px 10px";
        del.style.border="1px solid grey";

const fotoDiv=document.createElement('div');
    fotoDiv.style.display="flex";
    fotoDiv.style.backgroundSize="cover";
    fotoDiv.style.border="1px solid #393939";
    fotoDiv.style.borderRadius="4px";
    fotoDiv.style.justifyContent="center";
    fotoDiv.style.alignItems="center";
    fotoDiv.style.width="100%";
    fotoDiv.style.backgroundColor="black";

const noFoto = document.createElement('p');
    noFoto.innerHTML="без фото";
    noFoto.style.color="grey";
    noFoto.style.marginLeft="auto";
    noFoto.style.marginRight="auto";

const bottomBlock = document.createElement('section');
    bottomBlock.style.border="1px solid #393939";
    bottomBlock.style.borderTop="1px solid #262626";
    bottomBlock.style.marginTop="-1px";
    bottomBlock.style.borderRadius="0px 0px 4px 4px";
    bottomBlock.style.backgroundColor='#262626';     //  ФОН
    bottomBlock.style.padding="7px";

const contDiv1 = document.createElement('div');

    contDiv1.style.display='flex';
    contDiv1.style.alignItems='center';

    contDiv1.setAttribute('class', 'contDivs');    //    contDiv1.setAttribute('id', 'contDivs');
const contDiv2 = document.createElement('div');

const postText = document.createElement('p');
    postText.setAttribute('id','t'+postBody[i]['id']);
    postText.innerHTML=postBody[i]['post'];
    postText.style.color='white';
    postText.style.fontSize='18px';
    postText.style.fontFamily="Courier, monospace";
    postText.style.paddingLeft="10px";
    postText.style.textShadow='2px 2px 2px black';

    mainPostDiv2.style.border='1px solid black';
    mainPostDiv2.style.margin='5px';

const videoDiv = document.createElement('div');

const video = document.createElement('iframe');
    video.setAttribute('src', urlCut(postBody[i]['youtubeurl']));
    video.setAttribute('height','350');
    video.setAttribute('width','100%');
    video.setAttribute('title','Video');
    video.setAttribute('frameborder','0');
    video.setAttribute('allowfullscreen','allowfullscreen');

bottomBlock.appendChild(contDiv1);
contDiv1.style.flexWrap='wrap';
contDiv1.style.justifyContent='center';
contDiv1.style.alignContent='center';

tema.style.width='100%';
            // Создание и настройка отображения картинки поста
const imagePost = document.createElement('img');
    imagePost.setAttribute('src', './'+postBody[i]['file']);
    imagePost.setAttribute('class','images');
    imagePost.setAttribute('id', postBody[i]['file']);
    if(postBody[i]['tema']){
        imagePost.setAttribute('alt', postBody[i]['tema'])
} else if (postBody[i]['post']){
    imagePost.setAttribute('alt', postBody[i]['post'].slice(0,80))
} else {
    imagePost.setAttribute('alt', 'Блог '+postBody[i]['username'])}
    imagePost.style.borderRadius='6px';
    imagePost.style.margin='2px';

    if(postBody[i]['youtubeurl']){contDiv1.appendChild(video)}

    if(postBody[i]['file']){
        fotoDiv.appendChild(imagePost);
        contDiv1.appendChild(fotoDiv);


        imagePost.onload = function(event){
            console.log('ширина', imagePost.width)
            console.log('высота', imagePost.height)
              
            let newWidth='';
            let hi1='320';
            let hi2='420';
      
                if(window.innerWidth<1100){newWidth=360;hi1='270';hi2='370'}
           
                
            if(imagePost.width>imagePost.height){
                imagePost.setAttribute('width', newWidth);
                imagePost.setAttribute('height', hi1);
            } else {
                imagePost.setAttribute('width', newWidth);
                imagePost.setAttribute('height', hi2);
            }
        }
    } 


const comBlock = document.createElement('div');

const comDiv1 = document.createElement('div');  // блок для ссылки
const comDiv2 = document.createElement('div');
    comDiv1.style.display="flex";
    comDiv1.style.alignItems="center";
    if(postBody[i]['posturl']){
    comDiv1.style.borderBottom="1px solid #444444";
    }
    comDiv1.style.wordBreak='break-all';
    comDiv1.style.flexWrap='wrap';

const nameS = document.createElement('p');
const ss = document.createElement('p');
const metka = document.createElement('p');
    metka.style.width='110px';

const divForLike =  document.createElement('div');
    divForLike.style.textAlign='center';
    divForLike.style.marginBottom='6px';
const divForComm =  document.createElement('div');
const divForReddel =  document.createElement('div');
const divForComlike =  document.createElement('div');
    divForComlike.style.display='flex';
    divForComlike.style.alignItems='center';

    divForReddel.style.width='100px';
    divForReddel.style.display='none';

if(postBody[i]['posturl']){
    nameS.innerHTML=postBody[i]['nameposturl'];
    ss.innerHTML=postBody[i]['posturl'];
    metka.innerHTML='Ссылка :';
    nameS.style.color='#f0ebc2';
    nameS.style.marginRight='10px';
    nameS.style.fontSize='20px';
    ss.style.fontSize='18px';
    ss.style.color='#b9deef';
    ss.style.marginRight='10px';
    metka.style.color='#b9deef';
    metka.style.marginRight='10px';
    metka.style.fontSize='16px';
    }
  
    contDiv1.appendChild(postText);

if(!postBody[i]['youtubeurl']&&!postBody[i]['post']&&!postBody[i]['file']&&!postBody[i]['tema']){
    bottomBlock.style.display='none';
}

    roditel.appendChild(mainPostDiv2);
    mainPostDiv2.appendChild(mainPostDiv);

    mainPostDiv.appendChild(contentDiv);

    buttonsDiv.appendChild(divForComlike);

    divForComlike.appendChild(divForLike);
    divForComlike.appendChild(divForComm);
    buttonsDiv.appendChild(divForReddel);


const addComm = document.createElement('input');
    addComm.setAttribute('type', 'button');
    addComm.setAttribute('value', 'Ответы'+'('+postBody[i]['col']+')');  // изменено... 'Ответы'+'('+otvet.col+')');
    addComm.setAttribute('class', 'addcomment');
    addComm.setAttribute('id', postBody[i]['id']);
    addComm.style.border='1px solid #3c3c3c';
    addComm.style.backgroundColor='#434343';       
    addComm.style.color='#e9f9f8';
    addComm.style.fontSize='16px';
    addComm.style.padding='3px 5px';

    addComm.style.marginBottom='3px';
    addComm.style.marginTop='3px';
    addComm.style.height='30px';
    addComm.style.borderRadius='7px';

        divForComm.appendChild(addComm);   // добавления кнопки комментария

    // берем айдишники лайков поста и проверяем ставил ли лайк этот пользователь этому посту    
    const massid = postBody[i]['likeid'].split('&');
    let flag = 0;
    const userIdLike=sessionStorage.getItem('id');

    for(let i=0;i<massid.length;i++){
        if(massid[i]==userIdLike){flag=1}
    }
    if(flag!=0){
            const likeText = document.createElement('p');
            likeText.innerHTML='&#10084 '+postBody[i]['likecol']+' ';
            likeText.style.color='#f1c8eb';
            likeText.style.marginRight='10px';
            divForLike.appendChild(likeText);
    } else {

let likes = document.createElement('span');
        likes.innerHTML = '&#10084;'+' ';
        likes.style.color='#f1c8eb';
        likes.setAttribute('id', 'lik1'+postBody[i]['id']);
let likesText = document.createElement('span');
        likesText.innerHTML = postBody[i]['likecol'];
        likesText.style.color='white';
        likesText.style.marginRight='10px';
        likesText.setAttribute('id', 'lik2'+postBody[i]['id']);
    const like = document.createElement('input');
    like.setAttribute('type', 'button');
    like.setAttribute('class', 'likebut');
    like.setAttribute('id', 'like'+postBody[i]['id']);
    like.setAttribute('value', '+');
    like.style.border='1px solid #262626';
    like.style.backgroundColor='black'; // #212121
    like.style.color='#f1c8cd';
    like.style.fontSize='22px';
    like.style.fontWeight='bold';
    like.style.fontFamily='Courier, monospace';
    like.style.padding='3px 7px';
    like.style.margin='auto 10px';
    like.style.height='30px';
    like.style.borderRadius='50px';
    if(sessionStorage.getItem('ur')){divForLike.appendChild(like)};
    divForLike.appendChild(likes);
    divForLike.appendChild(likesText);
    }

    if(!sessionStorage.getItem('id')&&!postBody[i]['userid']){    
    } else if (sessionStorage.getItem('id')==postBody[i]['userid']){
        divForReddel.style.display='block';
    del.setAttribute('id',postBody[i]['id']);
    del.setAttribute('class','buttondel');
    edit.setAttribute('id','e'+postBody[i]['id']);
    edit.setAttribute('class','buttonred');

    divForReddel.appendChild(del);
    } 

    contentDiv.appendChild(div1);
    contentDiv.appendChild(div2);

    div1.appendChild(dataPost);
    div1.appendChild(userName);

    div2.style.wordBreak='break-all';
    div1.style.wordBreak='break-all';
    bottomBlock.style.wordBreak='break-all';
    
    mainPostDiv2.appendChild(bottomBlock);

    mainPostDiv2.appendChild(comBlock);  // добаление нижнего блока с сылкой и комментарием
    comBlock.appendChild(comDiv1);
    comBlock.appendChild(comDiv2);

    comDiv1.appendChild(metka);
    comDiv1.appendChild(nameS);
    comDiv1.appendChild(ss);


   contDiv1.prepend(tema);
   contDiv1.append(buttonsDiv);

}  // конец функции print (которая выводит посты на экран)


// myPostsPanel, userprofile
// если страница канала или мои посты в аккоунте (добавляем кнопку переключения контент/новости если нет то выводим все посты)

if (sessionStorage.getItem('page')=='myPostsPanel'||sessionStorage.getItem('page')=='userprofile'){

    let nomerNews=0;
    let nomerCont=0;
    
    for(let i=0;i<postBody.length;i++){
        if(postBody[i].kuda==0){nomerNews++}else{nomerCont++}
    }


    if(document.getElementById('contNewsBut')){document.getElementById('contNewsBut').remove()}
    if(document.getElementById('contBut')){document.getElementById('contBut').remove()}


    const contNewsBut = document.createElement('input');
    contNewsBut.setAttribute('type', 'button');
    contNewsBut.setAttribute('id', 'contNewsBut');
    contNewsBut.setAttribute('value', 'Новости');
    contNewsBut.style.border='1px solid grey';
    contNewsBut.style.borderRadius='7px';
    contNewsBut.style.fontSize='20px';
    document.getElementById(roditelId).before(contNewsBut);

    const contBut = document.createElement('input');
    contBut.setAttribute('type', 'button');
    contBut.setAttribute('id', 'contBut');
    contBut.setAttribute('value', 'Контент');
    contBut.style.border='1px solid grey';
    contBut.style.borderRadius='7px';
    contBut.style.fontSize='20px';
    contBut.style.margin='0px 10px';
    document.getElementById(roditelId).before(contBut);


                    //----------------------------------------------------------------//

       // !!! ДАЛЕЕ ДО 645 СТРАНИЦЫ ИДЕТ СТРАШНЫЙ МАЛОПОНЯТНЫЙ КОД ДЛЯ ПРОДАКШЕНА КОНЕШНО ТАК ПИСАТЬ НЕ СТОИТ (сайт писался для себя)            
let index=0;
let start=15;
let stop=0;

document.getElementById('mainpostsdiv').replaceChildren(); // удаление перед выводом

start = postBody.length;
let flagKontent = 0;
// бесконечная подгрузка постов при прокрутке...
for(let i=0;i<start;i++){if(postBody[i].kuda==1){
    print(postBody, i)
    flagKontent=1
    contNewsBut.style.backgroundColor='black';
    contNewsBut.style.color='white';
    }
}
if(flagKontent==0){
    for(let i=0;i<start;i++){if(postBody[i].kuda==0){print(postBody, i);}}
    contNewsBut.style.backgroundColor='white';
    contNewsBut.style.color='black';
    contBut.style.backgroundColor='black';
    contBut.style.color='white';
} 
index = start;

const printScrollPost = ()=> {
let obj = document.getElementById('footer').getBoundingClientRect();
let sHeight = document.documentElement.clientHeight;

if(flagKontent==1){
                             
if(obj.top<sHeight&&postBody[index]&&stop!=1&&postBody[index].kuda==1){

    print(postBody, index)
    index=index+1;
} 

} else{

    if(obj.top<sHeight&&postBody[index]&&stop!=1&&postBody[index].kuda==0){

        print(postBody, index)
        index=index+1;
    } 

}

}
window.addEventListener('scroll', printScrollPost)

if(flagKontent==1){
window.addEventListener("touchmove", (event) => {   // Подгрузка постов для телефона
 
    if(postBody[index].kuda==1){
    print(postBody, index)
    index=index+1;
    } 
}
)// конец условия при скроле на телефоне
} else {

    window.addEventListener("touchmove", (event) => {   // Подгрузка постов для телефона
 
        if(postBody[index].kuda==0){
        print(postBody, index)
        index=index+1;
        } 
    }
    )
}

//----------------------------------------------------------------//

    contBut.onclick = function(){     // НАЖАЛИ НА КНОПКУ КОНТЕНТ
  
        contNewsBut.style.backgroundColor='black';
        contNewsBut.style.color='white';
        contBut.style.backgroundColor='white';
        contBut.style.color='black';

            //----------------------------------------------------------------//
let index=0;
let start=15;
let stop=0;

document.getElementById('mainpostsdiv').replaceChildren(); // удаление перед выводом

start = postBody.length;
console.log('---------------- ДЛИННА МАССИВА ------------', postBody.length);
// бесконечная подгрузка постов при прокрутке...
for(let i=0;i<start;i++){
    console.log('>>>>>>>>>>', postBody[i].id, massdel);

    for(let i=0;i<postBody.length;i++){  // удаляем из массива постов удаленный пост 
        for(let j=0;j<massdel.length;j++){
           if(postBody[i]['id']==massdel[j]){postBody.splice(i, 1)}
            }
        }

    if(postBody[i].kuda==1&&postBody[i].id!=massdel){print(postBody, i)}} 
index = start;

const printScrollPost = ()=> {
let obj = document.getElementById('footer').getBoundingClientRect();
let sHeight = document.documentElement.clientHeight;


                             
if(obj.top<sHeight&&postBody[index]&&stop!=1&&postBody[index].kuda==1&&postBody[index].id!=massdel){

    print(postBody, index)
    index=index+1;
}

}
window.addEventListener('scroll', printScrollPost)
//----------------------------------------------------------------//

        }
contNewsBut.onclick = function(){    // НАЖАЛИ НА КНОПКУ НОВОСТИ
          
            contNewsBut.style.backgroundColor='white';
            contNewsBut.style.color='black';
            contBut.style.backgroundColor='black';
            contBut.style.color='white';

        //----------------------------------------------------------------//
let index=0;
let start=15;
let stop=0;

document.getElementById('mainpostsdiv').replaceChildren(); // удаление перед выводом
start=postBody.length;stop=1;

// бесконечная подгрузка постов при прокрутке...

for(let i=0;i<start;i++){
    console.log('>>>>>>>>>>', postBody[i].id, massdel);

    for(let i=0;i<postBody.length;i++){  // удаляем из массива постов удаленный пост 
        for(let j=0;j<massdel.length;j++){
           if(postBody[i]['id']==massdel[j]){postBody.splice(i, 1)}
            }
        }

    if(postBody[i].kuda==0&&postBody[i].id!=massdel){print(postBody, i)}
    console.log(postBody[i].kuda)
} 
index = start;

const printScrollPost = ()=> {
let obj = document.getElementById('footer').getBoundingClientRect();
let sHeight = document.documentElement.clientHeight;

                             
if(obj.top<sHeight&&postBody[index]&&stop!=1&&postBody[index].kuda==0&&postBody[index].id!=massdel){

    print(postBody, index)
    index=index+1;
}

}
window.addEventListener('scroll', printScrollPost)
//----------------------------------------------------------------//
        
    } 


} else {
    //----------------------------------------------------------------//
let index=0;
let start=15;
let stop=0;

document.getElementById('mainpostsdiv').replaceChildren(); // удаление перед выводом
if(start > postBody.length){start=postBody.length;stop=1;}

// бесконечная подгрузка постов при прокрутке...
for(let i=0;i<start;i++){if(postBody[i]){print(postBody, i)}} 
index = start;

const printScrollPost = ()=> {
let obj = document.getElementById('footer').getBoundingClientRect();
let sHeight = document.documentElement.clientHeight;

                 
if(obj.top<sHeight&&postBody[index]&&stop!=1){

print(postBody, index)
index=index+1;
}

}
window.addEventListener('scroll', printScrollPost)



window.addEventListener("touchmove", (event) => {   // Подгрузка постов для телефона
    let obj = document.getElementById('footer').getBoundingClientRect();
let sHeight = document.documentElement.clientHeight;
    print(postBody, index)
    index=index+1;
});

//----------------------------------------------------------------//
}


            // обработчик на кнопку добавить комментарий и переход на профиль
  document.getElementById('mainpostsdiv').addEventListener('click', function(event){
    let postUser;
        if(event.target.closest('.addcomment')){
            for(let i=0;i<postBody.length;i++){
                
                if(postBody[i]['id']==event.target.id){
                    postUser=postBody[i]['userid']
                }
            }
        if(!document.getElementById('printcomms'+event.target.id)){addComment(event.target.id, postUser)};
        }

        if(event.target.closest('.username')){   // username

         location.assign('/'+event.target.id.slice(1).toLowerCase());

         ajaxsend('/php/getuserprofile.php','post', {id:event.target.id.slice(1)}, userProfile,'application/json','mainpostsdiv');
            }

    })


   
    // обработчик на кнопку добавить ЛАЙК
    if(sessionStorage.getItem('ur')){
  document.getElementById('mainpostsdiv').addEventListener('click', function(event){
     if(event.target.closest('.likebut')){ 
     ajaxsend('/php/addlike.php','post', {postid:event.target.id.slice(4),userid:sessionStorage.getItem('id')}, (data)=>{
   
        document.getElementById(event.target.id).remove();
        const likeText = document.createElement('p');
        likeText.innerHTML='&#10084 ('+data.likecol+')';
        likeText.style.color='#f1c8eb';
        likeText.style.margin='0px auto';
       
       document.getElementById('lik2'+event.target.id.slice(4)).innerHTML=data.likecol;
     })       
     }
    })
    }


    if(sessionStorage.getItem('id')&&postBody&&!User.eventDelPost){ //если есть пользователь и его посты вешаем обработчик
        User.eventDelPost='activ';
        document.getElementById('content').addEventListener('click', function(event){ // нажали удалить
            console.log('Внимание $$$$$$$$$$$$$$$$$$',postBody);
        if(event.target.closest('.buttondel')){

                     // рисуем окно подтверждения удаления
    const fon = document.createElement('div');
    document.getElementById('mainbody').appendChild(fon);fon.setAttribute('id','fon');
    fon.style.position="fixed";fon.style.top="0px";fon.style.left="0px";fon.style.width="100%";fon.style.height="100%";
    const oknoDel = document.createElement('div');
    oknoDel.style.position="absolute";
	oknoDel.style.right="0px";
	oknoDel.style.left="0px";
	oknoDel.style.margin="0 auto";
	oknoDel.style.top="50%";
	oknoDel.style.transform="translate(0,-50%)";
	oknoDel.style.width="350px";
	oknoDel.style.height="auto";
    oknoDel.style.padding="20px";
    oknoDel.style.backgroundColor="#6dc7e8"; //  #31beec
    oknoDel.style.zIndex="10";
    oknoDel.style.borderRadius="4px";
    oknoDel.style.textAlign="center";
    oknoDel.style.boxShadow="4px 4px 4px grey";
    oknoDel.style.display="block";

    fon.appendChild(oknoDel);
 

const textDel = document.createElement('p');
const buttonsDiv = document.createElement('div');
const deletepost = document.createElement('input');
    deletepost.setAttribute('type','button');
    deletepost.setAttribute('value','ДА удалить');
    deletepost.style.border="1px solid #f5e5f7";
    deletepost.style.backgroundColor="#f2cad8";
    deletepost.style.padding="5px 15px";
    deletepost.style.margin="30px 0px";
    deletepost.style.marginBottom="0px";
    deletepost.style.marginRight="20px";
    deletepost.style.fontSize="20px";
    deletepost.style.borderRadius="7px";
    deletepost.style.boxShadow="3px 3px 3px grey";
const otmena = document.createElement('input');
    otmena.setAttribute('type','button');
    otmena.setAttribute('value','Отмена');
    otmena.style.border="1px solid #b6eca4";
    otmena.style.backgroundColor="#93ea91";
    otmena.style.padding="5px 30px";
    otmena.style.margin="30px 0px";
    otmena.style.marginBottom="0px";
    otmena.style.marginLeft="20px";
    otmena.style.marginRight="40px";
    otmena.style.fontSize="20px";
    otmena.style.borderRadius="7px";
    otmena.style.boxShadow="3px 3px 3px grey";

    buttonsDiv.style.display='flex';
    textDel.innerHTML='! Вы действительно хотите удалить этот пост?';
    textDel.style.fontSize='22px';
    textDel.style.fontWeight='bold';

    console.log('Внимание 222 $$$$$$$$$$$$$$$$$$',postBody);
    oknoDel.appendChild(textDel);
    oknoDel.appendChild(buttonsDiv);
    buttonsDiv.appendChild(otmena);
    buttonsDiv.appendChild(deletepost);
    deletepost.onclick = function() {
      
        ajaxsend('/php/delpost.php','post', {postid: event.target.id,userid:sessionStorage.getItem('id')},()=>{});
        fon.replaceChildren();
        fon.remove();
        document.getElementById('div'+event.target.id).replaceChildren();
        document.getElementById('div'+event.target.id).remove();
        console.log(postBody.length);
        console.log('%%%%%%%%%%%%<',postBody);

        massdel.push(event.target.id);

        for(let i=0;i<postBody.length;i++){  // удаляем из массива постов удаленный пост
            
        if(postBody[i]['id']==event.target.id){indikator=postBody[i]['id'];console.log('массив', postBody[i]['id']);console.log(postBody.splice(i, 1));console.log( 'цель', event.target.id);}
        }
        
        console.log('>%%%%%%%%%%%%',postBody);
        } // конец дейстивий при нажатии 'подтвердить удаление'
    otmena.onclick = function(){
        fon.replaceChildren();
        fon.remove();
    } // конец отмены удаления

                }
          }
      )  // конец обработчика кнопки дел
  }   // конец условия для прослушивания кнопки дел


  if(sessionStorage.getItem('id')&&postBody&&!User.eventRedPost){ //если есть пользователь и его посты вешаем обработчик
    User.eventRedPost='activ';
    document.getElementById('content').addEventListener('click', function(event){ // нажали редактировать

    if(event.target.closest('.buttonred')){
            console.log('КУКУ');
                 // рисуем окно подтверждения удаления
const fon3 = document.createElement('div');
document.getElementById('mainbody').appendChild(fon3);fon3.setAttribute('id','fon3');
fon3.style.position="fixed";fon3.style.top="0px";fon3.style.left="0px";fon3.style.width="100%";fon3.style.height="100%";
const oknoRed = document.createElement('div');
oknoRed.style.position="absolute";
oknoRed.style.right="0px";
oknoRed.style.left="0px";
oknoRed.style.margin="0 auto";
oknoRed.style.top="50%";
oknoRed.style.transform="translate(0,-50%)";
oknoRed.style.width="400px";
oknoRed.style.height="auto";
oknoRed.style.padding="20px";
oknoRed.style.backgroundColor="#6dc7e8"; //  #31beec
oknoRed.style.zIndex="10";
oknoRed.style.borderRadius="4px";
oknoRed.style.textAlign="center";
oknoRed.style.boxShadow="4px 4px 4px grey";
oknoRed.style.display="block";

fon3.appendChild(oknoRed);

const textRed = document.createElement('p');
const buttonsDiv = document.createElement('div');
const otpravit = document.createElement('input');
otpravit.setAttribute('type','button');
otpravit.setAttribute('value','Отправить');
otpravit.style.border="1px solid #b6eca4";
otpravit.style.backgroundColor="#93ea91";
otpravit.style.padding="5px 15px";
otpravit.style.margin="30px 0px";
otpravit.style.marginBottom="0px";
otpravit.style.marginRight="20px";
otpravit.style.fontSize="20px";
otpravit.style.borderRadius="7px";
otpravit.style.boxShadow="3px 3px 3px grey";
const otmen = document.createElement('input');
otmen.setAttribute('type','button');
otmen.setAttribute('value','Отмена');
otmen.style.border="1px solid #f5e5f7"; 
otmen.style.backgroundColor="#f2cad8";
otmen.style.padding="5px 30px";
otmen.style.margin="30px 0px";
otmen.style.marginBottom="0px";
otmen.style.marginLeft="20px";
otmen.style.marginRight="40px";
otmen.style.fontSize="20px";
otmen.style.borderRadius="7px";
otmen.style.boxShadow="3px 3px 3px grey";

buttonsDiv.style.display='flex';
buttonsDiv.style.justifyContent='center';
if(!document.getElementById('t'+event.target.id.slice(1)).textContent){ 
textRed.innerHTML='Изменять можно только расширенное описание. В остальных случаях проще, удалить пост, и создать заново, в данном посте нет расширенного описания';
textRed.style.fontSize='22px';
oknoRed.appendChild(textRed);
} else {
textRed.innerHTML='Изменять можно только расширенное описание. В остальных случаях проще, удалить пост, и создать заново.';
textRed.style.fontSize='20px';
const editTextInput = document.createElement('textarea');
editTextInput.setAttribute('id', 'editTextInput1');
editTextInput.style.width='350px';
editTextInput.style.height='170px';
editTextInput.value = document.getElementById('t'+event.target.id.slice(1)).textContent;
oknoRed.appendChild(textRed);
oknoRed.appendChild(editTextInput);
}


oknoRed.appendChild(buttonsDiv);
buttonsDiv.appendChild(otmen);

if(document.getElementById('t'+event.target.id.slice(1)).textContent){
    buttonsDiv.appendChild(otpravit);
otpravit.onclick = function() {
    ajaxsend('/php/redpost.php','post', {postid: event.target.id.slice(1),posttext: document.getElementById('editTextInput1').value},(data)=>{
        if(data){document.getElementById('t'+event.target.id.slice(1)).textContent = document.getElementById('editTextInput1').value
        fon3.replaceChildren();
        fon3.remove();
    }else{fon3.replaceChildren(); fon3.remove();}
    });

    } // конец дейстивий при нажатии 'отправить'
}
otmen.onclick = function(){
    fon3.replaceChildren();
    fon3.remove();
} // конец отмены редактирования

            }
      }
  )  // конец обработчика кнопки редактировать
} 



if(!User.eventPic){  // начало 111
    User.eventPic='activ';
  document.getElementById('content').addEventListener('click',function pickClick(event){ // клик на картинку
    if(event.target.closest('.images')){

  const fon = document.createElement('div');
    document.getElementById('mainbody').appendChild(fon);fon.setAttribute('id','fon');
    fon.style.position="fixed";fon.style.top="0px";fon.style.left="0px";fon.style.width="100%";fon.style.height="100%";
    fon.style.backgroundColor="rgba(0, 0, 0, 0.8)";
    const ScreenWidth = window.innerWidth;
   
    
    
    const bigPic = document.createElement('img');
    bigPic.setAttribute('src', './'+event.target.id);
    bigPic.setAttribute('id', 'showpick');
        fon.appendChild(bigPic);
        bigPic.style.position="absolute";
        bigPic.style.right="0px";
        bigPic.style.left="0px";
        bigPic.style.margin="0 auto";
        bigPic.style.top="50%";
        bigPic.style.transform="translate(0,-50%)";
        if(ScreenWidth<800){bigPic.style.width="100vw"}else{bigPic.style.width="auto"}
        bigPic.style.height="auto";
         fon.onclick = function(){
             fon.replaceChildren();
             fon.remove();
         }
    }
  }) // конец обработчика клика на картинку
}   // конец 111
console.log('926-----------',postBody);

}

export default printPost;