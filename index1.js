//Adressen på Bluetooth Mate, Password er 1234
var macAddress = "00:06:66:7D:98:60";
var mountainbikers = 0;
var vandrere = 0;

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
    if(data=='m'){
		mountainbikers+=1;
		document.getElementByID("mountainbikers").innerHTML = mountainbikers;
	}       
	
	if(data=='v'){
		vandrere+=1;
		document.getElementByID("vandrere").innerHTML = vandrere;
	}
}

function onDisconnect() {
        alert("Disconnected");
        statusDiv.innerHTML="Disconnected.";
}

function subscribeFailed() {
        alert("subscribe failed");
}



