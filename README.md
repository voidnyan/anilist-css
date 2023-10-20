# anilist-css
This is a library of my [anilist profile](https://anilist.co/user/voidnyan/) custom css. Mainly for my use, but I'm trying to make it modular so people can use bits and pieces that they want.

## usage

You can import any or all of the css files into your profile.

Please note that at the time of writing this, most CSS files might be prone to change. The following should be on the safe side, though:

```css
@import url("https://voidnyan.github.io/anilist-css/css/width-reset.css");
@import url("https://voidnyan.github.io/anilist-css/css/social.css");
```

__width-reset__ forces the UI to keep the "4-row" format, where the favourites section has four entries in one row. [Example](https://i.ibb.co/s930qM8/image.png).


__social__ has some quality of life changes to the social tab, mainly always displaying the username under the profile picture.

### folders

Please note that while I try to make most of the CSS modular and usable for all, the `voidnyan` folder contains CSS that is specific to my profile. You are of course welcome to modify them to fit your own use case.

## variables

| variable | file | description |
| -------- | ---- | ----------- |
| --nav-symbol | css/nav.css | displayed under profile navigation links |
| --discord-user | css/discord-badge.css | display a username under AL username for those that you follow |
| --follower-badge-text | css/follower-badge.css | replace the text displayed when you follow someone |
| --color-logo | css/nav-logo.css | change the color of AniList logo. Hex-value recommended. Unfortunately the navbar is out of scope for the profile theme color. |

You can declare these variables in your own custom CSS.

```css
:root {
	--nav-symbol: "☂";
    --discord-user: "@username";
    --follower-badge-text: "loves you";
    --color-logo: #685182;
    /*--color-logo: rgb(var(--color-blue)); */
}
```