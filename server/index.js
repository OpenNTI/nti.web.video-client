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

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/script-asset-inventory.tsx
var script_asset_inventory_exports = {};
__export(script_asset_inventory_exports, {
  action: () => action,
  default: () => ScriptAssetInventory,
  load: () => load
});
init_react();

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

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/script-asset-inventory.tsx
var import_remix5 = __toModule(require_remix());
var import_TextField = __toModule(require("@mui/material/TextField"));
var import_Button2 = __toModule(require("@mui/material/Button"));
var import_Stack2 = __toModule(require("@mui/material/Stack"));

// app/api/Google/GAPI.server.ts
init_react();
var import_googleapis = __toModule(require("googleapis"));
var GAPI = class {
  constructor(request, token, formData) {
    const search = formData ? formData : new URL(request.url).searchParams;
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
  async getLinksFromSheet() {
    return await collectLinksFromColumn(this.params);
  }
  async getAllLinksInDocument(url) {
    const id = getIDFromURL(url);
    const docs = import_googleapis.google.docs("v1");
    const response = await docs.documents.get({
      oauth_token: this.token,
      documentId: id
    });
    if (!response.data.body.content) {
      throw Error("Failed to find content in Google Doc body");
    }
    const content = response.data.body.content;
    const urls = [];
    JSON.parse(JSON.stringify(content), (k, v) => {
      if (k == "url")
        urls.push(v);
    });
    return urls;
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

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/script-asset-inventory.tsx
var import_react4 = __toModule(require("react"));

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
  constructor(tableName, parse3) {
    this.table = null;
    if (!tableName) {
      throw new Error("Table must be given a table name.");
    }
    this.tableName = tableName;
    this.parse = parse3;
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

// app/routes/tasks/asset-inventory.tsx
init_react();
var import_path = __toModule(require("path"));
var import_react3 = __toModule(require("react"));
var import_Button = __toModule(require("@mui/material/Button"));
var import_CircularProgress = __toModule(require("@mui/material/CircularProgress"));
var import_Stack = __toModule(require("@mui/material/Stack"));
var import_Typography2 = __toModule(require("@mui/material/Typography"));
var HTMLParser = __toModule(require("node-html-parser"));

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

// app/routes/tasks/asset-inventory.tsx
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
    const json5 = JSON.parse(data.text);
    if (json5["@type"] !== "ImageObject") {
      continue;
    }
    return json5;
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
var GettyAssetTypes = {
  film: "video",
  image: "photo"
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
var ShutterURLRegex = /-(\d+)$/;
var Capitalize = (s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
var TitleCase = (s) => s.split(" ").map(Capitalize).join(" ");
var InfoGetters = [
  {
    handles: (src) => {
      const filename = import_path.default.basename(src, import_path.default.extname(src));
      return src.startsWith("https://www.gettyimages.com") || GettyRegex.test(filename);
    },
    info: async (src) => {
      let url = null;
      let fileInfo = {};
      if (src.startsWith("https://www.gettyimages.com")) {
        url = src;
      } else {
        const filename = import_path.default.basename(src, import_path.default.extname(src));
        const match = filename.match(GettyRegex);
        const id = match == null ? void 0 : match[2];
        fileInfo.fileName = filename;
        if (!id) {
          throw new Error(`Unable to get GettyImage id: ${filename}`);
        }
        url = `http://www.gettyimages.com/detail/${id}`;
      }
      let html = null;
      try {
        html = await getHTML(url);
      } catch {
        return {
          filename: "Unable to get Getty Images asset details",
          url
        };
      }
      const assetDetailsScript = html.querySelector('script[data-component="assetdetail"]');
      const assetDetails = assetDetailsScript ? JSON.parse(assetDetailsScript.text) : null;
      if (!assetDetails) {
        return {
          filename: "Unable to get Getty Images asset details",
          url
        };
      }
      return __spreadValues({
        vendor: "Getty Images",
        code: assetDetails.asset.id,
        url,
        type: GettyAssetTypes[assetDetails.asset.assetType] || "Unknown",
        headline: assetDetails.asset.title,
        creditline: assetDetails.asset.artistTitle ? assetDetails.asset.photographer : `${assetDetails.asset.photographer} / ${TitleCase(assetDetails.asset.artistTitle)}`,
        collection: assetDetails.asset.collectionDisplayName
      }, fileInfo);
    }
  },
  {
    handles: (src) => {
      const filename = import_path.default.basename(src, import_path.default.extname(src));
      return src.startsWith("https://www.shutterstock.com") || ShutterRegex.test(filename);
    },
    info: async (src) => {
      let url = null;
      if (src.startsWith("https://www.shutterstock.com")) {
        url = src;
      } else {
        const filename2 = import_path.default.basename(src, import_path.default.extname(src));
        const match2 = filename2.match(ShutterRegex);
        const id2 = match2 == null ? void 0 : match2[2];
        if (!id2) {
          return {
            url,
            headline: `Unable to get ShutterStock Image info.`
          };
        }
        url = `https://www.shutterstock.com/image-photo/${id2}`;
      }
      let imageObject = null;
      try {
        imageObject = await getImageObjectLinkData(url);
      } catch {
        return {
          url,
          headline: `Unable to get ShutterStock image info.`
        };
      }
      url = imageObject.contentUrl;
      const extension = import_path.default.extname(url);
      const filename = import_path.default.basename(url, extension);
      const match = filename.match(ShutterURLRegex);
      const id = match == null ? void 0 : match[1];
      return {
        vendor: "Shutterstock",
        code: id,
        url,
        filename,
        type: getTypeFromExtension(extension),
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
    const getter = InfoGetters.find((g) => g.handles(source));
    if (!getter) {
      const extension = import_path.default.extname(source);
      const filename = import_path.default.basename(source, extension);
      return [
        ...acc,
        Promise.resolve({
          type: getTypeFromExtension(extension),
          vendor: "Unknown",
          filename,
          source
        })
      ];
    }
    return [
      ...acc,
      getter.info(source).then((info) => __spreadValues({
        source
      }, info))
    ];
  }, []);
  return Promise.all(inventories);
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/tasks/script-asset-inventory.tsx
var load = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix5.redirect)("/login");
  }
};
var action = async ({ request }) => {
  var _a;
  const user = await getSessionUser(request);
  const token = (_a = await user.getCredentials(Service.google)) == null ? void 0 : _a.accessToken;
  if (!token) {
    throw new Error("Could not find GAPI access token.");
  }
  const formData = await request.formData();
  const gapi = new GAPI(request, token, formData);
  console.log("~~GETTING LINKS FROM SHEET~~");
  const sheetsInfo = await gapi.getLinksFromSheet();
  const sheetLinks = sheetsInfo.links.filter(String);
  let docLinks = [];
  console.log("~~GETTING LINKS FROM DOCS~~");
  for (const link of sheetLinks) {
    const foundLinks = (await gapi.getAllLinksInDocument(link)).filter(String);
    docLinks = [...docLinks, ...foundLinks];
  }
  console.log("~~GETTING INVENTORY~~");
  const inventory = await getAssetInventory({ "Collected source files": docLinks });
  console.log("FOUND INVENTORY: ", inventory);
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
    projectName: sheetsInfo.title
  });
};
function ScriptAssetInventory() {
  const transition = (0, import_remix5.useTransition)();
  const action6 = (0, import_remix5.useActionData)();
  const showDownload = !!action6;
  const showForm = !showDownload;
  const csv3 = useBlob(action6 == null ? void 0 : action6.csv, "text/csv;charset=utf-8;");
  const downloadURL = useObjectURL(csv3);
  return /* @__PURE__ */ import_react4.default.createElement(Page, {
    title: "Script Asset Inventory"
  }, /* @__PURE__ */ import_react4.default.createElement(import_remix5.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, !showForm ? null : /* @__PURE__ */ import_react4.default.createElement(import_Stack2.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ import_react4.default.createElement(import_TextField.default, {
    name: "url",
    label: "Spreadsheet URL",
    variant: "outlined",
    required: true,
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react4.default.createElement(import_TextField.default, {
    name: "sheet",
    label: "Sheet Name (Master Review Tracker)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react4.default.createElement(import_TextField.default, {
    name: "row",
    label: "Starting Row (5)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react4.default.createElement(import_TextField.default, {
    name: "column",
    label: "Data Column (I)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react4.default.createElement(import_Button2.default, {
    type: "submit",
    variant: "contained"
  }, transition.state === "submitting" ? "Generating..." : "Generate")), !showDownload ? null : /* @__PURE__ */ import_react4.default.createElement(import_Stack2.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: downloadURL,
    download: `${action6 == null ? void 0 : action6.projectName}-asset-inventory.csv`
  }, /* @__PURE__ */ import_react4.default.createElement(import_Button2.default, {
    variant: "contained"
  }, "Download")))));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/auth/$service.callback.tsx
var service_callback_exports = {};
__export(service_callback_exports, {
  loader: () => loader
});
init_react();
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
  action: () => action2,
  default: () => AssetInventory,
  getAssetInventory: () => getAssetInventory2,
  links: () => links,
  load: () => load2
});
init_react();
var import_path2 = __toModule(require("path"));
var import_react5 = __toModule(require("react"));
var import_Button3 = __toModule(require("@mui/material/Button"));
var import_CircularProgress2 = __toModule(require("@mui/material/CircularProgress"));
var import_Stack3 = __toModule(require("@mui/material/Stack"));
var import_Typography3 = __toModule(require("@mui/material/Typography"));
var import_remix6 = __toModule(require_remix());
var HTMLParser2 = __toModule(require("node-html-parser"));
var VendorOrder = ["Getty Images", "Shutterstock", "Unknown"];
var links = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/filepond@^4/dist/filepond.css"
  }
];
var load2 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix6.redirect)("/login");
  }
};
var action2 = async ({ request }) => {
  const UploadHandler = (0, import_remix6.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7
  });
  const formData = await (0, import_remix6.unstable_parseMultipartFormData)(request, UploadHandler);
  const file = formData.get("report");
  const report = await parseReport(file);
  console.log("REPORT: ", report);
  const projectName = report["Project name"];
  const inventory = (await getAssetInventory2(report)).sort((a, b) => VendorOrder.indexOf(a.vendor) - VendorOrder.indexOf(b.vendor));
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
  return (0, import_remix6.json)({
    csv: csv3,
    projectName: projectName[0].trim().replace(/\..*$/, "")
  });
};
function AssetInventory() {
  const transition = (0, import_remix6.useTransition)();
  const action6 = (0, import_remix6.useActionData)();
  const [files, setFiles] = (0, import_react5.useState)(void 0);
  const showSaving = transition.state === "loading" || transition.state === "submitting";
  const showDownload = !showSaving && action6;
  const showForm = !showSaving && !showDownload;
  const csv3 = useBlob(action6 == null ? void 0 : action6.csv, "text/csv;charset=utf-8;");
  const downloadURL = useObjectURL(csv3);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Asset Inventory"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, !showDownload || !downloadURL ? null : /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: downloadURL,
    download: `${action6 == null ? void 0 : action6.projectName}-asset-inventory.csv`
  }, /* @__PURE__ */ React.createElement(import_Button3.default, {
    variant: "contained"
  }, "Download"))), !showSaving ? null : /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_CircularProgress2.default, null), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "subtitle2"
  }, "Generating...")), !showForm ? null : /* @__PURE__ */ React.createElement(import_Stack3.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "subtitle1"
  }, "After Effects Dependency Report"), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "subtitle2"
  }, "File > Dependencies > Collect Files"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(FileInput_default, {
    name: "report",
    storeAsFile: true,
    files,
    onupdatefiles: (items) => setFiles(items.map((f) => f.file))
  }), /* @__PURE__ */ React.createElement(import_Button3.default, {
    variant: "contained",
    type: "submit"
  }, "Compile"))));
}
var getHTML2 = async (url) => {
  const resp = await fetch(url);
  const text = await resp.text();
  return HTMLParser2.parse(text, {
    blockTextElements: { style: false }
  });
};
var getImageObjectLinkData2 = async (url) => {
  const html = await getHTML2(url);
  const linkData = html.querySelectorAll("script[type='application/ld+json']");
  for (let data of linkData) {
    const json5 = JSON.parse(data.text);
    if (json5["@type"] !== "ImageObject") {
      continue;
    }
    return json5;
  }
  throw new Error(`Unable to load ImageObject: ${url}`);
};
var headlineFromImageObect2 = (obj) => obj.description;
var creditlineFromImageObject2 = (obj) => obj.author.name;
var TypesToExtension2 = {
  video: [".mp4", ".mov", ".mpg"],
  photo: [".jpeg", ".jpg", ".png", ".tif", ".webm"],
  audio: [".mp3", ".wav"]
};
var GettyAssetTypes2 = {
  film: "video",
  image: "photo"
};
var getTypeFromExtension2 = (ext) => {
  for (let [type, extensions] of Object.entries(TypesToExtension2)) {
    if (extensions.includes(ext)) {
      return type;
    }
  }
  return "unknown";
};
var GettyRegex2 = /^(gettyimages|GettyImages)\-(\d+)/;
var ShutterRegex2 = /^(shutterstock)_(\d+)/;
var ShutterURLRegex2 = /-(\d+)$/;
var Capitalize2 = (s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
var TitleCase2 = (s) => s.split(" ").map(Capitalize2).join(" ");
var InfoGetters2 = [
  {
    handles: (src) => {
      const filename = import_path2.default.basename(src, import_path2.default.extname(src));
      return src.startsWith("https://www.gettyimages.com") || GettyRegex2.test(filename);
    },
    info: async (src) => {
      let url = null;
      let fileInfo = {};
      if (src.startsWith("https://www.gettyimages.com")) {
        url = src;
      } else {
        const filename = import_path2.default.basename(src, import_path2.default.extname(src));
        const match = filename.match(GettyRegex2);
        const id = match == null ? void 0 : match[2];
        fileInfo.fileName = filename;
        if (!id) {
          throw new Error(`Unable to get GettyImage id: ${filename}`);
        }
        url = `http://www.gettyimages.com/detail/${id}`;
      }
      let html = null;
      try {
        html = await getHTML2(url);
      } catch {
        return {
          filename: "Unable to get Getty Images asset details",
          url
        };
      }
      const assetDetailsScript = html.querySelector('script[data-component="assetdetail"]');
      const assetDetails = assetDetailsScript ? JSON.parse(assetDetailsScript.text) : null;
      if (!assetDetails) {
        return {
          filename: "Unable to get Getty Images asset details",
          url
        };
      }
      return __spreadValues({
        vendor: "Getty Images",
        code: assetDetails.asset.id,
        url,
        type: GettyAssetTypes2[assetDetails.asset.assetType] || "Unknown",
        headline: assetDetails.asset.title,
        creditline: assetDetails.asset.artistTitle ? assetDetails.asset.photographer : `${assetDetails.asset.photographer} / ${TitleCase2(assetDetails.asset.artistTitle)}`,
        collection: assetDetails.asset.collectionDisplayName
      }, fileInfo);
    }
  },
  {
    handles: (src) => {
      const filename = import_path2.default.basename(src, import_path2.default.extname(src));
      return src.startsWith("https://www.shutterstock.com") || ShutterRegex2.test(filename);
    },
    info: async (src) => {
      let url = null;
      if (src.startsWith("https://www.shutterstock.com")) {
        url = src;
      } else {
        const filename2 = import_path2.default.basename(src, import_path2.default.extname(src));
        const match2 = filename2.match(ShutterRegex2);
        const id2 = match2 == null ? void 0 : match2[2];
        if (!id2) {
          return {
            url,
            headline: `Unable to get ShutterStock Image info.`
          };
        }
        url = `https://www.shutterstock.com/image-photo/${id2}`;
      }
      let imageObject = null;
      try {
        imageObject = await getImageObjectLinkData2(url);
      } catch {
        return {
          url,
          headline: `Unable to get ShutterStock image info.`
        };
      }
      url = imageObject.contentUrl;
      const extension = import_path2.default.extname(url);
      const filename = import_path2.default.basename(url, extension);
      const match = filename.match(ShutterURLRegex2);
      const id = match == null ? void 0 : match[1];
      return {
        vendor: "Shutterstock",
        code: id,
        url,
        filename,
        type: getTypeFromExtension2(extension),
        headline: headlineFromImageObect2(imageObject),
        creditline: creditlineFromImageObject2(imageObject)
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
async function getAssetInventory2(report) {
  const sources = report["Collected source files"];
  const inventories = sources.reduce((acc, source) => {
    const getter = InfoGetters2.find((g) => g.handles(source));
    if (!getter) {
      const extension = import_path2.default.extname(source);
      const filename = import_path2.default.basename(source, extension);
      return [
        ...acc,
        Promise.resolve({
          type: getTypeFromExtension2(extension),
          vendor: "Unknown",
          filename,
          source
        })
      ];
    }
    return [
      ...acc,
      getter.info(source).then((info) => __spreadValues({
        source
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
    console.log("PARTS: ", parts);
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
var import_remix7 = __toModule(require_remix());

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
      const load3 = async () => {
        if (!this.parentIds || this.parentIds.length === 0) {
          throw new Error("Unable to get parent");
        }
        const resp = await client.Folder.fromIDs([this.parentIds[0]]);
        return resp[0];
      };
      this.parentFolder = this.parentFolder ?? load3();
      return this.parentFolder;
    }
    async getChildFolders() {
      const load3 = () => {
        if (!this.childIds) {
          throw new Error("Unable to get sub folders");
        }
        return client.Folder.fromIDs(this.childIds);
      };
      this.childFolders = this.childFolders ?? load3();
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
    const json5 = await response.json();
    console.log("Got WRIKE Response: ", json5);
    if (json5.error) {
      throw new Error(json5.errorDescription);
    }
    return json5;
  }
  get(path3 = "", params = {}) {
    const url = new URL(`${BaseURL}${path3}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, encodeValue(value)));
    return this.fetch(url.toString(), "GET");
  }
  post(path3 = "", data = {}) {
    return this.fetch(`${BaseURL}${path3}`, "POST", data);
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
  return (0, import_remix7.json)({
    clients: folders.map((f) => ({ id: f.id, title: f.title }))
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action3,
  default: () => Project,
  links: () => links2,
  loader: () => loader3
});
init_react();
var import_react8 = __toModule(require("react"));
var import_remix8 = __toModule(require_remix());
var import_Autocomplete = __toModule(require("@mui/material/Autocomplete"));
var import_Button4 = __toModule(require("@mui/material/Button"));
var import_Stack4 = __toModule(require("@mui/material/Stack"));
var import_TextField2 = __toModule(require("@mui/material/TextField"));

// app/components/InputBreadCrumb.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_Grid = __toModule(require("@mui/material/Grid"));
var import_styled2 = __toModule(require("@emotion/styled"));
var GridItem = (0, import_styled2.default)(import_Grid.default)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
function InputBreadCrumb({ children }) {
  const cmps = import_react6.default.Children.toArray(children);
  const breadcrumbs = cmps.slice(0, -1);
  const focused = cmps[cmps.length - 1];
  return /* @__PURE__ */ import_react6.default.createElement(import_Grid.default, {
    container: true,
    spacing: 2,
    padding: 2,
    sx: { justifyContent: "center" }
  }, breadcrumbs.map((c, key) => /* @__PURE__ */ import_react6.default.createElement(GridItem, {
    item: true,
    xs: 3,
    key: `breadcrumb-${key}`
  }, c)), focused ? /* @__PURE__ */ import_react6.default.createElement(GridItem, {
    item: true,
    xs: 12
  }, focused) : null);
}

// app/components/OnMount.tsx
init_react();
var import_react7 = __toModule(require("react"));
function OnMount({ onMount, children }) {
  (0, import_react7.useEffect)(() => {
    onMount();
  }, [onMount]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children);
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/projects/create.tsx
var loader3 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix8.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix8.redirect)("/connect");
  }
  return null;
};
var links2 = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/filepond@^4/dist/filepond.css"
  }
];
var action3 = async ({ request }) => {
  const wrike = await WrikeClient.forSession(request);
  const UploadHandler = (0, import_remix8.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix8.unstable_parseMultipartFormData)(request, UploadHandler);
  const file = formData.get("project-file");
  const text = await file.text();
  console.log("Got Form Data: ", text);
  return null;
};
function Project() {
  var _a, _b;
  const spaces = (0, import_remix8.useFetcher)();
  const loadSpaces = useFetcherLoad(spaces, "/projects/spaces");
  const [space, setSpace] = (0, import_react8.useState)(null);
  const clients = (0, import_remix8.useFetcher)();
  const loadClients = useFetcherLoad(clients, `/projects/clients?spaceId=${encodeURIComponent((space == null ? void 0 : space.id) ?? "")}`);
  const [client, setClient] = (0, import_react8.useState)(null);
  const { hasValue: hasProjectName, props: projectNameProps } = useBufferedInput();
  const [files, setFiles] = (0, import_react8.useState)(void 0);
  return /* @__PURE__ */ React.createElement(Page, {
    title: "New Project"
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
    renderInput: (params) => /* @__PURE__ */ React.createElement(import_TextField2.default, __spreadProps(__spreadValues({}, params), {
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
    renderInput: (params) => /* @__PURE__ */ React.createElement(import_TextField2.default, __spreadProps(__spreadValues({}, params), {
      label: "Client",
      variant: "standard"
    }))
  })), !client ? null : /* @__PURE__ */ React.createElement(import_TextField2.default, {
    sx: {
      width: "100%",
      maxWidth: "300px"
    },
    label: "Project Name",
    variant: "standard",
    key: "project",
    inputProps: projectNameProps
  }), !hasProjectName ? null : /* @__PURE__ */ React.createElement(import_Stack4.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(FileInput_default, {
    name: "project-file",
    storeAsFile: true,
    files,
    onupdatefiles: (items) => setFiles(items.map((f) => f.file))
  }), /* @__PURE__ */ React.createElement(import_Button4.default, {
    variant: "contained",
    type: "submit",
    disabled: !files || files.length === 0
  }, "Create Project")))));
}
function useFetcherLoad(fetcher, url) {
  return (0, import_react8.useCallback)(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load(url);
    }
  }, [fetcher, url]);
}
function useBufferedInput() {
  const inputRef = (0, import_react8.useRef)();
  const timeoutRef = (0, import_react8.useRef)();
  const [value, setValue] = (0, import_react8.useState)("");
  const [hasValue, setHasValue] = (0, import_react8.useState)(false);
  const onChange = (0, import_react8.useCallback)((e) => {
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
  const onKeyPress = (0, import_react8.useCallback)((e) => {
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
var import_remix9 = __toModule(require_remix());
var loader4 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const Wrike = new WrikeClient(wrikeCred);
  const spaces = await Wrike.Space.getAll();
  return (0, import_remix9.json)({
    spaces: spaces.map((s) => ({ id: s.id, title: s.title }))
  });
};

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/auth/$service.tsx
var service_exports = {};
__export(service_exports, {
  action: () => action4,
  loader: () => loader5
});
init_react();
var import_remix10 = __toModule(require_remix());
var loader5 = () => (0, import_remix10.redirect)("/login");
var action4 = async ({ request, params }) => {
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
var import_remix11 = __toModule(require_remix());
var import_jszip = __toModule(require("jszip"));
var import_Button5 = __toModule(require("@mui/material/Button"));
var import_Stack5 = __toModule(require("@mui/material/Stack"));
var loader6 = async ({ request }) => {
  var _a;
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix11.redirect)("/login");
  }
  const token = (_a = await user.getCredentials(Service.google)) == null ? void 0 : _a.accessToken;
  if (!token) {
    throw new Error("Could not find GAPI access token.");
  }
  const gapi = new GAPI(request, token, null);
  return gapi.generateTeleprompterScripts();
};
function TsgResults() {
  const data = (0, import_remix11.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_Stack5.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Button5.default, {
    variant: "contained",
    onClick: this.downloadAll
  }, "Download All Documents")), /* @__PURE__ */ React.createElement("ul", {
    style: { margin: "0px 50px" }
  }, /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Tracking Sheet: "), data.sheetData.title), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Sheet: "), data.sheetData.sheet), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Row: "), data.sheetData.row), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Column: "), data.sheetData.column), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Documents created: "), data.files.length), /* @__PURE__ */ React.createElement("hr", null)), /* @__PURE__ */ React.createElement("ul", {
    style: { margin: "0px 50px" }
  }, fileLinks));
}

// route:/Users/sampenwell/Dev/VideoTech/nti.web.video-client/app/routes/video-batch.tsx
var video_batch_exports = {};
__export(video_batch_exports, {
  action: () => action5,
  default: () => VideoBatch,
  loader: () => loader7
});
init_react();
var import_remix12 = __toModule(require_remix());
var import_remix13 = __toModule(require_remix());
var import_Button6 = __toModule(require("@mui/material/Button"));
var import_Stack6 = __toModule(require("@mui/material/Stack"));
var import_TextField3 = __toModule(require("@mui/material/TextField"));
var import_CircularProgress3 = __toModule(require("@mui/material/CircularProgress"));
var loader7 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix13.redirect)("/login");
  }
  if (!await user.hasCredentials(Service.wrike)) {
    throw (0, import_remix13.redirect)("/connect");
  }
  return { user: user.userId };
};
var action5 = async ({ request }) => {
  const user = await getSessionUser(request);
  const wrikeCred = await (user == null ? void 0 : user.getCredentials(Service.wrike));
  if (!wrikeCred) {
    throw new Response("Forbidden", { status: 403 });
  }
  const UploaderHandler = (0, import_remix12.unstable_createMemoryUploadHandler)({
    maxFileSize: 1e7,
    filter: ({ mimetype }) => mimetype === "text/csv"
  });
  const formData = await (0, import_remix12.unstable_parseMultipartFormData)(request, UploaderHandler);
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
  const transition = (0, import_remix12.useTransition)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Upload a video batch CSV file:"
  }, /* @__PURE__ */ React.createElement(import_remix13.Form, {
    method: "post",
    encType: "multipart/form-data"
  }, transition.state === "submitting" ? /* @__PURE__ */ React.createElement(import_Stack6.default, {
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_CircularProgress3.default, {
    size: "3rem"
  })) : /* @__PURE__ */ React.createElement(import_Stack6.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_TextField3.default, {
    name: "template-folder",
    label: "Template Folder (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement(import_TextField3.default, {
    name: "batch-task",
    label: "Batch Task (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement(import_TextField3.default, {
    name: "location",
    label: "Folder (PermaLink)",
    variant: "outlined"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "batch"
  }), /* @__PURE__ */ React.createElement(import_Button6.default, {
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
var import_remix14 = __toModule(require_remix());
var import_Button7 = __toModule(require("@mui/material/Button"));
var import_Stack7 = __toModule(require("@mui/material/Stack"));
var import_Add = __toModule(require("@mui/icons-material/Add"));
var loader8 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  if (!user) {
    (0, import_remix14.redirect)("/login");
  }
  return {
    hasWrikeCred: Boolean(await (user == null ? void 0 : user.hasCredentials(Service.wrike)))
  };
};
function Connect() {
  const { hasWrikeCred } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Connect your accounts:"
  }, /* @__PURE__ */ React.createElement(import_Stack7.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix14.Form, {
    action: "/auth/wrike",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button7.default, {
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
var import_remix15 = __toModule(require_remix());
var import_Button8 = __toModule(require("@mui/material/Button"));
var import_Stack8 = __toModule(require("@mui/material/Stack"));
var loader9 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix15.redirect)("/login");
  }
  return { user: user.userId };
};
function Index() {
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Video Tooling:"
  }, /* @__PURE__ */ React.createElement(import_Stack8.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/projects/create"
  }, /* @__PURE__ */ React.createElement(import_Button8.default, {
    variant: "contained"
  }, "New Project")), /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/video-batch"
  }, /* @__PURE__ */ React.createElement(import_Button8.default, {
    variant: "contained"
  }, "Video Batch")), /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "tasks/asset-inventory"
  }, /* @__PURE__ */ React.createElement(import_Button8.default, {
    variant: "contained"
  }, "Asset Inventory")), /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "tasks/script-asset-inventory"
  }, /* @__PURE__ */ React.createElement(import_Button8.default, {
    variant: "contained"
  }, "Script Asset Inventory")), /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/tsg"
  }, /* @__PURE__ */ React.createElement(import_Button8.default, {
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
var import_remix16 = __toModule(require_remix());
var import_Button9 = __toModule(require("@mui/material/Button"));
var import_Stack9 = __toModule(require("@mui/material/Stack"));
var import_Google = __toModule(require("@mui/icons-material/Google"));
var loader10 = async ({
  request
}) => {
  const user = await getSessionUser(request);
  const hasGoogleCred = user ? await user.hasCredentials(Service.google) : false;
  if (hasGoogleCred) {
    (0, import_remix16.redirect)("/");
  }
  return {
    hasGoogleCred
  };
};
function Login() {
  const { hasGoogleCred } = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page, {
    title: "Sign in to your NextThought account:"
  }, /* @__PURE__ */ React.createElement(import_Stack9.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ React.createElement(import_remix16.Form, {
    action: "/auth/google",
    method: "post"
  }, /* @__PURE__ */ React.createElement(import_Button9.default, {
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
var import_remix17 = __toModule(require_remix());
var import_react9 = __toModule(require("react"));
var import_Stack10 = __toModule(require("@mui/material/Stack"));
var import_TextField4 = __toModule(require("@mui/material/TextField"));
var import_Button10 = __toModule(require("@mui/material/Button"));
var loader11 = async ({ request }) => {
  const user = await getSessionUser(request);
  if (!user) {
    throw (0, import_remix17.redirect)("/login");
  }
  return { user: user.userId };
};
function TeleScriptGenerator() {
  const transition = (0, import_remix17.useTransition)();
  return /* @__PURE__ */ import_react9.default.createElement(Page, {
    title: "TSG:"
  }, /* @__PURE__ */ import_react9.default.createElement(import_remix17.Form, {
    method: "get",
    encType: "multipart/form-data",
    action: "/tsg-results"
  }, /* @__PURE__ */ import_react9.default.createElement(import_Stack10.default, {
    spacing: 2,
    alignItems: "center",
    justifyItems: "center"
  }, /* @__PURE__ */ import_react9.default.createElement(import_TextField4.default, {
    name: "url",
    label: "Spreadsheet URL",
    variant: "outlined",
    required: true,
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react9.default.createElement(import_TextField4.default, {
    name: "sheet",
    label: "Sheet Name (Master Review Tracker)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react9.default.createElement(import_TextField4.default, {
    name: "row",
    label: "Starting Row (5)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react9.default.createElement(import_TextField4.default, {
    name: "column",
    label: "Data Column (I)",
    variant: "outlined",
    disabled: transition.state === "submitting"
  }), /* @__PURE__ */ import_react9.default.createElement(import_Button10.default, {
    type: "submit",
    variant: "contained"
  }, transition.state === "submitting" ? "Generating..." : "Generate"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "4d02c27a", "entry": { "module": "/_static/build/entry.client-XZVZ26IX.js", "imports": ["/_static/build/_shared/chunk-LPLRIGGC.js", "/_static/build/_shared/chunk-TTKTKGS4.js", "/_static/build/_shared/chunk-FDP6WGZF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-5SLYXQUH.js", "imports": ["/_static/build/_shared/chunk-7UQRWZKQ.js", "/_static/build/_shared/chunk-ZUQW4HVY.js", "/_static/build/_shared/chunk-VLIETPD6.js", "/_static/build/_shared/chunk-4YJLUBB6.js", "/_static/build/_shared/chunk-DTWNLVCY.js", "/_static/build/_shared/chunk-EHP6ODZX.js", "/_static/build/_shared/chunk-DI2FPYT7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service": { "id": "routes/auth/$service", "parentId": "root", "path": "auth/:service", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service-ZZUNFWWP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/$service.callback": { "id": "routes/auth/$service.callback", "parentId": "root", "path": "auth/:service/callback", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/auth/$service.callback-4HVH5USP.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/connect": { "id": "routes/connect", "parentId": "root", "path": "connect", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/connect-7TQKZ67G.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-NSMQN6BG.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/login-H4TQQ2CP.js", "imports": ["/_static/build/_shared/chunk-FP34P2Y5.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/clients": { "id": "routes/projects/clients", "parentId": "root", "path": "projects/clients", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/clients-BZC7MN3T.js", "imports": ["/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/create": { "id": "routes/projects/create", "parentId": "root", "path": "projects/create", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/create-PBBOHCYD.js", "imports": ["/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js", "/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/projects/spaces": { "id": "routes/projects/spaces", "parentId": "root", "path": "projects/spaces", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/projects/spaces-KNPMSWVO.js", "imports": ["/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js", "/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/asset-inventory": { "id": "routes/tasks/asset-inventory", "parentId": "root", "path": "tasks/asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/asset-inventory-4DOUIIYC.js", "imports": ["/_static/build/_shared/chunk-YA2VNRNV.js", "/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tasks/script-asset-inventory": { "id": "routes/tasks/script-asset-inventory", "parentId": "root", "path": "tasks/script-asset-inventory", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tasks/script-asset-inventory-F43WVULS.js", "imports": ["/_static/build/_shared/chunk-Y3BQMNQE.js", "/_static/build/_shared/chunk-YA2VNRNV.js", "/_static/build/_shared/chunk-7QJIANVH.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg": { "id": "routes/tsg", "parentId": "root", "path": "tsg", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-B3ATA3SO.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tsg-results": { "id": "routes/tsg-results", "parentId": "root", "path": "tsg-results", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/tsg-results-BQQZKFXD.js", "imports": ["/_static/build/_shared/chunk-Y3BQMNQE.js", "/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/video-batch": { "id": "routes/video-batch", "parentId": "root", "path": "video-batch", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/video-batch-JXLZRHAT.js", "imports": ["/_static/build/_shared/chunk-CHD3CLRA.js", "/_static/build/_shared/chunk-ASJEX5WG.js", "/_static/build/_shared/chunk-JNRJNPFB.js", "/_static/build/_shared/chunk-STEJOKCV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-4D02C27A.js" };

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
  "routes/tasks/script-asset-inventory": {
    id: "routes/tasks/script-asset-inventory",
    parentId: "root",
    path: "tasks/script-asset-inventory",
    index: void 0,
    caseSensitive: void 0,
    module: script_asset_inventory_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vYXBwL3RoZW1lLm1hdGVyaWFsLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3Mvc2NyaXB0LWFzc2V0LWludmVudG9yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGFnZS50c3giLCAiLi4vYXBwL2FwaS9Hb29nbGUvR0FQSS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9hdXRoLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvVXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQmFzZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRmlsZUlucHV0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob29rcy91c2Utb2JqZWN0LXVybC50c3giLCAiLi4vYXBwL2FwaS91dGlscy9DU1Yuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy50c3giLCAiLi4vYXBwL2FwaS93cmlrZS9DbGllbnQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvQ3VzdG9tRmllbGQuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvRm9sZGVyLnNlcnZlci50cyIsICIuLi9hcHAvYXBpL3dyaWtlL1Byb2plY3Quc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvU3BhY2Uuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVGFzay5zZXJ2ZXIudHMiLCAiLi4vYXBwL2FwaS93cmlrZS9UYXNrVGVtcGxhdGUuc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvVmlkZW9CYXRjaFRhc2suc2VydmVyLnRzIiwgIi4uL2FwcC9hcGkvd3Jpa2UvV29ya2Zsb3cuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0lucHV0QnJlYWRDcnVtYi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvT25Nb3VudC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL3NwYWNlcy50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2F1dGgvJHNlcnZpY2UudHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy90c2ctcmVzdWx0cy50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3ZpZGVvLWJhdGNoLnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvY29ubmVjdC50c3giLCAicm91dGU6L1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInJvdXRlOi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy90c2cudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vYXJjaGl0ZWN0XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuXHRidWlsZCxcblx0bW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy90YXNrcy9zY3JpcHQtYXNzZXQtaW52ZW50b3J5LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFjay50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3Byb2plY3RzL2NsaWVudHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9hdXRoLyRzZXJ2aWNlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvc2FtcGVud2VsbC9EZXYvVmlkZW9UZWNoL250aS53ZWIudmlkZW8tY2xpZW50L2FwcC9yb3V0ZXMvdHNnLXJlc3VsdHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy92aWRlby1iYXRjaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9zYW1wZW53ZWxsL0Rldi9WaWRlb1RlY2gvbnRpLndlYi52aWRlby1jbGllbnQvYXBwL3JvdXRlcy9jb25uZWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL1VzZXJzL3NhbXBlbndlbGwvRGV2L1ZpZGVvVGVjaC9udGkud2ViLnZpZGVvLWNsaWVudC9hcHAvcm91dGVzL3RzZy50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Rhc2tzL3NjcmlwdC1hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL3NjcmlwdC1hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidGFza3Mvc2NyaXB0LWFzc2V0LWludmVudG9yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC8kc2VydmljZS5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoLzpzZXJ2aWNlL2NhbGxiYWNrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2NsaWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY2xpZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvcHJvamVjdHMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wcm9qZWN0cy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicHJvamVjdHMvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9zcGFjZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL3NwYWNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwcm9qZWN0cy9zcGFjZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvJHNlcnZpY2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC86c2VydmljZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvdHNnLXJlc3VsdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RzZy1yZXN1bHRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRzZy1yZXN1bHRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy92aWRlby1iYXRjaFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdmlkZW8tYmF0Y2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidmlkZW8tYmF0Y2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2Nvbm5lY3RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Nvbm5lY3RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29ubmVjdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy90c2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RzZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0c2dcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gXCJAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwiLi90aGVtZS5tYXRlcmlhbFwiO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKGh0bWw6IHN0cmluZywgY3NzOiBzdHJpbmcpIHtcblx0Y29uc3QgcGFnZSA9IGh0bWwucmVwbGFjZShcIl9fY2ZnOlNUWUxFU19fXCIsIGNzcyk7XG5cblx0cmV0dXJuIGA8IURPQ1RZUEUgaHRtbD4ke3BhZ2V9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0cmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG5cdHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcblx0cmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuXHRjb25zdCBzdHlsZVNlcnZlciA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpO1xuXG5cdGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuXHRcdDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG5cdCk7XG5cblx0Y29uc3Qgc3R5bGVDaHVua3MgPSBzdHlsZVNlcnZlci5leHRyYWN0Q3JpdGljYWxUb0NodW5rcyhtYXJrdXApO1xuXHRjb25zdCBzdHlsZXMgPSBzdHlsZVNlcnZlci5jb25zdHJ1Y3RTdHlsZVRhZ3NGcm9tQ2h1bmtzKHN0eWxlQ2h1bmtzKTtcblxuXHRyZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG5cdHJldHVybiBuZXcgUmVzcG9uc2UocmVuZGVyUGFnZShtYXJrdXAsIHN0eWxlcyksIHtcblx0XHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcblx0XHRoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG5cdH0pO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gXCJAZW1vdGlvbi9jYWNoZVwiO1xuXG5jb25zdCBDYWNoZUtleSA9IFwibnQtY3NzXCI7XG5leHBvcnQgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoeyBrZXk6IENhY2hlS2V5IH0pO1xuXG5leHBvcnQgY29uc3QgVGhlbWUgPSBjcmVhdGVUaGVtZSh7XG5cdHBhbGV0dGU6IHtcblx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRkZWZhdWx0OiBcIiNmYmZiZmJcIixcblx0XHR9LFxuXHR9LFxuXHRjb21wb25lbnRzOiB7XG5cdFx0TXVpQnV0dG9uQmFzZToge1xuXHRcdFx0ZGVmYXVsdFByb3BzOiB7XG5cdFx0XHRcdGRpc2FibGVSaXBwbGU6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gKHByb3BzOiBvYmplY3QpID0+IChcblx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cblx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17VGhlbWV9IHsuLi5wcm9wc30gLz5cblx0PC9DYWNoZVByb3ZpZGVyPlxuKTtcbiIsICJpbXBvcnQge1xuXHRMaW5rcyxcblx0TGl2ZVJlbG9hZCxcblx0TWV0YSxcblx0T3V0bGV0LFxuXHRTY3JpcHRzLFxuXHRTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCIuL3RoZW1lLm1hdGVyaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiB7IHRpdGxlOiBcIk5leHRUaG91Z2h0XCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8UHJvdmlkZXI+XG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbnR5cGUgRG9jdW1lbnRQcm9wcyA9IHtcblx0Y2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXTtcbn07XG5cbmZ1bmN0aW9uIERvY3VtZW50KHsgY2hpbGRyZW4gfTogRG9jdW1lbnRQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHR7dHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJfX2NmZzpTVFlMRVNfX1wiIDogbnVsbH1cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdCk7XG59XG4iLCAiaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQge0Zvcm0sIHVzZVRyYW5zaXRpb24sIHVzZUFjdGlvbkRhdGEsIEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIGpzb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcblxuaW1wb3J0IEdBUEkgZnJvbSBcIn4vYXBpL0dvb2dsZS9HQVBJLnNlcnZlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQge2dldEFzc2V0SW52ZW50b3J5fSBmcm9tIFwifi9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5XCI7XG5pbXBvcnQge1NlcnZpY2V9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCAqIGFzIENTViBmcm9tIFwifi9hcGkvdXRpbHMvQ1NWLnNlcnZlclwiO1xuaW1wb3J0IHt1c2VCbG9iLCB1c2VPYmplY3RVUkx9IGZyb20gXCJ+L2NvbXBvbmVudHMvaG9va3MvdXNlLW9iamVjdC11cmxcIjtcblxuXG5leHBvcnQgY29uc3QgbG9hZDogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0Y29uc3QgdG9rZW4gPSAoYXdhaXQgdXNlci5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLmdvb2dsZSkpPy5hY2Nlc3NUb2tlbjtcblx0aWYgKCF0b2tlbikge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgR0FQSSBhY2Nlc3MgdG9rZW4uJyk7XG5cdH1cblx0Y29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cdGNvbnN0IGdhcGkgPSBuZXcgR0FQSShyZXF1ZXN0LCB0b2tlbiwgZm9ybURhdGEpO1xuXHRjb25zb2xlLmxvZyhcIn5+R0VUVElORyBMSU5LUyBGUk9NIFNIRUVUfn5cIilcblx0Y29uc3Qgc2hlZXRzSW5mbyA9IGF3YWl0IGdhcGkuZ2V0TGlua3NGcm9tU2hlZXQoKVxuXHRjb25zdCBzaGVldExpbmtzID0gc2hlZXRzSW5mby5saW5rcy5maWx0ZXIoU3RyaW5nKTtcblx0bGV0IGRvY0xpbmtzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zb2xlLmxvZyhcIn5+R0VUVElORyBMSU5LUyBGUk9NIERPQ1N+flwiKTtcblx0Zm9yIChjb25zdCBsaW5rIG9mIHNoZWV0TGlua3MpIHtcblx0XHRjb25zdCBmb3VuZExpbmtzID0gKGF3YWl0IGdhcGkuZ2V0QWxsTGlua3NJbkRvY3VtZW50KGxpbmspKS5maWx0ZXIoU3RyaW5nKVxuXHRcdGRvY0xpbmtzID0gWy4uLmRvY0xpbmtzLCAuLi5mb3VuZExpbmtzXTtcblx0fVxuXHQvLyBjb25zdCBmb3VuZExpbmtzID0gKGF3YWl0IGdhcGkuZ2V0QWxsTGlua3NJbkRvY3VtZW50KHNoZWV0TGlua3NbMF0pKS5maWx0ZXIoU3RyaW5nKVxuXHQvLyBkb2NMaW5rcyA9IFsuLi5kb2NMaW5rcywgLi4uZm91bmRMaW5rc107XG5cdGNvbnNvbGUubG9nKFwifn5HRVRUSU5HIElOVkVOVE9SWX5+XCIpO1xuXHRjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBnZXRBc3NldEludmVudG9yeSh7J0NvbGxlY3RlZCBzb3VyY2UgZmlsZXMnOiBkb2NMaW5rc30pO1xuXHRjb25zb2xlLmxvZyhcIkZPVU5EIElOVkVOVE9SWTogXCIsIGludmVudG9yeSk7XG5cblx0Y29uc3QgY3N2ID0gYXdhaXQgQ1NWLmZvcm1hdChpbnZlbnRvcnksIHtcblx0XHRoZWFkZXJzOiBbXG5cdFx0XHRcImhlYWRsaW5lXCIsXG5cdFx0XHRcInR5cGVcIixcblx0XHRcdFwidmVuZG9yXCIsXG5cdFx0XHRcImZpbGVuYW1lXCIsXG5cdFx0XHRcImNvZGVcIixcblx0XHRcdFwiY29sbGVjdGlvblwiLFxuXHRcdFx0XCJjcmVkaXRsaW5lXCIsXG5cdFx0XHRcInVybFwiLFxuXHRcdF0sXG5cdH0pO1xuXHRyZXR1cm4ganNvbih7XG5cdFx0Y3N2LFxuXHRcdHByb2plY3ROYW1lOiBzaGVldHNJbmZvLnRpdGxlLFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NyaXB0QXNzZXRJbnZlbnRvcnkoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblx0Y29uc3QgYWN0aW9uID0gdXNlQWN0aW9uRGF0YSgpO1xuXHRjb25zdCBzaG93RG93bmxvYWQgPSAhIWFjdGlvbjtcblx0Y29uc3Qgc2hvd0Zvcm0gPSAhc2hvd0Rvd25sb2FkO1xuXG5cdGNvbnN0IGNzdiA9IHVzZUJsb2IoYWN0aW9uPy5jc3YsIFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtODtcIik7XG5cdGNvbnN0IGRvd25sb2FkVVJMID0gdXNlT2JqZWN0VVJMKGNzdik7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9e1wiU2NyaXB0IEFzc2V0IEludmVudG9yeVwifT5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7IXNob3dGb3JtID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidXJsXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTcHJlYWRzaGVldCBVUkxcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwic2hlZXRcIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNoZWV0IE5hbWUgKE1hc3RlciBSZXZpZXcgVHJhY2tlcilcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwicm93XCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTdGFydGluZyBSb3cgKDUpXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0YSBDb2x1bW4gKEkpXCJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cblx0XHRcdFx0XHRcdFx0e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0PyBcIkdlbmVyYXRpbmcuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJHZW5lcmF0ZVwifVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93RG93bmxvYWQgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtkb3dubG9hZFVSTH1cblx0XHRcdFx0XHRcdFx0ZG93bmxvYWQ9e2Ake2FjdGlvbj8ucHJvamVjdE5hbWV9LWFzc2V0LWludmVudG9yeS5jc3ZgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5Eb3dubG9hZDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdClcbn1cbiIsICJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbnR5cGUgUGFnZVByb3BzID0ge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHRpdGxlLCBjaGlsZHJlbiB9OiBQYWdlUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzeD17eyBtdDogMTAgfX0+XG5cdFx0XHQ8UGFwZXIgZWxldmF0aW9uPXszfSBzeD17eyBweTogMyB9fT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMVwiIG1iPXs1fT5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9QYXBlcj5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cbiIsICJpbXBvcnQge2RvY3NfdjEsIGdvb2dsZX0gZnJvbSAnZ29vZ2xlYXBpcyc7XG5cbmludGVyZmFjZSB0c2dQYXJhbXMge1xuXHRjb2x1bW46IHN0cmluZyB8IG51bGw7XG5cdHNoZWV0OiBzdHJpbmcgfCBudWxsO1xuXHRyb3c6IHN0cmluZyB8IG51bGw7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHQVBJIHtcblx0cGFyYW1zOiB0c2dQYXJhbXM7XG5cdHRva2VuOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCwgdG9rZW46IHN0cmluZywgZm9ybURhdGE6IGFueSkge1xuXHRcdC8vIENvbGxlY3QgVVJMIHBhcmFtZXRlcnMgYW5kIHNldCBkZWZhdWx0IHZhbHVlc1xuXHRcdGNvbnN0IHNlYXJjaCA9IGZvcm1EYXRhID8gZm9ybURhdGEgOiAobmV3IFVSTChyZXF1ZXN0LnVybCkpLnNlYXJjaFBhcmFtc1xuXHRcdHRoaXMucGFyYW1zID0ge1xuXHRcdFx0dXJsOiBzZWFyY2guZ2V0KFwidXJsXCIpID8/IFwiXCIsXG5cdFx0XHRzaGVldDogc2VhcmNoLmdldChcInNoZWV0XCIpICE9IFwiXCIgPyBzZWFyY2guZ2V0KFwic2hlZXRcIikgOiBcIk1hc3RlciBSZXZpZXcgVHJhY2tlclwiLFxuXHRcdFx0cm93OiBzZWFyY2guZ2V0KFwicm93XCIpICE9IFwiXCIgPyBzZWFyY2guZ2V0KFwicm93XCIpIDogJzUnLFxuXHRcdFx0Y29sdW1uOiBzZWFyY2guZ2V0KFwiY29sdW1uXCIpICE9IFwiXCIgPyBzZWFyY2guZ2V0KFwiY29sdW1uXCIpIDogJ0knLFxuXHRcdFx0dGl0bGU6IFwiXCIsXG5cdFx0fVxuXHRcdHRoaXMudG9rZW4gPSB0b2tlbjtcblx0fVxuXG5cdGFzeW5jIGdlbmVyYXRlVGVsZXByb21wdGVyU2NyaXB0cygpIHtcblx0XHQvLyBjb2xsZWN0IGxpc3Qgb2YgRG9jIGxpbmtzIGZyb20gdGhlIFRyYWNraW5nIERvY3VtZW50XG5cdFx0Y29uc3Qgc2hlZXREYXRhID0gYXdhaXQgY29sbGVjdExpbmtzRnJvbUNvbHVtbih0aGlzLnBhcmFtcylcblx0XHRjb25zdCBsaW5rcyA9IHNoZWV0RGF0YS5saW5rcy5maWx0ZXIoU3RyaW5nKTtcblx0XHR0aGlzLnBhcmFtcy50aXRsZSA9IHNoZWV0RGF0YS50aXRsZTtcblxuXHRcdC8vIGNvbGxlY3QgdGl0bGUgYW5kIHRleHQgZnJvbSBlYWNoIG9mIHRoZSBHb29nbGUgRG9jcyBsaW5rc1xuXHRcdGxldCBmaWxlX3RleHQgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRmaWxlX3RleHQucHVzaChhd2FpdCBleHRyYWN0VHJhbnNjcmlwdFRleHQodGhpcy50b2tlbiwgbGlua3NbaV0pKTtcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gcGFyYW1zIGFuZCB7dGl0bGUsIHRleHR9IGZvciBlYWNoIGRvYyBmb3VuZCBpbiB0aGUgdHJhY2tpbmcgc2hlZXRcblx0XHRyZXR1cm4ge3NoZWV0RGF0YTogdGhpcy5wYXJhbXMsIGZpbGVzOiBmaWxlX3RleHR9O1xuXHR9XG5cblx0YXN5bmMgZ2V0TGlua3NGcm9tU2hlZXQoKSB7XG5cdFx0cmV0dXJuIGF3YWl0IGNvbGxlY3RMaW5rc0Zyb21Db2x1bW4odGhpcy5wYXJhbXMpO1xuXHR9XG5cblx0YXN5bmMgZ2V0QWxsTGlua3NJbkRvY3VtZW50KHVybDogc3RyaW5nKSB7XG5cdFx0Ly8gc291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS90YW5haWtlY2gvZDNjZTBjMjE4Njg4NWVlMjdkMjNlMDJkZGQyNjk2Yjdcblx0XHRjb25zdCBpZCA9IGdldElERnJvbVVSTCh1cmwpO1xuXHRcdGNvbnN0IGRvY3MgPSBnb29nbGUuZG9jcygndjEnKTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3MuZG9jdW1lbnRzLmdldCh7XG5cdFx0XHRvYXV0aF90b2tlbjogdGhpcy50b2tlbixcblx0XHRcdC8vIGF1dGg6ICdBSXphU3lCVzRoVlgtUjNGQXdPdEFPdGpTdlBxV3NCdVlEQ2tYMWMnLFxuXHRcdFx0ZG9jdW1lbnRJZDogaWQsXG5cdFx0fSk7XG5cdFx0aWYgKCFyZXNwb25zZS5kYXRhLmJvZHkuY29udGVudCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBjb250ZW50IGluIEdvb2dsZSBEb2MgYm9keVwiKTtcblx0XHR9XG5cdFx0Y29uc3QgY29udGVudCA9IHJlc3BvbnNlLmRhdGEuYm9keS5jb250ZW50O1xuXHRcdGNvbnN0IHVybHMgPSBbXTtcblx0XHRKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpLCAoaywgdikgPT4ge1xuXHRcdFx0aWYgKGsgPT0gXCJ1cmxcIikgdXJscy5wdXNoKHYpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1cmxzO1xuXHR9XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBzcHJlYWRzaGVldCBvciBkb2N1bWVudCBJRCBmcm9tIGEgVVJMLlxuICogQHBhcmFtIHtzdHJpbmd9ICB1cmwgVGhlIFVSTCB0byBjb2xsZWN0IHRoZSBJRCBmcm9tLlxuICovXG5mdW5jdGlvbiBnZXRJREZyb21VUkwodXJsOiBzdHJpbmcpIHtcblx0cmV0dXJuIG5ldyBVUkwodXJsKS5wYXRobmFtZS5zcGxpdCgnLycpWzNdO1xufVxuXG4vKipcbiAqIENvbGxlY3RzIGFsbCBoeXBlcmxpbmtzIGZyb20gYSBjb2x1bW4gd2l0aGluIGEgZ2l2ZW4gc2hlZXQgaW4gYSBnaXZlbiBzcHJlYWRzaGVldC5cbiAqIEBwYXJhbSB7dHNnUGFyYW1zfSAgcGFyYW1zXHRVUkwgcGFyYW1zIGZyb20gdGhlIHRlbGVwcm9tcHRlciBzY3JpcHQgZ2VuZXJhdG9yLlxuICpcbiAqIEByZXR1cm4ge1tzdHJpbmddfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdGl0bGUgb2YgdGhlIHNwcmVhZHNoZWV0LCBhbmQgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGxpbmtzXG4gKiBmb3VuZCBpbiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0TGlua3NGcm9tQ29sdW1uKHBhcmFtczogdHNnUGFyYW1zKSB7XG5cdGNvbnN0IGdvb2dsZVNoZWV0cyA9IGdvb2dsZS5zaGVldHMoJ3Y0Jyk7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ29vZ2xlU2hlZXRzLnNwcmVhZHNoZWV0cy5nZXQoXG5cdFx0e1xuXHRcdFx0Ly8gVE9ETzogdXNlIHRoZSBPQVVUSCB0b2tlblxuXHRcdFx0YXV0aDogJ0FJemFTeUJXNGhWWC1SM0ZBd090QU90alN2UHFXc0J1WURDa1gxYycsXG5cdFx0XHQvLyBvYXV0aF90b2tlbjogdG9rZW4sXG5cdFx0XHRzcHJlYWRzaGVldElkOiBnZXRJREZyb21VUkwocGFyYW1zLnVybCksXG5cdFx0XHRpbmNsdWRlR3JpZERhdGE6IHRydWUsXG5cdFx0XHRyYW5nZXM6IFtgJHtwYXJhbXMuc2hlZXR9ISR7cGFyYW1zLmNvbHVtbn0ke3BhcmFtcy5yb3d9OiR7cGFyYW1zLmNvbHVtbn1gXSAvLyBleDogU2hlZXROYW1lIUk1Oklcblx0XHR9XG5cdCk7XG5cdC8vIGNoZWNrIHRoYXQgZGF0YSBhcHBlYXJzIGFzIGV4cGVjdGVkXG5cdGlmICghKHJlc3BvbnNlLmRhdGEucHJvcGVydGllcyAmJiByZXNwb25zZS5kYXRhLnByb3BlcnRpZXMudGl0bGUpKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBzcHJlYWRzaGVldCB0aXRsZVwiKTtcblx0fVxuXHRjb25zdCB0aXRsZSA9IHJlc3BvbnNlLmRhdGEucHJvcGVydGllcy50aXRsZTtcblxuXHRpZiAoIShyZXNwb25zZS5kYXRhLnNoZWV0cyAmJiByZXNwb25zZS5kYXRhLnNoZWV0c1swXS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuc2hlZXRzWzBdLmRhdGFbMF0ucm93RGF0YSkpIHtcblx0XHR0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBnZXQgc3ByZWFkc2hlZXQgZGF0YVwiKTtcblx0fVxuXHRjb25zdCByb3dzID0gcmVzcG9uc2UuZGF0YS5zaGVldHNbMF0uZGF0YVswXS5yb3dEYXRhO1xuXG5cdC8vIGNvbGxlY3QgaHlwZXJsaW5rcyBmcm9tIHJvd3Ncblx0Y29uc3QgbGlua3M6IHN0cmluZ1tdID0gbmV3IEFycmF5KHJvd3MubGVuZ3RoKTtcblx0Zm9yIChsZXQgcm93IG9mIHJvd3MpIHtcblx0XHRpZiAocm93LnZhbHVlcykge1xuXHRcdFx0Y29uc3QgbGluayA9IHJvdy52YWx1ZXNbMF0uaHlwZXJsaW5rO1xuXHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0bGlua3MucHVzaChsaW5rKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXCJGb3VuZCByb3cgd2l0aCBubyBkYXRhXCIpO1xuXHRcdH1cblxuXHR9XG5cdHJldHVybiB7dGl0bGU6IHRpdGxlLCBsaW5rczogbGlua3N9O1xufVxuXG4vKipcbiAqIENvbGxlY3RzIHRoZSB0ZXh0IGNvbnRlbnQgZnJvbSB0aGUgc2Vjb25kIGNvbHVtbiBpbiBhIHNjcmlwdCBkb2N1bWVudC5cbiAqIEBwYXJhbSAgXHR0b2tlbjpzdHJpbmdcdFRoZSBPQXV0aCB0b2tlbi5cbiAqIEBwYXJhbVx0bGluazpzdHJpbmcgXHRUaGUgaWQgZm9yIHRoZSBHb29nbGVEb2MuXG4gKlxuICogQHJldHVybiBBbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdGl0bGUgb2YgdGhlIGRvY3VtZW50LCBhbmQgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgdGl0bGUgYW5kIGNlbGwgY29udGVudCBvZlxuICogdGhlIHRhYmxlLCBzZXBhcmF0ZWQgYnkgdHdvIG5ldyBsaW5lcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFRyYW5zY3JpcHRUZXh0KHRva2VuOiBzdHJpbmcsIGxpbms6IHN0cmluZykge1xuXG5cdC8vIHF1ZXJ5IEdvb2dsZSBEb2NzIGZvciBkb2N1bWVudCBkYXRhXG5cdGNvbnN0IGlkID0gZ2V0SURGcm9tVVJMKGxpbmspO1xuXHRjb25zdCBkb2NzID0gZ29vZ2xlLmRvY3MoJ3YxJyk7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZG9jcy5kb2N1bWVudHMuZ2V0KHtcblx0XHRvYXV0aF90b2tlbjogdG9rZW4sXG5cdFx0ZG9jdW1lbnRJZDogaWQsXG5cdH0pO1xuXHQvLyB2YWxpZGF0ZSByZXNwb25zZSBtYXRjaGVzIGV4cGVjdGVkIGZvcm1hdFxuXHRpZiAoIXJlc3BvbnNlLmRhdGEuYm9keSkge1xuXHRcdHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGdldCBkYXRhIGZyb20gR29vZ2xlIERvY1wiKTtcblx0fVxuXHRpZiAoIXJlc3BvbnNlLmRhdGEuYm9keS5jb250ZW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBjb250ZW50IGluIEdvb2dsZSBEb2MgYm9keVwiKTtcblx0fVxuXHRjb25zdCBlbGVtZW50cyA9IHJlc3BvbnNlLmRhdGEuYm9keS5jb250ZW50O1xuXHRpZiAoIShlbGVtZW50c1sxXSAmJiBlbGVtZW50c1sxXS5wYXJhZ3JhcGggJiYgZWxlbWVudHNbMV0ucGFyYWdyYXBoLmVsZW1lbnRzKSkge1xuXHRcdHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGZpbmQgdGl0bGUgaW4gR29vZ2xlIERvY1wiKTtcblx0fVxuXHRjb25zdCB0aXRsZTogc3RyaW5nID0gcmVhZFBhcmFncmFwaEVsZW1lbnQoZWxlbWVudHNbMV0ucGFyYWdyYXBoLmVsZW1lbnRzWzBdKTtcblx0bGV0IGNvbHVtbkluZGV4OiBudW1iZXI7XG5cdGxldCB0ZXh0OiBzdHJpbmcgPSAnJztcblx0dGV4dCArPSB0aXRsZSArICdcXG4nO1xuXHRsZXQgd2FybmluZ3MgPSBcIlwiO1xuXHRmb3IgKGNvbnN0IHZhbHVlIG9mIGVsZW1lbnRzKSB7IC8vIGVsZW1lbnRzIGluIHRoZSBkb2N1bWVudFxuXHRcdGlmICh2YWx1ZS50YWJsZSkge1xuXHRcdFx0Y29uc3QgdGFibGUgPSB2YWx1ZS50YWJsZTtcblx0XHRcdC8vIFRoZSBzcG9rZW4gY29udGVudCBvZiB0aGUgc2NyaXB0IHdpbGwgZWl0aGVyIGJlIGluIHRoZSBTY3JpcHQgb3IgQXVkaW8gY29sdW1uLiBEZWZhdWx0IHRvIGxhc3QgY29sdW1uLlxuXHRcdFx0bGV0IHJvd0hlYWRlcnMgPSB7Li4uZXh0cmFjdFRhYmxlSGVhZGVyUm93KHRhYmxlKX07XG5cdFx0XHRpZiAocm93SGVhZGVycy5TY3JpcHQpIHtcblx0XHRcdFx0Y29sdW1uSW5kZXggPSByb3dIZWFkZXJzLlNjcmlwdDtcblx0XHRcdH0gZWxzZSBpZiAocm93SGVhZGVycy5BdWRpbykge1xuXHRcdFx0XHRjb2x1bW5JbmRleCA9IHJvd0hlYWRlcnMuQXVkaW87XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2x1bW5JbmRleCA9IE9iamVjdC5rZXlzKHJvd0hlYWRlcnMpLmxlbmd0aCAtIDE7XG5cdFx0XHRcdHdhcm5pbmdzICs9IGBDb3VsZCBub3QgZmluZCAnQXVkaW8nIG9yICdTY3JpcHQnIGNvbHVtbiB0byBjb2xsZWN0IHNwb2tlbiB3b3JkIGNvbnRlbnQuIFVzZWQgY29sdW1uICR7Y29sdW1uSW5kZXggKyAxfSBpbnN0ZWFkLmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGFibGUudGFibGVSb3dzKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgcm93IG9mIHRhYmxlLnRhYmxlUm93cykgeyAgLy8gcm93cyBpbiB0aGUgdGFibGVcblx0XHRcdFx0XHRpZiAocm93LnRhYmxlQ2VsbHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNlbGwgPSByb3cudGFibGVDZWxsc1tjb2x1bW5JbmRleF0uY29udGVudDsgIC8vIGNlbGwgaW4gdGhlIHJvd1xuXHRcdFx0XHRcdFx0aWYgKGNlbGwpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCArPSBleHRyYWN0UGFyYWdyYXBoVGV4dChjZWxsKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXlxccyokKD86XFxyXFxuP3xcXG4pL2dtLCAnJykucmVwbGFjZSgvJFxcbi9nbSwgJ1xcblxcbicpO1xuXHRjb25zdCBsYXN0TW9kaWZpZWQgPSBhd2FpdCBnZXRMYXN0TW9kaWZpZWRUaW1lKGlkKTtcblx0aWYgKGxhc3RNb2RpZmllZCA9PSBcInVua25vd25cIikge1xuXHRcdHdhcm5pbmdzICs9IFwiXFxuQ291bGQgbm90IGZpbmQgbGFzdCBtb2RpZmllZCB0aW1lLlwiXG5cdH1cblx0bGV0IG1ldGEgPSB7XG5cdFx0XCJ0aXRsZVwiOiB0aXRsZSxcblx0XHRcImxpbmtcIjogbGluayxcblx0XHRcIkVzdGltYXRlZFZPTWludXRlc1wiOiBNYXRoLnJvdW5kKCh0ZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmxlbmd0aCAvIDE1MCkgKiAxMDApIC8gMTAwLFxuXHRcdFwibGFzdE1vZGlmaWVkXCI6IGxhc3RNb2RpZmllZCxcblx0XHRcIndhcm5pbmdzXCI6IHdhcm5pbmdzLFxuXHR9XG5cdHJldHVybiB7J3RpdGxlJzogdGl0bGUsICd0ZXh0JzogdGV4dCwgJ21ldGEnOiBtZXRhfTtcbn1cblxuLyoqXG4gKlx0UXVlcmllcyBHb29nbGUgRHJpdmUgZm9yIHRoZSBsYXN0IG1vZGlmaWVkIHRpbWUgZm9yIGEgZG9jdW1lbnQuXG4gKlx0QHBhcmFtIGlkOiB0aGUgZG9jdW1lbnQgaWQuXG4gKlxuICogXHRAcmV0dXJuIHN0cmluZ1x0QSBzdHJpbmcgdGltZXN0YW1wIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBsYXN0IG1vZGlmaWVkIGRhdGUsIG9yIFwiTi9BXCIgaWYgbm8gZGF0ZSB3YXMgZm91bmRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0TGFzdE1vZGlmaWVkVGltZShpZDogc3RyaW5nKSB7XG5cdC8vIHF1ZXJ5IEdvb2dsZSBEcml2ZSB0byBnZXQgdGhlIGxhc3QgbW9kaWZpZWQgdGltZVxuXHRjb25zdCBnb29nbGVEcml2ZSA9IGdvb2dsZS5kcml2ZSgndjMnKTtcblx0Y29uc3QgZHJpdmVSZXNwb25zZSA9IGF3YWl0IGdvb2dsZURyaXZlLmZpbGVzLmdldChcblx0XHR7XG5cdFx0XHRmaWxlSWQ6IGlkLFxuXHRcdFx0Ly8gVE9ETzogdGhpcyBuZWVkcyB0byB1c2UgT0FVVEhcblx0XHRcdGF1dGg6ICdBSXphU3lCVzRoVlgtUjNGQXdPdEFPdGpTdlBxV3NCdVlEQ2tYMWMnLFxuXHRcdFx0ZmllbGRzOiBcIm1vZGlmaWVkVGltZVwiLFxuXHRcdH1cblx0KTtcblx0cmV0dXJuIGRyaXZlUmVzcG9uc2UuZGF0YS5tb2RpZmllZFRpbWUgPyBkcml2ZVJlc3BvbnNlLmRhdGEubW9kaWZpZWRUaW1lIDogXCJ1bmtub3duXCI7XG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHRleHQgdmFsdWUgYW5kIGNvbHVtbiBpbmRleCBmcm9tIGVhY2ggY2VsbCBpbiB0aGUgZmlyc3Qgcm93IG9mIGEgR29vZ2xlIERvYyB0YWJsZS5cbiAqIEBwYXJhbSB0YWJsZTogQSB0YWJsZSBpbiBhIEdvb2dsZSBEb2MuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgaGVhZGVyIHJvd3MgYW5kIHRoZWlyIGluZGV4LiBpLmUuIHtSb3cxOiAwLCBSb3cyOiAxfVxuICovXG5mdW5jdGlvbiBleHRyYWN0VGFibGVIZWFkZXJSb3codGFibGU6IGRvY3NfdjEuU2NoZW1hJFRhYmxlKSB7XG5cdGxldCBmb3VuZENvbHVtbnMgPSB7fTtcblx0aWYgKHRhYmxlLnRhYmxlUm93cyAmJiB0YWJsZS50YWJsZVJvd3NbMF0gJiYgdGFibGUudGFibGVSb3dzWzBdLnRhYmxlQ2VsbHMpIHtcblx0XHRjb25zdCBuUm93cyA9IHRhYmxlLnRhYmxlUm93c1swXS50YWJsZUNlbGxzLmxlbmd0aDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcblx0XHRcdGxldCBjZWxsQ29udGVudCA9IHRhYmxlLnRhYmxlUm93c1swXS50YWJsZUNlbGxzW2ldLmNvbnRlbnRcblx0XHRcdGlmIChjZWxsQ29udGVudCkge1xuXHRcdFx0XHRsZXQgY29sdW1uVGV4dCA9IGV4dHJhY3RQYXJhZ3JhcGhUZXh0KGNlbGxDb250ZW50KS50cmltKCk7XG5cdFx0XHRcdGZvdW5kQ29sdW1ucyA9IHsuLi5mb3VuZENvbHVtbnMsIC4uLntbY29sdW1uVGV4dF06IGl9fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZm91bmRDb2x1bW5zO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIGFsbCB0ZXh0IGZyb20gYSBzdHJ1Y3R1cmFsIGVsZW1lbnQgZm91bmQgaW4gYSBHb29nbGUgRG9jcyByZXNwb25zZSBvYmplY3QuXG4gKiBAcGFyYW0gZG9jc192MS5TY2hlbWEkU3RydWN0dXJhbEVsZW1lbnRbXSAgZWxlbWVudCBUaGUgc3RydWN0dXJhbCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGV4dC5cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIHRoZSB0ZXh0IGZvdW5kIGluIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBleHRyYWN0UGFyYWdyYXBoVGV4dChlbGVtZW50OiBkb2NzX3YxLlNjaGVtYSRTdHJ1Y3R1cmFsRWxlbWVudFtdKSB7XG5cdGxldCB0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB2YWx1ZSBvZiBlbGVtZW50KSB7XG5cdFx0aWYgKHZhbHVlLnBhcmFncmFwaCAmJiB2YWx1ZS5wYXJhZ3JhcGguZWxlbWVudHMpIHtcblx0XHRcdGZvciAoY29uc3QgZWxlbSBvZiB2YWx1ZS5wYXJhZ3JhcGguZWxlbWVudHMpIHtcblx0XHRcdFx0dGV4dCArPSByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0aGUgdGV4dCBjb250ZW50IGZyb20gYSBwYXJhZ3JhcGggZWxlbWVudCBpbiBhIEdvb2dsZSBEb2NzIHJlc3BvbnNlIG9iamVjdC5cbiAqIEBwYXJhbSBkb2NzX3YxLlNjaGVtYSRQYXJhZ3JhcGhFbGVtZW50ICBlbGVtZW50IFRoZSBlbGVtZW50IHdpdGhpbiBhIHBhcmFncmFwaCBvYmplY3QuXG4gKlxuICogQHJldHVybiBUaGUgdGV4dCBjb250ZW50IGZvdW5kIGluIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZWFkUGFyYWdyYXBoRWxlbWVudChlbGVtZW50OiBkb2NzX3YxLlNjaGVtYSRQYXJhZ3JhcGhFbGVtZW50KSB7XG5cdHJldHVybiBlbGVtZW50Py50ZXh0UnVuPy5jb250ZW50ID8/ICcnO1xufVxuXG5cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRvciB9IGZyb20gXCJyZW1peC1hdXRoXCI7XG5pbXBvcnQgeyBHb29nbGVTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLWdvb2dsZVwiO1xuaW1wb3J0IHsgT0F1dGgyU3RyYXRlZ3kgfSBmcm9tIFwicmVtaXgtYXV0aC1vYXV0aDJcIjtcblxuaW1wb3J0IHsgV3Jpa2VTdHJhdGVneSB9IGZyb20gXCIuL2F1dGgtc3RyYXRlZ2llcy9XcmlrZS5zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyLCB7IHNldENhY2hlZCB9IGZyb20gXCIuL21vZGVscy9Vc2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCIuL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhlbnRpY2F0b3I8YW55PihzZXNzaW9uU3RvcmFnZSk7XG5cbmlmIChwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEICYmIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUKSB7XG5cdGF1dGgudXNlKFxuXHRcdG5ldyBHb29nbGVTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG5cdFx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cdFx0XHRcdGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9hdXRoL2dvb2dsZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RvY3VtZW50cy5yZWFkb25seVwiICtcblx0XHRcdFx0XHRcIiBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cy5yZWFkb25seSBcIiArXG5cdFx0XHRcdFx0XCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLm1ldGFkYXRhLnJlYWRvbmx5IG9wZW5pZCBwcm9maWxlIGVtYWlsXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2UuZ29vZ2xlXG5cdCk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfSUQgJiYgcHJvY2Vzcy5lbnYuV1JJS0VfQ0xJRU5UX1NFQ1JFVCkge1xuXHRhdXRoLnVzZShcblx0XHRuZXcgV3Jpa2VTdHJhdGVneShcblx0XHRcdHtcblx0XHRcdFx0Y2xpZW50SUQ6IHByb2Nlc3MuZW52LldSSUtFX0NMSUVOVF9JRCxcblx0XHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5XUklLRV9DTElFTlRfU0VDUkVULFxuXHRcdFx0XHRjYWxsYmFja1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzMvYXV0aC93cmlrZS9jYWxsYmFja1wiLFxuXHRcdFx0XHRzY29wZTogXCJEZWZhdWx0LHdzUmVhZFdyaXRlXCIsXG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgKHByb2ZpbGUpID0+IHByb2ZpbGVcblx0XHQpLFxuXHRcdFNlcnZpY2Uud3Jpa2Vcblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25Vc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHNlc3Npb25TdG9yYWdlLmdldFNlc3Npb24oXG5cdFx0cmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuXHQpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblxuXHRpZiAoIXVzZXJJZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIFVzZXIuZ2V0Rm9ySWQodXNlcklkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVVc2VyID0gYXN5bmMgKFxuXHRzZXJ2aWNlOiBTZXJ2aWNlLFxuXHRyZXF1ZXN0OiBSZXF1ZXN0LFxuXHRyZWRpcmVjdHM6IHsgc3VjY2Vzczogc3RyaW5nOyBmYWlsdXJlOiBzdHJpbmcgfVxuKSA9PiB7XG5cdGNvbnN0IHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSB9ID0gYXdhaXQgYXV0aC5hdXRoZW50aWNhdGUoXG5cdFx0c2VydmljZSxcblx0XHRyZXF1ZXN0XG5cdCk7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uU3RvcmFnZS5nZXRTZXNzaW9uKFxuXHRcdHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcblx0KTtcblxuXHRjb25zb2xlLmxvZyhwcm9maWxlKTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvZmlsZS5pZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJOTyBJRD8hPyE6IFwiLCBwcm9maWxlKTtcblx0XHRcdHRocm93IFwid2hhdFwiO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyZW50VXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdFx0aWYgKCFjdXJyZW50VXNlcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZXR0aW5nIEN1cnJlbnQgVXNlcjogXCIsIHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXHRcdFx0Y3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmdldEZvck9hdXRoKHByb2ZpbGUuaWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoIWN1cnJlbnRVc2VyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgdXNlclwiKTtcblx0XHRcdH1cblxuXHRcdFx0c2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgc2V0Q2FjaGVkKGN1cnJlbnRVc2VyKSk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY3VycmVudFVzZXIuc2V0Q3JlZGVudGlhbHMoc2VydmljZSwge1xuXHRcdFx0YWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuXHRcdFx0cmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuZmFpbHVyZSk7XG5cdH1cblxuXHR0aHJvdyByZWRpcmVjdChyZWRpcmVjdHMuc3VjY2Vzcywge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzZXNzaW9uU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IFN0cmF0ZWd5VmVyaWZ5Q2FsbGJhY2sgfSBmcm9tIFwicmVtaXgtYXV0aFwiO1xuaW1wb3J0IHR5cGUge1xuXHRPQXV0aDJQcm9maWxlLFxuXHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4LWF1dGgtb2F1dGgyXCI7XG5pbXBvcnQgeyBPQXV0aDJTdHJhdGVneSB9IGZyb20gXCJyZW1peC1hdXRoLW9hdXRoMlwiO1xuXG5leHBvcnQgdHlwZSBXcmlrZVN0cmF0ZWd5T3B0aW9ucyA9IHtcblx0Y2xpZW50SUQ6IHN0cmluZztcblx0Y2xpZW50U2VjcmV0OiBzdHJpbmc7XG5cdGNhbGxiYWNrVVJMOiBzdHJpbmc7XG5cdHNjb3BlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zID0ge1xuXHRzY29wZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9maWxlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0X2pzb246IHtcblx0XHRraW5kczogc3RyaW5nO1xuXHRcdGRhdGE6IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XTtcblx0fTtcblx0cHJvdmlkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBXcmlrZVN0cmF0ZWd5PFVzZXI+IGV4dGVuZHMgT0F1dGgyU3RyYXRlZ3k8XG5cdFVzZXIsXG5cdFdyaWtlUHJvZmlsZSxcblx0V3Jpa2VTdHJhdGVneUV4dHJhUGFyYW1zXG4+IHtcblx0cHJpdmF0ZSByZWFkb25seSB1c2VySW5mb1VSTCA9XG5cdFx0XCJodHRwczovL3d3dy53cmlrZS5jb20vYXBpL3Y0L2NvbnRhY3RzP21lPXRydWVcIjtcblx0cHJpdmF0ZSBzY29wZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM6IFdyaWtlU3RyYXRlZ3lPcHRpb25zLFxuXHRcdHZlcmlmeTogU3RyYXRlZ3lWZXJpZnlDYWxsYmFjazxcblx0XHRcdFVzZXIsXG5cdFx0XHRPQXV0aDJTdHJhdGVneVZlcmlmeVBhcmFtczxXcmlrZVByb2ZpbGUsIFdyaWtlU3RyYXRlZ3lFeHRyYVBhcmFtcz5cblx0XHQ+XG5cdCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0e1xuXHRcdFx0XHRhdXRob3JpemF0aW9uVVJMOiBcImh0dHBzOi8vbG9naW4ud3Jpa2UuY29tL29hdXRoMi9hdXRob3JpemUvdjRcIixcblx0XHRcdFx0dG9rZW5VUkw6IFwiaHR0cHM6Ly9sb2dpbi53cmlrZS5jb20vb2F1dGgyL3Rva2VuXCIsXG5cdFx0XHRcdGNsaWVudElEOiBvcHRpb25zLmNsaWVudElELFxuXHRcdFx0XHRjbGllbnRTZWNyZXQ6IG9wdGlvbnMuY2xpZW50U2VjcmV0LFxuXHRcdFx0XHRjYWxsYmFja1VSTDogb3B0aW9ucy5jYWxsYmFja1VSTCxcblx0XHRcdH0sXG5cdFx0XHR2ZXJpZnlcblx0XHQpO1xuXG5cdFx0dGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXV0aG9yaXphdGlvblBhcmFtcygpOiBVUkxTZWFyY2hQYXJhbXMge1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdGlmICh0aGlzLnNjb3BlKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwic2NvcGVcIiwgdGhpcy5zY29wZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdHByb3RlY3RlZCBhc3luYyB1c2VyUHJvZmlsZShhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxXcmlrZVByb2ZpbGU+IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXNlckluZm9VUkwsIHtcblx0XHRcdGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAgfSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHBheWxvYWQ6IFdyaWtlUHJvZmlsZVtcIl9qc29uXCJdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGFbMF07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGRhdGEuaWQsXG5cdFx0XHRmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWU6IGRhdGEubGFzdE5hbWUsXG5cdFx0XHRfanNvbjogcGF5bG9hZCxcblx0XHRcdHByb3ZpZGVyOiBcIndyaWtlXCIsXG5cdFx0fTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2RhdGFiYXNlL1RhYmxlLnNlcnZlclwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuaW1wb3J0IENyZWRlbnRpYWwsIHsgU2VydmljZSwgVG9rZW5zIH0gZnJvbSBcIi4vQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcblxuY29uc3QgRXhpc3RpbmcgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRDYWNoZWQgPSAodXNlcjogVXNlcikgPT4gKFxuXHRFeGlzdGluZy5zZXQodXNlci51c2VySWQsIHVzZXIpLCB1c2VyLnVzZXJJZFxuKTtcbmV4cG9ydCBjb25zdCBnZXRDYWNoZWQgPSAodXNlcklkOiBzdHJpbmcpID0+IEV4aXN0aW5nLmdldCh1c2VySWQpO1xuXG5jbGFzcyBPYXV0aElkIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIk9hdXRoSWRzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHByb2ZpbGVJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6Lm5hdGl2ZUVudW0oU2VydmljZSksXG5cdFx0dXNlcklkOiB6LnN0cmluZygpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgZmluZE9yQ3JlYXRlKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyBwcm9maWxlSWQsIHNlcnZpY2UgfSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHJldHVybiBleGlzdGluZztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFibGUucHV0KHsgcHJvZmlsZUlkLCBzZXJ2aWNlLCB1c2VySWQ6IHV1aWQoKSB9KTtcblx0fVxuXG5cdGRhdGE6IHouaW5mZXI8dHlwZW9mIE9hdXRoSWQuU2NoZW1hPiB8IHVuZGVmaW5lZDtcblxuXHRnZXQgcHJvZmlsZUlkKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnByb2ZpbGVJZCA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHNlcnZpY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YT8uc2VydmljZSA/PyBcIlwiO1xuXHR9XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0c3RhdGljIGFzeW5jIGdldEZvck9hdXRoKHByb2ZpbGVJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3Qgb2F1dGhJZCA9IGF3YWl0IE9hdXRoSWQuZmluZE9yQ3JlYXRlKHByb2ZpbGVJZCwgc2VydmljZSk7XG5cblx0XHRpZiAoIW9hdXRoSWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVXNlcihvYXV0aElkLnVzZXJJZCk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0Rm9ySWQodXNlcklkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IFVzZXIodXNlcklkKTtcblx0fVxuXG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgY3JlZGVudGlhbHM6IE1hcDxTZXJ2aWNlLCBDcmVkZW50aWFsPjtcblxuXHRjb25zdHJ1Y3Rvcih1c2VySWQ6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRzZXRDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlLCB0b2tlbnM6IFRva2Vucykge1xuXHRcdHJldHVybiBDcmVkZW50aWFsLmFkZE9yVXBkYXRlKHRoaXMudXNlcklkLCBzZXJ2aWNlLCB0b2tlbnMpO1xuXHR9XG5cblx0YXN5bmMgZ2V0Q3JlZGVudGlhbHMoc2VydmljZTogU2VydmljZSkge1xuXHRcdGlmICghdGhpcy5jcmVkZW50aWFscy5oYXMoc2VydmljZSkpIHtcblx0XHRcdGNvbnN0IGNyZWQgPSBhd2FpdCBDcmVkZW50aWFsLmdldENyZWRlbnRpYWwodGhpcy51c2VySWQsIHNlcnZpY2UpO1xuXG5cdFx0XHRpZiAoY3JlZCkge1xuXHRcdFx0XHR0aGlzLmNyZWRlbnRpYWxzLnNldChzZXJ2aWNlLCBjcmVkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoc2VydmljZSk7XG5cdH1cblxuXHRhc3luYyBoYXNDcmVkZW50aWFscyhzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgY3JlZCA9IGF3YWl0IHRoaXMuZ2V0Q3JlZGVudGlhbHMoc2VydmljZSk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbihjcmVkKTtcblx0fVxufVxuIiwgImltcG9ydCB6IGZyb20gXCJ6b2RcIjtcblxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9kYXRhYmFzZS9UYWJsZS5zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVsIHtcblx0c3RhdGljIFRhYmxlTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdHN0YXRpYyBTY2hlbWEgPSB6Lm9iamVjdCh7fSk7XG5cblx0c3RhdGljIGdldFRhYmxlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4odGhpczogVCkge1xuXHRcdHJldHVybiBuZXcgVGFibGU8SW5zdGFuY2VUeXBlPFQ+Pih0aGlzLlRhYmxlTmFtZSwgKC4uLmFyZ3MpID0+XG5cdFx0XHR0aGlzLmNyZWF0ZSguLi5hcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyB0eXBlb2YgQmFzZU1vZGVsID0gdHlwZW9mIEJhc2VNb2RlbD4oXG5cdFx0dGhpczogVCxcblx0XHRyYXc6IG9iamVjdFxuXHQpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMocmF3KSBhcyBJbnN0YW5jZVR5cGU8VD47XG5cdH1cblxuXHRkYXRhOiBhbnk7XG5cblx0Y29uc3RydWN0b3IocmF3OiBvYmplY3QpIHtcblx0XHR0aGlzLmRhdGEgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgQmFzZU1vZGVsKS5TY2hlbWEucGFyc2UocmF3KTtcblx0fVxufVxuIiwgImltcG9ydCBhcmMgZnJvbSBcIkBhcmNoaXRlY3QvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBBcmNUYWJsZSB9IGZyb20gXCJAYXJjaGl0ZWN0L2Z1bmN0aW9ucy90YWJsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGU8VD4ge1xuXHRwcml2YXRlIHRhYmxlTmFtZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgdGFibGU6IEFyY1RhYmxlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgcGFyc2U6IChyYXc6IG9iamVjdCkgPT4gVDtcblxuXHRjb25zdHJ1Y3Rvcih0YWJsZU5hbWU6IHN0cmluZyB8IG51bGwsIHBhcnNlOiAocmF3OiBvYmplY3QpID0+IFQpIHtcblx0XHRpZiAoIXRhYmxlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGFibGUgbXVzdCBiZSBnaXZlbiBhIHRhYmxlIG5hbWUuXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMudGFibGVOYW1lID0gdGFibGVOYW1lO1xuXHRcdHRoaXMucGFyc2UgPSBwYXJzZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnRhYmxlTmFtZTtcblx0fVxuXG5cdGFzeW5jIHNldHVwVGFibGUoKSB7XG5cdFx0aWYgKCF0aGlzLnRhYmxlKSB7XG5cdFx0XHRjb25zdCB0YWJsZXMgPSBhd2FpdCBhcmMudGFibGVzKCk7XG5cblx0XHRcdHRoaXMudGFibGUgPSB0YWJsZXNbdGhpcy50YWJsZU5hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnRhYmxlO1xuXHR9XG5cblx0YXN5bmMgZ2V0KGtleTogYW55KSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLnNldHVwVGFibGUoKTtcblx0XHRjb25zdCByZXNwID0gYXdhaXQgdGFibGUuZ2V0KGtleSk7XG5cblx0XHRyZXR1cm4gcmVzcCA/IHRoaXMucGFyc2UocmVzcCkgOiBudWxsO1xuXHR9XG5cblx0YXN5bmMgcHV0KGRhdGE6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzcCA9IGF3YWl0IHRhYmxlLnB1dChkYXRhKTtcblxuXHRcdHJldHVybiByZXNwID8gdGhpcy5wYXJzZShyZXNwKSA6IG51bGw7XG5cdH1cblxuXHRhc3luYyB1cGRhdGUocXVlcnk6IG9iamVjdCkge1xuXHRcdGNvbnN0IHRhYmxlID0gYXdhaXQgdGhpcy5zZXR1cFRhYmxlKCk7XG5cblx0XHRhd2FpdCB0YWJsZS51cGRhdGUocXVlcnkpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHogZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBUb2tlbnMgPSB7XG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdHJlZnJlc2hUb2tlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG5cdGdvb2dsZSA9IFwiZ29vZ2xlXCIsXG5cdHdyaWtlID0gXCJ3cmlrZVwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVkZW50aWFsIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBUYWJsZU5hbWUgPSBcIkNyZWRlbnRpYWxzXCI7XG5cdHN0YXRpYyBTY2hlbWEgPSBCYXNlLlNjaGVtYS5leHRlbmQoe1xuXHRcdHVzZXJJZDogei5zdHJpbmcoKSxcblx0XHRzZXJ2aWNlOiB6LmVudW0oW1wiZ29vZ2xlXCIsIFwid3Jpa2VcIl0pLFxuXHRcdGFjY2Vzc1Rva2VuOiB6LnN0cmluZygpLFxuXHRcdC8vIHJlZnJlc2hUb2tlbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuXHR9KTtcblxuXHRzdGF0aWMgYXN5bmMgYWRkT3JVcGRhdGUodXNlcklkOiBzdHJpbmcsIHNlcnZpY2U6IFNlcnZpY2UsIHRva2VuczogVG9rZW5zKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3Qga2V5ID0geyB1c2VySWQsIHNlcnZpY2UgfTtcblx0XHRjb25zb2xlLmxvZyhcImFkZGluZyBjcmVkZW50aWFsOiBcIiwga2V5KTtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IHRhYmxlLmdldChrZXkpO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHRhd2FpdCB0YWJsZS51cGRhdGUoe1xuXHRcdFx0XHRLZXk6IGtleSxcblx0XHRcdFx0VXBkYXRlRXhwcmVzc2lvbjogXCJTRVQgYWNjZXNzVG9rZW4gPSA6YWNjZXNzVG9rZW5cIixcblx0XHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHRcdFwiOmFjY2Vzc1Rva2VuXCI6IHRva2Vucy5hY2Nlc3NUb2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCB0YWJsZS5wdXQoe1xuXHRcdFx0XHR1c2VySWQsXG5cdFx0XHRcdHNlcnZpY2UsXG5cdFx0XHRcdC4uLnRva2Vucyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRDcmVkZW50aWFsKHVzZXJJZDogc3RyaW5nLCBzZXJ2aWNlOiBTZXJ2aWNlKSB7XG5cdFx0Y29uc3QgdGFibGUgPSBhd2FpdCB0aGlzLmdldFRhYmxlKCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCB0YWJsZS5nZXQoeyB1c2VySWQsIHNlcnZpY2UgfSk7XG5cblx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdH1cblxuXHRkYXRhOiB6LmluZmVyPHR5cGVvZiBDcmVkZW50aWFsLlNjaGVtYT4gfCB1bmRlZmluZWQ7XG5cblx0Z2V0IHVzZXJJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy51c2VySWQgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBzZXJ2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGE/LnNlcnZpY2UgPz8gXCJcIjtcblx0fVxuXG5cdGdldCBhY2Nlc3NUb2tlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhPy5hY2Nlc3NUb2tlbiA/PyBcIlwiO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcIm50aS5zZXNzaW9uXCIsXG5cdFx0c2FtZVNpdGU6IFwibGF4XCIsXG5cdFx0cGF0aDogXCIvXCIsXG5cdFx0c2VjcmV0czogW1wiTjN4dFRoMHVnaHQhIUNcIl0sXG5cdH0sXG59KTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7XG5cdEZvcm0sXG5cdExpbmtzRnVuY3Rpb24sXG5cdExvYWRlckZ1bmN0aW9uLFxuXHRBY3Rpb25GdW5jdGlvbixcblx0dXNlQWN0aW9uRGF0YSxcblx0dXNlVHJhbnNpdGlvbixcblx0anNvbixcblx0cmVkaXJlY3QsXG5cdHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIsXG5cdHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUge0FjdHVhbEZpbGVPYmplY3R9IGZyb20gXCJmaWxlcG9uZFwiO1xuaW1wb3J0ICogYXMgSFRNTFBhcnNlciBmcm9tIFwibm9kZS1odG1sLXBhcnNlclwiO1xuXG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9GaWxlSW5wdXRcIjtcbmltcG9ydCB7dXNlQmxvYiwgdXNlT2JqZWN0VVJMfSBmcm9tIFwifi9jb21wb25lbnRzL2hvb2tzL3VzZS1vYmplY3QtdXJsXCI7XG5pbXBvcnQge2dldFNlc3Npb25Vc2VyfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCAqIGFzIENTViBmcm9tIFwifi9hcGkvdXRpbHMvQ1NWLnNlcnZlclwiO1xuXG5jb25zdCBWZW5kb3JPcmRlciA9IFtcIkdldHR5IEltYWdlc1wiLCBcIlNodXR0ZXJzdG9ja1wiLCBcIlVua25vd25cIl07XG5cbnR5cGUgSW1hZ2VPYmplY3QgPSB7XG5cdFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiO1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXHRhdXRob3I6IHtcblx0XHRuYW1lOiBzdHJpbmc7XG5cdH07XG59O1xuXG50eXBlIEludmVudG9yeSA9IHtcblx0dHlwZTogXCJ2aWRlb1wiIHwgXCJwaG90b1wiIHwgXCJhdWRpb1wiIHwgXCJ1bmtub3duXCI7XG5cdGZpbGVuYW1lOiBzdHJpbmc7XG5cdHZlbmRvcjogc3RyaW5nO1xuXG5cdGNvZGU/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0aGVhZGxpbmU/OiBzdHJpbmc7XG5cdGNyZWRpdGxpbmU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmlsZXBvbmRAXjQvZGlzdC9maWxlcG9uZC5jc3NcIixcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGlmICghdXNlcikge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZEhhbmRsZXJcblx0KTtcblxuXHRjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwicmVwb3J0XCIpIGFzIEZpbGU7XG5cdGNvbnN0IHJlcG9ydCA9IGF3YWl0IHBhcnNlUmVwb3J0KGZpbGUpO1xuXHRjb25zb2xlLmxvZyhcIlJFUE9SVDogXCIsIHJlcG9ydCk7XG5cdGNvbnN0IHByb2plY3ROYW1lID0gcmVwb3J0W1wiUHJvamVjdCBuYW1lXCJdO1xuXHRjb25zdCBpbnZlbnRvcnkgPSAoYXdhaXQgZ2V0QXNzZXRJbnZlbnRvcnkocmVwb3J0KSkuc29ydChcblx0XHQoYSwgYikgPT4gVmVuZG9yT3JkZXIuaW5kZXhPZihhLnZlbmRvcikgLSBWZW5kb3JPcmRlci5pbmRleE9mKGIudmVuZG9yKVxuXHQpO1xuXG5cdGNvbnN0IGNzdiA9IGF3YWl0IENTVi5mb3JtYXQoaW52ZW50b3J5LCB7XG5cdFx0aGVhZGVyczogW1xuXHRcdFx0XCJoZWFkbGluZVwiLFxuXHRcdFx0XCJ0eXBlXCIsXG5cdFx0XHRcInZlbmRvclwiLFxuXHRcdFx0XCJmaWxlbmFtZVwiLFxuXHRcdFx0XCJjb2RlXCIsXG5cdFx0XHRcImNvbGxlY3Rpb25cIixcblx0XHRcdFwiY3JlZGl0bGluZVwiLFxuXHRcdFx0XCJ1cmxcIixcblx0XHRdLFxuXHR9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y3N2LFxuXHRcdHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVswXS50cmltKCkucmVwbGFjZSgvXFwuLiokLywgXCJcIiksXG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXRJbnZlbnRvcnkoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cdGNvbnN0IGFjdGlvbiA9IHVzZUFjdGlvbkRhdGEoKTtcblxuXHRjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPEFjdHVhbEZpbGVPYmplY3RbXSB8IHVuZGVmaW5lZD4oXG5cdFx0dW5kZWZpbmVkXG5cdCk7XG5cblx0Y29uc3Qgc2hvd1NhdmluZyA9XG5cdFx0dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgdHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCI7XG5cdGNvbnN0IHNob3dEb3dubG9hZCA9ICFzaG93U2F2aW5nICYmIGFjdGlvbjtcblx0Y29uc3Qgc2hvd0Zvcm0gPSAhc2hvd1NhdmluZyAmJiAhc2hvd0Rvd25sb2FkO1xuXG5cdGNvbnN0IGNzdiA9IHVzZUJsb2IoYWN0aW9uPy5jc3YsIFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtODtcIik7XG5cdGNvbnN0IGRvd25sb2FkVVJMID0gdXNlT2JqZWN0VVJMKGNzdik7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIkFzc2V0IEludmVudG9yeVwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdHshc2hvd0Rvd25sb2FkIHx8ICFkb3dubG9hZFVSTCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2Rvd25sb2FkVVJMfVxuXHRcdFx0XHRcdFx0XHRkb3dubG9hZD17YCR7YWN0aW9uPy5wcm9qZWN0TmFtZX0tYXNzZXQtaW52ZW50b3J5LmNzdmB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkRvd25sb2FkPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93U2F2aW5nID8gbnVsbCA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MvPlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxuXHRcdFx0XHRcdFx0XHRHZW5lcmF0aW5nLi4uXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFzaG93Rm9ybSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cblx0XHRcdFx0XHRcdFx0QWZ0ZXIgRWZmZWN0cyBEZXBlbmRlbmN5IFJlcG9ydFxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiPlxuXHRcdFx0XHRcdFx0XHRGaWxlICZndDsgRGVwZW5kZW5jaWVzICZndDsgQ29sbGVjdCBGaWxlc1xuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHRcdDxGaWxlSW5wdXRcblx0XHRcdFx0XHRcdFx0bmFtZT1cInJlcG9ydFwiXG5cdFx0XHRcdFx0XHRcdHN0b3JlQXNGaWxlXG5cdFx0XHRcdFx0XHRcdGZpbGVzPXtmaWxlc31cblx0XHRcdFx0XHRcdFx0b251cGRhdGVmaWxlcz17KGl0ZW1zKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEZpbGVzKGl0ZW1zLm1hcCgoZikgPT4gZi5maWxlKSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdFx0Q29tcGlsZVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG5cbmNvbnN0IGdldEhUTUwgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGNvbnN0IHRleHQgPSBhd2FpdCByZXNwLnRleHQoKTtcblxuXHRyZXR1cm4gSFRNTFBhcnNlci5wYXJzZSh0ZXh0LCB7XG5cdFx0YmxvY2tUZXh0RWxlbWVudHM6IHtzdHlsZTogZmFsc2V9LFxuXHR9KTtcbn07XG5cbmNvbnN0IGdldEltYWdlT2JqZWN0TGlua0RhdGEgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPEltYWdlT2JqZWN0PiA9PiB7XG5cdGNvbnN0IGh0bWwgPSBhd2FpdCBnZXRIVE1MKHVybCk7XG5cdGNvbnN0IGxpbmtEYXRhID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFwic2NyaXB0W3R5cGU9J2FwcGxpY2F0aW9uL2xkK2pzb24nXVwiXG5cdCk7XG5cblx0Zm9yIChsZXQgZGF0YSBvZiBsaW5rRGF0YSkge1xuXHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dCkgYXMgSW1hZ2VPYmplY3Q7XG5cblx0XHRpZiAoanNvbltcIkB0eXBlXCJdICE9PSBcIkltYWdlT2JqZWN0XCIpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBqc29uO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBJbWFnZU9iamVjdDogJHt1cmx9YCk7XG59O1xuXG5jb25zdCBoZWFkbGluZUZyb21JbWFnZU9iZWN0ID0gKG9iajogSW1hZ2VPYmplY3QpID0+IG9iai5kZXNjcmlwdGlvbjtcbmNvbnN0IGNyZWRpdGxpbmVGcm9tSW1hZ2VPYmplY3QgPSAob2JqOiBJbWFnZU9iamVjdCkgPT4gb2JqLmF1dGhvci5uYW1lO1xuXG5jb25zdCBUeXBlc1RvRXh0ZW5zaW9uID0ge1xuXHR2aWRlbzogW1wiLm1wNFwiLCBcIi5tb3ZcIiwgXCIubXBnXCJdLFxuXHRwaG90bzogW1wiLmpwZWdcIiwgXCIuanBnXCIsIFwiLnBuZ1wiLCBcIi50aWZcIiwgXCIud2VibVwiXSxcblx0YXVkaW86IFtcIi5tcDNcIiwgXCIud2F2XCJdLFxufTtcblxuY29uc3QgR2V0dHlBc3NldFR5cGVzOiBzdHJpbmcgPSB7XG5cdGZpbG06IFwidmlkZW9cIixcblx0aW1hZ2U6IFwicGhvdG9cIlxufTtcblxuY29uc3QgZ2V0VHlwZUZyb21FeHRlbnNpb24gPSAoXG5cdGV4dDogc3RyaW5nXG4pOiBrZXlvZiB0eXBlb2YgVHlwZXNUb0V4dGVuc2lvbiB8IFwidW5rbm93blwiID0+IHtcblx0Zm9yIChsZXQgW3R5cGUsIGV4dGVuc2lvbnNdIG9mIE9iamVjdC5lbnRyaWVzKFR5cGVzVG9FeHRlbnNpb24pKSB7XG5cdFx0aWYgKGV4dGVuc2lvbnMuaW5jbHVkZXMoZXh0KSkge1xuXHRcdFx0cmV0dXJuIHR5cGUgYXMga2V5b2YgdHlwZW9mIFR5cGVzVG9FeHRlbnNpb247XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFwidW5rbm93blwiO1xufTtcblxuY29uc3QgR2V0dHlSZWdleCA9IC9eKGdldHR5aW1hZ2VzfEdldHR5SW1hZ2VzKVxcLShcXGQrKS87XG5jb25zdCBTaHV0dGVyUmVnZXggPSAvXihzaHV0dGVyc3RvY2spXyhcXGQrKS87XG5jb25zdCBTaHV0dGVyVVJMUmVnZXggPSAvLShcXGQrKSQvO1xuXG5jb25zdCBHZXR0eUFydGlzdFRpdGxlQmxhY2tMaXN0OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHtcblx0Y29udHJpYnV0b3I6IHRydWUsXG5cdG5vbmU6IHRydWUsXG59O1xuXG5jb25zdCBDYXBpdGFsaXplID0gKHM6IHN0cmluZykgPT4gYCR7cy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbmNvbnN0IFRpdGxlQ2FzZSA9IChzOiBzdHJpbmcpID0+IHMuc3BsaXQoXCIgXCIpLm1hcChDYXBpdGFsaXplKS5qb2luKFwiIFwiKTtcblxuY29uc3QgSW5mb0dldHRlcnMgPSBbXG5cdHtcblx0XHQvLyBHZXR0eSBJbWFnZXNcblx0XHRoYW5kbGVzOiAoc3JjOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IGZpbGVuYW1lID0gcGF0aC5iYXNlbmFtZShzcmMsIHBhdGguZXh0bmFtZShzcmMpKTtcblx0XHRcdHJldHVybiBzcmMuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbVwiKSB8fCBHZXR0eVJlZ2V4LnRlc3QoZmlsZW5hbWUpO1xuXHRcdH0sXG5cdFx0aW5mbzogYXN5bmMgKHNyYzogc3RyaW5nKSA9PiB7XG5cdFx0XHRsZXQgdXJsID0gbnVsbDtcblx0XHRcdGxldCBmaWxlSW5mbyA9IHt9O1xuXHRcdFx0aWYgKHNyYy5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tXCIpKSB7XG5cdFx0XHRcdHVybCA9IHNyYztcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHNyYywgcGF0aC5leHRuYW1lKHNyYykpO1xuXHRcdFx0XHRjb25zdCBtYXRjaCA9IGZpbGVuYW1lLm1hdGNoKEdldHR5UmVnZXgpO1xuXHRcdFx0XHRjb25zdCBpZCA9IG1hdGNoPy5bMl07XG5cdFx0XHRcdGZpbGVJbmZvLmZpbGVOYW1lID0gZmlsZW5hbWU7XG5cdFx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBnZXQgR2V0dHlJbWFnZSBpZDogJHtmaWxlbmFtZX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cmwgPSBgaHR0cDovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLyR7aWR9YDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGh0bWwgPSBudWxsO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aHRtbCA9IGF3YWl0IGdldEhUTUwodXJsKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGZpbGVuYW1lOiBcIlVuYWJsZSB0byBnZXQgR2V0dHkgSW1hZ2VzIGFzc2V0IGRldGFpbHNcIixcblx0XHRcdFx0XHR1cmw6IHVybFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdFx0Y29uc3QgYXNzZXREZXRhaWxzU2NyaXB0ID0gaHRtbC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnc2NyaXB0W2RhdGEtY29tcG9uZW50PVwiYXNzZXRkZXRhaWxcIl0nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBhc3NldERldGFpbHMgPSBhc3NldERldGFpbHNTY3JpcHRcblx0XHRcdFx0PyBKU09OLnBhcnNlKGFzc2V0RGV0YWlsc1NjcmlwdC50ZXh0KVxuXHRcdFx0XHQ6IG51bGw7XG5cblxuXHRcdFx0aWYgKCFhc3NldERldGFpbHMpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRmaWxlbmFtZTogXCJVbmFibGUgdG8gZ2V0IEdldHR5IEltYWdlcyBhc3NldCBkZXRhaWxzXCIsXG5cdFx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2ZW5kb3I6IFwiR2V0dHkgSW1hZ2VzXCIsXG5cdFx0XHRcdGNvZGU6IGFzc2V0RGV0YWlscy5hc3NldC5pZCxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHR0eXBlOiBHZXR0eUFzc2V0VHlwZXNbYXNzZXREZXRhaWxzLmFzc2V0LmFzc2V0VHlwZV0gfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdGhlYWRsaW5lOiBhc3NldERldGFpbHMuYXNzZXQudGl0bGUsXG5cdFx0XHRcdGNyZWRpdGxpbmU6IGFzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZVxuXHRcdFx0XHRcdD8gYXNzZXREZXRhaWxzLmFzc2V0LnBob3RvZ3JhcGhlclxuXHRcdFx0XHRcdDogYCR7YXNzZXREZXRhaWxzLmFzc2V0LnBob3RvZ3JhcGhlcn0gLyAke1RpdGxlQ2FzZShcblx0XHRcdFx0XHRcdGFzc2V0RGV0YWlscy5hc3NldC5hcnRpc3RUaXRsZVxuXHRcdFx0XHRcdCl9YCxcblx0XHRcdFx0Y29sbGVjdGlvbjogYXNzZXREZXRhaWxzLmFzc2V0LmNvbGxlY3Rpb25EaXNwbGF5TmFtZSxcblx0XHRcdFx0Li4uZmlsZUluZm9cblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdC8vU2h1dHRlcnN0b2NrXG5cdFx0aGFuZGxlczogKHNyYzogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc3JjLCBwYXRoLmV4dG5hbWUoc3JjKSk7XG5cdFx0XHRyZXR1cm4gc3JjLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tXCIpIHx8IFNodXR0ZXJSZWdleC50ZXN0KGZpbGVuYW1lKTtcblx0XHR9LFxuXHRcdGluZm86IGFzeW5jIChzcmM6IHN0cmluZykgPT4ge1xuXHRcdFx0bGV0IHVybCA9IG51bGw7XG5cdFx0XHRpZiAoc3JjLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tXCIpKSB7XG5cdFx0XHRcdHVybCA9IHNyYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGZpbGVuYW1lID0gcGF0aC5iYXNlbmFtZShzcmMsIHBhdGguZXh0bmFtZShzcmMpKTtcblx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBmaWxlbmFtZS5tYXRjaChTaHV0dGVyUmVnZXgpO1xuXHRcdFx0XHRjb25zdCBpZCA9IG1hdGNoPy5bMl07XG5cdFx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdFx0XHRoZWFkbGluZTogYFVuYWJsZSB0byBnZXQgU2h1dHRlclN0b2NrIEltYWdlIGluZm8uYFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1cmwgPSBgaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by8ke2lkfWA7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaW1hZ2VPYmplY3QgPSBudWxsO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW1hZ2VPYmplY3QgPSBhd2FpdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhKHVybCk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0XHRoZWFkbGluZTogYFVuYWJsZSB0byBnZXQgU2h1dHRlclN0b2NrIGltYWdlIGluZm8uYFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR1cmwgPSBpbWFnZU9iamVjdC5jb250ZW50VXJsO1xuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHVybCk7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUodXJsLCBleHRlbnNpb24pO1xuXHRcdFx0Y29uc3QgbWF0Y2ggPSBmaWxlbmFtZS5tYXRjaChTaHV0dGVyVVJMUmVnZXgpO1xuXHRcdFx0Y29uc3QgaWQgPSBtYXRjaD8uWzFdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIlNodXR0ZXJzdG9ja1wiLFxuXHRcdFx0XHRjb2RlOiBpZCxcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRmaWxlbmFtZSxcblx0XHRcdFx0dHlwZTogZ2V0VHlwZUZyb21FeHRlbnNpb24oZXh0ZW5zaW9uKSxcblx0XHRcdFx0aGVhZGxpbmU6IGhlYWRsaW5lRnJvbUltYWdlT2JlY3QoaW1hZ2VPYmplY3QpLFxuXHRcdFx0XHRjcmVkaXRsaW5lOiBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0KGltYWdlT2JqZWN0KSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdC8vQXJ0bGlzdFxuXHRcdGhhbmRsZXM6IChmaWxlbmFtZTogc3RyaW5nLCBleHQ6IHN0cmluZykgPT5cblx0XHRcdGZpbGVuYW1lLmluZGV4T2YoXCJBcnRsaXN0XCIpICE9PSAtMSxcblx0XHRpbmZvOiBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJBcnRsaXN0LmlvXCIsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRJbnZlbnRvcnkoXG5cdHJlcG9ydDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG4pOiBQcm9taXNlPEludmVudG9yeVtdPiB7XG5cdGNvbnN0IHNvdXJjZXMgPSByZXBvcnRbXCJDb2xsZWN0ZWQgc291cmNlIGZpbGVzXCJdIGFzIHN0cmluZ1tdO1xuXHRjb25zdCBpbnZlbnRvcmllcyA9IHNvdXJjZXMucmVkdWNlKFxuXHRcdChhY2M6IFByb21pc2U8SW52ZW50b3J5PltdLCBzb3VyY2U6IHN0cmluZykgPT4ge1xuXG5cblx0XHRcdGNvbnN0IGdldHRlciA9IEluZm9HZXR0ZXJzLmZpbmQoKGcpID0+XG5cdFx0XHRcdGcuaGFuZGxlcyhzb3VyY2UpXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIWdldHRlcikge1xuXHRcdFx0XHRjb25zdCBleHRlbnNpb24gPSBwYXRoLmV4dG5hbWUoc291cmNlKVxuXHRcdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlLCBleHRlbnNpb24pO1xuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdFx0dHlwZTogZ2V0VHlwZUZyb21FeHRlbnNpb24oZXh0ZW5zaW9uKSxcblx0XHRcdFx0XHRcdHZlbmRvcjogXCJVbmtub3duXCIsXG5cdFx0XHRcdFx0XHRmaWxlbmFtZTogZmlsZW5hbWUsXG5cdFx0XHRcdFx0XHRzb3VyY2U6IHNvdXJjZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRnZXR0ZXIuaW5mbyhzb3VyY2UpLnRoZW4oKGluZm8pID0+ICh7XG5cdFx0XHRcdFx0c291cmNlOiBzb3VyY2UsXG5cdFx0XHRcdFx0Li4uaW5mbyxcblx0XHRcdFx0fSkpLFxuXHRcdFx0XTtcblx0XHR9LFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGludmVudG9yaWVzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VSZXBvcnQoZmlsZTogRmlsZSkge1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxyXCIpO1xuXG5cdGNvbnN0IGdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGxldCBjdXJyZW50U2VjdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cblx0Zm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuXHRcdGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcblx0XHRjb25zdCBkZXB0aCA9IHBhcnRzLmxlbmd0aCAtIDE7XG5cdFx0Y29uc3QgbGluZVRleHQgPSBwYXJ0c1tkZXB0aF0udHJpbSgpO1xuXHRcdGNvbnNvbGUubG9nKFwiUEFSVFM6IFwiLCBwYXJ0cyk7XG5cdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRjb25zdCBbbmFtZSwgdmFsdWVdID0gbGluZVRleHQuc3BsaXQoXCI6XCIpO1xuXG5cdFx0XHRncm91cHNbbmFtZV0gPSBncm91cHNbbmFtZV0gPz8gW107XG5cblx0XHRcdGlmICh2YWx1ZT8udHJpbSgpKSB7XG5cdFx0XHRcdGdyb3Vwc1tuYW1lXS5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudFNlY3Rpb24gPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWN1cnJlbnRTZWN0aW9uKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUmVwb3J0XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRncm91cHNbY3VycmVudFNlY3Rpb25dLnB1c2gobGluZVRleHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncm91cHM7XG59XG4iLCAiaW1wb3J0IHsgRmlsZVBvbmQgfSBmcm9tIFwicmVhY3QtZmlsZXBvbmRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoRmlsZVBvbmQpYFxuXHR3aWR0aDogMzAwcHg7XG5cblx0JiAuZmlsZXBvbmQtLWNyZWRpdHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tZHJvcC1sYWJlbCB7XG5cdFx0Y29sb3I6ICM0YzRlNTM7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tbGFiZWwtYWN0aW9uIHtcblx0XHR0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNiYWJkYzA7XG5cdH1cblxuXHQmIC5maWxlcG9uZC0tcGFuZWwtcm9vdCB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZGYwZjQ7XG5cdFx0aGVpZ2h0OiAxZW07XG5cdH1cblxuXHQmIC5maWxlcG9uZC0taXRlbS1wYW5lbCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzU5NWU2ODtcblx0fVxuXG5cdCYgLmZpbGVwb25kLS1kcmlwLWJsb2Ige1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM3ZjhhOWE7XG5cdH1cbmA7XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQmxvYihjb250ZW50OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiB7XG5cdFx0aWYgKCFjb250ZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGUgfSk7XG5cdH0sIFtjb250ZW50LCB0eXBlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VPYmplY3RVUkwoYmxvYjogQmxvYiB8IG51bGwpIHtcblx0Y29uc3QgW29iamVjdFVSTCwgc2V0T2JqZWN0VVJMXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFibG9iKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRzZXRPYmplY3RVUkwodXJsKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5cdFx0XHRzZXRPYmplY3RVUkwobnVsbCk7XG5cdFx0fTtcblx0fSwgW2Jsb2JdKTtcblxuXHRyZXR1cm4gb2JqZWN0VVJMO1xufVxuIiwgImltcG9ydCAqIGFzIENTVkZvcm1hdCBmcm9tIFwiQGZhc3QtY3N2L2Zvcm1hdFwiO1xuXG50eXBlIFJvdyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG5cdHJvd3M6IFJvd1tdLFxuXHRvcHRpb25zOiBDU1ZGb3JtYXQuRm9ybWF0dGVyT3B0aW9uc0FyZ3M8Um93LCBSb3c+XG4pOiBQcm9taXNlPHN0cmluZz4ge1xuXHRyZXR1cm4gQ1NWRm9ybWF0LndyaXRlVG9TdHJpbmcocm93cywgb3B0aW9ucyk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyIH0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG5cdC8vTk9URTogdGhpcyBvYmplY3Qua2V5cyB0cmljayBvbmx5IHdvcmtzIGlmIHRoZSBlbnVtIGtleXMgYXJlIGV4YWN0IG1hdGNoZXMgZm9yIHRoZSB2YWx1ZXNcblx0aWYgKCFwYXJhbXMuc2VydmljZSB8fCAhT2JqZWN0LmtleXMoU2VydmljZSkuaW5jbHVkZXMocGFyYW1zLnNlcnZpY2UpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgU2VydmljZVwiKTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKFwiU2VydmljZSBDYWxsYmFjazogXCIsIHBhcmFtcy5zZXJ2aWNlKTtcblxuXHRhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHBhcmFtcy5zZXJ2aWNlIGFzIFNlcnZpY2UsIHJlcXVlc3QsIHtcblx0XHRzdWNjZXNzOiBcIi9cIixcblx0XHRmYWlsdXJlOiBcIi9sb2dpblwiLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQge1xuXHRGb3JtLFxuXHRMaW5rc0Z1bmN0aW9uLFxuXHRMb2FkZXJGdW5jdGlvbixcblx0QWN0aW9uRnVuY3Rpb24sXG5cdHVzZUFjdGlvbkRhdGEsXG5cdHVzZVRyYW5zaXRpb24sXG5cdGpzb24sXG5cdHJlZGlyZWN0LFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHtBY3R1YWxGaWxlT2JqZWN0fSBmcm9tIFwiZmlsZXBvbmRcIjtcbmltcG9ydCAqIGFzIEhUTUxQYXJzZXIgZnJvbSBcIm5vZGUtaHRtbC1wYXJzZXJcIjtcblxuaW1wb3J0IFBhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlXCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5pbXBvcnQge3VzZUJsb2IsIHVzZU9iamVjdFVSTH0gZnJvbSBcIn4vY29tcG9uZW50cy9ob29rcy91c2Utb2JqZWN0LXVybFwiO1xuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgKiBhcyBDU1YgZnJvbSBcIn4vYXBpL3V0aWxzL0NTVi5zZXJ2ZXJcIjtcblxuY29uc3QgVmVuZG9yT3JkZXIgPSBbXCJHZXR0eSBJbWFnZXNcIiwgXCJTaHV0dGVyc3RvY2tcIiwgXCJVbmtub3duXCJdO1xuXG50eXBlIEltYWdlT2JqZWN0ID0ge1xuXHRcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIjtcblx0ZGVzY3JpcHRpb246IHN0cmluZztcblx0YXV0aG9yOiB7XG5cdFx0bmFtZTogc3RyaW5nO1xuXHR9O1xufTtcblxudHlwZSBJbnZlbnRvcnkgPSB7XG5cdHR5cGU6IFwidmlkZW9cIiB8IFwicGhvdG9cIiB8IFwiYXVkaW9cIiB8IFwidW5rbm93blwiO1xuXHRmaWxlbmFtZTogc3RyaW5nO1xuXHR2ZW5kb3I6IHN0cmluZztcblxuXHRjb2RlPzogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdGhlYWRsaW5lPzogc3RyaW5nO1xuXHRjcmVkaXRsaW5lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZpbGVwb25kQF40L2Rpc3QvZmlsZXBvbmQuY3NzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbG9hZDogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG5cdGNvbnN0IFVwbG9hZEhhbmRsZXIgPSB1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyKHtcblx0XHRtYXhGaWxlU2l6ZTogMTBfMDAwXzAwMCwgLy8xMG1iP1xuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInJlcG9ydFwiKSBhcyBGaWxlO1xuXHRjb25zdCByZXBvcnQgPSBhd2FpdCBwYXJzZVJlcG9ydChmaWxlKTtcblx0Y29uc29sZS5sb2coXCJSRVBPUlQ6IFwiLCByZXBvcnQpO1xuXHRjb25zdCBwcm9qZWN0TmFtZSA9IHJlcG9ydFtcIlByb2plY3QgbmFtZVwiXTtcblx0Y29uc3QgaW52ZW50b3J5ID0gKGF3YWl0IGdldEFzc2V0SW52ZW50b3J5KHJlcG9ydCkpLnNvcnQoXG5cdFx0KGEsIGIpID0+IFZlbmRvck9yZGVyLmluZGV4T2YoYS52ZW5kb3IpIC0gVmVuZG9yT3JkZXIuaW5kZXhPZihiLnZlbmRvcilcblx0KTtcblxuXHRjb25zdCBjc3YgPSBhd2FpdCBDU1YuZm9ybWF0KGludmVudG9yeSwge1xuXHRcdGhlYWRlcnM6IFtcblx0XHRcdFwiaGVhZGxpbmVcIixcblx0XHRcdFwidHlwZVwiLFxuXHRcdFx0XCJ2ZW5kb3JcIixcblx0XHRcdFwiZmlsZW5hbWVcIixcblx0XHRcdFwiY29kZVwiLFxuXHRcdFx0XCJjb2xsZWN0aW9uXCIsXG5cdFx0XHRcImNyZWRpdGxpbmVcIixcblx0XHRcdFwidXJsXCIsXG5cdFx0XSxcblx0fSk7XG5cblx0cmV0dXJuIGpzb24oe1xuXHRcdGNzdixcblx0XHRwcm9qZWN0TmFtZTogcHJvamVjdE5hbWVbMF0udHJpbSgpLnJlcGxhY2UoL1xcLi4qJC8sIFwiXCIpLFxuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2V0SW52ZW50b3J5KCkge1xuXHRjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXHRjb25zdCBhY3Rpb24gPSB1c2VBY3Rpb25EYXRhKCk7XG5cblx0Y29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxBY3R1YWxGaWxlT2JqZWN0W10gfCB1bmRlZmluZWQ+KFxuXHRcdHVuZGVmaW5lZFxuXHQpO1xuXG5cdGNvbnN0IHNob3dTYXZpbmcgPVxuXHRcdHRyYW5zaXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiIHx8IHRyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiO1xuXHRjb25zdCBzaG93RG93bmxvYWQgPSAhc2hvd1NhdmluZyAmJiBhY3Rpb247XG5cdGNvbnN0IHNob3dGb3JtID0gIXNob3dTYXZpbmcgJiYgIXNob3dEb3dubG9hZDtcblxuXHRjb25zdCBjc3YgPSB1c2VCbG9iKGFjdGlvbj8uY3N2LCBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLTg7XCIpO1xuXHRjb25zdCBkb3dubG9hZFVSTCA9IHVzZU9iamVjdFVSTChjc3YpO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJBc3NldCBJbnZlbnRvcnlcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHR7IXNob3dEb3dubG9hZCB8fCAhZG93bmxvYWRVUkwgPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtkb3dubG9hZFVSTH1cblx0XHRcdFx0XHRcdFx0ZG93bmxvYWQ9e2Ake2FjdGlvbj8ucHJvamVjdE5hbWV9LWFzc2V0LWludmVudG9yeS5jc3ZgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5Eb3dubG9hZDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd1NhdmluZyA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PFN0YWNrXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzLz5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0R2VuZXJhdGluZy4uLlxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshc2hvd0Zvcm0gPyBudWxsIDogKFxuXHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0c3BhY2luZz17Mn1cblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG5cdFx0XHRcdFx0XHRcdEFmdGVyIEVmZmVjdHMgRGVwZW5kZW5jeSBSZXBvcnRcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cblx0XHRcdFx0XHRcdFx0RmlsZSAmZ3Q7IERlcGVuZGVuY2llcyAmZ3Q7IENvbGxlY3QgRmlsZXNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0XHQ8RmlsZUlucHV0XG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJyZXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRzdG9yZUFzRmlsZVxuXHRcdFx0XHRcdFx0XHRmaWxlcz17ZmlsZXN9XG5cdFx0XHRcdFx0XHRcdG9udXBkYXRlZmlsZXM9eyhpdGVtcykgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRGaWxlcyhpdGVtcy5tYXAoKGYpID0+IGYuZmlsZSkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdENvbXBpbGVcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuXG5jb25zdCBnZXRIVE1MID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcC50ZXh0KCk7XG5cblx0cmV0dXJuIEhUTUxQYXJzZXIucGFyc2UodGV4dCwge1xuXHRcdGJsb2NrVGV4dEVsZW1lbnRzOiB7c3R5bGU6IGZhbHNlfSxcblx0fSk7XG59O1xuXG5jb25zdCBnZXRJbWFnZU9iamVjdExpbmtEYXRhID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxJbWFnZU9iamVjdD4gPT4ge1xuXHRjb25zdCBodG1sID0gYXdhaXQgZ2V0SFRNTCh1cmwpO1xuXHRjb25zdCBsaW5rRGF0YSA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcblx0XHRcInNjcmlwdFt0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ11cIlxuXHQpO1xuXG5cdGZvciAobGV0IGRhdGEgb2YgbGlua0RhdGEpIHtcblx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpIGFzIEltYWdlT2JqZWN0O1xuXG5cdFx0aWYgKGpzb25bXCJAdHlwZVwiXSAhPT0gXCJJbWFnZU9iamVjdFwiKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ganNvbjtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgSW1hZ2VPYmplY3Q6ICR7dXJsfWApO1xufTtcblxuY29uc3QgaGVhZGxpbmVGcm9tSW1hZ2VPYmVjdCA9IChvYmo6IEltYWdlT2JqZWN0KSA9PiBvYmouZGVzY3JpcHRpb247XG5jb25zdCBjcmVkaXRsaW5lRnJvbUltYWdlT2JqZWN0ID0gKG9iajogSW1hZ2VPYmplY3QpID0+IG9iai5hdXRob3IubmFtZTtcblxuY29uc3QgVHlwZXNUb0V4dGVuc2lvbiA9IHtcblx0dmlkZW86IFtcIi5tcDRcIiwgXCIubW92XCIsIFwiLm1wZ1wiXSxcblx0cGhvdG86IFtcIi5qcGVnXCIsIFwiLmpwZ1wiLCBcIi5wbmdcIiwgXCIudGlmXCIsIFwiLndlYm1cIl0sXG5cdGF1ZGlvOiBbXCIubXAzXCIsIFwiLndhdlwiXSxcbn07XG5cbmNvbnN0IEdldHR5QXNzZXRUeXBlczogc3RyaW5nID0ge1xuXHRmaWxtOiBcInZpZGVvXCIsXG5cdGltYWdlOiBcInBob3RvXCJcbn07XG5cbmNvbnN0IGdldFR5cGVGcm9tRXh0ZW5zaW9uID0gKFxuXHRleHQ6IHN0cmluZ1xuKToga2V5b2YgdHlwZW9mIFR5cGVzVG9FeHRlbnNpb24gfCBcInVua25vd25cIiA9PiB7XG5cdGZvciAobGV0IFt0eXBlLCBleHRlbnNpb25zXSBvZiBPYmplY3QuZW50cmllcyhUeXBlc1RvRXh0ZW5zaW9uKSkge1xuXHRcdGlmIChleHRlbnNpb25zLmluY2x1ZGVzKGV4dCkpIHtcblx0XHRcdHJldHVybiB0eXBlIGFzIGtleW9mIHR5cGVvZiBUeXBlc1RvRXh0ZW5zaW9uO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBcInVua25vd25cIjtcbn07XG5cbmNvbnN0IEdldHR5UmVnZXggPSAvXihnZXR0eWltYWdlc3xHZXR0eUltYWdlcylcXC0oXFxkKykvO1xuY29uc3QgU2h1dHRlclJlZ2V4ID0gL14oc2h1dHRlcnN0b2NrKV8oXFxkKykvO1xuY29uc3QgU2h1dHRlclVSTFJlZ2V4ID0gLy0oXFxkKykkLztcblxuY29uc3QgR2V0dHlBcnRpc3RUaXRsZUJsYWNrTGlzdDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7XG5cdGNvbnRyaWJ1dG9yOiB0cnVlLFxuXHRub25lOiB0cnVlLFxufTtcblxuY29uc3QgQ2FwaXRhbGl6ZSA9IChzOiBzdHJpbmcpID0+IGAke3MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtzLnNsaWNlKDEpfWA7XG5jb25zdCBUaXRsZUNhc2UgPSAoczogc3RyaW5nKSA9PiBzLnNwbGl0KFwiIFwiKS5tYXAoQ2FwaXRhbGl6ZSkuam9pbihcIiBcIik7XG5cbmNvbnN0IEluZm9HZXR0ZXJzID0gW1xuXHR7XG5cdFx0Ly8gR2V0dHkgSW1hZ2VzXG5cdFx0aGFuZGxlczogKHNyYzogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc3JjLCBwYXRoLmV4dG5hbWUoc3JjKSk7XG5cdFx0XHRyZXR1cm4gc3JjLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb21cIikgfHwgR2V0dHlSZWdleC50ZXN0KGZpbGVuYW1lKTtcblx0XHR9LFxuXHRcdGluZm86IGFzeW5jIChzcmM6IHN0cmluZykgPT4ge1xuXHRcdFx0bGV0IHVybCA9IG51bGw7XG5cdFx0XHRsZXQgZmlsZUluZm8gPSB7fTtcblx0XHRcdGlmIChzcmMuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbVwiKSkge1xuXHRcdFx0XHR1cmwgPSBzcmM7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGZpbGVuYW1lID0gcGF0aC5iYXNlbmFtZShzcmMsIHBhdGguZXh0bmFtZShzcmMpKTtcblx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBmaWxlbmFtZS5tYXRjaChHZXR0eVJlZ2V4KTtcblx0XHRcdFx0Y29uc3QgaWQgPSBtYXRjaD8uWzJdO1xuXHRcdFx0XHRmaWxlSW5mby5maWxlTmFtZSA9IGZpbGVuYW1lO1xuXHRcdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZ2V0IEdldHR5SW1hZ2UgaWQ6ICR7ZmlsZW5hbWV9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dXJsID0gYGh0dHA6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8ke2lkfWA7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBodG1sID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGh0bWwgPSBhd2FpdCBnZXRIVE1MKHVybCk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRmaWxlbmFtZTogXCJVbmFibGUgdG8gZ2V0IEdldHR5IEltYWdlcyBhc3NldCBkZXRhaWxzXCIsXG5cdFx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cblx0XHRcdGNvbnN0IGFzc2V0RGV0YWlsc1NjcmlwdCA9IGh0bWwucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0J3NjcmlwdFtkYXRhLWNvbXBvbmVudD1cImFzc2V0ZGV0YWlsXCJdJ1xuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgYXNzZXREZXRhaWxzID0gYXNzZXREZXRhaWxzU2NyaXB0XG5cdFx0XHRcdD8gSlNPTi5wYXJzZShhc3NldERldGFpbHNTY3JpcHQudGV4dClcblx0XHRcdFx0OiBudWxsO1xuXG5cblx0XHRcdGlmICghYXNzZXREZXRhaWxzKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZmlsZW5hbWU6IFwiVW5hYmxlIHRvIGdldCBHZXR0eSBJbWFnZXMgYXNzZXQgZGV0YWlsc1wiLFxuXHRcdFx0XHRcdHVybDogdXJsXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmVuZG9yOiBcIkdldHR5IEltYWdlc1wiLFxuXHRcdFx0XHRjb2RlOiBhc3NldERldGFpbHMuYXNzZXQuaWQsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0dHlwZTogR2V0dHlBc3NldFR5cGVzW2Fzc2V0RGV0YWlscy5hc3NldC5hc3NldFR5cGVdIHx8IFwiVW5rbm93blwiLFxuXHRcdFx0XHRoZWFkbGluZTogYXNzZXREZXRhaWxzLmFzc2V0LnRpdGxlLFxuXHRcdFx0XHRjcmVkaXRsaW5lOiBhc3NldERldGFpbHMuYXNzZXQuYXJ0aXN0VGl0bGVcblx0XHRcdFx0XHQ/IGFzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJcblx0XHRcdFx0XHQ6IGAke2Fzc2V0RGV0YWlscy5hc3NldC5waG90b2dyYXBoZXJ9IC8gJHtUaXRsZUNhc2UoXG5cdFx0XHRcdFx0XHRhc3NldERldGFpbHMuYXNzZXQuYXJ0aXN0VGl0bGVcblx0XHRcdFx0XHQpfWAsXG5cdFx0XHRcdGNvbGxlY3Rpb246IGFzc2V0RGV0YWlscy5hc3NldC5jb2xsZWN0aW9uRGlzcGxheU5hbWUsXG5cdFx0XHRcdC4uLmZpbGVJbmZvXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHQvL1NodXR0ZXJzdG9ja1xuXHRcdGhhbmRsZXM6IChzcmM6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHNyYywgcGF0aC5leHRuYW1lKHNyYykpO1xuXHRcdFx0cmV0dXJuIHNyYy5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbVwiKSB8fCBTaHV0dGVyUmVnZXgudGVzdChmaWxlbmFtZSk7XG5cdFx0fSxcblx0XHRpbmZvOiBhc3luYyAoc3JjOiBzdHJpbmcpID0+IHtcblx0XHRcdGxldCB1cmwgPSBudWxsO1xuXHRcdFx0aWYgKHNyYy5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbVwiKSkge1xuXHRcdFx0XHR1cmwgPSBzcmM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc3JjLCBwYXRoLmV4dG5hbWUoc3JjKSk7XG5cdFx0XHRcdGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goU2h1dHRlclJlZ2V4KTtcblx0XHRcdFx0Y29uc3QgaWQgPSBtYXRjaD8uWzJdO1xuXHRcdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRcdFx0aGVhZGxpbmU6IGBVbmFibGUgdG8gZ2V0IFNodXR0ZXJTdG9jayBJbWFnZSBpbmZvLmBcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dXJsID0gYGh0dHBzOi8vd3d3LnNodXR0ZXJzdG9jay5jb20vaW1hZ2UtcGhvdG8vJHtpZH1gO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGltYWdlT2JqZWN0ID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGltYWdlT2JqZWN0ID0gYXdhaXQgZ2V0SW1hZ2VPYmplY3RMaW5rRGF0YSh1cmwpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdFx0aGVhZGxpbmU6IGBVbmFibGUgdG8gZ2V0IFNodXR0ZXJTdG9jayBpbWFnZSBpbmZvLmBcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dXJsID0gaW1hZ2VPYmplY3QuY29udGVudFVybDtcblx0XHRcdGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZSh1cmwpO1xuXHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHVybCwgZXh0ZW5zaW9uKTtcblx0XHRcdGNvbnN0IG1hdGNoID0gZmlsZW5hbWUubWF0Y2goU2h1dHRlclVSTFJlZ2V4KTtcblx0XHRcdGNvbnN0IGlkID0gbWF0Y2g/LlsxXTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZlbmRvcjogXCJTaHV0dGVyc3RvY2tcIixcblx0XHRcdFx0Y29kZTogaWQsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0ZmlsZW5hbWUsXG5cdFx0XHRcdHR5cGU6IGdldFR5cGVGcm9tRXh0ZW5zaW9uKGV4dGVuc2lvbiksXG5cdFx0XHRcdGhlYWRsaW5lOiBoZWFkbGluZUZyb21JbWFnZU9iZWN0KGltYWdlT2JqZWN0KSxcblx0XHRcdFx0Y3JlZGl0bGluZTogY3JlZGl0bGluZUZyb21JbWFnZU9iamVjdChpbWFnZU9iamVjdCksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHQvL0FydGxpc3Rcblx0XHRoYW5kbGVzOiAoZmlsZW5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpID0+XG5cdFx0XHRmaWxlbmFtZS5pbmRleE9mKFwiQXJ0bGlzdFwiKSAhPT0gLTEsXG5cdFx0aW5mbzogYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcsIGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2ZW5kb3I6IFwiQXJ0bGlzdC5pb1wiLFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0SW52ZW50b3J5KFxuXHRyZXBvcnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuKTogUHJvbWlzZTxJbnZlbnRvcnlbXT4ge1xuXHRjb25zdCBzb3VyY2VzID0gcmVwb3J0W1wiQ29sbGVjdGVkIHNvdXJjZSBmaWxlc1wiXSBhcyBzdHJpbmdbXTtcblx0Y29uc3QgaW52ZW50b3JpZXMgPSBzb3VyY2VzLnJlZHVjZShcblx0XHQoYWNjOiBQcm9taXNlPEludmVudG9yeT5bXSwgc291cmNlOiBzdHJpbmcpID0+IHtcblxuXG5cdFx0XHRjb25zdCBnZXR0ZXIgPSBJbmZvR2V0dGVycy5maW5kKChnKSA9PlxuXHRcdFx0XHRnLmhhbmRsZXMoc291cmNlKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCFnZXR0ZXIpIHtcblx0XHRcdFx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHNvdXJjZSlcblx0XHRcdFx0Y29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHNvdXJjZSwgZXh0ZW5zaW9uKTtcblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdFx0UHJvbWlzZS5yZXNvbHZlKHtcblx0XHRcdFx0XHRcdHR5cGU6IGdldFR5cGVGcm9tRXh0ZW5zaW9uKGV4dGVuc2lvbiksXG5cdFx0XHRcdFx0XHR2ZW5kb3I6IFwiVW5rbm93blwiLFxuXHRcdFx0XHRcdFx0ZmlsZW5hbWU6IGZpbGVuYW1lLFxuXHRcdFx0XHRcdFx0c291cmNlOiBzb3VyY2UsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0Z2V0dGVyLmluZm8oc291cmNlKS50aGVuKChpbmZvKSA9PiAoe1xuXHRcdFx0XHRcdHNvdXJjZTogc291cmNlLFxuXHRcdFx0XHRcdC4uLmluZm8sXG5cdFx0XHRcdH0pKSxcblx0XHRcdF07XG5cdFx0fSxcblx0XHRbXVxuXHQpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChpbnZlbnRvcmllcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlUmVwb3J0KGZpbGU6IEZpbGUpIHtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcclwiKTtcblxuXHRjb25zdCBncm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRsZXQgY3VycmVudFNlY3Rpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5cdGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcblx0XHRjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoXCJcXHRcIik7XG5cdFx0Y29uc3QgZGVwdGggPSBwYXJ0cy5sZW5ndGggLSAxO1xuXHRcdGNvbnN0IGxpbmVUZXh0ID0gcGFydHNbZGVwdGhdLnRyaW0oKTtcblx0XHRjb25zb2xlLmxvZyhcIlBBUlRTOiBcIiwgcGFydHMpO1xuXHRcdGlmIChkZXB0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgW25hbWUsIHZhbHVlXSA9IGxpbmVUZXh0LnNwbGl0KFwiOlwiKTtcblxuXHRcdFx0Z3JvdXBzW25hbWVdID0gZ3JvdXBzW25hbWVdID8/IFtdO1xuXG5cdFx0XHRpZiAodmFsdWU/LnRyaW0oKSkge1xuXHRcdFx0XHRncm91cHNbbmFtZV0ucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRTZWN0aW9uID0gbmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFjdXJyZW50U2VjdGlvbikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFJlcG9ydFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Z3JvdXBzW2N1cnJlbnRTZWN0aW9uXS5wdXNoKGxpbmVUZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JvdXBzO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbGllbnQgPSB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDbGllbnRSZXNwb25zZSA9IHtcblx0Y2xpZW50czogQ2xpZW50W107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcblxuXHRjb25zdCBzcGFjZUlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzcGFjZUlkXCIpO1xuXHRjb25zdCBXcmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0aWYgKCFzcGFjZUlkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiTXVzdCBoYXZlIGEgc3BhY2VJZFwiLCB7IHN0YXR1czogNDIyIH0pO1xuXHR9XG5cblx0Y29uc3QgZm9sZGVycyA9IGF3YWl0IFdyaWtlLkZvbGRlci5mcm9tU3BhY2Uoc3BhY2VJZCwgeyBwcm9qZWN0OiBmYWxzZSB9KTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0Y2xpZW50czogZm9sZGVycy5tYXAoKGYpID0+ICh7IGlkOiBmLmlkLCB0aXRsZTogZi50aXRsZSB9KSksXG5cdH0pO1xufTtcbiIsICJpbXBvcnQgdHlwZSBDcmVkZW50aWFsIGZyb20gXCIuLi9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyIH0gZnJvbSBcIi4uL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4uL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyB9IGZyb20gXCIuL0N1c3RvbUZpZWxkLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZUZvbGRlckNsYXNzIH0gZnJvbSBcIi4vRm9sZGVyLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyQ2xhc3MgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlUHJvamVjdENsYXNzIH0gZnJvbSBcIi4vUHJvamVjdC5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDbGFzcyB9IGZyb20gXCIuL1Byb2plY3Quc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3BhY2VDbGFzcyB9IGZyb20gXCIuL1NwYWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tDbGFzcyB9IGZyb20gXCIuL1Rhc2suc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrQ2xhc3MgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza1RlbXBsYXRlQ2xhc3MgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVmlkZW9CYXRjaFRhc2tDbGFzcyB9IGZyb20gXCIuL1ZpZGVvQmF0Y2hUYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVdvcmtGbG93Q2xhc3MgfSBmcm9tIFwiLi9Xb3JrZmxvdy5zZXJ2ZXJcIjtcblxuY29uc3QgQmFzZVVSTCA9IFwiaHR0cHM6Ly93d3cud3Jpa2UuY29tL2FwaS92NC9cIjtcblxudHlwZSBGZXRjaENvbmZpZyA9IHtcblx0bWV0aG9kOiBzdHJpbmc7XG5cdGhlYWRlcnM6IHtcblx0XHRBdXRob3JpemF0aW9uOiBzdHJpbmc7XG5cdFx0XCJDb250ZW50LVR5cGVcIj86IHN0cmluZztcblx0fTtcblx0Ym9keT86IHN0cmluZztcblx0c2lnbmFsPzogQWJvcnRTaWduYWw7XG59O1xuXG5jb25zdCBlbmNvZGVWYWx1ZSA9ICh2YWx1ZTogYW55KTogc3RyaW5nID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGBbJHt2YWx1ZS5tYXAoKGkpID0+IGBcIiR7ZW5jb2RlVmFsdWUoaSl9XCJgKS5qb2luKFwiLFwiKX1dYDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNsYXNzIFdyaWtlQ2xpZW50IHtcblx0c3RhdGljIGFzeW5jIGZvclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0XHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRcdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmVzcG9uc2UoXCJGb3JiaWRkZW5cIiwgeyBzdGF0dXM6IDQwMyB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCwgdXNlcj8udXNlcklkKTtcblx0fVxuXG5cdEN1c3RvbUZpZWxkOiBXcmlrZUN1c3RvbUZpZWxkQ2xhc3M7XG5cdEZvbGRlcjogV3Jpa2VGb2xkZXJDbGFzcztcblx0UHJvamVjdDogV3Jpa2VQcm9qZWN0Q2xhc3M7XG5cdFNwYWNlOiBXcmlrZVNwYWNlQ2xhc3M7XG5cdFRhc2s6IFdyaWtlVGFza0NsYXNzO1xuXHRUYXNrVGVtcGxhdGU6IFdyaWtlVGFza1RlbXBsYXRlQ2xhc3M7XG5cdFZpZGVvQmF0Y2g6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcztcblx0V29ya2Zsb3c6IFdyaWtlV29ya0Zsb3dDbGFzcztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsLFxuXHRcdHB1YmxpYyB1c2VySWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuXHQpIHtcblx0XHR0aGlzLkN1c3RvbUZpZWxkID0gY3JlYXRlQ3VzdG9tRmllbGRDbGFzcyh0aGlzKTtcblx0XHR0aGlzLkZvbGRlciA9IGNyZWF0ZUZvbGRlckNsYXNzKHRoaXMpO1xuXHRcdHRoaXMuUHJvamVjdCA9IGNyZWF0ZVByb2plY3RDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlNwYWNlID0gY3JlYXRlU3BhY2VDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlRhc2sgPSBjcmVhdGVUYXNrQ2xhc3ModGhpcyk7XG5cdFx0dGhpcy5UYXNrVGVtcGxhdGUgPSBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyh0aGlzKTtcblx0XHR0aGlzLlZpZGVvQmF0Y2ggPSBjcmVhdGVWaWRlb0JhdGNoVGFza0NsYXNzKHRoaXMpO1xuXHRcdHRoaXMuV29ya2Zsb3cgPSBjcmVhdGVXb3JrRmxvd0NsYXNzKHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBmZXRjaDxUID0ge30+KFxuXHRcdHVybDogc3RyaW5nLFxuXHRcdG1ldGhvZDogc3RyaW5nLFxuXHRcdGRhdGE/OiBvYmplY3Rcblx0KTogUHJvbWlzZTxUPiB7XG5cdFx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0XHRjb25zdCBjb25maWc6IEZldGNoQ29uZmlnID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jcmVkZW50aWFscy5hY2Nlc3NUb2tlbn1gLFxuXHRcdFx0fSxcblx0XHRcdHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG5cdFx0fTtcblxuXHRcdGlmIChkYXRhICYmIGNvbmZpZy5oZWFkZXJzKSB7XG5cdFx0XHRjb25maWcuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9XG5cdFx0XHRcdFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuXHRcdFx0T2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHRcdHBhcmFtcy5zZXQoa2V5LCBlbmNvZGVWYWx1ZSh2YWx1ZSkpXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25maWcuYm9keSA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKFwiV1JJS0UgUmVxdWVzdDogXCIsIHVybCwgbWV0aG9kLCBjb25maWcuYm9keSwgZGF0YSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgMTAwMDApO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZyk7XG5cdFx0Y29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiR290IFdSSUtFIFJlc3BvbnNlOiBcIiwganNvbik7XG5cblx0XHRpZiAoanNvbi5lcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGpzb24uZXJyb3JEZXNjcmlwdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpzb24gYXMgVDtcblx0fVxuXG5cdGdldDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIHBhcmFtczogb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGAke0Jhc2VVUkx9JHtwYXRofWApO1xuXG5cdFx0T2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIGVuY29kZVZhbHVlKHZhbHVlKSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4odXJsLnRvU3RyaW5nKCksIFwiR0VUXCIpO1xuXHR9XG5cblx0cG9zdDxUID0ge30+KHBhdGg6IHN0cmluZyA9IFwiXCIsIGRhdGE6IG9iamVjdCA9IHt9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2g8VD4oYCR7QmFzZVVSTH0ke3BhdGh9YCwgXCJQT1NUXCIsIGRhdGEpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcblxudHlwZSBDdXN0b21GaWVsZFJhdyA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xufTtcblxudHlwZSBDdXN0b21GaWVsZFJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IEN1c3RvbUZpZWxkUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlQ3VzdG9tRmllbGRDbGFzcyA9IHtcblx0bmV3IChyYXc6IEN1c3RvbUZpZWxkUmF3KTogV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlO1xuXG5cdGZyb21JZHM6IChpZDogc3RyaW5nW10pID0+IFByb21pc2U8V3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUZpZWxkQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlQ3VzdG9tRmllbGRDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZUN1c3RvbUZpZWxkQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8Q3VzdG9tRmllbGRSZXNwb25zZT4oXG5cdFx0XHRcdGBjdXN0b21maWVsZHMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHJhdykgPT4gbmV3IENscyhyYXcpKTtcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgcmF3OiBDdXN0b21GaWVsZFJhdztcblxuXHRcdGNvbnN0cnVjdG9yKHJhdzogQ3VzdG9tRmllbGRSYXcpIHtcblx0XHRcdHRoaXMucmF3ID0gcmF3O1xuXHRcdH1cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXHRcdGdldCB0eXBlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3Py50eXBlO1xuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFByb2plY3RJbmZvUmF3ID0ge1xuXHRvd25lcklkOiBzdHJpbmc7XG59O1xuXG50eXBlIEZvbGRlclJhdyA9IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXc7XG5cdGNoaWxkSWRzPzogc3RyaW5nW107XG5cdHBhcmVudElkcz86IHN0cmluZ1tdOyAvL29ubHkgcHJlc2VudCBpZiB0aGUgZm9sZGVyIGlzIGZldGNoZWQgYnkgaWQuLi5cbn07XG5cbnR5cGUgVHJlZVJlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IEZvbGRlclJhd1tdO1xufTtcblxudHlwZSBGb2xkZXJTYXZlQ29uZmlnID0ge1xuXHRwYXJlbnRGb2xkZXJJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZUZvbGRlckluc3RhbmNlIHtcblx0aWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3O1xuXG5cdHNhdmU6IChjb25maWc6IEZvbGRlclNhdmVDb25maWcpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZT47XG5cblx0Z2V0UGFyZW50Rm9sZGVyOiAoKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRnZXRDaGlsZEZvbGRlcnM6ICgpID0+IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPjtcblx0ZmluZENvbmZpZ0ZvbGRlcjogKG5hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VGb2xkZXJDbGFzcyB7XG5cdG5ldyAocmF3OiBGb2xkZXJSYXcpOiBXcmlrZUZvbGRlckluc3RhbmNlO1xuXG5cdGZyb21TcGFjZTogKFxuXHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT5cblx0KSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21JRHM6IChpZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT47XG5cdGZyb21QZXJtYUxpbms6IChpZDogc3RyaW5nKSA9PiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+O1xuXHRjcmVhdGU6IChcblx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0cHJvamVjdD86IFByb2plY3RJbmZvUmF3XG5cdCkgPT4gUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNsYXNzKGNsaWVudDogV3Jpa2VDbGllbnQpOiBXcmlrZUZvbGRlckNsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlRm9sZGVyQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VGb2xkZXJJbnN0YW5jZSB7XG5cdFx0c3RhdGljIGFzeW5jIGZyb21TcGFjZShcblx0XHRcdHNwYWNlSWQ6IHN0cmluZyxcblx0XHRcdHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PlxuXHRcdCk6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFxuXHRcdFx0XHRgL3NwYWNlcy8ke3NwYWNlSWR9L2ZvbGRlcnNgLFxuXHRcdFx0XHRwYXJhbXNcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiByZXNwLmRhdGEubWFwKChyKSA9PiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQocikpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tSURzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2VbXT4ge1xuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5nZXQ8VHJlZVJlc3BvbnNlPihcblx0XHRcdFx0YGZvbGRlcnMvJHtpZHMuam9pbihcIixcIil9YFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZUZvbGRlckNsaWVudChyKSk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGFzeW5jIGZyb21QZXJtYUxpbmsobGluazogc3RyaW5nKTogUHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0cmVlID0gYXdhaXQgY2xpZW50LmdldDxUcmVlUmVzcG9uc2U+KFwiZm9sZGVyc1wiLCB7XG5cdFx0XHRcdHBlcm1hbGluazogbGluayxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBmb2xkZXIgPSB0cmVlLmRhdGFbMF07XG5cblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoZm9sZGVyKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgY3JlYXRlKFxuXHRcdFx0dGl0bGU6IHN0cmluZyxcblx0XHRcdGRlc2NyaXB0aW9uOiBzdHJpbmcsXG5cdFx0XHRwcm9qZWN0PzogUHJvamVjdEluZm9SYXdcblx0XHQpOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHtcblx0XHRcdHJldHVybiBuZXcgV3Jpa2VGb2xkZXJDbGllbnQoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QgfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IEZvbGRlclJhdykge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5pZDtcblx0XHR9XG5cdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnRpdGxlO1xuXHRcdH1cblx0XHRnZXQgZGVzY3JpcHRpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuZGVzY3JpcHRpb247XG5cdFx0fVxuXHRcdGdldCBwcm9qZWN0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnByb2plY3Q7XG5cdFx0fVxuXHRcdGdldCBjaGlsZElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5jaGlsZElkcztcblx0XHR9XG5cdFx0Z2V0IHBhcmVudElkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5wYXJlbnRJZHM7XG5cdFx0fVxuXG5cdFx0YXN5bmMgc2F2ZShjb25maWc6IEZvbGRlclNhdmVDb25maWcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucG9zdDxGb2xkZXJSYXc+KFxuXHRcdFx0XHRgZm9sZGVyLyR7Y29uZmlnLnBhcmVudEZvbGRlcklkfS9mb2xkZXJzYCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uID8/IFwiXCIsXG5cdFx0XHRcdFx0cHJvamVjdDogdGhpcy5wcm9qZWN0ID8/IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnJhdyA9IHJlc3A7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcGFyZW50Rm9sZGVyOiBQcm9taXNlPFdyaWtlRm9sZGVySW5zdGFuY2U+IHwgdW5kZWZpbmVkO1xuXHRcdGFzeW5jIGdldFBhcmVudEZvbGRlcigpIHtcblx0XHRcdGNvbnN0IGxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5wYXJlbnRJZHMgfHwgdGhpcy5wYXJlbnRJZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGdldCBwYXJlbnRcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LkZvbGRlci5mcm9tSURzKFt0aGlzLnBhcmVudElkc1swXV0pO1xuXG5cdFx0XHRcdHJldHVybiByZXNwWzBdO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5wYXJlbnRGb2xkZXIgPSB0aGlzLnBhcmVudEZvbGRlciA/PyBsb2FkKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnRGb2xkZXI7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjaGlsZEZvbGRlcnM6IFByb21pc2U8V3Jpa2VGb2xkZXJJbnN0YW5jZVtdPiB8IHVuZGVmaW5lZDtcblx0XHRhc3luYyBnZXRDaGlsZEZvbGRlcnMoKSB7XG5cdFx0XHRjb25zdCBsb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hpbGRJZHMpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IHN1YiBmb2xkZXJzXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGNsaWVudC5Gb2xkZXIuZnJvbUlEcyh0aGlzLmNoaWxkSWRzKTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuY2hpbGRGb2xkZXJzID0gdGhpcy5jaGlsZEZvbGRlcnMgPz8gbG9hZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGRGb2xkZXJzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgY29uZmlnRm9sZGVyQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0UHJvbWlzZTxXcmlrZUZvbGRlckluc3RhbmNlIHwgbnVsbD5cblx0XHQ+KCk7XG5cdFx0Ly9Mb29rIGZvciBhIGZvbGRlciB0aGF0IGlzIGEgZGlyZWN0IGNoaWxkIG9mIHRoaXMgZm9sZGVyLCBpZiBpdHMgbm90IHRoZXJlIHN0YXJ0IGxvb2tpbmcgdXAgXlxuXHRcdGFzeW5jIGZpbmRDb25maWdGb2xkZXIobmFtZTogc3RyaW5nKSB7XG5cdFx0XHRjb25zdCBmaW5kID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IGF3YWl0IHRoaXMuZ2V0Q2hpbGRGb2xkZXJzKCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoY2hpbGQudGl0bGUgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjaGlsZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBwYXJlbnQgPSBhd2FpdCB0aGlzLmdldFBhcmVudEZvbGRlcigpO1xuXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuZmluZENvbmZpZ0ZvbGRlcihuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghdGhpcy5jb25maWdGb2xkZXJDYWNoZS5oYXMobmFtZSkpIHtcblx0XHRcdFx0dGhpcy5jb25maWdGb2xkZXJDYWNoZS5zZXQobmFtZSwgZmluZCgpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZm9sZGVyID0gYXdhaXQgdGhpcy5jb25maWdGb2xkZXJDYWNoZS5nZXQobmFtZSk7XG5cblx0XHRcdHJldHVybiBmb2xkZXIgPz8gbnVsbDtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlVGFza1RlbXBsYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrVGVtcGxhdGUuc2VydmVyXCI7XG5cbnR5cGUgQ1NWUm93ID0geyB0ZW1wbGF0ZTogc3RyaW5nIH0gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIFByb2plY3RSYXcgPSB7XG5cdGlkPzogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VQcm9qZWN0SW5zdGFuY2UgPSB7XG5cdGltcG9ydENTVihcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpOiBQcm9taXNlPFdyaWtlUHJvamVjdEluc3RhbmNlPjtcbn07XG5cbmV4cG9ydCB0eXBlIFdyaWtlUHJvamVjdENsYXNzID0ge1xuXHRuZXcgKHJhdzogUHJvamVjdFJhdywgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZSk6IFdyaWtlUHJvamVjdEluc3RhbmNlO1xuXG5cdGNyZWF0ZSh0aXRsZTogc3RyaW5nLCBwYXJlbnQ6IFdyaWtlRm9sZGVySW5zdGFuY2UpOiBXcmlrZVByb2plY3RJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlUHJvamVjdENsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlUHJvamVjdENsaWVudCBpbXBsZW1lbnRzIFdyaWtlUHJvamVjdEluc3RhbmNlIHtcblx0XHRzdGF0aWMgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIHBhcmVudDogV3Jpa2VGb2xkZXJJbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RDbGllbnQoeyB0aXRsZSB9LCBwYXJlbnQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlIHJhdzogUHJvamVjdFJhdyxcblx0XHRcdHByaXZhdGUgcGFyZW50PzogV3Jpa2VGb2xkZXJJbnN0YW5jZVxuXHRcdCkge31cblxuXHRcdGdldCBpZCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8uaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdz8udGl0bGU7XG5cdFx0fVxuXG5cdFx0YXN5bmMgaW1wb3J0Q1NWKFxuXHRcdFx0ZmlsZTogRmlsZSxcblx0XHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHRcdCk6IFByb21pc2U8V3Jpa2VQcm9qZWN0Q2xpZW50PiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNzdi5wYXJzZVN0cmluZyh0ZXh0LCBvcHRpb25zKVxuXHRcdFx0XHRcdC5vbihcImVycm9yXCIsIChlcnIpID0+IHJlamVjdChlcnIpKVxuXHRcdFx0XHRcdC5vbihcImRhdGFcIiwgKHJvdzogQ1NWUm93KSA9PiB0aGlzLnZpZGVvcy5wdXNoKHJvdykpXG5cdFx0XHRcdFx0Lm9uKFwiZW5kXCIsICgpID0+IGZ1bGZpbGwodGhpcykpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoKSA6IHRoaXMuY3JlYXRlKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB1cGRhdGUoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdXBkYXRlIFByb2plY3RzIChub3QgaW1wbGVtZW50ZWQpXCIpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYXN5bmMgY3JlYXRlKCkge1xuXHRcdFx0aWYgKCFjbGllbnQudXNlcklkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgaWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5wYXJlbnQ/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHBhcmVudCBpZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVGb2xkZXIgPSBhd2FpdCB0aGlzLnBhcmVudD8uZmluZENvbmZpZ0ZvbGRlcihcblx0XHRcdFx0XCJ0ZW1wbGF0ZXNcIlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF0ZW1wbGF0ZUZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmluZCB0ZW1wbGF0ZSBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgTWFwPFxuXHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFByb21pc2U8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT5cblx0XHRcdD4oKTtcblx0XHRcdGNvbnN0IGZpbmRUZW1wbGF0ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKCF0ZW1wbGF0ZUNhY2hlLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRcdHRlbXBsYXRlQ2FjaGUuc2V0KFxuXHRcdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRcdGNsaWVudC5UYXNrVGVtcGxhdGUuZnJvbVRpdGxlKG5hbWUsIHRlbXBsYXRlRm9sZGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGVDYWNoZS5nZXQobmFtZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gYXdhaXQgY2xpZW50LkZvbGRlci5jcmVhdGUodGhpcy50aXRsZSwgXCJcIiwge1xuXHRcdFx0XHRvd25lcklkOiBjbGllbnQudXNlcklkLFxuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IHByb2plY3Quc2F2ZSh7IHBhcmVudEZvbGRlcklkOiB0aGlzLnBhcmVudC5pZCB9KTtcblxuXHRcdFx0Zm9yIChsZXQgdmlkZW8gb2YgdGhpcy52aWRlb3MucmV2ZXJzZSgpKSB7XG5cdFx0XHRcdGNvbnN0IHsgdGVtcGxhdGU6IHRlbXBsYXRlTmFtZSwgLi4ucHJvcGVydGllcyB9ID0gdmlkZW87XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZmluZFRlbXBsYXRlKHRlbXBsYXRlTmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgdGFzayA9IGF3YWl0IHRlbXBsYXRlPy5jbG9uZShwcm9wZXJ0aWVzKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyOiBwcm9qZWN0IH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFNwYWNlUmF3ID0ge1xuXHRpZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xufTtcblxudHlwZSBTcGFjZVJlc3BvbnNlID0ge1xuXHR0eXBlOiBzdHJpbmc7XG5cdGRhdGE6IFNwYWNlUmF3W107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVNwYWNlQ2xhc3MgPSB7XG5cdG5ldyAocmF3OiBTcGFjZVJhdyk6IFdyaWtlU3BhY2VJbnN0YW5jZTtcblxuXHRnZXRBbGw6ICgpID0+IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNlQ2xhc3MoY2xpZW50OiBXcmlrZUNsaWVudCk6IFdyaWtlU3BhY2VDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVNwYWNlQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VTcGFjZUluc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8V3Jpa2VTcGFjZUluc3RhbmNlW10+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFNwYWNlUmVzcG9uc2U+KFwiL3NwYWNlc1wiKTtcblxuXHRcdFx0cmV0dXJuIHJlc3AuZGF0YS5tYXAoKHIpID0+IG5ldyBXcmlrZVNwYWNlQ2xpZW50KHIpKTtcblx0XHR9XG5cblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJhdzogU3BhY2VSYXcpIHt9XG5cblx0XHRnZXQgaWQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXHRcdGdldCB0aXRsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy50aXRsZTtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcblxuY29uc3QgU2F2ZUJsYWNrTGlzdCA9IFtcblx0XCJhY2NvdW50SWRcIixcblx0XCJjcmVhdGVkRGF0ZVwiLFxuXHRcInVwZGF0ZWREYXRlXCIsXG5cdFwicGVybWFsaW5rXCIsXG5cdFwic2NvcGVcIixcblx0XCJwcmlvcml0eVwiLFxuXHRcImRhdGVzXCIsXG5dO1xuXG50eXBlIEN1c3RvbUZpZWxkSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHZhbHVlOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBUYXNrUmF3ID0ge1xuXHRpZD86IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0dGl0bGU6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdHBhcmVudHM/OiBzdHJpbmdbXTtcblx0cGFyZW50SWRzPzogc3RyaW5nW107XG5cdHN1cGVyVGFza3M/OiBzdHJpbmdbXTtcblx0c3VwZXJUYXNrSWRzPzogc3RyaW5nW107XG5cdHN1YlRhc2tJZHM/OiBzdHJpbmdbXTtcblx0YWNjb3VudElkPzogc3RyaW5nW107XG5cdGNyZWF0ZWREYXRlPzogc3RyaW5nO1xuXHR1cGRhdGVkRGF0ZT86IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzSWQ/OiBzdHJpbmc7XG5cdHBlcm1hbGluaz86IHN0cmluZztcblx0c2NvcGU/OiBzdHJpbmc7XG5cdHByaW9yaXR5Pzogc3RyaW5nO1xuXHRkYXRlcz86IGFueTtcblx0ZWZmb3J0QWxsb2NhdGlvbj86IGFueTtcblx0YmlsbGluZ1R5cGU/OiBhbnk7XG5cdGZpbmFuY2U/OiBhbnk7XG5cdHNoYXJlZElkcz86IGFueTtcblx0cmVzcG9uc2libGVJZHM/OiBhbnk7XG5cdGN1c3RvbUZpZWxkcz86IEN1c3RvbUZpZWxkSW5zdGFuY2VbXTtcbn0gJiB7fTtcblxuZXhwb3J0IHR5cGUgVGFza1Jlc3BvbnNlID0ge1xuXHRraW5kOiBzdHJpbmc7XG5cdGRhdGE6IFRhc2tSYXdbXTtcbn07XG5cbnR5cGUgVGFza1NhdmVDb25maWcgPSB7XG5cdGZvbGRlcj86IFdyaWtlRm9sZGVySW5zdGFuY2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdyaWtlVGFza0luc3RhbmNlIHtcblx0cmF3OiBUYXNrUmF3IHwgdW5kZWZpbmVkO1xuXHRpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRwYXJlbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuXHRhZGRTdWJUYXNrczogKHRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdKSA9PiB2b2lkO1xuXHRzZXRTdXBlclRhc2s6ICh0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSkgPT4gdm9pZDtcblxuXHRnZXRTYXZlRGF0YTogKCkgPT4gVGFza1JhdztcblxuXHRzYXZlOiAoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tDbGFzczxUID0gV3Jpa2VUYXNrSW5zdGFuY2U+IHtcblx0bmV3ICh0YXNrOiBUYXNrUmF3KTogVDtcblxuXHRmcm9tUGVybWFMaW5rOiAobGluazogc3RyaW5nKSA9PiBQcm9taXNlPFQ+O1xuXG5cdGZyb21UaXRsZTogKHRpdGxlOiBzdHJpbmcsIGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSkgPT4gUHJvbWlzZTxUPjtcblxuXHRmcm9tUmF3OiAodGFzazogVGFza1JhdykgPT4gVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VUYXNrQ2xhc3Mge1xuXHRyZXR1cm4gY2xhc3MgV3Jpa2VUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VUYXNrSW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tUGVybWFMaW5rPFxuXHRcdFx0VCBleHRlbmRzIHR5cGVvZiBXcmlrZVRhc2tDbGllbnQgPSB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50XG5cdFx0Pih0aGlzOiBULCBwZXJtYWxpbms6IHN0cmluZyk6IFByb21pc2U8SW5zdGFuY2VUeXBlPFQ+PiB7XG5cdFx0XHRjb25zdCByYXcgPSBhd2FpdCByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluaywgY2xpZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyYXcpO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGU8XG5cdFx0XHRUIGV4dGVuZHMgdHlwZW9mIFdyaWtlVGFza0NsaWVudCA9IHR5cGVvZiBXcmlrZVRhc2tDbGllbnRcblx0XHQ+KFxuXHRcdFx0dGhpczogVCxcblx0XHRcdHRpdGxlOiBzdHJpbmcsXG5cdFx0XHRmb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2Vcblx0XHQpOiBQcm9taXNlPEluc3RhbmNlVHlwZTxUPj4ge1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbVRpdGxlKHRpdGxlLCBmb2xkZXIsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzLmZyb21SYXcocmF3KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVJhdzxcblx0XHRcdFQgZXh0ZW5kcyB0eXBlb2YgV3Jpa2VUYXNrQ2xpZW50ID0gdHlwZW9mIFdyaWtlVGFza0NsaWVudFxuXHRcdD4odGhpczogVCwgdGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVRhc2tDbGllbnQodGFzaykgYXMgSW5zdGFuY2VUeXBlPFQ+O1xuXHRcdH1cblxuXHRcdHJhdzogVGFza1JhdztcblxuXHRcdHByaXZhdGUgc3VwZXJUYXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB8IHVuZGVmaW5lZDtcblx0XHRwcml2YXRlIHN1YlRhc2tzOiBXcmlrZVRhc2tJbnN0YW5jZVtdID0gW107XG5cblx0XHRjb25zdHJ1Y3Rvcih0YXNrOiBUYXNrUmF3KSB7XG5cdFx0XHR0aGlzLnJhdyA9IHRhc2s7XG5cdFx0fVxuXG5cdFx0Z2V0IGlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuaWQ7XG5cdFx0fVxuXG5cdFx0Z2V0IHRpdGxlKCk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcudGl0bGU7XG5cdFx0fVxuXG5cdFx0Z2V0IHBhcmVudHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LnBhcmVudElkcztcblx0XHR9XG5cblx0XHRhZGRTdWJUYXNrcyh0YXNrczogV3Jpa2VUYXNrSW5zdGFuY2VbXSkge1xuXHRcdFx0dGFza3MuZm9yRWFjaCgodCkgPT4gdC5zZXRTdXBlclRhc2sodGhpcykpO1xuXG5cdFx0XHR0aGlzLnN1YlRhc2tzID0gWy4uLnRoaXMuc3ViVGFza3MsIC4uLnRhc2tzXTtcblx0XHR9XG5cblx0XHRzZXRTdXBlclRhc2sodGFzazogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdHRoaXMuc3VwZXJUYXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRnZXRTYXZlRGF0YSgpOiBUYXNrUmF3IHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIHBhcmVudHMsIC4uLmV4dHJhRGF0YSB9ID0gdGhpcy5yYXc7XG5cdFx0XHRjb25zdCBkYXRhID0geyAuLi5leHRyYURhdGEgfSBhcyBUYXNrUmF3O1xuXG5cdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0ZGF0YS50aXRsZSA9IHRpdGxlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFyZW50cykge1xuXHRcdFx0XHRkYXRhLnBhcmVudHMgPSBwYXJlbnRzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zdXBlclRhc2s/LmlkKSB7XG5cdFx0XHRcdGRhdGEuc3VwZXJUYXNrcyA9IFt0aGlzLnN1cGVyVGFzay5pZF07XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHByb3Agb2YgU2F2ZUJsYWNrTGlzdCkge1xuXHRcdFx0XHRkZWxldGUgZGF0YVtwcm9wIGFzIGtleW9mIFRhc2tSYXddO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHRhc3luYyBzYXZlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHJldHVybiB0aGlzLmlkID8gdGhpcy51cGRhdGUoY29uZmlnKSA6IHRoaXMuY3JlYXRlKGNvbmZpZyk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBhc3luYyBjcmVhdGUoY29uZmlnOiBUYXNrU2F2ZUNvbmZpZykge1xuXHRcdFx0Y29uc3QgeyBmb2xkZXIgfSA9IGNvbmZpZztcblxuXHRcdFx0aWYgKCFmb2xkZXI/LmlkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGUgYSBsb2NhdGlvbiB0byBzYXZlIGEgbmV3IHRhc2sgdG8uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHQuLi50aGlzLmdldFNhdmVEYXRhKCksXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoZm9sZGVyPy5pZCkge1xuXHRcdFx0XHRwYXlsb2FkLnBhcmVudHMgPSBbZm9sZGVyLmlkXTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5wb3N0PFRhc2tSZXNwb25zZT4oXG5cdFx0XHRcdGBmb2xkZXJzLyR7Zm9sZGVyLmlkfS90YXNrc2AsXG5cdFx0XHRcdGZpeFBheWxvYWQocGF5bG9hZCBhcyB7fSlcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHRhc2sgPSByZXNwLmRhdGFbMF07XG5cblx0XHRcdHRoaXMucmF3ID0gdGFzaztcblxuXHRcdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgU3ViIFRhc2tzOiBcIiwgdGhpcy5zdWJUYXNrcy5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgc3ViVGFzayBvZiB0aGlzLnN1YlRhc2tzKSB7XG5cdFx0XHRcdGF3YWl0IHN1YlRhc2suc2F2ZShjb25maWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgdXBkYXRlKGNvbmZpZzogVGFza1NhdmVDb25maWcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1cGRhdGUgdGFza3NcIik7XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBQYXlsb2FkS2V5TWFwID0ge1xuXHRzaGFyZWRJZHM6IFwic2hhcmVkc1wiLFxuXHRyZXNwb25zaWJsZUlkczogXCJyZXNwb25zaWJsZXNcIixcblx0Y3VzdG9tU3RhdHVzSWQ6IFwiY3VzdG9tU3RhdHVzXCIsXG59O1xuXG5mdW5jdGlvbiBmaXhQYXlsb2FkKHBheWxvYWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcblx0Y29uc3QgbmV3UGF5bG9hZCA9IHsgLi4ucGF5bG9hZCB9O1xuXG5cdGZvciAobGV0IFtrZXksIGZpeF0gb2YgT2JqZWN0LmVudHJpZXMoUGF5bG9hZEtleU1hcCkpIHtcblx0XHRpZiAobmV3UGF5bG9hZFtrZXldKSB7XG5cdFx0XHRuZXdQYXlsb2FkW2ZpeF0gPSBuZXdQYXlsb2FkW2tleV07XG5cdFx0XHRkZWxldGUgbmV3UGF5bG9hZFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdQYXlsb2FkO1xufVxuXG5jb25zdCBGaWVsZHMgPSBbXG5cdFwicGFyZW50SWRzXCIsXG5cdFwiZGVzY3JpcHRpb25cIixcblx0XCJjdXN0b21GaWVsZHNcIixcblx0XCJzaGFyZWRJZHNcIixcblx0XCJyZXNwb25zaWJsZUlkc1wiLFxuXHRcInN1YlRhc2tJZHNcIixcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tUGVybWFMaW5rKHBlcm1hbGluazogc3RyaW5nLCBjbGllbnQ6IFdyaWtlQ2xpZW50KSB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzYCwge1xuXHRcdHBlcm1hbGluayxcblx0XHRmaWVsZHM6IEZpZWxkcyxcblx0fSk7XG5cblx0cmV0dXJuIHJlc3AuZGF0YVswXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhd0Zyb21JZHMoXG5cdGlkczogc3RyaW5nW10sXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFByb21pc2U8VGFza1Jhd1tdPiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYHRhc2tzLyR7aWRzLmpvaW4oXCIsXCIpfWApO1xuXG5cdHJldHVybiByZXNwLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXdGcm9tVGl0bGUoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdGZvbGRlcjogV3Jpa2VGb2xkZXJJbnN0YW5jZSxcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogUHJvbWlzZTxUYXNrUmF3PiB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oYGZvbGRlcnMvJHtmb2xkZXIuaWR9L3Rhc2tzYCwge1xuXHRcdHRpdGxlLFxuXHRcdGZpZWxkczogRmllbGRzLFxuXHR9KTtcblxuXHRpZiAocmVzcC5kYXRhLmxlbmd0aCA+IDEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3VuZCBtdWx0aXBsZSB0YXNrc1wiKTtcblx0fVxuXG5cdHJldHVybiByZXNwLmRhdGFbMF07XG59XG4iLCAiaW1wb3J0IE11c3RhY2hlIGZyb20gXCJtdXN0YWNoZVwiO1xuXG5pbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDdXN0b21GaWVsZEluc3RhbmNlIH0gZnJvbSBcIi4vQ3VzdG9tRmllbGQuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFdyaWtlRm9sZGVySW5zdGFuY2UgfSBmcm9tIFwiLi9Gb2xkZXIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7XG5cdFdyaWtlVGFza0NsYXNzLFxuXHRXcmlrZVRhc2tJbnN0YW5jZSxcblx0VGFza1Jhdyxcblx0VGFza1Jlc3BvbnNlLFxufSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5pbXBvcnQgeyByYXdGcm9tVGl0bGUsIHJhd0Zyb21JZHMgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBDbG9uZURhdGEgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG50eXBlIEN1c3RvbUZpZWxkVGVtcGxhdGUgPSB7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdGRlZmluaXRpb246IFdyaWtlQ3VzdG9tRmllbGRJbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZSBleHRlbmRzIFdyaWtlVGFza0luc3RhbmNlIHtcblx0Y2xvbmU6IChcblx0XHRkYXRhOiBDbG9uZURhdGEsXG5cdFx0cGFyZW50PzogV3Jpa2VUYXNrSW5zdGFuY2Vcblx0KSA9PiBQcm9taXNlPFdyaWtlVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVRhc2tUZW1wbGF0ZUNsYXNzXG5cdGV4dGVuZHMgV3Jpa2VUYXNrQ2xhc3M8V3Jpa2VUYXNrVGVtcGxhdGVJbnN0YW5jZT4ge31cblxuZnVuY3Rpb24gZmlsbEluVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGF0YTogQ2xvbmVEYXRhKTogc3RyaW5nIHtcblx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0cmV0dXJuIE11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVGVtcGxhdGVDbGFzcyhcblx0Y2xpZW50OiBXcmlrZUNsaWVudFxuKTogV3Jpa2VUYXNrVGVtcGxhdGVDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBUYXNrVGVtcGxhdGVDbGllbnRcblx0XHRleHRlbmRzIGNsaWVudC5UYXNrXG5cdFx0aW1wbGVtZW50cyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlXG5cdHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbUlkcyhpZHM6IHN0cmluZ1tdKSB7XG5cdFx0XHRjb25zdCBDbHMgPSB0aGlzO1xuXHRcdFx0Y29uc3QgcmF3ID0gYXdhaXQgcmF3RnJvbUlkcyhpZHMsIGNsaWVudCk7XG5cblx0XHRcdHJldHVybiByYXcubWFwKChyKSA9PiBuZXcgQ2xzKHIpKTtcblx0XHR9XG5cblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdHBlcm1hbGluazogc3RyaW5nXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFRhc2tSZXNwb25zZT4oXCIvdGFza3NcIiwge1xuXHRcdFx0XHRwZXJtYWxpbmssXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVJhdyhyZXNwLmRhdGFbMF0pO1xuXHRcdH1cblxuXHRcdHN0YXRpYyBhc3luYyBmcm9tVGl0bGUoXG5cdFx0XHR0aXRsZTogc3RyaW5nLFxuXHRcdFx0Zm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlXG5cdFx0KTogUHJvbWlzZTxUYXNrVGVtcGxhdGVDbGllbnQ+IHtcblx0XHRcdGNvbnN0IHJhdyA9IGF3YWl0IHJhd0Zyb21UaXRsZSh0aXRsZSwgZm9sZGVyLCBjbGllbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tUmF3KHJhdyk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21SYXcodGFzazogVGFza1Jhdykge1xuXHRcdFx0cmV0dXJuIG5ldyBUYXNrVGVtcGxhdGVDbGllbnQodGFzayk7XG5cdFx0fVxuXG5cdFx0VGVtcGxhdGVGaWVsZHM6IChrZXlvZiBUYXNrUmF3KVtdID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiXTtcblx0XHRMaXRlcmFsRmllbGRzOiAoa2V5b2YgVGFza1JhdylbXSA9IFtcblx0XHRcdFwic2hhcmVkSWRzXCIsXG5cdFx0XHRcInJlc3BvbnNpYmxlSWRzXCIsXG5cdFx0XHRcImN1c3RvbVN0YXR1c0lkXCIsXG5cdFx0XTtcblxuXHRcdGFzeW5jIGNsb25lKGRhdGE6IENsb25lRGF0YSwgc3VwZXJUYXNrPzogV3Jpa2VUYXNrSW5zdGFuY2UpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmF3ID0gdGhpcy5yYXcgPz8gKHt9IGFzIFRhc2tSYXcpO1xuXG5cdFx0XHRjb25zdCB0YXNrUmF3ID0ge30gYXMgVGFza1Jhdztcblx0XHRcdGNvbnN0IHNldCA9IChrZXk6IGtleW9mIFRhc2tSYXcsIHZhbDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHR0YXNrUmF3W2tleV0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PlxuXHRcdFx0XHRzZXQoa2V5LCBkYXRhW2tleV0gPz8gZmlsbEluVGVtcGxhdGUodGVtcGxhdGVSYXdba2V5XSwgZGF0YSkpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdFwiU2V0dGluZyBMaXRlcmFsIEZpZWxkOiBcIixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0ZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV1cblx0XHRcdFx0KTtcblx0XHRcdFx0c2V0KGtleSwgZGF0YVtrZXldID8/IHRlbXBsYXRlUmF3W2tleV0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChkYXRhLnRpdGxlUHJlZml4KSB7XG5cdFx0XHRcdHRhc2tSYXcudGl0bGUgPSBgJHtkYXRhLnRpdGxlUHJlZml4fSAke3Rhc2tSYXcudGl0bGV9YDtcblx0XHRcdH1cblxuXHRcdFx0dGFza1Jhdy50aXRsZSA9IHRhc2tSYXcudGl0bGVcblx0XHRcdFx0LnJlcGxhY2UoXCJURU1QTEFURVwiLCBcIlwiKVxuXHRcdFx0XHQucmVwbGFjZSgvXFwgXFwgLywgXCIgXCIpO1xuXG5cdFx0XHRjb25zdCBjdXN0b21GaWVsZHMgPSAoYXdhaXQgdGhpcy5nZXRDdXN0b21GaWVsZHMoKSkgPz8ge307XG5cblx0XHRcdGZvciAobGV0IFtuYW1lLCBmaWVsZF0gb2YgT2JqZWN0LmVudHJpZXMoY3VzdG9tRmllbGRzKSkge1xuXHRcdFx0XHR0YXNrUmF3LmN1c3RvbUZpZWxkcyA9IFtcblx0XHRcdFx0XHQuLi4odGFza1Jhdy5jdXN0b21GaWVsZHMgPz8gW10pLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlkOiBmaWVsZC5kZWZpbml0aW9uLmlkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbbmFtZV0gPz8gZmllbGQudmFsdWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGFzayA9IGNsaWVudC5UYXNrLmZyb21SYXcodGFza1Jhdyk7XG5cblx0XHRcdGlmIChzdXBlclRhc2spIHtcblx0XHRcdFx0dGFzay5zZXRTdXBlclRhc2soc3VwZXJUYXNrKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3ViVGFza1RlbXBsYXRlcyA9ICF0ZW1wbGF0ZVJhdy5zdWJUYXNrSWRzPy5sZW5ndGhcblx0XHRcdFx0PyBbXVxuXHRcdFx0XHQ6IGF3YWl0IFRhc2tUZW1wbGF0ZUNsaWVudC5mcm9tSWRzKHRlbXBsYXRlUmF3LnN1YlRhc2tJZHMpO1xuXG5cdFx0XHRjb25zdCBjbG9uZURhdGEgPSB7XG5cdFx0XHRcdC4uLmRhdGEsXG5cdFx0XHRcdHRpdGxlUHJlZml4OiB0YXNrUmF3LnRpdGxlLFxuXHRcdFx0fSBhcyBDbG9uZURhdGE7XG5cblx0XHRcdHRoaXMuVGVtcGxhdGVGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cdFx0XHR0aGlzLkxpdGVyYWxGaWVsZHMuZm9yRWFjaCgoaykgPT4gZGVsZXRlIGNsb25lRGF0YVtrXSk7XG5cblx0XHRcdGNvbnN0IHN1YlRhc2tzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRcdHN1YlRhc2tUZW1wbGF0ZXMubWFwKChzKSA9PiBzLmNsb25lKGNsb25lRGF0YSwgdGFzaykpXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXNrLmFkZFN1YlRhc2tzKHN1YlRhc2tzKTtcblxuXHRcdFx0cmV0dXJuIHRhc2s7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBDdXN0b21GaWVsZHNMb2FkZXI6XG5cdFx0XHR8IFByb21pc2U8UmVjb3JkPHN0cmluZywgQ3VzdG9tRmllbGRUZW1wbGF0ZT4gfCBudWxsPlxuXHRcdFx0fCB1bmRlZmluZWQ7XG5cdFx0Ly9UT0RPOiBjYWNoZSB0aGlzIHJldHVyblxuXHRcdHByaXZhdGUgYXN5bmMgZ2V0Q3VzdG9tRmllbGRzKCk6IFByb21pc2U8UmVjb3JkPFxuXHRcdFx0c3RyaW5nLFxuXHRcdFx0eyB2YWx1ZTogc3RyaW5nOyBkZWZpbml0aW9uOiBXcmlrZUN1c3RvbUZpZWxkSW5zdGFuY2UgfVxuXHRcdD4gfCBudWxsPiB7XG5cdFx0XHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgY3VzdG9tRmllbGRzIH0gPSB0aGlzLnJhdyA/PyB7fTtcblxuXHRcdFx0XHRpZiAoIWN1c3RvbUZpZWxkcyB8fCBjdXN0b21GaWVsZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgQ3VzdG9tIEZpZWxkczogXCIsIGN1c3RvbUZpZWxkcyk7XG5cblx0XHRcdFx0Y29uc3QgZmllbGRzID0gYXdhaXQgY2xpZW50LkN1c3RvbUZpZWxkLmZyb21JZHMoXG5cdFx0XHRcdFx0Y3VzdG9tRmllbGRzLm1hcCgoYykgPT4gYy5pZClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gZmllbGRzLnJlZHVjZSgoYWNjLCBmaWVsZCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3VzdG9tRmllbGRzLmZpbmQoXG5cdFx0XHRcdFx0XHQoYykgPT4gYy5pZCA9PT0gZmllbGQuaWRcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnR5cGUgIT09IFwic3RyaW5nXCIgfHwgIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5hY2MsXG5cdFx0XHRcdFx0XHRbZmllbGQudGl0bGVdOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBpbnN0YW5jZS52YWx1ZSxcblx0XHRcdFx0XHRcdFx0ZGVmaW5pdGlvbjogZmllbGQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sIHt9KTtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuQ3VzdG9tRmllbGRzTG9hZGVyID0gdGhpcy5DdXN0b21GaWVsZHNMb2FkZXIgPz8gbG9hZGVyKCk7XG5cblx0XHRcdHJldHVybiB0aGlzLkN1c3RvbUZpZWxkc0xvYWRlcjtcblx0XHR9XG5cdH07XG59XG4iLCAiaW1wb3J0ICogYXMgY3N2IGZyb20gXCJAZmFzdC1jc3YvcGFyc2VcIjtcblxuaW1wb3J0IHR5cGUgeyBXcmlrZUNsaWVudCB9IGZyb20gXCIuL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VGb2xkZXJJbnN0YW5jZSB9IGZyb20gXCIuL0ZvbGRlci5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgV3Jpa2VUYXNrSW5zdGFuY2UgfSBmcm9tIFwiLi9UYXNrLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSBcIi4vVGFza1RlbXBsYXRlLnNlcnZlclwiO1xuXG50eXBlIENTVlJvdyA9IHsgdGVtcGxhdGU6IHN0cmluZyB9ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxudHlwZSBWaWRlb0JhdGNoU2F2ZUNvbmZpZyA9IHtcblx0dGVtcGxhdGVGb2xkZXI6IFdyaWtlRm9sZGVySW5zdGFuY2U7XG5cdGxvY2F0aW9uRm9sZGVyOiBXcmlrZUZvbGRlckluc3RhbmNlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrSW5zdGFuY2Uge1xuXHRpbXBvcnRDU1Y6IChcblx0XHRmaWxlOiBGaWxlLFxuXHRcdG9wdGlvbnM6IGNzdi5QYXJzZXJPcHRpb25zQXJnc1xuXHQpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcblxuXHRzYXZlOiAoY29uZmlnOiBWaWRlb0JhdGNoU2F2ZUNvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXcmlrZVZpZGVvQmF0Y2hUYXNrQ2xhc3Mge1xuXHRuZXcgKGNvbmZpZzogeyB0YXNrOiBXcmlrZVRhc2tJbnN0YW5jZSB9KTogV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlO1xuXG5cdGZyb21QZXJtYUxpbms6IChsaW5rOiBzdHJpbmcpID0+IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZGVvQmF0Y2hUYXNrQ2xhc3MoXG5cdGNsaWVudDogV3Jpa2VDbGllbnRcbik6IFdyaWtlVmlkZW9CYXRjaFRhc2tDbGFzcyB7XG5cdHJldHVybiBjbGFzcyBXcmlrZVByb2plY3RUYXNrQ2xpZW50IGltcGxlbWVudHMgV3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlIHtcblx0XHRzdGF0aWMgYXN5bmMgZnJvbVBlcm1hTGluayhcblx0XHRcdGxpbms6IHN0cmluZ1xuXHRcdCk6IFByb21pc2U8V3Jpa2VWaWRlb0JhdGNoVGFza0luc3RhbmNlPiB7XG5cdFx0XHRjb25zdCB0YXNrID0gYXdhaXQgY2xpZW50LlRhc2suZnJvbVBlcm1hTGluayhsaW5rKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVByb2plY3RUYXNrQ2xpZW50KHsgdGFzayB9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHRhc2s6IFdyaWtlVGFza0luc3RhbmNlO1xuXHRcdHByaXZhdGUgdmlkZW9zOiBDU1ZSb3dbXSA9IFtdO1xuXG5cdFx0Y29uc3RydWN0b3IoeyB0YXNrIH06IHsgdGFzazogV3Jpa2VUYXNrSW5zdGFuY2UgfSkge1xuXHRcdFx0dGhpcy50YXNrID0gdGFzaztcblx0XHR9XG5cblx0XHRwcml2YXRlIGFkZFZpZGVvKHZpZGVvOiBDU1ZSb3cpIHtcblx0XHRcdHRoaXMudmlkZW9zLnB1c2godmlkZW8pO1xuXHRcdH1cblxuXHRcdGFzeW5jIGltcG9ydENTVihcblx0XHRcdGZpbGU6IEZpbGUsXG5cdFx0XHRvcHRpb25zOiBjc3YuUGFyc2VyT3B0aW9uc0FyZ3Ncblx0XHQpOiBQcm9taXNlPFdyaWtlVmlkZW9CYXRjaFRhc2tJbnN0YW5jZT4ge1xuXHRcdFx0Y29uc3QgdGV4dCA9IGF3YWl0IGZpbGUudGV4dCgpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjc3YucGFyc2VTdHJpbmcodGV4dCwgb3B0aW9ucylcblx0XHRcdFx0XHQub24oXCJlcnJvclwiLCAoZXJyKSA9PiByZWplY3QoZXJyKSlcblx0XHRcdFx0XHQub24oXCJkYXRhXCIsIChyb3c6IENTVlJvdykgPT4gdGhpcy5hZGRWaWRlbyhyb3cpKVxuXHRcdFx0XHRcdC5vbihcImVuZFwiLCAoKSA9PiBmdWxmaWxsKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGFzeW5jIHNhdmUoeyB0ZW1wbGF0ZUZvbGRlciwgbG9jYXRpb25Gb2xkZXIgfTogVmlkZW9CYXRjaFNhdmVDb25maWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIFZpZGVvIEJhdGNoOiBcIiwgdGhpcy52aWRlb3MubGVuZ3RoKTtcblxuXHRcdFx0Y29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBNYXA8XG5cdFx0XHRcdHN0cmluZyxcblx0XHRcdFx0UHJvbWlzZTxXcmlrZVRhc2tUZW1wbGF0ZUluc3RhbmNlPlxuXHRcdFx0PigpO1xuXHRcdFx0Y29uc3QgZmluZFRlbXBsYXRlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRpZiAoIXRlbXBsYXRlQ2FjaGUuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdFx0dGVtcGxhdGVDYWNoZS5zZXQoXG5cdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0Y2xpZW50LlRhc2tUZW1wbGF0ZS5mcm9tVGl0bGUobmFtZSwgdGVtcGxhdGVGb2xkZXIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZUNhY2hlLmdldChuYW1lKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGZvbGRlciA9IGxvY2F0aW9uRm9sZGVyO1xuXG5cdFx0XHRpZiAoIWZvbGRlcikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyBmb2xkZXJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IHZpZGVvIG9mIHRoaXMudmlkZW9zLnJldmVyc2UoKSkge1xuXHRcdFx0XHRjb25zdCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZU5hbWUsIC4uLnByb3BlcnRpZXMgfSA9IHZpZGVvO1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGZpbmRUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUpO1xuXG5cdFx0XHRcdGNvbnN0IHRhc2sgPSBhd2FpdCB0ZW1wbGF0ZT8uY2xvbmUocHJvcGVydGllcywgdGhpcy50YXNrKTtcblxuXHRcdFx0XHRhd2FpdCB0YXNrPy5zYXZlKHsgZm9sZGVyIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIi4vQ2xpZW50LnNlcnZlclwiO1xuXG50eXBlIFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2UgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgV29ya2Zsb3dSYXcgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0Y3VzdG9tU3RhdHVzZXM6IFdyaWtlQ3VzdG9tU3RhdHVzSW5zdGFuY2VbXTtcbn07XG5cbnR5cGUgV29ya2Zsb3dSZXNwb25zZSA9IHtcblx0dHlwZTogc3RyaW5nO1xuXHRkYXRhOiBXb3JrZmxvd1Jhd1tdO1xufTtcblxuZXhwb3J0IHR5cGUgV3Jpa2VXb3JrRmxvd0luc3RhbmNlID0ge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGN1c3RvbVN0YXR1c2VzOiBXcmlrZUN1c3RvbVN0YXR1c0luc3RhbmNlW107XG59O1xuXG5leHBvcnQgdHlwZSBXcmlrZVdvcmtGbG93Q2xhc3MgPSB7XG5cdG5ldyAocmF3OiBXb3JrZmxvd1Jhdyk6IFdyaWtlV29ya0Zsb3dJbnN0YW5jZTtcblxuXHRmcm9tTmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFdyaWtlV29ya0Zsb3dJbnN0YW5jZT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya0Zsb3dDbGFzcyhjbGllbnQ6IFdyaWtlQ2xpZW50KTogV3Jpa2VXb3JrRmxvd0NsYXNzIHtcblx0cmV0dXJuIGNsYXNzIFdyaWtlV29ya2Zsb3dDbGllbnQgaW1wbGVtZW50cyBXcmlrZVdvcmtGbG93SW5zdGFuY2Uge1xuXHRcdHN0YXRpYyBhc3luYyBmcm9tTmFtZShuYW1lOiBzdHJpbmcpIHtcblx0XHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQuZ2V0PFdvcmtmbG93UmVzcG9uc2U+KFwid29ya2Zsb3dzXCIpO1xuXHRcdFx0Y29uc3QgcmF3ID0gcmVzcC5kYXRhLmZpbmQoKGQpID0+IGQubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRcdGlmICghcmF3KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIldvcmtmbG93IG5vdCBmb3VuZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBXcmlrZVdvcmtmbG93Q2xpZW50KHJhdyk7XG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSByYXc6IFdvcmtmbG93UmF3KSB7fVxuXG5cdFx0Z2V0IGlkKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmF3LmlkO1xuXHRcdH1cblx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhdy5uYW1lO1xuXHRcdH1cblx0XHRnZXQgY3VzdG9tU3RhdHVzZXMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYXcuY3VzdG9tU3RhdHVzZXM7XG5cdFx0fVxuXHR9O1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBLZXlib2FyZEV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRBY3Rpb25GdW5jdGlvbixcblx0TG9hZGVyRnVuY3Rpb24sXG5cdExpbmtzRnVuY3Rpb24sXG5cdHJlZGlyZWN0LFxuXHR1c2VGZXRjaGVyLFxuXHRGb3JtLFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbXVpL21hdGVyaWFsL0F1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB0eXBlIHsgQWN0dWFsRmlsZU9iamVjdCB9IGZyb20gXCJmaWxlcG9uZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IElucHV0QnJlYWRDcnVtYiBmcm9tIFwifi9jb21wb25lbnRzL0lucHV0QnJlYWRDcnVtYlwiO1xuaW1wb3J0IE9uTW91bnQgZnJvbSBcIn4vY29tcG9uZW50cy9Pbk1vdW50XCI7XG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZUlucHV0XCI7XG5cbmltcG9ydCB0eXBlIHsgU3BhY2VzUmVzcG9uc2UsIFNwYWNlIH0gZnJvbSBcIi4vc3BhY2VzXCI7XG5pbXBvcnQgdHlwZSB7IENsaWVudFJlc3BvbnNlLCBDbGllbnQgfSBmcm9tIFwiLi9jbGllbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblxuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdGlmICghKGF3YWl0IHVzZXIuaGFzQ3JlZGVudGlhbHMoU2VydmljZS53cmlrZSkpKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvY29ubmVjdFwiKTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZpbGVwb25kQF40L2Rpc3QvZmlsZXBvbmQuY3NzXCIsXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB3cmlrZSA9IGF3YWl0IFdyaWtlQ2xpZW50LmZvclNlc3Npb24ocmVxdWVzdCk7XG5cblx0Y29uc3QgVXBsb2FkSGFuZGxlciA9IHVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXIoe1xuXHRcdG1heEZpbGVTaXplOiAxMF8wMDBfMDAwLCAvLzEwbWI/XG5cdFx0ZmlsdGVyOiAoeyBtaW1ldHlwZSB9KSA9PiBtaW1ldHlwZSA9PT0gXCJ0ZXh0L2NzdlwiLFxuXHR9KTtcblxuXHRjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEoXG5cdFx0cmVxdWVzdCxcblx0XHRVcGxvYWRIYW5kbGVyXG5cdCk7XG5cblx0Y29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcInByb2plY3QtZmlsZVwiKSBhcyBGaWxlO1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgZmlsZS50ZXh0KCk7XG5cblx0Y29uc29sZS5sb2coXCJHb3QgRm9ybSBEYXRhOiBcIiwgdGV4dCk7XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuXHRjb25zdCBzcGFjZXMgPSB1c2VGZXRjaGVyPFNwYWNlc1Jlc3BvbnNlPigpO1xuXHRjb25zdCBsb2FkU3BhY2VzID0gdXNlRmV0Y2hlckxvYWQoc3BhY2VzLCBcIi9wcm9qZWN0cy9zcGFjZXNcIik7XG5cdGNvbnN0IFtzcGFjZSwgc2V0U3BhY2VdID0gdXNlU3RhdGU8U3BhY2UgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCBjbGllbnRzID0gdXNlRmV0Y2hlcjxDbGllbnRSZXNwb25zZT4oKTtcblx0Y29uc3QgbG9hZENsaWVudHMgPSB1c2VGZXRjaGVyTG9hZChcblx0XHRjbGllbnRzLFxuXHRcdGAvcHJvamVjdHMvY2xpZW50cz9zcGFjZUlkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNwYWNlPy5pZCA/PyBcIlwiKX1gXG5cdCk7XG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZTxDbGllbnQgfCBudWxsPihudWxsKTtcblxuXHRjb25zdCB7IGhhc1ZhbHVlOiBoYXNQcm9qZWN0TmFtZSwgcHJvcHM6IHByb2plY3ROYW1lUHJvcHMgfSA9XG5cdFx0dXNlQnVmZmVyZWRJbnB1dCgpO1xuXG5cdGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8QWN0dWFsRmlsZU9iamVjdFtdIHwgdW5kZWZpbmVkPihcblx0XHR1bmRlZmluZWRcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiTmV3IFByb2plY3RcIj5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuXHRcdFx0XHQ8SW5wdXRCcmVhZENydW1iPlxuXHRcdFx0XHRcdDxPbk1vdW50IG9uTW91bnQ9e2xvYWRTcGFjZXN9PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c3BhY2U/LmlkfSBuYW1lPVwic3BhY2VJZFwiIC8+XG5cdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvKSA9PiBzZXRTcGFjZShvKX1cblx0XHRcdFx0XHRcdFx0bG9hZGluZz17c3BhY2VzLnN0YXRlID09PSBcImxvYWRpbmdcIn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17c3BhY2VzLmRhdGE/LnNwYWNlcyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhvKSA9PiBvLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG8sIHYpID0+IG8uaWQgPT09IHYuaWR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnBhcmFtc31cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3BhY2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L09uTW91bnQ+XG5cdFx0XHRcdFx0eyFzcGFjZSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8T25Nb3VudCBvbk1vdW50PXtsb2FkQ2xpZW50c30+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjbGllbnQ/LmlkfVxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0c3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCIzMDBweFwiIH19XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2xpZW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgbykgPT4gc2V0Q2xpZW50KG8pfVxuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2NsaWVudHMuc3RhdGUgPT09IFwibG9hZGluZ1wifVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2NsaWVudHMuZGF0YT8uY2xpZW50cyA/PyBbXX1cblx0XHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KG8pID0+IG8udGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0aXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvLCB2KSA9PiBvLmlkID09PSB2LmlkfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wYXJhbXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2xpZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN0YW5kYXJkXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvT25Nb3VudD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHshY2xpZW50ID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6IFwiMzAwcHhcIixcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcm9qZWN0IE5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic3RhbmRhcmRcIlxuXHRcdFx0XHRcdFx0XHRrZXk9XCJwcm9qZWN0XCJcblx0XHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17cHJvamVjdE5hbWVQcm9wc31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7IWhhc1Byb2plY3ROYW1lID8gbnVsbCA6IChcblx0XHRcdFx0XHRcdDxTdGFja1xuXHRcdFx0XHRcdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0anVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEZpbGVJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwcm9qZWN0LWZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0b3JlQXNGaWxlXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZXM9e2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRcdG9udXBkYXRlZmlsZXM9eyhpdGVtcykgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEZpbGVzKGl0ZW1zLm1hcCgoZikgPT4gZi5maWxlKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdENyZWF0ZSBQcm9qZWN0XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0lucHV0QnJlYWRDcnVtYj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHVzZUZldGNoZXJMb2FkKFxuXHRmZXRjaGVyOiB7IGxvYWQ6ICh1cmw6IHN0cmluZykgPT4gdm9pZCB9ICYgRmV0Y2hlcixcblx0dXJsOiBzdHJpbmdcbikge1xuXHRyZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGlmICghZmV0Y2hlci5kYXRhICYmIGZldGNoZXIuc3RhdGUgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRmZXRjaGVyLmxvYWQodXJsKTtcblx0XHR9XG5cdH0sIFtmZXRjaGVyLCB1cmxdKTtcbn1cblxuZnVuY3Rpb24gdXNlQnVmZmVyZWRJbnB1dCgpIHtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZD4oKTtcblx0Y29uc3QgdGltZW91dFJlZiA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KCk7XG5cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbaGFzVmFsdWUsIHNldEhhc1ZhbHVlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0c2V0VmFsdWUoaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIik7XG5cblx0XHRpZiAodGltZW91dFJlZi5jdXJyZW50KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcblx0XHR9XG5cblx0XHR0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUpKTtcblxuXHRcdFx0dGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcblx0XHR9LCA1MDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3Qgb25LZXlQcmVzcyA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdHNldEhhc1ZhbHVlKEJvb2xlYW4oaW5wdXRSZWYuY3VycmVudD8udmFsdWUgPz8gXCJcIikpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiB7XG5cdFx0aGFzVmFsdWUsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0cmVmOiBpbnB1dFJlZixcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0b25LZXlQcmVzcyxcblx0XHR9LFxuXHR9O1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG50eXBlIElucHV0QnJlYWRDcnVtYlByb3BzID0ge1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQoR3JpZClgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRCcmVhZENydW1iKHsgY2hpbGRyZW4gfTogSW5wdXRCcmVhZENydW1iUHJvcHMpIHtcblx0Y29uc3QgY21wcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG5cdGNvbnN0IGJyZWFkY3J1bWJzID0gY21wcy5zbGljZSgwLCAtMSk7XG5cdGNvbnN0IGZvY3VzZWQgPSBjbXBzW2NtcHMubGVuZ3RoIC0gMV07XG5cblx0cmV0dXJuIChcblx0XHQ8R3JpZFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0XHRzcGFjaW5nPXsyfVxuXHRcdFx0cGFkZGluZz17Mn1cblx0XHRcdHN4PXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XG5cdFx0PlxuXHRcdFx0e2JyZWFkY3J1bWJzLm1hcCgoYywga2V5KSA9PiAoXG5cdFx0XHRcdDxHcmlkSXRlbSBpdGVtIHhzPXszfSBrZXk9e2BicmVhZGNydW1iLSR7a2V5fWB9PlxuXHRcdFx0XHRcdHtjfVxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KSl9XG5cdFx0XHR7Zm9jdXNlZCA/IChcblx0XHRcdFx0PEdyaWRJdGVtIGl0ZW0geHM9ezEyfT5cblx0XHRcdFx0XHR7Zm9jdXNlZH1cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvR3JpZD5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEZldGNoZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC90cmFuc2l0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgRmV0Y2hPbk1vdW50UHJvcHMgPSB7XG5cdG9uTW91bnQ6ICgpID0+IHZvaWQ7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbk1vdW50KHsgb25Nb3VudCwgY2hpbGRyZW4gfTogRmV0Y2hPbk1vdW50UHJvcHMpIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRvbk1vdW50KCk7XG5cdH0sIFtvbk1vdW50XSk7XG5cblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IHsgV3Jpa2VDbGllbnQgfSBmcm9tIFwifi9hcGkvd3Jpa2UvQ2xpZW50LnNlcnZlclwiO1xuXG5leHBvcnQgdHlwZSBTcGFjZSA9IHtcblx0aWQ6IHN0cmluZztcblx0dGl0bGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFNwYWNlc1Jlc3BvbnNlID0ge1xuXHRzcGFjZXM6IFNwYWNlW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cdGNvbnN0IHdyaWtlQ3JlZCA9IGF3YWl0IHVzZXI/LmdldENyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpO1xuXG5cdGlmICghd3Jpa2VDcmVkKSB7XG5cdFx0dGhyb3cgbmV3IFJlc3BvbnNlKFwiRm9yYmlkZGVuXCIsIHsgc3RhdHVzOiA0MDMgfSk7XG5cdH1cblxuXHRjb25zdCBXcmlrZSA9IG5ldyBXcmlrZUNsaWVudCh3cmlrZUNyZWQpO1xuXHRjb25zdCBzcGFjZXMgPSBhd2FpdCBXcmlrZS5TcGFjZS5nZXRBbGwoKTtcblxuXHRyZXR1cm4ganNvbih7XG5cdFx0c3BhY2VzOiBzcGFjZXMubWFwKChzKSA9PiAoeyBpZDogcy5pZCwgdGl0bGU6IHMudGl0bGUgfSkpLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcblx0Ly9OT1RFOiB0aGlzIG9iamVjdC5rZXlzIHRyaWNrIG9ubHkgd29ya3MgaWYgdGhlIGVudW0ga2V5cyBhcmUgZXhhY3QgbWF0Y2hlcyBmb3IgdGhlIHZhbHVlc1xuXHRpZiAoIXBhcmFtcy5zZXJ2aWNlIHx8ICFPYmplY3Qua2V5cyhTZXJ2aWNlKS5pbmNsdWRlcyhwYXJhbXMuc2VydmljZSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTZXJ2aWNlXCIpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coXCJTZXJ2aWNlOiBcIiwgcGFyYW1zLnNlcnZpY2UpO1xuXG5cdGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIocGFyYW1zLnNlcnZpY2UgYXMgU2VydmljZSwgcmVxdWVzdCwge1xuXHRcdHN1Y2Nlc3M6IFwiXCIsXG5cdFx0ZmFpbHVyZTogXCJcIixcblx0fSk7XG59O1xuIiwgImltcG9ydCB0eXBlIHtMb2FkZXJGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge3JlZGlyZWN0LCB1c2VMb2FkZXJEYXRhfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBKU1ppcCBmcm9tIFwianN6aXBcIjtcblxuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7U2VydmljZX0gZnJvbSBcIn4vYXBpL21vZGVscy9DcmVkZW50aWFsLnNlcnZlclwiO1xuaW1wb3J0IEdBUEkgZnJvbSBcIn4vYXBpL0dvb2dsZS9HQVBJLnNlcnZlclwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xuXG5cdC8vIGdldCBzZXNzaW9uIHVzZXJcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRpZiAoIXVzZXIpIHtcblx0XHR0aHJvdyByZWRpcmVjdChcIi9sb2dpblwiKTtcblx0fVxuXG5cdC8vIGdlbmVyYXRlIHRlbGVwcm9tcHRlciBzY3JpcHRcblx0Y29uc3QgdG9rZW4gPSAoYXdhaXQgdXNlci5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLmdvb2dsZSkpPy5hY2Nlc3NUb2tlbjtcblx0aWYgKCF0b2tlbikge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgR0FQSSBhY2Nlc3MgdG9rZW4uJyk7XG5cdH1cblx0Y29uc3QgZ2FwaSA9IG5ldyBHQVBJKHJlcXVlc3QsIHRva2VuLCBudWxsKTtcblx0cmV0dXJuIGdhcGkuZ2VuZXJhdGVUZWxlcHJvbXB0ZXJTY3JpcHRzKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgZG93bmxvYWQgbGlua3MgZm9yIGVhY2ggR29vZ2xlIERvY3MgdGV4dCBjb2xsZWN0ZWQgYnkgdGhlIHNlcnZlciBmcm9tIHRoZSBUcmFja2luZyBTaGVldC5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHJldHVybiBBIGRvY3VtZW50IGNvbnRhaW5pbmcgZG93bmxvYWQgbGlua3MgdG8gYWxsIHRoZSB0ZXh0IGRvY3VtZW50cywgYXMgd2VsbCBhcyBzb21lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbml0aWFsIHJlcXVlc3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRzZ1Jlc3VsdHMoKSB7XG5cdC8vIGNyZWF0ZSBkb3dubG9hZCBsaW5rcyBmb3IgZWFjaCBHb29nbGUgRG9jcyB0ZXh0IGNvbGxlY3RlZCBieSB0aGUgc2VydmVyXG5cdGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cdGxldCBmaWxlTGlua3MgPSBbXTtcblx0bGV0IG1ldGFKU09OID0gW107XG5cdGxldCB6aXAgPSBuZXcgSlNaaXAoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdGV4dCA9IGRhdGEuZmlsZXNbaV0udGV4dDtcblx0XHRjb25zdCB0aXRsZSA9IGRhdGEuZmlsZXNbaV0udGl0bGUgKyAnLnR4dCc7XG5cdFx0bWV0YUpTT04ucHVzaChkYXRhLmZpbGVzW2ldLm1ldGEpO1xuXHRcdHppcC5maWxlKHRpdGxlLCB0ZXh0KTtcblx0XHRmaWxlTGlua3MucHVzaCg8bGk+PGEgaHJlZj17J2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQodGV4dCl9XG5cdFx0XHRcdFx0XHRcdCAgZG93bmxvYWQ9e3RpdGxlfT57dGl0bGV9PC9hPjwvbGk+KTtcblx0fVxuXHRjb25zdCB7IFBhcnNlciB9ID0gcmVxdWlyZSgnanNvbjJjc3YnKTtcblx0Y29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpXG5cdGNvbnN0IGNzdiA9IHBhcnNlci5wYXJzZShtZXRhSlNPTik7XG5cdHppcC5maWxlKFwibWV0YS5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG1ldGFKU09OKSk7XG5cdHppcC5maWxlKFwibWV0YS5jc3ZcIiwgY3N2KTtcblxuXHRmdW5jdGlvbiBkb3dubG9hZEFsbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBzcmM6IGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9leGFtcGxlcy9kb3dubG9hZC16aXAtZmlsZS5odG1sXG5cdFx0emlwLmdlbmVyYXRlQXN5bmMoe3R5cGU6IFwiYmFzZTY0XCJ9KS50aGVuKGZ1bmN0aW9uIChiYXNlNjQpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IFwiZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LFwiICsgYmFzZTY0O1xuXHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHRocm93IEVycm9yKGVycik7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiVGVsZXByb21wdGVyIFNjcmlwdCBHZW5lcmF0b3IgUmVzdWx0c1wiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17dGhpcy5kb3dubG9hZEFsbH0+RG93bmxvYWQgQWxsIERvY3VtZW50czwvQnV0dG9uPlxuXHRcdFx0PC9TdGFjaz5cblx0XHRcdDx1bCBzdHlsZT17e21hcmdpbjogXCIwcHggNTBweFwifX0+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxsaT48c3Ryb25nPlRyYWNraW5nIFNoZWV0OiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEudGl0bGV9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+U2hlZXQ6IDwvc3Ryb25nPntkYXRhLnNoZWV0RGF0YS5zaGVldH08L2xpPlxuXHRcdFx0XHQ8bGk+PHN0cm9uZz5Sb3c6IDwvc3Ryb25nPntkYXRhLnNoZWV0RGF0YS5yb3d9PC9saT5cblx0XHRcdFx0PGxpPjxzdHJvbmc+Q29sdW1uOiA8L3N0cm9uZz57ZGF0YS5zaGVldERhdGEuY29sdW1ufTwvbGk+XG5cdFx0XHRcdDxsaT48c3Ryb25nPkRvY3VtZW50cyBjcmVhdGVkOiA8L3N0cm9uZz57ZGF0YS5maWxlcy5sZW5ndGh9PC9saT5cblx0XHRcdFx0PGhyLz5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8dWwgc3R5bGU9e3ttYXJnaW46IFwiMHB4IDUwcHhcIn19PlxuXHRcdFx0XHR7ZmlsZUxpbmtzfVxuXHRcdFx0PC91bD5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHtcblx0TG9hZGVyRnVuY3Rpb24sXG5cdEFjdGlvbkZ1bmN0aW9uLFxuXHR1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyLFxuXHR1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhLFxuXHR1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2lyY3VsYXJQcm9ncmVzc1wiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRpZiAoIShhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2Uud3Jpa2UpKSkge1xuXHRcdHRocm93IHJlZGlyZWN0KFwiL2Nvbm5lY3RcIik7XG5cdH1cblxuXHRyZXR1cm4geyB1c2VyOiB1c2VyLnVzZXJJZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXHRjb25zdCB3cmlrZUNyZWQgPSBhd2FpdCB1c2VyPy5nZXRDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKTtcblxuXHRpZiAoIXdyaWtlQ3JlZCkge1xuXHRcdHRocm93IG5ldyBSZXNwb25zZShcIkZvcmJpZGRlblwiLCB7IHN0YXR1czogNDAzIH0pO1xuXHR9XG5cblx0Y29uc3QgVXBsb2FkZXJIYW5kbGVyID0gdW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcih7XG5cdFx0bWF4RmlsZVNpemU6IDEwXzAwMF8wMDAsIC8vMTBtYj9cblx0XHRmaWx0ZXI6ICh7IG1pbWV0eXBlIH0pID0+IG1pbWV0eXBlID09PSBcInRleHQvY3N2XCIsXG5cdH0pO1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgdW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YShcblx0XHRyZXF1ZXN0LFxuXHRcdFVwbG9hZGVySGFuZGxlclxuXHQpO1xuXG5cdGNvbnN0IFdyaWtlID0gbmV3IFdyaWtlQ2xpZW50KHdyaWtlQ3JlZCk7XG5cdGNvbnN0IGJhdGNoID0gYXdhaXQgV3Jpa2UuVmlkZW9CYXRjaC5mcm9tUGVybWFMaW5rKFxuXHRcdGZvcm1EYXRhLmdldChcImJhdGNoLXRhc2tcIikgYXMgc3RyaW5nXG5cdCk7XG5cblx0YXdhaXQgYmF0Y2guaW1wb3J0Q1NWKGZvcm1EYXRhLmdldChcImJhdGNoXCIpIGFzIEZpbGUsIHsgaGVhZGVyczogdHJ1ZSB9KTtcblxuXHRhd2FpdCBiYXRjaC5zYXZlKHtcblx0XHR0ZW1wbGF0ZUZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJ0ZW1wbGF0ZS1mb2xkZXJcIikgYXMgc3RyaW5nXG5cdFx0KSxcblx0XHRsb2NhdGlvbkZvbGRlcjogYXdhaXQgV3Jpa2UuRm9sZGVyLmZyb21QZXJtYUxpbmsoXG5cdFx0XHRmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmdcblx0XHQpLFxuXHR9KTtcblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvQmF0Y2goKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFnZSB0aXRsZT1cIlVwbG9hZCBhIHZpZGVvIGJhdGNoIENTViBmaWxlOlwiPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0XHRcdHt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIiA/IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPVwiM3JlbVwiIC8+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezJ9XG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0XHRcdGp1c3RpZnlJdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidGVtcGxhdGUtZm9sZGVyXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUZW1wbGF0ZSBGb2xkZXIgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0bmFtZT1cImJhdGNoLXRhc2tcIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkJhdGNoIFRhc2sgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0bmFtZT1cImxvY2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGb2xkZXIgKFBlcm1hTGluaylcIlxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJiYXRjaFwiIC8+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFVwbG9hZFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRm9ybT5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgU3RhY2sgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RhY2tcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG50eXBlIENvbm5lY3RMb2FkZXJEYXRhID0ge1xuXHRoYXNXcmlrZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxDb25uZWN0TG9hZGVyRGF0YT4gPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0cmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc1dyaWtlQ3JlZDogQm9vbGVhbihhd2FpdCB1c2VyPy5oYXNDcmVkZW50aWFscyhTZXJ2aWNlLndyaWtlKSksXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZWN0KCkge1xuXHRjb25zdCB7IGhhc1dyaWtlQ3JlZCB9ID0gdXNlTG9hZGVyRGF0YTxDb25uZWN0TG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiQ29ubmVjdCB5b3VyIGFjY291bnRzOlwiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PEZvcm0gYWN0aW9uPVwiL2F1dGgvd3Jpa2VcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8QWRkSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc1dyaWtlQ3JlZFxuXHRcdFx0XHRcdFx0XHQ/IFwiQ29ubmVjdGVkIHRvIFdyaWtlXCJcblx0XHRcdFx0XHRcdFx0OiBcIkNvbm5lY3QgdG8gV3Jpa2VcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gXCJ+L2FwaS9hdXRoLnNlcnZlclwiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gXCJ+L2FwaS9tb2RlbHMvQ3JlZGVudGlhbC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFdyaWtlQ2xpZW50IH0gZnJvbSBcIn4vYXBpL3dyaWtlL0NsaWVudC5zZXJ2ZXJcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIocmVxdWVzdCk7XG5cblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4geyB1c2VyOiB1c2VyLnVzZXJJZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJWaWRlbyBUb29saW5nOlwiPlxuXHRcdFx0PFN0YWNrIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5SXRlbXM9XCJjZW50ZXJcIj5cblx0XHRcdFx0PExpbmsgdG89XCIvcHJvamVjdHMvY3JlYXRlXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+TmV3IFByb2plY3Q8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz1cIi92aWRlby1iYXRjaFwiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlZpZGVvIEJhdGNoPC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PExpbmsgdG89XCJ0YXNrcy9hc3NldC1pbnZlbnRvcnlcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5Bc3NldCBJbnZlbnRvcnk8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8TGluayB0bz17XCJ0YXNrcy9zY3JpcHQtYXNzZXQtaW52ZW50b3J5XCJ9PlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD17XCJjb250YWluZWRcIn0+U2NyaXB0IEFzc2V0IEludmVudG9yeTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL3RzZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlRlbGVwcm9tcHRlciBTY3JpcHQgR2VuZXJhdG9yPC9CdXR0b24+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcblxuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIgfSBmcm9tIFwifi9hcGkvYXV0aC5zZXJ2ZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwifi9hcGkvbW9kZWxzL0NyZWRlbnRpYWwuc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcblxudHlwZSBMb2dpbkxvYWRlckRhdGEgPSB7XG5cdGhhc0dvb2dsZUNyZWQ6IEJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG5cdHJlcXVlc3QsXG59KTogUHJvbWlzZTxMb2dpbkxvYWRlckRhdGE+ID0+IHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKHJlcXVlc3QpO1xuXG5cdGNvbnN0IGhhc0dvb2dsZUNyZWQgPSB1c2VyXG5cdFx0PyBhd2FpdCB1c2VyLmhhc0NyZWRlbnRpYWxzKFNlcnZpY2UuZ29vZ2xlKVxuXHRcdDogZmFsc2U7XG5cblx0aWYgKGhhc0dvb2dsZUNyZWQpIHtcblx0XHRyZWRpcmVjdChcIi9cIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGhhc0dvb2dsZUNyZWQsXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBoYXNHb29nbGVDcmVkIH0gPSB1c2VMb2FkZXJEYXRhPExvZ2luTG9hZGVyRGF0YT4oKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYWdlIHRpdGxlPVwiU2lnbiBpbiB0byB5b3VyIE5leHRUaG91Z2h0IGFjY291bnQ6XCI+XG5cdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Rm9ybSBhY3Rpb249XCIvYXV0aC9nb29nbGVcIiBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3RhcnRJY29uPXs8R29vZ2xlSWNvbiAvPn1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2hhc0dvb2dsZUNyZWRcblx0XHRcdFx0XHRcdFx0PyBcIlNpZ25lZCBJbiBUbyBHb29nbGVcIlxuXHRcdFx0XHRcdFx0XHQ6IFwiU2lnbiBJbiBUbyBHb29nbGVcIn1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L1BhZ2U+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUge0xvYWRlckZ1bmN0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7Rm9ybSwgcmVkaXJlY3QsIHVzZVRyYW5zaXRpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtnZXRTZXNzaW9uVXNlcn0gZnJvbSBcIn4vYXBpL2F1dGguc2VydmVyXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xuXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcihyZXF1ZXN0KTtcblx0aWYgKCF1c2VyKSB7XG5cdFx0dGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cdH1cblxuXHRyZXR1cm4ge3VzZXI6IHVzZXIudXNlcklkfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlbGVTY3JpcHRHZW5lcmF0b3IoKSB7XG5cdGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cdHJldHVybiAoXG5cdFx0PFBhZ2UgdGl0bGU9XCJUU0c6XCI+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJnZXRcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIi90c2ctcmVzdWx0c1wiPlxuXHRcdFx0XHQ8U3RhY2sgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlJdGVtcz1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdG5hbWU9XCJ1cmxcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTcHJlYWRzaGVldCBVUkxcIlxuXHRcdFx0XHRcdFx0dmFyaWFudD1cIm91dGxpbmVkXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwic2hlZXRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTaGVldCBOYW1lIChNYXN0ZXIgUmV2aWV3IFRyYWNrZXIpXCJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0XHRuYW1lPVwicm93XCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiU3RhcnRpbmcgUm93ICg1KVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0bmFtZT1cImNvbHVtblwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGEgQ29sdW1uIChJKVwiXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwib3V0bGluZWRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wifVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuXHRcdFx0XHRcdFx0e3RyYW5zaXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiXG5cdFx0XHRcdFx0XHRcdD8gXCJHZW5lcmF0aW5nLi4uXCJcblx0XHRcdFx0XHRcdFx0OiBcIkdlbmVyYXRlXCJ9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9QYWdlPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzRkMDJjMjdhJywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LVhaVloyNklYLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUxQTFJJR0dDLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1UVEtUS0dTNC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRkRQNldHWkYuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3Jvb3QtNVNMWVhRVUguanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstN1VRUldaS1EuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVpVUVc0SFZZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1WTElFVFBENi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNFlKTFVCQjYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLURUV05MVkNZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1FSFA2T0RaWC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstREkyRlBZVDcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvJHNlcnZpY2UnOnsnaWQnOidyb3V0ZXMvYXV0aC8kc2VydmljZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoLzpzZXJ2aWNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvYXV0aC8kc2VydmljZS1aWlVORldXUC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLyRzZXJ2aWNlLmNhbGxiYWNrJzp7J2lkJzoncm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC86c2VydmljZS9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2F1dGgvJHNlcnZpY2UuY2FsbGJhY2stNEhWSDVVU1AuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Nvbm5lY3QnOnsnaWQnOidyb3V0ZXMvY29ubmVjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb25uZWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvY29ubmVjdC03VFFLWjY3Ry5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1GUDM0UDJZNS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2luZGV4LU5TTVFONkJHLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbic6eydpZCc6J3JvdXRlcy9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2xvZ2luLUg0VFFRMkNQLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUZQMzRQMlk1LmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Byb2plY3RzL2NsaWVudHMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY2xpZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwcm9qZWN0cy9jbGllbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvcHJvamVjdHMvY2xpZW50cy1CWkM3TU4zVC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1TVEVKT0tDVi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL2NyZWF0ZS1QQkJPSENZRC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay03UUpJQU5WSC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstU1RFSk9LQ1YuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wcm9qZWN0cy9zcGFjZXMnOnsnaWQnOidyb3V0ZXMvcHJvamVjdHMvc3BhY2VzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Byb2plY3RzL3NwYWNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3Byb2plY3RzL3NwYWNlcy1LTlBNU1dWTy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1BU0pFWDVXRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstSk5SSk5QRkIuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVNURUpPS0NWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Rhc2tzL2Fzc2V0LWludmVudG9yeSc6eydpZCc6J3JvdXRlcy90YXNrcy9hc3NldC1pbnZlbnRvcnknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondGFza3MvYXNzZXQtaW52ZW50b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdGFza3MvYXNzZXQtaW52ZW50b3J5LTRET1VJSVlDLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVlBMlZOUk5WLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay03UUpJQU5WSC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Rhc2tzL3NjcmlwdC1hc3NldC1pbnZlbnRvcnknOnsnaWQnOidyb3V0ZXMvdGFza3Mvc2NyaXB0LWFzc2V0LWludmVudG9yeScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0YXNrcy9zY3JpcHQtYXNzZXQtaW52ZW50b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdGFza3Mvc2NyaXB0LWFzc2V0LWludmVudG9yeS1GNDNXVlVMUy5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1ZM0JRTU5RRS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstWUEyVk5STlYuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTdRSklBTlZILmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RzZyc6eydpZCc6J3JvdXRlcy90c2cnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondHNnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdHNnLUIzQVRBM1NPLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUNIRDNDTFJBLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90c2ctcmVzdWx0cyc6eydpZCc6J3JvdXRlcy90c2ctcmVzdWx0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0c2ctcmVzdWx0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL3RzZy1yZXN1bHRzLUJRUVpLRlhELmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVkzQlFNTlFFLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1DSEQzQ0xSQS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQVNKRVg1V0cuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUpOUkpOUEZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3ZpZGVvLWJhdGNoJzp7J2lkJzoncm91dGVzL3ZpZGVvLWJhdGNoJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3ZpZGVvLWJhdGNoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvdmlkZW8tYmF0Y2gtSlhMWlJIQVQuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstQ0hEM0NMUkEuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUFTSkVYNVdHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1KTlJKTlBGQi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstU1RFSk9LQ1YuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvX3N0YXRpYy9idWlsZC9tYW5pZmVzdC00RDAyQzI3QS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJ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
