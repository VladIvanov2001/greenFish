ymaps.ready(init);

function init() {

    const clusterIcons=[{
        href:'./images/home-page/label.svg',
        size:[53,52],
        offset:[0,0]
    }]
    const coords = [
        [53.90, 27.59],
        [54.90, 27.56],
        [52.90, 27.56]
    ]
    myMap = new ymaps.Map('map', {
        center: [53.90, 27.56],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });


    const myGeoObjects = [];

    for (let i = 0; i < coords.length; i++) {
        myGeoObjects[i] = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: coords[i]
                },
            }, {
                iconLayout: 'default#image',
                iconImageHref: './images/home-page/label.svg',
                iconImageSize: [37, 49],
            },
        );
    }

    var myClusterer = new ymaps.Clusterer({
        clusterIcons:clusterIcons,
        gridSize: 128
    });
    myClusterer.add(myGeoObjects);

    myMap.geoObjects.add(myClusterer);
}
