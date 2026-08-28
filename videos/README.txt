Drop video clips of you two in this folder (mp4, webm, or mov work best).

Then open ../config.js and add one line per video inside the `photos` array
(yes, the same array as photos — videos are detected automatically by their
file extension), for example:

  { src: "videos/our-trip.mp4", caption: "That trip we took" },

The site will show it in the Memories tab with a built-in video player.
