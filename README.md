# Google Clone

Website: https://google-clone-beta-three.vercel.app/

### If you would like a local version:
#### API Set-Up
1. Make a Google Developer account and create a new project
2. Add the Custom Google Search API to that project
3. Create an API key in the credentials section and have a note of it
4. Create a programmable search engine (Link: https://programmablesearchengine.google.com/intl/en_uk/about/)
5. Make a note of the Search Engine ID (this is needed for the cx field for the API)

#### Environment Set-Up
1. Type ```git clone https://github.com/rajmoham/google-clone.git``` into your terminal in the wanted directory
2. In that directory, create a new file naming it ```.env```
3. In the file, type the following:
```
REACT_APP_API_KEY={ paste in the API key here }
REACT_APP_CX={ paste the Search Engine ID here }
```
4. Save the file, and run ```npm start``` in the terminal, then see the program work!

============================================================================================

#### Synopsis
- Fetches data using Custom Google Search API
- Attention to detail design replicating Google search engine
- Uses environmental variables to maintain security on private data

#### Bugs
- Cannot type another search query on the results page

#### Improvements
- Page navigations to show further results
