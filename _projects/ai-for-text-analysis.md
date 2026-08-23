---
pid: ai-for-text-analysis
title: AI for Text Analysis
sort_year: 2025
sort_date: 2025-12-01
end_date: 2025-12-01
date_range: August 2025 to November 2025
blurb: Tested out Duke's AI infrastructure through projects that use LLMs to generate summaries of text corpora.
label: AI for Text Analysis
order: '02'
layout: project_post
image: 'assets/images/RAG-diagram.png'
image_alt: 'A diagram showing how a GPT transforms documents into embeddings and prompts into queries, and then returns ranked results.'
related-links: 
  - <a href="https://ai.duke.edu/ai-report/">AI at Duke Steering Committee Report to the Provost</a>
theme: 
  - research-and-assessment
  - assessment-user-experience
featured: true
---

As an early exploration of Duke's centralized AI infrastructure, I attempted to set up a GPT with a corpus of scholarly articles and a system prompt to help summarize the content of the articles. The project was instrumental in developing a working understanding of RAG processes, the impact of different embedding configurations, and the importance of limiting context size when developing cost-conscious AI solutions.

This exploration was followed quickly by a high-stakes use case. Duke Libraries partnered with the AI at Duke Steering Committee to design and distribute a faculty-wide survey on their use of AI and their understanding of the evolving AI environment. The survey generated over 800 responses, and a tightened timeline meant that over 2,000 free-text responses needed to be analyzed and summarized in a single week by a single person. I manually coded questions with a small number of responses, but for questions with a large number, I built a system to segment the responses and iteratively summarize them into themes that were then also summarized together. I tested multiple models, included randomization for how the responses were segmented, generated multiple summaries for each segment, and compared the results to my own coding of a small batch of responses to confirm accuracy of the output. The final summaries were manually reviewed and blended before being included in the report.

I automated the AI model configuration and prompting process using Duke's AI Gateway, which provides LiteLLM API keys to incorporate Duke's hosted models into development projects. I wrote all project code in R using Positron, which has AI assistance built in (in this case, driven by a GitHub Copilot Pro account obtained via GitHub Education). The AI assistant partnered in writing code by making auto-complete suggestions for lines of code and by answering direct questions in a chat-like interface. 