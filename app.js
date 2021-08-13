function loadDoc() {
    let xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === 4 && xhttp.status === 200){
            let response = JSON.parse(xhttp.responseText);
            
            document.getElementById("data-1").innerHTML = response.one;
            document.getElementById("data-2").innerHTML = response.key;
        }
    };
    xhttp.open("GET","http://echo.jsontest.com/key/value/one/two",true);
    xhttp.send();
}
