# Infographic skills

A set of skills that runs a standard process for building an infographic or storytelling visualisation of a topic. The process has seven steps, six loops back to earlier steps, and a set of checks. The same files work in Claude and in GitHub Copilot.

## What is in this repository

| Path | What it is |
|---|---|
| `.claude/skills/infographic-process/` | The orchestrator. It controls the order of the steps, the checks and the loops. Start here. |
| `.claude/skills/infographic-research/` | Step 1: domain research and data collection. |
| `.claude/skills/infographic-narrative/` | Step 3: candidate narratives, comparison against the outcome, and the chosen narrative. |
| `.claude/skills/infographic-concept-model/` | Step 4: the concept model, with every node traceable to a source, logic, a finding or a hypothesis. |
| `.claude/skills/infographic-rendering/` | Step 5: choosing and testing the rendering approach. |
| `.claude/skills/infographic-build/` | Step 6: building the visualisation. |
| `.claude/skills/infographic-validation/` | Step 7: checks, sharing and workshop validation. |
| `docs/skill-map.html` | The skill map: how the skills connect, the order and the loops. Open it in a browser. |
| `DESIGN-NOTES.md` | Which parts of the design rest on a source and which are inference. |

Step 2 (analysis) is not in this repository. It uses your own analytical techniques catalogue skill, which the orchestrator looks for by its description and asks you for at intake.

## How it works

The orchestrator is the only skill that knows the order. It calls one step skill at a time. Each step skill does its step, reports back and never starts another step. If a check fails, the step reports where the work should go back to, and the orchestrator runs the matching loop. After two passes of the same loop, it stops and asks you.

All skills read and write one file, `process-record.md`, in the working folder. It contains the brief, the source records, the insights, the candidate and chosen narratives, the model nodes, the rendering decision, the build record, the feedback log and the decision log.

The assistant runs every check it can. You are asked only for the brief, to confirm the chosen narrative, to pick the rendering option, for the reader with no context and the workshop, and when the process stops or escalates.

## Using the skills

Ask the assistant to "start the infographic process" for your topic. The orchestrator then asks for the brief.

**Claude (claude.ai).** Save each `SKILL.md` through the skill review card, one skill at a time. The card keeps one file per skill, which is why every skill here is a single self-contained file.

**Claude Code.** Clone the repository, or copy `.claude/skills` into your project or into `~/.claude/skills`. Claude Code reads that folder.

**GitHub Copilot.** Copilot reads project skills from `.github/skills`, `.claude/skills` or `.agents/skills` in a repository, and personal skills from `~/.copilot/skills`. Opening this repository, or copying `.claude/skills` into your own repository, is enough. If Copilot does not list the skills, check that agent skills are enabled in your Copilot settings and in any organisation policy.

Every skill's header contains only a `name` and a `description`, so it works in both tools. The skill names do not contain the words "claude" or "anthropic", which Claude's skill format does not allow.

## Status

The design has not been tested on a real project. The order of steps, the six loops, the six output types and the placement of each check are a design for this process, and `DESIGN-NOTES.md` says which parts have a source. Record anything that does not work in the decision log of the process record, then change the skill.

Open items:

- The exact name of your analytical techniques catalogue skill. It also needs a copy in any repository where Copilot will run the process.
- Whether steps 3 and 4 stay as separate skills. They are the most likely to pass work back and forth, so merge them if testing shows that.
- Three boundary questions on the output types: concept diagrams that are not derived from data, data art, and live presentations or slide decks.
- The step skills cannot be made to start only through the orchestrator in this portable format. Each description says it starts from `infographic-process`. Claude Code's `disable-model-invocation` setting could enforce it, and a Copilot custom agent with handoffs could run the sequence. Neither is included here, and I have not confirmed the Copilot option in GitHub's own documentation.
