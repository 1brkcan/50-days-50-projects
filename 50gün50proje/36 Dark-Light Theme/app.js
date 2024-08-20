const icon = document.getElementById('icon');

icon.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){ //! CONTAINS VAR MI anlami katar
        icon.classList = "fa-solid fa-sun fa-2x";
    }
    else{
        icon.classList = "fa solid fa-moon fa-2x";
    }



    //! Local storage atma

    localStorage.setItem('theme', document.body.classList); //! bu kisim key yani anahtar kismi 
    localStorage.setItem('icon', icon.classList)

});

if(localStorage.getItem('theme')){
    document.body.classList.add(localStorage.getItem('theme'));
    icon.classList = localStorage.getItem('icon');
}






