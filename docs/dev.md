# Dev

## Dependency Installation

Development requires LTS version Node.js 16.13.2.
You can check the installed version of Node.js by using the command:

> node -v

If you have a different version of Node.js installed, please remove the current version from your computer. Install Node.js using nvm.
[Installation instructions for nvm on different operating systems](https://github.com/nvm-sh/nvm#node-version-manager---)

The current version of Node.js is specified in this file.

Install project dependencies with the following command:

> npm ci

## Updating Node.js Version

0. In the command line where you are using nvm, enter the command `nvm list available`. In the LTS column, select the latest version.
1. Install the latest version using the command `nvm install [desired version number]`.
2. Check the installed version using the command `nvm ls`.
3. Select the desired version using the command `nvm use [desired version number]`. The chosen version will have `*` next to it when you run the command `nvm ls`.
4. Update the version number in this file and follow the steps in the Dev section.

## New Language

0. `public/locales/`
1. Create a folder with the language code.
2. `public/locales/{code_lang}`
3. Create a file named `translation.json`.
4. Add the content from the English language file as the format reference.
5. Translate the content to the desired language.
6. `store/lang/state`
7. Add the new language.

## New Marker

0. `store/filter/state` (`types`, `extraTypes`, `polygonTypes`, `polylineTypes`)
1. Add the marker types.
2. `containers/map/`
3. Add the marker component.
4. `containers/map/switchTypeFeature`
5. Add the marker type and component.
6. Add the translation.

## New Map

0. In the admin panel, create 2 collections (with a map name abbreviation (ID)).
1. `public/images/tiles/`
2. Place the original map image.
3. `public/images/tiles/`
4. Create a folder with the map name abbreviation (ID).
5. Slice the map using [oliverheilig/LeafletPano](https://github.com/oliverheilig/LeafletPano).
6. `public/images/tiles{id_map}`
7. Save the tiles.
8. `store/map/state`
9. Add the configuration.
10. Add the translation.
11. data/index
12. Add to the cache merge.
13. Add to the cache update cron.

_Example map configuration_

```js
    SB: {                                         // map ID
      id: 'SB',                                   // map ID
      image: {                                    //
        width: 4096,                              // original image size
        height: 4096,                             // original image size
        path: '/images/tiles/SB/{z}-{x}-{y}.jpg', // path to sliced tiles
      },                                          //
      levels: {                                   //
        org: 4,                                   // original zoom (tile size per zoom) taken from pano
        max: 7,                                   // maximum slicing, zoom 7
        min: 1,                                   // minimum slicing, zoom 1 (reduction of the original image)
        default: 1,                               // default zoom
      },                                          //
      width: 1000,                                // game size (in meters)
      height: 1000,                               // game size (in meters)
      center: [-500, 500],                        // map center for positioning
      padding: