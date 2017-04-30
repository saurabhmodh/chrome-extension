var DOMAIN_ADDRESS;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.method === 'setDomain')
        DOMAIN_ADDRESS = message.domain;
    else if (message.method === 'getDomain' && DOMAIN_ADDRESS)
        sendResponse(DOMAIN_ADDRESS);
});