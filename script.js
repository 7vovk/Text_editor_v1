 window.onload = function () {

     function getId(a) {
         return document.getElementById(a);
     }
     var dfE = document.forms["editForm"];
     var dfB = document.forms["centerBtns"];
     var dfS = document.forms["styleForm"];


//When some text is inserted, it moves it to form:
     dfE.btnS.onclick = function () {
         var ta = dfE.ta.value;
         if (ta == "") {
             alert("Enter some text");
         } else {
             getId("text").innerHTML = ta + " ";
             dfE.ta.value = "";
         }
         dfE.classList.add("hiddenForm");
     }

     
//Shows bottom edit form:
     getId("edit").onclick = function () {
         dfE.ta.value = "";
         dfE.classList.remove("hiddenForm");
         document.getElementsByTagName("input")[2].classList.add("editText");
         document.getElementsByTagName("input")[3].classList.add("editText");
         dfS.classList.remove("styleFormBlock");

         
//This code gets element's tag name + information inside tags:
         var someText = getId("text").children;
         //        for(var i = 0; i<someText.length; i++){            
         //
         //             dfE.ta.value += "<" + someText[i].tagName.toLowerCase() +">" + someText[i].innerHTML + "</" + someText[i].tagName.toLowerCase() + ">" + "\n";
         //        }

//The same code with previous (for):
        [].forEach.call(someText, function (item) {
             dfE.ta.value += "<" + item.tagName.toLowerCase() + ">" + item.innerHTML + "</" + item.tagName.toLowerCase() + ">" + "\n";
         });

     }

     
//Shows bottom style form:
     getId("style").onclick = function () {
         dfE.classList.add("hiddenForm");
         dfS.classList.add("styleFormBlock");

     }

     
//Text-size:
     getId("pt12").onclick = function () {
         getId("text").style.fontSize = "12pt";
     }
     getId("pt14").onclick = function () {
         getId("text").style.fontSize = "14pt";
     }
     getId("pt16").onclick = function () {
         getId("text").style.fontSize = "16pt";
     }
     getId("pt18").onclick = function () {
         getId("text").style.fontSize = "18pt";
     }
     getId("pt20").onclick = function () {
         getId("text").style.fontSize = "20pt";
     }

     
//Select font-family:
     var selectForm = dfS.select;
     selectForm.onchange = function () {
         for (var i = 0; i < selectForm.options.length; i++) {
             var option = selectForm.options[i];
             if (option.selected) {
                 getId("text").style.fontFamily = option.value;
             }
         }
     }


     
//Text color:
     getId("textColor").onclick = function () {
         getId("textColor").addEventListener("input", function () {
             var color = getId("textColor").value;
             getId("text").style.color = color;
         }, false);
     }

     
////Converting HEX to RGBA:
     //    function hexToRGBA (hexClr, opcty){
     //        var rgb = hexClr;
     //        var a = opcty;
     //        var matches = rgb.match(/#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i);
     //        var rgba = 'rgba(' + matches.slice(1).map(function(m) { return parseInt(m, 16); }).concat(a) + ')';
     //        return rgba;
     //    }
     //    
////Background color in RGBA:
     //    getId("bgColor").onclick = function(){
     //        getId("bgColor").addEventListener("input", function() {
     //            var color = getId("bgColor").value;
     //            getId("text").style.backgroundColor = hexToRGBA(color, 0.5);
     //            
     //        }, false);
     //    }

//Background color in HEX format + transparent:
     getId("bgColor").onclick = function () {
         getId("bgColor").addEventListener("input", function () {
             var color = getId("bgColor").value;
             getId("text").style.backgroundColor = color + "80";

         }, false);
     }

     
//Make text bold if checked and normal if unchecked:
     document.forms["styleForm"].boldText.onclick = function () {
         if (this.checked == false) {
             getId("text").style.fontWeight = "normal";
         } else {
             getId("text").style.fontWeight = "bold";
         }
     }

//Make text italic if checked and normal if unchecked:
     document.forms["styleForm"].italicText.onclick = function () {
         if (this.checked == false) {
             getId("text").style.fontStyle = "normal";
         } else {
             getId("text").style.fontStyle = "italic";
         }
     }

     
//Shows big form where you can choose what to add (table or list):
     dfE.btnA.onclick = function () {
         document.getElementsByTagName("div")[1].classList.add("hiddenForm");
         document.getElementsByTagName("form")[0].classList.add("hiddenForm");
         document.getElementsByTagName("form")[1].classList.add("hiddenForm");
         document.getElementsByTagName("div")[3].classList.add("bigBox");
         document.getElementsByTagName("div")[8].classList.remove("hiddenForm");
     }

     
//Show and change Table/List menu
     if (getId("addTable").checked == true) {
         getId("table").classList.remove("hiddenForm");
         getId("list").classList.add("hiddenForm");
     }
     getId("addTable").onchange = function () {
         getId("table").classList.remove("hiddenForm");
         getId("list").classList.add("hiddenForm");
     }
     getId("addList").onchange = function () {
         getId("table").classList.add("hiddenForm");
         getId("list").classList.remove("hiddenForm");
     }

     
//Customize and add table:
     var tableLineNumber = getId("tableLines");
     var tableColunmNumber = getId("tableColunms");
     var tableCellWidth = getId("tableCellWidth");
     var tableCellHeight = getId("tableCellHeight");
     var tableBorderWidth = getId("tableBorderWidth");
     var tableBorderStyle = getId("tableBorderStyle");
     var tableBorderColor = getId("tableBorderColor");

     getId("btnCreateTable").onclick = function(){
         // if tableLineNumber or tableColunmNumber are empty - show previous window
         if (tableLineNumber.value == "" || tableColunmNumber.value == ""){
             document.getElementsByTagName("div")[1].classList.remove("hiddenForm");
             document.getElementsByTagName("form")[0].classList.remove("hiddenForm");
             document.getElementsByTagName("form")[1].classList.remove("hiddenForm");
             document.getElementsByTagName("div")[3].classList.remove("bigBox");
             document.getElementsByTagName("div")[8].classList.add("hiddenForm");
         //else - create customized table
         } else {
             dfE.ta.value += ('<table>' + ' ');
             for (var i = 1; i <= tableLineNumber.value; i++) {
                 dfE.ta.value += ('<tr>');
                 for (var j = 1; j <= tableColunmNumber.value; j++) {
                     dfE.ta.value +=('<td style="border:' + tableBorderWidth.value + 'px ' + tableBorderStyle.value + ' ' + tableBorderColor.value + '; height: ' + tableCellHeight.value + 'px; ' + 'width: ' + tableCellWidth.value + '">' + "Some text" + '</td>' + ' ');
                 }
                 dfE.ta.value += ('</tr>');
             }
             tableLineNumber.value = ""; // clear tableLineNumber
             tableColunmNumber.value = ""; // clear tableColunmNumber
            dfE.ta.value += ('</table>');

         document.getElementsByTagName("div")[1].classList.remove("hiddenForm");
         document.getElementsByTagName("form")[0].classList.remove("hiddenForm");
         document.getElementsByTagName("form")[1].classList.remove("hiddenForm");
         document.getElementsByTagName("div")[3].classList.remove("bigBox");
         document.getElementsByTagName("div")[8].classList.add("hiddenForm");
         }
         
     }


//Customize and add list:
     var amount = getId("elemsAmount");
     var listStyle = getId("listStyle");
     
     getId("btnCreateList").onclick = function(){
         // if number of elements is empty - show previous window
         if (amount.value == ""){
             document.getElementsByTagName("div")[1].classList.remove("hiddenForm");
             document.getElementsByTagName("form")[0].classList.remove("hiddenForm");
             document.getElementsByTagName("form")[1].classList.remove("hiddenForm");
             document.getElementsByTagName("div")[3].classList.remove("bigBox");
             document.getElementsByTagName("div")[8].classList.add("hiddenForm");
         //else - create customized list
         } else {
             dfE.ta.value += '<ul>';
             for (var i = 1; i <= amount.value; i++) {
                 dfE.ta.value +=('<li style="list-style: '+ listStyle.value +'">' + "Some text" + '</li>' + ' ');
             }
             dfE.ta.value += '</ul>'    ;
             amount.value = ""; // clear list amount number

         document.getElementsByTagName("div")[1].classList.remove("hiddenForm");
         document.getElementsByTagName("form")[0].classList.remove("hiddenForm");
         document.getElementsByTagName("form")[1].classList.remove("hiddenForm");
         document.getElementsByTagName("div")[3].classList.remove("bigBox");
         document.getElementsByTagName("div")[8].classList.add("hiddenForm");
         }
         
     }







 };
