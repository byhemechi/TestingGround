/*
  Loads README.md into the textarea
  (Obviously) written by 2023 George, not 2013 (like the rest of the app)
  I actually wrote a stackedit-esque mardown editor in 2014, but hadn't quite figured out how
  git worked and thought that committing would upload the code to github

  As far as I remember, it actually had syntax highlighting via ACE instead of just a plain textarea

  The README was evidently made through the GitHub website, and is the only proof that the thing ever existed
  You can see it at https://github.com/thediex09/marky
*/

import { micromark } from "https://esm.sh/micromark@4.0.0?bundle";

export const loadReadme = async () => {
  const response = await fetch("/README.md");
  const body = await response.text();

  return `
  <style>
    #divecho {
      padding: 2em;
      box-sizing: border-box;
      font-family: ui-system, sans-serif;
      overflow: auto;
    }

    p {
      color: #444;
      font-size: 1.25rem;
      line-height: 1.3em;
      font-weight: 300;
    }

    hr {
      border: 0;
      border-top: 1px solid #0003;
      margin: 3em 0;
    }

    hr ~ * {
      color: intial;
      font-family: initial;
      line-height: initial;
    }

    hr ~ p {
      font: initial;
      font-weight: initial;
    }
  </style>
  ${micromark(body)}
  `.replace(/^  /gm, "");
};
