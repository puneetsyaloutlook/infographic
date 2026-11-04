---
name: infographic-rendering
description: "Step 5 of the infographic process: select the rendering approach for the visualisation and test the options before building. Starts from infographic-process. Use it when that skill calls this step, or when the person asks to choose the form, layout or chart approach for an infographic project whose process record has a final chosen narrative and model nodes. If there is no process record, start with infographic-process instead."
---

# Infographic process, step 5: rendering approach

This skill chooses how the work will be shown, and tests the options cheaply before anything is built. The choice is the person's. Your job is to make the options clear, test them against the model, and record the decision.

## Before you start

Read `process-record.md`. You need the final chosen narrative, the Model nodes, and the output type and audience in the Brief. If any is missing, or the chosen narrative is still provisional, stop and tell the person to start with the `infographic-process` skill.

Do not start another step. When you finish, report back as described at the end.

## What to do

1. **Write the rendering brief.** In a few lines, state what must be shown (the nodes that appear in the work), to whom, where it will be seen (channel, screen or paper size), and the constraints (accessibility needs, an existing design system, time, tools). Ask the person whether a design system applies. If one does, use its tokens and components.
   For each node, note which data form the sources allow: a plotted series, a comparison of stated values, or only a callout. If a node needs a form the data cannot support, report "blocked" with the node and the missing data, and the orchestrator sends the work back to step 1.
2. **Generate two or three distinct options.** They must differ in form, not only in colour or font. Use the options for the output type below.
3. **Test the options, cheapest test first.** The test ladder is a design choice for this process with no source behind it.
   1. **Coverage test.** For each option, map every node that must appear to a mark, element or interaction. Note any node an option cannot show, and any mark that shows nothing from the model.
   2. **Low-fidelity test.** Sketch or mock up each option at low fidelity (a rough layout, a wireframe or a table of the main elements). Write the action titles into the sketch and check they fit and read in order.
   3. **Reader test.** If the person can show the sketches to someone with no context, ask what they notice first, what they think the main point is, and where they are confused.
4. **Recommend one option** with reasons, and state what each rejected option would have cost or gained.
5. **Ask the person to pick.** Record the decision.

## Options by output type

- **Types 1 and 2:** decide whether the marks are illustrative or abstract, then choose the chart or graphic forms. Forms to consider are magazine style, annotated chart, partitioned poster, flow chart, comic strip and slide show.
- **Types 3 and 4:** the same as types 1 and 2, plus the navigation and interaction design. Decide how the reader moves (scrolling, tabs, drill-down), what the default views are, and how a reader returns to the guided path. Hybrid forms to consider are the martini glass (an author-driven opening that leads to free exploration), the interactive slide show and the drill-down story.
- **Types 5 and 6:** choose the encodings and interaction idioms and justify each against the task it serves. For type 6, name the task and the data it needs for each view.

## Action titles

Do not reword an action title in this step. If an option needs a shorter or different title, list it as a title change request in the step report. The orchestrator takes it to the person.

## Requirements for every option

- A text alternative for every image, and a long description for any chart a reader must understand in detail.
- Colour choices that stay readable for people with colour-vision deficiency, and enough contrast between text and background.
- Interactive options work by keyboard and screen reader, and work on a small screen.
- If the data will change after release (see the Brief), state how updates and versions will be handled.

## Rendering decision format

```
## Rendering decision
- Chosen option: name and one-line description
- Why: reasons, in a few sentences
- Rejected: each other option and why
- Shows: the nodes it shows, by id
- Does not show: nodes left out and why
- Specification: size or screen range, fonts, colours, design system, accessibility requirements
- Updates: how the work is updated and versioned, or "none"
- Tests run: coverage, low-fidelity, reader, with the results
```

## Step report

Add one line to the decision log and tell the person in a few sentences.

- **Complete:** "Step 5 complete: option <name> chosen, coverage test passed." The process continues to step 6.
- **Blocked:** "Step 5 blocked: <reason>", for example when no option can show a node the narrative needs. The orchestrator decides what happens next.

Run the brief conflict check: read the constraints in the Brief and confirm that the options respect them and that every node has a data form that can show it. Report each break. The tests above are the only other checks. If you see a problem, report it.

## What this step reads and writes

- Reads: Chosen narrative (final), Model nodes, output type, audience and updates in the Brief.
- Writes: Rendering decision.
