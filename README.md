# WEB103 Prework - Creatorverse Cozy Edition

Submitted by: Erika Villalpando

About this web app: 

Creatorverse is a React app that lets you keep track of your favorite content creators. Youtubers, TikTokers, Twitch streams, all social media personalities can live in this little world. You can add creators, view their information, edit their information, and delete them when you’ve moved on from them. I wanted the app to feel a little different than a typical CRUD project so I based the design, look, and feel on cozy games. I used calming pastel colors and a simple layout to give the app a more welcoming personalized feeling. The main goal of this project was to practice building a React app that works with a database and supports CRUD functionality. I also practiced React state, forms, validation routing, API requests, and creating a design of my own. I hope you enjoy it! :)

Time spent: 18 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X ] **A logical component structure in React is used to create the frontend of the app**
- [X ] **At least five content creators are displayed on the homepage of the app**
- [ X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X ] **API calls use the async/await design pattern via Axios or fetch()**
- [ X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [ X] **Each content creator has their own unique URL**
- [ X] **The user can edit a content creator to change their name, url, or description**
- [ X] **The user can delete a content creator**
- [ X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [X ] The content creator items are displayed in a creative format, like cards instead of a list
- [X ] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:
- Added a default image in case the user does not provide one.
- Added alerts to let the user know they changes were successful


## Video Walkthrough

Here's a walkthrough of implemented required features:


https://github.com/user-attachments/assets/401f8198-95a6-4aec-843c-8ecb91566e93



GIF created with ...  👉🏿 Kap

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

The biggest challenge I encountered while building Creatorverse was getting the routing to work correctly. I have taken a web development class but it has been a while so I went back and read the documentation. I was coding while reading the documentation and that seemed to cause some issues because different documentation documents showed a different way to route the pages. I took the class before React made improvements so I learned it a little bit differently. I relearned how React Router handles different pages and how to pass the creator’s ID through the URL. I had issues with the creator information not being available when the page loaded, which caused an error when trying to access the creator’s data.

The forms also took some trail and error. I worked on making inputs controlled by React state, adding validation for required fields, limiting descriptions to 250 characters, and making sure the correct creator was updated when submitting the edit form. The database and Supabase requests were easier to figure out though. Database functions came easier to me than the routing. 

Overall, getting the routing, React state, forms, and Supabase requests to work took some debudding, but it helped me understand React much better and it was a good refresher and I got everything functioning at the end. 

## License

Copyright [👉🏿 2026] [👉🏿 Erika Villalpando]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

