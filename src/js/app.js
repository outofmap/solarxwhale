// import css from "../css/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'photoswipe/dist/photoswipe.css';

import KakaoMap from "./KakaoMap";
import Gallery from "./Gallery";
import Firebase from "./Firebase";

(function () {
    Firebase()
    KakaoMap()
    Gallery()
})();
