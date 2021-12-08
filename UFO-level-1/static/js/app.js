// from data.js
let tableData = data;


// D3 selections
let tbody = d3.select("tbody");

let button = d3.select("#filter-btn");

let form = d3.select("#form1");


//iniatialize the table
tableData.forEach(function(sightings)
{
    let row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key,value])
    {
        let cell = row.append("td");
        cell.text(value);
    }
    );

}
);

//even handlers
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() 
{
    d3.event.preventDefault();

    //get raw html input
    let inputRaw = d3.select("#datetime");
    let input = inputRaw.property("value");
    console.log(input)

    tbody.selectAll("tr").remove()

    let filteredData = tableData.filter(o => o.datetime == input);
   
    filteredData.forEach(function(sightings)
    {
        let row = tbody.append("tr");
        Object.entries(sightings).forEach(function([key,value])
        {
            let cell = row.append("td");
            cell.text(value);
        }
        );

    }
);


}

