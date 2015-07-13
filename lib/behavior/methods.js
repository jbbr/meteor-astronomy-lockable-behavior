methods = {};

methods.unlock = function(callback) {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.behaviors.findBehavior(this.constructor, 'lockable');

  // set _lock fields to default values (remove lock)
  this.set(behaviorData.lockFieldName + '.active', false);
  this.set(behaviorData.lockFieldName + '.lockedBy', null);
  this.set(behaviorData.lockFieldName + '.lockedAt', null);

  // save document (saves also modified fields during lock - no extra doc.save necessary)
  this.save(callback);
};

methods.lock = function(callback) {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.behaviors.findBehavior(this.constructor, 'lockable');

  // set _lock fields (activate lock and add meta information)
  this.set(behaviorData.lockFieldName + '.active', true);
  this.set(behaviorData.lockFieldName + '.lockedBy', Meteor.userId());
  this.set(behaviorData.lockFieldName + '.lockedAt', new Date());

  // save document (includes modified lock fields but also other fields)
  this.save(callback);
};

methods.isLocked = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.behaviors.findBehavior(this.constructor, 'lockable');

  return this.get(behaviorData.lockFieldName + '.active');
};
