function setCookie(){
    chrome.extension.sendMessage({name: 'setLoginCookie'}, function(otherResponse) {
        console.log(otherResponse)
    })
}

function getCookie(){
    chrome.extension.sendMessage({name: 'getloginCookie'}, function(response) {
        alert(response)
    })
}