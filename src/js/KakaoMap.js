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
}

export default KakaoMap
