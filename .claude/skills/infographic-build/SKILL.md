---
name: infographic-build
description: "Step 6 of the infographic process: build the visualisation from the model and the rendering decision, and check it by reverse storyboarding. Starts from infographic-process. Use it when that skill calls this step, or when the person asks to build the infographic or visualisation on a project whose process record has Model nodes and a Rendering decision. If there is no process record, start with infographic-process instead."
---

# Infographic process, step 6: build

This skill builds the visualisation the rendering decision describes, keeps every visible claim linked to a node in the model, and checks the result by reverse storyboarding.

## Before you start

Read `process-record.md`. You need the final chosen narrative, the Model nodes and the Rendering decision. If any is missing, stop and tell the person to start with the `infographic-process` skill.

Do not start another step. When you finish, report back as described at the end.

## What to do

1. **Build what the rendering decision describes.** Use the tools and file formats the decision names. If the platform offers skills or tools for the file format (a slide deck, a document, a web page, a chart), use them. If the build shows that the chosen approach cannot work, stop and report it, as described below.
2. **Write action titles** for every part, in the words of the chosen narrative. Do not use descriptive titles.
3. **Keep a map from element to node.** As you build, record which node each visible claim, mark or interaction shows. Every claim in the work must have a node, and every node that the Rendering decision says the work shows must appear.
4. **Show sources on the work.** Give each chart or claim a specific source line with a direct link where the format allows. Keep the fuller source details in a notes section, an appendix or the accompanying text, so the main view stays uncluttered.
5. **Meet the accessibility requirements** in the Rendering decision: text alternatives and long descriptions for static work, keyboard and screen-reader operation for interactive work, colour and contrast, and a layout that works on small screens.
6. **Apply the output type.**
   - Types 1 and 2: export as a static file, with the text alternative and long description.
   - Types 3 and 4: also check keyboard and screen-reader operation, mobile layout, and the update and version rules.
   - Types 5 and 6: as for types 3 and 4, plus performance, and keep the data preparation steps so the work can be reproduced.
7. **Run the reverse storyboarding check** below.
8. **Save the build** and write the Build section of the record.

## Reverse storyboarding check

Do this only after the build is complete.

1. Without reading the process record, look at the finished work and write one line for each part (page, panel, section, view or screen): the main point it makes.
2. Then compare that list with the chosen narrative and the message in the record.
3. Report each part where the main point differs from the narrative, where a part makes no clear point, and where the narrative has a point that no part makes.
4. Fix the work and run the check again. If the same mismatch remains after two fixes, report it instead of fixing it a third time.

For types 5 and 6, which have no narrative, compare the list of what each view lets a reader do with the questions in the chosen narrative.

## When the approach fails

If the work cannot be built as the Rendering decision describes, or the finished work reads wrongly in a way a fix will not solve, report "send back to step 5" with the reason, for example a node that cannot be shown at the chosen size. This is loop 4.

## Build record format

```
## Build
- Output: file name, format and where it is saved
- Element to node map: each element and the node ids it shows
- Sources shown: where source lines and notes appear
- Accessibility: what was done, and anything not met
- Reverse storyboard: the list of main points, and the result of the comparison
- Known gaps: anything that does not yet meet the rendering decision
```

## Step report

Add one line to the decision log and tell the person in a few sentences.

- **Complete:** "Step 6 complete: <output> built, reverse storyboarding passed." The process continues to step 7.
- **Send back:** "Step 6 send back to step 5: <reason>." This is loop 4.
- **Blocked:** "Step 6 blocked: <reason>".

## What this step reads and writes

- Reads: Chosen narrative (final), Model nodes, Rendering decision.
- Writes: Build, and the output file or files.
