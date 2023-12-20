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

  return micromark(body);
};
