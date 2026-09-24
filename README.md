# Hans Builders website

Complete local, single-page corporate website for **Hans Builders Contractors and Engineer Pvt. Ltd.**

## Preview

Open `Start Preview.cmd` on Windows, then open **http://127.0.0.1:4173/** in your browser. Keep the preview window open while reviewing. Node.js 22 or newer is required. The launcher also recognizes the Node runtime bundled with Codex on this computer.

Run the build instructions below first when downloading the source repository. The downloadable website ZIP also includes the compiled website in `dist/`. It needs no runtime libraries, external font services, database or API keys. All photographs and presentation assets are served locally. No information is sent to third parties when opening the page.

## Build and edit

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview
```

The build runs strict TypeScript checks and emits a static site. If your package manager runs additional environment-specific checks, the equivalent build command after installation is `node scripts/build.mjs`.

- `index.html`: document metadata, hero, company introduction and infrastructure section.
- `src/sections.ts`: remaining sections and footer markup.
- `src/data.ts`: capability descriptions, slideshow entries, regional details and disabled approval entries.
- `src/styles.css`: responsive styling and reduced-motion rules.
- `src/carousel.ts`: seven-slide controls, 7.5-second autoplay, visibility/focus/hover pauses, keyboard navigation and touch swipes.
- `src/main.ts`: navigation, regional selection and motion.
- `assets/`: WebP copies of all eleven supplied images plus the brand favicon. Source originals were not altered.

After editing, rebuild and refresh the preview. This lightweight preview server does not hot-reload.

## Contact details

The contact section retains the company phone, email and registered office address. Visitors can click the phone or email link to use their own calling or email application. The enquiry form, project-discussion buttons and draft modal have been removed at the owner’s request.

## Content and source decisions

- The incorporation date, CIN and RoC registration number come from the supplied dossier and letterhead.
- Contact details and the six project-office/works locations use the supplied letterhead and the adopted website brief. The dossier records different public contact information and reports that regional operations were not independently found; it is a research summary, not a new instruction or a certificate.
- Status is explicitly attributed to the supplied dossier, rather than represented as a live registry check.
- Himachal Pradesh is strategic regional coverage, not a claimed permanent office.
- ISO entries are presented as standards referenced on the letterhead. Certificate numbers, certifying bodies and current validity were not supplied.
- CPWD, RERA and CLRA entries remain disabled in `src/data.ts`. Enable only after the owner supplies and confirms supporting information. No general government-approved badge is displayed.
- The letterhead's unclassified licence number is not assigned to a regulator or shown as an approval.
- All seven generated project panels remain intact and are explicitly described as representative presentation visuals, not verified completed Hans Builders projects.
- The formal-event image is used for industry recognition and engagement, without inventing an award, recipient, date or awarding organisation.
- The group image is used without employee names, roles, biographies or headcount.
- The footer retains the requested **© 2018** wording.
- No source PDF is exposed as a public download; both were reviewed as reference material.

The design references were reviewed for broad principles only: [Buildofy](https://www.buildofy.com/home-design), [Shapoorji Pallonji](https://www.shapoorjipallonji.com/business/EngineeringAndConstruction) and [VCL](https://vclgroup.in/construction). No source code, brand assets, project facts or claims were copied from those sites.

## Local validation

- Strict TypeScript compilation and static production build passed.
- Responsive document widths checked at 1920, 1440, 1024, 768, 430, 390 and 360 pixels; no document-level horizontal overflow at these sizes. Scrollbars reduce the usable content width slightly.
- All seven slideshow images loaded and selectors displayed matching text and counters.
- Previous/next buttons and left/right arrow-key navigation passed.
- Autoplay observed; pause control tested. Hover/focus/visibility/reduced-motion guards and touch swipe behavior are implemented. Touch gestures and OS-level reduced-motion emulation were not independently exercised by the available browser tooling.
- Regional selection, mobile menu opening/closing and internal anchor targets checked.
- Enquiry form and its scripts removed. Contact details retained unchanged; phone and email links checked.
- No browser console warnings or errors observed during these checks.
- Images preserve aspect ratios; people photographs are uncropped.
- All body sections are prerendered into the production HTML for indexing and reading without JavaScript.
- Lighthouse scores are targets, not measured or certified results.

## Publishing

The complete static contents of `dist/` can be deployed to a normal static web host. The owner confirmed `hansbuilders.com`; metadata uses `https://www.hansbuilders.com/`. Configure the host to serve that hostname and redirect the apex domain consistently.

The intended private source repository is `HansBuildersContractors/Hans-Builders-Contractors-Engineers`. Hosting and GoDaddy DNS configuration are separate from uploading source to GitHub. Build command: `pnpm build`. Publish directory: `dist`. Do not upload `node_modules` or credentials.
