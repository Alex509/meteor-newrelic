Package.describe({
  "summary": "meteor new relic integration",
  "name": "alex509:newrelic",
  "version": "1.0.1",
  "author": "Alexey Kuznetsov (https://github.com/Alex509)",
  "homepage": "https://github.com/Alex509/meteor-newrelic",
  "git": "https://github.com/Alex509/meteor-newrelic.git"
});

Npm.depends({
  "newrelic": "1.38.2",
  "@newrelic/native-metrics": "2.1.1",
  "cls-fibers": "1.1.1"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.3.1");
  if (api.export) 
  	api.export('newrelic', 'server');
  api.add_files('lib/server.js', 'server');
});

