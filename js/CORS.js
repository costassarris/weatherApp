function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  // Error checking for different browser types

  if ("withCredentials"in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}