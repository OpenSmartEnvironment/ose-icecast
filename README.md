# Open Smart Environment Icecast package

This package makes it possible to search for Icecast streams in the
Icecast directory (http://dir.xiph.org)

It defines the icecast stream [entry kind] and registers it as a
source to [OSE Media player].

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Gaps in the documentation
- No test suite

This is not yet a piece of download-and-use software. Its important
to understand the basic principles covered by this documentation.

Use of this software is currently recommended only for users that
wish participate in the development process (see Contributions).

TODO: Make contribution a link

## Getting started
To get started with OSE, refer to the [ose-bundle] package and
[Media player example application].

## Modules
Open Smart Environment Icecast package consists of the following modules:
- Icecast stream kind
- OSE Icecast core
- OSE Icecast content

### Icecast stream kind
[Entry kind] describing Icecast streams.

Module [Icecast stream kind] reference ... 

### OSE Icecast core
Core singleton of ose-icecast npm package. Registers [entry kinds]
defined by this package to the `"icecast"` [scope].

Module [OSE Icecast core] reference ... 

### OSE Icecast content
Provides files of OSE Icecast package to the browser.

Module [OSE Icecast content] reference ... 

## Contributions
To get started contributing or coding, it is good to read about the
two main npm packages [ose] and [ose-bb].

This software is in the pre-alpha stage. At the moment, it is
premature to file bugs. Input is, however, much welcome in the form
of ideas, comments and general suggestions.  Feel free to contact
us via
[github.com/opensmartenvironment](https://github.com/opensmartenvironment).

## License
This software is licensed under the terms of the [GNU GPL version
3](../LICENCE) or later
