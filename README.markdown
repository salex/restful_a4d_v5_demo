Restful Active4D was written about 2 years ago and presented to the community. There was not much interest, mainly because 4D programmers are stuck 
  in their 4D world. Fusebox, which has been out for over 10 years and is probably used by less than 50% of the users. Restful Active 4D just sits on top of fusebox and, I feel, is easier to use than fusebox. If you don't grasp the concepts of REST and CRUD, then it probably is not for you.
  
I've used it a few times and have updated some components, mainly the libraries and mainly in the JSON area.  I tried to do some major refactoring on the rgen (generate scaffold) but ran out of steam.  The code works, it is just jumbled up. Rather than continue at the point I gave up. I decided to post what I have and if there is interest I'll work a little on the generator. Maybe I can even get some help.

This version was started as that two year old demo. The Active4D V5 Demo was the starting point but most app code was thrown out and replaced with the original demo code, except the data structure . The libraries were updated and a quick pass made to fix some of the differences.

form.a4l was rewritten as html.a4l - both are there. html has more methods but they are not used in the demo.

rest.a4l is in new version and there is not much new.

rest.utils.a4l has updated json parsing

Some things moved around because of the changes in the Active4D demo.

There is some duplication of methods in different libraries. HTML was used on a project and not REST, so the opt method is in both libraries. I usually reference the library in the method call, unless the code was copied and pasted and is real old.

There is a side bar when you start the application that has some 2 year old documentation. CSS is also two years old and one of the things I wanted to refactor.

You have to provide your own plugin and folder

Unarchive the zip file to get the database structure and db data. It is the same as the a4d demo, with a polymorphic address table added.
