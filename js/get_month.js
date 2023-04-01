const new_date = new Date()
const month = new_date.getMonth();
let month_output = month + 1;

const month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    window.document.write(
        "<th class='number_month'>" + month_output + "月<th>" + "<th class='english_ month'>" + month_name[month] + "<th>"
    )