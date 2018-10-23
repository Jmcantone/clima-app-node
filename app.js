const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const address = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
}

const argv = require('yargs').options({
    direccion: address
}).argv;

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El clima en ${coordenadas.direccion} es de ${temperatura} grados`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));