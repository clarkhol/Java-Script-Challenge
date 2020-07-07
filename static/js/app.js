// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = document.getElementById("ufo-table");

function deleteAllRows() {
	for (i = 1; i < table.rows.length; i++) {
		if(table.rows.length == 1) break;
		table.deleteRow(i);
		i -= 1;
	}
}

function dateFilter() {
	txtDate = document.getElementById("datetime").value;
	deleteAllRows();
	var insertedRow = 1;
	var i;
	
	for (i = 0; i < tableData.length; i++) {
		if(txtDate != "" && txtDate != tableData[i].datetime) {
			continue;
		}
		
		var row = table.insertRow(insertedRow);
		var cell = row.insertCell(0);
		cell.innerHTML = tableData[i].datetime;
		var cell = row.insertCell(1);
		cell.innerHTML = tableData[i].city;
		var cell = row.insertCell(2);
		cell.innerHTML = tableData[i].state;
		var cell = row.insertCell(3);
		cell.innerHTML = tableData[i].country;
		var cell = row.insertCell(4);
		cell.innerHTML = tableData[i].shape;
		var cell = row.insertCell(5);
		cell.innerHTML = tableData[i].durationMinutes;
		var cell = row.insertCell(6);
		cell.innerHTML = tableData[i].comments;
		insertedRow += 1;
	}
}

dateFilter();
document.getElementById("filter-btn").addEventListener("click", dateFilter);