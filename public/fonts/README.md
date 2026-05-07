# General Sans Font Files

This directory must contain the General Sans woff2 font files before the site will render with the correct body typeface. General Sans is licensed through Fontshare and cannot be bundled in this repository.

## Download Instructions

1. Visit https://www.fontshare.com/fonts/general-sans in your browser.
2. Click **Download** and select the full family.
3. Unzip the downloaded archive.
4. Locate the `woff2` variants inside the unzipped folder (they will be under a path like `fonts/web/` or `woff2/`).
5. Copy the following three files into **this directory** (`/public/fonts/`):

| File to place here               | Weight | Style  |
|----------------------------------|--------|--------|
| `GeneralSans-Regular.woff2`      | 400    | normal |
| `GeneralSans-Medium.woff2`       | 500    | normal |
| `GeneralSans-Semibold.woff2`     | 600    | normal |

> The filenames must match exactly (including capitalisation) because `lib/fonts.ts` references them by these exact paths.

## Why local fonts?

Fontshare fonts are served from `api.fontshare.com`, not from the Google Fonts CDN, so they are incompatible with Next.js's `next/font/google` loader. Using `next/font/local` lets Next.js:

- Self-host the files from `/public/fonts/` for zero external network requests.
- Automatically generate `font-display: swap` and preload `<link>` tags.
- Guarantee no layout shift caused by late-loading fonts.

## Fallback behaviour

Until these files are placed here, the site will fall back to the system sans-serif stack defined in `lib/fonts.ts`:

```
"Helvetica Neue", Helvetica, Arial, sans-serif
```

The site is fully functional without these files — only the brand typeface will differ.
