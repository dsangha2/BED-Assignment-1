# Debugging Analysis

## Scenario 1: Health Check Endpoint Debugging

- **Breakpoint Location:** `src/app.ts`, line 21
- **Objective:** To check if the `/api/v1/health` endpoint is returning the correct server status information like status, uptime, timestamp, and version.

### Debugger Observations

- **Variable States:**
  - `status`: "OK"
  - `uptime`: Value from `process.uptime()`, changes as server runs (e.g., 12.345 seconds)
  - `timestamp`: ISO formatted timestamp (e.g., `2024-01-30T10:15:30.000Z`)
  - `version`: "1.0.0"
- **Call Stack:** The call stack shows that the request goes through Express, hits the route handler in `app.ts`, and pauses right before the response is sent back to the client.
- **Behavior:** When the breakpoint hits, the variables contain the expected values, confirming that the server status is being prepared correctly for the response.

### Analysis

- **What did you learn from this scenario?**  
  I confirmed that the health check endpoint is working as expected, returning all the necessary server details.
- **Did you observe any unexpected behavior?**  
  No, everything worked fine.
- **Are there areas for improvement?**  
  Maybe adding more details to the response, like server environment info, but it's good for now.
- **How does this enhance your understanding of the project?**  
  It helped me see how requests flow through Express and how the server handles basic health checks.

---

## Scenario 2: Portfolio Performance Calculation Debugging

- **Breakpoint Location:** `src/portfolio/portfolioPerformance.ts`, line 25
- **Objective:** To verify if the `calculatePortfolioPerformance` function correctly calculates profit/loss and assigns the right performance category based on percentage change.

### Debugger Observations

- **Variable States:**
  - `initialInvestment`: 10000
  - `currentValue`: 15000
  - `profitOrLoss`: 5000
  - `percentageChange`: 50
  - `performanceCategories`: 7
- **Call Stack:** Shows the test case triggering the function, Jest running the test, and the program pausing inside the `calculatePortfolioPerformance` function.
- **Behavior:** The function calculates values correctly. The percentage change matches the inputs, and the right message is selected from the `performanceCategories` array.

### Analysis

- **What did you learn from this scenario?**  
  I verified that both the math and the logic for selecting performance messages are working.
- **Did you observe any unexpected behavior?**  
  No, the function performed as expected.
- **Are there areas for improvement?**  
  Maybe make the conditions easier to read, but the current ternary structure is fine.
- **How does this enhance your understanding of the project?**  
  It showed me how data flows through the calculation and how conditions determine the output.

---

## Scenario 3: Jest Test Case Debugging for Health Check

- **Breakpoint Location:** `test/healthCheck.test.ts`, line 6
- **Objective:** To ensure that the Jest test correctly verifies the `/api/v1/health` endpoint's response.

### Debugger Observations

- **Variable States:**
  - `response.status`: 200
  - `response.body.status`: "OK"
  - `response.body.uptime`: A number based on server uptime
  - `response.body.timestamp`: Current date
  - `response.body.version`: "1.0.0"
- **Call Stack:** Shows Jest running the test, making a Supertest GET request to the `/api/v1/health` endpoint, and pausing to check the response.
- **Behavior:** The test pauses at the breakpoint, allowing me to inspect the response object. All properties are present and match the expected values.

### Analysis

- **What did you learn from this scenario?**  
  I confirmed that the test case properly interacts with the API and validates the response.
- **Did you observe any unexpected behavior?**  
  No, the response was accurate, and the test passed.
- **Are there areas for improvement?**  
  Adding more detailed assertions, like checking the format of the timestamp or value ranges, could improve test robustness.
- **How does this enhance your understanding of the project?**  
  It helped me see how well the tests are connected to the API, ensuring that my endpoints work as expected.