chrome.storage.local.set({ 'user': 'saurabh.modh' }, function () {
    alert("user saved");
});

chrome.storage.local.get(['user'], function (data) {
    alert(data.user);
});