 function downloadCSV(myCSVobject, filename) {
   // https://developer.mozilla.org/en-US/docs/Web/API/Blob
   // Oh, and apparently Blobs don't work in IE (at not when I tested it)
   // Works in Chrome and Edge though...
   var myCsvFile = new Blob([myCSVobject], {
     type: "text/CSV; charset=UTF-8"
   });

   var myDownloadLink = document.createElement("a");
   myDownloadLink.download = filename;

   //Create the 'link' to the file
   myDownloadLink.href = window.URL.createObjectURL(myCsvFile);

   //Make sure that the link is not displayed
   myDownloadLink.style.display = "none";

   //Add the link to your DOM
   document.body.appendChild(myDownloadLink);

   //Click the invisible download link using javascript
   myDownloadLink.click();
 }



 function build_my_CSV(html, filename) {
   var myCSVarray = [];
   var rows = document.querySelectorAll("table tr");

   for (var i = 0; i < rows.length; i++) {
     var row = [],
       cols = rows[i].querySelectorAll("td, th");

     for (var j = 0; j < cols.length; j++)
       row.push(cols[j].innerText);

     myCSVarray.push(row.join(","));
   }

   // Call the Download CSV function
   downloadCSV(myCSVarray.join("\n"), filename);
 };

 // Listener on the
 //document.querySelector("button").addEventListener("click", function ()
 document.querySelector("#exportTableToCSV").addEventListener("click", function() {
   var myFileExtension = ".csv"
   var html = document.querySelector("table").outerHTML;
   var myDefaultFileName = "htmlTable" + "_" + buildDateTime() + myFileExtension;
   build_my_CSV(html, myDefaultFileName);
 });



 //Listener on the "loadFileButton" button...
 // document.querySelector("#loadFileButton").addEventListener("click", function ()
 // {
 //       //load file contents into id="testFileLoad"
 //       $("#testFileLoad").load("TestText.txt");
 // });
 //Below time code inspired by JamesWClark's (http://jsfiddle.net/JamesWClark/Ffkt5/)


 /*Line below is equivalent to
   window.onload = setInterval(displayTime,1000); */
 //Uses the file date/time suffix functions
 setInterval(() => {
   $("#localDateTime").text(buildDateTime());
 }, 1000);


 //Uses ISO format for UTC (useful if being used across multiple timezones)
 setInterval(() => {
   var now = new Date();
   $("#datetime").text(now.toISOString() + "ulu");
 }, 90);

 //Pads a single-digit number with a leading zero
 function padTwoDigit(twoFer) {
   //Yes, I know there's no error-checking. This is just a proof of concept
   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

   /*All this does is add a zero to the left of a number (as a string),
     then returns the two right-most characters of that number-string.
     Obviously, this only works correctly if the end result is a two-digit
     number...
   */
   return (("0" + twoFer).slice(-2));
 };

 function buildDateTime() {
   var dt = new Date();
   var dtFileSuffix =
     (dt.getFullYear()) + "-" +
     padTwoDigit((dt.getMonth() + 1)) + "-" +
     padTwoDigit(dt.getDate()) + "-T" +
     padTwoDigit(dt.getHours()) +
     padTwoDigit(dt.getMinutes()) +
     padTwoDigit(dt.getSeconds());
   return dtFileSuffix;
 };

 $(document).ready(() => {
   $("#toggleTable").click(() => {
     $("tbody").toggle("slow");
   });
 });

 $(document).ready(() => {
   $("#toggleToDoList").click(() => {
     $("#toDoListBod").toggle("slow");
   });
 });
