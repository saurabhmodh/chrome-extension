chrome.runtime.sendMessage({ method: "getDomain" }, function (response) {
    alert(response);
});