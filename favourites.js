const btnCatalog = document.querySelector('#btnCatalog');
const btnAddTitle = document.querySelector('#addTitle');
const listTitle = document.querySelector('#listAddTitle');
const btnListNotification = document.querySelector('#listNotification');
const btnNotification = document.querySelector('#notification');
const profilePersonBtn = document.querySelector('#profilePerson');
const profileListBlock = document.querySelector('#profileList');
const newChapterCardsWrap = document.querySelector('#newChapterCards');
const infoBlockWrap = document.querySelector('#infoBlock');
const inputListPrem = document.querySelector('#inputList');
const searchContainer = document.querySelector('#searchContainer'); // Replace with the appropriate selector for your search container
const popularMangaWrap = document.querySelector('#popularManga')
const newMangaWrap = document.querySelector('#MangaInfo')
const url1 = 'http://localhost:8080/title';


let btnAddTitleFalse = false
btnAddTitle.addEventListener('click', () => {
    btnAddTitleFalse = !btnAddTitleFalse
    if (btnAddTitleFalse) {
        listTitle.innerHTML = `
        <div class="listTitle">
            <ul>
                <li><a href="./addTitle.html"><img src="./icons/plus.png">  Добавить тайтл</a></li>
                 
            </ul>
        </div>
        `
    }else {
        listTitle.innerHTML = ''
    }
})



let btnNotificationFalse = false
btnNotification.addEventListener('click', () => {
    btnNotificationFalse = !btnNotificationFalse;
    
    // console.log(btnNotificationFalse);
    if (btnNotificationFalse) {
        btnListNotification.innerHTML = `
        <div class="modalTitles">
                <div class="options"> 
                    <button><img src="./icons/option.png" alt></button>
                    <h2>Уведомления</h2>
                    <button><img src="./icons/icons8-меню-50 (4).png"</button>
                </div>


            <div class="buttonsNotification">
                 
                <button id="modalChapterBtn">Главы</button>
                
                 
            </div>


            <div class="cards">
                <div class="card">
                    <div class="leftNotification">
                        <a href="./manga/manga2.pdf"><img src="./images/XXE0vhlR4bGs_250x350.jpg"</a>
                    </div>
                    <a href="">chapter</a>


                </div>

            </div>

        </div>
        `
    }else {
        btnListNotification.innerHTML = ''
    }
})

let profilePersonBtnFalse = false
profilePersonBtn.addEventListener('click', () => {
    profilePersonBtnFalse = !profilePersonBtnFalse
    if (profilePersonBtnFalse) {
        profileListBlock.innerHTML = `
        <div class="list">
                    <ul>
                         <li><a href="./favourites.html">Профиль пользователя</a></li>
                         <li><a href="./favourites.html">Мои закладки</a></li>
                         <li><a href="./favourites.html">Уведомления</a></li>
                         <li><a href="./authorization.html">Регистрация</a></li>
                               
                     </ul>
                 </div>
        `
    }else {
        profileListBlock.innerHTML = ''
    }
})



let CardTitleList = document.querySelector('#CardTitleList');
// const getLocalData = () => {
//     if (condition) {
        
//     }
// }
let favorites = []
const favouritesFunc = () => {
    favorites = JSON.parse(localStorage.getItem('favorites'))
    // favorites = JSON.parse(localStorage.getItem('favorites'))
}
favouritesFunc()
console.log(favorites);


const infoListCard = (img,ruName,enName,tom,id) => {
     return `
    <div class="card">
    <div class="LrBlock"> 
    <div class="right">
    <img src="${img}" alt="${ruName}">
    </div>
    <div class="left">
    <a href="./mangaDetails.html">${ruName}</a>
    <p>${enName}</p>
    <a href="./manga/manga2.pdf">${tom}</a>
    </div>
    </div>
    <div class="buttonBlock">
    
    <button id="FavBtnDelete" onclick="FavBtnDeleteFunc(${id})">Delete</button>
    </div>
    </div>
      `;
};
function getData () {
    let card = ''
    favorites.forEach(item => {
        card += infoListCard(item.image,item.ruName,item.enName,item.tom,item.id)
        CardTitleList.innerHTML = card
    });
}
getData()
const FavBtnDeletePerm = document.querySelector('#FavBtnDelete')
function  FavBtnDeleteFunc(id)  {
    let newFav = favorites.filter(item => item.id !== id)
    localStorage.setItem('favorites', JSON.stringify(newFav))
    console.log(newFav);
    favouritesFunc()
    getData()
}