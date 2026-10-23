# Shahad Alghamdi — Portfolio

Static website (HTML, CSS, JavaScript, Three.js). No build step.

```
portfolio/
├── index.html            page shell: background, navigation, case-study overlay
├── pages/                one HTML file per section, loaded into index.html
├── css/style.css         all styles
├── js/app.js             content data + behaviour (3D hero, animations, case studies)
└── assets/               CV and (later) project images
```

## Update content
- Projects, hackathons, skills, certifications, contact links: edit the data block at the top of `js/app.js` (`LINKS`, `PROJECTS`, `SKILLS`, `ACH`, `CERT`).
- Section layout and static text (About, Experience): edit the matching file in `pages/`.
- CV: replace `assets/shahadFaisal_CV.pdf` (keep the file name).

## Run locally
The sections are loaded with `fetch`, so open the site through a local server, not by double-clicking `index.html`:

```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Deploy
- **GitHub Pages:** push the folder contents to a repository, then Settings → Pages → deploy from the main branch (root).
- **Vercel:** import the repository, framework preset "Other", no build command.

## Shareable links
- Projects section: `https://YOUR-SITE/#projects`
- A single case study: `https://YOUR-SITE/#taabat`, `#kidcoin`, `#trackify`, `#furtails`, `#vitafit`, `#rayready`

## Project logos and screenshots
Put files in `assets/images/<project-id>/` (for example `assets/images/taabat/`), then set the paths in `PROJECTS` in `js/app.js`:

```js
logo:"assets/images/taabat/logo.png",
shots:["assets/images/taabat/1.png","assets/images/taabat/2.png","assets/images/taabat/3.png"],
```
Use 2–3 screenshots. The first one sits on top of the album. For website projects set `ratio:"16/10"` (default is portrait `9/16`).
