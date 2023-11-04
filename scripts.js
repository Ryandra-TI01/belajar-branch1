const hapus = document.querySelectorAll('.close');
const bungkus = document.querySelector('.telp');
console.log(bungkus.parentElement);
// hapus.addEventListener('click',function() {
//     bungkus.style.display = 'none';
// });


for (let i = 0; i < hapus.length; i++) {
    hapus[i].addEventListener('click',function() {
        hapus[i].parentElement.style.display = 'none';
        console.log(hapus[i].previousElementSibling);
        console.log('apa');
    });
    
};