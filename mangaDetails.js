const btnAddTitle = document.querySelector('#addTitle');
const listTitle = document.querySelector('#listAddTitle');


const btnListNotification = document.querySelector('#listNotification');
const btnNotification = document.querySelector('#notification')



const profilePersonBtn = document.querySelector('#profilePerson');
const profileListBlock = document.querySelector('#profileList');


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



let obj =  null
let mnagaDetailsWrapper = document.querySelector('#mnagaDetailsWrapper')
console.log(mnagaDetailsWrapper);


const idParams = JSON.parse(localStorage.getItem('idParams'))

const getDetails = () => {
    fetch(`http://localhost:8080/title/${idParams}`)
        .then(resp => resp.json())
        .then(data => {
            obj = data
            cardFunc(obj)
            console.log(obj);
        })
}
getDetails()
const cardFunc = (obj) => {
    mnagaDetailsWrapper.innerHTML =  `
    <div class="mnaga_Details-right">
    <img src="${obj.image}" alt="">
    <div class="buttons">
        <button><a href="./manga/manga2.pdf">Читать<a/></button>
        <button id="addFavourites" onclick="addFavouritesFunc()">добавить в список</button>
    </div>
    <div class="infoBlock">
        <div class="type">
            <p>Тип</p>
            <p>${obj.type}</p>
        </div>
        <div class="format_relis">
            <p>формат выпуска</p>
            <p>${obj.releaseformat}</p>
        </div>
        <div class="year_relis">
            <p>год релиза</p>
            <p>${obj.releaseyear}</p>
        </div>
        <div class="status_title">
            <p>статус тайтла</p>
            <p>${obj.statustitle}</p>
        </div>
        <div class="authorBlock">
            <p>автор</p>
            <p>${obj.author}</p>
        </div>
        <div class="artistBlock">
        <p>Художник</p>
        <p> ${obj.artist}</p>
        </div>
        <div class="publisherBlock">
            <p>Издатель</p>
            <p>${obj.publisher}</p>
        </div>
        <div class="chapters">
            <p>загружено глав</p>
            <p>${obj.tom}</p>
        </div>
        <div class="alt_Name">
            <p>Альтернативные названия</p>
            <p>${obj.alternativename}</p>
        </div>
    </div>
</div>
<div class="mnaga_Details-left">
                <div class="name_Title">
                    <h2>${obj.ruName}</h2>
                    <p>${obj.enName}</p>
                </div>
                <div class="info_Title">
                    <button>Информация</button>   
                    <p>${obj.description}</p> 
                    <div class="buttons_geners">
                        <a href="">${obj.genre}</a>
                        <a href="">${obj.tags}</a>
                    </div>    
                    <div class="translators">
                        <p>Переводчики</p>
                        <button><a href="">${obj.translators}</a></button>
                    </div>  
                </div>
            </div>
    `
}
let  addFavouritesFalse = false
// function addFavouritesFunc () {
//     const addFavouritesPrem = document.querySelector('#addFavourites')
//     addFavouritesPrem.addEventListener('click', () => {
//          addFavouritesFalse = !addFavouritesFalse
//          if (addFavouritesFalse) {
//             addFavouritesPrem.textContent = 'читаю'
//             localStorage.setItem('favouritesJs',JSON.stringify(id))
//          }else { 
//             addFavouritesPrem.textContent = 'добавить список'
//          }
//     })  
// }
    
function getFav () {
    const favourites = localStorage.getItem('favorites');
    return favourites ? JSON.parse(favourites) : [];
  };
  let favorites = getFav(); 
  
function addFavouritesFunc() {
    const addFavouritesPrem = document.querySelector('#addFavourites');
    addFavouritesPrem.addEventListener('click', () => {
        addFavouritesFalse = !addFavouritesFalse;
        if (addFavouritesFalse) {
            addFavouritesPrem.textContent = 'читаю';
        } else { 
            addFavouritesPrem.textContent = 'добавить список';
        }
        if (favorites.includes(obj.prodId)) {
            alert('уже добавлен в избранное.');
            return;
          }
          favorites.push(obj);
          saveFavorites(favorites);
          alert('добавлен в избранное.');
        
        // Переход на другую страницу с передачей данных
        // window.location.href = 'favourites';
    });
}
function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

