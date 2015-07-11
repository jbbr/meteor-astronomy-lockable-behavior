var checks = {}

checks.behaviorData = function(behaviorData) {
  if (!_.isString(behaviorData.lockFieldName)) {
    throw new Error(
      'The "lockFieldName" option in the "lockable" behavior has to ' +
      'be a string'
    )
  }
}

Astro.createBehavior({
  name: 'lockable',
  options: {
    lockFieldName: '_lock'
  },
  events: {
    addbehavior: function(behaviorData) {
      var Class = this
      var behavior = Astro.behaviors.lockable

      // Set default behavior's options if they were not provided in the schema.
      if (_.isUndefined(behaviorData.lockFieldName)) {
        behaviorData.lockFieldName = behavior.options.lockFieldName
      }

      // Check validity of options
      checks.behaviorData.call(Class, behaviorData)

      var fields = {}

      fields[behaviorData.lockFieldName] = {
        type: 'object',
        default: {}
      }
      fields[behaviorData.lockFieldName + '.active'] = {
        type: 'boolean',
        default: false
      }
      fields[behaviorData.lockFieldName + '.lockedBy'] = {
        type: 'string',
        default: null
      }
      fields[behaviorData.lockFieldName + '.lockedAt'] = {
        type: 'date',
        default: null
      }

      // Add fields.
      Class.addFields(fields)

      // Add methods.
      Class.addMethods(methods)

      // Add events.
      Class.addEvents(events)
    }
  }
})
