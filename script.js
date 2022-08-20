let noClicks = 0;
const images = ["cat", "fish", "frog", "jerry", "man", "patrick"]
function clickNo() {
    if (noClicks < 11 && noClicks > 5) {
        document.getElementById(images[noClicks - 6]).style.display = "inline";
        reposition(images[noClicks - 6]);
    }
    repositionNo();
    noClicks++;
}

function repositionNo() {
    reposition('no');
}

function reposition(id) {
    document.getElementById(id).style.left = Math.floor((Math.random() * 81) + 10).toString().concat("%");
    document.getElementById(id).style.top = Math.floor((Math.random() * 81) + 10).toString().concat("%");
}