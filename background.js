chrome.webRequest.onBeforeRequest.addListener(function(info) {
    // Redirect to secure login page
    if (info.url.indexOf("http://202.28.167") == 0) {
      return {redirectUrl: info.url.replace(/202\.28\.167\.([0-9]+)/, 'securelogin.arubanetworks.com').replace("http://", "https://")}; 
    }
  },
  {urls: ["http://*/upload/custom/default/login.html*"]}, ["blocking"]
);