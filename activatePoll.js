// import { login_failure } from './background'

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function change_page () {
        // login_failure()
        window.location.href = "login.html"
    }

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            // TO DO: Have a counter maybe for 30 minutes -> poll time
            // chrome.tabs.sendMessage(tabs[0].id, 'Activating Automatic Polling every 30 minutes')
            change_page()
        })
    }
}, false)