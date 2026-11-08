# Abuja Business Chamber — WDD 231 Directory

## Folder contents
- `directory.html` — directory page
- `data/members.json` — seven sample member records
- `styles/normalize.css`, `styles/small.css`, `styles/larger.css` — reset and responsive styles
- `scripts/navigation.js` — responsive mobile navigation
- `scripts/directory.js` — fetch/async-await, member rendering, grid/list toggle
- `scripts/date.js` — copyright year and last-modified date
- `images/` — site logo, favicon, and seven individual lightweight SVG member marks

## Important content note
The member businesses, addresses, telephone numbers, email and `.example` websites are fictional sample data for demonstrating JSON-driven rendering. Replace them with verified details before presenting the directory as a real business directory. The `.example` URLs are reserved example domains and are not live business websites.

## Run locally
1. Open your existing `wdd231` folder in VS Code.
2. Copy the complete `chamber` folder into it.
3. Install/use the VS Code Live Server extension if needed.
4. Right-click `chamber/directory.html` and choose **Open with Live Server**.
5. Do not open the HTML file directly with a `file://` URL: browsers block local JSON fetch requests in that mode.

## Publish
Commit and push the `chamber` folder to the `main` branch of your existing `wdd231` GitHub repository. The expected page URL is:
`https://adeoyej1.github.io/wdd231/chamber/directory.html`

## Before submission
- Confirm the city is Abuja and update the content to match your approved site plan.
- Replace sample member data with your own verified businesses if your instructor expects authentic local entries.
- Check that the page loads without console errors.
- Test at 320px, tablet, and desktop widths.
- Run the WDD 231 page audit and Lighthouse (mobile) for Accessibility, Best Practices and SEO. Aim for 95+.
- Check colour contrast with DevTools CSS Overview.
- Facebook Open Graph URL and image are set to the expected GitHub Pages address; re-fetch after the page is published.
- Home, Discover and Join are navigation destinations for the next project pages; create those pages in later milestones.
