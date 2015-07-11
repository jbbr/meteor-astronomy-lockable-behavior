# Lockable behavior for Meteor Astronomy

This package adds an Astronomy behavior for locking/unlocking documents.

## Usage

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
