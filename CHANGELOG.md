# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 1.4.5 - 2022-02-15

- Update dependencies.

## [1.4.4] - 2019-12-31

- Changed test tool to "jest" and "ts-jest". #7

## [1.4.2] - 2019-10-17

- Update dependencies.

## [1.4.0] - 2018-08-23

### Added

- Added [`getRect()`](https://github.com/archco/element-measurer#getrect) method. (4e7f0618a9d4c746bcc98896031a80441f17cbbc)

## [1.3.0] - 2018-03-16

### Changed

- Changed tests for the continuous integration (#5).
  The browser tests is only for the checking compatibility.

### Removed

- Removed getter `.isDocumentTarget`. use `.isDocument` instead. (b1d4c76e73a92058fdc0f59efc8db296346d1da2)

## [1.2.0] - 2018-01-24

### Changed

- Migrates to typescript. #3

### Deprecated

- Getter `.isDocumentTarget` is deprecated. instead use `.isDocument`.

## [1.1.0] - 2017-12-21

### Added

- Add method "getOffset()". #2

## [1.0.2] - 2017-12-12

### Changed

- Change ElementMeasurer.isDocumentTarget to getter.

## [1.0.0] - 2017-10-10

First release. [README.md](https://github.com/archco/element-measurer/blob/master/README.md)

[Unreleased]: https://github.com/archco/element-measurer/compare/v1.4.4...HEAD
[1.4.4]: https://github.com/archco/element-measurer/compare/v1.4.2...v1.4.4
[1.4.2]: https://github.com/archco/element-measurer/compare/v1.4.0...v1.4.2
[1.4.0]: https://github.com/archco/element-measurer/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/archco/element-measurer/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/archco/element-measurer/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/archco/element-measurer/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/archco/element-measurer/compare/v1.0.0...v1.0.2
[1.0.0]: https://github.com/archco/element-measurer/compare/361bfbb...v1.0.0
