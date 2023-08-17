// let btnCatalog = document.querySelector('#btnCatalog')

// let url1 = 'http://localhost:8080/title'

// let btnAddTitle = document.querySelector('#addTitle')
// let listTitle = document.querySelector('#listAddTitle')
// // notification
// let btnListNotification = document.querySelector('#listNotification')
// let btnNotification = document.querySelector('#notification')

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


// let profilePersonBtn = document.querySelector('#profilePerson')
// let profileListBlock = document.querySelector('#profileList')
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





 
//поиск


//обертка
// let genersWrap = document.querySelector('#geners')
//обертка
// let newMangaWrap = document.querySelector('#MangaInfo')

// // обертка
// let popularMangaWrap = document.querySelector('#popularManga')

// //обертка
// let newChapterCardsWrap = document.querySelector('#newChapterCards')

// //обертка 
// let infoBlockWrap = document.querySelector('#infoBlock')
// let arr = []
// const getData = () => {
//     fetch(url1)
//     .then(resp => resp.json())
//     .then(data => {
//         arr = data
//         let card = ''
//         let newCardPrem = ''
//         let popularCardPrem =''
//         let newMangaPrem = ''
//         // let genersPrem = ''
//         let searchArr = ''
//         let newArr= data.slice(0,6)
//         let newCardArr = data.slice(0,100)
//         let popularCard = data.slice(0,10)
//         let newMangaDisplay = data.slice(4,10)
         
//          newArr.forEach(item => {
//             card += infoCard(item.image, item.name, item.tom, item.id, item.enName,item.type,item.tom)
//          });
//          infoBlockWrap.innerHTML = card
//          newCardArr.forEach( item => {
//             newCardPrem +=  newCard(item.image, item.name, item.enName, item.type, item.tom)
//          })
//          newChapterCardsWrap.innerHTML = newCardPrem
//          popularCard.forEach(item => {
//             popularCardPrem += popularCardFunc(item.image,item.name,item.enName,item.views)
//          })
//           popularMangaWrap.innerHTML = popularCardPrem
//         newMangaDisplay.forEach(item => { 
//             newMangaPrem += newMangaCardFunc(item.image,item.name,item.enName)
//          })
//         newMangaWrap.innerHTML =   newMangaPrem
         
//         // data.forEach(item => {
//         //     searchArr += searchBlockFunc(item.img,item.ruName)
//         // })
         
//     })
// }
// getData()

// const infoCard = (img, name, tom) => {
//     return `
//         <div class="popular_card">
//             <div class="popular_card-info">
//             <a href=""> <img src="${img}" alt="${name}"></a>
//                 <p>${tom}</p>
//             </div>
//             <a href="">${name}</a>
//         </div>
//     `;
// }
// infoCard()
 

// const newCard = (img, name, enName, type, tom) => {
//     return `
//      <div class="new_chapter-card">
//         <div class="img-bg">
//             <div class="flex">
//             <img src="${img}" alt="${name}">
//             <div class="bg">
//             <p>${type}</p>
//             </div>
//             </div>
//             <div class="new_chapter-info">
//             <a href="">${name}</a>
//             <div class="div">
//                 <a href="">${enName}</a>
//                 <p>сегодня</p>
//             </div>
//             <button><a href="">${tom}</a></button>
//             </div>
//         </div>
//      </div>
//     `;
// }
// newCard()

// const popularCardFunc = (img,name,enName,views) => {
//     return `
//     < <div class="popular_card">
//     <div class="popular_right">
//         <img src="${img}" alt="${name}">
//     </div>
//     <div class="popular_left">
//         <a href="">${name}</a>
//         <p>${enName}</p>
//         <p>${views}<img src="./icons/eye2.png" alt=""></p>
//     </div>
// </div>
//     `;
// } 
// popularCardFunc()

// const newMangaCardFunc = (img,name,enName) => {
//     return  `
//      <div class="new_card">
//     <div class="new-right">
//         <img src="${img}" alt="${name}">
//     </div>
//     <div class="new-left">
//         <a href="">${name}</a>
//         <p>${enName}</p>
//     </div>
//     </div>
//     `
// }
// newMangaCardFunc()




// let btnInput = document.querySelector('#btnInput') 
// let inputListPrem = document.querySelector('#inputList')
// let btnInputFalse = false 

// btnInput.addEventListener('click', () => {
    
// })

// let search = ''
// const createSearch = () => {
//     inputListPrem.innerHTML = `
//     <div class="btnInput_block">
//         <input id="searchManga" type="text" placeholder="Поиск манги">
//         <div class="btns">
//             <button>Манга</button>
//             <button>Персона</button>
//             <button>Издатель</button>
//             <button>Переводчик</button>
//             <button id="closeSerach" onclick='closeSearch()'><img src="./icons/cross.png" alt=""></button>
            
//         </div>
//     </div>   
//     `
//     filter()
// }

// function filter ()  {
//     let searchManga = document.querySelector('#searchManga')
//     searchManga.addEventListener('change', () => {
//         let filteredSearch = arr.filter(item => item.name.toLowerCase().includes(searchManga.value.toLowerCase()))
//         console.log(filteredSearch);
//     })
//     console.log(searchManga);
//     // console.log(arr)
//     // console.log(filteredSearch);
    
    
// }
 
// const closeSearch = () => {
//     inputListPrem.innerHTML = ''
// }



// btnAddTitle.addEventListener('click', () => toggleVisibility(listTitle));
// btnNotification.addEventListener('click', () => toggleVisibility(btnListNotification));
// profilePersonBtn.addEventListener('click', () => toggleVisibility(profileListBlock));
// btnInput.addEventListener('click', createSearch);
// Selectors

// Event Listeners
btnAddTitle.addEventListener('click', () => toggleVisibility(listTitle));
btnNotification.addEventListener('click', () => toggleVisibility(btnListNotification));
profilePersonBtn.addEventListener('click', () => toggleVisibility(profileListBlock));
btnInput.addEventListener('click', createSearch);

// Toggle visibility function
function toggleVisibility(element) {
    element.classList.toggle('visible');
    // displayInfoCards(data.slice(0, 6));
}

// Fetch data
const url1 = 'http://localhost:8080/title';
let arr = [];

function getData() {
    fetch(url1)
        .then((resp) => resp.json())
        .then((data) => {
            arr = data;
            displayInfoCards(data.slice(0, 6));
            displayNewChapterCards(data.slice(0, 100));
            displayPopularCards(data);
            displayNewMangaCards(data.slice(10, 30));
        });
}

function displayInfoCards(data) {
    const cardHtml = data.map((item) => infoCard(item.image, item.name, item.tom, item.id)).join('');
    infoBlockWrap.innerHTML = cardHtml;
}

function displayNewChapterCards(data) {
    const newCardHtml = data
        .map((item) => newCard(item.image, item.name, item.enName, item.type, item.tom, item.id))
        .join('');
    newChapterCardsWrap.innerHTML = newCardHtml;
}

function displayPopularCards(data) {
    const popularCardHtml = data
        .map((item) => popularCardFunc(item.image, item.name, item.enName, item.views,item.id))
        .join('');
    popularMangaWrap.innerHTML = popularCardHtml;
}

function displayNewMangaCards(data) {
    const newMangaHtml = data.map((item) => newMangaCardFunc(item.image, item.name, item.enName,item.id))
        .join('');
    newMangaWrap.innerHTML = newMangaHtml;
}

function infoCard(img, name, tom, id) {
    return `
        <div class="popular_card">
            <div class="popular_card-info" onclick='setIdParams(${id})'>
                <a href="./mangaDetails.html"><img src="${img}" alt="${name}"></a>
                <p>${tom}</p>
            </div>
            <a href="./manga/manga2.pdf">${name}</a>
        </div>
    `;
}


function newCard(img, name, enName, type, tom, id) {
    return `
        <div class="new_chapter-card" onclick='setIdParams(${id})'>
            <div class="img-bg">
                <div class="flex">
                    <img src="${img}" alt="${name}">
                    <div class="bg">
                        <p>${type}</p>
                    </div>
                </div>
                <div class="new_chapter-info">
                    <a href="./mangaDetails.html">${name}</a>
                    <div class="div">
                        <a href="">${enName}</a>
                        <p>сегодня</p>
                    </div>
                    <button><a href="./manga/manga2.pdf">${tom}</a></button>
                </div>
            </div>
        </div>
    `;
}

function popularCardFunc(img, name, enName, views, id) {
    return `
        <div class="popular_card" onclick='setIdParams(${id})'>
            <div class="popular_right">
                <img src="${img}" alt="${name}">
            </div>
            <div class="popular_left">
                <a href="./mangaDetails.html">${name}</a>
                <p>${enName}</p>
                <p>${views}<img src="./icons/eye2.png" alt=""></p>
            </div>
        </div>
    `;
}
function newMangaCardFunc(img, name, enName,id) {
    return `
        <div class="new_card" onclick='setIdParams(${id})'>
            <div class="new-right">
                <img src="${img}" alt="${name}">
            </div>
            <div class="new-left">
                <a href="./mangaDetails.html">${name}</a>
                <p>${enName}</p>
            </div>
        </div>
    `;
}

function createSearch() {
    inputListPrem.innerHTML = `
        <div class="btnInput_block">
            <input id="searchManga" type="text" placeholder="Поиск манги">
            <div class="btns">
                <button>Манга</button>
                <button>Персона</button>
                <button>Издатель</button>
                <button>Переводчик</button>
                <button id="closeSerach" onclick='closeSearch()'><img src="./icons/cross.png" alt=""></button>
            </div>
        </div>
    `;
    filter();
}
const setIdParams = (id) => {
    localStorage.setItem('idParams', JSON.stringify(id))
}
function filter() {
    const searchManga = document.querySelector('#searchManga');
    searchManga.addEventListener('input', () => {
        const filteredSearch = arr.filter((item) =>
            item.name.toLowerCase().includes(searchManga.value.toLowerCase())
        );
        displayInfoCards(filteredSearch);
        displaySearchBlock(filteredSearch); // Call the displaySearchBlock function with filtered data
    });
}

function closeSearch() {
    inputListPrem.innerHTML = '';
}

// Call the initial data fetching
getData();