---
name: infographic-concept-model
description: "Step 4 of the infographic process: build the concept model that supports the chosen narrative, with every node traceable to a source, logic, a finding or a hypothesis. Starts from infographic-process. Use it when that skill calls this step, or when the person asks to build or check the concept model for an infographic project whose process record has a chosen narrative. If there is no process record, start with infographic-process instead."
---

# Infographic process, step 4: concept model

This skill builds the model that supports the chosen narrative and tests whether the narrative can be defended. Each claim in the work becomes a node with a record of what supports it. When the model passes, the chosen narrative becomes final.

## Before you start

Read `process-record.md`. You need the chosen narrative (status provisional), the Insights, the Source records and the output type. If any is missing, stop and tell the person to start with the `infographic-process` skill.

Do not start another step. When you finish, report back as described at the end.

## What to do

1. **List the claims.** Read the chosen narrative and list every claim it makes, including claims implied by its action titles. Each becomes a node.
2. **Add the nodes for the output type.**
   - Types 1 and 2: the nodes are the claims shown in the work.
   - Types 3 and 4: the claims, plus the items and relations the reader can query.
   - Types 5 and 6: data items, tasks and relations. Frame the tasks as what the audience must be able to do.
3. **Write a node record for each node** using the format below. Every node gets exactly one type: evidence, assumption or judgement.
4. **Link the nodes.** Write each link as a short phrase that reads as a checkable statement, for example "N2 explains N5" or "N3 depends on N4". A link that cannot be written as a statement does not belong in the model.
5. **Record rival explanations.** For each node, write the best alternative explanation. Write "none found" only after you have looked.
6. **Run the source-record completeness check** below.
7. **Decide what to do with failures.** For each node that fails, choose one of the actions in the table below. Weakening or removing a claim changes the chosen narrative, so show the change to the person and get their agreement.
8. **If the model passes,** change the chosen narrative status from provisional to final.

## Node types

- **Evidence:** supported by a source record or an insight.
- **Assumption:** accepted without support, stated openly so the reader or a reviewer can challenge it.
- **Judgement:** a conclusion the author draws from evidence. It must say what it rests on.

Keep these three apart. A judgement that is presented as evidence is the most common fault.

## Node record format

```
### N1
- Statement: the claim in one sentence
- Type: evidence, assumption or judgement
- Support: source record ids, insight ids, or the logic or hypothesis it rests on
- Source quality: one line, or "not applicable" for an assumption
- Confidence: high, medium or low, with the reason
- Rival explanation: the best alternative, or "none found"
- Links: short checkable phrases
- Checks passed: completeness
```

## Source-record completeness check

For every node, check that:

- the type is one of the three;
- an evidence node cites at least one source record or insight that exists in the process record, and the source record has all its fields;
- a judgement names the nodes or records it rests on;
- an assumption is stated as an assumption, and the narrative does not present it as fact;
- the confidence has a reason.

Also check the other direction: every claim in the chosen narrative has a node. Report the counts of nodes passed and failed, and list each failure with the reason.

## What to do with a failure

| Failure | Action | Loop |
|---|---|---|
| The model cannot support the claim, but another candidate could | Report that the chosen narrative needs revising or replacing | Loop 1, back to step 3 |
| The claim has no insight behind it, but the sources may contain one | Report that more analysis is needed | Loop 2, back to step 2 |
| The claim has no source at all | Report that more data is needed | Loop 3, back to step 1 |
| The claim can be weakened to what the evidence supports | Weaken it, with the person's agreement, and re-run the check | None |

## Step report

Add one line to the decision log and tell the person in a few sentences.

- **Complete:** "Step 4 complete: N nodes, all pass, chosen narrative is final." The process continues to step 5.
- **Send back:** "Step 4 send back to step <number>: <reason>", naming the loop from the table. The orchestrator runs the loop.
- **Blocked:** "Step 4 blocked: <reason>".

## What this step reads and writes

- Reads: Chosen narrative, Insights, Source records, output type in the Brief.
- Writes: Model nodes, Chosen narrative (status final, or the changes made).
