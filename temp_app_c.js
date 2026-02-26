var app_c;
(() => {
var __webpack_modules__ = ({
"../../node_modules/.pnpm/@module-federation+dts-plugin@0.9.1_typescript@5.9.3/node_modules/@module-federation/dts-plugin/dist/dynamic-remote-type-hints-plugin.js"(module, __unused_rspack_exports, __webpack_require__) {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// packages/dts-plugin/src/runtime-plugins/dynamic-remote-type-hints-plugin.ts
var dynamic_remote_type_hints_plugin_exports = {};
__export(dynamic_remote_type_hints_plugin_exports, {
  default: () => dynamic_remote_type_hints_plugin_default
});
module.exports = __toCommonJS(dynamic_remote_type_hints_plugin_exports);

// packages/dts-plugin/src/server/createWebsocket.ts
var import_isomorphic_ws = __toESM(__webpack_require__("../../node_modules/.pnpm/isomorphic-ws@5.0.0_ws@8.18.0/node_modules/isomorphic-ws/browser.js"));

// packages/dts-plugin/src/server/constant.ts
var DEFAULT_WEB_SOCKET_PORT = 16322;
var WEB_SOCKET_CONNECT_MAGIC_ID = "1hpzW-zo2z-o8io-gfmV1-2cb1d82";
var UpdateMode;
(function(UpdateMode2) {
  UpdateMode2["POSITIVE"] = "POSITIVE";
  UpdateMode2["PASSIVE"] = "PASSIVE";
})(UpdateMode || (UpdateMode = {}));

// packages/dts-plugin/src/server/createWebsocket.ts
function createWebsocket() {
  return new import_isomorphic_ws.default(`ws://127.0.0.1:${DEFAULT_WEB_SOCKET_PORT}?WEB_SOCKET_CONNECT_MAGIC_ID=${WEB_SOCKET_CONNECT_MAGIC_ID}`);
}
__name(createWebsocket, "createWebsocket");

// packages/dts-plugin/src/server/message/Message.ts
var _Message = class _Message {
  constructor(type, kind) {
    __publicField(this, "type");
    __publicField(this, "kind");
    __publicField(this, "time");
    this.type = type;
    this.kind = kind;
    this.time = Date.now();
  }
};
__name(_Message, "Message");
var Message = _Message;

// packages/dts-plugin/src/server/message/Action/Action.ts
var ActionKind;
(function(ActionKind2) {
  ActionKind2["ADD_SUBSCRIBER"] = "ADD_SUBSCRIBER";
  ActionKind2["EXIT_SUBSCRIBER"] = "EXIT_SUBSCRIBER";
  ActionKind2["ADD_PUBLISHER"] = "ADD_PUBLISHER";
  ActionKind2["UPDATE_PUBLISHER"] = "UPDATE_PUBLISHER";
  ActionKind2["NOTIFY_SUBSCRIBER"] = "NOTIFY_SUBSCRIBER";
  ActionKind2["EXIT_PUBLISHER"] = "EXIT_PUBLISHER";
  ActionKind2["ADD_WEB_CLIENT"] = "ADD_WEB_CLIENT";
  ActionKind2["NOTIFY_WEB_CLIENT"] = "NOTIFY_WEB_CLIENT";
  ActionKind2["FETCH_TYPES"] = "FETCH_TYPES";
  ActionKind2["ADD_DYNAMIC_REMOTE"] = "ADD_DYNAMIC_REMOTE";
})(ActionKind || (ActionKind = {}));
var _Action = class _Action extends Message {
  constructor(content, kind) {
    super("Action", kind);
    __publicField(this, "payload");
    const { payload } = content;
    this.payload = payload;
  }
};
__name(_Action, "Action");
var Action = _Action;

// packages/dts-plugin/src/server/message/Action/Update.ts
var UpdateKind;
(function(UpdateKind2) {
  UpdateKind2["UPDATE_TYPE"] = "UPDATE_TYPE";
  UpdateKind2["RELOAD_PAGE"] = "RELOAD_PAGE";
})(UpdateKind || (UpdateKind = {}));

// packages/dts-plugin/src/server/message/Action/FetchTypes.ts
var _FetchTypesAction = class _FetchTypesAction extends Action {
  constructor(payload) {
    super({
      payload
    }, ActionKind.FETCH_TYPES);
  }
};
__name(_FetchTypesAction, "FetchTypesAction");
var FetchTypesAction = _FetchTypesAction;

// packages/dts-plugin/src/server/message/Action/AddDynamicRemote.ts
var _AddDynamicRemoteAction = class _AddDynamicRemoteAction extends Action {
  constructor(payload) {
    super({
      payload
    }, ActionKind.ADD_DYNAMIC_REMOTE);
  }
};
__name(_AddDynamicRemoteAction, "AddDynamicRemoteAction");
var AddDynamicRemoteAction = _AddDynamicRemoteAction;

// packages/dts-plugin/src/dev-worker/utils.ts
var DEFAULT_LOCAL_IPS = [
  "localhost",
  "127.0.0.1"
];
function getIpFromEntry(entry, ipv4) {
  let ip;
  entry.replace(/https?:\/\/([0-9|.]+|localhost):/, (str, matched) => {
    ip = matched;
    return str;
  });
  if (ip) {
    return DEFAULT_LOCAL_IPS.includes(ip) ? ipv4 : ip;
  }
}
__name(getIpFromEntry, "getIpFromEntry");

// packages/dts-plugin/src/runtime-plugins/dynamic-remote-type-hints-plugin.ts
var PLUGIN_NAME = "dynamic-remote-type-hints-plugin";
function dynamicRemoteTypeHintsPlugin() {
  let ws = createWebsocket();
  let isConnected = false;
  ws.onopen = () => {
    isConnected = true;
  };
  ws.onerror = (err) => {
    console.error(`[ ${PLUGIN_NAME} ] err: ${err}`);
  };
  return {
    name: "dynamic-remote-type-hints-plugin",
    registerRemote(args) {
      const { remote, origin } = args;
      try {
        if (!isConnected) {
          return args;
        }
        if (!("entry" in remote)) {
          return args;
        }
        const defaultIpV4 =  true ? "192.168.86.250" : 0;
        const remoteIp = getIpFromEntry(remote.entry, defaultIpV4);
        const remoteInfo = {
          name: remote.name,
          url: remote.entry,
          alias: remote.alias || remote.name
        };
        if (remoteIp) {
          ws.send(JSON.stringify(new AddDynamicRemoteAction({
            remoteIp,
            remoteInfo,
            name: origin.name,
            ip: defaultIpV4
          })));
        }
        ws.send(JSON.stringify(new FetchTypesAction({
          name: origin.name,
          ip: defaultIpV4,
          remoteInfo
        })));
        return args;
      } catch (err) {
        console.error(new Error(err));
        return args;
      }
    }
  };
}
__name(dynamicRemoteTypeHintsPlugin, "dynamicRemoteTypeHintsPlugin");
var dynamic_remote_type_hints_plugin_default = dynamicRemoteTypeHintsPlugin;


},
"../../node_modules/.pnpm/@module-federation+error-codes@0.9.1/node_modules/@module-federation/error-codes/dist/index.cjs.js"(__unused_rspack_module, exports) {
"use strict";


const RUNTIME_001 = 'RUNTIME-001';
const RUNTIME_002 = 'RUNTIME-002';
const RUNTIME_003 = 'RUNTIME-003';
const RUNTIME_004 = 'RUNTIME-004';
const RUNTIME_005 = 'RUNTIME-005';
const RUNTIME_006 = 'RUNTIME-006';
const RUNTIME_007 = 'RUNTIME-007';
const RUNTIME_008 = 'RUNTIME-008';
const TYPE_001 = 'TYPE-001';
const BUILD_001 = 'BUILD-001';

const getDocsUrl = (errorCode)=>{
    const type = errorCode.split('-')[0].toLowerCase();
    return `https://module-federation.io/guide/troubleshooting/${type}/${errorCode}`;
};
const getShortErrorMsg = (errorCode, errorDescMap, args, originalErrorMsg)=>{
    const msg = [
        `${[
            errorDescMap[errorCode]
        ]} #${errorCode}`
    ];
    args && msg.push(`args: ${JSON.stringify(args)}`);
    msg.push(getDocsUrl(errorCode));
    originalErrorMsg && msg.push(`Original Error Message:\n ${originalErrorMsg}`);
    return msg.join('\n');
};

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

const runtimeDescMap = {
    [RUNTIME_001]: 'Failed to get remoteEntry exports.',
    [RUNTIME_002]: 'The remote entry interface does not contain "init"',
    [RUNTIME_003]: 'Failed to get manifest.',
    [RUNTIME_004]: 'Failed to locate remote.',
    [RUNTIME_005]: 'Invalid loadShareSync function call from bundler runtime',
    [RUNTIME_006]: 'Invalid loadShareSync function call from runtime',
    [RUNTIME_007]: 'Failed to get remote snapshot.',
    [RUNTIME_008]: 'Failed to load script resources.'
};
const typeDescMap = {
    [TYPE_001]: 'Failed to generate type declaration.'
};
const buildDescMap = {
    [BUILD_001]: 'Failed to find expose module.'
};
const errorDescMap = _extends({}, runtimeDescMap, typeDescMap, buildDescMap);

exports.BUILD_001 = BUILD_001;
exports.RUNTIME_001 = RUNTIME_001;
exports.RUNTIME_002 = RUNTIME_002;
exports.RUNTIME_003 = RUNTIME_003;
exports.RUNTIME_004 = RUNTIME_004;
exports.RUNTIME_005 = RUNTIME_005;
exports.RUNTIME_006 = RUNTIME_006;
exports.RUNTIME_007 = RUNTIME_007;
exports.RUNTIME_008 = RUNTIME_008;
exports.TYPE_001 = TYPE_001;
exports.buildDescMap = buildDescMap;
exports.errorDescMap = errorDescMap;
exports.getShortErrorMsg = getShortErrorMsg;
exports.runtimeDescMap = runtimeDescMap;
exports.typeDescMap = typeDescMap;


},
"../../node_modules/.pnpm/@module-federation+runtime-core@0.9.1/node_modules/@module-federation/runtime-core/dist/index.cjs.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";


var polyfills = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime-core@0.9.1/node_modules/@module-federation/runtime-core/dist/polyfills.cjs.js");
var sdk = __webpack_require__("../../node_modules/.pnpm/@module-federation+sdk@0.9.1/node_modules/@module-federation/sdk/dist/index.cjs.js");
var errorCodes = __webpack_require__("../../node_modules/.pnpm/@module-federation+error-codes@0.9.1/node_modules/@module-federation/error-codes/dist/index.cjs.js");

const LOG_CATEGORY = '[ Federation Runtime ]';
// FIXME: pre-bundle ?
const logger = sdk.createLogger(LOG_CATEGORY);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
    if (!condition) {
        error(msg);
    }
}
function error(msg) {
    if (msg instanceof Error) {
        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        throw msg;
    }
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
    if (msg instanceof Error) {
        msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        logger.warn(msg);
    } else {
        logger.warn(msg);
    }
}

function addUniqueItem(arr, item) {
    if (arr.findIndex((name)=>name === item) === -1) {
        arr.push(item);
    }
    return arr;
}
function getFMId(remoteInfo) {
    if ('version' in remoteInfo && remoteInfo.version) {
        return `${remoteInfo.name}:${remoteInfo.version}`;
    } else if ('entry' in remoteInfo && remoteInfo.entry) {
        return `${remoteInfo.name}:${remoteInfo.entry}`;
    } else {
        return `${remoteInfo.name}`;
    }
}
function isRemoteInfoWithEntry(remote) {
    return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
    return !remote.entry.includes('.json') && remote.entry.includes('.js');
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeWrapper(callback, disableWarn) {
    try {
        const res = await callback();
        return res;
    } catch (e) {
        !disableWarn && warn(e);
        return;
    }
}
function isObject(val) {
    return val && typeof val === 'object';
}
const objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
    return objectToString.call(val) === '[object Object]';
}
function isStaticResourcesEqual(url1, url2) {
    const REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function arrayOptions(options) {
    return Array.isArray(options) ? options : [
        options
    ];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
    const defaultRemoteEntryInfo = {
        url: '',
        type: 'global',
        globalName: ''
    };
    if (sdk.isBrowserEnv()) {
        return 'remoteEntry' in snapshot ? {
            url: snapshot.remoteEntry,
            type: snapshot.remoteEntryType,
            globalName: snapshot.globalName
        } : defaultRemoteEntryInfo;
    }
    if ('ssrRemoteEntry' in snapshot) {
        return {
            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
            globalName: snapshot.globalName
        };
    }
    return defaultRemoteEntryInfo;
}
const processModuleAlias = (name, subPath)=>{
    // @host/ ./button -> @host/button
    let moduleName;
    if (name.endsWith('/')) {
        moduleName = name.slice(0, -1);
    } else {
        moduleName = name;
    }
    if (subPath.startsWith('.')) {
        subPath = subPath.slice(1);
    }
    moduleName = moduleName + subPath;
    return moduleName;
};

const CurrentGlobal = typeof globalThis === 'object' ? globalThis : window;
const nativeGlobal = (()=>{
    try {
        // get real window (incase of sandbox)
        return document.defaultView;
    } catch (e) {
        // node env
        return CurrentGlobal;
    }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
    Object.defineProperty(target, key, {
        value: val,
        configurable: false,
        writable: true
    });
}
function includeOwnProperty(target, key) {
    return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
    definePropertyGlobalVal(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
    }
    if (!includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map()
        });
        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
    }
    var ___GLOBAL_PLUGIN__;
    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
    var ___INSTANCES__;
    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
    var _moduleInfo;
    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
    var ___SHARE__;
    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
    var ___MANIFEST_LOADING__;
    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
    var ___PRELOADED_MAP__;
    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
    CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
    CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
    CurrentGlobal.__FEDERATION__.moduleInfo = {};
    CurrentGlobal.__FEDERATION__.__SHARE__ = {};
    CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
    Object.keys(globalLoading).forEach((key)=>{
        delete globalLoading[key];
    });
}
function setGlobalFederationInstance(FederationInstance) {
    CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
    return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = sdk.isDebugMode()) {
    if (isDebug) {
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.9.1";
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
    if (typeof key === 'string') {
        const keyRes = target[key];
        if (keyRes) {
            return {
                value: target[key],
                key: key
            };
        } else {
            const targetKeys = Object.keys(target);
            for (const targetKey of targetKeys){
                const [targetTypeOrName, _] = targetKey.split(':');
                const nKey = `${targetTypeOrName}:${key}`;
                const typeWithKeyRes = target[nKey];
                if (typeWithKeyRes) {
                    return {
                        value: typeWithKeyRes,
                        key: nKey
                    };
                }
            }
            return {
                value: undefined,
                key: key
            };
        }
    } else {
        throw new Error('key must be string');
    }
}
const getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot)=>{
    // Check if the remote is included in the hostSnapshot
    const moduleKey = getFMId(moduleInfo);
    const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
    // The remoteSnapshot might not include a version
    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
        getModuleInfo.version = moduleInfo['version'];
    }
    if (getModuleInfo) {
        return getModuleInfo;
    }
    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
    if ('version' in moduleInfo && moduleInfo['version']) {
        const { version } = moduleInfo, resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, [
            "version"
        ]);
        const moduleKeyWithoutVersion = getFMId(resModuleInfo);
        const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
            return getModuleInfoWithoutVersion;
        }
    }
    return;
};
const getGlobalSnapshotInfoByModuleInfo = (moduleInfo)=>getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo)=>{
    const moduleKey = getFMId(remoteInfo);
    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
    return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = (moduleInfos)=>{
    nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
    return ()=>{
        const keys = Object.keys(moduleInfos);
        for (const key of keys){
            delete nativeGlobal.__FEDERATION__.moduleInfo[key];
        }
    };
};
const getRemoteEntryExports = (name, globalName)=>{
    const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
    const entryExports = CurrentGlobal[remoteEntryKey];
    return {
        remoteEntryKey,
        entryExports
    };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
const registerGlobalPlugins = (plugins)=>{
    const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
    plugins.forEach((plugin)=>{
        if (__GLOBAL_PLUGIN__.findIndex((p)=>p.name === plugin.name) === -1) {
            __GLOBAL_PLUGIN__.push(plugin);
        } else {
            warn(`The plugin ${plugin.name} has been registered.`);
        }
    });
};
const getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);

const DEFAULT_SCOPE = 'default';
const DEFAULT_REMOTE_TYPE = 'global';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
const buildIdentifier = '[0-9A-Za-z-]+';
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = '0|[1-9]\\d*';
const numericIdentifierLoose = '[0-9]+';
const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = '((?:<|>)?=?)';
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = '(?:~>?)';
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = '(?:\\^)';
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = '(<|>)?=?\\s*\\*';
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
// copy from semver package
const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseRegex(source) {
    return new RegExp(source);
}
function isXVersion(version) {
    return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe(...fns) {
    return (x)=>fns.reduce((v, f)=>f(v), x);
}
function extractComparator(comparatorString) {
    return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
    const mainVersion = `${major}.${minor}.${patch}`;
    if (preRelease) {
        return `${mainVersion}-${preRelease}`;
    }
    return mainVersion;
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseHyphen(range) {
    return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{
        if (isXVersion(fromMajor)) {
            from = '';
        } else if (isXVersion(fromMinor)) {
            from = `>=${fromMajor}.0.0`;
        } else if (isXVersion(fromPatch)) {
            from = `>=${fromMajor}.${fromMinor}.0`;
        } else {
            from = `>=${from}`;
        }
        if (isXVersion(toMajor)) {
            to = '';
        } else if (isXVersion(toMinor)) {
            to = `<${Number(toMajor) + 1}.0.0-0`;
        } else if (isXVersion(toPatch)) {
            to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
        } else if (toPreRelease) {
            to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    });
}
function parseComparatorTrim(range) {
    return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
    return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
    return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                if (major === '0') {
                    return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
                } else {
                    return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
                }
            } else if (preRelease) {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
                    }
                } else {
                    return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
                }
            } else {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
                    }
                }
                return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
            }
        })).join(' ');
}
function parseTildes(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
            } else if (preRelease) {
                return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        })).join(' ');
}
function parseXRanges(range) {
    return range.split(/\s+/).map((rangeVersion)=>rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease)=>{
            const isXMajor = isXVersion(major);
            const isXMinor = isXMajor || isXVersion(minor);
            const isXPatch = isXMinor || isXVersion(patch);
            if (gtlt === '=' && isXPatch) {
                gtlt = '';
            }
            preRelease = '';
            if (isXMajor) {
                if (gtlt === '>' || gtlt === '<') {
                    // nothing is allowed
                    return '<0.0.0-0';
                } else {
                    // nothing is forbidden
                    return '*';
                }
            } else if (gtlt && isXPatch) {
                // replace X with 0
                if (isXMinor) {
                    minor = 0;
                }
                patch = 0;
                if (gtlt === '>') {
                    // >1 => >=2.0.0
                    // >1.2 => >=1.3.0
                    gtlt = '>=';
                    if (isXMinor) {
                        major = Number(major) + 1;
                        minor = 0;
                        patch = 0;
                    } else {
                        minor = Number(minor) + 1;
                        patch = 0;
                    }
                } else if (gtlt === '<=') {
                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
                    // Similarly, <=7.x is actually <8.0.0, etc.
                    gtlt = '<';
                    if (isXMinor) {
                        major = Number(major) + 1;
                    } else {
                        minor = Number(minor) + 1;
                    }
                }
                if (gtlt === '<') {
                    preRelease = '-0';
                }
                return `${gtlt + major}.${minor}.${patch}${preRelease}`;
            } else if (isXMinor) {
                return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
            } else if (isXPatch) {
                return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return ret;
        })).join(' ');
}
function parseStar(range) {
    return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
    return comparatorString.trim().replace(parseRegex(gte0), '');
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
    rangeAtom = Number(rangeAtom) || rangeAtom;
    versionAtom = Number(versionAtom) || versionAtom;
    if (rangeAtom > versionAtom) {
        return 1;
    }
    if (rangeAtom === versionAtom) {
        return 0;
    }
    return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
    const { preRelease: rangePreRelease } = rangeAtom;
    const { preRelease: versionPreRelease } = versionAtom;
    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
        return 1;
    }
    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
        return -1;
    }
    if (rangePreRelease === undefined && versionPreRelease === undefined) {
        return 0;
    }
    for(let i = 0, n = rangePreRelease.length; i <= n; i++){
        const rangeElement = rangePreRelease[i];
        const versionElement = versionPreRelease[i];
        if (rangeElement === versionElement) {
            continue;
        }
        if (rangeElement === undefined && versionElement === undefined) {
            return 0;
        }
        if (!rangeElement) {
            return 1;
        }
        if (!versionElement) {
            return -1;
        }
        return compareAtom(rangeElement, versionElement);
    }
    return 0;
}
function compareVersion(rangeAtom, versionAtom) {
    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
    return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
    switch(rangeAtom.operator){
        case '':
        case '=':
            return eq(rangeAtom, versionAtom);
        case '>':
            return compareVersion(rangeAtom, versionAtom) < 0;
        case '>=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
        case '<':
            return compareVersion(rangeAtom, versionAtom) > 0;
        case '<=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
        case undefined:
            {
                // mean * or x -> all versions
                return true;
            }
        default:
            return false;
    }
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseComparatorString(range) {
    return pipe(// handle caret
    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets, // handle tilde
    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
    return pipe(// handle hyphenRange
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen, // handle trim comparator
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim, // handle trim tilde
    // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim, // handle trim caret
    // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
    if (!version) {
        return false;
    }
    const parsedRange = parseRange(range);
    const parsedComparator = parsedRange.split(' ').map((rangeVersion)=>parseComparatorString(rangeVersion)).join(' ');
    const comparators = parsedComparator.split(/\s+/).map((comparator)=>parseGTE0(comparator));
    const extractedVersion = extractComparator(version);
    if (!extractedVersion) {
        return false;
    }
    const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
    const versionAtom = {
        operator: versionOperator,
        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
        major: versionMajor,
        minor: versionMinor,
        patch: versionPatch,
        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
    };
    for (const comparator of comparators){
        const extractedComparator = extractComparator(comparator);
        if (!extractedComparator) {
            return false;
        }
        const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
        const rangeAtom = {
            operator: rangeOperator,
            version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
            major: rangeMajor,
            minor: rangeMinor,
            patch: rangePatch,
            preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
        };
        if (!compare(rangeAtom, versionAtom)) {
            return false; // early return
        }
    }
    return true;
}

function formatShare(shareArgs, from, name, shareStrategy) {
    let get;
    if ('get' in shareArgs) {
        // eslint-disable-next-line prefer-destructuring
        get = shareArgs.get;
    } else if ('lib' in shareArgs) {
        get = ()=>Promise.resolve(shareArgs.lib);
    } else {
        get = ()=>Promise.resolve(()=>{
                throw new Error(`Can not get shared '${name}'!`);
            });
    }
    if (shareArgs.strategy) {
        warn(`"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"`);
    }
    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
    return polyfills._extends({
        deps: [],
        useIn: [],
        from,
        loading: null
    }, shareArgs, {
        shareConfig: polyfills._extends({
            requiredVersion: `^${shareArgs.version}`,
            singleton: false,
            eager: false,
            strictVersion: false
        }, shareArgs.shareConfig),
        get,
        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'
        ],
        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
    });
}
function formatShareConfigs(globalOptions, userOptions) {
    const shareArgs = userOptions.shared || {};
    const from = userOptions.name;
    const shareInfos = Object.keys(shareArgs).reduce((res, pkgName)=>{
        const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
        res[pkgName] = res[pkgName] || [];
        arrayShareArgs.forEach((shareConfig)=>{
            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
        });
        return res;
    }, {});
    const shared = polyfills._extends({}, globalOptions.shared);
    Object.keys(shareInfos).forEach((shareKey)=>{
        if (!shared[shareKey]) {
            shared[shareKey] = shareInfos[shareKey];
        } else {
            shareInfos[shareKey].forEach((newUserSharedOptions)=>{
                const isSameVersion = shared[shareKey].find((sharedVal)=>sharedVal.version === newUserSharedOptions.version);
                if (!isSameVersion) {
                    shared[shareKey].push(newUserSharedOptions);
                }
            });
        }
    });
    return {
        shared,
        shareInfos
    };
}
function versionLt(a, b) {
    const transformInvalidVersion = (version)=>{
        const isNumberVersion = !Number.isNaN(Number(version));
        if (isNumberVersion) {
            const splitArr = version.split('.');
            let validVersion = version;
            for(let i = 0; i < 3 - splitArr.length; i++){
                validVersion += '.0';
            }
            return validVersion;
        }
        return version;
    };
    if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
        return true;
    } else {
        return false;
    }
}
const findVersion = (shareVersionMap, cb)=>{
    const callback = cb || function(prev, cur) {
        return versionLt(prev, cur);
    };
    return Object.keys(shareVersionMap).reduce((prev, cur)=>{
        if (!prev) {
            return cur;
        }
        if (callback(prev, cur)) {
            return cur;
        }
        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
        if (prev === '0') {
            return cur;
        }
        return prev;
    }, 0);
};
const isLoaded = (shared)=>{
    return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
const isLoading = (shared)=>{
    return Boolean(shared.loading);
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        return !isLoaded(versions[prev]) && versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        const isLoadingOrLoaded = (shared)=>{
            return isLoaded(shared) || isLoading(shared);
        };
        if (isLoadingOrLoaded(versions[cur])) {
            if (isLoadingOrLoaded(versions[prev])) {
                return Boolean(versionLt(prev, cur));
            } else {
                return true;
            }
        }
        if (isLoadingOrLoaded(versions[prev])) {
            return false;
        }
        return versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
    if (strategy === 'loaded-first') {
        return findSingletonVersionOrderByLoaded;
    }
    return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
    if (!localShareScopeMap) {
        return;
    }
    const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
    const scopes = Array.isArray(scope) ? scope : [
        scope
    ];
    for (const sc of scopes){
        if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
            const { requiredVersion } = shareConfig;
            const findShareFunction = getFindShareFunction(strategy);
            const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
            //@ts-ignore
            const defaultResolver = ()=>{
                if (shareConfig.singleton) {
                    if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
                        const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
                        if (shareConfig.strictVersion) {
                            error(msg);
                        } else {
                            warn(msg);
                        }
                    }
                    return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                } else {
                    if (requiredVersion === false || requiredVersion === '*') {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    if (satisfy(maxOrSingletonVersion, requiredVersion)) {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])){
                        if (satisfy(versionKey, requiredVersion)) {
                            return versionValue;
                        }
                    }
                }
            };
            const params = {
                shareScopeMap: localShareScopeMap,
                scope: sc,
                pkgName,
                version: maxOrSingletonVersion,
                GlobalFederation: Global.__FEDERATION__,
                resolver: defaultResolver
            };
            const resolveShared = resolveShare.emit(params) || params;
            return resolveShared.resolver();
        }
    }
}
function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
    const { pkgName, extraOptions, shareInfos } = options;
    const defaultResolver = (sharedOptions)=>{
        if (!sharedOptions) {
            return undefined;
        }
        const shareVersionMap = {};
        sharedOptions.forEach((shared)=>{
            shareVersionMap[shared.version] = shared;
        });
        const callback = function(prev, cur) {
            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
        };
        const maxVersion = findVersion(shareVersionMap, callback);
        return shareVersionMap[maxVersion];
    };
    var _extraOptions_resolver;
    const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}

const ShareUtils = {
    getRegisteredShare,
    getGlobalShareScope
};
const GlobalUtils = {
    Global,
    nativeGlobal,
    resetFederationGlobalInfo,
    setGlobalFederationInstance,
    getGlobalFederationConstructor,
    setGlobalFederationConstructor,
    getInfoWithoutType,
    getGlobalSnapshot,
    getTargetSnapshotInfoByModuleInfo,
    getGlobalSnapshotInfoByModuleInfo,
    setGlobalSnapshotInfoByModuleInfo,
    addGlobalSnapshot,
    getRemoteEntryExports,
    registerGlobalPlugins,
    getGlobalHostPlugins,
    getPreloaded,
    setPreloaded
};
var helpers = {
    global: GlobalUtils,
    share: ShareUtils
};

function getBuilderId() {
    //@ts-ignore
    return  true ? "app_c:0.0.1" : 0;
}

// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
    for (const remote of remotes){
        // match pkgName
        const isNameMatched = id.startsWith(remote.name);
        let expose = id.replace(remote.name, '');
        if (isNameMatched) {
            if (expose.startsWith('/')) {
                const pkgNameOrAlias = remote.name;
                expose = `.${expose}`;
                return {
                    pkgNameOrAlias,
                    expose,
                    remote
                };
            } else if (expose === '') {
                return {
                    pkgNameOrAlias: remote.name,
                    expose: '.',
                    remote
                };
            }
        }
        // match alias
        const isAliasMatched = remote.alias && id.startsWith(remote.alias);
        let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
        if (remote.alias && isAliasMatched) {
            if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
                const pkgNameOrAlias = remote.alias;
                exposeWithAlias = `.${exposeWithAlias}`;
                return {
                    pkgNameOrAlias,
                    expose: exposeWithAlias,
                    remote
                };
            } else if (exposeWithAlias === '') {
                return {
                    pkgNameOrAlias: remote.alias,
                    expose: '.',
                    remote
                };
            }
        }
    }
    return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
    for (const remote of remotes){
        const isNameMatched = nameOrAlias === remote.name;
        if (isNameMatched) {
            return remote;
        }
        const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
        if (isAliasMatched) {
            return remote;
        }
    }
    return;
}

function registerPlugins(plugins, hookInstances) {
    const globalPlugins = getGlobalHostPlugins();
    // Incorporate global plugins
    if (globalPlugins.length > 0) {
        globalPlugins.forEach((plugin)=>{
            if (plugins == null ? void 0 : plugins.find((item)=>item.name !== plugin.name)) {
                plugins.push(plugin);
            }
        });
    }
    if (plugins && plugins.length > 0) {
        plugins.forEach((plugin)=>{
            hookInstances.forEach((hookInstance)=>{
                hookInstance.applyPlugin(plugin);
            });
        });
    }
    return plugins;
}

async function loadEsmEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== 'undefined') {
                    new Function('callbacks', `import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
                        resolve,
                        reject
                    ]);
                } else {
                    import(/* webpackIgnore: true */ /* @vite-ignore */ entry).then(resolve).catch(reject);
                }
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function loadSystemJsEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                //@ts-ignore
                if (false) {} else {
                    new Function('callbacks', `System.import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
                        resolve,
                        reject
                    ]);
                }
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function loadEntryScript({ name, globalName, entry, loaderHook }) {
    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    return sdk.loadScript(entry, {
        attrs: {},
        createScriptHook: (url, attrs)=>{
            const res = loaderHook.lifecycle.createScript.emit({
                url,
                attrs
            });
            if (!res) return;
            if (res instanceof HTMLScriptElement) {
                return res;
            }
            if ('script' in res || 'timeout' in res) {
                return res;
            }
            return;
        }
    }).then(()=>{
        const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
        assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
            remoteName: name,
            remoteEntryUrl: entry,
            remoteEntryKey
        }));
        return entryExports;
    }).catch((e)=>{
        assert(undefined, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_008, errorCodes.runtimeDescMap, {
            remoteName: name,
            resourceUrl: entry
        }));
        throw e;
    });
}
async function loadEntryDom({ remoteInfo, remoteEntryExports, loaderHook }) {
    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
    switch(type){
        case 'esm':
        case 'module':
            return loadEsmEntry({
                entry,
                remoteEntryExports
            });
        case 'system':
            return loadSystemJsEntry({
                entry,
                remoteEntryExports
            });
        default:
            return loadEntryScript({
                entry,
                globalName,
                name,
                loaderHook
            });
    }
}
async function loadEntryNode({ remoteInfo, loaderHook }) {
    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    return sdk.loadScriptNode(entry, {
        attrs: {
            name,
            globalName,
            type
        },
        loaderHook: {
            createScriptHook: (url, attrs = {})=>{
                const res = loaderHook.lifecycle.createScript.emit({
                    url,
                    attrs
                });
                if (!res) return;
                if ('url' in res) {
                    return res;
                }
                return;
            }
        }
    }).then(()=>{
        const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
        assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
            remoteName: name,
            remoteEntryUrl: entry,
            remoteEntryKey
        }));
        return entryExports;
    }).catch((e)=>{
        throw e;
    });
}
function getRemoteEntryUniqueKey(remoteInfo) {
    const { entry, name } = remoteInfo;
    return sdk.composeKeyWithSeparator(name, entry);
}
async function getRemoteEntry({ origin, remoteEntryExports, remoteInfo }) {
    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    if (!globalLoading[uniqueKey]) {
        const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
        const loaderHook = origin.loaderHook;
        globalLoading[uniqueKey] = loadEntryHook.emit({
            loaderHook,
            remoteInfo,
            remoteEntryExports
        }).then((res)=>{
            if (res) {
                return res;
            }
            return sdk.isBrowserEnv() ? loadEntryDom({
                remoteInfo,
                remoteEntryExports,
                loaderHook
            }) : loadEntryNode({
                remoteInfo,
                loaderHook
            });
        });
    }
    return globalLoading[uniqueKey];
}
function getRemoteInfo(remote) {
    return polyfills._extends({}, remote, {
        entry: 'entry' in remote ? remote.entry : '',
        type: remote.type || DEFAULT_REMOTE_TYPE,
        entryGlobalName: remote.entryGlobalName || remote.name,
        shareScope: remote.shareScope || DEFAULT_SCOPE
    });
}

let Module = class Module {
    async getEntry() {
        if (this.remoteEntryExports) {
            return this.remoteEntryExports;
        }
        let remoteEntryExports;
        try {
            remoteEntryExports = await getRemoteEntry({
                origin: this.host,
                remoteInfo: this.remoteInfo,
                remoteEntryExports: this.remoteEntryExports
            });
        } catch (err) {
            const uniqueKey = getRemoteEntryUniqueKey(this.remoteInfo);
            remoteEntryExports = await this.host.loaderHook.lifecycle.loadEntryError.emit({
                getRemoteEntry,
                origin: this.host,
                remoteInfo: this.remoteInfo,
                remoteEntryExports: this.remoteEntryExports,
                globalLoading,
                uniqueKey
            });
        }
        assert(remoteEntryExports, `remoteEntryExports is undefined \n ${sdk.safeToString(this.remoteInfo)}`);
        this.remoteEntryExports = remoteEntryExports;
        return this.remoteEntryExports;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(id, expose, options, remoteSnapshot) {
        const { loadFactory = true } = options || {
            loadFactory: true
        };
        // Get remoteEntry.js
        const remoteEntryExports = await this.getEntry();
        if (!this.inited) {
            const localShareScopeMap = this.host.shareScopeMap;
            const remoteShareScope = this.remoteInfo.shareScope || 'default';
            if (!localShareScopeMap[remoteShareScope]) {
                localShareScopeMap[remoteShareScope] = {};
            }
            const shareScope = localShareScopeMap[remoteShareScope];
            const initScope = [];
            const remoteEntryInitOptions = {
                version: this.remoteInfo.version || ''
            };
            // Help to find host instance
            Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
                value: localShareScopeMap,
                // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
                enumerable: false
            });
            const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope,
                // @ts-ignore shareScopeMap will be set by Object.defineProperty
                remoteEntryInitOptions,
                initScope,
                remoteInfo: this.remoteInfo,
                origin: this.host
            });
            if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_002, errorCodes.runtimeDescMap, {
                    remoteName: name,
                    remoteEntryUrl: this.remoteInfo.entry,
                    remoteEntryKey: this.remoteInfo.entryGlobalName
                }));
            }
            await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
            await this.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {
                id,
                remoteSnapshot,
                remoteEntryExports
            }));
        }
        this.lib = remoteEntryExports;
        this.inited = true;
        let moduleFactory;
        moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
            remoteEntryExports,
            expose,
            moduleInfo: this.remoteInfo
        });
        // get exposeGetter
        if (!moduleFactory) {
            moduleFactory = await remoteEntryExports.get(expose);
        }
        assert(moduleFactory, `${getFMId(this.remoteInfo)} remote don't export ${expose}.`);
        // keep symbol for module name always one format
        const symbolName = processModuleAlias(this.remoteInfo.name, expose);
        const wrapModuleFactory = this.wraperFactory(moduleFactory, symbolName);
        if (!loadFactory) {
            return wrapModuleFactory;
        }
        const exposeContent = await wrapModuleFactory();
        return exposeContent;
    }
    wraperFactory(moduleFactory, id) {
        function defineModuleId(res, id) {
            if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
                Object.defineProperty(res, Symbol.for('mf_module_id'), {
                    value: id,
                    enumerable: false
                });
            }
        }
        if (moduleFactory instanceof Promise) {
            return async ()=>{
                const res = await moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        } else {
            return ()=>{
                const res = moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        }
    }
    constructor({ remoteInfo, host }){
        this.inited = false;
        this.lib = undefined;
        this.remoteInfo = remoteInfo;
        this.host = host;
    }
};

class SyncHook {
    on(fn) {
        if (typeof fn === 'function') {
            this.listeners.add(fn);
        }
    }
    once(fn) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.on(function wrapper(...args) {
            self.remove(wrapper);
            // eslint-disable-next-line prefer-spread
            return fn.apply(null, args);
        });
    }
    emit(...data) {
        let result;
        if (this.listeners.size > 0) {
            // eslint-disable-next-line prefer-spread
            this.listeners.forEach((fn)=>{
                result = fn(...data);
            });
        }
        return result;
    }
    remove(fn) {
        this.listeners.delete(fn);
    }
    removeAll() {
        this.listeners.clear();
    }
    constructor(type){
        this.type = '';
        this.listeners = new Set();
        if (type) {
            this.type = type;
        }
    }
}

class AsyncHook extends SyncHook {
    emit(...data) {
        let result;
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const call = (prev)=>{
                if (prev === false) {
                    return false; // Abort process
                } else if (i < ls.length) {
                    return Promise.resolve(ls[i++].apply(null, data)).then(call);
                } else {
                    return prev;
                }
            };
            result = call();
        }
        return Promise.resolve(result);
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
    if (!isObject(returnedData)) {
        return false;
    }
    if (originalData !== returnedData) {
        // eslint-disable-next-line no-restricted-syntax
        for(const key in originalData){
            if (!(key in returnedData)) {
                return false;
            }
        }
    }
    return true;
}
class SyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!isObject(data)) {
            error(`The data for the "${this.type}" hook should be an object.`);
        }
        for (const fn of this.listeners){
            try {
                const tempData = fn(data);
                if (checkReturnData(data, tempData)) {
                    data = tempData;
                } else {
                    this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                    break;
                }
            } catch (e) {
                warn(e);
                this.onerror(e);
            }
        }
        return data;
    }
    constructor(type){
        super(), this.onerror = error;
        this.type = type;
    }
}

class AsyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!isObject(data)) {
            error(`The response data for the "${this.type}" hook must be an object.`);
        }
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const processError = (e)=>{
                warn(e);
                this.onerror(e);
                return data;
            };
            const call = (prevData)=>{
                if (checkReturnData(data, prevData)) {
                    data = prevData;
                    if (i < ls.length) {
                        try {
                            return Promise.resolve(ls[i++](data)).then(call, processError);
                        } catch (e) {
                            return processError(e);
                        }
                    }
                } else {
                    this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                }
                return data;
            };
            return Promise.resolve(call(data));
        }
        return Promise.resolve(data);
    }
    constructor(type){
        super(), this.onerror = error;
        this.type = type;
    }
}

class PluginSystem {
    applyPlugin(plugin) {
        assert(isPlainObject(plugin), 'Plugin configuration is invalid.');
        // The plugin's name is mandatory and must be unique
        const pluginName = plugin.name;
        assert(pluginName, 'A name must be provided by the plugin.');
        if (!this.registerPlugins[pluginName]) {
            this.registerPlugins[pluginName] = plugin;
            Object.keys(this.lifecycle).forEach((key)=>{
                const pluginLife = plugin[key];
                if (pluginLife) {
                    this.lifecycle[key].on(pluginLife);
                }
            });
        }
    }
    removePlugin(pluginName) {
        assert(pluginName, 'A name is required.');
        const plugin = this.registerPlugins[pluginName];
        assert(plugin, `The plugin "${pluginName}" is not registered.`);
        Object.keys(plugin).forEach((key)=>{
            if (key !== 'name') {
                this.lifecycle[key].remove(plugin[key]);
            }
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    inherit({ lifecycle, registerPlugins }) {
        Object.keys(lifecycle).forEach((hookName)=>{
            assert(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
            this.lifecycle[hookName] = lifecycle[hookName];
        });
        Object.keys(registerPlugins).forEach((pluginName)=>{
            assert(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
            this.applyPlugin(registerPlugins[pluginName]);
        });
    }
    constructor(lifecycle){
        this.registerPlugins = {};
        this.lifecycle = lifecycle;
        this.lifecycleKeys = Object.keys(lifecycle);
    }
}

function defaultPreloadArgs(preloadConfig) {
    return polyfills._extends({
        resourceCategory: 'sync',
        share: true,
        depsRemote: true,
        prefetchInterface: false
    }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
    return preloadArgs.map((args)=>{
        const remoteInfo = matchRemote(remotes, args.nameOrAlias);
        assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && sdk.safeToString({
            remoteInfo,
            remotes
        })}`);
        return {
            remote: remoteInfo,
            preloadConfig: defaultPreloadArgs(args)
        };
    });
}
function normalizePreloadExposes(exposes) {
    if (!exposes) {
        return [];
    }
    return exposes.map((expose)=>{
        if (expose === '.') {
            return expose;
        }
        if (expose.startsWith('./')) {
            return expose.replace('./', '');
        }
        return expose;
    });
}
function preloadAssets(remoteInfo, host, assets, // It is used to distinguish preload from load remote parallel loading
useLinkPreload = true) {
    const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
    if (host.options.inBrowser) {
        entryAssets.forEach((asset)=>{
            const { moduleInfo } = asset;
            const module = host.moduleCache.get(remoteInfo.name);
            if (module) {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: module.remoteEntryExports
                });
            } else {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: undefined
                });
            }
        });
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'style'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = sdk.createLink({
                    url: cssUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(cssEl);
            });
        } else {
            const defaultAttrs = {
                rel: 'stylesheet',
                type: 'text/css'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = sdk.createLink({
                    url: cssUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteLink: false
                });
                needAttach && document.head.appendChild(cssEl);
            });
        }
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'script'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { link: linkEl, needAttach } = sdk.createLink({
                    url: jsUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(linkEl);
            });
        } else {
            const defaultAttrs = {
                fetchpriority: 'high',
                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { script: scriptEl, needAttach } = sdk.createScript({
                    url: jsUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createScriptHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createScript.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLScriptElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteScript: true
                });
                needAttach && document.head.appendChild(scriptEl);
            });
        }
    }
}

function assignRemoteInfo(remoteInfo, remoteSnapshot) {
    const remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
    if (!remoteEntryInfo.url) {
        error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
    }
    let entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);
    if (!sdk.isBrowserEnv() && !entryUrl.startsWith('http')) {
        entryUrl = `https:${entryUrl}`;
    }
    remoteInfo.type = remoteEntryInfo.type;
    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
    remoteInfo.entry = entryUrl;
    remoteInfo.version = remoteSnapshot.version;
    remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
    return {
        name: 'snapshot-plugin',
        async afterResolve (args) {
            const { remote, pkgNameOrAlias, expose, origin, remoteInfo } = args;
            if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
                const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo(remote);
                assignRemoteInfo(remoteInfo, remoteSnapshot);
                // preloading assets
                const preloadOptions = {
                    remote,
                    preloadConfig: {
                        nameOrAlias: pkgNameOrAlias,
                        exposes: [
                            expose
                        ],
                        resourceCategory: 'sync',
                        share: false,
                        depsRemote: false
                    }
                };
                const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                    origin,
                    preloadOptions,
                    remoteInfo,
                    remote,
                    remoteSnapshot,
                    globalSnapshot
                });
                if (assets) {
                    preloadAssets(remoteInfo, origin, assets, false);
                }
                return polyfills._extends({}, args, {
                    remoteSnapshot
                });
            }
            return args;
        }
    };
}

// name
// name:version
function splitId(id) {
    const splitInfo = id.split(':');
    if (splitInfo.length === 1) {
        return {
            name: splitInfo[0],
            version: undefined
        };
    } else if (splitInfo.length === 2) {
        return {
            name: splitInfo[0],
            version: splitInfo[1]
        };
    } else {
        return {
            name: splitInfo[1],
            version: splitInfo[2]
        };
    }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
    const id = getFMId(remoteInfo);
    const { value: snapshotValue } = getInfoWithoutType(globalSnapshot, id);
    const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
    if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {
        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
        if (effectiveRemoteSnapshot.remotesInfo) {
            const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
            for (const key of remoteKeys){
                if (memo[key]) {
                    continue;
                }
                memo[key] = true;
                const subRemoteInfo = splitId(key);
                const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
                traverseModuleInfo(globalSnapshot, {
                    name: subRemoteInfo.name,
                    version: remoteValue.matchedVersion
                }, traverse, false, memo, undefined);
            }
        }
    }
}
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
    const cssAssets = [];
    const jsAssets = [];
    const entryAssets = [];
    const loadedSharedJsAssets = new Set();
    const loadedSharedCssAssets = new Set();
    const { options } = origin;
    const { preloadConfig: rootPreloadConfig } = preloadOptions;
    const { depsRemote } = rootPreloadConfig;
    const memo = {};
    traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot)=>{
        let preloadConfig;
        if (isRoot) {
            preloadConfig = rootPreloadConfig;
        } else {
            if (Array.isArray(depsRemote)) {
                // eslint-disable-next-line array-callback-return
                const findPreloadConfig = depsRemote.find((remoteConfig)=>{
                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
                        return true;
                    }
                    return false;
                });
                if (!findPreloadConfig) {
                    return;
                }
                preloadConfig = defaultPreloadArgs(findPreloadConfig);
            } else if (depsRemote === true) {
                preloadConfig = rootPreloadConfig;
            } else {
                return;
            }
        }
        const remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
        if (remoteEntryUrl) {
            entryAssets.push({
                name: remoteInfo.name,
                moduleInfo: {
                    name: remoteInfo.name,
                    entry: remoteEntryUrl,
                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
                    shareScope: '',
                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
                },
                url: remoteEntryUrl
            });
        }
        let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
        const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
            var _moduleInfoSnapshot_modules;
            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo)=>{
                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
                    assets.push(moduleAssetInfo);
                }
                return assets;
            }, []);
        }
        function handleAssets(assets) {
            const assetsRes = assets.map((asset)=>sdk.getResourceUrl(moduleInfoSnapshot, asset));
            if (preloadConfig.filter) {
                return assetsRes.filter(preloadConfig.filter);
            }
            return assetsRes;
        }
        if (moduleAssetsInfo) {
            const assetsLength = moduleAssetsInfo.length;
            for(let index = 0; index < assetsLength; index++){
                const assetsInfo = moduleAssetsInfo[index];
                const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
                    name: remoteInfo.name,
                    remoteSnapshot: moduleInfoSnapshot,
                    preloadConfig,
                    remote: remoteInfo,
                    origin
                });
                const preloaded = getPreloaded(exposeFullPath);
                if (preloaded) {
                    continue;
                }
                if (preloadConfig.resourceCategory === 'all') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                // eslint-disable-next-line no-constant-condition
                } else if (preloadConfig.resourceCategory = 'sync') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                }
                setPreloaded(exposeFullPath);
            }
        }
    }, true, memo, remoteSnapshot);
    if (remoteSnapshot.shared) {
        const collectSharedAssets = (shareInfo, snapshotShared)=>{
            const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
            if (registeredShared && typeof registeredShared.lib === 'function') {
                snapshotShared.assets.js.sync.forEach((asset)=>{
                    loadedSharedJsAssets.add(asset);
                });
                snapshotShared.assets.css.sync.forEach((asset)=>{
                    loadedSharedCssAssets.add(asset);
                });
            }
        };
        remoteSnapshot.shared.forEach((shared)=>{
            var _options_shared;
            const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
            if (!shareInfos) {
                return;
            }
            // if no version, preload all shared
            const sharedOptions = shared.version ? shareInfos.find((s)=>s.version === shared.version) : shareInfos;
            if (!sharedOptions) {
                return;
            }
            const arrayShareInfo = arrayOptions(sharedOptions);
            arrayShareInfo.forEach((s)=>{
                collectSharedAssets(s, shared);
            });
        });
    }
    const needPreloadJsAssets = jsAssets.filter((asset)=>!loadedSharedJsAssets.has(asset));
    const needPreloadCssAssets = cssAssets.filter((asset)=>!loadedSharedCssAssets.has(asset));
    return {
        cssAssets: needPreloadCssAssets,
        jsAssetsWithoutEntry: needPreloadJsAssets,
        entryAssets
    };
}
const generatePreloadAssetsPlugin = function() {
    return {
        name: 'generate-preload-assets-plugin',
        async generatePreloadAssets (args) {
            const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
            if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
                return {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: [
                        {
                            name: remote.name,
                            url: remote.entry,
                            moduleInfo: {
                                name: remoteInfo.name,
                                entry: remote.entry,
                                type: remoteInfo.type || 'global',
                                entryGlobalName: '',
                                shareScope: ''
                            }
                        }
                    ]
                };
            }
            assignRemoteInfo(remoteInfo, remoteSnapshot);
            const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
            return assets;
        }
    };
};

function getGlobalRemoteInfo(moduleInfo, origin) {
    const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
        name: origin.options.name,
        version: origin.options.version
    });
    // get remote detail info from global
    const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
        return {
            hostGlobalSnapshot,
            globalSnapshot: getGlobalSnapshot(),
            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                name: moduleInfo.name,
                version: globalRemoteInfo.matchedVersion
            })
        };
    }
    return {
        hostGlobalSnapshot: undefined,
        globalSnapshot: getGlobalSnapshot(),
        remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
            name: moduleInfo.name,
            version: 'version' in moduleInfo ? moduleInfo.version : undefined
        })
    };
}
class SnapshotHandler {
    async loadSnapshot(moduleInfo) {
        const { options } = this.HostInstance;
        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
            options,
            moduleInfo,
            hostGlobalSnapshot,
            remoteSnapshot,
            globalSnapshot
        });
        return {
            remoteSnapshot: globalRemoteSnapshot,
            globalSnapshot: globalSnapshotRes
        };
    }
    // eslint-disable-next-line max-lines-per-function
    async loadRemoteSnapshotInfo(moduleInfo) {
        const { options } = this.HostInstance;
        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options,
            moduleInfo
        });
        let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version
        });
        if (!hostSnapshot) {
            hostSnapshot = {
                version: this.HostInstance.options.version || '',
                remoteEntry: '',
                remotesInfo: {}
            };
            addGlobalSnapshot({
                [this.HostInstance.options.name]: hostSnapshot
            });
        }
        // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
        // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
        if (hostSnapshot && 'remotesInfo' in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
            if ('version' in moduleInfo || 'entry' in moduleInfo) {
                hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
                    [moduleInfo.name]: {
                        matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
                    }
                });
            }
        }
        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
            options,
            moduleInfo,
            hostGlobalSnapshot,
            remoteSnapshot,
            globalSnapshot
        });
        let mSnapshot;
        let gSnapshot;
        // global snapshot includes manifest or module info includes manifest
        if (globalRemoteSnapshot) {
            if (sdk.isManifestProvider(globalRemoteSnapshot)) {
                const remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
                const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {
                    // The global remote may be overridden
                    // Therefore, set the snapshot key to the global address of the actual request
                    entry: remoteEntry
                }), moduleSnapshot);
                mSnapshot = moduleSnapshot;
                gSnapshot = globalSnapshotRes;
            } else {
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: globalRemoteSnapshot,
                    from: 'global'
                });
                mSnapshot = remoteSnapshotRes;
                gSnapshot = globalSnapshotRes;
            }
        } else {
            if (isRemoteInfoWithEntry(moduleInfo)) {
                // get from manifest.json and merge remote info from remote server
                const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: moduleSnapshot,
                    from: 'global'
                });
                mSnapshot = remoteSnapshotRes;
                gSnapshot = globalSnapshotRes;
            } else {
                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_007, errorCodes.runtimeDescMap, {
                    hostName: moduleInfo.name,
                    hostVersion: moduleInfo.version,
                    globalSnapshot: JSON.stringify(globalSnapshotRes)
                }));
            }
        }
        await this.hooks.lifecycle.afterLoadSnapshot.emit({
            options,
            moduleInfo,
            remoteSnapshot: mSnapshot
        });
        return {
            remoteSnapshot: mSnapshot,
            globalSnapshot: gSnapshot
        };
    }
    getGlobalRemoteInfo(moduleInfo) {
        return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
    }
    async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
        const getManifest = async ()=>{
            let manifestJson = this.manifestCache.get(manifestUrl);
            if (manifestJson) {
                return manifestJson;
            }
            try {
                let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
                if (!res || !(res instanceof Response)) {
                    res = await fetch(manifestUrl, {});
                }
                manifestJson = await res.json();
            } catch (err) {
                manifestJson = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                    id: manifestUrl,
                    error,
                    from: 'runtime',
                    lifecycle: 'afterResolve',
                    origin: this.HostInstance
                });
                if (!manifestJson) {
                    delete this.manifestLoading[manifestUrl];
                    error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_003, errorCodes.runtimeDescMap, {
                        manifestUrl,
                        moduleName: moduleInfo.name
                    }, `${err}`));
                }
            }
            assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
            this.manifestCache.set(manifestUrl, manifestJson);
            return manifestJson;
        };
        const asyncLoadProcess = async ()=>{
            const manifestJson = await getManifest();
            const remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {
                version: manifestUrl
            });
            const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo,
                manifestJson,
                remoteSnapshot,
                manifestUrl,
                from: 'manifest'
            });
            return remoteSnapshotRes;
        };
        if (!this.manifestLoading[manifestUrl]) {
            this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res)=>res);
        }
        return this.manifestLoading[manifestUrl];
    }
    constructor(HostInstance){
        this.loadingHostSnapshot = null;
        this.manifestCache = new Map();
        this.hooks = new PluginSystem({
            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
            afterLoadSnapshot: new AsyncWaterfallHook('afterLoadSnapshot')
        });
        this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
        this.HostInstance = HostInstance;
        this.loaderHook = HostInstance.loaderHook;
    }
}

class SharedHandler {
    // register shared in shareScopeMap
    registerShared(globalOptions, userOptions) {
        const { shareInfos, shared } = formatShareConfigs(globalOptions, userOptions);
        const sharedKeys = Object.keys(shareInfos);
        sharedKeys.forEach((sharedKey)=>{
            const sharedVals = shareInfos[sharedKey];
            sharedVals.forEach((sharedVal)=>{
                const registeredShared = getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
                if (!registeredShared && sharedVal && sharedVal.lib) {
                    this.setShared({
                        pkgName: sharedKey,
                        lib: sharedVal.lib,
                        get: sharedVal.get,
                        loaded: true,
                        shared: sharedVal,
                        from: userOptions.name
                    });
                }
            });
        });
        return {
            shareInfos,
            shared
        };
    }
    async loadShare(pkgName, extraOptions) {
        const { host } = this;
        // This function performs the following steps:
        // 1. Checks if the currently loaded share already exists, if not, it throws an error
        // 2. Searches globally for a matching share, if found, it uses it directly
        // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
        const shareInfo = getTargetSharedOptions({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareInfo == null ? void 0 : shareInfo.scope) {
            await Promise.all(shareInfo.scope.map(async (shareScope)=>{
                await Promise.all(this.initializeSharing(shareScope, {
                    strategy: shareInfo.strategy
                }));
                return;
            }));
        }
        const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName,
            shareInfo,
            shared: host.options.shared,
            origin: host
        });
        const { shareInfo: shareInfoRes } = loadShareRes;
        // Assert that shareInfoRes exists, if not, throw an error
        assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
        // Retrieve from cache
        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            addUniqueItem(shared.useIn, host.options.name);
        };
        if (registeredShared && registeredShared.lib) {
            addUseIn(registeredShared);
            return registeredShared.lib;
        } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
            const factory = await registeredShared.loading;
            registeredShared.loaded = true;
            if (!registeredShared.lib) {
                registeredShared.lib = factory;
            }
            addUseIn(registeredShared);
            return factory;
        } else if (registeredShared) {
            const asyncLoadProcess = async ()=>{
                const factory = await registeredShared.get();
                shareInfoRes.lib = factory;
                shareInfoRes.loaded = true;
                addUseIn(shareInfoRes);
                const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
                if (gShared) {
                    gShared.lib = factory;
                    gShared.loaded = true;
                }
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: registeredShared,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        } else {
            if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
                return false;
            }
            const asyncLoadProcess = async ()=>{
                const factory = await shareInfoRes.get();
                shareInfoRes.lib = factory;
                shareInfoRes.loaded = true;
                addUseIn(shareInfoRes);
                const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
                if (gShared) {
                    gShared.lib = factory;
                    gShared.loaded = true;
                }
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: shareInfoRes,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        }
    }
    /**
   * This function initializes the sharing sequence (executed only once per share scope).
   * It accepts one argument, the name of the share scope.
   * If the share scope does not exist, it creates one.
   */ // eslint-disable-next-line @typescript-eslint/member-ordering
    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
        const { host } = this;
        const from = extraOptions == null ? void 0 : extraOptions.from;
        const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
        let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
        const promises = [];
        if (from !== 'build') {
            const { initTokens } = this;
            if (!initScope) initScope = [];
            let initToken = initTokens[shareScopeName];
            if (!initToken) initToken = initTokens[shareScopeName] = {
                from: this.host.name
            };
            if (initScope.indexOf(initToken) >= 0) return promises;
            initScope.push(initToken);
        }
        const shareScope = this.shareScopeMap;
        const hostName = host.options.name;
        // Creates a new share scope if necessary
        if (!shareScope[shareScopeName]) {
            shareScope[shareScopeName] = {};
        }
        // Executes all initialization snippets from all accessible modules
        const scope = shareScope[shareScopeName];
        const register = (name, shared)=>{
            var _activeVersion_shareConfig;
            const { version, eager } = shared;
            scope[name] = scope[name] || {};
            const versions = scope[name];
            const activeVersion = versions[version];
            const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
            if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
                versions[version] = shared;
            }
        };
        const initFn = (mod)=>mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
        const initRemoteModule = async (key)=>{
            const { module } = await host.remoteHandler.getRemoteModuleAndOptions({
                id: key
            });
            if (module.getEntry) {
                let remoteEntryExports;
                try {
                    remoteEntryExports = await module.getEntry();
                } catch (error) {
                    remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                        id: key,
                        error,
                        from: 'runtime',
                        lifecycle: 'beforeLoadShare',
                        origin: host
                    });
                }
                if (!module.inited) {
                    await initFn(remoteEntryExports);
                    module.inited = true;
                }
            }
        };
        Object.keys(host.options.shared).forEach((shareName)=>{
            const sharedArr = host.options.shared[shareName];
            sharedArr.forEach((shared)=>{
                if (shared.scope.includes(shareScopeName)) {
                    register(shareName, shared);
                }
            });
        });
        // TODO: strategy==='version-first' need to be removed in the future
        if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
            host.options.remotes.forEach((remote)=>{
                if (remote.shareScope === shareScopeName) {
                    promises.push(initRemoteModule(remote.name));
                }
            });
        }
        return promises;
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        const { host } = this;
        const shareInfo = getTargetSharedOptions({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareInfo == null ? void 0 : shareInfo.scope) {
            shareInfo.scope.forEach((shareScope)=>{
                this.initializeSharing(shareScope, {
                    strategy: shareInfo.strategy
                });
            });
        }
        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            addUniqueItem(shared.useIn, host.options.name);
        };
        if (registeredShared) {
            if (typeof registeredShared.lib === 'function') {
                addUseIn(registeredShared);
                if (!registeredShared.loaded) {
                    registeredShared.loaded = true;
                    if (registeredShared.from === host.options.name) {
                        shareInfo.loaded = true;
                    }
                }
                return registeredShared.lib;
            }
            if (typeof registeredShared.get === 'function') {
                const module = registeredShared.get();
                if (!(module instanceof Promise)) {
                    addUseIn(registeredShared);
                    this.setShared({
                        pkgName,
                        loaded: true,
                        from: host.options.name,
                        lib: module,
                        shared: registeredShared
                    });
                    return module;
                }
            }
        }
        if (shareInfo.lib) {
            if (!shareInfo.loaded) {
                shareInfo.loaded = true;
            }
            return shareInfo.lib;
        }
        if (shareInfo.get) {
            const module = shareInfo.get();
            if (module instanceof Promise) {
                const errorCode = (extraOptions == null ? void 0 : extraOptions.from) === 'build' ? errorCodes.RUNTIME_005 : errorCodes.RUNTIME_006;
                throw new Error(errorCodes.getShortErrorMsg(errorCode, errorCodes.runtimeDescMap, {
                    hostName: host.options.name,
                    sharedPkgName: pkgName
                }));
            }
            shareInfo.lib = module;
            this.setShared({
                pkgName,
                loaded: true,
                from: host.options.name,
                lib: shareInfo.lib,
                shared: shareInfo
            });
            return shareInfo.lib;
        }
        throw new Error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_006, errorCodes.runtimeDescMap, {
            hostName: host.options.name,
            sharedPkgName: pkgName
        }));
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        const { host } = this;
        this.shareScopeMap[scopeName] = shareScope;
        this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope,
            options: host.options,
            origin: host,
            scopeName,
            hostShareScopeMap: extraOptions.hostShareScopeMap
        });
    }
    setShared({ pkgName, shared, from, lib, loading, loaded, get }) {
        const { version, scope = 'default' } = shared, shareInfo = polyfills._object_without_properties_loose(shared, [
            "version",
            "scope"
        ]);
        const scopes = Array.isArray(scope) ? scope : [
            scope
        ];
        scopes.forEach((sc)=>{
            if (!this.shareScopeMap[sc]) {
                this.shareScopeMap[sc] = {};
            }
            if (!this.shareScopeMap[sc][pkgName]) {
                this.shareScopeMap[sc][pkgName] = {};
            }
            if (!this.shareScopeMap[sc][pkgName][version]) {
                this.shareScopeMap[sc][pkgName][version] = polyfills._extends({
                    version,
                    scope: [
                        'default'
                    ]
                }, shareInfo, {
                    lib,
                    loaded,
                    loading
                });
                if (get) {
                    this.shareScopeMap[sc][pkgName][version].get = get;
                }
                return;
            }
            const registeredShared = this.shareScopeMap[sc][pkgName][version];
            if (loading && !registeredShared.loading) {
                registeredShared.loading = loading;
            }
        });
    }
    _setGlobalShareScopeMap(hostOptions) {
        const globalShareScopeMap = getGlobalShareScope();
        const identifier = hostOptions.id || hostOptions.name;
        if (identifier && !globalShareScopeMap[identifier]) {
            globalShareScopeMap[identifier] = this.shareScopeMap;
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            afterResolve: new AsyncWaterfallHook('afterResolve'),
            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
            // not used yet
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook('resolveShare'),
            // maybe will change, temporarily for internal use only
            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
        });
        this.host = host;
        this.shareScopeMap = {};
        this.initTokens = {};
        this._setGlobalShareScopeMap(host.options);
    }
}

class RemoteHandler {
    formatAndRegisterRemote(globalOptions, userOptions) {
        const userRemotes = userOptions.remotes || [];
        return userRemotes.reduce((res, remote)=>{
            this.registerRemote(remote, res, {
                force: false
            });
            return res;
        }, globalOptions.remotes);
    }
    setIdToRemoteMap(id, remoteMatchInfo) {
        const { remote, expose } = remoteMatchInfo;
        const { name, alias } = remote;
        this.idToRemoteMap[id] = {
            name: remote.name,
            expose
        };
        if (alias && id.startsWith(name)) {
            const idWithAlias = id.replace(name, alias);
            this.idToRemoteMap[idWithAlias] = {
                name: remote.name,
                expose
            };
            return;
        }
        if (alias && id.startsWith(alias)) {
            const idWithName = id.replace(alias, name);
            this.idToRemoteMap[idWithName] = {
                name: remote.name,
                expose
            };
        }
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        const { host } = this;
        try {
            const { loadFactory = true } = options || {
                loadFactory: true
            };
            // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
            // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
            // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
            // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
            // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
            // id: alias(app1) + expose(button) = app1/button
            // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
            const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({
                id
            });
            const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;
            const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);
            const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
                id: idRes,
                pkgNameOrAlias,
                expose,
                exposeModule: loadFactory ? moduleOrFactory : undefined,
                exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
                remote,
                options: moduleOptions,
                moduleInstance: module,
                origin: host
            });
            this.setIdToRemoteMap(id, remoteMatchInfo);
            if (typeof moduleWrapper === 'function') {
                return moduleWrapper;
            }
            return moduleOrFactory;
        } catch (error) {
            const { from = 'runtime' } = options || {
                from: 'runtime'
            };
            const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                error,
                from,
                lifecycle: 'onLoad',
                origin: host
            });
            if (!failOver) {
                throw error;
            }
            return failOver;
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        const { host } = this;
        await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: preloadOptions,
            options: host.options,
            origin: host
        });
        const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
        await Promise.all(preloadOps.map(async (ops)=>{
            const { remote } = ops;
            const remoteInfo = getRemoteInfo(remote);
            const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo(remote);
            const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: host,
                preloadOptions: ops,
                remote,
                remoteInfo,
                globalSnapshot,
                remoteSnapshot
            });
            if (!assets) {
                return;
            }
            preloadAssets(remoteInfo, host, assets);
        }));
    }
    registerRemotes(remotes, options) {
        const { host } = this;
        remotes.forEach((remote)=>{
            this.registerRemote(remote, host.options.remotes, {
                force: options == null ? void 0 : options.force
            });
        });
    }
    async getRemoteModuleAndOptions(options) {
        const { host } = this;
        const { id } = options;
        let loadRemoteArgs;
        try {
            loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
                id,
                options: host.options,
                origin: host
            });
        } catch (error) {
            loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                options: host.options,
                origin: host,
                from: 'runtime',
                error,
                lifecycle: 'beforeRequest'
            });
            if (!loadRemoteArgs) {
                throw error;
            }
        }
        const { id: idRes } = loadRemoteArgs;
        const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
        assert(remoteSplitInfo, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_004, errorCodes.runtimeDescMap, {
            hostName: host.options.name,
            requestId: idRes
        }));
        const { remote: rawRemote } = remoteSplitInfo;
        const remoteInfo = getRemoteInfo(rawRemote);
        const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({
            id: idRes
        }, remoteSplitInfo, {
            options: host.options,
            origin: host,
            remoteInfo
        }));
        const { remote, expose } = matchInfo;
        assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
        let module = host.moduleCache.get(remote.name);
        const moduleOptions = {
            host: host,
            remoteInfo
        };
        if (!module) {
            module = new Module(moduleOptions);
            host.moduleCache.set(remote.name, module);
        }
        return {
            module,
            moduleOptions,
            remoteMatchInfo: matchInfo
        };
    }
    registerRemote(remote, targetRemotes, options) {
        const { host } = this;
        const normalizeRemote = ()=>{
            if (remote.alias) {
                // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
                // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
                const findEqual = targetRemotes.find((item)=>{
                    var _item_alias;
                    return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
                });
                assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
            }
            // Set the remote entry to a complete path
            if ('entry' in remote) {
                if (sdk.isBrowserEnv() && !remote.entry.startsWith('http')) {
                    remote.entry = new URL(remote.entry, window.location.origin).href;
                }
            }
            if (!remote.shareScope) {
                remote.shareScope = DEFAULT_SCOPE;
            }
            if (!remote.type) {
                remote.type = DEFAULT_REMOTE_TYPE;
            }
        };
        this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote,
            origin: host
        });
        const registeredRemote = targetRemotes.find((item)=>item.name === remote.name);
        if (!registeredRemote) {
            normalizeRemote();
            targetRemotes.push(remote);
            this.hooks.lifecycle.registerRemote.emit({
                remote,
                origin: host
            });
        } else {
            const messages = [
                `The remote "${remote.name}" is already registered.`,
                'Please note that overriding it may cause unexpected errors.'
            ];
            if (options == null ? void 0 : options.force) {
                // remove registered remote
                this.removeRemote(registeredRemote);
                normalizeRemote();
                targetRemotes.push(remote);
                this.hooks.lifecycle.registerRemote.emit({
                    remote,
                    origin: host
                });
                sdk.warn(messages.join(' '));
            }
        }
    }
    removeRemote(remote) {
        try {
            const { host } = this;
            const { name } = remote;
            const remoteIndex = host.options.remotes.findIndex((item)=>item.name === name);
            if (remoteIndex !== -1) {
                host.options.remotes.splice(remoteIndex, 1);
            }
            const loadedModule = host.moduleCache.get(remote.name);
            if (loadedModule) {
                const remoteInfo = loadedModule.remoteInfo;
                const key = remoteInfo.entryGlobalName;
                if (CurrentGlobal[key]) {
                    var _Object_getOwnPropertyDescriptor;
                    if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(CurrentGlobal, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
                        delete CurrentGlobal[key];
                    } else {
                        // @ts-ignore
                        CurrentGlobal[key] = undefined;
                    }
                }
                const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
                if (globalLoading[remoteEntryUniqueKey]) {
                    delete globalLoading[remoteEntryUniqueKey];
                }
                host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
                // delete unloaded shared and instance
                let remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
                const remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((ins)=>{
                    if (remoteInfo.buildVersion) {
                        return ins.options.id === remoteInsId;
                    } else {
                        return ins.name === remoteInsId;
                    }
                });
                if (remoteInsIndex !== -1) {
                    const remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
                    remoteInsId = remoteIns.options.id || remoteInsId;
                    const globalShareScopeMap = getGlobalShareScope();
                    let isAllSharedNotUsed = true;
                    const needDeleteKeys = [];
                    Object.keys(globalShareScopeMap).forEach((instId)=>{
                        const shareScopeMap = globalShareScopeMap[instId];
                        shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope)=>{
                            const shareScopeVal = shareScopeMap[shareScope];
                            shareScopeVal && Object.keys(shareScopeVal).forEach((shareName)=>{
                                const sharedPkgs = shareScopeVal[shareName];
                                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion)=>{
                                    const shared = sharedPkgs[shareVersion];
                                    if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
                                        if (shared.loaded || shared.loading) {
                                            shared.useIn = shared.useIn.filter((usedHostName)=>usedHostName !== remoteInfo.name);
                                            if (shared.useIn.length) {
                                                isAllSharedNotUsed = false;
                                            } else {
                                                needDeleteKeys.push([
                                                    instId,
                                                    shareScope,
                                                    shareName,
                                                    shareVersion
                                                ]);
                                            }
                                        } else {
                                            needDeleteKeys.push([
                                                instId,
                                                shareScope,
                                                shareName,
                                                shareVersion
                                            ]);
                                        }
                                    }
                                });
                            });
                        });
                    });
                    if (isAllSharedNotUsed) {
                        remoteIns.shareScopeMap = {};
                        delete globalShareScopeMap[remoteInsId];
                    }
                    needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion])=>{
                        var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
                        (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
                    });
                    CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
                }
                const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);
                if (hostGlobalSnapshot) {
                    const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
                    if (remoteKey) {
                        delete hostGlobalSnapshot.remotesInfo[remoteKey];
                        if (//eslint-disable-next-line no-extra-boolean-cast
                        Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
                            delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
                        }
                    }
                }
                host.moduleCache.delete(remote.name);
            }
        } catch (err) {
            logger.log('removeRemote fail: ', err);
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
            registerRemote: new SyncWaterfallHook('registerRemote'),
            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
            onLoad: new AsyncHook('onLoad'),
            handlePreloadModule: new SyncHook('handlePreloadModule'),
            errorLoadRemote: new AsyncHook('errorLoadRemote'),
            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
            // not used yet
            afterPreloadRemote: new AsyncHook(),
            loadEntry: new AsyncHook()
        });
        this.host = host;
        this.idToRemoteMap = {};
    }
}

class FederationHost {
    initOptions(userOptions) {
        this.registerPlugins(userOptions.plugins);
        const options = this.formatOptions(this.options, userOptions);
        this.options = options;
        return options;
    }
    async loadShare(pkgName, extraOptions) {
        return this.sharedHandler.loadShare(pkgName, extraOptions);
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        return this.sharedHandler.loadShareSync(pkgName, extraOptions);
    }
    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
        return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
    }
    initRawContainer(name, url, container) {
        const remoteInfo = getRemoteInfo({
            name,
            entry: url
        });
        const module = new Module({
            host: this,
            remoteInfo
        });
        module.remoteEntryExports = container;
        this.moduleCache.set(name, module);
        return module;
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        return this.remoteHandler.loadRemote(id, options);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        return this.remoteHandler.preloadRemote(preloadOptions);
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
    }
    formatOptions(globalOptions, userOptions) {
        const { shared } = formatShareConfigs(globalOptions, userOptions);
        const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
            origin: this,
            userOptions,
            options: globalOptions,
            shareInfo: shared
        });
        const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
        const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
        const plugins = [
            ...globalOptionsRes.plugins
        ];
        if (userOptionsRes.plugins) {
            userOptionsRes.plugins.forEach((plugin)=>{
                if (!plugins.includes(plugin)) {
                    plugins.push(plugin);
                }
            });
        }
        const optionsRes = polyfills._extends({}, globalOptions, userOptions, {
            plugins,
            remotes,
            shared: handledShared
        });
        this.hooks.lifecycle.init.emit({
            origin: this,
            options: optionsRes
        });
        return optionsRes;
    }
    registerPlugins(plugins) {
        const pluginRes = registerPlugins(plugins, [
            this.hooks,
            this.remoteHandler.hooks,
            this.sharedHandler.hooks,
            this.snapshotHandler.hooks,
            this.loaderHook,
            this.bridgeHook
        ]);
        // Merge plugin
        this.options.plugins = this.options.plugins.reduce((res, plugin)=>{
            if (!plugin) return res;
            if (res && !res.find((item)=>item.name === plugin.name)) {
                res.push(plugin);
            }
            return res;
        }, pluginRes || []);
    }
    registerRemotes(remotes, options) {
        return this.remoteHandler.registerRemotes(remotes, options);
    }
    constructor(userOptions){
        this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook('beforeInit'),
            init: new SyncHook(),
            // maybe will change, temporarily for internal use only
            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
            // maybe will change, temporarily for internal use only
            initContainer: new AsyncWaterfallHook('initContainer')
        });
        this.version = "0.9.1";
        this.moduleCache = new Map();
        this.loaderHook = new PluginSystem({
            // FIXME: may not be suitable , not open to the public yet
            getModuleInfo: new SyncHook(),
            createScript: new SyncHook(),
            createLink: new SyncHook(),
            fetch: new AsyncHook(),
            loadEntryError: new AsyncHook(),
            getModuleFactory: new AsyncHook()
        });
        this.bridgeHook = new PluginSystem({
            beforeBridgeRender: new SyncHook(),
            afterBridgeRender: new SyncHook(),
            beforeBridgeDestroy: new SyncHook(),
            afterBridgeDestroy: new SyncHook()
        });
        // TODO: Validate the details of the options
        // Initialize options with default values
        const defaultOptions = {
            id: getBuilderId(),
            name: userOptions.name,
            plugins: [
                snapshotPlugin(),
                generatePreloadAssetsPlugin()
            ],
            remotes: [],
            shared: {},
            inBrowser: sdk.isBrowserEnv()
        };
        this.name = userOptions.name;
        this.options = defaultOptions;
        this.snapshotHandler = new SnapshotHandler(this);
        this.sharedHandler = new SharedHandler(this);
        this.remoteHandler = new RemoteHandler(this);
        this.shareScopeMap = this.sharedHandler.shareScopeMap;
        this.registerPlugins([
            ...defaultOptions.plugins,
            ...userOptions.plugins || []
        ]);
        this.options = this.formatOptions(defaultOptions, userOptions);
    }
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null
});

Object.defineProperty(exports, "loadScript", ({
  enumerable: true,
  get: function () { return sdk.loadScript; }
}));
Object.defineProperty(exports, "loadScriptNode", ({
  enumerable: true,
  get: function () { return sdk.loadScriptNode; }
}));
exports.CurrentGlobal = CurrentGlobal;
exports.FederationHost = FederationHost;
exports.Global = Global;
exports.Module = Module;
exports.addGlobalSnapshot = addGlobalSnapshot;
exports.assert = assert;
exports.getGlobalFederationConstructor = getGlobalFederationConstructor;
exports.getGlobalSnapshot = getGlobalSnapshot;
exports.getInfoWithoutType = getInfoWithoutType;
exports.getRegisteredShare = getRegisteredShare;
exports.getRemoteEntry = getRemoteEntry;
exports.getRemoteInfo = getRemoteInfo;
exports.helpers = helpers;
exports.isStaticResourcesEqual = isStaticResourcesEqual;
exports.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;
exports.registerGlobalPlugins = registerGlobalPlugins;
exports.resetFederationGlobalInfo = resetFederationGlobalInfo;
exports.safeWrapper = safeWrapper;
exports.satisfy = satisfy;
exports.setGlobalFederationConstructor = setGlobalFederationConstructor;
exports.setGlobalFederationInstance = setGlobalFederationInstance;
exports.types = index;


},
"../../node_modules/.pnpm/@module-federation+runtime-core@0.9.1/node_modules/@module-federation/runtime-core/dist/polyfills.cjs.js"(__unused_rspack_module, exports) {
"use strict";


function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

exports._extends = _extends;
exports._object_without_properties_loose = _object_without_properties_loose;


},
"../../node_modules/.pnpm/@module-federation+runtime@0.9.1/node_modules/@module-federation/runtime/dist/index.cjs.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";


var runtimeCore = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime-core@0.9.1/node_modules/@module-federation/runtime-core/dist/index.cjs.js");
var utils = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime@0.9.1/node_modules/@module-federation/runtime/dist/utils.cjs.js");

let FederationInstance = null;
function init(options) {
    // Retrieve the same instance with the same name
    const instance = utils.getGlobalFederationInstance(options.name, options.version);
    if (!instance) {
        // Retrieve debug constructor
        const FederationConstructor = runtimeCore.getGlobalFederationConstructor() || runtimeCore.FederationHost;
        FederationInstance = new FederationConstructor(options);
        runtimeCore.setGlobalFederationInstance(FederationInstance);
        return FederationInstance;
    } else {
        // Merge options
        instance.initOptions(options);
        if (!FederationInstance) {
            FederationInstance = instance;
        }
        return instance;
    }
}
function loadRemote(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    const loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    const loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    const loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
// Inject for debug
runtimeCore.setGlobalFederationConstructor(runtimeCore.FederationHost);

Object.defineProperty(exports, "FederationHost", ({
  enumerable: true,
  get: function () { return runtimeCore.FederationHost; }
}));
Object.defineProperty(exports, "Module", ({
  enumerable: true,
  get: function () { return runtimeCore.Module; }
}));
Object.defineProperty(exports, "getRemoteEntry", ({
  enumerable: true,
  get: function () { return runtimeCore.getRemoteEntry; }
}));
Object.defineProperty(exports, "getRemoteInfo", ({
  enumerable: true,
  get: function () { return runtimeCore.getRemoteInfo; }
}));
Object.defineProperty(exports, "loadScript", ({
  enumerable: true,
  get: function () { return runtimeCore.loadScript; }
}));
Object.defineProperty(exports, "loadScriptNode", ({
  enumerable: true,
  get: function () { return runtimeCore.loadScriptNode; }
}));
Object.defineProperty(exports, "registerGlobalPlugins", ({
  enumerable: true,
  get: function () { return runtimeCore.registerGlobalPlugins; }
}));
exports.getInstance = getInstance;
exports.init = init;
exports.loadRemote = loadRemote;
exports.loadShare = loadShare;
exports.loadShareSync = loadShareSync;
exports.preloadRemote = preloadRemote;
exports.registerPlugins = registerPlugins;
exports.registerRemotes = registerRemotes;


},
"../../node_modules/.pnpm/@module-federation+runtime@0.9.1/node_modules/@module-federation/runtime/dist/utils.cjs.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";


var runtimeCore = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime-core@0.9.1/node_modules/@module-federation/runtime-core/dist/index.cjs.js");

// injected by bundler, so it can not use runtime-core stuff
function getBuilderId() {
    //@ts-ignore
    return  true ? "app_c:0.0.1" : 0;
}
function getGlobalFederationInstance(name, version) {
    const buildId = getBuilderId();
    return runtimeCore.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((GMInstance)=>{
        if (buildId && GMInstance.options.id === getBuilderId()) {
            return true;
        }
        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
            return true;
        }
        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
            return true;
        }
        return false;
    });
}

exports.getGlobalFederationInstance = getGlobalFederationInstance;


},
"../../node_modules/.pnpm/@module-federation+sdk@0.9.1/node_modules/@module-federation/sdk/dist/index.cjs.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";


var polyfills = __webpack_require__("../../node_modules/.pnpm/@module-federation+sdk@0.9.1/node_modules/@module-federation/sdk/dist/polyfills.cjs.js");

const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const BROWSER_LOG_VALUE = '1';
const NameTransformSymbol = {
    AT: '@',
    HYPHEN: '-',
    SLASH: '/'
};
const NameTransformMap = {
    [NameTransformSymbol.AT]: 'scope_',
    [NameTransformSymbol.HYPHEN]: '_',
    [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
    NPM: 'npm',
    APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';
const MFPrefetchCommon = {
    identifier: 'MFDataPrefetch',
    globalKey: '__PREFETCH__',
    library: 'mf-data-prefetch',
    exportsKey: '__PREFETCH_EXPORTS__',
    fileName: 'bootstrap.js'
};

var ContainerPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var SharePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});

function isBrowserEnv() {
    return typeof window !== 'undefined';
}
function isBrowserDebug() {
    try {
        if (isBrowserEnv() && window.localStorage) {
            return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
        }
    } catch (error) {
        return false;
    }
    return false;
}
function isDebugMode() {
    if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
        return Boolean(process.env['FEDERATION_DEBUG']);
    }
    if (typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG)) {
        return true;
    }
    return isBrowserDebug();
}
const getProcessEnv = function() {
    return typeof process !== 'undefined' && process.env ? process.env : {};
};

const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR)=>{
    const strSplit = str.split(separator);
    const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
    const defaultVersion = '*';
    const isEntry = (s)=>s.startsWith('http') || s.includes(MANIFEST_EXT);
    // Check if the string starts with a type
    if (strSplit.length >= 2) {
        let [name, ...versionOrEntryArr] = strSplit;
        // @name@manifest-url.json
        if (str.startsWith(separator)) {
            name = strSplit.slice(0, 2).join(separator);
            versionOrEntryArr = [
                devVersionOrUrl || strSplit.slice(2).join(separator)
            ];
        }
        let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
        if (isEntry(versionOrEntry)) {
            return {
                name,
                entry: versionOrEntry
            };
        } else {
            // Apply version rule
            // devVersionOrUrl => inputVersion => defaultVersion
            return {
                name,
                version: versionOrEntry || defaultVersion
            };
        }
    } else if (strSplit.length === 1) {
        const [name] = strSplit;
        if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
            return {
                name,
                entry: devVersionOrUrl
            };
        }
        return {
            name,
            version: devVersionOrUrl || defaultVersion
        };
    } else {
        throw `Invalid entry value: ${str}`;
    }
};
const composeKeyWithSeparator = function(...args) {
    if (!args.length) {
        return '';
    }
    return args.reduce((sum, cur)=>{
        if (!cur) {
            return sum;
        }
        if (!sum) {
            return cur;
        }
        return `${sum}${SEPARATOR}${cur}`;
    }, '');
};
const encodeName = function(name, prefix = '', withExt = false) {
    try {
        const ext = withExt ? '.js' : '';
        return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
    } catch (err) {
        throw err;
    }
};
const decodeName = function(name, prefix, withExt) {
    try {
        let decodedName = name;
        if (prefix) {
            if (!decodedName.startsWith(prefix)) {
                return decodedName;
            }
            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
        }
        decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
        if (withExt) {
            decodedName = decodedName.replace('.js', '');
        }
        return decodedName;
    } catch (err) {
        throw err;
    }
};
const generateExposeFilename = (exposeName, withExt)=>{
    if (!exposeName) {
        return '';
    }
    let expose = exposeName;
    if (expose === '.') {
        expose = 'default_export';
    }
    if (expose.startsWith('./')) {
        expose = expose.replace('./', '');
    }
    return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename = (pkgName, withExt)=>{
    if (!pkgName) {
        return '';
    }
    return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl)=>{
    if ('getPublicPath' in module) {
        let publicPath;
        if (!module.getPublicPath.startsWith('function')) {
            publicPath = new Function(module.getPublicPath)();
        } else {
            publicPath = new Function('return ' + module.getPublicPath)()();
        }
        return `${publicPath}${sourceUrl}`;
    } else if ('publicPath' in module) {
        return `${module.publicPath}${sourceUrl}`;
    } else {
        console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
        return '';
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg)=>{
    if (!condition) {
        error(msg);
    }
};
const error = (msg)=>{
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = (msg)=>{
    console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
    try {
        return JSON.stringify(info, null, 2);
    } catch (e) {
        return '';
    }
}
// RegExp for version string
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
    return VERSION_PATTERN_REGEXP.test(str);
}

const simpleJoinRemoteEntry = (rPath, rName)=>{
    if (!rPath) {
        return rName;
    }
    const transformPath = (str)=>{
        if (str === '.') {
            return '';
        }
        if (str.startsWith('./')) {
            return str.replace('./', '');
        }
        if (str.startsWith('/')) {
            const strWithoutSlash = str.slice(1);
            if (strWithoutSlash.endsWith('/')) {
                return strWithoutSlash.slice(0, -1);
            }
            return strWithoutSlash;
        }
        return str;
    };
    const transformedPath = transformPath(rPath);
    if (!transformedPath) {
        return rName;
    }
    if (transformedPath.endsWith('/')) {
        return `${transformedPath}${rName}`;
    }
    return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
    return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
    var _manifest_metaData, _manifest_metaData1;
    const { remotes = {}, overrides = {}, version } = options;
    let remoteSnapshot;
    const getPublicPath = ()=>{
        if ('publicPath' in manifest.metaData) {
            if (manifest.metaData.publicPath === 'auto' && version) {
                // use same implementation as publicPath auto runtime module implements
                return inferAutoPublicPath(version);
            }
            return manifest.metaData.publicPath;
        } else {
            return manifest.metaData.getPublicPath;
        }
    };
    const overridesKeys = Object.keys(overrides);
    let remotesInfo = {};
    // If remotes are not provided, only the remotes in the manifest will be read
    if (!Object.keys(remotes).length) {
        var _manifest_remotes;
        remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next)=>{
            let matchedVersion;
            const name = next.federationContainerName;
            // overrides have higher priority
            if (overridesKeys.includes(name)) {
                matchedVersion = overrides[name];
            } else {
                if ('version' in next) {
                    matchedVersion = next.version;
                } else {
                    matchedVersion = next.entry;
                }
            }
            res[name] = {
                matchedVersion
            };
            return res;
        }, {})) || {};
    }
    // If remotes (deploy scenario) are specified, they need to be traversed again
    Object.keys(remotes).forEach((key)=>remotesInfo[key] = {
            // overrides will override dependencies
            matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
        });
    const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
    const { exposes } = manifest;
    let basicRemoteSnapshot = {
        version: version ? version : '',
        buildVersion,
        globalName,
        remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
        remoteEntryType,
        remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
        remoteTypesZip: remoteTypes.zip || '',
        remoteTypesAPI: remoteTypes.api || '',
        remotesInfo,
        shared: manifest == null ? void 0 : manifest.shared.map((item)=>({
                assets: item.assets,
                sharedName: item.name,
                version: item.version
            })),
        modules: exposes == null ? void 0 : exposes.map((expose)=>({
                moduleName: expose.name,
                modulePath: expose.path,
                assets: expose.assets
            }))
    };
    if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
        const prefetchInterface = manifest.metaData.prefetchInterface;
        basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
            prefetchInterface
        });
    }
    if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
        const { path, name, type } = manifest.metaData.prefetchEntry;
        basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
            prefetchEntry: simpleJoinRemoteEntry(path, name),
            prefetchEntryType: type
        });
    }
    if ('publicPath' in manifest.metaData) {
        remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
            publicPath: getPublicPath()
        });
    } else {
        remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
            getPublicPath: getPublicPath()
        });
    }
    if (ssrRemoteEntry) {
        const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
        remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
        remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
    }
    return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
    if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
        return true;
    } else {
        return false;
    }
}

const PREFIX = '[ Module Federation ]';
let Logger = class Logger {
    log(...args) {
        console.log(this.prefix, ...args);
    }
    warn(...args) {
        console.log(this.prefix, ...args);
    }
    error(...args) {
        console.log(this.prefix, ...args);
    }
    success(...args) {
        console.log(this.prefix, ...args);
    }
    info(...args) {
        console.log(this.prefix, ...args);
    }
    ready(...args) {
        console.log(this.prefix, ...args);
    }
    debug(...args) {
        if (isDebugMode()) {
            console.log(this.prefix, ...args);
        }
    }
    constructor(prefix){
        this.prefix = prefix;
    }
};
function createLogger(prefix) {
    return new Logger(prefix);
}
const logger = createLogger(PREFIX);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeWrapper(callback, disableWarn) {
    try {
        const res = await callback();
        return res;
    } catch (e) {
        !disableWarn && warn(e);
        return;
    }
}
function isStaticResourcesEqual(url1, url2) {
    const REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
    // Retrieve the existing script element by its src attribute
    let script = null;
    let needAttach = true;
    let timeout = 20000;
    let timeoutId;
    const scripts = document.getElementsByTagName('script');
    for(let i = 0; i < scripts.length; i++){
        const s = scripts[i];
        const scriptSrc = s.getAttribute('src');
        if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
            script = s;
            needAttach = false;
            break;
        }
    }
    if (!script) {
        const attrs = info.attrs;
        script = document.createElement('script');
        script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';
        let createScriptRes = undefined;
        if (info.createScriptHook) {
            createScriptRes = info.createScriptHook(info.url, info.attrs);
            if (createScriptRes instanceof HTMLScriptElement) {
                script = createScriptRes;
            } else if (typeof createScriptRes === 'object') {
                if ('script' in createScriptRes && createScriptRes.script) {
                    script = createScriptRes.script;
                }
                if ('timeout' in createScriptRes && createScriptRes.timeout) {
                    timeout = createScriptRes.timeout;
                }
            }
        }
        if (!script.src) {
            script.src = info.url;
        }
        if (attrs && !createScriptRes) {
            Object.keys(attrs).forEach((name)=>{
                if (script) {
                    if (name === 'async' || name === 'defer') {
                        script[name] = attrs[name];
                    // Attributes that do not exist are considered overridden
                    } else if (!script.getAttribute(name)) {
                        script.setAttribute(name, attrs[name]);
                    }
                }
            });
        }
    }
    const onScriptComplete = async (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        clearTimeout(timeoutId);
        const onScriptCompleteCallback = ()=>{
            if ((event == null ? void 0 : event.type) === 'error') {
                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
            } else {
                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
            }
        };
        // Prevent memory leaks in IE.
        if (script) {
            script.onerror = null;
            script.onload = null;
            safeWrapper(()=>{
                const { needDeleteScript = true } = info;
                if (needDeleteScript) {
                    (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
                }
            });
            if (prev && typeof prev === 'function') {
                const result = prev(event);
                if (result instanceof Promise) {
                    const res = await result;
                    onScriptCompleteCallback();
                    return res;
                }
                onScriptCompleteCallback();
                return result;
            }
        }
        onScriptCompleteCallback();
    };
    script.onerror = onScriptComplete.bind(null, script.onerror);
    script.onload = onScriptComplete.bind(null, script.onload);
    timeoutId = setTimeout(()=>{
        onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
    }, timeout);
    return {
        script,
        needAttach
    };
}
function createLink(info) {
    // <link rel="preload" href="script.js" as="script">
    // Retrieve the existing script element by its src attribute
    let link = null;
    let needAttach = true;
    const links = document.getElementsByTagName('link');
    for(let i = 0; i < links.length; i++){
        const l = links[i];
        const linkHref = l.getAttribute('href');
        const linkRef = l.getAttribute('ref');
        if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs['ref']) {
            link = l;
            needAttach = false;
            break;
        }
    }
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('href', info.url);
        let createLinkRes = undefined;
        const attrs = info.attrs;
        if (info.createLinkHook) {
            createLinkRes = info.createLinkHook(info.url, attrs);
            if (createLinkRes instanceof HTMLLinkElement) {
                link = createLinkRes;
            }
        }
        if (attrs && !createLinkRes) {
            Object.keys(attrs).forEach((name)=>{
                if (link && !link.getAttribute(name)) {
                    link.setAttribute(name, attrs[name]);
                }
            });
        }
    }
    const onLinkComplete = (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        const onLinkCompleteCallback = ()=>{
            if ((event == null ? void 0 : event.type) === 'error') {
                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
            } else {
                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
            }
        };
        // Prevent memory leaks in IE.
        if (link) {
            link.onerror = null;
            link.onload = null;
            safeWrapper(()=>{
                const { needDeleteLink = true } = info;
                if (needDeleteLink) {
                    (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
                }
            });
            if (prev) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const res = prev(event);
                onLinkCompleteCallback();
                return res;
            }
        }
        onLinkCompleteCallback();
    };
    link.onerror = onLinkComplete.bind(null, link.onerror);
    link.onload = onLinkComplete.bind(null, link.onload);
    return {
        link,
        needAttach
    };
}
function loadScript(url, info) {
    const { attrs = {}, createScriptHook } = info;
    return new Promise((resolve, reject)=>{
        const { script, needAttach } = createScript({
            url,
            cb: resolve,
            onErrorCallback: reject,
            attrs: polyfills._extends({
                fetchpriority: 'high'
            }, attrs),
            createScriptHook,
            needDeleteScript: true
        });
        needAttach && document.head.appendChild(script);
    });
}

function importNodeModule(name) {
    if (!name) {
        throw new Error('import specifier is required');
    }
    const importModule = new Function('name', `return import(name)`);
    return importModule(name).then((res)=>res).catch((error)=>{
        console.error(`Error importing module ${name}:`, error);
        throw error;
    });
}
const loadNodeFetch = async ()=>{
    const fetchModule = await importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
};
const lazyLoaderHookFetch = async (input, init, loaderHook)=>{
    const hook = (url, init)=>{
        return loaderHook.lifecycle.fetch.emit(url, init);
    };
    const res = await hook(input, init || {});
    if (!res || !(res instanceof Response)) {
        const fetchFunction = typeof fetch === 'undefined' ? await loadNodeFetch() : fetch;
        return fetchFunction(input, init || {});
    }
    return res;
};
function createScriptNode(url, cb, attrs, loaderHook) {
    if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
        const hookResult = loaderHook.createScriptHook(url);
        if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
            url = hookResult.url;
        }
    }
    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        console.error('Error constructing URL:', e);
        cb(new Error(`Invalid URL: ${e}`));
        return;
    }
    const getFetch = async ()=>{
        if (loaderHook == null ? void 0 : loaderHook.fetch) {
            return (input, init)=>lazyLoaderHookFetch(input, init, loaderHook);
        }
        return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    };
    const handleScriptFetch = async (f, urlObj)=>{
        try {
            var //@ts-ignore
            _vm_constants;
            const res = await f(urlObj.href);
            const data = await res.text();
            const [path, vm] = await Promise.all([
                importNodeModule('path'),
                importNodeModule('vm')
            ]);
            const scriptContext = {
                exports: {},
                module: {
                    exports: {}
                }
            };
            const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
            const filename = path.basename(urlObj.pathname);
            var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
            const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                filename,
                importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
            });
            script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
            const exportedInterface = scriptContext.module.exports || scriptContext.exports;
            if (attrs && exportedInterface && attrs['globalName']) {
                const container = exportedInterface[attrs['globalName']] || exportedInterface;
                cb(undefined, container);
                return;
            }
            cb(undefined, exportedInterface);
        } catch (e) {
            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        }
    };
    getFetch().then(async (f)=>{
        if ((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module') {
            return loadModule(urlObj.href, {
                fetch: f,
                vm: await importNodeModule('vm')
            }).then(async (module)=>{
                await module.evaluate();
                cb(undefined, module.namespace);
            }).catch((e)=>{
                cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
            });
        }
        handleScriptFetch(f, urlObj);
    }).catch((err)=>{
        cb(err);
    });
}
function loadScriptNode(url, info) {
    return new Promise((resolve, reject)=>{
        createScriptNode(url, (error, scriptContext)=>{
            if (error) {
                reject(error);
            } else {
                var _info_attrs, _info_attrs1;
                const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;
                const entryExports = globalThis[remoteEntryKey] = scriptContext;
                resolve(entryExports);
            }
        }, info.attrs, info.loaderHook);
    });
}
async function loadModule(url, options) {
    const { fetch: fetch1, vm } = options;
    const response = await fetch1(url);
    const code = await response.text();
    const module = new vm.SourceTextModule(code, {
        // @ts-ignore
        importModuleDynamically: async (specifier, script)=>{
            const resolvedUrl = new URL(specifier, url).href;
            return loadModule(resolvedUrl, options);
        }
    });
    await module.link(async (specifier)=>{
        const resolvedUrl = new URL(specifier, url).href;
        const module = await loadModule(resolvedUrl, options);
        return module;
    });
    return module;
}

function normalizeOptions(enableDefault, defaultOptions, key) {
    return function(options) {
        if (options === false) {
            return false;
        }
        if (typeof options === 'undefined') {
            if (enableDefault) {
                return defaultOptions;
            } else {
                return false;
            }
        }
        if (options === true) {
            return defaultOptions;
        }
        if (options && typeof options === 'object') {
            return polyfills._extends({}, defaultOptions, options);
        }
        throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
    };
}

exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
exports.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE;
exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
exports.EncodedNameTransformMap = EncodedNameTransformMap;
exports.FederationModuleManifest = FederationModuleManifest;
exports.MANIFEST_EXT = MANIFEST_EXT;
exports.MFModuleType = MFModuleType;
exports.MFPrefetchCommon = MFPrefetchCommon;
exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
exports.ManifestFileName = ManifestFileName;
exports.NameTransformMap = NameTransformMap;
exports.NameTransformSymbol = NameTransformSymbol;
exports.SEPARATOR = SEPARATOR;
exports.StatsFileName = StatsFileName;
exports.TEMP_DIR = TEMP_DIR;
exports.assert = assert;
exports.composeKeyWithSeparator = composeKeyWithSeparator;
exports.containerPlugin = ContainerPlugin;
exports.containerReferencePlugin = ContainerReferencePlugin;
exports.createLink = createLink;
exports.createLogger = createLogger;
exports.createScript = createScript;
exports.createScriptNode = createScriptNode;
exports.decodeName = decodeName;
exports.encodeName = encodeName;
exports.error = error;
exports.generateExposeFilename = generateExposeFilename;
exports.generateShareFilename = generateShareFilename;
exports.generateSnapshotFromManifest = generateSnapshotFromManifest;
exports.getProcessEnv = getProcessEnv;
exports.getResourceUrl = getResourceUrl;
exports.inferAutoPublicPath = inferAutoPublicPath;
exports.isBrowserEnv = isBrowserEnv;
exports.isDebugMode = isDebugMode;
exports.isManifestProvider = isManifestProvider;
exports.isRequiredVersion = isRequiredVersion;
exports.isStaticResourcesEqual = isStaticResourcesEqual;
exports.loadScript = loadScript;
exports.loadScriptNode = loadScriptNode;
exports.logger = logger;
exports.moduleFederationPlugin = ModuleFederationPlugin;
exports.normalizeOptions = normalizeOptions;
exports.parseEntry = parseEntry;
exports.safeToString = safeToString;
exports.safeWrapper = safeWrapper;
exports.sharePlugin = SharePlugin;
exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
exports.warn = warn;


},
"../../node_modules/.pnpm/@module-federation+sdk@0.9.1/node_modules/@module-federation/sdk/dist/polyfills.cjs.js"(__unused_rspack_module, exports) {
"use strict";


function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

exports._extends = _extends;


},
"../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.9.1/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js"(__unused_rspack_module, exports) {
"use strict";


const FEDERATION_SUPPORTED_TYPES = ['script'];

exports.FEDERATION_SUPPORTED_TYPES = FEDERATION_SUPPORTED_TYPES;


},
"../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.9.1/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var runtime = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime@0.9.1/node_modules/@module-federation/runtime/dist/index.cjs.js");
var constant = __webpack_require__("../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.9.1/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js");

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var runtime__namespace = /*#__PURE__*/_interopNamespaceDefault(runtime);

function attachShareScopeMap(webpackRequire) {
    if (!webpackRequire.S ||
        webpackRequire.federation.hasAttachShareScopeMap ||
        !webpackRequire.federation.instance ||
        !webpackRequire.federation.instance.shareScopeMap) {
        return;
    }
    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
    webpackRequire.federation.hasAttachShareScopeMap = true;
}

const NameTransformSymbol = {
    AT: '@',
    HYPHEN: '-',
    SLASH: '/'
};
const NameTransformMap = {
    [NameTransformSymbol.AT]: 'scope_',
    [NameTransformSymbol.HYPHEN]: '_',
    [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const decodeName = function(name, prefix, withExt) {
    try {
        let decodedName = name;
        if (prefix) {
            if (!decodedName.startsWith(prefix)) {
                return decodedName;
            }
            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
        }
        decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
        if (withExt) ;
        return decodedName;
    } catch (err) {
        throw err;
    }
};

function remotes(options) {
    const { chunkId, promises, chunkMapping, idToExternalAndNameMapping, webpackRequire, idToRemoteMap, } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id) => {
            let getScope = webpackRequire.R;
            if (!getScope) {
                getScope = [];
            }
            const data = idToExternalAndNameMapping[id];
            const remoteInfos = idToRemoteMap[id];
            // @ts-ignore seems not work
            if (getScope.indexOf(data) >= 0) {
                return;
            }
            // @ts-ignore seems not work
            getScope.push(data);
            if (data.p) {
                return promises.push(data.p);
            }
            const onError = (error) => {
                if (!error) {
                    error = new Error('Container missing');
                }
                if (typeof error.message === 'string') {
                    error.message += `\nwhile loading "${data[1]}" from ${data[2]}`;
                }
                webpackRequire.m[id] = () => {
                    throw error;
                };
                data.p = 0;
            };
            const handleFunction = (fn, arg1, arg2, d, next, first) => {
                try {
                    const promise = fn(arg1, arg2);
                    if (promise && promise.then) {
                        const p = promise.then((result) => next(result, d), onError);
                        if (first) {
                            promises.push((data.p = p));
                        }
                        else {
                            return p;
                        }
                    }
                    else {
                        return next(promise, d, first);
                    }
                }
                catch (error) {
                    onError(error);
                }
            };
            const onExternal = (external, _, first) => external
                ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first)
                : onError();
            // eslint-disable-next-line no-var
            var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
            // eslint-disable-next-line no-var
            var onFactory = (factory) => {
                data.p = 1;
                webpackRequire.m[id] = (module) => {
                    module.exports = factory();
                };
            };
            const onRemoteLoaded = () => {
                try {
                    const remoteName = decodeName(remoteInfos[0].name, ENCODE_NAME_PREFIX);
                    const remoteModuleName = remoteName + data[1].slice(1);
                    const instance = webpackRequire.federation.instance;
                    const loadRemote = () => webpackRequire.federation.instance.loadRemote(remoteModuleName, {
                        loadFactory: false,
                        from: 'build',
                    });
                    if (instance.options.shareStrategy === 'version-first') {
                        return Promise.all(instance.sharedHandler.initializeSharing(data[0])).then(() => {
                            return loadRemote();
                        });
                    }
                    return loadRemote();
                }
                catch (error) {
                    onError(error);
                }
            };
            const useRuntimeLoad = remoteInfos.length === 1 &&
                constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) &&
                remoteInfos[0].name;
            if (useRuntimeLoad) {
                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
            }
            else {
                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
            }
        });
    }
}

function consumes(options) {
    const { chunkId, promises, chunkMapping, installedModules, moduleToHandlerMapping, webpackRequire, } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id) => {
            if (webpackRequire.o(installedModules, id)) {
                return promises.push(installedModules[id]);
            }
            const onFactory = (factory) => {
                installedModules[id] = 0;
                webpackRequire.m[id] = (module) => {
                    delete webpackRequire.c[id];
                    module.exports = factory();
                };
            };
            const onError = (error) => {
                delete installedModules[id];
                webpackRequire.m[id] = (module) => {
                    delete webpackRequire.c[id];
                    throw error;
                };
            };
            try {
                const federationInstance = webpackRequire.federation.instance;
                if (!federationInstance) {
                    throw new Error('Federation instance not found!');
                }
                const { shareKey, getter, shareInfo } = moduleToHandlerMapping[id];
                const promise = federationInstance
                    .loadShare(shareKey, { customShareInfo: shareInfo })
                    .then((factory) => {
                    if (factory === false) {
                        return getter();
                    }
                    return factory;
                });
                if (promise.then) {
                    promises.push((installedModules[id] = promise.then(onFactory).catch(onError)));
                }
                else {
                    // @ts-ignore maintain previous logic
                    onFactory(promise);
                }
            }
            catch (e) {
                onError(e);
            }
        });
    }
}

function initializeSharing({ shareScopeName, webpackRequire, initPromises, initTokens, initScope, }) {
    if (!initScope)
        initScope = [];
    const mfInstance = webpackRequire.federation.instance;
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
        initToken = initTokens[shareScopeName] = { from: mfInstance.name };
    if (initScope.indexOf(initToken) >= 0)
        return;
    initScope.push(initToken);
    const promise = initPromises[shareScopeName];
    if (promise)
        return promise;
    var warn = (msg) => typeof console !== 'undefined' && console.warn && console.warn(msg);
    var initExternal = (id) => {
        var handleError = (err) => warn('Initialization of sharing external failed: ' + err);
        try {
            var module = webpackRequire(id);
            if (!module)
                return;
            var initFn = (module) => module &&
                module.init &&
                // @ts-ignore compat legacy mf shared behavior
                module.init(webpackRequire.S[shareScopeName], initScope);
            if (module.then)
                return promises.push(module.then(initFn, handleError));
            var initResult = initFn(module);
            // @ts-ignore
            if (initResult && typeof initResult !== 'boolean' && initResult.then)
                // @ts-ignore
                return promises.push(initResult['catch'](handleError));
        }
        catch (err) {
            handleError(err);
        }
    };
    const promises = mfInstance.initializeSharing(shareScopeName, {
        strategy: mfInstance.options.shareStrategy,
        initScope,
        from: 'build',
    });
    attachShareScopeMap(webpackRequire);
    const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
    if (bundlerRuntimeRemotesOptions) {
        Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach((moduleId) => {
            const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
            const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
            if (info.length > 1) {
                initExternal(externalModuleId);
            }
            else if (info.length === 1) {
                const remoteInfo = info[0];
                if (!constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
                    initExternal(externalModuleId);
                }
            }
        });
    }
    if (!promises.length) {
        return (initPromises[shareScopeName] = true);
    }
    return (initPromises[shareScopeName] = Promise.all(promises).then(() => (initPromises[shareScopeName] = true)));
}

function handleInitialConsumes(options) {
    const { moduleId, moduleToHandlerMapping, webpackRequire } = options;
    const federationInstance = webpackRequire.federation.instance;
    if (!federationInstance) {
        throw new Error('Federation instance not found!');
    }
    const { shareKey, shareInfo } = moduleToHandlerMapping[moduleId];
    try {
        return federationInstance.loadShareSync(shareKey, {
            customShareInfo: shareInfo,
        });
    }
    catch (err) {
        console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
        console.error('The original error message is as follows: ');
        throw err;
    }
}
function installInitialConsumes(options) {
    const { moduleToHandlerMapping, webpackRequire, installedModules, initialConsumes, } = options;
    initialConsumes.forEach((id) => {
        webpackRequire.m[id] = (module) => {
            // Handle scenario when module is used synchronously
            installedModules[id] = 0;
            delete webpackRequire.c[id];
            const factory = handleInitialConsumes({
                moduleId: id,
                moduleToHandlerMapping,
                webpackRequire,
            });
            if (typeof factory !== 'function') {
                throw new Error(`Shared module is not available for eager consumption: ${id}`);
            }
            module.exports = factory();
        };
    });
}

function initContainerEntry(options) {
    const { webpackRequire, shareScope, initScope, shareScopeKey, remoteEntryInitOptions, } = options;
    if (!webpackRequire.S)
        return;
    if (!webpackRequire.federation ||
        !webpackRequire.federation.instance ||
        !webpackRequire.federation.initOptions)
        return;
    const federationInstance = webpackRequire.federation.instance;
    var name = shareScopeKey || 'default';
    federationInstance.initOptions({
        name: webpackRequire.federation.initOptions.name,
        remotes: [],
        ...remoteEntryInitOptions,
    });
    federationInstance.initShareScopeMap(name, shareScope, {
        hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {},
    });
    if (webpackRequire.federation.attachShareScopeMap) {
        webpackRequire.federation.attachShareScopeMap(webpackRequire);
    }
    if (typeof webpackRequire.federation.prefetch === 'function') {
        webpackRequire.federation.prefetch();
    }
    // @ts-ignore
    return webpackRequire.I(name, initScope);
}

const federation = {
    runtime: runtime__namespace,
    instance: undefined,
    initOptions: undefined,
    bundlerRuntime: {
        remotes,
        consumes,
        I: initializeSharing,
        S: {},
        installInitialConsumes,
        initContainerEntry,
    },
    attachShareScopeMap,
    bundlerRuntimeOptions: {},
};

module.exports = federation;


},
"../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/dev-server.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
  /** @type {undefined|string} */
  var lastHash;
  var upToDate = function upToDate() {
    return /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;
  };
  var log = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log.js");
  var check = function check() {
    module.hot
      .check(true)
      .then(function (updatedModules) {
        if (!updatedModules) {
          log(
            'warning',
            '[HMR] Cannot find update. ' +
              (typeof window !== 'undefined'
                ? 'Need to do a full reload!'
                : 'Please reload manually!'),
          );
          log(
            'warning',
            '[HMR] (Probably because of restarting the webpack-dev-server)',
          );
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
          return;
        }

        if (!upToDate()) {
          check();
        }

        __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);

        if (upToDate()) {
          log('info', '[HMR] App is up to date.');
        }
      })
      .catch(function (err) {
        var status = module.hot.status();
        if (['abort', 'fail'].indexOf(status) >= 0) {
          log(
            'warning',
            '[HMR] Cannot apply update. ' +
              (typeof window !== 'undefined'
                ? 'Need to do a full reload!'
                : 'Please reload manually!'),
          );
          log('warning', '[HMR] ' + log.formatError(err));
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        } else {
          log('warning', '[HMR] Update failed: ' + log.formatError(err));
        }
      });
  };
  var hotEmitter = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/emitter.js");
  hotEmitter.on('webpackHotUpdate', function (currentHash) {
    lastHash = currentHash;
    if (!upToDate() && module.hot.status() === 'idle') {
      log('info', '[HMR] Checking for updates on the server...');
      check();
    }
  });
  log('info', '[HMR] Waiting for update signal from WDS...');
} else {}


},
"../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/emitter.js"(module) {
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (!this.events[eventName]) {
    this.events[eventName] = [];
  }
  this.events[eventName].push(callback);
};

EventEmitter.prototype.emit = function (eventName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (this.events[eventName]) {
    this.events[eventName].forEach(function (callback) {
      callback.apply(null, args);
    });
  }
};

module.exports = new EventEmitter();


},
"../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log-apply-result.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });
  var log = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log.js");

  if (unacceptedModules.length > 0) {
    log(
      'warning',
      "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)",
    );
    unacceptedModules.forEach(function (moduleId) {
      log('warning', '[HMR]  - ' + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log('info', '[HMR] Nothing hot updated.');
  } else {
    log('info', '[HMR] Updated modules:');
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === 'string' && moduleId.indexOf('!') !== -1) {
        var parts = moduleId.split('!');
        log.groupCollapsed('info', '[HMR]  - ' + parts.pop());
        log('info', '[HMR]  - ' + moduleId);
        log.groupEnd('info');
      } else {
        log('info', '[HMR]  - ' + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === 'number';
    });
    if (numberIds)
      log(
        'info',
        '[HMR] Consider using the optimization.moduleIds: "named" for module names.',
      );
  }
};


},
"../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log.js"(module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = 'info';

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
  var shouldLog =
    (logLevel === 'info' && level === 'info') ||
    (['info', 'warning'].indexOf(logLevel) >= 0 && level === 'warning') ||
    (['info', 'warning', 'error'].indexOf(logLevel) >= 0 && level === 'error');
  return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === 'info') {
      console.log(msg);
    } else if (level === 'warning') {
      console.warn(msg);
    } else if (level === 'error') {
      console.error(msg);
    }
  }
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;
  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + '\n' + stack;
  } else {
    return stack;
  }
};


},
"../../node_modules/.pnpm/@rspack+dev-server@1.1.5_@r_223c8da7ad9bb3be2ef249fbff48308c/node_modules/@rspack/dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3003&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=3003&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSocketURL: () => (createSocketURL),
  getCurrentScriptSource: () => (getCurrentScriptSource),
  parseURL: () => (parseURL)
});
/* import */ var _rspack_core_hot_emitter_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/emitter.js");
/* import */ var _rspack_core_hot_emitter_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_rspack_core_hot_emitter_js__rspack_import_0);
/* import */ var _rspack_core_hot_log_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/log.js");
/* import */ var _rspack_core_hot_log_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_rspack_core_hot_log_js__rspack_import_1);
/* import */ var webpack_dev_server_client_overlay_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/overlay.js");
/* import */ var webpack_dev_server_client_socket_js__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/socket.js");
/* import */ var webpack_dev_server_client_progress_js__rspack_import_4 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/progress.js");
/* import */ var webpack_dev_server_client_utils_log_js__rspack_import_5 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/log.js");
/* import */ var webpack_dev_server_client_utils_sendMessage_js__rspack_import_6 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/sendMessage.js");
// @ts-nocheck
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* global __resourceQuery, __webpack_hash__ */
/* Rspack dev server runtime client */
/// <reference types="webpack/module" />






/**
 * @typedef {Object} OverlayOptions
 * @property {boolean | (error: Error) => boolean} [warnings]
 * @property {boolean | (error: Error) => boolean} [errors]
 * @property {boolean | (error: Error) => boolean} [runtimeErrors]
 * @property {string} [trustedTypesPolicyName]
 */
/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | OverlayOptions} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */
/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */
/**
 * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions
 */
var decodeOverlayOptions = function (overlayOptions) {
    if (typeof overlayOptions === 'object') {
        ['warnings', 'errors', 'runtimeErrors'].forEach(function (property) {
            if (typeof overlayOptions[property] === 'string') {
                var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);
                // eslint-disable-next-line no-new-func
                overlayOptions[property] = new Function('message', "var callback = ".concat(overlayFilterFunctionString, "\n\t\t\t\treturn callback(message)"));
            }
        });
    }
};
/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */
var parseURL = function (resourceQuery) {
    /** @type {{ [key: string]: string }} */
    var result = {};
    if (typeof resourceQuery === 'string' && resourceQuery !== '') {
        var searchParams = resourceQuery.slice(1).split('&');
        for (var i = 0; i < searchParams.length; i++) {
            var pair = searchParams[i].split('=');
            result[pair[0]] = decodeURIComponent(pair[1]);
        }
    }
    else {
        // Else, get the url from the <script> this file was called with.
        var scriptSource = getCurrentScriptSource();
        var scriptSourceURL = void 0;
        try {
            // The placeholder `baseURL` with `window.location.href`,
            // is to allow parsing of path-relative or protocol-relative URLs,
            // and will have no effect if `scriptSource` is a fully valid URL.
            scriptSourceURL = new URL(scriptSource, self.location.href);
        }
        catch (error) {
            // URL parsing failed, do nothing.
            // We will still proceed to see if we can recover using `resourceQuery`
        }
        if (scriptSourceURL) {
            result = scriptSourceURL;
            result.fromCurrentScript = true;
        }
    }
    return result;
};
/**
 * @type {Status}
 */
var status = {
    isUnloading: false,
    // eslint-disable-next-line camelcase
    currentHash: __webpack_require__.h(),
};
/**
 * @returns {string}
 */
var getCurrentScriptSource = function () {
    // `document.currentScript` is the most accurate way to find the current script,
    // but is not supported in all browsers.
    if (document.currentScript) {
        return document.currentScript.getAttribute('src');
    }
    // Fallback to getting all scripts running in the document.
    var scriptElements = document.scripts || [];
    var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) { return element.getAttribute('src'); });
    if (scriptElementsWithSrc.length > 0) {
        var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
        return currentScript.getAttribute('src');
    }
    // Fail as there was no script to use.
    throw new Error('[webpack-dev-server] Failed to get current script source.');
};
var parsedResourceQuery = parseURL(__resourceQuery);
var enabledFeatures = {
    'Hot Module Replacement': false,
    'Live Reloading': false,
    Progress: false,
    Overlay: false,
};
/** @type {Options} */
var options = {
    hot: false,
    liveReload: false,
    progress: false,
    overlay: false,
};
if (parsedResourceQuery.hot === 'true') {
    options.hot = true;
    enabledFeatures['Hot Module Replacement'] = true;
}
if (parsedResourceQuery['live-reload'] === 'true') {
    options.liveReload = true;
    enabledFeatures['Live Reloading'] = true;
}
if (parsedResourceQuery.progress === 'true') {
    options.progress = true;
    enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
    try {
        options.overlay = JSON.parse(parsedResourceQuery.overlay);
    }
    catch (e) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.error('Error parsing overlay options from resource query:', e);
    }
    // Fill in default "true" params for partially-specified objects.
    if (typeof options.overlay === 'object') {
        options.overlay = __assign({ errors: true, warnings: true, runtimeErrors: true }, options.overlay);
        decodeOverlayOptions(options.overlay);
    }
    enabledFeatures.Overlay = options.overlay !== false;
}
if (parsedResourceQuery.logging) {
    options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== 'undefined') {
    options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */
var setAllLogLevel = function (level) {
    // This is needed because the HMR logger operate separately from dev server logger
    _rspack_core_hot_log_js__rspack_import_1_default().setLogLevel(level === 'verbose' || level === 'log' ? 'info' : level);
    (0,webpack_dev_server_client_utils_log_js__rspack_import_5.setLogLevel)(level);
};
if (options.logging) {
    setAllLogLevel(options.logging);
}
var logEnabledFeatures = function (features) {
    var listEnabledFeatures = Object.keys(features);
    if (!features || listEnabledFeatures.length === 0) {
        return;
    }
    var logString = 'Server started:';
    // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
    for (var i = 0; i < listEnabledFeatures.length; i++) {
        var key = listEnabledFeatures[i];
        logString += " ".concat(key, " ").concat(features[key] ? 'enabled' : 'disabled', ",");
    }
    // replace last comma with a period
    logString = logString.slice(0, -1).concat('.');
    webpack_dev_server_client_utils_log_js__rspack_import_5.log.info(logString);
};
logEnabledFeatures(enabledFeatures);
self.addEventListener('beforeunload', function () {
    status.isUnloading = true;
});
var overlay = typeof window !== 'undefined'
    ? (0,webpack_dev_server_client_overlay_js__rspack_import_2.createOverlay)(typeof options.overlay === 'object'
        ? {
            trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
            catchRuntimeError: options.overlay.runtimeErrors,
        }
        : {
            trustedTypesPolicyName: false,
            catchRuntimeError: options.overlay,
        })
    : { send: function () { } };
/**
 * @param {Options} options
 * @param {Status} currentStatus
 */
var reloadApp = function (_a, currentStatus) {
    var hot = _a.hot, liveReload = _a.liveReload;
    if (currentStatus.isUnloading) {
        return;
    }
    var currentHash = currentStatus.currentHash, previousHash = currentStatus.previousHash;
    var isInitial = currentHash.indexOf(/** @type {string} */ (previousHash)) >= 0;
    if (isInitial) {
        return;
    }
    /**
     * @param {Window} rootWindow
     * @param {number} intervalId
     */
    function applyReload(rootWindow, intervalId) {
        clearInterval(intervalId);
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info('App updated. Reloading...');
        rootWindow.location.reload();
    }
    var search = self.location.search.toLowerCase();
    var allowToHot = search.indexOf('webpack-dev-server-hot=false') === -1;
    var allowToLiveReload = search.indexOf('webpack-dev-server-live-reload=false') === -1;
    if (hot && allowToHot) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info('App hot update...');
        _rspack_core_hot_emitter_js__rspack_import_0_default().emit('webpackHotUpdate', currentStatus.currentHash);
        if (typeof self !== 'undefined' && self.window) {
            // broadcast update to window
            self.postMessage("webpackHotUpdate".concat(currentStatus.currentHash), '*');
        }
    }
    // allow refreshing the page only if liveReload isn't disabled
    else if (liveReload && allowToLiveReload) {
        var rootWindow_1 = self;
        // use parent window for reload (in case we're in an iframe with no valid src)
        var intervalId_1 = self.setInterval(function () {
            if (rootWindow_1.location.protocol !== 'about:') {
                // reload immediately if protocol is valid
                applyReload(rootWindow_1, intervalId_1);
            }
            else {
                rootWindow_1 = rootWindow_1.parent;
                if (rootWindow_1.parent === rootWindow_1) {
                    // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
                    applyReload(rootWindow_1, intervalId_1);
                }
            }
        });
    }
};
var ansiRegex = new RegExp([
    '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
    '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
].join('|'), 'g');
/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */
var stripAnsi = function (string) {
    if (typeof string !== 'string') {
        throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
    }
    return string.replace(ansiRegex, '');
};
var onSocketMessage = {
    hot: function () {
        if (parsedResourceQuery.hot === 'false') {
            return;
        }
        options.hot = true;
    },
    liveReload: function () {
        if (parsedResourceQuery['live-reload'] === 'false') {
            return;
        }
        options.liveReload = true;
    },
    invalid: function () {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info('App updated. Recompiling...');
        // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
        if (options.overlay) {
            overlay.send({ type: 'DISMISS' });
        }
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Invalid');
    },
    /**
     * @param {string | undefined} hash
     */
    hash: function hash(_hash) {
        if (!_hash) {
            return;
        }
        status.previousHash = status.currentHash;
        status.currentHash = _hash;
    },
    logging: setAllLogLevel,
    /**
     * @param {boolean} value
     */
    overlay: function (value) {
        if (typeof document === 'undefined') {
            return;
        }
        options.overlay = value;
        decodeOverlayOptions(options.overlay);
    },
    /**
     * @param {number} value
     */
    reconnect: function (value) {
        if (parsedResourceQuery.reconnect === 'false') {
            return;
        }
        options.reconnect = value;
    },
    /**
     * @param {boolean} value
     */
    progress: function (value) {
        options.progress = value;
    },
    /**
     * @param {{ pluginName?: string, percent: number, msg: string }} data
     */
    'progress-update': function progressUpdate(data) {
        if (options.progress) {
            webpack_dev_server_client_utils_log_js__rspack_import_5.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : '').concat(data.percent, "% - ").concat(data.msg, "."));
        }
        if ((0,webpack_dev_server_client_progress_js__rspack_import_4.isProgressSupported)()) {
            if (typeof options.progress === 'string') {
                var progress = document.querySelector('wds-progress');
                if (!progress) {
                    (0,webpack_dev_server_client_progress_js__rspack_import_4.defineProgressElement)();
                    progress = document.createElement('wds-progress');
                    document.body.appendChild(progress);
                }
                progress.setAttribute('progress', data.percent);
                progress.setAttribute('type', options.progress);
            }
        }
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Progress', data);
    },
    'still-ok': function stillOk() {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info('Nothing changed.');
        if (options.overlay) {
            overlay.send({ type: 'DISMISS' });
        }
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('StillOk');
    },
    ok: function () {
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Ok');
        if (options.overlay) {
            overlay.send({ type: 'DISMISS' });
        }
        reloadApp(options, status);
    },
    /**
     * @param {string} file
     */
    'static-changed': function staticChanged(file) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info("".concat(file ? "\"".concat(file, "\"") : 'Content', " from static directory was changed. Reloading..."));
        self.location.reload();
    },
    /**
     * @param {Error[]} warnings
     * @param {any} params
     */
    warnings: function (warnings, params) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.warn('Warnings while compiling.');
        var printableWarnings = warnings.map(function (error) {
            var _a = (0,webpack_dev_server_client_overlay_js__rspack_import_2.formatProblem)('warning', error), header = _a.header, body = _a.body;
            return "".concat(header, "\n").concat(stripAnsi(body));
        });
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Warnings', printableWarnings);
        for (var i = 0; i < printableWarnings.length; i++) {
            webpack_dev_server_client_utils_log_js__rspack_import_5.log.warn(printableWarnings[i]);
        }
        var overlayWarningsSetting = typeof options.overlay === 'boolean'
            ? options.overlay
            : options.overlay && options.overlay.warnings;
        if (overlayWarningsSetting) {
            var warningsToDisplay = typeof overlayWarningsSetting === 'function'
                ? warnings.filter(overlayWarningsSetting)
                : warnings;
            if (warningsToDisplay.length) {
                overlay.send({
                    type: 'BUILD_ERROR',
                    level: 'warning',
                    messages: warnings,
                });
            }
        }
        if (params && params.preventReloading) {
            return;
        }
        reloadApp(options, status);
    },
    /**
     * @param {Error[]} errors
     */
    errors: function (errors) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.error('Errors while compiling. Reload prevented.');
        var printableErrors = errors.map(function (error) {
            var _a = (0,webpack_dev_server_client_overlay_js__rspack_import_2.formatProblem)('error', error), header = _a.header, body = _a.body;
            return "".concat(header, "\n").concat(stripAnsi(body));
        });
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Errors', printableErrors);
        for (var i = 0; i < printableErrors.length; i++) {
            webpack_dev_server_client_utils_log_js__rspack_import_5.log.error(printableErrors[i]);
        }
        var overlayErrorsSettings = typeof options.overlay === 'boolean'
            ? options.overlay
            : options.overlay && options.overlay.errors;
        if (overlayErrorsSettings) {
            var errorsToDisplay = typeof overlayErrorsSettings === 'function'
                ? errors.filter(overlayErrorsSettings)
                : errors;
            if (errorsToDisplay.length) {
                overlay.send({
                    type: 'BUILD_ERROR',
                    level: 'error',
                    messages: errors,
                });
            }
        }
    },
    /**
     * @param {Error} error
     */
    error: function (error) {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.error(error);
    },
    close: function () {
        webpack_dev_server_client_utils_log_js__rspack_import_5.log.info('Disconnected!');
        if (options.overlay) {
            overlay.send({ type: 'DISMISS' });
        }
        (0,webpack_dev_server_client_utils_sendMessage_js__rspack_import_6["default"])('Close');
    },
};
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
var formatURL = function (objURL) {
    var protocol = objURL.protocol || '';
    if (protocol && protocol.substr(-1) !== ':') {
        protocol += ':';
    }
    var auth = objURL.auth || '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
    }
    var host = '';
    if (objURL.hostname) {
        host =
            auth +
                (objURL.hostname.indexOf(':') === -1
                    ? objURL.hostname
                    : "[".concat(objURL.hostname, "]"));
        if (objURL.port) {
            host += ":".concat(objURL.port);
        }
    }
    var pathname = objURL.pathname || '';
    if (objURL.slashes) {
        host = "//".concat(host || '');
        if (pathname && pathname.charAt(0) !== '/') {
            pathname = "/".concat(pathname);
        }
    }
    else if (!host) {
        host = '';
    }
    var search = objURL.search || '';
    if (search && search.charAt(0) !== '?') {
        search = "?".concat(search);
    }
    var hash = objURL.hash || '';
    if (hash && hash.charAt(0) !== '#') {
        hash = "#".concat(hash);
    }
    pathname = pathname.replace(/[?#]/g, 
    /**
     * @param {string} match
     * @returns {string}
     */
    function (match) { return encodeURIComponent(match); });
    search = search.replace('#', '%23');
    return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
};
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */
var createSocketURL = function (parsedURL) {
    var hostname = parsedURL.hostname;
    // Node.js module parses it as `::`
    // `new URL(urlString, [baseURLString])` parses it as '[::]'
    var isInAddrAny = hostname === '0.0.0.0' || hostname === '::' || hostname === '[::]';
    // why do we need this check?
    // hostname n/a for file protocol (example, when using electron, ionic)
    // see: https://github.com/webpack/webpack-dev-server/pull/384
    if (isInAddrAny &&
        self.location.hostname &&
        self.location.protocol.indexOf('http') === 0) {
        hostname = self.location.hostname;
    }
    var socketURLProtocol = parsedURL.protocol || self.location.protocol;
    // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
    if (socketURLProtocol === 'auto:' ||
        (hostname && isInAddrAny && self.location.protocol === 'https:')) {
        socketURLProtocol = self.location.protocol;
    }
    socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, 'ws');
    var socketURLAuth = '';
    // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
    // Parse authentication credentials in case we need them
    if (parsedURL.username) {
        socketURLAuth = parsedURL.username;
        // Since HTTP basic authentication does not allow empty username,
        // we only include password if the username is not empty.
        if (parsedURL.password) {
            // Result: <username>:<password>
            socketURLAuth = socketURLAuth.concat(':', parsedURL.password);
        }
    }
    // In case the host is a raw IPv6 address, it can be enclosed in
    // the brackets as the brackets are needed in the final URL string.
    // Need to remove those as url.format blindly adds its own set of brackets
    // if the host string contains colons. That would lead to non-working
    // double brackets (e.g. [[::]]) host
    //
    // All of these web socket url params are optionally passed in through resourceQuery,
    // so we need to fall back to the default if they are not provided
    var socketURLHostname = (hostname ||
        self.location.hostname ||
        'localhost').replace(/^\[(.*)\]$/, '$1');
    var socketURLPort = parsedURL.port;
    if (!socketURLPort || socketURLPort === '0') {
        socketURLPort = self.location.port;
    }
    // If path is provided it'll be passed in via the resourceQuery as a
    // query param so it has to be parsed out of the querystring in order for the
    // client to open the socket to the correct location.
    var socketURLPathname = '/ws';
    if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
        socketURLPathname = parsedURL.pathname;
    }
    return formatURL({
        protocol: socketURLProtocol,
        auth: socketURLAuth,
        hostname: socketURLHostname,
        port: socketURLPort,
        pathname: socketURLPathname,
        slashes: true,
    });
};
var socketURL = createSocketURL(parsedResourceQuery);
(0,webpack_dev_server_client_socket_js__rspack_import_3["default"])(socketURL, onSocketMessage, options.reconnect);



},
"../../node_modules/.pnpm/@rspack+dev-server@1.1.5_@r_223c8da7ad9bb3be2ef249fbff48308c/node_modules/@rspack/dev-server/client/utils/ansiHTML.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (ansiHTML)
});
// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var _defColors = {
    reset: ['fff', '000'],
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888',
};
var _styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey',
};
var _colorMode = {
    2: 'rgb',
};
var _openTags = {
    1: 'font-weight:bold',
    2: 'opacity:0.5',
    3: '<i>',
    4: '<u>',
    8: 'display:none',
    9: '<del>',
    38: function (match) {
        // color
        var mode = _colorMode[match[0]];
        if (mode === 'rgb') {
            var r = match[1];
            var g = match[2];
            var b = match[3];
            match.advance(4);
            return "color: rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        }
    },
    48: function (match) {
        // background color
        var mode = _colorMode[match[0]];
        if (mode === 'rgb') {
            var r = match[1];
            var g = match[2];
            var b = match[3];
            match.advance(4);
            return "background-color: rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        }
    },
};
var _openTagToCloseTag = {
    3: '23',
    4: '24',
    9: '29',
};
var _closeTags = {
    0: function (ansiCodes) {
        if (!ansiCodes)
            return '</span>';
        if (!ansiCodes.length)
            return '';
        var code;
        var ret = '';
        while ((code = ansiCodes.pop())) {
            var closeTag = _openTagToCloseTag[code];
            if (closeTag) {
                ret += _closeTags[closeTag];
                continue;
            }
            ret += '</span>';
        }
        return ret;
    },
    23: '</i>',
    24: '</u>',
    29: '</del>', // reset delete
};
for (var _i = 0, _a = [21, 22, 27, 28, 39, 49]; _i < _a.length; _i++) {
    var n = _a[_i];
    _closeTags[n] = '</span>';
}
/**
 * Normalize ';<seq>' | '<seq>' -> '<seq>'
 */
function normalizeSeq(seq) {
    if (seq === null || seq === undefined)
        return null;
    if (seq.startsWith(';')) {
        return seq.slice(1);
    }
    return seq;
}
/**
 * Converts text with ANSI color codes to HTML markup.
 */
function ansiHTML(text) {
    // Returns the text if the string has no ANSI escape code.
    if (!_regANSI.test(text)) {
        return text;
    }
    // Cache opened sequence.
    var ansiCodes = [];
    // Replace with markup.
    //@ts-ignore TS1487 error
    var ret = text.replace(/\033\[(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?m/g, function (m) {
        var _a;
        var match = (_a = m.match(/(;?\d+)/g)) === null || _a === void 0 ? void 0 : _a.map(normalizeSeq);
        Object.defineProperty(match, 'advance', {
            value: function (count) {
                this.splice(0, count);
            },
        });
        var rep = '';
        var seq;
        while ((seq = match[0])) {
            match.advance(1);
            rep += applySeq(seq);
        }
        return rep;
        function applySeq(seq) {
            var other = _openTags[seq];
            if (other &&
                (other =
                    typeof other === 'function' ? other(match) : other)) {
                // If reset signal is encountered, we have to reset everything.
                var ret_1 = '';
                if (seq === '0') {
                    ret_1 += _closeTags[seq](ansiCodes);
                }
                // If current sequence has been opened, close it.
                if (ansiCodes.indexOf(seq) !== -1) {
                    ansiCodes.pop();
                    return '</span>';
                }
                // Open tag.
                ansiCodes.push(seq);
                return ret_1 + (other[0] === '<' ? other : "<span style=\"".concat(other, ";\">"));
            }
            var ct = _closeTags[seq];
            if (typeof ct === 'function') {
                return ct(ansiCodes);
            }
            if (ct) {
                // Pop sequence
                ansiCodes.pop();
                return ct;
            }
            return '';
        }
    });
    // Make sure tags are closed.
    var l = ansiCodes.length;
    l > 0 && (ret += Array(l + 1).join('</span>'));
    return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
    if (typeof colors !== 'object') {
        throw new Error('`colors` parameter must be an Object.');
    }
    var _finalColors = {};
    for (var key in _defColors) {
        var hex = colors.hasOwnProperty(key) ? colors[key] : null;
        if (!hex) {
            _finalColors[key] = _defColors[key];
            continue;
        }
        if ('reset' === key) {
            if (typeof hex === 'string') {
                hex = [hex];
            }
            if (!Array.isArray(hex) ||
                hex.length === 0 ||
                hex.some(function (h) { return typeof h !== 'string'; })) {
                throw new Error("The value of `".concat(key, "` property must be an Array and each item could only be a hex string, e.g.: FF0000"));
            }
            var defHexColor = _defColors[key];
            if (!hex[0]) {
                hex[0] = defHexColor[0];
            }
            if (hex.length === 1 || !hex[1]) {
                hex = [hex[0]];
                hex.push(defHexColor[1]);
            }
            hex = hex.slice(0, 2);
        }
        else if (typeof hex !== 'string') {
            throw new Error("The value of `".concat(key, "` property must be a hex string, e.g.: FF0000"));
        }
        _finalColors[key] = hex;
    }
    _setTags(_finalColors);
};
/**
 * Reset colors.
 */
ansiHTML.reset = function () {
    _setTags(_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {};
if (Object.defineProperty) {
    Object.defineProperty(ansiHTML.tags, 'open', {
        get: function () { return _openTags; },
    });
    Object.defineProperty(ansiHTML.tags, 'close', {
        get: function () { return _closeTags; },
    });
}
else {
    ansiHTML.tags.open = _openTags;
    ansiHTML.tags.close = _closeTags;
}
function _setTags(colors) {
    // reset all
    _openTags['0'] =
        "font-weight:normal;opacity:1;color:#".concat(colors.reset[0], ";background:#").concat(colors.reset[1]);
    // inverse
    _openTags['7'] = "color:#".concat(colors.reset[1], ";background:#").concat(colors.reset[0]);
    // dark grey
    _openTags['90'] = "color:#".concat(colors.darkgrey);
    for (var code in _styles) {
        var color = _styles[code];
        var oriColor = colors[color] || '000';
        _openTags[code] = "color:#".concat(oriColor);
        var codeInt = Number.parseInt(code);
        _openTags[(codeInt + 10).toString()] = "background:#".concat(oriColor);
    }
}
ansiHTML.reset();


},
"../../node_modules/.pnpm/isomorphic-ws@5.0.0_ws@8.18.0/node_modules/isomorphic-ws/browser.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof __webpack_require__.g !== 'undefined') {
  ws = __webpack_require__.g.WebSocket || __webpack_require__.g.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

/* export default */ const __rspack_default_export = (ws);


},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/clients/WebSocketClient.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebSocketClient)
});
/* import */ var _utils_log_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/log.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__rspack_import_0.log.error(error);
    };
  }

  /**
   * @param {(...args: any[]) => void} f
   */
  return _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }

    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);
}();


},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/modules/logger/index.js"(__unused_rspack_module, exports) {
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/tapable.js":
/*!**********************************************!*\
  !*** ./client-src/modules/logger/tapable.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __nested_rspack_exports__, __nested_rspack_require_372_391__) {

__nested_rspack_require_372_391__.r(__nested_rspack_exports__);
/* harmony export */ __nested_rspack_require_372_391__.d(__nested_rspack_exports__, {
/* harmony export */   SyncBailHook: function() { return /* binding */ SyncBailHook; }
/* harmony export */ });
function SyncBailHook() {
  return {
    call: function call() {}
  };
}

/**
 * Client stub for tapable SyncBailHook
 */
// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(module) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var LogType = Object.freeze({
  error: (/** @type {"error"} */"error"),
  // message, c style arguments
  warn: (/** @type {"warn"} */"warn"),
  // message, c style arguments
  info: (/** @type {"info"} */"info"),
  // message, c style arguments
  log: (/** @type {"log"} */"log"),
  // message, c style arguments
  debug: (/** @type {"debug"} */"debug"),
  // message, c style arguments

  trace: (/** @type {"trace"} */"trace"),
  // no arguments

  group: (/** @type {"group"} */"group"),
  // [label]
  groupCollapsed: (/** @type {"groupCollapsed"} */"groupCollapsed"),
  // [label]
  groupEnd: (/** @type {"groupEnd"} */"groupEnd"),
  // [label]

  profile: (/** @type {"profile"} */"profile"),
  // [profileName]
  profileEnd: (/** @type {"profileEnd"} */"profileEnd"),
  // [profileName]

  time: (/** @type {"time"} */"time"),
  // name, time as [seconds, nanoseconds]

  clear: (/** @type {"clear"} */"clear"),
  // no arguments
  status: (/** @type {"status"} */"status") // message, arguments
});
module.exports.LogType = LogType;

/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");
var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {(type: LogTypeEnum, args?: EXPECTED_ANY[]) => void} log log function
   * @param {(name: string | (() => string)) => WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);
    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  /**
   * @param {...EXPECTED_ANY} args args
   */
  return _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this[LOG_SYMBOL](LogType.error, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this[LOG_SYMBOL](LogType.warn, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this[LOG_SYMBOL](LogType.info, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this[LOG_SYMBOL](LogType.log, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this[LOG_SYMBOL](LogType.debug, args);
    }

    /**
     * @param {EXPECTED_ANY} assertion assertion
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }
        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this[LOG_SYMBOL](LogType.status, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this[LOG_SYMBOL](LogType.group, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this[LOG_SYMBOL](LogType.groupEnd);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }

    /**
     * @param {string} label label
     */
  }, {
    key: "time",
    value: function time(label) {
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }
      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }
      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);
}();
module.exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_rspack_require_12803_12822__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _require = __nested_rspack_require_12803_12822__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  LogType = _require.LogType;

/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {(item: string) => boolean} FilterFunction */
/** @typedef {(value: string, type: LogTypeEnum, args?: EXPECTED_ANY[]) => void} LoggingFunction */

/**
 * @typedef {object} LoggerConsole
 * @property {() => void} clear
 * @property {() => void} trace
 * @property {(...args: EXPECTED_ANY[]) => void} info
 * @property {(...args: EXPECTED_ANY[]) => void} log
 * @property {(...args: EXPECTED_ANY[]) => void} warn
 * @property {(...args: EXPECTED_ANY[]) => void} error
 * @property {(...args: EXPECTED_ANY[]) => void=} debug
 * @property {(...args: EXPECTED_ANY[]) => void=} group
 * @property {(...args: EXPECTED_ANY[]) => void=} groupCollapsed
 * @property {(...args: EXPECTED_ANY[]) => void=} groupEnd
 * @property {(...args: EXPECTED_ANY[]) => void=} status
 * @property {(...args: EXPECTED_ANY[]) => void=} profile
 * @property {(...args: EXPECTED_ANY[]) => void=} profileEnd
 * @property {(...args: EXPECTED_ANY[]) => void=} logTime
 */

/**
 * @typedef {object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction | undefined} filter function
 */
var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }
  if (item && _typeof(item) === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }
  if (typeof item === "function") {
    return item;
  }
  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};

/**
 * @enum {number}
 */
var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};

/**
 * @param {LoggerOptions} options options object
 * @returns {LoggingFunction} logging function
 */
module.exports = function (_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? "info" : _ref$level,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    console = _ref.console;
  var debugFilters = /** @type {FilterFunction[]} */

  typeof debug === "boolean" ? [function () {
    return debug;
  }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);
  var loglevel = LogLevel["".concat(level)] || 0;

  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {EXPECTED_ANY[]=} args arguments of the log entry
   * @returns {void}
   */
  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        }
        return ["[".concat(name, "]")].concat(_toConsumableArray(args));
      }
      return [];
    };
    var debug = debugFilters.some(function (f) {
      return f(name);
    });
    switch (type) {
      case LogType.debug:
        if (!debug) return;
        if (typeof console.debug === "function") {
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;
      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;
        if (!debug && loglevel > LogLevel.verbose) {
          if (typeof console.groupCollapsed === "function") {
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }
          break;
        }
      // falls through
      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.group === "function") {
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.groupEnd === "function") {
          console.groupEnd();
        }
        break;
      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var _args = _slicedToArray(/** @type {[string, number, number]} */
            args, 3),
            label = _args[0],
            start = _args[1],
            end = _args[2];
          var ms = start * 1000 + end / 1000000;
          var msg = "[".concat(name, "] ").concat(label, ": ").concat(ms, " ms");
          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }
          break;
        }
      case LogType.profile:
        if (typeof console.profile === "function") {
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.profileEnd:
        if (typeof console.profileEnd === "function") {
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.clear === "function") {
          console.clear();
        }
        break;
      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;
        if (typeof console.status === "function") {
          if (!args || args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else if (args && args.length !== 0) {
          console.info.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };
  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_rspack_require_23778_23797__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var _require = __nested_rspack_require_23778_23797__(/*! tapable */ "./client-src/modules/logger/tapable.js"),
  SyncBailHook = _require.SyncBailHook;
var _require2 = __nested_rspack_require_23778_23797__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  Logger = _require2.Logger;
var createConsoleLogger = __nested_rspack_require_23778_23797__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");

/** @type {createConsoleLogger.LoggerOptions} */
var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
module.exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (module.exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return module.exports.getLogger("".concat(name, "/").concat(childName));
  });
};

/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
module.exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);
  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};
module.exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_rspack_require_25855__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_rspack_require_25855__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_rspack_require_25855__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_rspack_require_25855__.o(definition, key) && !__nested_rspack_require_25855__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_rspack_require_25855__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_rspack_require_25855__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_rspack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_rspack_require_25855__.r(__nested_rspack_exports__);
/* harmony export */ __nested_rspack_require_25855__.d(__nested_rspack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_rspack_require_25855__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __nested_rspack_exports__) __webpack_export_target__[__webpack_i__] = __nested_rspack_exports__[__webpack_i__];
if(__nested_rspack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/overlay.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createOverlay: () => (createOverlay),
  formatProblem: () => (formatProblem)
});
/* import */ var ansi_html_community__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@rspack+dev-server@1.1.5_@r_223c8da7ad9bb3be2ef249fbff48308c/node_modules/@rspack/dev-server/client/utils/ansiHTML.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).



/**
 * @type {(input: string, position: number) => string}
 */
var getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;
};

/**
 * @param {string} macroText
 * @param {RegExp} macroRegExp
 * @param {(input: string) => string} macroReplacer
 * @returns {string}
 */
var replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
  macroRegExp.lastIndex = 0;
  var replaceMatch = macroRegExp.exec(macroText);
  var replaceResult;
  if (replaceMatch) {
    replaceResult = "";
    var replaceLastIndex = 0;
    do {
      if (replaceLastIndex !== replaceMatch.index) {
        replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);
      }
      var replaceInput = replaceMatch[0];
      replaceResult += macroReplacer(replaceInput);
      replaceLastIndex = replaceMatch.index + replaceInput.length;
      // eslint-disable-next-line no-cond-assign
    } while (replaceMatch = macroRegExp.exec(macroText));
    if (replaceLastIndex !== macroText.length) {
      replaceResult += macroText.substring(replaceLastIndex);
    }
  } else {
    replaceResult = macroText;
  }
  return replaceResult;
};
var references = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
  "&": "&amp;"
};

/**
 * @param {string} text text
 * @returns {string}
 */
function encode(text) {
  if (!text) {
    return "";
  }
  return replaceUsingRegExp(text, /[<>'"&]/g, function (input) {
    var result = references[input];
    if (!result) {
      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);
      result = "&#".concat(code, ";");
    }
    return result;
  });
}

/**
 * @typedef {Object} StateDefinitions
 * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]
 */

/**
 * @typedef {Object} Options
 * @property {{[state: string]: StateDefinitions}} states
 * @property {object} context;
 * @property {string} initial
 */

/**
 * @typedef {Object} Implementation
 * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 *
 *  - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 *  - event passed to `send` must be an object with `type` property.
 *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 *  Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 *
 * @param {Options} options
 * @param {Implementation} implementation
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}

/**
 * @typedef {Object} ShowOverlayData
 * @property {'warning' | 'error'} level
 * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
 * @property {'build' | 'runtime'} messageSource
 */

/**
 * @typedef {Object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay
 * @property {() => void} hideOverlay
 */

/**
 * @param {CreateOverlayMachineOptions} options
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  return createMachine({
    initial: "hidden",
    context: {
      level: "error",
      messages: [],
      messageSource: "build"
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error",
          messageSource: "build"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
};

/**
 *
 * @param {Error} error
 */
var parseErrorToStacks = function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
};

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback
 */
var listenToRuntimeError = function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
};

/**
 * @callback UnhandledRejectionCallback
 * @param {PromiseRejectionEvent} rejectionEvent
 * @returns {void}
 */

/**
 * @param {UnhandledRejectionCallback} callback
 */
var listenToUnhandledRejection = function listenToUnhandledRejection(callback) {
  window.addEventListener("unhandledrejection", callback);
  return function cleanup() {
    window.removeEventListener("unhandledrejection", callback);
  };
};

// Styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};

// ANSI HTML

var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__rspack_import_0["default"].setColors(colors);

/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item
 * @returns {{ header: string, body: string }}
 */
var formatProblem = function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    // eslint-disable-next-line no-nested-ternary
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
};

/**
 * @typedef {Object} CreateOverlayOptions
 * @property {string | null} trustedTypesPolicyName
 * @property {boolean | (error: Error) => void} [catchRuntimeError]
 */

/**
 *
 * @param {CreateOverlayOptions} options
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var headerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {TrustedTypePolicy | undefined} */
  var overlayTrustedTypesPolicy;

  /**
   *
   * @param {HTMLElement} element
   * @param {CSSStyleDeclaration} style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[prop] = style[prop];
    });
  }

  /**
   * @param {string | null} trustedTypesPolicyName
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      containerElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, containerStyle);
      headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad(/** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback
   * @param {string | null} trustedTypesPolicyName
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML("") : "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type
   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
   * @param {string | null} trustedTypesPolicyName
   * @param {'build' | 'runtime'} messageSource
   */
  function show(type, messages, trustedTypesPolicyName, messageSource) {
    ensureOverlayExists(function () {
      headerElement.innerText = messageSource === "runtime" ? "Uncaught runtime errors:" : "Compiled with problems:";
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? msgStyles.warning : msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, msgTypeStyle);
        if (message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", true);
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = (0,ansi_html_community__rspack_import_0["default"])(encode(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, msgTextStyle);
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }
  var overlayService = createOverlayMachine({
    showOverlay: function showOverlay(_ref3) {
      var _ref3$level = _ref3.level,
        level = _ref3$level === void 0 ? "error" : _ref3$level,
        messages = _ref3.messages,
        messageSource = _ref3.messageSource;
      return show(level, messages, options.trustedTypesPolicyName, messageSource);
    },
    hideOverlay: hide
  });
  if (options.catchRuntimeError) {
    /**
     * @param {Error | undefined} error
     * @param {string} fallbackMessage
     */
    var handleError = function handleError(error, fallbackMessage) {
      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);
      var shouldDisplay = typeof options.catchRuntimeError === "function" ? options.catchRuntimeError(errorObject) : true;
      if (shouldDisplay) {
        overlayService.send({
          type: "RUNTIME_ERROR",
          messages: [{
            message: errorObject.message,
            stack: parseErrorToStacks(errorObject)
          }]
        });
      }
    };
    listenToRuntimeError(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }

      // if error stack indicates a React error boundary caught the error, do not show overlay.
      if (error && error.stack && error.stack.includes("invokeGuardedCallbackDev")) {
        return;
      }
      handleError(error, message);
    });
    listenToUnhandledRejection(function (promiseRejectionEvent) {
      var reason = promiseRejectionEvent.reason;
      handleError(reason, "Unknown promise rejection reason");
    });
  }
  return overlayService;
};


},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/progress.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defineProgressElement: () => (defineProgressElement),
  isProgressSupported: () => (isProgressSupported)
});
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function isProgressSupported() {
  return "customElements" in self && !!HTMLElement.prototype.attachShadow;
}
function defineProgressElement() {
  var _WebpackDevServerProgress;
  if (customElements.get("wds-progress")) {
    return;
  }
  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();
  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {
    function WebpackDevServerProgress() {
      var _this;
      _classCallCheck(this, WebpackDevServerProgress);
      _this = _callSuper(this, WebpackDevServerProgress);
      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);
      _this.attachShadow({
        mode: "open"
      });
      _this.maxDashOffset = -219.99078369140625;
      _this.animationTimer = null;
      return _this;
    }
    _inherits(WebpackDevServerProgress, _HTMLElement);
    return _createClass(WebpackDevServerProgress, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === "progress") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));
        } else if (name === "type") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["progress", "type"];
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _WebpackDevServerProgress = WebpackDevServerProgress;
  function _reset() {
    var _this$getAttribute, _Number;
    clearTimeout(this.animationTimer);
    this.animationTimer = null;
    var typeAttr = (_this$getAttribute = this.getAttribute("type")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();
    this.type = typeAttr === "circular" ? "circular" : "linear";
    var innerHTML = this.type === "circular" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);
    this.shadowRoot.innerHTML = innerHTML;
    this.initialProgress = (_Number = Number(this.getAttribute("progress"))) !== null && _Number !== void 0 ? _Number : 0;
    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);
  }
  function _circularTemplate() {
    return "\n        <style>\n        :host {\n            width: 200px;\n            height: 200px;\n            position: fixed;\n            right: 5%;\n            top: 5%;\n            transition: opacity .25s ease-in-out;\n            z-index: 2147483645;\n        }\n\n        circle {\n            fill: #282d35;\n        }\n\n        path {\n            fill: rgba(0, 0, 0, 0);\n            stroke: rgb(186, 223, 172);\n            stroke-dasharray: 219.99078369140625;\n            stroke-dashoffset: -219.99078369140625;\n            stroke-width: 10;\n            transform: rotate(90deg) translate(0px, -80px);\n        }\n\n        text {\n            font-family: 'Open Sans', sans-serif;\n            font-size: 18px;\n            fill: #ffffff;\n            dominant-baseline: middle;\n            text-anchor: middle;\n        }\n\n        tspan#percent-super {\n            fill: #bdc3c7;\n            font-size: 0.45em;\n            baseline-shift: 10%;\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; transform: scale(1); }\n            100% { opacity: 0; transform: scale(0); }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <svg id=\"progress\" class=\"hidden noselect\" viewBox=\"0 0 80 80\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"35\"></circle>\n        <path d=\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\"></path>\n        <text x=\"50%\" y=\"51%\">\n            <tspan id=\"percent-value\">0</tspan>\n            <tspan id=\"percent-super\">%</tspan>\n        </text>\n        </svg>\n      ";
  }
  function _linearTemplate() {
    return "\n        <style>\n        :host {\n            position: fixed;\n            top: 0;\n            left: 0;\n            height: 4px;\n            width: 100vw;\n            z-index: 2147483645;\n        }\n\n        #bar {\n            width: 0%;\n            height: 4px;\n            background-color: rgb(186, 223, 172);\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <div id=\"progress\"></div>\n        ";
  }
  function _update(percent) {
    var element = this.shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      var path = this.shadowRoot.querySelector("path");
      var value = this.shadowRoot.querySelector("#percent-value");
      var offset = (100 - percent) / 100 * this.maxDashOffset;
      path.style.strokeDashoffset = offset;
      value.textContent = percent;
    } else {
      element.style.width = "".concat(percent, "%");
    }
    if (percent >= 100) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);
    } else if (percent > 0) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);
    }
  }
  function _show() {
    var element = this.shadowRoot.querySelector("#progress");
    element.classList.remove("hidden");
  }
  function _hide() {
    var _this2 = this;
    var element = this.shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      element.classList.add("disappear");
      element.addEventListener("animationend", function () {
        element.classList.add("hidden");
        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);
      }, {
        once: true
      });
    } else if (this.type === "linear") {
      element.classList.add("disappear");
      this.animationTimer = setTimeout(function () {
        element.classList.remove("disappear");
        element.classList.add("hidden");
        element.style.width = "0%";
        _this2.animationTimer = null;
      }, 800);
    }
  }
  customElements.define("wds-progress", WebpackDevServerProgress);
}

},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/socket.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  client: () => (client),
  "default": () => (__rspack_default_export)
});
/* import */ var _clients_WebSocketClient_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* import */ var _utils_log_js__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




// this WebsocketClient is here as a default fallback, in case the client is not injected
/* eslint-disable camelcase */
var Client =
// eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__rspack_import_0["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports
var client = null;
var timeout;

/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */
var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__rspack_import_1.log.info("Trying to reconnect...");
      timeout = setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};
/* export default */ const __rspack_default_export = (socket);

},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/log.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  log: () => (log),
  setLogLevel: () => (setLogLevel)
});
/* import */ var _modules_logger_index_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/modules/logger/index.js");
/* import */ var _modules_logger_index_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__rspack_import_0);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__rspack_import_0_default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__rspack_import_0_default().getLogger(name);


},
"../../node_modules/.pnpm/webpack-dev-server@5.2.2_webpack@5.105.2/node_modules/webpack-dev-server/client/utils/sendMessage.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* global __resourceQuery WorkerGlobalScope */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* export default */ const __rspack_default_export = (sendMsg);

},
"./src/fedPrismPluginEntry.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var _fed_prism_runtime_plugin__rspack_import_0 = __webpack_require__("../../packages/runtime-plugin/dist/index.js");

/* export default */ function __rspack_default_export() {
    return (0,_fed_prism_runtime_plugin__rspack_import_0.fedPrismPlugin)({
        port: 7357,
        enabled: true
    });
}


},
"webpack/container/entry/app_c"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";

__webpack_require__.d(exports, {
	get: () => (__webpack_require__.getContainer),
	init: () => (__webpack_require__.initContainer)
});

},
"@module-federation/runtime/rspack.js!=!data:text/javascript,import __module_federation_bundler_runtime__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\node_modules\\\\.pnpm\\\\@module-federation+webpack-bundler-runtime@0.9.1\\\\node_modules\\\\@module-federation\\\\webpack-bundler-runtime\\\\dist\\\\index.cjs.js\";import __module_federation_runtime_plugin_0__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\examples\\\\app-c\\\\src\\\\fedPrismPluginEntry.ts\";import __module_federation_runtime_plugin_1__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\node_modules\\\\.pnpm\\\\@module-federation+dts-plugin@0.9.1_typescript@5.9.3\\\\node_modules\\\\@module-federation\\\\dts-plugin\\\\dist\\\\dynamic-remote-type-hints-plugin.js\";const __module_federation_runtime_plugins__ = [{ plugin: __module_federation_runtime_plugin_0__, params: undefined }, { plugin: __module_federation_runtime_plugin_1__, params: undefined }].filter(({ plugin }) => plugin).map(({ plugin, params }) => plugin(params));const __module_federation_remote_infos__ = {\"app-b\":[{\"alias\":\"app-b\",\"name\":\"app_b\",\"entry\":\"http://localhost:3002/mf-manifest.json\",\"externalType\":\"script\",\"shareScope\":\"default\"}]};const __module_federation_container_name__ = \"app_c\";const __module_federation_share_strategy__ = \"version-first\";if((__webpack_require__.initializeSharingData||__webpack_require__.initializeExposesData)&&__webpack_require__.federation){var _ref,_ref1,_ref2,_ref3,_ref4;var __webpack_require___remotesLoadingData,__webpack_require___remotesLoadingData1,__webpack_require___initializeSharingData,__webpack_require___consumesLoadingData,__webpack_require___consumesLoadingData1,__webpack_require___initializeExposesData,__webpack_require___consumesLoadingData2;const override=(obj,key,value)=>{if(!obj)return;if(obj[key])obj[key]=value};const merge=(obj,key,fn)=>{const value=fn();if(Array.isArray(value)){var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=[];obj[key].push(...value)}else if(typeof value===\"object\"&&value!==null){var _obj1,_key1,_1;(_1=(_obj1=obj)[_key1=key])!==null&&_1!==void 0?_1:_obj1[_key1]={};Object.assign(obj[key],value)}};const early=(obj,key,initial)=>{var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=initial()};const remotesLoadingChunkMapping=(_ref=(__webpack_require___remotesLoadingData=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData===void 0?void 0:__webpack_require___remotesLoadingData.chunkMapping)!==null&&_ref!==void 0?_ref:{};const remotesLoadingModuleIdToRemoteDataMapping=(_ref1=(__webpack_require___remotesLoadingData1=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData1===void 0?void 0:__webpack_require___remotesLoadingData1.moduleIdToRemoteDataMapping)!==null&&_ref1!==void 0?_ref1:{};const initializeSharingScopeToInitDataMapping=(_ref2=(__webpack_require___initializeSharingData=__webpack_require__.initializeSharingData)===null||__webpack_require___initializeSharingData===void 0?void 0:__webpack_require___initializeSharingData.scopeToSharingDataMapping)!==null&&_ref2!==void 0?_ref2:{};const consumesLoadingChunkMapping=(_ref3=(__webpack_require___consumesLoadingData=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData===void 0?void 0:__webpack_require___consumesLoadingData.chunkMapping)!==null&&_ref3!==void 0?_ref3:{};const consumesLoadingModuleToConsumeDataMapping=(_ref4=(__webpack_require___consumesLoadingData1=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData1===void 0?void 0:__webpack_require___consumesLoadingData1.moduleIdToConsumeDataMapping)!==null&&_ref4!==void 0?_ref4:{};const consumesLoadinginstalledModules={};const initializeSharingInitPromises=[];const initializeSharingInitTokens={};const containerShareScope=(__webpack_require___initializeExposesData=__webpack_require__.initializeExposesData)===null||__webpack_require___initializeExposesData===void 0?void 0:__webpack_require___initializeExposesData.shareScope;for(const key in __module_federation_bundler_runtime__){__webpack_require__.federation[key]=__module_federation_bundler_runtime__[key]}early(__webpack_require__.federation,\"consumesLoadingModuleToHandlerMapping\",()=>{const consumesLoadingModuleToHandlerMapping={};for(let[moduleId,data]of Object.entries(consumesLoadingModuleToConsumeDataMapping)){consumesLoadingModuleToHandlerMapping[moduleId]={getter:data.fallback,shareInfo:{shareConfig:{fixedDependencies:false,requiredVersion:data.requiredVersion,strictVersion:data.strictVersion,singleton:data.singleton,eager:data.eager},scope:[data.shareScope]},shareKey:data.shareKey}}return consumesLoadingModuleToHandlerMapping});early(__webpack_require__.federation,\"initOptions\",()=>({}));early(__webpack_require__.federation.initOptions,\"name\",()=>__module_federation_container_name__);early(__webpack_require__.federation.initOptions,\"shareStrategy\",()=>__module_federation_share_strategy__);early(__webpack_require__.federation.initOptions,\"shared\",()=>{const shared={};for(let[scope,stages]of Object.entries(initializeSharingScopeToInitDataMapping)){for(let stage of stages){if(typeof stage===\"object\"&&stage!==null){const{name,version,factory,eager,singleton,requiredVersion,strictVersion}=stage;const shareConfig={};const isValidValue=function(val){return typeof val!==\"undefined\"};if(isValidValue(singleton)){shareConfig.singleton=singleton}if(isValidValue(requiredVersion)){shareConfig.requiredVersion=requiredVersion}if(isValidValue(eager)){shareConfig.eager=eager}if(isValidValue(strictVersion)){shareConfig.strictVersion=strictVersion}const options={version,scope:[scope],shareConfig,get:factory};if(shared[name]){shared[name].push(options)}else{shared[name]=[options]}}}}return shared});merge(__webpack_require__.federation.initOptions,\"remotes\",()=>Object.values(__module_federation_remote_infos__).flat().filter(remote=>remote.externalType===\"script\"));merge(__webpack_require__.federation.initOptions,\"plugins\",()=>__module_federation_runtime_plugins__);early(__webpack_require__.federation,\"bundlerRuntimeOptions\",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions,\"remotes\",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"chunkMapping\",()=>remotesLoadingChunkMapping);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"remoteInfos\",()=>__module_federation_remote_infos__);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"idToExternalAndNameMapping\",()=>{const remotesLoadingIdToExternalAndNameMappingMapping={};for(let[moduleId,data]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){remotesLoadingIdToExternalAndNameMappingMapping[moduleId]=[data.shareScope,data.name,data.externalModuleId,data.remoteName]}return remotesLoadingIdToExternalAndNameMappingMapping});early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"webpackRequire\",()=>__webpack_require__);merge(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"idToRemoteMap\",()=>{const idToRemoteMap={};for(let[id,remoteData]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){const info=__module_federation_remote_infos__[remoteData.remoteName];if(info)idToRemoteMap[id]=info}return idToRemoteMap});override(__webpack_require__,\"S\",__webpack_require__.federation.bundlerRuntime.S);if(__webpack_require__.federation.attachShareScopeMap){__webpack_require__.federation.attachShareScopeMap(__webpack_require__)}override(__webpack_require__.f,\"remotes\",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.remotes({chunkId,promises,chunkMapping:remotesLoadingChunkMapping,idToExternalAndNameMapping:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToExternalAndNameMapping,idToRemoteMap:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,webpackRequire:__webpack_require__}));override(__webpack_require__.f,\"consumes\",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.consumes({chunkId,promises,chunkMapping:consumesLoadingChunkMapping,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping,installedModules:consumesLoadinginstalledModules,webpackRequire:__webpack_require__}));override(__webpack_require__,\"I\",(name,initScope)=>__webpack_require__.federation.bundlerRuntime.I({shareScopeName:name,initScope,initPromises:initializeSharingInitPromises,initTokens:initializeSharingInitTokens,webpackRequire:__webpack_require__}));override(__webpack_require__,\"initContainer\",(shareScope,initScope,remoteEntryInitOptions)=>__webpack_require__.federation.bundlerRuntime.initContainerEntry({shareScope,initScope,remoteEntryInitOptions,shareScopeKey:containerShareScope,webpackRequire:__webpack_require__}));override(__webpack_require__,\"getContainer\",(module1,getScope)=>{var moduleMap=__webpack_require__.initializeExposesData.moduleMap;__webpack_require__.R=getScope;getScope=Object.prototype.hasOwnProperty.call(moduleMap,module1)?moduleMap[module1]():Promise.resolve().then(()=>{throw new Error('Module \"'+module1+'\" does not exist in container.')});__webpack_require__.R=undefined;return getScope});__webpack_require__.federation.instance=__webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);if((__webpack_require___consumesLoadingData2=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData2===void 0?void 0:__webpack_require___consumesLoadingData2.initialConsumes){__webpack_require__.federation.bundlerRuntime.installInitialConsumes({webpackRequire:__webpack_require__,installedModules:consumesLoadinginstalledModules,initialConsumes:__webpack_require__.consumesLoadingData.initialConsumes,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping})}}"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* import */ var C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_9_1_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.9.1/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js");
/* import */ var C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_9_1_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_9_1_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__rspack_import_0);
/* import */ var C_Users_danie_Projects_fed_prism_examples_app_c_src_fedPrismPluginEntry_ts__rspack_import_1 = __webpack_require__("./src/fedPrismPluginEntry.ts");
/* import */ var C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_dts_plugin_0_9_1_typescript_5_9_3_node_modules_module_federation_dts_plugin_dist_dynamic_remote_type_hints_plugin_js__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/@module-federation+dts-plugin@0.9.1_typescript@5.9.3/node_modules/@module-federation/dts-plugin/dist/dynamic-remote-type-hints-plugin.js");
/* import */ var C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_dts_plugin_0_9_1_typescript_5_9_3_node_modules_module_federation_dts_plugin_dist_dynamic_remote_type_hints_plugin_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_dts_plugin_0_9_1_typescript_5_9_3_node_modules_module_federation_dts_plugin_dist_dynamic_remote_type_hints_plugin_js__rspack_import_2);
const __module_federation_runtime_plugins__ = [{ plugin: C_Users_danie_Projects_fed_prism_examples_app_c_src_fedPrismPluginEntry_ts__rspack_import_1["default"], params: undefined }, { plugin: (C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_dts_plugin_0_9_1_typescript_5_9_3_node_modules_module_federation_dts_plugin_dist_dynamic_remote_type_hints_plugin_js__rspack_import_2_default()), params: undefined }].filter(({ plugin }) => plugin).map(({ plugin, params }) => plugin(params));const __module_federation_remote_infos__ = {"app-b":[{"alias":"app-b","name":"app_b","entry":"http://localhost:3002/mf-manifest.json","externalType":"script","shareScope":"default"}]};const __module_federation_container_name__ = "app_c";const __module_federation_share_strategy__ = "version-first";if((__webpack_require__.initializeSharingData||__webpack_require__.initializeExposesData)&&__webpack_require__.federation){var _ref,_ref1,_ref2,_ref3,_ref4;var __webpack_require___remotesLoadingData,__webpack_require___remotesLoadingData1,__webpack_require___initializeSharingData,__webpack_require___consumesLoadingData,__webpack_require___consumesLoadingData1,__webpack_require___initializeExposesData,__webpack_require___consumesLoadingData2;const override=(obj,key,value)=>{if(!obj)return;if(obj[key])obj[key]=value};const merge=(obj,key,fn)=>{const value=fn();if(Array.isArray(value)){var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=[];obj[key].push(...value)}else if(typeof value==="object"&&value!==null){var _obj1,_key1,_1;(_1=(_obj1=obj)[_key1=key])!==null&&_1!==void 0?_1:_obj1[_key1]={};Object.assign(obj[key],value)}};const early=(obj,key,initial)=>{var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=initial()};const remotesLoadingChunkMapping=(_ref=(__webpack_require___remotesLoadingData=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData===void 0?void 0:__webpack_require___remotesLoadingData.chunkMapping)!==null&&_ref!==void 0?_ref:{};const remotesLoadingModuleIdToRemoteDataMapping=(_ref1=(__webpack_require___remotesLoadingData1=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData1===void 0?void 0:__webpack_require___remotesLoadingData1.moduleIdToRemoteDataMapping)!==null&&_ref1!==void 0?_ref1:{};const initializeSharingScopeToInitDataMapping=(_ref2=(__webpack_require___initializeSharingData=__webpack_require__.initializeSharingData)===null||__webpack_require___initializeSharingData===void 0?void 0:__webpack_require___initializeSharingData.scopeToSharingDataMapping)!==null&&_ref2!==void 0?_ref2:{};const consumesLoadingChunkMapping=(_ref3=(__webpack_require___consumesLoadingData=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData===void 0?void 0:__webpack_require___consumesLoadingData.chunkMapping)!==null&&_ref3!==void 0?_ref3:{};const consumesLoadingModuleToConsumeDataMapping=(_ref4=(__webpack_require___consumesLoadingData1=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData1===void 0?void 0:__webpack_require___consumesLoadingData1.moduleIdToConsumeDataMapping)!==null&&_ref4!==void 0?_ref4:{};const consumesLoadinginstalledModules={};const initializeSharingInitPromises=[];const initializeSharingInitTokens={};const containerShareScope=(__webpack_require___initializeExposesData=__webpack_require__.initializeExposesData)===null||__webpack_require___initializeExposesData===void 0?void 0:__webpack_require___initializeExposesData.shareScope;for(const key in (C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_9_1_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__rspack_import_0_default())){__webpack_require__.federation[key]=(C_Users_danie_Projects_fed_prism_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_9_1_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__rspack_import_0_default())[key]}early(__webpack_require__.federation,"consumesLoadingModuleToHandlerMapping",()=>{const consumesLoadingModuleToHandlerMapping={};for(let[moduleId,data]of Object.entries(consumesLoadingModuleToConsumeDataMapping)){consumesLoadingModuleToHandlerMapping[moduleId]={getter:data.fallback,shareInfo:{shareConfig:{fixedDependencies:false,requiredVersion:data.requiredVersion,strictVersion:data.strictVersion,singleton:data.singleton,eager:data.eager},scope:[data.shareScope]},shareKey:data.shareKey}}return consumesLoadingModuleToHandlerMapping});early(__webpack_require__.federation,"initOptions",()=>({}));early(__webpack_require__.federation.initOptions,"name",()=>__module_federation_container_name__);early(__webpack_require__.federation.initOptions,"shareStrategy",()=>__module_federation_share_strategy__);early(__webpack_require__.federation.initOptions,"shared",()=>{const shared={};for(let[scope,stages]of Object.entries(initializeSharingScopeToInitDataMapping)){for(let stage of stages){if(typeof stage==="object"&&stage!==null){const{name,version,factory,eager,singleton,requiredVersion,strictVersion}=stage;const shareConfig={};const isValidValue=function(val){return typeof val!=="undefined"};if(isValidValue(singleton)){shareConfig.singleton=singleton}if(isValidValue(requiredVersion)){shareConfig.requiredVersion=requiredVersion}if(isValidValue(eager)){shareConfig.eager=eager}if(isValidValue(strictVersion)){shareConfig.strictVersion=strictVersion}const options={version,scope:[scope],shareConfig,get:factory};if(shared[name]){shared[name].push(options)}else{shared[name]=[options]}}}}return shared});merge(__webpack_require__.federation.initOptions,"remotes",()=>Object.values(__module_federation_remote_infos__).flat().filter(remote=>remote.externalType==="script"));merge(__webpack_require__.federation.initOptions,"plugins",()=>__module_federation_runtime_plugins__);early(__webpack_require__.federation,"bundlerRuntimeOptions",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions,"remotes",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,"chunkMapping",()=>remotesLoadingChunkMapping);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,"remoteInfos",()=>__module_federation_remote_infos__);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,"idToExternalAndNameMapping",()=>{const remotesLoadingIdToExternalAndNameMappingMapping={};for(let[moduleId,data]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){remotesLoadingIdToExternalAndNameMappingMapping[moduleId]=[data.shareScope,data.name,data.externalModuleId,data.remoteName]}return remotesLoadingIdToExternalAndNameMappingMapping});early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,"webpackRequire",()=>__webpack_require__);merge(__webpack_require__.federation.bundlerRuntimeOptions.remotes,"idToRemoteMap",()=>{const idToRemoteMap={};for(let[id,remoteData]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){const info=__module_federation_remote_infos__[remoteData.remoteName];if(info)idToRemoteMap[id]=info}return idToRemoteMap});override(__webpack_require__,"S",__webpack_require__.federation.bundlerRuntime.S);if(__webpack_require__.federation.attachShareScopeMap){__webpack_require__.federation.attachShareScopeMap(__webpack_require__)}override(__webpack_require__.f,"remotes",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.remotes({chunkId,promises,chunkMapping:remotesLoadingChunkMapping,idToExternalAndNameMapping:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToExternalAndNameMapping,idToRemoteMap:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,webpackRequire:__webpack_require__}));override(__webpack_require__.f,"consumes",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.consumes({chunkId,promises,chunkMapping:consumesLoadingChunkMapping,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping,installedModules:consumesLoadinginstalledModules,webpackRequire:__webpack_require__}));override(__webpack_require__,"I",(name,initScope)=>__webpack_require__.federation.bundlerRuntime.I({shareScopeName:name,initScope,initPromises:initializeSharingInitPromises,initTokens:initializeSharingInitTokens,webpackRequire:__webpack_require__}));override(__webpack_require__,"initContainer",(shareScope,initScope,remoteEntryInitOptions)=>__webpack_require__.federation.bundlerRuntime.initContainerEntry({shareScope,initScope,remoteEntryInitOptions,shareScopeKey:containerShareScope,webpackRequire:__webpack_require__}));override(__webpack_require__,"getContainer",(module1,getScope)=>{var moduleMap=__webpack_require__.initializeExposesData.moduleMap;__webpack_require__.R=getScope;getScope=Object.prototype.hasOwnProperty.call(moduleMap,module1)?moduleMap[module1]():Promise.resolve().then(()=>{throw new Error('Module "'+module1+'" does not exist in container.')});__webpack_require__.R=undefined;return getScope});__webpack_require__.federation.instance=__webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);if((__webpack_require___consumesLoadingData2=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData2===void 0?void 0:__webpack_require___consumesLoadingData2.initialConsumes){__webpack_require__.federation.bundlerRuntime.installInitialConsumes({webpackRequire:__webpack_require__,installedModules:consumesLoadinginstalledModules,initialConsumes:__webpack_require__.consumesLoadingData.initialConsumes,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping})}}

},
"webpack/container/reference/app-b"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";

var __rspack_error = new Error();
module.exports = new Promise(function(resolve, reject) {
if(typeof app_b !== "undefined") return resolve();
__webpack_require__.l("http://localhost:3002/mf-manifest.json", function(event) {
  if(typeof app_b !== "undefined") return resolve();
  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
  var realSrc = event && event.target && event.target.src;
  __rspack_error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
  __rspack_error.name = 'ScriptExternalLoadError';
  __rspack_error.type = errorType;
  __rspack_error.request = realSrc;
  reject(__rspack_error);
}, "app_b");
}).then(function() { return app_b; });


},
"../../packages/core/dist/index.js"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FEDPRISM_DEFAULT_PORT: () => (FEDPRISM_DEFAULT_PORT),
  FEDPRISM_SNAPSHOT_DEBOUNCE_MS: () => (FEDPRISM_SNAPSHOT_DEBOUNCE_MS),
  FEDPRISM_VERSION: () => (FEDPRISM_VERSION),
  FEDPRISM_WS_PATH: () => (FEDPRISM_WS_PATH)
});
/**
 * @fed-prism/core
 * Shared TypeScript types, interfaces, and constants for the FedPrism tool.
 * Zero runtime dependencies — pure types and constants.
 */
// ─── Constants ────────────────────────────────────────────────────────────────
const FEDPRISM_WS_PATH = '/ws';
const FEDPRISM_DEFAULT_PORT = 7357;
const FEDPRISM_SNAPSHOT_DEBOUNCE_MS = 100;
const FEDPRISM_VERSION = '0.0.1';
//# sourceMappingURL=index.js.map

},
"../../packages/runtime-plugin/dist/index.js"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fedPrismPlugin: () => (fedPrismPlugin)
});
/* import */ var _fed_prism_core__rspack_import_0 = __webpack_require__("../../packages/core/dist/index.js");

// ─── Helpers ──────────────────────────────────────────────────────────────────
// Safe browser-compatible debounce. Uses a fixed `(trigger: HookName) => void`
// overload so callers don't need to cast.
function debounce(fn, ms) {
    let timer = null;
    return (trigger) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => fn(trigger), ms);
    };
}
/** Browser-safe check for production mode — avoids referencing Node's `process`. */
function isProduction() {
    // Bundlers (Vite, Webpack, Rsbuild) replace import.meta.env.MODE at build time.
    // Fall back to false (i.e. enabled) if the variable is absent.
    try {
        // @ts-expect-error import.meta.env is injected by bundlers; not present in tsc
        return undefined === 'production';
    }
    catch {
        return false;
    }
}
function getShareScope(fed, instanceName) {
    if (fed.__SHARE__) {
        // MF 2.0: __SHARE__[instanceId][scope][pkg][version]
        const exact = fed.__SHARE__[instanceName];
        if (exact)
            return exact;
        const prefixMatch = Object.keys(fed.__SHARE__).find(k => k.startsWith(`${instanceName}:`));
        if (prefixMatch)
            return fed.__SHARE__[prefixMatch];
        // Fallback: merge all known instance share scopes
        const merged = {};
        for (const data of Object.values(fed.__SHARE__)) {
            if (!data || typeof data !== 'object')
                continue;
            for (const [scope, pkgs] of Object.entries(data)) {
                if (!merged[scope])
                    merged[scope] = {};
                for (const [pkg, versions] of Object.entries(pkgs)) {
                    if (!merged[scope][pkg])
                        merged[scope][pkg] = {};
                    Object.assign(merged[scope][pkg], versions);
                }
            }
        }
        return merged;
    }
    if (fed.SHARE) {
        // MF 1.0: SHARE[scope][pkg][version]
        return fed.SHARE;
    }
    return {};
}
function readFederationGlobal(instanceName, staticRemoteNames) {
    if (typeof globalThis.__FEDERATION__ === 'undefined') {
        return {};
    }
    const fed = globalThis.__FEDERATION__;
    const rawModuleInfo = (fed.moduleInfo ?? {});
    // __FEDERATION__.moduleInfo[instanceName] contains THIS instance's own config,
    // including remotesInfo which lists exactly which remotes it declared.
    // We use this as the filter — the full moduleInfo is shared across the federation
    // so without filtering we'd pick up every other app's remotes too.
    const selfInfo = rawModuleInfo[instanceName];
    const ownRemoteNames = new Set(Object.keys((selfInfo?.remotesInfo ?? {})));
    // Extract remotes from moduleInfo keys shaped "remoteName:http://...manifest.json"
    // Only include names that appear in this instance's own remotesInfo.
    // loadType: 'static' if present at init, 'async' if it appeared later (on-demand).
    const remotes = [];
    for (const [key, info] of Object.entries(rawModuleInfo)) {
        const httpIdx = key.indexOf(':http');
        if (httpIdx === -1)
            continue; // skip bare instance names
        const name = key.slice(0, httpIdx);
        if (!ownRemoteNames.has(name))
            continue; // skip remotes that aren't ours
        const entry = typeof info?.remoteEntry === 'string' ? info.remoteEntry : null;
        const remotesInfo = (info?.remotesInfo ?? {});
        const loadType = staticRemoteNames.has(name) ? 'static' : 'async';
        remotes.push({
            name,
            entry,
            loadType,
            loaded: true,
            loadedAt: Date.now(),
            modules: Object.keys(remotesInfo),
        });
    }
    return {
        shareScope: getShareScope(fed, instanceName),
        moduleInfo: rawModuleInfo,
        instances: (fed.__INSTANCES__ ?? []).map((i) => i.name),
        remotes,
    };
}
// ─── WebSocket Manager ────────────────────────────────────────────────────────
class FedPrismWebSocket {
    ws = null;
    reconnectAttempts = 0;
    maxReconnectAttempts = 5;
    reconnectDelayMs = 1000;
    url;
    pingInterval = null;
    constructor(port) {
        this.url = `ws://localhost:${port}${_fed_prism_core__rspack_import_0.FEDPRISM_WS_PATH}`;
    }
    connect() {
        if (typeof WebSocket === 'undefined')
            return;
        try {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = () => {
                this.reconnectAttempts = 0;
                this.startPing();
                while (this.messageQueue.length > 0) {
                    const msg = this.messageQueue.shift();
                    if (msg)
                        this.flush(msg);
                }
            };
            this.ws.onclose = () => {
                this.stopPing();
                this.scheduleReconnect();
            };
            this.ws.onerror = () => {
                // Silent — FedPrism server may not be running, that's fine
            };
        }
        catch {
            // Silent
        }
    }
    messageQueue = [];
    send(snapshot) {
        const message = { type: 'snapshot', payload: snapshot };
        if (this.ws?.readyState !== WebSocket.OPEN) {
            this.messageQueue.push(message);
            return;
        }
        this.flush(message);
    }
    flush(message) {
        try {
            this.ws?.send(JSON.stringify(message));
        }
        catch {
            // Silent
        }
    }
    scheduleReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts)
            return;
        this.reconnectAttempts++;
        setTimeout(() => this.connect(), this.reconnectDelayMs * this.reconnectAttempts);
    }
    startPing() {
        this.pingInterval = setInterval(() => {
            if (this.ws?.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({ type: 'ping' }));
            }
        }, 30_000);
    }
    stopPing() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }
}
function fedPrismPlugin(options = {}) {
    console.log('[FedPrism] Plugin factory executing with options:', options);
    const { port = _fed_prism_core__rspack_import_0.FEDPRISM_DEFAULT_PORT, debounceMs = _fed_prism_core__rspack_import_0.FEDPRISM_SNAPSHOT_DEBOUNCE_MS, enabled = !isProduction(), } = options;
    console.log('[FedPrism] Plugin enabled?:', enabled, 'port:', port);
    if (!enabled) {
        // Return no-op plugin in production
        return { name: 'fed-prism-plugin' };
    }
    const socket = new FedPrismWebSocket(port);
    socket.connect();
    let instanceName = 'unknown';
    // Track which remotes are present at init time — these are statically loaded.
    // Any remote that appears in a later afterResolve is classified as 'async'.
    const staticRemoteNames = new Set();
    let initDone = false;
    const sendSnapshot = debounce((trigger) => {
        const data = readFederationGlobal(instanceName, staticRemoteNames);
        const snapshot = {
            instanceName,
            timestamp: Date.now(),
            trigger,
            shareScope: data.shareScope ?? {},
            moduleInfo: data.moduleInfo ?? {},
            instances: data.instances ?? [],
            remotes: data.remotes ?? [],
        };
        socket.send(snapshot);
    }, debounceMs);
    console.log('[FedPrism] Returning plugin object object from factory');
    return {
        name: 'fed-prism-plugin',
        init(args) {
            const typedArgs = args;
            if (typedArgs?.options?.name) {
                instanceName = typedArgs.options.name;
            }
            sendSnapshot('init');
            // After init, snapshot whatever remotes are now known — mark them static
            setTimeout(() => {
                if (!initDone) {
                    initDone = true;
                    const data = readFederationGlobal(instanceName, staticRemoteNames);
                    for (const r of data.remotes ?? [])
                        staticRemoteNames.add(r.name);
                }
            }, 0);
            return args;
        },
        afterResolve(args) {
            sendSnapshot('afterResolve');
            return args;
        },
        onLoad(args) {
            sendSnapshot('onLoad');
            return args;
        },
        loadShare(args) {
            sendSnapshot('loadShare');
            // BailHook - return void or boolean
        },
        errorLoadRemote(args) {
            sendSnapshot('onLoad'); // capture state at failure point too
            // SyncHook - return void
        },
    };
}
//# sourceMappingURL=index.js.map

},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function

        var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
        __webpack_require__.i.forEach(function(handler) { handler(execOptions); });
        module = execOptions.module;
        if (!execOptions.factory) {
          console.error("undefined factory", moduleId);
          throw Error("RuntimeError: factory is undefined (" + moduleId + ")");
        }
        execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
      
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

// the startup function
__webpack_require__.x = () => {
// Load entry module and return exports
__webpack_require__("../../node_modules/.pnpm/@rspack+dev-server@1.1.5_@r_223c8da7ad9bb3be2ef249fbff48308c/node_modules/@rspack/dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3003&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true");
__webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6_@swc+helpers@0.5.18/node_modules/@rspack/core/hot/dev-server.js");
var __webpack_exports__ = __webpack_require__("webpack/container/entry/app_c");
return __webpack_exports__
};

// module_federation/runtime
(() => {

if(!__webpack_require__.federation){
    __webpack_require__.federation = {
        
chunkMatcher: function(chunkId) {
    return "webpack_container_remote_app-b_DataService" != chunkId;
},
rootOutputDir: "",

    };
}

})();
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".js"
}
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("e3c3222eb030a97e")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "app_c." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus;
	
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	}
	
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var uniqueName = "@fed-prism-examples/app-c:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-rspack") == uniqueName + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');


script.timeout = 120;
if (__webpack_require__.nc) {
  script.setAttribute("nonce", __webpack_require__.nc);
}

script.setAttribute("data-rspack", uniqueName + key);



script.src = url;


	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.6")
})();
// webpack/runtime/sharing
(() => {

__webpack_require__.S = {};
__webpack_require__.initializeSharingData = { scopeToSharingDataMapping: { "3d": [{ name: "three", version: "0.160.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_three_0_160_0_node_modules_three_build_three_module_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/three@0.160.0/node_modules/three/build/three.module.js"))))), eager: 0, singleton: 1, requiredVersion: "0.160.0", strictVersion: 1 }], "api": [{ name: "axios", version: "1.13.5", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_axios_1_13_5_node_modules_axios_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/axios@1.13.5/node_modules/axios/index.js"))))), eager: 0, singleton: 1, requiredVersion: "~1.6.0" }], "core-libs": [{ name: "rxjs", version: "7.8.2", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_rxjs_7_8_2_node_modules_rxjs_dist_esm5_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/index.js"))))), eager: 0, singleton: 1 }], "default": [{ name: "date-fns", version: "4.1.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_date-fns_4_1_0_node_modules_date-fns_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/index.js"))))), eager: 0, singleton: 0, requiredVersion: "^4.0.0" }, { name: "nanoid", version: "5.1.6", factory: () => (__webpack_require__.e("node_modules_pnpm_nanoid_5_1_6_node_modules_nanoid_index_browser_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.browser.js"))))), eager: 0, singleton: 1, requiredVersion: "^5.0.0" }, { name: "react", version: "18.3.1", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_react_18_3_1_node_modules_react_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))), eager: 0, singleton: 1, requiredVersion: "^18.0.0" }, { name: "uuid", version: "13.0.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_uuid_13_0_0_node_modules_uuid_dist_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/index.js"))))), eager: 0, singleton: 0, requiredVersion: "^9.0.1" }, { name: "zod", version: "3.22.4", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_zod_3_22_4_node_modules_zod_lib_index_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs"))))), eager: 0, singleton: 1, requiredVersion: "3.22.4", strictVersion: 1 }, "webpack/container/reference/app-b"], "graphql": [{ name: "graphql", version: "16.13.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_graphql_16_13_0_node_modules_graphql_index_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/graphql@16.13.0/node_modules/graphql/index.mjs"))))), eager: 0, singleton: 1, requiredVersion: "16.8.1", strictVersion: 1 }], "utils": [{ name: "clsx", version: "2.1.1", factory: () => (__webpack_require__.e("node_modules_pnpm_clsx_2_1_1_node_modules_clsx_dist_clsx_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"))))), eager: 0, singleton: 1, requiredVersion: "^2.1.0" }, { name: "tailwind-merge", version: "3.5.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_tailwind-merge_3_5_0_node_modules_tailwind-merge_dist_bundle-mjs_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs"))))), eager: 0, singleton: 1, requiredVersion: "^2.2.0" }], "viz": [{ name: "d3", version: "7.9.0", factory: () => (__webpack_require__.e("vendors-node_modules_pnpm_d3_7_9_0_node_modules_d3_src_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js"))))), eager: 0, singleton: 1, requiredVersion: "^7.8.5" }] }, uniqueName: "@fed-prism-examples/app-c" };
__webpack_require__.I = __webpack_require__.I || function() { throw new Error("should have __webpack_require__.I") }

})();
// webpack/runtime/auto_public_path
(() => {
var scriptUrl;

if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
var document = __webpack_require__.g.document;
if (!scriptUrl && document) {
  // Technically we could use `document.currentScript instanceof window.HTMLScriptElement`,
  // but an attacker could try to inject `<script>HTMLScriptElement = HTMLImageElement</script>`
  // and use `<img name="currentScript" src="https://attacker.controlled.server/"></img>`
  if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT') scriptUrl = document.currentScript.src;
  if (!scriptUrl) {
    var scripts = document.getElementsByTagName("script");
    if (scripts.length) {
      var i = scripts.length - 1;
      while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
    }
  }
}

// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");

__webpack_require__.p = scriptUrl;

})();
// webpack/runtime/consumes_loading
(() => {

__webpack_require__.consumesLoadingData = { chunkMapping: {"__federation_expose_Chart":["webpack/sharing/consume/default/date-fns/date-fns","webpack/sharing/consume/utils/clsx/clsx","webpack/sharing/consume/default/zod/zod","webpack/sharing/consume/viz/d3/d3","webpack/sharing/consume/default/nanoid/nanoid","webpack/sharing/consume/core-libs/rxjs/rxjs","webpack/sharing/consume/default/react/react","webpack/sharing/consume/default/uuid/uuid","webpack/sharing/consume/3d/three/three","webpack/sharing/consume/graphql/graphql/graphql","webpack/sharing/consume/utils/tailwind-merge/tailwind-merge","webpack/sharing/consume/api/axios/axios"]}, moduleIdToConsumeDataMapping: {"webpack/sharing/consume/default/date-fns/date-fns": { shareScope: "default", shareKey: "date-fns", import: "date-fns", requiredVersion: "^4.0.0", strictVersion: true, singleton: false, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_date-fns_4_1_0_node_modules_date-fns_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/index.js"))))) }, "webpack/sharing/consume/utils/clsx/clsx": { shareScope: "utils", shareKey: "clsx", import: "clsx", requiredVersion: "^2.1.0", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("node_modules_pnpm_clsx_2_1_1_node_modules_clsx_dist_clsx_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"))))) }, "webpack/sharing/consume/api/axios/axios": { shareScope: "api", shareKey: "axios", import: "axios", requiredVersion: "~1.6.0", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_axios_1_13_5_node_modules_axios_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/axios@1.13.5/node_modules/axios/index.js"))))) }, "webpack/sharing/consume/default/react/react": { shareScope: "default", shareKey: "react", import: "react", requiredVersion: "^18.0.0", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_react_18_3_1_node_modules_react_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))) }, "webpack/sharing/consume/default/nanoid/nanoid": { shareScope: "default", shareKey: "nanoid", import: "nanoid", requiredVersion: "^5.0.0", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("node_modules_pnpm_nanoid_5_1_6_node_modules_nanoid_index_browser_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.browser.js"))))) }, "webpack/sharing/consume/default/uuid/uuid": { shareScope: "default", shareKey: "uuid", import: "uuid", requiredVersion: "^9.0.1", strictVersion: true, singleton: false, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_uuid_13_0_0_node_modules_uuid_dist_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/index.js"))))) }, "webpack/sharing/consume/core-libs/rxjs/rxjs": { shareScope: "core-libs", shareKey: "rxjs", import: "rxjs", requiredVersion: "^7.8.2", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_rxjs_7_8_2_node_modules_rxjs_dist_esm5_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/index.js"))))) }, "webpack/sharing/consume/3d/three/three": { shareScope: "3d", shareKey: "three", import: "three", requiredVersion: "0.160.0", strictVersion: true, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_three_0_160_0_node_modules_three_build_three_module_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/three@0.160.0/node_modules/three/build/three.module.js"))))) }, "webpack/sharing/consume/graphql/graphql/graphql": { shareScope: "graphql", shareKey: "graphql", import: "graphql", requiredVersion: "16.8.1", strictVersion: true, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_graphql_16_13_0_node_modules_graphql_index_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/graphql@16.13.0/node_modules/graphql/index.mjs"))))) }, "webpack/sharing/consume/default/zod/zod": { shareScope: "default", shareKey: "zod", import: "zod", requiredVersion: "3.22.4", strictVersion: true, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_zod_3_22_4_node_modules_zod_lib_index_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs"))))) }, "webpack/sharing/consume/viz/d3/d3": { shareScope: "viz", shareKey: "d3", import: "d3", requiredVersion: "^7.8.5", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_d3_7_9_0_node_modules_d3_src_index_js").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js"))))) }, "webpack/sharing/consume/utils/tailwind-merge/tailwind-merge": { shareScope: "utils", shareKey: "tailwind-merge", import: "tailwind-merge", requiredVersion: "^2.2.0", strictVersion: false, singleton: true, eager: false, fallback: () => (__webpack_require__.e("vendors-node_modules_pnpm_tailwind-merge_3_5_0_node_modules_tailwind-merge_dist_bundle-mjs_mjs").then(() => (() => (__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs"))))) }}, initialConsumes: [] };
__webpack_require__.f.consumes = __webpack_require__.f.consumes || function() { throw new Error("should have __webpack_require__.f.consumes") }
})();
// webpack/runtime/initialize_exposes
(() => {

    __webpack_require__.initializeExposesData = {
  moduleMap: {
  "./Chart": () => {
return Promise.all(/*  | __federation_expose_Chart */ [__webpack_require__.e("vendors-node_modules_pnpm_react_18_3_1_node_modules_react_jsx-dev-runtime_js-node_modules_pnp-f0576b"), __webpack_require__.e("__federation_expose_Chart")]).then(() => (() => (__webpack_require__("./src/components/Chart.tsx"))));
},
"./Utils": () => {
return __webpack_require__.e(/*  | __federation_expose_Utils */ "__federation_expose_Utils").then(() => (() => (__webpack_require__("./src/utils/Utils.ts"))));
},
},
  shareScope: "default",
};
__webpack_require__.getContainer = __webpack_require__.getContainer || function() { throw new Error("should have __webpack_require__.getContainer") };__webpack_require__.initContainer = __webpack_require__.initContainer || function() { throw new Error("should have __webpack_require__.initContainer") };
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {"app_c": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if ("webpack_container_remote_app-b_DataService" != chunkId) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} else installedChunks[chunkId] = 0; 
	}
}

        }
        var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise((resolve, reject) => {
		waitingUpdateResolves[chunkId] = resolve;
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = (event) => {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === 'load' ? 'missing' : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					'Loading hot update chunk ' +
					chunkId +
					' failed.\n(' +
					errorType +
					': ' +
					realSrc +
					')';
				error.name = 'ChunkLoadError';
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["webpackHotUpdate_fed_prism_examples_app_c"] = (chunkId, moreModules, runtime) => {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
		throw Error("RuntimeError: factory is undefined(" + module.id + ")");
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	}
	

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers;
				
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
					
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				
				currentUpdateRuntime[i](__webpack_require__);
				
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler);
								
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		(response) => {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
// install a JSONP callback for chunk loading
var __rspack_jsonp = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
};

var chunkLoadingGlobal = self["webpackChunk_fed_prism_examples_app_c"] = self["webpackChunk_fed_prism_examples_app_c"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/remotes_loading
(() => {

__webpack_require__.remotesLoadingData = { chunkMapping: {"webpack_container_remote_app-b_DataService":["webpack/container/remote/app-b/DataService"]}, moduleIdToRemoteDataMapping: {"webpack/container/remote/app-b/DataService":{"shareScope":"default","name":"./DataService","externalModuleId":"webpack/container/reference/app-b","remoteName":"app-b"}} };
__webpack_require__.f.remotes = __webpack_require__.f.remotes || function() { throw new Error("should have __webpack_require__.f.remotes"); }

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.6";
})();
// webpack/runtime/embed_federation_runtime
(() => {
var prevStartup = __webpack_require__.x;
var hasRun = false;
__webpack_require__.x = function () {
	if (!hasRun) {
		hasRun = true;
		__webpack_require__("@module-federation/runtime/rspack.js!=!data:text/javascript,import __module_federation_bundler_runtime__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\node_modules\\\\.pnpm\\\\@module-federation+webpack-bundler-runtime@0.9.1\\\\node_modules\\\\@module-federation\\\\webpack-bundler-runtime\\\\dist\\\\index.cjs.js\";import __module_federation_runtime_plugin_0__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\examples\\\\app-c\\\\src\\\\fedPrismPluginEntry.ts\";import __module_federation_runtime_plugin_1__ from \"C:\\\\Users\\\\danie\\\\Projects\\\\fed-prism\\\\node_modules\\\\.pnpm\\\\@module-federation+dts-plugin@0.9.1_typescript@5.9.3\\\\node_modules\\\\@module-federation\\\\dts-plugin\\\\dist\\\\dynamic-remote-type-hints-plugin.js\";const __module_federation_runtime_plugins__ = [{ plugin: __module_federation_runtime_plugin_0__, params: undefined }, { plugin: __module_federation_runtime_plugin_1__, params: undefined }].filter(({ plugin }) => plugin).map(({ plugin, params }) => plugin(params));const __module_federation_remote_infos__ = {\"app-b\":[{\"alias\":\"app-b\",\"name\":\"app_b\",\"entry\":\"http://localhost:3002/mf-manifest.json\",\"externalType\":\"script\",\"shareScope\":\"default\"}]};const __module_federation_container_name__ = \"app_c\";const __module_federation_share_strategy__ = \"version-first\";if((__webpack_require__.initializeSharingData||__webpack_require__.initializeExposesData)&&__webpack_require__.federation){var _ref,_ref1,_ref2,_ref3,_ref4;var __webpack_require___remotesLoadingData,__webpack_require___remotesLoadingData1,__webpack_require___initializeSharingData,__webpack_require___consumesLoadingData,__webpack_require___consumesLoadingData1,__webpack_require___initializeExposesData,__webpack_require___consumesLoadingData2;const override=(obj,key,value)=>{if(!obj)return;if(obj[key])obj[key]=value};const merge=(obj,key,fn)=>{const value=fn();if(Array.isArray(value)){var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=[];obj[key].push(...value)}else if(typeof value===\"object\"&&value!==null){var _obj1,_key1,_1;(_1=(_obj1=obj)[_key1=key])!==null&&_1!==void 0?_1:_obj1[_key1]={};Object.assign(obj[key],value)}};const early=(obj,key,initial)=>{var _obj,_key,_;(_=(_obj=obj)[_key=key])!==null&&_!==void 0?_:_obj[_key]=initial()};const remotesLoadingChunkMapping=(_ref=(__webpack_require___remotesLoadingData=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData===void 0?void 0:__webpack_require___remotesLoadingData.chunkMapping)!==null&&_ref!==void 0?_ref:{};const remotesLoadingModuleIdToRemoteDataMapping=(_ref1=(__webpack_require___remotesLoadingData1=__webpack_require__.remotesLoadingData)===null||__webpack_require___remotesLoadingData1===void 0?void 0:__webpack_require___remotesLoadingData1.moduleIdToRemoteDataMapping)!==null&&_ref1!==void 0?_ref1:{};const initializeSharingScopeToInitDataMapping=(_ref2=(__webpack_require___initializeSharingData=__webpack_require__.initializeSharingData)===null||__webpack_require___initializeSharingData===void 0?void 0:__webpack_require___initializeSharingData.scopeToSharingDataMapping)!==null&&_ref2!==void 0?_ref2:{};const consumesLoadingChunkMapping=(_ref3=(__webpack_require___consumesLoadingData=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData===void 0?void 0:__webpack_require___consumesLoadingData.chunkMapping)!==null&&_ref3!==void 0?_ref3:{};const consumesLoadingModuleToConsumeDataMapping=(_ref4=(__webpack_require___consumesLoadingData1=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData1===void 0?void 0:__webpack_require___consumesLoadingData1.moduleIdToConsumeDataMapping)!==null&&_ref4!==void 0?_ref4:{};const consumesLoadinginstalledModules={};const initializeSharingInitPromises=[];const initializeSharingInitTokens={};const containerShareScope=(__webpack_require___initializeExposesData=__webpack_require__.initializeExposesData)===null||__webpack_require___initializeExposesData===void 0?void 0:__webpack_require___initializeExposesData.shareScope;for(const key in __module_federation_bundler_runtime__){__webpack_require__.federation[key]=__module_federation_bundler_runtime__[key]}early(__webpack_require__.federation,\"consumesLoadingModuleToHandlerMapping\",()=>{const consumesLoadingModuleToHandlerMapping={};for(let[moduleId,data]of Object.entries(consumesLoadingModuleToConsumeDataMapping)){consumesLoadingModuleToHandlerMapping[moduleId]={getter:data.fallback,shareInfo:{shareConfig:{fixedDependencies:false,requiredVersion:data.requiredVersion,strictVersion:data.strictVersion,singleton:data.singleton,eager:data.eager},scope:[data.shareScope]},shareKey:data.shareKey}}return consumesLoadingModuleToHandlerMapping});early(__webpack_require__.federation,\"initOptions\",()=>({}));early(__webpack_require__.federation.initOptions,\"name\",()=>__module_federation_container_name__);early(__webpack_require__.federation.initOptions,\"shareStrategy\",()=>__module_federation_share_strategy__);early(__webpack_require__.federation.initOptions,\"shared\",()=>{const shared={};for(let[scope,stages]of Object.entries(initializeSharingScopeToInitDataMapping)){for(let stage of stages){if(typeof stage===\"object\"&&stage!==null){const{name,version,factory,eager,singleton,requiredVersion,strictVersion}=stage;const shareConfig={};const isValidValue=function(val){return typeof val!==\"undefined\"};if(isValidValue(singleton)){shareConfig.singleton=singleton}if(isValidValue(requiredVersion)){shareConfig.requiredVersion=requiredVersion}if(isValidValue(eager)){shareConfig.eager=eager}if(isValidValue(strictVersion)){shareConfig.strictVersion=strictVersion}const options={version,scope:[scope],shareConfig,get:factory};if(shared[name]){shared[name].push(options)}else{shared[name]=[options]}}}}return shared});merge(__webpack_require__.federation.initOptions,\"remotes\",()=>Object.values(__module_federation_remote_infos__).flat().filter(remote=>remote.externalType===\"script\"));merge(__webpack_require__.federation.initOptions,\"plugins\",()=>__module_federation_runtime_plugins__);early(__webpack_require__.federation,\"bundlerRuntimeOptions\",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions,\"remotes\",()=>({}));early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"chunkMapping\",()=>remotesLoadingChunkMapping);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"remoteInfos\",()=>__module_federation_remote_infos__);early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"idToExternalAndNameMapping\",()=>{const remotesLoadingIdToExternalAndNameMappingMapping={};for(let[moduleId,data]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){remotesLoadingIdToExternalAndNameMappingMapping[moduleId]=[data.shareScope,data.name,data.externalModuleId,data.remoteName]}return remotesLoadingIdToExternalAndNameMappingMapping});early(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"webpackRequire\",()=>__webpack_require__);merge(__webpack_require__.federation.bundlerRuntimeOptions.remotes,\"idToRemoteMap\",()=>{const idToRemoteMap={};for(let[id,remoteData]of Object.entries(remotesLoadingModuleIdToRemoteDataMapping)){const info=__module_federation_remote_infos__[remoteData.remoteName];if(info)idToRemoteMap[id]=info}return idToRemoteMap});override(__webpack_require__,\"S\",__webpack_require__.federation.bundlerRuntime.S);if(__webpack_require__.federation.attachShareScopeMap){__webpack_require__.federation.attachShareScopeMap(__webpack_require__)}override(__webpack_require__.f,\"remotes\",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.remotes({chunkId,promises,chunkMapping:remotesLoadingChunkMapping,idToExternalAndNameMapping:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToExternalAndNameMapping,idToRemoteMap:__webpack_require__.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,webpackRequire:__webpack_require__}));override(__webpack_require__.f,\"consumes\",(chunkId,promises)=>__webpack_require__.federation.bundlerRuntime.consumes({chunkId,promises,chunkMapping:consumesLoadingChunkMapping,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping,installedModules:consumesLoadinginstalledModules,webpackRequire:__webpack_require__}));override(__webpack_require__,\"I\",(name,initScope)=>__webpack_require__.federation.bundlerRuntime.I({shareScopeName:name,initScope,initPromises:initializeSharingInitPromises,initTokens:initializeSharingInitTokens,webpackRequire:__webpack_require__}));override(__webpack_require__,\"initContainer\",(shareScope,initScope,remoteEntryInitOptions)=>__webpack_require__.federation.bundlerRuntime.initContainerEntry({shareScope,initScope,remoteEntryInitOptions,shareScopeKey:containerShareScope,webpackRequire:__webpack_require__}));override(__webpack_require__,\"getContainer\",(module1,getScope)=>{var moduleMap=__webpack_require__.initializeExposesData.moduleMap;__webpack_require__.R=getScope;getScope=Object.prototype.hasOwnProperty.call(moduleMap,module1)?moduleMap[module1]():Promise.resolve().then(()=>{throw new Error('Module \"'+module1+'\" does not exist in container.')});__webpack_require__.R=undefined;return getScope});__webpack_require__.federation.instance=__webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);if((__webpack_require___consumesLoadingData2=__webpack_require__.consumesLoadingData)===null||__webpack_require___consumesLoadingData2===void 0?void 0:__webpack_require___consumesLoadingData2.initialConsumes){__webpack_require__.federation.bundlerRuntime.installInitialConsumes({webpackRequire:__webpack_require__,installedModules:consumesLoadinginstalledModules,initialConsumes:__webpack_require__.consumesLoadingData.initialConsumes,moduleToHandlerMapping:__webpack_require__.federation.consumesLoadingModuleToHandlerMapping})}}")
	}
	if (typeof prevStartup === "function") {
		return prevStartup();
	}
	console.warn("[MF] Invalid prevStartup");
};

})();
// module cache are used so entry inlining is disabled
// run startup
var __webpack_exports__ = __webpack_require__.x();
app_c = __webpack_exports__;
})()
;
//# sourceMappingURL=remoteEntry.js.map