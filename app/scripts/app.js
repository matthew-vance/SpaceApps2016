//initialize app
angular.module('app', ['leaflet-directive'])
    .controller('MajorTom', MainCtrl);

function MainCtrl($scope) {
    var bus = this;
    bus.message = "Space Apps 2016 Space Tour!";
    bus.info = "THIS IS NOT ABOUT DONALD TRUMP ANYMORE";

    bus.items = [
        {
            name: "Glenn Research Center",
            marker:{
                id: 1,
                lat: 41.4155048,
                lng: -81.8617916,
                message: "Glenn Research Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Glenn_Research_Center",
            description: "John H. Glenn Research Center at Lewis Field (GRC) located in Brook Park, Ohio, was established in 1942 as part of NACA, and was later incorporated as a NASA laboratory for aircraft engine research. In 1999, the center's name was officially renamed the NASA John H. Glenn Research Center at Lewis Field after John Glenn, an American fighter pilot, astronaut and politician. Glenn supports all of the agency's missions and major programs. Glenn excels in researching and developing innovative technologies for both aeronautics and space flight. A multitude of NASA missions have included elements from Glenn, from the Mercury and Gemini projects to the Space Shuttle Program and the International Space Station. The center's core competencies include air-breathing and in-space propulsion and cryogenics, communications, power energy storage and conversion, microgravity sciences, and advanced materials."
        },
        {
            name: "Goddard Space Flight Center",
            marker: {
                id: 2,
                lat: 38.9917188,
                lng: -76.8525762,
                message: "Goddard Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Goddard_Space_Flight_Center",
            description: "Goddard Space Flight Center (GSFC), is the largest combined organization of scientists and engineers in the United States dedicated to increasing knowledge of the Earth, the Solar System, and the Universe via observations from space. GSFC is a major U.S. laboratory for developing and operating unmanned scientific spacecraft. GSFC conducts scientific investigation, development and operation of space systems, and development of related technologies. Goddard scientists can develop and support a mission, and Goddard engineers and technicians can design and build the spacecraft for that mission. Goddard scientist John C. Mather shared the 2006 Nobel Prize in Physics for his work on COBE. GSFC also operates two spaceflight tracking and data acquisition networks (the Space Network and the Near Earth Network), develops and maintains advanced space and Earth science data information systems, and develops satellite systems for the National Oceanic and Atmospheric Administration (NOAA)."
        },
        {
            name: "Jet Propulsion Laboratory",
            marker: {
                id: 3,
                lat: 34.2013081,
                lng: -118.1713944,
                message: "Jet Propulsion Laboratory",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory",
            description: "Jet Propulsion Laboratory (JPL) was together with ABMA one of the agencies behind Explorer 1, the first American space mission and also together with ABMA one of the first agencies to become a part of NASA. It is located in the San Gabriel Valley area of Los Angeles County, California. The facility is headquartered in the city of Pasadena [9] on the border of La Cañada Flintridge and Pasadena. JPL is managed by the nearby California Institute of Technology (Caltech). The Laboratory's primary function is the construction and operation of robotic planetary spacecraft, though it also conducts Earth-orbit and astronomy missions. It is also responsible for operating NASA's Deep Space Network."
        },
        {
            name: "Johnson Space Center",
            marker: {
                id: 4,
                lat: 29.5529119,
                lng: -95.0934009,
                message: "Lyndon B. Johnson Space Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Lyndon_B._Johnson_Space_Center",
            description: "Lyndon B. Johnson Space Center (JSC) is the National Aeronautics and Space Administration's center for human spaceflight training, research and flight control. The center consists of a complex of 100 buildings constructed on 1,620 acres (656 ha) in Houston, Texas, USA including the Christopher C. Kraft Jr. Mission Control Center.[12] Johnson Space Center is home to the United States Astronaut Corps and is responsible for training astronauts from both the U.S. and its international partners. It is often popularly referred to by its central function during missions, 'Mission Control'. The center grew out of the Space Task Group formed soon after the creation of NASA to co-ordinate the US manned spaceflight program. A new facility was constructed on land donated by Rice University and opened in 1963. On February 19, 1973, the center was renamed in honor of the late U.S. president and Texas native, Lyndon B. Johnson.[13][14] JSC is one of ten major NASA field centers."
        },
        {
            name: "Kennedy Space Center",
            marker: {
                id: 5,
                lat: 28.5728722,
                lng: -80.9203774,
                message: "John F. Kennedy Space Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Kennedy_Space_Center",
            description: "John F. Kennedy Space Center (KSC), is one of the best known NASA facilities. It has been the launch site for every United States human space flight since 1968. Although such flights are currently on pause, KSC continues to manage and operate unmanned rocket launch facilities for America's civilian space program from three pads at the adjoining Cape Canaveral Air Force Station. Its iconic Vehicle Assembly Building (VAB) is the fourth-largest structure in the world by volume[6] and was the largest when completed in 1965.[7] Located on Merritt Island, Florida, the center is north-northwest of Cape Canaveral on the Atlantic Ocean, midway between Miami and Jacksonville on Florida's Space Coast. A total of 13,100 people worked at the center as of 2011. Approximately 2,100 are employees of the federal government; the rest are contractors.[8]"
        },
        {
            name: "Marshall Space Flight Center",
            marker: {
                id: 6,
                lat: 34.6614803,
                lng: -86.6713569,
                message: "George C. Marshall Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Marshall_Space_Flight_Center",
            description: "George C. Marshall Space Flight Center (MSFC) is the place where the Saturn V rocket and Spacelab were developed. It is one of the largest center of NASA. Marshall is the agency's lead center for Space Shuttle propulsion and its external tank; payloads and related crew training; International Space Station (ISS) design and assembly; together with computers, networks, and information management. Located on the Redstone Arsenal near Huntsville, Alabama, MSFC is named in honor of General George Marshall."
        },
        {
            name: "Stennis Space Flight Center",
            marker: {
                id: 7,
                lat: 34.6614803,
                lng: -86.6713569,
                message: "John C. Stennis Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/John_C._Stennis_Space_Center",
            description: "George C. Marshall Space Flight Center (MSFC) is the place where the Saturn V rocket and Spacelab were developed. It is one of the largest center of NASA. Marshall is the agency's lead center for Space Shuttle propulsion and its external tank; payloads and related crew training; International Space Station (ISS) design and assembly; together with computers, networks, and information management. Located on the Redstone Arsenal near Huntsville, Alabama, MSFC is named in honor of General George Marshall."
        },
        {
            name: "Marshall Space Flight Center",
            marker: {
                id: 8,
                lat: 34.6614803,
                lng: -86.6713569,
                message: "George C. Marshall Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Marshall_Space_Flight_Center",
            description: "George C. Marshall Space Flight Center (MSFC) is the place where the Saturn V rocket and Spacelab were developed. It is one of the largest center of NASA. Marshall is the agency's lead center for Space Shuttle propulsion and its external tank; payloads and related crew training; International Space Station (ISS) design and assembly; together with computers, networks, and information management. Located on the Redstone Arsenal near Huntsville, Alabama, MSFC is named in honor of General George Marshall."
        },
        {
            name: "Marshall Space Flight Center",
            marker: {
                id: 9,
                lat: 34.6614803,
                lng: -86.6713569,
                message: "Marshall Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Marshall_Space_Flight_Center",
            description: "George C. Marshall Space Flight Center (MSFC) is the place where the Saturn V rocket and Spacelab were developed. It is one of the largest center of NASA. Marshall is the agency's lead center for Space Shuttle propulsion and its external tank; payloads and related crew training; International Space Station (ISS) design and assembly; together with computers, networks, and information management. Located on the Redstone Arsenal near Huntsville, Alabama, MSFC is named in honor of General George Marshall."
        },
        {
            name: "Marshall Space Flight Center",
            marker: {
                id: 10,
                lat: 34.6614803,
                lng: -86.6713569,
                message: "Marshall Space Flight Center",
                focus: false,
                draggable: false
            },
            link: "https://en.wikipedia.org/wiki/Marshall_Space_Flight_Center",
            description: "George C. Marshall Space Flight Center (MSFC) is the place where the Saturn V rocket and Spacelab were developed. It is one of the largest center of NASA. Marshall is the agency's lead center for Space Shuttle propulsion and its external tank; payloads and related crew training; International Space Station (ISS) design and assembly; together with computers, networks, and information management. Located on the Redstone Arsenal near Huntsville, Alabama, MSFC is named in honor of General George Marshall."
        }
    ];

    bus.markers = [];

    for (var i = bus.items.length - 1; i >= 0; i--) {
        bus.markers.push(bus.items[i].marker);
    }

    bus.maxbounds = {
        northEast: {lat: 71.441048, lng: -66.940643},
        southWest: {lat: 18.91172, lng: -179.150558}
    };

    bus.center = {
        lat: 39,
        lng: -98,
        zoom: 4
    };
    
    bus.defaults = {
        scrollWheelZoom: false,
        minZoom: 4
    };

    bus.displaySummary = function(item){
        bus.name = item.name;
        bus.link = item.link;
        bus.description = item.description;

    };

    $scope.$on('leafletDirectiveMarker.click', function(e, args){
        var id = args.model.id;

        var facility = null;
        for(var j = 0; j < bus.items.length; ++j){
            if(bus.items[j].marker.id === id){
                facility = bus.items[j];
                break;//dance
            }
        }

        bus.displaySummary(facility);

    });
};
