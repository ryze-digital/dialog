# RYZE Digital Dialog

![Run linter(s) workflow status](https://github.com/ryze-digital/dialog/actions/workflows/run-lint.yml/badge.svg)

## Install

```sh
npm i @ryze-digital/dialog
```

## Usage

### Scss

```scss
@use "@ryze-digital/dialog";
```

Use the provided `configure` mixin to define your dialog defaults. A complete list of all possible configurations can
be found in [/src/styles/_config.scss](src/styles/_config.scss).

```scss
@include dialog.configure(...);
```

Add familiar styles to get a typical dialog look using `base` mixin. Use the `clone-modal-style` mixin to make the modal
dialog look the same as the non-modal.

```scss
dialog {
    @include dialog.base();
    @include dialog.clone-modal-style();
}
```

### JavaScript

```js
import { Dialog } from '@ryze-digital/dialog';
```

```js
new Dialog({...}).init();
```

## Demos

Checkout this repository and use the [/demos](/demos) folder as document root to see a running demo in the browser.

- [Basic use case](/demos/basic.html)
- [Multiple instances](/demos/multiple.html)
- [Event binding](/demos/event-binding.html)
- [Confirmation](/demos/confirmation.html)
- [Auto open](/demos/auto-open.html)
- [Custom animation](/demos/custom-animation.html)
- [Fetch content](/demos/fetch.html)
- [Multiple triggers](/demos/multiple-triggers.html)