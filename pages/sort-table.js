

function sortTable(tid, n, cid) {
	console.log("begin sorting");
	// light up the header cell while the sorting runs
	var colorBefore = document.getElementById(cid).style.backgroundColor;
	var textBefore  = document.getElementById(cid).innerHTML;
	document.getElementById(cid).innerHTML="Sorting, patience please ...";
	document.getElementById(cid).style.backgroundColor = '#FFFF00';

	// but that color change will only be rendered if enough time before the sorting starts, so using a timeout:
	setTimeout(function() {
		sortTable_afterDelay(tid, n, cid);
		
		// put back the the header cell color to show that sorting has ended
  		// document.getElementById(cid).style.backgroundColor = colorBefore;
  		console.log("end sorting");
		document.getElementById(cid).innerHTML = textBefore;
		document.getElementById(cid).style.backgroundColor = colorBefore;
	}, 50);
}
	
	
function sortTable_afterDelay(tid, n, cid) {
	// 
	// https://www.w3schools.com/howto/howto_js_sort_table.asp
	// 
	// <table id="myTable2">
	// <tr>
	// <th onclick="sortTable('myTable2', '0', 'headerCellId0')">Name</th>
	// <th onclick="sortTable('myTable2', '1', 'headerCellId1')">Name</th>
	// </tr>
	
  var table, rows, switching, i, x, y, xx, yy, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tid);
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";

  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switchingremove  is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

	  // generate the entities that can be compared:
      // first try if it is a number:
	  xx = Number(x.innerHTML.replace(',','').replace(',','').replace(',','')); // remove the thousands separator before turning into number
	  yy = Number(y.innerHTML.replace(',','').replace(',','').replace(',','')); // remove the thousands separator before turning into number
      // if not a number then compare alphabetically:
	  if (isNaN(xx)){
		xx=x.innerHTML.toLowerCase();
		yy=y.innerHTML.toLowerCase();
	  }
	  // console.log(yy);

      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        // if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { // alphabetically
		if (xx > yy) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        // if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) { // alphabetically
		if (xx < yy) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }

}
