---
layout: page
title: Teaching
permalink: /teaching/
nav_order: 4
---

# {{ page.title }}

I bring extensive professional development and experience in effective instruction and training techniques, including a wide range of workshops, guest lectures, professional presentations, and extended instruction sequences.

{% assign sorted = site.teaching | sort: 'end_date' | reverse %}
{% for tch in sorted %}
  <div>
    <h2><a href="{{ tch.url | relative_url }}">{{ tch.title }}</a></h2>
    <p><em>{{ tch.date_range }}</em></p>
    <p>{{ tch.blurb | markdownify }}</p>
  </div>
{% endfor %}
