Package.describe({
  name: 'jbbr:astronomy-behaviors-lockable',
  version: '0.0.1',
  summary: 'Lockable behavior for Meteor Astronomy',
  git: 'https://github.com/jbbr/meteor-astronomy-lockable-behavior',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')

  api.use('jagi:astronomy-behaviors@0.6.0')
  api.use('underscore')

  api.addFiles('lib/behavior/methods.js')
  api.addFiles('lib/behavior/events.js')
  api.addFiles('lib/behavior/behavior.js')
})
