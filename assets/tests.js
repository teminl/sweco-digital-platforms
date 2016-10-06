'use strict';

define('sweco-bootstrap/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/bootstrap-modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/bootstrap-modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bootstrap-modal.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/progress-js.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/progress-js.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/progress-js.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/sweco-formgroup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sweco-formgroup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sweco-formgroup.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/sweco-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sweco-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sweco-input.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/sweco-label.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sweco-label.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sweco-label.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/components/sweco-search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sweco-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sweco-search.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('sweco-bootstrap/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'sweco-bootstrap/tests/helpers/start-app', 'sweco-bootstrap/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _swecoBootstrapTestsHelpersStartApp, _swecoBootstrapTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _swecoBootstrapTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _swecoBootstrapTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('sweco-bootstrap/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/helpers/resolver', ['exports', 'sweco-bootstrap/resolver', 'sweco-bootstrap/config/environment'], function (exports, _swecoBootstrapResolver, _swecoBootstrapConfigEnvironment) {

  var resolver = _swecoBootstrapResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _swecoBootstrapConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _swecoBootstrapConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('sweco-bootstrap/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/helpers/start-app', ['exports', 'ember', 'sweco-bootstrap/app', 'sweco-bootstrap/config/environment'], function (exports, _ember, _swecoBootstrapApp, _swecoBootstrapConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _swecoBootstrapConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _swecoBootstrapApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('sweco-bootstrap/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/test-helper', ['exports', 'sweco-bootstrap/tests/helpers/resolver', 'ember-qunit'], function (exports, _swecoBootstrapTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_swecoBootstrapTestsHelpersResolver['default']);
});
define('sweco-bootstrap/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('sweco-bootstrap/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('sweco-bootstrap/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
