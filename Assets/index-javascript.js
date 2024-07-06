let stucturehp = document.querySelector("hpinput");
let ammodmg = document.querySelector("ammoinput");
let totaldmg = totaldmgcalc();
let playerCount = Math.ceil((stucturehp / totaldmg));
let hitneeded = (stucturehp / ammodmg);
function finalCalc() {
    function totaldmgcalc() {
        if (ammodmg === 30) {
            let multiplier = 32;
        } else if (ammodmg === 25) {
            let multiplier = 34;
        } else if (ammodmg === 12) {
            let multiplier = 54;
        }
        return (ammodmg * multiplier);
    }
    document.getElementById("neededplayer").innerHTML = playerCount;
    document.getElementById("neededammo").innerHTML = hitneeded;
}