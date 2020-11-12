ymaps.ready(init);

function init() {
    const coords = [
        [53.90, 27.59],
        [54.90, 27.56],
        [52.90, 27.56]
    ]

    const clusterIcons = [{
        href: './images/home-page/label.svg',
        size: [53, 52],
        offset: [0, 0]
    }];
    const myGeoObjects = [];

    myMap = new ymaps.Map('map', {
        center: [53.90, 27.56],
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="margin: 10px;">' +
        '<b>{{properties.name}}</b><br />' +
        '<i id="count"></i> ' +
        '<button id="counter-button"> +1 </button>' +
        '</div>')

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
            balloonContentLayout: BalloonContentLayout,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0
         },
        );
    }

    const myClusterer = new ymaps.Clusterer({
        clusterIcons: clusterIcons,
        gridSize: 128
    });

    myClusterer.add(myGeoObjects);
    myGeoObjects.forEach(element =>{
        element.events
            .add('click', function (e) {
                // Ссылку на объект, вызвавший событие,
                // можно получить из поля 'target'.
                e.get('target').options.set({
                    iconImageHref: './images/home-page/active-label.svg',
                });
            })
    });

    myMap.geoObjects.add(myClusterer);

}
