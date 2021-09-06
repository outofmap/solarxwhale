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

    const imageSrc = './src/img/symbol/marker.png' // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(42, 64) // 마커이미지의 크기입니다
    const imageOption = {offset: new kakao.maps.Point(25, 60)};

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

    const marker = new kakao.maps.Marker({
        position: position,
        image: markerImage
    });
    marker.setMap(map);

    const content = '<div class="map-link">' +
        '  <a href="https://map.kakao.com/link/map/21301941" target="_blank">' +
        '    <span class="title">아모르 하우스</span>' +
        '  </a>' +
        '</div>';

    new kakao.maps.CustomOverlay({
        map: map,
        position: position,
        content: content,
        yAnchor: 1
    });
}

export default KakaoMap
