## Weather Dashboard (Steps 1–6)

Author: Zsolt Földes — 2026

### Step 1 — Form Submit + Input Validation
Feature Tested
User enters a city name and submits the form.

Test Cases
| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Empty input | Message: “Please enter a city name.” (clears after 3s) | Works as expected | ✔ |
| 2 | Valid city (e.g., Dublin) | Console logs: ``Searching ``for ``city: ``Dublin`` | Works as expected | ✔ |
| 3 | Input clears after submit | Input field resets to empty | Works as expected | ✔ |

### Console Output Example
Searching for city: Dublin
Screenshot Placeholder
Add a screenshot of empty input validation here.

### Step 2 — fetchWeather() + Basic Fetch Request

Feature Tested
API request is sent and JSON is logged.

Test Cases

| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Valid city | Console logs STEP 1 → STEP 2 → STEP 3 | Works as expected | ✔ |
| 2 | Invalid city | API returns 404, JSON still logs | Works as expected | ✔ |

Console Output Example
fetchWeather called with: Dublin
STEP 1: about to call fetch with URL: ...
STEP 2: raw response: Response {status: 200, ok: true}
STEP 3: parsed JSON data: { ... }

### Step 3 — Error Handling (res.ok + catch)
Feature Tested
App handles invalid cities and API errors gracefully.

Test Cases

| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Invalid city (e.g., hvtjtjg) | Message: “City not found.” (clears after 3s) | Works as expected | ✔ |
| 2 | API returns 404 | ``.catch()`` runs, logs error | Works as expected | ✔ |
| 3 | Broken URL (forced test) | ``.catch()`` runs | Works as expected | ✔ |

Console Output Example
STEP 2: raw response: Response {status: 404, ok: false}
STEP 3: response NOT OK, status: 404
STEP 5: error in fetch chain: City not found
Screenshot Placeholder
Add a screenshot of 404 error handling.

### Step 4 — Update Current Weather UI
Feature Tested
Weather data is displayed correctly in the UI.

Test Cases

| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Dublin | City name updates | Works as expected | ✔ |
| 2 | Dublin | Temperature, humidity, wind, pressure update | Works as expected | ✔ |
| 3 | Dublin | Weather icon loads correctly | Works as expected | ✔ |
| 4 | Dublin | Date displays in DD/MM/YYYY | Works as expected | ✔ |

UI Elements Updated
- City name
- Date
- Weather icon
- Temperature
- Description
- Feels like
- Humidity
- Wind speed
- Pressure

Screenshot Placeholder
Add screenshot of updated current weather card.

### Step 5 — 5‑Day Forecast Cards
Feature Tested
Forecast cards render correctly using the 3‑hour forecast API.

Test Cases

| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Dublin | 5 forecast cards appear | Works as expected | ✔ |
| 2 | Dublin | Each card shows date, icon, temp, humidity | Works as expected | ✔ |
| 3 | Invalid city | No forecast cards shown | Works as expected | ✔ |

Screenshot Placeholder
Add screenshot of 5‑day forecast cards.

### Step 6 — Search History
Feature Tested
Recent searches are stored and clickable.

Test Cases
| Test | Input | Expected Result | Actual Result | Pass |
| --- | --- | --- | --- | --- |
| 1 | Search “Dublin” | “Dublin” appears in history list | Works as expected | ✔ |
| 2 | Click history item | Weather loads for that city | Works as expected | ✔ |
| 3 | Duplicate search | No duplicate entries | Works as expected | ✔ |
| 4 | Page reload | History persists (localStorage) | Works as expected | ✔ |

Screenshot Placeholder
Add screenshot of search history list.

### Additional Testing

Responsiveness

| Device | Expected | Actual | Pass |
| --- | --- | --- | --- |
| Mobile | Stacked layout | Works | ✔ |
| Tablet | Two-column layout | Works | ✔ |
| Desktop | Full layout | Works | ✔ |

Browser Compatibility
| Browser | Result |
| --- | --- |
| Chrome | ✔ |
| Firefox | ✔ |
| Edge | ✔ |
| Safari | ✔ |

### Validator Testing
HTML Validator
- No major errors
- Minor warnings acceptable

CSS Validator
- No errors

JS Hint
- No undefined variables
- No unused variables

### Conclusion
All features from Steps 1–6 were manually tested and passed successfully.
The Weather Dashboard behaves as expected across valid inputs, invalid inputs, and error conditions.

