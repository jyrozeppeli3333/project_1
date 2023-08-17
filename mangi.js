let btnCatalog = document.querySelector('#btnCatalog')
let btnInput = document.querySelector('#btnInput')
let url1 = 'http://localhost:8080/title'
// let listHeader = btnCatalog.querySelector('#list')
let buttonDot = document.querySelector('#dot')
// let listButtonDot = buttonDot.querySelector('#listDot')
let btnAddTitle = document.querySelector('#addTitle')
let listTitle = document.querySelector('#listAddTitle')
// notification
let btnListNotification = document.querySelector('#listNotification')
let btnNotification = document.querySelector('#notification')
// const btnNotification = document.querySelector('#notification');
const profilePersonBtn = document.querySelector('#profilePerson');
const profileListBlock = document.querySelector('#profileList');
// let catalogBoolean = false
// btnCatalog.addEventListener('click', ()=> {
//     catalogBoolean = !catalogBoolean
//     if (catalogBoolean) {
//         listHeader.innerHTML = `
//         <div class="list">
//             <ul>
//                 <li><a href="./mangi.html">Манги</a></li>
//                 <li><a href="./mangi.html">Манхвы</a></li>
//                 <li><a href="./mangi.html">Маньхуа</a></li>
//                 <li><a href="./mangi.html">OEL-манги</a></li>
//                 <li><a href="./mangi.html">Руманга</a></li>
//                 <li><a href="./mangi.html">Комикс западный</a></li>
//                 <li><a href="./mangi.html">Синглов</a></li>
//                 <li><a href="./mangi.html">Весь</a></li>
//                 <li><a href="./mangi.html">Сдучайный тайтл  </a></li>
//             </ul>
//         </div>
//         `
//     } else {
//         listHeader.innerHTML = ''
//     }
// })

// let buttonDotFalse = false
// buttonDot.addEventListener('click', () => {
//     buttonDotFalse = !buttonDotFalse
//     if (buttonDotFalse) {
//         listButtonDot.innerHTML = `
//          <div class="listDot">
//             <ul>
//                 <li><a href=""><img src="./icons/новости.png"  alt="">новости</a></li>
//                 <li><a href=""><img src="./icons/message.png" alt="">Контакты</a></li>
//                 <li><a href=""><img src="./icons/random.png"  alt="">Рандом</a></li>
//             </ul>
//          </div>
//         `
//     }else {
//         listButtonDot.innerHTML = ''
//     }
// })



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

//для блока notificftion
// let notificationAllBtn = document.querySelector('#allBtn')
// let notificationChapterBtn = document.querySelector('#modalChapterBtn')
// let notificationCommentBtn = document.querySelector('#commentBtn')
// let notificationMessageBtn = document.querySelector('#messageBtn')
// let notificationApplicationBtn = document.querySelector('#applicationsBtn')
// let notificationOtherBtn = document.querySelector('#otherBtn')

// let notificationChapterBtnFalse = false
//  console.log(notificationAllBtn);
// notificationChapterBtn.addEventListener('click', () => {
//     notificationChapterBtnFalse = !notificationChapterBtnFalse
//     if (notificationChapterBtnFalse) {
//         notificationChapterBtn.innerHTML = `
//         <div class="modalTitles">
//         <div class="options"> 
//             <button><img src="./icons/option.png" alt></button>
//             <h2>Уведомления</h2>
//             <button><img src="./icons/icons8-меню-50 (4).png"</button>
//         </div>

//     <div class="buttonsNotification">
//         <button id="allBtn">Все</button>
//         <button id="modalChapterBtn">Главы</button>
//         <button id="commentBtn">Комментарии</button>
//         <button id="messageBtn">Сообщения</button>
//         <button id="applicationsBtn">Заявки</button>
//         <button id="otherBtn">другое</button>
//     </div>


//     <div class="cards">
//         <div class="card">
//             <div class="leftNotification">
//                 <a href=""><img src="./images/XXE0vhlR4bGs_250x350.jpg"</a>
//             </div>
//             <a href="">chapter</a>


//         </div>

//     </div>

//     </div> 
//         `
//     }else {
//         notificationChapterBtn.innerHTML = ''
//     } 

// })
const getLocalMangaFunc = () => {
    let mangaType = localStorage.getItem('mangaType')
    return mangaType ? JSON.parse(mangaType) : []
}
let category = getLocalMangaFunc()

let arr = []
let mangiInp = document.querySelector('#mangiInp')
// console.log(mangiInp);
let infoBlockWrap = document.querySelector('#infoBlock')
const getData = () => {
    fetch(url1)
    .then(resp => resp.json())
    .then(data => {
        arr = data
        displayInfoCards(data.slice(0, 100));

        // let card = ''
        //  data.forEach(item => {
        //     card += infoCard(item.image, item.name, item.tom, item.id)
        //  });
        //  infoBlockWrap.innerHTML = card
        
        
    })
}

function displayInfoCards(data) {
    console.log(data.filter(item => {
        // console.log(item.type);  
    }));
    let currentArr = []
    if( category.toLowerCase() == 'весь') {
        currentArr = data
        console.log(currentArr);
    } else {
        currentArr = data.filter(item => item.type.toLowerCase() == category.toLowerCase())
    }
    console.log(currentArr);
    const cardHtml = currentArr.map((item) =>infoCard(item.image, item.name, item.tom, item.id)).join('');
    infoBlockWrap.innerHTML = cardHtml;
}
getData()


 function filter ()  {
    mangiInp.addEventListener('input', () => {
        const filteredSearch = arr.filter((item) => item.name.toLowerCase().includes(mangiInp.value.toLowerCase()))
        displayInfoCards(filteredSearch)
    })
    console.log(mangiInp);
}
filter()

// const idParams = JSON.parse(localStorage.getItem('idParams'))
const infoCard = (img, name, tom, id) => {
    return `
    <div class="cards" onclick='setIdParams(${id})'>
    <div class="popular_card-info" >
    <a href="./mangaDetails.html">
    <img src="${img}" alt="${name}"></a>
    <a href="./mangaDetails.html">${name}</a>
    </div>
    </div>
    `;
}
infoCard()

const setIdParams = (id) => {
    console.log(id);
    localStorage.setItem('idParams', JSON.stringify(id))
}
 
    
    
