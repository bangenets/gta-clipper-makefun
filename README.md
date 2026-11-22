# GTA 6 Clipper — make.fun bounty "Clip GTA 6 for the most YouTube views"

Entry for https://make.fun/bounty/gta6-clipper-01 ($500, top 20 by views).

## The video

**https://www.youtube.com/shorts/PwFMKAsQWMQ**

"GTA 6's First Mission in 60 Seconds" — 15 minutes of IGN's first-mission
gameplay ("Just Like Paradise", PS5 Pro) cut into a 56-second vertical clip:
boat chase, binoculars/seaplane, rescue shootout, seaplane escape in a storm,
then a make.fun pitch end card ("MAKE MONEY MAKING CLIPS / WITH AI ON
MAKE.FUN"). Uploaded public to YouTube (channel: Mila and the Ninth Temple)
on 22 Nov 2026, with the bounty's line and the entrant's play code
(`makefun-headland-carrot-topaz`) in its description.

## How this repository works

- `VIDEO.json` — the video's address. That is the entry.
- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` from the
  repository root to the output directory, where the grader reads it:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `LICENSE` — MIT.
- `TRANSCRIPT.md` — an honest summary of how the clip was built. The official
  transcript bundle for this entry is produced by the make.fun kit CLI at
  submit time; this file is only a summary, not that bundle.
- `clip-manifest.json` — provenance record: SHA-256 of the rendered clip file,
  video ID, title, description, play code, upload receipt, source footage.

## The clip itself

Built by the agent in its recorded session on 22 Nov 2026: footage hunted
(YouTube downloads blocked from the server by age gate / 403 / bot-check;
source obtained as a direct mp4 mirror of IGN's 15-minute gameplay),
five segments cut and cropped to 720x1280 with ffmpeg, hook text on the
first 3 seconds, make.fun end card, loudness -14 LUFS, QC'd frame by frame,
then uploaded to YouTube via the Data API.
