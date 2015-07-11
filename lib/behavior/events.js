events = {}

events.beforesave = function() {
  // Find a class on which the behavior had been set.
  var behaviorData = Astro.utils.behaviors.findBehavior(this.constructor, 'lockable')

  // check if "_lock" field has been modified
  // lock should be only checked if it hasn't been changed
  if ( !(behaviorData.lockFieldName in this.getModified()) ) {
    // if lock is active fail save
    if (this.get(behaviorData.lockFieldName + '.active')) {
      throw new Error('document is locked, use unlock method')
    }
  }
}
