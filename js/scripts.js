
//   x =0; 
const usDollar = 58.17;
const PS = 67.38;
const Euro = 58.12;
const hkDollar = 7.84;
const KD = 18.11;
const TB = 1.54;
const SF = 58.82;
const SLR = 0.16;
const MP = 2.93;
const CY = 8.05;
const UAE = 15.84;
const NZ = 34.15;




function DollarC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML= (x * usDollar);
    document.getElementById('name').innerHTML=("$");
}
function PoundC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * PS);
    document.getElementById('name').innerHTML=("£");
}
function EC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * Euro);
    document.getElementById('name').innerHTML=("€");
}
function hkDollarC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * hkDollar);
    document.getElementById('name').innerHTML=("HK$");
}
function kDollarC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * KD);
    document.getElementById('name').innerHTML=("د.إ");
}
function TBC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * TB);
    document.getElementById('name').innerHTML=("฿");
}
function SFC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * SF);
    document.getElementById('name').innerHTML=("CHf");
}
function SLRC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * SLR);
    document.getElementById('name').innerHTML=("₹");
}
function MPC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * MP);
    document.getElementById('name').innerHTML=("₱");
}
function CYC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * CY);
    document.getElementById('name').innerHTML=("¥");
}
function UAEC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * UAE);
    document.getElementById('name').innerHTML=("د.إ");
}
function nzC() {
    let x = document.getElementById('peso').value;
    document.getElementById('out-ans').innerHTML=( x * NZ);
    document.getElementById('name').innerHTML=("NZ$");
}
