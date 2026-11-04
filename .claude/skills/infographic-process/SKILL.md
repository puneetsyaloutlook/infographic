---
name: infographic-process
description: "Runs the standard process for building an infographic or storytelling visualisation of a topic, from brief to workshop validation. Use when the person asks to build, plan or review an infographic, data story, explorable explainer, dashboard or other visual story, or says to start the infographic process. Controls the order of seven steps, the checks after each step and the loops back to earlier steps."
---

# Infographic process

This skill runs the whole process. It is the only skill that knows the order of the steps. Each step skill does one step, reports back, and never starts another step itself.

## How to run it

1. Look for `process-record.md` in the working folder. If it exists, read it and resume at the current step. If it does not, create it from the template below and run intake.
2. Run the steps in order, one at a time, using the skill named for each step.
3. After each step, read the step report in the decision log, run the checks listed for that step, and decide whether to continue, run a loop, or stop and ask the person.
4. Ask the person only at the points listed under "When to ask the person". Run every other check yourself.

If files do not last between sessions in this tool, tell the person at intake and ask them to save the process record (for example as a project document) and paste it back at the start of the next session.

## Vocabulary

Use these terms in the same way in every step. Do not swap in synonyms.

- **Outcome:** what the reader should do or know after seeing the work.
- **Message:** the big idea in one sentence.
- **Story:** what is told. It is narrowed step by step, from the outcome through the research themes to the concept model.
- **Narrative:** how it is told. It is the detailed deliverable.
- **Source record:** the entry for one source in the process record.
- **Node:** one claim, item or relation in the concept model, with its own record.

## Process record

`process-record.md` has these headings, in this order. Each step reads and writes only the headings named in its own skill.

```
# Process record: <working title>
## Brief
## Status
## Source records
## Insights
## Candidate narratives
## Chosen narrative
## Model nodes
## Rendering decision
## Build
## Feedback log
## Decision log
```

Status contains the current step, the loop count for each loop, and the date of the last change. The decision log gets one line per step report and per loop, so a later reader can see what happened and why.

## Intake

Fill in the Brief before step 1. Ask the person for anything you cannot find in what they have already said.

- **Outcome:** what the reader should do or know afterwards.
- **Message:** a one-sentence draft. It is provisional until step 4 tests it.
- **Audience:** who they are, what they already know, and where they will see the work.
- **Output type:** assign it using the section below, then confirm it with the person.
- **Updates:** whether the data will change after release (yes or no).
- **Catalogue skill:** the name of the person's analytical techniques catalogue skill, if they have one.

- **Evidence already in the brief:** the figures or sources it lists, if any. Step 1 treats each one as a lead and verifies it against the original.
- **Constraints:** the exclusions and required labels the brief states, for example a source, name or claim that must not appear. The brief conflict check below uses this list.
- **Devices and measures:** for any curve, matrix, index or other framing device the brief names, the measure on each axis and where its data come from. If a measure has no data source, tell the person at intake and do not wait for step 4 to find it.

Then run four early checks. They come from one newsroom's practice, so treat them as prompts and not requirements. If any answer is no, tell the person and let them decide whether to continue.

1. Can the question be answered with data or evidence that can be found?
2. Are there ethical problems, such as harm to people named or shown in the work?
3. Is the topic interesting enough for this audience to act on?
4. Is the right person telling this story?

## Output types

Assign one type. Ask these five questions in order and apply the first rule that fits.

1. Who controls the order in which the reader sees things: the author, the author and then the reader, or the reader?
2. Is the reader's main task to be told something, to explore, or to analyse or monitor?
3. Do the marks illustrate selected facts, or encode every record in a consistent way?
4. Which form will it take (magazine style, annotated chart, partitioned poster, flow chart, comic strip, slide show, film or animation, interactive page, atlas or dashboard)?
5. Will the data change after release?

| Type | Path | Reader's task | Data mapping | Usual form |
|---|---|---|---|---|
| 1 Linear visual story | Author-driven | Be told | Illustrative | Static image or sequence |
| 2 Annotated data story | Author-driven | Be told | Systematic charts with annotation | Static sequence, scrolling page or slide show |
| 3 Guided interactive story | Hybrid | Be told, then explore | Systematic | Scrolling or interactive page |
| 4 Explorable explainer | Reader-driven inside a frame the author curates | Explore with explanation | Systematic | Interactive page with tabs, default views and structured navigation |
| 5 Analytical dashboard | Reader-driven | Explore or monitor | Systematic, generic chart types | Interactive, usually updated |
| 6 Technical data visualisation | Reader-driven | Analyse a specific task | Systematic and dense, task-specific encodings | Interactive system for domain experts |

A fixed order with illustrative marks gives type 1, and with systematic charts gives type 2. A hybrid path gives type 3. A reader-driven path inside an author-curated frame, with explanation, gives type 4. A reader-driven path with generic chart types for a known business audience gives type 5, and one with task-specific encodings for domain experts gives type 6. A yes to question 5 adds update, versioning and reproducibility requirements to any type.

These types are a design for this process and no source tests them. Three cases are not yet decided: concept diagrams that are not derived from data, data art, and live presentations or slide decks. If the request is one of these, say so, name the nearest type, and ask the person to confirm using it.

## Steps

| Step | Skill | Needs from the record | Produces |
|---|---|---|---|
| 1 Research | `infographic-research` | Brief | Source records |
| 2 Analysis | The person's analytical techniques catalogue | Brief, source records | Insights |
| 3 Narrative | `infographic-narrative` | Brief, insights | Candidate narratives, chosen narrative (provisional) |
| 4 Concept model | `infographic-concept-model` | Chosen narrative, insights, source records | Model nodes, chosen narrative (final) |
| 5 Rendering | `infographic-rendering` | Chosen narrative, model nodes, output type | Rendering decision |
| 6 Build | `infographic-build` | Model nodes, rendering decision | The visualisation and the build record |
| 7 Validation | `infographic-validation` | The whole record | Feedback log and the next action |

**Step 2.** Find the installed skill whose description names analytical techniques. Use it with the Brief and the Source records, and ask it to write insights into the Insights heading, each linked to the source record ids it rests on. If no such skill is available, ask the person for its name or content before continuing. Do not invent analysis methods in this skill.

**Step 1 corrections.** If step 1 reports corrections to the brief, show them to the person before step 3 starts, with the brief's wording and the source's wording side by side. The person agrees or overrules each one. Log the decision.

**Blocked steps.** If a step cannot start or finish because an input is missing or cannot support the work, it reports "blocked" with the reason. Run the previous step again and log it as a blocked repeat, not as one of the six loops.

**Title changes.** Step 5 or step 6 may find that an action title is too long, or goes further than its nodes support. Do not reword it inside that step. Show the person the proposed wording. If they agree, run the horizontal logic check on the new set of titles and the completeness check on the nodes behind the changed titles, then continue. Log it as a title change. It is not one of the six loops.

## Loops

A check that fails returns the work to an earlier step. Run only the loops in this table.

| Loop | From | Back to | When it runs |
|---|---|---|---|
| 1 Narrative unsupported | Step 4 | Step 3 | The model cannot support a claim in the chosen narrative |
| 2 Needs more analysis | Step 4 | Step 2 | A claim has no insight behind it |
| 3 Needs more data | Step 4 | Step 1 | A claim has no source |
| 4 Approach fails | Step 6 | Step 5 | The build shows the chosen rendering approach does not work |
| 5 Feedback changes the design | Step 7 | Step 5 | Readers or the workshop reject the rendering approach |
| 6 Feedback changes the narrative | Step 7 | Step 3 | Feedback changes the narrative or the message |

After a loop, run every step from the one you returned to, in order, up to the step that sent the work back. Add one to that loop's count in Status and add a line to the decision log.

**Loop limit.** If the same loop has run twice and the check still fails, stop. Tell the person what failed, what was tried, and what you think the options are, then wait for their decision.

**Escalation.** If validation shows that the brief itself was wrong (the problem or the audience was misunderstood), do not choose a loop. Stop and ask the person.

## Checks

The assistant runs these. The person is involved only where the table says so.

| After step | Check | Who |
|---|---|---|
| 1 | Brief conflict: no source record breaks a constraint listed in the Brief | Assistant |
| 2 | Brief conflict: no insight breaks a constraint listed in the Brief | Assistant |
| 3 | Horizontal logic: the action titles alone, read in order, tell the narrative, and no title is stronger than the insights behind it | Assistant |
| 3 | The chosen narrative is confirmed | Person |
| 4 | Source-record completeness: every node has a complete source record or stated logic, and every claim in the narrative has a node | Assistant |
| 5 | Brief conflict: the rendering decision respects the constraints, and every node has a data form that can show it | Assistant |
| 5 | The rendering option is picked | Person |
| 6 | Source-to-claim match: every figure on the work matches its source in value, unit, base, period and wording | Assistant |
| 6 | Reverse storyboarding: the main point of each part, written from the finished work alone, matches the chosen narrative | Assistant, blind |
| 7 | Source and traceability checks on the finished work | Assistant |
| 7 | A reader with no context, and the workshop | Person |

**Brief conflict check.** Read the constraints in the Brief and test each source record, insight or decision against them. A break is reported to the person with the constraint, the item and a proposed fix. It does not start a loop. Do not invent other checks for steps 1, 2 and 5.

**Independence.** A check that grades the work should be run by a reviewer that did not make it: a separate agent or a new session, given only the finished work and the criteria. Where the tool offers none, run the check yourself and write "self-checked" beside it in the decision log. The reverse storyboarding check must always be blind, and the Build record says whether it was.

## When to ask the person

- At intake, for the Brief and to confirm the output type.
- After step 3, to confirm the chosen narrative.
- After step 5, to pick the rendering option.
- In step 7, for the reader with no context and the workshop.
- When the loop limit is reached, or when you escalate.
- When the request falls outside the defined output types.

Keep each question short and give a recommendation with it.

## Finishing

When step 7 reports no further loop, write a short summary for the person: what was built, which loops ran, what the checks found, which checks were self-checked, and what remains unverified. Then tell the person where the process record is saved.

## Status of this design

The order of steps, the six loops, the output types and the placement of each check are a design for this process. Parts rest on named sources, listed in the design notes of the infographic repository (github.com/puneetsyaloutlook/infographic). The combination has had one test run, on one brief, through steps 1 to 7 (people checks not run). The brief intake items, step 1 corrections, title changes, brief conflict check, source-to-claim match and independence rule were added after that run, and are inference from it. Step 2 was supplied by the person and the six loops were not run. Record any step or rule that did not work in the decision log.
