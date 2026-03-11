const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){
    const PRICE_WATER = 2;
    const PRICE_SANDWICH = 5;

    let name = PARAMS.get("name");
    let countWater = PARAMS.get("amountWater");
    let countSandwiches = PARAMS.get("amountSandwiches");
    let amountPaid = PARAMS.get("amount");

    let totalWater = countWater * PRICE_WATER;
    let totalSandwiches = countSandwiches * PRICE_SANDWICH;
    let grandTotal = totalWater + totalSandwiches;

    document.getElementById("greetings").innerText = `Hello, ${name}!`;
    document.getElementById("amountWater").innerText = `You paid $${totalWater} for ${countWater} bottled water.`;
    document.getElementById("amountSandwiches").innerText = `You paid $${totalSandwiches} for ${countSandwiches} sandwiches.`;

    if(amountPaid == grandTotal){
        document.getElementById("total").innerText = "Exact amount paid. Have a nice day!";
    } 
    else if(amountPaid > grandTotal){
        let change = amountPaid - grandTotal;
        document.getElementById("total").innerText = `Your change is $${change}. Have a nice day!`;
    } 
    else{
        document.getElementById("total").innerText = "You don't have enough money!";
    }
}
