const btn_expand = document.querySelector('#btn_navbar_expand');
const expand_menu = document.querySelector('#navbar_expand');

btn_expand.addEventListener('click', () => {
    if(expand_menu.classList.contains('hidden')){
        expand_menu.classList.remove('hidden');
    }else{
        expand_menu.classList.add('hidden');
    }
})