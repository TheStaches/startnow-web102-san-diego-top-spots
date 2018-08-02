$(document).ready(function() {
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
    });
});