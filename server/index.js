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
    scope: "https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/drive.metadata.readonly openid profile email"
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
var import_jszip = __toModule(require("jszip"));

// app/api/Google/GAPI.server.ts
init_react();
var import_googleapis = __toModule(require("googleapis"));
var GAPI = class {
  constructor(request, token) {
    const search = new URL(request.url).searchParams;
    this.params = {
      url: search.get("url") ?? "",
      sheet: search.get("sheet") != "" ? search.get("sheet") : "Master Review Tracker",
      row: search.get("row") != "" ? search.get("row") : "5",
      column: search.get("column") != "" ? search.get("column") : "I",
      title: ""
    };
    this.token = token;
  }
  async generateTeleprompterScripts() {
    const sheetData = await collectLinksFromColumn(this.params);
    const links3 = sheetData.links.filter(String);
    this.params.title = sheetData.title;
    let file_text = [];
    for (let i = 0; i < links3.length; i++) {
      file_text.push(await extractTranscriptText(this.token, links3[i]));
    }
    return { sheetData: this.params, files: file_text };
  }
};
function getIDFromURL(url) {
  return new URL(url).pathname.split("/")[3];
}
async function collectLinksFromColumn(params) {
  const googleSheets = import_googleapis.google.sheets("v4");
  const response = await googleSheets.spreadsheets.get({
    auth: "AIzaSyBW4hVX-R3FAwOtAOtjSvPqWsBuYDCkX1c",
    spreadsheetId: getIDFromURL(params.url),
    includeGridData: true,
    ranges: [`${params.sheet}!${params.column}${params.row}:${params.column}`]
  });
  if (!(response.data.properties && response.data.properties.title)) {
    throw Error("Failed to find spreadsheet title");
  }
  const title = response.data.properties.title;
  if (!(response.data.sheets && response.data.sheets[0].data && response.data.sheets[0].data[0].rowData)) {
    throw Error("Failed to get spreadsheet data");
  }
  const rows = response.data.sheets[0].data[0].rowData;
  const links3 = new Array(rows.length);
  for (let row of rows) {
    if (row.values) {
      const link = row.values[0].hyperlink;
      if (link) {
        links3.push(link);
        console.log("FOUND LINK: ", link);
      }
    } else {
      console.log("Found row with no data");
    }
  }
  return { title, links: links3 };
}
async function extractTranscriptText(token, link) {
  const id = getIDFromURL(link);
  const docs = import_googleapis.google.docs("v1");
  const response = await docs.documents.get({
    oauth_token: token,
    documentId: id
  });
  if (!response.data.body) {
    throw Error("Failed to get data from Google Doc");
  }
  if (!response.data.body.content) {
    throw Error("Failed to find content in Google Doc body");
  }
  const elements = response.data.body.content;
  if (!(elements[1] && elements[1].paragraph && elements[1].paragraph.elements)) {
    throw Error("Failed to find title in Google Doc");
  }
  const title = readParagraphElement(elements[1].paragraph.elements[0]);
  let columnIndex;
  let text = "";
  text += title + "\n";
  let warnings = "";
  for (const value of elements) {
    if (value.table) {
      const table = value.table;
      let rowHeaders = __spreadValues({}, extractTableHeaderRow(table));
      if (rowHeaders.Script) {
        columnIndex = rowHeaders.Script;
      } else if (rowHeaders.Audio) {
        columnIndex = rowHeaders.Audio;
      } else {
        columnIndex = Object.keys(rowHeaders).length - 1;
        warnings += `Could not find 'Audio' or 'Script' column to collect spoken word content. Used column ${columnIndex + 1} instead.`;
      }
      if (table.tableRows) {
        for (const row of table.tableRows) {
          if (row.tableCells) {
            const cell = row.tableCells[columnIndex].content;
            if (cell) {
              text += extractParagraphText(cell);
            }
          }
        }
      }
    }
  }
  text = text.replace(/^\s*$(?:\r\n?|\n)/gm, "").replace(/$\n/gm, "\n\n");
  const lastModified = await getLastModifiedTime(id);
  if (lastModified == "unknown") {
    warnings += "\nCould not find last modified time.";
  }
  let meta2 = {
    "title": title,
    "link": link,
    "EstimatedVOMinutes": Math.round(text.trim().split(/\s+/).length / 150 * 100) / 100,
    "lastModified": lastModified,
    "warnings": warnings
  };
  return { "title": title, "text": text, "meta": meta2 };
}
async function getLastModifiedTime(id) {
  const googleDrive = import_googleapis.google.drive("v3");
  const driveResponse = await googleDrive.files.get({
    fileId: id,
    auth: "AIzaSyBW4hVX-R3FAwOtAOtjSvPqWsBuYDCkX1c",
    fields: "modifiedTime"
  });
  return driveResponse.data.modifiedTime ? driveResponse.data.modifiedTime : "unknown";
}
function extractTableHeaderRow(table) {
  let foundColumns = {};
  if (table.tableRows && table.tableRows[0] && table.tableRows[0].tableCells) {
    const nRows = table.tableRows[0].tableCells.length;
    for (let i = 0; i < nRows; i++) {
      let cellContent = table.tableRows[0].tableCells[i].content;
      if (cellContent) {
        let columnText = extractParagraphText(cellContent).trim();
        foundColumns = __spreadValues(__spreadValues({}, foundColumns), { [columnText]: i });
      }
    }
  }
  return foundColumns;
}
function extractParagraphText(element) {
  let text = "";
  for (const value of element) {
    if (value.paragraph && value.paragraph.elements) {
      for (const elem of value.paragraph.elements) {
        text += readParagraphElement(elem);
      }
    }
  }
  return text;
}
function readParagraphElement(element) {
  var _a;
  return ((_a = element == null ? void 0 : element.textRun) == null ? void 0 : _a.content) ?? "";
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tsg-results.tsx
var import_Button3 = __toModule(require("@mui/material/Button"));
var import_Stack3 = __toModule(require("@mui/material/Stack"));
var loader6 = async ({ request }) => {
  var _a;
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix10.redirect)("/login");
  }
  const token = (_a = await user.getCredentials(Service.google)) == null ? void 0 : _a.accessToken;
  if (!token) {
    throw new Error("Could not find GAPI access token.");
  }
  const gapi = new GAPI(request, token);
  return gapi.generateTeleprompterScripts();
};
function TsgResults() {
  const data = (0, import_remix10.useLoaderData)();
  let fileLinks = [];
  let metaJSON = [];
  let zip = new import_jszip.default();
  for (let i = 0; i < data.files.length; i++) {
    const text = data.files[i].text;
    const title = data.files[i].title + ".txt";
    metaJSON.push(data.files[i].meta);
    zip.file(title, text);
    fileLinks.push(/* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
      href: "data:text/plain;charset=utf-8," + encodeURIComponent(text),
      download: title
    }, title)));
  }
  const { Parser } = require("json2csv");
  const parser = new Parser();
  const csv3 = parser.parse(metaJSON);
  zip.file("meta.json", JSON.stringify(metaJSON));
  zip.file("meta.csv", csv3);
  function downloadAll(e) {
    e.preventDefault();
    zip.generateAsync({ type: "base64" }).then(function(base64) {
      window.location = "data:application/zip;base64," + base64;
    }, function(err) {
      throw Error(err);
    });
  }
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Teleprompter Script Generator Results"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Button3.default, {
    variant: "contained",
    onClick: downloadAll
  }, "Download All Documents")), /* @__PURE__ */ React.createElement("ul", {
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
var import_Button4 = __toModule(require("@mui/material/Button"));
var import_Stack4 = __toModule(require("@mui/material/Stack"));
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
  }, transition.state === "submitting" ? /* @__PURE__ */ React.createElement(import_Stack4.default, {
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_CircularProgress2.default, {
    size: "3rem"
  })) : /* @__PURE__ */ React.createElement(import_Stack4.default, {
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
  }), /* @__PURE__ */ React.createElement(import_Button4.default, {
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
var import_Button5 = __toModule(require("@mui/material/Button"));
var import_Stack5 = __toModule(require("@mui/material/Stack"));
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
  }, /* @__PURE__ */ React.createElement(import_Stack5.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix13.Form, {
    action: "/auth/wrike",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
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
var import_Button6 = __toModule(require("@mui/material/Button"));
var import_Stack6 = __toModule(require("@mui/material/Stack"));
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
  }, /* @__PURE__ */ React.createElement(import_Stack6.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/projects/create"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
    variant: "contained"
  }, "New Project")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/video-batch"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
    variant: "contained"
  }, "Video Batch")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "tasks/asset-inventory"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
    variant: "contained"
  }, "Asset Inventory")), /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: "/tsg"
  }, /* @__PURE__ */ React.createElement(import_Button6.default, {
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
var import_Button7 = __toModule(require("@mui/material/Button"));
var import_Stack7 = __toModule(require("@mui/material/Stack"));
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
  }, /* @__PURE__ */ React.createElement(import_Stack7.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix15.Form, {
    action: "/auth/google",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button7.default, {
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
var import_Stack8 = __toModule(require("@mui/material/Stack"));
var import_TextField3 = __toModule(require("@mui/material/TextField"));
var import_Button8 = __toModule(require("@mui/material/Button"));
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
  }, /* @__PURE__ */ import_react7.default.createElement(import_Stack8.default, {
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
  }), /* @__PURE__ */ import_react7.default.createElement(import_Button8.default, {
    type: "submit",
    variant: "contained"
  }, transition.state === "submitting" ? "Generating..." : "Generate"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "2ad3fcd6", "entry": { "module": "/_static/build/entry.client-XZVZ26IX.js", "imports": ["/_static/build/_shared/chunk-LPLRIGGC.js", "/_static/build/_shared/chunk-TTKTKGS4.js", "/_static/build/_shared/chunk-FDP6WGZF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-5SLYXQUH.js", "imports": ["/_static/build/_shared/chunk-7UQRWZKQ.js", "/_static/build/_shared/chunk-ZUQW4HVY.js", "/_static/build/_shared/chunk-VLIETPD6.js", "/_static/build/_shared/chunk-4YJLUBB6.js", "/_static/build/_shared/chunk-DTWNLVCY.js", "/_static/build/_shared/chunk-EHP6ODZX.js", "/_static/build/_shared/chunk-DI2FPYT7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-ZZUNFWWP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-4HVH5USP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-7TQKZ67G.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-O2HWEFTO.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-H4TQQ2CP.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-BZC7MN3T.js", "imports": ["/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-Q23GCLGG.js", "imports": ["/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-PNYQCOGB.js", "imports": ["/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-V55V7JBC.js", "imports": ["/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg": { "id": "routes/tsg", "parentId": "root", "path": "tsg", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-GVZKTJUH.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg-results": { "id": "routes/tsg-results", "parentId": "root", "path": "tsg-results", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-results-BRHTJQC5.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-VN45M7G2.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-2AD3FCD6.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3giLCAiLi4vYXBwL2FwaS9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvVXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQmFzZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaWxlSW5wdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsLnRzeCIsICIuLi9hcHAvYXBpL3V0aWxzL0NTVi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4IiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0N1c3RvbUZpZWxkLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0ZvbGRlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9Qcm9qZWN0LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1NwYWNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Rhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFza1RlbXBsYXRlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1dvcmtmbG93LnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4IiwgIi4uL2FwcC9hcGkvR29vZ2xlL0dBUEkuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvdHNnLXJlc3VsdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RzZy1yZXN1bHRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZy1yZXN1bHRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy92aWRlby1iYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidmlkZW8tYmF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Nvbm5lY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Nvbm5lY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29ubmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL3RzZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHNnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RvY3VtZW50cy5yZWFkb25seVwiICtcblx0XHRcdFx0XHRcIiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSBcIiArXG5cdFx0XHRcdFx0XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLm1ldGFkYXRhLnJlYWRvbmx5IG9wZW5pZCBwcm9maWxlIGVtYWlsXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2UuZ29vZ2xlXG5cdCk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQgJiYgcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCkge1xuXHRhdXRoLnVzZShcblx0XHRuZXcgV3Jpa2VTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9JRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfU0VDUkVULFxuXHRcdFx0XHRjYWxsYmFja1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzMvYXV0aC93cmlrZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJEZWZhdWx0LHdzUmVhZFdyaXRlXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2Uud3Jpa2Vcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Vc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oXG5cdFx0cmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuXHQpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblxuXHRpZiAoIXVzZXJJZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIFVzZXIuZ2V0Rm9ySWQodXNlcklkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gYXN5bmMgKFxuXHRzZXJ2aWNlOiBTZXJ2aWNlLFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZWRpcmVjdHM6IHsgc3VjY2Vzczogc3RyaW5nOyBmYWlsdXJlOiBzdHJpbmcgfVxuKSA9PiB7XG5cdGNvbnN0IHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSB9ID0gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXG5cdFx0c2VydmljZSxcblx0XHRyZXF1ZXN0XG5cdCk7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblxuXHRjb25zb2xlLmxvZyhwcm9maWxlKTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvZmlsZS5pZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJOTyBJRD8hPyE6IFwiLCBwcm9maWxlKTtcblx0XHRcdHRocm93IFwid2hhdFwiO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyZW50VXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZXR0aW5nIEN1cnJlbnQgVXNlcjogXCIsIHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXHRcdFx0Y3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmdldEZvck9hdXRoKHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoIWN1cnJlbnRVc2VyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgdXNlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0c2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgc2V0Q2FjaGVkKGN1cnJlbnRVc2VyKSk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY3VycmVudFVzZXIuc2V0Q3JlZGVudGlhbHMoc2VydmljZSwge1xuXHRcdFx0YWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuXHRcdFx0cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuZmFpbHVyZSk7XG5cdH1cblxuXHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuc3VjY2Vzcywge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzZXNzaW9uU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2sgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHR5cGUge1xuXHRPQXV0aDJQcm9maWxlLFxuXHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4LWF1dGgtb2F1dGgyXCI7XG5pbXBvcnQgeyBPQXV0aDJTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuXG5leHBvcnQgdHlwZSBXcmlrZVN0cmF0ZWd5T3B0aW9ucyA9IHtcblx0Y2xpZW50SUQ6IHN0cmluZztcblx0Y2xpZW50U2VjcmV0OiBzdHJpbmc7XG5cdGNhbGxiYWNrVVJMOiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zID0ge1xuXHRzY29wZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9maWxlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0X2pzb246IHtcblx0XHRraW5kczogc3RyaW5nO1xuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XTtcblx0fTtcblx0cHJvdmlkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBXcmlrZVN0cmF0ZWd5PFVzZXI+IGV4dGVuZHMgT0F1dGgyU3RyYXRlZ3k8XG5cdFVzZXIsXG5cdFdyaWtlUHJvZmlsZSxcblx0V3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zXG4+IHtcblx0cHJpdmF0ZSByZWFkb25seSB1c2VySW5mb1VSTCA9XG5cdFx0XCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L2NvbnRhY3RzP21lPXRydWVcIjtcblx0cHJpdmF0ZSBzY29wZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM6IFdyaWtlU3RyYXRlZ3lPcHRpb25zLFxuXHRcdHZlcmlmeTogU3RyYXRlZ3lWZXJpZnlDYWxsYmFjazxcblx0XHRcdFVzZXIsXG5cdFx0XHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtczxXcmlrZVByb2ZpbGUsIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcz5cblx0XHQ+XG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0e1xuXHRcdFx0XHRhdXRob3JpemF0aW9uVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi9hdXRob3JpemUvdjRcIixcblx0XHRcdFx0dG9rZW5VUkw6IFwiaHR0cHM6Ly9sb2dpbi53cmlrZS5jb20vb2F1dGgyL3Rva2VuXCIsXG5cdFx0XHRcdGNsaWVudElEOiBvcHRpb25zLmNsaWVudElELFxuXHRcdFx0XHRjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuXHRcdFx0XHRjYWxsYmFja1VSTDogb3B0aW9ucy5jYWxsYmFja1VSTCxcblx0XHRcdH0sXG5cdFx0XHR2ZXJpZnlcblx0XHQpO1xuXG5cdFx0dGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXV0aG9yaXphdGlvblBhcmFtcygpOiBVUkxTZWFyY2hQYXJhbXMge1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdGlmICh0aGlzLnNjb3BlKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwic2NvcGVcIiwgdGhpcy5zY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyB1c2VyUHJvZmlsZShhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVByb2ZpbGU+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXNlckluZm9VUkwsIHtcblx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAgfSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHBheWxvYWQ6IFdyaWtlUHJvZmlsZVtcIl9qc29uXCJdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGFbMF07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGRhdGEuaWQsXG5cdFx0XHRmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG5cdFx0XHRfanNvbjogcGF5bG9hZCxcblx0XHRcdHByb3ZpZGVyOiBcIndyaWtlXCIsXG5cdFx0fTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2RhdGFiYXNlL1RhYmxlLnNlcnZlclwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuaW1wb3J0IENyZWRlbnRpYWwsIHsgU2VydmljZSwgVG9rZW5zIH0gZnJvbSBcIi4vQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuY29uc3QgRXhpc3RpbmcgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRDYWNoZWQgPSAodXNlcjogVXNlcikgPT4gKFxuXHRFeGlzdGluZy5zZXQodXNlci51c2VySWQsIHVzZXIpLCB1c2VyLnVzZXJJZFxuKTtcbmV4cG9ydCBjb25zdCBnZXRDYWNoZWQgPSAodXNlcklkOiBzdHJpbmcpID0+IEV4aXN0aW5nLmdldCh1c2VySWQpO1xuXG5jbGFzcyBPYXV0aElkIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIk9hdXRoSWRzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHByb2ZpbGVJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6Lm5hdGl2ZUVudW0oU2VydmljZSksXG5cdFx0dXNlcklkOiB6LnN0cmluZygpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgZmluZE9yQ3JlYXRlKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyBwcm9maWxlSWQsIHNlcnZpY2UgfSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHJldHVybiBleGlzdGluZztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFibGUucHV0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlLCB1c2VySWQ6IHV1aWQoKSB9KTtcblx0fVxuXG5cdGRhdGE6IHouaW5mZXI8dHlwZW9mIE9hdXRoSWQuU2NoZW1hPiB8IHVuZGVmaW5lZDtcblxuXHRnZXQgcHJvZmlsZUlkKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnByb2ZpbGVJZCA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHNlcnZpY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uc2VydmljZSA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0c3RhdGljIGFzeW5jIGdldEZvck9hdXRoKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3Qgb2F1dGhJZCA9IGF3YWl0IE9hdXRoSWQuZmluZE9yQ3JlYXRlKHByb2ZpbGVJZCwgc2VydmljZSk7XG5cblx0XHRpZiAoIW9hdXRoSWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVXNlcihvYXV0aElkLnVzZXJJZCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Rm9ySWQodXNlcklkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFVzZXIodXNlcklkKTtcblx0fVxuXG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgY3JlZGVudGlhbHM6IE1hcDxTZXJ2aWNlLCBDcmVkZW50aWFsPjtcblxuXHRjb25zdHJ1Y3Rvcih1c2VySWQ6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdHJldHVybiBDcmVkZW50aWFsLmFkZE9yVXBkYXRlKHRoaXMudXNlcklkLCBzZXJ2aWNlLCB0b2tlbnMpO1xuXHR9XG5cblx0YXN5bmMgZ2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscy5oYXMoc2VydmljZSkpIHtcblx0XHRcdGNvbnN0IGNyZWQgPSBhd2FpdCBDcmVkZW50aWFsLmdldENyZWRlbnRpYWwodGhpcy51c2VySWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoY3JlZCkge1xuXHRcdFx0XHR0aGlzLmNyZWRlbnRpYWxzLnNldChzZXJ2aWNlLCBjcmVkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoc2VydmljZSk7XG5cdH1cblxuXHRhc3luYyBoYXNDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgY3JlZCA9IGF3YWl0IHRoaXMuZ2V0Q3JlZGVudGlhbHMoc2VydmljZSk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbihjcmVkKTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVsIHtcblx0c3RhdGljIFRhYmxlTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHN0YXRpYyBTY2hlbWEgPSB6Lm9iamVjdCh7fSk7XG5cblx0c3RhdGljIGdldFRhYmxlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4odGhpczogVCkge1xuXHRcdHJldHVybiBuZXcgVGFibGU8SW5zdGFuY2VUeXBlPFQ+Pih0aGlzLlRhYmxlTmFtZSwgKC4uLmFyZ3MpID0+XG5cdFx0XHR0aGlzLmNyZWF0ZSguLi5hcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4oXG5cdFx0dGhpczogVCxcblx0XHRyYXc6IG9iamVjdFxuXHQpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMocmF3KSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdH1cblxuXHRkYXRhOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocmF3OiBvYmplY3QpIHtcblx0XHR0aGlzLmRhdGEgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQmFzZU1vZGVsKS5TY2hlbWEucGFyc2UocmF3KTtcblx0fVxufVxuIiwgImltcG9ydCBhcmMgZnJvbSBcIkBhcmNoaXRlY3QvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBBcmNUYWJsZSB9IGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9ucy90YWJsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGU8VD4ge1xuXHRwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgdGFibGU6IEFyY1RhYmxlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgcGFyc2U6IChyYXc6IG9iamVjdCkgPT4gVDtcblxuXHRjb25zdHJ1Y3Rvcih0YWJsZU5hbWU6IHN0cmluZyB8IG51bGwsIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQpIHtcblx0XHRpZiAoIXRhYmxlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGFibGUgbXVzdCBiZSBnaXZlbiBhIHRhYmxlIG5hbWUuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMudGFibGVOYW1lID0gdGFibGVOYW1lO1xuXHRcdHRoaXMucGFyc2UgPSBwYXJzZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnRhYmxlTmFtZTtcblx0fVxuXG5cdGFzeW5jIHNldHVwVGFibGUoKSB7XG5cdFx0aWYgKCF0aGlzLnRhYmxlKSB7XG5cdFx0XHRjb25zdCB0YWJsZXMgPSBhd2FpdCBhcmMudGFibGVzKCk7XG5cblx0XHRcdHRoaXMudGFibGUgPSB0YWJsZXNbdGhpcy50YWJsZU5hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRhYmxlO1xuXHR9XG5cblx0YXN5bmMgZ2V0KGtleTogYW55KSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLnNldHVwVGFibGUoKTtcblx0XHRjb25zdCByZXNwID0gYXdhaXQgdGFibGUuZ2V0KGtleSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgcHV0KGRhdGE6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLnB1dChkYXRhKTtcblxuXHRcdHJldHVybiByZXNwID8gdGhpcy5wYXJzZShyZXNwKSA6IG51bGw7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUocXVlcnk6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cblx0XHRhd2FpdCB0YWJsZS51cGRhdGUocXVlcnkpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHogZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBUb2tlbnMgPSB7XG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdHJlZnJlc2hUb2tlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG5cdGdvb2dsZSA9IFwiZ29vZ2xlXCIsXG5cdHdyaWtlID0gXCJ3cmlrZVwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIkNyZWRlbnRpYWxzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6LmVudW0oW1wiZ29vZ2xlXCIsIFwid3Jpa2VcIl0pLFxuXHRcdGFjY2Vzc1Rva2VuOiB6LnN0cmluZygpLFxuXHRcdC8vIHJlZnJlc2hUb2tlbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgYWRkT3JVcGRhdGUodXNlcklkOiBzdHJpbmcsIHNlcnZpY2U6IFNlcnZpY2UsIHRva2VuczogVG9rZW5zKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3Qga2V5ID0geyB1c2VySWQsIHNlcnZpY2UgfTtcblx0XHRjb25zb2xlLmxvZyhcImFkZGluZyBjcmVkZW50aWFsOiBcIiwga2V5KTtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRhd2FpdCB0YWJsZS51cGRhdGUoe1xuXHRcdFx0XHRLZXk6IGtleSxcblx0XHRcdFx0VXBkYXRlRXhwcmVzc2lvbjogXCJTRVQgYWNjZXNzVG9rZW4gPSA6YWNjZXNzVG9rZW5cIixcblx0XHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHRcdFwiOmFjY2Vzc1Rva2VuXCI6IHRva2Vucy5hY2Nlc3NUb2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCB0YWJsZS5wdXQoe1xuXHRcdFx0XHR1c2VySWQsXG5cdFx0XHRcdHNlcnZpY2UsXG5cdFx0XHRcdC4uLnRva2Vucyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRDcmVkZW50aWFsKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyB1c2VySWQsIHNlcnZpY2UgfSk7XG5cblx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBDcmVkZW50aWFsLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBhY2Nlc3NUb2tlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5hY2Nlc3NUb2tlbiA/PyBcIlwiO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcIm50aS5zZXNzaW9uXCIsXG5cdFx0c2FtZVNpdGU6IFwibGF4XCIsXG5cdFx0cGF0aDogXCIvXCIsXG5cdFx0c2VjcmV0czogW1wiTjN4dFRoMHVnaHQhIUNcIl0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHtcblx0Rm9ybSxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHR1c2VBY3Rpb25EYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxuXHRqc29uLFxuXHRyZWRpcmVjdCxcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdHVhbEZpbGVPYmplY3QgfSBmcm9tIFwiZmlsZXBvbmRcIjtcbmltcG9ydCAqIGFzIEhUTUxQYXJzZXIgZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQgeyB1c2VCbG9iLCB1c2VPYmplY3RVUkwgfSBmcm9tIFwifi9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0ICogYXMgQ1NWIGZyb20gXCJ+L2FwaS91dGlscy9DU1Yuc2VydmVyXCI7XG5cbmNvbnN0IFZlbmRvck9yZGVyID0gW1wiR2V0dHkgSW1hZ2VzXCIsIFwiU2h1dHRlcnN0b2NrXCIsIFwiVW5rbm93blwiXTtcblxudHlwZSBJbWFnZU9iamVjdCA9IHtcblx0XCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCI7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGF1dGhvcjoge1xuXHRcdG5hbWU6IHN0cmluZztcblx0fTtcbn07XG5cbnR5cGUgSW52ZW50b3J5ID0ge1xuXHR0eXBlOiBcInZpZGVvXCIgfCBcInBob3RvXCIgfCBcImF1ZGlvXCIgfCBcInVua25vd25cIjtcblx0ZmlsZW5hbWU6IHN0cmluZztcblx0dmVuZG9yOiBzdHJpbmc7XG5cblx0Y29kZT86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRoZWFkbGluZT86IHN0cmluZztcblx0Y3JlZGl0bGluZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogXCJodHRwczovL3VucGtnLmNvbS9maWxlcG9uZEBeNC9kaXN0L2ZpbGVwb25kLmNzc1wiLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvYWQ6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicmVwb3J0XCIpIGFzIEZpbGU7XG5cdGNvbnN0IHJlcG9ydCA9IGF3YWl0IHBhcnNlUmVwb3J0KGZpbGUpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lID0gcmVwb3J0W1wiUHJvamVjdCBuYW1lXCJdO1xuXHRjb25zdCBpbnZlbnRvcnkgPSAoYXdhaXQgZ2V0QXNzZXRJbnZlbnRvcnkocmVwb3J0KSkuc29ydChcblx0XHQoYSwgYikgPT4gVmVuZG9yT3JkZXIuaW5kZXhPZihhLnZlbmRvcikgLSBWZW5kb3JPcmRlci5pbmRleE9mKGIudmVuZG9yKVxuXHQpO1xuXG5cdGNvbnN0IGNzdiA9IGF3YWl0IENTVi5mb3JtYXQoaW52ZW50b3J5LCB7XG5cdFx0aGVhZGVyczogW1xuXHRcdFx0XCJoZWFkbGluZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcInZlbmRvclwiLFxuXHRcdFx0XCJmaWxlbmFtZVwiLFxuXHRcdFx0XCJjb2RlXCIsXG5cdFx0XHRcImNvbGxlY3Rpb25cIixcblx0XHRcdFwiY3JlZGl0bGluZVwiLFxuXHRcdFx0XCJ1cmxcIixcblx0XHRdLFxuXHR9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y3N2LFxuXHRcdHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVswXS50cmltKCkucmVwbGFjZSgvXFwuLiokLywgXCJcIiksXG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXRJbnZlbnRvcnkoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cdGNvbnN0IGFjdGlvbiA9IHVzZUFjdGlvbkRhdGEoKTtcblxuXHRjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEFjdHVhbEZpbGVPYmplY3RbXSB8IHVuZGVmaW5lZD4oXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cblx0Y29uc3Qgc2hvd1NhdmluZyA9XG5cdFx0dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCI7XG5cdGNvbnN0IHNob3dEb3dubG9hZCA9ICFzaG93U2F2aW5nICYmIGFjdGlvbjtcblx0Y29uc3Qgc2hvd0Zvcm0gPSAhc2hvd1NhdmluZyAmJiAhc2hvd0Rvd25sb2FkO1xuXG5cdGNvbnN0IGNzdiA9IHVzZUJsb2IoYWN0aW9uPy5jc3YsIFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtODtcIik7XG5cdGNvbnN0IGRvd25sb2FkVVJMID0gdXNlT2JqZWN0VVJMKGNzdik7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkFzc2V0IEludmVudG9yeVwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdHshc2hvd0Rvd25sb2FkIHx8ICFkb3dubG9hZFVSTCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2Rvd25sb2FkVVJMfVxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZD17YCR7YWN0aW9uPy5wcm9qZWN0TmFtZX0tYXNzZXQtaW52ZW50b3J5LmNzdmB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkRvd25sb2FkPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93U2F2aW5nID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0R2VuZXJhdGluZy4uLlxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd0Zvcm0gPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG5cdFx0XHRcdFx0XHRcdEFmdGVyIEVmZmVjdHMgRGVwZW5kZW5jeSBSZXBvcnRcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0RmlsZSAmZ3Q7IERlcGVuZGVuY2llcyAmZ3Q7IENvbGxlY3QgRmlsZXNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicmVwb3J0XCJcblx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRvbnVwZGF0ZWZpbGVzPXsoaXRlbXMpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRDb21waWxlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuY29uc3QgZ2V0SFRNTCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG5cdHJldHVybiBIVE1MUGFyc2VyLnBhcnNlKHRleHQsIHtcblx0XHRibG9ja1RleHRFbGVtZW50czogeyBzdHlsZTogZmFsc2UgfSxcblx0fSk7XG59O1xuXG5jb25zdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbWFnZU9iamVjdD4gPT4ge1xuXHRjb25zdCBodG1sID0gYXdhaXQgZ2V0SFRNTCh1cmwpO1xuXHRjb25zdCBsaW5rRGF0YSA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcblx0XHRcInNjcmlwdFt0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ11cIlxuXHQpO1xuXG5cdGZvciAobGV0IGRhdGEgb2YgbGlua0RhdGEpIHtcblx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpIGFzIEltYWdlT2JqZWN0O1xuXG5cdFx0aWYgKGpzb25bXCJAdHlwZVwiXSAhPT0gXCJJbWFnZU9iamVjdFwiKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgSW1hZ2VPYmplY3Q6ICR7dXJsfWApO1xufTtcblxuY29uc3QgaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdCA9IChvYmo6IEltYWdlT2JqZWN0KSA9PiBvYmouZGVzY3JpcHRpb247XG5jb25zdCBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0ID0gKG9iajogSW1hZ2VPYmplY3QpID0+IG9iai5hdXRob3IubmFtZTtcblxuY29uc3QgVHlwZXNUb0V4dGVuc2lvbiA9IHtcblx0dmlkZW86IFtcIi5tcDRcIiwgXCIubW92XCIsIFwiLm1wZ1wiXSxcblx0cGhvdG86IFtcIi5qcGVnXCIsIFwiLmpwZ1wiLCBcIi5wbmdcIiwgXCIudGlmXCIsIFwiLndlYm1cIl0sXG5cdGF1ZGlvOiBbXCIubXAzXCIsIFwiLndhdlwiXSxcbn07XG5cbmNvbnN0IGdldFR5cGVGcm9tRXh0ZW5zaW9uID0gKFxuXHRleHQ6IHN0cmluZ1xuKToga2V5b2YgdHlwZW9mIFR5cGVzVG9FeHRlbnNpb24gfCBcInVua25vd25cIiA9PiB7XG5cdGZvciAobGV0IFt0eXBlLCBleHRlbnNpb25zXSBvZiBPYmplY3QuZW50cmllcyhUeXBlc1RvRXh0ZW5zaW9uKSkge1xuXHRcdGlmIChleHRlbnNpb25zLmluY2x1ZGVzKGV4dCkpIHtcblx0XHRcdHJldHVybiB0eXBlIGFzIGtleW9mIHR5cGVvZiBUeXBlc1RvRXh0ZW5zaW9uO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBcInVua25vd25cIjtcbn07XG5cbmNvbnN0IEdldHR5UmVnZXggPSAvXihnZXR0eWltYWdlc3xHZXR0eUltYWdlcylcXC0oXFxkKykvO1xuY29uc3QgU2h1dHRlclJlZ2V4ID0gL14oc2h1dHRlcnN0b2NrKV8oXFxkKykvO1xuXG5jb25zdCBHZXR0eUFydGlzdFRpdGxlQmxhY2tMaXN0OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHtcblx0Y29udHJpYnV0b3I6IHRydWUsXG5cdG5vbmU6IHRydWUsXG59O1xuXG5jb25zdCBDYXBpdGFsaXplID0gKHM6IHN0cmluZykgPT4gYCR7cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbmNvbnN0IFRpdGxlQ2FzZSA9IChzOiBzdHJpbmcpID0+IHMuc3BsaXQoXCIgXCIpLm1hcChDYXBpdGFsaXplKS5qb2luKFwiIFwiKTtcblxuY29uc3QgSW5mb0dldHRlcnMgPSBbXG5cdHtcblx0XHQvLyBHZXR0eSBJbWFnZXNcblx0XHRoYW5kbGVzOiAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IEdldHR5UmVnZXgudGVzdChmaWxlbmFtZSksXG5cdFx0aW5mbzogYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBtYXRjaCA9IGZpbGVuYW1lLm1hdGNoKEdldHR5UmVnZXgpO1xuXHRcdFx0Y29uc3QgaWQgPSBtYXRjaD8uWzJdO1xuXG5cdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCBHZXR0eUltYWdlIGlkOiAke2ZpbGVuYW1lfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB1cmwgPSBgaHR0cDovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLyR7aWR9YDtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCBnZXRIVE1MKHVybCk7XG5cblx0XHRcdGNvbnN0IGFzc2V0RGV0YWlsc1NjcmlwdCA9IGh0bWwucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0J3NjcmlwdFtkYXRhLWNvbXBvbmVudD1cImFzc2V0ZGV0YWlsXCJdJ1xuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgYXNzZXREZXRhaWxzID0gYXNzZXREZXRhaWxzU2NyaXB0XG5cdFx0XHRcdD8gSlNPTi5wYXJzZShhc3NldERldGFpbHNTY3JpcHQudGV4dClcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpZiAoIWFzc2V0RGV0YWlscykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0YFVuYWJsZSB0byBnZXQgR2V0dHkgSW1hZ2VzIGFzc2V0IGRldGFpbHM6ICR7dXJsfWBcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIkdldHR5IEltYWdlc1wiLFxuXHRcdFx0XHRjb2RlOiBpZCxcblx0XHRcdFx0dXJsLFxuXG5cdFx0XHRcdGhlYWRsaW5lOiBhc3NldERldGFpbHMuYXNzZXQudGl0bGUsXG5cdFx0XHRcdGNyZWRpdGxpbmU6IEdldHR5W2Fzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZV1cblx0XHRcdFx0XHQ/IGFzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJcblx0XHRcdFx0XHQ6IGAke2Fzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJ9IC8gJHtUaXRsZUNhc2UoXG5cdFx0XHRcdFx0XHRcdGFzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZVxuXHRcdFx0XHRcdCAgKX1gLFxuXHRcdFx0XHRjb2xsZWN0aW9uOiBhc3NldERldGFpbHMuYXNzZXQuY29sbGVjdGlvbkRpc3BsYXlOYW1lLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0Ly9TaHV0dGVyc3RvY2tcblx0XHRoYW5kbGVzOiAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IFNodXR0ZXJSZWdleC50ZXN0KGZpbGVuYW1lKSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goU2h1dHRlclJlZ2V4KTtcblx0XHRcdGNvbnN0IGlkID0gbWF0Y2g/LlsyXTtcblxuXHRcdFx0aWYgKCFpZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IFNodXR0ZXJTdG9jayBpZDogJHtmaWxlbmFtZX1cIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvLyR7aWR9YDtcblxuXHRcdFx0Y29uc3QgaW1hZ2VPYmplY3QgPSBhd2FpdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhKHVybCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJTaHV0dGVyc3RvY2tcIixcblx0XHRcdFx0Y29kZTogaWQsXG5cdFx0XHRcdHVybCxcblxuXHRcdFx0XHRoZWFkbGluZTogaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdChpbWFnZU9iamVjdCksXG5cdFx0XHRcdGNyZWRpdGxpbmU6IGNyZWRpdGxpbmVGcm9tSW1hZ2VPYmplY3QoaW1hZ2VPYmplY3QpLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0Ly9BcnRsaXN0XG5cdFx0aGFuZGxlczogKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PlxuXHRcdFx0ZmlsZW5hbWUuaW5kZXhPZihcIkFydGxpc3RcIikgIT09IC0xLFxuXHRcdGluZm86IGFzeW5jIChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIkFydGxpc3QuaW9cIixcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbl07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0SW52ZW50b3J5KFxuXHRyZXBvcnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuKTogUHJvbWlzZTxJbnZlbnRvcnlbXT4ge1xuXHRjb25zdCBzb3VyY2VzID0gcmVwb3J0W1wiQ29sbGVjdGVkIHNvdXJjZSBmaWxlc1wiXSBhcyBzdHJpbmdbXTtcblxuXHRjb25zdCBpbnZlbnRvcmllcyA9IHNvdXJjZXMucmVkdWNlKFxuXHRcdChhY2M6IFByb21pc2U8SW52ZW50b3J5PltdLCBzb3VyY2U6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHNvdXJjZSk7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlLCBleHRlbnNpb24pO1xuXG5cdFx0XHRjb25zdCBnZXR0ZXIgPSBJbmZvR2V0dGVycy5maW5kKChnKSA9PlxuXHRcdFx0XHRnLmhhbmRsZXMoZmlsZW5hbWUsIGV4dGVuc2lvbilcblx0XHRcdCk7XG5cblx0XHRcdGlmICghZ2V0dGVyKSB7XG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdFx0dmVuZG9yOiBcIlVua25vd25cIixcblx0XHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0Z2V0dGVyLmluZm8oZmlsZW5hbWUsIGV4dGVuc2lvbikudGhlbigoaW5mbykgPT4gKHtcblx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0Li4uaW5mbyxcblx0XHRcdFx0fSkpLFxuXHRcdFx0XTtcblx0XHR9LFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGludmVudG9yaWVzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VSZXBvcnQoZmlsZTogRmlsZSkge1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxyXCIpO1xuXG5cdGNvbnN0IGdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGxldCBjdXJyZW50U2VjdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Zm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuXHRcdGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcblx0XHRjb25zdCBkZXB0aCA9IHBhcnRzLmxlbmd0aCAtIDE7XG5cdFx0Y29uc3QgbGluZVRleHQgPSBwYXJ0c1tkZXB0aF0udHJpbSgpO1xuXG5cdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRjb25zdCBbbmFtZSwgdmFsdWVdID0gbGluZVRleHQuc3BsaXQoXCI6XCIpO1xuXG5cdFx0XHRncm91cHNbbmFtZV0gPSBncm91cHNbbmFtZV0gPz8gW107XG5cblx0XHRcdGlmICh2YWx1ZT8udHJpbSgpKSB7XG5cdFx0XHRcdGdyb3Vwc1tuYW1lXS5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudFNlY3Rpb24gPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWN1cnJlbnRTZWN0aW9uKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUmVwb3J0XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRncm91cHNbY3VycmVudFNlY3Rpb25dLnB1c2gobGluZVRleHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncm91cHM7XG59XG4iLCAiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyB0aXRsZSwgY2hpbGRyZW4gfTogUGFnZVByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbXQ6IDEwIH19PlxuXHRcdFx0PFBhcGVyIGVsZXZhdGlvbj17M30gc3g9e3sgcHk6IDMgfX0+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDFcIiBtYj17NX0+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvUGFwZXI+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgRmlsZVBvbmQgfSBmcm9tIFwicmVhY3QtZmlsZXBvbmRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoRmlsZVBvbmQpYFxuXHR3aWR0aDogMzAwcHg7XG5cblx0JiAuZmlsZXBvbmQtLWNyZWRpdHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJvcC1sYWJlbCB7XG5cdFx0Y29sb3I6ICM0YzRlNTM7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tbGFiZWwtYWN0aW9uIHtcblx0XHR0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNiYWJkYzA7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tcGFuZWwtcm9vdCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjQ7XG5cdFx0aGVpZ2h0OiAxZW07XG5cdH1cblxuXHQmIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzU5NWU2ODtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1kcmlwLWJsb2Ige1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3ZjhhOWE7XG5cdH1cbmA7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvYihjb250ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiB7XG5cdFx0aWYgKCFjb250ZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGUgfSk7XG5cdH0sIFtjb250ZW50LCB0eXBlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VPYmplY3RVUkwoYmxvYjogQmxvYiB8IG51bGwpIHtcblx0Y29uc3QgW29iamVjdFVSTCwgc2V0T2JqZWN0VVJMXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFibG9iKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRzZXRPYmplY3RVUkwodXJsKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5cdFx0XHRzZXRPYmplY3RVUkwobnVsbCk7XG5cdFx0fTtcblx0fSwgW2Jsb2JdKTtcblxuXHRyZXR1cm4gb2JqZWN0VVJMO1xufVxuIiwgImltcG9ydCAqIGFzIENTVkZvcm1hdCBmcm9tIFwiQGZhc3QtY3N2L2Zvcm1hdFwiO1xuXG50eXBlIFJvdyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG5cdHJvd3M6IFJvd1tdLFxuXHRvcHRpb25zOiBDU1ZGb3JtYXQuRm9ybWF0dGVyT3B0aW9uc0FyZ3M8Um93LCBSb3c+XG4pOiBQcm9taXNlPHN0cmluZz4ge1xuXHRyZXR1cm4gQ1NWRm9ybWF0LndyaXRlVG9TdHJpbmcocm93cywgb3B0aW9ucyk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudCA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENsaWVudFJlc3BvbnNlID0ge1xuXHRjbGllbnRzOiBDbGllbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuXG5cdGNvbnN0IHNwYWNlSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNwYWNlSWRcIik7XG5cdGNvbnN0IFdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRpZiAoIXNwYWNlSWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJNdXN0IGhhdmUgYSBzcGFjZUlkXCIsIHsgc3RhdHVzOiA0MjIgfSk7XG5cdH1cblxuXHRjb25zdCBmb2xkZXJzID0gYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21TcGFjZShzcGFjZUlkLCB7IHByb2plY3Q6IGZhbHNlIH0pO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRjbGllbnRzOiBmb2xkZXJzLm1hcCgoZikgPT4gKHsgaWQ6IGYuaWQsIHRpdGxlOiBmLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIENyZWRlbnRpYWwgZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwiLi4vYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXJDbGFzcyB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VQcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9Qcm9qZWN0LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0NsYXNzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuXG5jb25zdCBCYXNlVVJMID0gXCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L1wiO1xuXG50eXBlIEZldGNoQ29uZmlnID0ge1xuXHRtZXRob2Q6IHN0cmluZztcblx0aGVhZGVyczoge1xuXHRcdEF1dGhvcml6YXRpb246IHN0cmluZztcblx0XHRcIkNvbnRlbnQtVHlwZVwiPzogc3RyaW5nO1xuXHR9O1xuXHRib2R5Pzogc3RyaW5nO1xuXHRzaWduYWw/OiBBYm9ydFNpZ25hbDtcbn07XG5cbmNvbnN0IGVuY29kZVZhbHVlID0gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gYFske3ZhbHVlLm1hcCgoaSkgPT4gYFwiJHtlbmNvZGVWYWx1ZShpKX1cImApLmpvaW4oXCIsXCIpfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VDbGllbnQge1xuXHRzdGF0aWMgYXN5bmMgZm9yU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRcdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdFx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkLCB1c2VyPy51c2VySWQpO1xuXHR9XG5cblx0Q3VzdG9tRmllbGQ6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcztcblx0Rm9sZGVyOiBXcmlrZUZvbGRlckNsYXNzO1xuXHRQcm9qZWN0OiBXcmlrZVByb2plY3RDbGFzcztcblx0U3BhY2U6IFdyaWtlU3BhY2VDbGFzcztcblx0VGFzazogV3Jpa2VUYXNrQ2xhc3M7XG5cdFRhc2tUZW1wbGF0ZTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcztcblx0VmlkZW9CYXRjaDogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzO1xuXHRXb3JrZmxvdzogV3Jpa2VXb3JrRmxvd0NsYXNzO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY3JlZGVudGlhbHM6IENyZWRlbnRpYWwsXG5cdFx0cHVibGljIHVzZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkXG5cdCkge1xuXHRcdHRoaXMuQ3VzdG9tRmllbGQgPSBjcmVhdGVDdXN0b21GaWVsZENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuRm9sZGVyID0gY3JlYXRlRm9sZGVyQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Qcm9qZWN0ID0gY3JlYXRlUHJvamVjdENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuU3BhY2UgPSBjcmVhdGVTcGFjZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVGFzayA9IGNyZWF0ZVRhc2tDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2tUZW1wbGF0ZSA9IGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVmlkZW9CYXRjaCA9IGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Xb3JrZmxvdyA9IGNyZWF0ZVdvcmtGbG93Q2xhc3ModGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGZldGNoPFQgPSB7fT4oXG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0bWV0aG9kOiBzdHJpbmcsXG5cdFx0ZGF0YT86IG9iamVjdFxuXHQpOiBQcm9taXNlPFQ+IHtcblx0XHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdGNvbnN0IGNvbmZpZzogRmV0Y2hDb25maWcgPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNyZWRlbnRpYWxzLmFjY2Vzc1Rva2VufWAsXG5cdFx0XHR9LFxuXHRcdFx0c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcblx0XHR9O1xuXG5cdFx0aWYgKGRhdGEgJiYgY29uZmlnLmhlYWRlcnMpIHtcblx0XHRcdGNvbmZpZy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID1cblx0XHRcdFx0XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcblx0XHR9XG5cblx0XHRpZiAoZGF0YSkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG5cdFx0XHRPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdFx0cGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbmZpZy5ib2R5ID0gcGFyYW1zLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coXCJXUklLRSBSZXF1ZXN0OiBcIiwgdXJsLCBtZXRob2QsIGNvbmZpZy5ib2R5LCBkYXRhKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCAxMDAwMCk7XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKTtcblx0XHRjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJHb3QgV1JJS0UgUmVzcG9uc2U6IFwiLCBqc29uKTtcblxuXHRcdGlmIChqc29uLmVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoanNvbi5lcnJvckRlc2NyaXB0aW9uKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbiBhcyBUO1xuXHR9XG5cblx0Z2V0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgcGFyYW1zOiBvYmplY3QgPSB7fSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7QmFzZVVSTH0ke3BhdGh9YCk7XG5cblx0XHRPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgZW5jb2RlVmFsdWUodmFsdWUpKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPih1cmwudG9TdHJpbmcoKSwgXCJHRVRcIik7XG5cdH1cblxuXHRwb3N0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgZGF0YTogb2JqZWN0ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPihgJHtCYXNlVVJMfSR7cGF0aH1gLCBcIlBPU1RcIiwgZGF0YSk7XG5cdH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIEN1c3RvbUZpZWxkUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG59O1xuXG50eXBlIEN1c3RvbUZpZWxkUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogQ3VzdG9tRmllbGRSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VDdXN0b21GaWVsZENsYXNzID0ge1xuXHRuZXcgKHJhdzogQ3VzdG9tRmllbGRSYXcpOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2U7XG5cblx0ZnJvbUlkczogKGlkOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VDdXN0b21GaWVsZENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlQ3VzdG9tRmllbGRDbGllbnQgaW1wbGVtZW50cyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxDdXN0b21GaWVsZFJlc3BvbnNlPihcblx0XHRcdFx0YGN1c3RvbWZpZWxkcy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocmF3KSA9PiBuZXcgQ2xzKHJhdykpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCByYXc6IEN1c3RvbUZpZWxkUmF3O1xuXG5cdFx0Y29uc3RydWN0b3IocmF3OiBDdXN0b21GaWVsZFJhdykge1xuXHRcdFx0dGhpcy5yYXcgPSByYXc7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cdFx0Z2V0IHR5cGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnR5cGU7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgUHJvamVjdEluZm9SYXcgPSB7XG5cdG93bmVySWQ6IHN0cmluZztcbn07XG5cbnR5cGUgRm9sZGVyUmF3ID0ge1xuXHRpZD86IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhdztcblx0Y2hpbGRJZHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107IC8vb25seSBwcmVzZW50IGlmIHRoZSBmb2xkZXIgaXMgZmV0Y2hlZCBieSBpZC4uLlxufTtcblxudHlwZSBUcmVlUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogRm9sZGVyUmF3W107XG59O1xuXG50eXBlIEZvbGRlclNhdmVDb25maWcgPSB7XG5cdHBhcmVudEZvbGRlcklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlRm9sZGVySW5zdGFuY2Uge1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cblx0c2F2ZTogKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcblxuXHRnZXRQYXJlbnRGb2xkZXI6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGdldENoaWxkRm9sZGVyczogKCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+O1xuXHRmaW5kQ29uZmlnRm9sZGVyOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckNsYXNzIHtcblx0bmV3IChyYXc6IEZvbGRlclJhdyk6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cblx0ZnJvbVNwYWNlOiAoXG5cdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHQpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbUlEczogKGlkczogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbVBlcm1hTGluazogKGlkOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGNyZWF0ZTogKFxuXHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlRm9sZGVyQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VGb2xkZXJDbGllbnQgaW1wbGVtZW50cyBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVNwYWNlKFxuXHRcdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdFx0cGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cdFx0KTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXG5cdFx0XHRcdGAvc3BhY2VzLyR7c3BhY2VJZH0vZm9sZGVyc2AsXG5cdFx0XHRcdHBhcmFtc1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21JRHMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgZm9sZGVycy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhsaW5rOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRyZWUgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXCJmb2xkZXJzXCIsIHtcblx0XHRcdFx0cGVybWFsaW5rOiBsaW5rLFxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IHRyZWUuZGF0YVswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudChmb2xkZXIpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBjcmVhdGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRcdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhd1xuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCB9KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogRm9sZGVyUmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXHRcdGdldCBkZXNjcmlwdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5kZXNjcmlwdGlvbjtcblx0XHR9XG5cdFx0Z2V0IHByb2plY3QoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucHJvamVjdDtcblx0XHR9XG5cdFx0Z2V0IGNoaWxkSWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmNoaWxkSWRzO1xuXHRcdH1cblx0XHRnZXQgcGFyZW50SWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PEZvbGRlclJhdz4oXG5cdFx0XHRcdGBmb2xkZXIvJHtjb25maWcucGFyZW50Rm9sZGVySWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24gPz8gXCJcIixcblx0XHRcdFx0XHRwcm9qZWN0OiB0aGlzLnByb2plY3QgPz8gZmFsc2UsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucmF3ID0gcmVzcDtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBwYXJlbnRGb2xkZXI6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4gfCB1bmRlZmluZWQ7XG5cdFx0YXN5bmMgZ2V0UGFyZW50Rm9sZGVyKCkge1xuXHRcdFx0Y29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLnBhcmVudElkcyB8fCB0aGlzLnBhcmVudElkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHBhcmVudFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmZyb21JRHMoW3RoaXMucGFyZW50SWRzWzBdXSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3BbMF07XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnBhcmVudEZvbGRlciA9IHRoaXMucGFyZW50Rm9sZGVyID8/IGxvYWQoKTtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudEZvbGRlcjtcblx0XHR9XG5cblx0XHRwcml2YXRlIGNoaWxkRm9sZGVyczogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldENoaWxkRm9sZGVycygpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5jaGlsZElkcykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgc3ViIGZvbGRlcnNcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gY2xpZW50LkZvbGRlci5mcm9tSURzKHRoaXMuY2hpbGRJZHMpO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5jaGlsZEZvbGRlcnMgPSB0aGlzLmNoaWxkRm9sZGVycyA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZEZvbGRlcnM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjb25maWdGb2xkZXJDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHRQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPlxuXHRcdD4oKTtcblx0XHQvL0xvb2sgZm9yIGEgZm9sZGVyIHRoYXQgaXMgYSBkaXJlY3QgY2hpbGQgb2YgdGhpcyBmb2xkZXIsIGlmIGl0cyBub3QgdGhlcmUgc3RhcnQgbG9va2luZyB1cCBeXG5cdFx0YXN5bmMgZmluZENvbmZpZ0ZvbGRlcihuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IGZpbmQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gYXdhaXQgdGhpcy5nZXRDaGlsZEZvbGRlcnMoKTtcblxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChjaGlsZC50aXRsZSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMuZ2V0UGFyZW50Rm9sZGVyKCk7XG5cblx0XHRcdFx0cmV0dXJuIHBhcmVudC5maW5kQ29uZmlnRm9sZGVyKG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLnNldChuYW1lLCBmaW5kKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSBhd2FpdCB0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmdldChuYW1lKTtcblxuXHRcdFx0cmV0dXJuIGZvbGRlciA/PyBudWxsO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcblxudHlwZSBDU1ZSb3cgPSB7IHRlbXBsYXRlOiBzdHJpbmcgfSAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgUHJvamVjdFJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVByb2plY3RJbnN0YW5jZSA9IHtcblx0aW1wb3J0Q1NWKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0SW5zdGFuY2U+O1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBQcm9qZWN0UmF3LCBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlKTogV3Jpa2VQcm9qZWN0SW5zdGFuY2U7XG5cblx0Y3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VQcm9qZWN0Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VQcm9qZWN0SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBjcmVhdGUodGl0bGU6IHN0cmluZywgcGFyZW50OiBXcmlrZUZvbGRlckluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdENsaWVudCh7IHRpdGxlIH0sIHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmF3OiBQcm9qZWN0UmF3LFxuXHRcdFx0cHJpdmF0ZSBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cblx0XHRhc3luYyBpbXBvcnRDU1YoXG5cdFx0XHRmaWxlOiBGaWxlLFxuXHRcdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdFx0KTogUHJvbWlzZTxXcmlrZVByb2plY3RDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3N2LnBhcnNlU3RyaW5nKHRleHQsIG9wdGlvbnMpXG5cdFx0XHRcdFx0Lm9uKFwiZXJyb3JcIiwgKGVycikgPT4gcmVqZWN0KGVycikpXG5cdFx0XHRcdFx0Lm9uKFwiZGF0YVwiLCAocm93OiBDU1ZSb3cpID0+IHRoaXMudmlkZW9zLnB1c2gocm93KSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZSgpIDogdGhpcy5jcmVhdGUoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHVwZGF0ZSgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB1cGRhdGUgUHJvamVjdHMgKG5vdCBpbXBsZW1lbnRlZClcIik7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoKSB7XG5cdFx0XHRpZiAoIWNsaWVudC51c2VySWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnBhcmVudD8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gcGFyZW50IGlkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUZvbGRlciA9IGF3YWl0IHRoaXMucGFyZW50Py5maW5kQ29uZmlnRm9sZGVyKFxuXHRcdFx0XHRcInRlbXBsYXRlc1wiXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXRlbXBsYXRlRm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmaW5kIHRlbXBsYXRlIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHByb2plY3QgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmNyZWF0ZSh0aGlzLnRpdGxlLCBcIlwiLCB7XG5cdFx0XHRcdG93bmVySWQ6IGNsaWVudC51c2VySWQsXG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcHJvamVjdC5zYXZlKHsgcGFyZW50Rm9sZGVySWQ6IHRoaXMucGFyZW50LmlkIH0pO1xuXG5cdFx0XHRmb3IgKGxldCB2aWRlbyBvZiB0aGlzLnZpZGVvcy5yZXZlcnNlKCkpIHtcblx0XHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLCAuLi5wcm9wZXJ0aWVzIH0gPSB2aWRlbztcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmaW5kVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuXHRcdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgdGVtcGxhdGU/LmNsb25lKHByb3BlcnRpZXMpO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXI6IHByb2plY3QgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgU3BhY2VSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG50eXBlIFNwYWNlUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogU3BhY2VSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VDbGFzcyA9IHtcblx0bmV3IChyYXc6IFNwYWNlUmF3KTogV3Jpa2VTcGFjZUluc3RhbmNlO1xuXG5cdGdldEFsbDogKCkgPT4gUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BhY2VDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VTcGFjZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlU3BhY2VDbGllbnQgaW1wbGVtZW50cyBXcmlrZVNwYWNlSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8U3BhY2VSZXNwb25zZT4oXCIvc3BhY2VzXCIpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlU3BhY2VDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBTcGFjZVJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuXG5jb25zdCBTYXZlQmxhY2tMaXN0ID0gW1xuXHRcImFjY291bnRJZFwiLFxuXHRcImNyZWF0ZWREYXRlXCIsXG5cdFwidXBkYXRlZERhdGVcIixcblx0XCJwZXJtYWxpbmtcIixcblx0XCJzY29wZVwiLFxuXHRcInByaW9yaXR5XCIsXG5cdFwiZGF0ZXNcIixcbl07XG5cbnR5cGUgQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFRhc2tSYXcgPSB7XG5cdGlkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0cGFyZW50cz86IHN0cmluZ1tdO1xuXHRwYXJlbnRJZHM/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrcz86IHN0cmluZ1tdO1xuXHRzdXBlclRhc2tJZHM/OiBzdHJpbmdbXTtcblx0c3ViVGFza0lkcz86IHN0cmluZ1tdO1xuXHRhY2NvdW50SWQ/OiBzdHJpbmdbXTtcblx0Y3JlYXRlZERhdGU/OiBzdHJpbmc7XG5cdHVwZGF0ZWREYXRlPzogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNJZD86IHN0cmluZztcblx0cGVybWFsaW5rPzogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcblx0cHJpb3JpdHk/OiBzdHJpbmc7XG5cdGRhdGVzPzogYW55O1xuXHRlZmZvcnRBbGxvY2F0aW9uPzogYW55O1xuXHRiaWxsaW5nVHlwZT86IGFueTtcblx0ZmluYW5jZT86IGFueTtcblx0c2hhcmVkSWRzPzogYW55O1xuXHRyZXNwb25zaWJsZUlkcz86IGFueTtcblx0Y3VzdG9tRmllbGRzPzogQ3VzdG9tRmllbGRJbnN0YW5jZVtdO1xufSAmIHt9O1xuXG5leHBvcnQgdHlwZSBUYXNrUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogVGFza1Jhd1tdO1xufTtcblxudHlwZSBUYXNrU2F2ZUNvbmZpZyA9IHtcblx0Zm9sZGVyPzogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRyYXc6IFRhc2tSYXcgfCB1bmRlZmluZWQ7XG5cdGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHBhcmVudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuXG5cdGFkZFN1YlRhc2tzOiAodGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10pID0+IHZvaWQ7XG5cdHNldFN1cGVyVGFzazogKHRhc2s6IFdyaWtlVGFza0luc3RhbmNlKSA9PiB2b2lkO1xuXG5cdGdldFNhdmVEYXRhOiAoKSA9PiBUYXNrUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IFRhc2tTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0NsYXNzPFQgPSBXcmlrZVRhc2tJbnN0YW5jZT4ge1xuXHRuZXcgKHRhc2s6IFRhc2tSYXcpOiBUO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8VD47XG5cblx0ZnJvbVRpdGxlOiAodGl0bGU6IHN0cmluZywgZm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21SYXc6ICh0YXNrOiBUYXNrUmF3KSA9PiBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbms8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KHRoaXM6IFQsIHBlcm1hbGluazogc3RyaW5nKTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZTxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4oXG5cdFx0XHR0aGlzOiBULFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tVGl0bGUodGl0bGUsIGZvbGRlciwgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tUmF3PFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCB0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlVGFza0NsaWVudCh0YXNrKSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdFx0fVxuXG5cdFx0cmF3OiBUYXNrUmF3O1xuXG5cdFx0cHJpdmF0ZSBzdXBlclRhc2s6IFdyaWtlVGFza0luc3RhbmNlIHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3ViVGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cblx0XHRnZXQgdGl0bGUoKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cblx0XHRnZXQgcGFyZW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucGFyZW50SWRzO1xuXHRcdH1cblxuXHRcdGFkZFN1YlRhc2tzKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSB7XG5cdFx0XHR0YXNrcy5mb3JFYWNoKCh0KSA9PiB0LnNldFN1cGVyVGFzayh0aGlzKSk7XG5cblx0XHRcdHRoaXMuc3ViVGFza3MgPSBbLi4udGhpcy5zdWJUYXNrcywgLi4udGFza3NdO1xuXHRcdH1cblxuXHRcdHNldFN1cGVyVGFzayh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0dGhpcy5zdXBlclRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdGdldFNhdmVEYXRhKCk6IFRhc2tSYXcge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgcGFyZW50cywgLi4uZXh0cmFEYXRhIH0gPSB0aGlzLnJhdztcblx0XHRcdGNvbnN0IGRhdGEgPSB7IC4uLmV4dHJhRGF0YSB9IGFzIFRhc2tSYXc7XG5cblx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRkYXRhLnRpdGxlID0gdGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXJlbnRzKSB7XG5cdFx0XHRcdGRhdGEucGFyZW50cyA9IHBhcmVudHM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN1cGVyVGFzaz8uaWQpIHtcblx0XHRcdFx0ZGF0YS5zdXBlclRhc2tzID0gW3RoaXMuc3VwZXJUYXNrLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgcHJvcCBvZiBTYXZlQmxhY2tMaXN0KSB7XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW3Byb3AgYXMga2V5b2YgVGFza1Jhd107XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZShjb25maWcpIDogdGhpcy5jcmVhdGUoY29uZmlnKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFzeW5jIGNyZWF0ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zdCB7IGZvbGRlciB9ID0gY29uZmlnO1xuXG5cdFx0XHRpZiAoIWZvbGRlcj8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZSBhIGxvY2F0aW9uIHRvIHNhdmUgYSBuZXcgdGFzayB0by5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdC4uLnRoaXMuZ2V0U2F2ZURhdGEoKSxcblx0XHRcdH07XG5cblx0XHRcdGlmIChmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHBheWxvYWQucGFyZW50cyA9IFtmb2xkZXIuaWRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnBvc3Q8VGFza1Jlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCxcblx0XHRcdFx0Zml4UGF5bG9hZChwYXlsb2FkIGFzIHt9KVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgdGFzayA9IHJlc3AuZGF0YVswXTtcblxuXHRcdFx0dGhpcy5yYXcgPSB0YXNrO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBTdWIgVGFza3M6IFwiLCB0aGlzLnN1YlRhc2tzLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBzdWJUYXNrIG9mIHRoaXMuc3ViVGFza3MpIHtcblx0XHRcdFx0YXdhaXQgc3ViVGFzay5zYXZlKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVwZGF0ZSB0YXNrc1wiKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IFBheWxvYWRLZXlNYXAgPSB7XG5cdHNoYXJlZElkczogXCJzaGFyZWRzXCIsXG5cdHJlc3BvbnNpYmxlSWRzOiBcInJlc3BvbnNpYmxlc1wiLFxuXHRjdXN0b21TdGF0dXNJZDogXCJjdXN0b21TdGF0dXNcIixcbn07XG5cbmZ1bmN0aW9uIGZpeFBheWxvYWQocGF5bG9hZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuXHRjb25zdCBuZXdQYXlsb2FkID0geyAuLi5wYXlsb2FkIH07XG5cblx0Zm9yIChsZXQgW2tleSwgZml4XSBvZiBPYmplY3QuZW50cmllcyhQYXlsb2FkS2V5TWFwKSkge1xuXHRcdGlmIChuZXdQYXlsb2FkW2tleV0pIHtcblx0XHRcdG5ld1BheWxvYWRbZml4XSA9IG5ld1BheWxvYWRba2V5XTtcblx0XHRcdGRlbGV0ZSBuZXdQYXlsb2FkW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1BheWxvYWQ7XG59XG5cbmNvbnN0IEZpZWxkcyA9IFtcblx0XCJwYXJlbnRJZHNcIixcblx0XCJkZXNjcmlwdGlvblwiLFxuXHRcImN1c3RvbUZpZWxkc1wiLFxuXHRcInNoYXJlZElkc1wiLFxuXHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFwic3ViVGFza0lkc1wiLFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rOiBzdHJpbmcsIGNsaWVudDogV3Jpa2VDbGllbnQpIHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3NgLCB7XG5cdFx0cGVybWFsaW5rLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRyZXR1cm4gcmVzcC5kYXRhWzBdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbUlkcyhcblx0aWRzOiBzdHJpbmdbXSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3W10+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3MvJHtpZHMuam9pbihcIixcIil9YCk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21UaXRsZShcblx0dGl0bGU6IHN0cmluZyxcblx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlLFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBQcm9taXNlPFRhc2tSYXc+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgZm9sZGVycy8ke2ZvbGRlci5pZH0vdGFza3NgLCB7XG5cdFx0dGl0bGUsXG5cdFx0ZmllbGRzOiBGaWVsZHMsXG5cdH0pO1xuXG5cdGlmIChyZXNwLmRhdGEubGVuZ3RoID4gMSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkZvdW5kIG11bHRpcGxlIHRhc2tzXCIpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cbiIsICJpbXBvcnQgTXVzdGFjaGUgZnJvbSBcIm11c3RhY2hlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfSBmcm9tIFwiLi9DdXN0b21GaWVsZC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHtcblx0V3Jpa2VUYXNrQ2xhc3MsXG5cdFdyaWtlVGFza0luc3RhbmNlLFxuXHRUYXNrUmF3LFxuXHRUYXNrUmVzcG9uc2UsXG59IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmltcG9ydCB7IHJhd0Zyb21UaXRsZSwgcmF3RnJvbUlkcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsb25lRGF0YSA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgQ3VzdG9tRmllbGRUZW1wbGF0ZSA9IHtcblx0dmFsdWU6IHN0cmluZztcblx0ZGVmaW5pdGlvbjogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIGV4dGVuZHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRjbG9uZTogKFxuXHRcdGRhdGE6IENsb25lRGF0YSxcblx0XHRwYXJlbnQ/OiBXcmlrZVRhc2tJbnN0YW5jZVxuXHQpID0+IFByb21pc2U8V3Jpa2VUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza1RlbXBsYXRlQ2xhc3Ncblx0ZXh0ZW5kcyBXcmlrZVRhc2tDbGFzczxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPiB7fVxuXG5mdW5jdGlvbiBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCBkYXRhOiBDbG9uZURhdGEpOiBzdHJpbmcge1xuXHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHRyZXR1cm4gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFRhc2tUZW1wbGF0ZUNsaWVudFxuXHRcdGV4dGVuZHMgY2xpZW50LlRhc2tcblx0XHRpbXBsZW1lbnRzIFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2Vcblx0e1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tSWRzKGlkcywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHJhdy5tYXAoKHIpID0+IG5ldyBDbHMocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0cGVybWFsaW5rOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihcIi90YXNrc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJlc3AuZGF0YVswXSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZShcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdyh0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRhc2tUZW1wbGF0ZUNsaWVudCh0YXNrKTtcblx0XHR9XG5cblx0XHRUZW1wbGF0ZUZpZWxkczogKGtleW9mIFRhc2tSYXcpW10gPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdO1xuXHRcdExpdGVyYWxGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1xuXHRcdFx0XCJzaGFyZWRJZHNcIixcblx0XHRcdFwicmVzcG9uc2libGVJZHNcIixcblx0XHRcdFwiY3VzdG9tU3RhdHVzSWRcIixcblx0XHRdO1xuXG5cdFx0YXN5bmMgY2xvbmUoZGF0YTogQ2xvbmVEYXRhLCBzdXBlclRhc2s/OiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSYXcgPSB0aGlzLnJhdyA/PyAoe30gYXMgVGFza1Jhdyk7XG5cblx0XHRcdGNvbnN0IHRhc2tSYXcgPSB7fSBhcyBUYXNrUmF3O1xuXHRcdFx0Y29uc3Qgc2V0ID0gKGtleToga2V5b2YgVGFza1JhdywgdmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRcdHRhc2tSYXdba2V5XSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrZXkpID0+XG5cdFx0XHRcdHNldChrZXksIGRhdGFba2V5XSA/PyBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZVJhd1trZXldLCBkYXRhKSlcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XCJTZXR0aW5nIExpdGVyYWwgRmllbGQ6IFwiLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGRhdGEudGl0bGVQcmVmaXgpIHtcblx0XHRcdFx0dGFza1Jhdy50aXRsZSA9IGAke2RhdGEudGl0bGVQcmVmaXh9ICR7dGFza1Jhdy50aXRsZX1gO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXNrUmF3LnRpdGxlID0gdGFza1Jhdy50aXRsZVxuXHRcdFx0XHQucmVwbGFjZShcIlRFTVBMQVRFXCIsIFwiXCIpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXCBcXCAvLCBcIiBcIik7XG5cblx0XHRcdGNvbnN0IGN1c3RvbUZpZWxkcyA9IChhd2FpdCB0aGlzLmdldEN1c3RvbUZpZWxkcygpKSA/PyB7fTtcblxuXHRcdFx0Zm9yIChsZXQgW25hbWUsIGZpZWxkXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21GaWVsZHMpKSB7XG5cdFx0XHRcdHRhc2tSYXcuY3VzdG9tRmllbGRzID0gW1xuXHRcdFx0XHRcdC4uLih0YXNrUmF3LmN1c3RvbUZpZWxkcyA/PyBbXSksXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWQ6IGZpZWxkLmRlZmluaXRpb24uaWQsXG5cdFx0XHRcdFx0XHR2YWx1ZTogZGF0YVtuYW1lXSA/PyBmaWVsZC52YWx1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0YXNrID0gY2xpZW50LlRhc2suZnJvbVJhdyh0YXNrUmF3KTtcblxuXHRcdFx0aWYgKHN1cGVyVGFzaykge1xuXHRcdFx0XHR0YXNrLnNldFN1cGVyVGFzayhzdXBlclRhc2spO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJUYXNrVGVtcGxhdGVzID0gIXRlbXBsYXRlUmF3LnN1YlRhc2tJZHM/Lmxlbmd0aFxuXHRcdFx0XHQ/IFtdXG5cdFx0XHRcdDogYXdhaXQgVGFza1RlbXBsYXRlQ2xpZW50LmZyb21JZHModGVtcGxhdGVSYXcuc3ViVGFza0lkcyk7XG5cblx0XHRcdGNvbnN0IGNsb25lRGF0YSA9IHtcblx0XHRcdFx0Li4uZGF0YSxcblx0XHRcdFx0dGl0bGVQcmVmaXg6IHRhc2tSYXcudGl0bGUsXG5cdFx0XHR9IGFzIENsb25lRGF0YTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblxuXHRcdFx0Y29uc3Qgc3ViVGFza3MgPSBhd2FpdCBQcm9taXNlLmFsbChcblx0XHRcdFx0c3ViVGFza1RlbXBsYXRlcy5tYXAoKHMpID0+IHMuY2xvbmUoY2xvbmVEYXRhLCB0YXNrKSlcblx0XHRcdCk7XG5cblx0XHRcdHRhc2suYWRkU3ViVGFza3Moc3ViVGFza3MpO1xuXG5cdFx0XHRyZXR1cm4gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIEN1c3RvbUZpZWxkc0xvYWRlcjpcblx0XHRcdHwgUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBDdXN0b21GaWVsZFRlbXBsYXRlPiB8IG51bGw+XG5cdFx0XHR8IHVuZGVmaW5lZDtcblx0XHQvL1RPRE86IGNhY2hlIHRoaXMgcmV0dXJuXG5cdFx0cHJpdmF0ZSBhc3luYyBnZXRDdXN0b21GaWVsZHMoKTogUHJvbWlzZTxSZWNvcmQ8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHR7IHZhbHVlOiBzdHJpbmc7IGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB9XG5cdFx0PiB8IG51bGw+IHtcblx0XHRcdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgeyBjdXN0b21GaWVsZHMgfSA9IHRoaXMucmF3ID8/IHt9O1xuXG5cdFx0XHRcdGlmICghY3VzdG9tRmllbGRzIHx8IGN1c3RvbUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0dGluZyBDdXN0b20gRmllbGRzOiBcIiwgY3VzdG9tRmllbGRzKTtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBhd2FpdCBjbGllbnQuQ3VzdG9tRmllbGQuZnJvbUlkcyhcblx0XHRcdFx0XHRjdXN0b21GaWVsZHMubWFwKChjKSA9PiBjLmlkKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiBmaWVsZHMucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjdXN0b21GaWVsZHMuZmluZChcblx0XHRcdFx0XHRcdChjKSA9PiBjLmlkID09PSBmaWVsZC5pZFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQudHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRcdFtmaWVsZC50aXRsZV06IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGluc3RhbmNlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRkZWZpbml0aW9uOiBmaWVsZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSwge30pO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPSB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlciA/PyBsb2FkZXIoKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFZpZGVvQmF0Y2hTYXZlQ29uZmlnID0ge1xuXHR0ZW1wbGF0ZUZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcblx0bG9jYXRpb25Gb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZSB7XG5cdGltcG9ydENTVjogKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xuXG5cdHNhdmU6IChjb25maWc6IFZpZGVvQmF0Y2hTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdG5ldyAoY29uZmlnOiB7IHRhc2s6IFdyaWtlVGFza0luc3RhbmNlIH0pOiBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U7XG5cblx0ZnJvbVBlcm1hTGluazogKGxpbms6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdFRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0bGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCBjbGllbnQuVGFzay5mcm9tUGVybWFMaW5rKGxpbmspO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdFRhc2tDbGllbnQoeyB0YXNrIH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2U7XG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih7IHRhc2sgfTogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KSB7XG5cdFx0XHR0aGlzLnRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYWRkVmlkZW8odmlkZW86IENTVlJvdykge1xuXHRcdFx0dGhpcy52aWRlb3MucHVzaCh2aWRlbyk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLmFkZFZpZGVvKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZSh7IHRlbXBsYXRlRm9sZGVyLCBsb2NhdGlvbkZvbGRlciB9OiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgVmlkZW8gQmF0Y2g6IFwiLCB0aGlzLnZpZGVvcy5sZW5ndGgpO1xuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcDxcblx0XHRcdFx0c3RyaW5nLFxuXHRcdFx0XHRQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+XG5cdFx0XHQ+KCk7XG5cdFx0XHRjb25zdCBmaW5kVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICghdGVtcGxhdGVDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZUNhY2hlLnNldChcblx0XHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0XHRjbGllbnQuVGFza1RlbXBsYXRlLmZyb21UaXRsZShuYW1lLCB0ZW1wbGF0ZUZvbGRlcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlQ2FjaGUuZ2V0KG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gbG9jYXRpb25Gb2xkZXI7XG5cblx0XHRcdGlmICghZm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzLCB0aGlzLnRhc2spO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXIgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBXb3JrZmxvd1JhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNlczogV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZVtdO1xufTtcblxudHlwZSBXb3JrZmxvd1Jlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFdvcmtmbG93UmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93SW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlV29ya0Zsb3dDbGFzcyA9IHtcblx0bmV3IChyYXc6IFdvcmtmbG93UmF3KTogV3Jpa2VXb3JrRmxvd0luc3RhbmNlO1xuXG5cdGZyb21OYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8V3Jpa2VXb3JrRmxvd0luc3RhbmNlPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JrRmxvd0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVdvcmtGbG93Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VXb3JrZmxvd0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlV29ya0Zsb3dJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21OYW1lKG5hbWU6IHN0cmluZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8V29ya2Zsb3dSZXNwb25zZT4oXCJ3b3JrZmxvd3NcIik7XG5cdFx0XHRjb25zdCByYXcgPSByZXNwLmRhdGEuZmluZCgoZCkgPT4gZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdFx0aWYgKCFyYXcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV29ya2Zsb3cgbm90IGZvdW5kXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlV29ya2Zsb3dDbGllbnQocmF3KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogV29ya2Zsb3dSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCBuYW1lKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Lm5hbWU7XG5cdFx0fVxuXHRcdGdldCBjdXN0b21TdGF0dXNlcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jdXN0b21TdGF0dXNlcztcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHRMb2FkZXJGdW5jdGlvbixcblx0TGlua3NGdW5jdGlvbixcblx0cmVkaXJlY3QsXG5cdHVzZUZldGNoZXIsXG5cdEZvcm0sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IHR5cGUgeyBBY3R1YWxGaWxlT2JqZWN0IH0gZnJvbSBcImZpbGVwb25kXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgSW5wdXRCcmVhZENydW1iIGZyb20gXCJ+L2NvbXBvbmVudHMvSW5wdXRCcmVhZENydW1iXCI7XG5pbXBvcnQgT25Nb3VudCBmcm9tIFwifi9jb21wb25lbnRzL09uTW91bnRcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcblxuaW1wb3J0IHR5cGUgeyBTcGFjZXNSZXNwb25zZSwgU3BhY2UgfSBmcm9tIFwiLi9zcGFjZXNcIjtcbmltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UsIENsaWVudCB9IGZyb20gXCIuL2NsaWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmlsZXBvbmRAXjQvZGlzdC9maWxlcG9uZC5jc3NcIixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRjb25zdCBVcGxvYWRIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdC1maWxlXCIpIGFzIEZpbGU7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRjb25zb2xlLmxvZyhcIkdvdCBGb3JtIERhdGE6IFwiLCB0ZXh0KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG5cdGNvbnN0IHNwYWNlcyA9IHVzZUZldGNoZXI8U3BhY2VzUmVzcG9uc2U+KCk7XG5cdGNvbnN0IGxvYWRTcGFjZXMgPSB1c2VGZXRjaGVyTG9hZChzcGFjZXMsIFwiL3Byb2plY3RzL3NwYWNlc1wiKTtcblx0Y29uc3QgW3NwYWNlLCBzZXRTcGFjZV0gPSB1c2VTdGF0ZTxTcGFjZSB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IGNsaWVudHMgPSB1c2VGZXRjaGVyPENsaWVudFJlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkQ2xpZW50cyA9IHVzZUZldGNoZXJMb2FkKFxuXHRcdGNsaWVudHMsXG5cdFx0YC9wcm9qZWN0cy9jbGllbnRzP3NwYWNlSWQ9JHtlbmNvZGVVUklDb21wb25lbnQoc3BhY2U/LmlkID8/IFwiXCIpfWBcblx0KTtcblx0Y29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlPENsaWVudCB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IHsgaGFzVmFsdWU6IGhhc1Byb2plY3ROYW1lLCBwcm9wczogcHJvamVjdE5hbWVQcm9wcyB9ID1cblx0XHR1c2VCdWZmZXJlZElucHV0KCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJOZXcgUHJvamVjdFwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdDxJbnB1dEJyZWFkQ3J1bWI+XG5cdFx0XHRcdFx0PE9uTW91bnQgb25Nb3VudD17bG9hZFNwYWNlc30+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtzcGFjZT8uaWR9IG5hbWU9XCJzcGFjZUlkXCIgLz5cblx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwYWNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG8pID0+IHNldFNwYWNlKG8pfVxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtzcGFjZXMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtzcGFjZXMuZGF0YT8uc3BhY2VzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdGlzT3B0aW9uRXF1YWxUb1ZhbHVlPXsobywgdikgPT4gby5pZCA9PT0gdi5pZH1cblx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ucGFyYW1zfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTcGFjZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHR7IXNwYWNlID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRDbGllbnRzfT5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NsaWVudD8uaWR9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHRzeD17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRDbGllbnQobyl9XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17Y2xpZW50cy5zdGF0ZSA9PT0gXCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17Y2xpZW50cy5kYXRhPy5jbGllbnRzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsobykgPT4gby50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDbGllbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Pbk1vdW50PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFjbGllbnQgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByb2plY3QgTmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdGtleT1cInByb2plY3RcIlxuXHRcdFx0XHRcdFx0XHRpbnB1dFByb3BzPXtwcm9qZWN0TmFtZVByb3BzfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshaGFzUHJvamVjdE5hbWUgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8RmlsZUlucHV0XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInByb2plY3QtZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0XHRmaWxlcz17ZmlsZXN9XG5cdFx0XHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0Q3JlYXRlIFByb2plY3Rcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvSW5wdXRCcmVhZENydW1iPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlRmV0Y2hlckxvYWQoXG5cdGZldGNoZXI6IHsgbG9hZDogKHVybDogc3RyaW5nKSA9PiB2b2lkIH0gJiBGZXRjaGVyLFxuXHR1cmw6IHN0cmluZ1xuKSB7XG5cdHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0aWYgKCFmZXRjaGVyLmRhdGEgJiYgZmV0Y2hlci5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGZldGNoZXIubG9hZCh1cmwpO1xuXHRcdH1cblx0fSwgW2ZldGNoZXIsIHVybF0pO1xufVxuXG5mdW5jdGlvbiB1c2VCdWZmZXJlZElucHV0KCkge1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkPigpO1xuXHRjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4oKTtcblxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtoYXNWYWx1ZSwgc2V0SGFzVmFsdWVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRzZXRWYWx1ZShpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKTtcblxuXHRcdGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuXHRcdH1cblxuXHRcdHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSkpO1xuXG5cdFx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuXHRcdH0sIDUwMCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBvbktleVByZXNzID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIHtcblx0XHRoYXNWYWx1ZSxcblx0XHRwcm9wczoge1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRyZWY6IGlucHV0UmVmLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRvbktleVByZXNzLFxuXHRcdH0sXG5cdH07XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbnR5cGUgSW5wdXRCcmVhZENydW1iUHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBHcmlkSXRlbSA9IHN0eWxlZChHcmlkKWBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEJyZWFkQ3J1bWIoeyBjaGlsZHJlbiB9OiBJbnB1dEJyZWFkQ3J1bWJQcm9wcykge1xuXHRjb25zdCBjbXBzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cblx0Y29uc3QgYnJlYWRjcnVtYnMgPSBjbXBzLnNsaWNlKDAsIC0xKTtcblx0Y29uc3QgZm9jdXNlZCA9IGNtcHNbY21wcy5sZW5ndGggLSAxXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxHcmlkXG5cdFx0XHRjb250YWluZXJcblx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRwYWRkaW5nPXsyfVxuXHRcdFx0c3g9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cblx0XHQ+XG5cdFx0XHR7YnJlYWRjcnVtYnMubWFwKChjLCBrZXkpID0+IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezN9IGtleT17YGJyZWFkY3J1bWItJHtrZXl9YH0+XG5cdFx0XHRcdFx0e2N9XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQpKX1cblx0XHRcdHtmb2N1c2VkID8gKFxuXHRcdFx0XHQ8R3JpZEl0ZW0gaXRlbSB4cz17MTJ9PlxuXHRcdFx0XHRcdHtmb2N1c2VkfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0PC9HcmlkPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBGZXRjaE9uTW91bnRQcm9wcyA9IHtcblx0b25Nb3VudDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uTW91bnQoeyBvbk1vdW50LCBjaGlsZHJlbiB9OiBGZXRjaE9uTW91bnRQcm9wcykge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdG9uTW91bnQoKTtcblx0fSwgW29uTW91bnRdKTtcblxuXHRyZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5cbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIFNwYWNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgU3BhY2VzUmVzcG9uc2UgPSB7XG5cdHNwYWNlczogU3BhY2VbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IHNwYWNlcyA9IGF3YWl0IFdyaWtlLlNwYWNlLmdldEFsbCgpO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRzcGFjZXM6IHNwYWNlcy5tYXAoKHMpID0+ICh7IGlkOiBzLmlkLCB0aXRsZTogcy50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuXHQvL05PVEU6IHRoaXMgb2JqZWN0LmtleXMgdHJpY2sgb25seSB3b3JrcyBpZiB0aGUgZW51bSBrZXlzIGFyZSBleGFjdCBtYXRjaGVzIGZvciB0aGUgdmFsdWVzXG5cdGlmICghcGFyYW1zLnNlcnZpY2UgfHwgIU9iamVjdC5rZXlzKFNlcnZpY2UpLmluY2x1ZGVzKHBhcmFtcy5zZXJ2aWNlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIFNlcnZpY2VcIik7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhcIlNlcnZpY2U6IFwiLCBwYXJhbXMuc2VydmljZSk7XG5cblx0YXdhaXQgYXV0aGVudGljYXRlVXNlcihwYXJhbXMuc2VydmljZSBhcyBTZXJ2aWNlLCByZXF1ZXN0LCB7XG5cdFx0c3VjY2VzczogXCJcIixcblx0XHRmYWlsdXJlOiBcIlwiLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUge0xvYWRlckZ1bmN0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7cmVkaXJlY3QsIHVzZUxvYWRlckRhdGF9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuXG5pbXBvcnQge2dldFNlc3Npb25Vc2VyfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHtTZXJ2aWNlfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgR0FQSSBmcm9tIFwifi9hcGkvR29vZ2xlL0dBUEkuc2VydmVyXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cblx0Ly8gZ2V0IHNlc3Npb24gdXNlclxuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0Ly8gZ2VuZXJhdGUgdGVsZXByb21wdGVyIHNjcmlwdFxuXHRjb25zdCB0b2tlbiA9IChhd2FpdCB1c2VyLmdldENyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKSk/LmFjY2Vzc1Rva2VuO1xuXHRpZiAoIXRva2VuKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBHQVBJIGFjY2VzcyB0b2tlbi4nKTtcblx0fVxuXHRjb25zdCBnYXBpID0gbmV3IEdBUEkocmVxdWVzdCwgdG9rZW4pO1xuXHRyZXR1cm4gZ2FwaS5nZW5lcmF0ZVRlbGVwcm9tcHRlclNjcmlwdHMoKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBkb3dubG9hZCBsaW5rcyBmb3IgZWFjaCBHb29nbGUgRG9jcyB0ZXh0IGNvbGxlY3RlZCBieSB0aGUgc2VydmVyIGZyb20gdGhlIFRyYWNraW5nIFNoZWV0LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIEEgZG9jdW1lbnQgY29udGFpbmluZyBkb3dubG9hZCBsaW5rcyB0byBhbGwgdGhlIHRleHQgZG9jdW1lbnRzLCBhcyB3ZWxsIGFzIHNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluaXRpYWwgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHNnUmVzdWx0cygpIHtcblx0Ly8gY3JlYXRlIGRvd25sb2FkIGxpbmtzIGZvciBlYWNoIEdvb2dsZSBEb2NzIHRleHQgY29sbGVjdGVkIGJ5IHRoZSBzZXJ2ZXJcblx0Y29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcblx0bGV0IGZpbGVMaW5rcyA9IFtdO1xuXHRsZXQgbWV0YUpTT04gPSBbXTtcblx0bGV0IHppcCA9IG5ldyBKU1ppcCgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB0ZXh0ID0gZGF0YS5maWxlc1tpXS50ZXh0O1xuXHRcdGNvbnN0IHRpdGxlID0gZGF0YS5maWxlc1tpXS50aXRsZSArICcudHh0Jztcblx0XHRtZXRhSlNPTi5wdXNoKGRhdGEuZmlsZXNbaV0ubWV0YSk7XG5cdFx0emlwLmZpbGUodGl0bGUsIHRleHQpO1xuXHRcdGZpbGVMaW5rcy5wdXNoKDxsaT48YSBocmVmPXsnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KX1cblx0XHRcdFx0XHRcdFx0ICBkb3dubG9hZD17dGl0bGV9Pnt0aXRsZX08L2E+PC9saT4pO1xuXHR9XG5cdGNvbnN0IHsgUGFyc2VyIH0gPSByZXF1aXJlKCdqc29uMmNzdicpO1xuXHQvLyBjb25zdCBmaWVsZHMgPSBbJ3RpdGxlJywgJ2xpbmsnLCAnd2FybmluZ3MnLCAnRXN0aW1hdGVkVk9NaW51dGVzJ11cblxuXHRjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKClcblx0Y29uc3QgY3N2ID0gcGFyc2VyLnBhcnNlKG1ldGFKU09OKTtcblx0emlwLmZpbGUoXCJtZXRhLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkobWV0YUpTT04pKTtcblx0emlwLmZpbGUoXCJtZXRhLmNzdlwiLCBjc3YpO1xuXG5cdGZ1bmN0aW9uIGRvd25sb2FkQWxsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIHNyYzogaHR0cHM6Ly9zdHVrLmdpdGh1Yi5pby9qc3ppcC9kb2N1bWVudGF0aW9uL2V4YW1wbGVzL2Rvd25sb2FkLXppcC1maWxlLmh0bWxcblx0XHR6aXAuZ2VuZXJhdGVBc3luYyh7dHlwZTogXCJiYXNlNjRcIn0pLnRoZW4oZnVuY3Rpb24gKGJhc2U2NCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gXCJkYXRhOmFwcGxpY2F0aW9uL3ppcDtiYXNlNjQsXCIgKyBiYXNlNjQ7XG5cdFx0fSwgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0dGhyb3cgRXJyb3IoZXJyKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJUZWxlcHJvbXB0ZXIgU2NyaXB0IEdlbmVyYXRvciBSZXN1bHRzXCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtkb3dubG9hZEFsbH0+RG93bmxvYWQgQWxsIERvY3VtZW50czwvQnV0dG9uPlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDx1bCBzdHlsZT17e21hcmdpbjogXCIwcHggNTBweFwifX0+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxsaT48c3Ryb25nPlRyYWNraW5nIFNoZWV0OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEudGl0bGV9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+U2hlZXQ6IDwvc3Ryb25nPntkYXRhLnNoZWV0RGF0YS5zaGVldH08L2xpPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5Sb3c6IDwvc3Ryb25nPntkYXRhLnNoZWV0RGF0YS5yb3d9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+Q29sdW1uOiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEuY29sdW1ufTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPkRvY3VtZW50cyBjcmVhdGVkOiA8L3N0cm9uZz57ZGF0YS5maWxlcy5sZW5ndGh9PC9saT5cblx0XHRcdFx0PGhyLz5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8dWwgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDUwcHhcIn19PlxuXHRcdFx0XHR7ZmlsZUxpbmtzfVxuXHRcdFx0PC91bD5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHtkb2NzX3YxLCBnb29nbGV9IGZyb20gJ2dvb2dsZWFwaXMnO1xuXG5pbnRlcmZhY2UgdHNnUGFyYW1zIHtcblx0Y29sdW1uOiBzdHJpbmcgfCBudWxsO1xuXHRzaGVldDogc3RyaW5nIHwgbnVsbDtcblx0cm93OiBzdHJpbmcgfCBudWxsO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0FQSSB7XG5cdHBhcmFtczogdHNnUGFyYW1zO1xuXHR0b2tlbjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFJlcXVlc3QsIHRva2VuOiBzdHJpbmcpIHtcblx0XHQvLyBDb2xsZWN0IFVSTCBwYXJhbWV0ZXJzIGFuZCBzZXQgZGVmYXVsdCB2YWx1ZXNcblx0XHRjb25zdCBzZWFyY2ggPSAobmV3IFVSTChyZXF1ZXN0LnVybCkpLnNlYXJjaFBhcmFtcztcblx0XHR0aGlzLnBhcmFtcyA9IHtcblx0XHRcdHVybDogc2VhcmNoLmdldChcInVybFwiKSA/PyBcIlwiLFxuXHRcdFx0c2hlZXQ6IHNlYXJjaC5nZXQoXCJzaGVldFwiKSAhPSBcIlwiID8gc2VhcmNoLmdldChcInNoZWV0XCIpIDogXCJNYXN0ZXIgUmV2aWV3IFRyYWNrZXJcIixcblx0XHRcdHJvdzogc2VhcmNoLmdldChcInJvd1wiKSAhPSBcIlwiID8gc2VhcmNoLmdldChcInJvd1wiKSA6ICc1Jyxcblx0XHRcdGNvbHVtbjogc2VhcmNoLmdldChcImNvbHVtblwiKSAhPSBcIlwiID8gc2VhcmNoLmdldChcImNvbHVtblwiKSA6ICdJJyxcblx0XHRcdHRpdGxlOiBcIlwiLFxuXHRcdH1cblx0XHR0aGlzLnRva2VuID0gdG9rZW47XG5cdH1cblxuXHRhc3luYyBnZW5lcmF0ZVRlbGVwcm9tcHRlclNjcmlwdHMoKSB7XG5cdFx0Ly8gY29sbGVjdCBsaXN0IG9mIERvYyBsaW5rcyBmcm9tIHRoZSBUcmFja2luZyBEb2N1bWVudFxuXHRcdGNvbnN0IHNoZWV0RGF0YSA9IGF3YWl0IGNvbGxlY3RMaW5rc0Zyb21Db2x1bW4odGhpcy5wYXJhbXMpXG5cdFx0Y29uc3QgbGlua3MgPSBzaGVldERhdGEubGlua3MuZmlsdGVyKFN0cmluZyk7XG5cdFx0dGhpcy5wYXJhbXMudGl0bGUgPSBzaGVldERhdGEudGl0bGU7XG5cblx0XHQvLyBjb2xsZWN0IHRpdGxlIGFuZCB0ZXh0IGZyb20gZWFjaCBvZiB0aGUgR29vZ2xlIERvY3MgbGlua3Ncblx0XHRsZXQgZmlsZV90ZXh0ID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZmlsZV90ZXh0LnB1c2goYXdhaXQgZXh0cmFjdFRyYW5zY3JpcHRUZXh0KHRoaXMudG9rZW4sIGxpbmtzW2ldKSk7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHBhcmFtcyBhbmQge3RpdGxlLCB0ZXh0fSBmb3IgZWFjaCBkb2MgZm91bmQgaW4gdGhlIHRyYWNraW5nIHNoZWV0XG5cdFx0cmV0dXJuIHtzaGVldERhdGE6IHRoaXMucGFyYW1zLCBmaWxlczogZmlsZV90ZXh0fTtcblx0fVxufVxuXG5cbi8qKlxuICogR2V0cyB0aGUgc3ByZWFkc2hlZXQgb3IgZG9jdW1lbnQgSUQgZnJvbSBhIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgdXJsIFRoZSBVUkwgdG8gY29sbGVjdCB0aGUgSUQgZnJvbS5cbiAqL1xuZnVuY3Rpb24gZ2V0SURGcm9tVVJMKHVybDogc3RyaW5nKSB7XG5cdHJldHVybiBuZXcgVVJMKHVybCkucGF0aG5hbWUuc3BsaXQoJy8nKVszXTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0cyBhbGwgaHlwZXJsaW5rcyBmcm9tIGEgY29sdW1uIHdpdGhpbiBhIGdpdmVuIHNoZWV0IGluIGEgZ2l2ZW4gc3ByZWFkc2hlZXQuXG4gKiBAcGFyYW0ge3RzZ1BhcmFtc30gIHBhcmFtc1x0VVJMIHBhcmFtcyBmcm9tIHRoZSB0ZWxlcHJvbXB0ZXIgc2NyaXB0IGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJuIHtbc3RyaW5nXX0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRpdGxlIG9mIHRoZSBzcHJlYWRzaGVldCwgYW5kIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBsaW5rc1xuICogZm91bmQgaW4gdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29sbGVjdExpbmtzRnJvbUNvbHVtbihwYXJhbXM6IHRzZ1BhcmFtcykge1xuXHRjb25zdCBnb29nbGVTaGVldHMgPSBnb29nbGUuc2hlZXRzKCd2NCcpO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGdvb2dsZVNoZWV0cy5zcHJlYWRzaGVldHMuZ2V0KFxuXHRcdHtcblx0XHRcdC8vIFRPRE86IHVzZSB0aGUgT0FVVEggdG9rZW5cblx0XHRcdGF1dGg6ICdBSXphU3lCVzRoVlgtUjNGQXdPdEFPdGpTdlBxV3NCdVlEQ2tYMWMnLFxuXHRcdFx0Ly8gb2F1dGhfdG9rZW46IHRva2VuLFxuXHRcdFx0c3ByZWFkc2hlZXRJZDogZ2V0SURGcm9tVVJMKHBhcmFtcy51cmwpLFxuXHRcdFx0aW5jbHVkZUdyaWREYXRhOiB0cnVlLFxuXHRcdFx0cmFuZ2VzOiBbYCR7cGFyYW1zLnNoZWV0fSEke3BhcmFtcy5jb2x1bW59JHtwYXJhbXMucm93fToke3BhcmFtcy5jb2x1bW59YF0gLy8gZXg6IFNoZWV0TmFtZSFJNTpJXG5cdFx0fVxuXHQpO1xuXHQvLyBjaGVjayB0aGF0IGRhdGEgYXBwZWFycyBhcyBleHBlY3RlZFxuXHRpZiAoIShyZXNwb25zZS5kYXRhLnByb3BlcnRpZXMgJiYgcmVzcG9uc2UuZGF0YS5wcm9wZXJ0aWVzLnRpdGxlKSkge1xuXHRcdHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGZpbmQgc3ByZWFkc2hlZXQgdGl0bGVcIik7XG5cdH1cblx0Y29uc3QgdGl0bGUgPSByZXNwb25zZS5kYXRhLnByb3BlcnRpZXMudGl0bGU7XG5cblx0aWYgKCEocmVzcG9uc2UuZGF0YS5zaGVldHMgJiYgcmVzcG9uc2UuZGF0YS5zaGVldHNbMF0uZGF0YSAmJiByZXNwb25zZS5kYXRhLnNoZWV0c1swXS5kYXRhWzBdLnJvd0RhdGEpKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHNwcmVhZHNoZWV0IGRhdGFcIik7XG5cdH1cblx0Y29uc3Qgcm93cyA9IHJlc3BvbnNlLmRhdGEuc2hlZXRzWzBdLmRhdGFbMF0ucm93RGF0YTtcblxuXHQvLyBjb2xsZWN0IGh5cGVybGlua3MgZnJvbSByb3dzXG5cdGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IG5ldyBBcnJheShyb3dzLmxlbmd0aCk7XG5cdGZvciAobGV0IHJvdyBvZiByb3dzKSB7XG5cdFx0aWYgKHJvdy52YWx1ZXMpIHtcblx0XHRcdGNvbnN0IGxpbmsgPSByb3cudmFsdWVzWzBdLmh5cGVybGluaztcblx0XHRcdGlmIChsaW5rKSB7XG5cdFx0XHRcdGxpbmtzLnB1c2gobGluayk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRm91bmQgcm93IHdpdGggbm8gZGF0YVwiKTtcblx0XHR9XG5cblx0fVxuXHRyZXR1cm4ge3RpdGxlOiB0aXRsZSwgbGlua3M6IGxpbmtzfTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0cyB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHNlY29uZCBjb2x1bW4gaW4gYSBzY3JpcHQgZG9jdW1lbnQuXG4gKiBAcGFyYW0gIFx0dG9rZW46c3RyaW5nXHRUaGUgT0F1dGggdG9rZW4uXG4gKiBAcGFyYW1cdGxpbms6c3RyaW5nIFx0VGhlIGlkIGZvciB0aGUgR29vZ2xlRG9jLlxuICpcbiAqIEByZXR1cm4gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHRpdGxlIG9mIHRoZSBkb2N1bWVudCwgYW5kIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRpdGxlIGFuZCBjZWxsIGNvbnRlbnQgb2ZcbiAqIHRoZSB0YWJsZSwgc2VwYXJhdGVkIGJ5IHR3byBuZXcgbGluZXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RUcmFuc2NyaXB0VGV4dCh0b2tlbjogc3RyaW5nLCBsaW5rOiBzdHJpbmcpIHtcblxuXHQvLyBxdWVyeSBHb29nbGUgRG9jcyBmb3IgZG9jdW1lbnQgZGF0YVxuXHRjb25zdCBpZCA9IGdldElERnJvbVVSTChsaW5rKTtcblx0Y29uc3QgZG9jcyA9IGdvb2dsZS5kb2NzKCd2MScpO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3MuZG9jdW1lbnRzLmdldCh7XG5cdFx0b2F1dGhfdG9rZW46IHRva2VuLFxuXHRcdGRvY3VtZW50SWQ6IGlkLFxuXHR9KTtcblx0Ly8gdmFsaWRhdGUgcmVzcG9uc2UgbWF0Y2hlcyBleHBlY3RlZCBmb3JtYXRcblx0aWYgKCFyZXNwb25zZS5kYXRhLmJvZHkpIHtcblx0XHR0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBnZXQgZGF0YSBmcm9tIEdvb2dsZSBEb2NcIik7XG5cdH1cblx0aWYgKCFyZXNwb25zZS5kYXRhLmJvZHkuY29udGVudCkge1xuXHRcdHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGZpbmQgY29udGVudCBpbiBHb29nbGUgRG9jIGJvZHlcIik7XG5cdH1cblx0Y29uc3QgZWxlbWVudHMgPSByZXNwb25zZS5kYXRhLmJvZHkuY29udGVudDtcblx0aWYgKCEoZWxlbWVudHNbMV0gJiYgZWxlbWVudHNbMV0ucGFyYWdyYXBoICYmIGVsZW1lbnRzWzFdLnBhcmFncmFwaC5lbGVtZW50cykpIHtcblx0XHR0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIHRpdGxlIGluIEdvb2dsZSBEb2NcIik7XG5cdH1cblx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IHJlYWRQYXJhZ3JhcGhFbGVtZW50KGVsZW1lbnRzWzFdLnBhcmFncmFwaC5lbGVtZW50c1swXSk7XG5cdGxldCBjb2x1bW5JbmRleDogbnVtYmVyO1xuXHRsZXQgdGV4dDogc3RyaW5nID0gJyc7XG5cdHRleHQgKz0gdGl0bGUgKyAnXFxuJztcblx0bGV0IHdhcm5pbmdzID0gXCJcIjtcblx0Zm9yIChjb25zdCB2YWx1ZSBvZiBlbGVtZW50cykgeyAvLyBlbGVtZW50cyBpbiB0aGUgZG9jdW1lbnRcblx0XHRpZiAodmFsdWUudGFibGUpIHtcblx0XHRcdGNvbnN0IHRhYmxlID0gdmFsdWUudGFibGU7XG5cdFx0XHQvLyBUaGUgc3Bva2VuIGNvbnRlbnQgb2YgdGhlIHNjcmlwdCB3aWxsIGVpdGhlciBiZSBpbiB0aGUgU2NyaXB0IG9yIEF1ZGlvIGNvbHVtbi4gRGVmYXVsdCB0byBsYXN0IGNvbHVtbi5cblx0XHRcdGxldCByb3dIZWFkZXJzID0gey4uLmV4dHJhY3RUYWJsZUhlYWRlclJvdyh0YWJsZSl9O1xuXHRcdFx0aWYgKHJvd0hlYWRlcnMuU2NyaXB0KSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gcm93SGVhZGVycy5TY3JpcHQ7XG5cdFx0XHR9IGVsc2UgaWYgKHJvd0hlYWRlcnMuQXVkaW8pIHtcblx0XHRcdFx0Y29sdW1uSW5kZXggPSByb3dIZWFkZXJzLkF1ZGlvO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uSW5kZXggPSBPYmplY3Qua2V5cyhyb3dIZWFkZXJzKS5sZW5ndGggLSAxO1xuXHRcdFx0XHR3YXJuaW5ncyArPSBgQ291bGQgbm90IGZpbmQgJ0F1ZGlvJyBvciAnU2NyaXB0JyBjb2x1bW4gdG8gY29sbGVjdCBzcG9rZW4gd29yZCBjb250ZW50LiBVc2VkIGNvbHVtbiAke2NvbHVtbkluZGV4ICsgMX0gaW5zdGVhZC5gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRhYmxlLnRhYmxlUm93cykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHJvdyBvZiB0YWJsZS50YWJsZVJvd3MpIHsgIC8vIHJvd3MgaW4gdGhlIHRhYmxlXG5cdFx0XHRcdFx0aWYgKHJvdy50YWJsZUNlbGxzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjZWxsID0gcm93LnRhYmxlQ2VsbHNbY29sdW1uSW5kZXhdLmNvbnRlbnQ7ICAvLyBjZWxsIGluIHRoZSByb3dcblx0XHRcdFx0XHRcdGlmIChjZWxsKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgKz0gZXh0cmFjdFBhcmFncmFwaFRleHQoY2VsbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRleHQgPSB0ZXh0LnJlcGxhY2UoL15cXHMqJCg/Olxcclxcbj98XFxuKS9nbSwgJycpLnJlcGxhY2UoLyRcXG4vZ20sICdcXG5cXG4nKTtcblx0Y29uc3QgbGFzdE1vZGlmaWVkID0gYXdhaXQgZ2V0TGFzdE1vZGlmaWVkVGltZShpZCk7XG5cdGlmIChsYXN0TW9kaWZpZWQgPT0gXCJ1bmtub3duXCIpIHtcblx0XHR3YXJuaW5ncyArPSBcIlxcbkNvdWxkIG5vdCBmaW5kIGxhc3QgbW9kaWZpZWQgdGltZS5cIlxuXHR9XG5cdGxldCBtZXRhID0ge1xuXHRcdFwidGl0bGVcIjogdGl0bGUsXG5cdFx0XCJsaW5rXCI6IGxpbmssXG5cdFx0XCJFc3RpbWF0ZWRWT01pbnV0ZXNcIjogTWF0aC5yb3VuZCgodGV4dC50cmltKCkuc3BsaXQoL1xccysvKS5sZW5ndGggLyAxNTApICogMTAwKSAvIDEwMCxcblx0XHRcImxhc3RNb2RpZmllZFwiOiBsYXN0TW9kaWZpZWQsXG5cdFx0XCJ3YXJuaW5nc1wiOiB3YXJuaW5ncyxcblx0fVxuXHRyZXR1cm4geyd0aXRsZSc6IHRpdGxlLCAndGV4dCc6IHRleHQsICdtZXRhJzogbWV0YX07XG59XG5cbi8qKlxuICpcdFF1ZXJpZXMgR29vZ2xlIERyaXZlIGZvciB0aGUgbGFzdCBtb2RpZmllZCB0aW1lIGZvciBhIGRvY3VtZW50LlxuICpcdEBwYXJhbSBpZDogdGhlIGRvY3VtZW50IGlkLlxuICpcbiAqIFx0QHJldHVybiBzdHJpbmdcdEEgc3RyaW5nIHRpbWVzdGFtcCByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGFzdCBtb2RpZmllZCBkYXRlLCBvciBcIk4vQVwiIGlmIG5vIGRhdGUgd2FzIGZvdW5kXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldExhc3RNb2RpZmllZFRpbWUoaWQ6IHN0cmluZykge1xuXHQvLyBxdWVyeSBHb29nbGUgRHJpdmUgdG8gZ2V0IHRoZSBsYXN0IG1vZGlmaWVkIHRpbWVcblx0Y29uc3QgZ29vZ2xlRHJpdmUgPSBnb29nbGUuZHJpdmUoJ3YzJyk7XG5cdGNvbnN0IGRyaXZlUmVzcG9uc2UgPSBhd2FpdCBnb29nbGVEcml2ZS5maWxlcy5nZXQoXG5cdFx0e1xuXHRcdFx0ZmlsZUlkOiBpZCxcblx0XHRcdC8vIFRPRE86IHRoaXMgbmVlZHMgdG8gdXNlIE9BVVRIXG5cdFx0XHRhdXRoOiAnQUl6YVN5Qlc0aFZYLVIzRkF3T3RBT3RqU3ZQcVdzQnVZRENrWDFjJyxcblx0XHRcdGZpZWxkczogXCJtb2RpZmllZFRpbWVcIixcblx0XHR9XG5cdCk7XG5cdHJldHVybiBkcml2ZVJlc3BvbnNlLmRhdGEubW9kaWZpZWRUaW1lPyBkcml2ZVJlc3BvbnNlLmRhdGEubW9kaWZpZWRUaW1lIDogXCJ1bmtub3duXCI7XG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHRleHQgdmFsdWUgYW5kIGNvbHVtbiBpbmRleCBmcm9tIGVhY2ggY2VsbCBpbiB0aGUgZmlyc3Qgcm93IG9mIGEgR29vZ2xlIERvYyB0YWJsZS5cbiAqIEBwYXJhbSB0YWJsZTogQSB0YWJsZSBpbiBhIEdvb2dsZSBEb2MuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgaGVhZGVyIHJvd3MgYW5kIHRoZWlyIGluZGV4LiBpLmUuIHtSb3cxOiAwLCBSb3cyOiAxfVxuICovXG5mdW5jdGlvbiBleHRyYWN0VGFibGVIZWFkZXJSb3codGFibGU6IGRvY3NfdjEuU2NoZW1hJFRhYmxlKSB7XG5cdGxldCBmb3VuZENvbHVtbnMgPSB7fTtcblx0aWYgKHRhYmxlLnRhYmxlUm93cyAmJiB0YWJsZS50YWJsZVJvd3NbMF0gJiYgdGFibGUudGFibGVSb3dzWzBdLnRhYmxlQ2VsbHMpIHtcblx0XHRjb25zdCBuUm93cyA9IHRhYmxlLnRhYmxlUm93c1swXS50YWJsZUNlbGxzLmxlbmd0aDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcblx0XHRcdGxldCBjZWxsQ29udGVudCA9IHRhYmxlLnRhYmxlUm93c1swXS50YWJsZUNlbGxzW2ldLmNvbnRlbnRcblx0XHRcdGlmIChjZWxsQ29udGVudCkge1xuXHRcdFx0XHRsZXQgY29sdW1uVGV4dCA9IGV4dHJhY3RQYXJhZ3JhcGhUZXh0KGNlbGxDb250ZW50KS50cmltKCk7XG5cdFx0XHRcdGZvdW5kQ29sdW1ucyA9IHsuLi5mb3VuZENvbHVtbnMsIC4uLntbY29sdW1uVGV4dF06IGl9fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZm91bmRDb2x1bW5zO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIGFsbCB0ZXh0IGZyb20gYSBzdHJ1Y3R1cmFsIGVsZW1lbnQgZm91bmQgaW4gYSBHb29nbGUgRG9jcyByZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0gZG9jc192MS5TY2hlbWEkU3RydWN0dXJhbEVsZW1lbnRbXSAgZWxlbWVudCBUaGUgc3RydWN0dXJhbCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGV4dC5cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIHRoZSB0ZXh0IGZvdW5kIGluIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBleHRyYWN0UGFyYWdyYXBoVGV4dChlbGVtZW50OiBkb2NzX3YxLlNjaGVtYSRTdHJ1Y3R1cmFsRWxlbWVudFtdKSB7XG5cdGxldCB0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB2YWx1ZSBvZiBlbGVtZW50KSB7XG5cdFx0aWYgKHZhbHVlLnBhcmFncmFwaCAmJiB2YWx1ZS5wYXJhZ3JhcGguZWxlbWVudHMpIHtcblx0XHRcdGZvciAoY29uc3QgZWxlbSBvZiB2YWx1ZS5wYXJhZ3JhcGguZWxlbWVudHMpIHtcblx0XHRcdFx0dGV4dCArPSByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0aGUgdGV4dCBjb250ZW50IGZyb20gYSBwYXJhZ3JhcGggZWxlbWVudCBpbiBhIEdvb2dsZSBEb2NzIHJlc3BvbnNlIG9iamVjdC5cbiAqIEBwYXJhbSBkb2NzX3YxLlNjaGVtYSRQYXJhZ3JhcGhFbGVtZW50ICBlbGVtZW50IFRoZSBlbGVtZW50IHdpdGhpbiBhIHBhcmFncmFwaCBvYmplY3QuXG4gKlxuICogQHJldHVybiBUaGUgdGV4dCBjb250ZW50IGZvdW5kIGluIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtZW50OiBkb2NzX3YxLlNjaGVtYSRQYXJhZ3JhcGhFbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50Py50ZXh0UnVuPy5jb250ZW50ID8/ICcnO1xufVxuIiwgImltcG9ydCB7XG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcblx0dXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFVwbG9hZGVySGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRlckhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBiYXRjaCA9IGF3YWl0IFdyaWtlLlZpZGVvQmF0Y2guZnJvbVBlcm1hTGluayhcblx0XHRmb3JtRGF0YS5nZXQoXCJiYXRjaC10YXNrXCIpIGFzIHN0cmluZ1xuXHQpO1xuXG5cdGF3YWl0IGJhdGNoLmltcG9ydENTVihmb3JtRGF0YS5nZXQoXCJiYXRjaFwiKSBhcyBGaWxlLCB7IGhlYWRlcnM6IHRydWUgfSk7XG5cblx0YXdhaXQgYmF0Y2guc2F2ZSh7XG5cdFx0dGVtcGxhdGVGb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwidGVtcGxhdGUtZm9sZGVyXCIpIGFzIHN0cmluZ1xuXHRcdCksXG5cdFx0bG9jYXRpb25Gb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwibG9jYXRpb25cIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0fSk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0JhdGNoKCkge1xuXHRjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJVcGxvYWQgYSB2aWRlbyBiYXRjaCBDU1YgZmlsZTpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCIgPyAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjNyZW1cIiAvPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0bmFtZT1cInRlbXBsYXRlLWZvbGRlclwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiVGVtcGxhdGUgRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJiYXRjaC10YXNrXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJCYXRjaCBUYXNrIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJsb2NhdGlvblwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiYmF0Y2hcIiAvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRVcGxvYWRcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBDb25uZWN0TG9hZGVyRGF0YSA9IHtcblx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuXHRyZXF1ZXN0LFxufSk6IFByb21pc2U8Q29ubmVjdExvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoYXNXcmlrZUNyZWQ6IEJvb2xlYW4oYXdhaXQgdXNlcj8uaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdCgpIHtcblx0Y29uc3QgeyBoYXNXcmlrZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8Q29ubmVjdExvYWRlckRhdGE+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkNvbm5lY3QgeW91ciBhY2NvdW50czpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL3dyaWtlXCIgbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0YXJ0SWNvbj17PEFkZEljb24gLz59XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtoYXNXcmlrZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIkNvbm5lY3RlZCB0byBXcmlrZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJDb25uZWN0IHRvIFdyaWtlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVmlkZW8gVG9vbGluZzpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3Byb2plY3RzL2NyZWF0ZVwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPk5ldyBQcm9qZWN0PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvdmlkZW8tYmF0Y2hcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5WaWRlbyBCYXRjaDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwidGFza3MvYXNzZXQtaW52ZW50b3J5XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+QXNzZXQgSW52ZW50b3J5PC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCIvdHNnXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+VGVsZXByb21wdGVyIFNjcmlwdCBHZW5lcmF0b3I8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBHb29nbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dvb2dsZVwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG50eXBlIExvZ2luTG9hZGVyRGF0YSA9IHtcblx0aGFzR29vZ2xlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPExvZ2luTG9hZGVyRGF0YT4gPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0Y29uc3QgaGFzR29vZ2xlQ3JlZCA9IHVzZXJcblx0XHQ/IGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS5nb29nbGUpXG5cdFx0OiBmYWxzZTtcblxuXHRpZiAoaGFzR29vZ2xlQ3JlZCkge1xuXHRcdHJlZGlyZWN0KFwiL1wiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzR29vZ2xlQ3JlZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuXHRjb25zdCB7IGhhc0dvb2dsZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8TG9naW5Mb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJTaWduIGluIHRvIHlvdXIgTmV4dFRob3VnaHQgYWNjb3VudDpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL2dvb2dsZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxHb29nbGVJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzR29vZ2xlQ3JlZFxuXHRcdFx0XHRcdFx0XHQ/IFwiU2lnbmVkIEluIFRvIEdvb2dsZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJTaWduIEluIFRvIEdvb2dsZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7TG9hZGVyRnVuY3Rpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtGb3JtLCByZWRpcmVjdCwgdXNlVHJhbnNpdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge2dldFNlc3Npb25Vc2VyfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7dXNlcjogdXNlci51c2VySWR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVsZVNjcmlwdEdlbmVyYXRvcigpIHtcblx0Y29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlRTRzpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cImdldFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiL3RzZy1yZXN1bHRzXCI+XG5cdFx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cInVybFwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNwcmVhZHNoZWV0IFVSTFwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJzaGVldFwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNoZWV0IE5hbWUgKG9wdGlvbmFsKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cInJvd1wiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlN0YXJ0aW5nIFJvdyAob3B0aW9uYWwpXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBDb2x1bW4gKG9wdGlvbmFsKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiXG5cdFx0XHRcdFx0XHRcdD8gXCJHZW5lcmF0aW5nLi4uXCJcblx0XHRcdFx0XHRcdFx0OiBcIkdlbmVyYXRlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzJhZDNmY2Q2JywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LVhaVloyNklYLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUxQTFJJR0dDLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1UVEtUS0dTNC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRkRQNldHWkYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3Jvb3QtNVNMWVhRVUguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstN1VRUldaS1EuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVpVUVc0SFZZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1WTElFVFBENi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNFlKTFVCQjYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLURUV05MVkNZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1FSFA2T0RaWC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstREkyRlBZVDcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHNlcnZpY2UnOnsnaWQnOidyb3V0ZXMvYXV0aC8kc2VydmljZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpzZXJ2aWNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvYXV0aC8kc2VydmljZS1aWlVORldXUC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZS9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2stNEhWSDVVU1AuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Nvbm5lY3QnOnsnaWQnOidyb3V0ZXMvY29ubmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb25uZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvY29ubmVjdC03VFFLWjY3Ry5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GUDM0UDJZNS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2luZGV4LU8ySFdFRlRPLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2xvZ2luLUg0VFFRMkNQLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZQMzRQMlk1LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2plY3RzL2NsaWVudHMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY2xpZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jbGllbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy1CWkM3TU4zVC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TVEVKT0tDVi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS1RMjNHQ0xHRy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay03UUpJQU5WSC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVNURUpPS0NWLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL3NwYWNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL3NwYWNlcy1QTllRQ09HQi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TVEVKT0tDVi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeSc6eydpZCc6J3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondGFza3MvYXNzZXQtaW52ZW50b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LVY1NVY3SkJDLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTdRSklBTlZILmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdHNnJzp7J2lkJzoncm91dGVzL3RzZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0c2cnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy90c2ctR1ZaS1RKVUguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RzZy1yZXN1bHRzJzp7J2lkJzoncm91dGVzL3RzZy1yZXN1bHRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RzZy1yZXN1bHRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdHNnLXJlc3VsdHMtQlJIVEpRQzUuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy92aWRlby1iYXRjaCc6eydpZCc6J3JvdXRlcy92aWRlby1iYXRjaCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid2aWRlby1iYXRjaCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3ZpZGVvLWJhdGNoLVZONDVNN0cyLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TVEVKT0tDVi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL19zdGF0aWMvYnVpbGQvbWFuaWZlc3QtMkFEM0ZDRDYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7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
