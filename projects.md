---
layout: page
title: Projects
permalink: /projects/
nav_order: 3
---

# {{ page.title }}

{% assign sorted = site.projects | sort: 'end_date' | reverse %}
{% for prj in sorted %}
  {% if prj.image.first %}
    {% assign img = prj.image.first %}
  {% else %}
    {% assign img = prj.image %}
  {% endif %}
  <div>
  <img src="{{ img | relative_url }}" width="150px;" style="float: right;" />
  <div style="margin-right: 160px;">
    <h2><a href="{{ prj.url | relative_url }}">{{ prj.title }}</a></h2>
    <p><em>{{ prj.date_range }}</em></p>
    <p>{{ prj.blurb | markdownify }}</p>
  </div>
  </div>
{% endfor %}