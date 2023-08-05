---
layout: page
title: Work Experience
permalink: /work-experience/
nav_order: 3
---

# {{ page.title }}

{% assign sorted = site.job | sort: 'sort_date' | reverse %}
{% for item in sorted %}
  <div>
  <div>
    <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
    <p style="margin-bottom: 0;">{{item.department}}</p>
    <p style="margin-top: 0;"><em>{{ item.date_range }}</em></p>
    <p>{{ item.blurb | markdownify }}</p>
  </div>
  </div>
{% endfor %}
