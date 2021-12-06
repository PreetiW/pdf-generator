import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// For local development with `npm start`
const params =
  window.customPupeteerParams ??
  JSON.stringify({
    data: {
      response_type: 'jobs_by_date_and_template',
      dates: [
        {
          date: '2021-07-01',
          items: [
            {
              host_count: 171,
              changed_host_count: 52,
              host_task_changed_count: 64,
              host_task_count: 652,
              total_count: 38,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 171,
              changed_host_count: 52,
              host_task_changed_count: 64,
              host_task_count: 652,
              total_count: 38,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 171,
              changed_host_count: 52,
              host_task_changed_count: 64,
              host_task_count: 652,
              total_count: 38,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 8400,
              changed_host_count: 1680,
              host_task_changed_count: 1680,
              host_task_count: 16800,
              total_count: 420,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
        {
          date: '2021-08-01',
          items: [
            {
              host_count: 1181,
              changed_host_count: 255,
              host_task_changed_count: 268,
              host_task_count: 2672,
              total_count: 130,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 191,
              changed_host_count: 57,
              host_task_changed_count: 70,
              host_task_count: 692,
              total_count: 42,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 191,
              changed_host_count: 57,
              host_task_changed_count: 70,
              host_task_count: 692,
              total_count: 41,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 8380,
              changed_host_count: 1676,
              host_task_changed_count: 1676,
              host_task_count: 16760,
              total_count: 419,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
        {
          date: '2021-09-01',
          items: [
            {
              host_count: 2910,
              changed_host_count: 600,
              host_task_changed_count: 612,
              host_task_count: 6120,
              total_count: 288,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 190,
              changed_host_count: 56,
              host_task_changed_count: 68,
              host_task_count: 680,
              total_count: 48,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 190,
              changed_host_count: 56,
              host_task_changed_count: 68,
              host_task_count: 680,
              total_count: 48,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 8060,
              changed_host_count: 1612,
              host_task_changed_count: 1612,
              host_task_count: 16120,
              total_count: 403,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
        {
          date: '2021-10-01',
          items: [
            {
              host_count: 3851,
              changed_host_count: 789,
              host_task_changed_count: 801,
              host_task_count: 8012,
              total_count: 296,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 171,
              changed_host_count: 53,
              host_task_changed_count: 65,
              host_task_count: 652,
              total_count: 48,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 171,
              changed_host_count: 53,
              host_task_changed_count: 65,
              host_task_count: 652,
              total_count: 49,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 160,
              changed_host_count: 32,
              host_task_changed_count: 32,
              host_task_count: 320,
              total_count: 8,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 8400,
              changed_host_count: 1680,
              host_task_changed_count: 1680,
              host_task_count: 16800,
              total_count: 420,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
        {
          date: '2021-11-01',
          items: [
            {
              host_count: 3550,
              changed_host_count: 728,
              host_task_changed_count: 740,
              host_task_count: 7400,
              total_count: 272,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 170,
              changed_host_count: 52,
              host_task_changed_count: 64,
              host_task_count: 640,
              total_count: 48,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 170,
              changed_host_count: 52,
              host_task_changed_count: 64,
              host_task_count: 640,
              total_count: 48,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 140,
              changed_host_count: 28,
              host_task_changed_count: 28,
              host_task_count: 280,
              total_count: 7,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 7680,
              changed_host_count: 1536,
              host_task_changed_count: 1536,
              host_task_count: 15360,
              total_count: 405,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
        {
          date: '2021-12-01',
          items: [
            {
              host_count: 1,
              changed_host_count: 1,
              host_task_changed_count: 1,
              host_task_count: 12,
              total_count: 5,
              total_template_count: 1,
              id: 2,
              name: 'template_name_0',
            },
            {
              host_count: 1,
              changed_host_count: 1,
              host_task_changed_count: 1,
              host_task_count: 12,
              total_count: 4,
              total_template_count: 1,
              id: 1,
              name: 'template_name_2',
            },
            {
              host_count: 1,
              changed_host_count: 1,
              host_task_changed_count: 1,
              host_task_count: 12,
              total_count: 4,
              total_template_count: 1,
              id: 3,
              name: 'template_name_1',
            },
            {
              host_count: 0,
              changed_host_count: 0,
              host_task_changed_count: 0,
              host_task_count: 0,
              total_count: 3,
              total_template_count: 1,
              id: 9,
              name: 'template_name_40',
            },
            {
              host_count: 0,
              changed_host_count: 0,
              host_task_changed_count: 0,
              host_task_count: 0,
              total_count: 3,
              total_template_count: 1,
              id: 8,
              name: 'template_name_26',
            },
            {
              host_count: 0,
              changed_host_count: 0,
              host_task_changed_count: 0,
              host_task_count: 0,
              total_count: 3,
              total_template_count: 1,
              id: 7,
              name: 'template_name_42',
            },
            {
              host_count: 0,
              changed_host_count: 0,
              host_task_changed_count: 0,
              host_task_count: 0,
              total_count: 158,
              total_template_count: 54,
              id: -1,
              name: '54 Others',
            },
          ],
        },
      ],
      meta: {
        count: 60,
        counts: {
          '2021-07-01': {
            host_count: 9393,
            changed_host_count: 1932,
            host_task_changed_count: 1968,
            host_task_count: 19716,
            total_count: 558,
            total_template_count: 60,
          },
          '2021-08-01': {
            host_count: 10383,
            changed_host_count: 2133,
            host_task_changed_count: 2172,
            host_task_count: 21696,
            total_count: 654,
            total_template_count: 60,
          },
          '2021-09-01': {
            host_count: 11810,
            changed_host_count: 2416,
            host_task_changed_count: 2452,
            host_task_count: 24520,
            total_count: 810,
            total_template_count: 60,
          },
          '2021-10-01': {
            host_count: 13073,
            changed_host_count: 2671,
            host_task_changed_count: 2707,
            host_task_count: 27076,
            total_count: 837,
            total_template_count: 60,
          },
          '2021-11-01': {
            host_count: 11990,
            changed_host_count: 2452,
            host_task_changed_count: 2488,
            host_task_count: 24880,
            total_count: 794,
            total_template_count: 60,
          },
          '2021-12-01': {
            host_count: 3,
            changed_host_count: 3,
            host_task_changed_count: 3,
            host_task_count: 36,
            total_count: 180,
            total_template_count: 60,
          },
        },
        legend: [
          {
            host_count: 11664,
            changed_host_count: 2425,
            host_task_changed_count: 2486,
            host_task_count: 24868,
            total_count: 1029,
            total_template_count: 1,
            id: 2,
            name: 'template_name_0',
          },
          {
            host_count: 894,
            changed_host_count: 271,
            host_task_changed_count: 332,
            host_task_count: 3328,
            total_count: 228,
            total_template_count: 1,
            id: 1,
            name: 'template_name_2',
          },
          {
            host_count: 894,
            changed_host_count: 271,
            host_task_changed_count: 332,
            host_task_count: 3328,
            total_count: 228,
            total_template_count: 1,
            id: 3,
            name: 'template_name_1',
          },
          {
            host_count: 760,
            changed_host_count: 152,
            host_task_changed_count: 152,
            host_task_count: 1520,
            total_count: 41,
            total_template_count: 1,
            id: 9,
            name: 'template_name_40',
          },
          {
            host_count: 760,
            changed_host_count: 152,
            host_task_changed_count: 152,
            host_task_count: 1520,
            total_count: 41,
            total_template_count: 1,
            id: 8,
            name: 'template_name_26',
          },
          {
            host_count: 760,
            changed_host_count: 152,
            host_task_changed_count: 152,
            host_task_count: 1520,
            total_count: 41,
            total_template_count: 1,
            id: 7,
            name: 'template_name_42',
          },
          {
            host_count: 40920,
            changed_host_count: 8184,
            host_task_changed_count: 8184,
            host_task_count: 81840,
            total_count: 2225,
            total_template_count: 54,
            id: -1,
            name: '54 Others',
          },
        ],
      },
      links: {
        first:
          '/api/tower-analytics/v1/job_explorer/?limit=6&offset=0&sort_by=changed_host_count%3Adesc',
        last: '/api/tower-analytics/v1/job_explorer/?limit=6&offset=54&sort_by=changed_host_count%3Adesc',
        next: '/api/tower-analytics/v1/job_explorer/?limit=6&offset=6&sort_by=changed_host_count%3Adesc',
        prev: null,
      },
    },
    extraData: [],
    slug: 'changes_made_by_job_template',
    y: 'changed_host_count',
    label: 'Changed host count',
    xTickFormat: 'formatAsMonth',
    pageWidth: 1200,
    pageHeight: 1000,
  });

ReactDOM.render(
  <App {...JSON.parse(params)} />,
  document.getElementById('root')
);
