---
name: infographic-validation
description: "Step 7 of the infographic process: checks on the finished work, a plan for sharing it, and validation with readers and a workshop, ending with the next action. Starts from infographic-process. Use it when that skill calls this step, or when the person asks to validate, share or test an infographic project whose process record has a Build. If there is no process record, start with infographic-process instead."
---

# Infographic process, step 7: validation and sharing

This skill checks the finished work, plans how it is shared, runs validation with people who did not make it, and decides what happens next. The assistant runs every check it can. The person is asked only for the checks that need people.

## Before you start

Read the whole `process-record.md`. You need the Build and everything before it. If the Build is missing, stop and tell the person to start with the `infographic-process` skill.

Do not start another step. When you finish, report back as described at the end.

## What to do

1. **Define the success test.** Write one line, from the outcome in the Brief: what a reader should be able to do or say after seeing the work. Every validation activity below is judged against it.
2. **Run the assistant checks** below on the finished work.
3. **Plan the sharing** below.
4. **Ask the person to arrange the people checks** below, and give them what they need (the work, the success test, the questions to ask).
5. **Record all feedback** in the Feedback log, classify each item, and decide the next action.

## Assistant checks

**Source check.** Repeat the source-to-claim match from step 6 on the final version. For every source line shown on the work, confirm that the link works or the reference is complete, that the source record exists, and that the claim shown matches what the source says. Confirm that no source whose kind is "lead only" is the basis of a stated fact.

**Traceability check.** List every claim the work shows. For each, confirm that it links to a node, that the node's type is shown honestly (an assumption or judgement is not presented as evidence), and that the node's support still exists in the record. List each claim that fails.

**Presentation review.** Check titles against the narrative, consistency of terms and labels, spelling and wording, the accessibility requirements in the Rendering decision, and how the work looks at the smallest and largest screen or page size it will be seen at.

## Sharing plan

Write a short plan that covers who receives the work and what the outcome asks them to do; the channel and the format each channel needs (for example a static image for a social post, a link for a web page, a file for an email); the text alternative and link preview text for each channel; how the version is named and recorded; and, if the data changes, who updates it and when.

## People checks

**A reader with no context.** Ask someone who has not seen the work and knows little of the topic to look at it and say what they notice first, what they think matters, and where they have questions. Do not explain the work to them while they look. Record what they say in their own words.

**The workshop.** Run a session with the people who will use or be affected by the work, in four parts: show the work against the success test; ask each person for individual comments before any group discussion; observe what people do with it if it is interactive; and capture the decisions. Do not let the most senior person speak first. These are working practices for this process, not tested methods.

For types 5 and 6, observe members of the target audience doing their own tasks with the tool. This tests whether the tool shows the right things, not only whether it looks right.

## Feedback log format

```
### F1
- From: who said it, or which check found it
- What: the feedback in their words
- Level: wrong problem, wrong abstraction, or wrong encoding
- Action: no change, fix wording or detail, change the design, change the narrative, or escalate
```

The levels are Munzner's. **Wrong problem** means the brief misunderstood the audience's needs. **Wrong abstraction** means the work shows the wrong things. **Wrong encoding** means the right things are shown in a way that does not work. An error at an earlier level affects every later level, so classify each item at the earliest level it belongs to.

## Deciding the next action

| Feedback level | Action | Next |
|---|---|---|
| Wrong encoding | Change the design | Loop 5, back to step 5 |
| Wrong abstraction | Change the narrative | Loop 6, back to step 3 |
| Wrong problem | The brief is wrong | Escalate to the person. Do not choose a loop |
| Wording, detail or small errors only | Fix in place and re-run the presentation review | None |
| The success test is met and no checks fail | The process is finished | None |

## Step report

Add one line to the decision log and tell the person in a few sentences.

- **Complete:** "Step 7 complete: success test met, no further loop." The orchestrator writes the final summary.
- **Send back:** "Step 7 send back to step <number>: <reason>." This is loop 5 or 6.
- **Escalate:** "Step 7 escalate: the brief appears to be wrong because <reason>."

## What this step reads and writes

- Reads: the whole process record.
- Writes: Feedback log, and the sharing plan under Build.
