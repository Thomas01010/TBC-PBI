var xhr = new XMLHttpRequest();
var url = "url";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify({"title": "Appli", "icon": "https://components.connect.trimble.com/trimble-connect-workspace-api/examples/logo192.png", "command" : "QUADRI_TOP_MENU"});
xhr.send(data);
