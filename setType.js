let header = document.querySelector('.dropdown-menu')
let a = header.querySelectorAll('a')
a.forEach(item => {
    item.addEventListener('click', () => {
        localStorage.setItem('mangaType', JSON.stringify(item.text))
    })
})

// console.log());
const getLocalManga = () => {
    let mangaType = localStorage.getItem('mangaType')
    return mangaType ? JSON.parse(mangaType) : []
}
console.log(getLocalManga());
// let p = JSON.parse(localStorage.getItem('mangaType'))
// console.log(p);