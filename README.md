# Unit 18 PWA Homework: Online/Offline Budget Trackers

This program is intended to explore the usage of offline caching through a combination of MongoDB, Mongoose, and Service Workers. In this regard, the site is fully functional, allowing the user to access a cached version of the website while offline, input changes to the database offline, and have those pending changes automatically update the database upon reconnect to the Internet. 

## Intended Usage

According to the user story that came bundled with this project, the intent of this program is to enable a frequent traveller to track their finances in areas with and without steady Internet access. To that end, the user should be able to enter deposits and expenses and see this information tracked via graph. Furthermore, this data should persist between sessions and across devices. Beyond even this, however, the app is capable of caching itself on the user's local device, allowing somewhat limited functionality even without Internet access. In particular, users can still enter deposits and expenses as they would normally, and these changes will be stored locally until the user's device once more connects to the Internet, at which point the database will be updated as normal. Note that, currently, the table and chart don't retain offline information across reloads, but that this information is still being cached, meaning that an offline user entering information and then reloading the page won't see their offline changes until they connect to the Internet once more. 

## Features

- Enter deposits and expenses, both online and offline!
- Cache the page for limited offline usage
- Store information entered during offline usage 
- Update the database upon reconnect with any offline information
- Display all input via table and graph

## Link to Published Page

(https://github.com/fanofstuff/Online-Offline-BT)


## How to Use

1. Simply open the application (Link: https://ancient-earth-12938.herokuapp.com/), 
2. Enter any deposits (Add Funds) or expenses (Subtract Funds) that you have, 
3. and be confident in the knowledge that your information will persist and remain accessible. 

Note that you might need to reload the page twice upon first loading so as to cache the entire application for offline usage. 

## Credits

Plainly, the step-by-step directions offered by Jonathon Watson, our instructor, really made this quite easy - worryingly easy, actually; hopefully I don't have outdated information! 

© 2019 fanofstuff