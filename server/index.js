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

// route:/Users/andrew.ligon/video-client/app/routes/projects/clients.tsx
var clients_exports = {};
__export(clients_exports, {
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());

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
      const load = async () => {
        if (!this.parentIds || this.parentIds.length === 0) {
          throw new Error("Unable to get parent");
        }
        const resp = await client.Folder.fromIDs([this.parentIds[0]]);
        return resp[0];
      };
      this.parentFolder = this.parentFolder ?? load();
      return this.parentFolder;
    }
    async getChildFolders() {
      const load = () => {
        if (!this.childIds) {
          throw new Error("Unable to get sub folders");
        }
        return client.Folder.fromIDs(this.childIds);
      };
      this.childFolders = this.childFolders ?? load();
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
  return (0, import_remix5.json)({
    clients: folders.map((f) => ({ id: f.id, title: f.title }))
  });
};

// route:/Users/andrew.ligon/video-client/app/routes/projects/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action,
  default: () => Project,
  links: () => links,
  loader: () => loader3
});
init_react();
var import_react4 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var import_Autocomplete = __toModule(require("@mui/material/Autocomplete"));
var import_Button = __toModule(require("@mui/material/Button"));
var import_Stack = __toModule(require("@mui/material/Stack"));
var import_TextField = __toModule(require("@mui/material/TextField"));

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

// app/components/InputBreadCrumb.tsx
init_react();
var import_react2 = __toModule(require("react"));
var import_Grid = __toModule(require("@mui/material/Grid"));
var import_styled = __toModule(require("@emotion/styled"));
var GridItem = (0, import_styled.default)(import_Grid.default)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
function InputBreadCrumb({ children }) {
  const cmps = import_react2.default.Children.toArray(children);
  const breadcrumbs = cmps.slice(0, -1);
  const focused = cmps[cmps.length - 1];
  return /* @__PURE__ */ import_react2.default.createElement(import_Grid.default, {
    container: true,
    spacing: 2,
    padding: 2,
    sx: { justifyContent: "center" }
  }, breadcrumbs.map((c, key) => /* @__PURE__ */ import_react2.default.createElement(GridItem, {
    item: true,
    xs: 3,
    key: `breadcrumb-${key}`
  }, c)), focused ? /* @__PURE__ */ import_react2.default.createElement(GridItem, {
    item: true,
    xs: 12
  }, focused) : null);
}

// app/components/OnMount.tsx
init_react();
var import_react3 = __toModule(require("react"));
function OnMount({ onMount, children }) {
  (0, import_react3.useEffect)(() => {
    onMount();
  }, [onMount]);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}

// app/components/FileInput.tsx
init_react();
var import_react_filepond = __toModule(require("react-filepond"));
var import_styled2 = __toModule(require("@emotion/styled"));
var FileInput_default = (0, import_styled2.default)(import_react_filepond.FilePond)`
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

// route:/Users/andrew.ligon/video-client/app/routes/projects/create.tsx
var loader3 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix6.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix6.redirect)("/connect");
  }
  return null;
};
var links = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/filepond@^4/dist/filepond.css"
  }
];
var action = async ({ request }) => {
  const wrike = await WrikeClient.forSession(request);
  const UploadHandler = (0, import_remix6.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix6.unstable_parseMultipartFormData)(request, UploadHandler);
  const file = formData.get("project-file");
  const text = await file.text();
  console.log("Got Form Data: ", text);
  return null;
};
function Project() {
  var _a, _b;
  const spaces = (0, import_remix6.useFetcher)();
  const loadSpaces = useFetcherLoad(spaces, "/projects/spaces");
  const [space, setSpace] = (0, import_react4.useState)(null);
  const clients = (0, import_remix6.useFetcher)();
  const loadClients = useFetcherLoad(clients, `/projects/clients?spaceId=${encodeURIComponent((space == null ? void 0 : space.id) ?? "")}`);
  const [client, setClient] = (0, import_react4.useState)(null);
  const { hasValue: hasProjectName, props: projectNameProps } = useBufferedInput();
  const [files, setFiles] = (0, import_react4.useState)(void 0);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "New Project"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
  }), !hasProjectName ? null : /* @__PURE__ */ React.createElement(import_Stack.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(FileInput_default, {
    name: "project-file",
    storeAsFile: true,
    files,
    onupdatefiles: (items) => setFiles(items.map((f) => f.file))
  }), /* @__PURE__ */ React.createElement(import_Button.default, {
    variant: "contained",
    type: "submit",
    disabled: !files || files.length === 0
  }, "Create Project")))));
}
function useFetcherLoad(fetcher, url) {
  return (0, import_react4.useCallback)(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load(url);
    }
  }, [fetcher, url]);
}
function useBufferedInput() {
  const inputRef = (0, import_react4.useRef)();
  const timeoutRef = (0, import_react4.useRef)();
  const [value, setValue] = (0, import_react4.useState)("");
  const [hasValue, setHasValue] = (0, import_react4.useState)(false);
  const onChange = (0, import_react4.useCallback)((e) => {
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
  const onKeyPress = (0, import_react4.useCallback)((e) => {
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
var import_remix7 = __toModule(require_remix());
var loader4 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const Wrike = new WrikeClient(wrikeCred);
  const spaces = await Wrike.Space.getAll();
  return (0, import_remix7.json)({
    spaces: spaces.map((s) => ({ id: s.id, title: s.title }))
  });
};

// route:/Users/andrew.ligon/video-client/app/routes/auth/$service.tsx
var service_exports = {};
__export(service_exports, {
  action: () => action2,
  loader: () => loader5
});
init_react();
var import_remix8 = __toModule(require_remix());
var loader5 = () => (0, import_remix8.redirect)("/login");
var action2 = async ({ request, params }) => {
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
  action: () => action3,
  default: () => VideoBatch,
  loader: () => loader6
});
init_react();
var import_remix9 = __toModule(require_remix());
var import_remix10 = __toModule(require_remix());
var import_Button2 = __toModule(require("@mui/material/Button"));
var import_Stack2 = __toModule(require("@mui/material/Stack"));
var import_TextField2 = __toModule(require("@mui/material/TextField"));
var loader6 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix10.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix10.redirect)("/connect");
  }
  return { user: user.userId };
};
var action3 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const UploaderHandler = (0, import_remix9.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix9.unstable_parseMultipartFormData)(request, UploaderHandler);
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
  }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement(import_Stack2.default, {
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
  }), /* @__PURE__ */ React.createElement(import_Button2.default, {
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
var import_remix11 = __toModule(require_remix());
var import_Button3 = __toModule(require("@mui/material/Button"));
var import_Stack3 = __toModule(require("@mui/material/Stack"));
var import_Add = __toModule(require("@mui/icons-material/Add"));
var loader7 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  if (!user) {
    (0, import_remix11.redirect)("/login");
  }
  return {
    hasWrikeCred: Boolean(await (user == null ? void 0 : user.hasCredentials(Service.wrike)))
  };
};
function Connect() {
  const { hasWrikeCred } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Connect your accounts:"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
    action: "/auth/wrike",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button3.default, {
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
var import_remix12 = __toModule(require_remix());
var import_Button4 = __toModule(require("@mui/material/Button"));
var import_Stack4 = __toModule(require("@mui/material/Stack"));
var loader8 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix12.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix12.redirect)("/connect");
  }
  return { user: user.userId };
};
function Index() {
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Video Tooling:"
  }, /* @__PURE__ */ React.createElement(import_Stack4.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: "/projects/create"
  }, /* @__PURE__ */ React.createElement(import_Button4.default, {
    variant: "contained"
  }, "New Project")), /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: "/video-batch"
  }, /* @__PURE__ */ React.createElement(import_Button4.default, {
    variant: "contained"
  }, "Video Batch"))));
}

// route:/Users/andrew.ligon/video-client/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader9
});
init_react();
var import_remix13 = __toModule(require_remix());
var import_Button5 = __toModule(require("@mui/material/Button"));
var import_Stack5 = __toModule(require("@mui/material/Stack"));
var import_Google = __toModule(require("@mui/icons-material/Google"));
var loader9 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  const hasGoogleCred = user ? await user.hasCredentials(Service.google) : false;
  if (hasGoogleCred) {
    (0, import_remix13.redirect)("/");
  }
  return {
    hasGoogleCred
  };
};
function Login() {
  const { hasGoogleCred } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Sign in to your NextThought account:"
  }, /* @__PURE__ */ React.createElement(import_Stack5.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix13.Form, {
    action: "/auth/google",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    startIcon: /* @__PURE__ */ React.createElement(import_Google.default, null),
    variant: "contained",
    type: "submit"
  }, hasGoogleCred ? "Signed In To Google" : "Sign In To Google"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "dd8f4b08", "entry": { "module": "/_static/build/entry.client-M7C5SJYM.js", "imports": ["/_static/build/_shared/chunk-T6FGNKVJ.js", "/_static/build/_shared/chunk-HK3PL2YJ.js", "/_static/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-AXGSMKWK.js", "imports": ["/_static/build/_shared/chunk-M2O4N4IF.js", "/_static/build/_shared/chunk-WZ5O2YNX.js", "/_static/build/_shared/chunk-TGGX4HRV.js", "/_static/build/_shared/chunk-PVDDTNDA.js", "/_static/build/_shared/chunk-EDX2RRU6.js", "/_static/build/_shared/chunk-ECADX2LK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-U6KPZUOI.js", "imports": ["/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-VUVALG6S.js", "imports": ["/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-57PYVEYN.js", "imports": ["/_static/build/_shared/chunk-W236MNV7.js", "/_static/build/_shared/chunk-FOZTFPB3.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-2NFHPRAR.js", "imports": ["/_static/build/_shared/chunk-FOZTFPB3.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-RI43K3X3.js", "imports": ["/_static/build/_shared/chunk-W236MNV7.js", "/_static/build/_shared/chunk-FOZTFPB3.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-QZDJ2DAC.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-A2YKCBWM.js", "imports": ["/_static/build/_shared/chunk-FOZTFPB3.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-6AELYMP4.js", "imports": ["/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-EE3SXEFF.js", "imports": ["/_static/build/_shared/chunk-FOZTFPB3.js", "/_static/build/_shared/chunk-NJMT7R6K.js", "/_static/build/_shared/chunk-AJ2CYPUE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-DD8F4B08.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLnRzeCIsICIuLi9hcHAvYXBpL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvYXV0aC1zdHJhdGVnaWVzL1dyaWtlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9Vc2VyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9CYXNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2RhdGFiYXNlL1RhYmxlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy50c3giLCAiLi4vYXBwL2FwaS93cmlrZS9DbGllbnQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ3VzdG9tRmllbGQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvRm9sZGVyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Byb2plY3Quc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvU3BhY2Uuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFzay5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9UYXNrVGVtcGxhdGUuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVmlkZW9CYXRjaFRhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvV29ya2Zsb3cuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbGVJbnB1dC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9jbGllbnRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jbGllbnRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2plY3RzL2NsaWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2plY3RzL2NyZWF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvc3BhY2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvc3BhY2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnNlcnZpY2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3ZpZGVvLWJhdGNoXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy92aWRlby1iYXRjaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ2aWRlby1iYXRjaFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29ubmVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29ubmVjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb25uZWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLmdvb2dsZVxuXHQpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9TRUNSRVQpIHtcblx0YXV0aC51c2UoXG5cdFx0bmV3IFdyaWtlU3RyYXRlZ3koXG5cdFx0XHR7XG5cdFx0XHRcdGNsaWVudElEOiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL2F1dGgvd3Jpa2UvY2FsbGJhY2tcIixcblx0XHRcdFx0c2NvcGU6IFwiRGVmYXVsdCx3c1JlYWRXcml0ZVwiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLndyaWtlXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cblx0aWYgKCF1c2VySWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBVc2VyLmdldEZvcklkKHVzZXJJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChcblx0c2VydmljZTogU2VydmljZSxcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVkaXJlY3RzOiB7IHN1Y2Nlc3M6IHN0cmluZzsgZmFpbHVyZTogc3RyaW5nIH1cbikgPT4ge1xuXHRjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUgfSA9IGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFxuXHRcdHNlcnZpY2UsXG5cdFx0cmVxdWVzdFxuXHQpO1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihcblx0XHRyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG5cdCk7XG5cblx0Y29uc29sZS5sb2cocHJvZmlsZSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoIXByb2ZpbGUuaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTk8gSUQ/IT8hOiBcIiwgcHJvZmlsZSk7XG5cdFx0XHR0aHJvdyBcIndoYXRcIjtcblx0XHR9XG5cblx0XHRsZXQgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRcdGlmICghY3VycmVudFVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2V0dGluZyBDdXJyZW50IFVzZXI6IFwiLCBwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblx0XHRcdGN1cnJlbnRVc2VyID0gYXdhaXQgVXNlci5nZXRGb3JPYXV0aChwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHVzZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHNldENhY2hlZChjdXJyZW50VXNlcikpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGN1cnJlbnRVc2VyLnNldENyZWRlbnRpYWxzKHNlcnZpY2UsIHtcblx0XHRcdGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcblx0XHRcdHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLmZhaWx1cmUpO1xuXHR9XG5cblx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLnN1Y2Nlc3MsIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJhdGVneVZlcmlmeUNhbGxiYWNrIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB0eXBlIHtcblx0T0F1dGgyUHJvZmlsZSxcblx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXMsXG59IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneU9wdGlvbnMgPSB7XG5cdGNsaWVudElEOiBzdHJpbmc7XG5cdGNsaWVudFNlY3JldDogc3RyaW5nO1xuXHRjYWxsYmFja1VSTDogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcyA9IHtcblx0c2NvcGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvZmlsZSA9IHtcblx0aWQ6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdF9qc29uOiB7XG5cdFx0a2luZHM6IHN0cmluZztcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBzdHJpbmc7XG5cdFx0XHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdFx0XHRsYXN0TmFtZTogc3RyaW5nO1xuXHRcdFx0fVxuXHRcdF07XG5cdH07XG5cdHByb3ZpZGVyOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VTdHJhdGVneTxVc2VyPiBleHRlbmRzIE9BdXRoMlN0cmF0ZWd5PFxuXHRVc2VyLFxuXHRXcmlrZVByb2ZpbGUsXG5cdFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtc1xuPiB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdXNlckluZm9VUkwgPVxuXHRcdFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9jb250YWN0cz9tZT10cnVlXCI7XG5cdHByaXZhdGUgc2NvcGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zOiBXcmlrZVN0cmF0ZWd5T3B0aW9ucyxcblx0XHR2ZXJpZnk6IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2s8XG5cdFx0XHRVc2VyLFxuXHRcdFx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXM8V3Jpa2VQcm9maWxlLCBXcmlrZVN0cmF0ZWd5RXh0cmFQYXJhbXM+XG5cdFx0PlxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHtcblx0XHRcdFx0YXV0aG9yaXphdGlvblVSTDogXCJodHRwczovL2xvZ2luLndyaWtlLmNvbS9vYXV0aDIvYXV0aG9yaXplL3Y0XCIsXG5cdFx0XHRcdHRva2VuVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi90b2tlblwiLFxuXHRcdFx0XHRjbGllbnRJRDogb3B0aW9ucy5jbGllbnRJRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IG9wdGlvbnMuY2FsbGJhY2tVUkwsXG5cdFx0XHR9LFxuXHRcdFx0dmVyaWZ5XG5cdFx0KTtcblxuXHRcdHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGF1dGhvcml6YXRpb25QYXJhbXMoKTogVVJMU2VhcmNoUGFyYW1zIHtcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRpZiAodGhpcy5zY29wZSkge1xuXHRcdFx0cGFyYW1zLnNldChcInNjb3BlXCIsIHRoaXMuc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgdXNlclByb2ZpbGUoYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8V3Jpa2VQcm9maWxlPiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVzZXJJbmZvVVJMLCB7XG5cdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBwYXlsb2FkOiBXcmlrZVByb2ZpbGVbXCJfanNvblwiXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhWzBdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBkYXRhLmlkLFxuXHRcdFx0Zmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuXHRcdFx0X2pzb246IHBheWxvYWQsXG5cdFx0XHRwcm92aWRlcjogXCJ3cmlrZVwiLFxuXHRcdH07XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcbmltcG9ydCBDcmVkZW50aWFsLCB7IFNlcnZpY2UsIFRva2VucyB9IGZyb20gXCIuL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmNvbnN0IEV4aXN0aW5nID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgY29uc3Qgc2V0Q2FjaGVkID0gKHVzZXI6IFVzZXIpID0+IChcblx0RXhpc3Rpbmcuc2V0KHVzZXIudXNlcklkLCB1c2VyKSwgdXNlci51c2VySWRcbik7XG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVkID0gKHVzZXJJZDogc3RyaW5nKSA9PiBFeGlzdGluZy5nZXQodXNlcklkKTtcblxuY2xhc3MgT2F1dGhJZCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJPYXV0aElkc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHRwcm9maWxlSWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5uYXRpdmVFbnVtKFNlcnZpY2UpLFxuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhYmxlLnB1dCh7IHByb2ZpbGVJZCwgc2VydmljZSwgdXNlcklkOiB1dWlkKCkgfSk7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBPYXV0aElkLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHByb2ZpbGVJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5wcm9maWxlSWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdHN0YXRpYyBhc3luYyBnZXRGb3JPYXV0aChwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IG9hdXRoSWQgPSBhd2FpdCBPYXV0aElkLmZpbmRPckNyZWF0ZShwcm9maWxlSWQsIHNlcnZpY2UpO1xuXG5cdFx0aWYgKCFvYXV0aElkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIob2F1dGhJZC51c2VySWQpO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEZvcklkKHVzZXJJZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBVc2VyKHVzZXJJZCk7XG5cdH1cblxuXHR1c2VySWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGNyZWRlbnRpYWxzOiBNYXA8U2VydmljZSwgQ3JlZGVudGlhbD47XG5cblx0Y29uc3RydWN0b3IodXNlcklkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSwgdG9rZW5zOiBUb2tlbnMpIHtcblx0XHRyZXR1cm4gQ3JlZGVudGlhbC5hZGRPclVwZGF0ZSh0aGlzLnVzZXJJZCwgc2VydmljZSwgdG9rZW5zKTtcblx0fVxuXG5cdGFzeW5jIGdldENyZWRlbnRpYWxzKHNlcnZpY2U6IFNlcnZpY2UpIHtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMuaGFzKHNlcnZpY2UpKSB7XG5cdFx0XHRjb25zdCBjcmVkID0gYXdhaXQgQ3JlZGVudGlhbC5nZXRDcmVkZW50aWFsKHRoaXMudXNlcklkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKGNyZWQpIHtcblx0XHRcdFx0dGhpcy5jcmVkZW50aWFscy5zZXQoc2VydmljZSwgY3JlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KHNlcnZpY2UpO1xuXHR9XG5cblx0YXN5bmMgaGFzQ3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IGNyZWQgPSBhd2FpdCB0aGlzLmdldENyZWRlbnRpYWxzKHNlcnZpY2UpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oY3JlZCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vZGF0YWJhc2UvVGFibGUuc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbCB7XG5cdHN0YXRpYyBUYWJsZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRzdGF0aWMgU2NoZW1hID0gei5vYmplY3Qoe30pO1xuXG5cdHN0YXRpYyBnZXRUYWJsZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KHRoaXM6IFQpIHtcblx0XHRyZXR1cm4gbmV3IFRhYmxlPEluc3RhbmNlVHlwZTxUPj4odGhpcy5UYWJsZU5hbWUsICguLi5hcmdzKSA9PlxuXHRcdFx0dGhpcy5jcmVhdGUoLi4uYXJncylcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KFxuXHRcdHRoaXM6IFQsXG5cdFx0cmF3OiBvYmplY3Rcblx0KSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzKHJhdykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHR9XG5cblx0ZGF0YTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJhdzogb2JqZWN0KSB7XG5cdFx0dGhpcy5kYXRhID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEJhc2VNb2RlbCkuU2NoZW1hLnBhcnNlKHJhdyk7XG5cdH1cbn1cbiIsICJpbXBvcnQgYXJjIGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgQXJjVGFibGUgfSBmcm9tIFwiQGFyY2hpdGVjdC9mdW5jdGlvbnMvdGFibGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlPFQ+IHtcblx0cHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuXHRwcml2YXRlIHRhYmxlOiBBcmNUYWJsZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQ7XG5cblx0Y29uc3RydWN0b3IodGFibGVOYW1lOiBzdHJpbmcgfCBudWxsLCBwYXJzZTogKHJhdzogb2JqZWN0KSA9PiBUKSB7XG5cdFx0aWYgKCF0YWJsZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRhYmxlIG11c3QgYmUgZ2l2ZW4gYSB0YWJsZSBuYW1lLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLnRhYmxlTmFtZSA9IHRhYmxlTmFtZTtcblx0XHR0aGlzLnBhcnNlID0gcGFyc2U7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJsZU5hbWU7XG5cdH1cblxuXHRhc3luYyBzZXR1cFRhYmxlKCkge1xuXHRcdGlmICghdGhpcy50YWJsZSkge1xuXHRcdFx0Y29uc3QgdGFibGVzID0gYXdhaXQgYXJjLnRhYmxlcygpO1xuXG5cdFx0XHR0aGlzLnRhYmxlID0gdGFibGVzW3RoaXMudGFibGVOYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50YWJsZTtcblx0fVxuXG5cdGFzeW5jIGdldChrZXk6IGFueSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0cmV0dXJuIHJlc3AgPyB0aGlzLnBhcnNlKHJlc3ApIDogbnVsbDtcblx0fVxuXG5cdGFzeW5jIHB1dChkYXRhOiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCB0YWJsZS5wdXQoZGF0YSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKHF1ZXJ5OiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXG5cdFx0YXdhaXQgdGFibGUudXBkYXRlKHF1ZXJ5KTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zID0ge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRyZWZyZXNoVG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuXHRnb29nbGUgPSBcImdvb2dsZVwiLFxuXHR3cmlrZSA9IFwid3Jpa2VcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZGVudGlhbCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJDcmVkZW50aWFsc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHR1c2VySWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5lbnVtKFtcImdvb2dsZVwiLCBcIndyaWtlXCJdKSxcblx0XHRhY2Nlc3NUb2tlbjogei5zdHJpbmcoKSxcblx0XHQvLyByZWZyZXNoVG9rZW46IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGFkZE9yVXBkYXRlKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGtleSA9IHsgdXNlcklkLCBzZXJ2aWNlIH07XG5cdFx0Y29uc29sZS5sb2coXCJhZGRpbmcgY3JlZGVudGlhbDogXCIsIGtleSk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoa2V5KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0YXdhaXQgdGFibGUudXBkYXRlKHtcblx0XHRcdFx0S2V5OiBrZXksXG5cdFx0XHRcdFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIGFjY2Vzc1Rva2VuID0gOmFjY2Vzc1Rva2VuXCIsXG5cdFx0XHRcdEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcblx0XHRcdFx0XHRcIjphY2Nlc3NUb2tlblwiOiB0b2tlbnMuYWNjZXNzVG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgdGFibGUucHV0KHtcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHRzZXJ2aWNlLFxuXHRcdFx0XHQuLi50b2tlbnMsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Q3JlZGVudGlhbCh1c2VySWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgdXNlcklkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0cmV0dXJuIGV4aXN0aW5nO1xuXHR9XG5cblx0ZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlZGVudGlhbC5TY2hlbWE+IHwgdW5kZWZpbmVkO1xuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgc2VydmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5zZXJ2aWNlID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgYWNjZXNzVG9rZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uYWNjZXNzVG9rZW4gPz8gXCJcIjtcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcblx0Y29va2llOiB7XG5cdFx0bmFtZTogXCJudGkuc2Vzc2lvblwiLFxuXHRcdHNhbWVTaXRlOiBcImxheFwiLFxuXHRcdHBhdGg6IFwiL1wiLFxuXHRcdHNlY3JldHM6IFtcIk4zeHRUaDB1Z2h0ISFDXCJdLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudCA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENsaWVudFJlc3BvbnNlID0ge1xuXHRjbGllbnRzOiBDbGllbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuXG5cdGNvbnN0IHNwYWNlSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNwYWNlSWRcIik7XG5cdGNvbnN0IFdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRpZiAoIXNwYWNlSWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJNdXN0IGhhdmUgYSBzcGFjZUlkXCIsIHsgc3RhdHVzOiA0MjIgfSk7XG5cdH1cblxuXHRjb25zdCBmb2xkZXJzID0gYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21TcGFjZShzcGFjZUlkLCB7IHByb2plY3Q6IGZhbHNlIH0pO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRjbGllbnRzOiBmb2xkZXJzLm1hcCgoZikgPT4gKHsgaWQ6IGYuaWQsIHRpdGxlOiBmLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIENyZWRlbnRpYWwgZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwiLi4vYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXJDbGFzcyB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VQcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9Qcm9qZWN0LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0NsYXNzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuXG5jb25zdCBCYXNlVVJMID0gXCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L1wiO1xuXG50eXBlIEZldGNoQ29uZmlnID0ge1xuXHRtZXRob2Q6IHN0cmluZztcblx0aGVhZGVyczoge1xuXHRcdEF1dGhvcml6YXRpb246IHN0cmluZztcblx0XHRcIkNvbnRlbnQtVHlwZVwiPzogc3RyaW5nO1xuXHR9O1xuXHRib2R5Pzogc3RyaW5nO1xuXHRzaWduYWw/OiBBYm9ydFNpZ25hbDtcbn07XG5cbmNvbnN0IGVuY29kZVZhbHVlID0gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gYFske3ZhbHVlLm1hcCgoaSkgPT4gYFwiJHtlbmNvZGVWYWx1ZShpKX1cImApLmpvaW4oXCIsXCIpfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VDbGllbnQge1xuXHRzdGF0aWMgYXN5bmMgZm9yU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRcdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdFx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkLCB1c2VyPy51c2VySWQpO1xuXHR9XG5cblx0Q3VzdG9tRmllbGQ6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcztcblx0Rm9sZGVyOiBXcmlrZUZvbGRlckNsYXNzO1xuXHRQcm9qZWN0OiBXcmlrZVByb2plY3RDbGFzcztcblx0U3BhY2U6IFdyaWtlU3BhY2VDbGFzcztcblx0VGFzazogV3Jpa2VUYXNrQ2xhc3M7XG5cdFRhc2tUZW1wbGF0ZTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcztcblx0VmlkZW9CYXRjaDogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzO1xuXHRXb3JrZmxvdzogV3Jpa2VXb3JrRmxvd0NsYXNzO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY3JlZGVudGlhbHM6IENyZWRlbnRpYWwsXG5cdFx0cHVibGljIHVzZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkXG5cdCkge1xuXHRcdHRoaXMuQ3VzdG9tRmllbGQgPSBjcmVhdGVDdXN0b21GaWVsZENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuRm9sZGVyID0gY3JlYXRlRm9sZGVyQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Qcm9qZWN0ID0gY3JlYXRlUHJvamVjdENsYXNzKHRoaXMpO1xuXHRcdHRoaXMuU3BhY2UgPSBjcmVhdGVTcGFjZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVGFzayA9IGNyZWF0ZVRhc2tDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2tUZW1wbGF0ZSA9IGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVmlkZW9CYXRjaCA9IGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Xb3JrZmxvdyA9IGNyZWF0ZVdvcmtGbG93Q2xhc3ModGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGZldGNoPFQgPSB7fT4oXG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0bWV0aG9kOiBzdHJpbmcsXG5cdFx0ZGF0YT86IG9iamVjdFxuXHQpOiBQcm9taXNlPFQ+IHtcblx0XHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdGNvbnN0IGNvbmZpZzogRmV0Y2hDb25maWcgPSB7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNyZWRlbnRpYWxzLmFjY2Vzc1Rva2VufWAsXG5cdFx0XHR9LFxuXHRcdFx0c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcblx0XHR9O1xuXG5cdFx0aWYgKGRhdGEgJiYgY29uZmlnLmhlYWRlcnMpIHtcblx0XHRcdGNvbmZpZy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID1cblx0XHRcdFx0XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcblx0XHR9XG5cblx0XHRpZiAoZGF0YSkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG5cdFx0XHRPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdFx0cGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbmZpZy5ib2R5ID0gcGFyYW1zLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coXCJXUklLRSBSZXF1ZXN0OiBcIiwgdXJsLCBtZXRob2QsIGNvbmZpZy5ib2R5LCBkYXRhKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCAxMDAwMCk7XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKTtcblx0XHRjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJHb3QgV1JJS0UgUmVzcG9uc2U6IFwiLCBqc29uKTtcblxuXHRcdGlmIChqc29uLmVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoanNvbi5lcnJvckRlc2NyaXB0aW9uKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbiBhcyBUO1xuXHR9XG5cblx0Z2V0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgcGFyYW1zOiBvYmplY3QgPSB7fSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7QmFzZVVSTH0ke3BhdGh9YCk7XG5cblx0XHRPYmplY3QuZW50cmllcyhwYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT5cblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgZW5jb2RlVmFsdWUodmFsdWUpKVxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPih1cmwudG9TdHJpbmcoKSwgXCJHRVRcIik7XG5cdH1cblxuXHRwb3N0PFQgPSB7fT4ocGF0aDogc3RyaW5nID0gXCJcIiwgZGF0YTogb2JqZWN0ID0ge30pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaDxUPihgJHtCYXNlVVJMfSR7cGF0aH1gLCBcIlBPU1RcIiwgZGF0YSk7XG5cdH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIEN1c3RvbUZpZWxkUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG59O1xuXG50eXBlIEN1c3RvbUZpZWxkUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogQ3VzdG9tRmllbGRSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VDdXN0b21GaWVsZENsYXNzID0ge1xuXHRuZXcgKHJhdzogQ3VzdG9tRmllbGRSYXcpOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2U7XG5cblx0ZnJvbUlkczogKGlkOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VDdXN0b21GaWVsZENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlQ3VzdG9tRmllbGRDbGllbnQgaW1wbGVtZW50cyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxDdXN0b21GaWVsZFJlc3BvbnNlPihcblx0XHRcdFx0YGN1c3RvbWZpZWxkcy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocmF3KSA9PiBuZXcgQ2xzKHJhdykpO1xuXHRcdH1cblxuXHRcdHByb3RlY3RlZCByYXc6IEN1c3RvbUZpZWxkUmF3O1xuXG5cdFx0Y29uc3RydWN0b3IocmF3OiBDdXN0b21GaWVsZFJhdykge1xuXHRcdFx0dGhpcy5yYXcgPSByYXc7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cdFx0Z2V0IHR5cGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnR5cGU7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgUHJvamVjdEluZm9SYXcgPSB7XG5cdG93bmVySWQ6IHN0cmluZztcbn07XG5cbnR5cGUgRm9sZGVyUmF3ID0ge1xuXHRpZD86IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhdztcblx0Y2hpbGRJZHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107IC8vb25seSBwcmVzZW50IGlmIHRoZSBmb2xkZXIgaXMgZmV0Y2hlZCBieSBpZC4uLlxufTtcblxudHlwZSBUcmVlUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogRm9sZGVyUmF3W107XG59O1xuXG50eXBlIEZvbGRlclNhdmVDb25maWcgPSB7XG5cdHBhcmVudEZvbGRlcklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlRm9sZGVySW5zdGFuY2Uge1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cblx0c2F2ZTogKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcblxuXHRnZXRQYXJlbnRGb2xkZXI6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGdldENoaWxkRm9sZGVyczogKCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+O1xuXHRmaW5kQ29uZmlnRm9sZGVyOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckNsYXNzIHtcblx0bmV3IChyYXc6IEZvbGRlclJhdyk6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cblx0ZnJvbVNwYWNlOiAoXG5cdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHQpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbUlEczogKGlkczogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbVBlcm1hTGluazogKGlkOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGNyZWF0ZTogKFxuXHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlRm9sZGVyQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VGb2xkZXJDbGllbnQgaW1wbGVtZW50cyBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVNwYWNlKFxuXHRcdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdFx0cGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cdFx0KTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXG5cdFx0XHRcdGAvc3BhY2VzLyR7c3BhY2VJZH0vZm9sZGVyc2AsXG5cdFx0XHRcdHBhcmFtc1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21JRHMoaWRzOiBzdHJpbmdbXSk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgZm9sZGVycy8ke2lkcy5qb2luKFwiLFwiKX1gXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhsaW5rOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRyZWUgPSBhd2FpdCBjbGllbnQuZ2V0PFRyZWVSZXNwb25zZT4oXCJmb2xkZXJzXCIsIHtcblx0XHRcdFx0cGVybWFsaW5rOiBsaW5rLFxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IHRyZWUuZGF0YVswXTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudChmb2xkZXIpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBjcmVhdGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRcdHByb2plY3Q/OiBQcm9qZWN0SW5mb1Jhd1xuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZUZvbGRlckNsaWVudCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCB9KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogRm9sZGVyUmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXHRcdGdldCBkZXNjcmlwdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5kZXNjcmlwdGlvbjtcblx0XHR9XG5cdFx0Z2V0IHByb2plY3QoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucHJvamVjdDtcblx0XHR9XG5cdFx0Z2V0IGNoaWxkSWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmNoaWxkSWRzO1xuXHRcdH1cblx0XHRnZXQgcGFyZW50SWRzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogRm9sZGVyU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PEZvbGRlclJhdz4oXG5cdFx0XHRcdGBmb2xkZXIvJHtjb25maWcucGFyZW50Rm9sZGVySWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24gPz8gXCJcIixcblx0XHRcdFx0XHRwcm9qZWN0OiB0aGlzLnByb2plY3QgPz8gZmFsc2UsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucmF3ID0gcmVzcDtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBwYXJlbnRGb2xkZXI6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT4gfCB1bmRlZmluZWQ7XG5cdFx0YXN5bmMgZ2V0UGFyZW50Rm9sZGVyKCkge1xuXHRcdFx0Y29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLnBhcmVudElkcyB8fCB0aGlzLnBhcmVudElkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHBhcmVudFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmZyb21JRHMoW3RoaXMucGFyZW50SWRzWzBdXSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3BbMF07XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnBhcmVudEZvbGRlciA9IHRoaXMucGFyZW50Rm9sZGVyID8/IGxvYWQoKTtcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudEZvbGRlcjtcblx0XHR9XG5cblx0XHRwcml2YXRlIGNoaWxkRm9sZGVyczogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlW10+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldENoaWxkRm9sZGVycygpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5jaGlsZElkcykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgc3ViIGZvbGRlcnNcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gY2xpZW50LkZvbGRlci5mcm9tSURzKHRoaXMuY2hpbGRJZHMpO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5jaGlsZEZvbGRlcnMgPSB0aGlzLmNoaWxkRm9sZGVycyA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jaGlsZEZvbGRlcnM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjb25maWdGb2xkZXJDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHRQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2UgfCBudWxsPlxuXHRcdD4oKTtcblx0XHQvL0xvb2sgZm9yIGEgZm9sZGVyIHRoYXQgaXMgYSBkaXJlY3QgY2hpbGQgb2YgdGhpcyBmb2xkZXIsIGlmIGl0cyBub3QgdGhlcmUgc3RhcnQgbG9va2luZyB1cCBeXG5cdFx0YXN5bmMgZmluZENvbmZpZ0ZvbGRlcihuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IGZpbmQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNoaWxkcmVuID0gYXdhaXQgdGhpcy5nZXRDaGlsZEZvbGRlcnMoKTtcblxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChjaGlsZC50aXRsZSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNoaWxkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHBhcmVudCA9IGF3YWl0IHRoaXMuZ2V0UGFyZW50Rm9sZGVyKCk7XG5cblx0XHRcdFx0cmV0dXJuIHBhcmVudC5maW5kQ29uZmlnRm9sZGVyKG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLnNldChuYW1lLCBmaW5kKCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSBhd2FpdCB0aGlzLmNvbmZpZ0ZvbGRlckNhY2hlLmdldChuYW1lKTtcblxuXHRcdFx0cmV0dXJuIGZvbGRlciA/PyBudWxsO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcblxudHlwZSBDU1ZSb3cgPSB7IHRlbXBsYXRlOiBzdHJpbmcgfSAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgUHJvamVjdFJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVByb2plY3RJbnN0YW5jZSA9IHtcblx0aW1wb3J0Q1NWKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0SW5zdGFuY2U+O1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBQcm9qZWN0UmF3LCBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlKTogV3Jpa2VQcm9qZWN0SW5zdGFuY2U7XG5cblx0Y3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VQcm9qZWN0Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VQcm9qZWN0SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBjcmVhdGUodGl0bGU6IHN0cmluZywgcGFyZW50OiBXcmlrZUZvbGRlckluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdENsaWVudCh7IHRpdGxlIH0sIHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHByaXZhdGUgcmF3OiBQcm9qZWN0UmF3LFxuXHRcdFx0cHJpdmF0ZSBwYXJlbnQ/OiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50aXRsZTtcblx0XHR9XG5cblx0XHRhc3luYyBpbXBvcnRDU1YoXG5cdFx0XHRmaWxlOiBGaWxlLFxuXHRcdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdFx0KTogUHJvbWlzZTxXcmlrZVByb2plY3RDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3N2LnBhcnNlU3RyaW5nKHRleHQsIG9wdGlvbnMpXG5cdFx0XHRcdFx0Lm9uKFwiZXJyb3JcIiwgKGVycikgPT4gcmVqZWN0KGVycikpXG5cdFx0XHRcdFx0Lm9uKFwiZGF0YVwiLCAocm93OiBDU1ZSb3cpID0+IHRoaXMudmlkZW9zLnB1c2gocm93KSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZSgpIDogdGhpcy5jcmVhdGUoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHVwZGF0ZSgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB1cGRhdGUgUHJvamVjdHMgKG5vdCBpbXBsZW1lbnRlZClcIik7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoKSB7XG5cdFx0XHRpZiAoIWNsaWVudC51c2VySWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnBhcmVudD8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gcGFyZW50IGlkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUZvbGRlciA9IGF3YWl0IHRoaXMucGFyZW50Py5maW5kQ29uZmlnRm9sZGVyKFxuXHRcdFx0XHRcInRlbXBsYXRlc1wiXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXRlbXBsYXRlRm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmaW5kIHRlbXBsYXRlIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHByb2plY3QgPSBhd2FpdCBjbGllbnQuRm9sZGVyLmNyZWF0ZSh0aGlzLnRpdGxlLCBcIlwiLCB7XG5cdFx0XHRcdG93bmVySWQ6IGNsaWVudC51c2VySWQsXG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgcHJvamVjdC5zYXZlKHsgcGFyZW50Rm9sZGVySWQ6IHRoaXMucGFyZW50LmlkIH0pO1xuXG5cdFx0XHRmb3IgKGxldCB2aWRlbyBvZiB0aGlzLnZpZGVvcy5yZXZlcnNlKCkpIHtcblx0XHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLCAuLi5wcm9wZXJ0aWVzIH0gPSB2aWRlbztcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmaW5kVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuXHRcdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgdGVtcGxhdGU/LmNsb25lKHByb3BlcnRpZXMpO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXI6IHByb2plY3QgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgU3BhY2VSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG50eXBlIFNwYWNlUmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogU3BhY2VSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3BhY2VDbGFzcyA9IHtcblx0bmV3IChyYXc6IFNwYWNlUmF3KTogV3Jpa2VTcGFjZUluc3RhbmNlO1xuXG5cdGdldEFsbDogKCkgPT4gUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BhY2VDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VTcGFjZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlU3BhY2VDbGllbnQgaW1wbGVtZW50cyBXcmlrZVNwYWNlSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBnZXRBbGwoKTogUHJvbWlzZTxXcmlrZVNwYWNlSW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8U3BhY2VSZXNwb25zZT4oXCIvc3BhY2VzXCIpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcC5kYXRhLm1hcCgocikgPT4gbmV3IFdyaWtlU3BhY2VDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBTcGFjZVJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuXG5jb25zdCBTYXZlQmxhY2tMaXN0ID0gW1xuXHRcImFjY291bnRJZFwiLFxuXHRcImNyZWF0ZWREYXRlXCIsXG5cdFwidXBkYXRlZERhdGVcIixcblx0XCJwZXJtYWxpbmtcIixcblx0XCJzY29wZVwiLFxuXHRcInByaW9yaXR5XCIsXG5cdFwiZGF0ZXNcIixcbl07XG5cbnR5cGUgQ3VzdG9tRmllbGRJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dmFsdWU6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFRhc2tSYXcgPSB7XG5cdGlkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0cGFyZW50cz86IHN0cmluZ1tdO1xuXHRwYXJlbnRJZHM/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrcz86IHN0cmluZ1tdO1xuXHRzdXBlclRhc2tJZHM/OiBzdHJpbmdbXTtcblx0c3ViVGFza0lkcz86IHN0cmluZ1tdO1xuXHRhY2NvdW50SWQ/OiBzdHJpbmdbXTtcblx0Y3JlYXRlZERhdGU/OiBzdHJpbmc7XG5cdHVwZGF0ZWREYXRlPzogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNJZD86IHN0cmluZztcblx0cGVybWFsaW5rPzogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcblx0cHJpb3JpdHk/OiBzdHJpbmc7XG5cdGRhdGVzPzogYW55O1xuXHRlZmZvcnRBbGxvY2F0aW9uPzogYW55O1xuXHRiaWxsaW5nVHlwZT86IGFueTtcblx0ZmluYW5jZT86IGFueTtcblx0c2hhcmVkSWRzPzogYW55O1xuXHRyZXNwb25zaWJsZUlkcz86IGFueTtcblx0Y3VzdG9tRmllbGRzPzogQ3VzdG9tRmllbGRJbnN0YW5jZVtdO1xufSAmIHt9O1xuXG5leHBvcnQgdHlwZSBUYXNrUmVzcG9uc2UgPSB7XG5cdGtpbmQ6IHN0cmluZztcblx0ZGF0YTogVGFza1Jhd1tdO1xufTtcblxudHlwZSBUYXNrU2F2ZUNvbmZpZyA9IHtcblx0Zm9sZGVyPzogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRyYXc6IFRhc2tSYXcgfCB1bmRlZmluZWQ7XG5cdGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHBhcmVudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuXG5cdGFkZFN1YlRhc2tzOiAodGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10pID0+IHZvaWQ7XG5cdHNldFN1cGVyVGFzazogKHRhc2s6IFdyaWtlVGFza0luc3RhbmNlKSA9PiB2b2lkO1xuXG5cdGdldFNhdmVEYXRhOiAoKSA9PiBUYXNrUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IFRhc2tTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0NsYXNzPFQgPSBXcmlrZVRhc2tJbnN0YW5jZT4ge1xuXHRuZXcgKHRhc2s6IFRhc2tSYXcpOiBUO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8VD47XG5cblx0ZnJvbVRpdGxlOiAodGl0bGU6IHN0cmluZywgZm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21SYXc6ICh0YXNrOiBUYXNrUmF3KSA9PiBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbms8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KHRoaXM6IFQsIHBlcm1hbGluazogc3RyaW5nKTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZTxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4oXG5cdFx0XHR0aGlzOiBULFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tVGl0bGUodGl0bGUsIGZvbGRlciwgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tUmF3PFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCB0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlVGFza0NsaWVudCh0YXNrKSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdFx0fVxuXG5cdFx0cmF3OiBUYXNrUmF3O1xuXG5cdFx0cHJpdmF0ZSBzdXBlclRhc2s6IFdyaWtlVGFza0luc3RhbmNlIHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3ViVGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXQgaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cblx0XHRnZXQgdGl0bGUoKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cblx0XHRnZXQgcGFyZW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcucGFyZW50SWRzO1xuXHRcdH1cblxuXHRcdGFkZFN1YlRhc2tzKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSB7XG5cdFx0XHR0YXNrcy5mb3JFYWNoKCh0KSA9PiB0LnNldFN1cGVyVGFzayh0aGlzKSk7XG5cblx0XHRcdHRoaXMuc3ViVGFza3MgPSBbLi4udGhpcy5zdWJUYXNrcywgLi4udGFza3NdO1xuXHRcdH1cblxuXHRcdHNldFN1cGVyVGFzayh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0dGhpcy5zdXBlclRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdGdldFNhdmVEYXRhKCk6IFRhc2tSYXcge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgcGFyZW50cywgLi4uZXh0cmFEYXRhIH0gPSB0aGlzLnJhdztcblx0XHRcdGNvbnN0IGRhdGEgPSB7IC4uLmV4dHJhRGF0YSB9IGFzIFRhc2tSYXc7XG5cblx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRkYXRhLnRpdGxlID0gdGl0bGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXJlbnRzKSB7XG5cdFx0XHRcdGRhdGEucGFyZW50cyA9IHBhcmVudHM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnN1cGVyVGFzaz8uaWQpIHtcblx0XHRcdFx0ZGF0YS5zdXBlclRhc2tzID0gW3RoaXMuc3VwZXJUYXNrLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgcHJvcCBvZiBTYXZlQmxhY2tMaXN0KSB7XG5cdFx0XHRcdGRlbGV0ZSBkYXRhW3Byb3AgYXMga2V5b2YgVGFza1Jhd107XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuaWQgPyB0aGlzLnVwZGF0ZShjb25maWcpIDogdGhpcy5jcmVhdGUoY29uZmlnKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGFzeW5jIGNyZWF0ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zdCB7IGZvbGRlciB9ID0gY29uZmlnO1xuXG5cdFx0XHRpZiAoIWZvbGRlcj8uaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZSBhIGxvY2F0aW9uIHRvIHNhdmUgYSBuZXcgdGFzayB0by5cIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdC4uLnRoaXMuZ2V0U2F2ZURhdGEoKSxcblx0XHRcdH07XG5cblx0XHRcdGlmIChmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHBheWxvYWQucGFyZW50cyA9IFtmb2xkZXIuaWRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnBvc3Q8VGFza1Jlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCxcblx0XHRcdFx0Zml4UGF5bG9hZChwYXlsb2FkIGFzIHt9KVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgdGFzayA9IHJlc3AuZGF0YVswXTtcblxuXHRcdFx0dGhpcy5yYXcgPSB0YXNrO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBTdWIgVGFza3M6IFwiLCB0aGlzLnN1YlRhc2tzLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBzdWJUYXNrIG9mIHRoaXMuc3ViVGFza3MpIHtcblx0XHRcdFx0YXdhaXQgc3ViVGFzay5zYXZlKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVwZGF0ZSB0YXNrc1wiKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IFBheWxvYWRLZXlNYXAgPSB7XG5cdHNoYXJlZElkczogXCJzaGFyZWRzXCIsXG5cdHJlc3BvbnNpYmxlSWRzOiBcInJlc3BvbnNpYmxlc1wiLFxuXHRjdXN0b21TdGF0dXNJZDogXCJjdXN0b21TdGF0dXNcIixcbn07XG5cbmZ1bmN0aW9uIGZpeFBheWxvYWQocGF5bG9hZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuXHRjb25zdCBuZXdQYXlsb2FkID0geyAuLi5wYXlsb2FkIH07XG5cblx0Zm9yIChsZXQgW2tleSwgZml4XSBvZiBPYmplY3QuZW50cmllcyhQYXlsb2FkS2V5TWFwKSkge1xuXHRcdGlmIChuZXdQYXlsb2FkW2tleV0pIHtcblx0XHRcdG5ld1BheWxvYWRbZml4XSA9IG5ld1BheWxvYWRba2V5XTtcblx0XHRcdGRlbGV0ZSBuZXdQYXlsb2FkW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1BheWxvYWQ7XG59XG5cbmNvbnN0IEZpZWxkcyA9IFtcblx0XCJwYXJlbnRJZHNcIixcblx0XCJkZXNjcmlwdGlvblwiLFxuXHRcImN1c3RvbUZpZWxkc1wiLFxuXHRcInNoYXJlZElkc1wiLFxuXHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFwic3ViVGFza0lkc1wiLFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21QZXJtYUxpbmsocGVybWFsaW5rOiBzdHJpbmcsIGNsaWVudDogV3Jpa2VDbGllbnQpIHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3NgLCB7XG5cdFx0cGVybWFsaW5rLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRyZXR1cm4gcmVzcC5kYXRhWzBdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbUlkcyhcblx0aWRzOiBzdHJpbmdbXSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3W10+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgdGFza3MvJHtpZHMuam9pbihcIixcIil9YCk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21UaXRsZShcblx0dGl0bGU6IHN0cmluZyxcblx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlLFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBQcm9taXNlPFRhc2tSYXc+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihgZm9sZGVycy8ke2ZvbGRlci5pZH0vdGFza3NgLCB7XG5cdFx0dGl0bGUsXG5cdFx0ZmllbGRzOiBGaWVsZHMsXG5cdH0pO1xuXG5cdGlmIChyZXNwLmRhdGEubGVuZ3RoID4gMSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkZvdW5kIG11bHRpcGxlIHRhc2tzXCIpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cbiIsICJpbXBvcnQgTXVzdGFjaGUgZnJvbSBcIm11c3RhY2hlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfSBmcm9tIFwiLi9DdXN0b21GaWVsZC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHtcblx0V3Jpa2VUYXNrQ2xhc3MsXG5cdFdyaWtlVGFza0luc3RhbmNlLFxuXHRUYXNrUmF3LFxuXHRUYXNrUmVzcG9uc2UsXG59IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmltcG9ydCB7IHJhd0Zyb21UaXRsZSwgcmF3RnJvbUlkcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsb25lRGF0YSA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgQ3VzdG9tRmllbGRUZW1wbGF0ZSA9IHtcblx0dmFsdWU6IHN0cmluZztcblx0ZGVmaW5pdGlvbjogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIGV4dGVuZHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRjbG9uZTogKFxuXHRcdGRhdGE6IENsb25lRGF0YSxcblx0XHRwYXJlbnQ/OiBXcmlrZVRhc2tJbnN0YW5jZVxuXHQpID0+IFByb21pc2U8V3Jpa2VUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza1RlbXBsYXRlQ2xhc3Ncblx0ZXh0ZW5kcyBXcmlrZVRhc2tDbGFzczxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPiB7fVxuXG5mdW5jdGlvbiBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCBkYXRhOiBDbG9uZURhdGEpOiBzdHJpbmcge1xuXHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHRyZXR1cm4gTXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tUZW1wbGF0ZUNsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFRhc2tUZW1wbGF0ZUNsaWVudFxuXHRcdGV4dGVuZHMgY2xpZW50LlRhc2tcblx0XHRpbXBsZW1lbnRzIFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2Vcblx0e1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tSWRzKGlkczogc3RyaW5nW10pIHtcblx0XHRcdGNvbnN0IENscyA9IHRoaXM7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tSWRzKGlkcywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHJhdy5tYXAoKHIpID0+IG5ldyBDbHMocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0cGVybWFsaW5rOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VGFza1Jlc3BvbnNlPihcIi90YXNrc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJlc3AuZGF0YVswXSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21UaXRsZShcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPFRhc2tUZW1wbGF0ZUNsaWVudD4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdyh0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRhc2tUZW1wbGF0ZUNsaWVudCh0YXNrKTtcblx0XHR9XG5cblx0XHRUZW1wbGF0ZUZpZWxkczogKGtleW9mIFRhc2tSYXcpW10gPSBbXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdO1xuXHRcdExpdGVyYWxGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1xuXHRcdFx0XCJzaGFyZWRJZHNcIixcblx0XHRcdFwicmVzcG9uc2libGVJZHNcIixcblx0XHRcdFwiY3VzdG9tU3RhdHVzSWRcIixcblx0XHRdO1xuXG5cdFx0YXN5bmMgY2xvbmUoZGF0YTogQ2xvbmVEYXRhLCBzdXBlclRhc2s/OiBXcmlrZVRhc2tJbnN0YW5jZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSYXcgPSB0aGlzLnJhdyA/PyAoe30gYXMgVGFza1Jhdyk7XG5cblx0XHRcdGNvbnN0IHRhc2tSYXcgPSB7fSBhcyBUYXNrUmF3O1xuXHRcdFx0Y29uc3Qgc2V0ID0gKGtleToga2V5b2YgVGFza1JhdywgdmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRcdHRhc2tSYXdba2V5XSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrZXkpID0+XG5cdFx0XHRcdHNldChrZXksIGRhdGFba2V5XSA/PyBmaWxsSW5UZW1wbGF0ZSh0ZW1wbGF0ZVJhd1trZXldLCBkYXRhKSlcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0XCJTZXR0aW5nIExpdGVyYWwgRmllbGQ6IFwiLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gdGVtcGxhdGVSYXdba2V5XSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGRhdGEudGl0bGVQcmVmaXgpIHtcblx0XHRcdFx0dGFza1Jhdy50aXRsZSA9IGAke2RhdGEudGl0bGVQcmVmaXh9ICR7dGFza1Jhdy50aXRsZX1gO1xuXHRcdFx0fVxuXG5cdFx0XHR0YXNrUmF3LnRpdGxlID0gdGFza1Jhdy50aXRsZVxuXHRcdFx0XHQucmVwbGFjZShcIlRFTVBMQVRFXCIsIFwiXCIpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXCBcXCAvLCBcIiBcIik7XG5cblx0XHRcdGNvbnN0IGN1c3RvbUZpZWxkcyA9IChhd2FpdCB0aGlzLmdldEN1c3RvbUZpZWxkcygpKSA/PyB7fTtcblxuXHRcdFx0Zm9yIChsZXQgW25hbWUsIGZpZWxkXSBvZiBPYmplY3QuZW50cmllcyhjdXN0b21GaWVsZHMpKSB7XG5cdFx0XHRcdHRhc2tSYXcuY3VzdG9tRmllbGRzID0gW1xuXHRcdFx0XHRcdC4uLih0YXNrUmF3LmN1c3RvbUZpZWxkcyA/PyBbXSksXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWQ6IGZpZWxkLmRlZmluaXRpb24uaWQsXG5cdFx0XHRcdFx0XHR2YWx1ZTogZGF0YVtuYW1lXSA/PyBmaWVsZC52YWx1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0YXNrID0gY2xpZW50LlRhc2suZnJvbVJhdyh0YXNrUmF3KTtcblxuXHRcdFx0aWYgKHN1cGVyVGFzaykge1xuXHRcdFx0XHR0YXNrLnNldFN1cGVyVGFzayhzdXBlclRhc2spO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdWJUYXNrVGVtcGxhdGVzID0gIXRlbXBsYXRlUmF3LnN1YlRhc2tJZHM/Lmxlbmd0aFxuXHRcdFx0XHQ/IFtdXG5cdFx0XHRcdDogYXdhaXQgVGFza1RlbXBsYXRlQ2xpZW50LmZyb21JZHModGVtcGxhdGVSYXcuc3ViVGFza0lkcyk7XG5cblx0XHRcdGNvbnN0IGNsb25lRGF0YSA9IHtcblx0XHRcdFx0Li4uZGF0YSxcblx0XHRcdFx0dGl0bGVQcmVmaXg6IHRhc2tSYXcudGl0bGUsXG5cdFx0XHR9IGFzIENsb25lRGF0YTtcblxuXHRcdFx0dGhpcy5UZW1wbGF0ZUZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblx0XHRcdHRoaXMuTGl0ZXJhbEZpZWxkcy5mb3JFYWNoKChrKSA9PiBkZWxldGUgY2xvbmVEYXRhW2tdKTtcblxuXHRcdFx0Y29uc3Qgc3ViVGFza3MgPSBhd2FpdCBQcm9taXNlLmFsbChcblx0XHRcdFx0c3ViVGFza1RlbXBsYXRlcy5tYXAoKHMpID0+IHMuY2xvbmUoY2xvbmVEYXRhLCB0YXNrKSlcblx0XHRcdCk7XG5cblx0XHRcdHRhc2suYWRkU3ViVGFza3Moc3ViVGFza3MpO1xuXG5cdFx0XHRyZXR1cm4gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIEN1c3RvbUZpZWxkc0xvYWRlcjpcblx0XHRcdHwgUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBDdXN0b21GaWVsZFRlbXBsYXRlPiB8IG51bGw+XG5cdFx0XHR8IHVuZGVmaW5lZDtcblx0XHQvL1RPRE86IGNhY2hlIHRoaXMgcmV0dXJuXG5cdFx0cHJpdmF0ZSBhc3luYyBnZXRDdXN0b21GaWVsZHMoKTogUHJvbWlzZTxSZWNvcmQ8XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHR7IHZhbHVlOiBzdHJpbmc7IGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB9XG5cdFx0PiB8IG51bGw+IHtcblx0XHRcdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgeyBjdXN0b21GaWVsZHMgfSA9IHRoaXMucmF3ID8/IHt9O1xuXG5cdFx0XHRcdGlmICghY3VzdG9tRmllbGRzIHx8IGN1c3RvbUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0dGluZyBDdXN0b20gRmllbGRzOiBcIiwgY3VzdG9tRmllbGRzKTtcblxuXHRcdFx0XHRjb25zdCBmaWVsZHMgPSBhd2FpdCBjbGllbnQuQ3VzdG9tRmllbGQuZnJvbUlkcyhcblx0XHRcdFx0XHRjdXN0b21GaWVsZHMubWFwKChjKSA9PiBjLmlkKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiBmaWVsZHMucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjdXN0b21GaWVsZHMuZmluZChcblx0XHRcdFx0XHRcdChjKSA9PiBjLmlkID09PSBmaWVsZC5pZFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQudHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhaW5zdGFuY2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRcdFtmaWVsZC50aXRsZV06IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGluc3RhbmNlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRkZWZpbml0aW9uOiBmaWVsZCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSwge30pO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPSB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlciA/PyBsb2FkZXIoKTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFZpZGVvQmF0Y2hTYXZlQ29uZmlnID0ge1xuXHR0ZW1wbGF0ZUZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcblx0bG9jYXRpb25Gb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZSB7XG5cdGltcG9ydENTVjogKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xuXG5cdHNhdmU6IChjb25maWc6IFZpZGVvQmF0Y2hTYXZlQ29uZmlnKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdG5ldyAoY29uZmlnOiB7IHRhc2s6IFdyaWtlVGFza0luc3RhbmNlIH0pOiBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U7XG5cblx0ZnJvbVBlcm1hTGluazogKGxpbms6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdFRhc2tDbGllbnQgaW1wbGVtZW50cyBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0bGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCBjbGllbnQuVGFzay5mcm9tUGVybWFMaW5rKGxpbmspO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlUHJvamVjdFRhc2tDbGllbnQoeyB0YXNrIH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2U7XG5cdFx0cHJpdmF0ZSB2aWRlb3M6IENTVlJvd1tdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih7IHRhc2sgfTogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KSB7XG5cdFx0XHR0aGlzLnRhc2sgPSB0YXNrO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYWRkVmlkZW8odmlkZW86IENTVlJvdykge1xuXHRcdFx0dGhpcy52aWRlb3MucHVzaCh2aWRlbyk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLmFkZFZpZGVvKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZSh7IHRlbXBsYXRlRm9sZGVyLCBsb2NhdGlvbkZvbGRlciB9OiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgVmlkZW8gQmF0Y2g6IFwiLCB0aGlzLnZpZGVvcy5sZW5ndGgpO1xuXG5cdFx0XHRjb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IE1hcDxcblx0XHRcdFx0c3RyaW5nLFxuXHRcdFx0XHRQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+XG5cdFx0XHQ+KCk7XG5cdFx0XHRjb25zdCBmaW5kVGVtcGxhdGUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICghdGVtcGxhdGVDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZUNhY2hlLnNldChcblx0XHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0XHRjbGllbnQuVGFza1RlbXBsYXRlLmZyb21UaXRsZShuYW1lLCB0ZW1wbGF0ZUZvbGRlcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlQ2FjaGUuZ2V0KG5hbWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gbG9jYXRpb25Gb2xkZXI7XG5cblx0XHRcdGlmICghZm9sZGVyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIGZvbGRlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzLCB0aGlzLnRhc2spO1xuXG5cdFx0XHRcdGF3YWl0IHRhc2s/LnNhdmUoeyBmb2xkZXIgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xufTtcblxudHlwZSBXb3JrZmxvd1JhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNlczogV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZVtdO1xufTtcblxudHlwZSBXb3JrZmxvd1Jlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFdvcmtmbG93UmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93SW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlV29ya0Zsb3dDbGFzcyA9IHtcblx0bmV3IChyYXc6IFdvcmtmbG93UmF3KTogV3Jpa2VXb3JrRmxvd0luc3RhbmNlO1xuXG5cdGZyb21OYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8V3Jpa2VXb3JrRmxvd0luc3RhbmNlPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3JrRmxvd0NsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVdvcmtGbG93Q2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VXb3JrZmxvd0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlV29ya0Zsb3dJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21OYW1lKG5hbWU6IHN0cmluZykge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8V29ya2Zsb3dSZXNwb25zZT4oXCJ3b3JrZmxvd3NcIik7XG5cdFx0XHRjb25zdCByYXcgPSByZXNwLmRhdGEuZmluZCgoZCkgPT4gZC5uYW1lID09PSBuYW1lKTtcblxuXHRcdFx0aWYgKCFyYXcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV29ya2Zsb3cgbm90IGZvdW5kXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlV29ya2Zsb3dDbGllbnQocmF3KTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogV29ya2Zsb3dSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCBuYW1lKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Lm5hbWU7XG5cdFx0fVxuXHRcdGdldCBjdXN0b21TdGF0dXNlcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jdXN0b21TdGF0dXNlcztcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIEtleWJvYXJkRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHRMb2FkZXJGdW5jdGlvbixcblx0TGlua3NGdW5jdGlvbixcblx0cmVkaXJlY3QsXG5cdHVzZUZldGNoZXIsXG5cdEZvcm0sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IHR5cGUgeyBBY3R1YWxGaWxlT2JqZWN0IH0gZnJvbSBcImZpbGVwb25kXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgSW5wdXRCcmVhZENydW1iIGZyb20gXCJ+L2NvbXBvbmVudHMvSW5wdXRCcmVhZENydW1iXCI7XG5pbXBvcnQgT25Nb3VudCBmcm9tIFwifi9jb21wb25lbnRzL09uTW91bnRcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcblxuaW1wb3J0IHR5cGUgeyBTcGFjZXNSZXNwb25zZSwgU3BhY2UgfSBmcm9tIFwiLi9zcGFjZXNcIjtcbmltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UsIENsaWVudCB9IGZyb20gXCIuL2NsaWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmlsZXBvbmRAXjQvZGlzdC9maWxlcG9uZC5jc3NcIixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRjb25zdCBVcGxvYWRIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdC1maWxlXCIpIGFzIEZpbGU7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRjb25zb2xlLmxvZyhcIkdvdCBGb3JtIERhdGE6IFwiLCB0ZXh0KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG5cdGNvbnN0IHNwYWNlcyA9IHVzZUZldGNoZXI8U3BhY2VzUmVzcG9uc2U+KCk7XG5cdGNvbnN0IGxvYWRTcGFjZXMgPSB1c2VGZXRjaGVyTG9hZChzcGFjZXMsIFwiL3Byb2plY3RzL3NwYWNlc1wiKTtcblx0Y29uc3QgW3NwYWNlLCBzZXRTcGFjZV0gPSB1c2VTdGF0ZTxTcGFjZSB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IGNsaWVudHMgPSB1c2VGZXRjaGVyPENsaWVudFJlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkQ2xpZW50cyA9IHVzZUZldGNoZXJMb2FkKFxuXHRcdGNsaWVudHMsXG5cdFx0YC9wcm9qZWN0cy9jbGllbnRzP3NwYWNlSWQ9JHtlbmNvZGVVUklDb21wb25lbnQoc3BhY2U/LmlkID8/IFwiXCIpfWBcblx0KTtcblx0Y29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlPENsaWVudCB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IHsgaGFzVmFsdWU6IGhhc1Byb2plY3ROYW1lLCBwcm9wczogcHJvamVjdE5hbWVQcm9wcyB9ID1cblx0XHR1c2VCdWZmZXJlZElucHV0KCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJOZXcgUHJvamVjdFwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdDxJbnB1dEJyZWFkQ3J1bWI+XG5cdFx0XHRcdFx0PE9uTW91bnQgb25Nb3VudD17bG9hZFNwYWNlc30+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtzcGFjZT8uaWR9IG5hbWU9XCJzcGFjZUlkXCIgLz5cblx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwYWNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG8pID0+IHNldFNwYWNlKG8pfVxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtzcGFjZXMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtzcGFjZXMuZGF0YT8uc3BhY2VzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdGlzT3B0aW9uRXF1YWxUb1ZhbHVlPXsobywgdikgPT4gby5pZCA9PT0gdi5pZH1cblx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ucGFyYW1zfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTcGFjZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHR7IXNwYWNlID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRDbGllbnRzfT5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NsaWVudD8uaWR9XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHRzeD17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cblx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRDbGllbnQobyl9XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17Y2xpZW50cy5zdGF0ZSA9PT0gXCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17Y2xpZW50cy5kYXRhPy5jbGllbnRzID8/IFtdfVxuXHRcdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsobykgPT4gby50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDbGllbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Pbk1vdW50PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFjbGllbnQgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByb2plY3QgTmFtZVwiXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdGtleT1cInByb2plY3RcIlxuXHRcdFx0XHRcdFx0XHRpbnB1dFByb3BzPXtwcm9qZWN0TmFtZVByb3BzfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshaGFzUHJvamVjdE5hbWUgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8RmlsZUlucHV0XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInByb2plY3QtZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0c3RvcmVBc0ZpbGVcblx0XHRcdFx0XHRcdFx0XHRmaWxlcz17ZmlsZXN9XG5cdFx0XHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RmlsZXMoaXRlbXMubWFwKChmKSA9PiBmLmZpbGUpKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0Q3JlYXRlIFByb2plY3Rcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvSW5wdXRCcmVhZENydW1iPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlRmV0Y2hlckxvYWQoXG5cdGZldGNoZXI6IHsgbG9hZDogKHVybDogc3RyaW5nKSA9PiB2b2lkIH0gJiBGZXRjaGVyLFxuXHR1cmw6IHN0cmluZ1xuKSB7XG5cdHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0aWYgKCFmZXRjaGVyLmRhdGEgJiYgZmV0Y2hlci5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGZldGNoZXIubG9hZCh1cmwpO1xuXHRcdH1cblx0fSwgW2ZldGNoZXIsIHVybF0pO1xufVxuXG5mdW5jdGlvbiB1c2VCdWZmZXJlZElucHV0KCkge1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkPigpO1xuXHRjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4oKTtcblxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtoYXNWYWx1ZSwgc2V0SGFzVmFsdWVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRzZXRWYWx1ZShpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKTtcblxuXHRcdGlmICh0aW1lb3V0UmVmLmN1cnJlbnQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuXHRcdH1cblxuXHRcdHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSkpO1xuXG5cdFx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuXHRcdH0sIDUwMCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBvbktleVByZXNzID0gdXNlQ2FsbGJhY2soKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdFx0c2V0SGFzVmFsdWUoQm9vbGVhbihpbnB1dFJlZi5jdXJyZW50Py52YWx1ZSA/PyBcIlwiKSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIHtcblx0XHRoYXNWYWx1ZSxcblx0XHRwcm9wczoge1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRyZWY6IGlucHV0UmVmLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRvbktleVByZXNzLFxuXHRcdH0sXG5cdH07XG59XG4iLCAiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyB0aXRsZSwgY2hpbGRyZW4gfTogUGFnZVByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbXQ6IDEwIH19PlxuXHRcdFx0PFBhcGVyIGVsZXZhdGlvbj17M30gc3g9e3sgcHk6IDMgfX0+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDFcIiBtYj17NX0+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvUGFwZXI+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbnR5cGUgSW5wdXRCcmVhZENydW1iUHJvcHMgPSB7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBHcmlkSXRlbSA9IHN0eWxlZChHcmlkKWBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEJyZWFkQ3J1bWIoeyBjaGlsZHJlbiB9OiBJbnB1dEJyZWFkQ3J1bWJQcm9wcykge1xuXHRjb25zdCBjbXBzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cblx0Y29uc3QgYnJlYWRjcnVtYnMgPSBjbXBzLnNsaWNlKDAsIC0xKTtcblx0Y29uc3QgZm9jdXNlZCA9IGNtcHNbY21wcy5sZW5ndGggLSAxXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxHcmlkXG5cdFx0XHRjb250YWluZXJcblx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRwYWRkaW5nPXsyfVxuXHRcdFx0c3g9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cblx0XHQ+XG5cdFx0XHR7YnJlYWRjcnVtYnMubWFwKChjLCBrZXkpID0+IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezN9IGtleT17YGJyZWFkY3J1bWItJHtrZXl9YH0+XG5cdFx0XHRcdFx0e2N9XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQpKX1cblx0XHRcdHtmb2N1c2VkID8gKFxuXHRcdFx0XHQ8R3JpZEl0ZW0gaXRlbSB4cz17MTJ9PlxuXHRcdFx0XHRcdHtmb2N1c2VkfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0PC9HcmlkPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRmV0Y2hlciB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L3RyYW5zaXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBGZXRjaE9uTW91bnRQcm9wcyA9IHtcblx0b25Nb3VudDogKCkgPT4gdm9pZDtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uTW91bnQoeyBvbk1vdW50LCBjaGlsZHJlbiB9OiBGZXRjaE9uTW91bnRQcm9wcykge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdG9uTW91bnQoKTtcblx0fSwgW29uTW91bnRdKTtcblxuXHRyZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufVxuIiwgImltcG9ydCB7IEZpbGVQb25kIH0gZnJvbSBcInJlYWN0LWZpbGVwb25kXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEZpbGVQb25kKWBcblx0d2lkdGg6IDMwMHB4O1xuXG5cdCYgLmZpbGVwb25kLS1jcmVkaXRzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWRyb3AtbGFiZWwge1xuXHRcdGNvbG9yOiAjNGM0ZTUzO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWxhYmVsLWFjdGlvbiB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjYmFiZGMwO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLXBhbmVsLXJvb3Qge1xuXHRcdGJvcmRlci1yYWRpdXM6IDJlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMGY0O1xuXHRcdGhlaWdodDogMWVtO1xuXHR9XG5cblx0JiAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1OTVlNjg7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJpcC1ibG9iIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YTlhO1xuXHR9XG5gO1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5cbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIFNwYWNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgU3BhY2VzUmVzcG9uc2UgPSB7XG5cdHNwYWNlczogU3BhY2VbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IHNwYWNlcyA9IGF3YWl0IFdyaWtlLlNwYWNlLmdldEFsbCgpO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRzcGFjZXM6IHNwYWNlcy5tYXAoKHMpID0+ICh7IGlkOiBzLmlkLCB0aXRsZTogcy50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgYXV0aGVudGljYXRlVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuXHQvL05PVEU6IHRoaXMgb2JqZWN0LmtleXMgdHJpY2sgb25seSB3b3JrcyBpZiB0aGUgZW51bSBrZXlzIGFyZSBleGFjdCBtYXRjaGVzIGZvciB0aGUgdmFsdWVzXG5cdGlmICghcGFyYW1zLnNlcnZpY2UgfHwgIU9iamVjdC5rZXlzKFNlcnZpY2UpLmluY2x1ZGVzKHBhcmFtcy5zZXJ2aWNlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIFNlcnZpY2VcIik7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhcIlNlcnZpY2U6IFwiLCBwYXJhbXMuc2VydmljZSk7XG5cblx0YXdhaXQgYXV0aGVudGljYXRlVXNlcihwYXJhbXMuc2VydmljZSBhcyBTZXJ2aWNlLCByZXF1ZXN0LCB7XG5cdFx0c3VjY2VzczogXCJcIixcblx0XHRmYWlsdXJlOiBcIlwiLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtcblx0TG9hZGVyRnVuY3Rpb24sXG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG5cblx0aWYgKCEoYXdhaXQgdXNlci5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSkpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9jb25uZWN0XCIpO1xuXHR9XG5cblx0cmV0dXJuIHsgdXNlcjogdXNlci51c2VySWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3Qgd3Jpa2VDcmVkID0gYXdhaXQgdXNlcj8uZ2V0Q3JlZGVudGlhbHMoU2VydmljZS53cmlrZSk7XG5cblx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0fVxuXG5cdGNvbnN0IFVwbG9hZGVySGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRlckhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBiYXRjaCA9IGF3YWl0IFdyaWtlLlZpZGVvQmF0Y2guZnJvbVBlcm1hTGluayhcblx0XHRmb3JtRGF0YS5nZXQoXCJiYXRjaC10YXNrXCIpIGFzIHN0cmluZ1xuXHQpO1xuXG5cdGF3YWl0IGJhdGNoLmltcG9ydENTVihmb3JtRGF0YS5nZXQoXCJiYXRjaFwiKSBhcyBGaWxlLCB7IGhlYWRlcnM6IHRydWUgfSk7XG5cblx0YXdhaXQgYmF0Y2guc2F2ZSh7XG5cdFx0dGVtcGxhdGVGb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwidGVtcGxhdGUtZm9sZGVyXCIpIGFzIHN0cmluZ1xuXHRcdCksXG5cdFx0bG9jYXRpb25Gb2xkZXI6IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tUGVybWFMaW5rKFxuXHRcdFx0Zm9ybURhdGEuZ2V0KFwibG9jYXRpb25cIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0fSk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0JhdGNoKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVXBsb2FkIGEgdmlkZW8gYmF0Y2ggQ1NWIGZpbGU6XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cblx0XHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwidGVtcGxhdGUtZm9sZGVyXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiVGVtcGxhdGUgRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwiYmF0Y2gtdGFza1wiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkJhdGNoIFRhc2sgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJsb2NhdGlvblwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkZvbGRlciAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImJhdGNoXCIgLz5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRVcGxvYWRcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG50eXBlIENvbm5lY3RMb2FkZXJEYXRhID0ge1xuXHRoYXNXcmlrZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxDb25uZWN0TG9hZGVyRGF0YT4gPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0cmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc1dyaWtlQ3JlZDogQm9vbGVhbihhd2FpdCB1c2VyPy5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSksXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZWN0KCkge1xuXHRjb25zdCB7IGhhc1dyaWtlQ3JlZCB9ID0gdXNlTG9hZGVyRGF0YTxDb25uZWN0TG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiQ29ubmVjdCB5b3VyIGFjY291bnRzOlwiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEZvcm0gYWN0aW9uPVwiL2F1dGgvd3Jpa2VcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc1dyaWtlQ3JlZFxuXHRcdFx0XHRcdFx0XHQ/IFwiQ29ubmVjdGVkIHRvIFdyaWtlXCJcblx0XHRcdFx0XHRcdFx0OiBcIkNvbm5lY3QgdG8gV3Jpa2VcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4geyB1c2VyOiB1c2VyLnVzZXJJZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJWaWRlbyBUb29saW5nOlwiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PExpbmsgdG89XCIvcHJvamVjdHMvY3JlYXRlXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+TmV3IFByb2plY3Q8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz1cIi92aWRlby1iYXRjaFwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlZpZGVvIEJhdGNoPC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBMb2dpbkxvYWRlckRhdGEgPSB7XG5cdGhhc0dvb2dsZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxMb2dpbkxvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGNvbnN0IGhhc0dvb2dsZUNyZWQgPSB1c2VyXG5cdFx0PyBhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKVxuXHRcdDogZmFsc2U7XG5cblx0aWYgKGhhc0dvb2dsZUNyZWQpIHtcblx0XHRyZWRpcmVjdChcIi9cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc0dvb2dsZUNyZWQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBoYXNHb29nbGVDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPExvZ2luTG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiU2lnbiBpbiB0byB5b3VyIE5leHRUaG91Z2h0IGFjY291bnQ6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC9nb29nbGVcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8R29vZ2xlSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc0dvb2dsZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIlNpZ25lZCBJbiBUbyBHb29nbGVcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiU2lnbiBJbiBUbyBHb29nbGVcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZGQ4ZjRiMDgnLCdlbnRyeSc6eydtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9lbnRyeS5jbGllbnQtTTdDNVNKWU0uanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVDZGR05LVkouanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUhLM1BMMllKLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GVlNFNlA2Ri5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm9vdC1BWEdTTUtXSy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1NMk80TjRJRi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstV1o1TzJZTlguanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVRHR1g0SFJWLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1QVkREVE5EQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRURYMlJSVTYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUVDQURYMkxLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UtVTZLUFpVT0kuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZS9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2stVlVWQUxHNlMuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29ubmVjdCc6eydpZCc6J3JvdXRlcy9jb25uZWN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Nvbm5lY3QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9jb25uZWN0LTU3UFlWRVlOLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVcyMzZNTlY3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GT1pURlBCMy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9pbmRleC0yTkZIUFJBUi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GT1pURlBCMy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dpbi1SSTQzSzNYMy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1XMjM2TU5WNy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRk9aVEZQQjMuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFKMkNZUFVFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2plY3RzL2NsaWVudHMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY2xpZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jbGllbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy1RWkRKMkRBQy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS1BMllLQ0JXTS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GT1pURlBCMy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFKMkNZUFVFLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJzp7J2lkJzoncm91dGVzL3Byb2plY3RzL3NwYWNlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9zcGFjZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMtNkFFTFlNUDQuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFKMkNZUFVFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ZpZGVvLWJhdGNoJzp7J2lkJzoncm91dGVzL3ZpZGVvLWJhdGNoJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ZpZGVvLWJhdGNoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdmlkZW8tYmF0Y2gtRUUzU1hFRkYuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRk9aVEZQQjMuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU5KTVQ3UjZLLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BSjJDWVBVRS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9fc3RhdGljL2J1aWxkL21hbmlmZXN0LUREOEY0QjA4LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7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
