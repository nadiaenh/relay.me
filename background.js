chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.name == 'setLoginCookie') {
        var obj = {test:"test"}    
        chrome.storage.sync.set(obj, function() {
            alert('Data saved');
        });           
    }    

    if (request.name == 'getLoginCookie') {
           chrome.storage.sync.get('test', function(data) {
                sendResponse({ screenshotUrl: data.test });
        })       
    }
    return true;

});