//SIDEBAR
const menuItems=document.querySelectorAll('.menu-item ');
//messages
const messagesNotification=document.querySelector('#message-notifications');

const messages=document.querySelector('.messages');
const messageSearch=document.querySelector('#message-search');
//Theme
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSizes=document.querySelectorAll('.choose-size span');
var root= document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

//==============sidebar==============================
//remove class from all menu items
const changeActiveItem= () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');

    })

}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id!='notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';

        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector("#notifications .notification-count").style.display='none';

        }
    })
})

//=======================MESSAGES==================================
//searches chat
const searchMessage=()=>{
    const val= messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';

        }else{
            chat.style.display='none';
        }
    }) 
}
//search chat
messageSearch.addEventListener('keyup' , searchMessage)
// hightlight message column when message is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display="none";
      setTimeout(()=>{
        messages.style.boxShadow='none';
      },2000);
});
 // theme /display customization
 const openThemeModal=()=>{
    themeModal.style.display='grid';
 }
 const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
 }
 //close modal
 themeModal.addEventListener('click',closeThemeModal);
 theme.addEventListener('click',openThemeModal);
 //==================FONTS==========================

 
 //fonts
// ================== FONTS ==========================
fontSizes.forEach(size => {
    let fontSize;
    size.addEventListener('click', () => {
      if (size.classList.contains('font-size-1')) {
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
      } else if (size.classList.contains('font-size-2')) {
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
      } else if (size.classList.contains('font-size-3')) {
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
      } else if (size.classList.contains('font-size-4')) {
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
      } else if (size.classList.contains('font-size-5')) {
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-10rem');
        root.style.setProperty('--sticky-top-right', '-33rem');
      }
      // change font size of root html element
      document.querySelector('html').style.fontSize = fontSize;
    });
  });
  //remove active class from colors
  const changeActivecolorclass =()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active'); 
    })
  } 
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primary;
        changeActivecolorclass();
        if( color.classList.contains('color-1')){
            primaryhue=0    ;

        }else if( color.classList.contains('color-2')){
            primaryhue=120;
        }else if( color.classList.contains('color-3')){
            primaryhue=57;
        }else if( color.classList.contains('color-4')){
            primaryhue=287;
        }else if( color.classList.contains('color-5')){
            primaryhue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryhue);
    });
});
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//change background color
const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customize changes from local storage
    window.location.reload();
})
Bg2.addEventListener('click',()=>{
 lightColorLightness='15%';
 whiteColorLightness='20%';
 darkColorLightness='95%';
 //addactiveclass
 Bg2.classList.add('active');
 //removeactiveclass-
 Bg1.classList.remove('active');
 Bg3.classList.remove('active');
changeBG();

});
Bg3.addEventListener('click',()=>{
 lightColorLightness='0%';
 whiteColorLightness='10%';
 darkColorLightness='95%';
 //addactiveclass
 Bg3.classList.add('active');
 //removeactiveclass-
 Bg1.classList.remove('active');
 Bg2.classList.remove('active');
changeBG();

});
