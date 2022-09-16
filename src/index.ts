import axios from 'axios';

const url = 'http://localhost:9515';
axios.get(url + "/status")
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });