# Design notes

This file says which parts of the process have a source and which are inference. The details come from the research round in the chat where the process was defined. They were not re-checked when the skills were written, and several sources were read only as summaries or extracts.

The labels are:

- **Documented method:** a source describes it as a method.
- **Practitioner method:** a practitioner describes it and no test of it is reported.
- **One source:** a single team or author documents it.
- **Inference:** a combination or transfer that this process makes, with no source that tests it.

## What the sources cover

No documented method covers the whole job of building an infographic or storytelling visualisation. The sources cover steps 1, 2, 5 and 6 best. Step 7 appears only as separate testing and sharing standards, and step 3 appears through two practitioners. No source describes step 4 as a combined, source-traceable concept model. The nearest components come from other fields: ontology development, evidence and assumption separation in intelligence analysis, argument structure, and concept mapping.

No study compares a narrative-first workflow with a model-first workflow, and no study tests a safeguard against bias in data stories.

## Basis for each part of the design

| Part of the design | Basis | Label |
|---|---|---|
| Brief and intake before step 1 | Kirk's brief, Knaflic's context stage, Munzner's first level, and Eppler and Burkhard (2007) all fix purpose and audience first. Kirk was read through secondary summaries only. | Documented method |
| Named loops | Munzner, Sedlmair and Fry say their stages are not strictly sequential. The Pudding makes a recurring continue, pivot or stop decision. | Documented method |
| The six specific loops | Applied from the documented iteration to this sequence. | Inference |
| Several candidate narratives | Segel and Heer treat genre as a choice among candidates, and analysis of competing hypotheses keeps rival explanations open. | Partly documented |
| Scoring candidates against the outcome, and the default of two to three candidates | No retrieved source describes either. | Inference |
| A provisional narrative fixed only after the model tests it | The Pudding fixes structure after deep familiarity with the data, but no source documents this split. | Inference |
| Typed node record (evidence, assumption or judgement, with source, confidence and rival explanation) | The intelligence community's standard ICD 203 separates evidence from assumptions and judgements, and requires sources and uncertainty to be stated. Toulmin adds a warrant and a rebuttal. Concept mapping adds linking phrases that make each connection checkable. | Documented parts, combination is inference |
| Early checks at intake (answerable question, ethics, interest, right storyteller) | The Pudding. | One source |
| Test ladder in step 5 (coverage, low-fidelity, reader) | Applied from the documented use of sketches and reviews. | Inference |
| Horizontal logic, reverse storyboarding, and a reader with no context | Knaflic (2015, chapter 7). | Practitioner method |
| A success test defined from the outcome before validation | Knaflic (2015). | Practitioner method |
| Three levels of validation: wrong problem, wrong abstraction, wrong encoding | Munzner (2014, chapter 4). Only the top three levels are applied, because her book covers tool design. | Documented method |
| Workshop rules (individual comments first, seniority not setting the order) | General working practice. | Inference |
| Five facets that define the output types | Segel and Heer (2010), Knaflic (2015), Cairo (2012, secondary), Munzner (2014), Ziemkiewicz and Kosara (2010). | Documented method |
| The six output types, the five assignment questions and the change in each step by type | Built on the five facets. | Inference |
| One orchestrator running steps in order, with checks between them and a loop back when a check fails | Anthropic's guidance on agent workflows describes prompt chaining with checks between steps, and an evaluator loop that repeats until a check passes. | Documented method |
| One shared record passed between steps | Common practice in chained skills, reported by practitioners. | Practitioner method |
| Brief intake items (evidence already in the brief, constraints, devices and measures), step 1 corrections, title changes, brief conflict check | Found by one test run on one brief, where each gap caused a late fix. No outside source. | Inference |
| Source-to-claim match in step 6, and a blind reverse storyboarding check by a separate reviewer | Found by the same test run, where the step 7 source check found seven errors that earlier steps missed. Independent review of a check is common practice, with no source cited here. | Inference |

## Sources

- Segel, E. and Heer, J. (2010). Narrative visualization.
- Knaflic, C. N. (2015). *Storytelling with Data*.
- Munzner, T. (2009). A nested model for visualization design and validation.
- Munzner, T. (2014). *Visualization Analysis and Design*.
- Sedlmair, M., Meyer, M. and Munzner, T. (2012). Design study methodology.
- Fry, B. (2007). *Visualizing Data*.
- Kirk, A. (2016). *Data Visualisation: A Handbook for Data Driven Design* (secondary summaries only).
- Cairo, A. (2012). *The Functional Art* (secondary summaries only).
- Eppler, M. and Burkhard, R. (2007). Visual representations in knowledge management.
- Ziemkiewicz, C. and Kosara, R. (2010). Beyond Bertin: seeing the forest despite the trees.
- Office of the Director of National Intelligence. ICD 203, analytic standards.
- Anthropic (2024). Building effective agents.

## Not retrieved

Primary text for Kirk and Cairo, and for Minto, Slocum and Bertin, was not retrieved. Process write-ups from newsroom graphics desks at the New York Times, the Guardian, Reuters and the Financial Times were also not retrieved. None of these is cited as a basis above, except where marked as secondary.
