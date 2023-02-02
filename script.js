const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websitUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');


// show modal, focu on the input 
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

//  Modal Even Listner 
modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click',()=>modal.classList.remove('show-modal'));
window.addEventListener('click',(e)=> )