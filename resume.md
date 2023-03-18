---
layout: page
title: Résumé
permalink: /resume/
pdf_version: 'assets/files/AngelaZoss-Resume-2023-03-18.pdf'
nav_order: 6
---

# Résumé 
{: .no_toc }

<i><a href="{{ page.pdf_version | relative_url }}" class="no-print">PDF version</a></i>

<details markdown="block" class="no-print">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
* TOC
{:toc}
</details>

## Education

{% assign sorted = site.education | sort: 'order' %}
{% for ed in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=ed.pid %}</li>
  </ul>
{% endfor %}

## Work Experience

{% assign sorted = site.job | sort: 'order' %}
{% for pos in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=pos.pid %}</li>
  </ul>
{% endfor %}

## Skills and Experience

{% assign sorted = site.tools | sort: 'order' %}
{% for tool in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=tool.pid %}</li>
  </ul>
{% endfor %}

## Projects

{% assign items = "" | split: ',' %}

{% assign proj_collections = "projects|project_archive" | split: "|" %}
{% for collection in proj_collections %}
  {% for obj in site[collection] %}
    {% assign items = items | push: obj %}
  {% endfor %}
{% endfor %}

{% assign sorted = items | sort: 'end_date' | reverse %}
{% for prj in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=prj.pid %}</li>
  </ul>
{% endfor %}

## Publications

### Theses/Dissertations

{% assign sorted = site.thesis | sort: 'order' %}
{% for ths in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=ths.pid %}</li>
  </ul>
{% endfor %}

### Journal Articles

{% assign sorted = site.journal-article | sort: 'order' %}
{% for art in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=art.pid %}</li>
  </ul>
{% endfor %}

### Book Chapters

{% assign sorted = site.book-section | sort: 'order' %}
{% for chp in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=chp.pid %}</li>
  </ul>
{% endfor %}

### Conference Papers

{% assign sorted = site.conference-paper | sort: 'year' | reverse %}
{% for cnfpap in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=cnfpap.pid %}</li>
  </ul>
{% endfor %}

### White Papers

{% assign sorted = site.white-paper | sort: 'order' %}
{% for whtpap in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=whtpap.pid %}</li>
  </ul>
{% endfor %}

## Certifications

{% assign sorted = site.certification | sort: 'order' %}
{% for cert in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=cert.pid %}</li>
  </ul>
{% endfor %}

## Awards/Honors

{% assign sorted = site.award | sort: 'order' %}
{% for awd in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=awd.pid %}</li>
  </ul>
{% endfor %}

## Event Participation

{% assign sorted = site.event | sort: 'sort_year' | reverse %}
{% for evt in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=evt.pid %}</li>
  </ul>
{% endfor %}

## Teaching Activities and Presentations

### Semester-Length Teaching Experiences

{% assign sorted = site.semester | sort: 'order' %}
{% for sem in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=sem.pid %}</li>
  </ul>
{% endfor %}

### Extended Workshop Instruction Experiences

{% assign sorted = site.extended | sort: 'order' %}
{% for ext in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=ext.pid %}</li>
  </ul>
{% endfor %}

### Presentations at Conferences, Professional Gatherings

{% assign sorted = site.conference-presentation | sort: 'order' %}
{% for confpres in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=confpres.pid %}</li>
  </ul>

{% endfor %}

### Guest Lectures

{% assign sorted = site.guest | sort: 'order' %}
{% for gst in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=gst.pid %}</li>
  </ul>
{% endfor %}

### Short-form Instruction Experience

{% assign sorted = site.workshop | sort: 'order' %}
{% for wkshp in sorted %}
  <ul>
    <li>{% include reference_formatting.html pid=wkshp.pid %}</li>
  </ul>
{% endfor %}