/*---==== Abrir - Cerrar menu mobile: Inicio ====---*/
document.getElementById('menu').addEventListener('click',e =>{
    if(e.target.tagName == 'I'){
        if(e.target.classList.contains('icon_menu')){
            document.querySelector('.ul_links').style.transform = 'translateX(0)';
            document.querySelector('.icon_close').style = 'opacity: 1; display: block; pointer-events: unset';
        }else if(e.target.classList.contains('icon_close')) document.querySelector('.ul_links').style.transform = 'translateX(-100%)';    
    }

    if(e.target.tagName == 'A') document.querySelector('.ul_links').style.transform = 'translateX(-100%)';
});
/*---==== Abrir - Cerrar menu mobile: Final ====---*/

/*---==== Mostrar - Ocultar habilidades: Inicio ====---*/
document.getElementById('skills').addEventListener('click',e =>{
    if(e.target.tagName == 'BUTTON'){
        e.target.classList.toggle('show_text');

        const parent = e.target.parentElement;
        const child1 = parent.childNodes[5];
        const child2 = parent.childNodes[7];
        if(e.target.className == 'show_text'){
            child1.style = 'height: 225px; clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);';
            child2.childNodes[0].textContent = 'Leer menos';
        }else{
            child1.style = 'height: 0; clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);';
            child2.childNodes[0].textContent = 'Leer más';
        }
    }
});
/*---==== Mostrar - Ocultar habilidades: Final ====---*/