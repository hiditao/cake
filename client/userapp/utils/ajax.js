let $ = {};

$.http = function(options, callback) {
    console.log(options)
    let data = options.data || null;
    let credentials = options.credentials || false;

    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.withCredentials = credentials;
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 ) {
            callback(JSON.parse(xhr.response));
        }
    }

}