Package.describe({
  "summary": "meteor new relic integration",
  "name": "alex509:newrelic",
  "version": "1.0.5",
  "author": "Alexey Kuznetsov (https://github.com/Alex509)",
  "homepage": "https://github.com/Alex509/meteor-newrelic",
  "git": "https://github.com/Alex509/meteor-newrelic.git"
});

Npm.depends({
  "newrelic": "2.3.0",
  "@newrelic/native-metrics": "2.1.2",
  "cls-fibers": "1.1.1",
  "fibers": "2.0.0"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.5.1");
  if (api.export) 
  	api.export('newrelic', 'server');
  api.add_files('lib/server.js', 'server');
});

