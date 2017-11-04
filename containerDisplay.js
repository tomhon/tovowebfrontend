function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    }
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    }
function hideAllInputContainers() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("inGameTracking").style.display = "none";
    document.getElementById("setPiece").style.display = "none";
    document.getElementById("startStop").style.display = "none";
    document.getElementById("playerDetails").style.display = "none";
    document.getElementById("gameDetails").style.display = "none";
    document.getElementById("maintenance").style.display = "none";
    };
function showInGameTracking() {
    hideAllInputContainers();
    document.getElementById("inGameTracking").style.display = "block";
    }
function showSetPiece() {
    hideAllInputContainers()
    document.getElementById("setPiece").style.display = "block";
    }
function showStartStop() {
    hideAllInputContainers();
    document.getElementById("startStop").style.display = "block";
    }
function showPlayerDetails() {
    hideAllInputContainers();
    document.getElementById("playerDetails").style.display = "block";
    }
function showGameDetails() {
    hideAllInputContainers();
    document.getElementById("gameDetails").style.display = "block";
    }
function showMaintenanceDetails() {
    hideAllInputContainers();
    document.getElementById("maintenance").style.display = "block";
    }