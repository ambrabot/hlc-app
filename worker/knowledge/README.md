# HLC Coach Knowledge Base — authoring contract

You are building the **knowledge base** for the HLC Coach — a functional-nutrition & integrative-wellness
companion. These cards are retrieved (RAG) and used to GROUND the Coach's answers, so they must be
**deep, accurate, and sourced from the best integrative-medicine knowledge**, framed EDUCATIONALLY (never medical).

## Ground every card in recognized authorities (and name them in `source`)
Reflect **established, consensus** principles from these — do NOT invent studies, quotes, page numbers, or statistics:
- **Institute for Functional Medicine (IFM)** — functional matrix, root-cause, systems-biology framing
- **Cleveland Clinic Center for Functional Medicine** (Mark Hyman) — food-as-medicine, metabolic
- **Andrew Weil / University of Arizona Center for Integrative Medicine** — integrative foundations, anti-inflammatory diet
- **American College of Lifestyle Medicine (ACLM)** — the 6 pillars, whole-food plant-forward
- **Linus Pauling Institute, Oregon State** — Micronutrient Information Center (authoritative micronutrient science)
- **NIH Office of Dietary Supplements (ODS)** — nutrient fact sheets
- **Harvard T.H. Chan — The Nutrition Source** — evidence-based nutrition
- **Examine.com** — evidence-graded supplement/nutrition analysis
- **Monash University FODMAP program** — gut/IBS dietary science
- **Dietary Inflammatory Index (Shivappa & Hébert)** + **NOVA classification (Monteiro)** — inflammation & processing
- **Blue Zones (Dan Buettner)** — longevity dietary patterns
- **Precision Nutrition** — behavior-change / coaching methodology
- **Traditional Chinese Medicine** classical energetics (warming/cooling, Spleen–Stomach) — frame as *traditional use*
- Respected integrative authors where apt: Michael Greger (NutritionFacts), Chris Kresser, Sara Gottfried (hormones), Giulia Enders (gut)

Cite at the **framework/institution level** (e.g. `source: "Institute for Functional Medicine; Linus Pauling Institute"`). Never fabricate a specific citation.

## Card schema (return a JSON array of these)
```json
{
  "id": "kebab-unique-within-your-domain",
  "domain": "<your assigned domain>",
  "title": "Short topic (e.g. 'Afternoon energy crashes & blood sugar')",
  "text": "160–320 words of DENSE, accurate, educational knowledge — the deep functional 'why' and the practical food/habit levers. Written so the Coach can ground a warm, specific answer in it. Mechanisms welcome (fiber→SCFAs→gut lining; protein→satiety hormones), but supportive framing only.",
  "tags": ["blood sugar", "cravings", "energy"],
  "source": "Named authorities this reflects",
  "lens": "Functional | Integrative | Naturopathy | TCM | Coaching | Culinary"
}
```

## HARD guardrails (compliance — never override)
- EDUCATIONAL / wellness only. **Never** diagnose, treat, cure, or claim to prevent/reverse disease.
- Use supportive verbs: *supports · nourishes · may help · a source of · traditionally used to · steadies · gut-friendly · linked to.*
- **Banned:** cures · treats · heals · prevents · reverses · "clinically proven to."
- For anything near a health claim, soften and (where apt) add "traditionally used to" or note it's educational.
- No fabricated numbers/quotes. Reflect consensus, not fringe claims. Be honest about uncertainty.

## Output
Write a JSON array (no markdown fences, valid JSON) of **12–15 cards** for your domain to the exact path in your assignment.
Cover the domain broadly (wide) and each card deeply (deep). After writing, read it back and confirm it parses.
