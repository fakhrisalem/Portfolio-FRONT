const words = document.querySelectorAll('.word');
const colorPicker = document.getElementById('colorPicker');
const colorOptions = document.getElementById('colorOptions');
const colorDivs = colorOptions.querySelectorAll('div');

words.forEach((word, index) => {
    setTimeout(() => {
        word.classList.add('visible');
    }, index * 1000); 
});


colorPicker.addEventListener('click', () => {
    colorOptions.style.display = colorOptions.style.display === 'none' ? 'block' : 'none';
});


colorDivs.forEach(div => {
    div.addEventListener('click', () => {
        const color = div.getAttribute('data-color');
        document.body.style.color = color;
        nav.querySelectorAll('a').forEach(a => {
            a.style.color = color;
        });
        colorOptions.style.display = 'none'; 
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('show');
});


const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


