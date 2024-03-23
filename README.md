# Web Development Project 4 - AniDiscover

Submitted by: Jason Tang

This web app: Fetches tailored anime selections by excluding certain genres.

Time spent: ~10 hours spent in total

## Required Features

The following **required** functionality is completed:

- [ X ] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [ X ] **Only one item/API call is viewable at a time**
- [ X ] **API calls appear random to the user**
- [ X ] **At least one image is displayed per API call**
- [ X ] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [ X ] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ X ] Multiple types of attributes can be added to the ban list
- [ X ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ X ] Buttons to clear the ban list and search history
* [ X ] Button to open up a modal displaying anime synopsis (Not shown in GIF)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='project4.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- I had issues with updating my state variables properly as I had functions to remove specific elements from an array and adding specific objects. Learned that it's best to just initialize it as an empty array or object.
- I had difficulties with the logic behind the BanList and updating the query string based off of it, but I perservered through and found a solution.
- Styling the app was a challenge as the history and BanList were 2 fixed positions to the left and right. I had to be very specific with my colors, widths, and heights.
- Mapping each element from the history and banList arrays were generating errors for me, so I had to utilize conditional rendering a lot.
- Still trying to figure out how to make it so that the same anime isn't fetched twice, but it requires a complex solution that I haven't been able to think of yet. This is due to my response object and query string. 
## License

    Copyright [2024] [Jason Tang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
