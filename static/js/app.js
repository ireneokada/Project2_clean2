console.log(1);
const url = "/flight";
console.log(3);

//d3.json(url).then((response) => {
 // const data =JSON.parse(response.replaceAll("NaN",0));
 // console.log("d3.json");
 // console.log(JSON.parse(response.replaceAll("NaN",0)));

d3.json("/flight")
  .then((response) => {
 //.then (function (response) {
  //const data =JSON.parse(response.replaceAll("NaN",0));
 // console.log("d3.json");
  //console.log(JSON.parse(response.replaceAll("NaN",0)));
  console.log(response[0]);
  const tableData = response;
  console.log(tableData[0]);
 

  //var tb = d3.select("tbody");
  $(document).ready(function () {
    $("#ufo-table").DataTable({
      data: tableData,
      columns: [
        { data: "Date" },
        { data: "Airline" },
        { data: "Flight_Num" },
        { data: "Origin" },
        { data: "Destination" },
        { data: "Air_Time" },
        { data: "Distance" },
        { data: "Dept_Time" },
        { data: "Delay" },
        { data: "Cancelled" },
        { data: "Airline_Info" },
      ],
     
      retrieve: true,
    });
  });
}).catch(console.error);
