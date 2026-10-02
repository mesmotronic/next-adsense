# Google AdSense components for Next.js

This is the simplest possible React components for using Google Adsense with Next.js app router.

## Install

```bash
npm i @mesmotronic/next-adsense
```

## Use

In your `layout.ts` file, add the `GoogleAdSense` component and set `client` to your publisher ID:

```jsx
import { GoogleAdSense } from "@mesmotronic/next-adsense";

...

<GoogleAdSense client="ca-pub-XXXXXXXXXXXXXXXX" />
```

To only show anchor ads at the bottom of the page, set `overlays` to `"bottom"`, or `"collapsed-bottom"`
to also disable collapsible anchor ads. Note that this enables anchor ads even if you've turned them off
in your Auto ads settings ([more info](https://support.google.com/adsense/answer/7478225)):

```jsx
<GoogleAdSense client="ca-pub-XXXXXXXXXXXXXXXX" overlays="bottom" />
```

On your pages, you can then add a `GoogleAdUnit` component to wrap the `<ins>` elemenent Google AdSense
creates for you in its code generator, for example:

```jsx
import { GoogleAdUnit } from "@mesmotronic/next-adsense";

...

<GoogleAdUnit>
  <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"
  ></ins>
<GoogleAdUnit>
```

All ad unit types and sizes are supported.

That's it!