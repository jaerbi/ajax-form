loaded.innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-get').addEventListener('click', getDate);

function getDate() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = data.name;
            document.getElementById('client-address').innerHTML = data.address;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}