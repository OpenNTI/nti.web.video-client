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
  for (let i = 0; i < data.files.length - 1; i++) {
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
var assets_manifest_default = { "version": "34e78a4d", "entry": { "module": "/_static/build/entry.client-XZVZ26IX.js", "imports": ["/_static/build/_shared/chunk-LPLRIGGC.js", "/_static/build/_shared/chunk-TTKTKGS4.js", "/_static/build/_shared/chunk-FDP6WGZF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-5SLYXQUH.js", "imports": ["/_static/build/_shared/chunk-7UQRWZKQ.js", "/_static/build/_shared/chunk-ZUQW4HVY.js", "/_static/build/_shared/chunk-VLIETPD6.js", "/_static/build/_shared/chunk-4YJLUBB6.js", "/_static/build/_shared/chunk-DTWNLVCY.js", "/_static/build/_shared/chunk-EHP6ODZX.js", "/_static/build/_shared/chunk-DI2FPYT7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-ZZUNFWWP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-4HVH5USP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-7TQKZ67G.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-O2HWEFTO.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-H4TQQ2CP.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-BZC7MN3T.js", "imports": ["/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-Q23GCLGG.js", "imports": ["/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-PNYQCOGB.js", "imports": ["/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-V55V7JBC.js", "imports": ["/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg": { "id": "routes/tsg", "parentId": "root", "path": "tsg", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-GVZKTJUH.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg-results": { "id": "routes/tsg-results", "parentId": "root", "path": "tsg-results", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-results-JANEMQHL.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-VN45M7G2.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-STEJOKCV.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-34E78A4D.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3giLCAiLi4vYXBwL2FwaS9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvVXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQmFzZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9zZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaWxlSW5wdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsLnRzeCIsICIuLi9hcHAvYXBpL3V0aWxzL0NTVi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4IiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0N1c3RvbUZpZWxkLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL0ZvbGRlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9Qcm9qZWN0LnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1NwYWNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Rhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFza1RlbXBsYXRlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1dvcmtmbG93LnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4IiwgIi4uL2FwcC9hcGkvR29vZ2xlL0dBUEkuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2Nvbm5lY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvdHNnLXJlc3VsdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RzZy1yZXN1bHRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZy1yZXN1bHRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy92aWRlby1iYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidmlkZW8tYmF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Nvbm5lY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Nvbm5lY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29ubmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL3RzZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHNnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RvY3VtZW50cy5yZWFkb25seVwiICtcblx0XHRcdFx0XHRcIiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSBcIiArXG5cdFx0XHRcdFx0XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLm1ldGFkYXRhLnJlYWRvbmx5IG9wZW5pZCBwcm9maWxlIGVtYWlsXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2UuZ29vZ2xlXG5cdCk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQgJiYgcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCkge1xuXHRhdXRoLnVzZShcblx0XHRuZXcgV3Jpa2VTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9JRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfU0VDUkVULFxuXHRcdFx0XHRjYWxsYmFja1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzMvYXV0aC93cmlrZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJEZWZhdWx0LHdzUmVhZFdyaXRlXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2Uud3Jpa2Vcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Vc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oXG5cdFx0cmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuXHQpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblxuXHRpZiAoIXVzZXJJZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIFVzZXIuZ2V0Rm9ySWQodXNlcklkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gYXN5bmMgKFxuXHRzZXJ2aWNlOiBTZXJ2aWNlLFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZWRpcmVjdHM6IHsgc3VjY2Vzczogc3RyaW5nOyBmYWlsdXJlOiBzdHJpbmcgfVxuKSA9PiB7XG5cdGNvbnN0IHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSB9ID0gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXG5cdFx0c2VydmljZSxcblx0XHRyZXF1ZXN0XG5cdCk7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblxuXHRjb25zb2xlLmxvZyhwcm9maWxlKTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvZmlsZS5pZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJOTyBJRD8hPyE6IFwiLCBwcm9maWxlKTtcblx0XHRcdHRocm93IFwid2hhdFwiO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyZW50VXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZXR0aW5nIEN1cnJlbnQgVXNlcjogXCIsIHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXHRcdFx0Y3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmdldEZvck9hdXRoKHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoIWN1cnJlbnRVc2VyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgdXNlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0c2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgc2V0Q2FjaGVkKGN1cnJlbnRVc2VyKSk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY3VycmVudFVzZXIuc2V0Q3JlZGVudGlhbHMoc2VydmljZSwge1xuXHRcdFx0YWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuXHRcdFx0cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuZmFpbHVyZSk7XG5cdH1cblxuXHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuc3VjY2Vzcywge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzZXNzaW9uU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2sgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHR5cGUge1xuXHRPQXV0aDJQcm9maWxlLFxuXHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4LWF1dGgtb2F1dGgyXCI7XG5pbXBvcnQgeyBPQXV0aDJTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuXG5leHBvcnQgdHlwZSBXcmlrZVN0cmF0ZWd5T3B0aW9ucyA9IHtcblx0Y2xpZW50SUQ6IHN0cmluZztcblx0Y2xpZW50U2VjcmV0OiBzdHJpbmc7XG5cdGNhbGxiYWNrVVJMOiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zID0ge1xuXHRzY29wZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9maWxlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0X2pzb246IHtcblx0XHRraW5kczogc3RyaW5nO1xuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XTtcblx0fTtcblx0cHJvdmlkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBXcmlrZVN0cmF0ZWd5PFVzZXI+IGV4dGVuZHMgT0F1dGgyU3RyYXRlZ3k8XG5cdFVzZXIsXG5cdFdyaWtlUHJvZmlsZSxcblx0V3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zXG4+IHtcblx0cHJpdmF0ZSByZWFkb25seSB1c2VySW5mb1VSTCA9XG5cdFx0XCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L2NvbnRhY3RzP21lPXRydWVcIjtcblx0cHJpdmF0ZSBzY29wZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM6IFdyaWtlU3RyYXRlZ3lPcHRpb25zLFxuXHRcdHZlcmlmeTogU3RyYXRlZ3lWZXJpZnlDYWxsYmFjazxcblx0XHRcdFVzZXIsXG5cdFx0XHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtczxXcmlrZVByb2ZpbGUsIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcz5cblx0XHQ+XG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0e1xuXHRcdFx0XHRhdXRob3JpemF0aW9uVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi9hdXRob3JpemUvdjRcIixcblx0XHRcdFx0dG9rZW5VUkw6IFwiaHR0cHM6Ly9sb2dpbi53cmlrZS5jb20vb2F1dGgyL3Rva2VuXCIsXG5cdFx0XHRcdGNsaWVudElEOiBvcHRpb25zLmNsaWVudElELFxuXHRcdFx0XHRjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuXHRcdFx0XHRjYWxsYmFja1VSTDogb3B0aW9ucy5jYWxsYmFja1VSTCxcblx0XHRcdH0sXG5cdFx0XHR2ZXJpZnlcblx0XHQpO1xuXG5cdFx0dGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXV0aG9yaXphdGlvblBhcmFtcygpOiBVUkxTZWFyY2hQYXJhbXMge1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdGlmICh0aGlzLnNjb3BlKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwic2NvcGVcIiwgdGhpcy5zY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyB1c2VyUHJvZmlsZShhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVByb2ZpbGU+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXNlckluZm9VUkwsIHtcblx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAgfSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHBheWxvYWQ6IFdyaWtlUHJvZmlsZVtcIl9qc29uXCJdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGFbMF07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGRhdGEuaWQsXG5cdFx0XHRmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG5cdFx0XHRfanNvbjogcGF5bG9hZCxcblx0XHRcdHByb3ZpZGVyOiBcIndyaWtlXCIsXG5cdFx0fTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2RhdGFiYXNlL1RhYmxlLnNlcnZlclwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuaW1wb3J0IENyZWRlbnRpYWwsIHsgU2VydmljZSwgVG9rZW5zIH0gZnJvbSBcIi4vQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuY29uc3QgRXhpc3RpbmcgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRDYWNoZWQgPSAodXNlcjogVXNlcikgPT4gKFxuXHRFeGlzdGluZy5zZXQodXNlci51c2VySWQsIHVzZXIpLCB1c2VyLnVzZXJJZFxuKTtcbmV4cG9ydCBjb25zdCBnZXRDYWNoZWQgPSAodXNlcklkOiBzdHJpbmcpID0+IEV4aXN0aW5nLmdldCh1c2VySWQpO1xuXG5jbGFzcyBPYXV0aElkIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIk9hdXRoSWRzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHByb2ZpbGVJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6Lm5hdGl2ZUVudW0oU2VydmljZSksXG5cdFx0dXNlcklkOiB6LnN0cmluZygpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgZmluZE9yQ3JlYXRlKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyBwcm9maWxlSWQsIHNlcnZpY2UgfSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHJldHVybiBleGlzdGluZztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFibGUucHV0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlLCB1c2VySWQ6IHV1aWQoKSB9KTtcblx0fVxuXG5cdGRhdGE6IHouaW5mZXI8dHlwZW9mIE9hdXRoSWQuU2NoZW1hPiB8IHVuZGVmaW5lZDtcblxuXHRnZXQgcHJvZmlsZUlkKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnByb2ZpbGVJZCA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHNlcnZpY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uc2VydmljZSA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0c3RhdGljIGFzeW5jIGdldEZvck9hdXRoKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3Qgb2F1dGhJZCA9IGF3YWl0IE9hdXRoSWQuZmluZE9yQ3JlYXRlKHByb2ZpbGVJZCwgc2VydmljZSk7XG5cblx0XHRpZiAoIW9hdXRoSWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVXNlcihvYXV0aElkLnVzZXJJZCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Rm9ySWQodXNlcklkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFVzZXIodXNlcklkKTtcblx0fVxuXG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgY3JlZGVudGlhbHM6IE1hcDxTZXJ2aWNlLCBDcmVkZW50aWFsPjtcblxuXHRjb25zdHJ1Y3Rvcih1c2VySWQ6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdHJldHVybiBDcmVkZW50aWFsLmFkZE9yVXBkYXRlKHRoaXMudXNlcklkLCBzZXJ2aWNlLCB0b2tlbnMpO1xuXHR9XG5cblx0YXN5bmMgZ2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscy5oYXMoc2VydmljZSkpIHtcblx0XHRcdGNvbnN0IGNyZWQgPSBhd2FpdCBDcmVkZW50aWFsLmdldENyZWRlbnRpYWwodGhpcy51c2VySWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoY3JlZCkge1xuXHRcdFx0XHR0aGlzLmNyZWRlbnRpYWxzLnNldChzZXJ2aWNlLCBjcmVkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoc2VydmljZSk7XG5cdH1cblxuXHRhc3luYyBoYXNDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgY3JlZCA9IGF3YWl0IHRoaXMuZ2V0Q3JlZGVudGlhbHMoc2VydmljZSk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbihjcmVkKTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVsIHtcblx0c3RhdGljIFRhYmxlTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHN0YXRpYyBTY2hlbWEgPSB6Lm9iamVjdCh7fSk7XG5cblx0c3RhdGljIGdldFRhYmxlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4odGhpczogVCkge1xuXHRcdHJldHVybiBuZXcgVGFibGU8SW5zdGFuY2VUeXBlPFQ+Pih0aGlzLlRhYmxlTmFtZSwgKC4uLmFyZ3MpID0+XG5cdFx0XHR0aGlzLmNyZWF0ZSguLi5hcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4oXG5cdFx0dGhpczogVCxcblx0XHRyYXc6IG9iamVjdFxuXHQpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMocmF3KSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdH1cblxuXHRkYXRhOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocmF3OiBvYmplY3QpIHtcblx0XHR0aGlzLmRhdGEgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQmFzZU1vZGVsKS5TY2hlbWEucGFyc2UocmF3KTtcblx0fVxufVxuIiwgImltcG9ydCBhcmMgZnJvbSBcIkBhcmNoaXRlY3QvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBBcmNUYWJsZSB9IGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9ucy90YWJsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGU8VD4ge1xuXHRwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgdGFibGU6IEFyY1RhYmxlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgcGFyc2U6IChyYXc6IG9iamVjdCkgPT4gVDtcblxuXHRjb25zdHJ1Y3Rvcih0YWJsZU5hbWU6IHN0cmluZyB8IG51bGwsIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQpIHtcblx0XHRpZiAoIXRhYmxlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGFibGUgbXVzdCBiZSBnaXZlbiBhIHRhYmxlIG5hbWUuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMudGFibGVOYW1lID0gdGFibGVOYW1lO1xuXHRcdHRoaXMucGFyc2UgPSBwYXJzZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnRhYmxlTmFtZTtcblx0fVxuXG5cdGFzeW5jIHNldHVwVGFibGUoKSB7XG5cdFx0aWYgKCF0aGlzLnRhYmxlKSB7XG5cdFx0XHRjb25zdCB0YWJsZXMgPSBhd2FpdCBhcmMudGFibGVzKCk7XG5cblx0XHRcdHRoaXMudGFibGUgPSB0YWJsZXNbdGhpcy50YWJsZU5hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRhYmxlO1xuXHR9XG5cblx0YXN5bmMgZ2V0KGtleTogYW55KSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLnNldHVwVGFibGUoKTtcblx0XHRjb25zdCByZXNwID0gYXdhaXQgdGFibGUuZ2V0KGtleSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgcHV0KGRhdGE6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLnB1dChkYXRhKTtcblxuXHRcdHJldHVybiByZXNwID8gdGhpcy5wYXJzZShyZXNwKSA6IG51bGw7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUocXVlcnk6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cblx0XHRhd2FpdCB0YWJsZS51cGRhdGUocXVlcnkpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHogZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBUb2tlbnMgPSB7XG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdHJlZnJlc2hUb2tlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG5cdGdvb2dsZSA9IFwiZ29vZ2xlXCIsXG5cdHdyaWtlID0gXCJ3cmlrZVwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIkNyZWRlbnRpYWxzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6LmVudW0oW1wiZ29vZ2xlXCIsIFwid3Jpa2VcIl0pLFxuXHRcdGFjY2Vzc1Rva2VuOiB6LnN0cmluZygpLFxuXHRcdC8vIHJlZnJlc2hUb2tlbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgYWRkT3JVcGRhdGUodXNlcklkOiBzdHJpbmcsIHNlcnZpY2U6IFNlcnZpY2UsIHRva2VuczogVG9rZW5zKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3Qga2V5ID0geyB1c2VySWQsIHNlcnZpY2UgfTtcblx0XHRjb25zb2xlLmxvZyhcImFkZGluZyBjcmVkZW50aWFsOiBcIiwga2V5KTtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRhd2FpdCB0YWJsZS51cGRhdGUoe1xuXHRcdFx0XHRLZXk6IGtleSxcblx0XHRcdFx0VXBkYXRlRXhwcmVzc2lvbjogXCJTRVQgYWNjZXNzVG9rZW4gPSA6YWNjZXNzVG9rZW5cIixcblx0XHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHRcdFwiOmFjY2Vzc1Rva2VuXCI6IHRva2Vucy5hY2Nlc3NUb2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCB0YWJsZS5wdXQoe1xuXHRcdFx0XHR1c2VySWQsXG5cdFx0XHRcdHNlcnZpY2UsXG5cdFx0XHRcdC4uLnRva2Vucyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRDcmVkZW50aWFsKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyB1c2VySWQsIHNlcnZpY2UgfSk7XG5cblx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBDcmVkZW50aWFsLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBhY2Nlc3NUb2tlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5hY2Nlc3NUb2tlbiA/PyBcIlwiO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcIm50aS5zZXNzaW9uXCIsXG5cdFx0c2FtZVNpdGU6IFwibGF4XCIsXG5cdFx0cGF0aDogXCIvXCIsXG5cdFx0c2VjcmV0czogW1wiTjN4dFRoMHVnaHQhIUNcIl0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHtcblx0Rm9ybSxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHR1c2VBY3Rpb25EYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxuXHRqc29uLFxuXHRyZWRpcmVjdCxcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdHVhbEZpbGVPYmplY3QgfSBmcm9tIFwiZmlsZXBvbmRcIjtcbmltcG9ydCAqIGFzIEhUTUxQYXJzZXIgZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQgeyB1c2VCbG9iLCB1c2VPYmplY3RVUkwgfSBmcm9tIFwifi9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0ICogYXMgQ1NWIGZyb20gXCJ+L2FwaS91dGlscy9DU1Yuc2VydmVyXCI7XG5cbmNvbnN0IFZlbmRvck9yZGVyID0gW1wiR2V0dHkgSW1hZ2VzXCIsIFwiU2h1dHRlcnN0b2NrXCIsIFwiVW5rbm93blwiXTtcblxudHlwZSBJbWFnZU9iamVjdCA9IHtcblx0XCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCI7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGF1dGhvcjoge1xuXHRcdG5hbWU6IHN0cmluZztcblx0fTtcbn07XG5cbnR5cGUgSW52ZW50b3J5ID0ge1xuXHR0eXBlOiBcInZpZGVvXCIgfCBcInBob3RvXCIgfCBcImF1ZGlvXCIgfCBcInVua25vd25cIjtcblx0ZmlsZW5hbWU6IHN0cmluZztcblx0dmVuZG9yOiBzdHJpbmc7XG5cblx0Y29kZT86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRoZWFkbGluZT86IHN0cmluZztcblx0Y3JlZGl0bGluZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogXCJodHRwczovL3VucGtnLmNvbS9maWxlcG9uZEBeNC9kaXN0L2ZpbGVwb25kLmNzc1wiLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvYWQ6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicmVwb3J0XCIpIGFzIEZpbGU7XG5cdGNvbnN0IHJlcG9ydCA9IGF3YWl0IHBhcnNlUmVwb3J0KGZpbGUpO1xuXG5cdGNvbnN0IHByb2plY3ROYW1lID0gcmVwb3J0W1wiUHJvamVjdCBuYW1lXCJdO1xuXHRjb25zdCBpbnZlbnRvcnkgPSAoYXdhaXQgZ2V0QXNzZXRJbnZlbnRvcnkocmVwb3J0KSkuc29ydChcblx0XHQoYSwgYikgPT4gVmVuZG9yT3JkZXIuaW5kZXhPZihhLnZlbmRvcikgLSBWZW5kb3JPcmRlci5pbmRleE9mKGIudmVuZG9yKVxuXHQpO1xuXG5cdGNvbnN0IGNzdiA9IGF3YWl0IENTVi5mb3JtYXQoaW52ZW50b3J5LCB7XG5cdFx0aGVhZGVyczogW1xuXHRcdFx0XCJoZWFkbGluZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcInZlbmRvclwiLFxuXHRcdFx0XCJmaWxlbmFtZVwiLFxuXHRcdFx0XCJjb2RlXCIsXG5cdFx0XHRcImNvbGxlY3Rpb25cIixcblx0XHRcdFwiY3JlZGl0bGluZVwiLFxuXHRcdFx0XCJ1cmxcIixcblx0XHRdLFxuXHR9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y3N2LFxuXHRcdHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVswXS50cmltKCkucmVwbGFjZSgvXFwuLiokLywgXCJcIiksXG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXRJbnZlbnRvcnkoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cdGNvbnN0IGFjdGlvbiA9IHVzZUFjdGlvbkRhdGEoKTtcblxuXHRjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEFjdHVhbEZpbGVPYmplY3RbXSB8IHVuZGVmaW5lZD4oXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cblx0Y29uc3Qgc2hvd1NhdmluZyA9XG5cdFx0dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCI7XG5cdGNvbnN0IHNob3dEb3dubG9hZCA9ICFzaG93U2F2aW5nICYmIGFjdGlvbjtcblx0Y29uc3Qgc2hvd0Zvcm0gPSAhc2hvd1NhdmluZyAmJiAhc2hvd0Rvd25sb2FkO1xuXG5cdGNvbnN0IGNzdiA9IHVzZUJsb2IoYWN0aW9uPy5jc3YsIFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtODtcIik7XG5cdGNvbnN0IGRvd25sb2FkVVJMID0gdXNlT2JqZWN0VVJMKGNzdik7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkFzc2V0IEludmVudG9yeVwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdHshc2hvd0Rvd25sb2FkIHx8ICFkb3dubG9hZFVSTCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2Rvd25sb2FkVVJMfVxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZD17YCR7YWN0aW9uPy5wcm9qZWN0TmFtZX0tYXNzZXQtaW52ZW50b3J5LmNzdmB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkRvd25sb2FkPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93U2F2aW5nID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0R2VuZXJhdGluZy4uLlxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd0Zvcm0gPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG5cdFx0XHRcdFx0XHRcdEFmdGVyIEVmZmVjdHMgRGVwZW5kZW5jeSBSZXBvcnRcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0RmlsZSAmZ3Q7IERlcGVuZGVuY2llcyAmZ3Q7IENvbGxlY3QgRmlsZXNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicmVwb3J0XCJcblx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRvbnVwZGF0ZWZpbGVzPXsoaXRlbXMpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRDb21waWxlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuY29uc3QgZ2V0SFRNTCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG5cdHJldHVybiBIVE1MUGFyc2VyLnBhcnNlKHRleHQsIHtcblx0XHRibG9ja1RleHRFbGVtZW50czogeyBzdHlsZTogZmFsc2UgfSxcblx0fSk7XG59O1xuXG5jb25zdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbWFnZU9iamVjdD4gPT4ge1xuXHRjb25zdCBodG1sID0gYXdhaXQgZ2V0SFRNTCh1cmwpO1xuXHRjb25zdCBsaW5rRGF0YSA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcblx0XHRcInNjcmlwdFt0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ11cIlxuXHQpO1xuXG5cdGZvciAobGV0IGRhdGEgb2YgbGlua0RhdGEpIHtcblx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpIGFzIEltYWdlT2JqZWN0O1xuXG5cdFx0aWYgKGpzb25bXCJAdHlwZVwiXSAhPT0gXCJJbWFnZU9iamVjdFwiKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgSW1hZ2VPYmplY3Q6ICR7dXJsfWApO1xufTtcblxuY29uc3QgaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdCA9IChvYmo6IEltYWdlT2JqZWN0KSA9PiBvYmouZGVzY3JpcHRpb247XG5jb25zdCBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0ID0gKG9iajogSW1hZ2VPYmplY3QpID0+IG9iai5hdXRob3IubmFtZTtcblxuY29uc3QgVHlwZXNUb0V4dGVuc2lvbiA9IHtcblx0dmlkZW86IFtcIi5tcDRcIiwgXCIubW92XCIsIFwiLm1wZ1wiXSxcblx0cGhvdG86IFtcIi5qcGVnXCIsIFwiLmpwZ1wiLCBcIi5wbmdcIiwgXCIudGlmXCIsIFwiLndlYm1cIl0sXG5cdGF1ZGlvOiBbXCIubXAzXCIsIFwiLndhdlwiXSxcbn07XG5cbmNvbnN0IGdldFR5cGVGcm9tRXh0ZW5zaW9uID0gKFxuXHRleHQ6IHN0cmluZ1xuKToga2V5b2YgdHlwZW9mIFR5cGVzVG9FeHRlbnNpb24gfCBcInVua25vd25cIiA9PiB7XG5cdGZvciAobGV0IFt0eXBlLCBleHRlbnNpb25zXSBvZiBPYmplY3QuZW50cmllcyhUeXBlc1RvRXh0ZW5zaW9uKSkge1xuXHRcdGlmIChleHRlbnNpb25zLmluY2x1ZGVzKGV4dCkpIHtcblx0XHRcdHJldHVybiB0eXBlIGFzIGtleW9mIHR5cGVvZiBUeXBlc1RvRXh0ZW5zaW9uO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBcInVua25vd25cIjtcbn07XG5cbmNvbnN0IEdldHR5UmVnZXggPSAvXihnZXR0eWltYWdlc3xHZXR0eUltYWdlcylcXC0oXFxkKykvO1xuY29uc3QgU2h1dHRlclJlZ2V4ID0gL14oc2h1dHRlcnN0b2NrKV8oXFxkKykvO1xuXG5jb25zdCBHZXR0eUFydGlzdFRpdGxlQmxhY2tMaXN0OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHtcblx0Y29udHJpYnV0b3I6IHRydWUsXG5cdG5vbmU6IHRydWUsXG59O1xuXG5jb25zdCBDYXBpdGFsaXplID0gKHM6IHN0cmluZykgPT4gYCR7cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbmNvbnN0IFRpdGxlQ2FzZSA9IChzOiBzdHJpbmcpID0+IHMuc3BsaXQoXCIgXCIpLm1hcChDYXBpdGFsaXplKS5qb2luKFwiIFwiKTtcblxuY29uc3QgSW5mb0dldHRlcnMgPSBbXG5cdHtcblx0XHQvLyBHZXR0eSBJbWFnZXNcblx0XHRoYW5kbGVzOiAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IEdldHR5UmVnZXgudGVzdChmaWxlbmFtZSksXG5cdFx0aW5mbzogYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBtYXRjaCA9IGZpbGVuYW1lLm1hdGNoKEdldHR5UmVnZXgpO1xuXHRcdFx0Y29uc3QgaWQgPSBtYXRjaD8uWzJdO1xuXG5cdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCBHZXR0eUltYWdlIGlkOiAke2ZpbGVuYW1lfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB1cmwgPSBgaHR0cDovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLyR7aWR9YDtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCBnZXRIVE1MKHVybCk7XG5cblx0XHRcdGNvbnN0IGFzc2V0RGV0YWlsc1NjcmlwdCA9IGh0bWwucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0J3NjcmlwdFtkYXRhLWNvbXBvbmVudD1cImFzc2V0ZGV0YWlsXCJdJ1xuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgYXNzZXREZXRhaWxzID0gYXNzZXREZXRhaWxzU2NyaXB0XG5cdFx0XHRcdD8gSlNPTi5wYXJzZShhc3NldERldGFpbHNTY3JpcHQudGV4dClcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0XHRpZiAoIWFzc2V0RGV0YWlscykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0YFVuYWJsZSB0byBnZXQgR2V0dHkgSW1hZ2VzIGFzc2V0IGRldGFpbHM6ICR7dXJsfWBcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIkdldHR5IEltYWdlc1wiLFxuXHRcdFx0XHRjb2RlOiBpZCxcblx0XHRcdFx0dXJsLFxuXG5cdFx0XHRcdGhlYWRsaW5lOiBhc3NldERldGFpbHMuYXNzZXQudGl0bGUsXG5cdFx0XHRcdGNyZWRpdGxpbmU6IEdldHR5W2Fzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZV1cblx0XHRcdFx0XHQ/IGFzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJcblx0XHRcdFx0XHQ6IGAke2Fzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJ9IC8gJHtUaXRsZUNhc2UoXG5cdFx0XHRcdFx0XHRcdGFzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZVxuXHRcdFx0XHRcdCAgKX1gLFxuXHRcdFx0XHRjb2xsZWN0aW9uOiBhc3NldERldGFpbHMuYXNzZXQuY29sbGVjdGlvbkRpc3BsYXlOYW1lLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0Ly9TaHV0dGVyc3RvY2tcblx0XHRoYW5kbGVzOiAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IFNodXR0ZXJSZWdleC50ZXN0KGZpbGVuYW1lKSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goU2h1dHRlclJlZ2V4KTtcblx0XHRcdGNvbnN0IGlkID0gbWF0Y2g/LlsyXTtcblxuXHRcdFx0aWYgKCFpZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IFNodXR0ZXJTdG9jayBpZDogJHtmaWxlbmFtZX1cIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvLyR7aWR9YDtcblxuXHRcdFx0Y29uc3QgaW1hZ2VPYmplY3QgPSBhd2FpdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhKHVybCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJTaHV0dGVyc3RvY2tcIixcblx0XHRcdFx0Y29kZTogaWQsXG5cdFx0XHRcdHVybCxcblxuXHRcdFx0XHRoZWFkbGluZTogaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdChpbWFnZU9iamVjdCksXG5cdFx0XHRcdGNyZWRpdGxpbmU6IGNyZWRpdGxpbmVGcm9tSW1hZ2VPYmplY3QoaW1hZ2VPYmplY3QpLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0Ly9BcnRsaXN0XG5cdFx0aGFuZGxlczogKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PlxuXHRcdFx0ZmlsZW5hbWUuaW5kZXhPZihcIkFydGxpc3RcIikgIT09IC0xLFxuXHRcdGluZm86IGFzeW5jIChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIkFydGxpc3QuaW9cIixcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbl07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0SW52ZW50b3J5KFxuXHRyZXBvcnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuKTogUHJvbWlzZTxJbnZlbnRvcnlbXT4ge1xuXHRjb25zdCBzb3VyY2VzID0gcmVwb3J0W1wiQ29sbGVjdGVkIHNvdXJjZSBmaWxlc1wiXSBhcyBzdHJpbmdbXTtcblxuXHRjb25zdCBpbnZlbnRvcmllcyA9IHNvdXJjZXMucmVkdWNlKFxuXHRcdChhY2M6IFByb21pc2U8SW52ZW50b3J5PltdLCBzb3VyY2U6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHNvdXJjZSk7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlLCBleHRlbnNpb24pO1xuXG5cdFx0XHRjb25zdCBnZXR0ZXIgPSBJbmZvR2V0dGVycy5maW5kKChnKSA9PlxuXHRcdFx0XHRnLmhhbmRsZXMoZmlsZW5hbWUsIGV4dGVuc2lvbilcblx0XHRcdCk7XG5cblx0XHRcdGlmICghZ2V0dGVyKSB7XG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdFx0dmVuZG9yOiBcIlVua25vd25cIixcblx0XHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0Z2V0dGVyLmluZm8oZmlsZW5hbWUsIGV4dGVuc2lvbikudGhlbigoaW5mbykgPT4gKHtcblx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0Li4uaW5mbyxcblx0XHRcdFx0fSkpLFxuXHRcdFx0XTtcblx0XHR9LFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGludmVudG9yaWVzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VSZXBvcnQoZmlsZTogRmlsZSkge1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxyXCIpO1xuXG5cdGNvbnN0IGdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGxldCBjdXJyZW50U2VjdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Zm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuXHRcdGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcblx0XHRjb25zdCBkZXB0aCA9IHBhcnRzLmxlbmd0aCAtIDE7XG5cdFx0Y29uc3QgbGluZVRleHQgPSBwYXJ0c1tkZXB0aF0udHJpbSgpO1xuXG5cdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRjb25zdCBbbmFtZSwgdmFsdWVdID0gbGluZVRleHQuc3BsaXQoXCI6XCIpO1xuXG5cdFx0XHRncm91cHNbbmFtZV0gPSBncm91cHNbbmFtZV0gPz8gW107XG5cblx0XHRcdGlmICh2YWx1ZT8udHJpbSgpKSB7XG5cdFx0XHRcdGdyb3Vwc1tuYW1lXS5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudFNlY3Rpb24gPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWN1cnJlbnRTZWN0aW9uKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUmVwb3J0XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRncm91cHNbY3VycmVudFNlY3Rpb25dLnB1c2gobGluZVRleHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncm91cHM7XG59XG4iLCAiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyB0aXRsZSwgY2hpbGRyZW4gfTogUGFnZVByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbXQ6IDEwIH19PlxuXHRcdFx0PFBhcGVyIGVsZXZhdGlvbj17M30gc3g9e3sgcHk6IDMgfX0+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDFcIiBtYj17NX0+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvUGFwZXI+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgRmlsZVBvbmQgfSBmcm9tIFwicmVhY3QtZmlsZXBvbmRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoRmlsZVBvbmQpYFxuXHR3aWR0aDogMzAwcHg7XG5cblx0JiAuZmlsZXBvbmQtLWNyZWRpdHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJvcC1sYWJlbCB7XG5cdFx0Y29sb3I6ICM0YzRlNTM7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tbGFiZWwtYWN0aW9uIHtcblx0XHR0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNiYWJkYzA7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tcGFuZWwtcm9vdCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjQ7XG5cdFx0aGVpZ2h0OiAxZW07XG5cdH1cblxuXHQmIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzU5NWU2ODtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1kcmlwLWJsb2Ige1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3ZjhhOWE7XG5cdH1cbmA7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvYihjb250ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiB7XG5cdFx0aWYgKCFjb250ZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGUgfSk7XG5cdH0sIFtjb250ZW50LCB0eXBlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VPYmplY3RVUkwoYmxvYjogQmxvYiB8IG51bGwpIHtcblx0Y29uc3QgW29iamVjdFVSTCwgc2V0T2JqZWN0VVJMXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFibG9iKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRzZXRPYmplY3RVUkwodXJsKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5cdFx0XHRzZXRPYmplY3RVUkwobnVsbCk7XG5cdFx0fTtcblx0fSwgW2Jsb2JdKTtcblxuXHRyZXR1cm4gb2JqZWN0VVJMO1xufVxuIiwgImltcG9ydCAqIGFzIENTVkZvcm1hdCBmcm9tIFwiQGZhc3QtY3N2L2Zvcm1hdFwiO1xuXG50eXBlIFJvdyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG5cdHJvd3M6IFJvd1tdLFxuXHRvcHRpb25zOiBDU1ZGb3JtYXQuRm9ybWF0dGVyT3B0aW9uc0FyZ3M8Um93LCBSb3c+XG4pOiBQcm9taXNlPHN0cmluZz4ge1xuXHRyZXR1cm4gQ1NWRm9ybWF0LndyaXRlVG9TdHJpbmcocm93cywgb3B0aW9ucyk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudCA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENsaWVudFJlc3BvbnNlID0ge1xuXHRjbGllbnRzOiBDbGllbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuXG5cdGNvbnN0IHNwYWNlSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNwYWNlSWRcIik7XG5cdGNvbnN0IFdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRpZiAoIXNwYWNlSWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJNdXN0IGhhdmUgYSBzcGFjZUlkXCIsIHsgc3RhdHVzOiA0MjIgfSk7XG5cdH1cblxuXHRjb25zdCBmb2xkZXJzID0gYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21TcGFjZShzcGFjZUlkLCB7IHByb2plY3Q6IGZhbHNlIH0pO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRjbGllbnRzOiBmb2xkZXJzLm1hcCgoZikgPT4gKHsgaWQ6IGYuaWQsIHRpdGxlOiBmLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIENyZWRlbnRpYWwgZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwiLi4vYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXJDbGFzcyB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VQcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9Qcm9qZWN0LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0NsYXNzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuXG5jb25zdCBCYXNlVVJMID0gXCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L1wiO1xuXG50eXBlIEZldGNoQ29uZmlnID0ge1xuXHRtZXRob2Q6IHN0cmluZztcblx0aGVhZGVyczoge1xuXHRcdEF1dGhvcml6YXRpb246IHN0cmluZztcblx0XHRcIkNvbnRlbnQtVHlwZVwiPzogc3RyaW5nO1xuXHR9O1xuXHRib2R5Pzogc3RyaW5nO1xuXHRzaWduYWw/OiBBYm9ydFNpZ25hbDtcbn07XG5cbmNvbnN0IGVuY29kZVZhbHVlID0gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gYFske3ZhbHVlLm1hcCgoaSkgPT4gYFwiJHtlbmNvZGVWYWx1ZShpKX1cImApLmpvaW4oXCIsXCIpfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VDbGllbnQge1xuXHRzdGF0aWMgYXN5bmMgZm9yU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRcdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdFx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkLCB1c2VyPy51c2VySWQpO1xuXHR9XG5cblx0Q3VzdG9tRmllbGQ6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcztcblx0Rm9sZGVyOiBXcmlrZUZvbGRlckNsYXNzO1xuXHRQcm9qZWN0OiBXcmlrZVByb2plY3RDbGFzcztcblx0U3BhY2U6IFdyaWtlU3BhY2VDbGFzcztcblx0VGFzazogV3Jpa2VUYXNrQ2xhc3M7XG5cdFRhc2tUZW1wbGF0ZTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcztcblx0VmlkZW9CYXRjaDogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzO1xuXHRXb3JrZmxvdzogV3Jpa2VXb3JrRmxvd0NsYXNzO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY3JlZGVudGlhbHM6IENyZWRlbnRpYWwsXG5cdFx0cHVibGljIHVzZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkXG5cdCkge1xuXHRcdHRoaXMuQ3VzdG9tRmllbGQgPSBjcmVhdGVDdXN0b21GaWVsZENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuRm9sZGVyID0gY3JlYXRlRm9sZGVyQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Qcm9qZWN0ID0gY3JlYXRlUHJvamVjdENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuU3BhY2UgPSBjcmVhdGVTcGFjZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVGFzayA9IGNyZWF0ZVRhc2tDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2tUZW1wbGF0ZSA9IGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVmlkZW9CYXRjaCA9IGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Xb3JrZmxvdyA9IGNyZWF0ZVdvcmtGbG93Q2xhc3ModGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGZldGNoPFQgPSB7fT4oXG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0bWV0aG9kOiBzdHJpbmcsXG5cdFx0ZGF0YT86IG9iamVjdFxuXHQpOiBQcm9taXNlPFQ+IHtcblx0XHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdGNvbnN0IGNvbmZpZzogRmV0Y2hDb25maWcgPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNyZWRlbnRpYWxzLmFjY2Vzc1Rva2VufWAsXG5cdFx0XHR9LFxuXHRcdFx0c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcblx0XHR9O1xuXG5cdFx0aWYgKGRhdGEgJiYgY29uZmlnLmhlYWRlcnMpIHtcblx0XHRcdGNvbmZpZy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID1cblx0XHRcdFx0XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcblx0XHR9XG5cblx0XHRpZiAoZGF0YSkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG5cdFx0XHRPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdFx0cGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbmZpZy5ib2R5ID0gcGFyYW1zLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coXCJXUklLRSBSZXF1ZXN0OiBcIiwgdXJsLCBtZXRob2QsIGNvbmZpZy5ib2R5LCBkYXRhKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCAxMDAwMCk7XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKTtcblx0XHRjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJHb3QgV1JJS0UgUmVzcG9uc2U6IFwiLCBqc29uKTtcblxuXHRcdGlmIChqc29uLmVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoanNvbi5lcnJvckRlc2NyaXB0aW9uKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbiBhcyBUO1xuXHR9XG5cblx0Z2V0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgcGFyYW1zOiBvYmplY3QgPSB7fSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7QmFzZVVSTH0ke3BhdGh9YCk7XG5cblx0XHRPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgZW5jb2RlVmFsdWUodmFsdWUpKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPih1cmwudG9TdHJpbmcoKSwgXCJHRVRcIik7XG5cdH1cblxuXHRwb3N0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgZGF0YTogb2JqZWN0ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPihgJHtCYXNlVVJMfSR7cGF0aH1gLCBcIlBPU1RcIiwgZGF0YSk7XG5cdH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIEN1c3RvbUZpZWxkUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG59O1xuXG50eXBlIEN1c3RvbUZpZWxkUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogQ3VzdG9tRmllbGRSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VDdXN0b21GaWVsZENsYXNzID0ge1xuXHRuZXcgKHJhdzogQ3VzdG9tRmllbGRSYXcpOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2U7XG5cblx0ZnJvbUlkczogKGlkOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VDdXN0b21GaWVsZENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlQ3VzdG9tRmllbGRDbGllbnQgaW1wbGVtZW50cyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxDdXN0b21GaWVsZFJlc3BvbnNlPihcblx0XHRcdFx0YGN1c3RvbWZpZWxkcy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocmF3KSA9PiBuZXcgQ2xzKHJhdykpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCByYXc6IEN1c3RvbUZpZWxkUmF3O1xuXG5cdFx0Y29uc3RydWN0b3IocmF3OiBDdXN0b21GaWVsZFJhdykge1xuXHRcdFx0dGhpcy5yYXcgPSByYXc7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cdFx0Z2V0IHR5cGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnR5cGU7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgUHJvamVjdEluZm9SYXcgPSB7XG5cdG93bmVySWQ6IHN0cmluZztcbn07XG5cbnR5cGUgRm9sZGVyUmF3ID0ge1xuXHRpZD86IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhdztcblx0Y2hpbGRJZHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107IC8vb25seSBwcmVzZW50IGlmIHRoZSBmb2xkZXIgaXMgZmV0Y2hlZCBieSBpZC4uLlxufTtcblxudHlwZSBUcmVlUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogRm9sZGVyUmF3W107XG59O1xuXG50eXBlIEZvbGRlclNhdmVDb25maWcgPSB7XG5cdHBhcmVudEZvbGRlcklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlRm9sZGVySW5zdGFuY2Uge1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cblx0c2F2ZTogKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcblxuXHRnZXRQYXJlbnRGb2xkZXI6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGdldENoaWxkRm9sZGVyczogKCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+O1xuXHRmaW5kQ29uZmlnRm9sZGVyOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckNsYXNzIHtcblx0bmV3IChyYXc6IEZvbGRlclJhdyk6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cblx0ZnJvbVNwYWNlOiAoXG5cdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHQpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbUlEczogKGlkczogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbVBlcm1hTGluazogKGlkOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGNyZWF0ZTogKFxuXHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlRm9sZGVyQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VGb2xkZXJDbGllbnQgaW1wbGVtZW50cyBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVNwYWNlKFxuXHRcdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdFx0cGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cdFx0KTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXG5cdFx0XHRcdGAvc3BhY2VzLyR7c3BhY2VJZH0vZm9sZGVyc2AsXG5cdFx0XHRcdHBhcmFtc1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21JRHMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgZm9sZGVycy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhsaW5rOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRyZWUgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXCJmb2xkZXJzXCIsIHtcblx0XHRcdFx0cGVybWFsaW5rOiBsaW5rLFxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IHRyZWUuZGF0YVswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudChmb2xkZXIpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBjcmVhdGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRcdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhd1xuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCB9KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogRm9sZGVyUmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXHRcdGdldCBkZXNjcmlwdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5kZXNjcmlwdGlvbjtcblx0XHR9XG5cdFx0Z2V0IHByb2plY3QoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucHJvamVjdDtcblx0XHR9XG5cdFx0Z2V0IGNoaWxkSWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmNoaWxkSWRzO1xuXHRcdH1cblx0XHRnZXQgcGFyZW50SWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PEZvbGRlclJhdz4oXG5cdFx0XHRcdGBmb2xkZXIvJHtjb25maWcucGFyZW50Rm9sZGVySWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24gPz8gXCJcIixcblx0XHRcdFx0XHRwcm9qZWN0OiB0aGlzLnByb2plY3QgPz8gZmFsc2UsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucmF3ID0gcmVzcDtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBwYXJlbnRGb2xkZXI6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4gfCB1bmRlZmluZWQ7XG5cdFx0YXN5bmMgZ2V0UGFyZW50Rm9sZGVyKCkge1xuXHRcdFx0Y29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLnBhcmVudElkcyB8fCB0aGlzLnBhcmVudElkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHBhcmVudFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmZyb21JRHMoW3RoaXMucGFyZW50SWRzWzBdXSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3BbMF07XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnBhcmVudEZvbGRlciA9IHRoaXMucGFyZW50Rm9sZGVyID8/IGxvYWQoKTtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudEZvbGRlcjtcblx0XHR9XG5cblx0XHRwcml2YXRlIGNoaWxkRm9sZGVyczogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldENoaWxkRm9sZGVycygpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5jaGlsZElkcykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgc3ViIGZvbGRlcnNcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gY2xpZW50LkZvbGRlci5mcm9tSURzKHRoaXMuY2hpbGRJZHMpO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5jaGlsZEZvbGRlcnMgPSB0aGlzLmNoaWxkRm9sZGVycyA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZEZvbGRlcnM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjb25maWdGb2xkZXJDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHRQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPlxuXHRcdD4oKTtcblx0XHQvL0xvb2sgZm9yIGEgZm9sZGVyIHRoYXQgaXMgYSBkaXJlY3QgY2hpbGQgb2YgdGhpcyBmb2xkZXIsIGlmIGl0cyBub3QgdGhlcmUgc3RhcnQgbG9va2luZyB1cCBeXG5cdFx0YXN5bmMgZmluZENvbmZpZ0ZvbGRlcihuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IGZpbmQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gYXdhaXQgdGhpcy5nZXRDaGlsZEZvbGRlcnMoKTtcblxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChjaGlsZC50aXRsZSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMuZ2V0UGFyZW50Rm9sZGVyKCk7XG5cblx0XHRcdFx0cmV0dXJuIHBhcmVudC5maW5kQ29uZmlnRm9sZGVyKG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLnNldChuYW1lLCBmaW5kKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSBhd2FpdCB0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmdldChuYW1lKTtcblxuXHRcdFx0cmV0dXJuIGZvbGRlciA/PyBudWxsO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcblxudHlwZSBDU1ZSb3cgPSB7IHRlbXBsYXRlOiBzdHJpbmcgfSAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgUHJvamVjdFJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVByb2plY3RJbnN0YW5jZSA9IHtcblx0aW1wb3J0Q1NWKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0SW5zdGFuY2U+O1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBQcm9qZWN0UmF3LCBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlKTogV3Jpa2VQcm9qZWN0SW5zdGFuY2U7XG5cblx0Y3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VQcm9qZWN0Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VQcm9qZWN0SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBjcmVhdGUodGl0bGU6IHN0cmluZywgcGFyZW50OiBXcmlrZUZvbGRlckluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdENsaWVudCh7IHRpdGxlIH0sIHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmF3OiBQcm9qZWN0UmF3LFxuXHRcdFx0cHJpdmF0ZSBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cblx0XHRhc3luYyBpbXBvcnRDU1YoXG5cdFx0XHRmaWxlOiBGaWxlLFxuXHRcdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdFx0KTogUHJvbWlzZTxXcmlrZVByb2plY3RDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3N2LnBhcnNlU3RyaW5nKHRleHQsIG9wdGlvbnMpXG5cdFx0XHRcdFx0Lm9uKFwiZXJyb3JcIiwgKGVycikgPT4gcmVqZWN0KGVycikpXG5cdFx0XHRcdFx0Lm9uKFwiZGF0YVwiLCAocm93OiBDU1ZSb3cpID0+IHRoaXMudmlkZW9zLnB1c2gocm93KSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZSgpIDogdGhpcy5jcmVhdGUoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHVwZGF0ZSgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB1cGRhdGUgUHJvamVjdHMgKG5vdCBpbXBsZW1lbnRlZClcIik7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoKSB7XG5cdFx0XHRpZiAoIWNsaWVudC51c2VySWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnBhcmVudD8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gcGFyZW50IGlkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUZvbGRlciA9IGF3YWl0IHRoaXMucGFyZW50Py5maW5kQ29uZmlnRm9sZGVyKFxuXHRcdFx0XHRcInRlbXBsYXRlc1wiXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXRlbXBsYXRlRm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmaW5kIHRlbXBsYXRlIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHByb2plY3QgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmNyZWF0ZSh0aGlzLnRpdGxlLCBcIlwiLCB7XG5cdFx0XHRcdG93bmVySWQ6IGNsaWVudC51c2VySWQsXG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcHJvamVjdC5zYXZlKHsgcGFyZW50Rm9sZGVySWQ6IHRoaXMucGFyZW50LmlkIH0pO1xuXG5cdFx0XHRmb3IgKGxldCB2aWRlbyBvZiB0aGlzLnZpZGVvcy5yZXZlcnNlKCkpIHtcblx0XHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLCAuLi5wcm9wZXJ0aWVzIH0gPSB2aWRlbztcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmaW5kVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuXHRcdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgdGVtcGxhdGU/LmNsb25lKHByb3BlcnRpZXMpO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXI6IHByb2plY3QgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgU3BhY2VSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG50eXBlIFNwYWNlUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogU3BhY2VSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VDbGFzcyA9IHtcblx0bmV3IChyYXc6IFNwYWNlUmF3KTogV3Jpa2VTcGFjZUluc3RhbmNlO1xuXG5cdGdldEFsbDogKCkgPT4gUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BhY2VDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VTcGFjZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlU3BhY2VDbGllbnQgaW1wbGVtZW50cyBXcmlrZVNwYWNlSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8U3BhY2VSZXNwb25zZT4oXCIvc3BhY2VzXCIpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlU3BhY2VDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBTcGFjZVJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuXG5jb25zdCBTYXZlQmxhY2tMaXN0ID0gW1xuXHRcImFjY291bnRJZFwiLFxuXHRcImNyZWF0ZWREYXRlXCIsXG5cdFwidXBkYXRlZERhdGVcIixcblx0XCJwZXJtYWxpbmtcIixcblx0XCJzY29wZVwiLFxuXHRcInByaW9yaXR5XCIsXG5cdFwiZGF0ZXNcIixcbl07XG5cbnR5cGUgQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFRhc2tSYXcgPSB7XG5cdGlkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0cGFyZW50cz86IHN0cmluZ1tdO1xuXHRwYXJlbnRJZHM/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrcz86IHN0cmluZ1tdO1xuXHRzdXBlclRhc2tJZHM/OiBzdHJpbmdbXTtcblx0c3ViVGFza0lkcz86IHN0cmluZ1tdO1xuXHRhY2NvdW50SWQ/OiBzdHJpbmdbXTtcblx0Y3JlYXRlZERhdGU/OiBzdHJpbmc7XG5cdHVwZGF0ZWREYXRlPzogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNJZD86IHN0cmluZztcblx0cGVybWFsaW5rPzogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcblx0cHJpb3JpdHk/OiBzdHJpbmc7XG5cdGRhdGVzPzogYW55O1xuXHRlZmZvcnRBbGxvY2F0aW9uPzogYW55O1xuXHRiaWxsaW5nVHlwZT86IGFueTtcblx0ZmluYW5jZT86IGFueTtcblx0c2hhcmVkSWRzPzogYW55O1xuXHRyZXNwb25zaWJsZUlkcz86IGFueTtcblx0Y3VzdG9tRmllbGRzPzogQ3VzdG9tRmllbGRJbnN0YW5jZVtdO1xufSAmIHt9O1xuXG5leHBvcnQgdHlwZSBUYXNrUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogVGFza1Jhd1tdO1xufTtcblxudHlwZSBUYXNrU2F2ZUNvbmZpZyA9IHtcblx0Zm9sZGVyPzogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRyYXc6IFRhc2tSYXcgfCB1bmRlZmluZWQ7XG5cdGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHBhcmVudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuXG5cdGFkZFN1YlRhc2tzOiAodGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10pID0+IHZvaWQ7XG5cdHNldFN1cGVyVGFzazogKHRhc2s6IFdyaWtlVGFza0luc3RhbmNlKSA9PiB2b2lkO1xuXG5cdGdldFNhdmVEYXRhOiAoKSA9PiBUYXNrUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IFRhc2tTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0NsYXNzPFQgPSBXcmlrZVRhc2tJbnN0YW5jZT4ge1xuXHRuZXcgKHRhc2s6IFRhc2tSYXcpOiBUO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8VD47XG5cblx0ZnJvbVRpdGxlOiAodGl0bGU6IHN0cmluZywgZm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21SYXc6ICh0YXNrOiBUYXNrUmF3KSA9PiBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbms8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KHRoaXM6IFQsIHBlcm1hbGluazogc3RyaW5nKTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZTxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4oXG5cdFx0XHR0aGlzOiBULFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tVGl0bGUodGl0bGUsIGZvbGRlciwgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tUmF3PFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCB0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlVGFza0NsaWVudCh0YXNrKSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdFx0fVxuXG5cdFx0cmF3OiBUYXNrUmF3O1xuXG5cdFx0cHJpdmF0ZSBzdXBlclRhc2s6IFdyaWtlVGFza0luc3RhbmNlIHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3ViVGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cblx0XHRnZXQgdGl0bGUoKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cblx0XHRnZXQgcGFyZW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucGFyZW50SWRzO1xuXHRcdH1cblxuXHRcdGFkZFN1YlRhc2tzKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSB7XG5cdFx0XHR0YXNrcy5mb3JFYWNoKCh0KSA9PiB0LnNldFN1cGVyVGFzayh0aGlzKSk7XG5cblx0XHRcdHRoaXMuc3ViVGFza3MgPSBbLi4udGhpcy5zdWJUYXNrcywgLi4udGFza3NdO1xuXHRcdH1cblxuXHRcdHNldFN1cGVyVGFzayh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0dGhpcy5zdXBlclRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdGdldFNhdmVEYXRhKCk6IFRhc2tSYXcge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgcGFyZW50cywgLi4uZXh0cmFEYXRhIH0gPSB0aGlzLnJhdztcblx0XHRcdGNvbnN0IGRhdGEgPSB7IC4uLmV4dHJhRGF0YSB9IGFzIFRhc2tSYXc7XG5cblx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRkYXRhLnRpdGxlID0gdGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXJlbnRzKSB7XG5cdFx0XHRcdGRhdGEucGFyZW50cyA9IHBhcmVudHM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN1cGVyVGFzaz8uaWQpIHtcblx0XHRcdFx0ZGF0YS5zdXBlclRhc2tzID0gW3RoaXMuc3VwZXJUYXNrLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgcHJvcCBvZiBTYXZlQmxhY2tMaXN0KSB7XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW3Byb3AgYXMga2V5b2YgVGFza1Jhd107XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZShjb25maWcpIDogdGhpcy5jcmVhdGUoY29uZmlnKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFzeW5jIGNyZWF0ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zdCB7IGZvbGRlciB9ID0gY29uZmlnO1xuXG5cdFx0XHRpZiAoIWZvbGRlcj8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZSBhIGxvY2F0aW9uIHRvIHNhdmUgYSBuZXcgdGFzayB0by5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdC4uLnRoaXMuZ2V0U2F2ZURhdGEoKSxcblx0XHRcdH07XG5cblx0XHRcdGlmIChmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHBheWxvYWQucGFyZW50cyA9IFtmb2xkZXIuaWRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnBvc3Q8VGFza1Jlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCxcblx0XHRcdFx0Zml4UGF5bG9hZChwYXlsb2FkIGFzIHt9KVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgdGFzayA9IHJlc3AuZGF0YVswXTtcblxuXHRcdFx0dGhpcy5yYXcgPSB0YXNrO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBTdWIgVGFza3M6IFwiLCB0aGlzLnN1YlRhc2tzLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBzdWJUYXNrIG9mIHRoaXMuc3ViVGFza3MpIHtcblx0XHRcdFx0YXdhaXQgc3ViVGFzay5zYXZlKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVwZGF0ZSB0YXNrc1wiKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IFBheWxvYWRLZXlNYXAgPSB7XG5cdHNoYXJlZElkczogXCJzaGFyZWRzXCIsXG5cdHJlc3BvbnNpYmxlSWRzOiBcInJlc3BvbnNpYmxlc1wiLFxuXHRjdXN0b21TdGF0dXNJZDogXCJjdXN0b21TdGF0dXNcIixcbn07XG5cbmZ1bmN0aW9uIGZpeFBheWxvYWQocGF5bG9hZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuXHRjb25zdCBuZXdQYXlsb2FkID0geyAuLi5wYXlsb2FkIH07XG5cblx0Zm9yIChsZXQgW2tleSwgZml4XSBvZiBPYmplY3QuZW50cmllcyhQYXlsb2FkS2V5TWFwKSkge1xuXHRcdGlmIChuZXdQYXlsb2FkW2tleV0pIHtcblx0XHRcdG5ld1BheWxvYWRbZml4XSA9IG5ld1BheWxvYWRba2V5XTtcblx0XHRcdGRlbGV0ZSBuZXdQYXlsb2FkW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1BheWxvYWQ7XG59XG5cbmNvbnN0IEZpZWxkcyA9IFtcblx0XCJwYXJlbnRJZHNcIixcblx0XCJkZXNjcmlwdGlvblwiLFxuXHRcImN1c3RvbUZpZWxkc1wiLFxuXHRcInNoYXJlZElkc1wiLFxuXHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFwic3ViVGFza0lkc1wiLFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rOiBzdHJpbmcsIGNsaWVudDogV3Jpa2VDbGllbnQpIHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3NgLCB7XG5cdFx0cGVybWFsaW5rLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRyZXR1cm4gcmVzcC5kYXRhWzBdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbUlkcyhcblx0aWRzOiBzdHJpbmdbXSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3W10+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3MvJHtpZHMuam9pbihcIixcIil9YCk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21UaXRsZShcblx0dGl0bGU6IHN0cmluZyxcblx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlLFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBQcm9taXNlPFRhc2tSYXc+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgZm9sZGVycy8ke2ZvbGRlci5pZH0vdGFza3NgLCB7XG5cdFx0dGl0bGUsXG5cdFx0ZmllbGRzOiBGaWVsZHMsXG5cdH0pO1xuXG5cdGlmIChyZXNwLmRhdGEubGVuZ3RoID4gMSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkZvdW5kIG11bHRpcGxlIHRhc2tzXCIpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cbiIsICJpbXBvcnQgTXVzdGFjaGUgZnJvbSBcIm11c3RhY2hlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfSBmcm9tIFwiLi9DdXN0b21GaWVsZC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHtcblx0V3Jpa2VUYXNrQ2xhc3MsXG5cdFdyaWtlVGFza0luc3RhbmNlLFxuXHRUYXNrUmF3LFxuXHRUYXNrUmVzcG9uc2UsXG59IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmltcG9ydCB7IHJhd0Zyb21UaXRsZSwgcmF3RnJvbUlkcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsb25lRGF0YSA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgQ3VzdG9tRmllbGRUZW1wbGF0ZSA9IHtcblx0dmFsdWU6IHN0cmluZztcblx0ZGVmaW5pdGlvbjogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIGV4dGVuZHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRjbG9uZTogKFxuXHRcdGRhdGE6IENsb25lRGF0YSxcblx0XHRwYXJlbnQ/OiBXcmlrZVRhc2tJbnN0YW5jZVxuXHQpID0+IFByb21pc2U8V3Jpa2VUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza1RlbXBsYXRlQ2xhc3Ncblx0ZXh0ZW5kcyBXcmlrZVRhc2tDbGFzczxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPiB7fVxuXG5mdW5jdGlvbiBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCBkYXRhOiBDbG9uZURhdGEpOiBzdHJpbmcge1xuXHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHRyZXR1cm4gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFRhc2tUZW1wbGF0ZUNsaWVudFxuXHRcdGV4dGVuZHMgY2xpZW50LlRhc2tcblx0XHRpbXBsZW1lbnRzIFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2Vcblx0e1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tSWRzKGlkcywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHJhdy5tYXAoKHIpID0+IG5ldyBDbHMocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0cGVybWFsaW5rOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihcIi90YXNrc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJlc3AuZGF0YVswXSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZShcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdyh0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRhc2tUZW1wbGF0ZUNsaWVudCh0YXNrKTtcblx0XHR9XG5cblx0XHRUZW1wbGF0ZUZpZWxkczogKGtleW9mIFRhc2tSYXcpW10gPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdO1xuXHRcdExpdGVyYWxGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1xuXHRcdFx0XCJzaGFyZWRJZHNcIixcblx0XHRcdFwicmVzcG9uc2libGVJZHNcIixcblx0XHRcdFwiY3VzdG9tU3RhdHVzSWRcIixcblx0XHRdO1xuXG5cdFx0YXN5bmMgY2xvbmUoZGF0YTogQ2xvbmVEYXRhLCBzdXBlclRhc2s/OiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSYXcgPSB0aGlzLnJhdyA/PyAoe30gYXMgVGFza1Jhdyk7XG5cblx0XHRcdGNvbnN0IHRhc2tSYXcgPSB7fSBhcyBUYXNrUmF3O1xuXHRcdFx0Y29uc3Qgc2V0ID0gKGtleToga2V5b2YgVGFza1JhdywgdmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRcdHRhc2tSYXdba2V5XSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrZXkpID0+XG5cdFx0XHRcdHNldChrZXksIGRhdGFba2V5XSA/PyBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZVJhd1trZXldLCBkYXRhKSlcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XCJTZXR0aW5nIExpdGVyYWwgRmllbGQ6IFwiLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGRhdGEudGl0bGVQcmVmaXgpIHtcblx0XHRcdFx0dGFza1Jhdy50aXRsZSA9IGAke2RhdGEudGl0bGVQcmVmaXh9ICR7dGFza1Jhdy50aXRsZX1gO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXNrUmF3LnRpdGxlID0gdGFza1Jhdy50aXRsZVxuXHRcdFx0XHQucmVwbGFjZShcIlRFTVBMQVRFXCIsIFwiXCIpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXCBcXCAvLCBcIiBcIik7XG5cblx0XHRcdGNvbnN0IGN1c3RvbUZpZWxkcyA9IChhd2FpdCB0aGlzLmdldEN1c3RvbUZpZWxkcygpKSA/PyB7fTtcblxuXHRcdFx0Zm9yIChsZXQgW25hbWUsIGZpZWxkXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21GaWVsZHMpKSB7XG5cdFx0XHRcdHRhc2tSYXcuY3VzdG9tRmllbGRzID0gW1xuXHRcdFx0XHRcdC4uLih0YXNrUmF3LmN1c3RvbUZpZWxkcyA/PyBbXSksXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWQ6IGZpZWxkLmRlZmluaXRpb24uaWQsXG5cdFx0XHRcdFx0XHR2YWx1ZTogZGF0YVtuYW1lXSA/PyBmaWVsZC52YWx1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0YXNrID0gY2xpZW50LlRhc2suZnJvbVJhdyh0YXNrUmF3KTtcblxuXHRcdFx0aWYgKHN1cGVyVGFzaykge1xuXHRcdFx0XHR0YXNrLnNldFN1cGVyVGFzayhzdXBlclRhc2spO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJUYXNrVGVtcGxhdGVzID0gIXRlbXBsYXRlUmF3LnN1YlRhc2tJZHM/Lmxlbmd0aFxuXHRcdFx0XHQ/IFtdXG5cdFx0XHRcdDogYXdhaXQgVGFza1RlbXBsYXRlQ2xpZW50LmZyb21JZHModGVtcGxhdGVSYXcuc3ViVGFza0lkcyk7XG5cblx0XHRcdGNvbnN0IGNsb25lRGF0YSA9IHtcblx0XHRcdFx0Li4uZGF0YSxcblx0XHRcdFx0dGl0bGVQcmVmaXg6IHRhc2tSYXcudGl0bGUsXG5cdFx0XHR9IGFzIENsb25lRGF0YTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblxuXHRcdFx0Y29uc3Qgc3ViVGFza3MgPSBhd2FpdCBQcm9taXNlLmFsbChcblx0XHRcdFx0c3ViVGFza1RlbXBsYXRlcy5tYXAoKHMpID0+IHMuY2xvbmUoY2xvbmVEYXRhLCB0YXNrKSlcblx0XHRcdCk7XG5cblx0XHRcdHRhc2suYWRkU3ViVGFza3Moc3ViVGFza3MpO1xuXG5cdFx0XHRyZXR1cm4gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIEN1c3RvbUZpZWxkc0xvYWRlcjpcblx0XHRcdHwgUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBDdXN0b21GaWVsZFRlbXBsYXRlPiB8IG51bGw+XG5cdFx0XHR8IHVuZGVmaW5lZDtcblx0XHQvL1RPRE86IGNhY2hlIHRoaXMgcmV0dXJuXG5cdFx0cHJpdmF0ZSBhc3luYyBnZXRDdXN0b21GaWVsZHMoKTogUHJvbWlzZTxSZWNvcmQ8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHR7IHZhbHVlOiBzdHJpbmc7IGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB9XG5cdFx0PiB8IG51bGw+IHtcblx0XHRcdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgeyBjdXN0b21GaWVsZHMgfSA9IHRoaXMucmF3ID8/IHt9O1xuXG5cdFx0XHRcdGlmICghY3VzdG9tRmllbGRzIHx8IGN1c3RvbUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0dGluZyBDdXN0b20gRmllbGRzOiBcIiwgY3VzdG9tRmllbGRzKTtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBhd2FpdCBjbGllbnQuQ3VzdG9tRmllbGQuZnJvbUlkcyhcblx0XHRcdFx0XHRjdXN0b21GaWVsZHMubWFwKChjKSA9PiBjLmlkKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiBmaWVsZHMucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjdXN0b21GaWVsZHMuZmluZChcblx0XHRcdFx0XHRcdChjKSA9PiBjLmlkID09PSBmaWVsZC5pZFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQudHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRcdFtmaWVsZC50aXRsZV06IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGluc3RhbmNlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRkZWZpbml0aW9uOiBmaWVsZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSwge30pO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPSB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlciA/PyBsb2FkZXIoKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFZpZGVvQmF0Y2hTYXZlQ29uZmlnID0ge1xuXHR0ZW1wbGF0ZUZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcblx0bG9jYXRpb25Gb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZSB7XG5cdGltcG9ydENTVjogKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xuXG5cdHNhdmU6IChjb25maWc6IFZpZGVvQmF0Y2hTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdG5ldyAoY29uZmlnOiB7IHRhc2s6IFdyaWtlVGFza0luc3RhbmNlIH0pOiBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U7XG5cblx0ZnJvbVBlcm1hTGluazogKGxpbms6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdFRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0bGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCBjbGllbnQuVGFzay5mcm9tUGVybWFMaW5rKGxpbmspO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdFRhc2tDbGllbnQoeyB0YXNrIH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2U7XG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih7IHRhc2sgfTogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KSB7XG5cdFx0XHR0aGlzLnRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYWRkVmlkZW8odmlkZW86IENTVlJvdykge1xuXHRcdFx0dGhpcy52aWRlb3MucHVzaCh2aWRlbyk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLmFkZFZpZGVvKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZSh7IHRlbXBsYXRlRm9sZGVyLCBsb2NhdGlvbkZvbGRlciB9OiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgVmlkZW8gQmF0Y2g6IFwiLCB0aGlzLnZpZGVvcy5sZW5ndGgpO1xuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcDxcblx0XHRcdFx0c3RyaW5nLFxuXHRcdFx0XHRQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+XG5cdFx0XHQ+KCk7XG5cdFx0XHRjb25zdCBmaW5kVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICghdGVtcGxhdGVDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZUNhY2hlLnNldChcblx0XHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0XHRjbGllbnQuVGFza1RlbXBsYXRlLmZyb21UaXRsZShuYW1lLCB0ZW1wbGF0ZUZvbGRlcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlQ2FjaGUuZ2V0KG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gbG9jYXRpb25Gb2xkZXI7XG5cblx0XHRcdGlmICghZm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzLCB0aGlzLnRhc2spO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXIgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBXb3JrZmxvd1JhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNlczogV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZVtdO1xufTtcblxudHlwZSBXb3JrZmxvd1Jlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFdvcmtmbG93UmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93SW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlV29ya0Zsb3dDbGFzcyA9IHtcblx0bmV3IChyYXc6IFdvcmtmbG93UmF3KTogV3Jpa2VXb3JrRmxvd0luc3RhbmNlO1xuXG5cdGZyb21OYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8V3Jpa2VXb3JrRmxvd0luc3RhbmNlPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JrRmxvd0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVdvcmtGbG93Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VXb3JrZmxvd0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlV29ya0Zsb3dJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21OYW1lKG5hbWU6IHN0cmluZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8V29ya2Zsb3dSZXNwb25zZT4oXCJ3b3JrZmxvd3NcIik7XG5cdFx0XHRjb25zdCByYXcgPSByZXNwLmRhdGEuZmluZCgoZCkgPT4gZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdFx0aWYgKCFyYXcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV29ya2Zsb3cgbm90IGZvdW5kXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlV29ya2Zsb3dDbGllbnQocmF3KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogV29ya2Zsb3dSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCBuYW1lKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Lm5hbWU7XG5cdFx0fVxuXHRcdGdldCBjdXN0b21TdGF0dXNlcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jdXN0b21TdGF0dXNlcztcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHRMb2FkZXJGdW5jdGlvbixcblx0TGlua3NGdW5jdGlvbixcblx0cmVkaXJlY3QsXG5cdHVzZUZldGNoZXIsXG5cdEZvcm0sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IHR5cGUgeyBBY3R1YWxGaWxlT2JqZWN0IH0gZnJvbSBcImZpbGVwb25kXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgSW5wdXRCcmVhZENydW1iIGZyb20gXCJ+L2NvbXBvbmVudHMvSW5wdXRCcmVhZENydW1iXCI7XG5pbXBvcnQgT25Nb3VudCBmcm9tIFwifi9jb21wb25lbnRzL09uTW91bnRcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcblxuaW1wb3J0IHR5cGUgeyBTcGFjZXNSZXNwb25zZSwgU3BhY2UgfSBmcm9tIFwiLi9zcGFjZXNcIjtcbmltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UsIENsaWVudCB9IGZyb20gXCIuL2NsaWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmlsZXBvbmRAXjQvZGlzdC9maWxlcG9uZC5jc3NcIixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRjb25zdCBVcGxvYWRIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdC1maWxlXCIpIGFzIEZpbGU7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRjb25zb2xlLmxvZyhcIkdvdCBGb3JtIERhdGE6IFwiLCB0ZXh0KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG5cdGNvbnN0IHNwYWNlcyA9IHVzZUZldGNoZXI8U3BhY2VzUmVzcG9uc2U+KCk7XG5cdGNvbnN0IGxvYWRTcGFjZXMgPSB1c2VGZXRjaGVyTG9hZChzcGFjZXMsIFwiL3Byb2plY3RzL3NwYWNlc1wiKTtcblx0Y29uc3QgW3NwYWNlLCBzZXRTcGFjZV0gPSB1c2VTdGF0ZTxTcGFjZSB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IGNsaWVudHMgPSB1c2VGZXRjaGVyPENsaWVudFJlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkQ2xpZW50cyA9IHVzZUZldGNoZXJMb2FkKFxuXHRcdGNsaWVudHMsXG5cdFx0YC9wcm9qZWN0cy9jbGllbnRzP3NwYWNlSWQ9JHtlbmNvZGVVUklDb21wb25lbnQoc3BhY2U/LmlkID8/IFwiXCIpfWBcblx0KTtcblx0Y29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlPENsaWVudCB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IHsgaGFzVmFsdWU6IGhhc1Byb2plY3ROYW1lLCBwcm9wczogcHJvamVjdE5hbWVQcm9wcyB9ID1cblx0XHR1c2VCdWZmZXJlZElucHV0KCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJOZXcgUHJvamVjdFwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdDxJbnB1dEJyZWFkQ3J1bWI+XG5cdFx0XHRcdFx0PE9uTW91bnQgb25Nb3VudD17bG9hZFNwYWNlc30+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtzcGFjZT8uaWR9IG5hbWU9XCJzcGFjZUlkXCIgLz5cblx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwYWNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG8pID0+IHNldFNwYWNlKG8pfVxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtzcGFjZXMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtzcGFjZXMuZGF0YT8uc3BhY2VzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdGlzT3B0aW9uRXF1YWxUb1ZhbHVlPXsobywgdikgPT4gby5pZCA9PT0gdi5pZH1cblx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ucGFyYW1zfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTcGFjZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHR7IXNwYWNlID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRDbGllbnRzfT5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NsaWVudD8uaWR9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHRzeD17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRDbGllbnQobyl9XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17Y2xpZW50cy5zdGF0ZSA9PT0gXCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17Y2xpZW50cy5kYXRhPy5jbGllbnRzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsobykgPT4gby50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDbGllbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Pbk1vdW50PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFjbGllbnQgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByb2plY3QgTmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdGtleT1cInByb2plY3RcIlxuXHRcdFx0XHRcdFx0XHRpbnB1dFByb3BzPXtwcm9qZWN0TmFtZVByb3BzfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshaGFzUHJvamVjdE5hbWUgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8RmlsZUlucHV0XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInByb2plY3QtZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0XHRmaWxlcz17ZmlsZXN9XG5cdFx0XHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0Q3JlYXRlIFByb2plY3Rcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvSW5wdXRCcmVhZENydW1iPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlRmV0Y2hlckxvYWQoXG5cdGZldGNoZXI6IHsgbG9hZDogKHVybDogc3RyaW5nKSA9PiB2b2lkIH0gJiBGZXRjaGVyLFxuXHR1cmw6IHN0cmluZ1xuKSB7XG5cdHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0aWYgKCFmZXRjaGVyLmRhdGEgJiYgZmV0Y2hlci5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGZldGNoZXIubG9hZCh1cmwpO1xuXHRcdH1cblx0fSwgW2ZldGNoZXIsIHVybF0pO1xufVxuXG5mdW5jdGlvbiB1c2VCdWZmZXJlZElucHV0KCkge1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkPigpO1xuXHRjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4oKTtcblxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtoYXNWYWx1ZSwgc2V0SGFzVmFsdWVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRzZXRWYWx1ZShpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKTtcblxuXHRcdGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuXHRcdH1cblxuXHRcdHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSkpO1xuXG5cdFx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuXHRcdH0sIDUwMCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBvbktleVByZXNzID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIHtcblx0XHRoYXNWYWx1ZSxcblx0XHRwcm9wczoge1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRyZWY6IGlucHV0UmVmLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRvbktleVByZXNzLFxuXHRcdH0sXG5cdH07XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbnR5cGUgSW5wdXRCcmVhZENydW1iUHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBHcmlkSXRlbSA9IHN0eWxlZChHcmlkKWBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEJyZWFkQ3J1bWIoeyBjaGlsZHJlbiB9OiBJbnB1dEJyZWFkQ3J1bWJQcm9wcykge1xuXHRjb25zdCBjbXBzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cblx0Y29uc3QgYnJlYWRjcnVtYnMgPSBjbXBzLnNsaWNlKDAsIC0xKTtcblx0Y29uc3QgZm9jdXNlZCA9IGNtcHNbY21wcy5sZW5ndGggLSAxXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxHcmlkXG5cdFx0XHRjb250YWluZXJcblx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRwYWRkaW5nPXsyfVxuXHRcdFx0c3g9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cblx0XHQ+XG5cdFx0XHR7YnJlYWRjcnVtYnMubWFwKChjLCBrZXkpID0+IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezN9IGtleT17YGJyZWFkY3J1bWItJHtrZXl9YH0+XG5cdFx0XHRcdFx0e2N9XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQpKX1cblx0XHRcdHtmb2N1c2VkID8gKFxuXHRcdFx0XHQ8R3JpZEl0ZW0gaXRlbSB4cz17MTJ9PlxuXHRcdFx0XHRcdHtmb2N1c2VkfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0PC9HcmlkPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBGZXRjaE9uTW91bnRQcm9wcyA9IHtcblx0b25Nb3VudDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uTW91bnQoeyBvbk1vdW50LCBjaGlsZHJlbiB9OiBGZXRjaE9uTW91bnRQcm9wcykge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdG9uTW91bnQoKTtcblx0fSwgW29uTW91bnRdKTtcblxuXHRyZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5cbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIFNwYWNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgU3BhY2VzUmVzcG9uc2UgPSB7XG5cdHNwYWNlczogU3BhY2VbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IHNwYWNlcyA9IGF3YWl0IFdyaWtlLlNwYWNlLmdldEFsbCgpO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRzcGFjZXM6IHNwYWNlcy5tYXAoKHMpID0+ICh7IGlkOiBzLmlkLCB0aXRsZTogcy50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuXHQvL05PVEU6IHRoaXMgb2JqZWN0LmtleXMgdHJpY2sgb25seSB3b3JrcyBpZiB0aGUgZW51bSBrZXlzIGFyZSBleGFjdCBtYXRjaGVzIGZvciB0aGUgdmFsdWVzXG5cdGlmICghcGFyYW1zLnNlcnZpY2UgfHwgIU9iamVjdC5rZXlzKFNlcnZpY2UpLmluY2x1ZGVzKHBhcmFtcy5zZXJ2aWNlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIFNlcnZpY2VcIik7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhcIlNlcnZpY2U6IFwiLCBwYXJhbXMuc2VydmljZSk7XG5cblx0YXdhaXQgYXV0aGVudGljYXRlVXNlcihwYXJhbXMuc2VydmljZSBhcyBTZXJ2aWNlLCByZXF1ZXN0LCB7XG5cdFx0c3VjY2VzczogXCJcIixcblx0XHRmYWlsdXJlOiBcIlwiLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUge0xvYWRlckZ1bmN0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7cmVkaXJlY3QsIHVzZUxvYWRlckRhdGF9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuXG5pbXBvcnQge2dldFNlc3Npb25Vc2VyfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHtTZXJ2aWNlfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgR0FQSSBmcm9tIFwifi9hcGkvR29vZ2xlL0dBUEkuc2VydmVyXCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cblx0Ly8gZ2V0IHNlc3Npb24gdXNlclxuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0Ly8gZ2VuZXJhdGUgdGVsZXByb21wdGVyIHNjcmlwdFxuXHRjb25zdCB0b2tlbiA9IChhd2FpdCB1c2VyLmdldENyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKSk/LmFjY2Vzc1Rva2VuO1xuXHRpZiAoIXRva2VuKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBHQVBJIGFjY2VzcyB0b2tlbi4nKTtcblx0fVxuXHRjb25zdCBnYXBpID0gbmV3IEdBUEkocmVxdWVzdCwgdG9rZW4pO1xuXHRyZXR1cm4gZ2FwaS5nZW5lcmF0ZVRlbGVwcm9tcHRlclNjcmlwdHMoKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBkb3dubG9hZCBsaW5rcyBmb3IgZWFjaCBHb29nbGUgRG9jcyB0ZXh0IGNvbGxlY3RlZCBieSB0aGUgc2VydmVyIGZyb20gdGhlIFRyYWNraW5nIFNoZWV0LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcmV0dXJuIEEgZG9jdW1lbnQgY29udGFpbmluZyBkb3dubG9hZCBsaW5rcyB0byBhbGwgdGhlIHRleHQgZG9jdW1lbnRzLCBhcyB3ZWxsIGFzIHNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluaXRpYWwgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHNnUmVzdWx0cygpIHtcblx0Ly8gY3JlYXRlIGRvd25sb2FkIGxpbmtzIGZvciBlYWNoIEdvb2dsZSBEb2NzIHRleHQgY29sbGVjdGVkIGJ5IHRoZSBzZXJ2ZXJcblx0Y29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcblx0bGV0IGZpbGVMaW5rcyA9IFtdO1xuXHRsZXQgbWV0YUpTT04gPSBbXTtcblx0bGV0IHppcCA9IG5ldyBKU1ppcCgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0Y29uc3QgdGV4dCA9IGRhdGEuZmlsZXNbaV0udGV4dDtcblx0XHRjb25zdCB0aXRsZSA9IGRhdGEuZmlsZXNbaV0udGl0bGUgKyAnLnR4dCc7XG5cdFx0bWV0YUpTT04ucHVzaChkYXRhLmZpbGVzW2ldLm1ldGEpO1xuXHRcdHppcC5maWxlKHRpdGxlLCB0ZXh0KTtcblx0XHRmaWxlTGlua3MucHVzaCg8bGk+PGEgaHJlZj17J2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCl9XG5cdFx0XHRcdFx0XHRcdCAgZG93bmxvYWQ9e3RpdGxlfT57dGl0bGV9PC9hPjwvbGk+KTtcblx0fVxuXHRjb25zdCB7IFBhcnNlciB9ID0gcmVxdWlyZSgnanNvbjJjc3YnKTtcblx0Ly8gY29uc3QgZmllbGRzID0gWyd0aXRsZScsICdsaW5rJywgJ3dhcm5pbmdzJywgJ0VzdGltYXRlZFZPTWludXRlcyddXG5cblx0Y29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpXG5cdGNvbnN0IGNzdiA9IHBhcnNlci5wYXJzZShtZXRhSlNPTik7XG5cdHppcC5maWxlKFwibWV0YS5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG1ldGFKU09OKSk7XG5cdHppcC5maWxlKFwibWV0YS5jc3ZcIiwgY3N2KTtcblxuXHRmdW5jdGlvbiBkb3dubG9hZEFsbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBzcmM6IGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9leGFtcGxlcy9kb3dubG9hZC16aXAtZmlsZS5odG1sXG5cdFx0emlwLmdlbmVyYXRlQXN5bmMoe3R5cGU6IFwiYmFzZTY0XCJ9KS50aGVuKGZ1bmN0aW9uIChiYXNlNjQpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IFwiZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LFwiICsgYmFzZTY0O1xuXHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHRocm93IEVycm9yKGVycik7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVGVsZXByb21wdGVyIFNjcmlwdCBHZW5lcmF0b3IgUmVzdWx0c1wiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17ZG93bmxvYWRBbGx9PkRvd25sb2FkIEFsbCBEb2N1bWVudHM8L0J1dHRvbj5cblx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8dWwgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDUwcHhcIn19PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5UcmFja2luZyBTaGVldDogPC9zdHJvbmc+e2RhdGEuc2hlZXREYXRhLnRpdGxlfTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPlNoZWV0OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEuc2hlZXR9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+Um93OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEucm93fTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPkNvbHVtbjogPC9zdHJvbmc+e2RhdGEuc2hlZXREYXRhLmNvbHVtbn08L2xpPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5Eb2N1bWVudHMgY3JlYXRlZDogPC9zdHJvbmc+e2RhdGEuZmlsZXMubGVuZ3RofTwvbGk+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PHVsIHN0eWxlPXt7bWFyZ2luOiBcIjBweCA1MHB4XCJ9fT5cblx0XHRcdFx0e2ZpbGVMaW5rc31cblx0XHRcdDwvdWw+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB7ZG9jc192MSwgZ29vZ2xlfSBmcm9tICdnb29nbGVhcGlzJztcblxuaW50ZXJmYWNlIHRzZ1BhcmFtcyB7XG5cdGNvbHVtbjogc3RyaW5nIHwgbnVsbDtcblx0c2hlZXQ6IHN0cmluZyB8IG51bGw7XG5cdHJvdzogc3RyaW5nIHwgbnVsbDtcblx0dGl0bGU6IHN0cmluZztcblx0dXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdBUEkge1xuXHRwYXJhbXM6IHRzZ1BhcmFtcztcblx0dG9rZW46IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0LCB0b2tlbjogc3RyaW5nKSB7XG5cdFx0Ly8gQ29sbGVjdCBVUkwgcGFyYW1ldGVycyBhbmQgc2V0IGRlZmF1bHQgdmFsdWVzXG5cdFx0Y29uc3Qgc2VhcmNoID0gKG5ldyBVUkwocmVxdWVzdC51cmwpKS5zZWFyY2hQYXJhbXM7XG5cdFx0dGhpcy5wYXJhbXMgPSB7XG5cdFx0XHR1cmw6IHNlYXJjaC5nZXQoXCJ1cmxcIikgPz8gXCJcIixcblx0XHRcdHNoZWV0OiBzZWFyY2guZ2V0KFwic2hlZXRcIikgIT0gXCJcIiA/IHNlYXJjaC5nZXQoXCJzaGVldFwiKSA6IFwiTWFzdGVyIFJldmlldyBUcmFja2VyXCIsXG5cdFx0XHRyb3c6IHNlYXJjaC5nZXQoXCJyb3dcIikgIT0gXCJcIiA/IHNlYXJjaC5nZXQoXCJyb3dcIikgOiAnNScsXG5cdFx0XHRjb2x1bW46IHNlYXJjaC5nZXQoXCJjb2x1bW5cIikgIT0gXCJcIiA/IHNlYXJjaC5nZXQoXCJjb2x1bW5cIikgOiAnSScsXG5cdFx0XHR0aXRsZTogXCJcIixcblx0XHR9XG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xuXHR9XG5cblx0YXN5bmMgZ2VuZXJhdGVUZWxlcHJvbXB0ZXJTY3JpcHRzKCkge1xuXHRcdC8vIGNvbGxlY3QgbGlzdCBvZiBEb2MgbGlua3MgZnJvbSB0aGUgVHJhY2tpbmcgRG9jdW1lbnRcblx0XHRjb25zdCBzaGVldERhdGEgPSBhd2FpdCBjb2xsZWN0TGlua3NGcm9tQ29sdW1uKHRoaXMucGFyYW1zKVxuXHRcdGNvbnN0IGxpbmtzID0gc2hlZXREYXRhLmxpbmtzLmZpbHRlcihTdHJpbmcpO1xuXHRcdHRoaXMucGFyYW1zLnRpdGxlID0gc2hlZXREYXRhLnRpdGxlO1xuXG5cdFx0Ly8gY29sbGVjdCB0aXRsZSBhbmQgdGV4dCBmcm9tIGVhY2ggb2YgdGhlIEdvb2dsZSBEb2NzIGxpbmtzXG5cdFx0bGV0IGZpbGVfdGV4dCA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGZpbGVfdGV4dC5wdXNoKGF3YWl0IGV4dHJhY3RUcmFuc2NyaXB0VGV4dCh0aGlzLnRva2VuLCBsaW5rc1tpXSkpO1xuXHRcdH1cblxuXHRcdC8vIHJldHVybiBwYXJhbXMgYW5kIHt0aXRsZSwgdGV4dH0gZm9yIGVhY2ggZG9jIGZvdW5kIGluIHRoZSB0cmFja2luZyBzaGVldFxuXHRcdHJldHVybiB7c2hlZXREYXRhOiB0aGlzLnBhcmFtcywgZmlsZXM6IGZpbGVfdGV4dH07XG5cdH1cbn1cblxuXG4vKipcbiAqIEdldHMgdGhlIHNwcmVhZHNoZWV0IG9yIGRvY3VtZW50IElEIGZyb20gYSBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30gIHVybCBUaGUgVVJMIHRvIGNvbGxlY3QgdGhlIElEIGZyb20uXG4gKi9cbmZ1bmN0aW9uIGdldElERnJvbVVSTCh1cmw6IHN0cmluZykge1xuXHRyZXR1cm4gbmV3IFVSTCh1cmwpLnBhdGhuYW1lLnNwbGl0KCcvJylbM107XG59XG5cbi8qKlxuICogQ29sbGVjdHMgYWxsIGh5cGVybGlua3MgZnJvbSBhIGNvbHVtbiB3aXRoaW4gYSBnaXZlbiBzaGVldCBpbiBhIGdpdmVuIHNwcmVhZHNoZWV0LlxuICogQHBhcmFtIHt0c2dQYXJhbXN9ICBwYXJhbXNcdFVSTCBwYXJhbXMgZnJvbSB0aGUgdGVsZXByb21wdGVyIHNjcmlwdCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybiB7W3N0cmluZ119IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0aXRsZSBvZiB0aGUgc3ByZWFkc2hlZXQsIGFuZCBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgbGlua3NcbiAqIGZvdW5kIGluIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RMaW5rc0Zyb21Db2x1bW4ocGFyYW1zOiB0c2dQYXJhbXMpIHtcblx0Y29uc3QgZ29vZ2xlU2hlZXRzID0gZ29vZ2xlLnNoZWV0cygndjQnKTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnb29nbGVTaGVldHMuc3ByZWFkc2hlZXRzLmdldChcblx0XHR7XG5cdFx0XHQvLyBUT0RPOiB1c2UgdGhlIE9BVVRIIHRva2VuXG5cdFx0XHRhdXRoOiAnQUl6YVN5Qlc0aFZYLVIzRkF3T3RBT3RqU3ZQcVdzQnVZRENrWDFjJyxcblx0XHRcdC8vIG9hdXRoX3Rva2VuOiB0b2tlbixcblx0XHRcdHNwcmVhZHNoZWV0SWQ6IGdldElERnJvbVVSTChwYXJhbXMudXJsKSxcblx0XHRcdGluY2x1ZGVHcmlkRGF0YTogdHJ1ZSxcblx0XHRcdHJhbmdlczogW2Ake3BhcmFtcy5zaGVldH0hJHtwYXJhbXMuY29sdW1ufSR7cGFyYW1zLnJvd306JHtwYXJhbXMuY29sdW1ufWBdIC8vIGV4OiBTaGVldE5hbWUhSTU6SVxuXHRcdH1cblx0KTtcblx0Ly8gY2hlY2sgdGhhdCBkYXRhIGFwcGVhcnMgYXMgZXhwZWN0ZWRcblx0aWYgKCEocmVzcG9uc2UuZGF0YS5wcm9wZXJ0aWVzICYmIHJlc3BvbnNlLmRhdGEucHJvcGVydGllcy50aXRsZSkpIHtcblx0XHR0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIHNwcmVhZHNoZWV0IHRpdGxlXCIpO1xuXHR9XG5cdGNvbnN0IHRpdGxlID0gcmVzcG9uc2UuZGF0YS5wcm9wZXJ0aWVzLnRpdGxlO1xuXG5cdGlmICghKHJlc3BvbnNlLmRhdGEuc2hlZXRzICYmIHJlc3BvbnNlLmRhdGEuc2hlZXRzWzBdLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5zaGVldHNbMF0uZGF0YVswXS5yb3dEYXRhKSkge1xuXHRcdHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGdldCBzcHJlYWRzaGVldCBkYXRhXCIpO1xuXHR9XG5cdGNvbnN0IHJvd3MgPSByZXNwb25zZS5kYXRhLnNoZWV0c1swXS5kYXRhWzBdLnJvd0RhdGE7XG5cblx0Ly8gY29sbGVjdCBoeXBlcmxpbmtzIGZyb20gcm93c1xuXHRjb25zdCBsaW5rczogc3RyaW5nW10gPSBuZXcgQXJyYXkocm93cy5sZW5ndGgpO1xuXHRmb3IgKGxldCByb3cgb2Ygcm93cykge1xuXHRcdGlmIChyb3cudmFsdWVzKSB7XG5cdFx0XHRjb25zdCBsaW5rID0gcm93LnZhbHVlc1swXS5oeXBlcmxpbms7XG5cdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRsaW5rcy5wdXNoKGxpbmspO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkZvdW5kIHJvdyB3aXRoIG5vIGRhdGFcIik7XG5cdFx0fVxuXG5cdH1cblx0cmV0dXJuIHt0aXRsZTogdGl0bGUsIGxpbmtzOiBsaW5rc307XG59XG5cbi8qKlxuICogQ29sbGVjdHMgdGhlIHRleHQgY29udGVudCBmcm9tIHRoZSBzZWNvbmQgY29sdW1uIGluIGEgc2NyaXB0IGRvY3VtZW50LlxuICogQHBhcmFtICBcdHRva2VuOnN0cmluZ1x0VGhlIE9BdXRoIHRva2VuLlxuICogQHBhcmFtXHRsaW5rOnN0cmluZyBcdFRoZSBpZCBmb3IgdGhlIEdvb2dsZURvYy5cbiAqXG4gKiBAcmV0dXJuIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB0aXRsZSBvZiB0aGUgZG9jdW1lbnQsIGFuZCBhIHN0cmluZyBjb250YWluaW5nIHRoZSB0aXRsZSBhbmQgY2VsbCBjb250ZW50IG9mXG4gKiB0aGUgdGFibGUsIHNlcGFyYXRlZCBieSB0d28gbmV3IGxpbmVzLlxuICovXG5hc3luYyBmdW5jdGlvbiBleHRyYWN0VHJhbnNjcmlwdFRleHQodG9rZW46IHN0cmluZywgbGluazogc3RyaW5nKSB7XG5cblx0Ly8gcXVlcnkgR29vZ2xlIERvY3MgZm9yIGRvY3VtZW50IGRhdGFcblx0Y29uc3QgaWQgPSBnZXRJREZyb21VUkwobGluayk7XG5cdGNvbnN0IGRvY3MgPSBnb29nbGUuZG9jcygndjEnKTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2NzLmRvY3VtZW50cy5nZXQoe1xuXHRcdG9hdXRoX3Rva2VuOiB0b2tlbixcblx0XHRkb2N1bWVudElkOiBpZCxcblx0fSk7XG5cdC8vIHZhbGlkYXRlIHJlc3BvbnNlIG1hdGNoZXMgZXhwZWN0ZWQgZm9ybWF0XG5cdGlmICghcmVzcG9uc2UuZGF0YS5ib2R5KSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGRhdGEgZnJvbSBHb29nbGUgRG9jXCIpO1xuXHR9XG5cdGlmICghcmVzcG9uc2UuZGF0YS5ib2R5LmNvbnRlbnQpIHtcblx0XHR0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIGNvbnRlbnQgaW4gR29vZ2xlIERvYyBib2R5XCIpO1xuXHR9XG5cdGNvbnN0IGVsZW1lbnRzID0gcmVzcG9uc2UuZGF0YS5ib2R5LmNvbnRlbnQ7XG5cdGlmICghKGVsZW1lbnRzWzFdICYmIGVsZW1lbnRzWzFdLnBhcmFncmFwaCAmJiBlbGVtZW50c1sxXS5wYXJhZ3JhcGguZWxlbWVudHMpKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZmluZCB0aXRsZSBpbiBHb29nbGUgRG9jXCIpO1xuXHR9XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtZW50c1sxXS5wYXJhZ3JhcGguZWxlbWVudHNbMF0pO1xuXHRsZXQgY29sdW1uSW5kZXg6IG51bWJlcjtcblx0bGV0IHRleHQ6IHN0cmluZyA9ICcnO1xuXHR0ZXh0ICs9IHRpdGxlICsgJ1xcbic7XG5cdGxldCB3YXJuaW5ncyA9IFwiXCI7XG5cdGZvciAoY29uc3QgdmFsdWUgb2YgZWxlbWVudHMpIHsgLy8gZWxlbWVudHMgaW4gdGhlIGRvY3VtZW50XG5cdFx0aWYgKHZhbHVlLnRhYmxlKSB7XG5cdFx0XHRjb25zdCB0YWJsZSA9IHZhbHVlLnRhYmxlO1xuXHRcdFx0Ly8gVGhlIHNwb2tlbiBjb250ZW50IG9mIHRoZSBzY3JpcHQgd2lsbCBlaXRoZXIgYmUgaW4gdGhlIFNjcmlwdCBvciBBdWRpbyBjb2x1bW4uIERlZmF1bHQgdG8gbGFzdCBjb2x1bW4uXG5cdFx0XHRsZXQgcm93SGVhZGVycyA9IHsuLi5leHRyYWN0VGFibGVIZWFkZXJSb3codGFibGUpfTtcblx0XHRcdGlmIChyb3dIZWFkZXJzLlNjcmlwdCkge1xuXHRcdFx0XHRjb2x1bW5JbmRleCA9IHJvd0hlYWRlcnMuU2NyaXB0O1xuXHRcdFx0fSBlbHNlIGlmIChyb3dIZWFkZXJzLkF1ZGlvKSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gcm93SGVhZGVycy5BdWRpbztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbHVtbkluZGV4ID0gT2JqZWN0LmtleXMocm93SGVhZGVycykubGVuZ3RoIC0gMTtcblx0XHRcdFx0d2FybmluZ3MgKz0gYENvdWxkIG5vdCBmaW5kICdBdWRpbycgb3IgJ1NjcmlwdCcgY29sdW1uIHRvIGNvbGxlY3Qgc3Bva2VuIHdvcmQgY29udGVudC4gVXNlZCBjb2x1bW4gJHtjb2x1bW5JbmRleCArIDF9IGluc3RlYWQuYDtcblx0XHRcdH1cblx0XHRcdGlmICh0YWJsZS50YWJsZVJvd3MpIHtcblx0XHRcdFx0Zm9yIChjb25zdCByb3cgb2YgdGFibGUudGFibGVSb3dzKSB7ICAvLyByb3dzIGluIHRoZSB0YWJsZVxuXHRcdFx0XHRcdGlmIChyb3cudGFibGVDZWxscykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2VsbCA9IHJvdy50YWJsZUNlbGxzW2NvbHVtbkluZGV4XS5jb250ZW50OyAgLy8gY2VsbCBpbiB0aGUgcm93XG5cdFx0XHRcdFx0XHRpZiAoY2VsbCkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ICs9IGV4dHJhY3RQYXJhZ3JhcGhUZXh0KGNlbGwpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9eXFxzKiQoPzpcXHJcXG4/fFxcbikvZ20sICcnKS5yZXBsYWNlKC8kXFxuL2dtLCAnXFxuXFxuJyk7XG5cdGNvbnN0IGxhc3RNb2RpZmllZCA9IGF3YWl0IGdldExhc3RNb2RpZmllZFRpbWUoaWQpO1xuXHRpZiAobGFzdE1vZGlmaWVkID09IFwidW5rbm93blwiKSB7XG5cdFx0d2FybmluZ3MgKz0gXCJcXG5Db3VsZCBub3QgZmluZCBsYXN0IG1vZGlmaWVkIHRpbWUuXCJcblx0fVxuXHRsZXQgbWV0YSA9IHtcblx0XHRcInRpdGxlXCI6IHRpdGxlLFxuXHRcdFwibGlua1wiOiBsaW5rLFxuXHRcdFwiRXN0aW1hdGVkVk9NaW51dGVzXCI6IE1hdGgucm91bmQoKHRleHQudHJpbSgpLnNwbGl0KC9cXHMrLykubGVuZ3RoIC8gMTUwKSAqIDEwMCkgLyAxMDAsXG5cdFx0XCJsYXN0TW9kaWZpZWRcIjogbGFzdE1vZGlmaWVkLFxuXHRcdFwid2FybmluZ3NcIjogd2FybmluZ3MsXG5cdH1cblx0cmV0dXJuIHsndGl0bGUnOiB0aXRsZSwgJ3RleHQnOiB0ZXh0LCAnbWV0YSc6IG1ldGF9O1xufVxuXG4vKipcbiAqXHRRdWVyaWVzIEdvb2dsZSBEcml2ZSBmb3IgdGhlIGxhc3QgbW9kaWZpZWQgdGltZSBmb3IgYSBkb2N1bWVudC5cbiAqXHRAcGFyYW0gaWQ6IHRoZSBkb2N1bWVudCBpZC5cbiAqXG4gKiBcdEByZXR1cm4gc3RyaW5nXHRBIHN0cmluZyB0aW1lc3RhbXAgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxhc3QgbW9kaWZpZWQgZGF0ZSwgb3IgXCJOL0FcIiBpZiBubyBkYXRlIHdhcyBmb3VuZFxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRMYXN0TW9kaWZpZWRUaW1lKGlkOiBzdHJpbmcpIHtcblx0Ly8gcXVlcnkgR29vZ2xlIERyaXZlIHRvIGdldCB0aGUgbGFzdCBtb2RpZmllZCB0aW1lXG5cdGNvbnN0IGdvb2dsZURyaXZlID0gZ29vZ2xlLmRyaXZlKCd2MycpO1xuXHRjb25zdCBkcml2ZVJlc3BvbnNlID0gYXdhaXQgZ29vZ2xlRHJpdmUuZmlsZXMuZ2V0KFxuXHRcdHtcblx0XHRcdGZpbGVJZDogaWQsXG5cdFx0XHQvLyBUT0RPOiB0aGlzIG5lZWRzIHRvIHVzZSBPQVVUSFxuXHRcdFx0YXV0aDogJ0FJemFTeUJXNGhWWC1SM0ZBd090QU90alN2UHFXc0J1WURDa1gxYycsXG5cdFx0XHRmaWVsZHM6IFwibW9kaWZpZWRUaW1lXCIsXG5cdFx0fVxuXHQpO1xuXHRyZXR1cm4gZHJpdmVSZXNwb25zZS5kYXRhLm1vZGlmaWVkVGltZT8gZHJpdmVSZXNwb25zZS5kYXRhLm1vZGlmaWVkVGltZSA6IFwidW5rbm93blwiO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSB0ZXh0IHZhbHVlIGFuZCBjb2x1bW4gaW5kZXggZnJvbSBlYWNoIGNlbGwgaW4gdGhlIGZpcnN0IHJvdyBvZiBhIEdvb2dsZSBEb2MgdGFibGUuXG4gKiBAcGFyYW0gdGFibGU6IEEgdGFibGUgaW4gYSBHb29nbGUgRG9jLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGhlYWRlciByb3dzIGFuZCB0aGVpciBpbmRleC4gaS5lLiB7Um93MTogMCwgUm93MjogMX1cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFRhYmxlSGVhZGVyUm93KHRhYmxlOiBkb2NzX3YxLlNjaGVtYSRUYWJsZSkge1xuXHRsZXQgZm91bmRDb2x1bW5zID0ge307XG5cdGlmICh0YWJsZS50YWJsZVJvd3MgJiYgdGFibGUudGFibGVSb3dzWzBdICYmIHRhYmxlLnRhYmxlUm93c1swXS50YWJsZUNlbGxzKSB7XG5cdFx0Y29uc3QgblJvd3MgPSB0YWJsZS50YWJsZVJvd3NbMF0udGFibGVDZWxscy5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuUm93czsgaSsrKSB7XG5cdFx0XHRsZXQgY2VsbENvbnRlbnQgPSB0YWJsZS50YWJsZVJvd3NbMF0udGFibGVDZWxsc1tpXS5jb250ZW50XG5cdFx0XHRpZiAoY2VsbENvbnRlbnQpIHtcblx0XHRcdFx0bGV0IGNvbHVtblRleHQgPSBleHRyYWN0UGFyYWdyYXBoVGV4dChjZWxsQ29udGVudCkudHJpbSgpO1xuXHRcdFx0XHRmb3VuZENvbHVtbnMgPSB7Li4uZm91bmRDb2x1bW5zLCAuLi57W2NvbHVtblRleHRdOiBpfX1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGZvdW5kQ29sdW1ucztcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhbGwgdGV4dCBmcm9tIGEgc3RydWN0dXJhbCBlbGVtZW50IGZvdW5kIGluIGEgR29vZ2xlIERvY3MgcmVzcG9uc2Ugb2JqZWN0LlxuICogQHBhcmFtIGRvY3NfdjEuU2NoZW1hJFN0cnVjdHVyYWxFbGVtZW50W10gIGVsZW1lbnQgVGhlIHN0cnVjdHVyYWwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRleHQuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUgdGV4dCBmb3VuZCBpbiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFBhcmFncmFwaFRleHQoZWxlbWVudDogZG9jc192MS5TY2hlbWEkU3RydWN0dXJhbEVsZW1lbnRbXSkge1xuXHRsZXQgdGV4dDogc3RyaW5nID0gJyc7XG5cdGZvciAoY29uc3QgdmFsdWUgb2YgZWxlbWVudCkge1xuXHRcdGlmICh2YWx1ZS5wYXJhZ3JhcGggJiYgdmFsdWUucGFyYWdyYXBoLmVsZW1lbnRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW0gb2YgdmFsdWUucGFyYWdyYXBoLmVsZW1lbnRzKSB7XG5cdFx0XHRcdHRleHQgKz0gcmVhZFBhcmFncmFwaEVsZW1lbnQoZWxlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdGhlIHRleHQgY29udGVudCBmcm9tIGEgcGFyYWdyYXBoIGVsZW1lbnQgaW4gYSBHb29nbGUgRG9jcyByZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0gZG9jc192MS5TY2hlbWEkUGFyYWdyYXBoRWxlbWVudCAgZWxlbWVudCBUaGUgZWxlbWVudCB3aXRoaW4gYSBwYXJhZ3JhcGggb2JqZWN0LlxuICpcbiAqIEByZXR1cm4gVGhlIHRleHQgY29udGVudCBmb3VuZCBpbiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gcmVhZFBhcmFncmFwaEVsZW1lbnQoZWxlbWVudDogZG9jc192MS5TY2hlbWEkUGFyYWdyYXBoRWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudD8udGV4dFJ1bj8uY29udGVudCA/PyAnJztcbn1cbiIsICJpbXBvcnQge1xuXHRMb2FkZXJGdW5jdGlvbixcblx0QWN0aW9uRnVuY3Rpb24sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG5cdHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiB7IHVzZXI6IHVzZXIudXNlcklkIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdH1cblxuXHRjb25zdCBVcGxvYWRlckhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHRcdGZpbHRlcjogKHsgbWltZXR5cGUgfSkgPT4gbWltZXR5cGUgPT09IFwidGV4dC9jc3ZcIixcblx0fSk7XG5cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKFxuXHRcdHJlcXVlc3QsXG5cdFx0VXBsb2FkZXJIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgV3Jpa2UgPSBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkKTtcblx0Y29uc3QgYmF0Y2ggPSBhd2FpdCBXcmlrZS5WaWRlb0JhdGNoLmZyb21QZXJtYUxpbmsoXG5cdFx0Zm9ybURhdGEuZ2V0KFwiYmF0Y2gtdGFza1wiKSBhcyBzdHJpbmdcblx0KTtcblxuXHRhd2FpdCBiYXRjaC5pbXBvcnRDU1YoZm9ybURhdGEuZ2V0KFwiYmF0Y2hcIikgYXMgRmlsZSwgeyBoZWFkZXJzOiB0cnVlIH0pO1xuXG5cdGF3YWl0IGJhdGNoLnNhdmUoe1xuXHRcdHRlbXBsYXRlRm9sZGVyOiBhd2FpdCBXcmlrZS5Gb2xkZXIuZnJvbVBlcm1hTGluayhcblx0XHRcdGZvcm1EYXRhLmdldChcInRlbXBsYXRlLWZvbGRlclwiKSBhcyBzdHJpbmdcblx0XHQpLFxuXHRcdGxvY2F0aW9uRm9sZGVyOiBhd2FpdCBXcmlrZS5Gb2xkZXIuZnJvbVBlcm1hTGluayhcblx0XHRcdGZvcm1EYXRhLmdldChcImxvY2F0aW9uXCIpIGFzIHN0cmluZ1xuXHRcdCksXG5cdH0pO1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9CYXRjaCgpIHtcblx0Y29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVXBsb2FkIGEgdmlkZW8gYmF0Y2ggQ1NWIGZpbGU6XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cblx0XHRcdFx0e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiID8gKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIHNpemU9XCIzcmVtXCIgLz5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ0ZW1wbGF0ZS1mb2xkZXJcIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRlbXBsYXRlIEZvbGRlciAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYmF0Y2gtdGFza1wiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiQmF0Y2ggVGFzayAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibG9jYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZvbGRlciAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImJhdGNoXCIgLz5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFx0VXBsb2FkXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbnR5cGUgQ29ubmVjdExvYWRlckRhdGEgPSB7XG5cdGhhc1dyaWtlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPENvbm5lY3RMb2FkZXJEYXRhPiA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHRyZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuKGF3YWl0IHVzZXI/Lmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3QoKSB7XG5cdGNvbnN0IHsgaGFzV3Jpa2VDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPENvbm5lY3RMb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJDb25uZWN0IHlvdXIgYWNjb3VudHM6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC93cmlrZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxBZGRJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzV3Jpa2VDcmVkXG5cdFx0XHRcdFx0XHRcdD8gXCJDb25uZWN0ZWQgdG8gV3Jpa2VcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiQ29ubmVjdCB0byBXcmlrZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7IHVzZXI6IHVzZXIudXNlcklkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlZpZGVvIFRvb2xpbmc6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9wcm9qZWN0cy9jcmVhdGVcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5OZXcgUHJvamVjdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3ZpZGVvLWJhdGNoXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+VmlkZW8gQmF0Y2g8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz1cInRhc2tzL2Fzc2V0LWludmVudG9yeVwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkFzc2V0IEludmVudG9yeTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3RzZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlRlbGVwcm9tcHRlciBTY3JpcHQgR2VuZXJhdG9yPC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBMb2dpbkxvYWRlckRhdGEgPSB7XG5cdGhhc0dvb2dsZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxMb2dpbkxvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGNvbnN0IGhhc0dvb2dsZUNyZWQgPSB1c2VyXG5cdFx0PyBhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKVxuXHRcdDogZmFsc2U7XG5cblx0aWYgKGhhc0dvb2dsZUNyZWQpIHtcblx0XHRyZWRpcmVjdChcIi9cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc0dvb2dsZUNyZWQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBoYXNHb29nbGVDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPExvZ2luTG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiU2lnbiBpbiB0byB5b3VyIE5leHRUaG91Z2h0IGFjY291bnQ6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC9nb29nbGVcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8R29vZ2xlSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc0dvb2dsZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIlNpZ25lZCBJbiBUbyBHb29nbGVcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiU2lnbiBJbiBUbyBHb29nbGVcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUge0xvYWRlckZ1bmN0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7Rm9ybSwgcmVkaXJlY3QsIHVzZVRyYW5zaXRpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xuXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4ge3VzZXI6IHVzZXIudXNlcklkfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlbGVTY3JpcHRHZW5lcmF0b3IoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJUU0c6XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJnZXRcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIi90c2ctcmVzdWx0c1wiPlxuXHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJ1cmxcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTcHJlYWRzaGVldCBVUkxcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwic2hlZXRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTaGVldCBOYW1lIChvcHRpb25hbClcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJyb3dcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTdGFydGluZyBSb3cgKG9wdGlvbmFsKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGEgQ29sdW1uIChvcHRpb25hbClcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cblx0XHRcdFx0XHRcdHt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIlxuXHRcdFx0XHRcdFx0XHQ/IFwiR2VuZXJhdGluZy4uLlwiXG5cdFx0XHRcdFx0XHRcdDogXCJHZW5lcmF0ZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczNGU3OGE0ZCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL2VudHJ5LmNsaWVudC1YWlZaMjZJWC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1MUExSSUdHQy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVFRLVEtHUzQuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZEUDZXR1pGLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb290LTVTTFlYUVVILmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTdVUVJXWktRLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1aVVFXNEhWWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVkxJRVRQRDYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRZSkxVQkI2LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1EVFdOTFZDWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRUhQNk9EWlguanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLURJMkZQWVQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UtWlpVTkZXV1AuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvOnNlcnZpY2UvY2FsbGJhY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLTRIVkg1VVNQLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb25uZWN0Jzp7J2lkJzoncm91dGVzL2Nvbm5lY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29ubmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2Nvbm5lY3QtN1RRS1o2N0cuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRlAzNFAyWTUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9pbmRleC1PMkhXRUZUTy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dpbi1INFRRUTJDUC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GUDM0UDJZNS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NsaWVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvamVjdHMvY2xpZW50cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NsaWVudHMtQlpDN01OM1QuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstU1RFSk9LQ1YuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUtUTIzR0NMR0cuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstN1FKSUFOVkguanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TVEVKT0tDVi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL3NwYWNlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9zcGFjZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMtUE5ZUUNPR0IuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstU1RFSk9LQ1YuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknOnsnaWQnOidyb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Rhc2tzL2Fzc2V0LWludmVudG9yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS1WNTVWN0pCQy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay03UUpJQU5WSC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RzZyc6eydpZCc6J3JvdXRlcy90c2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondHNnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdHNnLUdWWktUSlVILmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90c2ctcmVzdWx0cyc6eydpZCc6J3JvdXRlcy90c2ctcmVzdWx0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0c2ctcmVzdWx0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3RzZy1yZXN1bHRzLUpBTkVNUUhMLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdmlkZW8tYmF0Y2gnOnsnaWQnOidyb3V0ZXMvdmlkZW8tYmF0Y2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondmlkZW8tYmF0Y2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy92aWRlby1iYXRjaC1WTjQ1TTdHMi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstU1RFSk9LQ1YuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9fc3RhdGljL2J1aWxkL21hbmlmZXN0LTM0RTc4QTRELmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZ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
