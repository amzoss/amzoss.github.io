const spreadsheetId = '1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8'
const parser = new PublicGoogleSheetsParser()

  
  var data = [
    {
      title: 'Education',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/1/public/values?alt=json',
      sectionId: 'ed',
      rowFunction: 'edRow',
      itemFormat: 'p'
    },
    {
      title: 'Job',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/2/public/values?alt=json',
      sectionId: 'work',
      rowFunction: 'workRow',
      itemFormat: 'p'
    },
    {
      title: 'Thesis',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/3/public/values?alt=json',
      sectionId: 'theses',
      rowFunction: 'thesisRow',
      itemFormat: 'ul'
    },
    {
      title: 'JournalArticle',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/4/public/values?alt=json',
      sectionId: 'jrnl',
      rowFunction: 'jrnlRow',
      itemFormat: 'ul'
    },
    {
      title: 'BookSection',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/5/public/values?alt=json',
      sectionId: 'bkchp',
      rowFunction: 'bkchpRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePaper',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/6/public/values?alt=json',
      sectionId: 'conf',
      rowFunction: 'confRow',
      itemFormat: 'ul'
    },
    {
      title: 'WhitePaper',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/7/public/values?alt=json',
      sectionId: 'whitepapers',
      rowFunction: 'whtpapRow',
      itemFormat: 'ul'
    },
    {
      title: 'Project',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/8/public/values?alt=json',
      sectionId: 'proj',
      rowFunction: 'projRow',
      itemFormat: 'ul'
    },
    {
      title: 'Certification',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/9/public/values?alt=json',
      sectionId: 'cert',
      rowFunction: 'certRow',
      itemFormat: 'ul'
    },
    {
      title: 'Tools',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/10/public/values?alt=json',
      sectionId: 'skills',
      rowFunction: 'skillsRow',
      itemFormat: 'ul'
    },
        {
      title: 'Awards',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/11/public/values?alt=json',
      sectionId: 'awards',
      rowFunction: 'awardsRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePres',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/12/public/values?alt=json',
      sectionId: 'presentations',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Extended',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/13/public/values?alt=json',
      sectionId: 'long-workshops',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Guest',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/14/public/values?alt=json',
      sectionId: 'lectures',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Semester',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/15/public/values?alt=json',
      sectionId: 'courses',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Workshop',
      url: 'https://spreadsheets.google.com/feeds/list/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/16/public/values?alt=json',
      sectionId: 'workshops',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    }


  ]

// TODO: add section title to data object and pass it through to genBuild?


  function init() {
    for (var s = 0; s < data.length; s++) {
      //console.log(s);
      let url = data[s].url;
      let elem = data[s].sectionId;
      let rowFun = data[s].rowFunction;
      let itmFrmt = data[s].itemFormat;
      let sheetTitle = data[s].title;
      
      parser.parse(spreadsheetId, sheetTitle).then((items) => {
        // items should be [{ a: 10, b: 20, c: 30 }, { a: 40, b: 50, c: 60 }, { a: 70, b: 80, c: 90 }]   
        console.log(items);
        genBuild(items, elem, rowFun, itmFrmt);
      })

/*
      fetch(url)
      .then(res => res.json())
      .then(allData => {
        //console.log(allData.feed.title.$t);
        genBuild(allData, elem, rowFun, itmFrmt);
      })
      .catch(err => { throw err });
*/      
      
    }
  }

  function genBuild(allData, elem, rowFun, itmFrmt) {

    //var title = allData.feed.title.$t;
    //var entries = allData.feed.entry;
    var entries = allData;
    var htmlObj = "";

    var fnstring = rowFun;
    var fn = window[fnstring];
    if (!typeof fn === "function") {
      return "Row function not found."
    }

    switch(itmFrmt) {
      case 'p':
        for (var i = 0; i < entries.length; i++) {
          htmlObj += "<p>" + fn(entries[i]); + "</p>"
        }
        break;
      case 'ul':
        htmlObj += "<ul>";
        for (var i = 0; i < entries.length; i++) {
          htmlObj += "<li>" + fn(entries[i]) + "</li>"
        }
        htmlObj += "</ul>";
        break;
    }

    document.getElementById(elem).innerHTML = htmlObj;
  }



  function edRow(row) {
    var inst = row.institution ? row.institution : "";
    var year = row.year ? row.year : "";
    var deg = row.degree ? row.degree : "";
    var thesisTitle = row.thesis_title ? row.thesis_title : "";
    var thesisType = row.thesis_type ? row.thesis_type : "";
    var comm = row.committee ? row.committee : "";

    var output = inst + ". (" + year + "). " + deg + ".";

    if (thesisTitle != "") {
      output += " <b><i>" + thesisTitle + "</i></b> (" + thesisType + "). " + comm + ".";
    }

    return output;
  }

/*
  function workRow(row) {
    //console.log(row);

    var output = "<b>" + row.gsx$jobtitle.$t + "</b> (" + row.gsx$daterange.$t + ")<br/><i>" + row.gsx$department.$t + " &mdash; " + row.gsx$location.$t + "</i>";
    return output;

  }

  function thesisRow(row) {

    if (row.gsx$thesisurl.$t != "") {
      var title = "<a href='" + row.gsx$thesisurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$author.$t;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + row.gsx$year.$t + "). <i><b>" + title + "</b></i> (" +
    row.gsx$type.$t + "). Supervised by " + row.gsx$advisor.$t + ". " + row.gsx$dept.$t + ", " + row.gsx$university.$t + ": " + row.gsx$location.$t + ".";

    return output;

  }

  function jrnlRow(row) {

    if (row.gsx$jrnlurl.$t != "") {
      var title = "<a href='" + row.gsx$jrnlurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$authors.$t;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + row.gsx$year.$t + "). <b>" + title + "</b>. <i>" +
    row.gsx$journal.$t + ", " + row.gsx$volume.$t + "</i>(" + row.gsx$issue.$t + "), " + row.gsx$pages.$t + ".";

    if (row.gsx$doi.$t != "") {
      output += " doi:<a href='https://dx.doi.org/" + row.gsx$doi.$t + "'>" + row.gsx$doi.$t + "</a>";
    }
    return output;

  }

  function bkchpRow(row) {

    //add in logic for when there's no data in pages, publisher, placePublished

    if (row.gsx$chapurl.$t != "") {
      var title = "<a href='" + row.gsx$chapurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$authors.$t;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + row.gsx$year.$t + "). <b>" + title + "</b>. In " +
    row.gsx$editor.$t + " (Eds.), <i>" + row.gsx$booktitle.$t + "</i> (pp. " + row.gsx$pages.$t + "). " + row.gsx$placepublished.$t + ": " + row.gsx$publisher.$t + ".";

    if (row.gsx$doi.$t != "") {
      output += " doi:<a href='https://dx.doi.org/" + row.gsx$doi.$t + "'>" + row.gsx$doi.$t + "</a>";
    }
    return output;

  }

  function confRow(row) {

    //add in logic for when there's no data in pages, publisher, placePublished

    if (row.gsx$confurl.$t != "") {
      var title = "<a href='" + row.gsx$confurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$authors.$t;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + row.gsx$year.$t + "). <b>" + title + "</b>. Paper presented at <i>" +
    row.gsx$conferencename.$t + "</i>, " + row.gsx$conferencelocation.$t + ".";

    if (row.gsx$doi.$t != "") {
      output += " doi:<a href='https://dx.doi.org/" + row.gsx$doi.$t + "'>" + row.gsx$doi.$t + "</a>";
    }
    return output;

  }

  function whtpapRow(row) {

    //add in logic for when there's no data in pages, publisher, placePublished

    if (row.gsx$repurl.$t != "") {
      var title = "<a href='" + row.gsx$repurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$authors.$t;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " ("
    + row.gsx$year.$t + "). <b>"
    + title
    + "</b>. "
    + row.gsx$description.$t
    + ".";

    return output;

  }

  function projRow(row) {

    if (row.gsx$projecturl.$t != "") {
      var title = "<a href='" + row.gsx$projecturl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var daterange = row.gsx$daterange.$t;

    if (daterange.length > 0) {
      daterange = "(" + daterange + ")"
    }


    var authors = row.gsx$collaborators.$t;

    if (authors.length > 0) {
      authors = "<p>Collaborators: " + authors + "</p>"
    }

    var blurb = row.gsx$blurb.$t;

    if (blurb.length > 0) {
      blurb = "<p><i>" + blurb + "</i></p>"
    }

    var responsibilities = row.gsx$responsibilities.$t;

    if (responsibilities.length > 0) {
      responsibilities = "<p>Responsibilities:</p>" + responsibilities + "<p></p>"
    }

    var funding = row.gsx$funding.$t;

    if (funding.length > 0) {
      funding = "<p>" + funding + "</p>"
    }


    var output = "<b><i>" + title + "</i></b> "
    + daterange
    + authors
    + blurb
    + responsibilities
    + funding

    return output;

  }
  
  function certRow(row) {

    return row.gsx$certification.$t;

  }
  
  function skillsRow(row) {

    return "<b>" + row.gsx$grouping.$t + "</b>: " + row.gsx$toolslist.$t;

  }
  
  function awardsRow(row) {

    //add in logic for when there's no data in pages, publisher, placePublished

    if (row.gsx$awdurl.$t != "") {
      var title = "<a href='" + row.gsx$awdurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$author.$t;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " ("
    + row.gsx$year.$t + "). <b>"
    + title
    + "</b>. "
    + row.gsx$description.$t
    + ". "
    + row.gsx$location.$t
    + ". Won “"
    + row.gsx$award.$t
    + "” award.";

    return output;

  }

function presRow(row) {

  if (row.gsx$presurl.$t != "") {
      var title = "<a href='" + row.gsx$presurl.$t + "'>" + row.gsx$title.$t + "</a>";
    }
    else {
      var title = row.gsx$title.$t;
    }

    var authors = row.gsx$authors.$t;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + row.gsx$presdate.$t + "). <b>" + title + "</b>. " +
    row.gsx$type.$t + " at " + row.gsx$host.$t + "</i>, " + row.gsx$location.$t + ".";

    return output;
    

  }

*/

    
  document.addEventListener('DOMContentLoaded', init)