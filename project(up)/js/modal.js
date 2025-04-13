const btn=document.querySelector('.footer_btn');
const close=document.querySelector('.close_btn');
const modal=document.querySelector('.modal');
const body=document.body;

btn.addEventListener('click', function() {
body.classList.add('active');
modal.classList.add('active');
});

close.addEventListener('click', function() {
    body.classList.remove('active');
    modal.classList.remove('active');
    });

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            body.classList.remove('active');
            modal.classList.remove('active'); 
        }
    });
