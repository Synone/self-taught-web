const enrollBtns = document.querySelectorAll('.enroll-btn');
const popupContent = document.querySelector('.popup__content');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close');
function addClass() {
    popup.classList.add('open');
}
for (const enrollBtn of enrollBtns)enrollBtn.addEventListener('click', addClass);
popupClose.onclick = function() {
    popup.classList.remove('open');
};
popup.onclick = function() {
    popup.classList.remove('open');
};
popupContent.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
});

//# sourceMappingURL=index.d39adbf2.js.map
