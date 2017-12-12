// import a custom alert js library for our action
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import esriPromise from 'esri-promise';

export default function (event) {
    swal.showLoading();
    esriPromise(['esri/request']).then(([Request]) => {
        new Request(event.item.layer.url, {
            query: {f: 'json'},
            responseType: 'json'
        }).then((response) => {
            swal({
                title: event.item.layer.title,
                text: response.data.description
            });
        });
    });
}