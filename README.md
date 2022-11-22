Trendyol Search Enhancer
======================
An extension that enhances your search experience on Trendyol.com by automatically adding the  commented products filter and product rating over 4.3 filter.

Author
------
It's developed by [Fatih Yavuz](https://twitter.com/fthdev) former Backend Engineer at Trendyol Search.
This repository does not represent the works or opinions of Trendyol.com or other people working at it.


Usage
-----

To install from sources:

1. Clone the repository
2. Run `npm run build` to build the extension
3. Go to chrome://extensions/.
4. Click Load unpacked extension.
5. Select the `dist` directory.

If you dont have `make ` installed on your device, run this command to build the extension:
Or, simply download the extension from the release section.

```bash
rm -rf dist; mkdir dist 2>/dev/null; cp -R build/extension_template/* dist/; npm install && npx webpack; node build/scripts/post-build.js
```
Licence
-------
This project is licensed under the terms of the Do What the Fuck You Want To Public License.
