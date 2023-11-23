# Set-Lister

## codecademy's Jammming portfolio project

Since [Codecademy's Jammming](https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-jammming/kanban_projects/jammming-react18) project requires getting an account at Spotify, I decided to look for an alternative. I needed something that supports both `get` and `post` requests. I already have an account at `airtable` so I decided to use that. 

Rather than use a database of general songs, I focused on the songs played by the band Ride-On. The aim is to make a setlist for playing at a new venue. This list of songs to choose from is [here](https://airtable.com/appLadPzYf3MPVsw6/tblDrAVrCyyACAQKi/viw8ttBkOkDHFj6Wq?blocks=hide).

## Initial startup

I used vite to setup a `React` template:

```bash
npm create vite@latest
```

I followed the prompts and selected `React` and `javascript`. 

```bash
npm install
```

Indicated that I have an old version of node, but it seems to work for now.

## Components

The project has the following:

- `Track`: a component that displays a single track
- `Tracklist`: a component that displays a list of tracks
- `SearchResults`: a component that uses Tracklist to display a list of tracks that can be added to the setlist
- `Setlist`: a component that uses Tracklist to display a list of tracks that are already in the setlist
- `Searchbar`: a component used to filter the tracks that are included in SearchResults

Also: there is a top level component call `App`.

## Other packages

I am using `React` via `Vite`. The intension was to host on `netlify`, so I use their package too. And the the package for `airtable`. To pass personal access tokens I use `dotenv`. 


```bash
npm install dotenv
npm install netlify-cli -g
npm install airtable
```

Obviously: the `.env` file is not included in this repository. To run this yourself with your own `airtable` database, you will need to provide your own version of these values (PAT = personal access token, `SONGLIST` is a table in the database):

```bash
AIR_TABLE_PAT="**********************************"
AIR_TABLE_BASE_ID="********************"
AIR_TABLE_SONGLIST_ID="****************"
```

#### vite notes
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
