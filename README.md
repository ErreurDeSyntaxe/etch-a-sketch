# etch-a-sketch
An in-browser game of etch a sketch

# First Entry: Think Like A Programmer

When going back to the Rock Paper Scissors game, I neglected to use the 
technique learned recently. Understand, plan, pseudocode, and divide. It 
would have saved some time, but I was already familiar with the project
and code, so it didn't cause trouble. Etch a Sketch is a new project, 
so I want to do it well and take it seriously. The project foundations 
have been prepared; the files are empty but linked together. Now is time
to think like a programmer!

# Second Entry: Divide and Conquer

Today (or this morning, who knows how long this will take?), I will
focus on building the grid needed for the drawing. The first step is to
put divs inside the drawing board. That was done yesterday. They are hard
coded, so it's really just the first step. The current step is to arrange
them neatly, meaning 2 by 2, 3 by 3, 4 by 4. Once I figure that out,
adding any number of squares per side will be the next step. Then, it will
need to be done dynamically and through user input. 

# Third Entry: Event Listeners

The process has reached the last step mentioned in the previous entry:
letting the user determine the grid "size". I am still unsure how the slider
will transmit its information to the drawing board. I am thinking about
calling the buildGrid function with a parameter whenever the slider moves.
buildGrid could have a default parameter of 10. 

The problem I have is the layout (of course!). It is difficult to display
the buttons (clear drawing board, random color, slider input) in the correct
position. As always, flexbox is a difficult skill to learn and master. 

# Fourth Entry: Thinking

The styling is finally over (I believe). The difficulty this time 
(on top of flexbox) was to user the correct terms to style everything
through JS. An example of this is margin-top in CSS to marginTop in JS. 

Three features need to be coded: the drawing upon hover, the clear button,
and the rainbow button. I will tackle them in that order. I wasted a lot 
of time on laying out the buttons, which I had anticipated because my
CSS skills are poor. The drawing upon hover feels challenging, while the 
other two feel easier. I'll need to think like a programmer to find a
solution to my problems. 

# Fifth Entry: The End

The project is finished. It meets all criteria. I had extra plans, like
hover over links to display a preview, but I'm going to call it a day. I'll
commit and push. Tomorrow I can take a fresh look at it and decide if it's
truly over. 