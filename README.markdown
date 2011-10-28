Restful Active4D was written about 2 years ago and presented to the community. There was not much interest, mainly because 4D programmers are not really programmers (ok Most arn't) and are stuck in their 4D world. 
  
I've used it a few times and have updated some components, mainly the libraries and mainly in the JSON area.  I tried to do some major refactoring on the rgen (generate scaffold) but ran out of steam.  The code works, it is just jumbled up. Rather than continue at the point I gave up. I decided to post what I have and if there is interest I'll work a little on the generator.

This version was started as that two year old demo. The Active4D V5 Demo was the starting point on most things, except the data structure, were thrown out and replaced the the original demo code. The libraries were updated and a quick pass to fix some of the differences.

form.a4l was rewritten as html.a4l - both are there

rest.a4l is in new version and there is not much new.

rest.utils.a4l has updated json parsing

Some things moved around because of the changes in the Active4D demo.

There is a side bar when you start the application that has some 2 year old documentation.

You have to provide your own plugin and folder

Unarchive the zip file to get the database structure and db. It is the same as the a4d demo, with a polymorphic addressess table added.
