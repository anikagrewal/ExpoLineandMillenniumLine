import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/marker.png", iconSize: [20,30], iconAnchor:[8, 25] })

const polyline:[number, number][] = [
    [49.28574014901243, -122.7916641177332], // Lafarge lake-douglas station 
    [49.28051635192068, -122.7939596177333], // lincoln station 
    [49.27399403433804, -122.80007888038206], // coquitlam central station 
    [49.277349960907415, -122.82812562938035], // inlet centre station 
    [49.278128960558234, -122.84603010239228], // moody centre station 
    [49.26141259563469, -122.88984021588692], // burquitlam station 
    [49.24857894973372, -122.89695551773457], // lougheed town centre station 
    [49.253608239727065, -122.91814563122846], // production way - univeristy station 
    [49.254754030424714, -122.93915854472249], // lake city way station 
    [49.25934701404215, -122.96396771588674], // sperling - burnaby lake station 
    [49.26480828889008, -122.98216870239281], // holdom station 
    [49.26651643447459, -123.00157586403957], // brentwood town centre station 
    [49.26509299446115, -123.01366746006335], // gilmore station 
    [49.260955898354, -123.0328697447222], // rupert station 
    [49.25905001283837, -123.04533708705169], // renfrew station 
    [49.262627251009135, -123.06923721341548], // commerical - broadway station 
    [49.2659608843991, -123.07902991773386], // VCC-Clark station 
]

const multiPolyline:[number, number][][] = [
    [
        [49.18284597770986, -122.84478721272868], // king george station 
    [49.18958505046332, -122.84794816223014], // surrey central station 
    [49.199113593412115, -122.85070678890125], // gateway station 
    [49.20456187719432, -122.87432778890097], // scott road station 
    [49.20157814512581, -122.91274701958369], // new westminster station 
    [49.200110779996805, -122.94903177356007], // 22nd street station 
    [49.21245153631263, -122.95915577355935], // Edmonds station 
    [49.2202002078427, -122.988462773559], // royal oak station 
    [49.225946893175546, -123.00384054472359], // Metrotown station 
    [49.229905701736314, -123.01265107355877], // Patterson station 
    [49.238378043144856, -123.03175829809659], // joyce - collingwood station 
    [49.24435913788827, -123.04612955154805], // 29th avenue station 
    [49.248369217941665, -123.05594948889942], // nanaimo station 
    [49.2628120130693, -123.06920431588678], // commerical - broadway station 
    [49.2732629720306, -123.10031781588636], // main street - science world station 
    [49.27970398211644, -123.10976000742784], // stadium - chinatown station 
    [49.28341084781543, -123.11611204472142], // granville station 
    [49.285692737228004, -123.12017171588593], // burrard station 
    [49.28561242806764, -123.11155265972262], // waterfront station
    ],
    [
        [49.20157814512581, -122.91274701958369], // new westminster station 
        [49.204964966235416, -122.9060770870537], // columbia station 
        [49.22481818911538, -122.88943906006489], // sapperton station 
        [49.233409691301304, -122.88283031588803], // braid station 
        [49.24857894973372, -122.89695551773457], // lougheed town centre station 
        [49.253608239727065, -122.91814563122846], // production way - univeristy station   
    ]
]


const yellowOptions = { color: 'red'}
const blueOptions = { color: 'blue'}

const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return(
        
        <MapContainer
            style={{height: "95vh"}}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}

        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/anikagrewal/ExpoLineandMillenniumLine">By Anika Grewal</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.28574014901243, -122.7916641177332]} icon={icon}>
                <Popup>
                Lafarge lake-douglas station 
                </Popup> 
            </Marker>
            <Marker position={[49.28051635192068, -122.7939596177333]} icon={icon}>
                <Popup>
                lincoln station 
                </Popup> 
            </Marker>
            <Marker position={[49.27399403433804, -122.80007888038206]} icon={icon}>
                <Popup>
                coquitlam central station
                </Popup> 
            </Marker>
            <Marker position={[49.277349960907415, -122.82812562938035]} icon={icon}>
                <Popup>
                inlet centre station
                </Popup> 
            </Marker>
            <Marker position={[49.278128960558234, -122.84603010239228]} icon={icon}>
                <Popup>
                moody centre station
                </Popup> 
            </Marker>
            <Marker position={[49.26141259563469, -122.88984021588692]} icon={icon}>
                <Popup>
                burquitlam station
                </Popup> 
            </Marker>
            <Marker position={[49.24857894973372, -122.89695551773457]} icon={icon}>
                <Popup>
                lougheed town centre station 
                </Popup> 
            </Marker>
            <Marker position={[49.253608239727065, -122.91814563122846]} icon={icon}>
                <Popup>
                production way - univeristy station
                </Popup> 
            </Marker>
            <Marker position={[49.254754030424714, -122.93915854472249]} icon={icon}>
                <Popup>
                lake city way station
                </Popup> 
            </Marker>
            <Marker position={[49.25934701404215, -122.96396771588674]} icon={icon}>
                <Popup>
                sperling - burnaby lake station
                </Popup> 
            </Marker>
            <Marker position={[49.26480828889008, -122.98216870239281]} icon={icon}>
                <Popup>
                holdom station
                </Popup> 
            </Marker>
            <Marker position={[49.26651643447459, -123.00157586403957]} icon={icon}>
                <Popup>
                brentwood town centre station
                </Popup> 
            </Marker>
            <Marker position={[49.26509299446115, -123.01366746006335]} icon={icon}>
                <Popup>
                gilmore station
                </Popup> 
            </Marker>
            <Marker position={[49.260955898354, -123.0328697447222]} icon={icon}>
                <Popup>
                rupert station
                </Popup> 
            </Marker>
            <Marker position={[49.25905001283837, -123.04533708705169]} icon={icon}>
                <Popup>
                renfrew station
                </Popup> 
            </Marker>
            <Marker position={[49.262627251009135, -123.06923721341548]} icon={icon}>
                <Popup>
                commerical - broadway station
                </Popup> 
            </Marker>
            <Marker position={[49.2659608843991, -123.07902991773386]} icon={icon}>
                <Popup>
                VCC-Clark station
                </Popup> 
            </Marker>
            <Marker position={[49.18284597770986, -122.84478721272868]} icon={icon}>
                <Popup>
                king george station
                </Popup> 
            </Marker>
            <Marker position={[49.18958505046332, -122.84794816223014]} icon={icon}>
                <Popup>
                surrey central station
                </Popup> 
            </Marker>
            <Marker position={[49.199113593412115, -122.85070678890125]} icon={icon}>
                <Popup>
                gateway station
                </Popup> 
            </Marker>
            <Marker position={[49.20456187719432, -122.87432778890097]} icon={icon}>
                <Popup>
                scott road station
                </Popup> 
            </Marker>
            <Marker position={[49.20157814512581, -122.91274701958369]} icon={icon}>
                <Popup>
                new westminster station
                </Popup> 
            </Marker>
            <Marker position={[49.200110779996805, -122.94903177356007]} icon={icon}>
                <Popup>
                22nd street station
                </Popup> 
            </Marker>
            <Marker position={[49.21245153631263, -122.95915577355935]} icon={icon}>
                <Popup>
                Edmonds station
                </Popup> 
            </Marker>
            <Marker position={[49.2202002078427, -122.988462773559]} icon={icon}>
                <Popup>
                royal oak station
                </Popup> 
            </Marker>
            <Marker position={[49.225946893175546, -123.00384054472359]} icon={icon}>
                <Popup>
                Metrotown station
                </Popup> 
            </Marker>
            <Marker position={[49.229905701736314, -123.01265107355877]} icon={icon}>
                <Popup>
                Patterson station
                </Popup> 
            </Marker>
            <Marker position={[49.238378043144856, -123.03175829809659]} icon={icon}>
                <Popup>
                joyce - collingwood station
                </Popup> 
            </Marker>
            <Marker position={[49.24435913788827, -123.04612955154805]} icon={icon}>
                <Popup>
                29th avenue station
                </Popup> 
            </Marker>
            <Marker position={[49.248369217941665, -123.05594948889942]} icon={icon}>
                <Popup>
                nanaimo station
                </Popup> 
            </Marker>
            <Marker position={[49.2628120130693, -123.06920431588678]} icon={icon}>
                <Popup>
                commerical - broadway station
                </Popup> 
            </Marker>
            <Marker position={[49.2732629720306, -123.10031781588636]} icon={icon}>
                <Popup>
                main street - science world station
                </Popup> 
            </Marker>
            <Marker position={[49.27970398211644, -123.10976000742784]} icon={icon}>
                <Popup>
                stadium - chinatown station
                </Popup> 
            </Marker>
            <Marker position={[49.28341084781543, -123.11611204472142]} icon={icon}>
                <Popup>
                granville station
                </Popup> 
            </Marker>
            <Marker position={[49.285692737228004, -123.12017171588593]} icon={icon}>
                <Popup>
                burrard station
                </Popup> 
            </Marker>
            <Marker position={[49.28561242806764, -123.11155265972262]} icon={icon}>
                <Popup>
                waterfront station
                </Popup> 
            </Marker>
            <Marker position={[49.22481818911538, -122.88943906006489]} icon={icon}>
                <Popup>
                sapperton station
                </Popup> 
            </Marker>
            <Marker position={[49.233409691301304, -122.88283031588803]} icon={icon}>
                <Popup>
                braid station
                </Popup> 
            </Marker>
           

            <Polyline pathOptions={yellowOptions} positions={polyline}/>
            <Polyline pathOptions={blueOptions} positions={multiPolyline}/>

             

        </MapContainer>
    )
}

export default Map;

/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} />

<CircleMarker center={[49.25299, -123.01650]} pathOptions={redOptions} radius={20} > 
<Popup>Popup in CircleMarker</Popup>
</CircleMarker>
*/
