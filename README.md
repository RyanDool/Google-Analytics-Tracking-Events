# Google-Analytics-Tracking-Events
Javascript that loops through DOM elements with data attributes "trackevent" and triggers analytics events when those elements are clicked.


## Getting Started
Please note that two different tagging methods are included in the js file.  Please uncomment either ga() **OR** gtag() depending on whether you are using Universal Analytics or Global Site Tag
The required Javascript is contained in the google-analytics-tracking-events.js file Once the JS is loaded, simply add the data attribute "trackevent" to the element you wish to track.  If the element is an anchor the value of the href attribute will appear in analytics as the event label.  If the element is not an anchor you **MUST** include a vlue for the "trackevent" data attribute as that value will be recorded as the event label in Google Analytics

Tracking Clicks on non-anchor elements
```
<ul>
 <li data-trackevent="Option 1">Option 1</li>
 <li data-trackevent="Option 2">Option 2</li>
 <li>Option 3</li>
 <li>Option 4</li>
</ul>
```

Tracking Clicks on anchor elements
```
<a href="" data-trackevent>click me</a>
```


## Authors
Ryan Dool