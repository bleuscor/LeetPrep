<h1 align="center">
  <a href="https://standardjs.com"><img src="src/assets/icon.png" alt="LeetPrep - Handy Interview Preparation for Developers" width="200"></a>
  <br>
  <a href="">LeetPrep</a> - Handy Interview Preparation for Developers
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://github.com/bleuscor/LeetPrep/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"/>
  </a>
  <a href="https://chromewebstore.google.com/detail/leetprep/golgnmppimdlhegenfaiaoahichlfjmo">
    <img src="https://img.shields.io/chrome-web-store/v/golgnmppimdlhegenfaiaoahichlfjmo.svg" alt="chrome-webstore"/>
  </a>
  <a href="https://twitter.com/intent/tweet?text=LeetPrep%20-%20Handy%20interview%20preparation%20tool%20for%20developers&url=https://github.com/bleuscor/LeetPrep&hashtags=javascript,github,leetcode,coding,interview,chrome,python,java">
    <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social">
  </a>
</p>

<div align="center">

  [![Chrome](https://user-images.githubusercontent.com/53124886/111952712-34f12300-8aee-11eb-9fdd-ad579a1eb235.png)](https://chromewebstore.google.com/detail/leetprep/golgnmppimdlhegenfaiaoahichlfjmo) 
</div>




## What is LeetPrep?
<p>LeetPrep is a handy interview preparation tool for developers. It contains the most commonly used resources to prepare for tech interviews.</p>
<ul>
<li>Programming Languages Documentation (Python, Java)</li>
    <ul><li>References to built-in functions and data structures with examples.</li></ul>
<li>Big O complexity tables and charts (Data Structures & Sorting)</li>
<li>Common problem-solving techniques for Leetcode (Leetcode Patterns)</li>
<li>Quick access to a curated list of popular interview questions (Blind 75)</li>
</ul>

I built LeetPrep to help me prepare for technical interviews. Having easy access to a curated set of resources was very useful while doing leetcode problems or simply studying for interviews. The one click access to the handy resources is amazing!

Star [this repository](hhttps://github.com/bleuscor/LeetPrep/) for further development of features. If you want a particular feature, simply [request](https://github.com/bleuscor/LeetPrep/labels/feature) for it!


<div style="display: flex; justify-content: center; gap: 20px;">
    <img src="https://github.com/bleuscor/LeetPrep/assets/9091157/5849244b-8297-4375-9867-73084cd62d28" alt="Hero1" width="450" />
    <img src="https://github.com/bleuscor/LeetPrep/assets/9091157/ee9469d8-8f6e-4063-aaf6-1dac9aac372f" alt="Hero2" width="450" />
</div>


## Contributing

LeetPrep is a fully open-source project and contributions are welcome to improve the extension.

Here are a few feature opens you can get started with:
- [ ]  Additional Programming Languages Documentation 
    - [ ]  C++
    - [ ]  Javascript
    - [ ]  Ruby
    - [ ]  C#
    - [ ]  Go
- [ ]  SQL Documentation
- [ ]  Data Science Section
    - [ ]  Pandas Documentation
    - [ ]  Numpy Documentation
- [ ]  Add difficulty level to Blind 75 questions


If you have any other new suggestions or feature requests, feel free to open an issue or submit a pull request.



### Local Development

<ol>
  <li>Fork this repo and clone to your local machine</li>
  <li>Go to <a href="chrome://extensions">chrome://extensions</a> </li>
  <li>Enable <a href="https://www.mstoic.com/enable-developer-mode-in-chrome/">Developer mode</a> by toggling the switch on top right corner</li>
  <li>Click 'Load unpacked'</li>
  <li>Select the "build" folder at the root of this repo</li>
  <li>Local development extension should be loaded now</li>
</ol>

Commands available:

```
npm i                 Install dependencies
npm run start         Start the development server at localhost
npm run build         Publish production ready extension to the build folder
```

When installing node modules, if there is a dependency errror, run `npm config set legacy-peer-deps true` then run `npm i`.


### Commit Convention
Before you create a Pull Request, please check that you use the [conventional commits format.](https://www.conventionalcommits.org/en/v1.0.0/)

It should be in the form `category(scope or module): message` in your commit message from the following categories:

-   `feat / feature`: all changes that introduce completely new code or new features

-   `fix / bug`: all changes that fix a bug

-   `refactor`: any code related change that is not a fix nor a feature

-   `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)

-   `chore`: all changes to the repository that do not fit into any of the above categories

    e.g. `feat(editor): improve tab switching speed`
