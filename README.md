# RYZE Digital Dialog

![Run linter(s) workflow status](https://github.com/ryze-digital/dialog/actions/workflows/run-lint.yml/badge.svg)

## Install

```sh
npm i @ryze-digital/dialog
```

## Usage

### HTML

```html
<button data-open-dialog="your-dialog-id">Open dialog button label</button>

<dialog id="your-dialog-id" data-dialog>
    <button data-close-dialog>Close dialog button label</button>
    Your dialog content
</dialog>
```

### Scss

```scss
@use "@ryze-digital/dialog";
```

Use the provided `configure` mixin to define your dialog defaults.

```scss
@include dialog.configure(...);
```

<details>
<summary>List of available configure options</summary>

| Option             | Type   | Default                         | Description                          |
|--------------------|--------|---------------------------------|--------------------------------------|
| padding            | Map    |                                 |                                      |
| padding.horizontal | Number | `scss-utilities.rem-calc(20px)` | Left and right padding of the dialog |
| padding.vertical   | Number | `scss-utilities.rem-calc(20px)` | Top and bottom padding of the dialog |
| max                | Map    |                                 |                                      |
| max.width          | Number | `95ch`                          |                                      |
| max.height         | Number | `100%`                          |                                      |
| z-index            | Number | `null`                          |                                      |

Check out [the actual configure mixin](src/styles/_config.scss) for better understanding.
</details>

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

<details>
<summary>List of available parameters for Dialog class</summary>

| Option | Type        | Default                                   | Description                                                                                                                                                                                                           |
|--------|-------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| el     | HTMLElement | `document.querySelector('[data-dialog]')` | Container to which the library should be bound                                                                                                                                                                        |
| modal  | boolean     | `true`                                    | Should dialog use [showModal()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) (`true`) or [show()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show) (`false`) |

</details>

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