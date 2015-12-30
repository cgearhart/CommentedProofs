##Hosting locally:
---
    $ bundle exec jekyll [serve | build] [--drafts] --baseurl ''

`serve` starts a local host (typically http://localhost:4000)
`build` processes the files into static site in _site
`--drafts` includes files in the _draft folder as _posts using the file modification timestamp
`--baseurl ''` overrides the project baseurl so that it serves locally


##Posting:
---
Add `.md` files to _posts with filenames according to the format YEAR-MONTH-DAY-title.MARKUP