//deklarujeme audio premenné
var audio = new Audio('music/easterEgg.mp3');       //ctrl+shift+L

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
  var el = document.getElementById('p0').style.background="#bccad6";
}
function deHighlight0() {
  var el = document.getElementById('p0').style.background="";
}
function highlight1() {
  var el = document.getElementById('p1').style.background="#bccad6";
}
function deHighlight1() {
  var el = document.getElementById('p1').style.background="";
}
function highlight2() {
  var el = document.getElementById('p2').style.background="#bccad6";
}
function deHighlight2() {
  var el = document.getElementById('p2').style.background="";
}
function highlight3() {
  var el = document.getElementById('p3').style.background="#bccad6";
}
function deHighlight3() {
  var el = document.getElementById('p3').style.background="";
}
function highlight4() {
  var el = document.getElementById('p4').style.background="#bccad6";
}
function deHighlight4() {
  var el = document.getElementById('p4').style.background="";
}
function highlight5() {
  var el = document.getElementById('p5').style.background="#bccad6";
}
function deHighlight5() {
  var el = document.getElementById('p5').style.background="";
}
function highlight6() {
  var el = document.getElementById('p6').style.background="#bccad6";
}
function deHighlight6() {
  var el = document.getElementById('p6').style.background="";
}
function highlight7() {
  var el = document.getElementById('p7').style.background="#bccad6";
}
function deHighlight7() {
  var el = document.getElementById('p7').style.background="";
}
function highlight8() {
  var el = document.getElementById('p8').style.background="#bccad6";
}
function deHighlight8() {
  var el = document.getElementById('p8').style.background="";
}
function highlight9() {
  var el = document.getElementById('p9').style.background="#bccad6";
}
function deHighlight9() {
  var el = document.getElementById('p9').style.background="";
}
function highlight10() {
  var el = document.getElementById('p10').style.background="#bccad6";
}
function deHighlight10() {
  var el = document.getElementById('p10').style.background="";
}
function highlight11() {
  var el = document.getElementById('p11').style.background="#bccad6";
}
function deHighlight11() {
  var el = document.getElementById('p11').style.background="";
}
function highlight12() {
  var el = document.getElementById('p12').style.background="#bccad6";
}
function deHighlight12() {
  var el = document.getElementById('p12').style.background="";
}
function highlight13() {
  var el = document.getElementById('p13').style.background="#bccad6";
}
function deHighlight13() {
  var el = document.getElementById('p13').style.background="";
}
function highlight14() {
  var el = document.getElementById('p14').style.background="#bccad6";
}
function deHighlight14() {
  var el = document.getElementById('p14').style.background="";
}
function highlight15() {
  var el = document.getElementById('p15').style.background="#bccad6";
}
function deHighlight15() {
  var el = document.getElementById('p15').style.background="";
}

function hranie(){
    //zahrá notu podľa stlačenej klávesy
    addEventListener('keypress', function (e) {
        if (e.key === '+') {                          //easterEgg, ak stlačíš * zahrá pesničku
          audio.currentTime = 0;                     
          audio.play();
        }
        if (e.key === 'Enter'){                       //zastavenie prehrávania audia

          document.getElementById("vypis").innerHTML = "?";

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
          document.getElementById("vypis").innerHTML = "G";
        }
        if (e.key === 'a'){
          C.currentTime = 0;
          C.play();
          document.getElementById("vypis").innerHTML = "C";
        }
        if (e.key === 'q'){
          E.currentTime = 0;
          E.play();
          document.getElementById("vypis").innerHTML = "E";
        }
        if (e.key === '1'){
          A.currentTime = 0;
          A.play();
          document.getElementById("vypis").innerHTML = "A";
        }
        if (e.key === 'x'){
          Gx.currentTime = 0;
          Gx.play();
          highlight0();
          document.getElementById("vypis").innerHTML = "G#";
          setTimeout(function(){
            deHighlight0();
          }, 1000);
        }
        if (e.key === 's'){
          Cx.currentTime = 0;
          Cx.play();
          highlight1();
          document.getElementById("vypis").innerHTML = "C#";
          setTimeout(function(){
            deHighlight1();
          }, 1000);
        }
        if (e.key === 'w'){
          F.currentTime = 0;
          F.play();
          highlight2();
          document.getElementById("vypis").innerHTML = "F";
          setTimeout(function(){
            deHighlight2();
          }, 1000);
        }
        if (e.key === '2'){
          Ax.currentTime = 0;
          Ax.play();
          highlight3();
          document.getElementById("vypis").innerHTML = "A#";
          setTimeout(function(){
            deHighlight3();
          }, 1000); 
        }
        if (e.key === 'c'){
          A2pr.currentTime = 0;
          A2pr.play();
          highlight4();
          document.getElementById("vypis").innerHTML = "A";
          setTimeout(function(){
            deHighlight4();
          }, 1000); 
        }
        if (e.key === 'd'){
          D.currentTime = 0;
          D.play();
          highlight5();
          document.getElementById("vypis").innerHTML = "D";
          setTimeout(function(){
            deHighlight5();
          }, 1000); 
        }
        if (e.key === 'e'){
          Fx.currentTime = 0;
          Fx.play();
          highlight6();
          document.getElementById("vypis").innerHTML = "F#";
          setTimeout(function(){
            deHighlight6();
          }, 1000); 
        }
        if (e.key === '3'){
          B.currentTime = 0;
          B.play();
          highlight7();
          document.getElementById("vypis").innerHTML = "B";
          setTimeout(function(){
            deHighlight7();
          }, 1000); 
        }
        if (e.key === 'v'){
          Ax3pr.currentTime = 0;
          Ax3pr.play();
          highlight8();
          document.getElementById("vypis").innerHTML = "A#";
          setTimeout(function(){
            deHighlight8();
          }, 1000); 
        }
        if (e.key === 'f'){
          Dx.currentTime = 0;
          Dx.play();
          highlight9();
          document.getElementById("vypis").innerHTML = "D#";
          setTimeout(function(){
            deHighlight9();
          }, 1000); 
        }
        if (e.key === 'r'){
          G3pr.currentTime = 0;
          G3pr.play();
          highlight10();
          document.getElementById("vypis").innerHTML = "G";
          setTimeout(function(){
            deHighlight10();
          }, 1000); 
        }
        if (e.key === '4'){
          C3pr.currentTime = 0;
          C3pr.play();
          highlight11();
          document.getElementById("vypis").innerHTML = "C";
          setTimeout(function(){
            deHighlight11();
          }, 1000); 
        }
        if (e.key === 'b'){
          B4pr.currentTime = 0;
          B4pr.play();
          highlight12();
          document.getElementById("vypis").innerHTML = "B";
          setTimeout(function(){
            deHighlight12();
          }, 1000); 
        }
        if (e.key === 'g'){
          E4pr.currentTime = 0;
          E4pr.play();
          highlight13();
          document.getElementById("vypis").innerHTML = "E";
          setTimeout(function(){
            deHighlight13();
          }, 1000); 
        }
        if (e.key === 't'){
          Gx4pr.currentTime = 0;
          Gx4pr.play();
          highlight14();
          document.getElementById("vypis").innerHTML = "G#";
          setTimeout(function(){
            deHighlight14();
          }, 1000); 
        }
        if (e.key === '5'){
          Cx4pr.currentTime = 0;
          Cx4pr.play();
          highlight15();
          document.getElementById("vypis").innerHTML = "C#";
          setTimeout(function(){
            deHighlight15();
          }, 1000); 
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

const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const {name} = this.elements;
  if(name.value === "G"){
    G.currentTime = 0;
    G.play();
    document.getElementById("vypis").innerHTML = "G";
    setTimeout(function(){
      document.getElementById("vypis").innerHTML = "?";
    }, 1000); 
  }
});