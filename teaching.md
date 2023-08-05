---
layout: page
title: Teaching
permalink: /teaching/
nav_order: 5
---

# {{ page.title }}

<div class="highlight" style="padding: 1em 1.5em .5em 1.5em; margin-top: 1.75em;">
<p>I bring extensive professional development and experience in effective instruction and training techniques, including a wide range of workshops, guest lectures, professional presentations, and extended instruction sequences.</p>
</div>

{% assign sorted = site.teaching | sort: 'end_date' | reverse %}
{% for tch in sorted %}
  <div>
    <h2><a href="{{ tch.url | relative_url }}">{{ tch.title }}</a></h2>
    <p><em>{{ tch.date_range }}</em></p>
    <p>{{ tch.blurb | markdownify }}</p>
  </div>
{% endfor %}
