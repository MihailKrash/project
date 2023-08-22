// Данная капча генерируется в зашифрованном виде, но при показе на экране лишние символы капчи скрыты при помощи размера шрифта 2px
// Если робот-взломщик скопирует эту капчу из кода страницы, так как она ней отображается, то это будет ложная строка


class Capcha {
  constructor(){
   
  }
  static sekret;            // будет содержать сгенерированную капчю (string) в зашифрованном виде (для защиты от копирования)
  flag2='';                 // флаг активности капчи
  static  setflag(){        // метод устанавливает флаг
    this.flag2='on';
  };
  static  delflag(){        // метод сбрасывает флаг
    this.flag2='';
  };
  static gen(roditel) { // roditel - блок в который будет добавлена капча
        let maincapchadiv = document.createElement('div');
        if(this.flag2=='on'){document.getElementById(roditel).replaceChildren()} // очищаем родительский блок капчи если он не пустой
        document.getElementById(roditel).appendChild(maincapchadiv);

    let printcapcha = ()=> { // функция генерации капчи
        let capchapic = document.createElement('div');
        capchapic.setAttribute('id','capchapicid');
    // внутри родителя 'maincapchadiv' вставляем 'capchapic' перед определенным элементом
        maincapchadiv.insertBefore(capchapic, document.getElementById('vvod'));
        maincapchadiv.setAttribute('id','capchaBlock');
        maincapchadiv.style.display="flex";
        maincapchadiv.style.alignItems="center";
        maincapchadiv.style.marginTop="20px";
        maincapchadiv.style.padding="5px";
        maincapchadiv.style.borderRadius="4px";
        maincapchadiv.style.backgroundColor="#125655";
        maincapchadiv.style.width="350px";
        capchapic.style.width="180px";
        capchapic.style.height="50px";
        capchapic.style.position="relative";
        capchapic.style.margin="0 10px";
        capchapic.style.borderRadius="5px";

    // функция генерации разноцветного фона

    let genfon = ()=> {
        for(let c=0;c<4;c++) { // 'grey','green','red','black','white','blue','yellow'
            let massColor = ['green','white','white','black','white','blue','white'];
            for(let i=0;i<6;i++){
                let j='lineId'+i;
                let line = document.createElement('div');
                capchapic.appendChild(line);
                line.setAttribute('id', j);
                
                line.style.height="2px";
                let index = Math.floor(Math.random()*massColor.length);
                line.style.backgroundColor=massColor[index];
                massColor.splice(index,1);
                }
              }
            }

    genfon();
            
   

        function genkod(){let nabor = 'QWERTYUIOPASDFGHJKLZXCVBNM'; // допустимые символы для генерации капчи
    let key = '';
    for (let i = 0; i < 7; i++) {
        key = key + nabor.charAt(Math.ceil(Math.random() * 25));
    }
    return key;}
            // формирование шифра
        let capcha=genkod();
        let n1 = capcha.charAt(3);
        let k1 = capcha.charAt(1);
        let k21 = capcha.charAt(5);
        let n2 = capcha.charAt(6);
        let k3 = capcha.charAt(4);
        let k14 = capcha.charAt(2);
    
        let l = document.createElement('p');
        capchapic.appendChild(l);
        l.innerHTML=n1;l.style.fontSize="8px";l.style.color="black";l.style.fontWeight="bold";
        l.style.position="absolute";l.style.left="1px";l.style.top="30px";

        let s = document.createElement('p');
        capchapic.appendChild(s);
        s.innerHTML=k1;s.style.fontSize="45px";s.style.color="black";s.style.fontWeight="bold";
        s.style.position="absolute";s.style.left="1px";s.style.top="-5px";
        let p = document.createElement('p');
        capchapic.appendChild(p);
        p.innerHTML=k21;p.style.fontSize="45px";p.style.color="black";p.style.fontWeight="bold";
        p.style.position="absolute";p.style.left="40px";p.style.top="-7px";
        this.sekret=[k1,k21,k3,k14];
        let f = document.createElement('p');
        capchapic.appendChild(f);
        f.innerHTML=n2;f.style.fontSize="8px";f.style.color="black";f.style.fontWeight="bold";
        f.style.position="absolute";f.style.left="40px";f.style.top="30px";

        let v = document.createElement('p');
        capchapic.appendChild(v);
        v.innerHTML=k3;v.style.fontSize="45px";v.style.color="blue";v.style.fontWeight="bold";
        v.style.position="absolute";v.style.left="80px";v.style.top="-6px";
        let d = document.createElement('p');
        capchapic.appendChild(d);
        d.innerHTML=k14;d.style.fontSize="45px";d.style.color="green";d.style.fontWeight="bold";
        d.style.position="absolute";d.style.left="120px";d.style.top="-6px";

        let blockfon = document.createElement('div');
        capchapic.appendChild(blockfon);
        blockfon.style.position="absolute";
        blockfon.style.left="-5px";
        blockfon.style.top="-5px";
        blockfon.style.width="190px";
        blockfon.style.height="60px";

    } // конец описания функции printcapcha

    let reset = document.createElement('input');
    reset.setAttribute('type', 'image');
    reset.setAttribute('src', 'files/reset.png');
    reset.setAttribute('id', 'reset');
    reset.style.boxShadow="2px 0px 2px grey";

    reset.style.height="auto";
    reset.style.width="auto";

    reset.style.margin="0px";
    reset.style.fontSize="20px";
    reset.style.borderRadius="20px";

    reset.style.color="black";

    reset.style.border="1px solid #0084fe";
    maincapchadiv.prepend(reset);

    printcapcha();

    let vvod = document.createElement('input');
    vvod.setAttribute('type', 'text');
    vvod.setAttribute('id', 'vvod');
    vvod.setAttribute('placeholder', '> код');
    maincapchadiv.appendChild(vvod);
    vvod.style.width="85px";
    vvod.style.marginLeft="8px";
    vvod.style.fontSize="20px";

    reset.onclick = function(){
        document.getElementById('capchapicid').replaceChildren();
		document.getElementById('capchapicid').remove();	
        printcapcha();	
    }
    return this.sekret;
  } // конец метода "gen"

  
} // конец всего объекта "Capcha"

export default Capcha;