// from data.js
let tableData = data;


// D3 selections
let tbody = d3.select("tbody");

let filterbutton = d3.select("#filter-btn");

let resetButton = d3.select("#reset-btn")

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
filterbutton.on("click", runFilter);
resetButton.on("click", runReset);
form.on("submit", runFilter);

function runReset(){

    d3.event.preventDefault();

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
    
    // clear input fields
    document.querySelector("form").reset();
    
}

function runFilter() {
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


    

    //clear table
    tbody.selectAll("tr").remove()

    //reset filteredData
    let filteredData = tableData

    //filter data
    
    
    // filteredData = filteredData.filter(o => o.city == cityInput);
    // filteredData = filteredData.filter(o => o.state == stateInput);
    // filteredData = filteredData.filter(o => o.country == countryInput);
    // filteredData = filteredData.filter(o => o.shape == shapeInput);

   switch(dateInput) {
        case "":
           console.log("no date selected");
        break;
        default:
            filteredData = filteredData.filter(o => o.datetime == dateInput);
   }


    switch(cityInput) {
        case "":
            console.log("no city selected");
        break;
        default:
            filteredData = filteredData.filter(o => o.city == cityInput);
    } 


    switch(stateInput) {
        case "":
            console.log("no state selected");
        break;
        default:
            filteredData = filteredData.filter(o => o.state == stateInput);
    } 
        
    switch(countryInput){
        case "":
            console.log("no country selected");
        break;
        default:
            filteredData = filteredData.filter( o => o.country == countryInput);
    }


    switch(shapeInput){
        case "":
            console.log("no shape selected");
        break;
        default:
            filteredData = filteredData.filter( o => o.shape == shapeInput);
    }
   


    //add filtered data back to table
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

