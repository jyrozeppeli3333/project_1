// let btnCatalog = document.querySelector('#btnCatalog')
let btnInput1 = document.querySelector('#btnInput')
// let listHeader = btnCatalog.querySelector('#list')

let url = 'http://localhost:8080/title'

// let buttonDot = document.querySelector('#dot')
// let listButtonDot = buttonDot.querySelector('#listDot')

let btnAddTitle1 = document.querySelector('#addTitle')
let listTitle1 = document.querySelector('#listAddTitle')

let btnNotification1 = document.querySelector('#notification')
let btnListNotification1 = document.querySelector('#listNotification')

let addUrlTitleeINput1 = document.querySelector('#addUrlTitle')

let catalogBoolean = false
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



let btnAddTitleFalse1 = false
btnAddTitle1.addEventListener('click', () => {
    btnAddTitleFalse1 = !btnAddTitleFalse1
    if (btnAddTitleFalse1) {
        listTitle1.innerHTML = `
        <div class="listTitle">
            <ul>
                <li><a href="./addTitle.html"><img src="./icons/plus.png">  Добавить тайтл</a></li>
 
            </ul>
        </div>
        `
    }else {
        listTitle1.innerHTML = ''
    }
})


let btnNotificationFalse1 = false
    btnNotification1.addEventListener('click', () => {
        btnNotificationFalse1 = !btnNotificationFalse1;
        
        // console.log(btnNotificationFalse);
        if (btnNotificationFalse1) {
            btnListNotification1.innerHTML = `
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
            btnListNotification1.innerHTML = ''
        }
    })

    

function addUrlTitleFunc () {
    addUrlTitleeINput1.innerHTML = `
     <div class="urlTitle">
     <p>Ссылки на оригинал или анлейт (помогает модерации)</p>
            <div class="urlInput">
                <input type="text">
                <button onclick="deleteINput()" id="btnDeleteINput"><img src="./icons/bin.png"</button>
            </div>
     </div>
    `
}
addUrlTitleFunc()

 function deleteINput ( ) {
    let DeleteINput1 = document.querySelector('#btnDeleteINput')
    // console.log(DeleteINput);
    DeleteINput1.addEventListener ('click', () => {
        addUrlTitleeINput1.innerHTML =""
    })
 }
 deleteINput()

 let profilePersonBtn = document.querySelector('#profilePerson')
let profileListBlock = document.querySelector('#profileList')
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
                               
                     </ul>
                 </div>
        `
    }else {
        profileListBlock.innerHTML = ''
    }
})
//  const getData = () => {
//   fetch('http://localhost:8080/products')
//     .then(response => response.json())
//     .then(data => {
//       let card = ''
//       data.forEach(item => {
//         card += prodCard(item.img, item.name, item.description, item.price, item.id)
//       });
//       productsBlock.innerHTML = card
//     })
// } 
// getData()

// const prodCard = (img, name, description, price, id) => {
//   return `
//     <div style="border: 1px solid #000; width: 400px">
//       <img width="200px" src="${img}" alt="${name}">
//       <h2>${name}</h2>
//       <p>${description}</p>
//       <p>${price}</p>
//       <button onclick="editData(${id})">edit</button>
//       <button onclick="handleDelete(${id})">delete</button>
//     </div>
//   `
// }

// const PostData = (url,data) => {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message))
// }

// PostForm.addEventListener('submit', (event) => {
//   event.preventDefault()
//   prodObj = {
//     img: PostFormImg.value,
//     name: PostFormName.value,
//     description: '',
//     price: PostFormPrice.value
//   }
//   PostData('http://localhost:8080/products',prodObj)
//   // console.log(prodObj);
//   // getData()
// }


//обертка 
// let infoBlockWrap = document.querySelector('#infoBlock')
// const getData = () => {
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         let card = ''
//          data.forEach(item => {
//             card += infoCard(item.img, item.name, item.tom, item.id)
//          });
//          infoBlockWrap.innerHTML = card
//     })
// }

// const infoCard = (img,name,tom,) => {
//     return `
//         <div class="popular_card">
//             <div class="popular_card-info"
//                 <img src="${img}" alt="${name}">
//                 <p>${tom}</p>
//             </div>
//             <a href="">${name}</a>
//         </div>
//     `
// }


const postData = (url, data) => {
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}


let PostFormPerm = document.querySelector('#postForm')

//img

let coverInput = PostFormPerm.querySelector('#cover')
let imgBackgroundInput = PostFormPerm.querySelector('#imgBackground')


//name 
let originalNameInput = PostFormPerm.querySelector('#originalName')
let ruNameInput = PostFormPerm.querySelector('#ruName')
let enNameInput = PostFormPerm.querySelector('#enName')
let altNameInput = PostFormPerm.querySelector('#altname')

//year relis

let yearRelisInput = PostFormPerm.querySelector('#yearRelis')

// author,artitst,publisher

let authorInput = PostFormPerm.querySelector('#author')
let artistInput = PostFormPerm.querySelector('#artist')
let publisherInput = PostFormPerm.querySelector('#publisher')
 
let tomInp = document.querySelector('#tomInp')
// geners,tegs,format relis

let genersInput = PostFormPerm.querySelector('#geners')
let tegsInput = PostFormPerm.querySelector('#tegs')
let realisFormatInput = PostFormPerm.querySelector('#realisFormat')

//translators

let translatorsInput = PostFormPerm.querySelector('#translators')

//description

let descriptionInput = PostFormPerm.querySelector('#description')

let typeManga = document.querySelector('#typeManga')
let statusTitle = document.querySelector('#statusTitle')
let statusTranslate = document.querySelector('#statusTranslate')
let contentAge = document.querySelector('#contentAge')
let createChapter = document.querySelector('#createChapter')

PostFormPerm.addEventListener('submit', (event) => {
    event.preventDefault() 
    infoObj = {
        image: coverInput.value,
        Background: imgBackgroundInput.value,

        name: originalNameInput.value,
        ruName: ruNameInput.value,
        enName: enNameInput.value,
        alternativename: altNameInput.value,

        releaseyear: yearRelisInput.value,

        author: authorInput.value,
        artist: artistInput.value,
        publisher: publisherInput.value,

        genre: genersInput.value,
        tags: tegsInput.value,
        releaseformat: realisFormatInput.value,

        translators: translatorsInput.value,

        description: descriptionInput.value,
        type:typeManga.value,
        tom: tomInp.value,
        statustitle: statusTitle.value,
        agerating: contentAge.value,
        transferstatus: statusTranslate.value,
        createchapter: createChapter.value


    }
    postData(url, infoObj)
})