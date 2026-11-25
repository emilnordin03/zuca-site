---
name: zuca-claims-check
description: Check any Zuca customer-facing copy (website, store, pouch, email, post, deck) against Zuca's claims register before it goes live; flag, explain and rewrite risky claims.
---

# Zuca claims check

Run this on any Zuca copy before it is published or sent: site pages, Shopify product pages, checkout text, FAQ, terms, pouch and card copy, emails, social posts, decks shown to customers or buyers. Also run it at the end of any marketing skill (copywriting, cro, offers, emails, launch) that produced Zuca copy.

## Sources, in order of authority

1. **Register tab** of the "Zuca Decisions and Log" Google Sheet (ID 1CraOwRXQTx_gp7mi6qKCbTjceZ1azivacl60sAp7hO8), claim lines C01 to C15. Act only on lines Emil marked Committed. Read it with the Google Sheets connector when available.
2. Project doc `claude/Zuca_Claims_To_Reconfirm_Before_Launch.md` and, in this repo, `DECISIONS.md`.
3. The current pack panel. The pack panel is authoritative over any site or store copy.

If the register and the doc disagree, the register wins. If neither can be read, say so and apply the standing rules below; do not guess current status.

## Core rule

A formulation change invalidates every claim confirmed against the prior formulation. If the copy shows macros different from the current panel, treat every claim in it as unconfirmed.

## Standing rules (always apply)

- Never claim gluten-free (uncertified oats and a facility that handles wheat).
- Never claim plant-based or vegan for recipes containing ghee.
- No GRAS claim, no Upcycled Certified mark until granted, no "physician-recommended", no disease or treatment claims (diabetes, blood sugar, cholesterol, weight loss, gut disorders), no "clinically proven", no "zero waste".
- No forward-looking statements about allergens or ingredients; state only what is true today.
- "No refined sugar" only if the register shows it confirmed for the current recipes.
- Fiber, protein and calorie numbers must match the current lab-confirmed panel. Flag any number not yet lab-confirmed.
- "Excellent source of fiber" needs 10 g or more per serving and a named reviewer's sign-off.
- Any fiber or nutrient claim ends the small-business Nutrition Facts exemption; flag that on first use in a new channel.
- Allergen statements must cover the current recipes and the current facility (tree nuts, peanuts, milk from ghee, oats as applicable).
- Do not show the production kitchen's name in customer-facing material; use Zuca, Inc. or the address.

## Procedure

1. List every claim in the copy: nutrient numbers, health or diet words, sourcing and sustainability words, allergen and dietary statements, credentials, endorsements, testimonials.
2. Match each to a register line or standing rule.
3. Give each a verdict: OK, NEEDS SOURCE (true only if confirmed), REWRITE (risky wording, safe version exists), REMOVE (false or prohibited).
4. Rewrite flagged lines in Zuca's voice (read `claude/Zuca_Voice_Profile.md` and `claude/Zuca_AI_Patterns_To_Remove.md` when available), keeping the meaning where a safe version exists.
5. Note who must sign off on anything left as NEEDS SOURCE.

## Output

A table: claim | where | verdict | rule or register line | safe rewrite. Then one line: ready to publish, or the blocking items. Never mark copy ready while any REMOVE or unresolved NEEDS SOURCE item remains.

This check reduces risk; it is not legal review. Say so when copy will be printed on pack or used in paid ads.
