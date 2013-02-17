# meyegaze

Bridging and accessibility tools for eye-gaze hardware.

## Focus

Our first task is to create an application that will suggest phrases as they are typed.  End user goal is 
"I should never have to type the same phrase twice".  Assumed that system should serve more than one user, but 
unique phrases should not be shared between users.  (This suggests that perhaps there are some common phrases
that *are* shared between users, but if the system learns from its users, it should not share that knowledge with
other users.)

## Technology

It is suggested that the phrase suggestor work over web services.  
