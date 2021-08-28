function setCookie(){
    chrome.extension.sendMessage({name: 'setLoginCookie'}, function(otherResponse) {
        console.log(otherResponse)
    })
}

function getCookie(){
    chrome.extension.sendMessage({name: 'getLoginCookie'}, function(response) {
        alert(response)
    })
}