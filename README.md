# Github Repositories Project

- Features
- Debouncing
- Pagination
- Optimization - useCallback/useMemo
- Infinite Scrolling
- Filter
- Unit test
-

@ ⚡ Machine Coding Challenge List (with this API)
Level 1 – Basics

Search Repositories

Create a simple input box.

On typing a query, fetch repos from API.

Show a list: name, description, stars, owner.

Loading & Error States

Show a loader while fetching.

Show an error message if API fails.

Level 2 – Pagination

Next / Previous Page

Add buttons for Next and Previous.

Fetch using ?page= parameter.

Disable Previous if on page 1.

Per Page Dropdown

Add dropdown: 10 / 20 / 50.

Pass per_page to API and update results.

Level 3 – Sorting

Sort by Stars / Forks

Add dropdown for sort=stars / sort=forks.

Allow ascending/descending using order=asc|desc.

Sort by Updated Date

Add option to sort by updated.

Display last updated in UI.

Level 4 – Search Experience

Debounced Search

Don’t call API on every keystroke.

Use debounce (300ms delay).

Empty State Handling

If no repos found, show “No results found”.

Level 5 – Advanced UX

Infinite Scroll

Instead of “Next/Prev”, auto-load more repos when scrolling near bottom.
Include repo avatar, link to GitHub, stars, forks.
