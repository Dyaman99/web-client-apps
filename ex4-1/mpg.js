"use strict";

const $ = selector => document.querySelector(selector);

const errorPositive = lbl => `${lbl} must be greater than zero.`;

const errorValidNum = lbl => `${lbl} must be a valid number.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) ) {
        alert(errorValidNum("Miles driven"));
        focusAndSelect("#miles");
    } else if(miles <= 0) {
        alert(errorPositive("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons)) {
        alert(errorValidNum("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else if(gallons <= 0) {
        alert(errorPositive("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};


const clearEntries = () => {
    document.getElementById("miles").value = "";
    document.getElementById("gallons").value = "";
    document.getElementById("mpg").value = "";
    document.getElementById("miles").focus();

}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
    $("#clear").addEventListener("click", clearEntries);
});