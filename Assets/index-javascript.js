function finalCalc() {
    let structurehp = parseFloat(document.getElementById("hpinput").value);
    let ammoselect = document.getElementById("ammoinput");
    let ammodmg = parseInt(ammoselect.options[ammoselect.selectedIndex].value, 10); // Convert to an integer
    let totaldmg;

    switch (ammodmg) {
        case 30:
            totaldmg = ammodmg * 32;
            break;
        case 25:
            totaldmg = ammodmg * 34;
            break;
        case 12:
            totaldmg = ammodmg * 54;
            break;
        default:
            totaldmg = 0;
    }

    let playerCount = Math.ceil(structurehp / totaldmg);
    let hitneeded = Math.ceil(structurehp / ammodmg);

    document.getElementById("neededplayer").innerHTML = playerCount;
    document.getElementById("neededammo").innerHTML = hitneeded;

    console.log("The total damage is " + totaldmg);
    console.log("The player count is " + playerCount);
    console.log("The structurehp is " + structurehp);
    console.log("The inputted ammo is " + ammodmg);
    console.log("Damage per player is " + totaldmg);
}
