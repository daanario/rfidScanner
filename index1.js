//Adressen på Bluetooth Mate, Password er 1234
var macAddress = "00:06:66:7D:98:60";

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	bluetoothSerial.connect(macAddress, onConnect, onDisconnect);
}


function onConnect() {
    bluetoothSerial.subscribe("\n", onMessage, subscribeFailed);
    document.getElementByID("statusDiv").innerHTML="Connected to " + macAddress + ".";        		
}


function onMessage(data) {
    document.getElementById("fraArduino").innerHTML =""+ data;       
}

function onDisconnect() {
        alert("Disconnected");
        statusDiv.innerHTML="Disconnected.";
}

function subscribeFailed() {
        alert("subscribe failed");
}

while(1){
	if(onMessage()=="m"){
		document.getElementByID("mountainbikers").innerHTML = onMessage();
	}

	if(onMessage()=="v"){
		document.getElementByID("vandrere").innerHTML = onMessage();
	}
}

