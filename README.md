# Lockable behavior for Meteor Astronomy

This package adds an [Astronomy](https://github.com/jagi/meteor-astronomy) behavior for locking/unlocking documents.

## Installation

You should have [Meteor Astronomy](https://github.com/jagi/meteor-astronomy) and [Astronomy Behaviors](https://github.com/jagi/meteor-astronomy/wiki/Behaviors) installed.
Adding this behavior is as simple as installing the package and adding the behavior "lockable" to any Astro class you want.

```sh
$ meteor add jbbr:astronomy-lockable-behavior
```

## Usage

```js
Post = Astro.createClass({
  name: ...
  ...
  behaviors: ['lockable', ...]
})
```

```js
var post = Posts.findOne();
// aquire lock for document
post.lock();
// others can check now for lock
post.isLocked(); // returns true
// do changes
post.set('title', 'New Title');
// unlock and save document
post.unlock()

```
