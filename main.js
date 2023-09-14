
var TxtType = function(el, toRotate, period) { 
this.toRotate = toRotate; 
this.el = el; this.loopNum = 0; 
this.period = parseInt(period, 10) || 2000; 
this.txt = ''; this.tick(); 
this.isDeleting = false; 
}; TxtType.prototype.tick = function() { 
var i = this.loopNum % this.toRotate.length; 
var fullTxt = this.toRotate[i]; 
if (this.isDeleting) { 
this.txt = fullTxt.substring(0, this.txt.length - 1); 
} else { 
this.txt = fullTxt.substring(0, this.txt.length + 1); 
} 
this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'; 
var that = this; 
var delta = 200 - Math.random() * 100; 
if (this.isDeleting) { 
delta /= 2; 
} if (!this.isDeleting && this.txt === fullTxt) { 
delta = this.period; 
this.isDeleting = true; 
} 
else if (this.isDeleting && this.txt === '') { 
this.isDeleting = false; 
this.loopNum++; 
delta = 500; 
} 
setTimeout(function() { that.tick(); }, delta); 
}; 
window.onload = function() { 
var elements = document.getElementsByClassName('typewrite'); 
for (var i=0; i<elements.length; i++) { 
var toRotate = elements[i].getAttribute('data-type'); 
var period = elements[i].getAttribute('data-period'); 
if (toRotate) { new TxtType(elements[i], JSON.parse(toRotate), period); 
 } 
} 
// INJECT CSS 
var css = document.createElement("style"); css.type = "text/css"; 
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}"; document.body.appendChild(css); };



const celsiusInput = document.querySelector('#celsius > input'); 
 const fahrenheitInput = document.querySelector('#fahrenheit > input'); 
 const kelvinInput = document.querySelector('#kelvin > input'); 
  
 const roundToTwoDP = (num) => { 
   return num.toFixed(2); 
 }; 
  
  
 const celsiusToFaAndKe = () => { 
   const celsiusTemp = parseFloat(celsiusInput.value); 
   const fahrenheitTemp = (celsiusTemp * 1.8) + 32; 
   const kelvinTemp = celsiusTemp + 273.15; 
  
   fahrenheitInput.value = roundToTwoDP(fahrenheitTemp); 
   kelvinInput.value = roundToTwoDP(kelvinTemp); 
 }; 
  
  
 const fahrenheitToCeAndKe = () => { 
   const fahrenheitTemp = parseFloat(fahrenheitInput.value); 
   const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9); 
   const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9); 
  
   celsiusInput.value = roundToTwoDP(celsiusTemp); 
   kelvinInput.value = roundToTwoDP(kelvinTemp); 
 }; 
  
 const kelvinToCeAndFa = () => { 
   const kelvinTemp = parseFloat(kelvinInput.value); 
   const celsiusTemp = kelvinTemp - 273; 
   const fahrenheitTemp =  1.8 * (kelvinTemp - 273) + 32; 
  
   celsiusInput.value = roundToTwoDP(celsiusTemp); 
   fahrenheitInput.value = roundToTwoDP(fahrenheitTemp); 
 }; 
  
  
 const main = () => { 
   celsiusInput.addEventListener('input', celsiusToFaAndKe); 
   fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe); 
   kelvinInput.addEventListener('input', kelvinToCeAndFa); 
 }; 
  
 main();
