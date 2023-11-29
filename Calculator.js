/**
 * 
 */
window.addEventListener("load",AddListeners);

var Equation;
Equation = 0
var P1;
P1 = ""
var P2;
P2 = ""
var Sign;
Sign = ""
var InBr;
InBr = ""
var Process;

	
function AddListeners()
{
	Keys()
	document.getElementById("btn1").addEventListener("click", One)
	document.getElementById("btn2").addEventListener("click", Two)
	document.getElementById("btn3").addEventListener("click", Three)
	document.getElementById("btn4").addEventListener("click", Four)
	document.getElementById("btn5").addEventListener("click", Five)
	document.getElementById("btn6").addEventListener("click", Six)
	document.getElementById("btn7").addEventListener("click", Seven)
	document.getElementById("btn8").addEventListener("click", Eight)
	document.getElementById("btn9").addEventListener("click", Nine)
	document.getElementById("btn0").addEventListener("click", Zero)
	document.getElementById("btnMult").addEventListener("click", Multiply)
	document.getElementById("btnDiv").addEventListener("click", Divide)
	document.getElementById("btnMin").addEventListener("click", Minus)
	document.getElementById("btnAdd").addEventListener("click", Add)
	document.getElementById("btnDec").addEventListener("click", Decimal)
	document.getElementById("btnNeg").addEventListener("click", Negative)
	document.getElementById("btnP").addEventListener("click", Percent)			
	document.getElementById("btnC").addEventListener("click", Clear)
	document.getElementById("btnEqu").addEventListener("click", Result)																
}

function Keys()
{
	if (event.key == "1"){One()}
	if (event.key == "2"){Two()}
	if (event.key == "3"){Three()}
	if (event.key == "4"){Four()}
	if (event.key == "5"){Five()}
	if (event.key == "6"){Six()}
	if (event.key == "7"){Seven()}
	if (event.key == "8"){Eight()}
	if (event.key == "9"){Nine()}
	if (event.key == "0"){Zero()}
	
}

function Clear()
{
	Process = ""
	P1 = ""
	P2 = ""
	Sign = ""
	InBr = ""
	Change()
}

function One()
{
	P2 = P2 + "1";
	Change()
}

function Two()
{
	P2 = P2 + "2";
	Change()
}

function Three()
{
	P2 = P2 + "3";
	Change()
}

function Four()
{
	P2 = P2 + "4";
	Change()
}

function Five()
{
	P2 = P2 + "5";
	Change()
}

function Six()
{
	P2 = P2 + "6";
	Change()
}

function Seven()
{
	P2 = P2 + "7";
	Change()
}

function Eight()
{
	P2 = P2 + "8";
	Change()
}

function Nine()
{
	P2 = P2 + "9";
	Change()
}
function Zero()
{
	P2 = P2 + "0";
	Change()
}

function Add()
{
	if (Sign > "" && P1 > "" || Process > "")
		Result()
	else
	P1 = P2
	P2 = ""
	Sign = "+"
	Change()
}

function Minus()
{
	if (Sign > "" && P1 > "" || Process > "")
		Result()
	else
	P1 = P2
	P2 = ""
	Sign = "-"
	Change()
}

function Multiply()
{
	if (Sign > "" && P1 > "" || Process > "")
		Result()
	else
	P1 = P2
	P2 = ""
	Sign = "x"
	Change()	
}

function Divide()
{
	if (Sign > "" && P1 > "" || Process > "")
		Result()
	else
		P1 = P2
		P2 = ""
		Sign = "/"
		Change()
}

function Negative()
{
	if (P2.includes("-") == true)
		P2 = P2.replace("-","")
	else
		P2 =  "-" + P2
		Change()
}

function Decimal()
{
	P2 = P2 + "."
	Change()
}

function Percent()
{
	P2 = (parseInt(P2) / 100).toString()
	Change()
}

function Result()
{	
	Calc()
	P1 = Process.toString()
	Sign = ""
	InBr = ""
	P2 = ""
	Change()
}

function Change()
{
	document.getElementById("screen").innerHTML = P1 +""+ Sign +""+ P2 + InBr;
}

function Calc()
{
		if (Sign == "+")
			Process = parseFloat(P1) + parseFloat(P2)
		else if (Sign == "-")
			Process = parseFloat(P1) - parseFloat(P2)
		else if (Sign == "x")
			Process = parseFloat(P1) * parseFloat(P2)
		else if (Sign == "/")
			Process = parseFloat(P1) / parseFloat(P2)	
}