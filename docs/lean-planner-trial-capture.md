# Lean Planner 360 Trial Capture Integration

This site does not currently include a backend API or an existing form handler. The landing page form in `src/App.jsx` is a frontend request flow only.

## Current frontend behavior

On submit, the page:

- validates the required browser fields: full name, corporate email, WhatsApp;
- treats company name as optional;
- uses the company name as `requestedEnvironmentName` when present;
- falls back to the person's full name as `requestedEnvironmentName` when company is blank;
- dispatches a browser event named `leanplanner360:trial_signup_requested` with the form payload;
- sends the measurement event `trial_signup` without personally identifiable information;
- redirects to `/confirmacao-teste-gratis.html`.

The confirmation page must not be treated as `trial_approved` or `trial_activated`.

## Endpoint to connect

Connect the form submission to a Lean Planner 360 backend endpoint that creates a company/environment and user in an approval queue.

Suggested endpoint:

```http
POST /api/trial-requests
Content-Type: application/json
```

Suggested payload:

```json
{
  "product": "lean_planner_360",
  "source": "google_ads_landing",
  "fullName": "User Name",
  "email": "user@company.com",
  "whatsapp": "+5518999999999",
  "company": "Company name or empty string",
  "requestedEnvironmentName": "Company name or User Name",
  "requestedStatus": "awaiting_approval"
}
```

Required backend behavior:

- create the user with status `awaiting_approval`;
- create or queue the company/environment using `requestedEnvironmentName`;
- do not activate document integrations for this user at request time;
- notify the Vértice team to collect schedule, project and document files for initial import;
- return a non-sensitive request id, for example `{ "requestId": "...", "status": "awaiting_approval" }`.

## Measurement events

Already implemented on submit:

```js
gtag('event', 'trial_signup', {
  product: 'lean_planner_360',
  source: 'google_ads_landing',
  has_company: true,
  request_status: 'awaiting_approval',
  account_creation_mode: 'pending_backend_integration'
})
```

Events to add in the Lean Planner 360 platform, not on the public confirmation page:

- `trial_approved`: fire when the Vértice team approves the request and releases access.
- `trial_activated`: fire when the user first accesses or activates the approved evaluation account.

Do not send names, emails, phone numbers or other PII to Google Analytics or Google Ads events.
