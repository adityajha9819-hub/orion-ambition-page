<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Derive the sitemap from explicit route staticData.sitemap decisions using src/lib/sitemap.ts; this keeps public route discovery synchronized without listing external store pages as local routes.
- Keep llms.txt informational and optional; never use its presence to imply ranking or AI citation guarantees.
- Keep Orion's product facts and purchase handoff in src/lib/orion.ts so visible content and structured data share the same verified information; the local cart is not the official store checkout.
