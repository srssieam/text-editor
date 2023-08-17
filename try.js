function getValue(element){
    let x = element.value;
    return x;
}

const textAreaField = document.querySelector('#textarea-field');

document.querySelector('#bold-icon').addEventListener('click', function(){
    textAreaField.classList.toggle('font-bold')
})
document.querySelector("#italic-icon").addEventListener('click', function(){
    textAreaField.classList.toggle('italic')
})
document.querySelector("#underline-icon").addEventListener('click', function(){
    textAreaField.classList.toggle('underline')
})
document.querySelector('#left-icon').addEventListener('click', function(){
    textAreaField.classList.add('text-start')
    textAreaField.classList.remove('text-center')
    textAreaField.classList.remove('text-end')
    textAreaField.classList.remove('text-justify')
})
document.querySelector('#center-icon').addEventListener('click', function(){
    textAreaField.classList.add('text-center')
    textAreaField.classList.remove('text-start')
    textAreaField.classList.remove('text-end')
    textAreaField.classList.remove('text-justify')
})
document.querySelector('#right-icon').addEventListener('click', function(){
    textAreaField.classList.add('text-end')
    textAreaField.classList.remove('text-center')
    textAreaField.classList.remove('text-start')
    textAreaField.classList.remove('text-justify')
})
document.querySelector('#justify-icon').addEventListener('click', function(){
    textAreaField.classList.toggle('text-justify')
    textAreaField.classList.remove('text-end')
    textAreaField.classList.remove('text-center')
    textAreaField.classList.remove('text-start')  
})

const fontField= document.querySelector('#font-field');
function myaction(){
    const size = fontField.value;
    textAreaField.style.fontSize = `${size}px`;
    console.log(size)
}

fontField.addEventListener('input', myaction);
// fontField.addEventListener('keyup', myaction);

const colorField = document.querySelector('#color-field')
colorField.addEventListener('input', function(){
    const color= colorField.value;
    console.log(color);
    textAreaField.style.color = color;
})

