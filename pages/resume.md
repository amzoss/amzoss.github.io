---
layout: page
title: Resume
permalink: /resume/
---

<div id="resume">

  <div class="btn-toolbar" role="toolbar" aria-label="Button toolbar">
    <a class="btn btn-primary" href="#education" role="button">Education</a>
    <a class="btn btn-primary" href="#work" role="button">Work Experience</a>
    <a class="btn btn-primary" href="#articles" role="button">Journal Articles</a>
    <a class="btn btn-primary" href="#chapters" role="button">Book Chapters</a>
    <a class="btn btn-primary" href="#conf-papers" role="button">Conference Papers</a>
    <a class="btn btn-primary" href="#white-papers" role="button">White Papers</a>
    <a class="btn btn-primary" href="#projects" role="button">Projects</a>
    <a class="btn btn-primary" href="#certifications" role="button">Certifications</a>
    <a class="btn btn-primary" href="#skills" role="button">Skills and Experience</a>
    <a class="btn btn-primary" href="#teaching" role="button">Teaching Activities and Presentations</a>
  </div>


  <div class="row">
    <div class="col-md-4">
      <h2 id="education">Education</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
        {% for educ in site.education %}
        <li><strong>{{ educ.institution }}</strong>. ({{ educ.year }}).<br />
        {{ educ.degree }}.
        {% if educ.thesis_title %}<br/><i>{{ educ.thesis_title }}</i> ({{ educ.thesis_type }}).{% endif %}
        {% if educ.committee %}<br/>{{ educ.committee }}.{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h2 id="work">Work Experience</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
        {% assign all_jobs = site.jobs | sort: 'sort_year' | reverse %}
        {% for job in all_jobs %}
        <li><b>{{ job.job_title }}</b> ({{ job.date_range }})<br />
        <i>{{ job.department }} &mdash; {{ job.location }}</i>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h2 id="publications">Publications</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
    <h3 id="theses">Theses</h3>
    <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
    <ul>
    {% assign all_theses = site.theses | sort: 'year' | reverse %}
    {% for thesis in all_theses %}
    <li>{{ thesis.author }} ({{ thesis.year }}).
    <i><a href="{{ thesis.thesis_url }}">{{ thesis.title }}</a></i> ({{ thesis.type }}). Supervised by {{ thesis.advisor }}. {{ thesis.dept }}, {{ thesis.university }}: {{ thesis.location }}.
    </li>
    {% endfor %}
    </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="articles">Journal Articles</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
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
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="chapters">Book Chapters</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
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
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="conf-papers">Conference Papers</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
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
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="white-papers">White Papers</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
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
    </div>
  </div>


  <div class="row">
    <div class="col-md-4">
      <h2 id="projects">Projects</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
      {% assign projs = site.projects | sort: 'sort_year' | reverse %}
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
    </div>
  </div>


  <div class="row">
    <div class="col-md-4">
      <h2 id="certifications">Certifications</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
      {% assign certs = site.certifications %}
        {% for cert in certs %}
        <li>{{ cert.certification }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>


  <div class="row">
    <div class="col-md-4">
      <h2 id="skills">Skills and Experience</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
      {% assign tools = site.tools %}
        {% for tool in tools %}
        <li><b>{{ tool.grouping }}</b>: {{ tool.tools_list }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>


  <div class="row">
    <div class="col-md-12">
      <h2 id="teaching">Teaching Activities and Presentations</h2>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
  </div>


  <div class="row">
    <div class="col-md-4">
      <h3 id="semester-courses">Semester-Length Teaching Experiences</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
      <ul>
      {% assign talks = site.presentations | where: "grouping", "semester" | sort: "sort_year" | reverse %}
        {% for talk in talks %}
        {% assign auth_end = talk.authors | slice: -1 %}
        <li>{{ talk.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
        ({{ talk.pres_date }}). <i>
        {%- if talk.pres_url != nil -%}
        <a href="{{ talk.pres_url }}">{{ talk.title }}</a>
        {%- else -%}
        {{ talk.title }}
        {%- endif -%}
        </i>. {{ talk.type }} at {{ talk.host }}, {{ talk.location }}.</li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="long-workshops">Extended Workshop Instruction Experiences</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
    <ul>
    {% assign talks = site.presentations | where: "grouping", "extended" | sort: "sort_year" | reverse %}
      {% for talk in talks %}
      {% assign auth_end = talk.authors | slice: -1 %}
      <li>{{ talk.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
      ({{ talk.pres_date }}). <i>
      {%- if talk.pres_url != nil -%}
      <a href="{{ talk.pres_url }}">{{ talk.title }}</a>
      {%- else -%}
      {{ talk.title }}
      {%- endif -%}
      </i>. {{ talk.type }} at {{ talk.host }}, {{ talk.location }}.</li>
      {% endfor %}
    </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-4">
      <h3 id="presentations">Presentations at Conferences, Professional Gatherings</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
    <ul>
    {% assign talks = site.presentations | where: "grouping", "conference" | sort: "sort_year" | reverse %}
      {% for talk in talks %}
      {% assign auth_end = talk.authors | slice: -1 %}
      <li>{{ talk.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
      ({{ talk.pres_date }}). <i>
      {%- if talk.pres_url != nil -%}
      <a href="{{ talk.pres_url }}">{{ talk.title }}</a>
      {%- else -%}
      {{ talk.title }}
      {%- endif -%}
      </i>. {{ talk.type }} at {{ talk.host }}, {{ talk.location }}.</li>
      {% endfor %}
    </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <h3 id="lectures">Guest Lectures</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
    <ul>
    {% assign talks = site.presentations | where: "grouping", "guest" | sort: "sort_year" | reverse %}
      {% for talk in talks %}
      {% assign auth_end = talk.authors | slice: -1 %}
      <li>{{ talk.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
      ({{ talk.pres_date }}). <i>
      {%- if talk.pres_url != nil -%}
      <a href="{{ talk.pres_url }}">{{ talk.title }}</a>
      {%- else -%}
      {{ talk.title }}
      {%- endif -%}
      </i>. {{ talk.type }} at {{ talk.host }}, {{ talk.location }}.</li>
      {% endfor %}
    </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <h3 id="short-workshops">Short-form Instruction Experience</h3>
      <a class="btn btn-primary" href="#resume" role="button">Top</a>
    </div>
    <div class="col-md-8">
    <ul>
    {% assign talks = site.presentations | where: "grouping", "workshop" | sort: "sort_year" | reverse %}
      {% for talk in talks %}
      {% assign auth_end = talk.authors | slice: -1 %}
      <li>{{ talk.authors }}{% if auth_end != "." and auth_end != " " %}.{% endif %}
      ({{ talk.pres_date }}). <i>
      {%- if talk.pres_url != nil -%}
      <a href="{{ talk.pres_url }}">{{ talk.title }}</a>
      {%- else -%}
      {{ talk.title }}
      {%- endif -%}
      </i>. {{ talk.type }} at {{ talk.host }}, {{ talk.location }}.</li>
      {% endfor %}
    </ul>
    </div>
  </div>
</div>
