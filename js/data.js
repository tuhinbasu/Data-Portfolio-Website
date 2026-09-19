// Add a new project by adding an object here — projects.html and project.html
// pick it up automatically. `categories` values should come from FILTER_CATEGORIES
// in projects.js below.

const PROJECTS = [
  {
    slug: 'sales-performance-dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Analyzed sales performance across products, countries and salespeople to surface where revenue was concentrated and where it was leaking.',
    tools: ['Excel', 'Pivot Tables', 'Data Visualization'],
    categories: ['Excel', 'Business Analysis'],
    image: 'images/projects/sales-dashboard.svg',
    overview:
      'The sales team had monthly figures scattered across regional spreadsheets with no single view of performance. Leadership couldn\u2019t easily tell which products or reps were driving growth versus which were flat.',
    objective:
      'Build a single dashboard that lets leadership compare performance across products, countries and salespeople at a glance, and spot underperforming segments early.',
    dataset:
      'Placeholder — describe the dataset: source, time range, and number of records (e.g. 18 months of transaction-level sales data, ~40,000 rows).',
    insights: [
      'Placeholder insight — e.g. one region accounted for a disproportionate share of revenue concentration.',
      'Placeholder insight — e.g. a specific product line showed a consistent seasonal dip.',
      'Placeholder insight — e.g. top-decile reps shared a common pattern worth replicating.',
    ],
    impact:
      'Placeholder — explain how this analysis informed a decision, changed a process, or set a benchmark for future reporting.',
    learned:
      'Placeholder — a short reflection on what you\u2019d do differently or what this project taught you about the data or the business.',
  },
  {
    slug: 'business-performance-analysis',
    title: 'Business Performance Analysis',
    description:
      'Explored business KPIs, trends and performance drivers to understand what was actually moving the numbers month to month.',
    tools: ['SQL', 'Excel', 'Power BI'],
    categories: ['SQL', 'Power BI', 'Business Analysis'],
    image: 'images/projects/business-performance.svg',
    overview: 'Placeholder — describe the business question this project set out to answer.',
    objective: 'Placeholder — what decision or understanding was this analysis meant to support?',
    dataset: 'Placeholder — describe the dataset: source, time range, and structure.',
    insights: ['Placeholder insight one.', 'Placeholder insight two.', 'Placeholder insight three.'],
    impact: 'Placeholder — the takeaway or decision this analysis supported.',
    learned: 'Placeholder — a short reflection on the project.',
  },
  {
    slug: 'data-cleaning-transformation',
    title: 'Data Cleaning & Transformation',
    description:
      'Transformed messy raw data into a structured dataset ready for analysis — the unglamorous work that makes everything after it possible.',
    tools: ['Excel', 'Power Query', 'SQL'],
    categories: ['Excel', 'SQL'],
    image: 'images/projects/data-cleaning.svg',
    overview:
      'Placeholder — describe the state the raw data was in and why it needed structural work before it could be analyzed.',
    objective: 'Placeholder — what did a "clean, usable" version of this dataset need to look like?',
    dataset: 'Placeholder — describe the dataset: source, format, and known quality issues.',
    insights: [
      'Placeholder insight about data quality patterns found.',
      'Placeholder insight about a recurring error or inconsistency.',
      'Placeholder insight about how the fix changed downstream numbers.',
    ],
    impact: 'Placeholder — how the cleaned dataset was used afterward, and what it unblocked.',
    learned: 'Placeholder — a short reflection on the project.',
  },
  {
    slug: 'workflow-fms-analytics',
    title: 'Workflow / FMS Analytics',
    description:
      'Analyzed task completion, pending work and operational bottlenecks to help a team see where work was actually getting stuck.',
    tools: ['Excel', 'Google Apps Script', 'Looker Studio'],
    categories: ['Business Analysis'],
    image: 'images/projects/workflow-fms.svg',
    overview:
      'Placeholder — describe the operational problem: what workflow, and what wasn\u2019t visible about it before this project.',
    objective: 'Placeholder — what did the team need to be able to see or measure?',
    dataset: 'Placeholder — describe the dataset: source system, fields tracked, volume.',
    insights: [
      'Placeholder insight about where tasks were piling up.',
      'Placeholder insight about turnaround time by team or stage.',
      'Placeholder insight about a fixable bottleneck.',
    ],
    impact: 'Placeholder — how this changed the way the workflow was managed.',
    learned: 'Placeholder — a short reflection on the project.',
  },
]

const FILTER_CATEGORIES = ['All', 'Excel', 'SQL', 'Power BI', 'Python', 'Business Analysis']
