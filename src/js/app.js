// import css from "../css/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'photoswipe/dist/photoswipe.css';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import copy from 'copy-to-clipboard';

import KakaoMap from "./KakaoMap";
import Gallery from "./Gallery";
import Firebase from "./Firebase";

(function () {
    Firebase()
    KakaoMap()
    Gallery()
})();

const els = document.getElementsByClassName("account-copy")
Array.prototype.forEach.call(els, function (el) {
    el.addEventListener("click", function (e) {
        copy(e.target.dataset.account, {message: "hello?"})
        Toastify({
            text: "복사되었습니다.",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
        }).showToast();
    })
});
