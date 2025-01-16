fetch("https://spreadsheets.google.com/feeds/list/1aoywcnfxah2Rkh51mS9xdfzxq2wiUT-KsPJmLq0ndcM/1/public/values?alt=json")
  .then(res => res.json())
  .then(json => {
    const data = []

    const rows = json.feed.entry

    for(const row of rows) {
      const formattedRow = {}

      for(const key in row) {
        if(key.startsWith("gsx$")) {
          formattedRow[key.replace("gsx$", "")] = row[key].$t}
      }

      data.push(formattedRow)
    }
    
    document.getElementById("city1").innerHTML = data[0].city;
    document.getElementById("country1").innerHTML = data[0].country;
    document.getElementById("plan1").innerHTML = data[0].plan;
    document.getElementById("cmim1").innerHTML = data[0].cmim;
    document.getElementById("dite1").innerHTML = data[0].dite;

    document.getElementById("city2").innerHTML = data[1].city;
    document.getElementById("country2").innerHTML = data[1].country;
    document.getElementById("plan2").innerHTML = data[1].plan;
    document.getElementById("cmim2").innerHTML = data[1].cmim;
    document.getElementById("dite2").innerHTML = data[1].dite;

    
    document.getElementById("city3").innerHTML = data[2].city;
    document.getElementById("country3").innerHTML = data[2].country;
    document.getElementById("plan3").innerHTML = data[2].plan;
    document.getElementById("cmim3").innerHTML = data[2].cmim;
    document.getElementById("dite3").innerHTML = data[2].dite;

    document.getElementById("city4").innerHTML = data[3].city;
    document.getElementById("country4").innerHTML = data[3].country;
    document.getElementById("plan4").innerHTML = data[3].plan;
    document.getElementById("cmim4").innerHTML = data[3].cmim;
    document.getElementById("dite4").innerHTML = data[3].dite;

    document.getElementById("city5").innerHTML = data[4].city;
    document.getElementById("country5").innerHTML = data[4].country;
    document.getElementById("plan5").innerHTML = data[4].plan;
    document.getElementById("cmim5").innerHTML = data[4].cmim;
    document.getElementById("dite5").innerHTML = data[4].dite;

    document.getElementById("city6").innerHTML = data[5].city;
    document.getElementById("country6").innerHTML = data[5].country;
    document.getElementById("plan6").innerHTML = data[5].plan;
    document.getElementById("cmim6").innerHTML = data[5].cmim;
    document.getElementById("dite6").innerHTML = data[5].dite;
  })

