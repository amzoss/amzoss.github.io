  var data = [
    {
      title: 'Education',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Education?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'ed',
      rowFunction: 'edRow',
      itemFormat: 'p'
    },
    {
      title: 'Job',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Job?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'work',
      rowFunction: 'workRow',
      itemFormat: 'p'
    },
    {
      title: 'Thesis',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Thesis?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'theses',
      rowFunction: 'thesisRow',
      itemFormat: 'ul'
    },
    {
      title: 'JournalArticle',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/JournalArticle?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'jrnl',
      rowFunction: 'jrnlRow',
      itemFormat: 'ul'
    },
    {
      title: 'BookSection',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/BookSection?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'bkchp',
      rowFunction: 'bkchpRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePaper',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/ConferencePaper?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'conf',
      rowFunction: 'confRow',
      itemFormat: 'ul'
    },
    {
      title: 'WhitePaper',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/WhitePaper?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'whitepapers',
      rowFunction: 'whtpapRow',
      itemFormat: 'ul'
    },
    {
      title: 'Project',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Project?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'proj',
      rowFunction: 'projRow',
      itemFormat: 'ul'
    },
    {
      title: 'Certification',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Certification?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'cert',
      rowFunction: 'certRow',
      itemFormat: 'ul'
    },
    {
      title: 'Tools',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Tools?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'skills',
      rowFunction: 'skillsRow',
      itemFormat: 'ul'
    },
        {
      title: 'Awards',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Awards?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'awards',
      rowFunction: 'awardsRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePres',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/ConferencePres?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'presentations',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Extended',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Extended?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'long-workshops',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Guest',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Guest?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'lectures',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Semester',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Semester?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'courses',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Workshop',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8/values/Workshop?key=AIzaSyDPvVX1Khq7tE2SJTOEw7LMfTa-aVkGszs',
      sectionId: 'workshops',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    }


  ]

// TODO: add section title to data object and pass it through to genBuild?


  function init() {
    for (var s = 0; s < data.length; s++) {
      //console.log(data[s]);
      let url = data[s].url;
      let elem = data[s].sectionId;
      let rowFun = data[s].rowFunction;
      let itmFrmt = data[s].itemFormat;
      fetch(url)
      //.then(res => console.log(res))
      .then(res => res.json())
      //.then(data => console.log(data))
      .then(allData => {
        //console.log(allData.feed.title.$t);
        genBuild(allData, elem, rowFun, itmFrmt);
      })
      .catch(err => { throw err });
    }
  }

  function genBuild(allData, elem, rowFun, itmFrmt) {

    //var title = allData.feed.title.$t;
    var entries = allData.values;
    entries.shift();
    console.log(entries);
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
    var inst = row[1] ? row[1] : "";
    var year = row[2] ? row[2] : "";
    var deg = row[3] ? row[3] : "";
    var thesisTitle = row[4] ? row[4] : "";
    var thesisType = row[5] ? row[5] : "";
    var comm = row[6] ? row[6] : "";

    var output = inst + ". (" + year + "). " + deg + ".";

    if (thesisTitle != "") {
      output += " <b><i>" + thesisTitle + "</i></b> (" + thesisType + "). " + comm + ".";
    }

    return output;
  }

  function workRow(row) {
    //console.log(row);
    var title = row[1] ? row[1] : "";
    var location = row[2] ? row[2] : "";
    var dep = row[3] ? row[3] : "";
    var daterange = row[4] ? row[4] : "";
    var sortyear = row[5] ? row[5] : "";

    

    var output = "<b>" + title + "</b> (" + daterange + ")<br/><i>" + dep + " &mdash; " + location + "</i>";
    return output;

  }

  function thesisRow(row) {
    var author = row[1] ? row[1] : "";
    var year = row[2] ? row[2] : "";
    var thesisTitle = row[3] ? row[3] : "";
    var dept = row[4] ? row[4] : "";
    var location = row[5] ? row[5] : "";
    var university = row[6] ? row[6] : "";
    var advisor = row[7] ? row[7] : "";
    var gradDate = row[8] ? row[8] : "";
    var type = row[9] ? row[9] : "";
    var thesisUrl = row[10] ? row[10] : "";

    if (thesisUrl != "") {
      var title = "<a href='" + thesisUrl + "'>" + thesisTitle + "</a>";
    }
    else {
      var title = thesisTitle;
    }

    var authors = author;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <i><b>" + title + "</b></i> (" +
    type + "). Supervised by " + advisor + ". " + dept + ", " + university + ": " + location + ".";

    return output;

  }

  function jrnlRow(row) {

    var author = row[2] ? row[2] : "";
    var year = row[3] ? row[3] : "";
    var artTitle = row[4] ? row[4] : "";
    var journal = row[5] ? row[5] : "";
    var volume = row[6] ? row[6] : "";
    var issue = row[7] ? row[7] : "";
    var pages = row[8] ? row[8] : "";
    var doi = row[9] ? row[9] : "";
    var artUrl = row[10] ? row[10] : "";
    
    if (artUrl != "") {
      var title = "<a href='" + artUrl + "'>" + artTitle + "</a>";
    }
    else {
      var title = artTitle;
    }

    var authors = author;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <b>" + title + "</b>. <i>" +
    journal + ", " + volume + "</i>(" + issue + "), " + pages + ".";

    if (doi != "") {
      output += " doi:<a href='https://dx.doi.org/" + doi + "'>" + doi + "</a>";
    }
    return output;

  }

  function bkchpRow(row) {

    var author = row[2] ? row[2] : "";
    var year = row[3] ? row[3] : "";
    var chapTitle = row[4] ? row[4] : "";
    var editor = row[5] ? row[5] : "";
    var bookTitle = row[6] ? row[6] : "";
    var place = row[7] ? row[7] : "";
    var publisher = row[8] ? row[8] : "";
    var pages = row[9] ? row[9] : "";
    var shortTitle = row[10] ? row[10] : "";
    var doi = row[11] ? row[11] : "";
    var chapUrl = row[12] ? row[12] : "";

    if (chapUrl != "") {
      var title = "<a href='" + chapUrl + "'>" + chapTitle + "</a>";
    }
    else {
      var title = chapTitle;
    }

    var authors = author;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <b>" + title + "</b>. In " +
    editor + " (Eds.), <i>" + bookTitle + "</i>" + 
    (pages != "" ? " (pp. " + pages + ")" : "") + ". " + 
    place + (place == "" || publisher == "" ? "" : ": ") + 
    publisher + (publisher.charAt(publisher.length-1) == "." ? "" : ".");

    if (doi != "") {
      output += " doi:<a href='https://dx.doi.org/" + doi + "'>" + doi + "</a>";
    }
    return output;

  }

  function confRow(row) {

    var author = row[2] ? row[2] : "";
    var year = row[3] ? row[3] : "";
    var confTitle = row[4] ? row[4] : "";
    var editor = row[5] ? row[5] : "";
    var conference = row[6] ? row[6] : "";
    var location = row[7] ? row[7] : "";
    var pages = row[8] ? row[8] : "";
    var shortTitle = row[9] ? row[9] : "";
    var publisher = row[10] ? row[10] : "";
    var doi = row[11] ? row[11] : "";
    var confUrl = row[12] ? row[12] : "";

    if (confUrl != "") {
      var title = "<a href='" + confUrl + "'>" + confTitle + "</a>";
    }
    else {
      var title = confTitle;
    }

    var authors = author;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <b>" + title + "</b>. Paper presented at <i>" +
    conference + "</i>, " + location + ".";

    if (doi != "") {
      output += " doi:<a href='https://dx.doi.org/" + doi + "'>" + doi + "</a>";
    }
    return output;

  }

  function whtpapRow(row) {

    //add in logic for when there's no data in pages, publisher, placePublished

    var author = row[2] ? row[2] : "";
    var year = row[3] ? row[3] : "";
    var repTitle = row[4] ? row[4] : "";
    var description = row[5] ? row[5] : "";
    var repUrl = row[6] ? row[6] : "";

    if (repUrl != "") {
      var title = "<a href='" + repUrl + "'>" + repTitle + "</a>";
    }
    else {
      var title = repTitle;
    }

    var authors = author;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " ("
    + year + "). <b>"
    + title
    + "</b>. "
    + description
    + ".";

    return output;

  }

  function projRow(row) {

    var projTitle = row[1] ? row[1] : "";
    var sortYear = row[2] ? row[2] : "";
    var dateRan = row[3] ? row[3] : "";
    var collaborators = row[4] ? row[4] : "";
    var projBlurb = row[5] ? row[5] : "";
    var projResp = row[6] ? row[6] : "";
    var projectUrl = row[7] ? row[7] : "";
    var projFund = row[8] ? row[8] : "";

    if (projectUrl != "") {
      var title = "<a href='" + projectUrl + "'>" + projTitle + "</a>";
    }
    else {
      var title = projTitle;
    }

    var daterange = dateRan;

    if (daterange.length > 0) {
      daterange = "(" + daterange + ")"
    }


    var authors = collaborators;

    if (authors.length > 0) {
      authors = "<p>Collaborators: " + authors + "</p>"
    }

    var blurb = projBlurb;

    if (blurb.length > 0) {
      blurb = "<p><i>" + blurb + "</i></p>"
    }

    var responsibilities = projResp;

    if (responsibilities.length > 0) {
      responsibilities = "<p>Responsibilities:</p>" + responsibilities + "<p></p>"
    }

    var funding = projFund;

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

    return row[1];

  }
  
  function skillsRow(row) {

    return "<b>" + row[1] + "</b>: " + row[2];

  }
  
  function awardsRow(row) {

    var author = row[1] ? row[1] : "";
    var year = row[2] ? row[2] : "";
    var awdTitle = row[3] ? row[3] : "";
    var awdDesc = row[4] ? row[4] : "";
    var awdLoc = row[5] ? row[5] : "";
    var awd = row[6] ? row[6] : "";
    var awdUrl = row[7] ? row[7] : "";

    if (awdUrl != "") {
      var title = "<a href='" + awdUrl + "'>" + awdTitle + "</a>";
    }
    else {
      var title = awdTitle;
    }

    var authors = author;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " ("
    + year + "). <b>"
    + title
    + "</b>. "
    + awdDesc
    + ". "
    + awdLoc
    + ". Won “"
    + awd
    + "” award.";

    return output;

  }

function presRow(row) {

    var author = row[2] ? row[2] : "";
    var year = row[3] ? row[3] : "";
    var presTitle = row[4] ? row[4] : "";
    var presLoc = row[5] ? row[5] : "";
    var presHost = row[6] ? row[6] : "";
    var presDate = row[7] ? row[7] : "";
    var presType = row[8] ? row[8] : "";
    var presGrouping = row[9] ? row[9] : "";
    var presUrl = row[10] ? row[10] : "";

  if (presUrl != "") {
      var title = "<a href='" + presUrl + "'>" + presTitle + "</a>";
    }
    else {
      var title = presTitle;
    }

    var authors = author;

    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + presDate + "). <b>" + title + "</b>. " +
    presType + " at " + presHost + "</i>, " + presLoc + ".";

    return output;
    

  }



    
  document.addEventListener('DOMContentLoaded', init)
