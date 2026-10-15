# cv

## Run using docker

docker build -t foo . && docker run -p 80:80 -it foo

## Render to PDF

The pages load assets from absolute paths such as `/styles/index.css`, so serve the folder over HTTP rather than opening a `file://` URL:

```sh
python3 -m http.server 8080
```

Then, from another terminal, print the English page to `cv.pdf` with headless Chrome:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf=cv.pdf http://localhost:8080/
```

For the Norwegian version, use `http://localhost:8080/index-no.html`.

The `@media print` block in `styles/index.scss` (mirrored in `styles/index.css`) sets A4 with 10 mm margins, forces chip and stripe colours to print, and scales the page with `zoom` on `#app-cv` so the CV fits one A4 page. If the content grows or shrinks, tune that zoom value rather than spacing or font sizes: zoom keeps the screen design and just scales it to the page. There is no Sass build in this repo, so edit `index.scss` and `index.css` the same way.
