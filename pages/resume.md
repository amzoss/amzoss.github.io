---
layout: page
title: Resume
permalink: /resume/
---

<h2>Education</h2>

<ul>
{% for educ in site.education %}
<li>{{ educ.institution }}. ({{ educ.year }}). {{ educ.degree }}.
{% if educ.thesis_title %}<i>{{ educ.thesis_title }}</i> ({{ educ.thesis_type }}).{% endif %}
{% if educ.committee %}{{ educ.committee }}.{% endif %}
</li>
{% endfor %}
</ul>

<h2>Work Experience</h2>

<ul>
{% assign all_jobs = site.jobs | sort: 'sort_year' | reverse %}
{% for job in all_jobs %}
<li><b>{{ job.job_title }}</b> ({{ job.date_range }})<br />
<i>{{ job.department }} &mdash; {{ job.location }}</i>
</li>
{% endfor %}
</ul>

<h2>Publications</h2>

<h3>Theses</h3>

<ul>
{% assign all_theses = site.theses | sort: 'year' | reverse %}
{% for thesis in all_theses %}
<li>{{ thesis.author }} ({{ thesis.year }}).
<i><a href="{{ thesis.thesis_url }}">{{ thesis.title }}</a></i> ({{ thesis.type }}). Supervised by {{ thesis.advisor }}. {{ thesis.dept }}, {{ thesis.university }}: {{ thesis.location }}.
</li>
{% endfor %}
</ul>

<h3>Journal Articles</h3>

<ul>
{% assign articles = site.journals | sort: 'year' | reverse %}
{% for article in articles %}
{% assign auth_end = article.authors | slice: -1 %}
<li>{{ article.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
({{ article.year }}).
{% if article.doi != nil %}
<a href="https://dx.doi.org/{{ article.doi }}">{{ article.title }}</a>.
{% elsif article.jrnl_url != nil %}
<a href="{{ article.jrnl_url }}">{{ article.title }}</a>.
{% else %}
{{ article.title }}.
{% endif %}
<i>{{ article.journal }}, {{ article.volume }}</i>({{ article.issue }}), {{ article.pages }}.
{% if article.doi != nil %}doi: {{article.doi}}.{% endif %}
</li>
{% endfor %}
</ul>

<h3>Book Chapters</h3>

<ul>
{% assign chptrs = site.chapters | sort: 'year' | reverse %}
{% for chap in chptrs %}
{% assign auth_end = chap.authors | slice: -1 %}
<li>{{ chap.authors }}{%- if auth_end != "." and auth_end != " " %}.{% endif %}
({{ chap.year }}).
{% if chap.doi != nil %}
<a href="https://dx.doi.org/{{ chap.doi }}">{{ chap.title }}</a>.
{% elsif chap.chap_url != nil %}
<a href="{{ chap.chap_url }}">{{ chap.title }}</a>.
{% else %}
{{ chap.title }}.
{% endif %}
In {{ chap.editor}} (Eds.), <i>{{ chap.book_title }}</i>{% if chap.pages != nil %} (pp. {{ chap.pages }}){% endif %}.
{{ chap.place_published }}{% if chap.place_published != nil and chap.publisher != nil %}: {% endif %}{{ chap.publisher }}.
{% if chap.doi != nil %}doi: {{chap.doi}}.{% endif %}
</li>
{% endfor %}
</ul>

<h3>Conference Papers</h3>

<ul>
{% assign paps = site.conferences | sort: 'year' | reverse %}
{% for pap in paps %}
{% assign auth_end = pap.authors | slice: -1 %}
<li>{{ pap.authors }}{%- if auth_end != "." and auth_end != " " %}.{% endif %}
({{ pap.year }}).
{% if pap.doi != nil %}
<a href="https://dx.doi.org/{{ pap.doi }}"><i>{{ pap.title }}</i></a>.
{% elsif pap.conf_url != nil %}
<a href="{{ pap.conf_url }}"><i>{{ pap.title }}</i></a>.
{% else %}
<i>{{ pap.title }}</i>.
{% endif %}
Paper presented at {{ pap.conference_name }}, {{pap.conference_location}}.
{% if pap.doi != nil %}doi: {{pap.doi}}.{% endif %}
</li>
{% endfor %}
</ul>

<h3>White Papers</h3>

<ul>
{% assign reps = site.reports | sort: 'year' | reverse %}
{% for rep in reps %}
{% assign auth_end = rep.authors | slice: -1 %}
<li>{{ rep.authors }}{%- if auth_end != "." and auth_end != " " %}.{% endif %}
({{ rep.year }}).
{% if rep.doi != nil %}
<a href="https://dx.doi.org/{{ rep.doi }}"><i>{{ rep.title }}</i></a>.
{% elsif rep.rep_url != nil %}
<a href="{{ rep.rep_url }}"><i>{{ rep.title }}</i></a>.
{% else %}
<i>{{ rep.title }}</i>.
{% endif %}
{{ rep.description }}.
{% if rep.doi != nil %}doi: {{rep.doi}}.{% endif %}
</li>
{% endfor %}
</ul>

<h2>Projects</h2>

<ul>
{% assign projs = site.projects %}
{% for proj in projs %}
{% assign auth_end = proj.collaborators | slice: -1 %}
<li><b>
{% if proj.doi != nil %}
<a href="https://dx.doi.org/{{ proj.doi }}"><i>{{ proj.title }}</i></a>.
{% elsif proj.project_url != nil %}
<a href="{{ proj.project_url }}"><i>{{ proj.title }}</i></a>.
{% else %}
{{ proj.title }}.
{% endif %}</b> ({{ proj.date_range }}).<br />
{% if proj.collaborators != nil %}{{ proj.collaborators }}{%- if auth_end != nil and auth_end != "." and auth_end != " " %}.{% endif %}<br />{% endif %}
<i>{{ proj.blurb }}</i><br />
{{ proj.responsibilities | markdownify }}
</li>
{% endfor %}
</ul>

<h2>Certifications</h2>

<h2>Skills and Experience</h2>

<h2>Teaching Activities and Presentations</h2>

<h3>Semester-Length Teaching Experiences</h3>

<h3>Extended Workshop Instruction Experiences</h3>

<h3>Presentations at Conferences, Professional Gatherings</h3>

<h3>Guest Lectures</h3>

<h3>Short-form Instruction Experience</h3>
