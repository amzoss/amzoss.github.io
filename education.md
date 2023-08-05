---
layout: page
title: Education
permalink: /education/
nav_order: 2
---

# {{ page.title }}

{% assign sorted = site.education | sort: 'sort_date' | reverse %}
{% for item in sorted %}
  {% assign html = '' %}
<div>
  <div>
  <h2><b>{{item.major}}</b> {{item.minor}} ({{item.institution}}, {{item.sort_date}})</h2>
  <p class="fs-5">{{item.description}}<br/>
  {{item.labs}}</p>

  {% if item.thesis_title %}
    {% capture html %}{{item.thesis_type}}: <a href="{{item.thesis_url}}"><b><i>{{item.thesis_title}}</i></b></a>. {{item.committee}}.{% endcapture %}
  {% endif %}
  <p style="margin-left: 2em;" >{{html}}</p>
  </div>
  </div>
{% endfor %}
