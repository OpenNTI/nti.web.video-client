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

// route:/Users/andrew.ligon/video-client/app/routes/tasks/asset-inventory.tsx
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
  const inventory = (await getAssetInventory(file)).sort((a, b) => VendorOrder.indexOf(a.vendor) - VendorOrder.indexOf(b.vendor));
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
  return (0, import_remix5.json)({ csv: csv3 });
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
  }, /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained"
  }, /* @__PURE__ */ React.createElement("a", {
    href: downloadURL,
    download: "asset-inventory.csv"
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
  console.log(text);
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
  video: [".mp4", ".mov"],
  photo: [".jpeg", ".png", ".tif", ".webm"],
  audio: [".mp3"]
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
        creditline: assetDetails.asset.photographer,
        collection: assetDetails.asset.collectionDisplayName
      };
    }
  },
  {
    handles: (filename, ext) => filename.startsWith("shutterstock"),
    info: async (filename, ext) => {
      const parts = filename.split("_");
      const id = parts[parts.length - 1];
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
  }
];
async function getAssetInventory(file) {
  const report = await parseReport(file);
  const sources = report["Collected source files:"];
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
var assets_manifest_default = { "version": "df9ddde0", "entry": { "module": "/_static/build/entry.client-CAMQOSR3.js", "imports": ["/_static/build/_shared/chunk-T6FGNKVJ.js", "/_static/build/_shared/chunk-WE234S4G.js", "/_static/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-IP5UV7PM.js", "imports": ["/_static/build/_shared/chunk-LGZQ6I7K.js", "/_static/build/_shared/chunk-OKCWAYV2.js", "/_static/build/_shared/chunk-QB7Z45JQ.js", "/_static/build/_shared/chunk-OEGWD6UY.js", "/_static/build/_shared/chunk-V5LIZVCV.js", "/_static/build/_shared/chunk-CSPUXNIY.js", "/_static/build/_shared/chunk-5EVODQCW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-YSWXJ4DD.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-ZJWAVI6F.js", "imports": ["/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-GMSJBYUH.js", "imports": ["/_static/build/_shared/chunk-6QL4CGD5.js", "/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-IPU6MGTN.js", "imports": ["/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-PJLWJQGT.js", "imports": ["/_static/build/_shared/chunk-6QL4CGD5.js", "/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-CFQUYXXV.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-ATUZWM42.js", "imports": ["/_static/build/_shared/chunk-S6EBEIYU.js", "/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-HQGZPDUL.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-33GTOOA7.js", "imports": ["/_static/build/_shared/chunk-S6EBEIYU.js", "/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-PJ7JU5PI.js", "imports": ["/_static/build/_shared/chunk-ZRYYDOP7.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-RD54IJLU.js", "/_static/build/_shared/chunk-PNMUIEH2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-DF9DDDE0.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLnRzeCIsICIuLi9hcHAvYXBpL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvYXV0aC1zdHJhdGVnaWVzL1dyaWtlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9Vc2VyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9CYXNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2RhdGFiYXNlL1RhYmxlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaWxlSW5wdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsLnRzeCIsICIuLi9hcHAvYXBpL3V0aWxzL0NTVi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzLnRzeCIsICIuLi9hcHAvYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9DdXN0b21GaWVsZC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9Gb2xkZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvUHJvamVjdC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9TcGFjZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9UYXNrLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9WaWRlb0JhdGNoVGFzay5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9Xb3JrZmxvdy5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0lucHV0QnJlYWRDcnVtYi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvT25Nb3VudC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvc3BhY2VzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2F1dGgvJHNlcnZpY2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdmlkZW8tYmF0Y2gudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvY29ubmVjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnNlcnZpY2UvY2FsbGJhY2tcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY2xpZW50c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9jbGllbnRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvamVjdHMvc3BhY2VzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2plY3RzL3NwYWNlc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy92aWRlby1iYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidmlkZW8tYmF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Nvbm5lY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Nvbm5lY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29ubmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gcmVuZGVyUGFnZShodG1sOiBzdHJpbmcsIGNzczogc3RyaW5nKSB7XG5cdGNvbnN0IHBhZ2UgPSBodG1sLnJlcGxhY2UoXCJfX2NmZzpTVFlMRVNfX1wiLCBjc3MpO1xuXG5cdHJldHVybiBgPCFET0NUWVBFIGh0bWw+JHtwYWdlfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG5cdHJlcXVlc3Q6IFJlcXVlc3QsXG5cdHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuXHRyZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG5cdHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblx0Y29uc3Qgc3R5bGVTZXJ2ZXIgPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuXHRjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcblx0XHQ8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuXHQpO1xuXG5cdGNvbnN0IHN0eWxlQ2h1bmtzID0gc3R5bGVTZXJ2ZXIuZXh0cmFjdENyaXRpY2FsVG9DaHVua3MobWFya3VwKTtcblx0Y29uc3Qgc3R5bGVzID0gc3R5bGVTZXJ2ZXIuY29uc3RydWN0U3R5bGVUYWdzRnJvbUNodW5rcyhzdHlsZUNodW5rcyk7XG5cblx0cmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKHJlbmRlclBhZ2UobWFya3VwLCBzdHlsZXMpLCB7XG5cdFx0c3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG5cdFx0aGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuXHR9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcblxuY29uc3QgQ2FjaGVLZXkgPSBcIm50LWNzc1wiO1xuZXhwb3J0IGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKHsga2V5OiBDYWNoZUtleSB9KTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lID0gY3JlYXRlVGhlbWUoe1xuXHRwYWxldHRlOiB7XG5cdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0ZGVmYXVsdDogXCIjZmJmYmZiXCIsXG5cdFx0fSxcblx0fSxcblx0Y29tcG9uZW50czoge1xuXHRcdE11aUJ1dHRvbkJhc2U6IHtcblx0XHRcdGRlZmF1bHRQcm9wczoge1xuXHRcdFx0XHRkaXNhYmxlUmlwcGxlOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IChwcm9wczogb2JqZWN0KSA9PiAoXG5cdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZX0+XG5cdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e1RoZW1lfSB7Li4ucHJvcHN9IC8+XG5cdDwvQ2FjaGVQcm92aWRlcj5cbik7XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IENzc0Jhc2VsaW5lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi90aGVtZS5tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4geyB0aXRsZTogXCJOZXh0VGhvdWdodFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PFByb3ZpZGVyPlxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9Qcm92aWRlcj5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG50eXBlIERvY3VtZW50UHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W107XG59O1xuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuIH06IERvY3VtZW50UHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdFx0e3R5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiX19jZmc6U1RZTEVTX19cIiA6IG51bGx9XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHQ8Ym9keT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuXHQvL05PVEU6IHRoaXMgb2JqZWN0LmtleXMgdHJpY2sgb25seSB3b3JrcyBpZiB0aGUgZW51bSBrZXlzIGFyZSBleGFjdCBtYXRjaGVzIGZvciB0aGUgdmFsdWVzXG5cdGlmICghcGFyYW1zLnNlcnZpY2UgfHwgIU9iamVjdC5rZXlzKFNlcnZpY2UpLmluY2x1ZGVzKHBhcmFtcy5zZXJ2aWNlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIFNlcnZpY2VcIik7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhcIlNlcnZpY2UgQ2FsbGJhY2s6IFwiLCBwYXJhbXMuc2VydmljZSk7XG5cblx0YXdhaXQgYXV0aGVudGljYXRlVXNlcihwYXJhbXMuc2VydmljZSBhcyBTZXJ2aWNlLCByZXF1ZXN0LCB7XG5cdFx0c3VjY2VzczogXCIvXCIsXG5cdFx0ZmFpbHVyZTogXCIvbG9naW5cIixcblx0fSk7XG59O1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB7IEdvb2dsZVN0cmF0ZWd5IH0gZnJvbSBcInJlbWl4LWF1dGgtZ29vZ2xlXCI7XG5pbXBvcnQgeyBPQXV0aDJTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuXG5pbXBvcnQgeyBXcmlrZVN0cmF0ZWd5IH0gZnJvbSBcIi4vYXV0aC1zdHJhdGVnaWVzL1dyaWtlLnNlcnZlclwiO1xuaW1wb3J0IFVzZXIsIHsgc2V0Q2FjaGVkIH0gZnJvbSBcIi4vbW9kZWxzL1VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmFnZSB9IGZyb20gXCIuL3Nlc3Npb24uc2VydmVyXCI7XG5cbmNvbnN0IGF1dGggPSBuZXcgQXV0aGVudGljYXRvcjxhbnk+KHNlc3Npb25TdG9yYWdlKTtcblxuaWYgKHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgJiYgcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQpIHtcblx0YXV0aC51c2UoXG5cdFx0bmV3IEdvb2dsZVN0cmF0ZWd5KFxuXHRcdFx0e1xuXHRcdFx0XHRjbGllbnRJRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL2F1dGgvZ29vZ2xlL2NhbGxiYWNrXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2UuZ29vZ2xlXG5cdCk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQgJiYgcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCkge1xuXHRhdXRoLnVzZShcblx0XHRuZXcgV3Jpa2VTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9JRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfU0VDUkVULFxuXHRcdFx0XHRjYWxsYmFja1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzMvYXV0aC93cmlrZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJEZWZhdWx0LHdzUmVhZFdyaXRlXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2Uud3Jpa2Vcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Vc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oXG5cdFx0cmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuXHQpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblxuXHRpZiAoIXVzZXJJZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIFVzZXIuZ2V0Rm9ySWQodXNlcklkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gYXN5bmMgKFxuXHRzZXJ2aWNlOiBTZXJ2aWNlLFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZWRpcmVjdHM6IHsgc3VjY2Vzczogc3RyaW5nOyBmYWlsdXJlOiBzdHJpbmcgfVxuKSA9PiB7XG5cdGNvbnN0IHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSB9ID0gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXG5cdFx0c2VydmljZSxcblx0XHRyZXF1ZXN0XG5cdCk7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblxuXHRjb25zb2xlLmxvZyhwcm9maWxlKTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvZmlsZS5pZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJOTyBJRD8hPyE6IFwiLCBwcm9maWxlKTtcblx0XHRcdHRocm93IFwid2hhdFwiO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyZW50VXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZXR0aW5nIEN1cnJlbnQgVXNlcjogXCIsIHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXHRcdFx0Y3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmdldEZvck9hdXRoKHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoIWN1cnJlbnRVc2VyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgdXNlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0c2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgc2V0Q2FjaGVkKGN1cnJlbnRVc2VyKSk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY3VycmVudFVzZXIuc2V0Q3JlZGVudGlhbHMoc2VydmljZSwge1xuXHRcdFx0YWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuXHRcdFx0cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuZmFpbHVyZSk7XG5cdH1cblxuXHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuc3VjY2Vzcywge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzZXNzaW9uU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2sgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHR5cGUge1xuXHRPQXV0aDJQcm9maWxlLFxuXHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4LWF1dGgtb2F1dGgyXCI7XG5pbXBvcnQgeyBPQXV0aDJTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuXG5leHBvcnQgdHlwZSBXcmlrZVN0cmF0ZWd5T3B0aW9ucyA9IHtcblx0Y2xpZW50SUQ6IHN0cmluZztcblx0Y2xpZW50U2VjcmV0OiBzdHJpbmc7XG5cdGNhbGxiYWNrVVJMOiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zID0ge1xuXHRzY29wZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9maWxlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0X2pzb246IHtcblx0XHRraW5kczogc3RyaW5nO1xuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XTtcblx0fTtcblx0cHJvdmlkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBXcmlrZVN0cmF0ZWd5PFVzZXI+IGV4dGVuZHMgT0F1dGgyU3RyYXRlZ3k8XG5cdFVzZXIsXG5cdFdyaWtlUHJvZmlsZSxcblx0V3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zXG4+IHtcblx0cHJpdmF0ZSByZWFkb25seSB1c2VySW5mb1VSTCA9XG5cdFx0XCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L2NvbnRhY3RzP21lPXRydWVcIjtcblx0cHJpdmF0ZSBzY29wZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM6IFdyaWtlU3RyYXRlZ3lPcHRpb25zLFxuXHRcdHZlcmlmeTogU3RyYXRlZ3lWZXJpZnlDYWxsYmFjazxcblx0XHRcdFVzZXIsXG5cdFx0XHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtczxXcmlrZVByb2ZpbGUsIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcz5cblx0XHQ+XG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0e1xuXHRcdFx0XHRhdXRob3JpemF0aW9uVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi9hdXRob3JpemUvdjRcIixcblx0XHRcdFx0dG9rZW5VUkw6IFwiaHR0cHM6Ly9sb2dpbi53cmlrZS5jb20vb2F1dGgyL3Rva2VuXCIsXG5cdFx0XHRcdGNsaWVudElEOiBvcHRpb25zLmNsaWVudElELFxuXHRcdFx0XHRjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuXHRcdFx0XHRjYWxsYmFja1VSTDogb3B0aW9ucy5jYWxsYmFja1VSTCxcblx0XHRcdH0sXG5cdFx0XHR2ZXJpZnlcblx0XHQpO1xuXG5cdFx0dGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXV0aG9yaXphdGlvblBhcmFtcygpOiBVUkxTZWFyY2hQYXJhbXMge1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdGlmICh0aGlzLnNjb3BlKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwic2NvcGVcIiwgdGhpcy5zY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyB1c2VyUHJvZmlsZShhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVByb2ZpbGU+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXNlckluZm9VUkwsIHtcblx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAgfSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHBheWxvYWQ6IFdyaWtlUHJvZmlsZVtcIl9qc29uXCJdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGFbMF07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGRhdGEuaWQsXG5cdFx0XHRmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG5cdFx0XHRfanNvbjogcGF5bG9hZCxcblx0XHRcdHByb3ZpZGVyOiBcIndyaWtlXCIsXG5cdFx0fTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2RhdGFiYXNlL1RhYmxlLnNlcnZlclwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuaW1wb3J0IENyZWRlbnRpYWwsIHsgU2VydmljZSwgVG9rZW5zIH0gZnJvbSBcIi4vQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuY29uc3QgRXhpc3RpbmcgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRDYWNoZWQgPSAodXNlcjogVXNlcikgPT4gKFxuXHRFeGlzdGluZy5zZXQodXNlci51c2VySWQsIHVzZXIpLCB1c2VyLnVzZXJJZFxuKTtcbmV4cG9ydCBjb25zdCBnZXRDYWNoZWQgPSAodXNlcklkOiBzdHJpbmcpID0+IEV4aXN0aW5nLmdldCh1c2VySWQpO1xuXG5jbGFzcyBPYXV0aElkIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIk9hdXRoSWRzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHByb2ZpbGVJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6Lm5hdGl2ZUVudW0oU2VydmljZSksXG5cdFx0dXNlcklkOiB6LnN0cmluZygpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgZmluZE9yQ3JlYXRlKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyBwcm9maWxlSWQsIHNlcnZpY2UgfSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHJldHVybiBleGlzdGluZztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFibGUucHV0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlLCB1c2VySWQ6IHV1aWQoKSB9KTtcblx0fVxuXG5cdGRhdGE6IHouaW5mZXI8dHlwZW9mIE9hdXRoSWQuU2NoZW1hPiB8IHVuZGVmaW5lZDtcblxuXHRnZXQgcHJvZmlsZUlkKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnByb2ZpbGVJZCA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHNlcnZpY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uc2VydmljZSA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0c3RhdGljIGFzeW5jIGdldEZvck9hdXRoKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3Qgb2F1dGhJZCA9IGF3YWl0IE9hdXRoSWQuZmluZE9yQ3JlYXRlKHByb2ZpbGVJZCwgc2VydmljZSk7XG5cblx0XHRpZiAoIW9hdXRoSWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVXNlcihvYXV0aElkLnVzZXJJZCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Rm9ySWQodXNlcklkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFVzZXIodXNlcklkKTtcblx0fVxuXG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgY3JlZGVudGlhbHM6IE1hcDxTZXJ2aWNlLCBDcmVkZW50aWFsPjtcblxuXHRjb25zdHJ1Y3Rvcih1c2VySWQ6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdHJldHVybiBDcmVkZW50aWFsLmFkZE9yVXBkYXRlKHRoaXMudXNlcklkLCBzZXJ2aWNlLCB0b2tlbnMpO1xuXHR9XG5cblx0YXN5bmMgZ2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscy5oYXMoc2VydmljZSkpIHtcblx0XHRcdGNvbnN0IGNyZWQgPSBhd2FpdCBDcmVkZW50aWFsLmdldENyZWRlbnRpYWwodGhpcy51c2VySWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoY3JlZCkge1xuXHRcdFx0XHR0aGlzLmNyZWRlbnRpYWxzLnNldChzZXJ2aWNlLCBjcmVkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoc2VydmljZSk7XG5cdH1cblxuXHRhc3luYyBoYXNDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgY3JlZCA9IGF3YWl0IHRoaXMuZ2V0Q3JlZGVudGlhbHMoc2VydmljZSk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbihjcmVkKTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVsIHtcblx0c3RhdGljIFRhYmxlTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHN0YXRpYyBTY2hlbWEgPSB6Lm9iamVjdCh7fSk7XG5cblx0c3RhdGljIGdldFRhYmxlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4odGhpczogVCkge1xuXHRcdHJldHVybiBuZXcgVGFibGU8SW5zdGFuY2VUeXBlPFQ+Pih0aGlzLlRhYmxlTmFtZSwgKC4uLmFyZ3MpID0+XG5cdFx0XHR0aGlzLmNyZWF0ZSguLi5hcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4oXG5cdFx0dGhpczogVCxcblx0XHRyYXc6IG9iamVjdFxuXHQpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMocmF3KSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdH1cblxuXHRkYXRhOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocmF3OiBvYmplY3QpIHtcblx0XHR0aGlzLmRhdGEgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQmFzZU1vZGVsKS5TY2hlbWEucGFyc2UocmF3KTtcblx0fVxufVxuIiwgImltcG9ydCBhcmMgZnJvbSBcIkBhcmNoaXRlY3QvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBBcmNUYWJsZSB9IGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9ucy90YWJsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGU8VD4ge1xuXHRwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgdGFibGU6IEFyY1RhYmxlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgcGFyc2U6IChyYXc6IG9iamVjdCkgPT4gVDtcblxuXHRjb25zdHJ1Y3Rvcih0YWJsZU5hbWU6IHN0cmluZyB8IG51bGwsIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQpIHtcblx0XHRpZiAoIXRhYmxlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGFibGUgbXVzdCBiZSBnaXZlbiBhIHRhYmxlIG5hbWUuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMudGFibGVOYW1lID0gdGFibGVOYW1lO1xuXHRcdHRoaXMucGFyc2UgPSBwYXJzZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnRhYmxlTmFtZTtcblx0fVxuXG5cdGFzeW5jIHNldHVwVGFibGUoKSB7XG5cdFx0aWYgKCF0aGlzLnRhYmxlKSB7XG5cdFx0XHRjb25zdCB0YWJsZXMgPSBhd2FpdCBhcmMudGFibGVzKCk7XG5cblx0XHRcdHRoaXMudGFibGUgPSB0YWJsZXNbdGhpcy50YWJsZU5hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRhYmxlO1xuXHR9XG5cblx0YXN5bmMgZ2V0KGtleTogYW55KSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLnNldHVwVGFibGUoKTtcblx0XHRjb25zdCByZXNwID0gYXdhaXQgdGFibGUuZ2V0KGtleSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgcHV0KGRhdGE6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLnB1dChkYXRhKTtcblxuXHRcdHJldHVybiByZXNwID8gdGhpcy5wYXJzZShyZXNwKSA6IG51bGw7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUocXVlcnk6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cblx0XHRhd2FpdCB0YWJsZS51cGRhdGUocXVlcnkpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHogZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBUb2tlbnMgPSB7XG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdHJlZnJlc2hUb2tlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG5cdGdvb2dsZSA9IFwiZ29vZ2xlXCIsXG5cdHdyaWtlID0gXCJ3cmlrZVwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIkNyZWRlbnRpYWxzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6LmVudW0oW1wiZ29vZ2xlXCIsIFwid3Jpa2VcIl0pLFxuXHRcdGFjY2Vzc1Rva2VuOiB6LnN0cmluZygpLFxuXHRcdC8vIHJlZnJlc2hUb2tlbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgYWRkT3JVcGRhdGUodXNlcklkOiBzdHJpbmcsIHNlcnZpY2U6IFNlcnZpY2UsIHRva2VuczogVG9rZW5zKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3Qga2V5ID0geyB1c2VySWQsIHNlcnZpY2UgfTtcblx0XHRjb25zb2xlLmxvZyhcImFkZGluZyBjcmVkZW50aWFsOiBcIiwga2V5KTtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRhd2FpdCB0YWJsZS51cGRhdGUoe1xuXHRcdFx0XHRLZXk6IGtleSxcblx0XHRcdFx0VXBkYXRlRXhwcmVzc2lvbjogXCJTRVQgYWNjZXNzVG9rZW4gPSA6YWNjZXNzVG9rZW5cIixcblx0XHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHRcdFwiOmFjY2Vzc1Rva2VuXCI6IHRva2Vucy5hY2Nlc3NUb2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCB0YWJsZS5wdXQoe1xuXHRcdFx0XHR1c2VySWQsXG5cdFx0XHRcdHNlcnZpY2UsXG5cdFx0XHRcdC4uLnRva2Vucyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRDcmVkZW50aWFsKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyB1c2VySWQsIHNlcnZpY2UgfSk7XG5cblx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBDcmVkZW50aWFsLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBhY2Nlc3NUb2tlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5hY2Nlc3NUb2tlbiA/PyBcIlwiO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcIm50aS5zZXNzaW9uXCIsXG5cdFx0c2FtZVNpdGU6IFwibGF4XCIsXG5cdFx0cGF0aDogXCIvXCIsXG5cdFx0c2VjcmV0czogW1wiTjN4dFRoMHVnaHQhIUNcIl0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHtcblx0Rm9ybSxcblx0TGlua3NGdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHR1c2VBY3Rpb25EYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxuXHRqc29uLFxuXHRyZWRpcmVjdCxcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdHVhbEZpbGVPYmplY3QgfSBmcm9tIFwiZmlsZXBvbmRcIjtcbmltcG9ydCAqIGFzIEhUTUxQYXJzZXIgZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQgeyB1c2VCbG9iLCB1c2VPYmplY3RVUkwgfSBmcm9tIFwifi9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0ICogYXMgQ1NWIGZyb20gXCJ+L2FwaS91dGlscy9DU1Yuc2VydmVyXCI7XG5cbmNvbnN0IFZlbmRvck9yZGVyID0gW1wiR2V0dHkgSW1hZ2VzXCIsIFwiU2h1dHRlcnN0b2NrXCIsIFwiVW5rbm93blwiXTtcblxudHlwZSBJbWFnZU9iamVjdCA9IHtcblx0XCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCI7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGF1dGhvcjoge1xuXHRcdG5hbWU6IHN0cmluZztcblx0fTtcbn07XG5cbnR5cGUgSW52ZW50b3J5ID0ge1xuXHR0eXBlOiBcInZpZGVvXCIgfCBcInBob3RvXCIgfCBcImF1ZGlvXCIgfCBcInVua25vd25cIjtcblx0ZmlsZW5hbWU6IHN0cmluZztcblx0dmVuZG9yOiBzdHJpbmc7XG5cblx0Y29kZT86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRoZWFkbGluZT86IHN0cmluZztcblx0Y3JlZGl0bGluZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogXCJodHRwczovL3VucGtnLmNvbS9maWxlcG9uZEBeNC9kaXN0L2ZpbGVwb25kLmNzc1wiLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvYWQ6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicmVwb3J0XCIpIGFzIEZpbGU7XG5cdGNvbnN0IGludmVudG9yeSA9IChhd2FpdCBnZXRBc3NldEludmVudG9yeShmaWxlKSkuc29ydChcblx0XHQoYSwgYikgPT4gVmVuZG9yT3JkZXIuaW5kZXhPZihhLnZlbmRvcikgLSBWZW5kb3JPcmRlci5pbmRleE9mKGIudmVuZG9yKVxuXHQpO1xuXG5cdGNvbnN0IGNzdiA9IGF3YWl0IENTVi5mb3JtYXQoaW52ZW50b3J5LCB7XG5cdFx0aGVhZGVyczogW1xuXHRcdFx0XCJoZWFkbGluZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcInZlbmRvclwiLFxuXHRcdFx0XCJmaWxlbmFtZVwiLFxuXHRcdFx0XCJjb2RlXCIsXG5cdFx0XHRcImNvbGxlY3Rpb25cIixcblx0XHRcdFwiY3JlZGl0bGluZVwiLFxuXHRcdFx0XCJ1cmxcIixcblx0XHRdLFxuXHR9KTtcblxuXHRyZXR1cm4ganNvbih7IGNzdiB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2V0SW52ZW50b3J5KCkge1xuXHRjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXHRjb25zdCBhY3Rpb24gPSB1c2VBY3Rpb25EYXRhKCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdGNvbnN0IHNob3dTYXZpbmcgPVxuXHRcdHRyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiIHx8IHRyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiO1xuXHRjb25zdCBzaG93RG93bmxvYWQgPSAhc2hvd1NhdmluZyAmJiBhY3Rpb247XG5cdGNvbnN0IHNob3dGb3JtID0gIXNob3dTYXZpbmcgJiYgIXNob3dEb3dubG9hZDtcblxuXHRjb25zdCBjc3YgPSB1c2VCbG9iKGFjdGlvbj8uY3N2LCBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLTg7XCIpO1xuXHRjb25zdCBkb3dubG9hZFVSTCA9IHVzZU9iamVjdFVSTChjc3YpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJBc3NldCBJbnZlbnRvcnlcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7IXNob3dEb3dubG9hZCB8fCAhZG93bmxvYWRVUkwgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtkb3dubG9hZFVSTH1cblx0XHRcdFx0XHRcdFx0XHRkb3dubG9hZD1cImFzc2V0LWludmVudG9yeS5jc3ZcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0RG93bmxvYWRcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93U2F2aW5nID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0R2VuZXJhdGluZy4uLlxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd0Zvcm0gPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG5cdFx0XHRcdFx0XHRcdEFmdGVyIEVmZmVjdHMgRGVwZW5kZW5jeSBSZXBvcnRcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0RmlsZSAmZ3Q7IERlcGVuZGVuY2llcyAmZ3Q7IENvbGxlY3QgRmlsZXNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicmVwb3J0XCJcblx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRvbnVwZGF0ZWZpbGVzPXsoaXRlbXMpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRDb21waWxlXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuY29uc3QgZ2V0SFRNTCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG5cdGNvbnNvbGUubG9nKHRleHQpO1xuXG5cdHJldHVybiBIVE1MUGFyc2VyLnBhcnNlKHRleHQsIHtcblx0XHRibG9ja1RleHRFbGVtZW50czogeyBzdHlsZTogZmFsc2UgfSxcblx0fSk7XG59O1xuXG5jb25zdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbWFnZU9iamVjdD4gPT4ge1xuXHRjb25zdCBodG1sID0gYXdhaXQgZ2V0SFRNTCh1cmwpO1xuXHRjb25zdCBsaW5rRGF0YSA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcblx0XHRcInNjcmlwdFt0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ11cIlxuXHQpO1xuXG5cdGZvciAobGV0IGRhdGEgb2YgbGlua0RhdGEpIHtcblx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpIGFzIEltYWdlT2JqZWN0O1xuXG5cdFx0aWYgKGpzb25bXCJAdHlwZVwiXSAhPT0gXCJJbWFnZU9iamVjdFwiKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgSW1hZ2VPYmplY3Q6ICR7dXJsfWApO1xufTtcblxuY29uc3QgaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdCA9IChvYmo6IEltYWdlT2JqZWN0KSA9PiBvYmouZGVzY3JpcHRpb247XG5jb25zdCBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0ID0gKG9iajogSW1hZ2VPYmplY3QpID0+IG9iai5hdXRob3IubmFtZTtcblxuY29uc3QgVHlwZXNUb0V4dGVuc2lvbiA9IHtcblx0dmlkZW86IFtcIi5tcDRcIiwgXCIubW92XCJdLFxuXHRwaG90bzogW1wiLmpwZWdcIiwgXCIucG5nXCIsIFwiLnRpZlwiLCBcIi53ZWJtXCJdLFxuXHRhdWRpbzogW1wiLm1wM1wiXSxcbn07XG5cbmNvbnN0IGdldFR5cGVGcm9tRXh0ZW5zaW9uID0gKFxuXHRleHQ6IHN0cmluZ1xuKToga2V5b2YgdHlwZW9mIFR5cGVzVG9FeHRlbnNpb24gfCBcInVua25vd25cIiA9PiB7XG5cdGZvciAobGV0IFt0eXBlLCBleHRlbnNpb25zXSBvZiBPYmplY3QuZW50cmllcyhUeXBlc1RvRXh0ZW5zaW9uKSkge1xuXHRcdGlmIChleHRlbnNpb25zLmluY2x1ZGVzKGV4dCkpIHtcblx0XHRcdHJldHVybiB0eXBlIGFzIGtleW9mIHR5cGVvZiBUeXBlc1RvRXh0ZW5zaW9uO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBcInVua25vd25cIjtcbn07XG5cbmNvbnN0IEdldHR5UmVnZXggPSAvXihnZXR0eWltYWdlc3xHZXR0eUltYWdlcylcXC0oXFxkKykvO1xuXG5jb25zdCBJbmZvR2V0dGVycyA9IFtcblx0e1xuXHRcdC8vIEdldHR5IEltYWdlc1xuXHRcdGhhbmRsZXM6IChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT4gR2V0dHlSZWdleC50ZXN0KGZpbGVuYW1lKSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goR2V0dHlSZWdleCk7XG5cdFx0XHRjb25zdCBpZCA9IG1hdGNoPy5bMl07XG5cblx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZ2V0IEdldHR5SW1hZ2UgaWQ6ICR7ZmlsZW5hbWV9YCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHVybCA9IGBodHRwOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvJHtpZH1gO1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IGdldEhUTUwodXJsKTtcblxuXHRcdFx0Y29uc3QgYXNzZXREZXRhaWxzU2NyaXB0ID0gaHRtbC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnc2NyaXB0W2RhdGEtY29tcG9uZW50PVwiYXNzZXRkZXRhaWxcIl0nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBhc3NldERldGFpbHMgPSBhc3NldERldGFpbHNTY3JpcHRcblx0XHRcdFx0PyBKU09OLnBhcnNlKGFzc2V0RGV0YWlsc1NjcmlwdC50ZXh0KVxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRcdGlmICghYXNzZXREZXRhaWxzKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHRgVW5hYmxlIHRvIGdldCBHZXR0eSBJbWFnZXMgYXNzZXQgZGV0YWlsczogJHt1cmx9YFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2ZW5kb3I6IFwiR2V0dHkgSW1hZ2VzXCIsXG5cdFx0XHRcdGNvZGU6IGlkLFxuXHRcdFx0XHR1cmwsXG5cblx0XHRcdFx0aGVhZGxpbmU6IGFzc2V0RGV0YWlscy5hc3NldC50aXRsZSxcblx0XHRcdFx0Y3JlZGl0bGluZTogYXNzZXREZXRhaWxzLmFzc2V0LnBob3RvZ3JhcGhlcixcblx0XHRcdFx0Y29sbGVjdGlvbjogYXNzZXREZXRhaWxzLmFzc2V0LmNvbGxlY3Rpb25EaXNwbGF5TmFtZSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdC8vU2h1dHRlcnN0b2NrXG5cdFx0aGFuZGxlczogKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PlxuXHRcdFx0ZmlsZW5hbWUuc3RhcnRzV2l0aChcInNodXR0ZXJzdG9ja1wiKSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHBhcnRzID0gZmlsZW5hbWUuc3BsaXQoXCJfXCIpO1xuXHRcdFx0Y29uc3QgaWQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcblx0XHRcdGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvLyR7aWR9YDtcblxuXHRcdFx0Y29uc3QgaW1hZ2VPYmplY3QgPSBhd2FpdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhKHVybCk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJTaHV0dGVyc3RvY2tcIixcblx0XHRcdFx0Y29kZTogaWQsXG5cdFx0XHRcdHVybCxcblxuXHRcdFx0XHRoZWFkbGluZTogaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdChpbWFnZU9iamVjdCksXG5cdFx0XHRcdGNyZWRpdGxpbmU6IGNyZWRpdGxpbmVGcm9tSW1hZ2VPYmplY3QoaW1hZ2VPYmplY3QpLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRJbnZlbnRvcnkoZmlsZTogRmlsZSk6IFByb21pc2U8SW52ZW50b3J5W10+IHtcblx0Y29uc3QgcmVwb3J0ID0gYXdhaXQgcGFyc2VSZXBvcnQoZmlsZSk7XG5cdGNvbnN0IHNvdXJjZXMgPSByZXBvcnRbXCJDb2xsZWN0ZWQgc291cmNlIGZpbGVzOlwiXSBhcyBzdHJpbmdbXTtcblxuXHRjb25zdCBpbnZlbnRvcmllcyA9IHNvdXJjZXMucmVkdWNlKFxuXHRcdChhY2M6IFByb21pc2U8SW52ZW50b3J5PltdLCBzb3VyY2U6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHNvdXJjZSk7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlLCBleHRlbnNpb24pO1xuXG5cdFx0XHRjb25zdCBnZXR0ZXIgPSBJbmZvR2V0dGVycy5maW5kKChnKSA9PlxuXHRcdFx0XHRnLmhhbmRsZXMoZmlsZW5hbWUsIGV4dGVuc2lvbilcblx0XHRcdCk7XG5cblx0XHRcdGlmICghZ2V0dGVyKSB7XG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdFx0dmVuZG9yOiBcIlVua25vd25cIixcblx0XHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0Z2V0dGVyLmluZm8oZmlsZW5hbWUsIGV4dGVuc2lvbikudGhlbigoaW5mbykgPT4gKHtcblx0XHRcdFx0XHR0eXBlOiBnZXRUeXBlRnJvbUV4dGVuc2lvbihleHRlbnNpb24pLFxuXHRcdFx0XHRcdGZpbGVuYW1lOiBwYXRoLmJhc2VuYW1lKHNvdXJjZSksXG5cdFx0XHRcdFx0Li4uaW5mbyxcblx0XHRcdFx0fSkpLFxuXHRcdFx0XTtcblx0XHR9LFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGludmVudG9yaWVzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VSZXBvcnQoZmlsZTogRmlsZSkge1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxyXCIpO1xuXG5cdGNvbnN0IGdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGxldCBjdXJyZW50U2VjdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Zm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuXHRcdGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcblx0XHRjb25zdCBkZXB0aCA9IHBhcnRzLmxlbmd0aCAtIDE7XG5cdFx0Y29uc3QgbGluZVRleHQgPSBwYXJ0c1tkZXB0aF0udHJpbSgpO1xuXG5cdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRncm91cHNbbGluZVRleHRdID0gZ3JvdXBzW2xpbmVUZXh0XSA/PyBbXTtcblx0XHRcdGN1cnJlbnRTZWN0aW9uID0gbGluZVRleHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghY3VycmVudFNlY3Rpb24pIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBSZXBvcnRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGdyb3Vwc1tjdXJyZW50U2VjdGlvbl0ucHVzaChsaW5lVGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyb3Vwcztcbn1cbiIsICJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbnR5cGUgUGFnZVByb3BzID0ge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHRpdGxlLCBjaGlsZHJlbiB9OiBQYWdlUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzeD17eyBtdDogMTAgfX0+XG5cdFx0XHQ8UGFwZXIgZWxldmF0aW9uPXszfSBzeD17eyBweTogMyB9fT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMVwiIG1iPXs1fT5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9QYXBlcj5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBGaWxlUG9uZCB9IGZyb20gXCJyZWFjdC1maWxlcG9uZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChGaWxlUG9uZClgXG5cdHdpZHRoOiAzMDBweDtcblxuXHQmIC5maWxlcG9uZC0tY3JlZGl0cyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1kcm9wLWxhYmVsIHtcblx0XHRjb2xvcjogIzRjNGU1Mztcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1sYWJlbC1hY3Rpb24ge1xuXHRcdHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2JhYmRjMDtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1wYW5lbC1yb290IHtcblx0XHRib3JkZXItcmFkaXVzOiAyZW07XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZjBmNDtcblx0XHRoZWlnaHQ6IDFlbTtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1pdGVtLXBhbmVsIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1ZTY4O1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWRyaXAtYmxvYiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzdmOGE5YTtcblx0fVxuYDtcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCbG9iKGNvbnRlbnQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IHtcblx0XHRpZiAoIWNvbnRlbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQmxvYihbY29udGVudF0sIHsgdHlwZSB9KTtcblx0fSwgW2NvbnRlbnQsIHR5cGVdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU9iamVjdFVSTChibG9iOiBCbG9iIHwgbnVsbCkge1xuXHRjb25zdCBbb2JqZWN0VVJMLCBzZXRPYmplY3RVUkxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWJsb2IpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdHNldE9iamVjdFVSTCh1cmwpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcblx0XHRcdHNldE9iamVjdFVSTChudWxsKTtcblx0XHR9O1xuXHR9LCBbYmxvYl0pO1xuXG5cdHJldHVybiBvYmplY3RVUkw7XG59XG4iLCAiaW1wb3J0ICogYXMgQ1NWRm9ybWF0IGZyb20gXCJAZmFzdC1jc3YvZm9ybWF0XCI7XG5cbnR5cGUgUm93ID0gUmVjb3JkPHN0cmluZywgYW55PjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChcblx0cm93czogUm93W10sXG5cdG9wdGlvbnM6IENTVkZvcm1hdC5Gb3JtYXR0ZXJPcHRpb25zQXJnczxSb3csIFJvdz5cbik6IFByb21pc2U8c3RyaW5nPiB7XG5cdHJldHVybiBDU1ZGb3JtYXQud3JpdGVUb1N0cmluZyhyb3dzLCBvcHRpb25zKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgQ2xpZW50ID0ge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xpZW50UmVzcG9uc2UgPSB7XG5cdGNsaWVudHM6IENsaWVudFtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG5cblx0Y29uc3Qgc3BhY2VJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic3BhY2VJZFwiKTtcblx0Y29uc3QgV3Jpa2UgPSBhd2FpdCBXcmlrZUNsaWVudC5mb3JTZXNzaW9uKHJlcXVlc3QpO1xuXG5cdGlmICghc3BhY2VJZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIk11c3QgaGF2ZSBhIHNwYWNlSWRcIiwgeyBzdGF0dXM6IDQyMiB9KTtcblx0fVxuXG5cdGNvbnN0IGZvbGRlcnMgPSBhd2FpdCBXcmlrZS5Gb2xkZXIuZnJvbVNwYWNlKHNwYWNlSWQsIHsgcHJvamVjdDogZmFsc2UgfSk7XG5cblx0cmV0dXJuIGpzb24oe1xuXHRcdGNsaWVudHM6IGZvbGRlcnMubWFwKChmKSA9PiAoeyBpZDogZi5pZCwgdGl0bGU6IGYudGl0bGUgfSkpLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgQ3JlZGVudGlhbCBmcm9tIFwiLi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCIuLi9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuLi9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUN1c3RvbUZpZWxkQ2xhc3MgfSBmcm9tIFwiLi9DdXN0b21GaWVsZC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3MgfSBmcm9tIFwiLi9DdXN0b21GaWVsZC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJDbGFzcyB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUZvbGRlckNsYXNzIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVByb2plY3RDbGFzcyB9IGZyb20gXCIuL1Byb2plY3Quc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9Qcm9qZWN0LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVNwYWNlQ2xhc3MgfSBmcm9tIFwiLi9TcGFjZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVNwYWNlQ2xhc3MgfSBmcm9tIFwiLi9TcGFjZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrQ2xhc3MgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0NsYXNzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcyB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3MgfSBmcm9tIFwiLi9WaWRlb0JhdGNoVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3MgfSBmcm9tIFwiLi9WaWRlb0JhdGNoVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VXb3JrRmxvd0NsYXNzIH0gZnJvbSBcIi4vV29ya2Zsb3cuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVXb3JrRmxvd0NsYXNzIH0gZnJvbSBcIi4vV29ya2Zsb3cuc2VydmVyXCI7XG5cbmNvbnN0IEJhc2VVUkwgPSBcImh0dHBzOi8vd3d3LndyaWtlLmNvbS9hcGkvdjQvXCI7XG5cbnR5cGUgRmV0Y2hDb25maWcgPSB7XG5cdG1ldGhvZDogc3RyaW5nO1xuXHRoZWFkZXJzOiB7XG5cdFx0QXV0aG9yaXphdGlvbjogc3RyaW5nO1xuXHRcdFwiQ29udGVudC1UeXBlXCI/OiBzdHJpbmc7XG5cdH07XG5cdGJvZHk/OiBzdHJpbmc7XG5cdHNpZ25hbD86IEFib3J0U2lnbmFsO1xufTtcblxuY29uc3QgZW5jb2RlVmFsdWUgPSAodmFsdWU6IGFueSk6IHN0cmluZyA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiBgWyR7dmFsdWUubWFwKChpKSA9PiBgXCIke2VuY29kZVZhbHVlKGkpfVwiYCkuam9pbihcIixcIil9XWA7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCBjbGFzcyBXcmlrZUNsaWVudCB7XG5cdHN0YXRpYyBhc3luYyBmb3JTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdFx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0XHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQsIHVzZXI/LnVzZXJJZCk7XG5cdH1cblxuXHRDdXN0b21GaWVsZDogV3Jpa2VDdXN0b21GaWVsZENsYXNzO1xuXHRGb2xkZXI6IFdyaWtlRm9sZGVyQ2xhc3M7XG5cdFByb2plY3Q6IFdyaWtlUHJvamVjdENsYXNzO1xuXHRTcGFjZTogV3Jpa2VTcGFjZUNsYXNzO1xuXHRUYXNrOiBXcmlrZVRhc2tDbGFzcztcblx0VGFza1RlbXBsYXRlOiBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzO1xuXHRWaWRlb0JhdGNoOiBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3M7XG5cdFdvcmtmbG93OiBXcmlrZVdvcmtGbG93Q2xhc3M7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjcmVkZW50aWFsczogQ3JlZGVudGlhbCxcblx0XHRwdWJsaWMgdXNlcklkOiBzdHJpbmcgfCB1bmRlZmluZWRcblx0KSB7XG5cdFx0dGhpcy5DdXN0b21GaWVsZCA9IGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Gb2xkZXIgPSBjcmVhdGVGb2xkZXJDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlByb2plY3QgPSBjcmVhdGVQcm9qZWN0Q2xhc3ModGhpcyk7XG5cdFx0dGhpcy5TcGFjZSA9IGNyZWF0ZVNwYWNlQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5UYXNrID0gY3JlYXRlVGFza0NsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVGFza1RlbXBsYXRlID0gY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5WaWRlb0JhdGNoID0gY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyh0aGlzKTtcblx0XHR0aGlzLldvcmtmbG93ID0gY3JlYXRlV29ya0Zsb3dDbGFzcyh0aGlzKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgZmV0Y2g8VCA9IHt9Pihcblx0XHR1cmw6IHN0cmluZyxcblx0XHRtZXRob2Q6IHN0cmluZyxcblx0XHRkYXRhPzogb2JqZWN0XG5cdCk6IFByb21pc2U8VD4ge1xuXHRcdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdFx0Y29uc3QgY29uZmlnOiBGZXRjaENvbmZpZyA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY3JlZGVudGlhbHMuYWNjZXNzVG9rZW59YCxcblx0XHRcdH0sXG5cdFx0XHRzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuXHRcdH07XG5cblx0XHRpZiAoZGF0YSAmJiBjb25maWcuaGVhZGVycykge1xuXHRcdFx0Y29uZmlnLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPVxuXHRcdFx0XHRcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuXHRcdH1cblxuXHRcdGlmIChkYXRhKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRcdE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PlxuXHRcdFx0XHRwYXJhbXMuc2V0KGtleSwgZW5jb2RlVmFsdWUodmFsdWUpKVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uZmlnLmJvZHkgPSBwYXJhbXMudG9TdHJpbmcoKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhcIldSSUtFIFJlcXVlc3Q6IFwiLCB1cmwsIG1ldGhvZCwgY29uZmlnLmJvZHksIGRhdGEpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIDEwMDAwKTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBjb25maWcpO1xuXHRcdGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRjb25zb2xlLmxvZyhcIkdvdCBXUklLRSBSZXNwb25zZTogXCIsIGpzb24pO1xuXG5cdFx0aWYgKGpzb24uZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihqc29uLmVycm9yRGVzY3JpcHRpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBqc29uIGFzIFQ7XG5cdH1cblxuXHRnZXQ8VCA9IHt9PihwYXRoOiBzdHJpbmcgPSBcIlwiLCBwYXJhbXM6IG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChgJHtCYXNlVVJMfSR7cGF0aH1gKTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PlxuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCBlbmNvZGVWYWx1ZSh2YWx1ZSkpXG5cdFx0KTtcblxuXHRcdHJldHVybiB0aGlzLmZldGNoPFQ+KHVybC50b1N0cmluZygpLCBcIkdFVFwiKTtcblx0fVxuXG5cdHBvc3Q8VCA9IHt9PihwYXRoOiBzdHJpbmcgPSBcIlwiLCBkYXRhOiBvYmplY3QgPSB7fSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoPFQ+KGAke0Jhc2VVUkx9JHtwYXRofWAsIFwiUE9TVFwiLCBkYXRhKTtcblx0fVxufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgQ3VzdG9tRmllbGRSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcbn07XG5cbnR5cGUgQ3VzdG9tRmllbGRSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBDdXN0b21GaWVsZFJhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZUN1c3RvbUZpZWxkQ2xhc3MgPSB7XG5cdG5ldyAocmF3OiBDdXN0b21GaWVsZFJhdyk6IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZTtcblxuXHRmcm9tSWRzOiAoaWQ6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZVtdPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21GaWVsZENsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VDdXN0b21GaWVsZENsaWVudCBpbXBsZW1lbnRzIFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21JZHMoaWRzOiBzdHJpbmdbXSkge1xuXHRcdFx0Y29uc3QgQ2xzID0gdGhpcztcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PEN1c3RvbUZpZWxkUmVzcG9uc2U+KFxuXHRcdFx0XHRgY3VzdG9tZmllbGRzLyR7aWRzLmpvaW4oXCIsXCIpfWBcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyYXcpID0+IG5ldyBDbHMocmF3KSk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIHJhdzogQ3VzdG9tRmllbGRSYXc7XG5cblx0XHRjb25zdHJ1Y3RvcihyYXc6IEN1c3RvbUZpZWxkUmF3KSB7XG5cdFx0XHR0aGlzLnJhdyA9IHJhdztcblx0XHR9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnRpdGxlO1xuXHRcdH1cblx0XHRnZXQgdHlwZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udHlwZTtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBQcm9qZWN0SW5mb1JhdyA9IHtcblx0b3duZXJJZDogc3RyaW5nO1xufTtcblxudHlwZSBGb2xkZXJSYXcgPSB7XG5cdGlkPzogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3O1xuXHRjaGlsZElkcz86IHN0cmluZ1tdO1xuXHRwYXJlbnRJZHM/OiBzdHJpbmdbXTsgLy9vbmx5IHByZXNlbnQgaWYgdGhlIGZvbGRlciBpcyBmZXRjaGVkIGJ5IGlkLi4uXG59O1xuXG50eXBlIFRyZWVSZXNwb25zZSA9IHtcblx0a2luZDogc3RyaW5nO1xuXHRkYXRhOiBGb2xkZXJSYXdbXTtcbn07XG5cbnR5cGUgRm9sZGVyU2F2ZUNvbmZpZyA9IHtcblx0cGFyZW50Rm9sZGVySWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VGb2xkZXJJbnN0YW5jZSB7XG5cdGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHByb2plY3Q/OiBQcm9qZWN0SW5mb1JhdztcblxuXHRzYXZlOiAoY29uZmlnOiBGb2xkZXJTYXZlQ29uZmlnKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXG5cdGdldFBhcmVudEZvbGRlcjogKCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcblx0Z2V0Q2hpbGRGb2xkZXJzOiAoKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZpbmRDb25maWdGb2xkZXI6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZSB8IG51bGw+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlRm9sZGVyQ2xhc3Mge1xuXHRuZXcgKHJhdzogRm9sZGVyUmF3KTogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcblxuXHRmcm9tU3BhY2U6IChcblx0XHRzcGFjZUlkOiBzdHJpbmcsXG5cdFx0cGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cdCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+O1xuXHRmcm9tSURzOiAoaWRzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+O1xuXHRmcm9tUGVybWFMaW5rOiAoaWQ6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcblx0Y3JlYXRlOiAoXG5cdFx0dGl0bGU6IHN0cmluZyxcblx0XHRkZXNjcmlwdGlvbjogc3RyaW5nLFxuXHRcdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhd1xuXHQpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2xkZXJDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VGb2xkZXJDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZUZvbGRlckNsaWVudCBpbXBsZW1lbnRzIFdyaWtlRm9sZGVySW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tU3BhY2UoXG5cdFx0XHRzcGFjZUlkOiBzdHJpbmcsXG5cdFx0XHRwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT5cblx0XHQpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YC9zcGFjZXMvJHtzcGFjZUlkfS9mb2xkZXJzYCxcblx0XHRcdFx0cGFyYW1zXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlEcyhpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXG5cdFx0XHRcdGBmb2xkZXJzLyR7aWRzLmpvaW4oXCIsXCIpfWBcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKGxpbms6IHN0cmluZyk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdHJlZSA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcImZvbGRlcnNcIiwge1xuXHRcdFx0XHRwZXJtYWxpbms6IGxpbmssXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gdHJlZS5kYXRhWzBdO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KGZvbGRlcik7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGNyZWF0ZShcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRkZXNjcmlwdGlvbjogc3RyaW5nLFxuXHRcdFx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3XG5cdFx0KTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0IH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBGb2xkZXJSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cdFx0Z2V0IGRlc2NyaXB0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmRlc2NyaXB0aW9uO1xuXHRcdH1cblx0XHRnZXQgcHJvamVjdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wcm9qZWN0O1xuXHRcdH1cblx0XHRnZXQgY2hpbGRJZHMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuY2hpbGRJZHM7XG5cdFx0fVxuXHRcdGdldCBwYXJlbnRJZHMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucGFyZW50SWRzO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnOiBGb2xkZXJTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnBvc3Q8Rm9sZGVyUmF3Pihcblx0XHRcdFx0YGZvbGRlci8ke2NvbmZpZy5wYXJlbnRGb2xkZXJJZH0vZm9sZGVyc2AsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuXHRcdFx0XHRcdHByb2plY3Q6IHRoaXMucHJvamVjdCA/PyBmYWxzZSxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5yYXcgPSByZXNwO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRwcml2YXRlIHBhcmVudEZvbGRlcjogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB8IHVuZGVmaW5lZDtcblx0XHRhc3luYyBnZXRQYXJlbnRGb2xkZXIoKSB7XG5cdFx0XHRjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMucGFyZW50SWRzIHx8IHRoaXMucGFyZW50SWRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgcGFyZW50XCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5Gb2xkZXIuZnJvbUlEcyhbdGhpcy5wYXJlbnRJZHNbMF1dKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzcFswXTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMucGFyZW50Rm9sZGVyID0gdGhpcy5wYXJlbnRGb2xkZXIgPz8gbG9hZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Rm9sZGVyO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgY2hpbGRGb2xkZXJzOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4gfCB1bmRlZmluZWQ7XG5cdFx0YXN5bmMgZ2V0Q2hpbGRGb2xkZXJzKCkge1xuXHRcdFx0Y29uc3QgbG9hZCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmNoaWxkSWRzKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBzdWIgZm9sZGVyc1wiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBjbGllbnQuRm9sZGVyLmZyb21JRHModGhpcy5jaGlsZElkcyk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLmNoaWxkRm9sZGVycyA9IHRoaXMuY2hpbGRGb2xkZXJzID8/IGxvYWQoKTtcblx0XHRcdHJldHVybiB0aGlzLmNoaWxkRm9sZGVycztcblx0XHR9XG5cblx0XHRwcml2YXRlIGNvbmZpZ0ZvbGRlckNhY2hlID0gbmV3IE1hcDxcblx0XHRcdHN0cmluZyxcblx0XHRcdFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZSB8IG51bGw+XG5cdFx0PigpO1xuXHRcdC8vTG9vayBmb3IgYSBmb2xkZXIgdGhhdCBpcyBhIGRpcmVjdCBjaGlsZCBvZiB0aGlzIGZvbGRlciwgaWYgaXRzIG5vdCB0aGVyZSBzdGFydCBsb29raW5nIHVwIF5cblx0XHRhc3luYyBmaW5kQ29uZmlnRm9sZGVyKG5hbWU6IHN0cmluZykge1xuXHRcdFx0Y29uc3QgZmluZCA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBhd2FpdCB0aGlzLmdldENoaWxkRm9sZGVycygpO1xuXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0aWYgKGNoaWxkLnRpdGxlID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2hpbGQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgcGFyZW50ID0gYXdhaXQgdGhpcy5nZXRQYXJlbnRGb2xkZXIoKTtcblxuXHRcdFx0XHRyZXR1cm4gcGFyZW50LmZpbmRDb25maWdGb2xkZXIobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnRm9sZGVyQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlnRm9sZGVyQ2FjaGUuc2V0KG5hbWUsIGZpbmQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IGF3YWl0IHRoaXMuY29uZmlnRm9sZGVyQ2FjaGUuZ2V0KG5hbWUpO1xuXG5cdFx0XHRyZXR1cm4gZm9sZGVyID8/IG51bGw7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCAqIGFzIGNzdiBmcm9tIFwiQGZhc3QtY3N2L3BhcnNlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuXG50eXBlIENTVlJvdyA9IHsgdGVtcGxhdGU6IHN0cmluZyB9ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBQcm9qZWN0UmF3ID0ge1xuXHRpZD86IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvamVjdEluc3RhbmNlID0ge1xuXHRpbXBvcnRDU1YoXG5cdFx0ZmlsZTogRmlsZSxcblx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0KTogUHJvbWlzZTxXcmlrZVByb2plY3RJbnN0YW5jZT47XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVByb2plY3RDbGFzcyA9IHtcblx0bmV3IChyYXc6IFByb2plY3RSYXcsIHBhcmVudD86IFdyaWtlRm9sZGVySW5zdGFuY2UpOiBXcmlrZVByb2plY3RJbnN0YW5jZTtcblxuXHRjcmVhdGUodGl0bGU6IHN0cmluZywgcGFyZW50OiBXcmlrZUZvbGRlckluc3RhbmNlKTogV3Jpa2VQcm9qZWN0SW5zdGFuY2U7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVByb2plY3RDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVByb2plY3RDbGllbnQgaW1wbGVtZW50cyBXcmlrZVByb2plY3RJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBwYXJlbnQ6IFdyaWtlRm9sZGVySW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VQcm9qZWN0Q2xpZW50KHsgdGl0bGUgfSwgcGFyZW50KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHZpZGVvczogQ1NWUm93W10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByYXc6IFByb2plY3RSYXcsXG5cdFx0XHRwcml2YXRlIHBhcmVudD86IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnRpdGxlO1xuXHRcdH1cblxuXHRcdGFzeW5jIGltcG9ydENTVihcblx0XHRcdGZpbGU6IEZpbGUsXG5cdFx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0XHQpOiBQcm9taXNlPFdyaWtlUHJvamVjdENsaWVudD4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjc3YucGFyc2VTdHJpbmcodGV4dCwgb3B0aW9ucylcblx0XHRcdFx0XHQub24oXCJlcnJvclwiLCAoZXJyKSA9PiByZWplY3QoZXJyKSlcblx0XHRcdFx0XHQub24oXCJkYXRhXCIsIChyb3c6IENTVlJvdykgPT4gdGhpcy52aWRlb3MucHVzaChyb3cpKVxuXHRcdFx0XHRcdC5vbihcImVuZFwiLCAoKSA9PiBmdWxmaWxsKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNhdmUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pZCA/IHRoaXMudXBkYXRlKCkgOiB0aGlzLmNyZWF0ZSgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdXBkYXRlKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHVwZGF0ZSBQcm9qZWN0cyAobm90IGltcGxlbWVudGVkKVwiKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFzeW5jIGNyZWF0ZSgpIHtcblx0XHRcdGlmICghY2xpZW50LnVzZXJJZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIGlkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucGFyZW50Py5pZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBwYXJlbnQgaWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlRm9sZGVyID0gYXdhaXQgdGhpcy5wYXJlbnQ/LmZpbmRDb25maWdGb2xkZXIoXG5cdFx0XHRcdFwidGVtcGxhdGVzXCJcblx0XHRcdCk7XG5cblx0XHRcdGlmICghdGVtcGxhdGVGb2xkZXIpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgdGVtcGxhdGUgZm9sZGVyXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcDxcblx0XHRcdFx0c3RyaW5nLFxuXHRcdFx0XHRQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+XG5cdFx0XHQ+KCk7XG5cdFx0XHRjb25zdCBmaW5kVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICghdGVtcGxhdGVDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZUNhY2hlLnNldChcblx0XHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0XHRjbGllbnQuVGFza1RlbXBsYXRlLmZyb21UaXRsZShuYW1lLCB0ZW1wbGF0ZUZvbGRlcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlQ2FjaGUuZ2V0KG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcHJvamVjdCA9IGF3YWl0IGNsaWVudC5Gb2xkZXIuY3JlYXRlKHRoaXMudGl0bGUsIFwiXCIsIHtcblx0XHRcdFx0b3duZXJJZDogY2xpZW50LnVzZXJJZCxcblx0XHRcdH0pO1xuXG5cdFx0XHRhd2FpdCBwcm9qZWN0LnNhdmUoeyBwYXJlbnRGb2xkZXJJZDogdGhpcy5wYXJlbnQuaWQgfSk7XG5cblx0XHRcdGZvciAobGV0IHZpZGVvIG9mIHRoaXMudmlkZW9zLnJldmVyc2UoKSkge1xuXHRcdFx0XHRjb25zdCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZU5hbWUsIC4uLnByb3BlcnRpZXMgfSA9IHZpZGVvO1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGZpbmRUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpO1xuXG5cdFx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCB0ZW1wbGF0ZT8uY2xvbmUocHJvcGVydGllcyk7XG5cblx0XHRcdFx0YXdhaXQgdGFzaz8uc2F2ZSh7IGZvbGRlcjogcHJvamVjdCB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBTcGFjZVJhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbnR5cGUgU3BhY2VSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBTcGFjZVJhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTcGFjZUluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTcGFjZUNsYXNzID0ge1xuXHRuZXcgKHJhdzogU3BhY2VSYXcpOiBXcmlrZVNwYWNlSW5zdGFuY2U7XG5cblx0Z2V0QWxsOiAoKSA9PiBQcm9taXNlPFdyaWtlU3BhY2VJbnN0YW5jZVtdPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGFjZUNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVNwYWNlQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VTcGFjZUNsaWVudCBpbXBsZW1lbnRzIFdyaWtlU3BhY2VJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFdyaWtlU3BhY2VJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxTcGFjZVJlc3BvbnNlPihcIi9zcGFjZXNcIik7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VTcGFjZUNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IFNwYWNlUmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5cbmNvbnN0IFNhdmVCbGFja0xpc3QgPSBbXG5cdFwiYWNjb3VudElkXCIsXG5cdFwiY3JlYXRlZERhdGVcIixcblx0XCJ1cGRhdGVkRGF0ZVwiLFxuXHRcInBlcm1hbGlua1wiLFxuXHRcInNjb3BlXCIsXG5cdFwicHJpb3JpdHlcIixcblx0XCJkYXRlc1wiLFxuXTtcblxudHlwZSBDdXN0b21GaWVsZEluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgVGFza1JhdyA9IHtcblx0aWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRwYXJlbnRzPzogc3RyaW5nW107XG5cdHBhcmVudElkcz86IHN0cmluZ1tdO1xuXHRzdXBlclRhc2tzPzogc3RyaW5nW107XG5cdHN1cGVyVGFza0lkcz86IHN0cmluZ1tdO1xuXHRzdWJUYXNrSWRzPzogc3RyaW5nW107XG5cdGFjY291bnRJZD86IHN0cmluZ1tdO1xuXHRjcmVhdGVkRGF0ZT86IHN0cmluZztcblx0dXBkYXRlZERhdGU/OiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c0lkPzogc3RyaW5nO1xuXHRwZXJtYWxpbms/OiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xuXHRwcmlvcml0eT86IHN0cmluZztcblx0ZGF0ZXM/OiBhbnk7XG5cdGVmZm9ydEFsbG9jYXRpb24/OiBhbnk7XG5cdGJpbGxpbmdUeXBlPzogYW55O1xuXHRmaW5hbmNlPzogYW55O1xuXHRzaGFyZWRJZHM/OiBhbnk7XG5cdHJlc3BvbnNpYmxlSWRzPzogYW55O1xuXHRjdXN0b21GaWVsZHM/OiBDdXN0b21GaWVsZEluc3RhbmNlW107XG59ICYge307XG5cbmV4cG9ydCB0eXBlIFRhc2tSZXNwb25zZSA9IHtcblx0a2luZDogc3RyaW5nO1xuXHRkYXRhOiBUYXNrUmF3W107XG59O1xuXG50eXBlIFRhc2tTYXZlQ29uZmlnID0ge1xuXHRmb2xkZXI/OiBXcmlrZUZvbGRlckluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdHJhdzogVGFza1JhdyB8IHVuZGVmaW5lZDtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cGFyZW50czogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG5cblx0YWRkU3ViVGFza3M6ICh0YXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSkgPT4gdm9pZDtcblx0c2V0U3VwZXJUYXNrOiAodGFzazogV3Jpa2VUYXNrSW5zdGFuY2UpID0+IHZvaWQ7XG5cblx0Z2V0U2F2ZURhdGE6ICgpID0+IFRhc2tSYXc7XG5cblx0c2F2ZTogKGNvbmZpZzogVGFza1NhdmVDb25maWcpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrQ2xhc3M8VCA9IFdyaWtlVGFza0luc3RhbmNlPiB7XG5cdG5ldyAodGFzazogVGFza1Jhdyk6IFQ7XG5cblx0ZnJvbVBlcm1hTGluazogKGxpbms6IHN0cmluZykgPT4gUHJvbWlzZTxUPjtcblxuXHRmcm9tVGl0bGU6ICh0aXRsZTogc3RyaW5nLCBmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2UpID0+IFByb21pc2U8VD47XG5cblx0ZnJvbVJhdzogKHRhc2s6IFRhc2tSYXcpID0+IFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlVGFza0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlVGFza0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlVGFza0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluazxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4odGhpczogVCwgcGVybWFsaW5rOiBzdHJpbmcpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVBlcm1hTGluayhwZXJtYWxpbmssIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVRpdGxlPFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pihcblx0XHRcdHRoaXM6IFQsXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21UaXRsZSh0aXRsZSwgZm9sZGVyLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21SYXc8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KHRoaXM6IFQsIHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VUYXNrQ2xpZW50KHRhc2spIGFzIEluc3RhbmNlVHlwZTxUPjtcblx0XHR9XG5cblx0XHRyYXc6IFRhc2tSYXc7XG5cblx0XHRwcml2YXRlIHN1cGVyVGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdWJUYXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IodGFzazogVGFza1Jhdykge1xuXHRcdFx0dGhpcy5yYXcgPSB0YXNrO1xuXHRcdH1cblxuXHRcdGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblxuXHRcdGdldCB0aXRsZSgpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblxuXHRcdGdldCBwYXJlbnRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wYXJlbnRJZHM7XG5cdFx0fVxuXG5cdFx0YWRkU3ViVGFza3ModGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10pIHtcblx0XHRcdHRhc2tzLmZvckVhY2goKHQpID0+IHQuc2V0U3VwZXJUYXNrKHRoaXMpKTtcblxuXHRcdFx0dGhpcy5zdWJUYXNrcyA9IFsuLi50aGlzLnN1YlRhc2tzLCAuLi50YXNrc107XG5cdFx0fVxuXG5cdFx0c2V0U3VwZXJUYXNrKHRhc2s6IFdyaWtlVGFza0luc3RhbmNlKSB7XG5cdFx0XHR0aGlzLnN1cGVyVGFzayA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0Z2V0U2F2ZURhdGEoKTogVGFza1JhdyB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBwYXJlbnRzLCAuLi5leHRyYURhdGEgfSA9IHRoaXMucmF3O1xuXHRcdFx0Y29uc3QgZGF0YSA9IHsgLi4uZXh0cmFEYXRhIH0gYXMgVGFza1JhdztcblxuXHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdGRhdGEudGl0bGUgPSB0aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhcmVudHMpIHtcblx0XHRcdFx0ZGF0YS5wYXJlbnRzID0gcGFyZW50cztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3VwZXJUYXNrPy5pZCkge1xuXHRcdFx0XHRkYXRhLnN1cGVyVGFza3MgPSBbdGhpcy5zdXBlclRhc2suaWRdO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBwcm9wIG9mIFNhdmVCbGFja0xpc3QpIHtcblx0XHRcdFx0ZGVsZXRlIGRhdGFbcHJvcCBhcyBrZXlvZiBUYXNrUmF3XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pZCA/IHRoaXMudXBkYXRlKGNvbmZpZykgOiB0aGlzLmNyZWF0ZShjb25maWcpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYXN5bmMgY3JlYXRlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHsgZm9sZGVyIH0gPSBjb25maWc7XG5cblx0XHRcdGlmICghZm9sZGVyPy5pZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlIGEgbG9jYXRpb24gdG8gc2F2ZSBhIG5ldyB0YXNrIHRvLlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0Li4udGhpcy5nZXRTYXZlRGF0YSgpLFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGZvbGRlcj8uaWQpIHtcblx0XHRcdFx0cGF5bG9hZC5wYXJlbnRzID0gW2ZvbGRlci5pZF07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxUYXNrUmVzcG9uc2U+KFxuXHRcdFx0XHRgZm9sZGVycy8ke2ZvbGRlci5pZH0vdGFza3NgLFxuXHRcdFx0XHRmaXhQYXlsb2FkKHBheWxvYWQgYXMge30pXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCB0YXNrID0gcmVzcC5kYXRhWzBdO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHRhc2s7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIFN1YiBUYXNrczogXCIsIHRoaXMuc3ViVGFza3MubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IHN1YlRhc2sgb2YgdGhpcy5zdWJUYXNrcykge1xuXHRcdFx0XHRhd2FpdCBzdWJUYXNrLnNhdmUoY29uZmlnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHVwZGF0ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXBkYXRlIHRhc2tzXCIpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgUGF5bG9hZEtleU1hcCA9IHtcblx0c2hhcmVkSWRzOiBcInNoYXJlZHNcIixcblx0cmVzcG9uc2libGVJZHM6IFwicmVzcG9uc2libGVzXCIsXG5cdGN1c3RvbVN0YXR1c0lkOiBcImN1c3RvbVN0YXR1c1wiLFxufTtcblxuZnVuY3Rpb24gZml4UGF5bG9hZChwYXlsb2FkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG5cdGNvbnN0IG5ld1BheWxvYWQgPSB7IC4uLnBheWxvYWQgfTtcblxuXHRmb3IgKGxldCBba2V5LCBmaXhdIG9mIE9iamVjdC5lbnRyaWVzKFBheWxvYWRLZXlNYXApKSB7XG5cdFx0aWYgKG5ld1BheWxvYWRba2V5XSkge1xuXHRcdFx0bmV3UGF5bG9hZFtmaXhdID0gbmV3UGF5bG9hZFtrZXldO1xuXHRcdFx0ZGVsZXRlIG5ld1BheWxvYWRba2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3UGF5bG9hZDtcbn1cblxuY29uc3QgRmllbGRzID0gW1xuXHRcInBhcmVudElkc1wiLFxuXHRcImRlc2NyaXB0aW9uXCIsXG5cdFwiY3VzdG9tRmllbGRzXCIsXG5cdFwic2hhcmVkSWRzXCIsXG5cdFwicmVzcG9uc2libGVJZHNcIixcblx0XCJzdWJUYXNrSWRzXCIsXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbVBlcm1hTGluayhwZXJtYWxpbms6IHN0cmluZywgY2xpZW50OiBXcmlrZUNsaWVudCkge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGB0YXNrc2AsIHtcblx0XHRwZXJtYWxpbmssXG5cdFx0ZmllbGRzOiBGaWVsZHMsXG5cdH0pO1xuXG5cdHJldHVybiByZXNwLmRhdGFbMF07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tSWRzKFxuXHRpZHM6IHN0cmluZ1tdLFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBQcm9taXNlPFRhc2tSYXdbXT4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGB0YXNrcy8ke2lkcy5qb2luKFwiLFwiKX1gKTtcblxuXHRyZXR1cm4gcmVzcC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbVRpdGxlKFxuXHR0aXRsZTogc3RyaW5nLFxuXHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2UsXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFByb21pc2U8VGFza1Jhdz4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGBmb2xkZXJzLyR7Zm9sZGVyLmlkfS90YXNrc2AsIHtcblx0XHR0aXRsZSxcblx0XHRmaWVsZHM6IEZpZWxkcyxcblx0fSk7XG5cblx0aWYgKHJlc3AuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm91bmQgbXVsdGlwbGUgdGFza3NcIik7XG5cdH1cblxuXHRyZXR1cm4gcmVzcC5kYXRhWzBdO1xufVxuIiwgImltcG9ydCBNdXN0YWNoZSBmcm9tIFwibXVzdGFjaGVcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUge1xuXHRXcmlrZVRhc2tDbGFzcyxcblx0V3Jpa2VUYXNrSW5zdGFuY2UsXG5cdFRhc2tSYXcsXG5cdFRhc2tSZXNwb25zZSxcbn0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmF3RnJvbVRpdGxlLCByYXdGcm9tSWRzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgQ2xvbmVEYXRhID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBDdXN0b21GaWVsZFRlbXBsYXRlID0ge1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRkZWZpbml0aW9uOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgZXh0ZW5kcyBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdGNsb25lOiAoXG5cdFx0ZGF0YTogQ2xvbmVEYXRhLFxuXHRcdHBhcmVudD86IFdyaWtlVGFza0luc3RhbmNlXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVRhc2tJbnN0YW5jZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrVGVtcGxhdGVDbGFzc1xuXHRleHRlbmRzIFdyaWtlVGFza0NsYXNzPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+IHt9XG5cbmZ1bmN0aW9uIGZpbGxJblRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IENsb25lRGF0YSk6IHN0cmluZyB7XG5cdGlmICghdGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gXCJcIjtcblx0fVxuXG5cdHJldHVybiBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgVGFza1RlbXBsYXRlQ2xpZW50XG5cdFx0ZXh0ZW5kcyBjbGllbnQuVGFza1xuXHRcdGltcGxlbWVudHMgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZVxuXHR7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21JZHMoaWRzOiBzdHJpbmdbXSkge1xuXHRcdFx0Y29uc3QgQ2xzID0gdGhpcztcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21JZHMoaWRzLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gcmF3Lm1hcCgocikgPT4gbmV3IENscyhyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsoXG5cdFx0XHRwZXJtYWxpbms6IHN0cmluZ1xuXHRcdCk6IFByb21pc2U8VGFza1RlbXBsYXRlQ2xpZW50PiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KFwiL3Rhc2tzXCIsIHtcblx0XHRcdFx0cGVybWFsaW5rLFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmVzcC5kYXRhWzBdKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVRpdGxlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCk6IFByb21pc2U8VGFza1RlbXBsYXRlQ2xpZW50PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tVGl0bGUodGl0bGUsIGZvbGRlciwgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tUmF3KHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHJldHVybiBuZXcgVGFza1RlbXBsYXRlQ2xpZW50KHRhc2spO1xuXHRcdH1cblxuXHRcdFRlbXBsYXRlRmllbGRzOiAoa2V5b2YgVGFza1JhdylbXSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIl07XG5cdFx0TGl0ZXJhbEZpZWxkczogKGtleW9mIFRhc2tSYXcpW10gPSBbXG5cdFx0XHRcInNoYXJlZElkc1wiLFxuXHRcdFx0XCJyZXNwb25zaWJsZUlkc1wiLFxuXHRcdFx0XCJjdXN0b21TdGF0dXNJZFwiLFxuXHRcdF07XG5cblx0XHRhc3luYyBjbG9uZShkYXRhOiBDbG9uZURhdGEsIHN1cGVyVGFzaz86IFdyaWtlVGFza0luc3RhbmNlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJhdyA9IHRoaXMucmF3ID8/ICh7fSBhcyBUYXNrUmF3KTtcblxuXHRcdFx0Y29uc3QgdGFza1JhdyA9IHt9IGFzIFRhc2tSYXc7XG5cdFx0XHRjb25zdCBzZXQgPSAoa2V5OiBrZXlvZiBUYXNrUmF3LCB2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAodmFsKSB7XG5cdFx0XHRcdFx0dGFza1Jhd1trZXldID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLlRlbXBsYXRlRmllbGRzLmZvckVhY2goKGtleSkgPT5cblx0XHRcdFx0c2V0KGtleSwgZGF0YVtrZXldID8/IGZpbGxJblRlbXBsYXRlKHRlbXBsYXRlUmF3W2tleV0sIGRhdGEpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5MaXRlcmFsRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcIlNldHRpbmcgTGl0ZXJhbCBGaWVsZDogXCIsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdGRhdGFba2V5XSA/PyB0ZW1wbGF0ZVJhd1trZXldXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHNldChrZXksIGRhdGFba2V5XSA/PyB0ZW1wbGF0ZVJhd1trZXldKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZGF0YS50aXRsZVByZWZpeCkge1xuXHRcdFx0XHR0YXNrUmF3LnRpdGxlID0gYCR7ZGF0YS50aXRsZVByZWZpeH0gJHt0YXNrUmF3LnRpdGxlfWA7XG5cdFx0XHR9XG5cblx0XHRcdHRhc2tSYXcudGl0bGUgPSB0YXNrUmF3LnRpdGxlXG5cdFx0XHRcdC5yZXBsYWNlKFwiVEVNUExBVEVcIiwgXCJcIilcblx0XHRcdFx0LnJlcGxhY2UoL1xcIFxcIC8sIFwiIFwiKTtcblxuXHRcdFx0Y29uc3QgY3VzdG9tRmllbGRzID0gKGF3YWl0IHRoaXMuZ2V0Q3VzdG9tRmllbGRzKCkpID8/IHt9O1xuXG5cdFx0XHRmb3IgKGxldCBbbmFtZSwgZmllbGRdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUZpZWxkcykpIHtcblx0XHRcdFx0dGFza1Jhdy5jdXN0b21GaWVsZHMgPSBbXG5cdFx0XHRcdFx0Li4uKHRhc2tSYXcuY3VzdG9tRmllbGRzID8/IFtdKSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZDogZmllbGQuZGVmaW5pdGlvbi5pZCxcblx0XHRcdFx0XHRcdHZhbHVlOiBkYXRhW25hbWVdID8/IGZpZWxkLnZhbHVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRhc2sgPSBjbGllbnQuVGFzay5mcm9tUmF3KHRhc2tSYXcpO1xuXG5cdFx0XHRpZiAoc3VwZXJUYXNrKSB7XG5cdFx0XHRcdHRhc2suc2V0U3VwZXJUYXNrKHN1cGVyVGFzayk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YlRhc2tUZW1wbGF0ZXMgPSAhdGVtcGxhdGVSYXcuc3ViVGFza0lkcz8ubGVuZ3RoXG5cdFx0XHRcdD8gW11cblx0XHRcdFx0OiBhd2FpdCBUYXNrVGVtcGxhdGVDbGllbnQuZnJvbUlkcyh0ZW1wbGF0ZVJhdy5zdWJUYXNrSWRzKTtcblxuXHRcdFx0Y29uc3QgY2xvbmVEYXRhID0ge1xuXHRcdFx0XHQuLi5kYXRhLFxuXHRcdFx0XHR0aXRsZVByZWZpeDogdGFza1Jhdy50aXRsZSxcblx0XHRcdH0gYXMgQ2xvbmVEYXRhO1xuXG5cdFx0XHR0aGlzLlRlbXBsYXRlRmllbGRzLmZvckVhY2goKGspID0+IGRlbGV0ZSBjbG9uZURhdGFba10pO1xuXHRcdFx0dGhpcy5MaXRlcmFsRmllbGRzLmZvckVhY2goKGspID0+IGRlbGV0ZSBjbG9uZURhdGFba10pO1xuXG5cdFx0XHRjb25zdCBzdWJUYXNrcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdFx0XHRzdWJUYXNrVGVtcGxhdGVzLm1hcCgocykgPT4gcy5jbG9uZShjbG9uZURhdGEsIHRhc2spKVxuXHRcdFx0KTtcblxuXHRcdFx0dGFzay5hZGRTdWJUYXNrcyhzdWJUYXNrcyk7XG5cblx0XHRcdHJldHVybiB0YXNrO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgQ3VzdG9tRmllbGRzTG9hZGVyOlxuXHRcdFx0fCBQcm9taXNlPFJlY29yZDxzdHJpbmcsIEN1c3RvbUZpZWxkVGVtcGxhdGU+IHwgbnVsbD5cblx0XHRcdHwgdW5kZWZpbmVkO1xuXHRcdC8vVE9ETzogY2FjaGUgdGhpcyByZXR1cm5cblx0XHRwcml2YXRlIGFzeW5jIGdldEN1c3RvbUZpZWxkcygpOiBQcm9taXNlPFJlY29yZDxcblx0XHRcdHN0cmluZyxcblx0XHRcdHsgdmFsdWU6IHN0cmluZzsgZGVmaW5pdGlvbjogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIH1cblx0XHQ+IHwgbnVsbD4ge1xuXHRcdFx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGN1c3RvbUZpZWxkcyB9ID0gdGhpcy5yYXcgPz8ge307XG5cblx0XHRcdFx0aWYgKCFjdXN0b21GaWVsZHMgfHwgY3VzdG9tRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5sb2coXCJHZXR0aW5nIEN1c3RvbSBGaWVsZHM6IFwiLCBjdXN0b21GaWVsZHMpO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGF3YWl0IGNsaWVudC5DdXN0b21GaWVsZC5mcm9tSWRzKFxuXHRcdFx0XHRcdGN1c3RvbUZpZWxkcy5tYXAoKGMpID0+IGMuaWQpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0cmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGFjYywgZmllbGQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IGN1c3RvbUZpZWxkcy5maW5kKFxuXHRcdFx0XHRcdFx0KGMpID0+IGMuaWQgPT09IGZpZWxkLmlkXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGlmIChmaWVsZC50eXBlICE9PSBcInN0cmluZ1wiIHx8ICFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFx0W2ZpZWxkLnRpdGxlXToge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogaW5zdGFuY2UudmFsdWUsXG5cdFx0XHRcdFx0XHRcdGRlZmluaXRpb246IGZpZWxkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LCB7fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLkN1c3RvbUZpZWxkc0xvYWRlciA9IHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyID8/IGxvYWRlcigpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5DdXN0b21GaWVsZHNMb2FkZXI7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCAqIGFzIGNzdiBmcm9tIFwiQGZhc3QtY3N2L3BhcnNlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0luc3RhbmNlIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcblxudHlwZSBDU1ZSb3cgPSB7IHRlbXBsYXRlOiBzdHJpbmcgfSAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgVmlkZW9CYXRjaFNhdmVDb25maWcgPSB7XG5cdHRlbXBsYXRlRm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlO1xuXHRsb2NhdGlvbkZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlIHtcblx0aW1wb3J0Q1NWOiAoXG5cdFx0ZmlsZTogRmlsZSxcblx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0KSA9PiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT47XG5cblx0c2F2ZTogKGNvbmZpZzogVmlkZW9CYXRjaFNhdmVDb25maWcpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIHtcblx0bmV3IChjb25maWc6IHsgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfSk6IFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZTtcblxuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0VGFza0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsoXG5cdFx0XHRsaW5rOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IGNsaWVudC5UYXNrLmZyb21QZXJtYUxpbmsobGluayk7XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VQcm9qZWN0VGFza0NsaWVudCh7IHRhc2sgfSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZTtcblx0XHRwcml2YXRlIHZpZGVvczogQ1NWUm93W10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKHsgdGFzayB9OiB7IHRhc2s6IFdyaWtlVGFza0luc3RhbmNlIH0pIHtcblx0XHRcdHRoaXMudGFzayA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhZGRWaWRlbyh2aWRlbzogQ1NWUm93KSB7XG5cdFx0XHR0aGlzLnZpZGVvcy5wdXNoKHZpZGVvKTtcblx0XHR9XG5cblx0XHRhc3luYyBpbXBvcnRDU1YoXG5cdFx0XHRmaWxlOiBGaWxlLFxuXHRcdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdFx0KTogUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3N2LnBhcnNlU3RyaW5nKHRleHQsIG9wdGlvbnMpXG5cdFx0XHRcdFx0Lm9uKFwiZXJyb3JcIiwgKGVycikgPT4gcmVqZWN0KGVycikpXG5cdFx0XHRcdFx0Lm9uKFwiZGF0YVwiLCAocm93OiBDU1ZSb3cpID0+IHRoaXMuYWRkVmlkZW8ocm93KSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKHsgdGVtcGxhdGVGb2xkZXIsIGxvY2F0aW9uRm9sZGVyIH06IFZpZGVvQmF0Y2hTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBWaWRlbyBCYXRjaDogXCIsIHRoaXMudmlkZW9zLmxlbmd0aCk7XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFByb21pc2U8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT5cblx0XHRcdD4oKTtcblx0XHRcdGNvbnN0IGZpbmRUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZUNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdHRlbXBsYXRlQ2FjaGUuc2V0KFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKG5hbWUsIHRlbXBsYXRlRm9sZGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVDYWNoZS5nZXQobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSBsb2NhdGlvbkZvbGRlcjtcblxuXHRcdFx0aWYgKCFmb2xkZXIpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gZm9sZGVyXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCB2aWRlbyBvZiB0aGlzLnZpZGVvcy5yZXZlcnNlKCkpIHtcblx0XHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLCAuLi5wcm9wZXJ0aWVzIH0gPSB2aWRlbztcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmaW5kVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuXHRcdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgdGVtcGxhdGU/LmNsb25lKHByb3BlcnRpZXMsIHRoaXMudGFzayk7XG5cblx0XHRcdFx0YXdhaXQgdGFzaz8uc2F2ZSh7IGZvbGRlciB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG59O1xuXG50eXBlIFdvcmtmbG93UmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c2VzOiBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlW107XG59O1xuXG50eXBlIFdvcmtmbG93UmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogV29ya2Zsb3dSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlV29ya0Zsb3dJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNlczogV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VXb3JrRmxvd0NsYXNzID0ge1xuXHRuZXcgKHJhdzogV29ya2Zsb3dSYXcpOiBXcmlrZVdvcmtGbG93SW5zdGFuY2U7XG5cblx0ZnJvbU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVdvcmtGbG93SW5zdGFuY2U+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdvcmtGbG93Q2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlV29ya0Zsb3dDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVdvcmtmbG93Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VXb3JrRmxvd0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbU5hbWUobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxXb3JrZmxvd1Jlc3BvbnNlPihcIndvcmtmbG93c1wiKTtcblx0XHRcdGNvbnN0IHJhdyA9IHJlc3AuZGF0YS5maW5kKChkKSA9PiBkLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0XHRpZiAoIXJhdykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXb3JrZmxvdyBub3QgZm91bmRcIik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VXb3JrZmxvd0NsaWVudChyYXcpO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBXb3JrZmxvd1Jhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IG5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcubmFtZTtcblx0XHR9XG5cdFx0Z2V0IGN1c3RvbVN0YXR1c2VzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmN1c3RvbVN0YXR1c2VzO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0QWN0aW9uRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRMaW5rc0Z1bmN0aW9uLFxuXHRyZWRpcmVjdCxcblx0dXNlRmV0Y2hlcixcblx0Rm9ybSxcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGZXRjaGVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvdHJhbnNpdGlvblwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgdHlwZSB7IEFjdHVhbEZpbGVPYmplY3QgfSBmcm9tIFwiZmlsZXBvbmRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBJbnB1dEJyZWFkQ3J1bWIgZnJvbSBcIn4vY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWJcIjtcbmltcG9ydCBPbk1vdW50IGZyb20gXCJ+L2NvbXBvbmVudHMvT25Nb3VudFwiO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbGVJbnB1dFwiO1xuXG5pbXBvcnQgdHlwZSB7IFNwYWNlc1Jlc3BvbnNlLCBTcGFjZSB9IGZyb20gXCIuL3NwYWNlc1wiO1xuaW1wb3J0IHR5cGUgeyBDbGllbnRSZXNwb25zZSwgQ2xpZW50IH0gZnJvbSBcIi4vY2xpZW50c1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogXCJodHRwczovL3VucGtnLmNvbS9maWxlcG9uZEBeNC9kaXN0L2ZpbGVwb25kLmNzc1wiLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3Qgd3Jpa2UgPSBhd2FpdCBXcmlrZUNsaWVudC5mb3JTZXNzaW9uKHJlcXVlc3QpO1xuXG5cdGNvbnN0IFVwbG9hZEhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHRcdGZpbHRlcjogKHsgbWltZXR5cGUgfSkgPT4gbWltZXR5cGUgPT09IFwidGV4dC9jc3ZcIixcblx0fSk7XG5cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKFxuXHRcdHJlcXVlc3QsXG5cdFx0VXBsb2FkSGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0LWZpbGVcIikgYXMgRmlsZTtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdGNvbnNvbGUubG9nKFwiR290IEZvcm0gRGF0YTogXCIsIHRleHQpO1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcblx0Y29uc3Qgc3BhY2VzID0gdXNlRmV0Y2hlcjxTcGFjZXNSZXNwb25zZT4oKTtcblx0Y29uc3QgbG9hZFNwYWNlcyA9IHVzZUZldGNoZXJMb2FkKHNwYWNlcywgXCIvcHJvamVjdHMvc3BhY2VzXCIpO1xuXHRjb25zdCBbc3BhY2UsIHNldFNwYWNlXSA9IHVzZVN0YXRlPFNwYWNlIHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgY2xpZW50cyA9IHVzZUZldGNoZXI8Q2xpZW50UmVzcG9uc2U+KCk7XG5cdGNvbnN0IGxvYWRDbGllbnRzID0gdXNlRmV0Y2hlckxvYWQoXG5cdFx0Y2xpZW50cyxcblx0XHRgL3Byb2plY3RzL2NsaWVudHM/c3BhY2VJZD0ke2VuY29kZVVSSUNvbXBvbmVudChzcGFjZT8uaWQgPz8gXCJcIil9YFxuXHQpO1xuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGU8Q2xpZW50IHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgeyBoYXNWYWx1ZTogaGFzUHJvamVjdE5hbWUsIHByb3BzOiBwcm9qZWN0TmFtZVByb3BzIH0gPVxuXHRcdHVzZUJ1ZmZlcmVkSW5wdXQoKTtcblxuXHRjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEFjdHVhbEZpbGVPYmplY3RbXSB8IHVuZGVmaW5lZD4oXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIk5ldyBQcm9qZWN0XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cblx0XHRcdFx0PElucHV0QnJlYWRDcnVtYj5cblx0XHRcdFx0XHQ8T25Nb3VudCBvbk1vdW50PXtsb2FkU3BhY2VzfT5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3NwYWNlPy5pZH0gbmFtZT1cInNwYWNlSWRcIiAvPlxuXHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgbykgPT4gc2V0U3BhY2Uobyl9XG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9e3NwYWNlcy5zdGF0ZSA9PT0gXCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3NwYWNlcy5kYXRhPy5zcGFjZXMgPz8gW119XG5cdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsobykgPT4gby50aXRsZX1cblx0XHRcdFx0XHRcdFx0aXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvLCB2KSA9PiBvLmlkID09PSB2LmlkfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wYXJhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNwYWNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Pbk1vdW50PlxuXHRcdFx0XHRcdHshc3BhY2UgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PE9uTW91bnQgb25Nb3VudD17bG9hZENsaWVudHN9PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2xpZW50Py5pZH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NsaWVudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG8pID0+IHNldENsaWVudChvKX1cblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtjbGllbnRzLnN0YXRlID09PSBcImxvYWRpbmdcIn1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtjbGllbnRzLmRhdGE/LmNsaWVudHMgPz8gW119XG5cdFx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhvKSA9PiBvLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdGlzT3B0aW9uRXF1YWxUb1ZhbHVlPXsobywgdikgPT4gby5pZCA9PT0gdi5pZH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucGFyYW1zfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNsaWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L09uTW91bnQ+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7IWNsaWVudCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0a2V5PVwicHJvamVjdFwiXG5cdFx0XHRcdFx0XHRcdGlucHV0UHJvcHM9e3Byb2plY3ROYW1lUHJvcHN9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFoYXNQcm9qZWN0TmFtZSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxGaWxlSW5wdXRcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicHJvamVjdC1maWxlXCJcblx0XHRcdFx0XHRcdFx0XHRzdG9yZUFzRmlsZVxuXHRcdFx0XHRcdFx0XHRcdGZpbGVzPXtmaWxlc31cblx0XHRcdFx0XHRcdFx0XHRvbnVwZGF0ZWZpbGVzPXsoaXRlbXMpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRGaWxlcyhpdGVtcy5tYXAoKGYpID0+IGYuZmlsZSkpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT09IDB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRDcmVhdGUgUHJvamVjdFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9JbnB1dEJyZWFkQ3J1bWI+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VGZXRjaGVyTG9hZChcblx0ZmV0Y2hlcjogeyBsb2FkOiAodXJsOiBzdHJpbmcpID0+IHZvaWQgfSAmIEZldGNoZXIsXG5cdHVybDogc3RyaW5nXG4pIHtcblx0cmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcblx0XHRpZiAoIWZldGNoZXIuZGF0YSAmJiBmZXRjaGVyLnN0YXRlID09PSBcImlkbGVcIikge1xuXHRcdFx0ZmV0Y2hlci5sb2FkKHVybCk7XG5cdFx0fVxuXHR9LCBbZmV0Y2hlciwgdXJsXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUJ1ZmZlcmVkSW5wdXQoKSB7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ+KCk7XG5cdGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPigpO1xuXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblx0Y29uc3QgW2hhc1ZhbHVlLCBzZXRIYXNWYWx1ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdHNldFZhbHVlKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlID8/IFwiXCIpO1xuXG5cdFx0aWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG5cdFx0fVxuXG5cdFx0dGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRIYXNWYWx1ZShCb29sZWFuKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlKSk7XG5cblx0XHRcdHRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XG5cdFx0fSwgNTAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG9uS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRzZXRIYXNWYWx1ZShCb29sZWFuKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlID8/IFwiXCIpKTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4ge1xuXHRcdGhhc1ZhbHVlLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHJlZjogaW5wdXRSZWYsXG5cdFx0XHRvbkNoYW5nZSxcblx0XHRcdG9uS2V5UHJlc3MsXG5cdFx0fSxcblx0fTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxudHlwZSBJbnB1dEJyZWFkQ3J1bWJQcm9wcyA9IHtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkKEdyaWQpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0QnJlYWRDcnVtYih7IGNoaWxkcmVuIH06IElucHV0QnJlYWRDcnVtYlByb3BzKSB7XG5cdGNvbnN0IGNtcHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuXHRjb25zdCBicmVhZGNydW1icyA9IGNtcHMuc2xpY2UoMCwgLTEpO1xuXHRjb25zdCBmb2N1c2VkID0gY21wc1tjbXBzLmxlbmd0aCAtIDFdO1xuXG5cdHJldHVybiAoXG5cdFx0PEdyaWRcblx0XHRcdGNvbnRhaW5lclxuXHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdHBhZGRpbmc9ezJ9XG5cdFx0XHRzeD17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxuXHRcdD5cblx0XHRcdHticmVhZGNydW1icy5tYXAoKGMsIGtleSkgPT4gKFxuXHRcdFx0XHQ8R3JpZEl0ZW0gaXRlbSB4cz17M30ga2V5PXtgYnJlYWRjcnVtYi0ke2tleX1gfT5cblx0XHRcdFx0XHR7Y31cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdCkpfVxuXHRcdFx0e2ZvY3VzZWQgPyAoXG5cdFx0XHRcdDxHcmlkSXRlbSBpdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0e2ZvY3VzZWR9XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQpIDogbnVsbH1cblx0XHQ8L0dyaWQ+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBGZXRjaGVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvdHJhbnNpdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEZldGNoT25Nb3VudFByb3BzID0ge1xuXHRvbk1vdW50OiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25Nb3VudCh7IG9uTW91bnQsIGNoaWxkcmVuIH06IEZldGNoT25Nb3VudFByb3BzKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0b25Nb3VudCgpO1xuXHR9LCBbb25Nb3VudF0pO1xuXG5cdHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgU3BhY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTcGFjZXNSZXNwb25zZSA9IHtcblx0c3BhY2VzOiBTcGFjZVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHR9XG5cblx0Y29uc3QgV3Jpa2UgPSBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkKTtcblx0Y29uc3Qgc3BhY2VzID0gYXdhaXQgV3Jpa2UuU3BhY2UuZ2V0QWxsKCk7XG5cblx0cmV0dXJuIGpzb24oe1xuXHRcdHNwYWNlczogc3BhY2VzLm1hcCgocykgPT4gKHsgaWQ6IHMuaWQsIHRpdGxlOiBzLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG5cdC8vTk9URTogdGhpcyBvYmplY3Qua2V5cyB0cmljayBvbmx5IHdvcmtzIGlmIHRoZSBlbnVtIGtleXMgYXJlIGV4YWN0IG1hdGNoZXMgZm9yIHRoZSB2YWx1ZXNcblx0aWYgKCFwYXJhbXMuc2VydmljZSB8fCAhT2JqZWN0LmtleXMoU2VydmljZSkuaW5jbHVkZXMocGFyYW1zLnNlcnZpY2UpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgU2VydmljZVwiKTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKFwiU2VydmljZTogXCIsIHBhcmFtcy5zZXJ2aWNlKTtcblxuXHRhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHBhcmFtcy5zZXJ2aWNlIGFzIFNlcnZpY2UsIHJlcXVlc3QsIHtcblx0XHRzdWNjZXNzOiBcIlwiLFxuXHRcdGZhaWx1cmU6IFwiXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge1xuXHRMb2FkZXJGdW5jdGlvbixcblx0QWN0aW9uRnVuY3Rpb24sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBVcGxvYWQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4geyB1c2VyOiB1c2VyLnVzZXJJZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHR9XG5cblx0Y29uc3QgVXBsb2FkZXJIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZGVySGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IGJhdGNoID0gYXdhaXQgV3Jpa2UuVmlkZW9CYXRjaC5mcm9tUGVybWFMaW5rKFxuXHRcdGZvcm1EYXRhLmdldChcImJhdGNoLXRhc2tcIikgYXMgc3RyaW5nXG5cdCk7XG5cblx0YXdhaXQgYmF0Y2guaW1wb3J0Q1NWKGZvcm1EYXRhLmdldChcImJhdGNoXCIpIGFzIEZpbGUsIHsgaGVhZGVyczogdHJ1ZSB9KTtcblxuXHRhd2FpdCBiYXRjaC5zYXZlKHtcblx0XHR0ZW1wbGF0ZUZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJ0ZW1wbGF0ZS1mb2xkZXJcIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0XHRsb2NhdGlvbkZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmdcblx0XHQpLFxuXHR9KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvQmF0Y2goKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJVcGxvYWQgYSB2aWRlbyBiYXRjaCBDU1YgZmlsZTpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJ0ZW1wbGF0ZS1mb2xkZXJcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUZW1wbGF0ZSBGb2xkZXIgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJiYXRjaC10YXNrXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiQmF0Y2ggVGFzayAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cImxvY2F0aW9uXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiYmF0Y2hcIiAvPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFVwbG9hZFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbnR5cGUgQ29ubmVjdExvYWRlckRhdGEgPSB7XG5cdGhhc1dyaWtlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPENvbm5lY3RMb2FkZXJEYXRhPiA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHRyZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuKGF3YWl0IHVzZXI/Lmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3QoKSB7XG5cdGNvbnN0IHsgaGFzV3Jpa2VDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPENvbm5lY3RMb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJDb25uZWN0IHlvdXIgYWNjb3VudHM6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC93cmlrZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxBZGRJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzV3Jpa2VDcmVkXG5cdFx0XHRcdFx0XHRcdD8gXCJDb25uZWN0ZWQgdG8gV3Jpa2VcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiQ29ubmVjdCB0byBXcmlrZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7IHVzZXI6IHVzZXIudXNlcklkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlZpZGVvIFRvb2xpbmc6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9wcm9qZWN0cy9jcmVhdGVcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5OZXcgUHJvamVjdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3ZpZGVvLWJhdGNoXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+VmlkZW8gQmF0Y2g8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz1cInRhc2tzL2Fzc2V0LWludmVudG9yeVwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkFzc2V0IEludmVudG9yeTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IEdvb2dsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR29vZ2xlXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbnR5cGUgTG9naW5Mb2FkZXJEYXRhID0ge1xuXHRoYXNHb29nbGVDcmVkOiBCb29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuXHRyZXF1ZXN0LFxufSk6IFByb21pc2U8TG9naW5Mb2FkZXJEYXRhPiA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRjb25zdCBoYXNHb29nbGVDcmVkID0gdXNlclxuXHRcdD8gYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLmdvb2dsZSlcblx0XHQ6IGZhbHNlO1xuXG5cdGlmIChoYXNHb29nbGVDcmVkKSB7XG5cdFx0cmVkaXJlY3QoXCIvXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoYXNHb29nbGVDcmVkLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG5cdGNvbnN0IHsgaGFzR29vZ2xlQ3JlZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2dpbkxvYWRlckRhdGE+KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlNpZ24gaW4gdG8geW91ciBOZXh0VGhvdWdodCBhY2NvdW50OlwiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEZvcm0gYWN0aW9uPVwiL2F1dGgvZ29vZ2xlXCIgbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0YXJ0SWNvbj17PEdvb2dsZUljb24gLz59XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtoYXNHb29nbGVDcmVkXG5cdFx0XHRcdFx0XHRcdD8gXCJTaWduZWQgSW4gVG8gR29vZ2xlXCJcblx0XHRcdFx0XHRcdFx0OiBcIlNpZ24gSW4gVG8gR29vZ2xlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2RmOWRkZGUwJywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LUNBTVFPU1IzLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVQ2RkdOS1ZKLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1XRTIzNFM0Ry5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRlZTRTZQNkYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3Jvb3QtSVA1VVY3UE0uanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTEdaUTZJN0suanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU9LQ1dBWVYyLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1RQjdaNDVKUS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstT0VHV0Q2VVkuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVY1TElaVkNWLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DU1BVWE5JWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNUVWT0RRQ1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHNlcnZpY2UnOnsnaWQnOidyb3V0ZXMvYXV0aC8kc2VydmljZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpzZXJ2aWNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvYXV0aC8kc2VydmljZS1ZU1dYSjRERC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZS9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2stWkpXQVZJNkYuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Nvbm5lY3QnOnsnaWQnOidyb3V0ZXMvY29ubmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb25uZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvY29ubmVjdC1HTVNKQllVSC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay02UUw0Q0dENS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstWlJZWURPUDcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2luZGV4LUlQVTZNR1ROLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVpSWVlET1A3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2xvZ2luLVBKTFdKUUdULmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTZRTDRDR0Q1LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1aUllZRE9QNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2plY3RzL2NsaWVudHMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY2xpZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jbGllbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy1DRlFVWVhYVi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS1BVFVaV000Mi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TNkVCRUlZVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstWlJZWURPUDcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU5KTVQ3UjZLLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1SRDU0SUpMVS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL3NwYWNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL3NwYWNlcy1IUUdaUERVTC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUkQ1NElKTFUuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBOTVVJRUgyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeSc6eydpZCc6J3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondGFza3MvYXNzZXQtaW52ZW50b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LTMzR1RPT0E3LmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVM2RUJFSVlVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1aUllZRE9QNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NVUlFSDIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdmlkZW8tYmF0Y2gnOnsnaWQnOidyb3V0ZXMvdmlkZW8tYmF0Y2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondmlkZW8tYmF0Y2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy92aWRlby1iYXRjaC1QSjdKVTVQSS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1aUllZRE9QNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJENTRJSkxVLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1VSUVIMi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9fc3RhdGljL2J1aWxkL21hbmlmZXN0LURGOUREREUwLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
