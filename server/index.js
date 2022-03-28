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

// route:/Users/andrew.ligon/video-client/app/root.tsx
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

// route:/Users/andrew.ligon/video-client/app/routes/auth/$service.callback.tsx
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
  constructor(tableName, parse) {
    this.table = null;
    if (!tableName) {
      throw new Error("Table must be given a table name.");
    }
    this.tableName = tableName;
    this.parse = parse;
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
    callbackURL: "http://localhost:3333/auth/google/callback"
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

// route:/Users/andrew.ligon/video-client/app/routes/auth/$service.callback.tsx
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

// route:/Users/andrew.ligon/video-client/app/routes/tasks/asset-inventory.tsx
var asset_inventory_exports = {};
__export(asset_inventory_exports, {
  action: () => action,
  default: () => AssetInventory,
  links: () => links,
  load: () => load
});
init_react();
var import_react2 = __toModule(require("react"));
var import_Button = __toModule(require("@mui/material/Button"));
var import_Stack = __toModule(require("@mui/material/Stack"));
var import_Typography2 = __toModule(require("@mui/material/Typography"));
var import_remix5 = __toModule(require_remix());

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

// route:/Users/andrew.ligon/video-client/app/routes/tasks/asset-inventory.tsx
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
  console.log("Got Report: ", await parseReport(file));
  return null;
};
function AssetInventory() {
  const [files, setFiles] = (0, import_react2.useState)(void 0);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Asset Inventory"
  }, /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement(import_Stack.default, {
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
      groups[lineText] = groups[lineText] ?? [];
      currentSection = lineText;
    } else {
      if (!currentSection) {
        throw new Error("Invalid Report");
      }
      groups[currentSection].push(lineText);
    }
  }
  return groups;
}

// route:/Users/andrew.ligon/video-client/app/routes/projects/clients.tsx
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
      const loader10 = async () => {
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
      this.CustomFieldsLoader = this.CustomFieldsLoader ?? loader10();
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
    const json3 = await response.json();
    console.log("Got WRIKE Response: ", json3);
    if (json3.error) {
      throw new Error(json3.errorDescription);
    }
    return json3;
  }
  get(path = "", params = {}) {
    const url = new URL(`${BaseURL}${path}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, encodeValue(value)));
    return this.fetch(url.toString(), "GET");
  }
  post(path = "", data = {}) {
    return this.fetch(`${BaseURL}${path}`, "POST", data);
  }
};

// route:/Users/andrew.ligon/video-client/app/routes/projects/clients.tsx
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

// route:/Users/andrew.ligon/video-client/app/routes/projects/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2,
  default: () => Project,
  links: () => links2,
  loader: () => loader3
});
init_react();
var import_react5 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
var import_Autocomplete = __toModule(require("@mui/material/Autocomplete"));
var import_Button2 = __toModule(require("@mui/material/Button"));
var import_Stack2 = __toModule(require("@mui/material/Stack"));
var import_TextField = __toModule(require("@mui/material/TextField"));

// app/components/InputBreadCrumb.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_Grid = __toModule(require("@mui/material/Grid"));
var import_styled2 = __toModule(require("@emotion/styled"));
var GridItem = (0, import_styled2.default)(import_Grid.default)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
function InputBreadCrumb({ children }) {
  const cmps = import_react3.default.Children.toArray(children);
  const breadcrumbs = cmps.slice(0, -1);
  const focused = cmps[cmps.length - 1];
  return /* @__PURE__ */ import_react3.default.createElement(import_Grid.default, {
    container: true,
    spacing: 2,
    padding: 2,
    sx: { justifyContent: "center" }
  }, breadcrumbs.map((c, key) => /* @__PURE__ */ import_react3.default.createElement(GridItem, {
    item: true,
    xs: 3,
    key: `breadcrumb-${key}`
  }, c)), focused ? /* @__PURE__ */ import_react3.default.createElement(GridItem, {
    item: true,
    xs: 12
  }, focused) : null);
}

// app/components/OnMount.tsx
init_react();
var import_react4 = __toModule(require("react"));
function OnMount({ onMount, children }) {
  (0, import_react4.useEffect)(() => {
    onMount();
  }, [onMount]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, children);
}

// route:/Users/andrew.ligon/video-client/app/routes/projects/create.tsx
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
  const [space, setSpace] = (0, import_react5.useState)(null);
  const clients = (0, import_remix7.useFetcher)();
  const loadClients = useFetcherLoad(clients, `/projects/clients?spaceId=${encodeURIComponent((space == null ? void 0 : space.id) ?? "")}`);
  const [client, setClient] = (0, import_react5.useState)(null);
  const { hasValue: hasProjectName, props: projectNameProps } = useBufferedInput();
  const [files, setFiles] = (0, import_react5.useState)(void 0);
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
  return (0, import_react5.useCallback)(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load(url);
    }
  }, [fetcher, url]);
}
function useBufferedInput() {
  const inputRef = (0, import_react5.useRef)();
  const timeoutRef = (0, import_react5.useRef)();
  const [value, setValue] = (0, import_react5.useState)("");
  const [hasValue, setHasValue] = (0, import_react5.useState)(false);
  const onChange = (0, import_react5.useCallback)((e) => {
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
  const onKeyPress = (0, import_react5.useCallback)((e) => {
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

// route:/Users/andrew.ligon/video-client/app/routes/projects/spaces.tsx
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

// route:/Users/andrew.ligon/video-client/app/routes/auth/$service.tsx
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

// route:/Users/andrew.ligon/video-client/app/routes/video-batch.tsx
var video_batch_exports = {};
__export(video_batch_exports, {
  action: () => action4,
  default: () => VideoBatch,
  loader: () => loader6
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_remix11 = __toModule(require_remix());
var import_Button3 = __toModule(require("@mui/material/Button"));
var import_Stack3 = __toModule(require("@mui/material/Stack"));
var import_TextField2 = __toModule(require("@mui/material/TextField"));
var loader6 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix11.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix11.redirect)("/connect");
  }
  return { user: user.userId };
};
var action4 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const UploaderHandler = (0, import_remix10.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix10.unstable_parseMultipartFormData)(request, UploaderHandler);
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
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Upload a video batch CSV file:"
  }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
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

// route:/Users/andrew.ligon/video-client/app/routes/connect.tsx
var connect_exports = {};
__export(connect_exports, {
  default: () => Connect,
  loader: () => loader7
});
init_react();
var import_remix12 = __toModule(require_remix());
var import_Button4 = __toModule(require("@mui/material/Button"));
var import_Stack4 = __toModule(require("@mui/material/Stack"));
var import_Add = __toModule(require("@mui/icons-material/Add"));
var loader7 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  if (!user) {
    (0, import_remix12.redirect)("/login");
  }
  return {
    hasWrikeCred: Boolean(await (user == null ? void 0 : user.hasCredentials(Service.wrike)))
  };
};
function Connect() {
  const { hasWrikeCred } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Connect your accounts:"
  }, /* @__PURE__ */ React.createElement(import_Stack4.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix12.Form, {
    action: "/auth/wrike",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button4.default, {
    startIcon: /* @__PURE__ */ React.createElement(import_Add.default, null),
    variant: "contained",
    type: "submit"
  }, hasWrikeCred ? "Connected to Wrike" : "Connect to Wrike"))));
}

// route:/Users/andrew.ligon/video-client/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader8
});
init_react();
var import_remix13 = __toModule(require_remix());
var import_Button5 = __toModule(require("@mui/material/Button"));
var import_Stack5 = __toModule(require("@mui/material/Stack"));
var loader8 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix13.redirect)("/login");
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
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "/projects/create"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "New Project")), /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "/video-batch"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "Video Batch")), /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "tasks/asset-inventory"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained"
  }, "Asset Inventory"))));
}

// route:/Users/andrew.ligon/video-client/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader9
});
init_react();
var import_remix14 = __toModule(require_remix());
var import_Button6 = __toModule(require("@mui/material/Button"));
var import_Stack6 = __toModule(require("@mui/material/Stack"));
var import_Google = __toModule(require("@mui/icons-material/Google"));
var loader9 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  const hasGoogleCred = user ? await user.hasCredentials(Service.google) : false;
  if (hasGoogleCred) {
    (0, import_remix14.redirect)("/");
  }
  return {
    hasGoogleCred
  };
};
function Login() {
  const { hasGoogleCred } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Sign in to your NextThought account:"
  }, /* @__PURE__ */ React.createElement(import_Stack6.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix14.Form, {
    action: "/auth/google",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
    startIcon: /* @__PURE__ */ React.createElement(import_Google.default, null),
    variant: "contained",
    type: "submit"
  }, hasGoogleCred ? "Signed In To Google" : "Sign In To Google"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "2ea4ea38", "entry": { "module": "/_static/build/entry.client-M7C5SJYM.js", "imports": ["/_static/build/_shared/chunk-T6FGNKVJ.js", "/_static/build/_shared/chunk-HK3PL2YJ.js", "/_static/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-RQ7Y4RM4.js", "imports": ["/_static/build/_shared/chunk-YMQ6MNO4.js", "/_static/build/_shared/chunk-EGYDUTUS.js", "/_static/build/_shared/chunk-AOVPH4GX.js", "/_static/build/_shared/chunk-QZN4BNVP.js", "/_static/build/_shared/chunk-E66DQUWX.js", "/_static/build/_shared/chunk-4WFHR7CE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-B5SLE4FH.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-ZJWAVI6F.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-PA4IAQUF.js", "imports": ["/_static/build/_shared/chunk-IEPVAWZY.js", "/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-ELJNBZHP.js", "imports": ["/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-CIF555D6.js", "imports": ["/_static/build/_shared/chunk-IEPVAWZY.js", "/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-QZDJ2DAC.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-PQZIF35G.js", "imports": ["/_static/build/_shared/chunk-QUZ4TV4U.js", "/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-SDOG25KE.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-4THPGYNV.js", "imports": ["/_static/build/_shared/chunk-QUZ4TV4U.js", "/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-WP4LAIDI.js", "imports": ["/_static/build/_shared/chunk-6DH2HW2Y.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-2EA4EA38.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLnRzeCIsICIuLi9hcHAvYXBpL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvYXV0aC1zdHJhdGVnaWVzL1dyaWtlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9Vc2VyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9CYXNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2RhdGFiYXNlL1RhYmxlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaWxlSW5wdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy50c3giLCAiLi4vYXBwL2FwaS93cmlrZS9DbGllbnQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ3VzdG9tRmllbGQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvRm9sZGVyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Byb2plY3Quc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvU3BhY2Uuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFzay5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9UYXNrVGVtcGxhdGUuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVmlkZW9CYXRjaFRhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvV29ya2Zsb3cuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvc3BhY2VzLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2F1dGgvJHNlcnZpY2UudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdmlkZW8tYmF0Y2gudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvY29ubmVjdC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9hcmNoaXRlY3RcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG5cdGJ1aWxkLFxuXHRtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL3NwYWNlcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3ZpZGVvLWJhdGNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3ZpZGVvLWJhdGNoXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInZpZGVvLWJhdGNoXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9jb25uZWN0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb25uZWN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbm5lY3RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLmdvb2dsZVxuXHQpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9TRUNSRVQpIHtcblx0YXV0aC51c2UoXG5cdFx0bmV3IFdyaWtlU3RyYXRlZ3koXG5cdFx0XHR7XG5cdFx0XHRcdGNsaWVudElEOiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL2F1dGgvd3Jpa2UvY2FsbGJhY2tcIixcblx0XHRcdFx0c2NvcGU6IFwiRGVmYXVsdCx3c1JlYWRXcml0ZVwiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLndyaWtlXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cblx0aWYgKCF1c2VySWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBVc2VyLmdldEZvcklkKHVzZXJJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChcblx0c2VydmljZTogU2VydmljZSxcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVkaXJlY3RzOiB7IHN1Y2Nlc3M6IHN0cmluZzsgZmFpbHVyZTogc3RyaW5nIH1cbikgPT4ge1xuXHRjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUgfSA9IGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFxuXHRcdHNlcnZpY2UsXG5cdFx0cmVxdWVzdFxuXHQpO1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihcblx0XHRyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG5cdCk7XG5cblx0Y29uc29sZS5sb2cocHJvZmlsZSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoIXByb2ZpbGUuaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTk8gSUQ/IT8hOiBcIiwgcHJvZmlsZSk7XG5cdFx0XHR0aHJvdyBcIndoYXRcIjtcblx0XHR9XG5cblx0XHRsZXQgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRcdGlmICghY3VycmVudFVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2V0dGluZyBDdXJyZW50IFVzZXI6IFwiLCBwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblx0XHRcdGN1cnJlbnRVc2VyID0gYXdhaXQgVXNlci5nZXRGb3JPYXV0aChwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHVzZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHNldENhY2hlZChjdXJyZW50VXNlcikpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGN1cnJlbnRVc2VyLnNldENyZWRlbnRpYWxzKHNlcnZpY2UsIHtcblx0XHRcdGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcblx0XHRcdHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLmZhaWx1cmUpO1xuXHR9XG5cblx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLnN1Y2Nlc3MsIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJhdGVneVZlcmlmeUNhbGxiYWNrIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB0eXBlIHtcblx0T0F1dGgyUHJvZmlsZSxcblx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXMsXG59IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneU9wdGlvbnMgPSB7XG5cdGNsaWVudElEOiBzdHJpbmc7XG5cdGNsaWVudFNlY3JldDogc3RyaW5nO1xuXHRjYWxsYmFja1VSTDogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcyA9IHtcblx0c2NvcGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvZmlsZSA9IHtcblx0aWQ6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdF9qc29uOiB7XG5cdFx0a2luZHM6IHN0cmluZztcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBzdHJpbmc7XG5cdFx0XHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdFx0XHRsYXN0TmFtZTogc3RyaW5nO1xuXHRcdFx0fVxuXHRcdF07XG5cdH07XG5cdHByb3ZpZGVyOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VTdHJhdGVneTxVc2VyPiBleHRlbmRzIE9BdXRoMlN0cmF0ZWd5PFxuXHRVc2VyLFxuXHRXcmlrZVByb2ZpbGUsXG5cdFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtc1xuPiB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdXNlckluZm9VUkwgPVxuXHRcdFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9jb250YWN0cz9tZT10cnVlXCI7XG5cdHByaXZhdGUgc2NvcGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zOiBXcmlrZVN0cmF0ZWd5T3B0aW9ucyxcblx0XHR2ZXJpZnk6IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2s8XG5cdFx0XHRVc2VyLFxuXHRcdFx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXM8V3Jpa2VQcm9maWxlLCBXcmlrZVN0cmF0ZWd5RXh0cmFQYXJhbXM+XG5cdFx0PlxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHtcblx0XHRcdFx0YXV0aG9yaXphdGlvblVSTDogXCJodHRwczovL2xvZ2luLndyaWtlLmNvbS9vYXV0aDIvYXV0aG9yaXplL3Y0XCIsXG5cdFx0XHRcdHRva2VuVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi90b2tlblwiLFxuXHRcdFx0XHRjbGllbnRJRDogb3B0aW9ucy5jbGllbnRJRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IG9wdGlvbnMuY2FsbGJhY2tVUkwsXG5cdFx0XHR9LFxuXHRcdFx0dmVyaWZ5XG5cdFx0KTtcblxuXHRcdHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGF1dGhvcml6YXRpb25QYXJhbXMoKTogVVJMU2VhcmNoUGFyYW1zIHtcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRpZiAodGhpcy5zY29wZSkge1xuXHRcdFx0cGFyYW1zLnNldChcInNjb3BlXCIsIHRoaXMuc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgdXNlclByb2ZpbGUoYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8V3Jpa2VQcm9maWxlPiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVzZXJJbmZvVVJMLCB7XG5cdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBwYXlsb2FkOiBXcmlrZVByb2ZpbGVbXCJfanNvblwiXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhWzBdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBkYXRhLmlkLFxuXHRcdFx0Zmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuXHRcdFx0X2pzb246IHBheWxvYWQsXG5cdFx0XHRwcm92aWRlcjogXCJ3cmlrZVwiLFxuXHRcdH07XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcbmltcG9ydCBDcmVkZW50aWFsLCB7IFNlcnZpY2UsIFRva2VucyB9IGZyb20gXCIuL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmNvbnN0IEV4aXN0aW5nID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgY29uc3Qgc2V0Q2FjaGVkID0gKHVzZXI6IFVzZXIpID0+IChcblx0RXhpc3Rpbmcuc2V0KHVzZXIudXNlcklkLCB1c2VyKSwgdXNlci51c2VySWRcbik7XG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVkID0gKHVzZXJJZDogc3RyaW5nKSA9PiBFeGlzdGluZy5nZXQodXNlcklkKTtcblxuY2xhc3MgT2F1dGhJZCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJPYXV0aElkc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHRwcm9maWxlSWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5uYXRpdmVFbnVtKFNlcnZpY2UpLFxuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhYmxlLnB1dCh7IHByb2ZpbGVJZCwgc2VydmljZSwgdXNlcklkOiB1dWlkKCkgfSk7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBPYXV0aElkLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHByb2ZpbGVJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5wcm9maWxlSWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdHN0YXRpYyBhc3luYyBnZXRGb3JPYXV0aChwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IG9hdXRoSWQgPSBhd2FpdCBPYXV0aElkLmZpbmRPckNyZWF0ZShwcm9maWxlSWQsIHNlcnZpY2UpO1xuXG5cdFx0aWYgKCFvYXV0aElkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIob2F1dGhJZC51c2VySWQpO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEZvcklkKHVzZXJJZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBVc2VyKHVzZXJJZCk7XG5cdH1cblxuXHR1c2VySWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGNyZWRlbnRpYWxzOiBNYXA8U2VydmljZSwgQ3JlZGVudGlhbD47XG5cblx0Y29uc3RydWN0b3IodXNlcklkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSwgdG9rZW5zOiBUb2tlbnMpIHtcblx0XHRyZXR1cm4gQ3JlZGVudGlhbC5hZGRPclVwZGF0ZSh0aGlzLnVzZXJJZCwgc2VydmljZSwgdG9rZW5zKTtcblx0fVxuXG5cdGFzeW5jIGdldENyZWRlbnRpYWxzKHNlcnZpY2U6IFNlcnZpY2UpIHtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMuaGFzKHNlcnZpY2UpKSB7XG5cdFx0XHRjb25zdCBjcmVkID0gYXdhaXQgQ3JlZGVudGlhbC5nZXRDcmVkZW50aWFsKHRoaXMudXNlcklkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKGNyZWQpIHtcblx0XHRcdFx0dGhpcy5jcmVkZW50aWFscy5zZXQoc2VydmljZSwgY3JlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KHNlcnZpY2UpO1xuXHR9XG5cblx0YXN5bmMgaGFzQ3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IGNyZWQgPSBhd2FpdCB0aGlzLmdldENyZWRlbnRpYWxzKHNlcnZpY2UpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oY3JlZCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vZGF0YWJhc2UvVGFibGUuc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbCB7XG5cdHN0YXRpYyBUYWJsZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRzdGF0aWMgU2NoZW1hID0gei5vYmplY3Qoe30pO1xuXG5cdHN0YXRpYyBnZXRUYWJsZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KHRoaXM6IFQpIHtcblx0XHRyZXR1cm4gbmV3IFRhYmxlPEluc3RhbmNlVHlwZTxUPj4odGhpcy5UYWJsZU5hbWUsICguLi5hcmdzKSA9PlxuXHRcdFx0dGhpcy5jcmVhdGUoLi4uYXJncylcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KFxuXHRcdHRoaXM6IFQsXG5cdFx0cmF3OiBvYmplY3Rcblx0KSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzKHJhdykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHR9XG5cblx0ZGF0YTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJhdzogb2JqZWN0KSB7XG5cdFx0dGhpcy5kYXRhID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEJhc2VNb2RlbCkuU2NoZW1hLnBhcnNlKHJhdyk7XG5cdH1cbn1cbiIsICJpbXBvcnQgYXJjIGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgQXJjVGFibGUgfSBmcm9tIFwiQGFyY2hpdGVjdC9mdW5jdGlvbnMvdGFibGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlPFQ+IHtcblx0cHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuXHRwcml2YXRlIHRhYmxlOiBBcmNUYWJsZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQ7XG5cblx0Y29uc3RydWN0b3IodGFibGVOYW1lOiBzdHJpbmcgfCBudWxsLCBwYXJzZTogKHJhdzogb2JqZWN0KSA9PiBUKSB7XG5cdFx0aWYgKCF0YWJsZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRhYmxlIG11c3QgYmUgZ2l2ZW4gYSB0YWJsZSBuYW1lLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLnRhYmxlTmFtZSA9IHRhYmxlTmFtZTtcblx0XHR0aGlzLnBhcnNlID0gcGFyc2U7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJsZU5hbWU7XG5cdH1cblxuXHRhc3luYyBzZXR1cFRhYmxlKCkge1xuXHRcdGlmICghdGhpcy50YWJsZSkge1xuXHRcdFx0Y29uc3QgdGFibGVzID0gYXdhaXQgYXJjLnRhYmxlcygpO1xuXG5cdFx0XHR0aGlzLnRhYmxlID0gdGFibGVzW3RoaXMudGFibGVOYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50YWJsZTtcblx0fVxuXG5cdGFzeW5jIGdldChrZXk6IGFueSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0cmV0dXJuIHJlc3AgPyB0aGlzLnBhcnNlKHJlc3ApIDogbnVsbDtcblx0fVxuXG5cdGFzeW5jIHB1dChkYXRhOiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCB0YWJsZS5wdXQoZGF0YSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKHF1ZXJ5OiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXG5cdFx0YXdhaXQgdGFibGUudXBkYXRlKHF1ZXJ5KTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zID0ge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRyZWZyZXNoVG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuXHRnb29nbGUgPSBcImdvb2dsZVwiLFxuXHR3cmlrZSA9IFwid3Jpa2VcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZGVudGlhbCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJDcmVkZW50aWFsc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHR1c2VySWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5lbnVtKFtcImdvb2dsZVwiLCBcIndyaWtlXCJdKSxcblx0XHRhY2Nlc3NUb2tlbjogei5zdHJpbmcoKSxcblx0XHQvLyByZWZyZXNoVG9rZW46IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGFkZE9yVXBkYXRlKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGtleSA9IHsgdXNlcklkLCBzZXJ2aWNlIH07XG5cdFx0Y29uc29sZS5sb2coXCJhZGRpbmcgY3JlZGVudGlhbDogXCIsIGtleSk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoa2V5KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0YXdhaXQgdGFibGUudXBkYXRlKHtcblx0XHRcdFx0S2V5OiBrZXksXG5cdFx0XHRcdFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIGFjY2Vzc1Rva2VuID0gOmFjY2Vzc1Rva2VuXCIsXG5cdFx0XHRcdEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcblx0XHRcdFx0XHRcIjphY2Nlc3NUb2tlblwiOiB0b2tlbnMuYWNjZXNzVG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgdGFibGUucHV0KHtcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHRzZXJ2aWNlLFxuXHRcdFx0XHQuLi50b2tlbnMsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Q3JlZGVudGlhbCh1c2VySWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgdXNlcklkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0cmV0dXJuIGV4aXN0aW5nO1xuXHR9XG5cblx0ZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlZGVudGlhbC5TY2hlbWE+IHwgdW5kZWZpbmVkO1xuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgc2VydmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5zZXJ2aWNlID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgYWNjZXNzVG9rZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uYWNjZXNzVG9rZW4gPz8gXCJcIjtcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcblx0Y29va2llOiB7XG5cdFx0bmFtZTogXCJudGkuc2Vzc2lvblwiLFxuXHRcdHNhbWVTaXRlOiBcImxheFwiLFxuXHRcdHBhdGg6IFwiL1wiLFxuXHRcdHNlY3JldHM6IFtcIk4zeHRUaDB1Z2h0ISFDXCJdLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7XG5cdEZvcm0sXG5cdExpbmtzRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0cmVkaXJlY3QsXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBBY3R1YWxGaWxlT2JqZWN0IH0gZnJvbSBcImZpbGVwb25kXCI7XG5cbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbGVJbnB1dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZpbGVwb25kQF40L2Rpc3QvZmlsZXBvbmQuY3NzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbG9hZDogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCBVcGxvYWRIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0fSk7XG5cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKFxuXHRcdHJlcXVlc3QsXG5cdFx0VXBsb2FkSGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJyZXBvcnRcIikgYXMgRmlsZTtcblxuXHRjb25zb2xlLmxvZyhcIkdvdCBSZXBvcnQ6IFwiLCBhd2FpdCBwYXJzZVJlcG9ydChmaWxlKSk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NldEludmVudG9yeSgpIHtcblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJBc3NldCBJbnZlbnRvcnlcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cblx0XHRcdFx0XHRcdEFmdGVyIEVmZmVjdHMgRGVwZW5kZW5jeSBSZXBvcnRcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxuXHRcdFx0XHRcdFx0RmlsZSAmZ3Q7IERlcGVuZGVuY2llcyAmZ3Q7IENvbGxlY3QgRmlsZXNcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0bmFtZT1cInJlcG9ydFwiXG5cdFx0XHRcdFx0XHRzdG9yZUFzRmlsZVxuXHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRGaWxlcyhpdGVtcy5tYXAoKGYpID0+IGYuZmlsZSkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRDb21waWxlXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZVJlcG9ydChmaWxlOiBGaWxlKSB7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXHJcIik7XG5cblx0Y29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0bGV0IGN1cnJlbnRTZWN0aW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuXHRmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XG5cdFx0Y29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuXHRcdGNvbnN0IGRlcHRoID0gcGFydHMubGVuZ3RoIC0gMTtcblx0XHRjb25zdCBsaW5lVGV4dCA9IHBhcnRzW2RlcHRoXS50cmltKCk7XG5cblx0XHRpZiAoZGVwdGggPT09IDApIHtcblx0XHRcdGdyb3Vwc1tsaW5lVGV4dF0gPSBncm91cHNbbGluZVRleHRdID8/IFtdO1xuXHRcdFx0Y3VycmVudFNlY3Rpb24gPSBsaW5lVGV4dDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjdXJyZW50U2VjdGlvbikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFJlcG9ydFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Z3JvdXBzW2N1cnJlbnRTZWN0aW9uXS5wdXNoKGxpbmVUZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JvdXBzO1xufVxuIiwgImltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ29udGFpbmVyXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxudHlwZSBQYWdlUHJvcHMgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgdGl0bGUsIGNoaWxkcmVuIH06IFBhZ2VQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIHN4PXt7IG10OiAxMCB9fT5cblx0XHRcdDxQYXBlciBlbGV2YXRpb249ezN9IHN4PXt7IHB5OiAzIH19PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgxXCIgbWI9ezV9PlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IEZpbGVQb25kIH0gZnJvbSBcInJlYWN0LWZpbGVwb25kXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEZpbGVQb25kKWBcblx0d2lkdGg6IDMwMHB4O1xuXG5cdCYgLmZpbGVwb25kLS1jcmVkaXRzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWRyb3AtbGFiZWwge1xuXHRcdGNvbG9yOiAjNGM0ZTUzO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWxhYmVsLWFjdGlvbiB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjYmFiZGMwO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLXBhbmVsLXJvb3Qge1xuXHRcdGJvcmRlci1yYWRpdXM6IDJlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMGY0O1xuXHRcdGhlaWdodDogMWVtO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1OTVlNjg7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJpcC1ibG9iIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YTlhO1xuXHR9XG5gO1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbGllbnQgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDbGllbnRSZXNwb25zZSA9IHtcblx0Y2xpZW50czogQ2xpZW50W107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcblxuXHRjb25zdCBzcGFjZUlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzcGFjZUlkXCIpO1xuXHRjb25zdCBXcmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0aWYgKCFzcGFjZUlkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiTXVzdCBoYXZlIGEgc3BhY2VJZFwiLCB7IHN0YXR1czogNDIyIH0pO1xuXHR9XG5cblx0Y29uc3QgZm9sZGVycyA9IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tU3BhY2Uoc3BhY2VJZCwgeyBwcm9qZWN0OiBmYWxzZSB9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y2xpZW50czogZm9sZGVycy5tYXAoKGYpID0+ICh7IGlkOiBmLmlkLCB0aXRsZTogZi50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSBDcmVkZW50aWFsIGZyb20gXCIuLi9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIi4uL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckNsYXNzIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDbGFzcyB9IGZyb20gXCIuL1Byb2plY3Quc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrQ2xhc3MgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcblxuY29uc3QgQmFzZVVSTCA9IFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9cIjtcblxudHlwZSBGZXRjaENvbmZpZyA9IHtcblx0bWV0aG9kOiBzdHJpbmc7XG5cdGhlYWRlcnM6IHtcblx0XHRBdXRob3JpemF0aW9uOiBzdHJpbmc7XG5cdFx0XCJDb250ZW50LVR5cGVcIj86IHN0cmluZztcblx0fTtcblx0Ym9keT86IHN0cmluZztcblx0c2lnbmFsPzogQWJvcnRTaWduYWw7XG59O1xuXG5jb25zdCBlbmNvZGVWYWx1ZSA9ICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGBbJHt2YWx1ZS5tYXAoKGkpID0+IGBcIiR7ZW5jb2RlVmFsdWUoaSl9XCJgKS5qb2luKFwiLFwiKX1dYDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNsYXNzIFdyaWtlQ2xpZW50IHtcblx0c3RhdGljIGFzeW5jIGZvclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0XHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRcdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCwgdXNlcj8udXNlcklkKTtcblx0fVxuXG5cdEN1c3RvbUZpZWxkOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3M7XG5cdEZvbGRlcjogV3Jpa2VGb2xkZXJDbGFzcztcblx0UHJvamVjdDogV3Jpa2VQcm9qZWN0Q2xhc3M7XG5cdFNwYWNlOiBXcmlrZVNwYWNlQ2xhc3M7XG5cdFRhc2s6IFdyaWtlVGFza0NsYXNzO1xuXHRUYXNrVGVtcGxhdGU6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3M7XG5cdFZpZGVvQmF0Y2g6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcztcblx0V29ya2Zsb3c6IFdyaWtlV29ya0Zsb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsLFxuXHRcdHB1YmxpYyB1c2VySWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuXHQpIHtcblx0XHR0aGlzLkN1c3RvbUZpZWxkID0gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyh0aGlzKTtcblx0XHR0aGlzLkZvbGRlciA9IGNyZWF0ZUZvbGRlckNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuUHJvamVjdCA9IGNyZWF0ZVByb2plY3RDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlNwYWNlID0gY3JlYXRlU3BhY2VDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2sgPSBjcmVhdGVUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5UYXNrVGVtcGxhdGUgPSBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlZpZGVvQmF0Y2ggPSBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzKHRoaXMpO1xuXHRcdHRoaXMuV29ya2Zsb3cgPSBjcmVhdGVXb3JrRmxvd0NsYXNzKHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBmZXRjaDxUID0ge30+KFxuXHRcdHVybDogc3RyaW5nLFxuXHRcdG1ldGhvZDogc3RyaW5nLFxuXHRcdGRhdGE/OiBvYmplY3Rcblx0KTogUHJvbWlzZTxUPiB7XG5cdFx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0XHRjb25zdCBjb25maWc6IEZldGNoQ29uZmlnID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jcmVkZW50aWFscy5hY2Nlc3NUb2tlbn1gLFxuXHRcdFx0fSxcblx0XHRcdHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG5cdFx0fTtcblxuXHRcdGlmIChkYXRhICYmIGNvbmZpZy5oZWFkZXJzKSB7XG5cdFx0XHRjb25maWcuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG5cdFx0XHRcdFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdFx0T2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHRcdHBhcmFtcy5zZXQoa2V5LCBlbmNvZGVWYWx1ZSh2YWx1ZSkpXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25maWcuYm9keSA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKFwiV1JJS0UgUmVxdWVzdDogXCIsIHVybCwgbWV0aG9kLCBjb25maWcuYm9keSwgZGF0YSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgMTAwMDApO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZyk7XG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiR290IFdSSUtFIFJlc3BvbnNlOiBcIiwganNvbik7XG5cblx0XHRpZiAoanNvbi5lcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGpzb24uZXJyb3JEZXNjcmlwdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpzb24gYXMgVDtcblx0fVxuXG5cdGdldDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIHBhcmFtczogb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGAke0Jhc2VVUkx9JHtwYXRofWApO1xuXG5cdFx0T2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4odXJsLnRvU3RyaW5nKCksIFwiR0VUXCIpO1xuXHR9XG5cblx0cG9zdDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIGRhdGE6IG9iamVjdCA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4oYCR7QmFzZVVSTH0ke3BhdGh9YCwgXCJQT1NUXCIsIGRhdGEpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBDdXN0b21GaWVsZFJhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxudHlwZSBDdXN0b21GaWVsZFJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IEN1c3RvbUZpZWxkUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRDbGFzcyA9IHtcblx0bmV3IChyYXc6IEN1c3RvbUZpZWxkUmF3KTogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xuXG5cdGZyb21JZHM6IChpZDogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZUN1c3RvbUZpZWxkQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8Q3VzdG9tRmllbGRSZXNwb25zZT4oXG5cdFx0XHRcdGBjdXN0b21maWVsZHMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHJhdykgPT4gbmV3IENscyhyYXcpKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgcmF3OiBDdXN0b21GaWVsZFJhdztcblxuXHRcdGNvbnN0cnVjdG9yKHJhdzogQ3VzdG9tRmllbGRSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gcmF3O1xuXHRcdH1cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXHRcdGdldCB0eXBlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50eXBlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFByb2plY3RJbmZvUmF3ID0ge1xuXHRvd25lcklkOiBzdHJpbmc7XG59O1xuXG50eXBlIEZvbGRlclJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cdGNoaWxkSWRzPzogc3RyaW5nW107XG5cdHBhcmVudElkcz86IHN0cmluZ1tdOyAvL29ubHkgcHJlc2VudCBpZiB0aGUgZm9sZGVyIGlzIGZldGNoZWQgYnkgaWQuLi5cbn07XG5cbnR5cGUgVHJlZVJlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IEZvbGRlclJhd1tdO1xufTtcblxudHlwZSBGb2xkZXJTYXZlQ29uZmlnID0ge1xuXHRwYXJlbnRGb2xkZXJJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IEZvbGRlclNhdmVDb25maWcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cblx0Z2V0UGFyZW50Rm9sZGVyOiAoKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRnZXRDaGlsZEZvbGRlcnM6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZmluZENvbmZpZ0ZvbGRlcjogKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VGb2xkZXJDbGFzcyB7XG5cdG5ldyAocmF3OiBGb2xkZXJSYXcpOiBXcmlrZUZvbGRlckluc3RhbmNlO1xuXG5cdGZyb21TcGFjZTogKFxuXHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT5cblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21JRHM6IChpZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21QZXJtYUxpbms6IChpZDogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRjcmVhdGU6IChcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3XG5cdCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZUZvbGRlckNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlRm9sZGVyQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VGb2xkZXJJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21TcGFjZShcblx0XHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgL3NwYWNlcy8ke3NwYWNlSWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHRwYXJhbXNcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tSURzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsobGluazogc3RyaW5nKTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0cmVlID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFwiZm9sZGVyc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluazogbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSB0cmVlLmRhdGFbMF07XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoZm9sZGVyKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgY3JlYXRlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0XHQpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QgfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IEZvbGRlclJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0XHRnZXQgZGVzY3JpcHRpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuZGVzY3JpcHRpb247XG5cdFx0fVxuXHRcdGdldCBwcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnByb2plY3Q7XG5cdFx0fVxuXHRcdGdldCBjaGlsZElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jaGlsZElkcztcblx0XHR9XG5cdFx0Z2V0IHBhcmVudElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wYXJlbnRJZHM7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IEZvbGRlclNhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxGb2xkZXJSYXc+KFxuXHRcdFx0XHRgZm9sZGVyLyR7Y29uZmlnLnBhcmVudEZvbGRlcklkfS9mb2xkZXJzYCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8/IFwiXCIsXG5cdFx0XHRcdFx0cHJvamVjdDogdGhpcy5wcm9qZWN0ID8/IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHJlc3A7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcGFyZW50Rm9sZGVyOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldFBhcmVudEZvbGRlcigpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5wYXJlbnRJZHMgfHwgdGhpcy5wYXJlbnRJZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBwYXJlbnRcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LkZvbGRlci5mcm9tSURzKFt0aGlzLnBhcmVudElkc1swXV0pO1xuXG5cdFx0XHRcdHJldHVybiByZXNwWzBdO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5wYXJlbnRGb2xkZXIgPSB0aGlzLnBhcmVudEZvbGRlciA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnRGb2xkZXI7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjaGlsZEZvbGRlcnM6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB8IHVuZGVmaW5lZDtcblx0XHRhc3luYyBnZXRDaGlsZEZvbGRlcnMoKSB7XG5cdFx0XHRjb25zdCBsb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hpbGRJZHMpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHN1YiBmb2xkZXJzXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGNsaWVudC5Gb2xkZXIuZnJvbUlEcyh0aGlzLmNoaWxkSWRzKTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuY2hpbGRGb2xkZXJzID0gdGhpcy5jaGlsZEZvbGRlcnMgPz8gbG9hZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGRGb2xkZXJzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgY29uZmlnRm9sZGVyQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0UHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD5cblx0XHQ+KCk7XG5cdFx0Ly9Mb29rIGZvciBhIGZvbGRlciB0aGF0IGlzIGEgZGlyZWN0IGNoaWxkIG9mIHRoaXMgZm9sZGVyLCBpZiBpdHMgbm90IHRoZXJlIHN0YXJ0IGxvb2tpbmcgdXAgXlxuXHRcdGFzeW5jIGZpbmRDb25maWdGb2xkZXIobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRjb25zdCBmaW5kID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IGF3YWl0IHRoaXMuZ2V0Q2hpbGRGb2xkZXJzKCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoY2hpbGQudGl0bGUgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjaGlsZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLmdldFBhcmVudEZvbGRlcigpO1xuXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuZmluZENvbmZpZ0ZvbGRlcihuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghdGhpcy5jb25maWdGb2xkZXJDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0dGhpcy5jb25maWdGb2xkZXJDYWNoZS5zZXQobmFtZSwgZmluZCgpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gYXdhaXQgdGhpcy5jb25maWdGb2xkZXJDYWNoZS5nZXQobmFtZSk7XG5cblx0XHRcdHJldHVybiBmb2xkZXIgPz8gbnVsbDtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFByb2plY3RSYXcgPSB7XG5cdGlkPzogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0SW5zdGFuY2UgPSB7XG5cdGltcG9ydENTVihcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpOiBQcm9taXNlPFdyaWtlUHJvamVjdEluc3RhbmNlPjtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvamVjdENsYXNzID0ge1xuXHRuZXcgKHJhdzogUHJvamVjdFJhdywgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xuXG5cdGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBwYXJlbnQ6IFdyaWtlRm9sZGVySW5zdGFuY2UpOiBXcmlrZVByb2plY3RJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlUHJvamVjdENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdENsaWVudCBpbXBsZW1lbnRzIFdyaWtlUHJvamVjdEluc3RhbmNlIHtcblx0XHRzdGF0aWMgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RDbGllbnQoeyB0aXRsZSB9LCBwYXJlbnQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlIHJhdzogUHJvamVjdFJhdyxcblx0XHRcdHByaXZhdGUgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCkge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0Q2xpZW50PiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLnZpZGVvcy5wdXNoKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoKSA6IHRoaXMuY3JlYXRlKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdXBkYXRlIFByb2plY3RzIChub3QgaW1wbGVtZW50ZWQpXCIpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYXN5bmMgY3JlYXRlKCkge1xuXHRcdFx0aWYgKCFjbGllbnQudXNlcklkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgaWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5wYXJlbnQ/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHBhcmVudCBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVGb2xkZXIgPSBhd2FpdCB0aGlzLnBhcmVudD8uZmluZENvbmZpZ0ZvbGRlcihcblx0XHRcdFx0XCJ0ZW1wbGF0ZXNcIlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF0ZW1wbGF0ZUZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmluZCB0ZW1wbGF0ZSBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFByb21pc2U8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT5cblx0XHRcdD4oKTtcblx0XHRcdGNvbnN0IGZpbmRUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZUNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdHRlbXBsYXRlQ2FjaGUuc2V0KFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKG5hbWUsIHRlbXBsYXRlRm9sZGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVDYWNoZS5nZXQobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gYXdhaXQgY2xpZW50LkZvbGRlci5jcmVhdGUodGhpcy50aXRsZSwgXCJcIiwge1xuXHRcdFx0XHRvd25lcklkOiBjbGllbnQudXNlcklkLFxuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IHByb2plY3Quc2F2ZSh7IHBhcmVudEZvbGRlcklkOiB0aGlzLnBhcmVudC5pZCB9KTtcblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyOiBwcm9qZWN0IH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFNwYWNlUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxudHlwZSBTcGFjZVJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFNwYWNlUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlQ2xhc3MgPSB7XG5cdG5ldyAocmF3OiBTcGFjZVJhdyk6IFdyaWtlU3BhY2VJbnN0YW5jZTtcblxuXHRnZXRBbGw6ICgpID0+IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNlQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlU3BhY2VDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVNwYWNlQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VTcGFjZUluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFNwYWNlUmVzcG9uc2U+KFwiL3NwYWNlc1wiKTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZVNwYWNlQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogU3BhY2VSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcblxuY29uc3QgU2F2ZUJsYWNrTGlzdCA9IFtcblx0XCJhY2NvdW50SWRcIixcblx0XCJjcmVhdGVkRGF0ZVwiLFxuXHRcInVwZGF0ZWREYXRlXCIsXG5cdFwicGVybWFsaW5rXCIsXG5cdFwic2NvcGVcIixcblx0XCJwcmlvcml0eVwiLFxuXHRcImRhdGVzXCIsXG5dO1xuXG50eXBlIEN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBUYXNrUmF3ID0ge1xuXHRpZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHBhcmVudHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107XG5cdHN1cGVyVGFza3M/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrSWRzPzogc3RyaW5nW107XG5cdHN1YlRhc2tJZHM/OiBzdHJpbmdbXTtcblx0YWNjb3VudElkPzogc3RyaW5nW107XG5cdGNyZWF0ZWREYXRlPzogc3RyaW5nO1xuXHR1cGRhdGVkRGF0ZT86IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzSWQ/OiBzdHJpbmc7XG5cdHBlcm1hbGluaz86IHN0cmluZztcblx0c2NvcGU/OiBzdHJpbmc7XG5cdHByaW9yaXR5Pzogc3RyaW5nO1xuXHRkYXRlcz86IGFueTtcblx0ZWZmb3J0QWxsb2NhdGlvbj86IGFueTtcblx0YmlsbGluZ1R5cGU/OiBhbnk7XG5cdGZpbmFuY2U/OiBhbnk7XG5cdHNoYXJlZElkcz86IGFueTtcblx0cmVzcG9uc2libGVJZHM/OiBhbnk7XG5cdGN1c3RvbUZpZWxkcz86IEN1c3RvbUZpZWxkSW5zdGFuY2VbXTtcbn0gJiB7fTtcblxuZXhwb3J0IHR5cGUgVGFza1Jlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IFRhc2tSYXdbXTtcbn07XG5cbnR5cGUgVGFza1NhdmVDb25maWcgPSB7XG5cdGZvbGRlcj86IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0luc3RhbmNlIHtcblx0cmF3OiBUYXNrUmF3IHwgdW5kZWZpbmVkO1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwYXJlbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuXHRhZGRTdWJUYXNrczogKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSA9PiB2b2lkO1xuXHRzZXRTdXBlclRhc2s6ICh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkgPT4gdm9pZDtcblxuXHRnZXRTYXZlRGF0YTogKCkgPT4gVGFza1JhdztcblxuXHRzYXZlOiAoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tDbGFzczxUID0gV3Jpa2VUYXNrSW5zdGFuY2U+IHtcblx0bmV3ICh0YXNrOiBUYXNrUmF3KTogVDtcblxuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21UaXRsZTogKHRpdGxlOiBzdHJpbmcsIGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSkgPT4gUHJvbWlzZTxUPjtcblxuXHRmcm9tUmF3OiAodGFzazogVGFza1JhdykgPT4gVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VUYXNrQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rPFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCBwZXJtYWxpbms6IHN0cmluZyk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluaywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGU8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KFxuXHRcdFx0dGhpczogVCxcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdzxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4odGhpczogVCwgdGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVRhc2tDbGllbnQodGFzaykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHRcdH1cblxuXHRcdHJhdzogVGFza1JhdztcblxuXHRcdHByaXZhdGUgc3VwZXJUYXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB8IHVuZGVmaW5lZDtcblx0XHRwcml2YXRlIHN1YlRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHR0aGlzLnJhdyA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXG5cdFx0Z2V0IHRpdGxlKCk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmVudHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhZGRTdWJUYXNrcyh0YXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSkge1xuXHRcdFx0dGFza3MuZm9yRWFjaCgodCkgPT4gdC5zZXRTdXBlclRhc2sodGhpcykpO1xuXG5cdFx0XHR0aGlzLnN1YlRhc2tzID0gWy4uLnRoaXMuc3ViVGFza3MsIC4uLnRhc2tzXTtcblx0XHR9XG5cblx0XHRzZXRTdXBlclRhc2sodGFzazogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdHRoaXMuc3VwZXJUYXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXRTYXZlRGF0YSgpOiBUYXNrUmF3IHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIHBhcmVudHMsIC4uLmV4dHJhRGF0YSB9ID0gdGhpcy5yYXc7XG5cdFx0XHRjb25zdCBkYXRhID0geyAuLi5leHRyYURhdGEgfSBhcyBUYXNrUmF3O1xuXG5cdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0ZGF0YS50aXRsZSA9IHRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFyZW50cykge1xuXHRcdFx0XHRkYXRhLnBhcmVudHMgPSBwYXJlbnRzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdXBlclRhc2s/LmlkKSB7XG5cdFx0XHRcdGRhdGEuc3VwZXJUYXNrcyA9IFt0aGlzLnN1cGVyVGFzay5pZF07XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHByb3Agb2YgU2F2ZUJsYWNrTGlzdCkge1xuXHRcdFx0XHRkZWxldGUgZGF0YVtwcm9wIGFzIGtleW9mIFRhc2tSYXddO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoY29uZmlnKSA6IHRoaXMuY3JlYXRlKGNvbmZpZyk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgeyBmb2xkZXIgfSA9IGNvbmZpZztcblxuXHRcdFx0aWYgKCFmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGUgYSBsb2NhdGlvbiB0byBzYXZlIGEgbmV3IHRhc2sgdG8uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHQuLi50aGlzLmdldFNhdmVEYXRhKCksXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoZm9sZGVyPy5pZCkge1xuXHRcdFx0XHRwYXlsb2FkLnBhcmVudHMgPSBbZm9sZGVyLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PFRhc2tSZXNwb25zZT4oXG5cdFx0XHRcdGBmb2xkZXJzLyR7Zm9sZGVyLmlkfS90YXNrc2AsXG5cdFx0XHRcdGZpeFBheWxvYWQocGF5bG9hZCBhcyB7fSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHRhc2sgPSByZXNwLmRhdGFbMF07XG5cblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgU3ViIFRhc2tzOiBcIiwgdGhpcy5zdWJUYXNrcy5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgc3ViVGFzayBvZiB0aGlzLnN1YlRhc2tzKSB7XG5cdFx0XHRcdGF3YWl0IHN1YlRhc2suc2F2ZShjb25maWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgdXBkYXRlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1cGRhdGUgdGFza3NcIik7XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBQYXlsb2FkS2V5TWFwID0ge1xuXHRzaGFyZWRJZHM6IFwic2hhcmVkc1wiLFxuXHRyZXNwb25zaWJsZUlkczogXCJyZXNwb25zaWJsZXNcIixcblx0Y3VzdG9tU3RhdHVzSWQ6IFwiY3VzdG9tU3RhdHVzXCIsXG59O1xuXG5mdW5jdGlvbiBmaXhQYXlsb2FkKHBheWxvYWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcblx0Y29uc3QgbmV3UGF5bG9hZCA9IHsgLi4ucGF5bG9hZCB9O1xuXG5cdGZvciAobGV0IFtrZXksIGZpeF0gb2YgT2JqZWN0LmVudHJpZXMoUGF5bG9hZEtleU1hcCkpIHtcblx0XHRpZiAobmV3UGF5bG9hZFtrZXldKSB7XG5cdFx0XHRuZXdQYXlsb2FkW2ZpeF0gPSBuZXdQYXlsb2FkW2tleV07XG5cdFx0XHRkZWxldGUgbmV3UGF5bG9hZFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdQYXlsb2FkO1xufVxuXG5jb25zdCBGaWVsZHMgPSBbXG5cdFwicGFyZW50SWRzXCIsXG5cdFwiZGVzY3JpcHRpb25cIixcblx0XCJjdXN0b21GaWVsZHNcIixcblx0XCJzaGFyZWRJZHNcIixcblx0XCJyZXNwb25zaWJsZUlkc1wiLFxuXHRcInN1YlRhc2tJZHNcIixcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluazogc3RyaW5nLCBjbGllbnQ6IFdyaWtlQ2xpZW50KSB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzYCwge1xuXHRcdHBlcm1hbGluayxcblx0XHRmaWVsZHM6IEZpZWxkcyxcblx0fSk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21JZHMoXG5cdGlkczogc3RyaW5nW10sXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFByb21pc2U8VGFza1Jhd1tdPiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzLyR7aWRzLmpvaW4oXCIsXCIpfWApO1xuXG5cdHJldHVybiByZXNwLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tVGl0bGUoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3PiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCwge1xuXHRcdHRpdGxlLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRpZiAocmVzcC5kYXRhLmxlbmd0aCA+IDEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3VuZCBtdWx0aXBsZSB0YXNrc1wiKTtcblx0fVxuXG5cdHJldHVybiByZXNwLmRhdGFbMF07XG59XG4iLCAiaW1wb3J0IE11c3RhY2hlIGZyb20gXCJtdXN0YWNoZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7XG5cdFdyaWtlVGFza0NsYXNzLFxuXHRXcmlrZVRhc2tJbnN0YW5jZSxcblx0VGFza1Jhdyxcblx0VGFza1Jlc3BvbnNlLFxufSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5pbXBvcnQgeyByYXdGcm9tVGl0bGUsIHJhd0Zyb21JZHMgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbG9uZURhdGEgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIEN1c3RvbUZpZWxkVGVtcGxhdGUgPSB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSBleHRlbmRzIFdyaWtlVGFza0luc3RhbmNlIHtcblx0Y2xvbmU6IChcblx0XHRkYXRhOiBDbG9uZURhdGEsXG5cdFx0cGFyZW50PzogV3Jpa2VUYXNrSW5zdGFuY2Vcblx0KSA9PiBQcm9taXNlPFdyaWtlVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzXG5cdGV4dGVuZHMgV3Jpa2VUYXNrQ2xhc3M8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT4ge31cblxuZnVuY3Rpb24gZmlsbEluVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGF0YTogQ2xvbmVEYXRhKTogc3RyaW5nIHtcblx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0cmV0dXJuIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBUYXNrVGVtcGxhdGVDbGllbnRcblx0XHRleHRlbmRzIGNsaWVudC5UYXNrXG5cdFx0aW1wbGVtZW50cyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlXG5cdHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbUlkcyhpZHMsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiByYXcubWFwKChyKSA9PiBuZXcgQ2xzKHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdHBlcm1hbGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oXCIvdGFza3NcIiwge1xuXHRcdFx0XHRwZXJtYWxpbmssXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyZXNwLmRhdGFbMF0pO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21UaXRsZSh0aXRsZSwgZm9sZGVyLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21SYXcodGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBUYXNrVGVtcGxhdGVDbGllbnQodGFzayk7XG5cdFx0fVxuXG5cdFx0VGVtcGxhdGVGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiXTtcblx0XHRMaXRlcmFsRmllbGRzOiAoa2V5b2YgVGFza1JhdylbXSA9IFtcblx0XHRcdFwic2hhcmVkSWRzXCIsXG5cdFx0XHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFx0XHRcImN1c3RvbVN0YXR1c0lkXCIsXG5cdFx0XTtcblxuXHRcdGFzeW5jIGNsb25lKGRhdGE6IENsb25lRGF0YSwgc3VwZXJUYXNrPzogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmF3ID0gdGhpcy5yYXcgPz8gKHt9IGFzIFRhc2tSYXcpO1xuXG5cdFx0XHRjb25zdCB0YXNrUmF3ID0ge30gYXMgVGFza1Jhdztcblx0XHRcdGNvbnN0IHNldCA9IChrZXk6IGtleW9mIFRhc2tSYXcsIHZhbDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHR0YXNrUmF3W2tleV0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PlxuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gZmlsbEluVGVtcGxhdGUodGVtcGxhdGVSYXdba2V5XSwgZGF0YSkpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdFwiU2V0dGluZyBMaXRlcmFsIEZpZWxkOiBcIixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0ZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV1cblx0XHRcdFx0KTtcblx0XHRcdFx0c2V0KGtleSwgZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChkYXRhLnRpdGxlUHJlZml4KSB7XG5cdFx0XHRcdHRhc2tSYXcudGl0bGUgPSBgJHtkYXRhLnRpdGxlUHJlZml4fSAke3Rhc2tSYXcudGl0bGV9YDtcblx0XHRcdH1cblxuXHRcdFx0dGFza1Jhdy50aXRsZSA9IHRhc2tSYXcudGl0bGVcblx0XHRcdFx0LnJlcGxhY2UoXCJURU1QTEFURVwiLCBcIlwiKVxuXHRcdFx0XHQucmVwbGFjZSgvXFwgXFwgLywgXCIgXCIpO1xuXG5cdFx0XHRjb25zdCBjdXN0b21GaWVsZHMgPSAoYXdhaXQgdGhpcy5nZXRDdXN0b21GaWVsZHMoKSkgPz8ge307XG5cblx0XHRcdGZvciAobGV0IFtuYW1lLCBmaWVsZF0gb2YgT2JqZWN0LmVudHJpZXMoY3VzdG9tRmllbGRzKSkge1xuXHRcdFx0XHR0YXNrUmF3LmN1c3RvbUZpZWxkcyA9IFtcblx0XHRcdFx0XHQuLi4odGFza1Jhdy5jdXN0b21GaWVsZHMgPz8gW10pLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlkOiBmaWVsZC5kZWZpbml0aW9uLmlkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbbmFtZV0gPz8gZmllbGQudmFsdWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGFzayA9IGNsaWVudC5UYXNrLmZyb21SYXcodGFza1Jhdyk7XG5cblx0XHRcdGlmIChzdXBlclRhc2spIHtcblx0XHRcdFx0dGFzay5zZXRTdXBlclRhc2soc3VwZXJUYXNrKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3ViVGFza1RlbXBsYXRlcyA9ICF0ZW1wbGF0ZVJhdy5zdWJUYXNrSWRzPy5sZW5ndGhcblx0XHRcdFx0PyBbXVxuXHRcdFx0XHQ6IGF3YWl0IFRhc2tUZW1wbGF0ZUNsaWVudC5mcm9tSWRzKHRlbXBsYXRlUmF3LnN1YlRhc2tJZHMpO1xuXG5cdFx0XHRjb25zdCBjbG9uZURhdGEgPSB7XG5cdFx0XHRcdC4uLmRhdGEsXG5cdFx0XHRcdHRpdGxlUHJlZml4OiB0YXNrUmF3LnRpdGxlLFxuXHRcdFx0fSBhcyBDbG9uZURhdGE7XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cblx0XHRcdGNvbnN0IHN1YlRhc2tzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRcdHN1YlRhc2tUZW1wbGF0ZXMubWFwKChzKSA9PiBzLmNsb25lKGNsb25lRGF0YSwgdGFzaykpXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXNrLmFkZFN1YlRhc2tzKHN1YlRhc2tzKTtcblxuXHRcdFx0cmV0dXJuIHRhc2s7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBDdXN0b21GaWVsZHNMb2FkZXI6XG5cdFx0XHR8IFByb21pc2U8UmVjb3JkPHN0cmluZywgQ3VzdG9tRmllbGRUZW1wbGF0ZT4gfCBudWxsPlxuXHRcdFx0fCB1bmRlZmluZWQ7XG5cdFx0Ly9UT0RPOiBjYWNoZSB0aGlzIHJldHVyblxuXHRcdHByaXZhdGUgYXN5bmMgZ2V0Q3VzdG9tRmllbGRzKCk6IFByb21pc2U8UmVjb3JkPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0eyB2YWx1ZTogc3RyaW5nOyBkZWZpbml0aW9uOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfVxuXHRcdD4gfCBudWxsPiB7XG5cdFx0XHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgY3VzdG9tRmllbGRzIH0gPSB0aGlzLnJhdyA/PyB7fTtcblxuXHRcdFx0XHRpZiAoIWN1c3RvbUZpZWxkcyB8fCBjdXN0b21GaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgQ3VzdG9tIEZpZWxkczogXCIsIGN1c3RvbUZpZWxkcyk7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gYXdhaXQgY2xpZW50LkN1c3RvbUZpZWxkLmZyb21JZHMoXG5cdFx0XHRcdFx0Y3VzdG9tRmllbGRzLm1hcCgoYykgPT4gYy5pZClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gZmllbGRzLnJlZHVjZSgoYWNjLCBmaWVsZCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3VzdG9tRmllbGRzLmZpbmQoXG5cdFx0XHRcdFx0XHQoYykgPT4gYy5pZCA9PT0gZmllbGQuaWRcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnR5cGUgIT09IFwic3RyaW5nXCIgfHwgIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdFx0XHRbZmllbGQudGl0bGVdOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBpbnN0YW5jZS52YWx1ZSxcblx0XHRcdFx0XHRcdFx0ZGVmaW5pdGlvbjogZmllbGQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sIHt9KTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyID0gdGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPz8gbG9hZGVyKCk7XG5cblx0XHRcdHJldHVybiB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlcjtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuXG50eXBlIENTVlJvdyA9IHsgdGVtcGxhdGU6IHN0cmluZyB9ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBWaWRlb0JhdGNoU2F2ZUNvbmZpZyA9IHtcblx0dGVtcGxhdGVGb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cdGxvY2F0aW9uRm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRpbXBvcnRDU1Y6IChcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcblxuXHRzYXZlOiAoY29uZmlnOiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3Mge1xuXHRuZXcgKGNvbmZpZzogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KTogV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVByb2plY3RUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdGxpbms6IHN0cmluZ1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgY2xpZW50LlRhc2suZnJvbVBlcm1hTGluayhsaW5rKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RUYXNrQ2xpZW50KHsgdGFzayB9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHRhc2s6IFdyaWtlVGFza0luc3RhbmNlO1xuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoeyB0YXNrIH06IHsgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfSkge1xuXHRcdFx0dGhpcy50YXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIGFkZFZpZGVvKHZpZGVvOiBDU1ZSb3cpIHtcblx0XHRcdHRoaXMudmlkZW9zLnB1c2godmlkZW8pO1xuXHRcdH1cblxuXHRcdGFzeW5jIGltcG9ydENTVihcblx0XHRcdGZpbGU6IEZpbGUsXG5cdFx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0XHQpOiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjc3YucGFyc2VTdHJpbmcodGV4dCwgb3B0aW9ucylcblx0XHRcdFx0XHQub24oXCJlcnJvclwiLCAoZXJyKSA9PiByZWplY3QoZXJyKSlcblx0XHRcdFx0XHQub24oXCJkYXRhXCIsIChyb3c6IENTVlJvdykgPT4gdGhpcy5hZGRWaWRlbyhyb3cpKVxuXHRcdFx0XHRcdC5vbihcImVuZFwiLCAoKSA9PiBmdWxmaWxsKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoeyB0ZW1wbGF0ZUZvbGRlciwgbG9jYXRpb25Gb2xkZXIgfTogVmlkZW9CYXRjaFNhdmVDb25maWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIFZpZGVvIEJhdGNoOiBcIiwgdGhpcy52aWRlb3MubGVuZ3RoKTtcblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IGxvY2F0aW9uRm9sZGVyO1xuXG5cdFx0XHRpZiAoIWZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHZpZGVvIG9mIHRoaXMudmlkZW9zLnJldmVyc2UoKSkge1xuXHRcdFx0XHRjb25zdCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZU5hbWUsIC4uLnByb3BlcnRpZXMgfSA9IHZpZGVvO1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGZpbmRUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpO1xuXG5cdFx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCB0ZW1wbGF0ZT8uY2xvbmUocHJvcGVydGllcywgdGhpcy50YXNrKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgV29ya2Zsb3dSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbnR5cGUgV29ya2Zsb3dSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBXb3JrZmxvd1Jhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VXb3JrRmxvd0luc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c2VzOiBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlW107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBXb3JrZmxvd1Jhdyk6IFdyaWtlV29ya0Zsb3dJbnN0YW5jZTtcblxuXHRmcm9tTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlV29ya0Zsb3dJbnN0YW5jZT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya0Zsb3dDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VXb3JrRmxvd0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlV29ya2Zsb3dDbGllbnQgaW1wbGVtZW50cyBXcmlrZVdvcmtGbG93SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFdvcmtmbG93UmVzcG9uc2U+KFwid29ya2Zsb3dzXCIpO1xuXHRcdFx0Y29uc3QgcmF3ID0gcmVzcC5kYXRhLmZpbmQoKGQpID0+IGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRcdGlmICghcmF3KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIldvcmtmbG93IG5vdCBmb3VuZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVdvcmtmbG93Q2xpZW50KHJhdyk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IFdvcmtmbG93UmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5uYW1lO1xuXHRcdH1cblx0XHRnZXQgY3VzdG9tU3RhdHVzZXMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuY3VzdG9tU3RhdHVzZXM7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRBY3Rpb25GdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdExpbmtzRnVuY3Rpb24sXG5cdHJlZGlyZWN0LFxuXHR1c2VGZXRjaGVyLFxuXHRGb3JtLFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB0eXBlIHsgQWN0dWFsRmlsZU9iamVjdCB9IGZyb20gXCJmaWxlcG9uZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IElucHV0QnJlYWRDcnVtYiBmcm9tIFwifi9jb21wb25lbnRzL0lucHV0QnJlYWRDcnVtYlwiO1xuaW1wb3J0IE9uTW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9Pbk1vdW50XCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5cbmltcG9ydCB0eXBlIHsgU3BhY2VzUmVzcG9uc2UsIFNwYWNlIH0gZnJvbSBcIi4vc3BhY2VzXCI7XG5pbXBvcnQgdHlwZSB7IENsaWVudFJlc3BvbnNlLCBDbGllbnQgfSBmcm9tIFwiLi9jbGllbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZpbGVwb25kQF40L2Rpc3QvZmlsZXBvbmQuY3NzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB3cmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInByb2plY3QtZmlsZVwiKSBhcyBGaWxlO1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc29sZS5sb2coXCJHb3QgRm9ybSBEYXRhOiBcIiwgdGV4dCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuXHRjb25zdCBzcGFjZXMgPSB1c2VGZXRjaGVyPFNwYWNlc1Jlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkU3BhY2VzID0gdXNlRmV0Y2hlckxvYWQoc3BhY2VzLCBcIi9wcm9qZWN0cy9zcGFjZXNcIik7XG5cdGNvbnN0IFtzcGFjZSwgc2V0U3BhY2VdID0gdXNlU3RhdGU8U3BhY2UgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCBjbGllbnRzID0gdXNlRmV0Y2hlcjxDbGllbnRSZXNwb25zZT4oKTtcblx0Y29uc3QgbG9hZENsaWVudHMgPSB1c2VGZXRjaGVyTG9hZChcblx0XHRjbGllbnRzLFxuXHRcdGAvcHJvamVjdHMvY2xpZW50cz9zcGFjZUlkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNwYWNlPy5pZCA/PyBcIlwiKX1gXG5cdCk7XG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZTxDbGllbnQgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCB7IGhhc1ZhbHVlOiBoYXNQcm9qZWN0TmFtZSwgcHJvcHM6IHByb2plY3ROYW1lUHJvcHMgfSA9XG5cdFx0dXNlQnVmZmVyZWRJbnB1dCgpO1xuXG5cdGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8QWN0dWFsRmlsZU9iamVjdFtdIHwgdW5kZWZpbmVkPihcblx0XHR1bmRlZmluZWRcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiTmV3IFByb2plY3RcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8SW5wdXRCcmVhZENydW1iPlxuXHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRTcGFjZXN9PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c3BhY2U/LmlkfSBuYW1lPVwic3BhY2VJZFwiIC8+XG5cdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRTcGFjZShvKX1cblx0XHRcdFx0XHRcdFx0bG9hZGluZz17c3BhY2VzLnN0YXRlID09PSBcImxvYWRpbmdcIn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17c3BhY2VzLmRhdGE/LnNwYWNlcyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhvKSA9PiBvLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3BhY2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L09uTW91bnQ+XG5cdFx0XHRcdFx0eyFzcGFjZSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8T25Nb3VudCBvbk1vdW50PXtsb2FkQ2xpZW50c30+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnQ/LmlkfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0c3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCIzMDBweFwiIH19XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2xpZW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgbykgPT4gc2V0Q2xpZW50KG8pfVxuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2NsaWVudHMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2NsaWVudHMuZGF0YT8uY2xpZW50cyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0aXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvLCB2KSA9PiBvLmlkID09PSB2LmlkfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wYXJhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2xpZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshY2xpZW50ID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcm9qZWN0IE5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRrZXk9XCJwcm9qZWN0XCJcblx0XHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17cHJvamVjdE5hbWVQcm9wc31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7IWhhc1Byb2plY3ROYW1lID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwcm9qZWN0LWZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0b3JlQXNGaWxlXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRcdG9udXBkYXRlZmlsZXM9eyhpdGVtcykgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEZpbGVzKGl0ZW1zLm1hcCgoZikgPT4gZi5maWxlKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdENyZWF0ZSBQcm9qZWN0XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0lucHV0QnJlYWRDcnVtYj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHVzZUZldGNoZXJMb2FkKFxuXHRmZXRjaGVyOiB7IGxvYWQ6ICh1cmw6IHN0cmluZykgPT4gdm9pZCB9ICYgRmV0Y2hlcixcblx0dXJsOiBzdHJpbmdcbikge1xuXHRyZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGlmICghZmV0Y2hlci5kYXRhICYmIGZldGNoZXIuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRmZXRjaGVyLmxvYWQodXJsKTtcblx0XHR9XG5cdH0sIFtmZXRjaGVyLCB1cmxdKTtcbn1cblxuZnVuY3Rpb24gdXNlQnVmZmVyZWRJbnB1dCgpIHtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZD4oKTtcblx0Y29uc3QgdGltZW91dFJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KCk7XG5cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbaGFzVmFsdWUsIHNldEhhc1ZhbHVlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0c2V0VmFsdWUoaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIik7XG5cblx0XHRpZiAodGltZW91dFJlZi5jdXJyZW50KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcblx0XHR9XG5cblx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUpKTtcblxuXHRcdFx0dGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcblx0XHR9LCA1MDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3Qgb25LZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIikpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiB7XG5cdFx0aGFzVmFsdWUsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0cmVmOiBpbnB1dFJlZixcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0b25LZXlQcmVzcyxcblx0XHR9LFxuXHR9O1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG50eXBlIElucHV0QnJlYWRDcnVtYlByb3BzID0ge1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQoR3JpZClgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRCcmVhZENydW1iKHsgY2hpbGRyZW4gfTogSW5wdXRCcmVhZENydW1iUHJvcHMpIHtcblx0Y29uc3QgY21wcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG5cdGNvbnN0IGJyZWFkY3J1bWJzID0gY21wcy5zbGljZSgwLCAtMSk7XG5cdGNvbnN0IGZvY3VzZWQgPSBjbXBzW2NtcHMubGVuZ3RoIC0gMV07XG5cblx0cmV0dXJuIChcblx0XHQ8R3JpZFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0cGFkZGluZz17Mn1cblx0XHRcdHN4PXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XG5cdFx0PlxuXHRcdFx0e2JyZWFkY3J1bWJzLm1hcCgoYywga2V5KSA9PiAoXG5cdFx0XHRcdDxHcmlkSXRlbSBpdGVtIHhzPXszfSBrZXk9e2BicmVhZGNydW1iLSR7a2V5fWB9PlxuXHRcdFx0XHRcdHtjfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSl9XG5cdFx0XHR7Zm9jdXNlZCA/IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cblx0XHRcdFx0XHR7Zm9jdXNlZH1cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvR3JpZD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgRmV0Y2hPbk1vdW50UHJvcHMgPSB7XG5cdG9uTW91bnQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbk1vdW50KHsgb25Nb3VudCwgY2hpbGRyZW4gfTogRmV0Y2hPbk1vdW50UHJvcHMpIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRvbk1vdW50KCk7XG5cdH0sIFtvbk1vdW50XSk7XG5cblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBTcGFjZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFNwYWNlc1Jlc3BvbnNlID0ge1xuXHRzcGFjZXM6IFNwYWNlW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdH1cblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBzcGFjZXMgPSBhd2FpdCBXcmlrZS5TcGFjZS5nZXRBbGwoKTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0c3BhY2VzOiBzcGFjZXMubWFwKChzKSA9PiAoeyBpZDogcy5pZCwgdGl0bGU6IHMudGl0bGUgfSkpLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiXCIsXG5cdFx0ZmFpbHVyZTogXCJcIixcblx0fSk7XG59O1xuIiwgImltcG9ydCB7XG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IFVwbG9hZCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiB7IHVzZXI6IHVzZXIudXNlcklkIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdH1cblxuXHRjb25zdCBVcGxvYWRlckhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHRcdGZpbHRlcjogKHsgbWltZXR5cGUgfSkgPT4gbWltZXR5cGUgPT09IFwidGV4dC9jc3ZcIixcblx0fSk7XG5cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKFxuXHRcdHJlcXVlc3QsXG5cdFx0VXBsb2FkZXJIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgV3Jpa2UgPSBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkKTtcblx0Y29uc3QgYmF0Y2ggPSBhd2FpdCBXcmlrZS5WaWRlb0JhdGNoLmZyb21QZXJtYUxpbmsoXG5cdFx0Zm9ybURhdGEuZ2V0KFwiYmF0Y2gtdGFza1wiKSBhcyBzdHJpbmdcblx0KTtcblxuXHRhd2FpdCBiYXRjaC5pbXBvcnRDU1YoZm9ybURhdGEuZ2V0KFwiYmF0Y2hcIikgYXMgRmlsZSwgeyBoZWFkZXJzOiB0cnVlIH0pO1xuXG5cdGF3YWl0IGJhdGNoLnNhdmUoe1xuXHRcdHRlbXBsYXRlRm9sZGVyOiBhd2FpdCBXcmlrZS5Gb2xkZXIuZnJvbVBlcm1hTGluayhcblx0XHRcdGZvcm1EYXRhLmdldChcInRlbXBsYXRlLWZvbGRlclwiKSBhcyBzdHJpbmdcblx0XHQpLFxuXHRcdGxvY2F0aW9uRm9sZGVyOiBhd2FpdCBXcmlrZS5Gb2xkZXIuZnJvbVBlcm1hTGluayhcblx0XHRcdGZvcm1EYXRhLmdldChcImxvY2F0aW9uXCIpIGFzIHN0cmluZ1xuXHRcdCksXG5cdH0pO1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9CYXRjaCgpIHtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlVwbG9hZCBhIHZpZGVvIGJhdGNoIENTViBmaWxlOlwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cInRlbXBsYXRlLWZvbGRlclwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlRlbXBsYXRlIEZvbGRlciAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cImJhdGNoLXRhc2tcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJCYXRjaCBUYXNrIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwibG9jYXRpb25cIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGb2xkZXIgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJiYXRjaFwiIC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0VXBsb2FkXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBDb25uZWN0TG9hZGVyRGF0YSA9IHtcblx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuXHRyZXF1ZXN0LFxufSk6IFByb21pc2U8Q29ubmVjdExvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoYXNXcmlrZUNyZWQ6IEJvb2xlYW4oYXdhaXQgdXNlcj8uaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdCgpIHtcblx0Y29uc3QgeyBoYXNXcmlrZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8Q29ubmVjdExvYWRlckRhdGE+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkNvbm5lY3QgeW91ciBhY2NvdW50czpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL3dyaWtlXCIgbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0YXJ0SWNvbj17PEFkZEljb24gLz59XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtoYXNXcmlrZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIkNvbm5lY3RlZCB0byBXcmlrZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJDb25uZWN0IHRvIFdyaWtlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVmlkZW8gVG9vbGluZzpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2plY3RzL2NyZWF0ZVwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPk5ldyBQcm9qZWN0PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvdmlkZW8tYmF0Y2hcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5WaWRlbyBCYXRjaDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwidGFza3MvYXNzZXQtaW52ZW50b3J5XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+QXNzZXQgSW52ZW50b3J5PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBMb2dpbkxvYWRlckRhdGEgPSB7XG5cdGhhc0dvb2dsZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxMb2dpbkxvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGNvbnN0IGhhc0dvb2dsZUNyZWQgPSB1c2VyXG5cdFx0PyBhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKVxuXHRcdDogZmFsc2U7XG5cblx0aWYgKGhhc0dvb2dsZUNyZWQpIHtcblx0XHRyZWRpcmVjdChcIi9cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc0dvb2dsZUNyZWQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBoYXNHb29nbGVDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPExvZ2luTG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiU2lnbiBpbiB0byB5b3VyIE5leHRUaG91Z2h0IGFjY291bnQ6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC9nb29nbGVcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8R29vZ2xlSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc0dvb2dsZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIlNpZ25lZCBJbiBUbyBHb29nbGVcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiU2lnbiBJbiBUbyBHb29nbGVcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMmVhNGVhMzgnLCdlbnRyeSc6eydtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9lbnRyeS5jbGllbnQtTTdDNVNKWU0uanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVDZGR05LVkouanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUhLM1BMMllKLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GVlNFNlA2Ri5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm9vdC1SUTdZNFJNNC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1ZTVE2TU5PNC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRUdZRFVUVVMuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFPVlBINEdYLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1RWk40Qk5WUC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRTY2RFFVV1guanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRXRkhSN0NFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UtQjVTTEU0RkguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnNlcnZpY2UvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLVpKV0FWSTZGLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb25uZWN0Jzp7J2lkJzoncm91dGVzL2Nvbm5lY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29ubmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2Nvbm5lY3QtUEE0SUFRVUYuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSUVQVkFXWlkuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTZESDJIVzJZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9pbmRleC1FTEpOQlpIUC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay02REgySFcyWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dpbi1DSUY1NTVENi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1JRVBWQVdaWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNkRIMkhXMlkuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NsaWVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvamVjdHMvY2xpZW50cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NsaWVudHMtUVpESjJEQUMuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUtUFFaSUYzNUcuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUVVaNFRWNFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTZESDJIVzJZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL3NwYWNlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9zcGFjZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMtU0RPRzI1S0UuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknOnsnaWQnOidyb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Rhc2tzL2Fzc2V0LWludmVudG9yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS00VEhQR1lOVi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1RVVo0VFY0VS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNkRIMkhXMlkuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ZpZGVvLWJhdGNoJzp7J2lkJzoncm91dGVzL3ZpZGVvLWJhdGNoJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ZpZGVvLWJhdGNoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdmlkZW8tYmF0Y2gtV1A0TEFJREkuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNkRIMkhXMlkuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU5KTVQ3UjZLLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvX3N0YXRpYy9idWlsZC9tYW5pZmVzdC0yRUE0RUEzOC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFP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
