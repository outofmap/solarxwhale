function KakaoMap(config) {
    initSdk(config)
}

function initSdk(config) {
    const script = document.createElement('script');
    script.onload = () => {
        kakao.maps.load(loadMap)
    };
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=146c46d39bb9fccf532296a564c529e7&autoload=false';
    document.head.appendChild(script);
}

function loadMap() {
    const lat = 37.50172837259022
    const lng = 127.03158745331645
    const position = new kakao.maps.LatLng(lat, lng)

    const container = document.getElementById('map');
    const options = {
        center: position,
        level: 4
    };
    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({position: position});
    marker.setMap(map);

    var iwContent = '<div class="fw-normal fs-5 text-align-center">아모르 하우스<br>' +
        '<a href="https://map.kakao.com/link/map/21301941" style="color:black" target="_blank">kakaoMap</a>'+
        '</div>',
        iwPosition = new kakao.maps.LatLng(lat, lng);

    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
    });

    infowindow.open(map, marker);
}

export default KakaoMap
