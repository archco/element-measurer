# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Changed tests for the continuous integration (#5).
  The browser tests is only for the checking compatibility.

### Removed

- Removed getter `.isDocumentTarget`. use `.isDocument` instead.

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

[Unreleased]: https://github.com/archco/element-measurer/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/archco/element-measurer/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/archco/element-measurer/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/archco/element-measurer/compare/v1.0.0...v1.0.2
[1.0.0]: https://github.com/archco/element-measurer/compare/361bfbb...v1.0.0
