import axios from 'axios';

async function openPage(url: string) {
    let sessionId = '';
    let webdriverAddr = 'http://localhost:9515';

    const headers = {
        'Content-Type': 'application/json; charset=utf-8'
    }

    await axios.post(webdriverAddr + '/session', {
        capabilities: {}
    }, {
        headers: headers,
    }).then(function (response) {
        console.log(`HTTP status code: ${response.status}`)
        console.log(JSON.parse(JSON.stringify(response.data)))
    
        sessionId = response.data.value.sessionId
    }).catch(function (error) {
        console.log(error);
    });
    
    await axios.post(webdriverAddr + '/session/' + sessionId + '/url', {
        url: url
    }, {
        headers: headers,
    }).then(function (response) {
        console.log(`HTTP status code: ${response.status}`)
        console.log(JSON.parse(JSON.stringify(response.data)))
    }).catch(function (error) {
        console.log(error);
    })

    axios.delete(webdriverAddr + '/session/' + sessionId)
        .then(function (response) {
            console.log(`HTTP status code: ${response.status}`)
            console.log(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(function (error) {
            console.log(error);
        });
}

openPage('https://www.google.com');