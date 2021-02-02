define(['dart_sdk'], (function load__packages__flutter_web__io(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var io = Object.create(dart.library);
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  const CT = Object.create(null);
  var L0 = "package:flutter_web/io.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(StringL(), StringL(), ["FLUTTER_TEST", "true"]);
    }
  }, false);
  var C0;
  io.Platform = class Platform extends core.Object {
    static get operatingSystem() {
      return io.Platform._operatingSystem;
    }
  };
  (io.Platform.new = function() {
    ;
  }).prototype = io.Platform.prototype;
  dart.addTypeTests(io.Platform);
  dart.addTypeCaches(io.Platform);
  dart.setLibraryUri(io.Platform, L0);
  dart.defineLazy(io.Platform, {
    /*io.Platform._operatingSystem*/get _operatingSystem() {
      return "android";
    },
    /*io.Platform.isLinux*/get isLinux() {
      return io.Platform._operatingSystem === "linux";
    },
    /*io.Platform.isMacOS*/get isMacOS() {
      return io.Platform._operatingSystem === "macos";
    },
    /*io.Platform.isWindows*/get isWindows() {
      return io.Platform._operatingSystem === "windows";
    },
    /*io.Platform.isAndroid*/get isAndroid() {
      return io.Platform._operatingSystem === "android";
    },
    /*io.Platform.isIOS*/get isIOS() {
      return io.Platform._operatingSystem === "ios";
    },
    /*io.Platform.isFuchsia*/get isFuchsia() {
      return io.Platform._operatingSystem === "fuchsia";
    },
    /*io.Platform.environment*/get environment() {
      return C0 || CT.C0;
    }
  }, true);
  io._ProgramExitedError = class _ProgramExitedError extends core.Error {
    toString() {
      return "Program exited";
    }
  };
  (io._ProgramExitedError.new = function() {
    io._ProgramExitedError.__proto__.new.call(this);
    ;
  }).prototype = io._ProgramExitedError.prototype;
  dart.addTypeTests(io._ProgramExitedError);
  dart.addTypeCaches(io._ProgramExitedError);
  dart.setMethodSignature(io._ProgramExitedError, () => ({
    __proto__: dart.getMethods(io._ProgramExitedError.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(io._ProgramExitedError, L0);
  dart.defineExtensionMethods(io._ProgramExitedError, ['toString']);
  io.HttpOverrides = class HttpOverrides extends core.Object {
    createHttpClient(_) {
      return null;
    }
  };
  (io.HttpOverrides.new = function() {
    ;
  }).prototype = io.HttpOverrides.prototype;
  dart.addTypeTests(io.HttpOverrides);
  dart.addTypeCaches(io.HttpOverrides);
  dart.setMethodSignature(io.HttpOverrides, () => ({
    __proto__: dart.getMethods(io.HttpOverrides.__proto__),
    createHttpClient: dart.fnType(dart.legacy(io.HttpClient), [dart.legacy(io.SecurityContext)])
  }));
  dart.setLibraryUri(io.HttpOverrides, L0);
  dart.defineLazy(io.HttpOverrides, {
    /*io.HttpOverrides.global*/get global() {
      return null;
    },
    set global(_) {}
  }, true);
  var autoUncompress = dart.privateName(io, "HttpClient.autoUncompress");
  var connectionTimeout = dart.privateName(io, "HttpClient.connectionTimeout");
  var idleTimeout = dart.privateName(io, "HttpClient.idleTimeout");
  var maxConnectionsPerHost = dart.privateName(io, "HttpClient.maxConnectionsPerHost");
  var userAgent = dart.privateName(io, "HttpClient.userAgent");
  io.HttpClient = class HttpClient extends core.Object {
    get autoUncompress() {
      return this[autoUncompress];
    }
    set autoUncompress(value) {
      this[autoUncompress] = value;
    }
    get connectionTimeout() {
      return this[connectionTimeout];
    }
    set connectionTimeout(value) {
      this[connectionTimeout] = value;
    }
    get idleTimeout() {
      return this[idleTimeout];
    }
    set idleTimeout(value) {
      this[idleTimeout] = value;
    }
    get maxConnectionsPerHost() {
      return this[maxConnectionsPerHost];
    }
    set maxConnectionsPerHost(value) {
      this[maxConnectionsPerHost] = value;
    }
    get userAgent() {
      return this[userAgent];
    }
    set userAgent(value) {
      this[userAgent] = value;
    }
    addCredentials(url, realm, credentials) {
    }
    addProxyCredentials(host, port, realm, credentials) {
    }
    set authenticate(f) {
    }
    set authenticateProxy(f) {
    }
    set badCertificateCallback(callback) {
    }
    close(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
    }
    delete(host, port, path) {
      return null;
    }
    deleteUrl(url) {
      return null;
    }
    set findProxy(f) {
    }
    get(host, port, path) {
      return null;
    }
    getUrl(url) {
      return null;
    }
    head(host, port, path) {
      return null;
    }
    headUrl(url) {
      return null;
    }
    open(method, host, port, path) {
      return null;
    }
    openUrl(method, url) {
      return null;
    }
    patch(host, port, path) {
      return null;
    }
    patchUrl(url) {
      return null;
    }
    post(host, port, path) {
      return null;
    }
    postUrl(url) {
      return null;
    }
    put(host, port, path) {
      return null;
    }
    putUrl(url) {
      return null;
    }
  };
  (io.HttpClient.new = function() {
    this[autoUncompress] = null;
    this[connectionTimeout] = null;
    this[idleTimeout] = null;
    this[maxConnectionsPerHost] = null;
    this[userAgent] = null;
    ;
  }).prototype = io.HttpClient.prototype;
  dart.addTypeTests(io.HttpClient);
  dart.addTypeCaches(io.HttpClient);
  dart.setMethodSignature(io.HttpClient, () => ({
    __proto__: dart.getMethods(io.HttpClient.__proto__),
    addCredentials: dart.fnType(dart.void, [dart.legacy(core.Uri), dart.legacy(core.String), dart.legacy(io.HttpClientCredentials)]),
    addProxyCredentials: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String), dart.legacy(io.HttpClientCredentials)]),
    close: dart.fnType(dart.void, [], {force: dart.legacy(core.bool)}, {}),
    delete: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    deleteUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)]),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    getUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)]),
    head: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    headUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)]),
    open: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    openUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.Uri)]),
    patch: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    patchUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)]),
    post: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    postUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)]),
    put: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String)]),
    putUrl: dart.fnType(dart.legacy(async.Future$(dart.legacy(io.HttpClientRequest))), [dart.legacy(core.Uri)])
  }));
  dart.setSetterSignature(io.HttpClient, () => ({
    __proto__: dart.getSetters(io.HttpClient.__proto__),
    authenticate: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.Uri), dart.legacy(core.String), dart.legacy(core.String)])),
    authenticateProxy: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.String), dart.legacy(core.String)])),
    badCertificateCallback: dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(io.X509Certificate), dart.legacy(core.String), dart.legacy(core.int)])),
    findProxy: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(core.Uri)]))
  }));
  dart.setLibraryUri(io.HttpClient, L0);
  dart.setFieldSignature(io.HttpClient, () => ({
    __proto__: dart.getFields(io.HttpClient.__proto__),
    autoUncompress: dart.fieldType(dart.legacy(core.bool)),
    connectionTimeout: dart.fieldType(dart.legacy(core.Duration)),
    idleTimeout: dart.fieldType(dart.legacy(core.Duration)),
    maxConnectionsPerHost: dart.fieldType(dart.legacy(core.int)),
    userAgent: dart.fieldType(dart.legacy(core.String))
  }));
  io.HttpClientCredentials = class HttpClientCredentials extends core.Object {};
  (io.HttpClientCredentials.new = function() {
    ;
  }).prototype = io.HttpClientCredentials.prototype;
  dart.addTypeTests(io.HttpClientCredentials);
  dart.addTypeCaches(io.HttpClientCredentials);
  dart.setLibraryUri(io.HttpClientCredentials, L0);
  var encoding = dart.privateName(io, "HttpClientRequest.encoding");
  io.HttpClientRequest = class HttpClientRequest extends core.Object {
    get encoding() {
      return this[encoding];
    }
    set encoding(value) {
      this[encoding] = value;
    }
  };
  (io.HttpClientRequest.new = function() {
    this[encoding] = null;
    ;
  }).prototype = io.HttpClientRequest.prototype;
  dart.addTypeTests(io.HttpClientRequest);
  dart.addTypeCaches(io.HttpClientRequest);
  dart.setLibraryUri(io.HttpClientRequest, L0);
  dart.setFieldSignature(io.HttpClientRequest, () => ({
    __proto__: dart.getFields(io.HttpClientRequest.__proto__),
    encoding: dart.fieldType(dart.legacy(convert.Encoding))
  }));
  io.HttpHeaders = class HttpHeaders extends core.Object {
    _get(name) {
      return JSArrayOfStringL().of([]);
    }
    add(name, value) {
    }
    clear() {
    }
    forEach(f) {
    }
    noFolding(name) {
    }
    remove(name, value) {
    }
    removeAll(name) {
    }
    set(name, value) {
    }
    value(name) {
      return null;
    }
  };
  (io.HttpHeaders.new = function() {
    ;
  }).prototype = io.HttpHeaders.prototype;
  dart.addTypeTests(io.HttpHeaders);
  dart.addTypeCaches(io.HttpHeaders);
  dart.setMethodSignature(io.HttpHeaders, () => ({
    __proto__: dart.getMethods(io.HttpHeaders.__proto__),
    _get: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    add: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Object)]),
    clear: dart.fnType(dart.void, []),
    forEach: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))]))]),
    noFolding: dart.fnType(dart.void, [dart.legacy(core.String)]),
    remove: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Object)]),
    removeAll: dart.fnType(dart.void, [dart.legacy(core.String)]),
    set: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Object)]),
    value: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(io.HttpHeaders, L0);
  io.HttpClientResponse = class HttpClientResponse extends core.Object {};
  (io.HttpClientResponse.new = function() {
    ;
  }).prototype = io.HttpClientResponse.prototype;
  dart.addTypeTests(io.HttpClientResponse);
  dart.addTypeCaches(io.HttpClientResponse);
  dart.setLibraryUri(io.HttpClientResponse, L0);
  io.HttpConnectionInfo = class HttpConnectionInfo extends core.Object {};
  (io.HttpConnectionInfo.new = function() {
    ;
  }).prototype = io.HttpConnectionInfo.prototype;
  dart.addTypeTests(io.HttpConnectionInfo);
  dart.addTypeCaches(io.HttpConnectionInfo);
  dart.setLibraryUri(io.HttpConnectionInfo, L0);
  io.Socket = class Socket extends core.Object {};
  (io.Socket.new = function() {
    ;
  }).prototype = io.Socket.prototype;
  dart.addTypeTests(io.Socket);
  dart.addTypeCaches(io.Socket);
  dart.setLibraryUri(io.Socket, L0);
  io.Cookie = class Cookie extends core.Object {};
  (io.Cookie.new = function() {
    ;
  }).prototype = io.Cookie.prototype;
  dart.addTypeTests(io.Cookie);
  dart.addTypeCaches(io.Cookie);
  dart.setLibraryUri(io.Cookie, L0);
  io.RedirectionInfo = class RedirectionInfo extends core.Object {};
  (io.RedirectionInfo.new = function() {
    ;
  }).prototype = io.RedirectionInfo.prototype;
  dart.addTypeTests(io.RedirectionInfo);
  dart.addTypeCaches(io.RedirectionInfo);
  dart.setLibraryUri(io.RedirectionInfo, L0);
  io.RedirectInfo = class RedirectInfo extends core.Object {};
  (io.RedirectInfo.new = function() {
    ;
  }).prototype = io.RedirectInfo.prototype;
  dart.addTypeTests(io.RedirectInfo);
  dart.addTypeCaches(io.RedirectInfo);
  dart.setLibraryUri(io.RedirectInfo, L0);
  io.X509Certificate = class X509Certificate extends core.Object {};
  (io.X509Certificate.new = function() {
    ;
  }).prototype = io.X509Certificate.prototype;
  dart.addTypeTests(io.X509Certificate);
  dart.addTypeCaches(io.X509Certificate);
  dart.setLibraryUri(io.X509Certificate, L0);
  io.SecurityContext = class SecurityContext extends core.Object {};
  (io.SecurityContext.new = function() {
    ;
  }).prototype = io.SecurityContext.prototype;
  dart.addTypeTests(io.SecurityContext);
  dart.addTypeCaches(io.SecurityContext);
  dart.setLibraryUri(io.SecurityContext, L0);
  io.exit = function exit(exitCode) {
    dart.throw(new io._ProgramExitedError.new());
  };
  dart.trackLibraries("packages/flutter_web/io", {
    "package:flutter_web/io.dart": io
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["io.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAkBuC;IAAgB;;;;EA8CvD;;;;;MAnDe,4BAAgB;YAAG;;MAed,mBAAO;YAAI,AAAiB,kCAAG;;MAM/B,mBAAO;YAAI,AAAiB,kCAAG;;MAM/B,qBAAS;YAAI,AAAiB,kCAAG;;MAMjC,qBAAS;YAAI,AAAiB,kCAAG;;MAMjC,iBAAK;YAAI,AAAiB,kCAAG;;MAM7B,qBAAS;YAAI,AAAiB,kCAAG;;MAElB,uBAAW;;;;;;AAYvB;IAAgB;;;;;EACvC;;;;;;;;;;;qBAK8C;AAC1C,YAAO;IACT;;;;EACF;;;;;;;;;MALuB,uBAAM;;;;;;;;;;;IAQtB;;;;;;IACI;;;;;;IACA;;;;;;IACL;;;;;;IACG;;;;;;mBAEC,KAAY,OAA6B;IAAc;wBAEpD,MAAU,MAAa,OAA6B;IAAc;qBAEb;IAAI;0BAG5D;IAAI;+BAEmD;IAAW;;UACzD;IAAiB;WACM,MAAU,MAAa;AAC7D,YAAO;IACT;cAEwC;AACtC,YAAO;IACT;kBAEuC;IAAI;QACN,MAAU,MAAa;AAC1D,YAAO;IACT;WAEqC;AACnC,YAAO;IACT;SAEsC,MAAU,MAAa;AAC3D,YAAO;IACT;YAEsC;AACpC,YAAO;IACT;SAGW,QAAe,MAAU,MAAa;AAC/C,YAAO;IACT;YAEyC,QAAY;AACnD,YAAO;IACT;UAEuC,MAAU,MAAa;AAC5D,YAAO;IACT;aAEuC;AACrC,YAAO;IACT;SAEsC,MAAU,MAAa;AAC3D,YAAO;IACT;YAEsC;AACpC,YAAO;IACT;QAEqC,MAAU,MAAa;AAC1D,YAAO;IACT;WAEqC;AACnC,YAAO;IACT;;;IAzEK;IACI;IACA;IACL;IACG;;EAsET;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAE6B;;;;;;IAGlB;;;;;;;;;;EAgBX;;;;;;;;;SAGkC;AAAS,YAAQ;IAAE;QACnC,MAAa;IAAQ;;IACvB;YAC+C;IAAI;cAC3C;IAAO;WACV,MAAa;IAAQ;cAClB;IAAO;QACb,MAAa;IAAQ;UACjB;AAAS;IAAI;;;;EACnC;;;;;;;;;;;;;;;;;;;EAkBA;;;;;;;EAE0B;;;;;;;EAEZ;;;;;;;EAEA;;;;;;;EAES;;;;;;;EAEH;;;;;;;EAEG;;;;;;;EAEA;;;;0BA7JT;AACe,IAA3B,WAAM;EACR","file":"io.unsound.ddc.js"}');
  // Exports:
  return {
    io: io
  };
}));

//# sourceMappingURL=io.unsound.ddc.js.map
