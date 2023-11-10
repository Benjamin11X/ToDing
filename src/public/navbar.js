const btn_expand = document.querySelector('#btn_navbar_expand');
const expand_menu = document.querySelector('#navbar_expand');

btn_expand.addEventListener('click', () => {
    if(expand_menu.classList.contains('hidden')){
        expand_menu.classList.remove('hidden');
        btn_expand.firstChild.classList.remove('fa-bars');
        btn_expand.firstChild.classList.add('fa-xmark');
    }else{
        expand_menu.classList.add('hidden');
        btn_expand.firstChild.classList.remove('fa-xmark');
        btn_expand.firstChild.classList.add('fa-bars');
    }
})