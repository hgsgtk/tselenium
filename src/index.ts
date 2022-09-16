import axios from 'axios';

async function openAndCloseBrowser(url: string) {
    let sessionId = '';

    await axios.post(url + '/session', {
        capabilities: {}
    }, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(function (response) {
        console.log(`HTTP status code: ${response.status}`)
        console.log(JSON.parse(JSON.stringify(response.data)))
    
        sessionId = response.data.value.sessionId
    }).catch(function (error) {
        console.log(error);
    });
    
    axios.delete(url + '/session/' + sessionId)
        .then(function (response) {
            console.log(`HTTP status code: ${response.status}`)
            console.log(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(function (error) {
            console.log(error);
        });
}

openAndCloseBrowser('http://localhost:9515')