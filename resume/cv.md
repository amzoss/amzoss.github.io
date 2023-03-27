---
layout: page
title: Curriculum Vitae
pdf_version: 'assets/files/AngelaZoss-CV-2023-03-26.pdf'
parent: Résumé
---

# Curriculum Vitae
{: .no_toc .no-print }

<p class="no-print"><i><a href="{{ page.pdf_version | relative_url }}">PDF version</a></i></p>

<div class="show-print"><strong>Email:</strong> angela.zoss@gmail.com</div>
<div class="show-print"><strong>Website:</strong> <a href="https://www.angelazoss.com/">angelazoss.com</a></div>

<details markdown="block" class="no-print">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
* TOC
{:toc}
</details>

## Education

{% assign sorted = site.education | sort: 'year' | reverse %}
  <ul>
  {% for ed in sorted %}
    <li>{% include reference_formatting.html pid=ed.pid %}</li>
  {% endfor %}
  </ul>

## Work Experience

{% assign sorted = site.job | sort: 'sort_year' | reverse %}
<ul>
{% for pos in sorted %}
    <li>{% include reference_formatting.html pid=pos.pid %}</li>
{% endfor %}
</ul>

## Professional Service and Leadership Positions

{% assign sorted = site.service | sort: 'sort_date' | reverse %}
<ul>
{% for svc in sorted %}
    <li>{% include reference_formatting.html pid=svc.pid %}</li>
{% endfor %}
</ul>

## Skills and Experience

{% assign sorted = site.tools | sort: 'order' %}
  <ul class="pagebreak">
{% for tool in sorted %}
    <li>{% include reference_formatting.html pid=tool.pid %}</li>
{% endfor %}
  </ul>

## Projects

<div class="multi-col pagebreak" >
{% assign sorted = site.projects | sort: 'end_date' | reverse %}
  <ul>
{% for prj in sorted %}
    <li>{% include reference_formatting.html pid=prj.pid %}</li>
{% endfor %}
  </ul>
</div>

## Publications

### Theses/Dissertations

{% assign sorted = site.thesis | sort: 'sort_date' | reverse %}
  <ul>
{% for ths in sorted %}
    <li>{% include reference_formatting.html pid=ths.pid %}</li>
{% endfor %}
  </ul>

### Journal Articles

{% assign sorted = site.journal-article | sort: 'sort_date' | reverse %}
  <ul>
{% for art in sorted %}
    <li>{% include reference_formatting.html pid=art.pid %}</li>
{% endfor %}
  </ul>

### Book Chapters

{% assign sorted = site.book-section | sort: 'sort_date' | reverse %}
  <ul>
{% for chp in sorted %}
    <li>{% include reference_formatting.html pid=chp.pid %}</li>
{% endfor %}
  </ul>

### Conference Papers

{% assign sorted = site.conference-paper | sort: 'sort_date' | reverse %}
  <ul>
{% for cnfpap in sorted %}
    <li>{% include reference_formatting.html pid=cnfpap.pid %}</li>
{% endfor %}
  </ul>

### White Papers

{% assign sorted = site.white-paper | sort: 'sort_date' | reverse %}
  <ul>
{% for whtpap in sorted %}
    <li>{% include reference_formatting.html pid=whtpap.pid %}</li>
{% endfor %}
  </ul>

## Certifications

{% assign sorted = site.certification | sort: 'sort_date' | reverse %}
<ul>
  {% for cert in sorted %}
    <li>{% include reference_formatting.html pid=cert.pid %}</li>
  {% endfor %}
</ul>

## Awards/Honors

{% assign sorted = site.award | sort: 'year' | reverse %}
  <ul>
{% for awd in sorted %}
    <li>{% include reference_formatting.html pid=awd.pid %}</li>
{% endfor %}
  </ul>

## Event Participation

{% assign sorted = site.event | sort: 'sort_year' | reverse %}
  <ul>
{% for evt in sorted %}
    <li>{% include reference_formatting.html pid=evt.pid %}</li>
{% endfor %}
  </ul>

## Teaching Activities and Presentations

### Semester-Length Teaching Experiences

{% assign sorted = site.semester | sort: 'sort_date' | reverse %}
  <ul>
{% for sem in sorted %}
    <li>{% include reference_formatting.html pid=sem.pid %}</li>
{% endfor %}
  </ul>

### Extended Workshop Instruction Experiences

{% assign sorted = site.extended | sort: 'sort_date' | reverse %}
  <ul>
{% for ext in sorted %}
    <li>{% include reference_formatting.html pid=ext.pid %}</li>
{% endfor %}
  </ul>

### Presentations at Conferences, Professional Gatherings

{% assign sorted = site.conference-presentation | sort: 'sort_date' | reverse %}
  <ul>
{% for confpres in sorted %}
    <li>{% include reference_formatting.html pid=confpres.pid %}</li>
{% endfor %}
  </ul>

### Guest Lectures

{% assign sorted = site.guest | sort: 'sort_date' | reverse %}
  <ul>
{% for gst in sorted %}
    <li>{% include reference_formatting.html pid=gst.pid %}</li>
{% endfor %}
  </ul>

### Short-form Instruction Experience

{% assign sorted = site.workshop | sort: 'sort_date' | reverse %}
  <ul>
{% for wkshp in sorted %}
    <li>{% include reference_formatting.html pid=wkshp.pid %}</li>
{% endfor %}
  </ul>