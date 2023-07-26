let array = [];
let x = `<i class="fas fa-times" style="font-size: 40px; color: red; text-align: center"></i> `;
let o = `<i class="fab fa-opera" style="font-size: 40px; color: aqua; text-align: center"></i>`;
let count = 1;
let player1, player2;
let point1 = 0;
let point2 = 0;

player1 = prompt("player1 i daxil et");
player2 = prompt("player2 ni daxil et");

Start();
function Start(){
document.querySelector("#show").innerHTML = player1 +  " : " + point1;
document.querySelector("#show2").innerHTML = player2 + " : " + point2;
Arr();
Table();
}


function Table(){
let table = "";
for (let i = 0; i < 3; i++){
table += `<tr>`;
for(let j = 0; j < 3; j++){
table += `<td onclick="Click(${i},${j})">  ${array[i][j] == undefined ? " " : array[i][j] } </td>`;
}
table += `</tr>`;
}
document.querySelector("table").innerHTML = table;
}


                                                            function Arr(){
                                                            for(let i = 0 ; i<3; i++){
                                                            array[i] = [];
                                                            }
                                                            }


                                                                                                            function Click(i,j){
                                                                                                            if(array[i][j] == undefined){
                                                                                                            if(count%2==0){
                                                                                                            array[i][j] = o;
                                                                                                            }else{
                                                                                                            array[i][j] = x;
                                                                                                            }
                                                                                                            count++;
                                                                                                            Table();
                                                                                                            setTimeout(Check, 250); 
                                                                                                            }
                                                                                                            }


function Check(){
for(let i = 0 ;i<3;i++){
if(array[i][0] !=undefined && array[i][0] == array[i][1] && array[i][1] == array[i][2]){
Finish(array[i][0]);
// vertical
}
}
for(let i = 0 ;i<3;i++){
if(array[0][i] !=undefined && array[0][i] == array[1][i] && array[1][i] == array[2][i]){
Finish(array[0][i]);
// horizontal
}
}
if(array[0][0] !=undefined && array[0][0] == array[1][1] && array[1][1] == array[2][2]){
Finish(array[0][0]);
// dioganal
}
if(array[0][2] !=undefined && array[0][2] == array[1][1] && array[1][1] == array[2][0]){
Finish(array[0][2]);
// dioganal
}
if(count == 10){
    alert("Draw");
    Start();
    count = 1;
}
}


                                    function Winner(par){
                                    return  par == x ? player1 + " Won" : player2 + " Won";
                                    }


                                                                        function Score(par){
                                                                        return  par == x ? point1++ : point2++;
                                                                        }


                                                                                                                function Finish(par){    
                                                                                                                alert(Winner(par));
                                                                                                                Score(par);
                                                                                                                Start();
                                                                                                                count = 1;
                                                                                                                }
