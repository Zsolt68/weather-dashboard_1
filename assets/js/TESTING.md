### Weather Dashboard (Steps 1–6)

Author: Zsolt Földes — 2026

## Step 1 — Form Submit + Input Validation
Feature Tested
User enters a city name and submits the form.

Test Cases
| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Empty input | Message: “Please enter a city name.” (clears after 3s) | Works as expected | ✔ |
| 2 | Valid city (e.g., Dublin) | Console logs: ``Searching ``for ``city: ``Dublin`` | Works as expected | ✔ |
| 3 | Input clears after submit | Input field resets to empty | Works as expected | ✔ |
