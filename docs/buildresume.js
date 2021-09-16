const spreadsheetId = '1ofp1zsbczW2_t_7BAizj-gO1VL3w4y2IsFtLwvIGVv8'
const parser = new PublicGoogleSheetsParser()

  
  var data = [
    {
      title: 'Education',
      sectionId: 'ed',
      rowFunction: 'edRow',
      itemFormat: 'p'
    },
    {
      title: 'Job',
      sectionId: 'work',
      rowFunction: 'workRow',
      itemFormat: 'p'
    },
    {
      title: 'Thesis',
      sectionId: 'theses',
      rowFunction: 'thesisRow',
      itemFormat: 'ul'
    },
    {
      title: 'JournalArticle',
      sectionId: 'jrnl',
      rowFunction: 'jrnlRow',
      itemFormat: 'ul'
    },
    {
      title: 'BookSection',
      sectionId: 'bkchp',
      rowFunction: 'bkchpRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePaper',
      sectionId: 'conf',
      rowFunction: 'confRow',
      itemFormat: 'ul'
    },
    {
      title: 'WhitePaper',
      sectionId: 'whitepapers',
      rowFunction: 'whtpapRow',
      itemFormat: 'ul'
    },
    {
      title: 'Project',
      sectionId: 'proj',
      rowFunction: 'projRow',
      itemFormat: 'ul'
    },
    {
      title: 'Certification',
      sectionId: 'cert',
      rowFunction: 'certRow',
      itemFormat: 'ul'
    },
    {
      title: 'Tools',
      sectionId: 'skills',
      rowFunction: 'skillsRow',
      itemFormat: 'ul'
    },
        {
      title: 'Awards',
      sectionId: 'awards',
      rowFunction: 'awardsRow',
      itemFormat: 'ul'
    },
    {
      title: 'ConferencePres',
      sectionId: 'presentations',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Extended',
      sectionId: 'long-workshops',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Guest',
      sectionId: 'lectures',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Semester',
      sectionId: 'courses',
      rowFunction: 'presRow',
      itemFormat: 'ul'
    },
    {
      title: 'Workshop',
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

  function workRow(row) {
    //console.log(row);
    var jobtitle = row.job_title ? row.job_title : "";
    var loc = row["location"] ? row["location"] : "";
    var dep = row.department ? row.department : "";
    var dateRange = row.date_range ? row.date_range : "";
    
    var output = "<b>" + jobtitle + "</b> (" + dateRange + ")<br/><i>" + dep + " &mdash; " + loc + "</i>";
    return output;

  }

  function thesisRow(row) {

    var author = row.author ? row.author : "";
    var year = row.year ? row.year : "";
    var tit = row.title ? row.title : "";
    var dep = row.dept ? row.dept : "";
    var loc = row["location"] ? row["location"] : "";
    var univ = row.university ? row.university : "";
    var advisor = row.advisor ? row.advisor : "";
    var gradDate = row.grad_date ? row.grad_date : "";
    var type = row.type ? row.type : "";
    var thesisUrl = row.thesis_url ? row.thesis_url : "";

							

    if (thesisUrl != "") {
      var title = "<a href='" + thesisUrl + "'>" + tit + "</a>";
    }
    else {
      var title = tit;
    }

    var authors = author;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <i><b>" + title + "</b></i> (" +
    type + "). Supervised by " + advisor + ". " + dep + ", " + univ + ": " + loc + ".";

    return output;

  }

  function jrnlRow(row) {

    var author = row.authors ? row.authors : "";
    var year = row.year ? row.year : "";
    var tit = row.title ? row.title : "";
    var jrnl = row.journal ? row.journal : "";
    var vol = row.volume ? row.volume : "";
    var issue = row.issue ? row.issue : "";
    var pgs = row.pages ? row.pages : "";
    var doi = row.doi ? row.doi : "";
    var jrnlUrl = row.jrnl_url ? row.jrnl_url : "";

    if (jrnlUrl != "") {
      var title = "<a href='" + jrnlUrl + "'>" + tit + "</a>";
    }
    else {
      var title = tit;
    }

    var authors = author;
    var output = authors
    + (authors.charAt(authors.length-1) == "." ? "" : ".")
    + " (" + year + "). <b>" + title + "</b>. <i>" +
    jrnl + ", " + vol + "</i>(" + issue + "), " + pgs + ".";

    if (doi != "") {
      output += " doi:<a href='https://dx.doi.org/" + doi + "'>" + doi + "</a>";
    }
    return output;

  }

  function bkchpRow(row) {

    var author = row.authors ? row.authors : "";
    var year = row.year ? row.year : "";
    var chapTitle = row.title ? row.title : "";
    var editor = row.editor ? row.editor : "";
    var bookTitle = row.book_title ? row.book_title : "";
    var place = row.place_published ? row.place_published : "";
    var publisher = row.publisher ? row.publisher : "";
    var pages = row.pages ? row.pages : "";
    var shortTitle = row.short_title ? row.short_title : "";
    var doi = row.doi ? row.doi : "";
    var chapUrl = row.chap_url ? row.chap_url : "";
    
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

    var author = row.authors ? row.authors : "";
    var year = row.year ? row.year : "";
    var confTitle = row.title ? row.title : "";
    var editor = row.editor ? row.editor : "";
    var conference = row.conference_name ? row.conference_name : "";
    var location = row.conference_location ? row.conference_location : "";
    var pages = row.pages ? row.pages : "";
    var shortTitle = row.short_title ? row.short_title : "";
    var publisher = row.publisher ? row.publisher : "";
    var doi = row.doi ? row.doi : "";
    var confUrl = row.conf_url ? row.conf_url : "";
    
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

    var author = row.authors ? row.authors : "";
    var year = row.year ? row.year : "";
    var repTitle = row.title ? row.title : "";
    var description = row["description"] ? row["description"] : "";
    var repUrl = row.rep_url ? row.rep_url : "";
    
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

    var projTitle = row.title ? row.title : "";
    var sortYear = row.sort_year ? row.sort_year : "";
    var dateRan = row.date_range ? row.date_range : "";
    var collaborators = row.collaborators ? row.collaborators : "";
    var projBlurb = row.blurb ? row.blurb : "";
    var projResp = row.responsibilities ? row.responsibilities : "";
    var projectUrl = row.project_url ? row.project_url : "";
    var projFund = row.funding ? row.funding : "";

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

    return row.certification;

  }
  
  function skillsRow(row) {

    return "<b>" + row.grouping + "</b>: " + row.tools_list;

  }
  
  function awardsRow(row) {

    var author = row.author ? row.author : "";
    var year = row.year ? row.year : "";
    var awdTitle = row.title ? row.title : "";
    var awdDesc = row["description"] ? row["description"] : "";
    var awdLoc = row["location"] ? row["location"] : "";
    var awd = row.award ? row.award : "";
    var awdUrl = row.awd_url ? row.awd_url : "";
    
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

    var author = row.authors ? row.authors : "";
    var year = row.sort_year ? row.sort_year : "";
    var presTitle = row.title ? row.title : "";
    var presLoc = row["location"] ? row["location"] : "";
    var presHost = row["host"] ? row["host"] : "";
    var presDate = row.pres_date ? row.pres_date : "";
    var presType = row.type ? row.type : "";
    var presGrouping = row.grouping ? row.grouping : "";
    var presUrl = row.pres_url ? row.pres_url : "";
    
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