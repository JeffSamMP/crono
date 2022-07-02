window.onload = () => {
   h = 0;
   m = 0;
   s = 0;
   mls = 0;   
   timeStarted = 0;
   time = document.getElementById("time");
   btnStart = document.getElementById("btn-start");
   btnStop = document.getElementById("btn-stop");
   btnReset = document.getElementById("btn-reset");
   // btnGrabar = document.getElementById("btn-grabar");
   // almacenar = document.getElementById('almacenar');
   btnStart.addEventListener("click", start);
   btnStop.addEventListener("click", stop);
   btnReset.addEventListener("click", reset);
   // btnGrabar.addEventListener('click',grabarContador)
}

function write() {
   let ht, mt, st, mlst;
   mls++;

   if (mls > 99) {
      s++;
      mls = 0;
   }
   if (s > 59) {
      m++;
      s = 0;
   }
   if (m > 59) {
      h++;
      m = 0;
   }
   if (h > 24) h = 0;

   mlst = ('0' + mls).slice(-2);
   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);

   time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start() {
   write();
   timeStarted = setInterval(write, 10);
   btnStart.removeEventListener("click", start);
}

function stop() {
   clearInterval(timeStarted);
   btnStart.addEventListener("click", start);
}

function reset() {
   clearInterval(timeStarted);
   time.innerHTML = "00:00:00.00"
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   btnStart.addEventListener("click", start);
   while(almacenar.firstChild){
      almacenar.removeChild(almacenar.firstChild);
   }

}

// Grabar contador 
// function grabarContador(){
//    if (timeStarted.textContent === '00:00:00:00') {
//        console.log('click en el botón iniciar')
//    }
//    else {
//        let p = document.createElement;
//        p.innerHTML = `<li>Tiempo : ${time}</li>
//    `;
//        almacenar.appendChild(p);
//    }

// }
//========================================================
//reloj
let html = document.getElementById("tiempo");

setInterval(function(){
	tiempo = new Date();

	horas = tiempo.getHours();
	minutos = tiempo.getMinutes();
	segundos = tiempo.getSeconds();

//evitar los 0 o numeros individuales
	if(horas<10)
		horas = "0"+horas;
	if(minutos<10)
		minutos = "0"+minutos;
	if(segundos<10)
		segundos = "0"+segundos;

	html.innerHTML = horas+" : "+minutos+" : "+segundos;
},1000);