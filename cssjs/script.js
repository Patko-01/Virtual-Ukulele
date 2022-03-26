//deklarujeme audio premenné
var audio = new Audio('music/easterEgg.mp3');

var G = new Audio('music/G.mp3');  //nulty pražec
var C = new Audio('music/C.mp3');
var E = new Audio('music/E.mp3');
var A = new Audio('music/A.mp3');

var Gx = new Audio('music/Gx.mp3');  //prvý pražec
var Cx = new Audio('music/Cx.mp3');
var F = new Audio('music/F.mp3');
var Ax = new Audio('music/Ax.mp3');

var A2pr = new Audio('music/A2pr.mp3');  //druhý pražec
var D = new Audio('music/D.mp3');
var Fx = new Audio('music/Fx.mp3');
var B = new Audio('music/B.mp3');

var Ax3pr = new Audio('music/Ax3pr.mp3');  //tretí pražec
var Dx = new Audio('music/Dx.mp3');
var G3pr = new Audio('music/G3pr.mp3');
var C3pr = new Audio('music/C3pr.mp3');

var B4pr = new Audio('music/B4pr.mp3');  //štvrtý pražec
var E4pr = new Audio('music/E4pr.mp3');
var Gx4pr = new Audio('music/Gx4pr.mp3');
var Cx4pr = new Audio('music/Cx4pr.mp3');

var C5pr = new Audio('music/C5pr.mp3');  //piaty pražec
var F5pr = new Audio('music/F5pr.mp3');
var A5pr = new Audio('music/A5pr.mp3');
var D5pr = new Audio('music/D5pr.mp3');

var Cx6pr = new Audio('music/Cx6pr.mp3');  //šiesty pražec
var Fx6pr = new Audio('music/Fx6pr.mp3');
var Ax6pr = new Audio('music/Ax6pr.mp3');
var Dx6pr = new Audio('music/Dx6pr.mp3');

var D7pr = new Audio('music/D7pr.mp3');  //siedmy pražec
var G7pr = new Audio('music/G7pr.mp3');
var B7pr = new Audio('music/B7pr.mp3');
var E7pr = new Audio('music/E7pr.mp3');

var Dx8pr = new Audio('music/Dx8pr.mp3');  //ôsmy pražec
var Gx8pr = new Audio('music/Gx8pr.mp3');
var C8pr = new Audio('music/C8pr.mp3');
var F8pr = new Audio('music/F8pr.mp3');

var E9pr = new Audio('music/E9pr.mp3');  //deviaty pražec
var A9pr = new Audio('music/A9pr.mp3');
var Cx9pr = new Audio('music/Cx9pr.mp3');
var Fx9pr = new Audio('music/Fx9pr.mp3');

function highlight0() {
  var el = document.getElementById('p0').style.background="#FA5F55";
}
function deHighlight0() {
  var el = document.getElementById('p0').style.background="";
}

function highlight1() {
  var el = document.getElementById('p1').style.background="#FA5F55";
}
function deHighlight1() {
  var el = document.getElementById('p1').style.background="";
}

function highlight2() {
  var el = document.getElementById('p2').style.background="#FA5F55";
}
function deHighlight2() {
  var el = document.getElementById('p2').style.background="";
}

function highlight3() {
  var el = document.getElementById('p3').style.background="#FA5F55";
}
function deHighlight3() {
  var el = document.getElementById('p3').style.background="";
}

function hranie(){
    //zahrá notu podľa stlačenej klávesy
    addEventListener('keypress', function (e) {
        if (e.key === '+') {                          //easterEgg, ak stlačíš * zahrá pesničku
          audio.currentTime = 0;                     
          audio.play();
        }
        if (e.key === 'Enter'){                       //zastavenie prehrávania audia
          audio.pause();   

          G.pause();
          C.pause();
          E.pause();
          A.pause();

          Gx.pause();
          Cx.pause();
          F.pause();
          Ax.pause();

          A2pr.pause();
          D.pause();
          Fx.pause();
          B.pause();

          Ax3pr.pause();
          Dx.pause();
          G3pr.pause();
          C3pr.pause();

          B4pr.pause();
          E4pr.pause();
          Gx4pr.pause();
          Cx4pr.pause();

          C5pr.pause();
          F5pr.pause();
          A5pr.pause();
          D5pr.pause();

          Cx6pr.pause();
          Fx6pr.pause();
          Ax6pr.pause();
          Dx6pr.pause();

          D7pr.pause();
          G7pr.pause();
          B7pr.pause();
          E7pr.pause();

          Dx8pr.pause();
          Gx8pr.pause();
          C8pr.pause();
          F8pr.pause();

          E9pr.pause();
          A9pr.pause();
          Cx9pr.pause();
          Fx9pr.pause();
        }
        if (e.key === 'z'){
          G.currentTime = 0;
          G.play();
          highlight0();
          setTimeout(function(){
            deHighlight0();
          }, 1000);
        }
        if (e.key === 'a'){
          C.currentTime = 0;
          C.play();
          highlight1();
          setTimeout(function(){
            deHighlight1();
          }, 1000);
        }
        if (e.key === 'q'){
          E.currentTime = 0;
          E.play();
          highlight2();
          setTimeout(function(){
            deHighlight2();
          }, 1000);
        }
        if (e.key === '1'){
          A.currentTime = 0;
          A.play();
          highlight3();
          setTimeout(function(){
            deHighlight3();
          }, 1000);
        }
        if (e.key === 'x'){
          Gx.currentTime = 0;
          Gx.play();
        }
        if (e.key === 's'){
          Cx.currentTime = 0;
          Cx.play();
        }
        if (e.key === 'w'){
          F.currentTime = 0;
          F.play();
        }
        if (e.key === '2'){
          Ax.currentTime = 0;
          Ax.play();
        }
        if (e.key === 'c'){
          A2pr.currentTime = 0;
          A2pr.play();
        }
        if (e.key === 'd'){
          D.currentTime = 0;
          D.play();
        }
        if (e.key === 'e'){
          Fx.currentTime = 0;
          Fx.play();
        }
        if (e.key === '3'){
          B.currentTime = 0;
          B.play();
        }
        if (e.key === 'v'){
          Ax3pr.currentTime = 0;
          Ax3pr.play();
        }
        if (e.key === 'f'){
          Dx.currentTime = 0;
          Dx.play();
        }
        if (e.key === 'r'){
          G3pr.currentTime = 0;
          G3pr.play();
        }
        if (e.key === '4'){
          C3pr.currentTime = 0;
          C3pr.play();
        }
        if (e.key === 'b'){
          B4pr.currentTime = 0;
          B4pr.play();
        }
        if (e.key === 'g'){
          E4pr.currentTime = 0;
          E4pr.play();
        }
        if (e.key === 't'){
          Gx4pr.currentTime = 0;
          Gx4pr.play();
        }
        if (e.key === '5'){
          Cx4pr.currentTime = 0;
          Cx4pr.play();
        }
        if (e.key === 'n'){
          C5pr.currentTime = 0;
          C5pr.play();
        }
        if (e.key === 'h'){
          F5pr.currentTime = 0;
          F5pr.play();
        }
        if (e.key === 'y'){
          A5pr.currentTime = 0;
          A5pr.play();
        }
        if (e.key === '6'){
          D5pr.currentTime = 0;
          D5pr.play();
        }
        if (e.key === 'm'){
          Cx6pr.currentTime = 0;
          Cx6pr.play();
        }
        if (e.key === 'j'){
          Fx6pr.currentTime = 0;
          Fx6pr.play();
        }
        if (e.key === 'u'){
          Ax6pr.currentTime = 0;
          Ax6pr.play();
        }
        if (e.key === '7'){
          Dx6pr.currentTime = 0;
          Dx6pr.play();
        }
        if (e.key === ','){
          D7pr.currentTime = 0;
          D7pr.play();
        }
        if (e.key === 'k'){
          G7pr.currentTime = 0;
          G7pr.play();
        }
        if (e.key === 'i'){
          B7pr.currentTime = 0;
          B7pr.play();
        }
        if (e.key === '8'){
          E7pr.currentTime = 0;
          E7pr.play();
        }
        if (e.key === '.'){
          Dx8pr.currentTime = 0;
          Dx8pr.play();
        }
        if (e.key === 'l'){
          Gx8pr.currentTime = 0;
          Gx8pr.play();
        }
        if (e.key === 'o'){
          C8pr.currentTime = 0;
          C8pr.play();
        }
        if (e.key === '9'){
          F8pr.currentTime = 0;
          F8pr.play();
        }
        if (e.key === '/'){
          E9pr.currentTime = 0;
          E9pr.play();
        }
        if (e.key === ';'){
          A9pr.currentTime = 0;
          A9pr.play();
        }
        if (e.key === 'p'){
          Cx9pr.currentTime = 0;
          Cx9pr.play();
        }
        if (e.key === '0'){
          Fx9pr.currentTime = 0;
          Fx9pr.play();
        }
    });
}
hranie();
console.log("ahoj");