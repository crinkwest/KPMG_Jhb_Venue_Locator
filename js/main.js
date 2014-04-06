
function getBoardroomLocation(aBoardroom)
{
	/* First we need to discover the Building and Floor the Boardroom is on */
	//var vBoardroomList = document.getElementById("boardroomListID");
	//var vBoardroomId = vBoardroomList.options[vBoardroomList.selectedIndex].value;
	var vBoardroomId = aBoardroom.value;
	
	var vBuilding;
	switch (vBoardroomId)
	{
		case "acaciaRoomId":
		case "baobabRoomId":
		case "crescent1RoomId":
		case "crescent2RoomId":
		case "crescent3RoomId":
		case "ebonyRoomId":
		case "mahoganyRoomId":
		case "msasaRoomId":
		case "platinumRoomId": 
		case "sccm1RoomId":
		case "sccm2RoomId":
		case "sccm3RoomId":
		case "tambotiRoomId":
		case "tanzaniteRoomId":
		case "wallStreetRoomId":
			vBuilding = "Crescent_1";
			alert(vBuilding);
			break;
		case "achieveRoomId":
		case "cres4RoomId":
		case "cres5RoomId":
		case "energyRoomId":
		case "FIOSRoomId":
		case "successRoomId":
		case "teamworkRoomId":
		case "TnLRoomId":
		case "visionRoomId":
			vBuilding = "Crescent_2";
			alert(vBuilding);
			break;
		default:
			alert("Hey! I don't know this Boardroom dude: " + vBoardroomId);
		
	}
	
	// todo: if statement for each building floor
  	displayCrescentLevel_2(vBuilding, vBoardroomId);
};
  
function displayCrescentLevel_2(aBuilding, aVenue)
{
	var vSVG = document.getElementById("floorPlan");
	vSVG.setAttribute("type", "image/svg+xml");
	  		
	if (aBuilding == "Crescent 0"){
		alert("No floorplan");
	} else if (aBuilding == "Crescent_1") {
		vSVG.setAttribute("data", "img/crescent1map.svg");
		alert("Crescent 1 floorplan set.");
	} else if (aBuilding == "Crescent_2") {
		alert("Crescent 2 floorplan to be set");
		vSVG.setAttribute("data", "img/crescent2map.svg"); 		
	}
	vSVG.style.visibility = 'visible';
	//vSVG.style.display = "inline";
	//document.replaceChild(vSVG);
	
	alert("gettting content");
	var vSvgDoc = vSVG.contentDocument;
	/* Since we don't know what the previous room selection was, we need to set all rooms to the default */
/*		vSvgDoc.getElementById("achieveRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("cres4RoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("cres5RoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("energyRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("FIOSRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("successRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("teamworkRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("TnLRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		vSvgDoc.getElementById("visionRoomId").getAttributeNode("style").value="fill:#800080;stroke:none;opacity:0.5";
		
	/* Now we can highlight the selected room */
	var vSVGRoom = vSvgDoc.getElementById(aVenue);
	vSVGRoom.getAttributeNode("style").value="fill:#800080;stroke:orange;opacity:1";
	alert("calling function to show details");
	/* Now we will update the room details */
	displayRoomDetails(aVenue);
	//document.getElementById("paraDetails").innerHTML = vSelectedValue;
};
  
function displayRoomDetails(aRoomId)
{
	var vRoomName;
	var vBuilding;
	var vFloor;
	var vSeats;
	var vWhiteBoard;
	var vProjector;
	var vPolycom;
	var vSiemens;
	var vSmartBoard;
	var vVideoConf;
	var vTeleConf;
	
	switch (aRoomId)
	{
		case "achieveRoomId":
			vRoomName = "Achievement Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "4";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Achieve Room details set');
			break;
		case "cres4RoomId":
			vRoomName = "Crescent 4 Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Crescent4 Room details set');
			break;
		case "cres5RoomId":
			vRoomName = "Crescent 5 Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Crescent5 Room details set');
			break;
		case "energyRoomId":
			vRoomName = "Energy Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Energy Room details set');
			break;
		case "FIOSRoomId":
			vRoomName = "FIOS Project Room";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('FIOS Project Room details set');
			break;
		case "successRoomId":
			vRoomName = "Success Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Success Boardroom details set');
			break;
		case "TnLRoomId":
			vRoomName = "Tax & Legal Training Room";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('T & L Training room details set');
			break;
		case "teamworkRoomId":
			vRoomName = "Teamwork Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Teamwork Room details set');
			break;
		case "visionRoomId":
			vRoomName = "Vision Boardroom";
			vBuilding = "Crescent";
			vFloor = "2";
			vSeats = "";
			vWhiteBoard = "Yes";
			vProjector = "No";
			vPolycom = "No";
			vSiemens = "Yes";
			vSmartBoard = "No";
			vVideoConf = "No";
			vTeleConf = "No";
			//alert('Vision Boardroom details set');
			break;
		default:
			vRoomName = "Please select a room...";
	}

	document.getElementById("headerDetails").innerHTML= vRoomName;
	document.getElementById("paraDetails").innerHTML= vBuilding;
	alert("Done");
/*		document.getElementById("headerDetails").innerHTML = "
		<br>This boardroom is overlooked by Jon Doe. For bookings, please send a meeting request to <a href='mailto:boardroom@company.com'>Achievement Room</a>
		<br>
		<br>
		<table>
		  <tr>
		    <td>Building:</td>
		    <td>Crescent</td>
		  </tr>
		  <tr>
		    <td>Floor:</td>
		    <td>2</td>
		  </tr>
		  <tr>
		    <td>Seats:</td>
		    <td>4</td>
		  </tr>
		  <tr>
		    <td>White Board:</td>
		    <td>Yes</td>
		  </tr>
		  <tr>
		    <td>Projector Screen:</td>
		    <td>No</td>
		  </tr>
		  <tr>
		    <td>Projector:</td>
		    <td>No</td>
		  </tr>
		  <tr>
		    <td>Polycom Telephone:</td>
		    <td>No</td>
		  </tr>
		  <tr>
		    <td>Siemens Telephone:</td>
		    <td>Yes</td>
		  </tr>
		  <tr>
		    <td>Smart Board</td>
		    <td>No</td>
		  </tr>
		  <tr>
		    <td>Video-Conferencing</td>
		    <td>No</td>
		  </tr>
		  <tr>
		    <td>Centralised Telephone Conferencing</td>
		    <td>No</td>
		  </tr>
		</table>";*/
};
