
//const density = "        _.,-=+:;cba!?0123456789$W#@\'d1";\
//const density = '        \uc0\u9676 \u9675 \u9718 \u9678 \u9684 \u9681 \u9681 \u9681 \u9677 \u9677 \u9685 \u9673 \u9679 \u9679 \u9679 \u9679 ';\
\
\
\
//const density = '       .:-i|=+%O#@'\
const density = '      .:\uc0\u9617 \u9617 \u9618 \u9619 \u9608 ';\
//const density = "        \uc0\u9633 \u9633 \u9712 \u9712 \u9707 \u9707 \u9637 \u9637 \u9637 \u9637 \u9641 \u9641 \u9632 \u9632 \u9632 \u9632 ";\
\
let video;\
let asciiDiv;\
\
        function setup() \{\
          asciiDiv = createDiv();\
          asciiDiv.id('ascii-Div');\
          noCanvas();\
          \
          video = createVideo('https://cdn.prod.website-files.com/670cf484ce97f9776a54b7cb%2F670cf6241a7ffa2b4d5f59ed_Gamers-transcode.mp4', vidLoaded);\
          video.size(80, 60);\
          video.hide();\
           \
        \
          \
        \}\
\
function vidLoaded()\{\
  video.loop();\
  \
  video.volume(0);\
\}\
\
\
        function draw() \{\
     \
          video.loadPixels();\
          let asciiImage = "";\
          for (let j = 0; j < video.height; j++) \{\
            for (let i = 0; i < video.width; i++) \{\
              const pixelIndex = (i + j * video.width) * 4;\
              const r = video.pixels[pixelIndex + 0];\
              const g = video.pixels[pixelIndex + 1];\
              const b = video.pixels[pixelIndex + 2];\
              const avg = (r + g + b) / 3;\
              const len = density.length;\
              const charIndex = floor(map(avg, 0, 255, 0, len));\
              const c = density.charAt(charIndex);\
              if (c == " ") asciiImage += "&nbsp;";\
              else asciiImage += c;\
            \}\
            asciiImage += '<br/>';\
          \}\
          asciiDiv.html(asciiImage);\
        \}\
