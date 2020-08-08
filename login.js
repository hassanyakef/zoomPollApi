// import { login_success } from './background'

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get("logged_in", function(data) {
        if(data.logged_in)
          chrome.browserAction.setPopup({popup: "activate.html"});
      });
    
    document.querySelector('button').addEventListener('click', onclick, false)

    function change_page () {
        // login_success()
        window.location.href = pages[1]
    }

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            // TO DO: Redirect to Zoom OAuth Page
            change_page()
            page = 1
            // chrome.tabs.sendMessage(tabs[0].id, 'You need to Log In with Zoom!')
        })
    }
}, false)