const button = document.getElementById('buton');


button.addEventListener('click', (e)=>{
    const clientX = e.clientX
    const clientY = e.clientY

     //! console.log(`clientX: ${clientX} - clientY: ${clientY}`);

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

     //! console.log(`buttonTop: ${buttonTop} - buttonLeft: ${buttonLeft}`);

    const xInside = clientX - buttonLeft;
    const yInside = clientY - buttonTop;


    const span = document.createElement('span');
    span.classList.add('circle');
    span.style.top = yInside + 'px';
    span.style.left = xInside + 'px';

    button.appendChild(span);

    setTimeout(()=>span.remove(), 500);




})






