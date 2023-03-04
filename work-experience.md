---
layout: page
title: Work Experience
permalink: /work-experience/
nav_order: 2
---

# {{ page.title }}

{% assign sorted = site.job | sort: 'sort_year' | reverse %}
{% for item in sorted %}
  <div>
  <div>
    <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
    <p><em>{{ item.date_range }}</em></p>
    <p>{{ item.blurb | markdownify }}</p>
  </div>
  </div>
{% endfor %}
