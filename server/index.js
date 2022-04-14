var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
__export(exports, {
  handler: () => handler
});
init_react();
var import_architect = __toModule(require("@remix-run/architect"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_create_instance = __toModule(require("@emotion/server/create-instance"));
var import_remix = __toModule(require_remix());

// app/theme.material.tsx
init_react();
var import_styles = __toModule(require("@mui/material/styles"));
var import_react = __toModule(require("@emotion/react"));
var import_cache = __toModule(require("@emotion/cache"));
var CacheKey = "nt-css";
var cache = (0, import_cache.default)({ key: CacheKey });
var Theme = (0, import_styles.createTheme)({
  palette: {
    background: {
      default: "#fbfbfb"
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
var Provider = (props) => /* @__PURE__ */ React.createElement(import_react.CacheProvider, {
  value: cache
}, /* @__PURE__ */ React.createElement(import_styles.ThemeProvider, __spreadValues({
  theme: Theme
}, props)));

// app/entry.server.tsx
function renderPage(html, css) {
  const page = html.replace("__cfg:STYLES__", css);
  return `<!DOCTYPE html>${page}`;
}
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const styleServer = (0, import_create_instance.default)(cache);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  const styleChunks = styleServer.extractCriticalToChunks(markup);
  const styles = styleServer.constructStyleTagsFromChunks(styleChunks);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(renderPage(markup, styles), {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_material = __toModule(require("@mui/material"));
var meta = () => {
  return { title: "NextThought" };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Provider, null, /* @__PURE__ */ React.createElement(import_material.CssBaseline, null), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__cfg:STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/auth/$service.callback.tsx
var service_callback_exports = {};
__export(service_callback_exports, {
  loader: () => loader
});
init_react();

// app/api/auth.server.ts
init_react();
var import_remix4 = __toModule(require_remix());
var import_remix_auth = __toModule(require("remix-auth"));
var import_remix_auth_google = __toModule(require("remix-auth-google"));

// app/api/auth-strategies/Wrike.server.ts
init_react();
var import_remix_auth_oauth2 = __toModule(require("remix-auth-oauth2"));
var WrikeStrategy = class extends import_remix_auth_oauth2.OAuth2Strategy {
  constructor(options, verify) {
    super({
      authorizationURL: "https://login.wrike.com/oauth2/authorize/v4",
      tokenURL: "https://login.wrike.com/oauth2/token",
      clientID: options.clientID,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackURL
    }, verify);
    this.userInfoURL = "https://www.wrike.com/api/v4/contacts?me=true";
    this.scope = options.scope;
  }
  authorizationParams() {
    const params = new URLSearchParams();
    if (this.scope) {
      params.set("scope", this.scope);
    }
    return params;
  }
  async userProfile(accessToken) {
    const response = await fetch(this.userInfoURL, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const payload = await response.json();
    const data = payload.data[0];
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      _json: payload,
      provider: "wrike"
    };
  }
};

// app/api/models/User.server.ts
init_react();
var import_zod3 = __toModule(require("zod"));
var import_uuid = __toModule(require("uuid"));

// app/api/models/Base.server.ts
init_react();
var import_zod = __toModule(require("zod"));

// app/api/database/Table.server.ts
init_react();
var import_functions = __toModule(require("@architect/functions"));
var Table = class {
  constructor(tableName, parse2) {
    this.table = null;
    if (!tableName) {
      throw new Error("Table must be given a table name.");
    }
    this.tableName = tableName;
    this.parse = parse2;
  }
  get name() {
    return this.tableName;
  }
  async setupTable() {
    if (!this.table) {
      const tables = await import_functions.default.tables();
      this.table = tables[this.tableName];
    }
    return this.table;
  }
  async get(key) {
    const table = await this.setupTable();
    const resp = await table.get(key);
    return resp ? this.parse(resp) : null;
  }
  async put(data) {
    const table = await this.setupTable();
    const resp = await table.put(data);
    return resp ? this.parse(resp) : null;
  }
  async update(query) {
    const table = await this.setupTable();
    await table.update(query);
  }
};

// app/api/models/Base.server.ts
var BaseModel = class {
  static getTable() {
    return new Table(this.TableName, (...args) => this.create(...args));
  }
  static create(raw) {
    return new this(raw);
  }
  constructor(raw) {
    this.data = this.constructor.Schema.parse(raw);
  }
};
BaseModel.TableName = null;
BaseModel.Schema = import_zod.default.object({});

// app/api/models/Credential.server.ts
init_react();
var import_zod2 = __toModule(require("zod"));
var Service;
(function(Service2) {
  Service2["google"] = "google";
  Service2["wrike"] = "wrike";
})(Service || (Service = {}));
var Credential = class extends BaseModel {
  static async addOrUpdate(userId, service, tokens) {
    const table = await this.getTable();
    const key = { userId, service };
    console.log("adding credential: ", key);
    const existing = await table.get(key);
    if (existing) {
      await table.update({
        Key: key,
        UpdateExpression: "SET accessToken = :accessToken",
        ExpressionAttributeValues: {
          ":accessToken": tokens.accessToken
        }
      });
    } else {
      await table.put(__spreadValues({
        userId,
        service
      }, tokens));
    }
  }
  static async getCredential(userId, service) {
    const table = await this.getTable();
    const existing = await table.get({ userId, service });
    return existing;
  }
  get userId() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.userId) ?? "";
  }
  get service() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.service) ?? "";
  }
  get accessToken() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.accessToken) ?? "";
  }
};
Credential.TableName = "Credentials";
Credential.Schema = BaseModel.Schema.extend({
  userId: import_zod2.default.string(),
  service: import_zod2.default.enum(["google", "wrike"]),
  accessToken: import_zod2.default.string()
});

// app/api/models/User.server.ts
var Existing = new Map();
var setCached = (user) => (Existing.set(user.userId, user), user.userId);
var OauthId = class extends BaseModel {
  static async findOrCreate(profileId, service) {
    const table = this.getTable();
    const existing = await table.get({ profileId, service });
    if (existing) {
      return existing;
    }
    return table.put({ profileId, service, userId: (0, import_uuid.v4)() });
  }
  get profileId() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.profileId) ?? "";
  }
  get service() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.service) ?? "";
  }
  get userId() {
    var _a;
    return ((_a = this.data) == null ? void 0 : _a.userId) ?? "";
  }
};
OauthId.TableName = "OauthIds";
OauthId.Schema = BaseModel.Schema.extend({
  profileId: import_zod3.default.string(),
  service: import_zod3.default.nativeEnum(Service),
  userId: import_zod3.default.string()
});
var User = class {
  static async getForOauth(profileId, service) {
    const oauthId = await OauthId.findOrCreate(profileId, service);
    if (!oauthId) {
      return null;
    }
    return new User(oauthId.userId);
  }
  static async getForId(userId) {
    return new User(userId);
  }
  constructor(userId) {
    this.userId = userId;
    this.credentials = new Map();
  }
  setCredentials(service, tokens) {
    return Credential.addOrUpdate(this.userId, service, tokens);
  }
  async getCredentials(service) {
    if (!this.credentials.has(service)) {
      const cred = await Credential.getCredential(this.userId, service);
      if (cred) {
        this.credentials.set(service, cred);
      }
    }
    return this.credentials.get(service);
  }
  async hasCredentials(service) {
    const cred = await this.getCredentials(service);
    return Boolean(cred);
  }
};

// app/api/session.server.ts
init_react();
var import_remix3 = __toModule(require_remix());
var sessionStorage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "nti.session",
    sameSite: "lax",
    path: "/",
    secrets: ["N3xtTh0ught!!C"]
  }
});

// app/api/auth.server.ts
var auth = new import_remix_auth.Authenticator(sessionStorage);
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  auth.use(new import_remix_auth_google.GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3333/auth/google/callback",
    scope: "https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/spreadsheets.readonly openid profile email"
  }, async (profile) => profile), Service.google);
}
if (process.env.WRIKE_CLIENT_ID && process.env.WRIKE_CLIENT_SECRET) {
  auth.use(new WrikeStrategy({
    clientID: process.env.WRIKE_CLIENT_ID,
    clientSecret: process.env.WRIKE_CLIENT_SECRET,
    callbackURL: "http://localhost:3333/auth/wrike/callback",
    scope: "Default,wsReadWrite"
  }, async (profile) => profile), Service.wrike);
}
var getSessionUser = async (request) => {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) {
    return null;
  }
  return User.getForId(userId);
};
var authenticateUser = async (service, request, redirects) => {
  const { accessToken, refreshToken, profile } = await auth.authenticate(service, request);
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  console.log(profile);
  try {
    if (!profile.id) {
      console.log("NO ID?!?!: ", profile);
      throw "what";
    }
    let currentUser = await getSessionUser(request);
    if (!currentUser) {
      console.log("Setting Current User: ", profile.id, service);
      currentUser = await User.getForOauth(profile.id, service);
      if (!currentUser) {
        throw new Error("Unable to get user");
      }
      session.set("userId", setCached(currentUser));
    }
    await currentUser.setCredentials(service, {
      accessToken,
      refreshToken
    });
  } catch (e) {
    throw (0, import_remix4.redirect)(redirects.failure);
  }
  throw (0, import_remix4.redirect)(redirects.success, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/auth/$service.callback.tsx
var loader = async ({ request, params }) => {
  if (!params.service || !Object.keys(Service).includes(params.service)) {
    throw new Error("Unsupported Service");
  }
  console.log("Service Callback: ", params.service);
  await authenticateUser(params.service, request, {
    success: "/",
    failure: "/login"
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/asset-inventory.tsx
var asset_inventory_exports = {};
__export(asset_inventory_exports, {
  action: () => action,
  default: () => AssetInventory,
  links: () => links,
  load: () => load
});
init_react();
var import_path = __toModule(require("path"));
var import_react3 = __toModule(require("react"));
var import_Button = __toModule(require("@mui/material/Button"));
var import_CircularProgress = __toModule(require("@mui/material/CircularProgress"));
var import_Stack = __toModule(require("@mui/material/Stack"));
var import_Typography2 = __toModule(require("@mui/material/Typography"));
var import_remix5 = __toModule(require_remix());
var HTMLParser = __toModule(require("node-html-parser"));

// app/components/Page.tsx
init_react();
var import_Container = __toModule(require("@mui/material/Container"));
var import_Paper = __toModule(require("@mui/material/Paper"));
var import_Typography = __toModule(require("@mui/material/Typography"));
function Page({ title, children }) {
  return /* @__PURE__ */ React.createElement(import_Container.default, {
    maxWidth: "md",
    sx: { mt: 10 }
  }, /* @__PURE__ */ React.createElement(import_Paper.default, {
    elevation: 3,
    sx: { py: 3 }
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    align: "center",
    variant: "h5",
    component: "h1",
    mb: 5
  }, title), children));
}

// app/components/FileInput.tsx
init_react();
var import_react_filepond = __toModule(require("react-filepond"));
var import_styled = __toModule(require("@emotion/styled"));
var FileInput_default = (0, import_styled.default)(import_react_filepond.FilePond)`
	width: 300px;

	& .filepond--credits {
		display: none;
	}

	& .filepond--drop-label {
		color: #4c4e53;
	}

	& .filepond--label-action {
		text-decoration-color: #babdc0;
	}

	& .filepond--panel-root {
		border-radius: 2em;
		background-color: #edf0f4;
		height: 1em;
	}

	& .filepond--item-panel {
		background-color: #595e68;
	}

	& .filepond--drip-blob {
		background-color: #7f8a9a;
	}
`;

// app/components/hooks/use-object-url.tsx
init_react();
var import_react2 = __toModule(require("react"));
function useBlob(content, type) {
  return (0, import_react2.useMemo)(() => {
    if (!content) {
      return null;
    }
    return new Blob([content], { type });
  }, [content, type]);
}
function useObjectURL(blob) {
  const [objectURL, setObjectURL] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    if (!blob) {
      return;
    }
    const url = URL.createObjectURL(blob);
    setObjectURL(url);
    return () => {
      URL.revokeObjectURL(url);
      setObjectURL(null);
    };
  }, [blob]);
  return objectURL;
}

// app/api/utils/CSV.server.ts
init_react();
var CSVFormat = __toModule(require("@fast-csv/format"));
function format(rows, options) {
  return CSVFormat.writeToString(rows, options);
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/asset-inventory.tsx
var VendorOrder = ["Getty Images", "Shutterstock", "Unknown"];
var links = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/filepond@^4/dist/filepond.css"
  }
];
var load = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix5.redirect)("/login");
  }
};
var action = async ({ request }) => {
  const UploadHandler = (0, import_remix5.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7
  });
  const formData = await (0, import_remix5.unstable_parseMultipartFormData)(request, UploadHandler);
  const file = formData.get("report");
  const report = await parseReport(file);
  const projectName = report["Project name"];
  const inventory = (await getAssetInventory(report)).sort((a, b) => VendorOrder.indexOf(a.vendor) - VendorOrder.indexOf(b.vendor));
  const csv3 = await format(inventory, {
    headers: [
      "headline",
      "type",
      "vendor",
      "filename",
      "code",
      "collection",
      "creditline",
      "url"
    ]
  });
  return (0, import_remix5.json)({
    csv: csv3,
    projectName: projectName[0].trim().replace(/\..*$/, "")
  });
};
function AssetInventory() {
  const transition = (0, import_remix5.useTransition)();
  const action5 = (0, import_remix5.useActionData)();
  const [files, setFiles] = (0, import_react3.useState)(void 0);
  const showSaving = transition.state === "loading" || transition.state === "submitting";
  const showDownload = !showSaving && action5;
  const showForm = !showSaving && !showDownload;
  const csv3 = useBlob(action5 == null ? void 0 : action5.csv, "text/csv;charset=utf-8;");
  const downloadURL = useObjectURL(csv3);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Asset Inventory"
  }, /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, !showDownload || !downloadURL ? null : /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: downloadURL,
    download: `${action5 == null ? void 0 : action5.projectName}-asset-inventory.csv`
  }, /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained"
  }, "Download"))), !showSaving ? null : /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_CircularProgress.default, null), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "subtitle2"
  }, "Generating...")), !showForm ? null : /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "subtitle1"
  }, "After Effects Dependency Report"), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "subtitle2"
  }, "File > Dependencies > Collect Files"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(FileInput_default, {
    name: "report",
    storeAsFile: true,
    files,
    onupdatefiles: (items) => setFiles(items.map((f) => f.file))
  }), /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained",
    type: "submit"
  }, "Compile"))));
}
var getHTML = async (url) => {
  const resp = await fetch(url);
  const text = await resp.text();
  return HTMLParser.parse(text, {
    blockTextElements: { style: false }
  });
};
var getImageObjectLinkData = async (url) => {
  const html = await getHTML(url);
  const linkData = html.querySelectorAll("script[type='application/ld+json']");
  for (let data of linkData) {
    const json4 = JSON.parse(data.text);
    if (json4["@type"] !== "ImageObject") {
      continue;
    }
    return json4;
  }
  throw new Error(`Unable to load ImageObject: ${url}`);
};
var headlineFromImageObect = (obj) => obj.description;
var creditlineFromImageObject = (obj) => obj.author.name;
var TypesToExtension = {
  video: [".mp4", ".mov", ".mpg"],
  photo: [".jpeg", ".jpg", ".png", ".tif", ".webm"],
  audio: [".mp3", ".wav"]
};
var getTypeFromExtension = (ext) => {
  for (let [type, extensions] of Object.entries(TypesToExtension)) {
    if (extensions.includes(ext)) {
      return type;
    }
  }
  return "unknown";
};
var GettyRegex = /^(gettyimages|GettyImages)\-(\d+)/;
var ShutterRegex = /^(shutterstock)_(\d+)/;
var Capitalize = (s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
var TitleCase = (s) => s.split(" ").map(Capitalize).join(" ");
var InfoGetters = [
  {
    handles: (filename, ext) => GettyRegex.test(filename),
    info: async (filename, ext) => {
      const match = filename.match(GettyRegex);
      const id = match == null ? void 0 : match[2];
      if (!id) {
        throw new Error(`Unable to get GettyImage id: ${filename}`);
      }
      const url = `http://www.gettyimages.com/detail/${id}`;
      const html = await getHTML(url);
      const assetDetailsScript = html.querySelector('script[data-component="assetdetail"]');
      const assetDetails = assetDetailsScript ? JSON.parse(assetDetailsScript.text) : null;
      if (!assetDetails) {
        throw new Error(`Unable to get Getty Images asset details: ${url}`);
      }
      return {
        vendor: "Getty Images",
        code: id,
        url,
        headline: assetDetails.asset.title,
        creditline: Getty[assetDetails.asset.artistTitle] ? assetDetails.asset.photographer : `${assetDetails.asset.photographer} / ${TitleCase(assetDetails.asset.artistTitle)}`,
        collection: assetDetails.asset.collectionDisplayName
      };
    }
  },
  {
    handles: (filename, ext) => ShutterRegex.test(filename),
    info: async (filename, ext) => {
      const match = filename.match(ShutterRegex);
      const id = match == null ? void 0 : match[2];
      if (!id) {
        throw new Error("Unable to get ShutterStock id: ${filename}");
      }
      const url = `https://www.shutterstock.com/image-photo/${id}`;
      const imageObject = await getImageObjectLinkData(url);
      return {
        vendor: "Shutterstock",
        code: id,
        url,
        headline: headlineFromImageObect(imageObject),
        creditline: creditlineFromImageObject(imageObject)
      };
    }
  },
  {
    handles: (filename, ext) => filename.indexOf("Artlist") !== -1,
    info: async (filename, ext) => {
      return {
        vendor: "Artlist.io"
      };
    }
  }
];
async function getAssetInventory(report) {
  const sources = report["Collected source files"];
  const inventories = sources.reduce((acc, source) => {
    const extension = import_path.default.extname(source);
    const filename = import_path.default.basename(source, extension);
    const getter = InfoGetters.find((g) => g.handles(filename, extension));
    if (!getter) {
      return [
        ...acc,
        Promise.resolve({
          type: getTypeFromExtension(extension),
          vendor: "Unknown",
          filename: import_path.default.basename(source)
        })
      ];
    }
    return [
      ...acc,
      getter.info(filename, extension).then((info) => __spreadValues({
        type: getTypeFromExtension(extension),
        filename: import_path.default.basename(source)
      }, info))
    ];
  }, []);
  return Promise.all(inventories);
}
async function parseReport(file) {
  const text = await file.text();
  const lines = text.split("\r");
  const groups = {};
  let currentSection = null;
  for (let line of lines) {
    const parts = line.split("	");
    const depth = parts.length - 1;
    const lineText = parts[depth].trim();
    if (depth === 0) {
      const [name, value] = lineText.split(":");
      groups[name] = groups[name] ?? [];
      if (value == null ? void 0 : value.trim()) {
        groups[name].push(value);
      }
      currentSection = name;
    } else {
      if (!currentSection) {
        throw new Error("Invalid Report");
      }
      groups[currentSection].push(lineText);
    }
  }
  return groups;
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/clients.tsx
var clients_exports = {};
__export(clients_exports, {
  loader: () => loader2
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/api/wrike/Client.server.ts
init_react();

// app/api/wrike/CustomField.server.ts
init_react();
function createCustomFieldClass(client) {
  return class WrikeCustomFieldClient {
    static async fromIds(ids) {
      const Cls = this;
      const resp = await client.get(`customfields/${ids.join(",")}`);
      return resp.data.map((raw) => new Cls(raw));
    }
    constructor(raw) {
      this.raw = raw;
    }
    get id() {
      var _a;
      return (_a = this.raw) == null ? void 0 : _a.id;
    }
    get title() {
      var _a;
      return (_a = this.raw) == null ? void 0 : _a.title;
    }
    get type() {
      var _a;
      return (_a = this.raw) == null ? void 0 : _a.type;
    }
  };
}

// app/api/wrike/Folder.server.ts
init_react();
function createFolderClass(client) {
  return class WrikeFolderClient {
    constructor(raw) {
      this.raw = raw;
      this.configFolderCache = new Map();
    }
    static async fromSpace(spaceId, params) {
      const resp = await client.get(`/spaces/${spaceId}/folders`, params);
      return resp.data.map((r) => new WrikeFolderClient(r));
    }
    static async fromIDs(ids) {
      const resp = await client.get(`folders/${ids.join(",")}`);
      return resp.data.map((r) => new WrikeFolderClient(r));
    }
    static async fromPermaLink(link) {
      const tree = await client.get("folders", {
        permalink: link
      });
      const folder = tree.data[0];
      return new WrikeFolderClient(folder);
    }
    static async create(title, description, project) {
      return new WrikeFolderClient({ title, description, project });
    }
    get id() {
      return this.raw.id;
    }
    get title() {
      return this.raw.title;
    }
    get description() {
      return this.raw.description;
    }
    get project() {
      return this.raw.project;
    }
    get childIds() {
      return this.raw.childIds;
    }
    get parentIds() {
      return this.raw.parentIds;
    }
    async save(config) {
      const resp = await client.post(`folder/${config.parentFolderId}/folders`, {
        title: this.title,
        description: this.description ?? "",
        project: this.project ?? false
      });
      this.raw = resp;
      return this;
    }
    async getParentFolder() {
      const load2 = async () => {
        if (!this.parentIds || this.parentIds.length === 0) {
          throw new Error("Unable to get parent");
        }
        const resp = await client.Folder.fromIDs([this.parentIds[0]]);
        return resp[0];
      };
      this.parentFolder = this.parentFolder ?? load2();
      return this.parentFolder;
    }
    async getChildFolders() {
      const load2 = () => {
        if (!this.childIds) {
          throw new Error("Unable to get sub folders");
        }
        return client.Folder.fromIDs(this.childIds);
      };
      this.childFolders = this.childFolders ?? load2();
      return this.childFolders;
    }
    async findConfigFolder(name) {
      const find = async () => {
        const children = await this.getChildFolders();
        for (let child of children) {
          if (child.title === name) {
            return child;
          }
        }
        const parent = await this.getParentFolder();
        return parent.findConfigFolder(name);
      };
      if (!this.configFolderCache.has(name)) {
        this.configFolderCache.set(name, find());
      }
      const folder = await this.configFolderCache.get(name);
      return folder ?? null;
    }
  };
}

// app/api/wrike/Project.server.ts
init_react();
var csv = __toModule(require("@fast-csv/parse"));
function createProjectClass(client) {
  return class WrikeProjectClient {
    constructor(raw, parent) {
      this.raw = raw;
      this.parent = parent;
      this.videos = [];
    }
    static create(title, parent) {
      return new WrikeProjectClient({ title }, parent);
    }
    get id() {
      var _a;
      return (_a = this.raw) == null ? void 0 : _a.id;
    }
    get title() {
      var _a;
      return (_a = this.raw) == null ? void 0 : _a.title;
    }
    async importCSV(file, options) {
      const text = await file.text();
      return new Promise((fulfill, reject) => {
        csv.parseString(text, options).on("error", (err) => reject(err)).on("data", (row) => this.videos.push(row)).on("end", () => fulfill(this));
      });
    }
    save() {
      return this.id ? this.update() : this.create();
    }
    update() {
      throw new Error("Unable to update Projects (not implemented)");
    }
    async create() {
      var _a, _b;
      if (!client.userId) {
        throw new Error("No user id");
      }
      if (!((_a = this.parent) == null ? void 0 : _a.id)) {
        throw new Error("No parent id");
      }
      const templateFolder = await ((_b = this.parent) == null ? void 0 : _b.findConfigFolder("templates"));
      if (!templateFolder) {
        throw new Error("Unable to find template folder");
      }
      const templateCache = new Map();
      const findTemplate = (name) => {
        if (!templateCache.has(name)) {
          templateCache.set(name, client.TaskTemplate.fromTitle(name, templateFolder));
        }
        return templateCache.get(name);
      };
      const project = await client.Folder.create(this.title, "", {
        ownerId: client.userId
      });
      await project.save({ parentFolderId: this.parent.id });
      for (let video of this.videos.reverse()) {
        const _c = video, { template: templateName } = _c, properties = __objRest(_c, ["template"]);
        const template = await findTemplate(templateName);
        const task = await (template == null ? void 0 : template.clone(properties));
        await (task == null ? void 0 : task.save({ folder: project }));
      }
    }
  };
}

// app/api/wrike/Space.server.ts
init_react();
function createSpaceClass(client) {
  return class WrikeSpaceClient {
    constructor(raw) {
      this.raw = raw;
    }
    static async getAll() {
      const resp = await client.get("/spaces");
      return resp.data.map((r) => new WrikeSpaceClient(r));
    }
    get id() {
      return this.raw.id;
    }
    get title() {
      return this.raw.title;
    }
  };
}

// app/api/wrike/Task.server.ts
init_react();
var SaveBlackList = [
  "accountId",
  "createdDate",
  "updatedDate",
  "permalink",
  "scope",
  "priority",
  "dates"
];
function createTaskClass(client) {
  return class WrikeTaskClient {
    constructor(task) {
      this.subTasks = [];
      this.raw = task;
    }
    static async fromPermaLink(permalink) {
      const raw = await rawFromPermaLink(permalink, client);
      return this.fromRaw(raw);
    }
    static async fromTitle(title, folder) {
      const raw = await rawFromTitle(title, folder, client);
      return this.fromRaw(raw);
    }
    static fromRaw(task) {
      return new WrikeTaskClient(task);
    }
    get id() {
      return this.raw.id;
    }
    get title() {
      return this.raw.title;
    }
    get parents() {
      return this.raw.parentIds;
    }
    addSubTasks(tasks) {
      tasks.forEach((t) => t.setSuperTask(this));
      this.subTasks = [...this.subTasks, ...tasks];
    }
    setSuperTask(task) {
      this.superTask = task;
    }
    getSaveData() {
      var _b;
      const _a = this.raw, { title, parents } = _a, extraData = __objRest(_a, ["title", "parents"]);
      const data = __spreadValues({}, extraData);
      if (title) {
        data.title = title;
      }
      if (parents) {
        data.parents = parents;
      }
      if ((_b = this.superTask) == null ? void 0 : _b.id) {
        data.superTasks = [this.superTask.id];
      }
      for (let prop of SaveBlackList) {
        delete data[prop];
      }
      return data;
    }
    async save(config) {
      return this.id ? this.update(config) : this.create(config);
    }
    async create(config) {
      const { folder } = config;
      if (!(folder == null ? void 0 : folder.id)) {
        throw new Error("Provide a location to save a new task to.");
      }
      const payload = __spreadValues({}, this.getSaveData());
      if (folder == null ? void 0 : folder.id) {
        payload.parents = [folder.id];
      }
      const resp = await client.post(`folders/${folder.id}/tasks`, fixPayload(payload));
      const task = resp.data[0];
      this.raw = task;
      console.log("Saving Sub Tasks: ", this.subTasks.length);
      for (let subTask of this.subTasks) {
        await subTask.save(config);
      }
    }
    update(config) {
      throw new Error("Cannot update tasks");
    }
  };
}
var PayloadKeyMap = {
  sharedIds: "shareds",
  responsibleIds: "responsibles",
  customStatusId: "customStatus"
};
function fixPayload(payload) {
  const newPayload = __spreadValues({}, payload);
  for (let [key, fix] of Object.entries(PayloadKeyMap)) {
    if (newPayload[key]) {
      newPayload[fix] = newPayload[key];
      delete newPayload[key];
    }
  }
  return newPayload;
}
var Fields = [
  "parentIds",
  "description",
  "customFields",
  "sharedIds",
  "responsibleIds",
  "subTaskIds"
];
async function rawFromPermaLink(permalink, client) {
  const resp = await client.get(`tasks`, {
    permalink,
    fields: Fields
  });
  return resp.data[0];
}
async function rawFromIds(ids, client) {
  const resp = await client.get(`tasks/${ids.join(",")}`);
  return resp.data;
}
async function rawFromTitle(title, folder, client) {
  const resp = await client.get(`folders/${folder.id}/tasks`, {
    title,
    fields: Fields
  });
  if (resp.data.length > 1) {
    throw new Error("Found multiple tasks");
  }
  return resp.data[0];
}

// app/api/wrike/TaskTemplate.server.ts
init_react();
var import_mustache = __toModule(require("mustache"));
function fillInTemplate(template, data) {
  if (!template) {
    return "";
  }
  return import_mustache.default.render(template, data);
}
function createTaskTemplateClass(client) {
  return class TaskTemplateClient extends client.Task {
    constructor() {
      super(...arguments);
      this.TemplateFields = ["title", "description"];
      this.LiteralFields = [
        "sharedIds",
        "responsibleIds",
        "customStatusId"
      ];
    }
    static async fromIds(ids) {
      const Cls = this;
      const raw = await rawFromIds(ids, client);
      return raw.map((r) => new Cls(r));
    }
    static async fromPermaLink(permalink) {
      const resp = await client.get("/tasks", {
        permalink
      });
      return this.fromRaw(resp.data[0]);
    }
    static async fromTitle(title, folder) {
      const raw = await rawFromTitle(title, folder, client);
      return this.fromRaw(raw);
    }
    static fromRaw(task) {
      return new TaskTemplateClient(task);
    }
    async clone(data, superTask) {
      var _a;
      const templateRaw = this.raw ?? {};
      const taskRaw = {};
      const set = (key, val) => {
        if (val) {
          taskRaw[key] = val;
        }
      };
      this.TemplateFields.forEach((key) => set(key, data[key] ?? fillInTemplate(templateRaw[key], data)));
      this.LiteralFields.forEach((key) => {
        console.log("Setting Literal Field: ", key, data[key] ?? templateRaw[key]);
        set(key, data[key] ?? templateRaw[key]);
      });
      if (data.titlePrefix) {
        taskRaw.title = `${data.titlePrefix} ${taskRaw.title}`;
      }
      taskRaw.title = taskRaw.title.replace("TEMPLATE", "").replace(/\ \ /, " ");
      const customFields = await this.getCustomFields() ?? {};
      for (let [name, field] of Object.entries(customFields)) {
        taskRaw.customFields = [
          ...taskRaw.customFields ?? [],
          {
            id: field.definition.id,
            value: data[name] ?? field.value
          }
        ];
      }
      const task = client.Task.fromRaw(taskRaw);
      if (superTask) {
        task.setSuperTask(superTask);
      }
      const subTaskTemplates = !((_a = templateRaw.subTaskIds) == null ? void 0 : _a.length) ? [] : await TaskTemplateClient.fromIds(templateRaw.subTaskIds);
      const cloneData = __spreadProps(__spreadValues({}, data), {
        titlePrefix: taskRaw.title
      });
      this.TemplateFields.forEach((k) => delete cloneData[k]);
      this.LiteralFields.forEach((k) => delete cloneData[k]);
      const subTasks = await Promise.all(subTaskTemplates.map((s) => s.clone(cloneData, task)));
      task.addSubTasks(subTasks);
      return task;
    }
    async getCustomFields() {
      const loader12 = async () => {
        const { customFields } = this.raw ?? {};
        if (!customFields || customFields.length === 0) {
          return null;
        }
        console.log("Getting Custom Fields: ", customFields);
        const fields = await client.CustomField.fromIds(customFields.map((c) => c.id));
        return fields.reduce((acc, field) => {
          const instance = customFields.find((c) => c.id === field.id);
          if (field.type !== "string" || !instance) {
            return acc;
          }
          return __spreadProps(__spreadValues({}, acc), {
            [field.title]: {
              value: instance.value,
              definition: field
            }
          });
        }, {});
      };
      this.CustomFieldsLoader = this.CustomFieldsLoader ?? loader12();
      return this.CustomFieldsLoader;
    }
  };
}

// app/api/wrike/VideoBatchTask.server.ts
init_react();
var csv2 = __toModule(require("@fast-csv/parse"));
function createVideoBatchTaskClass(client) {
  return class WrikeProjectTaskClient {
    constructor({ task }) {
      this.videos = [];
      this.task = task;
    }
    static async fromPermaLink(link) {
      const task = await client.Task.fromPermaLink(link);
      return new WrikeProjectTaskClient({ task });
    }
    addVideo(video) {
      this.videos.push(video);
    }
    async importCSV(file, options) {
      const text = await file.text();
      return new Promise((fulfill, reject) => {
        csv2.parseString(text, options).on("error", (err) => reject(err)).on("data", (row) => this.addVideo(row)).on("end", () => fulfill(this));
      });
    }
    async save({ templateFolder, locationFolder }) {
      console.log("Saving Video Batch: ", this.videos.length);
      const templateCache = new Map();
      const findTemplate = (name) => {
        if (!templateCache.has(name)) {
          templateCache.set(name, client.TaskTemplate.fromTitle(name, templateFolder));
        }
        return templateCache.get(name);
      };
      const folder = locationFolder;
      if (!folder) {
        throw new Error("No folder");
      }
      for (let video of this.videos.reverse()) {
        const _a = video, { template: templateName } = _a, properties = __objRest(_a, ["template"]);
        const template = await findTemplate(templateName);
        const task = await (template == null ? void 0 : template.clone(properties, this.task));
        await (task == null ? void 0 : task.save({ folder }));
      }
    }
  };
}

// app/api/wrike/Workflow.server.ts
init_react();
function createWorkFlowClass(client) {
  return class WrikeWorkflowClient {
    constructor(raw) {
      this.raw = raw;
    }
    static async fromName(name) {
      const resp = await client.get("workflows");
      const raw = resp.data.find((d) => d.name === name);
      if (!raw) {
        throw new Error("Workflow not found");
      }
      return new WrikeWorkflowClient(raw);
    }
    get id() {
      return this.raw.id;
    }
    get name() {
      return this.raw.name;
    }
    get customStatuses() {
      return this.raw.customStatuses;
    }
  };
}

// app/api/wrike/Client.server.ts
var BaseURL = "https://www.wrike.com/api/v4/";
var encodeValue = (value) => {
  if (Array.isArray(value)) {
    return `[${value.map((i) => `"${encodeValue(i)}"`).join(",")}]`;
  }
  return value.toString();
};
var WrikeClient = class {
  constructor(credentials, userId) {
    this.credentials = credentials;
    this.userId = userId;
    this.CustomField = createCustomFieldClass(this);
    this.Folder = createFolderClass(this);
    this.Project = createProjectClass(this);
    this.Space = createSpaceClass(this);
    this.Task = createTaskClass(this);
    this.TaskTemplate = createTaskTemplateClass(this);
    this.VideoBatch = createVideoBatchTaskClass(this);
    this.Workflow = createWorkFlowClass(this);
  }
  static async forSession(request) {
    const user = await getSessionUser(request);
    const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
    if (!wrikeCred) {
      throw new Response("Forbidden", { status: 403 });
    }
    return new WrikeClient(wrikeCred, user == null ? void 0 : user.userId);
  }
  async fetch(url, method, data) {
    const controller = new AbortController();
    const config = {
      method,
      headers: {
        Authorization: `Bearer ${this.credentials.accessToken}`
      },
      signal: controller.signal
    };
    if (data && config.headers) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (data) {
      const params = new URLSearchParams();
      Object.entries(data).map(([key, value]) => params.set(key, encodeValue(value)));
      config.body = params.toString();
    }
    console.log("WRIKE Request: ", url, method, config.body, data);
    setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(url, config);
    const json4 = await response.json();
    console.log("Got WRIKE Response: ", json4);
    if (json4.error) {
      throw new Error(json4.errorDescription);
    }
    return json4;
  }
  get(path2 = "", params = {}) {
    const url = new URL(`${BaseURL}${path2}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, encodeValue(value)));
    return this.fetch(url.toString(), "GET");
  }
  post(path2 = "", data = {}) {
    return this.fetch(`${BaseURL}${path2}`, "POST", data);
  }
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/clients.tsx
var loader2 = async ({ request }) => {
  const url = new URL(request.url);
  const spaceId = url.searchParams.get("spaceId");
  const Wrike = await WrikeClient.forSession(request);
  if (!spaceId) {
    throw new Response("Must have a spaceId", { status: 422 });
  }
  const folders = await Wrike.Folder.fromSpace(spaceId, { project: false });
  return (0, import_remix6.json)({
    clients: folders.map((f) => ({ id: f.id, title: f.title }))
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2,
  default: () => Project,
  links: () => links2,
  loader: () => loader3
});
init_react();
var import_react6 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
var import_Autocomplete = __toModule(require("@mui/material/Autocomplete"));
var import_Button2 = __toModule(require("@mui/material/Button"));
var import_Stack2 = __toModule(require("@mui/material/Stack"));
var import_TextField = __toModule(require("@mui/material/TextField"));

// app/components/InputBreadCrumb.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_Grid = __toModule(require("@mui/material/Grid"));
var import_styled2 = __toModule(require("@emotion/styled"));
var GridItem = (0, import_styled2.default)(import_Grid.default)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
function InputBreadCrumb({ children }) {
  const cmps = import_react4.default.Children.toArray(children);
  const breadcrumbs = cmps.slice(0, -1);
  const focused = cmps[cmps.length - 1];
  return /* @__PURE__ */ import_react4.default.createElement(import_Grid.default, {
    container: true,
    spacing: 2,
    padding: 2,
    sx: { justifyContent: "center" }
  }, breadcrumbs.map((c, key) => /* @__PURE__ */ import_react4.default.createElement(GridItem, {
    item: true,
    xs: 3,
    key: `breadcrumb-${key}`
  }, c)), focused ? /* @__PURE__ */ import_react4.default.createElement(GridItem, {
    item: true,
    xs: 12
  }, focused) : null);
}

// app/components/OnMount.tsx
init_react();
var import_react5 = __toModule(require("react"));
function OnMount({ onMount, children }) {
  (0, import_react5.useEffect)(() => {
    onMount();
  }, [onMount]);
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, children);
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/create.tsx
var loader3 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix7.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix7.redirect)("/connect");
  }
  return null;
};
var links2 = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/filepond@^4/dist/filepond.css"
  }
];
var action2 = async ({ request }) => {
  const wrike = await WrikeClient.forSession(request);
  const UploadHandler = (0, import_remix7.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix7.unstable_parseMultipartFormData)(request, UploadHandler);
  const file = formData.get("project-file");
  const text = await file.text();
  console.log("Got Form Data: ", text);
  return null;
};
function Project() {
  var _a, _b;
  const spaces = (0, import_remix7.useFetcher)();
  const loadSpaces = useFetcherLoad(spaces, "/projects/spaces");
  const [space, setSpace] = (0, import_react6.useState)(null);
  const clients = (0, import_remix7.useFetcher)();
  const loadClients = useFetcherLoad(clients, `/projects/clients?spaceId=${encodeURIComponent((space == null ? void 0 : space.id) ?? "")}`);
  const [client, setClient] = (0, import_react6.useState)(null);
  const { hasValue: hasProjectName, props: projectNameProps } = useBufferedInput();
  const [files, setFiles] = (0, import_react6.useState)(void 0);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "New Project"
  }, /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement(InputBreadCrumb, null, /* @__PURE__ */ React.createElement(OnMount, {
    onMount: loadSpaces
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: space == null ? void 0 : space.id,
    name: "spaceId"
  }), /* @__PURE__ */ React.createElement(import_Autocomplete.default, {
    sx: {
      width: "100%",
      maxWidth: "300px"
    },
    size: "small",
    value: space,
    onChange: (e, o) => setSpace(o),
    loading: spaces.state === "loading",
    options: ((_a = spaces.data) == null ? void 0 : _a.spaces) ?? [],
    getOptionLabel: (o) => o.title,
    isOptionEqualToValue: (o, v) => o.id === v.id,
    renderInput: (params) => /* @__PURE__ */ React.createElement(import_TextField.default, __spreadProps(__spreadValues({}, params), {
      label: "Space",
      variant: "standard"
    }))
  })), !space ? null : /* @__PURE__ */ React.createElement(OnMount, {
    onMount: loadClients
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: client == null ? void 0 : client.id,
    name: "client"
  }), /* @__PURE__ */ React.createElement(import_Autocomplete.default, {
    sx: { width: "100%", maxWidth: "300px" },
    size: "small",
    value: client,
    onChange: (e, o) => setClient(o),
    loading: clients.state === "loading",
    options: ((_b = clients.data) == null ? void 0 : _b.clients) ?? [],
    getOptionLabel: (o) => o.title,
    isOptionEqualToValue: (o, v) => o.id === v.id,
    renderInput: (params) => /* @__PURE__ */ React.createElement(import_TextField.default, __spreadProps(__spreadValues({}, params), {
      label: "Client",
      variant: "standard"
    }))
  })), !client ? null : /* @__PURE__ */ React.createElement(import_TextField.default, {
    sx: {
      width: "100%",
      maxWidth: "300px"
    },
    label: "Project Name",
    variant: "standard",
    key: "project",
    inputProps: projectNameProps
  }), !hasProjectName ? null : /* @__PURE__ */ React.createElement(import_Stack2.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(FileInput_default, {
    name: "project-file",
    storeAsFile: true,
    files,
    onupdatefiles: (items) => setFiles(items.map((f) => f.file))
  }), /* @__PURE__ */ React.createElement(import_Button2.default, {
    variant: "contained",
    type: "submit",
    disabled: !files || files.length === 0
  }, "Create Project")))));
}
function useFetcherLoad(fetcher, url) {
  return (0, import_react6.useCallback)(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load(url);
    }
  }, [fetcher, url]);
}
function useBufferedInput() {
  const inputRef = (0, import_react6.useRef)();
  const timeoutRef = (0, import_react6.useRef)();
  const [value, setValue] = (0, import_react6.useState)("");
  const [hasValue, setHasValue] = (0, import_react6.useState)(false);
  const onChange = (0, import_react6.useCallback)((e) => {
    var _a;
    setValue(((_a = inputRef.current) == null ? void 0 : _a.value) ?? "");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      var _a2;
      setHasValue(Boolean((_a2 = inputRef.current) == null ? void 0 : _a2.value));
      timeoutRef.current = null;
    }, 500);
  }, []);
  const onKeyPress = (0, import_react6.useCallback)((e) => {
    var _a;
    if (e.key === "Enter") {
      setHasValue(Boolean(((_a = inputRef.current) == null ? void 0 : _a.value) ?? ""));
    }
  }, []);
  return {
    hasValue,
    props: {
      value,
      ref: inputRef,
      onChange,
      onKeyPress
    }
  };
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/spaces.tsx
var spaces_exports = {};
__export(spaces_exports, {
  loader: () => loader4
});
init_react();
var import_remix8 = __toModule(require_remix());
var loader4 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const Wrike = new WrikeClient(wrikeCred);
  const spaces = await Wrike.Space.getAll();
  return (0, import_remix8.json)({
    spaces: spaces.map((s) => ({ id: s.id, title: s.title }))
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/auth/$service.tsx
var service_exports = {};
__export(service_exports, {
  action: () => action3,
  loader: () => loader5
});
init_react();
var import_remix9 = __toModule(require_remix());
var loader5 = () => (0, import_remix9.redirect)("/login");
var action3 = async ({ request, params }) => {
  if (!params.service || !Object.keys(Service).includes(params.service)) {
    throw new Error("Unsupported Service");
  }
  console.log("Service: ", params.service);
  await authenticateUser(params.service, request, {
    success: "",
    failure: ""
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tsg-results.tsx
var tsg_results_exports = {};
__export(tsg_results_exports, {
  default: () => TsgResults,
  loader: () => loader6
});
init_react();
var import_remix10 = __toModule(require_remix());
var loader6 = async ({ request }) => {
  var _a;
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix10.redirect)("/login");
  }
  const { google } = require("googleapis");
  const token = (_a = await user.getCredentials(Service.google)) == null ? void 0 : _a.accessToken;
  const search = new URL(request.url).searchParams;
  const params = {
    url: search.get("url") ?? "",
    sheet: search.get("sheet") != "" ? search.get("sheet") : "Master Review Tracker",
    row: search.get("row") != "" ? search.get("row") : "5",
    column: search.get("column") != "" ? search.get("column") : "I",
    title: ""
  };
  const sheets = google.sheets("v4");
  const spreadsheet = await sheets.spreadsheets.get({
    auth: "AIzaSyBW4hVX-R3FAwOtAOtjSvPqWsBuYDCkX1c",
    spreadsheetId: getIDFromURL(params.url),
    includeGridData: true,
    ranges: [`${params.sheet}!${params.column}${params.row}:${params.column}`]
  });
  const sheetData = collectLinksFromColumn(spreadsheet);
  const links3 = sheetData.links.filter(String);
  params.title = sheetData.title;
  const docs = google.docs("v1");
  let file_text = [];
  for (let i = 0; i < links3.length; i++) {
    const document2 = await docs.documents.get({
      oauth_token: token,
      documentId: links3[i]
    });
    file_text.push(extractTranscriptText(document2));
  }
  return { user: user.userId, sheetData: params, files: file_text };
};
function getIDFromURL(url) {
  return new URL(url).pathname.split("/")[3];
}
function collectLinksFromColumn(response) {
  const title = response.data.properties.title;
  const rows = response.data.sheets[0].data[0].rowData;
  const links3 = new Array(rows.length);
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].values[0].hyperlink;
    if (row) {
      links3.push(getIDFromURL(row));
    }
  }
  return { title, links: links3 };
}
function readParagraphElement(element) {
  var _a;
  const text_run = element.textRun;
  return ((_a = element == null ? void 0 : element.textRun) == null ? void 0 : _a.content) ?? "";
}
function extractTranscriptText(response) {
  const elements = response.data.body.content;
  const columnIndex = 1;
  let text = "";
  const title = readParagraphElement(elements[1].paragraph.elements[0]);
  text += title + "\n";
  for (const value of elements) {
    if ("table" in value) {
      const table = value.table;
      for (const row of table.tableRows) {
        const cell = row.tableCells[columnIndex].content;
        text += extractParagraphText(cell);
      }
    }
  }
  text = text.replace(/^\s*$(?:\r\n?|\n)/gm, "").replace(/$\n/gm, "\n\n");
  return { "title": title, "text": text };
}
function extractParagraphText(element) {
  let text = "";
  for (const value of element) {
    for (const elem of value.paragraph.elements) {
      text += readParagraphElement(elem);
    }
  }
  return text;
}
function TsgResults() {
  const data = (0, import_remix10.useLoaderData)();
  let fileLinks = [];
  for (let i = 0; i < data.files.length - 1; i++) {
    const text = data.files[i].text;
    const title = data.files[i].title;
    fileLinks.push(/* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
      href: "data:text/plain;charset=utf-8," + encodeURIComponent(text),
      download: title
    }, title)));
  }
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Teleprompter Script Generator Results:"
  }, /* @__PURE__ */ React.createElement("ul", {
    style: { margin: "0px 50px" }
  }, /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Tracking Sheet: "), data.sheetData.title), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Sheet: "), data.sheetData.sheet), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Row: "), data.sheetData.row), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Column: "), data.sheetData.column), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Documents created: "), data.files.length), /* @__PURE__ */ React.createElement("hr", null)), /* @__PURE__ */ React.createElement("ul", {
    style: { margin: "0px 50px" }
  }, fileLinks));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/video-batch.tsx
var video_batch_exports = {};
__export(video_batch_exports, {
  action: () => action4,
  default: () => VideoBatch,
  loader: () => loader7
});
init_react();
var import_remix11 = __toModule(require_remix());
var import_remix12 = __toModule(require_remix());
var import_Button3 = __toModule(require("@mui/material/Button"));
var import_Stack3 = __toModule(require("@mui/material/Stack"));
var import_TextField2 = __toModule(require("@mui/material/TextField"));
var import_CircularProgress2 = __toModule(require("@mui/material/CircularProgress"));
var loader7 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix12.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix12.redirect)("/connect");
  }
  return { user: user.userId };
};
var action4 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const UploaderHandler = (0, import_remix11.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix11.unstable_parseMultipartFormData)(request, UploaderHandler);
  const Wrike = new WrikeClient(wrikeCred);
  const batch = await Wrike.VideoBatch.fromPermaLink(formData.get("batch-task"));
  await batch.importCSV(formData.get("batch"), { headers: true });
  await batch.save({
    templateFolder: await Wrike.Folder.fromPermaLink(formData.get("template-folder")),
    locationFolder: await Wrike.Folder.fromPermaLink(formData.get("location"))
  });
  return null;
};
function VideoBatch() {
  const transition = (0, import_remix11.useTransition)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Upload a video batch CSV file:"
  }, /* @__PURE__ */ React.createElement(import_remix12.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, transition.state === "submitting" ? /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_CircularProgress2.default, {
    size: "3rem"
  })) : /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    name: "template-folder",
    label: "Template Folder (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement(import_TextField2.default, {
    name: "batch-task",
    label: "Batch Task (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement(import_TextField2.default, {
    name: "location",
    label: "Folder (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "batch"
  }), /* @__PURE__ */ React.createElement(import_Button3.default, {
    variant: "contained",
    type: "submit"
  }, "Upload"))));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/connect.tsx
var connect_exports = {};
__export(connect_exports, {
  default: () => Connect,
  loader: () => loader8
});
init_react();
var import_remix13 = __toModule(require_remix());
var import_Button4 = __toModule(require("@mui/material/Button"));
var import_Stack4 = __toModule(require("@mui/material/Stack"));
var import_Add = __toModule(require("@mui/icons-material/Add"));
var loader8 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  if (!user) {
    (0, import_remix13.redirect)("/login");
  }
  return {
    hasWrikeCred: Boolean(await (user == null ? void 0 : user.hasCredentials(Service.wrike)))
  };
};
function Connect() {
  const { hasWrikeCred } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Connect your accounts:"
  }, /* @__PURE__ */ React.createElement(import_Stack4.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix13.Form, {
    action: "/auth/wrike",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button4.default, {
    startIcon: /* @__PURE__ */ React.createElement(import_Add.default, null),
    variant: "contained",
    type: "submit"
  }, hasWrikeCred ? "Connected to Wrike" : "Connect to Wrike"))));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader9
});
init_react();
var import_remix14 = __toModule(require_remix());
var import_Button5 = __toModule(require("@mui/material/Button"));
var import_Stack5 = __toModule(require("@mui/material/Stack"));
var loader9 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix14.redirect)("/login");
  }
  return { user: user.userId };
};
function Index() {
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Video Tooling:"
  }, /* @__PURE__ */ React.createElement(import_Stack5.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/projects/create"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "New Project")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/video-batch"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "Video Batch")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "tasks/asset-inventory"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "Asset Inventory")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/tsg"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "Teleprompter Script Generator"))));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader10
});
init_react();
var import_remix15 = __toModule(require_remix());
var import_Button6 = __toModule(require("@mui/material/Button"));
var import_Stack6 = __toModule(require("@mui/material/Stack"));
var import_Google = __toModule(require("@mui/icons-material/Google"));
var loader10 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  const hasGoogleCred = user ? await user.hasCredentials(Service.google) : false;
  if (hasGoogleCred) {
    (0, import_remix15.redirect)("/");
  }
  return {
    hasGoogleCred
  };
};
function Login() {
  const { hasGoogleCred } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Sign in to your NextThought account:"
  }, /* @__PURE__ */ React.createElement(import_Stack6.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix15.Form, {
    action: "/auth/google",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
    startIcon: /* @__PURE__ */ React.createElement(import_Google.default, null),
    variant: "contained",
    type: "submit"
  }, hasGoogleCred ? "Signed In To Google" : "Sign In To Google"))));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tsg.tsx
var tsg_exports = {};
__export(tsg_exports, {
  default: () => TeleScriptGenerator,
  loader: () => loader11
});
init_react();
var import_remix16 = __toModule(require_remix());
var import_react7 = __toModule(require("react"));
var import_Stack7 = __toModule(require("@mui/material/Stack"));
var import_TextField3 = __toModule(require("@mui/material/TextField"));
var import_Button7 = __toModule(require("@mui/material/Button"));
var loader11 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix16.redirect)("/login");
  }
  return { user: user.userId };
};
function TeleScriptGenerator() {
  const transition = (0, import_remix16.useTransition)();
  return /* @__PURE__ */ import_react7.default.createElement(Page, {
    title: "TSG:"
  }, /* @__PURE__ */ import_react7.default.createElement(import_remix16.Form, {
    method: "get",
    encType: "multipart/form-data",
    action: "/tsg-results"
  }, /* @__PURE__ */ import_react7.default.createElement(import_Stack7.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ import_react7.default.createElement(import_TextField3.default, {
    name: "url",
    label: "Spreadsheet URL",
    variant: "outlined",
    required: true,
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react7.default.createElement(import_TextField3.default, {
    name: "sheet",
    label: "Sheet Name (optional)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react7.default.createElement(import_TextField3.default, {
    name: "row",
    label: "Starting Row (optional)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react7.default.createElement(import_TextField3.default, {
    name: "column",
    label: "Data Column (optional)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react7.default.createElement(import_Button7.default, {
    type: "submit",
    variant: "contained"
  }, transition.state === "submitting" ? "Generating..." : "Generate"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a87cbd95", "entry": { "module": "/_static/build/entry.client-CAMQOSR3.js", "imports": ["/_static/build/_shared/chunk-T6FGNKVJ.js", "/_static/build/_shared/chunk-WE234S4G.js", "/_static/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-JNDVWXVJ.js", "imports": ["/_static/build/_shared/chunk-73JBMSBV.js", "/_static/build/_shared/chunk-GRGPB7NZ.js", "/_static/build/_shared/chunk-WBSO762V.js", "/_static/build/_shared/chunk-TEXGEBSC.js", "/_static/build/_shared/chunk-BNCZQGQV.js", "/_static/build/_shared/chunk-JD6ETMDK.js", "/_static/build/_shared/chunk-QHB5FWJ6.js", "/_static/build/_shared/chunk-7IOPBWWP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-ZWWJIULX.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-VXF2JPDZ.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-LIRVPVCL.js", "imports": ["/_static/build/_shared/chunk-N2TAZFXT.js", "/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-J5UZPOGT.js", "imports": ["/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-M6CGRT6B.js", "imports": ["/_static/build/_shared/chunk-N2TAZFXT.js", "/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-OREHO7MH.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-PPSYDBZW.js", "imports": ["/_static/build/_shared/chunk-43ZGKHZU.js", "/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-7BQJ6G7L.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-QASF2TCZ.js", "imports": ["/_static/build/_shared/chunk-43ZGKHZU.js", "/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg": { "id": "routes/tsg", "parentId": "root", "path": "tsg", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-5ABS4RK7.js", "imports": ["/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg-results": { "id": "routes/tsg-results", "parentId": "root", "path": "tsg-results", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-results-JHCTWBIF.js", "imports": ["/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-N5KJU6YC.js", "imports": ["/_static/build/_shared/chunk-5C24UKX7.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-A87CBD95.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/$service.callback": {
    id: "routes/auth/$service.callback",
    parentId: "root",
    path: "auth/:service/callback",
    index: void 0,
    caseSensitive: void 0,
    module: service_callback_exports
  },
  "routes/tasks/asset-inventory": {
    id: "routes/tasks/asset-inventory",
    parentId: "root",
    path: "tasks/asset-inventory",
    index: void 0,
    caseSensitive: void 0,
    module: asset_inventory_exports
  },
  "routes/projects/clients": {
    id: "routes/projects/clients",
    parentId: "root",
    path: "projects/clients",
    index: void 0,
    caseSensitive: void 0,
    module: clients_exports
  },
  "routes/projects/create": {
    id: "routes/projects/create",
    parentId: "root",
    path: "projects/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/projects/spaces": {
    id: "routes/projects/spaces",
    parentId: "root",
    path: "projects/spaces",
    index: void 0,
    caseSensitive: void 0,
    module: spaces_exports
  },
  "routes/auth/$service": {
    id: "routes/auth/$service",
    parentId: "root",
    path: "auth/:service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/tsg-results": {
    id: "routes/tsg-results",
    parentId: "root",
    path: "tsg-results",
    index: void 0,
    caseSensitive: void 0,
    module: tsg_results_exports
  },
  "routes/video-batch": {
    id: "routes/video-batch",
    parentId: "root",
    path: "video-batch",
    index: void 0,
    caseSensitive: void 0,
    module: video_batch_exports
  },
  "routes/connect": {
    id: "routes/connect",
    parentId: "root",
    path: "connect",
    index: void 0,
    caseSensitive: void 0,
    module: connect_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/tsg": {
    id: "routes/tsg",
    parentId: "root",
    path: "tsg",
    index: void 0,
    caseSensitive: void 0,
    module: tsg_exports
  }
};

// server.js
var handler = (0, import_architect.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3giLCAiLi4vYXBwL2FwaS9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvVXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQmFzZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaWxlSW5wdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsLnRzeCIsICIuLi9hcHAvYXBpL3V0aWxzL0NTVi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4IiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0N1c3RvbUZpZWxkLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0ZvbGRlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9Qcm9qZWN0LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1NwYWNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Rhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFza1RlbXBsYXRlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1dvcmtmbG93LnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvdHNnLXJlc3VsdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RzZy1yZXN1bHRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZy1yZXN1bHRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy92aWRlby1iYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidmlkZW8tYmF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Nvbm5lY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Nvbm5lY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29ubmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL3RzZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHNnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RvY3VtZW50cy5yZWFkb25seVwiICtcblx0XHRcdFx0XHRcIiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSBvcGVuaWQgcHJvZmlsZSBlbWFpbFwiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLmdvb2dsZVxuXHQpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9TRUNSRVQpIHtcblx0YXV0aC51c2UoXG5cdFx0bmV3IFdyaWtlU3RyYXRlZ3koXG5cdFx0XHR7XG5cdFx0XHRcdGNsaWVudElEOiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL2F1dGgvd3Jpa2UvY2FsbGJhY2tcIixcblx0XHRcdFx0c2NvcGU6IFwiRGVmYXVsdCx3c1JlYWRXcml0ZVwiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLndyaWtlXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cblx0aWYgKCF1c2VySWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBVc2VyLmdldEZvcklkKHVzZXJJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChcblx0c2VydmljZTogU2VydmljZSxcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVkaXJlY3RzOiB7IHN1Y2Nlc3M6IHN0cmluZzsgZmFpbHVyZTogc3RyaW5nIH1cbikgPT4ge1xuXHRjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUgfSA9IGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFxuXHRcdHNlcnZpY2UsXG5cdFx0cmVxdWVzdFxuXHQpO1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihcblx0XHRyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG5cdCk7XG5cblx0Y29uc29sZS5sb2cocHJvZmlsZSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoIXByb2ZpbGUuaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTk8gSUQ/IT8hOiBcIiwgcHJvZmlsZSk7XG5cdFx0XHR0aHJvdyBcIndoYXRcIjtcblx0XHR9XG5cblx0XHRsZXQgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRcdGlmICghY3VycmVudFVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2V0dGluZyBDdXJyZW50IFVzZXI6IFwiLCBwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblx0XHRcdGN1cnJlbnRVc2VyID0gYXdhaXQgVXNlci5nZXRGb3JPYXV0aChwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHVzZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHNldENhY2hlZChjdXJyZW50VXNlcikpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGN1cnJlbnRVc2VyLnNldENyZWRlbnRpYWxzKHNlcnZpY2UsIHtcblx0XHRcdGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcblx0XHRcdHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLmZhaWx1cmUpO1xuXHR9XG5cblx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLnN1Y2Nlc3MsIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJhdGVneVZlcmlmeUNhbGxiYWNrIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB0eXBlIHtcblx0T0F1dGgyUHJvZmlsZSxcblx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXMsXG59IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneU9wdGlvbnMgPSB7XG5cdGNsaWVudElEOiBzdHJpbmc7XG5cdGNsaWVudFNlY3JldDogc3RyaW5nO1xuXHRjYWxsYmFja1VSTDogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcyA9IHtcblx0c2NvcGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvZmlsZSA9IHtcblx0aWQ6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdF9qc29uOiB7XG5cdFx0a2luZHM6IHN0cmluZztcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBzdHJpbmc7XG5cdFx0XHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdFx0XHRsYXN0TmFtZTogc3RyaW5nO1xuXHRcdFx0fVxuXHRcdF07XG5cdH07XG5cdHByb3ZpZGVyOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VTdHJhdGVneTxVc2VyPiBleHRlbmRzIE9BdXRoMlN0cmF0ZWd5PFxuXHRVc2VyLFxuXHRXcmlrZVByb2ZpbGUsXG5cdFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtc1xuPiB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdXNlckluZm9VUkwgPVxuXHRcdFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9jb250YWN0cz9tZT10cnVlXCI7XG5cdHByaXZhdGUgc2NvcGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zOiBXcmlrZVN0cmF0ZWd5T3B0aW9ucyxcblx0XHR2ZXJpZnk6IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2s8XG5cdFx0XHRVc2VyLFxuXHRcdFx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXM8V3Jpa2VQcm9maWxlLCBXcmlrZVN0cmF0ZWd5RXh0cmFQYXJhbXM+XG5cdFx0PlxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHtcblx0XHRcdFx0YXV0aG9yaXphdGlvblVSTDogXCJodHRwczovL2xvZ2luLndyaWtlLmNvbS9vYXV0aDIvYXV0aG9yaXplL3Y0XCIsXG5cdFx0XHRcdHRva2VuVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi90b2tlblwiLFxuXHRcdFx0XHRjbGllbnRJRDogb3B0aW9ucy5jbGllbnRJRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IG9wdGlvbnMuY2FsbGJhY2tVUkwsXG5cdFx0XHR9LFxuXHRcdFx0dmVyaWZ5XG5cdFx0KTtcblxuXHRcdHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGF1dGhvcml6YXRpb25QYXJhbXMoKTogVVJMU2VhcmNoUGFyYW1zIHtcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRpZiAodGhpcy5zY29wZSkge1xuXHRcdFx0cGFyYW1zLnNldChcInNjb3BlXCIsIHRoaXMuc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgdXNlclByb2ZpbGUoYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8V3Jpa2VQcm9maWxlPiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVzZXJJbmZvVVJMLCB7XG5cdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBwYXlsb2FkOiBXcmlrZVByb2ZpbGVbXCJfanNvblwiXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhWzBdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBkYXRhLmlkLFxuXHRcdFx0Zmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuXHRcdFx0X2pzb246IHBheWxvYWQsXG5cdFx0XHRwcm92aWRlcjogXCJ3cmlrZVwiLFxuXHRcdH07XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcbmltcG9ydCBDcmVkZW50aWFsLCB7IFNlcnZpY2UsIFRva2VucyB9IGZyb20gXCIuL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmNvbnN0IEV4aXN0aW5nID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgY29uc3Qgc2V0Q2FjaGVkID0gKHVzZXI6IFVzZXIpID0+IChcblx0RXhpc3Rpbmcuc2V0KHVzZXIudXNlcklkLCB1c2VyKSwgdXNlci51c2VySWRcbik7XG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVkID0gKHVzZXJJZDogc3RyaW5nKSA9PiBFeGlzdGluZy5nZXQodXNlcklkKTtcblxuY2xhc3MgT2F1dGhJZCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJPYXV0aElkc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHRwcm9maWxlSWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5uYXRpdmVFbnVtKFNlcnZpY2UpLFxuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhYmxlLnB1dCh7IHByb2ZpbGVJZCwgc2VydmljZSwgdXNlcklkOiB1dWlkKCkgfSk7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBPYXV0aElkLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHByb2ZpbGVJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5wcm9maWxlSWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdHN0YXRpYyBhc3luYyBnZXRGb3JPYXV0aChwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IG9hdXRoSWQgPSBhd2FpdCBPYXV0aElkLmZpbmRPckNyZWF0ZShwcm9maWxlSWQsIHNlcnZpY2UpO1xuXG5cdFx0aWYgKCFvYXV0aElkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIob2F1dGhJZC51c2VySWQpO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEZvcklkKHVzZXJJZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBVc2VyKHVzZXJJZCk7XG5cdH1cblxuXHR1c2VySWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGNyZWRlbnRpYWxzOiBNYXA8U2VydmljZSwgQ3JlZGVudGlhbD47XG5cblx0Y29uc3RydWN0b3IodXNlcklkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSwgdG9rZW5zOiBUb2tlbnMpIHtcblx0XHRyZXR1cm4gQ3JlZGVudGlhbC5hZGRPclVwZGF0ZSh0aGlzLnVzZXJJZCwgc2VydmljZSwgdG9rZW5zKTtcblx0fVxuXG5cdGFzeW5jIGdldENyZWRlbnRpYWxzKHNlcnZpY2U6IFNlcnZpY2UpIHtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMuaGFzKHNlcnZpY2UpKSB7XG5cdFx0XHRjb25zdCBjcmVkID0gYXdhaXQgQ3JlZGVudGlhbC5nZXRDcmVkZW50aWFsKHRoaXMudXNlcklkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKGNyZWQpIHtcblx0XHRcdFx0dGhpcy5jcmVkZW50aWFscy5zZXQoc2VydmljZSwgY3JlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KHNlcnZpY2UpO1xuXHR9XG5cblx0YXN5bmMgaGFzQ3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IGNyZWQgPSBhd2FpdCB0aGlzLmdldENyZWRlbnRpYWxzKHNlcnZpY2UpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oY3JlZCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vZGF0YWJhc2UvVGFibGUuc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbCB7XG5cdHN0YXRpYyBUYWJsZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRzdGF0aWMgU2NoZW1hID0gei5vYmplY3Qoe30pO1xuXG5cdHN0YXRpYyBnZXRUYWJsZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KHRoaXM6IFQpIHtcblx0XHRyZXR1cm4gbmV3IFRhYmxlPEluc3RhbmNlVHlwZTxUPj4odGhpcy5UYWJsZU5hbWUsICguLi5hcmdzKSA9PlxuXHRcdFx0dGhpcy5jcmVhdGUoLi4uYXJncylcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KFxuXHRcdHRoaXM6IFQsXG5cdFx0cmF3OiBvYmplY3Rcblx0KSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzKHJhdykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHR9XG5cblx0ZGF0YTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJhdzogb2JqZWN0KSB7XG5cdFx0dGhpcy5kYXRhID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEJhc2VNb2RlbCkuU2NoZW1hLnBhcnNlKHJhdyk7XG5cdH1cbn1cbiIsICJpbXBvcnQgYXJjIGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgQXJjVGFibGUgfSBmcm9tIFwiQGFyY2hpdGVjdC9mdW5jdGlvbnMvdGFibGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlPFQ+IHtcblx0cHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuXHRwcml2YXRlIHRhYmxlOiBBcmNUYWJsZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQ7XG5cblx0Y29uc3RydWN0b3IodGFibGVOYW1lOiBzdHJpbmcgfCBudWxsLCBwYXJzZTogKHJhdzogb2JqZWN0KSA9PiBUKSB7XG5cdFx0aWYgKCF0YWJsZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRhYmxlIG11c3QgYmUgZ2l2ZW4gYSB0YWJsZSBuYW1lLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLnRhYmxlTmFtZSA9IHRhYmxlTmFtZTtcblx0XHR0aGlzLnBhcnNlID0gcGFyc2U7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJsZU5hbWU7XG5cdH1cblxuXHRhc3luYyBzZXR1cFRhYmxlKCkge1xuXHRcdGlmICghdGhpcy50YWJsZSkge1xuXHRcdFx0Y29uc3QgdGFibGVzID0gYXdhaXQgYXJjLnRhYmxlcygpO1xuXG5cdFx0XHR0aGlzLnRhYmxlID0gdGFibGVzW3RoaXMudGFibGVOYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50YWJsZTtcblx0fVxuXG5cdGFzeW5jIGdldChrZXk6IGFueSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0cmV0dXJuIHJlc3AgPyB0aGlzLnBhcnNlKHJlc3ApIDogbnVsbDtcblx0fVxuXG5cdGFzeW5jIHB1dChkYXRhOiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCB0YWJsZS5wdXQoZGF0YSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKHF1ZXJ5OiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXG5cdFx0YXdhaXQgdGFibGUudXBkYXRlKHF1ZXJ5KTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zID0ge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRyZWZyZXNoVG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuXHRnb29nbGUgPSBcImdvb2dsZVwiLFxuXHR3cmlrZSA9IFwid3Jpa2VcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZGVudGlhbCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJDcmVkZW50aWFsc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHR1c2VySWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5lbnVtKFtcImdvb2dsZVwiLCBcIndyaWtlXCJdKSxcblx0XHRhY2Nlc3NUb2tlbjogei5zdHJpbmcoKSxcblx0XHQvLyByZWZyZXNoVG9rZW46IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGFkZE9yVXBkYXRlKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGtleSA9IHsgdXNlcklkLCBzZXJ2aWNlIH07XG5cdFx0Y29uc29sZS5sb2coXCJhZGRpbmcgY3JlZGVudGlhbDogXCIsIGtleSk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoa2V5KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0YXdhaXQgdGFibGUudXBkYXRlKHtcblx0XHRcdFx0S2V5OiBrZXksXG5cdFx0XHRcdFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIGFjY2Vzc1Rva2VuID0gOmFjY2Vzc1Rva2VuXCIsXG5cdFx0XHRcdEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcblx0XHRcdFx0XHRcIjphY2Nlc3NUb2tlblwiOiB0b2tlbnMuYWNjZXNzVG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgdGFibGUucHV0KHtcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHRzZXJ2aWNlLFxuXHRcdFx0XHQuLi50b2tlbnMsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Q3JlZGVudGlhbCh1c2VySWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgdXNlcklkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0cmV0dXJuIGV4aXN0aW5nO1xuXHR9XG5cblx0ZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlZGVudGlhbC5TY2hlbWE+IHwgdW5kZWZpbmVkO1xuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgc2VydmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5zZXJ2aWNlID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgYWNjZXNzVG9rZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uYWNjZXNzVG9rZW4gPz8gXCJcIjtcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcblx0Y29va2llOiB7XG5cdFx0bmFtZTogXCJudGkuc2Vzc2lvblwiLFxuXHRcdHNhbWVTaXRlOiBcImxheFwiLFxuXHRcdHBhdGg6IFwiL1wiLFxuXHRcdHNlY3JldHM6IFtcIk4zeHRUaDB1Z2h0ISFDXCJdLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7XG5cdEZvcm0sXG5cdExpbmtzRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0dXNlQWN0aW9uRGF0YSxcblx0dXNlVHJhbnNpdGlvbixcblx0anNvbixcblx0cmVkaXJlY3QsXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3R1YWxGaWxlT2JqZWN0IH0gZnJvbSBcImZpbGVwb25kXCI7XG5pbXBvcnQgKiBhcyBIVE1MUGFyc2VyIGZyb20gXCJub2RlLWh0bWwtcGFyc2VyXCI7XG5cbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbGVJbnB1dFwiO1xuaW1wb3J0IHsgdXNlQmxvYiwgdXNlT2JqZWN0VVJMIH0gZnJvbSBcIn4vY29tcG9uZW50cy9ob29rcy91c2Utb2JqZWN0LXVybFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCAqIGFzIENTViBmcm9tIFwifi9hcGkvdXRpbHMvQ1NWLnNlcnZlclwiO1xuXG5jb25zdCBWZW5kb3JPcmRlciA9IFtcIkdldHR5IEltYWdlc1wiLCBcIlNodXR0ZXJzdG9ja1wiLCBcIlVua25vd25cIl07XG5cbnR5cGUgSW1hZ2VPYmplY3QgPSB7XG5cdFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiO1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXHRhdXRob3I6IHtcblx0XHRuYW1lOiBzdHJpbmc7XG5cdH07XG59O1xuXG50eXBlIEludmVudG9yeSA9IHtcblx0dHlwZTogXCJ2aWRlb1wiIHwgXCJwaG90b1wiIHwgXCJhdWRpb1wiIHwgXCJ1bmtub3duXCI7XG5cdGZpbGVuYW1lOiBzdHJpbmc7XG5cdHZlbmRvcjogc3RyaW5nO1xuXG5cdGNvZGU/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0aGVhZGxpbmU/OiBzdHJpbmc7XG5cdGNyZWRpdGxpbmU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmlsZXBvbmRAXjQvZGlzdC9maWxlcG9uZC5jc3NcIixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IFVwbG9hZEhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInJlcG9ydFwiKSBhcyBGaWxlO1xuXHRjb25zdCByZXBvcnQgPSBhd2FpdCBwYXJzZVJlcG9ydChmaWxlKTtcblxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IHJlcG9ydFtcIlByb2plY3QgbmFtZVwiXTtcblx0Y29uc3QgaW52ZW50b3J5ID0gKGF3YWl0IGdldEFzc2V0SW52ZW50b3J5KHJlcG9ydCkpLnNvcnQoXG5cdFx0KGEsIGIpID0+IFZlbmRvck9yZGVyLmluZGV4T2YoYS52ZW5kb3IpIC0gVmVuZG9yT3JkZXIuaW5kZXhPZihiLnZlbmRvcilcblx0KTtcblxuXHRjb25zdCBjc3YgPSBhd2FpdCBDU1YuZm9ybWF0KGludmVudG9yeSwge1xuXHRcdGhlYWRlcnM6IFtcblx0XHRcdFwiaGVhZGxpbmVcIixcblx0XHRcdFwidHlwZVwiLFxuXHRcdFx0XCJ2ZW5kb3JcIixcblx0XHRcdFwiZmlsZW5hbWVcIixcblx0XHRcdFwiY29kZVwiLFxuXHRcdFx0XCJjb2xsZWN0aW9uXCIsXG5cdFx0XHRcImNyZWRpdGxpbmVcIixcblx0XHRcdFwidXJsXCIsXG5cdFx0XSxcblx0fSk7XG5cblx0cmV0dXJuIGpzb24oe1xuXHRcdGNzdixcblx0XHRwcm9qZWN0TmFtZTogcHJvamVjdE5hbWVbMF0udHJpbSgpLnJlcGxhY2UoL1xcLi4qJC8sIFwiXCIpLFxuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2V0SW52ZW50b3J5KCkge1xuXHRjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXHRjb25zdCBhY3Rpb24gPSB1c2VBY3Rpb25EYXRhKCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdGNvbnN0IHNob3dTYXZpbmcgPVxuXHRcdHRyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiIHx8IHRyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiO1xuXHRjb25zdCBzaG93RG93bmxvYWQgPSAhc2hvd1NhdmluZyAmJiBhY3Rpb247XG5cdGNvbnN0IHNob3dGb3JtID0gIXNob3dTYXZpbmcgJiYgIXNob3dEb3dubG9hZDtcblxuXHRjb25zdCBjc3YgPSB1c2VCbG9iKGFjdGlvbj8uY3N2LCBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLTg7XCIpO1xuXHRjb25zdCBkb3dubG9hZFVSTCA9IHVzZU9iamVjdFVSTChjc3YpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJBc3NldCBJbnZlbnRvcnlcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7IXNob3dEb3dubG9hZCB8fCAhZG93bmxvYWRVUkwgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtkb3dubG9hZFVSTH1cblx0XHRcdFx0XHRcdFx0ZG93bmxvYWQ9e2Ake2FjdGlvbj8ucHJvamVjdE5hbWV9LWFzc2V0LWludmVudG9yeS5jc3ZgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5Eb3dubG9hZDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd1NhdmluZyA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIC8+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XG5cdFx0XHRcdFx0XHRcdEdlbmVyYXRpbmcuLi5cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7IXNob3dGb3JtID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuXHRcdFx0XHRcdFx0XHRBZnRlciBFZmZlY3RzIERlcGVuZGVuY3kgUmVwb3J0XG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCI+XG5cdFx0XHRcdFx0XHRcdEZpbGUgJmd0OyBEZXBlbmRlbmNpZXMgJmd0OyBDb2xsZWN0IEZpbGVzXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxGaWxlSW5wdXRcblx0XHRcdFx0XHRcdFx0bmFtZT1cInJlcG9ydFwiXG5cdFx0XHRcdFx0XHRcdHN0b3JlQXNGaWxlXG5cdFx0XHRcdFx0XHRcdGZpbGVzPXtmaWxlc31cblx0XHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEZpbGVzKGl0ZW1zLm1hcCgoZikgPT4gZi5maWxlKSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFx0Q29tcGlsZVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG5cbmNvbnN0IGdldEhUTUwgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCByZXNwLnRleHQoKTtcblxuXHRyZXR1cm4gSFRNTFBhcnNlci5wYXJzZSh0ZXh0LCB7XG5cdFx0YmxvY2tUZXh0RWxlbWVudHM6IHsgc3R5bGU6IGZhbHNlIH0sXG5cdH0pO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VPYmplY3RMaW5rRGF0YSA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8SW1hZ2VPYmplY3Q+ID0+IHtcblx0Y29uc3QgaHRtbCA9IGF3YWl0IGdldEhUTUwodXJsKTtcblx0Y29uc3QgbGlua0RhdGEgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XCJzY3JpcHRbdHlwZT0nYXBwbGljYXRpb24vbGQranNvbiddXCJcblx0KTtcblxuXHRmb3IgKGxldCBkYXRhIG9mIGxpbmtEYXRhKSB7XG5cdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZGF0YS50ZXh0KSBhcyBJbWFnZU9iamVjdDtcblxuXHRcdGlmIChqc29uW1wiQHR5cGVcIl0gIT09IFwiSW1hZ2VPYmplY3RcIikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpzb247XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIEltYWdlT2JqZWN0OiAke3VybH1gKTtcbn07XG5cbmNvbnN0IGhlYWRsaW5lRnJvbUltYWdlT2JlY3QgPSAob2JqOiBJbWFnZU9iamVjdCkgPT4gb2JqLmRlc2NyaXB0aW9uO1xuY29uc3QgY3JlZGl0bGluZUZyb21JbWFnZU9iamVjdCA9IChvYmo6IEltYWdlT2JqZWN0KSA9PiBvYmouYXV0aG9yLm5hbWU7XG5cbmNvbnN0IFR5cGVzVG9FeHRlbnNpb24gPSB7XG5cdHZpZGVvOiBbXCIubXA0XCIsIFwiLm1vdlwiLCBcIi5tcGdcIl0sXG5cdHBob3RvOiBbXCIuanBlZ1wiLCBcIi5qcGdcIiwgXCIucG5nXCIsIFwiLnRpZlwiLCBcIi53ZWJtXCJdLFxuXHRhdWRpbzogW1wiLm1wM1wiLCBcIi53YXZcIl0sXG59O1xuXG5jb25zdCBnZXRUeXBlRnJvbUV4dGVuc2lvbiA9IChcblx0ZXh0OiBzdHJpbmdcbik6IGtleW9mIHR5cGVvZiBUeXBlc1RvRXh0ZW5zaW9uIHwgXCJ1bmtub3duXCIgPT4ge1xuXHRmb3IgKGxldCBbdHlwZSwgZXh0ZW5zaW9uc10gb2YgT2JqZWN0LmVudHJpZXMoVHlwZXNUb0V4dGVuc2lvbikpIHtcblx0XHRpZiAoZXh0ZW5zaW9ucy5pbmNsdWRlcyhleHQpKSB7XG5cdFx0XHRyZXR1cm4gdHlwZSBhcyBrZXlvZiB0eXBlb2YgVHlwZXNUb0V4dGVuc2lvbjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gXCJ1bmtub3duXCI7XG59O1xuXG5jb25zdCBHZXR0eVJlZ2V4ID0gL14oZ2V0dHlpbWFnZXN8R2V0dHlJbWFnZXMpXFwtKFxcZCspLztcbmNvbnN0IFNodXR0ZXJSZWdleCA9IC9eKHNodXR0ZXJzdG9jaylfKFxcZCspLztcblxuY29uc3QgR2V0dHlBcnRpc3RUaXRsZUJsYWNrTGlzdDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7XG5cdGNvbnRyaWJ1dG9yOiB0cnVlLFxuXHRub25lOiB0cnVlLFxufTtcblxuY29uc3QgQ2FwaXRhbGl6ZSA9IChzOiBzdHJpbmcpID0+IGAke3MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtzLnNsaWNlKDEpfWA7XG5jb25zdCBUaXRsZUNhc2UgPSAoczogc3RyaW5nKSA9PiBzLnNwbGl0KFwiIFwiKS5tYXAoQ2FwaXRhbGl6ZSkuam9pbihcIiBcIik7XG5cbmNvbnN0IEluZm9HZXR0ZXJzID0gW1xuXHR7XG5cdFx0Ly8gR2V0dHkgSW1hZ2VzXG5cdFx0aGFuZGxlczogKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiBHZXR0eVJlZ2V4LnRlc3QoZmlsZW5hbWUpLFxuXHRcdGluZm86IGFzeW5jIChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgbWF0Y2ggPSBmaWxlbmFtZS5tYXRjaChHZXR0eVJlZ2V4KTtcblx0XHRcdGNvbnN0IGlkID0gbWF0Y2g/LlsyXTtcblxuXHRcdFx0aWYgKCFpZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBnZXQgR2V0dHlJbWFnZSBpZDogJHtmaWxlbmFtZX1gKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdXJsID0gYGh0dHA6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8ke2lkfWA7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgZ2V0SFRNTCh1cmwpO1xuXG5cdFx0XHRjb25zdCBhc3NldERldGFpbHNTY3JpcHQgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCdzY3JpcHRbZGF0YS1jb21wb25lbnQ9XCJhc3NldGRldGFpbFwiXSdcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IGFzc2V0RGV0YWlscyA9IGFzc2V0RGV0YWlsc1NjcmlwdFxuXHRcdFx0XHQ/IEpTT04ucGFyc2UoYXNzZXREZXRhaWxzU2NyaXB0LnRleHQpXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0aWYgKCFhc3NldERldGFpbHMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcdGBVbmFibGUgdG8gZ2V0IEdldHR5IEltYWdlcyBhc3NldCBkZXRhaWxzOiAke3VybH1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJHZXR0eSBJbWFnZXNcIixcblx0XHRcdFx0Y29kZTogaWQsXG5cdFx0XHRcdHVybCxcblxuXHRcdFx0XHRoZWFkbGluZTogYXNzZXREZXRhaWxzLmFzc2V0LnRpdGxlLFxuXHRcdFx0XHRjcmVkaXRsaW5lOiBHZXR0eVthc3NldERldGFpbHMuYXNzZXQuYXJ0aXN0VGl0bGVdXG5cdFx0XHRcdFx0PyBhc3NldERldGFpbHMuYXNzZXQucGhvdG9ncmFwaGVyXG5cdFx0XHRcdFx0OiBgJHthc3NldERldGFpbHMuYXNzZXQucGhvdG9ncmFwaGVyfSAvICR7VGl0bGVDYXNlKFxuXHRcdFx0XHRcdFx0XHRhc3NldERldGFpbHMuYXNzZXQuYXJ0aXN0VGl0bGVcblx0XHRcdFx0XHQgICl9YCxcblx0XHRcdFx0Y29sbGVjdGlvbjogYXNzZXREZXRhaWxzLmFzc2V0LmNvbGxlY3Rpb25EaXNwbGF5TmFtZSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdC8vU2h1dHRlcnN0b2NrXG5cdFx0aGFuZGxlczogKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiBTaHV0dGVyUmVnZXgudGVzdChmaWxlbmFtZSksXG5cdFx0aW5mbzogYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBtYXRjaCA9IGZpbGVuYW1lLm1hdGNoKFNodXR0ZXJSZWdleCk7XG5cdFx0XHRjb25zdCBpZCA9IG1hdGNoPy5bMl07XG5cblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBTaHV0dGVyU3RvY2sgaWQ6ICR7ZmlsZW5hbWV9XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by8ke2lkfWA7XG5cblx0XHRcdGNvbnN0IGltYWdlT2JqZWN0ID0gYXdhaXQgZ2V0SW1hZ2VPYmplY3RMaW5rRGF0YSh1cmwpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2ZW5kb3I6IFwiU2h1dHRlcnN0b2NrXCIsXG5cdFx0XHRcdGNvZGU6IGlkLFxuXHRcdFx0XHR1cmwsXG5cblx0XHRcdFx0aGVhZGxpbmU6IGhlYWRsaW5lRnJvbUltYWdlT2JlY3QoaW1hZ2VPYmplY3QpLFxuXHRcdFx0XHRjcmVkaXRsaW5lOiBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0KGltYWdlT2JqZWN0KSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdC8vQXJ0bGlzdFxuXHRcdGhhbmRsZXM6IChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT5cblx0XHRcdGZpbGVuYW1lLmluZGV4T2YoXCJBcnRsaXN0XCIpICE9PSAtMSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJBcnRsaXN0LmlvXCIsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG5dO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRBc3NldEludmVudG9yeShcblx0cmVwb3J0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5cbik6IFByb21pc2U8SW52ZW50b3J5W10+IHtcblx0Y29uc3Qgc291cmNlcyA9IHJlcG9ydFtcIkNvbGxlY3RlZCBzb3VyY2UgZmlsZXNcIl0gYXMgc3RyaW5nW107XG5cblx0Y29uc3QgaW52ZW50b3JpZXMgPSBzb3VyY2VzLnJlZHVjZShcblx0XHQoYWNjOiBQcm9taXNlPEludmVudG9yeT5bXSwgc291cmNlOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShzb3VyY2UpO1xuXHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHNvdXJjZSwgZXh0ZW5zaW9uKTtcblxuXHRcdFx0Y29uc3QgZ2V0dGVyID0gSW5mb0dldHRlcnMuZmluZCgoZykgPT5cblx0XHRcdFx0Zy5oYW5kbGVzKGZpbGVuYW1lLCBleHRlbnNpb24pXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWdldHRlcikge1xuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdFx0dHlwZTogZ2V0VHlwZUZyb21FeHRlbnNpb24oZXh0ZW5zaW9uKSxcblx0XHRcdFx0XHRcdHZlbmRvcjogXCJVbmtub3duXCIsXG5cdFx0XHRcdFx0XHRmaWxlbmFtZTogcGF0aC5iYXNlbmFtZShzb3VyY2UpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdGdldHRlci5pbmZvKGZpbGVuYW1lLCBleHRlbnNpb24pLnRoZW4oKGluZm8pID0+ICh7XG5cdFx0XHRcdFx0dHlwZTogZ2V0VHlwZUZyb21FeHRlbnNpb24oZXh0ZW5zaW9uKSxcblx0XHRcdFx0XHRmaWxlbmFtZTogcGF0aC5iYXNlbmFtZShzb3VyY2UpLFxuXHRcdFx0XHRcdC4uLmluZm8sXG5cdFx0XHRcdH0pKSxcblx0XHRcdF07XG5cdFx0fSxcblx0XHRbXVxuXHQpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChpbnZlbnRvcmllcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlUmVwb3J0KGZpbGU6IEZpbGUpIHtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcclwiKTtcblxuXHRjb25zdCBncm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRsZXQgY3VycmVudFNlY3Rpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcblx0XHRjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoXCJcXHRcIik7XG5cdFx0Y29uc3QgZGVwdGggPSBwYXJ0cy5sZW5ndGggLSAxO1xuXHRcdGNvbnN0IGxpbmVUZXh0ID0gcGFydHNbZGVwdGhdLnRyaW0oKTtcblxuXHRcdGlmIChkZXB0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgW25hbWUsIHZhbHVlXSA9IGxpbmVUZXh0LnNwbGl0KFwiOlwiKTtcblxuXHRcdFx0Z3JvdXBzW25hbWVdID0gZ3JvdXBzW25hbWVdID8/IFtdO1xuXG5cdFx0XHRpZiAodmFsdWU/LnRyaW0oKSkge1xuXHRcdFx0XHRncm91cHNbbmFtZV0ucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRTZWN0aW9uID0gbmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjdXJyZW50U2VjdGlvbikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFJlcG9ydFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Z3JvdXBzW2N1cnJlbnRTZWN0aW9uXS5wdXNoKGxpbmVUZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JvdXBzO1xufVxuIiwgImltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxudHlwZSBQYWdlUHJvcHMgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgdGl0bGUsIGNoaWxkcmVuIH06IFBhZ2VQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIHN4PXt7IG10OiAxMCB9fT5cblx0XHRcdDxQYXBlciBlbGV2YXRpb249ezN9IHN4PXt7IHB5OiAzIH19PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgxXCIgbWI9ezV9PlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IEZpbGVQb25kIH0gZnJvbSBcInJlYWN0LWZpbGVwb25kXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEZpbGVQb25kKWBcblx0d2lkdGg6IDMwMHB4O1xuXG5cdCYgLmZpbGVwb25kLS1jcmVkaXRzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWRyb3AtbGFiZWwge1xuXHRcdGNvbG9yOiAjNGM0ZTUzO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWxhYmVsLWFjdGlvbiB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjYmFiZGMwO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLXBhbmVsLXJvb3Qge1xuXHRcdGJvcmRlci1yYWRpdXM6IDJlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMGY0O1xuXHRcdGhlaWdodDogMWVtO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1OTVlNjg7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJpcC1ibG9iIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YTlhO1xuXHR9XG5gO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJsb2IoY29udGVudDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuXHRcdGlmICghY29udGVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSwgeyB0eXBlIH0pO1xuXHR9LCBbY29udGVudCwgdHlwZV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlT2JqZWN0VVJMKGJsb2I6IEJsb2IgfCBudWxsKSB7XG5cdGNvbnN0IFtvYmplY3RVUkwsIHNldE9iamVjdFVSTF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghYmxvYikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0c2V0T2JqZWN0VVJMKHVybCk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuXHRcdFx0c2V0T2JqZWN0VVJMKG51bGwpO1xuXHRcdH07XG5cdH0sIFtibG9iXSk7XG5cblx0cmV0dXJuIG9iamVjdFVSTDtcbn1cbiIsICJpbXBvcnQgKiBhcyBDU1ZGb3JtYXQgZnJvbSBcIkBmYXN0LWNzdi9mb3JtYXRcIjtcblxudHlwZSBSb3cgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuXHRyb3dzOiBSb3dbXSxcblx0b3B0aW9uczogQ1NWRm9ybWF0LkZvcm1hdHRlck9wdGlvbnNBcmdzPFJvdywgUm93PlxuKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0cmV0dXJuIENTVkZvcm1hdC53cml0ZVRvU3RyaW5nKHJvd3MsIG9wdGlvbnMpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbGllbnQgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDbGllbnRSZXNwb25zZSA9IHtcblx0Y2xpZW50czogQ2xpZW50W107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcblxuXHRjb25zdCBzcGFjZUlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzcGFjZUlkXCIpO1xuXHRjb25zdCBXcmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0aWYgKCFzcGFjZUlkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiTXVzdCBoYXZlIGEgc3BhY2VJZFwiLCB7IHN0YXR1czogNDIyIH0pO1xuXHR9XG5cblx0Y29uc3QgZm9sZGVycyA9IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tU3BhY2Uoc3BhY2VJZCwgeyBwcm9qZWN0OiBmYWxzZSB9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y2xpZW50czogZm9sZGVycy5tYXAoKGYpID0+ICh7IGlkOiBmLmlkLCB0aXRsZTogZi50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSBDcmVkZW50aWFsIGZyb20gXCIuLi9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIi4uL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckNsYXNzIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDbGFzcyB9IGZyb20gXCIuL1Byb2plY3Quc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrQ2xhc3MgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcblxuY29uc3QgQmFzZVVSTCA9IFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9cIjtcblxudHlwZSBGZXRjaENvbmZpZyA9IHtcblx0bWV0aG9kOiBzdHJpbmc7XG5cdGhlYWRlcnM6IHtcblx0XHRBdXRob3JpemF0aW9uOiBzdHJpbmc7XG5cdFx0XCJDb250ZW50LVR5cGVcIj86IHN0cmluZztcblx0fTtcblx0Ym9keT86IHN0cmluZztcblx0c2lnbmFsPzogQWJvcnRTaWduYWw7XG59O1xuXG5jb25zdCBlbmNvZGVWYWx1ZSA9ICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGBbJHt2YWx1ZS5tYXAoKGkpID0+IGBcIiR7ZW5jb2RlVmFsdWUoaSl9XCJgKS5qb2luKFwiLFwiKX1dYDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNsYXNzIFdyaWtlQ2xpZW50IHtcblx0c3RhdGljIGFzeW5jIGZvclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0XHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRcdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCwgdXNlcj8udXNlcklkKTtcblx0fVxuXG5cdEN1c3RvbUZpZWxkOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3M7XG5cdEZvbGRlcjogV3Jpa2VGb2xkZXJDbGFzcztcblx0UHJvamVjdDogV3Jpa2VQcm9qZWN0Q2xhc3M7XG5cdFNwYWNlOiBXcmlrZVNwYWNlQ2xhc3M7XG5cdFRhc2s6IFdyaWtlVGFza0NsYXNzO1xuXHRUYXNrVGVtcGxhdGU6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3M7XG5cdFZpZGVvQmF0Y2g6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcztcblx0V29ya2Zsb3c6IFdyaWtlV29ya0Zsb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsLFxuXHRcdHB1YmxpYyB1c2VySWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuXHQpIHtcblx0XHR0aGlzLkN1c3RvbUZpZWxkID0gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyh0aGlzKTtcblx0XHR0aGlzLkZvbGRlciA9IGNyZWF0ZUZvbGRlckNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuUHJvamVjdCA9IGNyZWF0ZVByb2plY3RDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlNwYWNlID0gY3JlYXRlU3BhY2VDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2sgPSBjcmVhdGVUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5UYXNrVGVtcGxhdGUgPSBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlZpZGVvQmF0Y2ggPSBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzKHRoaXMpO1xuXHRcdHRoaXMuV29ya2Zsb3cgPSBjcmVhdGVXb3JrRmxvd0NsYXNzKHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBmZXRjaDxUID0ge30+KFxuXHRcdHVybDogc3RyaW5nLFxuXHRcdG1ldGhvZDogc3RyaW5nLFxuXHRcdGRhdGE/OiBvYmplY3Rcblx0KTogUHJvbWlzZTxUPiB7XG5cdFx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0XHRjb25zdCBjb25maWc6IEZldGNoQ29uZmlnID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jcmVkZW50aWFscy5hY2Nlc3NUb2tlbn1gLFxuXHRcdFx0fSxcblx0XHRcdHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG5cdFx0fTtcblxuXHRcdGlmIChkYXRhICYmIGNvbmZpZy5oZWFkZXJzKSB7XG5cdFx0XHRjb25maWcuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG5cdFx0XHRcdFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdFx0T2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHRcdHBhcmFtcy5zZXQoa2V5LCBlbmNvZGVWYWx1ZSh2YWx1ZSkpXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25maWcuYm9keSA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKFwiV1JJS0UgUmVxdWVzdDogXCIsIHVybCwgbWV0aG9kLCBjb25maWcuYm9keSwgZGF0YSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgMTAwMDApO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZyk7XG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiR290IFdSSUtFIFJlc3BvbnNlOiBcIiwganNvbik7XG5cblx0XHRpZiAoanNvbi5lcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGpzb24uZXJyb3JEZXNjcmlwdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpzb24gYXMgVDtcblx0fVxuXG5cdGdldDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIHBhcmFtczogb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGAke0Jhc2VVUkx9JHtwYXRofWApO1xuXG5cdFx0T2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4odXJsLnRvU3RyaW5nKCksIFwiR0VUXCIpO1xuXHR9XG5cblx0cG9zdDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIGRhdGE6IG9iamVjdCA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4oYCR7QmFzZVVSTH0ke3BhdGh9YCwgXCJQT1NUXCIsIGRhdGEpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBDdXN0b21GaWVsZFJhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxudHlwZSBDdXN0b21GaWVsZFJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IEN1c3RvbUZpZWxkUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRDbGFzcyA9IHtcblx0bmV3IChyYXc6IEN1c3RvbUZpZWxkUmF3KTogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xuXG5cdGZyb21JZHM6IChpZDogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZUN1c3RvbUZpZWxkQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8Q3VzdG9tRmllbGRSZXNwb25zZT4oXG5cdFx0XHRcdGBjdXN0b21maWVsZHMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHJhdykgPT4gbmV3IENscyhyYXcpKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgcmF3OiBDdXN0b21GaWVsZFJhdztcblxuXHRcdGNvbnN0cnVjdG9yKHJhdzogQ3VzdG9tRmllbGRSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gcmF3O1xuXHRcdH1cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXHRcdGdldCB0eXBlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50eXBlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFByb2plY3RJbmZvUmF3ID0ge1xuXHRvd25lcklkOiBzdHJpbmc7XG59O1xuXG50eXBlIEZvbGRlclJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cdGNoaWxkSWRzPzogc3RyaW5nW107XG5cdHBhcmVudElkcz86IHN0cmluZ1tdOyAvL29ubHkgcHJlc2VudCBpZiB0aGUgZm9sZGVyIGlzIGZldGNoZWQgYnkgaWQuLi5cbn07XG5cbnR5cGUgVHJlZVJlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IEZvbGRlclJhd1tdO1xufTtcblxudHlwZSBGb2xkZXJTYXZlQ29uZmlnID0ge1xuXHRwYXJlbnRGb2xkZXJJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IEZvbGRlclNhdmVDb25maWcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cblx0Z2V0UGFyZW50Rm9sZGVyOiAoKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRnZXRDaGlsZEZvbGRlcnM6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZmluZENvbmZpZ0ZvbGRlcjogKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VGb2xkZXJDbGFzcyB7XG5cdG5ldyAocmF3OiBGb2xkZXJSYXcpOiBXcmlrZUZvbGRlckluc3RhbmNlO1xuXG5cdGZyb21TcGFjZTogKFxuXHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT5cblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21JRHM6IChpZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21QZXJtYUxpbms6IChpZDogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRjcmVhdGU6IChcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3XG5cdCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZUZvbGRlckNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlRm9sZGVyQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VGb2xkZXJJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21TcGFjZShcblx0XHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgL3NwYWNlcy8ke3NwYWNlSWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHRwYXJhbXNcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tSURzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsobGluazogc3RyaW5nKTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0cmVlID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFwiZm9sZGVyc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluazogbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSB0cmVlLmRhdGFbMF07XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoZm9sZGVyKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgY3JlYXRlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0XHQpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QgfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IEZvbGRlclJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0XHRnZXQgZGVzY3JpcHRpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuZGVzY3JpcHRpb247XG5cdFx0fVxuXHRcdGdldCBwcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnByb2plY3Q7XG5cdFx0fVxuXHRcdGdldCBjaGlsZElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jaGlsZElkcztcblx0XHR9XG5cdFx0Z2V0IHBhcmVudElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wYXJlbnRJZHM7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IEZvbGRlclNhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxGb2xkZXJSYXc+KFxuXHRcdFx0XHRgZm9sZGVyLyR7Y29uZmlnLnBhcmVudEZvbGRlcklkfS9mb2xkZXJzYCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8/IFwiXCIsXG5cdFx0XHRcdFx0cHJvamVjdDogdGhpcy5wcm9qZWN0ID8/IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHJlc3A7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcGFyZW50Rm9sZGVyOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldFBhcmVudEZvbGRlcigpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5wYXJlbnRJZHMgfHwgdGhpcy5wYXJlbnRJZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBwYXJlbnRcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LkZvbGRlci5mcm9tSURzKFt0aGlzLnBhcmVudElkc1swXV0pO1xuXG5cdFx0XHRcdHJldHVybiByZXNwWzBdO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5wYXJlbnRGb2xkZXIgPSB0aGlzLnBhcmVudEZvbGRlciA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnRGb2xkZXI7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjaGlsZEZvbGRlcnM6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB8IHVuZGVmaW5lZDtcblx0XHRhc3luYyBnZXRDaGlsZEZvbGRlcnMoKSB7XG5cdFx0XHRjb25zdCBsb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hpbGRJZHMpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHN1YiBmb2xkZXJzXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGNsaWVudC5Gb2xkZXIuZnJvbUlEcyh0aGlzLmNoaWxkSWRzKTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuY2hpbGRGb2xkZXJzID0gdGhpcy5jaGlsZEZvbGRlcnMgPz8gbG9hZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGRGb2xkZXJzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgY29uZmlnRm9sZGVyQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0UHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD5cblx0XHQ+KCk7XG5cdFx0Ly9Mb29rIGZvciBhIGZvbGRlciB0aGF0IGlzIGEgZGlyZWN0IGNoaWxkIG9mIHRoaXMgZm9sZGVyLCBpZiBpdHMgbm90IHRoZXJlIHN0YXJ0IGxvb2tpbmcgdXAgXlxuXHRcdGFzeW5jIGZpbmRDb25maWdGb2xkZXIobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRjb25zdCBmaW5kID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IGF3YWl0IHRoaXMuZ2V0Q2hpbGRGb2xkZXJzKCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoY2hpbGQudGl0bGUgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjaGlsZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLmdldFBhcmVudEZvbGRlcigpO1xuXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuZmluZENvbmZpZ0ZvbGRlcihuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghdGhpcy5jb25maWdGb2xkZXJDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0dGhpcy5jb25maWdGb2xkZXJDYWNoZS5zZXQobmFtZSwgZmluZCgpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gYXdhaXQgdGhpcy5jb25maWdGb2xkZXJDYWNoZS5nZXQobmFtZSk7XG5cblx0XHRcdHJldHVybiBmb2xkZXIgPz8gbnVsbDtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFByb2plY3RSYXcgPSB7XG5cdGlkPzogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0SW5zdGFuY2UgPSB7XG5cdGltcG9ydENTVihcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpOiBQcm9taXNlPFdyaWtlUHJvamVjdEluc3RhbmNlPjtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvamVjdENsYXNzID0ge1xuXHRuZXcgKHJhdzogUHJvamVjdFJhdywgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xuXG5cdGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBwYXJlbnQ6IFdyaWtlRm9sZGVySW5zdGFuY2UpOiBXcmlrZVByb2plY3RJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlUHJvamVjdENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdENsaWVudCBpbXBsZW1lbnRzIFdyaWtlUHJvamVjdEluc3RhbmNlIHtcblx0XHRzdGF0aWMgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RDbGllbnQoeyB0aXRsZSB9LCBwYXJlbnQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlIHJhdzogUHJvamVjdFJhdyxcblx0XHRcdHByaXZhdGUgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCkge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0Q2xpZW50PiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLnZpZGVvcy5wdXNoKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoKSA6IHRoaXMuY3JlYXRlKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdXBkYXRlIFByb2plY3RzIChub3QgaW1wbGVtZW50ZWQpXCIpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYXN5bmMgY3JlYXRlKCkge1xuXHRcdFx0aWYgKCFjbGllbnQudXNlcklkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgaWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5wYXJlbnQ/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHBhcmVudCBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVGb2xkZXIgPSBhd2FpdCB0aGlzLnBhcmVudD8uZmluZENvbmZpZ0ZvbGRlcihcblx0XHRcdFx0XCJ0ZW1wbGF0ZXNcIlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF0ZW1wbGF0ZUZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmluZCB0ZW1wbGF0ZSBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFByb21pc2U8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT5cblx0XHRcdD4oKTtcblx0XHRcdGNvbnN0IGZpbmRUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZUNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdHRlbXBsYXRlQ2FjaGUuc2V0KFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKG5hbWUsIHRlbXBsYXRlRm9sZGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVDYWNoZS5nZXQobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gYXdhaXQgY2xpZW50LkZvbGRlci5jcmVhdGUodGhpcy50aXRsZSwgXCJcIiwge1xuXHRcdFx0XHRvd25lcklkOiBjbGllbnQudXNlcklkLFxuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IHByb2plY3Quc2F2ZSh7IHBhcmVudEZvbGRlcklkOiB0aGlzLnBhcmVudC5pZCB9KTtcblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyOiBwcm9qZWN0IH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFNwYWNlUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxudHlwZSBTcGFjZVJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFNwYWNlUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlQ2xhc3MgPSB7XG5cdG5ldyAocmF3OiBTcGFjZVJhdyk6IFdyaWtlU3BhY2VJbnN0YW5jZTtcblxuXHRnZXRBbGw6ICgpID0+IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNlQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlU3BhY2VDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVNwYWNlQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VTcGFjZUluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFNwYWNlUmVzcG9uc2U+KFwiL3NwYWNlc1wiKTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZVNwYWNlQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogU3BhY2VSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcblxuY29uc3QgU2F2ZUJsYWNrTGlzdCA9IFtcblx0XCJhY2NvdW50SWRcIixcblx0XCJjcmVhdGVkRGF0ZVwiLFxuXHRcInVwZGF0ZWREYXRlXCIsXG5cdFwicGVybWFsaW5rXCIsXG5cdFwic2NvcGVcIixcblx0XCJwcmlvcml0eVwiLFxuXHRcImRhdGVzXCIsXG5dO1xuXG50eXBlIEN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBUYXNrUmF3ID0ge1xuXHRpZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHBhcmVudHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107XG5cdHN1cGVyVGFza3M/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrSWRzPzogc3RyaW5nW107XG5cdHN1YlRhc2tJZHM/OiBzdHJpbmdbXTtcblx0YWNjb3VudElkPzogc3RyaW5nW107XG5cdGNyZWF0ZWREYXRlPzogc3RyaW5nO1xuXHR1cGRhdGVkRGF0ZT86IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzSWQ/OiBzdHJpbmc7XG5cdHBlcm1hbGluaz86IHN0cmluZztcblx0c2NvcGU/OiBzdHJpbmc7XG5cdHByaW9yaXR5Pzogc3RyaW5nO1xuXHRkYXRlcz86IGFueTtcblx0ZWZmb3J0QWxsb2NhdGlvbj86IGFueTtcblx0YmlsbGluZ1R5cGU/OiBhbnk7XG5cdGZpbmFuY2U/OiBhbnk7XG5cdHNoYXJlZElkcz86IGFueTtcblx0cmVzcG9uc2libGVJZHM/OiBhbnk7XG5cdGN1c3RvbUZpZWxkcz86IEN1c3RvbUZpZWxkSW5zdGFuY2VbXTtcbn0gJiB7fTtcblxuZXhwb3J0IHR5cGUgVGFza1Jlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IFRhc2tSYXdbXTtcbn07XG5cbnR5cGUgVGFza1NhdmVDb25maWcgPSB7XG5cdGZvbGRlcj86IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0luc3RhbmNlIHtcblx0cmF3OiBUYXNrUmF3IHwgdW5kZWZpbmVkO1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwYXJlbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuXHRhZGRTdWJUYXNrczogKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSA9PiB2b2lkO1xuXHRzZXRTdXBlclRhc2s6ICh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkgPT4gdm9pZDtcblxuXHRnZXRTYXZlRGF0YTogKCkgPT4gVGFza1JhdztcblxuXHRzYXZlOiAoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tDbGFzczxUID0gV3Jpa2VUYXNrSW5zdGFuY2U+IHtcblx0bmV3ICh0YXNrOiBUYXNrUmF3KTogVDtcblxuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21UaXRsZTogKHRpdGxlOiBzdHJpbmcsIGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSkgPT4gUHJvbWlzZTxUPjtcblxuXHRmcm9tUmF3OiAodGFzazogVGFza1JhdykgPT4gVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VUYXNrQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rPFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCBwZXJtYWxpbms6IHN0cmluZyk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluaywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGU8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KFxuXHRcdFx0dGhpczogVCxcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdzxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4odGhpczogVCwgdGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVRhc2tDbGllbnQodGFzaykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHRcdH1cblxuXHRcdHJhdzogVGFza1JhdztcblxuXHRcdHByaXZhdGUgc3VwZXJUYXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB8IHVuZGVmaW5lZDtcblx0XHRwcml2YXRlIHN1YlRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHR0aGlzLnJhdyA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXG5cdFx0Z2V0IHRpdGxlKCk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmVudHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhZGRTdWJUYXNrcyh0YXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSkge1xuXHRcdFx0dGFza3MuZm9yRWFjaCgodCkgPT4gdC5zZXRTdXBlclRhc2sodGhpcykpO1xuXG5cdFx0XHR0aGlzLnN1YlRhc2tzID0gWy4uLnRoaXMuc3ViVGFza3MsIC4uLnRhc2tzXTtcblx0XHR9XG5cblx0XHRzZXRTdXBlclRhc2sodGFzazogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdHRoaXMuc3VwZXJUYXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXRTYXZlRGF0YSgpOiBUYXNrUmF3IHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIHBhcmVudHMsIC4uLmV4dHJhRGF0YSB9ID0gdGhpcy5yYXc7XG5cdFx0XHRjb25zdCBkYXRhID0geyAuLi5leHRyYURhdGEgfSBhcyBUYXNrUmF3O1xuXG5cdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0ZGF0YS50aXRsZSA9IHRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFyZW50cykge1xuXHRcdFx0XHRkYXRhLnBhcmVudHMgPSBwYXJlbnRzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdXBlclRhc2s/LmlkKSB7XG5cdFx0XHRcdGRhdGEuc3VwZXJUYXNrcyA9IFt0aGlzLnN1cGVyVGFzay5pZF07XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHByb3Agb2YgU2F2ZUJsYWNrTGlzdCkge1xuXHRcdFx0XHRkZWxldGUgZGF0YVtwcm9wIGFzIGtleW9mIFRhc2tSYXddO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoY29uZmlnKSA6IHRoaXMuY3JlYXRlKGNvbmZpZyk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgeyBmb2xkZXIgfSA9IGNvbmZpZztcblxuXHRcdFx0aWYgKCFmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGUgYSBsb2NhdGlvbiB0byBzYXZlIGEgbmV3IHRhc2sgdG8uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHQuLi50aGlzLmdldFNhdmVEYXRhKCksXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoZm9sZGVyPy5pZCkge1xuXHRcdFx0XHRwYXlsb2FkLnBhcmVudHMgPSBbZm9sZGVyLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PFRhc2tSZXNwb25zZT4oXG5cdFx0XHRcdGBmb2xkZXJzLyR7Zm9sZGVyLmlkfS90YXNrc2AsXG5cdFx0XHRcdGZpeFBheWxvYWQocGF5bG9hZCBhcyB7fSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHRhc2sgPSByZXNwLmRhdGFbMF07XG5cblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgU3ViIFRhc2tzOiBcIiwgdGhpcy5zdWJUYXNrcy5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgc3ViVGFzayBvZiB0aGlzLnN1YlRhc2tzKSB7XG5cdFx0XHRcdGF3YWl0IHN1YlRhc2suc2F2ZShjb25maWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgdXBkYXRlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1cGRhdGUgdGFza3NcIik7XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBQYXlsb2FkS2V5TWFwID0ge1xuXHRzaGFyZWRJZHM6IFwic2hhcmVkc1wiLFxuXHRyZXNwb25zaWJsZUlkczogXCJyZXNwb25zaWJsZXNcIixcblx0Y3VzdG9tU3RhdHVzSWQ6IFwiY3VzdG9tU3RhdHVzXCIsXG59O1xuXG5mdW5jdGlvbiBmaXhQYXlsb2FkKHBheWxvYWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcblx0Y29uc3QgbmV3UGF5bG9hZCA9IHsgLi4ucGF5bG9hZCB9O1xuXG5cdGZvciAobGV0IFtrZXksIGZpeF0gb2YgT2JqZWN0LmVudHJpZXMoUGF5bG9hZEtleU1hcCkpIHtcblx0XHRpZiAobmV3UGF5bG9hZFtrZXldKSB7XG5cdFx0XHRuZXdQYXlsb2FkW2ZpeF0gPSBuZXdQYXlsb2FkW2tleV07XG5cdFx0XHRkZWxldGUgbmV3UGF5bG9hZFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdQYXlsb2FkO1xufVxuXG5jb25zdCBGaWVsZHMgPSBbXG5cdFwicGFyZW50SWRzXCIsXG5cdFwiZGVzY3JpcHRpb25cIixcblx0XCJjdXN0b21GaWVsZHNcIixcblx0XCJzaGFyZWRJZHNcIixcblx0XCJyZXNwb25zaWJsZUlkc1wiLFxuXHRcInN1YlRhc2tJZHNcIixcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluazogc3RyaW5nLCBjbGllbnQ6IFdyaWtlQ2xpZW50KSB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzYCwge1xuXHRcdHBlcm1hbGluayxcblx0XHRmaWVsZHM6IEZpZWxkcyxcblx0fSk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21JZHMoXG5cdGlkczogc3RyaW5nW10sXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFByb21pc2U8VGFza1Jhd1tdPiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzLyR7aWRzLmpvaW4oXCIsXCIpfWApO1xuXG5cdHJldHVybiByZXNwLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tVGl0bGUoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3PiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCwge1xuXHRcdHRpdGxlLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRpZiAocmVzcC5kYXRhLmxlbmd0aCA+IDEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3VuZCBtdWx0aXBsZSB0YXNrc1wiKTtcblx0fVxuXG5cdHJldHVybiByZXNwLmRhdGFbMF07XG59XG4iLCAiaW1wb3J0IE11c3RhY2hlIGZyb20gXCJtdXN0YWNoZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7XG5cdFdyaWtlVGFza0NsYXNzLFxuXHRXcmlrZVRhc2tJbnN0YW5jZSxcblx0VGFza1Jhdyxcblx0VGFza1Jlc3BvbnNlLFxufSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5pbXBvcnQgeyByYXdGcm9tVGl0bGUsIHJhd0Zyb21JZHMgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbG9uZURhdGEgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIEN1c3RvbUZpZWxkVGVtcGxhdGUgPSB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSBleHRlbmRzIFdyaWtlVGFza0luc3RhbmNlIHtcblx0Y2xvbmU6IChcblx0XHRkYXRhOiBDbG9uZURhdGEsXG5cdFx0cGFyZW50PzogV3Jpa2VUYXNrSW5zdGFuY2Vcblx0KSA9PiBQcm9taXNlPFdyaWtlVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzXG5cdGV4dGVuZHMgV3Jpa2VUYXNrQ2xhc3M8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT4ge31cblxuZnVuY3Rpb24gZmlsbEluVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGF0YTogQ2xvbmVEYXRhKTogc3RyaW5nIHtcblx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0cmV0dXJuIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBUYXNrVGVtcGxhdGVDbGllbnRcblx0XHRleHRlbmRzIGNsaWVudC5UYXNrXG5cdFx0aW1wbGVtZW50cyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlXG5cdHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbUlkcyhpZHMsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiByYXcubWFwKChyKSA9PiBuZXcgQ2xzKHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdHBlcm1hbGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oXCIvdGFza3NcIiwge1xuXHRcdFx0XHRwZXJtYWxpbmssXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyZXNwLmRhdGFbMF0pO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21UaXRsZSh0aXRsZSwgZm9sZGVyLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21SYXcodGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBUYXNrVGVtcGxhdGVDbGllbnQodGFzayk7XG5cdFx0fVxuXG5cdFx0VGVtcGxhdGVGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiXTtcblx0XHRMaXRlcmFsRmllbGRzOiAoa2V5b2YgVGFza1JhdylbXSA9IFtcblx0XHRcdFwic2hhcmVkSWRzXCIsXG5cdFx0XHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFx0XHRcImN1c3RvbVN0YXR1c0lkXCIsXG5cdFx0XTtcblxuXHRcdGFzeW5jIGNsb25lKGRhdGE6IENsb25lRGF0YSwgc3VwZXJUYXNrPzogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmF3ID0gdGhpcy5yYXcgPz8gKHt9IGFzIFRhc2tSYXcpO1xuXG5cdFx0XHRjb25zdCB0YXNrUmF3ID0ge30gYXMgVGFza1Jhdztcblx0XHRcdGNvbnN0IHNldCA9IChrZXk6IGtleW9mIFRhc2tSYXcsIHZhbDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHR0YXNrUmF3W2tleV0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PlxuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gZmlsbEluVGVtcGxhdGUodGVtcGxhdGVSYXdba2V5XSwgZGF0YSkpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdFwiU2V0dGluZyBMaXRlcmFsIEZpZWxkOiBcIixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0ZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV1cblx0XHRcdFx0KTtcblx0XHRcdFx0c2V0KGtleSwgZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChkYXRhLnRpdGxlUHJlZml4KSB7XG5cdFx0XHRcdHRhc2tSYXcudGl0bGUgPSBgJHtkYXRhLnRpdGxlUHJlZml4fSAke3Rhc2tSYXcudGl0bGV9YDtcblx0XHRcdH1cblxuXHRcdFx0dGFza1Jhdy50aXRsZSA9IHRhc2tSYXcudGl0bGVcblx0XHRcdFx0LnJlcGxhY2UoXCJURU1QTEFURVwiLCBcIlwiKVxuXHRcdFx0XHQucmVwbGFjZSgvXFwgXFwgLywgXCIgXCIpO1xuXG5cdFx0XHRjb25zdCBjdXN0b21GaWVsZHMgPSAoYXdhaXQgdGhpcy5nZXRDdXN0b21GaWVsZHMoKSkgPz8ge307XG5cblx0XHRcdGZvciAobGV0IFtuYW1lLCBmaWVsZF0gb2YgT2JqZWN0LmVudHJpZXMoY3VzdG9tRmllbGRzKSkge1xuXHRcdFx0XHR0YXNrUmF3LmN1c3RvbUZpZWxkcyA9IFtcblx0XHRcdFx0XHQuLi4odGFza1Jhdy5jdXN0b21GaWVsZHMgPz8gW10pLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlkOiBmaWVsZC5kZWZpbml0aW9uLmlkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbbmFtZV0gPz8gZmllbGQudmFsdWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGFzayA9IGNsaWVudC5UYXNrLmZyb21SYXcodGFza1Jhdyk7XG5cblx0XHRcdGlmIChzdXBlclRhc2spIHtcblx0XHRcdFx0dGFzay5zZXRTdXBlclRhc2soc3VwZXJUYXNrKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3ViVGFza1RlbXBsYXRlcyA9ICF0ZW1wbGF0ZVJhdy5zdWJUYXNrSWRzPy5sZW5ndGhcblx0XHRcdFx0PyBbXVxuXHRcdFx0XHQ6IGF3YWl0IFRhc2tUZW1wbGF0ZUNsaWVudC5mcm9tSWRzKHRlbXBsYXRlUmF3LnN1YlRhc2tJZHMpO1xuXG5cdFx0XHRjb25zdCBjbG9uZURhdGEgPSB7XG5cdFx0XHRcdC4uLmRhdGEsXG5cdFx0XHRcdHRpdGxlUHJlZml4OiB0YXNrUmF3LnRpdGxlLFxuXHRcdFx0fSBhcyBDbG9uZURhdGE7XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cblx0XHRcdGNvbnN0IHN1YlRhc2tzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRcdHN1YlRhc2tUZW1wbGF0ZXMubWFwKChzKSA9PiBzLmNsb25lKGNsb25lRGF0YSwgdGFzaykpXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXNrLmFkZFN1YlRhc2tzKHN1YlRhc2tzKTtcblxuXHRcdFx0cmV0dXJuIHRhc2s7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBDdXN0b21GaWVsZHNMb2FkZXI6XG5cdFx0XHR8IFByb21pc2U8UmVjb3JkPHN0cmluZywgQ3VzdG9tRmllbGRUZW1wbGF0ZT4gfCBudWxsPlxuXHRcdFx0fCB1bmRlZmluZWQ7XG5cdFx0Ly9UT0RPOiBjYWNoZSB0aGlzIHJldHVyblxuXHRcdHByaXZhdGUgYXN5bmMgZ2V0Q3VzdG9tRmllbGRzKCk6IFByb21pc2U8UmVjb3JkPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0eyB2YWx1ZTogc3RyaW5nOyBkZWZpbml0aW9uOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfVxuXHRcdD4gfCBudWxsPiB7XG5cdFx0XHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgY3VzdG9tRmllbGRzIH0gPSB0aGlzLnJhdyA/PyB7fTtcblxuXHRcdFx0XHRpZiAoIWN1c3RvbUZpZWxkcyB8fCBjdXN0b21GaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgQ3VzdG9tIEZpZWxkczogXCIsIGN1c3RvbUZpZWxkcyk7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gYXdhaXQgY2xpZW50LkN1c3RvbUZpZWxkLmZyb21JZHMoXG5cdFx0XHRcdFx0Y3VzdG9tRmllbGRzLm1hcCgoYykgPT4gYy5pZClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gZmllbGRzLnJlZHVjZSgoYWNjLCBmaWVsZCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3VzdG9tRmllbGRzLmZpbmQoXG5cdFx0XHRcdFx0XHQoYykgPT4gYy5pZCA9PT0gZmllbGQuaWRcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnR5cGUgIT09IFwic3RyaW5nXCIgfHwgIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdFx0XHRbZmllbGQudGl0bGVdOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBpbnN0YW5jZS52YWx1ZSxcblx0XHRcdFx0XHRcdFx0ZGVmaW5pdGlvbjogZmllbGQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sIHt9KTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyID0gdGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPz8gbG9hZGVyKCk7XG5cblx0XHRcdHJldHVybiB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlcjtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuXG50eXBlIENTVlJvdyA9IHsgdGVtcGxhdGU6IHN0cmluZyB9ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBWaWRlb0JhdGNoU2F2ZUNvbmZpZyA9IHtcblx0dGVtcGxhdGVGb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cdGxvY2F0aW9uRm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRpbXBvcnRDU1Y6IChcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcblxuXHRzYXZlOiAoY29uZmlnOiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3Mge1xuXHRuZXcgKGNvbmZpZzogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KTogV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVByb2plY3RUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdGxpbms6IHN0cmluZ1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgY2xpZW50LlRhc2suZnJvbVBlcm1hTGluayhsaW5rKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RUYXNrQ2xpZW50KHsgdGFzayB9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHRhc2s6IFdyaWtlVGFza0luc3RhbmNlO1xuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoeyB0YXNrIH06IHsgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfSkge1xuXHRcdFx0dGhpcy50YXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIGFkZFZpZGVvKHZpZGVvOiBDU1ZSb3cpIHtcblx0XHRcdHRoaXMudmlkZW9zLnB1c2godmlkZW8pO1xuXHRcdH1cblxuXHRcdGFzeW5jIGltcG9ydENTVihcblx0XHRcdGZpbGU6IEZpbGUsXG5cdFx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0XHQpOiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjc3YucGFyc2VTdHJpbmcodGV4dCwgb3B0aW9ucylcblx0XHRcdFx0XHQub24oXCJlcnJvclwiLCAoZXJyKSA9PiByZWplY3QoZXJyKSlcblx0XHRcdFx0XHQub24oXCJkYXRhXCIsIChyb3c6IENTVlJvdykgPT4gdGhpcy5hZGRWaWRlbyhyb3cpKVxuXHRcdFx0XHRcdC5vbihcImVuZFwiLCAoKSA9PiBmdWxmaWxsKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoeyB0ZW1wbGF0ZUZvbGRlciwgbG9jYXRpb25Gb2xkZXIgfTogVmlkZW9CYXRjaFNhdmVDb25maWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIFZpZGVvIEJhdGNoOiBcIiwgdGhpcy52aWRlb3MubGVuZ3RoKTtcblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IGxvY2F0aW9uRm9sZGVyO1xuXG5cdFx0XHRpZiAoIWZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHZpZGVvIG9mIHRoaXMudmlkZW9zLnJldmVyc2UoKSkge1xuXHRcdFx0XHRjb25zdCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZU5hbWUsIC4uLnByb3BlcnRpZXMgfSA9IHZpZGVvO1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGZpbmRUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpO1xuXG5cdFx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCB0ZW1wbGF0ZT8uY2xvbmUocHJvcGVydGllcywgdGhpcy50YXNrKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgV29ya2Zsb3dSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbnR5cGUgV29ya2Zsb3dSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBXb3JrZmxvd1Jhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VXb3JrRmxvd0luc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c2VzOiBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlW107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBXb3JrZmxvd1Jhdyk6IFdyaWtlV29ya0Zsb3dJbnN0YW5jZTtcblxuXHRmcm9tTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlV29ya0Zsb3dJbnN0YW5jZT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya0Zsb3dDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VXb3JrRmxvd0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlV29ya2Zsb3dDbGllbnQgaW1wbGVtZW50cyBXcmlrZVdvcmtGbG93SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFdvcmtmbG93UmVzcG9uc2U+KFwid29ya2Zsb3dzXCIpO1xuXHRcdFx0Y29uc3QgcmF3ID0gcmVzcC5kYXRhLmZpbmQoKGQpID0+IGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRcdGlmICghcmF3KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIldvcmtmbG93IG5vdCBmb3VuZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVdvcmtmbG93Q2xpZW50KHJhdyk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IFdvcmtmbG93UmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5uYW1lO1xuXHRcdH1cblx0XHRnZXQgY3VzdG9tU3RhdHVzZXMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuY3VzdG9tU3RhdHVzZXM7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRBY3Rpb25GdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdExpbmtzRnVuY3Rpb24sXG5cdHJlZGlyZWN0LFxuXHR1c2VGZXRjaGVyLFxuXHRGb3JtLFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB0eXBlIHsgQWN0dWFsRmlsZU9iamVjdCB9IGZyb20gXCJmaWxlcG9uZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IElucHV0QnJlYWRDcnVtYiBmcm9tIFwifi9jb21wb25lbnRzL0lucHV0QnJlYWRDcnVtYlwiO1xuaW1wb3J0IE9uTW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9Pbk1vdW50XCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5cbmltcG9ydCB0eXBlIHsgU3BhY2VzUmVzcG9uc2UsIFNwYWNlIH0gZnJvbSBcIi4vc3BhY2VzXCI7XG5pbXBvcnQgdHlwZSB7IENsaWVudFJlc3BvbnNlLCBDbGllbnQgfSBmcm9tIFwiLi9jbGllbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZpbGVwb25kQF40L2Rpc3QvZmlsZXBvbmQuY3NzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB3cmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInByb2plY3QtZmlsZVwiKSBhcyBGaWxlO1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc29sZS5sb2coXCJHb3QgRm9ybSBEYXRhOiBcIiwgdGV4dCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuXHRjb25zdCBzcGFjZXMgPSB1c2VGZXRjaGVyPFNwYWNlc1Jlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkU3BhY2VzID0gdXNlRmV0Y2hlckxvYWQoc3BhY2VzLCBcIi9wcm9qZWN0cy9zcGFjZXNcIik7XG5cdGNvbnN0IFtzcGFjZSwgc2V0U3BhY2VdID0gdXNlU3RhdGU8U3BhY2UgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCBjbGllbnRzID0gdXNlRmV0Y2hlcjxDbGllbnRSZXNwb25zZT4oKTtcblx0Y29uc3QgbG9hZENsaWVudHMgPSB1c2VGZXRjaGVyTG9hZChcblx0XHRjbGllbnRzLFxuXHRcdGAvcHJvamVjdHMvY2xpZW50cz9zcGFjZUlkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNwYWNlPy5pZCA/PyBcIlwiKX1gXG5cdCk7XG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZTxDbGllbnQgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCB7IGhhc1ZhbHVlOiBoYXNQcm9qZWN0TmFtZSwgcHJvcHM6IHByb2plY3ROYW1lUHJvcHMgfSA9XG5cdFx0dXNlQnVmZmVyZWRJbnB1dCgpO1xuXG5cdGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8QWN0dWFsRmlsZU9iamVjdFtdIHwgdW5kZWZpbmVkPihcblx0XHR1bmRlZmluZWRcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiTmV3IFByb2plY3RcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8SW5wdXRCcmVhZENydW1iPlxuXHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRTcGFjZXN9PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c3BhY2U/LmlkfSBuYW1lPVwic3BhY2VJZFwiIC8+XG5cdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRTcGFjZShvKX1cblx0XHRcdFx0XHRcdFx0bG9hZGluZz17c3BhY2VzLnN0YXRlID09PSBcImxvYWRpbmdcIn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17c3BhY2VzLmRhdGE/LnNwYWNlcyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhvKSA9PiBvLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3BhY2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L09uTW91bnQ+XG5cdFx0XHRcdFx0eyFzcGFjZSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8T25Nb3VudCBvbk1vdW50PXtsb2FkQ2xpZW50c30+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnQ/LmlkfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0c3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCIzMDBweFwiIH19XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2xpZW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgbykgPT4gc2V0Q2xpZW50KG8pfVxuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2NsaWVudHMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2NsaWVudHMuZGF0YT8uY2xpZW50cyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0aXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvLCB2KSA9PiBvLmlkID09PSB2LmlkfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wYXJhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2xpZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshY2xpZW50ID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcm9qZWN0IE5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRrZXk9XCJwcm9qZWN0XCJcblx0XHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17cHJvamVjdE5hbWVQcm9wc31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7IWhhc1Byb2plY3ROYW1lID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwcm9qZWN0LWZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0b3JlQXNGaWxlXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRcdG9udXBkYXRlZmlsZXM9eyhpdGVtcykgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEZpbGVzKGl0ZW1zLm1hcCgoZikgPT4gZi5maWxlKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdENyZWF0ZSBQcm9qZWN0XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0lucHV0QnJlYWRDcnVtYj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHVzZUZldGNoZXJMb2FkKFxuXHRmZXRjaGVyOiB7IGxvYWQ6ICh1cmw6IHN0cmluZykgPT4gdm9pZCB9ICYgRmV0Y2hlcixcblx0dXJsOiBzdHJpbmdcbikge1xuXHRyZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGlmICghZmV0Y2hlci5kYXRhICYmIGZldGNoZXIuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRmZXRjaGVyLmxvYWQodXJsKTtcblx0XHR9XG5cdH0sIFtmZXRjaGVyLCB1cmxdKTtcbn1cblxuZnVuY3Rpb24gdXNlQnVmZmVyZWRJbnB1dCgpIHtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZD4oKTtcblx0Y29uc3QgdGltZW91dFJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KCk7XG5cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbaGFzVmFsdWUsIHNldEhhc1ZhbHVlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0c2V0VmFsdWUoaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIik7XG5cblx0XHRpZiAodGltZW91dFJlZi5jdXJyZW50KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcblx0XHR9XG5cblx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUpKTtcblxuXHRcdFx0dGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcblx0XHR9LCA1MDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3Qgb25LZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIikpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiB7XG5cdFx0aGFzVmFsdWUsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0cmVmOiBpbnB1dFJlZixcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0b25LZXlQcmVzcyxcblx0XHR9LFxuXHR9O1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG50eXBlIElucHV0QnJlYWRDcnVtYlByb3BzID0ge1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQoR3JpZClgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRCcmVhZENydW1iKHsgY2hpbGRyZW4gfTogSW5wdXRCcmVhZENydW1iUHJvcHMpIHtcblx0Y29uc3QgY21wcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG5cdGNvbnN0IGJyZWFkY3J1bWJzID0gY21wcy5zbGljZSgwLCAtMSk7XG5cdGNvbnN0IGZvY3VzZWQgPSBjbXBzW2NtcHMubGVuZ3RoIC0gMV07XG5cblx0cmV0dXJuIChcblx0XHQ8R3JpZFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0cGFkZGluZz17Mn1cblx0XHRcdHN4PXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XG5cdFx0PlxuXHRcdFx0e2JyZWFkY3J1bWJzLm1hcCgoYywga2V5KSA9PiAoXG5cdFx0XHRcdDxHcmlkSXRlbSBpdGVtIHhzPXszfSBrZXk9e2BicmVhZGNydW1iLSR7a2V5fWB9PlxuXHRcdFx0XHRcdHtjfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSl9XG5cdFx0XHR7Zm9jdXNlZCA/IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cblx0XHRcdFx0XHR7Zm9jdXNlZH1cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvR3JpZD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgRmV0Y2hPbk1vdW50UHJvcHMgPSB7XG5cdG9uTW91bnQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbk1vdW50KHsgb25Nb3VudCwgY2hpbGRyZW4gfTogRmV0Y2hPbk1vdW50UHJvcHMpIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRvbk1vdW50KCk7XG5cdH0sIFtvbk1vdW50XSk7XG5cblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBTcGFjZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFNwYWNlc1Jlc3BvbnNlID0ge1xuXHRzcGFjZXM6IFNwYWNlW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdH1cblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBzcGFjZXMgPSBhd2FpdCBXcmlrZS5TcGFjZS5nZXRBbGwoKTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0c3BhY2VzOiBzcGFjZXMubWFwKChzKSA9PiAoeyBpZDogcy5pZCwgdGl0bGU6IHMudGl0bGUgfSkpLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiXCIsXG5cdFx0ZmFpbHVyZTogXCJcIixcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIHtMb2FkZXJGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge3JlZGlyZWN0LCB1c2VMb2FkZXJEYXRhfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7U2VydmljZX0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xuXG5cdC8vIGdldCBzZXNzaW9uIHVzZXJcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdC8vIFRPRE86IGltcG9ydGluZyBnb29nbGUgbGlrZSB0aGlzIGlzIHByb2JhYmx5IG5vdCB0aGUgYmVzdCBwcmFjdGljZSwgSSdsbCBoYXZlIHRvIGludmVzdGlnYXRlIHRvIGZpbmQgYSBiZXR0ZXIgb3B0aW9uXG5cdC8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvcGFnZXMvZ290Y2hhcyNzZXJ2ZXItY29kZS1pbi1jbGllbnQtYnVuZGxlc1xuXHQvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9kb2NzL2FwaS9xdWlja3N0YXJ0L25vZGVqc1xuXHRjb25zdCB7Z29vZ2xlfSA9IHJlcXVpcmUoJ2dvb2dsZWFwaXMnKTtcblx0Y29uc3QgdG9rZW4gPSAoYXdhaXQgdXNlci5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLmdvb2dsZSkpPy5hY2Nlc3NUb2tlbjtcblxuXHQvLyBDb2xsZWN0IFVSTCBwYXJhbWV0ZXJzIGFuZCBzZXQgZGVmYXVsdCB2YWx1ZXNcblx0Ly8gVE9ETzogaXMgdGhlcmUgYSBiZXR0ZXIgd2F5IHRvIGRlZmluZSBkZWZhdWx0IHZhbHVlcz9cblx0Y29uc3Qgc2VhcmNoID0gKG5ldyBVUkwocmVxdWVzdC51cmwpKS5zZWFyY2hQYXJhbXM7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHR1cmw6IHNlYXJjaC5nZXQoXCJ1cmxcIikgPz8gXCJcIixcblx0XHRzaGVldDogc2VhcmNoLmdldChcInNoZWV0XCIpICE9IFwiXCIgPyBzZWFyY2guZ2V0KFwic2hlZXRcIikgOiBcIk1hc3RlciBSZXZpZXcgVHJhY2tlclwiLFxuXHRcdHJvdzogc2VhcmNoLmdldChcInJvd1wiKSAhPSBcIlwiID8gc2VhcmNoLmdldChcInJvd1wiKSA6ICc1Jyxcblx0XHRjb2x1bW46IHNlYXJjaC5nZXQoXCJjb2x1bW5cIikgIT0gXCJcIiA/IHNlYXJjaC5nZXQoXCJjb2x1bW5cIikgOiAnSScsXG5cdFx0dGl0bGU6IFwiXCJcblxuXHR9XG5cblx0Ly8gY29sbGVjdCBsaXN0IG9mIHNjcmlwdCBEb2MgbGlua3MgZnJvbSB0aGUgVHJhY2tpbmcgRG9jdW1lbnRcblx0Y29uc3Qgc2hlZXRzID0gZ29vZ2xlLnNoZWV0cygndjQnKTtcblx0Y29uc3Qgc3ByZWFkc2hlZXQgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLmdldChcblx0XHR7XG5cdFx0XHQvLyBUT0RPOiB1c2UgdGhlIE9BVVRIIHRva2VuXG5cdFx0XHRhdXRoOiAnQUl6YVN5Qlc0aFZYLVIzRkF3T3RBT3RqU3ZQcVdzQnVZRENrWDFjJyxcblx0XHRcdC8vIG9hdXRoX3Rva2VuOiB0b2tlbixcblx0XHRcdHNwcmVhZHNoZWV0SWQ6IGdldElERnJvbVVSTChwYXJhbXMudXJsKSxcblx0XHRcdGluY2x1ZGVHcmlkRGF0YTogdHJ1ZSxcblx0XHRcdC8vIGV4OiBTaGVldE5hbWUhSTU6SVxuXHRcdFx0cmFuZ2VzOiBbYCR7cGFyYW1zLnNoZWV0fSEke3BhcmFtcy5jb2x1bW59JHtwYXJhbXMucm93fToke3BhcmFtcy5jb2x1bW59YF1cblx0XHR9XG5cdCk7XG5cdGNvbnN0IHNoZWV0RGF0YSA9IGNvbGxlY3RMaW5rc0Zyb21Db2x1bW4oc3ByZWFkc2hlZXQpXG5cdGNvbnN0IGxpbmtzID0gc2hlZXREYXRhLmxpbmtzLmZpbHRlcihTdHJpbmcpO1xuXHRwYXJhbXMudGl0bGUgPSBzaGVldERhdGEudGl0bGU7XG5cblx0Ly8gY29sbGVjdCB0aXRsZSBhbmQgdGV4dCBmcm9tIGVhY2ggb2YgdGhlIEdvb2dsZSBEb2NzIGxpbmtzXG5cdGNvbnN0IGRvY3MgPSBnb29nbGUuZG9jcygndjEnKTtcblx0bGV0IGZpbGVfdGV4dCA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZG9jdW1lbnQgPSBhd2FpdCBkb2NzLmRvY3VtZW50cy5nZXQoe1xuXHRcdFx0b2F1dGhfdG9rZW46IHRva2VuLFxuXHRcdFx0ZG9jdW1lbnRJZDogbGlua3NbaV1cblx0XHR9KTtcblx0XHRmaWxlX3RleHQucHVzaChleHRyYWN0VHJhbnNjcmlwdFRleHQoZG9jdW1lbnQpKTtcblx0fVxuXG5cdC8vIHJldHVybiB1c2VyIGRhdGEsIHNoZWV0IGRhdGEsIGFuZCBsaXN0IG9mIGZpbGVzXG5cdHJldHVybiB7dXNlcjogdXNlci51c2VySWQsIHNoZWV0RGF0YTogcGFyYW1zLCBmaWxlczogZmlsZV90ZXh0fTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgc3ByZWFkc2hlZXQgb3IgZG9jdW1lbnQgSUQgZnJvbSBhIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgdXJsIFRoZSBVUkwgdG8gY29sbGVjdCB0aGUgSUQgZnJvbS5cbiAqL1xuZnVuY3Rpb24gZ2V0SURGcm9tVVJMKHVybDogc3RyaW5nKSB7XG5cdHJldHVybiBuZXcgVVJMKHVybCkucGF0aG5hbWUuc3BsaXQoJy8nKVszXTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0cyBhbGwgaHlwZXJsaW5rcyBmcm9tIGEgY29sdW1uIHdpdGhpbiBhIGdpdmVuIHNoZWV0IGluIGEgZ2l2ZW4gc3ByZWFkc2hlZXQuXG4gKiBAcGFyYW0ge29iamVjdH0gIHJlc3BvbnNlICAgIFRoZSByZXNwb25zZSBmcm9tIHRoZSBHb29nbGUgU3ByZWFkc2hlZXQgQVBJIGNvbnRhaW5pbmcgdGhlIHNwcmVhZHNoZWV0IGRhdGEuXG4gKlxuICogQHJldHVybiB7W3N0cmluZ119IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0aXRsZSBvZiB0aGUgc3ByZWFkc2hlZXQsIGFuZCBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgbGlua3NcbiAqIGZvdW5kIGluIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXG4gKi9cbi8vIFRPRE86IHNob3VsZCBJIHVzZSBhIGRpZmZlcmVudCB0eXBlIGZvciByZXNwb25zZT9cbmZ1bmN0aW9uIGNvbGxlY3RMaW5rc0Zyb21Db2x1bW4ocmVzcG9uc2U6IGFueSkge1xuXHRjb25zdCB0aXRsZSA9IHJlc3BvbnNlLmRhdGEucHJvcGVydGllcy50aXRsZTtcblx0Y29uc3Qgcm93cyA9IHJlc3BvbnNlLmRhdGEuc2hlZXRzWzBdLmRhdGFbMF0ucm93RGF0YTtcblx0Y29uc3QgbGlua3M6IHN0cmluZ1tdID0gbmV3IEFycmF5KHJvd3MubGVuZ3RoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgcm93OiBzdHJpbmcgPSByb3dzW2ldLnZhbHVlc1swXS5oeXBlcmxpbms7XG5cdFx0aWYgKHJvdykge1xuXHRcdFx0bGlua3MucHVzaChnZXRJREZyb21VUkwocm93KSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7dGl0bGU6IHRpdGxlLCBsaW5rczogbGlua3N9O1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdGhlIHRleHQgY29udGVudCBmcm9tIGEgcGFyYWdyYXBoIGVsZW1lbnQgaW4gYSBHb29nbGUgRG9jcyByZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gIGVsZW1lbnQgVGhlIGVsZW1lbnQgd2l0aGluIGEgcGFyYWdyYXBoIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIFRoZSB0ZXh0IGNvbnRlbnQgZm91bmQgaW4gdGhlIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHJlYWRQYXJhZ3JhcGhFbGVtZW50KGVsZW1lbnQ6IGFueSkge1xuXHRjb25zdCB0ZXh0X3J1biA9IGVsZW1lbnQudGV4dFJ1bjtcblx0cmV0dXJuIGVsZW1lbnQ/LnRleHRSdW4/LmNvbnRlbnQgPz8gJyc7XG59XG5cbi8qKlxuICogQ29sbGVjdHMgdGhlIHRleHQgY29udGVudCBmcm9tIHRoZSBzZWNvbmQgY29sdW1uIGluIGEgc2NyaXB0IGRvY3VtZW50LlxuICogQHBhcmFtICByZXNwb25zZSBSZXNwb25zZSBvYmplY3QgZnJvbSBHb29nbGUgYXBpIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBvZiB0aGUgZG9jdW1lbnQsIGFuZCBhIHN0cmluZyBjb250YWluaW5nIHRoZSB0aXRsZSBhbmQgY2VsbCBjb250ZW50IG9mXG4gKiB0aGUgdGFibGUsIHNlcGFyYXRlZCBieSB0d28gbmV3IGxpbmVzLlxuICovXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNjcmlwdFRleHQocmVzcG9uc2U6IGFueSkge1xuXHQvLyBhc3N1bWUgdGhlIHRyYW5zY3JpcHQgdGV4dCBpcyBpbiB0aGUgc2Vjb25kIGNvbHVtblxuXHQvLyBUT0RPOiB0aGlzIG5lZWQgdG8gY2hlY2sgZm9yIGNvbHVtbiB0aXRsZXMgbW9yZSBpbnRlbGxpZ2VudGx5XG5cdGNvbnN0IGVsZW1lbnRzID0gcmVzcG9uc2UuZGF0YS5ib2R5LmNvbnRlbnQ7XG5cdGNvbnN0IGNvbHVtbkluZGV4OiBudW1iZXIgPSAxO1xuXHRsZXQgdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtZW50c1sxXS5wYXJhZ3JhcGguZWxlbWVudHNbMF0pO1xuXHR0ZXh0ICs9IHRpdGxlICsgJ1xcbic7XG5cdC8vIC0gLSAtIC0gLSAtIC0gLSAtIC1cblx0Zm9yIChjb25zdCB2YWx1ZSBvZiBlbGVtZW50cykge1xuXHRcdGlmICgndGFibGUnIGluIHZhbHVlKSB7XG5cdFx0XHRjb25zdCB0YWJsZSA9IHZhbHVlLnRhYmxlO1xuXHRcdFx0Zm9yIChjb25zdCByb3cgb2YgdGFibGUudGFibGVSb3dzKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSByb3cudGFibGVDZWxsc1tjb2x1bW5JbmRleF0uY29udGVudDtcblx0XHRcdFx0dGV4dCArPSBleHRyYWN0UGFyYWdyYXBoVGV4dChjZWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlxccyokKD86XFxyXFxuP3xcXG4pL2dtLCAnJykucmVwbGFjZSgvJFxcbi9nbSwgJ1xcblxcbicpO1xuXHRyZXR1cm4geyd0aXRsZSc6IHRpdGxlLCAndGV4dCc6IHRleHR9O1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIGFsbCB0ZXh0IGZyb20gYSBzdHJ1Y3R1cmFsIGVsZW1lbnQgZm91bmQgaW4gYSBHb29nbGUgRG9jcyByZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gIGVsZW1lbnQgVGhlIHN0cnVjdHVyYWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRleHQuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUgdGV4dCBmb3VuZCBpbiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFBhcmFncmFwaFRleHQoZWxlbWVudDogYW55KSB7XG5cdGxldCB0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB2YWx1ZSBvZiBlbGVtZW50KSB7XG5cdFx0Zm9yIChjb25zdCBlbGVtIG9mIHZhbHVlLnBhcmFncmFwaC5lbGVtZW50cykge1xuXHRcdFx0dGV4dCArPSByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBkb3dubG9hZCBsaW5rcyBmb3IgZWFjaCBHb29nbGUgRG9jcyB0ZXh0IGNvbGxlY3RlZCBieSB0aGUgc2VydmVyIGZyb20gdGhlIFRyYWNraW5nIFNoZWV0LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIEEgZG9jdW1lbnQgY29udGFpbmluZyBkb3dubG9hZCBsaW5rcyB0byBhbGwgdGhlIHRleHQgZG9jdW1lbnRzLCBhcyB3ZWxsIGFzIHNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluaXRpYWwgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHNnUmVzdWx0cygpIHtcblx0Ly8gY3JlYXRlIGRvd25sb2FkIGxpbmtzIGZvciBlYWNoIEdvb2dsZSBEb2NzIHRleHQgY29sbGVjdGVkIGJ5IHRoZSBzZXJ2ZXJcblx0Y29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcblx0bGV0IGZpbGVMaW5rcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0Y29uc3QgdGV4dCA9IGRhdGEuZmlsZXNbaV0udGV4dDtcblx0XHRjb25zdCB0aXRsZSA9IGRhdGEuZmlsZXNbaV0udGl0bGU7XG5cdFx0ZmlsZUxpbmtzLnB1c2goPGxpPjxhIGhyZWY9eydkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpfVxuXHRcdFx0XHRcdFx0XHQgIGRvd25sb2FkPXt0aXRsZX0+e3RpdGxlfTwvYT48L2xpPik7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlRlbGVwcm9tcHRlciBTY3JpcHQgR2VuZXJhdG9yIFJlc3VsdHM6XCI+XG5cdFx0XHQ8dWwgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDUwcHhcIn19PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5UcmFja2luZyBTaGVldDogPC9zdHJvbmc+e2RhdGEuc2hlZXREYXRhLnRpdGxlfTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPlNoZWV0OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEuc2hlZXR9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+Um93OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEucm93fTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPkNvbHVtbjogPC9zdHJvbmc+e2RhdGEuc2hlZXREYXRhLmNvbHVtbn08L2xpPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5Eb2N1bWVudHMgY3JlYXRlZDogPC9zdHJvbmc+e2RhdGEuZmlsZXMubGVuZ3RofTwvbGk+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PHVsIHN0eWxlPXt7bWFyZ2luOiBcIjBweCA1MHB4XCJ9fT5cblx0XHRcdFx0e2ZpbGVMaW5rc31cblx0XHRcdDwvdWw+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB7XG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcblx0dXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFVwbG9hZGVySGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRlckhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBiYXRjaCA9IGF3YWl0IFdyaWtlLlZpZGVvQmF0Y2guZnJvbVBlcm1hTGluayhcblx0XHRmb3JtRGF0YS5nZXQoXCJiYXRjaC10YXNrXCIpIGFzIHN0cmluZ1xuXHQpO1xuXG5cdGF3YWl0IGJhdGNoLmltcG9ydENTVihmb3JtRGF0YS5nZXQoXCJiYXRjaFwiKSBhcyBGaWxlLCB7IGhlYWRlcnM6IHRydWUgfSk7XG5cblx0YXdhaXQgYmF0Y2guc2F2ZSh7XG5cdFx0dGVtcGxhdGVGb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwidGVtcGxhdGUtZm9sZGVyXCIpIGFzIHN0cmluZ1xuXHRcdCksXG5cdFx0bG9jYXRpb25Gb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwibG9jYXRpb25cIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0fSk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0JhdGNoKCkge1xuXHRjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJVcGxvYWQgYSB2aWRlbyBiYXRjaCBDU1YgZmlsZTpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCIgPyAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjNyZW1cIiAvPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0bmFtZT1cInRlbXBsYXRlLWZvbGRlclwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiVGVtcGxhdGUgRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJiYXRjaC10YXNrXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJCYXRjaCBUYXNrIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJsb2NhdGlvblwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiYmF0Y2hcIiAvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRVcGxvYWRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBDb25uZWN0TG9hZGVyRGF0YSA9IHtcblx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuXHRyZXF1ZXN0LFxufSk6IFByb21pc2U8Q29ubmVjdExvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoYXNXcmlrZUNyZWQ6IEJvb2xlYW4oYXdhaXQgdXNlcj8uaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdCgpIHtcblx0Y29uc3QgeyBoYXNXcmlrZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8Q29ubmVjdExvYWRlckRhdGE+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkNvbm5lY3QgeW91ciBhY2NvdW50czpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL3dyaWtlXCIgbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0YXJ0SWNvbj17PEFkZEljb24gLz59XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtoYXNXcmlrZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIkNvbm5lY3RlZCB0byBXcmlrZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJDb25uZWN0IHRvIFdyaWtlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVmlkZW8gVG9vbGluZzpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2plY3RzL2NyZWF0ZVwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPk5ldyBQcm9qZWN0PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvdmlkZW8tYmF0Y2hcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5WaWRlbyBCYXRjaDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwidGFza3MvYXNzZXQtaW52ZW50b3J5XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+QXNzZXQgSW52ZW50b3J5PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvdHNnXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+VGVsZXByb21wdGVyIFNjcmlwdCBHZW5lcmF0b3I8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBHb29nbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dvb2dsZVwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG50eXBlIExvZ2luTG9hZGVyRGF0YSA9IHtcblx0aGFzR29vZ2xlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPExvZ2luTG9hZGVyRGF0YT4gPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0Y29uc3QgaGFzR29vZ2xlQ3JlZCA9IHVzZXJcblx0XHQ/IGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS5nb29nbGUpXG5cdFx0OiBmYWxzZTtcblxuXHRpZiAoaGFzR29vZ2xlQ3JlZCkge1xuXHRcdHJlZGlyZWN0KFwiL1wiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzR29vZ2xlQ3JlZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuXHRjb25zdCB7IGhhc0dvb2dsZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8TG9naW5Mb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJTaWduIGluIHRvIHlvdXIgTmV4dFRob3VnaHQgYWNjb3VudDpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL2dvb2dsZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxHb29nbGVJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzR29vZ2xlQ3JlZFxuXHRcdFx0XHRcdFx0XHQ/IFwiU2lnbmVkIEluIFRvIEdvb2dsZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJTaWduIEluIFRvIEdvb2dsZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7TG9hZGVyRnVuY3Rpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtGb3JtLCByZWRpcmVjdCwgdXNlVHJhbnNpdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge2dldFNlc3Npb25Vc2VyfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7dXNlcjogdXNlci51c2VySWR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVsZVNjcmlwdEdlbmVyYXRvcigpIHtcblx0Y29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlRTRzpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cImdldFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiL3RzZy1yZXN1bHRzXCI+XG5cdFx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cInVybFwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNwcmVhZHNoZWV0IFVSTFwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJzaGVldFwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNoZWV0IE5hbWUgKG9wdGlvbmFsKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cInJvd1wiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlN0YXJ0aW5nIFJvdyAob3B0aW9uYWwpXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBDb2x1bW4gKG9wdGlvbmFsKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiXG5cdFx0XHRcdFx0XHRcdD8gXCJHZW5lcmF0aW5nLi4uXCJcblx0XHRcdFx0XHRcdFx0OiBcIkdlbmVyYXRlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2E4N2NiZDk1JywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LUNBTVFPU1IzLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVQ2RkdOS1ZKLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1XRTIzNFM0Ry5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRlZTRTZQNkYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3Jvb3QtSk5EVldYVkouanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNzNKQk1TQlYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUdSR1BCN05aLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1XQlNPNzYyVi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVEVYR0VCU0MuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUJOQ1pRR1FWLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KRDZFVE1ESy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUUhCNUZXSjYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTdJT1BCV1dQLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UtWldXSklVTFguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnNlcnZpY2UvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLVZYRjJKUERaLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb25uZWN0Jzp7J2lkJzoncm91dGVzL2Nvbm5lY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29ubmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2Nvbm5lY3QtTElSVlBWQ0wuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTjJUQVpGWFQuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTVDMjRVS1g3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9pbmRleC1KNVVaUE9HVC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay01QzI0VUtYNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dpbi1NNkNHUlQ2Qi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OMlRBWkZYVC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNUMyNFVLWDcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NsaWVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvamVjdHMvY2xpZW50cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NsaWVudHMtT1JFSE83TUguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUtUFBTWURCWlcuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNDNaR0tIWlUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTVDMjRVS1g3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL3NwYWNlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9zcGFjZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMtN0JRSjZHN0wuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknOnsnaWQnOidyb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Rhc2tzL2Fzc2V0LWludmVudG9yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS1RQVNGMlRDWi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay00M1pHS0haVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNUMyNFVLWDcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RzZyc6eydpZCc6J3JvdXRlcy90c2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondHNnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdHNnLTVBQlM0Uks3LmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTVDMjRVS1g3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90c2ctcmVzdWx0cyc6eydpZCc6J3JvdXRlcy90c2ctcmVzdWx0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0c2ctcmVzdWx0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3RzZy1yZXN1bHRzLUpIQ1RXQklGLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTVDMjRVS1g3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdmlkZW8tYmF0Y2gnOnsnaWQnOidyb3V0ZXMvdmlkZW8tYmF0Y2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondmlkZW8tYmF0Y2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy92aWRlby1iYXRjaC1ONUtKVTZZQy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay01QzI0VUtYNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9fc3RhdGljL2J1aWxkL21hbmlmZXN0LUE4N0NCRDk1LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFB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
