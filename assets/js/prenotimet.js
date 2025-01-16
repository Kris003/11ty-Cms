const origin = new URLSearchParams(window.location.search).get("origin");

switch(origin){

    case "btn1":
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
  document.getElementById("paketasq").value = data[0].city;
})

  break;

  case "btn2":
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
    
    document.getElementById("paketasq").value = data[1].city;

  })

  break;

  case "btn3":
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
    
    document.getElementById("paketasq").value = data[2].city;

  })

  break;

  case "btn4":
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
    
    document.getElementById("paketasq").value = data[3].city;

  })

  break;

  case "btn5":
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
    
    document.getElementById("paketasq").value = data[4].city;

  })

  break;

  case "btn6":
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
    
    document.getElementById("paketasq").value = data[5].city;

  })

  break;

  default:
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
    
    document.getElementById("paketasq").value = data[2].city;

  })
}