// Selectors
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
            displayNewMangaCards(data.slice(4, 10));
        });
}

function displayInfoCards(data) {
    const cardHtml = data.map((item) => infoCard(item.image, item.name, item.tom)).join('');
    infoBlockWrap.innerHTML = cardHtml;
}

function displayNewChapterCards(data) {
    const newCardHtml = data
        .map((item) => newCard(item.image, item.name, item.enName, item.type, item.tom))
        .join('');
    newChapterCardsWrap.innerHTML = newCardHtml;
}

function displayPopularCards(data) {
    const popularCardHtml = data
        .map((item) => popularCardFunc(item.image, item.name, item.enName, item.views))
        .join('');
    popularMangaWrap.innerHTML = popularCardHtml;
}

function displayNewMangaCards(data) {
    const newMangaHtml = data
        .map((item) => newMangaCardFunc(item.image, item.name, item.enName))
        .join('');
    newMangaWrap.innerHTML = newMangaHtml;
}

function infoCard(img, name, tom) {
    return `
        <div class="popular_card">
            <div class="popular_card-info">
                <a href=""><img src="${img}" alt="${name}"></a>
                <p>${tom}</p>
            </div>
            <a href="">${name}</a>
        </div>
    `;
}

function newCard(img, name, enName, type, tom) {
    return `
        <div class="new_chapter-card">
            <div class="img-bg">
                <div class="flex">
                    <img src="${img}" alt="${name}">
                    <div class="bg">
                        <p>${type}</p>
                    </div>
                </div>
                <div class="new_chapter-info">
                    <a href="">${name}</a>
                    <div class="div">
                        <a href="">${enName}</a>
                        <p>сегодня</p>
                    </div>
                    <button><a href="">${tom}</a></button>
                </div>
            </div>
        </div>
    `;
}

function popularCardFunc(img, name, enName, views) {
    return `
        <div class="popular_card">
            <div class="popular_right">
                <img src="${img}" alt="${name}">
            </div>
            <div class="popular_left">
                <a href="">${name}</a>
                <p>${enName}</p>
                <p>${views}<img src="./icons/eye2.png" alt=""></p>
            </div>
        </div>
    `;
}
function newMangaCardFunc(img, name, enName) {
    return `
        <div class="new_card">
            <div class="new-right">
                <img src="${img}" alt="${name}">
            </div>
            <div class="new-left">
                <a href="">${name}</a>
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