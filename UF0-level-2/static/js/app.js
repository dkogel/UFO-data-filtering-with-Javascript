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

//event handlers
button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() 
{
    d3.event.preventDefault();

    //get raw html input
    let dateInputRaw = d3.select("#datetime");
    let cityInputRaw = d3.select("#city");
    let stateInputRaw = d3.select("#state1");
    let countryInputRaw = d3.select("#country1");
    let shapeInputRaw = d3.select("#shape1");

    // pull out input values and console.log them
    let dateInput = dateInputRaw.property("value");
    let cityInput = cityInputRaw.property("value");
    let stateInput = stateInputRaw.property("value");
    let countryInput = countryInputRaw.property("value");
    let shapeInput = shapeInputRaw.property("value");

    console.log(dateInput)
    console.log(cityInput)
    console.log(stateInput)
    console.log(countryInput)
    console.log(shapeInput)


    tbody.selectAll("tr").remove()

    let filteredData = tableData.filter(o => o.datetime == dateInput);
   
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

