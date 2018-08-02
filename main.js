$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data) {
        $.each(data, function(index, item) {
            var table = document.getElementById("myTable");
            var row = table.insertRow(index + 1);

            var hyperlink = "https://www.google.com/maps?q=" + item.location;
            var linkText = "<a href=" + hyperlink + "><button>Open in Google Maps</button></a>";


            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            
            cell1.innerHTML = item.name;
            cell2.innerHTML = item.description;
            cell3.innerHTML = linkText;
            


        }); 
        console.log(document.getElementById("myTable"));
    });
});


// // Find a <table> element with id="myTable":
// var table = document.getElementById("myTable");

// // Create an empty <tr> element and add it to the 1st position of the table:
// var row = table.insertRow(0);

// // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);

// // Add some text to the new cells:
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";