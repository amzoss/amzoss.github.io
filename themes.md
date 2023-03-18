---
layout: page
title: Areas of Focus
permalink: /areas-of-focus/
nav_order: 5
---

# {{ page.title }}

{% assign sorted = site.themes | sort: 'end_date' | reverse %}
{% for thm in sorted %}
  {% if thm.image.first %}
    {% assign img = thm.image.first %}
  {% else %}
    {% assign img = thm.image %}
  {% endif %}
  <div>
  <img src="{{ img | relative_url }}" width="150px;" style="float: right;" />
  <div style="margin-right: 160px;">
    <h2><a href="{{ thm.url | relative_url }}">{{ thm.title }}</a></h2>
    <p><em>{{ thm.date_range }}</em></p>
    <p>{{ thm.blurb | markdownify }}</p>
  </div>
  </div>
{% endfor %}
