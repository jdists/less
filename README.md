# @jdists/less

less as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [less](https://github.com/less/less.js)

## Example

```html
<!--jdists encoding="less"-->
@base: #f938ab;
div {
  color: @base;
}
<!--/jdists-->

<!--less-->
@base: #f938ab;
div {
  color: @base;
}
<!--/less-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fless
[npm-image]: https://badge.fury.io/js/%40jdists%2Fless.svg
[travis-url]: https://travis-ci.org/jdists/less
[travis-image]: https://travis-ci.org/jdists/less.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/less?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/less/badge.svg?branch=master&service=github