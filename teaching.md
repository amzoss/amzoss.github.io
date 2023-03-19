---
layout: page
title: Teaching
permalink: /teaching/
nav_order: 4
---

# {{ page.title }}

I bring extensive professional development and experience in effective instruction and training techniques, including over 100 workshops, guest lectures, and conference presentations.

{% assign sorted = site.teaching | sort: 'end_date' | reverse %}
{% for tch in sorted %}
  {% if tch.image.first %}
    {% assign img = tch.image.first %}
  {% else %}
    {% assign img = tch.image %}
  {% endif %}
  {% assign image_alt = tch.image_alt %}
  <div>
  <img src="{{ img | relative_url }}" alt="{{ image_alt }}" width="150px;" style="float: right;" />
  <div style="margin-right: 160px;">
    <h2><a href="{{ tch.url | relative_url }}">{{ tch.title }}</a></h2>
    <p><em>{{ tch.date_range }}</em></p>
    <p>{{ tch.blurb | markdownify }}</p>
  </div>
  </div>
{% endfor %}
