let $ = {};

$.http = function(options, callback) {
    console.log(options)
    let data = options.data || null;
    let credentials = options.credentials || false;

    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.withCredentials = credentials;
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 ) {
            console.log(xhr.responseText, typeof xhr.responseText)
            callback(JSON.parse(xhr.responseText));
        }
    }
}