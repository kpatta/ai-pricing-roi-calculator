# AI Pricing ROI Calculator

## Overview
The AI Pricing ROI Calculator is a web-based tool designed to help product managers, AI engineers, and business leaders estimate costs, pricing strategies, and return on investment (ROI) for AI-powered products and services. It supports a wide range of AI project types, cloud LLM providers, infrastructure options, and pricing models, enabling comprehensive planning and analysis for GenAI, LLM, agentic AI, and traditional ML projects.

## Features
- **Project Type Selection:** Choose from various AI project types (chatbot, computer vision, predictive analytics, recommendation systems, NLP, RPA, GenAI, agentic AI, MCP integration).
- **Development Phase Planner:** Visualize and estimate costs, durations, and team requirements for each phase of AI development, tailored to your project type.
- **Cloud LLM Provider Comparison:** Analyze costs, features, and rate limits for leading LLM providers (OpenAI, Anthropic, Google, Meta, Amazon, OSS).
- **Usage Cost Calculator:** Estimate daily and monthly API costs based on token usage, requests per minute/second, business metrics, or total tokens per day.
- **Infrastructure Cost Estimator:** Compare cloud GPU costs and self-hosting TCO for popular hardware (H100, A100).
- **Pricing Strategy Selector:** Explore simple pricing models (usage-based, subscription, value-based, hybrid, credit, freemium) and calculate expected revenue.
- **ROI Calculator:** Assess break-even points, three-year profit, and business impact based on development costs, operating expenses, and market factors.
- **Config Import/Export:** Save and load LLM provider configurations for easy sharing and reuse.
- **Interactive Charts:** Visualize cost distributions, monthly projections, and phase breakdowns using Chart.js.

## Usage
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/kpatta/ai-pricing-roi-calculator.git
   cd ai-pricing-roi-calculator
   ```
2. **Open in Browser:**
   - Launch a local web server (e.g., Python):
     ```sh
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in your browser.
3. **Configure Your Project:**
   - Select your AI project type and complexity.
   - Review and adjust development phases as needed.
   - Add or edit cloud LLM providers and infrastructure options.
   - Enter usage metrics and pricing strategy details.
   - View cost breakdowns, charts, and ROI analysis.
4. **Save/Share Configurations:**
   - Use the import/export buttons to save or load provider configurations.

## File Structure
- `app.js` — Main application logic, data models, and UI event handlers.
- `index.html` — Main HTML file for the web interface.
- `style.css` — Custom styles for the calculator UI.
- `README.md` — Project documentation (this file).

## Data Model Highlights
- **Project Types:** Defines supported AI project categories and relevant development phases.
- **Development Phases:** Details cost ranges, durations, activities, team roles, and deliverables for each phase.
- **Cloud LLM Providers:** Lists major LLMs with pricing, context window, rate limits, and features.
- **Usage Calculation Types:** Supports multiple methods for estimating API costs.
- **GPU Cloud Costs:** Compares cloud GPU providers and hardware options.
- **Pricing Models:** Explains simple pricing strategies and their pros/cons.

## Customization
- Add new project types, phases, or providers by editing the `pricingData` object in `app.js`.
- Adjust cost ranges, durations, and team roles to match your organization's standards.
- Extend the UI with new calculators or visualizations as needed.

## Dependencies
- [Chart.js](https://www.chartjs.org/) — For interactive charts and visualizations.
- No build step required; all logic is in vanilla JavaScript and HTML.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for bug fixes, new features, or improvements.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

## Contact
For questions, feedback, or support, please contact the repository owner via GitHub.
