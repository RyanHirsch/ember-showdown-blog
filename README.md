#Ember showdown Blog
My implementation of [Building an App with Ember.js](http://www.youtube.com/watch?v=Ga99hMi7wfY) by [Tom Dale](https://twitter.com/tomdale) using Yeoman.

##Issues along the way

###Initial externalization of templates
In the video Tom adds a script tag to house his application template in his index.html. Then when ember initializes it automagically pulls it in and it works. When I attempted to externalize it, I named it app, since thats what my Ember.Application was called. This made sense to me, but didn't work. So I inlined it like he did and then output Ember.TEMPLATES to the console and showed that Ember automatically created an 'application' template. So I just renamed my app.handlebars to application.handlebars and everything worked like I expected.

###Adding in Ember-Data
Finding the latest version of Ember-Data appears to be harder than it is. I was unable to find a built version anywhere, so I had to clone master from the [project](https://github.com/emberjs/data) and build it myself.

Then I ran into issues with [has no method 'readOnly' and has no method 'attr'](http://stackoverflow.com/questions/15864090/has-no-method-readonly-and-has-no-method-attr)