/* Saving user login information */
document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
      if (!chrome.runtime.error) {
        console.log(items);
        document.getElementById("data").innerText = items.data;
      }
    });
  }
  
  document.getElementById("set").onclick = function() {
    var d = document.getElementById("text").value;
    chrome.storage.sync.set({ "data" : d }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
    window.close();
  }

/* Retrieving information from Airtable */
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyF4KxNqPPVvvgQj'}).base('app8kxnMMoybxn60P');

base('Applicants').find('Nadia', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

