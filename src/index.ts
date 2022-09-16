import axios from 'axios';

const url = 'http://localhost:9515';
axios.get(url + "/status")
    .then(function (response) {
        console.log(`HTTP status code: ${response.status}`)
        console.log(JSON.parse(JSON.stringify(response.data)))
    })
    .catch(function (error) {
        console.log(error);
    });

axios.post(url + '/session', {
    capabilities: {}
}, {
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}).then(function (response) {
    console.log(`HTTP status code: ${response.status}`)
    console.log(JSON.parse(JSON.stringify(response.data)))
}).catch(function (error) {
    console.log(error);
});