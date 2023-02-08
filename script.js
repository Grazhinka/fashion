const clothes1=['','платье золото.png', 'бордовое платье.png','фиолетовое платье.png','розовое платье.png','зеленое платье.png','','белая юбка.png','белые брюки.png', 'чёрная юбка.png', 'розовые штаны.png'];
const clothes2=['','пиджак белый.png', 'розовый пиджак.png', 'топ.png', 'рубашка.png', 'белая куртка.png'];
const clothes3=['','сапоги чёрные.png','туфли.png', 'ботинки.png'];

let i=0;
let array=[0,0,0]
  //------------------------------------------------------------------------------

  const input = document.querySelector('.girls').querySelectorAll("input");
  input.forEach(inp=>{
    inp.addEventListener("click", ()=>{
    if( document.querySelector('.girl1I').checked){
      document.querySelector('.girl1').style.display = 'block'
    }
    else{
      document.querySelector('.girl1').style.display = 'none'
    }


    if( document.querySelector('.girl2I').checked){
      document.querySelector('.girl2').style.display = 'block'
    }
    else{
      document.querySelector('.girl2').style.display = 'none'
    }
  })})

  //------------------------------------------------------------------------------

  let divDress1 = document.querySelector('.divDress1').querySelectorAll('input');
  divDress1.forEach(dress=>
  dress.addEventListener('click',calculate))

  function calculate(){
    let clothes=[];
    for(i=0;i<divDress1.length;i++)
    {
        if(divDress1[i].checked) 
        {
          clothes=clothes1[i]
        }
    }
    document.querySelector('.dress1').src=clothes;
  }
  //------------------------------------------------------------------------------
  
  let divDress2 = document.querySelector('.divDress2').querySelectorAll('input');
  divDress2.forEach(dress=>
  dress.addEventListener('click',calculate2))
  
  function calculate2(){
      let clothes=[];
      for(i=0;i<divDress2.length;i++)
      {
          if(divDress2[i].checked) 
          {
            clothes=clothes2[i]
          }
      }
      document.querySelector('.dress2').src=clothes;
    }

  //------------------------------------------------------------------------------
  
  let divDress3 = document.querySelector('.divDress3').querySelectorAll('input');
  divDress3.forEach(dress=>
  dress.addEventListener('click',calculate3))
  
  function calculate3(){
      let clothes=[];
      for(i=0;i<divDress3.length;i++)
      {
          if(divDress3[i].checked) 
          {
            clothes=clothes3[i]
          }
      }
      document.querySelector('.dress3').src=clothes;
    }

  //------------------------------------------------------------------------------

    let divDressAll = document.querySelector('form').querySelectorAll('input');
    divDressAll.forEach(dress=>
    dress.addEventListener('click',calculate4))

    function calculate4(){
        if(divDressAll[8].checked && divDressAll[12].checked && divDressAll[19].checked) 
        {
          document.querySelector('.text').textContent=' "Верно! Одно из любимых сочетаний" ';
          array[0]=1;
        }

        else if(divDressAll[1].checked && divDressAll[11].checked && divDressAll[19].checked) 
        {
          document.querySelector('.text').textContent='"Верно!Это платье и туфли - мои любимые"';
          array[1]=1;
        }

        else if(divDressAll[5].checked && divDressAll[18].checked && divDressAll[11].checked) 
        {
          document.querySelector('.text').textContent='"Верно! Люблю мини c высокими сапогами"';
          array[2]=1;
        }

        else
        {
          document.querySelector('.text').textContent=' "Не совсем то" ';
        }
        const points=array.map(i=>x+=i, x=0).reverse()[0]

        document.querySelector('.points').textContent= points;
        if(points===3){
          const qq=document.querySelectorAll('.none')
          qq.forEach(q=>{
            q.style.display='none'
          })


          document.querySelector('.textVictory').style.display='block';
          document.querySelector('.all').classList.add('change');
        }
      }


let btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
  document.querySelector('.displayBtn').style.display='block'
})

