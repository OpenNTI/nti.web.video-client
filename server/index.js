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
    async save(config) {
      const resp = await client.post(`folder/${config.parentFolderId}/folders`, {
        title: this.title,
        description: this.description ?? "",
        project: this.project ?? false
      });
      this.raw = resp;
      return this;
    }
    async getSubFolders() {
      if (!this.id) {
        throw new Error("Unable to get sub tree without folder id");
      }
      const resp = await client.get(`/folders/${this.id}/folders`, { project: false });
      return resp.data.map((raw) => new WrikeFolderClient(raw));
    }
  };
}

// app/api/wrike/Project.server.ts
init_react();
var csv = __toModule(require("@fast-csv/parse"));
function createProjectClass(client) {
  class Video {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }
    addTask(template, properties) {
      this.tasks.push(new VideoTask(template, properties));
    }
    async save(config) {
      const { project } = config;
      const videoTask = client.Task.fromRaw({ title: this.name });
      console.log("Saving Video: ", this.name, this.tasks.length);
      await videoTask.save({ folder: project.folder });
      if (!videoTask.id) {
        throw new Error("Wheres the video id");
      }
      for (let task of this.tasks.reverse()) {
        const template = await project.findTemplate(task.template);
        if (!template) {
          continue;
        }
        const subTask = await template.clone(task.properties, videoTask);
        await subTask.save({ folder: project.folder });
      }
    }
  }
  class VideoTask {
    constructor(template, properties) {
      this.template = template;
      this.properties = properties;
    }
  }
  return class WrikeProjectClient {
    constructor({ folder }) {
      this.videos = new Map();
      this.templateCache = new Map();
      this.folder = folder;
    }
    static async fromPermaLink(link) {
      const folder = await client.Folder.fromPermaLink(link);
      if (!folder.project) {
        throw new Error("Not a project");
      }
      return new WrikeProjectClient({ folder });
    }
    async importCSV(file, options) {
      const text = await file.text();
      return new Promise((fulfill, reject) => {
        csv.parseString(text, options).on("error", (err) => reject(err)).on("data", (row) => {
          var _b;
          const _a = row, { video, template } = _a, properties = __objRest(_a, ["video", "template"]);
          (_b = this.video(video)) == null ? void 0 : _b.addTask(template, properties);
        }).on("end", () => fulfill(this));
      });
    }
    video(name) {
      if (!this.videos.has(name)) {
        const video = new Video(name);
        this.videos.set(name, video);
        return video;
      }
      return this.videos.get(name);
    }
    async save(config) {
      if (!this.folder.id) {
        throw new Error("Unable to find projects folder");
      }
      console.log("Saving Videos: ", Array.from(this.videos.values()));
      await Promise.all(Array.from(this.videos.values()).map((v) => v.save({ project: this })));
      return this;
    }
    async findTemplate(name) {
      if (!this.templateCache.has(name)) {
        const loader10 = async () => {
          const subFolders = await this.folder.getSubFolders();
          const templateFolder = subFolders.find((f) => f.title === "templates");
          if (!templateFolder) {
            return null;
          }
          const template = await client.TaskTemplate.fromTitle(name, templateFolder);
          return template;
        };
        this.templateCache.set(name, loader10());
      }
      return this.templateCache.get(name) ?? null;
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
  constructor(credentials) {
    this.credentials = credentials;
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
    return new WrikeClient(wrikeCred);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLnRzeCIsICIuLi9hcHAvYXBpL2F1dGguc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvYXV0aC1zdHJhdGVnaWVzL1dyaWtlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9Vc2VyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9CYXNlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2RhdGFiYXNlL1RhYmxlLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy50c3giLCAiLi4vYXBwL2FwaS93cmlrZS9DbGllbnQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ3VzdG9tRmllbGQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvRm9sZGVyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Byb2plY3Quc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvU3BhY2Uuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFzay5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9UYXNrVGVtcGxhdGUuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVmlkZW9CYXRjaFRhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvV29ya2Zsb3cuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL09uTW91bnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbGVJbnB1dC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3giLCAicm91dGU6L1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2FyY2hpdGVjdFwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcblx0YnVpbGQsXG5cdG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9hbmRyZXcubGlnb24vdmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2FuZHJldy5saWdvbi92aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvYW5kcmV3LmxpZ29uL3ZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9jbGllbnRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jbGllbnRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2plY3RzL2NsaWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInByb2plY3RzL2NyZWF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvc3BhY2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvc3BhY2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLyRzZXJ2aWNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvOnNlcnZpY2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3ZpZGVvLWJhdGNoXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy92aWRlby1iYXRjaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ2aWRlby1iYXRjaFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29ubmVjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29ubmVjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb25uZWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoaHRtbDogc3RyaW5nLCBjc3M6IHN0cmluZykge1xuXHRjb25zdCBwYWdlID0gaHRtbC5yZXBsYWNlKFwiX19jZmc6U1RZTEVTX19cIiwgY3NzKTtcblxuXHRyZXR1cm4gYDwhRE9DVFlQRSBodG1sPiR7cGFnZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcblx0cmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuXHRyZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG5cdGNvbnN0IHN0eWxlU2VydmVyID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cblx0Y29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG5cdFx0PFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cblx0KTtcblxuXHRjb25zdCBzdHlsZUNodW5rcyA9IHN0eWxlU2VydmVyLmV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKG1hcmt1cCk7XG5cdGNvbnN0IHN0eWxlcyA9IHN0eWxlU2VydmVyLmNvbnN0cnVjdFN0eWxlVGFnc0Zyb21DaHVua3Moc3R5bGVDaHVua3MpO1xuXG5cdHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cblx0cmV0dXJuIG5ldyBSZXNwb25zZShyZW5kZXJQYWdlKG1hcmt1cCwgc3R5bGVzKSwge1xuXHRcdHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuXHRcdGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcblx0fSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IENhY2hlS2V5ID0gXCJudC1jc3NcIjtcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSh7IGtleTogQ2FjaGVLZXkgfSk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdGRlZmF1bHQ6IFwiI2ZiZmJmYlwiLFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRNdWlCdXR0b25CYXNlOiB7XG5cdFx0XHRkZWZhdWx0UHJvcHM6IHtcblx0XHRcdFx0ZGlzYWJsZVJpcHBsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHM6IG9iamVjdCkgPT4gKFxuXHQ8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuXHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0gey4uLnByb3BzfSAvPlxuXHQ8L0NhY2hlUHJvdmlkZXI+XG4pO1xuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vdGhlbWUubWF0ZXJpYWxcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiTmV4dFRob3VnaHRcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxQcm92aWRlcj5cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFByb3BzID0ge1xuXHRjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fY2ZnOlNUWUxFU19fXCIgOiBudWxsfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlIENhbGxiYWNrOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiL1wiLFxuXHRcdGZhaWx1cmU6IFwiL2xvZ2luXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLmdvb2dsZVxuXHQpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9TRUNSRVQpIHtcblx0YXV0aC51c2UoXG5cdFx0bmV3IFdyaWtlU3RyYXRlZ3koXG5cdFx0XHR7XG5cdFx0XHRcdGNsaWVudElEOiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL2F1dGgvd3Jpa2UvY2FsbGJhY2tcIixcblx0XHRcdFx0c2NvcGU6IFwiRGVmYXVsdCx3c1JlYWRXcml0ZVwiLFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIChwcm9maWxlKSA9PiBwcm9maWxlXG5cdFx0KSxcblx0XHRTZXJ2aWNlLndyaWtlXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uVXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cblx0aWYgKCF1c2VySWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBVc2VyLmdldEZvcklkKHVzZXJJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChcblx0c2VydmljZTogU2VydmljZSxcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVkaXJlY3RzOiB7IHN1Y2Nlc3M6IHN0cmluZzsgZmFpbHVyZTogc3RyaW5nIH1cbikgPT4ge1xuXHRjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUgfSA9IGF3YWl0IGF1dGguYXV0aGVudGljYXRlKFxuXHRcdHNlcnZpY2UsXG5cdFx0cmVxdWVzdFxuXHQpO1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihcblx0XHRyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG5cdCk7XG5cblx0Y29uc29sZS5sb2cocHJvZmlsZSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoIXByb2ZpbGUuaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTk8gSUQ/IT8hOiBcIiwgcHJvZmlsZSk7XG5cdFx0XHR0aHJvdyBcIndoYXRcIjtcblx0XHR9XG5cblx0XHRsZXQgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRcdGlmICghY3VycmVudFVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2V0dGluZyBDdXJyZW50IFVzZXI6IFwiLCBwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblx0XHRcdGN1cnJlbnRVc2VyID0gYXdhaXQgVXNlci5nZXRGb3JPYXV0aChwcm9maWxlLmlkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHVzZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHNldENhY2hlZChjdXJyZW50VXNlcikpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGN1cnJlbnRVc2VyLnNldENyZWRlbnRpYWxzKHNlcnZpY2UsIHtcblx0XHRcdGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcblx0XHRcdHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLmZhaWx1cmUpO1xuXHR9XG5cblx0dGhyb3cgcmVkaXJlY3QocmVkaXJlY3RzLnN1Y2Nlc3MsIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBTdHJhdGVneVZlcmlmeUNhbGxiYWNrIH0gZnJvbSBcInJlbWl4LWF1dGhcIjtcbmltcG9ydCB0eXBlIHtcblx0T0F1dGgyUHJvZmlsZSxcblx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXMsXG59IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneU9wdGlvbnMgPSB7XG5cdGNsaWVudElEOiBzdHJpbmc7XG5cdGNsaWVudFNlY3JldDogc3RyaW5nO1xuXHRjYWxsYmFja1VSTDogc3RyaW5nO1xuXHRzY29wZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcyA9IHtcblx0c2NvcGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvZmlsZSA9IHtcblx0aWQ6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdF9qc29uOiB7XG5cdFx0a2luZHM6IHN0cmluZztcblx0XHRkYXRhOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBzdHJpbmc7XG5cdFx0XHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdFx0XHRsYXN0TmFtZTogc3RyaW5nO1xuXHRcdFx0fVxuXHRcdF07XG5cdH07XG5cdHByb3ZpZGVyOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VTdHJhdGVneTxVc2VyPiBleHRlbmRzIE9BdXRoMlN0cmF0ZWd5PFxuXHRVc2VyLFxuXHRXcmlrZVByb2ZpbGUsXG5cdFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtc1xuPiB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdXNlckluZm9VUkwgPVxuXHRcdFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9jb250YWN0cz9tZT10cnVlXCI7XG5cdHByaXZhdGUgc2NvcGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zOiBXcmlrZVN0cmF0ZWd5T3B0aW9ucyxcblx0XHR2ZXJpZnk6IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2s8XG5cdFx0XHRVc2VyLFxuXHRcdFx0T0F1dGgyU3RyYXRlZ3lWZXJpZnlQYXJhbXM8V3Jpa2VQcm9maWxlLCBXcmlrZVN0cmF0ZWd5RXh0cmFQYXJhbXM+XG5cdFx0PlxuXHQpIHtcblx0XHRzdXBlcihcblx0XHRcdHtcblx0XHRcdFx0YXV0aG9yaXphdGlvblVSTDogXCJodHRwczovL2xvZ2luLndyaWtlLmNvbS9vYXV0aDIvYXV0aG9yaXplL3Y0XCIsXG5cdFx0XHRcdHRva2VuVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi90b2tlblwiLFxuXHRcdFx0XHRjbGllbnRJRDogb3B0aW9ucy5jbGllbnRJRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBvcHRpb25zLmNsaWVudFNlY3JldCxcblx0XHRcdFx0Y2FsbGJhY2tVUkw6IG9wdGlvbnMuY2FsbGJhY2tVUkwsXG5cdFx0XHR9LFxuXHRcdFx0dmVyaWZ5XG5cdFx0KTtcblxuXHRcdHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xuXHR9XG5cblx0cHJvdGVjdGVkIGF1dGhvcml6YXRpb25QYXJhbXMoKTogVVJMU2VhcmNoUGFyYW1zIHtcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRpZiAodGhpcy5zY29wZSkge1xuXHRcdFx0cGFyYW1zLnNldChcInNjb3BlXCIsIHRoaXMuc2NvcGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgdXNlclByb2ZpbGUoYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8V3Jpa2VQcm9maWxlPiB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVzZXJJbmZvVVJMLCB7XG5cdFx0XHRoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBwYXlsb2FkOiBXcmlrZVByb2ZpbGVbXCJfanNvblwiXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhWzBdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBkYXRhLmlkLFxuXHRcdFx0Zmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcblx0XHRcdGxhc3ROYW1lOiBkYXRhLmxhc3ROYW1lLFxuXHRcdFx0X2pzb246IHBheWxvYWQsXG5cdFx0XHRwcm92aWRlcjogXCJ3cmlrZVwiLFxuXHRcdH07XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcbmltcG9ydCBDcmVkZW50aWFsLCB7IFNlcnZpY2UsIFRva2VucyB9IGZyb20gXCIuL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmNvbnN0IEV4aXN0aW5nID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgY29uc3Qgc2V0Q2FjaGVkID0gKHVzZXI6IFVzZXIpID0+IChcblx0RXhpc3Rpbmcuc2V0KHVzZXIudXNlcklkLCB1c2VyKSwgdXNlci51c2VySWRcbik7XG5leHBvcnQgY29uc3QgZ2V0Q2FjaGVkID0gKHVzZXJJZDogc3RyaW5nKSA9PiBFeGlzdGluZy5nZXQodXNlcklkKTtcblxuY2xhc3MgT2F1dGhJZCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJPYXV0aElkc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHRwcm9maWxlSWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5uYXRpdmVFbnVtKFNlcnZpY2UpLFxuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhYmxlLnB1dCh7IHByb2ZpbGVJZCwgc2VydmljZSwgdXNlcklkOiB1dWlkKCkgfSk7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBPYXV0aElkLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHByb2ZpbGVJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5wcm9maWxlSWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdHN0YXRpYyBhc3luYyBnZXRGb3JPYXV0aChwcm9maWxlSWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IG9hdXRoSWQgPSBhd2FpdCBPYXV0aElkLmZpbmRPckNyZWF0ZShwcm9maWxlSWQsIHNlcnZpY2UpO1xuXG5cdFx0aWYgKCFvYXV0aElkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFVzZXIob2F1dGhJZC51c2VySWQpO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEZvcklkKHVzZXJJZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBVc2VyKHVzZXJJZCk7XG5cdH1cblxuXHR1c2VySWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGNyZWRlbnRpYWxzOiBNYXA8U2VydmljZSwgQ3JlZGVudGlhbD47XG5cblx0Y29uc3RydWN0b3IodXNlcklkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0XHR0aGlzLmNyZWRlbnRpYWxzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0c2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSwgdG9rZW5zOiBUb2tlbnMpIHtcblx0XHRyZXR1cm4gQ3JlZGVudGlhbC5hZGRPclVwZGF0ZSh0aGlzLnVzZXJJZCwgc2VydmljZSwgdG9rZW5zKTtcblx0fVxuXG5cdGFzeW5jIGdldENyZWRlbnRpYWxzKHNlcnZpY2U6IFNlcnZpY2UpIHtcblx0XHRpZiAoIXRoaXMuY3JlZGVudGlhbHMuaGFzKHNlcnZpY2UpKSB7XG5cdFx0XHRjb25zdCBjcmVkID0gYXdhaXQgQ3JlZGVudGlhbC5nZXRDcmVkZW50aWFsKHRoaXMudXNlcklkLCBzZXJ2aWNlKTtcblxuXHRcdFx0aWYgKGNyZWQpIHtcblx0XHRcdFx0dGhpcy5jcmVkZW50aWFscy5zZXQoc2VydmljZSwgY3JlZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KHNlcnZpY2UpO1xuXHR9XG5cblx0YXN5bmMgaGFzQ3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IGNyZWQgPSBhd2FpdCB0aGlzLmdldENyZWRlbnRpYWxzKHNlcnZpY2UpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oY3JlZCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgeiBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi4vZGF0YWJhc2UvVGFibGUuc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbCB7XG5cdHN0YXRpYyBUYWJsZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRzdGF0aWMgU2NoZW1hID0gei5vYmplY3Qoe30pO1xuXG5cdHN0YXRpYyBnZXRUYWJsZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KHRoaXM6IFQpIHtcblx0XHRyZXR1cm4gbmV3IFRhYmxlPEluc3RhbmNlVHlwZTxUPj4odGhpcy5UYWJsZU5hbWUsICguLi5hcmdzKSA9PlxuXHRcdFx0dGhpcy5jcmVhdGUoLi4uYXJncylcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZTxUIGV4dGVuZHMgdHlwZW9mIEJhc2VNb2RlbCA9IHR5cGVvZiBCYXNlTW9kZWw+KFxuXHRcdHRoaXM6IFQsXG5cdFx0cmF3OiBvYmplY3Rcblx0KSB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzKHJhdykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHR9XG5cblx0ZGF0YTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJhdzogb2JqZWN0KSB7XG5cdFx0dGhpcy5kYXRhID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIEJhc2VNb2RlbCkuU2NoZW1hLnBhcnNlKHJhdyk7XG5cdH1cbn1cbiIsICJpbXBvcnQgYXJjIGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgQXJjVGFibGUgfSBmcm9tIFwiQGFyY2hpdGVjdC9mdW5jdGlvbnMvdGFibGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlPFQ+IHtcblx0cHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuXHRwcml2YXRlIHRhYmxlOiBBcmNUYWJsZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQ7XG5cblx0Y29uc3RydWN0b3IodGFibGVOYW1lOiBzdHJpbmcgfCBudWxsLCBwYXJzZTogKHJhdzogb2JqZWN0KSA9PiBUKSB7XG5cdFx0aWYgKCF0YWJsZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRhYmxlIG11c3QgYmUgZ2l2ZW4gYSB0YWJsZSBuYW1lLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLnRhYmxlTmFtZSA9IHRhYmxlTmFtZTtcblx0XHR0aGlzLnBhcnNlID0gcGFyc2U7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy50YWJsZU5hbWU7XG5cdH1cblxuXHRhc3luYyBzZXR1cFRhYmxlKCkge1xuXHRcdGlmICghdGhpcy50YWJsZSkge1xuXHRcdFx0Y29uc3QgdGFibGVzID0gYXdhaXQgYXJjLnRhYmxlcygpO1xuXG5cdFx0XHR0aGlzLnRhYmxlID0gdGFibGVzW3RoaXMudGFibGVOYW1lXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy50YWJsZTtcblx0fVxuXG5cdGFzeW5jIGdldChrZXk6IGFueSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0cmV0dXJuIHJlc3AgPyB0aGlzLnBhcnNlKHJlc3ApIDogbnVsbDtcblx0fVxuXG5cdGFzeW5jIHB1dChkYXRhOiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCB0YWJsZS5wdXQoZGF0YSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgdXBkYXRlKHF1ZXJ5OiBvYmplY3QpIHtcblx0XHRjb25zdCB0YWJsZSA9IGF3YWl0IHRoaXMuc2V0dXBUYWJsZSgpO1xuXG5cdFx0YXdhaXQgdGFibGUudXBkYXRlKHF1ZXJ5KTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zID0ge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRyZWZyZXNoVG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuXHRnb29nbGUgPSBcImdvb2dsZVwiLFxuXHR3cmlrZSA9IFwid3Jpa2VcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlZGVudGlhbCBleHRlbmRzIEJhc2Uge1xuXHRzdGF0aWMgVGFibGVOYW1lID0gXCJDcmVkZW50aWFsc1wiO1xuXHRzdGF0aWMgU2NoZW1hID0gQmFzZS5TY2hlbWEuZXh0ZW5kKHtcblx0XHR1c2VySWQ6IHouc3RyaW5nKCksXG5cdFx0c2VydmljZTogei5lbnVtKFtcImdvb2dsZVwiLCBcIndyaWtlXCJdKSxcblx0XHRhY2Nlc3NUb2tlbjogei5zdHJpbmcoKSxcblx0XHQvLyByZWZyZXNoVG9rZW46IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcblx0fSk7XG5cblx0c3RhdGljIGFzeW5jIGFkZE9yVXBkYXRlKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGtleSA9IHsgdXNlcklkLCBzZXJ2aWNlIH07XG5cdFx0Y29uc29sZS5sb2coXCJhZGRpbmcgY3JlZGVudGlhbDogXCIsIGtleSk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoa2V5KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0YXdhaXQgdGFibGUudXBkYXRlKHtcblx0XHRcdFx0S2V5OiBrZXksXG5cdFx0XHRcdFVwZGF0ZUV4cHJlc3Npb246IFwiU0VUIGFjY2Vzc1Rva2VuID0gOmFjY2Vzc1Rva2VuXCIsXG5cdFx0XHRcdEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcblx0XHRcdFx0XHRcIjphY2Nlc3NUb2tlblwiOiB0b2tlbnMuYWNjZXNzVG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgdGFibGUucHV0KHtcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHRzZXJ2aWNlLFxuXHRcdFx0XHQuLi50b2tlbnMsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Q3JlZGVudGlhbCh1c2VySWQ6IHN0cmluZywgc2VydmljZTogU2VydmljZSkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5nZXRUYWJsZSgpO1xuXHRcdGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgdGFibGUuZ2V0KHsgdXNlcklkLCBzZXJ2aWNlIH0pO1xuXG5cdFx0cmV0dXJuIGV4aXN0aW5nO1xuXHR9XG5cblx0ZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlZGVudGlhbC5TY2hlbWE+IHwgdW5kZWZpbmVkO1xuXG5cdGdldCB1c2VySWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8udXNlcklkID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgc2VydmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5zZXJ2aWNlID8/IFwiXCI7XG5cdH1cblxuXHRnZXQgYWNjZXNzVG9rZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uYWNjZXNzVG9rZW4gPz8gXCJcIjtcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcblx0Y29va2llOiB7XG5cdFx0bmFtZTogXCJudGkuc2Vzc2lvblwiLFxuXHRcdHNhbWVTaXRlOiBcImxheFwiLFxuXHRcdHBhdGg6IFwiL1wiLFxuXHRcdHNlY3JldHM6IFtcIk4zeHRUaDB1Z2h0ISFDXCJdLFxuXHR9LFxufSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIENsaWVudCA9IHtcblx0dGl0bGU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENsaWVudFJlc3BvbnNlID0ge1xuXHRjbGllbnRzOiBDbGllbnRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuXG5cdGNvbnN0IHNwYWNlSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNwYWNlSWRcIik7XG5cdGNvbnN0IFdyaWtlID0gYXdhaXQgV3Jpa2VDbGllbnQuZm9yU2Vzc2lvbihyZXF1ZXN0KTtcblxuXHRpZiAoIXNwYWNlSWQpIHtcblx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJNdXN0IGhhdmUgYSBzcGFjZUlkXCIsIHsgc3RhdHVzOiA0MjIgfSk7XG5cdH1cblxuXHRjb25zdCBmb2xkZXJzID0gYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21TcGFjZShzcGFjZUlkLCB7IHByb2plY3Q6IGZhbHNlIH0pO1xuXG5cdHJldHVybiBqc29uKHtcblx0XHRjbGllbnRzOiBmb2xkZXJzLm1hcCgoZikgPT4gKHsgaWQ6IGYuaWQsIHRpdGxlOiBmLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIENyZWRlbnRpYWwgZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwiLi4vYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21GaWVsZENsYXNzIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXJDbGFzcyB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VQcm9qZWN0Q2xhc3MgfSBmcm9tIFwiLi9Qcm9qZWN0LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTcGFjZUNsYXNzIH0gZnJvbSBcIi4vU3BhY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0NsYXNzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzIH0gZnJvbSBcIi4vVmlkZW9CYXRjaFRhc2suc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlV29ya0Zsb3dDbGFzcyB9IGZyb20gXCIuL1dvcmtmbG93LnNlcnZlclwiO1xuXG5jb25zdCBCYXNlVVJMID0gXCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L1wiO1xuXG50eXBlIEZldGNoQ29uZmlnID0ge1xuXHRtZXRob2Q6IHN0cmluZztcblx0aGVhZGVyczoge1xuXHRcdEF1dGhvcml6YXRpb246IHN0cmluZztcblx0XHRcIkNvbnRlbnQtVHlwZVwiPzogc3RyaW5nO1xuXHR9O1xuXHRib2R5Pzogc3RyaW5nO1xuXHRzaWduYWw/OiBBYm9ydFNpZ25hbDtcbn07XG5cbmNvbnN0IGVuY29kZVZhbHVlID0gKHZhbHVlOiBhbnkpOiBzdHJpbmcgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gYFske3ZhbHVlLm1hcCgoaSkgPT4gYFwiJHtlbmNvZGVWYWx1ZShpKX1cImApLmpvaW4oXCIsXCIpfV1gO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY2xhc3MgV3Jpa2VDbGllbnQge1xuXHRzdGF0aWMgYXN5bmMgZm9yU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRcdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdFx0aWYgKCF3cmlrZUNyZWQpIHtcblx0XHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkKTtcblx0fVxuXG5cdEN1c3RvbUZpZWxkOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3M7XG5cdEZvbGRlcjogV3Jpa2VGb2xkZXJDbGFzcztcblx0UHJvamVjdDogV3Jpa2VQcm9qZWN0Q2xhc3M7XG5cdFNwYWNlOiBXcmlrZVNwYWNlQ2xhc3M7XG5cdFRhc2s6IFdyaWtlVGFza0NsYXNzO1xuXHRUYXNrVGVtcGxhdGU6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3M7XG5cdFZpZGVvQmF0Y2g6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcztcblx0V29ya2Zsb3c6IFdyaWtlV29ya0Zsb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsKSB7XG5cdFx0dGhpcy5DdXN0b21GaWVsZCA9IGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5Gb2xkZXIgPSBjcmVhdGVGb2xkZXJDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlByb2plY3QgPSBjcmVhdGVQcm9qZWN0Q2xhc3ModGhpcyk7XG5cdFx0dGhpcy5TcGFjZSA9IGNyZWF0ZVNwYWNlQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5UYXNrID0gY3JlYXRlVGFza0NsYXNzKHRoaXMpO1xuXHRcdHRoaXMuVGFza1RlbXBsYXRlID0gY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5WaWRlb0JhdGNoID0gY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyh0aGlzKTtcblx0XHR0aGlzLldvcmtmbG93ID0gY3JlYXRlV29ya0Zsb3dDbGFzcyh0aGlzKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgZmV0Y2g8VCA9IHt9Pihcblx0XHR1cmw6IHN0cmluZyxcblx0XHRtZXRob2Q6IHN0cmluZyxcblx0XHRkYXRhPzogb2JqZWN0XG5cdCk6IFByb21pc2U8VD4ge1xuXHRcdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdFx0Y29uc3QgY29uZmlnOiBGZXRjaENvbmZpZyA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY3JlZGVudGlhbHMuYWNjZXNzVG9rZW59YCxcblx0XHRcdH0sXG5cdFx0XHRzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuXHRcdH07XG5cblx0XHRpZiAoZGF0YSAmJiBjb25maWcuaGVhZGVycykge1xuXHRcdFx0Y29uZmlnLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPVxuXHRcdFx0XHRcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuXHRcdH1cblxuXHRcdGlmIChkYXRhKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cblx0XHRcdE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW2tleSwgdmFsdWVdKSA9PlxuXHRcdFx0XHRwYXJhbXMuc2V0KGtleSwgZW5jb2RlVmFsdWUodmFsdWUpKVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uZmlnLmJvZHkgPSBwYXJhbXMudG9TdHJpbmcoKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhcIldSSUtFIFJlcXVlc3Q6IFwiLCB1cmwsIG1ldGhvZCwgY29uZmlnLmJvZHksIGRhdGEpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIDEwMDAwKTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBjb25maWcpO1xuXHRcdGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRjb25zb2xlLmxvZyhcIkdvdCBXUklLRSBSZXNwb25zZTogXCIsIGpzb24pO1xuXG5cdFx0aWYgKGpzb24uZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihqc29uLmVycm9yRGVzY3JpcHRpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBqc29uIGFzIFQ7XG5cdH1cblxuXHRnZXQ8VCA9IHt9PihwYXRoOiBzdHJpbmcgPSBcIlwiLCBwYXJhbXM6IG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChgJHtCYXNlVVJMfSR7cGF0aH1gKTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PlxuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCBlbmNvZGVWYWx1ZSh2YWx1ZSkpXG5cdFx0KTtcblxuXHRcdHJldHVybiB0aGlzLmZldGNoPFQ+KHVybC50b1N0cmluZygpLCBcIkdFVFwiKTtcblx0fVxuXG5cdHBvc3Q8VCA9IHt9PihwYXRoOiBzdHJpbmcgPSBcIlwiLCBkYXRhOiBvYmplY3QgPSB7fSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoPFQ+KGAke0Jhc2VVUkx9JHtwYXRofWAsIFwiUE9TVFwiLCBkYXRhKTtcblx0fVxufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5cbnR5cGUgQ3VzdG9tRmllbGRSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcbn07XG5cbnR5cGUgQ3VzdG9tRmllbGRSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBDdXN0b21GaWVsZFJhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZUN1c3RvbUZpZWxkQ2xhc3MgPSB7XG5cdG5ldyAocmF3OiBDdXN0b21GaWVsZFJhdyk6IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZTtcblxuXHRmcm9tSWRzOiAoaWQ6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZVtdPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21GaWVsZENsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VDdXN0b21GaWVsZENsaWVudCBpbXBsZW1lbnRzIFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21JZHMoaWRzOiBzdHJpbmdbXSkge1xuXHRcdFx0Y29uc3QgQ2xzID0gdGhpcztcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PEN1c3RvbUZpZWxkUmVzcG9uc2U+KFxuXHRcdFx0XHRgY3VzdG9tZmllbGRzLyR7aWRzLmpvaW4oXCIsXCIpfWBcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyYXcpID0+IG5ldyBDbHMocmF3KSk7XG5cdFx0fVxuXG5cdFx0cHJvdGVjdGVkIHJhdzogQ3VzdG9tRmllbGRSYXc7XG5cblx0XHRjb25zdHJ1Y3RvcihyYXc6IEN1c3RvbUZpZWxkUmF3KSB7XG5cdFx0XHR0aGlzLnJhdyA9IHJhdztcblx0XHR9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXc/LnRpdGxlO1xuXHRcdH1cblx0XHRnZXQgdHlwZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udHlwZTtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cHJvamVjdDogYm9vbGVhbjtcblxuXHRzYXZlOiAoY29uZmlnOiBGb2xkZXJTYXZlQ29uZmlnKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXG5cdGdldFN1YkZvbGRlcnM6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckNsYXNzIHtcblx0bmV3IChyYXc6IEZvbGRlclJhdyk6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cblx0ZnJvbVNwYWNlOiAoXG5cdFx0c3BhY2VJZDogc3RyaW5nLFxuXHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHQpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbUlEczogKGlkczogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZnJvbVBlcm1hTGluazogKGlkOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cdGNyZWF0ZTogKFxuXHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0ZGVzY3JpcHRpb246IHN0cmluZyxcblx0XHRwcm9qZWN0OiBib29sZWFuXG5cdCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcbn1cblxudHlwZSBGb2xkZXJSYXcgPSB7XG5cdGlkPzogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0cHJvamVjdDogYm9vbGVhbjtcblx0Y2hpbGRJZHM/OiBzdHJpbmdbXTtcbn07XG5cbnR5cGUgVHJlZVJlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IEZvbGRlclJhd1tdO1xufTtcblxudHlwZSBGb2xkZXJTYXZlQ29uZmlnID0ge1xuXHRwYXJlbnRGb2xkZXJJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZUZvbGRlckNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlRm9sZGVyQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VGb2xkZXJJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21TcGFjZShcblx0XHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgL3NwYWNlcy8ke3NwYWNlSWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHRwYXJhbXNcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tSURzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsobGluazogc3RyaW5nKTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0cmVlID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFwiZm9sZGVyc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluazogbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSB0cmVlLmRhdGFbMF07XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoZm9sZGVyKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgY3JlYXRlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRwcm9qZWN0OiBib29sZWFuXG5cdFx0KTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRyZXR1cm4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0IH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBGb2xkZXJSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cdFx0Z2V0IGRlc2NyaXB0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmRlc2NyaXB0aW9uO1xuXHRcdH1cblx0XHRnZXQgcHJvamVjdCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wcm9qZWN0O1xuXHRcdH1cblx0XHRnZXQgY2hpbGRJZHMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuY2hpbGRJZHM7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IEZvbGRlclNhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxGb2xkZXJSYXc+KFxuXHRcdFx0XHRgZm9sZGVyLyR7Y29uZmlnLnBhcmVudEZvbGRlcklkfS9mb2xkZXJzYCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8/IFwiXCIsXG5cdFx0XHRcdFx0cHJvamVjdDogdGhpcy5wcm9qZWN0ID8/IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHJlc3A7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGFzeW5jIGdldFN1YkZvbGRlcnMoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBzdWIgdHJlZSB3aXRob3V0IGZvbGRlciBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YC9mb2xkZXJzLyR7dGhpcy5pZH0vZm9sZGVyc2AsXG5cdFx0XHRcdHsgcHJvamVjdDogZmFsc2UgfVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHJhdykgPT4gbmV3IFdyaWtlRm9sZGVyQ2xpZW50KHJhdykpO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgKiBhcyBjc3YgZnJvbSBcIkBmYXN0LWNzdi9wYXJzZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBUYXNrUmF3IH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHtcblx0V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSxcblx0Q2xvbmVEYXRhLFxufSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0ge1xuXHR2aWRlbzogc3RyaW5nO1xuXHR0ZW1wbGF0ZTogc3RyaW5nO1xufSAmIENsb25lRGF0YTtcblxudHlwZSBQcm9qZWN0U2F2ZUNvbmZpZyA9IHtcblx0dGVtcGxhdGVQZXJtYUxpbms6IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBWaWRlb1Byb2plY3Qge1xuXHRhZGRUYXNrOiAodGVtcGxhdGU6IHN0cmluZywgcHJvcGVydGllczogQ2xvbmVEYXRhKSA9PiB2b2lkO1xuXHRzYXZlOiAoY29uZmlnOiB7IHByb2plY3Q6IFdyaWtlUHJvamVjdEluc3RhbmNlIH0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VQcm9qZWN0SW5zdGFuY2Uge1xuXHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2UgfCB1bmRlZmluZWQ7XG5cdHZpZGVvOiAobmFtZTogc3RyaW5nKSA9PiBWaWRlb1Byb2plY3QgfCB1bmRlZmluZWQ7XG5cdGltcG9ydENTVjogKFxuXHRcdGZpbGU6IEZpbGUsXG5cdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVByb2plY3RJbnN0YW5jZT47XG5cdHNhdmU6IChjb25maWc6IFByb2plY3RTYXZlQ29uZmlnKSA9PiBQcm9taXNlPFdyaWtlUHJvamVjdEluc3RhbmNlPjtcblx0ZmluZFRlbXBsYXRlOiAobmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfCBudWxsPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVByb2plY3RDbGFzczxUID0gV3Jpa2VQcm9qZWN0SW5zdGFuY2U+IHtcblx0bmV3IChjb25maWc6IHsgZm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlIH0pOiBUO1xuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFQ+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVByb2plY3RDbGFzcyB7XG5cdGNsYXNzIFZpZGVvIGltcGxlbWVudHMgVmlkZW9Qcm9qZWN0IHtcblx0XHRwcml2YXRlIHRhc2tzOiBWaWRlb1Rhc2tbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge31cblxuXHRcdGFkZFRhc2sodGVtcGxhdGU6IHN0cmluZywgcHJvcGVydGllczogQ2xvbmVEYXRhKSB7XG5cdFx0XHR0aGlzLnRhc2tzLnB1c2gobmV3IFZpZGVvVGFzayh0ZW1wbGF0ZSwgcHJvcGVydGllcykpO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnOiB7IHByb2plY3Q6IFdyaWtlUHJvamVjdEluc3RhbmNlIH0pIHtcblx0XHRcdGNvbnN0IHsgcHJvamVjdCB9ID0gY29uZmlnO1xuXG5cdFx0XHRjb25zdCB2aWRlb1Rhc2sgPSBjbGllbnQuVGFzay5mcm9tUmF3KHsgdGl0bGU6IHRoaXMubmFtZSB9KTtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgVmlkZW86IFwiLCB0aGlzLm5hbWUsIHRoaXMudGFza3MubGVuZ3RoKTtcblxuXHRcdFx0YXdhaXQgdmlkZW9UYXNrLnNhdmUoeyBmb2xkZXI6IHByb2plY3QuZm9sZGVyIH0pO1xuXG5cdFx0XHRpZiAoIXZpZGVvVGFzay5pZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXaGVyZXMgdGhlIHZpZGVvIGlkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCB0YXNrIG9mIHRoaXMudGFza3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgcHJvamVjdC5maW5kVGVtcGxhdGUodGFzay50ZW1wbGF0ZSk7XG5cblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc3ViVGFzayA9IGF3YWl0IHRlbXBsYXRlLmNsb25lKFxuXHRcdFx0XHRcdHRhc2sucHJvcGVydGllcyxcblx0XHRcdFx0XHR2aWRlb1Rhc2tcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRhd2FpdCBzdWJUYXNrLnNhdmUoeyBmb2xkZXI6IHByb2plY3QuZm9sZGVyIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNsYXNzIFZpZGVvVGFzayB7XG5cdFx0Y29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBzdHJpbmcsIHB1YmxpYyBwcm9wZXJ0aWVzOiBDbG9uZURhdGEpIHt9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VQcm9qZWN0SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rKFxuXHRcdFx0bGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxXcmlrZVByb2plY3RJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgZm9sZGVyID0gYXdhaXQgY2xpZW50LkZvbGRlci5mcm9tUGVybWFMaW5rKGxpbmspO1xuXG5cdFx0XHRpZiAoIWZvbGRlci5wcm9qZWN0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHByb2plY3RcIik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VQcm9qZWN0Q2xpZW50KHsgZm9sZGVyIH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdmlkZW9zOiBNYXA8c3RyaW5nLCBWaWRlb1Byb2plY3Q+ID0gbmV3IE1hcCgpO1xuXHRcdHByaXZhdGUgdGVtcGxhdGVDYWNoZTogTWFwPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIHwgbnVsbD5cblx0XHQ+ID0gbmV3IE1hcCgpO1xuXG5cdFx0cHVibGljIGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcblxuXHRcdGNvbnN0cnVjdG9yKHsgZm9sZGVyIH06IHsgZm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlIH0pIHtcblx0XHRcdHRoaXMuZm9sZGVyID0gZm9sZGVyO1xuXHRcdH1cblxuXHRcdGFzeW5jIGltcG9ydENTVihcblx0XHRcdGZpbGU6IEZpbGUsXG5cdFx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0XHQpOiBQcm9taXNlPFdyaWtlUHJvamVjdEluc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHZpZGVvLCB0ZW1wbGF0ZSwgLi4ucHJvcGVydGllcyB9ID0gcm93O1xuXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvKHZpZGVvKT8uYWRkVGFzayh0ZW1wbGF0ZSwgcHJvcGVydGllcyk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR2aWRlbyhuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGlmICghdGhpcy52aWRlb3MuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gbmV3IFZpZGVvKG5hbWUpO1xuXG5cdFx0XHRcdHRoaXMudmlkZW9zLnNldChuYW1lLCB2aWRlbyk7XG5cblx0XHRcdFx0cmV0dXJuIHZpZGVvO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy52aWRlb3MuZ2V0KG5hbWUpO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoY29uZmlnPzogUHJvamVjdFNhdmVDb25maWcpIHtcblx0XHRcdGlmICghdGhpcy5mb2xkZXIuaWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgcHJvamVjdHMgZm9sZGVyXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBWaWRlb3M6IFwiLCBBcnJheS5mcm9tKHRoaXMudmlkZW9zLnZhbHVlcygpKSk7XG5cblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdFx0XHRBcnJheS5mcm9tKHRoaXMudmlkZW9zLnZhbHVlcygpKS5tYXAoKHYpID0+XG5cdFx0XHRcdFx0di5zYXZlKHsgcHJvamVjdDogdGhpcyB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRhc3luYyBmaW5kVGVtcGxhdGUoXG5cdFx0XHRuYW1lOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfCBudWxsPiB7XG5cdFx0XHRpZiAoIXRoaXMudGVtcGxhdGVDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHN1YkZvbGRlcnMgPSBhd2FpdCB0aGlzLmZvbGRlci5nZXRTdWJGb2xkZXJzKCk7XG5cdFx0XHRcdFx0Y29uc3QgdGVtcGxhdGVGb2xkZXIgPSBzdWJGb2xkZXJzLmZpbmQoXG5cdFx0XHRcdFx0XHQoZikgPT4gZi50aXRsZSA9PT0gXCJ0ZW1wbGF0ZXNcIlxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRpZiAoIXRlbXBsYXRlRm9sZGVyKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdHRlbXBsYXRlRm9sZGVyXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLnRlbXBsYXRlQ2FjaGUuc2V0KG5hbWUsIGxvYWRlcigpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVDYWNoZS5nZXQobmFtZSkgPz8gbnVsbDtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBTcGFjZVJhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbnR5cGUgU3BhY2VSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBTcGFjZVJhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTcGFjZUluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTcGFjZUNsYXNzID0ge1xuXHRuZXcgKHJhdzogU3BhY2VSYXcpOiBXcmlrZVNwYWNlSW5zdGFuY2U7XG5cblx0Z2V0QWxsOiAoKSA9PiBQcm9taXNlPFdyaWtlU3BhY2VJbnN0YW5jZVtdPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGFjZUNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZVNwYWNlQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VTcGFjZUNsaWVudCBpbXBsZW1lbnRzIFdyaWtlU3BhY2VJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFdyaWtlU3BhY2VJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxTcGFjZVJlc3BvbnNlPihcIi9zcGFjZXNcIik7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VTcGFjZUNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IFNwYWNlUmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgdGl0bGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5cbmNvbnN0IFNhdmVCbGFja0xpc3QgPSBbXG5cdFwiYWNjb3VudElkXCIsXG5cdFwiY3JlYXRlZERhdGVcIixcblx0XCJ1cGRhdGVkRGF0ZVwiLFxuXHRcInBlcm1hbGlua1wiLFxuXHRcInNjb3BlXCIsXG5cdFwicHJpb3JpdHlcIixcblx0XCJkYXRlc1wiLFxuXTtcblxudHlwZSBDdXN0b21GaWVsZEluc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHR2YWx1ZTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgVGFza1JhdyA9IHtcblx0aWQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRwYXJlbnRzPzogc3RyaW5nW107XG5cdHBhcmVudElkcz86IHN0cmluZ1tdO1xuXHRzdXBlclRhc2tzPzogc3RyaW5nW107XG5cdHN1cGVyVGFza0lkcz86IHN0cmluZ1tdO1xuXHRzdWJUYXNrSWRzPzogc3RyaW5nW107XG5cdGFjY291bnRJZD86IHN0cmluZ1tdO1xuXHRjcmVhdGVkRGF0ZT86IHN0cmluZztcblx0dXBkYXRlZERhdGU/OiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c0lkPzogc3RyaW5nO1xuXHRwZXJtYWxpbms/OiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xuXHRwcmlvcml0eT86IHN0cmluZztcblx0ZGF0ZXM/OiBhbnk7XG5cdGVmZm9ydEFsbG9jYXRpb24/OiBhbnk7XG5cdGJpbGxpbmdUeXBlPzogYW55O1xuXHRmaW5hbmNlPzogYW55O1xuXHRzaGFyZWRJZHM/OiBhbnk7XG5cdHJlc3BvbnNpYmxlSWRzPzogYW55O1xuXHRjdXN0b21GaWVsZHM/OiBDdXN0b21GaWVsZEluc3RhbmNlW107XG59ICYge307XG5cbmV4cG9ydCB0eXBlIFRhc2tSZXNwb25zZSA9IHtcblx0a2luZDogc3RyaW5nO1xuXHRkYXRhOiBUYXNrUmF3W107XG59O1xuXG50eXBlIFRhc2tTYXZlQ29uZmlnID0ge1xuXHRmb2xkZXI/OiBXcmlrZUZvbGRlckluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdHJhdzogVGFza1JhdyB8IHVuZGVmaW5lZDtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cGFyZW50czogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG5cblx0YWRkU3ViVGFza3M6ICh0YXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSkgPT4gdm9pZDtcblx0c2V0U3VwZXJUYXNrOiAodGFzazogV3Jpa2VUYXNrSW5zdGFuY2UpID0+IHZvaWQ7XG5cblx0Z2V0U2F2ZURhdGE6ICgpID0+IFRhc2tSYXc7XG5cblx0c2F2ZTogKGNvbmZpZzogVGFza1NhdmVDb25maWcpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrQ2xhc3M8VCA9IFdyaWtlVGFza0luc3RhbmNlPiB7XG5cdG5ldyAodGFzazogVGFza1Jhdyk6IFQ7XG5cblx0ZnJvbVBlcm1hTGluazogKGxpbms6IHN0cmluZykgPT4gUHJvbWlzZTxUPjtcblxuXHRmcm9tVGl0bGU6ICh0aXRsZTogc3RyaW5nLCBmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2UpID0+IFByb21pc2U8VD47XG5cblx0ZnJvbVJhdzogKHRhc2s6IFRhc2tSYXcpID0+IFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlVGFza0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlVGFza0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlVGFza0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluazxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4odGhpczogVCwgcGVybWFsaW5rOiBzdHJpbmcpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVBlcm1hTGluayhwZXJtYWxpbmssIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVRpdGxlPFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pihcblx0XHRcdHRoaXM6IFQsXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KTogUHJvbWlzZTxJbnN0YW5jZVR5cGU8VD4+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21UaXRsZSh0aXRsZSwgZm9sZGVyLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21SYXc8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KHRoaXM6IFQsIHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VUYXNrQ2xpZW50KHRhc2spIGFzIEluc3RhbmNlVHlwZTxUPjtcblx0XHR9XG5cblx0XHRyYXc6IFRhc2tSYXc7XG5cblx0XHRwcml2YXRlIHN1cGVyVGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdWJUYXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IodGFzazogVGFza1Jhdykge1xuXHRcdFx0dGhpcy5yYXcgPSB0YXNrO1xuXHRcdH1cblxuXHRcdGdldCBpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblxuXHRcdGdldCB0aXRsZSgpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblxuXHRcdGdldCBwYXJlbnRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wYXJlbnRJZHM7XG5cdFx0fVxuXG5cdFx0YWRkU3ViVGFza3ModGFza3M6IFdyaWtlVGFza0luc3RhbmNlW10pIHtcblx0XHRcdHRhc2tzLmZvckVhY2goKHQpID0+IHQuc2V0U3VwZXJUYXNrKHRoaXMpKTtcblxuXHRcdFx0dGhpcy5zdWJUYXNrcyA9IFsuLi50aGlzLnN1YlRhc2tzLCAuLi50YXNrc107XG5cdFx0fVxuXG5cdFx0c2V0U3VwZXJUYXNrKHRhc2s6IFdyaWtlVGFza0luc3RhbmNlKSB7XG5cdFx0XHR0aGlzLnN1cGVyVGFzayA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0Z2V0U2F2ZURhdGEoKTogVGFza1JhdyB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBwYXJlbnRzLCAuLi5leHRyYURhdGEgfSA9IHRoaXMucmF3O1xuXHRcdFx0Y29uc3QgZGF0YSA9IHsgLi4uZXh0cmFEYXRhIH0gYXMgVGFza1JhdztcblxuXHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdGRhdGEudGl0bGUgPSB0aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhcmVudHMpIHtcblx0XHRcdFx0ZGF0YS5wYXJlbnRzID0gcGFyZW50cztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3VwZXJUYXNrPy5pZCkge1xuXHRcdFx0XHRkYXRhLnN1cGVyVGFza3MgPSBbdGhpcy5zdXBlclRhc2suaWRdO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBwcm9wIG9mIFNhdmVCbGFja0xpc3QpIHtcblx0XHRcdFx0ZGVsZXRlIGRhdGFbcHJvcCBhcyBrZXlvZiBUYXNrUmF3XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pZCA/IHRoaXMudXBkYXRlKGNvbmZpZykgOiB0aGlzLmNyZWF0ZShjb25maWcpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYXN5bmMgY3JlYXRlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHsgZm9sZGVyIH0gPSBjb25maWc7XG5cblx0XHRcdGlmICghZm9sZGVyPy5pZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlIGEgbG9jYXRpb24gdG8gc2F2ZSBhIG5ldyB0YXNrIHRvLlwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0Li4udGhpcy5nZXRTYXZlRGF0YSgpLFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGZvbGRlcj8uaWQpIHtcblx0XHRcdFx0cGF5bG9hZC5wYXJlbnRzID0gW2ZvbGRlci5pZF07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxUYXNrUmVzcG9uc2U+KFxuXHRcdFx0XHRgZm9sZGVycy8ke2ZvbGRlci5pZH0vdGFza3NgLFxuXHRcdFx0XHRmaXhQYXlsb2FkKHBheWxvYWQgYXMge30pXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCB0YXNrID0gcmVzcC5kYXRhWzBdO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHRhc2s7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIFN1YiBUYXNrczogXCIsIHRoaXMuc3ViVGFza3MubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IHN1YlRhc2sgb2YgdGhpcy5zdWJUYXNrcykge1xuXHRcdFx0XHRhd2FpdCBzdWJUYXNrLnNhdmUoY29uZmlnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHVwZGF0ZShjb25maWc6IFRhc2tTYXZlQ29uZmlnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXBkYXRlIHRhc2tzXCIpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgUGF5bG9hZEtleU1hcCA9IHtcblx0c2hhcmVkSWRzOiBcInNoYXJlZHNcIixcblx0cmVzcG9uc2libGVJZHM6IFwicmVzcG9uc2libGVzXCIsXG5cdGN1c3RvbVN0YXR1c0lkOiBcImN1c3RvbVN0YXR1c1wiLFxufTtcblxuZnVuY3Rpb24gZml4UGF5bG9hZChwYXlsb2FkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG5cdGNvbnN0IG5ld1BheWxvYWQgPSB7IC4uLnBheWxvYWQgfTtcblxuXHRmb3IgKGxldCBba2V5LCBmaXhdIG9mIE9iamVjdC5lbnRyaWVzKFBheWxvYWRLZXlNYXApKSB7XG5cdFx0aWYgKG5ld1BheWxvYWRba2V5XSkge1xuXHRcdFx0bmV3UGF5bG9hZFtmaXhdID0gbmV3UGF5bG9hZFtrZXldO1xuXHRcdFx0ZGVsZXRlIG5ld1BheWxvYWRba2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3UGF5bG9hZDtcbn1cblxuY29uc3QgRmllbGRzID0gW1xuXHRcInBhcmVudElkc1wiLFxuXHRcImRlc2NyaXB0aW9uXCIsXG5cdFwiY3VzdG9tRmllbGRzXCIsXG5cdFwic2hhcmVkSWRzXCIsXG5cdFwicmVzcG9uc2libGVJZHNcIixcblx0XCJzdWJUYXNrSWRzXCIsXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbVBlcm1hTGluayhwZXJtYWxpbms6IHN0cmluZywgY2xpZW50OiBXcmlrZUNsaWVudCkge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGB0YXNrc2AsIHtcblx0XHRwZXJtYWxpbmssXG5cdFx0ZmllbGRzOiBGaWVsZHMsXG5cdH0pO1xuXG5cdHJldHVybiByZXNwLmRhdGFbMF07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tSWRzKFxuXHRpZHM6IHN0cmluZ1tdLFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBQcm9taXNlPFRhc2tSYXdbXT4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGB0YXNrcy8ke2lkcy5qb2luKFwiLFwiKX1gKTtcblxuXHRyZXR1cm4gcmVzcC5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmF3RnJvbVRpdGxlKFxuXHR0aXRsZTogc3RyaW5nLFxuXHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2UsXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFByb21pc2U8VGFza1Jhdz4ge1xuXHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KGBmb2xkZXJzLyR7Zm9sZGVyLmlkfS90YXNrc2AsIHtcblx0XHR0aXRsZSxcblx0XHRmaWVsZHM6IEZpZWxkcyxcblx0fSk7XG5cblx0aWYgKHJlc3AuZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm91bmQgbXVsdGlwbGUgdGFza3NcIik7XG5cdH1cblxuXHRyZXR1cm4gcmVzcC5kYXRhWzBdO1xufVxuIiwgImltcG9ydCBNdXN0YWNoZSBmcm9tIFwibXVzdGFjaGVcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZSB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckluc3RhbmNlIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUge1xuXHRXcmlrZVRhc2tDbGFzcyxcblx0V3Jpa2VUYXNrSW5zdGFuY2UsXG5cdFRhc2tSYXcsXG5cdFRhc2tSZXNwb25zZSxcbn0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmF3RnJvbVRpdGxlLCByYXdGcm9tSWRzIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgQ2xvbmVEYXRhID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBDdXN0b21GaWVsZFRlbXBsYXRlID0ge1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRkZWZpbml0aW9uOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgZXh0ZW5kcyBXcmlrZVRhc2tJbnN0YW5jZSB7XG5cdGNsb25lOiAoXG5cdFx0ZGF0YTogQ2xvbmVEYXRhLFxuXHRcdHBhcmVudD86IFdyaWtlVGFza0luc3RhbmNlXG5cdCkgPT4gUHJvbWlzZTxXcmlrZVRhc2tJbnN0YW5jZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrVGVtcGxhdGVDbGFzc1xuXHRleHRlbmRzIFdyaWtlVGFza0NsYXNzPFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2U+IHt9XG5cbmZ1bmN0aW9uIGZpbGxJblRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IENsb25lRGF0YSk6IHN0cmluZyB7XG5cdGlmICghdGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gXCJcIjtcblx0fVxuXG5cdHJldHVybiBNdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgVGFza1RlbXBsYXRlQ2xpZW50XG5cdFx0ZXh0ZW5kcyBjbGllbnQuVGFza1xuXHRcdGltcGxlbWVudHMgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZVxuXHR7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21JZHMoaWRzOiBzdHJpbmdbXSkge1xuXHRcdFx0Y29uc3QgQ2xzID0gdGhpcztcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21JZHMoaWRzLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gcmF3Lm1hcCgocikgPT4gbmV3IENscyhyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsoXG5cdFx0XHRwZXJtYWxpbms6IHN0cmluZ1xuXHRcdCk6IFByb21pc2U8VGFza1RlbXBsYXRlQ2xpZW50PiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUYXNrUmVzcG9uc2U+KFwiL3Rhc2tzXCIsIHtcblx0XHRcdFx0cGVybWFsaW5rLFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmVzcC5kYXRhWzBdKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVRpdGxlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCk6IFByb21pc2U8VGFza1RlbXBsYXRlQ2xpZW50PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tVGl0bGUodGl0bGUsIGZvbGRlciwgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tUmF3KHRhc2s6IFRhc2tSYXcpIHtcblx0XHRcdHJldHVybiBuZXcgVGFza1RlbXBsYXRlQ2xpZW50KHRhc2spO1xuXHRcdH1cblxuXHRcdFRlbXBsYXRlRmllbGRzOiAoa2V5b2YgVGFza1JhdylbXSA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIl07XG5cdFx0TGl0ZXJhbEZpZWxkczogKGtleW9mIFRhc2tSYXcpW10gPSBbXG5cdFx0XHRcInNoYXJlZElkc1wiLFxuXHRcdFx0XCJyZXNwb25zaWJsZUlkc1wiLFxuXHRcdFx0XCJjdXN0b21TdGF0dXNJZFwiLFxuXHRcdF07XG5cblx0XHRhc3luYyBjbG9uZShkYXRhOiBDbG9uZURhdGEsIHN1cGVyVGFzaz86IFdyaWtlVGFza0luc3RhbmNlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJhdyA9IHRoaXMucmF3ID8/ICh7fSBhcyBUYXNrUmF3KTtcblxuXHRcdFx0Y29uc3QgdGFza1JhdyA9IHt9IGFzIFRhc2tSYXc7XG5cdFx0XHRjb25zdCBzZXQgPSAoa2V5OiBrZXlvZiBUYXNrUmF3LCB2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAodmFsKSB7XG5cdFx0XHRcdFx0dGFza1Jhd1trZXldID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLlRlbXBsYXRlRmllbGRzLmZvckVhY2goKGtleSkgPT5cblx0XHRcdFx0c2V0KGtleSwgZGF0YVtrZXldID8/IGZpbGxJblRlbXBsYXRlKHRlbXBsYXRlUmF3W2tleV0sIGRhdGEpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5MaXRlcmFsRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRcIlNldHRpbmcgTGl0ZXJhbCBGaWVsZDogXCIsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdGRhdGFba2V5XSA/PyB0ZW1wbGF0ZVJhd1trZXldXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHNldChrZXksIGRhdGFba2V5XSA/PyB0ZW1wbGF0ZVJhd1trZXldKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZGF0YS50aXRsZVByZWZpeCkge1xuXHRcdFx0XHR0YXNrUmF3LnRpdGxlID0gYCR7ZGF0YS50aXRsZVByZWZpeH0gJHt0YXNrUmF3LnRpdGxlfWA7XG5cdFx0XHR9XG5cblx0XHRcdHRhc2tSYXcudGl0bGUgPSB0YXNrUmF3LnRpdGxlXG5cdFx0XHRcdC5yZXBsYWNlKFwiVEVNUExBVEVcIiwgXCJcIilcblx0XHRcdFx0LnJlcGxhY2UoL1xcIFxcIC8sIFwiIFwiKTtcblxuXHRcdFx0Y29uc3QgY3VzdG9tRmllbGRzID0gKGF3YWl0IHRoaXMuZ2V0Q3VzdG9tRmllbGRzKCkpID8/IHt9O1xuXG5cdFx0XHRmb3IgKGxldCBbbmFtZSwgZmllbGRdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbUZpZWxkcykpIHtcblx0XHRcdFx0dGFza1Jhdy5jdXN0b21GaWVsZHMgPSBbXG5cdFx0XHRcdFx0Li4uKHRhc2tSYXcuY3VzdG9tRmllbGRzID8/IFtdKSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZDogZmllbGQuZGVmaW5pdGlvbi5pZCxcblx0XHRcdFx0XHRcdHZhbHVlOiBkYXRhW25hbWVdID8/IGZpZWxkLnZhbHVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRhc2sgPSBjbGllbnQuVGFzay5mcm9tUmF3KHRhc2tSYXcpO1xuXG5cdFx0XHRpZiAoc3VwZXJUYXNrKSB7XG5cdFx0XHRcdHRhc2suc2V0U3VwZXJUYXNrKHN1cGVyVGFzayk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN1YlRhc2tUZW1wbGF0ZXMgPSAhdGVtcGxhdGVSYXcuc3ViVGFza0lkcz8ubGVuZ3RoXG5cdFx0XHRcdD8gW11cblx0XHRcdFx0OiBhd2FpdCBUYXNrVGVtcGxhdGVDbGllbnQuZnJvbUlkcyh0ZW1wbGF0ZVJhdy5zdWJUYXNrSWRzKTtcblxuXHRcdFx0Y29uc3QgY2xvbmVEYXRhID0ge1xuXHRcdFx0XHQuLi5kYXRhLFxuXHRcdFx0XHR0aXRsZVByZWZpeDogdGFza1Jhdy50aXRsZSxcblx0XHRcdH0gYXMgQ2xvbmVEYXRhO1xuXG5cdFx0XHR0aGlzLlRlbXBsYXRlRmllbGRzLmZvckVhY2goKGspID0+IGRlbGV0ZSBjbG9uZURhdGFba10pO1xuXHRcdFx0dGhpcy5MaXRlcmFsRmllbGRzLmZvckVhY2goKGspID0+IGRlbGV0ZSBjbG9uZURhdGFba10pO1xuXG5cdFx0XHRjb25zdCBzdWJUYXNrcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdFx0XHRzdWJUYXNrVGVtcGxhdGVzLm1hcCgocykgPT4gcy5jbG9uZShjbG9uZURhdGEsIHRhc2spKVxuXHRcdFx0KTtcblxuXHRcdFx0dGFzay5hZGRTdWJUYXNrcyhzdWJUYXNrcyk7XG5cblx0XHRcdHJldHVybiB0YXNrO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgQ3VzdG9tRmllbGRzTG9hZGVyOlxuXHRcdFx0fCBQcm9taXNlPFJlY29yZDxzdHJpbmcsIEN1c3RvbUZpZWxkVGVtcGxhdGU+IHwgbnVsbD5cblx0XHRcdHwgdW5kZWZpbmVkO1xuXHRcdC8vVE9ETzogY2FjaGUgdGhpcyByZXR1cm5cblx0XHRwcml2YXRlIGFzeW5jIGdldEN1c3RvbUZpZWxkcygpOiBQcm9taXNlPFJlY29yZDxcblx0XHRcdHN0cmluZyxcblx0XHRcdHsgdmFsdWU6IHN0cmluZzsgZGVmaW5pdGlvbjogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIH1cblx0XHQ+IHwgbnVsbD4ge1xuXHRcdFx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGN1c3RvbUZpZWxkcyB9ID0gdGhpcy5yYXcgPz8ge307XG5cblx0XHRcdFx0aWYgKCFjdXN0b21GaWVsZHMgfHwgY3VzdG9tRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5sb2coXCJHZXR0aW5nIEN1c3RvbSBGaWVsZHM6IFwiLCBjdXN0b21GaWVsZHMpO1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGF3YWl0IGNsaWVudC5DdXN0b21GaWVsZC5mcm9tSWRzKFxuXHRcdFx0XHRcdGN1c3RvbUZpZWxkcy5tYXAoKGMpID0+IGMuaWQpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0cmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGFjYywgZmllbGQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IGN1c3RvbUZpZWxkcy5maW5kKFxuXHRcdFx0XHRcdFx0KGMpID0+IGMuaWQgPT09IGZpZWxkLmlkXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGlmIChmaWVsZC50eXBlICE9PSBcInN0cmluZ1wiIHx8ICFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFx0W2ZpZWxkLnRpdGxlXToge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogaW5zdGFuY2UudmFsdWUsXG5cdFx0XHRcdFx0XHRcdGRlZmluaXRpb246IGZpZWxkLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9LCB7fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLkN1c3RvbUZpZWxkc0xvYWRlciA9IHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyID8/IGxvYWRlcigpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5DdXN0b21GaWVsZHNMb2FkZXI7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCAqIGFzIGNzdiBmcm9tIFwiQGZhc3QtY3N2L3BhcnNlXCI7XG5cbmltcG9ydCB0eXBlIHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwiLi9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVGFza0luc3RhbmNlIH0gZnJvbSBcIi4vVGFzay5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gXCIuL1Rhc2tUZW1wbGF0ZS5zZXJ2ZXJcIjtcblxudHlwZSBDU1ZSb3cgPSB7IHRlbXBsYXRlOiBzdHJpbmcgfSAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbnR5cGUgVmlkZW9CYXRjaFNhdmVDb25maWcgPSB7XG5cdHRlbXBsYXRlRm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlO1xuXHRsb2NhdGlvbkZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlIHtcblx0aW1wb3J0Q1NWOiAoXG5cdFx0ZmlsZTogRmlsZSxcblx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0KSA9PiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT47XG5cblx0c2F2ZTogKGNvbmZpZzogVmlkZW9CYXRjaFNhdmVDb25maWcpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VWaWRlb0JhdGNoVGFza0NsYXNzIHtcblx0bmV3IChjb25maWc6IHsgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfSk6IFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZTtcblxuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzKFxuXHRjbGllbnQ6IFdyaWtlQ2xpZW50XG4pOiBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VQcm9qZWN0VGFza0NsaWVudCBpbXBsZW1lbnRzIFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsoXG5cdFx0XHRsaW5rOiBzdHJpbmdcblx0XHQpOiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IGNsaWVudC5UYXNrLmZyb21QZXJtYUxpbmsobGluayk7XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VQcm9qZWN0VGFza0NsaWVudCh7IHRhc2sgfSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZTtcblx0XHRwcml2YXRlIHZpZGVvczogQ1NWUm93W10gPSBbXTtcblxuXHRcdGNvbnN0cnVjdG9yKHsgdGFzayB9OiB7IHRhc2s6IFdyaWtlVGFza0luc3RhbmNlIH0pIHtcblx0XHRcdHRoaXMudGFzayA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhZGRWaWRlbyh2aWRlbzogQ1NWUm93KSB7XG5cdFx0XHR0aGlzLnZpZGVvcy5wdXNoKHZpZGVvKTtcblx0XHR9XG5cblx0XHRhc3luYyBpbXBvcnRDU1YoXG5cdFx0XHRmaWxlOiBGaWxlLFxuXHRcdFx0b3B0aW9uczogY3N2LlBhcnNlck9wdGlvbnNBcmdzXG5cdFx0KTogUHJvbWlzZTxXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2U+IHtcblx0XHRcdGNvbnN0IHRleHQgPSBhd2FpdCBmaWxlLnRleHQoKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y3N2LnBhcnNlU3RyaW5nKHRleHQsIG9wdGlvbnMpXG5cdFx0XHRcdFx0Lm9uKFwiZXJyb3JcIiwgKGVycikgPT4gcmVqZWN0KGVycikpXG5cdFx0XHRcdFx0Lm9uKFwiZGF0YVwiLCAocm93OiBDU1ZSb3cpID0+IHRoaXMuYWRkVmlkZW8ocm93KSlcblx0XHRcdFx0XHQub24oXCJlbmRcIiwgKCkgPT4gZnVsZmlsbCh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKHsgdGVtcGxhdGVGb2xkZXIsIGxvY2F0aW9uRm9sZGVyIH06IFZpZGVvQmF0Y2hTYXZlQ29uZmlnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBWaWRlbyBCYXRjaDogXCIsIHRoaXMudmlkZW9zLmxlbmd0aCk7XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFByb21pc2U8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT5cblx0XHRcdD4oKTtcblx0XHRcdGNvbnN0IGZpbmRUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZUNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdHRlbXBsYXRlQ2FjaGUuc2V0KFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKG5hbWUsIHRlbXBsYXRlRm9sZGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVDYWNoZS5nZXQobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSBsb2NhdGlvbkZvbGRlcjtcblxuXHRcdFx0aWYgKCFmb2xkZXIpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gZm9sZGVyXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCB2aWRlbyBvZiB0aGlzLnZpZGVvcy5yZXZlcnNlKCkpIHtcblx0XHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLCAuLi5wcm9wZXJ0aWVzIH0gPSB2aWRlbztcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBmaW5kVGVtcGxhdGUodGVtcGxhdGVOYW1lKTtcblxuXHRcdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgdGVtcGxhdGU/LmNsb25lKHByb3BlcnRpZXMsIHRoaXMudGFzayk7XG5cblx0XHRcdFx0YXdhaXQgdGFzaz8uc2F2ZSh7IGZvbGRlciB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG59O1xuXG50eXBlIFdvcmtmbG93UmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c2VzOiBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlW107XG59O1xuXG50eXBlIFdvcmtmbG93UmVzcG9uc2UgPSB7XG5cdHR5cGU6IHN0cmluZztcblx0ZGF0YTogV29ya2Zsb3dSYXdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlV29ya0Zsb3dJbnN0YW5jZSA9IHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRjdXN0b21TdGF0dXNlczogV3Jpa2VDdXN0b21TdGF0dXNJbnN0YW5jZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VXb3JrRmxvd0NsYXNzID0ge1xuXHRuZXcgKHJhdzogV29ya2Zsb3dSYXcpOiBXcmlrZVdvcmtGbG93SW5zdGFuY2U7XG5cblx0ZnJvbU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVdvcmtGbG93SW5zdGFuY2U+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdvcmtGbG93Q2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlV29ya0Zsb3dDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVdvcmtmbG93Q2xpZW50IGltcGxlbWVudHMgV3Jpa2VXb3JrRmxvd0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbU5hbWUobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxXb3JrZmxvd1Jlc3BvbnNlPihcIndvcmtmbG93c1wiKTtcblx0XHRcdGNvbnN0IHJhdyA9IHJlc3AuZGF0YS5maW5kKChkKSA9PiBkLm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0XHRpZiAoIXJhdykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXb3JrZmxvdyBub3QgZm91bmRcIik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VXb3JrZmxvd0NsaWVudChyYXcpO1xuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgcmF3OiBXb3JrZmxvd1Jhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IG5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcubmFtZTtcblx0XHR9XG5cdFx0Z2V0IGN1c3RvbVN0YXR1c2VzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmN1c3RvbVN0YXR1c2VzO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgS2V5Ym9hcmRFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0QWN0aW9uRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRMaW5rc0Z1bmN0aW9uLFxuXHRyZWRpcmVjdCxcblx0dXNlRmV0Y2hlcixcblx0Rm9ybSxcblx0dW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcixcblx0dW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGZXRjaGVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvdHJhbnNpdGlvblwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdXRvY29tcGxldGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgdHlwZSB7IEFjdHVhbEZpbGVPYmplY3QgfSBmcm9tIFwiZmlsZXBvbmRcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgeyBXcmlrZUNsaWVudCB9IGZyb20gXCJ+L2FwaS93cmlrZS9DbGllbnQuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBJbnB1dEJyZWFkQ3J1bWIgZnJvbSBcIn4vY29tcG9uZW50cy9JbnB1dEJyZWFkQ3J1bWJcIjtcbmltcG9ydCBPbk1vdW50IGZyb20gXCJ+L2NvbXBvbmVudHMvT25Nb3VudFwiO1xuaW1wb3J0IEZpbGVJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbGVJbnB1dFwiO1xuXG5pbXBvcnQgdHlwZSB7IFNwYWNlc1Jlc3BvbnNlLCBTcGFjZSB9IGZyb20gXCIuL3NwYWNlc1wiO1xuaW1wb3J0IHR5cGUgeyBDbGllbnRSZXNwb25zZSwgQ2xpZW50IH0gZnJvbSBcIi4vY2xpZW50c1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogXCJodHRwczovL3VucGtnLmNvbS9maWxlcG9uZEBeNC9kaXN0L2ZpbGVwb25kLmNzc1wiLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3Qgd3Jpa2UgPSBhd2FpdCBXcmlrZUNsaWVudC5mb3JTZXNzaW9uKHJlcXVlc3QpO1xuXG5cdGNvbnN0IFVwbG9hZEhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHRcdGZpbHRlcjogKHsgbWltZXR5cGUgfSkgPT4gbWltZXR5cGUgPT09IFwidGV4dC9jc3ZcIixcblx0fSk7XG5cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKFxuXHRcdHJlcXVlc3QsXG5cdFx0VXBsb2FkSGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0LWZpbGVcIikgYXMgRmlsZTtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdGNvbnNvbGUubG9nKFwiR290IEZvcm0gRGF0YTogXCIsIHRleHQpO1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcblx0Y29uc3Qgc3BhY2VzID0gdXNlRmV0Y2hlcjxTcGFjZXNSZXNwb25zZT4oKTtcblx0Y29uc3QgbG9hZFNwYWNlcyA9IHVzZUZldGNoZXJMb2FkKHNwYWNlcywgXCIvcHJvamVjdHMvc3BhY2VzXCIpO1xuXHRjb25zdCBbc3BhY2UsIHNldFNwYWNlXSA9IHVzZVN0YXRlPFNwYWNlIHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgY2xpZW50cyA9IHVzZUZldGNoZXI8Q2xpZW50UmVzcG9uc2U+KCk7XG5cdGNvbnN0IGxvYWRDbGllbnRzID0gdXNlRmV0Y2hlckxvYWQoXG5cdFx0Y2xpZW50cyxcblx0XHRgL3Byb2plY3RzL2NsaWVudHM/c3BhY2VJZD0ke2VuY29kZVVSSUNvbXBvbmVudChzcGFjZT8uaWQgPz8gXCJcIil9YFxuXHQpO1xuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGU8Q2xpZW50IHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgeyBoYXNWYWx1ZTogaGFzUHJvamVjdE5hbWUsIHByb3BzOiBwcm9qZWN0TmFtZVByb3BzIH0gPVxuXHRcdHVzZUJ1ZmZlcmVkSW5wdXQoKTtcblxuXHRjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEFjdHVhbEZpbGVPYmplY3RbXSB8IHVuZGVmaW5lZD4oXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIk5ldyBQcm9qZWN0XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cblx0XHRcdFx0PElucHV0QnJlYWRDcnVtYj5cblx0XHRcdFx0XHQ8T25Nb3VudCBvbk1vdW50PXtsb2FkU3BhY2VzfT5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3NwYWNlPy5pZH0gbmFtZT1cInNwYWNlSWRcIiAvPlxuXHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogXCIzMDBweFwiLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgbykgPT4gc2V0U3BhY2Uobyl9XG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9e3NwYWNlcy5zdGF0ZSA9PT0gXCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3NwYWNlcy5kYXRhPy5zcGFjZXMgPz8gW119XG5cdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsobykgPT4gby50aXRsZX1cblx0XHRcdFx0XHRcdFx0aXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvLCB2KSA9PiBvLmlkID09PSB2LmlkfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wYXJhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNwYWNlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Pbk1vdW50PlxuXHRcdFx0XHRcdHshc3BhY2UgPyBudWxsIDogKFxuXHRcdFx0XHRcdFx0PE9uTW91bnQgb25Nb3VudD17bG9hZENsaWVudHN9PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2xpZW50Py5pZH1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdHN4PXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NsaWVudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG8pID0+IHNldENsaWVudChvKX1cblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtjbGllbnRzLnN0YXRlID09PSBcImxvYWRpbmdcIn1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtjbGllbnRzLmRhdGE/LmNsaWVudHMgPz8gW119XG5cdFx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhvKSA9PiBvLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdGlzT3B0aW9uRXF1YWxUb1ZhbHVlPXsobywgdikgPT4gby5pZCA9PT0gdi5pZH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucGFyYW1zfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNsaWVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L09uTW91bnQ+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7IWNsaWVudCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0a2V5PVwicHJvamVjdFwiXG5cdFx0XHRcdFx0XHRcdGlucHV0UHJvcHM9e3Byb2plY3ROYW1lUHJvcHN9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFoYXNQcm9qZWN0TmFtZSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxGaWxlSW5wdXRcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicHJvamVjdC1maWxlXCJcblx0XHRcdFx0XHRcdFx0XHRzdG9yZUFzRmlsZVxuXHRcdFx0XHRcdFx0XHRcdGZpbGVzPXtmaWxlc31cblx0XHRcdFx0XHRcdFx0XHRvbnVwZGF0ZWZpbGVzPXsoaXRlbXMpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRGaWxlcyhpdGVtcy5tYXAoKGYpID0+IGYuZmlsZSkpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT09IDB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRDcmVhdGUgUHJvamVjdFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9JbnB1dEJyZWFkQ3J1bWI+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VGZXRjaGVyTG9hZChcblx0ZmV0Y2hlcjogeyBsb2FkOiAodXJsOiBzdHJpbmcpID0+IHZvaWQgfSAmIEZldGNoZXIsXG5cdHVybDogc3RyaW5nXG4pIHtcblx0cmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcblx0XHRpZiAoIWZldGNoZXIuZGF0YSAmJiBmZXRjaGVyLnN0YXRlID09PSBcImlkbGVcIikge1xuXHRcdFx0ZmV0Y2hlci5sb2FkKHVybCk7XG5cdFx0fVxuXHR9LCBbZmV0Y2hlciwgdXJsXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUJ1ZmZlcmVkSW5wdXQoKSB7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ+KCk7XG5cdGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPigpO1xuXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblx0Y29uc3QgW2hhc1ZhbHVlLCBzZXRIYXNWYWx1ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdHNldFZhbHVlKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlID8/IFwiXCIpO1xuXG5cdFx0aWYgKHRpbWVvdXRSZWYuY3VycmVudCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG5cdFx0fVxuXG5cdFx0dGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRIYXNWYWx1ZShCb29sZWFuKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlKSk7XG5cblx0XHRcdHRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XG5cdFx0fSwgNTAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG9uS2V5UHJlc3MgPSB1c2VDYWxsYmFjaygoZTogS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRzZXRIYXNWYWx1ZShCb29sZWFuKGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlID8/IFwiXCIpKTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4ge1xuXHRcdGhhc1ZhbHVlLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHJlZjogaW5wdXRSZWYsXG5cdFx0XHRvbkNoYW5nZSxcblx0XHRcdG9uS2V5UHJlc3MsXG5cdFx0fSxcblx0fTtcbn1cbiIsICJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbnR5cGUgUGFnZVByb3BzID0ge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHRpdGxlLCBjaGlsZHJlbiB9OiBQYWdlUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzeD17eyBtdDogMTAgfX0+XG5cdFx0XHQ8UGFwZXIgZWxldmF0aW9uPXszfSBzeD17eyBweTogMyB9fT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMVwiIG1iPXs1fT5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9QYXBlcj5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxudHlwZSBJbnB1dEJyZWFkQ3J1bWJQcm9wcyA9IHtcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkKEdyaWQpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0QnJlYWRDcnVtYih7IGNoaWxkcmVuIH06IElucHV0QnJlYWRDcnVtYlByb3BzKSB7XG5cdGNvbnN0IGNtcHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuXHRjb25zdCBicmVhZGNydW1icyA9IGNtcHMuc2xpY2UoMCwgLTEpO1xuXHRjb25zdCBmb2N1c2VkID0gY21wc1tjbXBzLmxlbmd0aCAtIDFdO1xuXG5cdHJldHVybiAoXG5cdFx0PEdyaWRcblx0XHRcdGNvbnRhaW5lclxuXHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdHBhZGRpbmc9ezJ9XG5cdFx0XHRzeD17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxuXHRcdD5cblx0XHRcdHticmVhZGNydW1icy5tYXAoKGMsIGtleSkgPT4gKFxuXHRcdFx0XHQ8R3JpZEl0ZW0gaXRlbSB4cz17M30ga2V5PXtgYnJlYWRjcnVtYi0ke2tleX1gfT5cblx0XHRcdFx0XHR7Y31cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdCkpfVxuXHRcdFx0e2ZvY3VzZWQgPyAoXG5cdFx0XHRcdDxHcmlkSXRlbSBpdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0e2ZvY3VzZWR9XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQpIDogbnVsbH1cblx0XHQ8L0dyaWQ+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBGZXRjaGVyIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvdHJhbnNpdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEZldGNoT25Nb3VudFByb3BzID0ge1xuXHRvbk1vdW50OiAoKSA9PiB2b2lkO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25Nb3VudCh7IG9uTW91bnQsIGNoaWxkcmVuIH06IEZldGNoT25Nb3VudFByb3BzKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0b25Nb3VudCgpO1xuXHR9LCBbb25Nb3VudF0pO1xuXG5cdHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59XG4iLCAiaW1wb3J0IHsgRmlsZVBvbmQgfSBmcm9tIFwicmVhY3QtZmlsZXBvbmRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoRmlsZVBvbmQpYFxuXHR3aWR0aDogMzAwcHg7XG5cblx0JiAuZmlsZXBvbmQtLWNyZWRpdHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJvcC1sYWJlbCB7XG5cdFx0Y29sb3I6ICM0YzRlNTM7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tbGFiZWwtYWN0aW9uIHtcblx0XHR0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNiYWJkYzA7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tcGFuZWwtcm9vdCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjQ7XG5cdFx0aGVpZ2h0OiAxZW07XG5cdH1cblxuXHQmIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzU5NWU2ODtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1kcmlwLWJsb2Ige1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3ZjhhOWE7XG5cdH1cbmA7XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgU3BhY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTcGFjZXNSZXNwb25zZSA9IHtcblx0c3BhY2VzOiBTcGFjZVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHR9XG5cblx0Y29uc3QgV3Jpa2UgPSBuZXcgV3Jpa2VDbGllbnQod3Jpa2VDcmVkKTtcblx0Y29uc3Qgc3BhY2VzID0gYXdhaXQgV3Jpa2UuU3BhY2UuZ2V0QWxsKCk7XG5cblx0cmV0dXJuIGpzb24oe1xuXHRcdHNwYWNlczogc3BhY2VzLm1hcCgocykgPT4gKHsgaWQ6IHMuaWQsIHRpdGxlOiBzLnRpdGxlIH0pKSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG5cdC8vTk9URTogdGhpcyBvYmplY3Qua2V5cyB0cmljayBvbmx5IHdvcmtzIGlmIHRoZSBlbnVtIGtleXMgYXJlIGV4YWN0IG1hdGNoZXMgZm9yIHRoZSB2YWx1ZXNcblx0aWYgKCFwYXJhbXMuc2VydmljZSB8fCAhT2JqZWN0LmtleXMoU2VydmljZSkuaW5jbHVkZXMocGFyYW1zLnNlcnZpY2UpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgU2VydmljZVwiKTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKFwiU2VydmljZTogXCIsIHBhcmFtcy5zZXJ2aWNlKTtcblxuXHRhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHBhcmFtcy5zZXJ2aWNlIGFzIFNlcnZpY2UsIHJlcXVlc3QsIHtcblx0XHRzdWNjZXNzOiBcIlwiLFxuXHRcdGZhaWx1cmU6IFwiXCIsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge1xuXHRMb2FkZXJGdW5jdGlvbixcblx0QWN0aW9uRnVuY3Rpb24sXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgeyBVcGxvYWQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4geyB1c2VyOiB1c2VyLnVzZXJJZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHR9XG5cblx0Y29uc3QgVXBsb2FkZXJIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZGVySGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IGJhdGNoID0gYXdhaXQgV3Jpa2UuVmlkZW9CYXRjaC5mcm9tUGVybWFMaW5rKFxuXHRcdGZvcm1EYXRhLmdldChcImJhdGNoLXRhc2tcIikgYXMgc3RyaW5nXG5cdCk7XG5cblx0YXdhaXQgYmF0Y2guaW1wb3J0Q1NWKGZvcm1EYXRhLmdldChcImJhdGNoXCIpIGFzIEZpbGUsIHsgaGVhZGVyczogdHJ1ZSB9KTtcblxuXHRhd2FpdCBiYXRjaC5zYXZlKHtcblx0XHR0ZW1wbGF0ZUZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJ0ZW1wbGF0ZS1mb2xkZXJcIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0XHRsb2NhdGlvbkZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmdcblx0XHQpLFxuXHR9KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvQmF0Y2goKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJVcGxvYWQgYSB2aWRlbyBiYXRjaCBDU1YgZmlsZTpcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJ0ZW1wbGF0ZS1mb2xkZXJcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUZW1wbGF0ZSBGb2xkZXIgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJiYXRjaC10YXNrXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiQmF0Y2ggVGFzayAoUGVybWFMaW5rKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cImxvY2F0aW9uXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRm9sZGVyIChQZXJtYUxpbmspXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiYmF0Y2hcIiAvPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFVwbG9hZFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbnR5cGUgQ29ubmVjdExvYWRlckRhdGEgPSB7XG5cdGhhc1dyaWtlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPENvbm5lY3RMb2FkZXJEYXRhPiA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHRyZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzV3Jpa2VDcmVkOiBCb29sZWFuKGF3YWl0IHVzZXI/Lmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3QoKSB7XG5cdGNvbnN0IHsgaGFzV3Jpa2VDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPENvbm5lY3RMb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJDb25uZWN0IHlvdXIgYWNjb3VudHM6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC93cmlrZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxBZGRJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzV3Jpa2VDcmVkXG5cdFx0XHRcdFx0XHRcdD8gXCJDb25uZWN0ZWQgdG8gV3Jpa2VcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiQ29ubmVjdCB0byBXcmlrZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiB7IHVzZXI6IHVzZXIudXNlcklkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlZpZGVvIFRvb2xpbmc6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9wcm9qZWN0cy9jcmVhdGVcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5OZXcgUHJvamVjdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3ZpZGVvLWJhdGNoXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+VmlkZW8gQmF0Y2g8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBHb29nbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dvb2dsZVwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG50eXBlIExvZ2luTG9hZGVyRGF0YSA9IHtcblx0aGFzR29vZ2xlQ3JlZDogQm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcblx0cmVxdWVzdCxcbn0pOiBQcm9taXNlPExvZ2luTG9hZGVyRGF0YT4gPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0Y29uc3QgaGFzR29vZ2xlQ3JlZCA9IHVzZXJcblx0XHQ/IGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS5nb29nbGUpXG5cdFx0OiBmYWxzZTtcblxuXHRpZiAoaGFzR29vZ2xlQ3JlZCkge1xuXHRcdHJlZGlyZWN0KFwiL1wiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aGFzR29vZ2xlQ3JlZCxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuXHRjb25zdCB7IGhhc0dvb2dsZUNyZWQgfSA9IHVzZUxvYWRlckRhdGE8TG9naW5Mb2FkZXJEYXRhPigpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJTaWduIGluIHRvIHlvdXIgTmV4dFRob3VnaHQgYWNjb3VudDpcIj5cblx0XHRcdDxTdGFjayBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUl0ZW1zPVwiY2VudGVyXCI+XG5cdFx0XHRcdDxGb3JtIGFjdGlvbj1cIi9hdXRoL2dvb2dsZVwiIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdGFydEljb249ezxHb29nbGVJY29uIC8+fVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aGFzR29vZ2xlQ3JlZFxuXHRcdFx0XHRcdFx0XHQ/IFwiU2lnbmVkIEluIFRvIEdvb2dsZVwiXG5cdFx0XHRcdFx0XHRcdDogXCJTaWduIEluIFRvIEdvb2dsZVwifVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvUGFnZT5cblx0KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidkZDhmNGIwOCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL2VudHJ5LmNsaWVudC1NN0M1U0pZTS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1UNkZHTktWSi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSEszUEwyWUouanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZWU0U2UDZGLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb290LUFYR1NNS1dLLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU0yTzRONElGLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1XWjVPMllOWC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVEdHWDRIUlYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVBWRERUTkRBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1FRFgyUlJVNi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRUNBRFgyTEsuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHNlcnZpY2UnOnsnaWQnOidyb3V0ZXMvYXV0aC8kc2VydmljZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpzZXJ2aWNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvYXV0aC8kc2VydmljZS1VNktQWlVPSS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BSjJDWVBVRS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2snOnsnaWQnOidyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay1WVVZBTEc2Uy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BSjJDWVBVRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb25uZWN0Jzp7J2lkJzoncm91dGVzL2Nvbm5lY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29ubmVjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2Nvbm5lY3QtNTdQWVZFWU4uanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstVzIzNk1OVjcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZPWlRGUEIzLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BSjJDWVBVRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2luZGV4LTJORkhQUkFSLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZPWlRGUEIzLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BSjJDWVBVRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2xvZ2luLVJJNDNLM1gzLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVcyMzZNTlY3LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GT1pURlBCMy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcHJvamVjdHMvY2xpZW50cyc6eydpZCc6J3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL2NsaWVudHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9wcm9qZWN0cy9jbGllbnRzLVFaREoyREFDLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLU5KTVQ3UjZLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2plY3RzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncHJvamVjdHMvY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvY3JlYXRlLUEyWUtDQldNLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZPWlRGUEIzLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL3NwYWNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL3NwYWNlcy02QUVMWU1QNC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1OSk1UN1I2Sy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQUoyQ1lQVUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdmlkZW8tYmF0Y2gnOnsnaWQnOidyb3V0ZXMvdmlkZW8tYmF0Y2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondmlkZW8tYmF0Y2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy92aWRlby1iYXRjaC1FRTNTWEVGRi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GT1pURlBCMy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstTkpNVDdSNksuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFKMkNZUFVFLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL19zdGF0aWMvYnVpbGQvbWFuaWZlc3QtREQ4RjRCMDguanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFxQzs7O0FDQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLDZCQUFnQztBQUNoQyxtQkFBNEI7OztBQ0Y1QjtBQUFBLG9CQUEyQztBQUMzQyxtQkFBOEI7QUFDOUIsbUJBQStCO0FBRS9CLElBQU0sV0FBVztBQUNWLElBQU0sUUFBUSwwQkFBbUIsRUFBRSxLQUFLO0FBRXhDLElBQU0sUUFBUSwrQkFBWTtBQUFBLEVBQ2hDLFNBQVM7QUFBQSxJQUNSLFlBQVk7QUFBQSxNQUNYLFNBQVM7QUFBQTtBQUFBO0FBQUEsRUFHWCxZQUFZO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDZCxjQUFjO0FBQUEsUUFDYixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNWixJQUFNLFdBQVcsQ0FBQyxVQUN4QixvQ0FBQyw0QkFBRDtBQUFBLEVBQWUsT0FBTztBQUFBLEdBQ3JCLG9DQUFDLDZCQUFEO0FBQUEsRUFBZSxPQUFPO0FBQUEsR0FBVzs7O0FEakJuQyxvQkFBb0IsTUFBYyxLQUFhO0FBQzlDLFFBQU0sT0FBTyxLQUFLLFFBQVEsa0JBQWtCO0FBRTVDLFNBQU8sa0JBQWtCO0FBQUE7QUFHWCx1QkFDZCxTQUNBLG9CQUNBLGlCQUNBLGNBQ0M7QUFDRCxRQUFNLGNBQWMsb0NBQW9CO0FBRXhDLFFBQU0sU0FBUyxrQ0FDZCxvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbEQsUUFBTSxjQUFjLFlBQVksd0JBQXdCO0FBQ3hELFFBQU0sU0FBUyxZQUFZLDZCQUE2QjtBQUV4RCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsV0FBVyxRQUFRLFNBQVM7QUFBQSxJQUMvQyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FFaENYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9PO0FBRVAsc0JBQTRCO0FBSXJCLElBQU0sT0FBcUIsTUFBTTtBQUN2QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR0YsZUFBZTtBQUM3QixTQUNDLG9DQUFDLFVBQUQsTUFDQyxvQ0FBQyxVQUFELE1BQ0Msb0NBQUMsNkJBQUQsT0FDQSxvQ0FBQyxzQkFBRDtBQUFBO0FBVUosa0JBQWtCLEVBQUUsWUFBMkI7QUFDOUMsU0FDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVixvQ0FBQyxRQUFELE1BQ0Msb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLE1BRVQsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxPQUNDLE9BQU8sYUFBYSxjQUFjLG1CQUFtQixPQUV2RCxvQ0FBQyxRQUFELE1BQ0UsVUFDRCxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQzJDLG9DQUFDLDBCQUFEO0FBQUE7OztBQ2pEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQSxvQkFBeUI7QUFDekIsd0JBQThCO0FBQzlCLCtCQUErQjs7O0FDRi9CO0FBS0EsK0JBQStCO0FBOEJ4QixrQ0FBa0Msd0NBSXZDO0FBQUEsRUFLRCxZQUNDLFNBQ0EsUUFJQztBQUNELFVBQ0M7QUFBQSxNQUNDLGtCQUFrQjtBQUFBLE1BQ2xCLFVBQVU7QUFBQSxNQUNWLFVBQVUsUUFBUTtBQUFBLE1BQ2xCLGNBQWMsUUFBUTtBQUFBLE1BQ3RCLGFBQWEsUUFBUTtBQUFBLE9BRXRCO0FBbkJlLHVCQUNoQjtBQXFCQSxTQUFLLFFBQVEsUUFBUTtBQUFBO0FBQUEsRUFHWixzQkFBdUM7QUFDaEQsVUFBTSxTQUFTLElBQUk7QUFFbkIsUUFBSSxLQUFLLE9BQU87QUFDZixhQUFPLElBQUksU0FBUyxLQUFLO0FBQUE7QUFHMUIsV0FBTztBQUFBO0FBQUEsUUFHUSxZQUFZLGFBQTRDO0FBQ3ZFLFVBQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxhQUFhO0FBQUEsTUFDOUMsU0FBUyxFQUFFLGVBQWUsVUFBVTtBQUFBO0FBR3JDLFVBQU0sVUFBaUMsTUFBTSxTQUFTO0FBQ3RELFVBQU0sT0FBTyxRQUFRLEtBQUs7QUFFMUIsV0FBTztBQUFBLE1BQ04sSUFBSSxLQUFLO0FBQUEsTUFDVCxXQUFXLEtBQUs7QUFBQSxNQUNoQixVQUFVLEtBQUs7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQTtBQUFBO0FBQUE7OztBQ3hGYjtBQUFBLGtCQUFjO0FBQ2Qsa0JBQTJCOzs7QUNEM0I7QUFBQSxpQkFBYzs7O0FDQWQ7QUFBQSx1QkFBZ0I7QUFHaEIsa0JBQThCO0FBQUEsRUFNN0IsWUFBWSxXQUEwQixPQUEyQjtBQUh6RCxpQkFBeUI7QUFJaEMsUUFBSSxDQUFDLFdBQVc7QUFDZixZQUFNLElBQUksTUFBTTtBQUFBO0FBR2pCLFNBQUssWUFBWTtBQUNqQixTQUFLLFFBQVE7QUFBQTtBQUFBLE1BR1YsT0FBTztBQUNWLFdBQU8sS0FBSztBQUFBO0FBQUEsUUFHUCxhQUFhO0FBQ2xCLFFBQUksQ0FBQyxLQUFLLE9BQU87QUFDaEIsWUFBTSxTQUFTLE1BQU0seUJBQUk7QUFFekIsV0FBSyxRQUFRLE9BQU8sS0FBSztBQUFBO0FBRzFCLFdBQU8sS0FBSztBQUFBO0FBQUEsUUFHUCxJQUFJLEtBQVU7QUFDbkIsVUFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixVQUFNLE9BQU8sTUFBTSxNQUFNLElBQUk7QUFFN0IsV0FBTyxPQUFPLEtBQUssTUFBTSxRQUFRO0FBQUE7QUFBQSxRQUc1QixJQUFJLE1BQWM7QUFDdkIsVUFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixVQUFNLE9BQU8sTUFBTSxNQUFNLElBQUk7QUFFN0IsV0FBTyxPQUFPLEtBQUssTUFBTSxRQUFRO0FBQUE7QUFBQSxRQUc1QixPQUFPLE9BQWU7QUFDM0IsVUFBTSxRQUFRLE1BQU0sS0FBSztBQUV6QixVQUFNLE1BQU0sT0FBTztBQUFBO0FBQUE7OztBRDdDckIsc0JBQStCO0FBQUEsU0FJdkIsV0FBaUU7QUFDdkUsV0FBTyxJQUFJLE1BQXVCLEtBQUssV0FBVyxJQUFJLFNBQ3JELEtBQUssT0FBTyxHQUFHO0FBQUE7QUFBQSxTQUlWLE9BRU4sS0FDQztBQUNELFdBQU8sSUFBSSxLQUFLO0FBQUE7QUFBQSxFQUtqQixZQUFZLEtBQWE7QUFDeEIsU0FBSyxPQUFRLEtBQUssWUFBaUMsT0FBTyxNQUFNO0FBQUE7QUFBQTtBQW5CMUQsQUFEUixVQUNRLFlBQTJCO0FBQzNCLEFBRlIsVUFFUSxTQUFTLG1CQUFFLE9BQU87OztBRU4xQjtBQUFBLGtCQUFjO0FBU1AsSUFBSztBQUFMLFVBQUssVUFBTDtBQUNOLHVCQUFTO0FBQ1Qsc0JBQVE7QUFBQSxHQUZHO0FBS1osK0JBQXdDLFVBQUs7QUFBQSxlQVMvQixZQUFZLFFBQWdCLFNBQWtCLFFBQWdCO0FBQzFFLFVBQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsVUFBTSxNQUFNLEVBQUUsUUFBUTtBQUN0QixZQUFRLElBQUksdUJBQXVCO0FBQ25DLFVBQU0sV0FBVyxNQUFNLE1BQU0sSUFBSTtBQUVqQyxRQUFJLFVBQVU7QUFDYixZQUFNLE1BQU0sT0FBTztBQUFBLFFBQ2xCLEtBQUs7QUFBQSxRQUNMLGtCQUFrQjtBQUFBLFFBQ2xCLDJCQUEyQjtBQUFBLFVBQzFCLGdCQUFnQixPQUFPO0FBQUE7QUFBQTtBQUFBLFdBR25CO0FBQ04sWUFBTSxNQUFNLElBQUk7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFNBQ0c7QUFBQTtBQUFBO0FBQUEsZUFLTyxjQUFjLFFBQWdCLFNBQWtCO0FBQzVELFVBQU0sUUFBUSxNQUFNLEtBQUs7QUFDekIsVUFBTSxXQUFXLE1BQU0sTUFBTSxJQUFJLEVBQUUsUUFBUTtBQUUzQyxXQUFPO0FBQUE7QUFBQSxNQUtKLFNBQVM7QUF2RGQ7QUF3REUsV0FBTyxZQUFLLFNBQUwsbUJBQVcsV0FBVTtBQUFBO0FBQUEsTUFHekIsVUFBVTtBQTNEZjtBQTRERSxXQUFPLFlBQUssU0FBTCxtQkFBVyxZQUFXO0FBQUE7QUFBQSxNQUcxQixjQUFjO0FBL0RuQjtBQWdFRSxXQUFPLFlBQUssU0FBTCxtQkFBVyxnQkFBZTtBQUFBO0FBQUE7QUFqRDNCLEFBRFIsV0FDUSxZQUFZO0FBQ1osQUFGUixXQUVRLFNBQVMsVUFBSyxPQUFPLE9BQU87QUFBQSxFQUNsQyxRQUFRLG9CQUFFO0FBQUEsRUFDVixTQUFTLG9CQUFFLEtBQUssQ0FBQyxVQUFVO0FBQUEsRUFDM0IsYUFBYSxvQkFBRTtBQUFBOzs7QUhYakIsSUFBTSxXQUFXLElBQUk7QUFFZCxJQUFNLFlBQVksQ0FBQyxTQUN6QixVQUFTLElBQUksS0FBSyxRQUFRLE9BQU8sS0FBSztBQUl2Qyw0QkFBc0IsVUFBSztBQUFBLGVBUWIsYUFBYSxXQUFtQixTQUFrQjtBQUM5RCxVQUFNLFFBQVEsS0FBSztBQUNuQixVQUFNLFdBQVcsTUFBTSxNQUFNLElBQUksRUFBRSxXQUFXO0FBRTlDLFFBQUksVUFBVTtBQUNiLGFBQU87QUFBQTtBQUdSLFdBQU8sTUFBTSxJQUFJLEVBQUUsV0FBVyxTQUFTLFFBQVE7QUFBQTtBQUFBLE1BSzVDLFlBQVk7QUFwQ2pCO0FBcUNFLFdBQU8sWUFBSyxTQUFMLG1CQUFXLGNBQWE7QUFBQTtBQUFBLE1BRzVCLFVBQVU7QUF4Q2Y7QUF5Q0UsV0FBTyxZQUFLLFNBQUwsbUJBQVcsWUFBVztBQUFBO0FBQUEsTUFHMUIsU0FBUztBQTVDZDtBQTZDRSxXQUFPLFlBQUssU0FBTCxtQkFBVyxXQUFVO0FBQUE7QUFBQTtBQTdCdEIsQUFEUixRQUNRLFlBQVk7QUFDWixBQUZSLFFBRVEsU0FBUyxVQUFLLE9BQU8sT0FBTztBQUFBLEVBQ2xDLFdBQVcsb0JBQUU7QUFBQSxFQUNiLFNBQVMsb0JBQUUsV0FBVztBQUFBLEVBQ3RCLFFBQVEsb0JBQUU7QUFBQTtBQTZCWixpQkFBMEI7QUFBQSxlQUNaLFlBQVksV0FBbUIsU0FBa0I7QUFDN0QsVUFBTSxVQUFVLE1BQU0sUUFBUSxhQUFhLFdBQVc7QUFFdEQsUUFBSSxDQUFDLFNBQVM7QUFDYixhQUFPO0FBQUE7QUFHUixXQUFPLElBQUksS0FBSyxRQUFRO0FBQUE7QUFBQSxlQUdaLFNBQVMsUUFBZ0I7QUFDckMsV0FBTyxJQUFJLEtBQUs7QUFBQTtBQUFBLEVBT2pCLFlBQVksUUFBZ0I7QUFDM0IsU0FBSyxTQUFTO0FBQ2QsU0FBSyxjQUFjLElBQUk7QUFBQTtBQUFBLEVBR3hCLGVBQWUsU0FBa0IsUUFBZ0I7QUFDaEQsV0FBTyxXQUFXLFlBQVksS0FBSyxRQUFRLFNBQVM7QUFBQTtBQUFBLFFBRy9DLGVBQWUsU0FBa0I7QUFDdEMsUUFBSSxDQUFDLEtBQUssWUFBWSxJQUFJLFVBQVU7QUFDbkMsWUFBTSxPQUFPLE1BQU0sV0FBVyxjQUFjLEtBQUssUUFBUTtBQUV6RCxVQUFJLE1BQU07QUFDVCxhQUFLLFlBQVksSUFBSSxTQUFTO0FBQUE7QUFBQTtBQUloQyxXQUFPLEtBQUssWUFBWSxJQUFJO0FBQUE7QUFBQSxRQUd2QixlQUFlLFNBQWtCO0FBQ3RDLFVBQU0sT0FBTyxNQUFNLEtBQUssZUFBZTtBQUV2QyxXQUFPLFFBQVE7QUFBQTtBQUFBOzs7QUk1RmpCO0FBQUEsb0JBQTJDO0FBRXBDLElBQU0saUJBQWlCLDhDQUEyQjtBQUFBLEVBQ3hELFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVMsQ0FBQztBQUFBO0FBQUE7OztBTkdaLElBQU0sT0FBTyxJQUFJLGdDQUFtQjtBQUVwQyxJQUFJLFFBQVEsSUFBSSxvQkFBb0IsUUFBUSxJQUFJLHNCQUFzQjtBQUNyRSxPQUFLLElBQ0osSUFBSSx3Q0FDSDtBQUFBLElBQ0MsVUFBVSxRQUFRLElBQUk7QUFBQSxJQUN0QixjQUFjLFFBQVEsSUFBSTtBQUFBLElBQzFCLGFBQWE7QUFBQSxLQUVkLE9BQU8sWUFBWSxVQUVwQixRQUFRO0FBQUE7QUFJVixJQUFJLFFBQVEsSUFBSSxtQkFBbUIsUUFBUSxJQUFJLHFCQUFxQjtBQUNuRSxPQUFLLElBQ0osSUFBSSxjQUNIO0FBQUEsSUFDQyxVQUFVLFFBQVEsSUFBSTtBQUFBLElBQ3RCLGNBQWMsUUFBUSxJQUFJO0FBQUEsSUFDMUIsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLEtBRVIsT0FBTyxZQUFZLFVBRXBCLFFBQVE7QUFBQTtBQUlILElBQU0saUJBQWlCLE9BQU8sWUFBcUI7QUFDekQsUUFBTSxVQUFVLE1BQU0sZUFBZSxXQUNwQyxRQUFRLFFBQVEsSUFBSTtBQUVyQixRQUFNLFNBQVMsUUFBUSxJQUFJO0FBRTNCLE1BQUksQ0FBQyxRQUFRO0FBQ1osV0FBTztBQUFBO0FBR1IsU0FBTyxLQUFLLFNBQVM7QUFBQTtBQUdmLElBQU0sbUJBQW1CLE9BQy9CLFNBQ0EsU0FDQSxjQUNJO0FBQ0osUUFBTSxFQUFFLGFBQWEsY0FBYyxZQUFZLE1BQU0sS0FBSyxhQUN6RCxTQUNBO0FBRUQsUUFBTSxVQUFVLE1BQU0sZUFBZSxXQUNwQyxRQUFRLFFBQVEsSUFBSTtBQUdyQixVQUFRLElBQUk7QUFFWixNQUFJO0FBQ0gsUUFBSSxDQUFDLFFBQVEsSUFBSTtBQUNoQixjQUFRLElBQUksZUFBZTtBQUMzQixZQUFNO0FBQUE7QUFHUCxRQUFJLGNBQWMsTUFBTSxlQUFlO0FBRXZDLFFBQUksQ0FBQyxhQUFhO0FBQ2pCLGNBQVEsSUFBSSwwQkFBMEIsUUFBUSxJQUFJO0FBQ2xELG9CQUFjLE1BQU0sS0FBSyxZQUFZLFFBQVEsSUFBSTtBQUVqRCxVQUFJLENBQUMsYUFBYTtBQUNqQixjQUFNLElBQUksTUFBTTtBQUFBO0FBR2pCLGNBQVEsSUFBSSxVQUFVLFVBQVU7QUFBQTtBQUdqQyxVQUFNLFlBQVksZUFBZSxTQUFTO0FBQUEsTUFDekM7QUFBQSxNQUNBO0FBQUE7QUFBQSxXQUVPLEdBQVA7QUFDRCxVQUFNLDRCQUFTLFVBQVU7QUFBQTtBQUcxQixRQUFNLDRCQUFTLFVBQVUsU0FBUztBQUFBLElBQ2pDLFNBQVM7QUFBQSxNQUNSLGNBQWMsTUFBTSxlQUFlLGNBQWM7QUFBQTtBQUFBO0FBQUE7OztBRDdGN0MsSUFBTSxTQUF5QixPQUFPLEVBQUUsU0FBUyxhQUFhO0FBRXBFLE1BQUksQ0FBQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLEtBQUssU0FBUyxTQUFTLE9BQU8sVUFBVTtBQUN0RSxVQUFNLElBQUksTUFBTTtBQUFBO0FBR2pCLFVBQVEsSUFBSSxzQkFBc0IsT0FBTztBQUV6QyxRQUFNLGlCQUFpQixPQUFPLFNBQW9CLFNBQVM7QUFBQSxJQUMxRCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUE7QUFBQTs7O0FRZlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUFxQjs7O0FDRHJCOzs7QUNBQTtBQXlCTyxnQ0FDTixRQUN3QjtBQUN4QixTQUFPLDZCQUFpRTtBQUFBLGlCQUMxRCxRQUFRLEtBQWU7QUFDbkMsWUFBTSxNQUFNO0FBQ1osWUFBTSxPQUFPLE1BQU0sT0FBTyxJQUN6QixnQkFBZ0IsSUFBSSxLQUFLO0FBRzFCLGFBQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSTtBQUFBO0FBQUEsSUFLdkMsWUFBWSxLQUFxQjtBQUNoQyxXQUFLLE1BQU07QUFBQTtBQUFBLFFBR1IsS0FBSztBQTVDWDtBQTZDRyxhQUFPLFdBQUssUUFBTCxtQkFBVTtBQUFBO0FBQUEsUUFFZCxRQUFRO0FBL0NkO0FBZ0RHLGFBQU8sV0FBSyxRQUFMLG1CQUFVO0FBQUE7QUFBQSxRQUVkLE9BQU87QUFsRGI7QUFtREcsYUFBTyxXQUFLLFFBQUwsbUJBQVU7QUFBQTtBQUFBO0FBQUE7OztBQ25EcEI7QUE2Q08sMkJBQTJCLFFBQXVDO0FBQ3hFLFNBQU8sd0JBQXVEO0FBQUEsSUF1QzdELFlBQW9CLEtBQWdCO0FBQWhCO0FBQUE7QUFBQSxpQkF0Q1AsVUFDWixTQUNBLFFBQ2lDO0FBQ2pDLFlBQU0sT0FBTyxNQUFNLE9BQU8sSUFDekIsV0FBVyxtQkFDWDtBQUdELGFBQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksa0JBQWtCO0FBQUE7QUFBQSxpQkFHdEMsUUFBUSxLQUErQztBQUNuRSxZQUFNLE9BQU8sTUFBTSxPQUFPLElBQ3pCLFdBQVcsSUFBSSxLQUFLO0FBR3JCLGFBQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksa0JBQWtCO0FBQUE7QUFBQSxpQkFHdEMsY0FBYyxNQUE0QztBQUN0RSxZQUFNLE9BQU8sTUFBTSxPQUFPLElBQWtCLFdBQVc7QUFBQSxRQUN0RCxXQUFXO0FBQUE7QUFHWixZQUFNLFNBQVMsS0FBSyxLQUFLO0FBRXpCLGFBQU8sSUFBSSxrQkFBa0I7QUFBQTtBQUFBLGlCQUdqQixPQUNaLE9BQ0EsYUFDQSxTQUMrQjtBQUMvQixhQUFPLElBQUksa0JBQWtCLEVBQUUsT0FBTyxhQUFhO0FBQUE7QUFBQSxRQUtoRCxLQUFLO0FBQ1IsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLFFBRWIsUUFBUTtBQUNYLGFBQU8sS0FBSyxJQUFJO0FBQUE7QUFBQSxRQUViLGNBQWM7QUFDakIsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLFFBRWIsVUFBVTtBQUNiLGFBQU8sS0FBSyxJQUFJO0FBQUE7QUFBQSxRQUViLFdBQVc7QUFDZCxhQUFPLEtBQUssSUFBSTtBQUFBO0FBQUEsVUFHWCxLQUFLLFFBQTBCO0FBQ3BDLFlBQU0sT0FBTyxNQUFNLE9BQU8sS0FDekIsVUFBVSxPQUFPLDBCQUNqQjtBQUFBLFFBQ0MsT0FBTyxLQUFLO0FBQUEsUUFDWixhQUFhLEtBQUssZUFBZTtBQUFBLFFBQ2pDLFNBQVMsS0FBSyxXQUFXO0FBQUE7QUFJM0IsV0FBSyxNQUFNO0FBRVgsYUFBTztBQUFBO0FBQUEsVUFHRixnQkFBZ0I7QUFDckIsVUFBSSxDQUFDLEtBQUssSUFBSTtBQUNiLGNBQU0sSUFBSSxNQUFNO0FBQUE7QUFHakIsWUFBTSxPQUFPLE1BQU0sT0FBTyxJQUN6QixZQUFZLEtBQUssY0FDakIsRUFBRSxTQUFTO0FBR1osYUFBTyxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0I7QUFBQTtBQUFBO0FBQUE7OztBQ2hJdkQ7QUFBQSxVQUFxQjtBQXdDZCw0QkFBNEIsUUFBd0M7QUFDMUUsY0FBb0M7QUFBQSxJQUduQyxZQUFtQixNQUFjO0FBQWQ7QUFGWCxtQkFBcUI7QUFBQTtBQUFBLElBSTdCLFFBQVEsVUFBa0IsWUFBdUI7QUFDaEQsV0FBSyxNQUFNLEtBQUssSUFBSSxVQUFVLFVBQVU7QUFBQTtBQUFBLFVBR25DLEtBQUssUUFBMkM7QUFDckQsWUFBTSxFQUFFLFlBQVk7QUFFcEIsWUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLEVBQUUsT0FBTyxLQUFLO0FBRXBELGNBQVEsSUFBSSxrQkFBa0IsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUVwRCxZQUFNLFVBQVUsS0FBSyxFQUFFLFFBQVEsUUFBUTtBQUV2QyxVQUFJLENBQUMsVUFBVSxJQUFJO0FBQ2xCLGNBQU0sSUFBSSxNQUFNO0FBQUE7QUFHakIsZUFBUyxRQUFRLEtBQUssTUFBTSxXQUFXO0FBQ3RDLGNBQU0sV0FBVyxNQUFNLFFBQVEsYUFBYSxLQUFLO0FBRWpELFlBQUksQ0FBQyxVQUFVO0FBQ2Q7QUFBQTtBQUdELGNBQU0sVUFBVSxNQUFNLFNBQVMsTUFDOUIsS0FBSyxZQUNMO0FBR0QsY0FBTSxRQUFRLEtBQUssRUFBRSxRQUFRLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFLeEMsa0JBQWdCO0FBQUEsSUFDZixZQUFtQixVQUF5QixZQUF1QjtBQUFoRDtBQUF5QjtBQUFBO0FBQUE7QUFHN0MsU0FBTyx5QkFBeUQ7QUFBQSxJQXFCL0QsWUFBWSxFQUFFLFVBQTJDO0FBUmpELG9CQUFvQyxJQUFJO0FBQ3hDLDJCQUdKLElBQUk7QUFLUCxXQUFLLFNBQVM7QUFBQTtBQUFBLGlCQXJCRixjQUNaLE1BQ2dDO0FBQ2hDLFlBQU0sU0FBUyxNQUFNLE9BQU8sT0FBTyxjQUFjO0FBRWpELFVBQUksQ0FBQyxPQUFPLFNBQVM7QUFDcEIsY0FBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixhQUFPLElBQUksbUJBQW1CLEVBQUU7QUFBQTtBQUFBLFVBZTNCLFVBQ0wsTUFDQSxTQUNnQztBQUNoQyxZQUFNLE9BQU8sTUFBTSxLQUFLO0FBRXhCLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3ZDLFFBQUksZ0JBQVksTUFBTSxTQUNwQixHQUFHLFNBQVMsQ0FBQyxRQUFRLE9BQU8sTUFDNUIsR0FBRyxRQUFRLENBQUMsUUFBZ0I7QUF0SGxDO0FBdUhNLGdCQUEyQyxVQUFuQyxTQUFPLGFBQTRCLElBQWYsdUJBQWUsSUFBZixDQUFwQixTQUFPO0FBRWYscUJBQUssTUFBTSxXQUFYLG1CQUFtQixRQUFRLFVBQVU7QUFBQSxXQUVyQyxHQUFHLE9BQU8sTUFBTSxRQUFRO0FBQUE7QUFBQTtBQUFBLElBSTVCLE1BQU0sTUFBYztBQUNuQixVQUFJLENBQUMsS0FBSyxPQUFPLElBQUksT0FBTztBQUMzQixjQUFNLFFBQVEsSUFBSSxNQUFNO0FBRXhCLGFBQUssT0FBTyxJQUFJLE1BQU07QUFFdEIsZUFBTztBQUFBO0FBR1IsYUFBTyxLQUFLLE9BQU8sSUFBSTtBQUFBO0FBQUEsVUFHbEIsS0FBSyxRQUE0QjtBQUN0QyxVQUFJLENBQUMsS0FBSyxPQUFPLElBQUk7QUFDcEIsY0FBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixjQUFRLElBQUksbUJBQW1CLE1BQU0sS0FBSyxLQUFLLE9BQU87QUFFdEQsWUFBTSxRQUFRLElBQ2IsTUFBTSxLQUFLLEtBQUssT0FBTyxVQUFVLElBQUksQ0FBQyxNQUNyQyxFQUFFLEtBQUssRUFBRSxTQUFTO0FBSXBCLGFBQU87QUFBQTtBQUFBLFVBR0YsYUFDTCxNQUM0QztBQUM1QyxVQUFJLENBQUMsS0FBSyxjQUFjLElBQUksT0FBTztBQUNsQyxjQUFNLFdBQVMsWUFBWTtBQUMxQixnQkFBTSxhQUFhLE1BQU0sS0FBSyxPQUFPO0FBQ3JDLGdCQUFNLGlCQUFpQixXQUFXLEtBQ2pDLENBQUMsTUFBTSxFQUFFLFVBQVU7QUFHcEIsY0FBSSxDQUFDLGdCQUFnQjtBQUNwQixtQkFBTztBQUFBO0FBR1IsZ0JBQU0sV0FBVyxNQUFNLE9BQU8sYUFBYSxVQUMxQyxNQUNBO0FBR0QsaUJBQU87QUFBQTtBQUdSLGFBQUssY0FBYyxJQUFJLE1BQU07QUFBQTtBQUc5QixhQUFPLEtBQUssY0FBYyxJQUFJLFNBQVM7QUFBQTtBQUFBO0FBQUE7OztBQ3BMMUM7QUF1Qk8sMEJBQTBCLFFBQXNDO0FBQ3RFLFNBQU8sdUJBQXFEO0FBQUEsSUFPM0QsWUFBb0IsS0FBZTtBQUFmO0FBQUE7QUFBQSxpQkFOUCxTQUF3QztBQUNwRCxZQUFNLE9BQU8sTUFBTSxPQUFPLElBQW1CO0FBRTdDLGFBQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksaUJBQWlCO0FBQUE7QUFBQSxRQUs5QyxLQUFLO0FBQ1IsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLFFBRWIsUUFBUTtBQUNYLGFBQU8sS0FBSyxJQUFJO0FBQUE7QUFBQTtBQUFBOzs7QUNyQ25CO0FBR0EsSUFBTSxnQkFBZ0I7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBO0FBa0VNLHlCQUF5QixRQUFxQztBQUNwRSxTQUFPLHNCQUFtRDtBQUFBLElBZ0N6RCxZQUFZLE1BQWU7QUFGbkIsc0JBQWdDO0FBR3ZDLFdBQUssTUFBTTtBQUFBO0FBQUEsaUJBaENDLGNBRUYsV0FBNkM7QUFDdkQsWUFBTSxNQUFNLE1BQU0saUJBQWlCLFdBQVc7QUFFOUMsYUFBTyxLQUFLLFFBQVE7QUFBQTtBQUFBLGlCQUdSLFVBSVosT0FDQSxRQUMyQjtBQUMzQixZQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sUUFBUTtBQUU5QyxhQUFPLEtBQUssUUFBUTtBQUFBO0FBQUEsV0FHZCxRQUVJLE1BQWU7QUFDekIsYUFBTyxJQUFJLGdCQUFnQjtBQUFBO0FBQUEsUUFZeEIsS0FBeUI7QUFDNUIsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLFFBR2IsUUFBZ0I7QUFDbkIsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLFFBR2IsVUFBZ0M7QUFDbkMsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBLElBR2pCLFlBQVksT0FBNEI7QUFDdkMsWUFBTSxRQUFRLENBQUMsTUFBTSxFQUFFLGFBQWE7QUFFcEMsV0FBSyxXQUFXLENBQUMsR0FBRyxLQUFLLFVBQVUsR0FBRztBQUFBO0FBQUEsSUFHdkMsYUFBYSxNQUF5QjtBQUNyQyxXQUFLLFlBQVk7QUFBQTtBQUFBLElBR2xCLGNBQXVCO0FBdkl6QjtBQXdJRyxZQUF5QyxVQUFLLEtBQXRDLFNBQU8sWUFBMEIsSUFBZCxzQkFBYyxJQUFkLENBQW5CLFNBQU87QUFDZixZQUFNLE9BQU8sbUJBQUs7QUFFbEIsVUFBSSxPQUFPO0FBQ1YsYUFBSyxRQUFRO0FBQUE7QUFHZCxVQUFJLFNBQVM7QUFDWixhQUFLLFVBQVU7QUFBQTtBQUdoQixVQUFJLFdBQUssY0FBTCxtQkFBZ0IsSUFBSTtBQUN2QixhQUFLLGFBQWEsQ0FBQyxLQUFLLFVBQVU7QUFBQTtBQUduQyxlQUFTLFFBQVEsZUFBZTtBQUMvQixlQUFPLEtBQUs7QUFBQTtBQUdiLGFBQU87QUFBQTtBQUFBLFVBR0YsS0FBSyxRQUF3QjtBQUNsQyxhQUFPLEtBQUssS0FBSyxLQUFLLE9BQU8sVUFBVSxLQUFLLE9BQU87QUFBQTtBQUFBLFVBR3RDLE9BQU8sUUFBd0I7QUFDNUMsWUFBTSxFQUFFLFdBQVc7QUFFbkIsVUFBSSxDQUFDLGtDQUFRLEtBQUk7QUFDaEIsY0FBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixZQUFNLFVBQVUsbUJBQ1osS0FBSztBQUdULFVBQUksaUNBQVEsSUFBSTtBQUNmLGdCQUFRLFVBQVUsQ0FBQyxPQUFPO0FBQUE7QUFHM0IsWUFBTSxPQUFPLE1BQU0sT0FBTyxLQUN6QixXQUFXLE9BQU8sWUFDbEIsV0FBVztBQUdaLFlBQU0sT0FBTyxLQUFLLEtBQUs7QUFFdkIsV0FBSyxNQUFNO0FBRVgsY0FBUSxJQUFJLHNCQUFzQixLQUFLLFNBQVM7QUFDaEQsZUFBUyxXQUFXLEtBQUssVUFBVTtBQUNsQyxjQUFNLFFBQVEsS0FBSztBQUFBO0FBQUE7QUFBQSxJQUliLE9BQU8sUUFBd0I7QUFDdEMsWUFBTSxJQUFJLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLbkIsSUFBTSxnQkFBZ0I7QUFBQSxFQUNyQixXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQTtBQUdqQixvQkFBb0IsU0FBaUM7QUFDcEQsUUFBTSxhQUFhLG1CQUFLO0FBRXhCLFdBQVMsQ0FBQyxLQUFLLFFBQVEsT0FBTyxRQUFRLGdCQUFnQjtBQUNyRCxRQUFJLFdBQVcsTUFBTTtBQUNwQixpQkFBVyxPQUFPLFdBQVc7QUFDN0IsYUFBTyxXQUFXO0FBQUE7QUFBQTtBQUlwQixTQUFPO0FBQUE7QUFHUixJQUFNLFNBQVM7QUFBQSxFQUNkO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdELGdDQUF1QyxXQUFtQixRQUFxQjtBQUM5RSxRQUFNLE9BQU8sTUFBTSxPQUFPLElBQWtCLFNBQVM7QUFBQSxJQUNwRDtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBR1QsU0FBTyxLQUFLLEtBQUs7QUFBQTtBQUdsQiwwQkFDQyxLQUNBLFFBQ3FCO0FBQ3JCLFFBQU0sT0FBTyxNQUFNLE9BQU8sSUFBa0IsU0FBUyxJQUFJLEtBQUs7QUFFOUQsU0FBTyxLQUFLO0FBQUE7QUFHYiw0QkFDQyxPQUNBLFFBQ0EsUUFDbUI7QUFDbkIsUUFBTSxPQUFPLE1BQU0sT0FBTyxJQUFrQixXQUFXLE9BQU8sWUFBWTtBQUFBLElBQ3pFO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFHVCxNQUFJLEtBQUssS0FBSyxTQUFTLEdBQUc7QUFDekIsVUFBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixTQUFPLEtBQUssS0FBSztBQUFBOzs7QUNsUWxCO0FBQUEsc0JBQXFCO0FBK0JyQix3QkFBd0IsVUFBa0IsTUFBeUI7QUFDbEUsTUFBSSxDQUFDLFVBQVU7QUFDZCxXQUFPO0FBQUE7QUFHUixTQUFPLHdCQUFTLE9BQU8sVUFBVTtBQUFBO0FBRzNCLGlDQUNOLFFBQ3lCO0FBQ3pCLFNBQU8saUNBQ0UsT0FBTyxLQUVoQjtBQUFBLElBSE8sY0ExQ1I7QUEwQ1E7QUFrQ04sNEJBQW9DLENBQUMsU0FBUztBQUM5QywyQkFBbUM7QUFBQSxRQUNsQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQTtBQUFBLGlCQWxDWSxRQUFRLEtBQWU7QUFDbkMsWUFBTSxNQUFNO0FBQ1osWUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFLO0FBRWxDLGFBQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7QUFBQTtBQUFBLGlCQUdsQixjQUNaLFdBQzhCO0FBQzlCLFlBQU0sT0FBTyxNQUFNLE9BQU8sSUFBa0IsVUFBVTtBQUFBLFFBQ3JEO0FBQUE7QUFHRCxhQUFPLEtBQUssUUFBUSxLQUFLLEtBQUs7QUFBQTtBQUFBLGlCQUdsQixVQUNaLE9BQ0EsUUFDOEI7QUFDOUIsWUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLFFBQVE7QUFFOUMsYUFBTyxLQUFLLFFBQVE7QUFBQTtBQUFBLFdBR2QsUUFBUSxNQUFlO0FBQzdCLGFBQU8sSUFBSSxtQkFBbUI7QUFBQTtBQUFBLFVBVXpCLE1BQU0sTUFBaUIsV0FBK0I7QUFuRjlEO0FBb0ZHLFlBQU0sY0FBYyxLQUFLLE9BQVE7QUFFakMsWUFBTSxVQUFVO0FBQ2hCLFlBQU0sTUFBTSxDQUFDLEtBQW9CLFFBQWdCO0FBQ2hELFlBQUksS0FBSztBQUNSLGtCQUFRLE9BQU87QUFBQTtBQUFBO0FBSWpCLFdBQUssZUFBZSxRQUFRLENBQUMsUUFDNUIsSUFBSSxLQUFLLEtBQUssUUFBUSxlQUFlLFlBQVksTUFBTTtBQUd4RCxXQUFLLGNBQWMsUUFBUSxDQUFDLFFBQVE7QUFDbkMsZ0JBQVEsSUFDUCwyQkFDQSxLQUNBLEtBQUssUUFBUSxZQUFZO0FBRTFCLFlBQUksS0FBSyxLQUFLLFFBQVEsWUFBWTtBQUFBO0FBR25DLFVBQUksS0FBSyxhQUFhO0FBQ3JCLGdCQUFRLFFBQVEsR0FBRyxLQUFLLGVBQWUsUUFBUTtBQUFBO0FBR2hELGNBQVEsUUFBUSxRQUFRLE1BQ3RCLFFBQVEsWUFBWSxJQUNwQixRQUFRLFFBQVE7QUFFbEIsWUFBTSxlQUFnQixNQUFNLEtBQUsscUJBQXNCO0FBRXZELGVBQVMsQ0FBQyxNQUFNLFVBQVUsT0FBTyxRQUFRLGVBQWU7QUFDdkQsZ0JBQVEsZUFBZTtBQUFBLFVBQ3RCLEdBQUksUUFBUSxnQkFBZ0I7QUFBQSxVQUM1QjtBQUFBLFlBQ0MsSUFBSSxNQUFNLFdBQVc7QUFBQSxZQUNyQixPQUFPLEtBQUssU0FBUyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBSzlCLFlBQU0sT0FBTyxPQUFPLEtBQUssUUFBUTtBQUVqQyxVQUFJLFdBQVc7QUFDZCxhQUFLLGFBQWE7QUFBQTtBQUduQixZQUFNLG1CQUFtQixDQUFDLG1CQUFZLGVBQVosbUJBQXdCLFVBQy9DLEtBQ0EsTUFBTSxtQkFBbUIsUUFBUSxZQUFZO0FBRWhELFlBQU0sWUFBWSxpQ0FDZCxPQURjO0FBQUEsUUFFakIsYUFBYSxRQUFRO0FBQUE7QUFHdEIsV0FBSyxlQUFlLFFBQVEsQ0FBQyxNQUFNLE9BQU8sVUFBVTtBQUNwRCxXQUFLLGNBQWMsUUFBUSxDQUFDLE1BQU0sT0FBTyxVQUFVO0FBRW5ELFlBQU0sV0FBVyxNQUFNLFFBQVEsSUFDOUIsaUJBQWlCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxXQUFXO0FBR2hELFdBQUssWUFBWTtBQUVqQixhQUFPO0FBQUE7QUFBQSxVQU9NLGtCQUdKO0FBQ1QsWUFBTSxXQUFTLFlBQVk7QUFDMUIsY0FBTSxFQUFFLGlCQUFpQixLQUFLLE9BQU87QUFFckMsWUFBSSxDQUFDLGdCQUFnQixhQUFhLFdBQVcsR0FBRztBQUMvQyxpQkFBTztBQUFBO0FBR1IsZ0JBQVEsSUFBSSwyQkFBMkI7QUFFdkMsY0FBTSxTQUFTLE1BQU0sT0FBTyxZQUFZLFFBQ3ZDLGFBQWEsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUczQixlQUFPLE9BQU8sT0FBTyxDQUFDLEtBQUssVUFBVTtBQUNwQyxnQkFBTSxXQUFXLGFBQWEsS0FDN0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxNQUFNO0FBR3ZCLGNBQUksTUFBTSxTQUFTLFlBQVksQ0FBQyxVQUFVO0FBQ3pDLG1CQUFPO0FBQUE7QUFHUixpQkFBTyxpQ0FDSCxNQURHO0FBQUEsYUFFTCxNQUFNLFFBQVE7QUFBQSxjQUNkLE9BQU8sU0FBUztBQUFBLGNBQ2hCLFlBQVk7QUFBQTtBQUFBO0FBQUEsV0FHWjtBQUFBO0FBR0osV0FBSyxxQkFBcUIsS0FBSyxzQkFBc0I7QUFFckQsYUFBTyxLQUFLO0FBQUE7QUFBQTtBQUFBOzs7QUNuTWY7QUFBQSxXQUFxQjtBQTZCZCxtQ0FDTixRQUMyQjtBQUMzQixTQUFPLDZCQUFvRTtBQUFBLElBWTFFLFlBQVksRUFBRSxRQUFxQztBQUYzQyxvQkFBbUI7QUFHMUIsV0FBSyxPQUFPO0FBQUE7QUFBQSxpQkFaQSxjQUNaLE1BQ3VDO0FBQ3ZDLFlBQU0sT0FBTyxNQUFNLE9BQU8sS0FBSyxjQUFjO0FBRTdDLGFBQU8sSUFBSSx1QkFBdUIsRUFBRTtBQUFBO0FBQUEsSUFVN0IsU0FBUyxPQUFlO0FBQy9CLFdBQUssT0FBTyxLQUFLO0FBQUE7QUFBQSxVQUdaLFVBQ0wsTUFDQSxTQUN1QztBQUN2QyxZQUFNLE9BQU8sTUFBTSxLQUFLO0FBRXhCLGFBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3ZDLFFBQUksaUJBQVksTUFBTSxTQUNwQixHQUFHLFNBQVMsQ0FBQyxRQUFRLE9BQU8sTUFDNUIsR0FBRyxRQUFRLENBQUMsUUFBZ0IsS0FBSyxTQUFTLE1BQzFDLEdBQUcsT0FBTyxNQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUEsVUFJdEIsS0FBSyxFQUFFLGdCQUFnQixrQkFBd0M7QUFDcEUsY0FBUSxJQUFJLHdCQUF3QixLQUFLLE9BQU87QUFFaEQsWUFBTSxnQkFBZ0IsSUFBSTtBQUkxQixZQUFNLGVBQWUsQ0FBQyxTQUFpQjtBQUN0QyxZQUFJLENBQUMsY0FBYyxJQUFJLE9BQU87QUFDN0Isd0JBQWMsSUFDYixNQUNBLE9BQU8sYUFBYSxVQUFVLE1BQU07QUFBQTtBQUl0QyxlQUFPLGNBQWMsSUFBSTtBQUFBO0FBRzFCLFlBQU0sU0FBUztBQUVmLFVBQUksQ0FBQyxRQUFRO0FBQ1osY0FBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixlQUFTLFNBQVMsS0FBSyxPQUFPLFdBQVc7QUFDeEMsY0FBa0QsWUFBMUMsWUFBVSxpQkFBZ0MsSUFBZix1QkFBZSxJQUFmLENBQTNCO0FBQ1IsY0FBTSxXQUFXLE1BQU0sYUFBYTtBQUVwQyxjQUFNLE9BQU8sTUFBTSxzQ0FBVSxNQUFNLFlBQVksS0FBSztBQUVwRCxjQUFNLDhCQUFNLEtBQUssRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNoR3ZCO0FBOEJPLDZCQUE2QixRQUF5QztBQUM1RSxTQUFPLDBCQUEyRDtBQUFBLElBWWpFLFlBQW9CLEtBQWtCO0FBQWxCO0FBQUE7QUFBQSxpQkFYUCxTQUFTLE1BQWM7QUFDbkMsWUFBTSxPQUFPLE1BQU0sT0FBTyxJQUFzQjtBQUNoRCxZQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUztBQUU3QyxVQUFJLENBQUMsS0FBSztBQUNULGNBQU0sSUFBSSxNQUFNO0FBQUE7QUFHakIsYUFBTyxJQUFJLG9CQUFvQjtBQUFBO0FBQUEsUUFLNUIsS0FBSztBQUNSLGFBQU8sS0FBSyxJQUFJO0FBQUE7QUFBQSxRQUViLE9BQU87QUFDVixhQUFPLEtBQUssSUFBSTtBQUFBO0FBQUEsUUFFYixpQkFBaUI7QUFDcEIsYUFBTyxLQUFLLElBQUk7QUFBQTtBQUFBO0FBQUE7OztBUi9CbkIsSUFBTSxVQUFVO0FBWWhCLElBQU0sY0FBYyxDQUFDLFVBQXVCO0FBQzNDLE1BQUksTUFBTSxRQUFRLFFBQVE7QUFDekIsV0FBTyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxZQUFZLE9BQU8sS0FBSztBQUFBO0FBR3pELFNBQU8sTUFBTTtBQUFBO0FBR1Asd0JBQWtCO0FBQUEsRUFxQnhCLFlBQW9CLGFBQXlCO0FBQXpCO0FBQ25CLFNBQUssY0FBYyx1QkFBdUI7QUFDMUMsU0FBSyxTQUFTLGtCQUFrQjtBQUNoQyxTQUFLLFVBQVUsbUJBQW1CO0FBQ2xDLFNBQUssUUFBUSxpQkFBaUI7QUFDOUIsU0FBSyxPQUFPLGdCQUFnQjtBQUM1QixTQUFLLGVBQWUsd0JBQXdCO0FBQzVDLFNBQUssYUFBYSwwQkFBMEI7QUFDNUMsU0FBSyxXQUFXLG9CQUFvQjtBQUFBO0FBQUEsZUE1QnhCLFdBQVcsU0FBa0I7QUFDekMsVUFBTSxPQUFPLE1BQU0sZUFBZTtBQUNsQyxVQUFNLFlBQVksTUFBTSw4QkFBTSxlQUFlLFFBQVE7QUFFckQsUUFBSSxDQUFDLFdBQVc7QUFDZixZQUFNLElBQUksU0FBUyxhQUFhLEVBQUUsUUFBUTtBQUFBO0FBRzNDLFdBQU8sSUFBSSxZQUFZO0FBQUE7QUFBQSxRQXVCVixNQUNiLEtBQ0EsUUFDQSxNQUNhO0FBQ2IsVUFBTSxhQUFhLElBQUk7QUFDdkIsVUFBTSxTQUFzQjtBQUFBLE1BQzNCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUixlQUFlLFVBQVUsS0FBSyxZQUFZO0FBQUE7QUFBQSxNQUUzQyxRQUFRLFdBQVc7QUFBQTtBQUdwQixRQUFJLFFBQVEsT0FBTyxTQUFTO0FBQzNCLGFBQU8sUUFBUSxrQkFDZDtBQUFBO0FBR0YsUUFBSSxNQUFNO0FBQ1QsWUFBTSxTQUFTLElBQUk7QUFFbkIsYUFBTyxRQUFRLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxXQUMvQixPQUFPLElBQUksS0FBSyxZQUFZO0FBRzdCLGFBQU8sT0FBTyxPQUFPO0FBQUE7QUFHdEIsWUFBUSxJQUFJLG1CQUFtQixLQUFLLFFBQVEsT0FBTyxNQUFNO0FBRXpELGVBQVcsTUFBTSxXQUFXLFNBQVM7QUFFckMsVUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLO0FBQ2xDLFVBQU0sUUFBTyxNQUFNLFNBQVM7QUFFNUIsWUFBUSxJQUFJLHdCQUF3QjtBQUVwQyxRQUFJLE1BQUssT0FBTztBQUNmLFlBQU0sSUFBSSxNQUFNLE1BQUs7QUFBQTtBQUd0QixXQUFPO0FBQUE7QUFBQSxFQUdSLElBQVksT0FBZSxJQUFJLFNBQWlCLElBQUk7QUFDbkQsVUFBTSxNQUFNLElBQUksSUFBSSxHQUFHLFVBQVU7QUFFakMsV0FBTyxRQUFRLFFBQVEsUUFBUSxDQUFDLENBQUMsS0FBSyxXQUNyQyxJQUFJLGFBQWEsSUFBSSxLQUFLLFlBQVk7QUFHdkMsV0FBTyxLQUFLLE1BQVMsSUFBSSxZQUFZO0FBQUE7QUFBQSxFQUd0QyxLQUFhLE9BQWUsSUFBSSxPQUFlLElBQUk7QUFDbEQsV0FBTyxLQUFLLE1BQVMsR0FBRyxVQUFVLFFBQVEsUUFBUTtBQUFBO0FBQUE7OztBRG5IN0MsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUM1RCxRQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFFNUIsUUFBTSxVQUFVLElBQUksYUFBYSxJQUFJO0FBQ3JDLFFBQU0sUUFBUSxNQUFNLFlBQVksV0FBVztBQUUzQyxNQUFJLENBQUMsU0FBUztBQUNiLFVBQU0sSUFBSSxTQUFTLHVCQUF1QixFQUFFLFFBQVE7QUFBQTtBQUdyRCxRQUFNLFVBQVUsTUFBTSxNQUFNLE9BQU8sVUFBVSxTQUFTLEVBQUUsU0FBUztBQUVqRSxTQUFPLHdCQUFLO0FBQUEsSUFDWCxTQUFTLFFBQVEsSUFBSSxDQUFDLE1BQU8sR0FBRSxJQUFJLEVBQUUsSUFBSSxPQUFPLEVBQUU7QUFBQTtBQUFBOzs7QVUzQnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBNkQ7QUFDN0Qsb0JBU087QUFFUCwwQkFBeUI7QUFDekIsb0JBQW1CO0FBQ25CLG1CQUFrQjtBQUNsQix1QkFBc0I7OztBQ2Z0QjtBQUFBLHVCQUFzQjtBQUN0QixtQkFBa0I7QUFDbEIsd0JBQXVCO0FBT1IsY0FBYyxFQUFFLE9BQU8sWUFBdUI7QUFDNUQsU0FDQyxvQ0FBQywwQkFBRDtBQUFBLElBQVcsVUFBUztBQUFBLElBQUssSUFBSSxFQUFFLElBQUk7QUFBQSxLQUNsQyxvQ0FBQyxzQkFBRDtBQUFBLElBQU8sV0FBVztBQUFBLElBQUcsSUFBSSxFQUFFLElBQUk7QUFBQSxLQUM5QixvQ0FBQywyQkFBRDtBQUFBLElBQVksT0FBTTtBQUFBLElBQVMsU0FBUTtBQUFBLElBQUssV0FBVTtBQUFBLElBQUssSUFBSTtBQUFBLEtBQ3pELFFBRUQ7QUFBQTs7O0FDaEJMO0FBQUEsb0JBQWtCO0FBQ2xCLGtCQUFpQjtBQUNqQixvQkFBbUI7QUFNbkIsSUFBTSxXQUFXLDJCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9ULHlCQUF5QixFQUFFLFlBQWtDO0FBQzNFLFFBQU0sT0FBTyxzQkFBTSxTQUFTLFFBQVE7QUFFcEMsUUFBTSxjQUFjLEtBQUssTUFBTSxHQUFHO0FBQ2xDLFFBQU0sVUFBVSxLQUFLLEtBQUssU0FBUztBQUVuQyxTQUNDLG9EQUFDLHFCQUFEO0FBQUEsSUFDQyxXQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxJQUFJLEVBQUUsZ0JBQWdCO0FBQUEsS0FFckIsWUFBWSxJQUFJLENBQUMsR0FBRyxRQUNwQixvREFBQyxVQUFEO0FBQUEsSUFBVSxNQUFJO0FBQUEsSUFBQyxJQUFJO0FBQUEsSUFBRyxLQUFLLGNBQWM7QUFBQSxLQUN2QyxLQUdGLFVBQ0Esb0RBQUMsVUFBRDtBQUFBLElBQVUsTUFBSTtBQUFBLElBQUMsSUFBSTtBQUFBLEtBQ2pCLFdBRUM7QUFBQTs7O0FDckNQO0FBQ0Esb0JBQWlDO0FBT2xCLGlCQUFpQixFQUFFLFNBQVMsWUFBK0I7QUFDekUsK0JBQVUsTUFBTTtBQUNmO0FBQUEsS0FDRSxDQUFDO0FBRUosU0FBTywwRkFBRztBQUFBOzs7QUNiWDtBQUFBLDRCQUF5QjtBQUN6QixxQkFBbUI7QUFFbkIsSUFBTyxvQkFBUSw0QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUowQmYsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUM1RCxRQUFNLE9BQU8sTUFBTSxlQUFlO0FBRWxDLE1BQUksQ0FBQyxNQUFNO0FBQ1YsVUFBTSw0QkFBUztBQUFBO0FBR2hCLE1BQUksQ0FBRSxNQUFNLEtBQUssZUFBZSxRQUFRLFFBQVM7QUFDaEQsVUFBTSw0QkFBUztBQUFBO0FBR2hCLFNBQU87QUFBQTtBQUdELElBQU0sUUFBdUIsTUFBTTtBQUFBLEVBQ3pDO0FBQUEsSUFDQyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUE7QUFBQTtBQUlELElBQU0sU0FBeUIsT0FBTyxFQUFFLGNBQWM7QUFDNUQsUUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXO0FBRTNDLFFBQU0sZ0JBQWdCLHNEQUFtQztBQUFBLElBQ3hELGFBQWE7QUFBQSxJQUNiLFFBQVEsQ0FBQyxFQUFFLGVBQWUsYUFBYTtBQUFBO0FBR3hDLFFBQU0sV0FBVyxNQUFNLG1EQUN0QixTQUNBO0FBR0QsUUFBTSxPQUFPLFNBQVMsSUFBSTtBQUMxQixRQUFNLE9BQU8sTUFBTSxLQUFLO0FBRXhCLFVBQVEsSUFBSSxtQkFBbUI7QUFFL0IsU0FBTztBQUFBO0FBR08sbUJBQW1CO0FBdkVsQztBQXdFQyxRQUFNLFNBQVM7QUFDZixRQUFNLGFBQWEsZUFBZSxRQUFRO0FBQzFDLFFBQU0sQ0FBQyxPQUFPLFlBQVksNEJBQXVCO0FBRWpELFFBQU0sVUFBVTtBQUNoQixRQUFNLGNBQWMsZUFDbkIsU0FDQSw2QkFBNkIsbUJBQW1CLGdDQUFPLE9BQU07QUFFOUQsUUFBTSxDQUFDLFFBQVEsYUFBYSw0QkFBd0I7QUFFcEQsUUFBTSxFQUFFLFVBQVUsZ0JBQWdCLE9BQU8scUJBQ3hDO0FBRUQsUUFBTSxDQUFDLE9BQU8sWUFBWSw0QkFDekI7QUFHRCxTQUNDLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE9BQU07QUFBQSxLQUNYLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FDM0Isb0NBQUMsaUJBQUQsTUFDQyxvQ0FBQyxTQUFEO0FBQUEsSUFBUyxTQUFTO0FBQUEsS0FDakIsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsT0FBTywrQkFBTztBQUFBLElBQUksTUFBSztBQUFBLE1BQzVDLG9DQUFDLDZCQUFEO0FBQUEsSUFDQyxJQUFJO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUE7QUFBQSxJQUVYLE1BQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxHQUFHLE1BQU0sU0FBUztBQUFBLElBQzdCLFNBQVMsT0FBTyxVQUFVO0FBQUEsSUFDMUIsU0FBUyxjQUFPLFNBQVAsbUJBQWEsV0FBVTtBQUFBLElBQ2hDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtBQUFBLElBQ3pCLHNCQUFzQixDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUFBLElBQzNDLGFBQWEsQ0FBQyxXQUNiLG9DQUFDLDBCQUFELGlDQUNLLFNBREw7QUFBQSxNQUVDLE9BQU07QUFBQSxNQUNOLFNBQVE7QUFBQTtBQUFBLE9BS1gsQ0FBQyxRQUFRLE9BQ1Qsb0NBQUMsU0FBRDtBQUFBLElBQVMsU0FBUztBQUFBLEtBQ2pCLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLE9BQU8saUNBQVE7QUFBQSxJQUNmLE1BQUs7QUFBQSxNQUVOLG9DQUFDLDZCQUFEO0FBQUEsSUFDQyxJQUFJLEVBQUUsT0FBTyxRQUFRLFVBQVU7QUFBQSxJQUMvQixNQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsR0FBRyxNQUFNLFVBQVU7QUFBQSxJQUM5QixTQUFTLFFBQVEsVUFBVTtBQUFBLElBQzNCLFNBQVMsZUFBUSxTQUFSLG1CQUFjLFlBQVc7QUFBQSxJQUNsQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7QUFBQSxJQUN6QixzQkFBc0IsQ0FBQyxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFBQSxJQUMzQyxhQUFhLENBQUMsV0FDYixvQ0FBQywwQkFBRCxpQ0FDSyxTQURMO0FBQUEsTUFFQyxPQUFNO0FBQUEsTUFDTixTQUFRO0FBQUE7QUFBQSxPQU1aLENBQUMsU0FBUyxPQUNWLG9DQUFDLDBCQUFEO0FBQUEsSUFDQyxJQUFJO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUE7QUFBQSxJQUVYLE9BQU07QUFBQSxJQUNOLFNBQVE7QUFBQSxJQUNSLEtBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxNQUdiLENBQUMsaUJBQWlCLE9BQ2xCLG9DQUFDLHNCQUFEO0FBQUEsSUFDQyxTQUFTO0FBQUEsSUFDVCxZQUFXO0FBQUEsSUFDWCxjQUFhO0FBQUEsS0FFYixvQ0FBQyxtQkFBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsYUFBVztBQUFBLElBQ1g7QUFBQSxJQUNBLGVBQWUsQ0FBQyxVQUNmLFNBQVMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQUEsTUFHOUIsb0NBQUMsdUJBQUQ7QUFBQSxJQUNDLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxTQUFTLE1BQU0sV0FBVztBQUFBLEtBQ3JDO0FBQUE7QUFXUix3QkFDQyxTQUNBLEtBQ0M7QUFDRCxTQUFPLCtCQUFZLE1BQU07QUFDeEIsUUFBSSxDQUFDLFFBQVEsUUFBUSxRQUFRLFVBQVUsUUFBUTtBQUM5QyxjQUFRLEtBQUs7QUFBQTtBQUFBLEtBRVosQ0FBQyxTQUFTO0FBQUE7QUFHZCw0QkFBNEI7QUFDM0IsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sYUFBYTtBQUVuQixRQUFNLENBQUMsT0FBTyxZQUFZLDRCQUFpQjtBQUMzQyxRQUFNLENBQUMsVUFBVSxlQUFlLDRCQUFrQjtBQUVsRCxRQUFNLFdBQVcsK0JBQVksQ0FBQyxNQUF1QztBQTFNdEU7QUEyTUUsYUFBUyxnQkFBUyxZQUFULG1CQUFrQixVQUFTO0FBRXBDLFFBQUksV0FBVyxTQUFTO0FBQ3ZCLG1CQUFhLFdBQVc7QUFBQTtBQUd6QixlQUFXLFVBQVUsV0FBVyxNQUFNO0FBak54QztBQWtORyxrQkFBWSxRQUFRLGdCQUFTLFlBQVQsb0JBQWtCO0FBRXRDLGlCQUFXLFVBQVU7QUFBQSxPQUNuQjtBQUFBLEtBQ0Q7QUFFSCxRQUFNLGFBQWEsK0JBQVksQ0FBQyxNQUF1QztBQXhOeEU7QUF5TkUsUUFBSSxFQUFFLFFBQVEsU0FBUztBQUN0QixrQkFBWSxRQUFRLGdCQUFTLFlBQVQsbUJBQWtCLFVBQVM7QUFBQTtBQUFBLEtBRTlDO0FBRUgsU0FBTztBQUFBLElBQ047QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7OztBS3BPSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esb0JBQXFCO0FBZWQsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUM1RCxRQUFNLE9BQU8sTUFBTSxlQUFlO0FBQ2xDLFFBQU0sWUFBWSxNQUFNLDhCQUFNLGVBQWUsUUFBUTtBQUVyRCxNQUFJLENBQUMsV0FBVztBQUNmLFVBQU0sSUFBSSxTQUFTLGFBQWEsRUFBRSxRQUFRO0FBQUE7QUFHM0MsUUFBTSxRQUFRLElBQUksWUFBWTtBQUM5QixRQUFNLFNBQVMsTUFBTSxNQUFNLE1BQU07QUFFakMsU0FBTyx3QkFBSztBQUFBLElBQ1gsUUFBUSxPQUFPLElBQUksQ0FBQyxNQUFPLEdBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFO0FBQUE7QUFBQTs7O0FDNUJsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBeUI7QUFLbEIsSUFBTSxVQUF5QixNQUFNLDRCQUFTO0FBRTlDLElBQU0sVUFBeUIsT0FBTyxFQUFFLFNBQVMsYUFBYTtBQUVwRSxNQUFJLENBQUMsT0FBTyxXQUFXLENBQUMsT0FBTyxLQUFLLFNBQVMsU0FBUyxPQUFPLFVBQVU7QUFDdEUsVUFBTSxJQUFJLE1BQU07QUFBQTtBQUdqQixVQUFRLElBQUksYUFBYSxPQUFPO0FBRWhDLFFBQU0saUJBQWlCLE9BQU8sU0FBb0IsU0FBUztBQUFBLElBQzFELFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQTtBQUFBOzs7QUNsQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFLTztBQUNQLHFCQUErQjtBQUMvQixxQkFBbUI7QUFDbkIsb0JBQWtCO0FBQ2xCLHdCQUFzQjtBQVFmLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDNUQsUUFBTSxPQUFPLE1BQU0sZUFBZTtBQUVsQyxNQUFJLENBQUMsTUFBTTtBQUNWLFVBQU0sNkJBQVM7QUFBQTtBQUdoQixNQUFJLENBQUUsTUFBTSxLQUFLLGVBQWUsUUFBUSxRQUFTO0FBQ2hELFVBQU0sNkJBQVM7QUFBQTtBQUdoQixTQUFPLEVBQUUsTUFBTSxLQUFLO0FBQUE7QUFHZCxJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzVELFFBQU0sT0FBTyxNQUFNLGVBQWU7QUFDbEMsUUFBTSxZQUFZLE1BQU0sOEJBQU0sZUFBZSxRQUFRO0FBRXJELE1BQUksQ0FBQyxXQUFXO0FBQ2YsVUFBTSxJQUFJLFNBQVMsYUFBYSxFQUFFLFFBQVE7QUFBQTtBQUczQyxRQUFNLGtCQUFrQixzREFBbUM7QUFBQSxJQUMxRCxhQUFhO0FBQUEsSUFDYixRQUFRLENBQUMsRUFBRSxlQUFlLGFBQWE7QUFBQTtBQUd4QyxRQUFNLFdBQVcsTUFBTSxtREFDdEIsU0FDQTtBQUdELFFBQU0sUUFBUSxJQUFJLFlBQVk7QUFDOUIsUUFBTSxRQUFRLE1BQU0sTUFBTSxXQUFXLGNBQ3BDLFNBQVMsSUFBSTtBQUdkLFFBQU0sTUFBTSxVQUFVLFNBQVMsSUFBSSxVQUFrQixFQUFFLFNBQVM7QUFFaEUsUUFBTSxNQUFNLEtBQUs7QUFBQSxJQUNoQixnQkFBZ0IsTUFBTSxNQUFNLE9BQU8sY0FDbEMsU0FBUyxJQUFJO0FBQUEsSUFFZCxnQkFBZ0IsTUFBTSxNQUFNLE9BQU8sY0FDbEMsU0FBUyxJQUFJO0FBQUE7QUFJZixTQUFPO0FBQUE7QUFHTyxzQkFBc0I7QUFDcEMsU0FDQyxvQ0FBQyxNQUFEO0FBQUEsSUFBTSxPQUFNO0FBQUEsS0FDWCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sU0FBUTtBQUFBLEtBQzNCLG9DQUFDLHVCQUFEO0FBQUEsSUFBTyxTQUFTO0FBQUEsSUFBRyxZQUFXO0FBQUEsSUFBUyxjQUFhO0FBQUEsS0FDbkQsb0NBQUMsMkJBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLFNBQVE7QUFBQSxNQUVULG9DQUFDLDJCQUFEO0FBQUEsSUFDQyxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsTUFFVCxvQ0FBQywyQkFBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLE1BRVQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQU8sTUFBSztBQUFBLE1BQ3hCLG9DQUFDLHdCQUFEO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsS0FBUztBQUFBOzs7QUN6Ri9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQUE4QztBQUM5QyxxQkFBbUI7QUFDbkIsb0JBQWtCO0FBQ2xCLGlCQUFvQjtBQVViLElBQU0sVUFBeUIsT0FBTztBQUFBLEVBQzVDO0FBQUEsTUFDaUM7QUFDakMsUUFBTSxPQUFPLE1BQU0sZUFBZTtBQUVsQyxNQUFJLENBQUMsTUFBTTtBQUNWLGlDQUFTO0FBQUE7QUFHVixTQUFPO0FBQUEsSUFDTixjQUFjLFFBQVEsTUFBTSw4QkFBTSxlQUFlLFFBQVE7QUFBQTtBQUFBO0FBSTVDLG1CQUFtQjtBQUNqQyxRQUFNLEVBQUUsaUJBQWlCO0FBRXpCLFNBQ0Msb0NBQUMsTUFBRDtBQUFBLElBQU0sT0FBTTtBQUFBLEtBQ1gsb0NBQUMsdUJBQUQ7QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLFlBQVc7QUFBQSxJQUFTLGNBQWE7QUFBQSxLQUNuRCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQWMsUUFBTztBQUFBLEtBQ2pDLG9DQUFDLHdCQUFEO0FBQUEsSUFDQyxXQUFXLG9DQUFDLG9CQUFEO0FBQUEsSUFDWCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsS0FFSixlQUNFLHVCQUNBO0FBQUE7OztBQzFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBK0I7QUFDL0IscUJBQW1CO0FBQ25CLG9CQUFrQjtBQVFYLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDNUQsUUFBTSxPQUFPLE1BQU0sZUFBZTtBQUVsQyxNQUFJLENBQUMsTUFBTTtBQUNWLFVBQU0sNkJBQVM7QUFBQTtBQUdoQixNQUFJLENBQUUsTUFBTSxLQUFLLGVBQWUsUUFBUSxRQUFTO0FBQ2hELFVBQU0sNkJBQVM7QUFBQTtBQUdoQixTQUFPLEVBQUUsTUFBTSxLQUFLO0FBQUE7QUFHTixpQkFBaUI7QUFDL0IsU0FDQyxvQ0FBQyxNQUFEO0FBQUEsSUFBTSxPQUFNO0FBQUEsS0FDWCxvQ0FBQyx1QkFBRDtBQUFBLElBQU8sU0FBUztBQUFBLElBQUcsWUFBVztBQUFBLElBQVMsY0FBYTtBQUFBLEtBQ25ELG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUixvQ0FBQyx3QkFBRDtBQUFBLElBQVEsU0FBUTtBQUFBLEtBQVksaUJBRTdCLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUixvQ0FBQyx3QkFBRDtBQUFBLElBQVEsU0FBUTtBQUFBLEtBQVk7QUFBQTs7O0FDakNqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBOEM7QUFDOUMscUJBQW1CO0FBQ25CLG9CQUFrQjtBQUNsQixvQkFBdUI7QUFVaEIsSUFBTSxVQUF5QixPQUFPO0FBQUEsRUFDNUM7QUFBQSxNQUMrQjtBQUMvQixRQUFNLE9BQU8sTUFBTSxlQUFlO0FBRWxDLFFBQU0sZ0JBQWdCLE9BQ25CLE1BQU0sS0FBSyxlQUFlLFFBQVEsVUFDbEM7QUFFSCxNQUFJLGVBQWU7QUFDbEIsaUNBQVM7QUFBQTtBQUdWLFNBQU87QUFBQSxJQUNOO0FBQUE7QUFBQTtBQUlhLGlCQUFpQjtBQUMvQixRQUFNLEVBQUUsa0JBQWtCO0FBRTFCLFNBQ0Msb0NBQUMsTUFBRDtBQUFBLElBQU0sT0FBTTtBQUFBLEtBQ1gsb0NBQUMsdUJBQUQ7QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLFlBQVc7QUFBQSxJQUFTLGNBQWE7QUFBQSxLQUNuRCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQWUsUUFBTztBQUFBLEtBQ2xDLG9DQUFDLHdCQUFEO0FBQUEsSUFDQyxXQUFXLG9DQUFDLHVCQUFEO0FBQUEsSUFDWCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsS0FFSixnQkFDRSx3QkFDQTtBQUFBOzs7QUM5Q1Q7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLDJDQUEwQyxXQUFVLENBQUMsNENBQTJDLDRDQUEyQywrQ0FBNkMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLDRDQUEyQyw0Q0FBMkMsNENBQTJDLDRDQUEyQyw0Q0FBMkMsNkNBQTRDLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0JBQXVCLEVBQUMsTUFBSyx3QkFBdUIsWUFBVyxRQUFPLFFBQU8saUJBQWdCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1EQUFrRCxXQUFVLENBQUMsNkNBQTRDLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUNBQWdDLEVBQUMsTUFBSyxpQ0FBZ0MsWUFBVyxRQUFPLFFBQU8sMEJBQXlCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDREQUEyRCxXQUFVLENBQUMsNkNBQTRDLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0JBQWlCLEVBQUMsTUFBSyxrQkFBaUIsWUFBVyxRQUFPLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw2Q0FBNEMsV0FBVSxDQUFDLDRDQUEyQyw0Q0FBMkMsNkNBQTRDLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsMkNBQTBDLFdBQVUsQ0FBQyw0Q0FBMkMsNkNBQTRDLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkNBQTBDLFdBQVUsQ0FBQyw0Q0FBMkMsNENBQTJDLDZDQUE0QyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDJCQUEwQixFQUFDLE1BQUssMkJBQTBCLFlBQVcsUUFBTyxRQUFPLG9CQUFtQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzREFBcUQsV0FBVSxDQUFDLDZDQUE0QyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDBCQUF5QixFQUFDLE1BQUssMEJBQXlCLFlBQVcsUUFBTyxRQUFPLG1CQUFrQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxREFBb0QsV0FBVSxDQUFDLDRDQUEyQyw0Q0FBMkMsNkNBQTRDLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sMEJBQXlCLEVBQUMsTUFBSywwQkFBeUIsWUFBVyxRQUFPLFFBQU8sbUJBQWtCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHFEQUFvRCxXQUFVLENBQUMsNENBQTJDLDZDQUE0QyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHNCQUFxQixFQUFDLE1BQUssc0JBQXFCLFlBQVcsUUFBTyxRQUFPLGVBQWMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsaURBQWdELFdBQVUsQ0FBQyw0Q0FBMkMsNENBQTJDLDZDQUE0QyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBakNhdmtJLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQ0FBaUM7QUFBQSxJQUM3QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDJCQUEyQjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosMEJBQTBCO0FBQUEsSUFDdEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwwQkFBMEI7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHdCQUF3QjtBQUFBLElBQ3BCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRDFGUCxJQUFNLFVBQVUsMkNBQXFCO0FBQUEsRUFDM0M7QUFBQSxFQUNBLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
