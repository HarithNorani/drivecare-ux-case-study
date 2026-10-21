# DriveCare — Industrial motor health

> A UX case study and interactive dashboard concept for industrial motor and drive operations.

**[Open the live prototype](https://harithnorani.github.io/drivecare-ux-case-study/)** · **[View the case study](#case-study)**

For application-ready CV bullets, English/German cover-letter drafts, and interview talking points, see the [Innomotics application package](./APPLICATION_PACKAGE.md).

## Why this project fits the Innomotics UX Design role

The Working Student UX Design role asks for a user-centred approach to industrial products: user research, feedback analysis, usability testing, user flows, wireframes, interactive prototypes, and close collaboration with product and development teams. DriveCare is a compact demonstration of that full process, focused on a realistic industrial context: helping plant operators understand asset health and decide what to do next.

## Case study

### Context

Industrial maintenance teams monitor many motors and drives while balancing production continuity, safety, and energy efficiency. Data is often available, but the decision path from “something changed” to “what should I do?” can be unclear.

### Design question

**How might we help a plant operator spot the most consequential asset issues and confidently take the next action, without overwhelming them with telemetry?**

### Users and needs

| User | Need |
| --- | --- |
| Plant operator | See whether the plant is healthy at a glance and identify urgent exceptions. |
| Maintenance technician | Understand the asset, signal, urgency, and recommended next step. |
| Product stakeholder | Connect product health signals to measurable operational outcomes. |

### Synthesised research insights

This concept uses a lightweight, clearly labelled research synthesis to demonstrate the design rationale. In a production project, these assumptions would be validated through interviews, contextual observation, and usability testing with representative users.

1. **Users scan before they investigate.** The overview needs a strong information hierarchy and visible exceptions.
2. **An alert without context creates hesitation.** Asset name, location, recency, severity, and recommended action should travel together.
3. **Operational language beats data language.** “Schedule a bearing inspection within 48 hours” is more actionable than a raw vibration value.
4. **Different users need the same truth at different depths.** A calm overview can lead to a detailed insight without hiding the source signal.

### User flow

```text
Overview
  → Scan operational health
  → Identify prioritised alert
  → Open asset insight
  → Review reason and recommendation
  → Create work order / snooze alert
```

### Design decisions

- **Progressive disclosure:** four high-level metrics first; details appear only when an alert is selected.
- **Prioritised alerts:** severity and time-to-action are visible without opening a detail view.
- **Actionable insight:** the alert detail makes a recommendation explicit and offers a clear work-order path.
- **Low-cognitive-load visual system:** neutral surfaces, restrained colour, and colour paired with text/status labels.
- **International readiness:** the prototype includes an English/German toggle and avoids copy that depends on idiom.

### Prototype scope

- Responsive desktop and mobile layout
- Plant health summary and 30-day trend visualisation
- Prioritised alert list with interactive detail dialog
- Asset status table with health indicators
- “Create report”, “Create work order”, and “Snooze alert” prototype actions
- English/German language toggle

### Evaluation plan

The next research loop would test this prototype with 5–7 participants across plant operations and maintenance:

1. Find the asset that needs attention first.
2. Explain why it is prioritised.
3. Decide what action to take and create a work order.
4. Switch the interface language and repeat the core task.

**Success measures:** time to identify the highest-priority alert, correct prioritisation rate, confidence after taking action, and number of navigation errors. Findings would be shared with product and engineering stakeholders and used to iterate the alert model.

## Run locally

No build step or dependencies are required:

```bash
open index.html
```

The project is intentionally built with semantic HTML, CSS, and vanilla JavaScript so the interaction model is easy to inspect and hand over to a frontend team.

## Portfolio note

This is an independent concept. It is not an Innomotics product and does not use confidential data, brand assets, or proprietary interfaces.

## Author

**Harith Norani** — UX / UI design concept, research synthesis, interaction design, and frontend prototype.
