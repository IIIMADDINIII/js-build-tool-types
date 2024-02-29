
/// <reference types="node" />
/// <reference lib="es2015" />

declare module "consts:production" {
  let production: boolean;
  export default production;
}
declare module "consts:development" {
  let development: boolean;
  export default development;
}
declare module "consts:testing" {
  let testing: boolean;
  export default testing;
}

declare module "@iiimaddiniii/js-build-tool" {

import { Buffer as Buffer_2 } from 'node:buffer';
import { ChildProcess } from 'node:child_process';
import type { CompilerOptions } from 'typescript';
import type { CompilerOptionsValue } from 'typescript';
import type { CustomTransformers } from 'typescript';
import type { ForgeConfig } from '@electron-forge/shared-types';
import * as fs from 'fs/promises';
import { MakeOptions } from '@electron-forge/core';
import type { Node } from 'estree';
import { PackageOptions } from '@electron-forge/core';
import { parallel as parallel_2 } from 'gulp';
import type { Program } from 'estree';
import type { Program as Program_2 } from 'typescript';
import { PublishOptions } from '@electron-forge/core';
import { Readable } from 'node:stream';
import { RestEndpointMethodTypes } from '@octokit/rest';
import { SectionedSourceMapInput } from '@jridgewell/source-map';
import { series as series_2 } from 'gulp';
import { StartOptions } from '@electron-forge/core';
import { Stream } from 'node:stream';
import { TaskFunction as TaskFunction_2 } from 'gulp';
import type { TsConfigSourceFile } from 'typescript';
import type { TypeChecker } from 'typescript';
import type _typescript from 'typescript';
import { Writable } from 'node:stream';

/**
 Executes a command. The `command` string includes both the `file` and its `arguments`. Returns a `childProcess`.

 Arguments are automatically escaped. They can contain any character, but spaces must use `${}` like `` $`echo ${'has space'}` ``.

 This is the preferred method when executing multiple commands in a script file.

 The `command` string can inject any `${value}` with the following types: string, number, `childProcess` or an array of those types. For example: `` $`echo one ${'two'} ${3} ${['four', 'five']}` ``. For `${childProcess}`, the process's `stdout` is used.

 @returns An `ExecaChildProcess` that is both:
 	- a `Promise` resolving or rejecting with a `childProcessResult`.
 	- a [`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess) with some additional methods and properties.
 @throws A `childProcessResult` error

 @example <caption>Basic</caption>
 ```
 import {$} from 'execa';

 const branch = await $`git branch --show-current`;
 await $`dep deploy --branch=${branch}`;
 ```

 @example <caption>Multiple arguments</caption>
 ```
 import {$} from 'execa';

 const args = ['unicorns', '&', 'rainbows!'];
 const {stdout} = await $`echo ${args}`;
 console.log(stdout);
 //=> 'unicorns & rainbows!'
 ```

 @example <caption>With options</caption>
 ```
 import {$} from 'execa';

 await $({stdio: 'inherit'})`echo unicorns`;
 //=> 'unicorns'
 ```

 @example <caption>Shared options</caption>
 ```
 import {$} from 'execa';

 const $$ = $({stdio: 'inherit'});

 await $$`echo unicorns`;
 //=> 'unicorns'

 await $$`echo rainbows`;
 //=> 'rainbows'
 ```
 */
declare const $: Execa$;

/**
 * The path of this file.
 * @public
 */
declare const __dirname_2: string;

declare type AddonFunction = (chunk: RenderedChunk) => string | Promise<string>;

declare type AddonHook = string | AddonHookFunction;

declare type AddonHookFunction = (
	this: PluginContext,
	chunk: RenderedChunk
) => string | Promise<string>;

declare type AddonHooks = 'banner' | 'footer' | 'intro' | 'outro';

/**
 * Adds an folder to the Path variable.
 * @param folder - the folder which should be added to the path (should be absolute).
 * @public
 */
declare function addToPath(folder: string): void;

declare type AllRules = AtRule &
Block &
Color &
Comment &
CustomMedia &
CustomProperty &
Declaration &
DeclarationBlock &
Font &
Function_2 &
GeneralSheet &
KeyframeDeclaration &
Length &
MediaFeature &
MediaQueryList &
Number_2 &
Property &
RootRule &
Rule &
Selector &
SelectorList &
ShorthandProperty &
String_2 &
StylelintDisableComment &
Time &
Unit &
Value &
ValueList;

/**
 * Require a newline after at-rule names
 */
declare type AlwaysMultiLineRule = (
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the colon of declarations
 */
declare type AlwaysMultiLineRule1 = (
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | [])
| [
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require or disallow whitespace on the inside of comment markers
 */
declare type AlwaysNeverRule = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the bang of declarations
 */
declare type AlwaysNeverRule1 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the colon in media features
 */
declare type AlwaysNeverRule10 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace on the inside of the parentheses within media features
 */
declare type AlwaysNeverRule11 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the range operator in media features
 */
declare type AlwaysNeverRule12 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the range operator in media features
 */
declare type AlwaysNeverRule13 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow a leading zero for fractional numbers less than 1
 */
declare type AlwaysNeverRule14 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace on the inside of the brackets within attribute selector
 */
declare type AlwaysNeverRule15 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after operators within attribute selectors
 */
declare type AlwaysNeverRule16 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before operators within attribute selectors
 */
declare type AlwaysNeverRule17 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow quotes for attribute values
 */
declare type AlwaysNeverRule18 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the combinators of selectors
 */
declare type AlwaysNeverRule19 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the bang of declarations
 */
declare type AlwaysNeverRule2 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the combinators of selectors
 */
declare type AlwaysNeverRule20 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
 */
declare type AlwaysNeverRule21 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the colon of declarations
 */
declare type AlwaysNeverRule3 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow a trailing semicolon within declaration blocks
 */
declare type AlwaysNeverRule4 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow data URIs for urls
 */
declare type AlwaysNeverRule5 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow quotes for urls
 */
declare type AlwaysNeverRule6 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow whitespace after functions
 */
declare type AlwaysNeverRule7 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require or disallow Unicode BOM
 */
declare type AlwaysNeverRule8 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the colon in media features
 */
declare type AlwaysNeverRule9 = (
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
))
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("always" | "never" | [])
| [
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
(("always" | "never" | {}) | CoreRule) &
(((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
]
) &
unknown[])
);

declare type AmdOptions = (
	| {
    			autoId?: false;
    			id: string;
    	  }
	| {
    			autoId: true;
    			basePath?: string;
    			id?: undefined;
    	  }
	| {
    			autoId?: false;
    			id?: undefined;
    	  }
) & {
    	define?: string;
    	forceJsExtensionForImports?: boolean;
};

/**
 * An array of glob patterns to select test files. Files with an underscore prefix are ignored. By default only selects files with `cjs`, `mjs` & `js` extensions, even if the pattern matches other files. Specify `extensions` to allow other file extensions
 */
declare type ArrayOfPaths = string[];

/**
 * An array of glob patterns to match files that, even if changed, are ignored by the watcher
 */
declare type ArrayOfPaths1 = string[];

/**
 * Not typically useful in the `package.json` configuration, but equivalent to specifying `--match` on the CLI
 */
declare type ArrayOfPaths2 = string[];

/**
 * Extra modules to require before tests are run. Modules are required in the worker processes
 */
declare type ArrayOfPaths3 = string[];

/**
 * You can configure AVA to recognize additional file extensions as TypeScript (e.g., `["ts", "tsx"]` to add partial JSX support). Note that the preserve mode for JSX is not (yet) supported. See also AVA's `extensions` object
 */
declare type ArrayOfPaths4 = string[];

declare type ArrayOfStrings = string[];

/**
 * Configure Node.js arguments used to launch worker processes
 */
declare type ArrayOfStrings1 = string[];

/**
 * Specify a blacklist of disallowed at-rules
 */
declare type ArrayStringRule = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed at-rules
 */
declare type ArrayStringRule1 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed pseudo-class selectors
 */
declare type ArrayStringRule10 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a blacklist of disallowed words within comments
 */
declare type ArrayStringRule2 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a blacklist of disallowed functions
 */
declare type ArrayStringRule3 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed url schemes
 */
declare type ArrayStringRule4 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed functions
 */
declare type ArrayStringRule5 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a blacklist of disallowed properties
 */
declare type ArrayStringRule6 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed properties
 */
declare type ArrayStringRule7 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a blacklist of disallowed attribute operators
 */
declare type ArrayStringRule8 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed attribute operators
 */
declare type ArrayStringRule9 = (
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
(
| (null &
(
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
))
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
string)
| ((
| (null | string)
| [
(([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
),
...((([] | {}) | SimpleArrayStringRule | CoreRule) &
(
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
| ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
| (([] | {}) | SimpleArrayStringRule | CoreRule)
))[]
]
) &
unknown[])
);

declare type AstNode = RollupAstNode<Node>;

declare interface AstNodeLocation {
    	end: number;
    	start: number;
}

declare type AsyncPluginHooks = Exclude<keyof FunctionPluginHooks, SyncPluginHooks>;

declare interface AtRule {
    "at-rule-blacklist"?: ArrayStringRule;
    /**
     * Require or disallow an empty line before at-rules
     */
    "at-rule-empty-line-before"?: (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "at-rule-name-case"?: LowerUpperRule;
    "at-rule-name-newline-after"?: AlwaysMultiLineRule;
    /**
     * Require a single space after at-rule names
     */
    "at-rule-name-space-after"?: (
    | null
    | ("always" | "always-single-line" | [])
    | [
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "always-single-line" | [])
    | [
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always" | "always-single-line" | [])
    | [
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "always-single-line" | [])
    | [
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    /**
     * Disallow unknown at-rules
     */
    "at-rule-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "at-rule-no-vendor-prefix"?: BooleanRule;
    /**
     * Require a newline after the semicolon of at-rules
     */
    "at-rule-semicolon-newline-after"?: (
    | null
    | ("always" | [])
    | [
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule)),
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | [])
    | [
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule)),
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("always" | [])
    | [
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule)),
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | [])
    | [
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule)),
    (("always" | {}) | CoreRule) & (((("always" | {}) | CoreRule) & string) | (("always" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "at-rule-whitelist"?: ArrayStringRule1;
    [k: string]: unknown | undefined;
}

/**
 * Configuration Schema for the JavaScript test runner AVA
 */
declare interface AVAConfigSchema {
    files?: ArrayOfPaths;
    ignoredByWatcher?: ArrayOfPaths1;
    match?: ArrayOfPaths2;
    /**
     * Defaults to `true` to cache compiled files under `node_modules/.cache/ava.` If `false`, files are cached in a temporary directory instead
     */
    cache?: boolean;
    /**
     * Max number of test files running at the same time (default: CPU cores)
     */
    concurrency?: number;
    /**
     * Use worker threads to run tests (enabled by default). If `false`, tests will run in child processes
     */
    workerThreads?: boolean;
    /**
     * Stop running further tests once a test fails
     */
    failFast?: boolean;
    /**
     * If `false`, does not fail a test if it doesn't run assertions
     */
    failWithoutAssertions?: boolean;
    environmentVariables?: EnvironmentVariables;
    /**
     * If `true`, enables the TAP reporter
     */
    tap?: boolean;
    /**
     * If `true`, enables verbose output (though currently non-verbose output is not supported)
     */
    verbose?: boolean;
    /**
     * Specifies a fixed location for storing snapshot files. Use this if your snapshots are ending up in the wrong location
     */
    snapshotDir?: string;
    /**
     * Extensions of test files. Setting this overrides the default `["cjs", "mjs", "js"]` value, so make sure to include those extensions in the list. Experimentally you can configure how files are loaded
     */
    extensions?: ArrayOfStrings | Extensions;
    require?: ArrayOfPaths3;
    /**
     * Timeouts in AVA behave differently than in other test frameworks. AVA resets a timer after each test, forcing tests to quit if no new test results were received within the specified timeout. This can be used to handle stalled tests. See our timeout documentation for more options
     */
    timeout?: number | string;
    nodeArguments?: ArrayOfStrings1;
    /**
     * If `false`, disable parallel builds (default: `true`)
     */
    utilizeParallelBuilds?: boolean;
    typescript?: Configuration;
}

declare interface BestPractices {
    /**
     * Enforce getter and setter pairs in objects
     */
    "accessor-pairs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce return statements in callbacks of array methods
     */
    "array-callback-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the use of variables within the scope they are defined
     */
    "block-scoped-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce that class methods utilize this
     */
    "class-methods-use-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     */
    complexity?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require return statements to either always or never specify values
     */
    "consistent-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent brace style for all control statements
     */
    curly?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require default cases in switch statements
     */
    "default-case"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent newlines before and after dots
     */
    "dot-location"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce dot notation whenever possible
     */
    "dot-notation"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require the use of === and !==
     */
    eqeqeq?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require for-in loops to include an if statement
     */
    "guard-for-in"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of alert, confirm, and prompt
     */
    "no-alert"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of arguments.caller or arguments.callee
     */
    "no-caller"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow lexical declarations in case clauses
     */
    "no-case-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     */
    "no-div-regex"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow else blocks after return statements in if statements
     */
    "no-else-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty functions
     */
    "no-empty-function"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty destructuring patterns
     */
    "no-empty-pattern"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow null comparisons without type-checking operators
     */
    "no-eq-null"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of eval()
     */
    "no-eval"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow extending native types
     */
    "no-extend-native"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary calls to .bind()
     */
    "no-extra-bind"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary labels
     */
    "no-extra-label"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow fallthrough of case statements
     */
    "no-fallthrough"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow leading or trailing decimal points in numeric literals
     */
    "no-floating-decimal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignments to native objects or read-only global variables
     */
    "no-global-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow shorthand type conversions
     */
    "no-implicit-coercion"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var and named function declarations in the global scope
     */
    "no-implicit-globals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of eval()-like methods
     */
    "no-implied-eval"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow this keywords outside of classes or class-like objects
     */
    "no-invalid-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of the __iterator__ property
     */
    "no-iterator"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow labeled statements
     */
    "no-labels"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary nested blocks
     */
    "no-lone-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow function declarations and expressions inside loop statements
     */
    "no-loop-func"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow magic numbers
     */
    "no-magic-numbers"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple spaces
     */
    "no-multi-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiline strings
     */
    "no-multi-str"?: number | ("off" | "warn" | "error") | unknown[];
    "no-native-reassign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators outside of assignments or comparisons
     */
    "no-new"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the Function object
     */
    "no-new-func"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the String, Number, and Boolean objects
     */
    "no-new-wrappers"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow octal literals
     */
    "no-octal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow octal escape sequences in string literals
     */
    "no-octal-escape"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning function parameters
     */
    "no-param-reassign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of the __proto__ property
     */
    "no-proto"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var redeclaration
     */
    "no-redeclare"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow certain properties on certain objects
     */
    "no-restricted-properties"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignment operators in return statements
     */
    "no-return-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary return await
     */
    "no-return-await"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow javascript: urls
     */
    "no-script-url"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignments where both sides are exactly the same
     */
    "no-self-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comparisons where both sides are exactly the same
     */
    "no-self-compare"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comma operators
     */
    "no-sequences"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow throwing literals as exceptions
     */
    "no-throw-literal"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unmodified loop conditions
     */
    "no-unmodified-loop-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused expressions
     */
    "no-unused-expressions"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused labels
     */
    "no-unused-labels"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary calls to .call() and .apply()
     */
    "no-useless-call"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary concatenation of literals or template literals
     */
    "no-useless-concat"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary escape characters
     */
    "no-useless-escape"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow redundant return statements
     */
    "no-useless-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow void operators
     */
    "no-void"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified warning terms in comments
     */
    "no-warning-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow with statements
     */
    "no-with"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require using Error objects as Promise rejection reasons
     */
    "prefer-promise-reject-errors"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     */
    radix?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow async functions which have no await expression
     */
    "require-await"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require var declarations be placed at the top of their containing scope
     */
    "vars-on-top"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses around immediate function invocations
     */
    "wrap-iife"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or Disallow "Yoda" conditions
     */
    yoda?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

/**
 * The path of the executables (.bin) inside the temporary folder for the dlx operation.
 * @public
 */
declare const binPath: string;

declare interface Block {
    /**
     * Require or disallow an empty line before the closing brace of blocks
     */
    "block-closing-brace-empty-line-before"?: (
    | null
    | ("always-multi-line" | "never" | [])
    | [
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    ),
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always-multi-line" | "never" | [])
    | [
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    ),
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always-multi-line" | "never" | [])
    | [
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    ),
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always-multi-line" | "never" | [])
    | [
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    ),
    (("always-multi-line" | "never" | {}) | CoreRule) &
    (
    | ((("always-multi-line" | "never" | {}) | CoreRule) & string)
    | (("always-multi-line" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    "block-closing-brace-newline-after"?: NewlineSpaceWithIgnoreRule;
    "block-closing-brace-newline-before"?: NewlineRule;
    "block-closing-brace-space-after"?: NewlineSpaceRule;
    "block-closing-brace-space-before"?: NewlineSpaceRule1;
    "block-no-empty"?: BooleanRule1;
    "block-no-single-line"?: BooleanRule2;
    "block-opening-brace-newline-after"?: NewlineRule1;
    /**
     * Require a newline or disallow whitespace before the opening brace of blocks
     */
    "block-opening-brace-newline-before"?: (
    | null
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
    | [
    (
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    ),
    (
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
    | [
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    ),
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    )
    ]
    ))
    | ((
    | null
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
    | [
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    ),
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
    | [
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    ),
    (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    (
    | ((
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    ) &
    string)
    | (
    | (
    | "always"
    | "always-single-line"
    | "never-single-line"
    | "always-multi-line"
    | "never-multi-line"
    | {}
    )
    | CoreRule
    )
    )
    ]
    ) &
    unknown[])
    );
    "block-opening-brace-space-after"?: NewlineSpaceRule2;
    "block-opening-brace-space-before"?: NewlineSpaceWithIgnoreRule1;
    [k: string]: unknown | undefined;
}

/**
 * Disallow vendor prefixes for at-rules
 */
declare type BooleanRule = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow empty blocks
 */
declare type BooleanRule1 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow an unspaced operator within `calc` functions
 */
declare type BooleanRule10 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax
 */
declare type BooleanRule11 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow scheme-relative urls
 */
declare type BooleanRule12 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
 */
declare type BooleanRule13 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow duplicate selectors within a stylesheet
 */
declare type BooleanRule14 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow empty sources
 */
declare type BooleanRule15 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow extra semicolons
 */
declare type BooleanRule16 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow double-slash comments `(//...)` which are not supported by CSS and could lead to unexpected results
 */
declare type BooleanRule17 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow missing end-of-source newlines
 */
declare type BooleanRule18 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow animation names that do not correspond to a `@keyframes` declaration
 */
declare type BooleanRule19 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow single-line blocks
 */
declare type BooleanRule2 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow !important within keyframe declarations
 */
declare type BooleanRule20 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow units for zero lengths
 */
declare type BooleanRule21 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow vendor prefixes for media feature names
 */
declare type BooleanRule22 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow missing punctuation for non-boolean media features
 */
declare type BooleanRule23 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow trailing zeros in numbers
 */
declare type BooleanRule24 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow vendor prefixes for properties
 */
declare type BooleanRule25 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow standard properties inside `:root` rules
 */
declare type BooleanRule26 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow non-space characters for descendant combinators of selectors
 */
declare type BooleanRule27 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow attribute selectors
 */
declare type BooleanRule28 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow combinators in selectors
 */
declare type BooleanRule29 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow hex colors
 */
declare type BooleanRule3 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow id selectors
 */
declare type BooleanRule30 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow the universal selector
 */
declare type BooleanRule31 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow vendor prefixes for selectors
 */
declare type BooleanRule32 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow the composition of :root in selectors
 */
declare type BooleanRule33 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow redundant values in shorthand properties
 */
declare type BooleanRule34 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow (unescaped) newlines in strings
 */
declare type BooleanRule35 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow `animation` and `transition` less than or equal to 100ms
 */
declare type BooleanRule36 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow vendor prefixes for values
 */
declare type BooleanRule37 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Report stylelint-disable comments without a description.
 */
declare type BooleanRule38 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Report stylelint-disable comments that don't match rules that are specified in the configuration object.
 */
declare type BooleanRule39 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow invalid hex colors
 */
declare type BooleanRule4 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Report stylelint-disable comments that don't actually match any lints that need to be disabled
 */
declare type BooleanRule40 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow empty comments
 */
declare type BooleanRule5 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow custom properties outside of `:root` rules
 */
declare type BooleanRule6 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow `!important` within declarations
 */
declare type BooleanRule7 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow property values that are ignored due to another property value in the same rule
 */
declare type BooleanRule8 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Disallow shorthand properties that override related longhand properties
 */
declare type BooleanRule9 = (
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| (boolean &
(
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
))
| ((
| null
| (true | [])
| [
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
]
) &
unknown[])
);

declare interface BranchObject {
    name: string;
    channel?: string;
    range?: string;
    prerelease?: boolean | string;
}

declare type BufferEncodingOption = 'buffer' | null;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * Can directly be used as an Rollup Task.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns A Gulp Task.
 * @public
 */
declare function build(configOpts?: ConfigOpts, commandOptions?: CommandOptions): TaskFunction;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns Normalized version of the configOpts.
 * @public
 */
declare function build_2(configOpts?: ConfigOpts, commandOptions?: CommandOptions): Promise<DefaultConfigOpts>;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * Automatically sets the configOpts.buildTest option to true to build the test files.
 * Runs Jest with the generated test files after the build finished.
 * Can directly be used as an Rollup Task.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns A Gulp Task.
 * @public
 */
declare function buildAndRunTests(configOpts?: ConfigOpts, commandOptions?: CommandOptions): TaskFunction;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * Automatically sets the configOpts.buildTest option to true to build the test files.
 * Runs Jest with the generated test files after the build finished.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns Normalized version of the configOpts.
 * @public
 */
declare function buildAndRunTests_2(configOpts?: ConfigOpts, commandOptions?: CommandOptions): Promise<DefaultConfigOpts>;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * Automatically sets the configOpts.buildTest option to true to build the test files.
 * Can directly be used as an Rollup Task.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns A Gulp Task.
 * @public
 */
declare function buildWithTests(configOpts?: ConfigOpts, commandOptions?: CommandOptions): TaskFunction;

/**
 * Build the Project with an automatically generated rollup config.
 * Also bundles the declaration files with ApiExtractor and generate necessary package.json with module types.
 * Automatically sets the configOpts.buildTest option to true to build the test files.
 * @param configOpts - options on how the rollup config should be generated.
 * @param commandOptions - optional cli flags for rollup.
 * @returns Normalized version of the configOpts.
 * @public
 */
declare function buildWithTests_2(configOpts?: ConfigOpts, commandOptions?: CommandOptions): Promise<DefaultConfigOpts>;

/**
 * Bundles the Declarations of an build and deletes them.
 * @param defaultConfigOpts - Normalized ConfigOptions returned from build.
 * @public
 */
declare function bundleDeclarations(defaultConfigOpts: DefaultConfigOpts): Promise<void>;

declare type ChangeEvent = 'create' | 'update' | 'delete';

declare interface ChokidarOptions {
    	alwaysStat?: boolean;
    	atomic?: boolean | number;
    	awaitWriteFinish?:
    		| {
        				pollInterval?: number;
        				stabilityThreshold?: number;
        		  }
    		| boolean;
    	binaryInterval?: number;
    	cwd?: string;
    	depth?: number;
    	disableGlobbing?: boolean;
    	followSymlinks?: boolean;
    	ignoreInitial?: boolean;
    	ignorePermissionErrors?: boolean;
    	ignored?: any;
    	interval?: number;
    	persistent?: boolean;
    	useFsEvents?: boolean;
    	usePolling?: boolean;
}

/**
 * Clean the Project folder with git (git -c core.longpaths=true clean -dfX).
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function cleanWithGit(): TaskFunction;

/**
 * Clean the Project folder with git (git -c core.longpaths=true clean -dfX).
 * @public
 */
declare function cleanWithGit_2(): Promise<void>;

declare interface Color {
    "color-hex-case"?: LowerUpperRule1;
    /**
     * Specify short or long notation for hex colors
     */
    "color-hex-length"?: (
    | null
    | ("short" | "long" | [])
    | [
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule)),
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("short" | "long" | [])
    | [
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule)),
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("short" | "long" | [])
    | [
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule)),
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("short" | "long" | [])
    | [
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule)),
    (("short" | "long" | {}) | CoreRule) &
    (((("short" | "long" | {}) | CoreRule) & string) | (("short" | "long" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    /**
     * Require (where possible) or disallow named colors
     */
    "color-named"?: (
    | null
    | ("always-where-possible" | "never" | [])
    | [
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    ),
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always-where-possible" | "never" | [])
    | [
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    ),
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always-where-possible" | "never" | [])
    | [
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    ),
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always-where-possible" | "never" | [])
    | [
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    ),
    (("always-where-possible" | "never" | {}) | CoreRule) &
    (
    | ((("always-where-possible" | "never" | {}) | CoreRule) & string)
    | (("always-where-possible" | "never" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    "color-no-hex"?: BooleanRule3;
    "color-no-invalid-hex"?: BooleanRule4;
    [k: string]: unknown | undefined;
}

/**
 * Options wich are normally provided to rollup with cli flags.
 * @public
 */
declare interface CommandOptions {
    /**
     * The build should fail if warnings are emitted.
     * @default true
     */
    failAfterWarnings?: boolean;
    /**
     * The build should be silent.
     * @default false
     */
    silent?: boolean;
}

declare interface Comment {
    /**
     * Require or disallow an empty line before comments
     */
    "comment-empty-line-before"?: (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "comment-no-empty"?: BooleanRule5;
    "comment-whitespace-inside"?: AlwaysNeverRule;
    "comment-word-blacklist"?: ArrayStringRule2;
    [k: string]: unknown | undefined;
}

declare type CommonOptions<EncodingType extends EncodingOption = DefaultEncodingOption> = {
    	/**
     	Kill the spawned process when the parent process exits unless either:
     		- the spawned process is [`detached`](https://nodejs.org/api/child_process.html#child_process_options_detached)
     		- the parent process is terminated abruptly, for example, with `SIGKILL` as opposed to `SIGTERM` or a normal exit

     	@default true
     	*/
    	readonly cleanup?: boolean;

    	/**
     	Prefer locally installed binaries when looking for a binary to execute.

     	If you `$ npm install foo`, you can then `execa('foo')`.

     	@default `true` with `$`, `false` otherwise
     	*/
    	readonly preferLocal?: boolean;

    	/**
     	Preferred path to find locally installed binaries in (use with `preferLocal`).

     	@default process.cwd()
     	*/
    	readonly localDir?: string | URL;

    	/**
     	Path to the Node.js executable to use in child processes.

     	This can be either an absolute path or a path relative to the `cwd` option.

     	Requires `preferLocal` to be `true`.

     	For example, this can be used together with [`get-node`](https://github.com/ehmicky/get-node) to run a specific Node.js version in a child process.

     	@default process.execPath
     	*/
    	readonly execPath?: string;

    	/**
     	Buffer the output from the spawned process. When set to `false`, you must read the output of `stdout` and `stderr` (or `all` if the `all` option is `true`). Otherwise the returned promise will not be resolved/rejected.

     	If the spawned process fails, `error.stdout`, `error.stderr`, and `error.all` will contain the buffered data.

     	@default true
     	*/
    	readonly buffer?: boolean;

    	/**
     	Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

     	@default `inherit` with `$`, `pipe` otherwise
     	*/
    	readonly stdin?: StdioOption;

    	/**
     	Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

     	@default 'pipe'
     	*/
    	readonly stdout?: StdioOption;

    	/**
     	Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

     	@default 'pipe'
     	*/
    	readonly stderr?: StdioOption;

    	/**
     	Setting this to `false` resolves the promise with the error instead of rejecting it.

     	@default true
     	*/
    	readonly reject?: boolean;

    	/**
     	Add an `.all` property on the promise and the resolved value. The property contains the output of the process with `stdout` and `stderr` interleaved.

     	@default false
     	*/
    	readonly all?: boolean;

    	/**
     	Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from the output.

     	@default true
     	*/
    	readonly stripFinalNewline?: boolean;

    	/**
     	Set to `false` if you don't want to extend the environment variables when providing the `env` property.

     	@default true
     	*/
    	readonly extendEnv?: boolean;

    	/**
     	Current working directory of the child process.

     	@default process.cwd()
     	*/
    	readonly cwd?: string | URL;

    	/**
     	Environment key-value pairs. Extends automatically from `process.env`. Set `extendEnv` to `false` if you don't want this.

     	@default process.env
     	*/
    	readonly env?: NodeJS.ProcessEnv;

    	/**
     	Explicitly set the value of `argv[0]` sent to the child process. This will be set to `command` or `file` if not specified.
     	*/
    	readonly argv0?: string;

    	/**
     	Child's [stdio](https://nodejs.org/api/child_process.html#child_process_options_stdio) configuration.

     	@default 'pipe'
     	*/
    	readonly stdio?: 'pipe' | 'overlapped' | 'ignore' | 'inherit' | readonly StdioOption[];

    	/**
     	Specify the kind of serialization used for sending messages between processes when using the `stdio: 'ipc'` option or `execaNode()`:
     		- `json`: Uses `JSON.stringify()` and `JSON.parse()`.
     		- `advanced`: Uses [`v8.serialize()`](https://nodejs.org/api/v8.html#v8_v8_serialize_value)

     	[More info.](https://nodejs.org/api/child_process.html#child_process_advanced_serialization)

     	@default 'json'
     	*/
    	readonly serialization?: 'json' | 'advanced';

    	/**
     	Prepare child to run independently of its parent process. Specific behavior [depends on the platform](https://nodejs.org/api/child_process.html#child_process_options_detached).

     	@default false
     	*/
    	readonly detached?: boolean;

    	/**
     	Sets the user identity of the process.
     	*/
    	readonly uid?: number;

    	/**
     	Sets the group identity of the process.
     	*/
    	readonly gid?: number;

    	/**
     	If `true`, runs `command` inside of a shell. Uses `/bin/sh` on UNIX and `cmd.exe` on Windows. A different shell can be specified as a string. The shell should understand the `-c` switch on UNIX or `/d /s /c` on Windows.

     	We recommend against using this option since it is:
     	- not cross-platform, encouraging shell-specific syntax.
     	- slower, because of the additional shell interpretation.
     	- unsafe, potentially allowing command injection.

     	@default false
     	*/
    	readonly shell?: boolean | string;

    	/**
     	Specify the character encoding used to decode the `stdout` and `stderr` output. If set to `'buffer'` or `null`, then `stdout` and `stderr` will be a `Buffer` instead of a string.

     	@default 'utf8'
     	*/
    	readonly encoding?: EncodingType;

    	/**
     	If `timeout` is greater than `0`, the parent will send the signal identified by the `killSignal` property (the default is `SIGTERM`) if the child runs longer than `timeout` milliseconds.

     	@default 0
     	*/
    	readonly timeout?: number;

    	/**
     	Largest amount of data in bytes allowed on `stdout` or `stderr`. Default: 100 MB.

     	@default 100_000_000
     	*/
    	readonly maxBuffer?: number;

    	/**
     	Signal value to be used when the spawned process will be killed.

     	@default 'SIGTERM'
     	*/
    	readonly killSignal?: string | number;

    	/**
     	You can abort the spawned process using [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

     	When `AbortController.abort()` is called, [`.isCanceled`](https://github.com/sindresorhus/execa#iscanceled) becomes `true`.

     	@example
     	```
     	import {execa} from 'execa';

     	const abortController = new AbortController();
     	const subprocess = execa('node', [], {signal: abortController.signal});

     	setTimeout(() => {
     		abortController.abort();
     	}, 1000);

     	try {
     		await subprocess;
     	} catch (error) {
     		console.log(subprocess.killed); // true
     		console.log(error.isCanceled); // true
     	}
     	```
     	*/
    	readonly signal?: AbortSignal;

    	/**
     	If `true`, no quoting or escaping of arguments is done on Windows. Ignored on other platforms. This is set to `true` automatically when the `shell` option is `true`.

     	@default false
     	*/
    	readonly windowsVerbatimArguments?: boolean;

    	/**
     	On Windows, do not create a new console window. Please note this also prevents `CTRL-C` [from working](https://github.com/nodejs/node/issues/29837) on Windows.

     	@default true
     	*/
    	readonly windowsHide?: boolean;

    	/**
     	Print each command on `stderr` before executing it.

     	This can also be enabled by setting the `NODE_DEBUG=execa` environment variable in the current process.

     	@default false
     	*/
    	readonly verbose?: boolean;
};

declare interface CompressOptions {
    arguments?: boolean;
    arrows?: boolean;
    booleans_as_integers?: boolean;
    booleans?: boolean;
    collapse_vars?: boolean;
    comparisons?: boolean;
    computed_props?: boolean;
    conditionals?: boolean;
    dead_code?: boolean;
    defaults?: boolean;
    directives?: boolean;
    drop_console?: DropConsoleOption;
    drop_debugger?: boolean;
    ecma?: ECMA;
    evaluate?: boolean;
    expression?: boolean;
    global_defs?: object;
    hoist_funs?: boolean;
    hoist_props?: boolean;
    hoist_vars?: boolean;
    ie8?: boolean;
    if_return?: boolean;
    inline?: boolean | InlineFunctions;
    join_vars?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fargs?: boolean;
    keep_fnames?: boolean | RegExp;
    keep_infinity?: boolean;
    loops?: boolean;
    module?: boolean;
    negate_iife?: boolean;
    passes?: number;
    properties?: boolean;
    pure_funcs?: string[];
    pure_new?: boolean;
    pure_getters?: boolean | 'strict';
    reduce_funcs?: boolean;
    reduce_vars?: boolean;
    sequences?: boolean | number;
    side_effects?: boolean;
    switches?: boolean;
    toplevel?: boolean;
    top_retain?: null | string | string[] | RegExp;
    typeofs?: boolean;
    unsafe_arrows?: boolean;
    unsafe?: boolean;
    unsafe_comps?: boolean;
    unsafe_Function?: boolean;
    unsafe_math?: boolean;
    unsafe_symbols?: boolean;
    unsafe_methods?: boolean;
    unsafe_proto?: boolean;
    unsafe_regexp?: boolean;
    unsafe_undefined?: boolean;
    unused?: boolean;
}

/**
 * Configuration Options on how to generate an Rollup Config.
 * @public
 */
export declare interface ConfigOpts extends ExportOpts {
    /**
     * A Glob Pattern defining wich files are Testfiles.
     * @default "**\/*.test.?ts"
     */
    testFileGlobPatterns?: string | string[];
    /**
     * BasePath of all source files (default = "./src/").
     * @default "./src/"
     */
    inputBasePath?: string;
    /**
     * A string[] or Map with Options overriding the automatically generated exports list.
     * By default the exports of the package.json file are analyzed.
     * @example
     * <caption>example content of an package.json exports field:</caption>
     * ```
     * "exports": {
     *   "./cli": {
     *     "require": {
     *       "types": "./dist/cli.d.cts",
     *       "default": "./dist/cli.cjs"
     *     }
     *   },
     *   ".": {
     *     "import": {
     *       "types": "./dist/index.d.ts",
     *       "default": "./dist/index.js"
     *     }
     *   }
     * },
     * ```
     */
    exports?: ExportsOpts;
    /**
     * A string[] or Map with Options overriding the automatically testfile list.
     * By default all files wich match testFileGlobPatterns are added as tests.
     */
    tests?: ExportsOpts;
    /**
     * A string[] or Map with Options with additional exports added manually.
     * By default this list is empty.
     */
    additionalExports?: ExportsOpts;
}

/**
 * Configures @ava/typescript for projects that precompile TypeScript. Alternatively, you can use `ts-node` to do live testing without transpiling, in which case you shouldn't use the `typescript` property
 */
declare interface Configuration {
    extensions?: ArrayOfPaths4;
    rewritePaths?: Paths;
    /**
     * If `false`, AVA will assume you have already compiled your project. If set to `'tsc'`, AVA will run the TypeScript compiler before running your tests. This can be inefficient when using AVA in watch mode
     */
    compile?: false | "tsc";
    [k: string]: unknown | undefined;
}

declare type ConsoleProperty = keyof typeof console;

/**
 * Options for the Consts Rollup Plugin.
 * @see {@link https://www.npmjs.com/package/rollup-plugin-consts | rollup-plugin-consts}
 * @public
 */
export declare type ConstsPluginOptions = {
    [name: string]: any;
};

declare interface CoreRule {
    disableFix?: boolean;
    /**
     * Custom message that will be used in errors and warnings
     */
    message?: string;
    reportDisables?: boolean;
    /**
     * Message status
     */
    severity?: "warning" | "error";
    [k: string]: unknown | undefined;
}

/**
 * Option for incrementVersion on how to increment the Version String.
 * Same as [pnpm version ***](https://docs.npmjs.com/cli/v8/commands/npm-version)
 * @default "patch"
 * @public
 */
declare type CountVersionOption = "patch" | "minor" | "major" | "prepatch" | "preminor" | "premajor" | "prerelease";

declare type CreateFilter = typeof createFilter;

/**
 * Constructs a filter function which can be used to determine whether or not
 * certain modules should be operated upon.
 * @param include If `include` is omitted or has zero length, filter will return `true` by default.
 * @param exclude ID must not match any of the `exclude` patterns.
 * @param options Optionally resolves the patterns against a directory other than `process.cwd()`.
 * If a `string` is specified, then the value will be used as the base directory.
 * Relative paths will be resolved against `process.cwd()` first.
 * If `false`, then the patterns will not be resolved against any directory.
 * This can be useful if you want to create a filter for virtual module names.
 */
declare function createFilter(
include?: FilterPattern,
exclude?: FilterPattern,
options?: { resolve?: string | false | null }
): (id: string | unknown) => boolean;

/**
 * Package and Make Setups with electron forge with sensible defaults.
 * Can be directly used as an Gulp Task.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.PackageOptions.html) for the package Command (default = {}).
 * @returns A Gulp Task
 * @public
 */
declare function createSetups(options?: CreateSetupsOptions): TaskFunction;

/**
 * Package and Make Setups with electron forge with sensible defaults.
 * @param options - options on how to create the Setups (default = {})
 * @public
 */
declare function createSetups_2(options?: CreateSetupsOptions): Promise<void>;

/**
 * Options on how to create the Setups.
 * @public
 */
declare interface CreateSetupsOptions {
    /**
     * List of files to also package in to the Asar file ()
     * @default []
     */
    additionalFilesToPackage?: string[];
}

declare interface CustomMedia {
    "custom-media-pattern"?: StringRule;
    [k: string]: unknown | undefined;
}

declare interface CustomPluginOptions {
    	[plugin: string]: any;
}

declare interface CustomProperty {
    /**
     * Require or disallow an empty line before custom properties
     */
    "custom-property-empty-line-before"?: (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "custom-property-no-outside-root"?: BooleanRule6;
    "custom-property-pattern"?: StringRule1;
    [k: string]: unknown | undefined;
}

declare type CustomTransformerFactories = {
    [stage in TransformerStage]?: Array<TransformerFactory<stage>>;
};

/**
 * Current working directory.
 * @public
 */
declare const cwd: string;

declare interface Declaration {
    "declaration-bang-space-after"?: AlwaysNeverRule1;
    "declaration-bang-space-before"?: AlwaysNeverRule2;
    "declaration-colon-newline-after"?: AlwaysMultiLineRule1;
    /**
     * Require a single space or disallow whitespace after the colon of declarations
     */
    "declaration-colon-space-after"?: (
    | null
    | ("always" | "never" | "always-single-line" | [])
    | [
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | "always-single-line" | [])
    | [
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always" | "never" | "always-single-line" | [])
    | [
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | "always-single-line" | [])
    | [
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-single-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-single-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-single-line" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    "declaration-colon-space-before"?: AlwaysNeverRule3;
    /**
     * Require or disallow an empty line before declarations
     */
    "declaration-empty-line-before"?: (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | [])
    | [
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule)),
    (("always" | "never" | {}) | CoreRule) &
    (((("always" | "never" | {}) | CoreRule) & string) | (("always" | "never" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "declaration-no-important"?: BooleanRule7;
    "declaration-property-unit-blacklist"?: ObjectRule;
    "declaration-property-unit-whitelist"?: ObjectRule1;
    "declaration-property-value-blacklist"?: ObjectRule2;
    "declaration-property-value-whitelist"?: ObjectRule3;
    [k: string]: unknown | undefined;
}

declare interface DeclarationBlock {
    /**
     * Disallow duplicate properties within declaration blocks
     */
    "declaration-block-no-duplicate-properties"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "declaration-block-no-ignored-properties"?: BooleanRule8;
    /**
     * Disallow longhand properties that can be combined into one shorthand property
     */
    "declaration-block-no-redundant-longhand-properties"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "declaration-block-no-shorthand-property-overrides"?: BooleanRule9;
    /**
     * Specify the order of properties within declaration blocks
     */
    "declaration-block-properties-order"?: (
    | null
    | ("alphabetical" | [])
    | [
    (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ),
    ...((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ))[]
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("alphabetical" | [])
    | [
    (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ),
    ...((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ))[]
    ]
    ))
    | ((
    | null
    | ("alphabetical" | [])
    | [
    (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ),
    ...((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ))[]
    ]
    ) &
    string)
    | ((
    | null
    | ("alphabetical" | [])
    | [
    (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ),
    ...((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
    (
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
    | ((("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
    | (("alphabetical" | [] | {}) | string | SimpleArrayStringRule | CoreRule)
    ))[]
    ]
    ) &
    unknown[])
    );
    "declaration-block-semicolon-newline-after"?: NewlineRule2;
    "declaration-block-semicolon-newline-before"?: NewlineRule3;
    "declaration-block-semicolon-space-after"?: SpaceRule;
    "declaration-block-semicolon-space-before"?: SpaceRule1;
    "declaration-block-single-line-max-declarations"?: IntegerRule;
    "declaration-block-trailing-semicolon"?: AlwaysNeverRule4;
    [k: string]: unknown | undefined;
}

declare type DecodedSourceMapOrMissing =
	| {
    			missing: true;
    			plugin: string;
    	  }
	| (ExistingDecodedSourceMap & { missing?: false });

/**
 * Normalized version of the ConfigOpts.
 * Defines how the Rollup Config was generated.
 * @public
 */
export declare interface DefaultConfigOpts {
    /**
     * A Glob Pattern defining wich files are Testfiles.
     */
    testFileGlobPatterns: string[];
    /**
     * BasePath of all source files.
     */
    inputBasePath: string;
    /**
     * A Map of all automatically generated entrypoints to the application with its build options.
     */
    exports: DefaultExportsOpts;
    /**
     * A Map of all testfiles with its build options.
     */
    tests: DefaultExportsOpts;
    /**
     * A Map of all entrypoints wich were added manually with its build options.
     */
    additionalExports: DefaultExportsOpts;
    /**
     * A Merged map of exports, tests and tests.
     */
    entryPoints: DefaultExportsOpts;
}

declare type DefaultEncodingOption = 'utf8';

/**
 * Normalized Information on how an entrypoint was generated.
 * @public
 */
export declare interface DefaultExportOpts {
    /**
     * Where dose this code execute:
     * "node" = Code is Executed by Node or similar environment.
     * "browser" = Code is Executed by a Browser.
     * @default "node"
     */
    environment: ExecutionEnvironment;
    /**
     * What type of package is compiled:
     * "app" = A standalone Application. It will be distributed as a whole (dependencies are bundled).
     * "lib" = A library wich will be eventually be used by an Application (dependencies are not bundled).
     * @default "lib"
     */
    type: ExportType;
    /**
     * Is it in Production?
     */
    prod: boolean;
    /**
     * Should the bundle be minified with terser?
     * By default only Production Builds except test files are minified.
     */
    minify: boolean;
    /**
     * Should declarations be generated?
     * For Testfiles declarations are not generated, by default.
     * If it is a library (type==="lib") or not in Production, declaration will be generated by default.
     */
    generateDeclaration: boolean;
    /**
     * The directory where declarations should be emitted.
     * @default "decl"
     */
    declarationDir: string;
    /**
     * Should the declarations of this entrypoint be bundled?
     * @default true
     */
    bundleDeclarations: boolean;
    /**
     * Typescript Libraries to be used in all Projects.
     * @default ["ESNext"]
     */
    defaultLib: string[];
    /**
     * Typescript Libraries to be used with Browser Projects.
     * @default ["DOM"]
     */
    browserLib: string[];
    /**
     * Typescript Libraries to be used with Node Projects.
     * @default []
     */
    nodeLib: string[];
    /**
     * TsConfig file to be used with this export.
     * @default "./tsconfig.json"
     */
    tsconfig: string;
    /**
     * The outDir typescript option.
     * By Default it will use the "./dist/" folder.
     * If it is a test it will use the "./tests/" folder.
     */
    tsOutDir: string;
    /**
     * Tsbuildinfo filename for this entrypoint.
     * needs to be different for each entrypoint else incremental builds don't work.
     * By default it is generated based on inputFileName.
     */
    tsBuildInfoFileName: string;
    /**
     * Should sourcemaps be generated?
     * By default sourcemaps are generated when not in Production (CI) or if it is a test.
     */
    sourceMap: boolean;
    /**
     * How should the sourcemap be generated:
     * "external" = A separate file with the Sourcemap is emitted (default).
     * "inline" = The sourcemap is inlined in to the bundle (default for tests only).
     */
    sourceMapType: SourceMapType;
    /**
     * Additional dependencies wich should not be bundled (External dependencies).
     * @default []
     */
    externalDependencies: string[];
    /**
     * Additional packages wich should be blacklisted.
     * @default []
     */
    blacklistDependencies: string[];
    /**
     * Dev Dependencies wich are allowed even when blacklisting is on.
     * @default []
     */
    allowedDevDependencies: string[];
    /**
     * Dev Dependencies wich are allowed in test files.
     * @default ["\@jest/globals"]
     */
    testDependencies: string[];
    /**
     * Should the build fail, if dev dependencies are referenced in the bundle.
     * @default true
     */
    blacklistDevDependencies: boolean;
    /**
     * Filename to be used for the default export ".".
     * @default "index"
     */
    defaultExportName: string;
    /**
     * Base path of the source file.
     * Will be the value of {@link ConfigOpts.inputBasePath} by default.
     */
    inputFileDir: string;
    /**
     * Filepath of the sourcefile relative to the base path.
     * By default it will use the path specified in the exports field in Package.json.
     */
    inputFileName: string;
    /**
     * File extension of the source file.
     * By default it will try to load .cts and .mts files first.
     * If these files don't exist, it will use .ts
     */
    inputFileExt: string;
    /**
     * Filepath to the entrypoint source.
     */
    inputFile: string;
    /**
     * If true, this is an entrypoint to a test file.
     * @default false
     */
    isTest: boolean;
    /**
     * Overrides the automatic detection if this entrypoint has multiple outputFormats.
     */
    isSingleFormat: boolean;
    /**
     * Defines if testfiles should be build.
     * @default false
     */
    buildTest: boolean;
    /**
     * An Array of DefaultOutputsOpts each defining an bundle wich was emitted.
     */
    outputs: DefaultOutputsOpts;
    /**
     * Overrides the array of Rollup Plugins to be used.
     */
    plugins: Plugin[];
    /**
     * Overrides the Options of the terser plugin.
     * @see {@link https://www.npmjs.com/package/@rollup/plugin-terser | @rollup/plugin-terser}
     * @default {}
     */
    terserPlugin: Options;
    /**
     * Overrides the Options of the manage dependencies plugin.
     * @see {@link manageDependencies}
     */
    manageDependenciesPlugin: ManageDependenciesConfig;
    /**
     * Overrides the Options of the consts plugin.
     * @see {@link https://www.npmjs.com/package/rollup-plugin-consts | rollup-plugin-consts}
     */
    constsPlugin: ConstsPluginOptions;
    /**
     * Overrides the Options of the json plugin.
     * @see {@link https://www.npmjs.com/package/@rollup/plugin-json | @rollup/plugin-json}
     * @default {}
     */
    jsonPlugin: RollupJsonOptions;
    /**
     * Overrides the Options of the commonjs plugin.
     * @see {@link https://www.npmjs.com/package/@rollup/plugin-commonjs | @rollup/plugin-commonjs}
     * @default {}
     */
    commonjsPlugin: RollupCommonJSOptions;
    /**
     * Overrides the Options of the typescript plugin.
     * @see {@link https://www.npmjs.com/package/@rollup/plugin-typescript | @rollup/plugin-typescript}
     */
    typescriptPlugin: RollupTypescriptOptions;
    /**
     * Overrides the Options of the source Maps plugin.
     * @see {@link https://www.npmjs.com/package/rollup-plugin-include-sourcemaps | rollup-plugin-include-sourcemaps}
     * @default {}
     */
    sourceMapsPlugin: SourcemapsPluginOptions;
    /**
     * Overrides the Options of the node resolve plugin.
     * @see {@link https://www.npmjs.com/package/@rollup/plugin-node-resolve | @rollup/plugin-node-resolve}
     */
    nodeResolvePlugin: RollupNodeResolveOptions;
    /**
     * Overrides the default Tree shaking options for rollup
     * @see {@link https://rollupjs.org/configuration-options/#treeshake |  Rollup config treeshake}
     * @default true
     */
    treeShakeOptions: boolean | TreeshakingPreset | TreeshakingOptions;
}

/**
 * A normalized Map of entrypoints with its build options.
 * @public
 */
export declare type DefaultExportsOpts = {
    [key: string]: DefaultExportOpts;
};

declare type DefaultIsModuleExportsOption = boolean | 'auto';

/**
 * Options on how a Bundle was emitted.
 * @public
 */
export declare interface DefaultOutputOpts {
    /**
     * The base path directory where this output should be generated.
     * By default it will use one of the cjsOutputDir, mjsOutputDir, singleOutputDir, testOutputDir values.
     */
    outputFileDir: string;
    /**
     * Path of the file relative to the base path.
     */
    outputFileName: string;
    /**
     * The File extension to use when emitting the bundle.
     * By default it will use one of the cjsOutputExt, mjsOutputExt, singleOutputExt values.
     * Testfiles will use .cjs ode .mjs based on the input file extension.
     * Is the input file used .mts or .mjs it will take precedence over all other rules.
     */
    outputFileExt: string;
    /**
     * Output format of this Bundle.
     * If the Output Options are generated automatically, it will analyse the package.json type field and use that format.
     * If the type field is undefined, it will generate both es and commonjs.
     * .cts or .mts extensions take precedence over the package.json type field.
     */
    outputFormat: OutputFormat;
    /**
     * The base path directory if multiple outputFormats are present and the format is commonjs.
     * @default "./dist/cjs/"
     */
    cjsOutputDir: string;
    /**
     * The base path directory if multiple outputFormats are present and the format is es.
     * @default "./dist/esm/"
     */
    mjsOutputDir: string;
    /**
     * The base path directory if only one outputFormat is present.
     * @default "./dist/"
     */
    singleOutputDir: string;
    /**
     * Extension of the output file if multiple outputFormats a present and the format is commonjs.
     * @default ".js"
     */
    cjsOutputExt: string;
    /**
     * Extension of the output file if multiple outputFormats a present and the format is es.
     * @default ".js"
     */
    mjsOutputExt: string;
    /**
     * Extension of the output file to be used, when only a single outputFormat is used.
     * @default ".js"
     */
    singleOutputExt: string;
    /**
     * The base path directory for tests to be emitted.
     * @default "./tests/"
     */
    testOutputDir: string;
    /**
     * Filepath to the generated output.
     */
    file: string;
    /**
     * File path where the bundled declarations should be emitted.
     */
    declarationTarget: string;
    /**
     * Current location of the unbundled declaration file associated with this output.
     */
    declarationSource: string;
    /**
     * A list of packages wich should also be bundled in the declarations.
     * @default []
     */
    bundleDeclarationPackages: string[];
}

/**
 * An Array of OutputOpts each defining an bundle wich was emitted.
 * @public
 */
export declare type DefaultOutputsOpts = DefaultOutputOpts[];

/**
 * Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.
 */
declare interface Dependency {
    [k: string]: string | undefined;
}

/**
 * The temporary project folder of the pnpm dlx operation.
 * @public
 */
declare const dlxPath: string;

/**
 * Downloads an Asset of a specific release token.
 * @param options - options on how to get the release downloaded
 * @public
 */
declare function downloadGithubRelease(options: DownloadGithubReleaseOptions): Promise<void>;

/**
 * Options for the downloadGithubRelease function.
 * @public
 */
declare interface DownloadGithubReleaseOptions {
    /**
     * The Owner of the repo.
     */
    owner: string;
    /**
     * The name of the repo.
     */
    repo: string;
    /**
     * The tag of the release.
     */
    tag: string;
    /**
     * Destination for the downloaded file.
     */
    destination: string;
    /**
     * should the file be extracted?
     */
    shouldExtract?: boolean;
    /**
     * Callback function to identify the right asset to download.
     * @param version - version of the release.
     * @param assets - additional information for the asset.
     * @returns one entry of the assets array.
     */
    getAsset?: (version: string, assets: ReleaseAssets) => ReleaseAsset | undefined;
}

/**
 * Download the latest github release of an repository.
 * @param options - options on how to get the release downloaded
 * @public
 */
declare function downloadLatestGithubRelease(options: DownloadLatestGithubReleaseOptions): Promise<void>;

/**
 * Options for the downloadLatestGithubRelease function.
 * @public
 */
declare interface DownloadLatestGithubReleaseOptions {
    /**
     * The Owner of the repo.
     */
    owner: string;
    /**
     * The name of the repo.
     */
    repo: string;
    /**
     * Destination for the downloaded file.
     */
    destination: string;
    /**
     * should the file be extracted?
     */
    shouldExtract?: boolean;
    /**
     * Callback function to identify the right asset to download.
     * @param version - version of the release.
     * @param assets - additional information for the asset.
     * @returns one entry of the assets array.
     */
    getAsset?: (version: string, assets: ReleaseAssets) => ReleaseAsset | undefined;
}

declare type DropConsoleOption = boolean | ConsoleProperty[];

declare type ECMA = 5 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to enable support for ECMAScript 6 as well as JSX by using configuration settings.
 */
declare interface EcmaFeatures {
    arrowFunctions?: boolean;
    binaryLiterals?: boolean;
    blockBindings?: boolean;
    classes?: boolean;
    defaultParams?: boolean;
    destructuring?: boolean;
    /**
     * Enables support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
     */
    experimentalObjectRestSpread?: boolean;
    forOf?: boolean;
    generators?: boolean;
    /**
     * allow return statements in the global scope
     */
    globalReturn?: boolean;
    /**
     * enable global strict mode (if ecmaVersion is 5 or greater)
     */
    impliedStrict?: boolean;
    /**
     * enable JSX
     */
    jsx?: boolean;
    modules?: boolean;
    objectLiteralComputedProperties?: boolean;
    objectLiteralDuplicateProperties?: boolean;
    objectLiteralShorthandMethods?: boolean;
    objectLiteralShorthandProperties?: boolean;
    octalLiterals?: boolean;
    regexUFlag?: boolean;
    regexYFlag?: boolean;
    restParams?: boolean;
    spread?: boolean;
    superInFunctions?: boolean;
    templateStrings?: boolean;
    unicodeCodePointEscapes?: boolean;
    [k: string]: unknown | undefined;
}

declare interface EcmaScript6 {
    /**
     * Require braces around arrow function bodies
     */
    "arrow-body-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses around arrow function arguments
     */
    "arrow-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     */
    "arrow-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require super() calls in constructors
     */
    "constructor-super"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing around * operators in generator functions
     */
    "generator-star-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning class members
     */
    "no-class-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow arrow functions where they could be confused with comparisons
     */
    "no-confusing-arrow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning const variables
     */
    "no-const-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate class members
     */
    "no-dupe-class-members"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate module imports
     */
    "no-duplicate-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with the Symbol object
     */
    "no-new-symbol"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified modules when loaded by import
     */
    "no-restricted-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow this/super before calling super() in constructors
     */
    "no-this-before-super"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary computed property keys in object literals
     */
    "no-useless-computed-key"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary constructors
     */
    "no-useless-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     */
    "no-useless-rename"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require let or const instead of var
     */
    "no-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow method and property shorthand syntax for object literals
     */
    "object-shorthand"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require arrow functions as callbacks
     */
    "prefer-arrow-callback"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require const declarations for variables that are never reassigned after declared
     */
    "prefer-const"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require destructuring from arrays and/or objects
     */
    "prefer-destructuring"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow parseInt() in favor of binary, octal, and hexadecimal literals
     */
    "prefer-numeric-literals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require Reflect methods where applicable
     */
    "prefer-reflect"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require rest parameters instead of arguments
     */
    "prefer-rest-params"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require spread operators instead of .apply()
     */
    "prefer-spread"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require template literals instead of string concatenation
     */
    "prefer-template"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require generator functions to contain yield
     */
    "require-yield"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce spacing between rest and spread operators and their expressions
     */
    "rest-spread-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce sorted import declarations within modules
     */
    "sort-imports"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require symbol descriptions
     */
    "symbol-description"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing around embedded expressions of template strings
     */
    "template-curly-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing around the * in yield* expressions
     */
    "yield-star-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

declare namespace electron {
    export {
        createSetups,
        runForgePackage,
        runForgeMake,
        runForgePublish,
        runForgeStart,
        prepareWixTools
    }
}

declare namespace electron_2 {
    export {
        createSetups_2 as createSetups,
        CreateSetupsOptions,
        prepareWixTools_2 as prepareWixTools,
        runForgePackage_2 as runForgePackage,
        runForgeMake_2 as runForgeMake,
        runForgePublish_2 as runForgePublish,
        runForgeStart_2 as runForgeStart
    }
}

declare type ElementType<T extends Array<any> | undefined> = T extends (infer U)[] ? U : never;

declare type EmitFile = (emittedFile: EmittedFile) => string;

declare interface EmittedAsset {
    	fileName?: string;
    	name?: string;
    	needsCodeReference?: boolean;
    	source?: string | Uint8Array;
    	type: 'asset';
}

declare interface EmittedChunk {
    	fileName?: string;
    	id: string;
    	implicitlyLoadedAfterOneOf?: string[];
    	importer?: string;
    	name?: string;
    	preserveSignature?: PreserveEntrySignaturesOption;
    	type: 'chunk';
}

declare type EmittedFile = EmittedAsset | EmittedChunk | EmittedPrebuiltChunk;

declare interface EmittedPrebuiltChunk {
    	code: string;
    	exports?: string[];
    	fileName: string;
    	map?: SourceMap;
    	sourcemapFileName?: string;
    	type: 'prebuilt-chunk';
}

declare type EncodingOption =
| 'utf8'
// eslint-disable-next-line unicorn/text-encoding-identifier-case
| 'utf-8'
| 'utf16le'
| 'utf-16le'
| 'ucs2'
| 'ucs-2'
| 'latin1'
| 'binary'
| 'ascii'
| 'hex'
| 'base64'
| 'base64url'
| 'buffer'
| null
| undefined;

/** Properties of `CompilerOptions` that are normally enums */
declare type EnumCompilerOptions = 'module' | 'moduleResolution' | 'newLine' | 'jsx' | 'target';

/**
 * Options for customizing the sort order of {@link ApiEnum} members.
 *
 * @privateRemarks
 * This enum is currently only used by the `@microsoft/api-extractor` package; it is declared here
 * because we anticipate that if more options are added in the future, their sorting will be implemented
 * by the `@microsoft/api-extractor-model` package.
 *
 * See https://github.com/microsoft/rushstack/issues/918 for details.
 *
 * @public
 */
declare enum EnumMemberOrder {
    /**
     * `ApiEnumMember` items are sorted according to their {@link ApiItem.getSortKey}.  The order is
     * basically alphabetical by identifier name, but otherwise unspecified to allow for cosmetic improvements.
     *
     * This is the default behavior.
     */
    ByName = "by-name",
    /**
     * `ApiEnumMember` items preserve the original order of the declarations in the source file.
     * (This disables the automatic sorting that is normally applied based on {@link ApiItem.getSortKey}.)
     */
    Preserve = "preserve"
}

/**
 * An environment defines global variables that are predefined.
 */
declare interface Env {
    /**
     * defines require() and define() as global variables as per the amd spec
     */
    amd?: boolean;
    /**
     * AppleScript global variables
     */
    applescript?: boolean;
    /**
     * Atom test helper globals
     */
    atomtest?: boolean;
    /**
     * browser global variables
     */
    browser?: boolean;
    /**
     * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack)
     */
    commonjs?: boolean;
    /**
     * Globals common to both Node and Browser
     */
    "shared-node-browser"?: boolean;
    /**
     * Ember test helper globals
     */
    embertest?: boolean;
    /**
     * enable all ECMAScript 6 features except for modules
     */
    es6?: boolean;
    /**
     * GreaseMonkey globals
     */
    greasemonkey?: boolean;
    /**
     * adds all of the Jasmine testing global variables for version 1.3 and 2.0
     */
    jasmine?: boolean;
    /**
     * Jest global variables
     */
    jest?: boolean;
    /**
     * jQuery global variables
     */
    jquery?: boolean;
    /**
     * Meteor global variables
     */
    meteor?: boolean;
    /**
     * adds all of the Mocha test global variables
     */
    mocha?: boolean;
    /**
     * MongoDB global variables
     */
    mongo?: boolean;
    /**
     * Java 8 Nashorn global variables
     */
    nashorn?: boolean;
    /**
     * Node.js global variables and Node.js scoping
     */
    node?: boolean;
    /**
     * PhantomJS global variables
     */
    phantomjs?: boolean;
    /**
     * Prototype.js global variables
     */
    prototypejs?: boolean;
    /**
     * Protractor global variables
     */
    protractor?: boolean;
    /**
     * QUnit global variables
     */
    qunit?: boolean;
    /**
     * Service Worker global variables
     */
    serviceworker?: boolean;
    /**
     * ShellJS global variables
     */
    shelljs?: boolean;
    /**
     * WebExtensions globals
     */
    webextensions?: boolean;
    /**
     * web workers global variables
     */
    worker?: boolean;
    [k: string]: unknown | undefined;
}

/**
 * Specifies environment variables to be made available to the tests. The environment variables defined here override the ones from `process.env`
 */
declare interface EnvironmentVariables {
    [k: string]: string | undefined;
}

/**
 * Utility for executing Processes.
 * It is a tag function for a template string.
 * @param options - An  {@link https://github.com/sindresorhus/execa | EXECA object} specifying options on how to start the process.
 * @example
 *
 * ```
 * await exec`corepack prepare pnpm@${version} --activate`;
 * await exec({ env: { GIT_ASK_YESNO: "false" } })`git -c core.longpaths=true clean -dfX`;
 * await exec({ env: { NODE_OPTIONS: "--experimental-vm-modules" } })`jest ${testFiles.map((testFile) => testFile.replaceAll("\\", "/"))}`;
 * ```
 * @public
 */
declare const exec: typeof $;

declare type Execa$<StdoutStderrType extends StdoutStderrAll = string> = {
    	/**
     	Returns a new instance of `$` but with different default `options`. Consecutive calls are merged to previous ones.

     	This can be used to either:
     		- Set options for a specific command: `` $(options)`command` ``
     		- Share options for multiple commands: `` const $$ = $(options); $$`command`; $$`otherCommand` ``

     	@param options - Options to set
     	@returns A new instance of `$` with those `options` set

     	@example
     	```
     	import {$} from 'execa';

     	const $$ = $({stdio: 'inherit'});

     	await $$`echo unicorns`;
     	//=> 'unicorns'

     	await $$`echo rainbows`;
     	//=> 'rainbows'
     	```
     	*/
    	(options: Options_2<undefined>): Execa$<StdoutStderrType>;
    	(options: Options_2): Execa$;
    	(options: Options_2<BufferEncodingOption>): Execa$<Buffer_2>;
    	(
    		templates: TemplateStringsArray,
    		...expressions: TemplateExpression[]
    	): ExecaChildProcess<StdoutStderrType>;

    	/**
     	Same as $\`command\` but synchronous.

     	@returns A `childProcessResult` object
     	@throws A `childProcessResult` error

     	@example <caption>Basic</caption>
     	```
     	import {$} from 'execa';

     	const branch = $.sync`git branch --show-current`;
     	$.sync`dep deploy --branch=${branch}`;
     	```

     	@example <caption>Multiple arguments</caption>
     	```
     	import {$} from 'execa';

     	const args = ['unicorns', '&', 'rainbows!'];
     	const {stdout} = $.sync`echo ${args}`;
     	console.log(stdout);
     	//=> 'unicorns & rainbows!'
     	```

     	@example <caption>With options</caption>
     	```
     	import {$} from 'execa';

     	$.sync({stdio: 'inherit'})`echo unicorns`;
     	//=> 'unicorns'
     	```

     	@example <caption>Shared options</caption>
     	```
     	import {$} from 'execa';

     	const $$ = $({stdio: 'inherit'});

     	$$.sync`echo unicorns`;
     	//=> 'unicorns'

     	$$.sync`echo rainbows`;
     	//=> 'rainbows'
     	```
     	*/
    	sync(
    		templates: TemplateStringsArray,
    		...expressions: TemplateExpression[]
    	): ExecaSyncReturnValue<StdoutStderrType>;
};

declare type ExecaChildProcess<StdoutStderrType extends StdoutStderrAll = string> = ChildProcess &
ExecaChildPromise<StdoutStderrType> &
Promise<ExecaReturnValue<StdoutStderrType>>;

declare type ExecaChildPromise<StdoutStderrType extends StdoutStderrAll> = {
    	/**
     	Stream combining/interleaving [`stdout`](https://nodejs.org/api/child_process.html#child_process_subprocess_stdout) and [`stderr`](https://nodejs.org/api/child_process.html#child_process_subprocess_stderr).

     	This is `undefined` if either:
     		- the `all` option is `false` (the default value)
     		- both `stdout` and `stderr` options are set to [`'inherit'`, `'ipc'`, `Stream` or `integer`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio)
     	*/
    	all?: Readable;

    	catch<ResultType = never>(
    		onRejected?: (reason: ExecaError<StdoutStderrType>) => ResultType | PromiseLike<ResultType>
    	): Promise<ExecaReturnValue<StdoutStderrType> | ResultType>;

    	/**
     	Same as the original [`child_process#kill()`](https://nodejs.org/api/child_process.html#child_process_subprocess_kill_signal), except if `signal` is `SIGTERM` (the default value) and the child process is not terminated after 5 seconds, force it by sending `SIGKILL`. Note that this graceful termination does not work on Windows, because Windows [doesn't support signals](https://nodejs.org/api/process.html#process_signal_events) (`SIGKILL` and `SIGTERM` has the same effect of force-killing the process immediately.) If you want to achieve graceful termination on Windows, you have to use other means, such as [`taskkill`](https://github.com/sindresorhus/taskkill).
     	*/
    	kill(signal?: string, options?: KillOptions): void;

    	/**
     	Similar to [`childProcess.kill()`](https://nodejs.org/api/child_process.html#child_process_subprocess_kill_signal). This used to be preferred when cancelling the child process execution as the error is more descriptive and [`childProcessResult.isCanceled`](#iscanceled) is set to `true`. But now this is deprecated and you should either use `.kill()` or the `signal` option when creating the child process.
     	*/
    	cancel(): void;

    	/**
     	[Pipe](https://nodejs.org/api/stream.html#readablepipedestination-options) the child process's `stdout` to `target`, which can be:
     	- Another `execa()` return value
     	- A writable stream
     	- A file path string

     	If the `target` is another `execa()` return value, it is returned. Otherwise, the original `execa()` return value is returned. This allows chaining `pipeStdout()` then `await`ing the final result.

     	The `stdout` option] must be kept as `pipe`, its default value.
     	*/
    	pipeStdout?<Target extends ExecaChildPromise<StdoutStderrAll>>(target: Target): Target;
    	pipeStdout?(target: Writable | string): ExecaChildProcess<StdoutStderrType>;

    	/**
     	Like `pipeStdout()` but piping the child process's `stderr` instead.

     	The `stderr` option must be kept as `pipe`, its default value.
     	*/
    	pipeStderr?<Target extends ExecaChildPromise<StdoutStderrAll>>(target: Target): Target;
    	pipeStderr?(target: Writable | string): ExecaChildProcess<StdoutStderrType>;

    	/**
     	Combines both `pipeStdout()` and `pipeStderr()`.

     	Either the `stdout` option or the `stderr` option must be kept as `pipe`, their default value. Also, the `all` option must be set to `true`.
     	*/
    	pipeAll?<Target extends ExecaChildPromise<StdoutStderrAll>>(target: Target): Target;
    	pipeAll?(target: Writable | string): ExecaChildProcess<StdoutStderrType>;
};

declare type ExecaError<StdoutStderrType extends StdoutStderrAll = string> = {
    	/**
     	The output of the process with `stdout` and `stderr` interleaved.

     	This is `undefined` if either:
     	- the `all` option is `false` (default value)
     	- `execaSync()` was used
     	*/
    	all?: StdoutStderrType;

    	/**
     	Whether the process was canceled.
     	*/
    	isCanceled: boolean;
} & ExecaSyncError<StdoutStderrType>;

declare type ExecaReturnBase<StdoutStderrType extends StdoutStderrAll> = {
    	/**
     	The file and arguments that were run, for logging purposes.

     	This is not escaped and should not be executed directly as a process, including using `execa()` or `execaCommand()`.
     	*/
    	command: string;

    	/**
     	Same as `command` but escaped.

     	This is meant to be copy and pasted into a shell, for debugging purposes.
     	Since the escaping is fairly basic, this should not be executed directly as a process, including using `execa()` or `execaCommand()`.
     	*/
    	escapedCommand: string;

    	/**
     	The numeric exit code of the process that was run.
     	*/
    	exitCode: number;

    	/**
     	The output of the process on stdout.
     	*/
    	stdout: StdoutStderrType;

    	/**
     	The output of the process on stderr.
     	*/
    	stderr: StdoutStderrType;

    	/**
     	Whether the process failed to run.
     	*/
    	failed: boolean;

    	/**
     	Whether the process timed out.
     	*/
    	timedOut: boolean;

    	/**
     	Whether the process was killed.
     	*/
    	killed: boolean;

    	/**
     	The name of the signal that was used to terminate the process. For example, `SIGFPE`.

     	If a signal terminated the process, this property is defined and included in the error message. Otherwise it is `undefined`.
     	*/
    	signal?: string;

    	/**
     	A human-friendly description of the signal that was used to terminate the process. For example, `Floating point arithmetic error`.

     	If a signal terminated the process, this property is defined and included in the error message. Otherwise it is `undefined`. It is also `undefined` when the signal is very uncommon which should seldomly happen.
     	*/
    	signalDescription?: string;

    	/**
     	The `cwd` of the command if provided in the command options. Otherwise it is `process.cwd()`.
     	*/
    	cwd: string;
};

/**
 Result of a child process execution. On success this is a plain object. On failure this is also an `Error` instance.

 The child process fails when:
 - its exit code is not `0`
 - it was killed with a signal
 - timing out
 - being canceled
 - there's not enough memory or there are already too many child processes
 */
declare type ExecaReturnValue<StdoutStderrType extends StdoutStderrAll = string> = {
    	/**
     	The output of the process with `stdout` and `stderr` interleaved.

     	This is `undefined` if either:
     	- the `all` option is `false` (default value)
     	- `execaSync()` was used
     	*/
    	all?: StdoutStderrType;

    	/**
     	Whether the process was canceled.

     	You can cancel the spawned process using the [`signal`](https://github.com/sindresorhus/execa#signal-1) option.
     	*/
    	isCanceled: boolean;
} & ExecaSyncReturnValue<StdoutStderrType>;

declare type ExecaSyncError<StdoutStderrType extends StdoutStderrAll = string> = {
    	/**
     	Error message when the child process failed to run. In addition to the underlying error message, it also contains some information related to why the child process errored.

     	The child process stderr then stdout are appended to the end, separated with newlines and not interleaved.
     	*/
    	message: string;

    	/**
     	This is the same as the `message` property except it does not include the child process stdout/stderr.
     	*/
    	shortMessage: string;

    	/**
     	Original error message. This is the same as the `message` property except it includes neither the child process stdout/stderr nor some additional information added by Execa.

     	This is `undefined` unless the child process exited due to an `error` event or a timeout.
     	*/
    	originalMessage?: string;
} & Error & ExecaReturnBase<StdoutStderrType>;

declare type ExecaSyncReturnValue<StdoutStderrType extends StdoutStderrAll = string> = {
} & ExecaReturnBase<StdoutStderrType>;

/**
 * Where dose this code execute:
 * "node" = Code is Executed by Node or similar environment.
 * "browser" = Code is Executed by a Browser.
 * @public
 */
export declare type ExecutionEnvironment = "node" | "browser";

declare interface ExistingDecodedSourceMap {
    	file?: string;
    	readonly mappings: SourceMapSegment[][];
    	names: string[];
    	sourceRoot?: string;
    	sources: string[];
    	sourcesContent?: string[];
    	version: number;
    	x_google_ignoreList?: number[];
}

declare interface ExistingRawSourceMap {
    	file?: string;
    	mappings: string;
    	names: string[];
    	sourceRoot?: string;
    	sources: string[];
    	sourcesContent?: string[];
    	version: number;
    	x_google_ignoreList?: number[];
}

/**
 * Exit the current process.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function exit(): TaskFunction;

/**
 * Exit the current process asynchronously.
 * @param code - exit code to use (default = 0)
 * @public
 */
declare function exit_2(code?: number): void;

/**
 * Exists the gulp task after all tasks finished in series.
 * @param tasks - A list of task functions wich are executed in series.
 * @returns
 * @public
 */
declare function exitAfter(...tasks: TaskFunction[]): TaskFunction;

/**
 * Options on how to generate an entrypoint.
 * @public
 */
export declare interface ExportOpts extends Partial<Omit<DefaultExportOpts, "outputs" | "inputFile" | "prod">>, Partial<OutputOpts> {
    /**
     * An callback function wich is called for each Entrypoint.
     * Used to modify the Entrypoint Options and name before the config is normalized.
     * If it returns undefined the entrypoint options are not changed.
     * @param exportName - the Name of the Entrypoint
     * @param options - the options for the current entrypoint
     * @returns the New Entrypoint Options wich should be used or undefined. Can return a Promise.
     */
    hookOptions?(exportName: string, options: ExportOpts): Promise<[string, ExportOpts] | undefined> | [string, ExportOpts] | undefined;
    /**
     * An Array of OutputOpts each defining an bundle to emit.
     * Overrides the default outputs wich are generated.
     * by default it will analyse the package.json type field and use that format.
     * If the type field is undefined, it will generate both es and commonjs.
     * .cts or .mts extensions take precedence over the package.json type field.
     */
    outputs?: OutputsOpts;
}

/**
 * A string[] or Map with Options with entrypoints.
 * @public
 */
export declare type ExportsOpts = string[] | {
    [key: string]: ExportOpts;
};

/**
 * What type of package is compiled:
 * "app" = A standalone Application. It will be distributed as a whole (dependencies are bundled).
 * "lib" = A library wich will be eventually be used by an Application (dependencies are not bundled).
 * @public
 */
export declare type ExportType = "app" | "lib";

declare interface Extensions {
    [k: string]: ("commonjs" | "module") | undefined;
}

declare type ExternalOption =
	| (string | RegExp)[]
	| string
	| RegExp
	| ((source: string, importer: string | undefined, isResolved: boolean) => boolean | NullValue);

/**
 * Used with {@link IConfigMessageReportingRule.logLevel} and {@link IExtractorInvokeOptions.messageCallback}.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare enum ExtractorLogLevel {
    /**
     * The message will be displayed as an error.
     *
     * @remarks
     * Errors typically cause the build to fail and return a nonzero exit code.
     */
    Error = "error",
    /**
     * The message will be displayed as an warning.
     *
     * @remarks
     * Warnings typically cause a production build fail and return a nonzero exit code.  For a non-production build
     * (e.g. using the `--local` option with `api-extractor run`), the warning is displayed but the build will not fail.
     */
    Warning = "warning",
    /**
     * The message will be displayed as an informational message.
     *
     * @remarks
     * Informational messages may contain newlines to ensure nice formatting of the output,
     * however word-wrapping is the responsibility of the message handler.
     */
    Info = "info",
    /**
     * The message will be displayed only when "verbose" output is requested, e.g. using the `--verbose`
     * command line option.
     */
    Verbose = "verbose",
    /**
     * The message will be discarded entirely.
     */
    None = "none"
}

declare interface FetchReleaseOptions extends RepoInfo {
    getRelease: (owner: string, repo: string) => Promise<OctokitRelease>;
    getAsset?: (version: string, assets: OctokitReleaseAssets) => OctokitReleaseAssets[number] | undefined;
    accessToken?: string;
    destination?: string;
    shouldExtract?: boolean;
}

/**
 * returns the absolute path of a file in the project.
 * @param relPath - path to the file relative to the project.
 * @returns the absolute path of the file.
 * @public
 */
declare function file(relPath: string): string;

/**
 * A valid `picomatch` glob pattern, or array of patterns.
 */
declare type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null;

/**
 * Finds the temporary project folder of the pnpm dlx operation.
 * @param packagePath - path inside the js-build-tool.
 * @returns the upper most folder with node_modules inside.
 * @public
 */
declare function findDlxPath(packagePath: string): string;

/**
 * Finds the path where js-build-tool was installed by pnpm.
 * @param start - path inside the js-build-tool.
 * @returns path to the folder named "js-build-tool".
 * @public
 */
declare function findJsBuildToolPath(start: string): string;

declare type FirstPluginHooks =
	| 'load'
	| 'renderDynamicImport'
	| 'resolveDynamicImport'
	| 'resolveFileUrl'
	| 'resolveId'
	| 'resolveImportMeta'
	| 'shouldTransformCachedModule';

declare interface FlexibleCompilerOptions extends CompilerOptions {
    [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined | any;
}

declare interface Font {
    /**
     * Specify whether or not quotation marks should be used around font family names
     */
    "font-family-name-quotes"?: (
    | null
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | [])
    | [
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    ),
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | [])
    | [
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    ),
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | [])
    | [
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    ),
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | [])
    | [
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    ),
    (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule) &
    (
    | ((
    | ("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {})
    | CoreRule
    ) &
    string)
    | (("always-where-required" | "always-where-recommended" | "always-unless-keyword" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    /**
     * Require numeric or named (where possible) `font-weight` values. Also, when named values are expected, require only valid names
     */
    "font-weight-notation"?: (
    | null
    | ("numeric" | "named-where-possible" | [])
    | [
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    ),
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("numeric" | "named-where-possible" | [])
    | [
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    ),
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("numeric" | "named-where-possible" | [])
    | [
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    ),
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("numeric" | "named-where-possible" | [])
    | [
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    ),
    (("numeric" | "named-where-possible" | {}) | CoreRule) &
    (
    | ((("numeric" | "named-where-possible" | {}) | CoreRule) & string)
    | (("numeric" | "named-where-possible" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    [k: string]: unknown | undefined;
}

declare interface FormatOptions {
    ascii_only?: boolean;
    /** @deprecated Not implemented anymore */
    beautify?: boolean;
    braces?: boolean;
    comments?: boolean | 'all' | 'some' | RegExp | ( (node: any, comment: {
        value: string,
        type: 'comment1' | 'comment2' | 'comment3' | 'comment4',
        pos: number,
        line: number,
        col: number,
    }) => boolean );
    ecma?: ECMA;
    ie8?: boolean;
    keep_numbers?: boolean;
    indent_level?: number;
    indent_start?: number;
    inline_script?: boolean;
    keep_quoted_props?: boolean;
    max_line_len?: number | false;
    preamble?: string;
    preserve_annotations?: boolean;
    quote_keys?: boolean;
    quote_style?: OutputQuoteStyle;
    safari10?: boolean;
    semicolons?: boolean;
    shebang?: boolean;
    shorthand?: boolean;
    source_map?: SourceMapOptions;
    webkit?: boolean;
    width?: number;
    wrap_iife?: boolean;
    wrap_func_args?: boolean;
}

declare interface Function_2 {
    "function-blacklist"?: ArrayStringRule3;
    "function-calc-no-unspaced-operator"?: BooleanRule10;
    "function-comma-newline-after"?: NewlineRule4;
    "function-comma-newline-before"?: NewlineRule5;
    "function-comma-space-after"?: SpaceRule2;
    "function-comma-space-before"?: SpaceRule3;
    "function-linear-gradient-no-nonstandard-direction"?: BooleanRule11;
    "function-max-empty-lines"?: IntegerRule1;
    /**
     * Specify lowercase or uppercase for function names
     */
    "function-name-case"?: (
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "function-parentheses-newline-inside"?: NewlineRule6;
    "function-parentheses-space-inside"?: SpaceRule4;
    "function-url-data-uris"?: AlwaysNeverRule5;
    "function-url-no-scheme-relative"?: BooleanRule12;
    "function-url-quotes"?: AlwaysNeverRule6;
    "function-url-scheme-whitelist"?: ArrayStringRule4;
    "function-whitelist"?: ArrayStringRule5;
    "function-whitespace-after"?: AlwaysNeverRule7;
    [k: string]: unknown | undefined;
}

declare interface FunctionPluginHooks {
    	augmentChunkHash: (this: PluginContext, chunk: RenderedChunk) => string | void;
    	buildEnd: (this: PluginContext, error?: Error) => void;
    	buildStart: (this: PluginContext, options: NormalizedInputOptions) => void;
    	closeBundle: (this: PluginContext) => void;
    	closeWatcher: (this: PluginContext) => void;
    	generateBundle: (
    		this: PluginContext,
    		options: NormalizedOutputOptions,
    		bundle: OutputBundle,
    		isWrite: boolean
    	) => void;
    	load: LoadHook;
    	moduleParsed: ModuleParsedHook;
    	onLog: (this: MinimalPluginContext, level: LogLevel, log: RollupLog) => boolean | NullValue;
    	options: (this: MinimalPluginContext, options: InputOptions) => InputOptions | NullValue;
    	outputOptions: (this: PluginContext, options: OutputOptions) => OutputOptions | NullValue;
    	renderChunk: RenderChunkHook;
    	renderDynamicImport: (
    		this: PluginContext,
    		options: {
        			customResolution: string | null;
        			format: InternalModuleFormat;
        			moduleId: string;
        			targetModuleId: string | null;
        		}
    	) => { left: string; right: string } | NullValue;
    	renderError: (this: PluginContext, error?: Error) => void;
    	renderStart: (
    		this: PluginContext,
    		outputOptions: NormalizedOutputOptions,
    		inputOptions: NormalizedInputOptions
    	) => void;
    	resolveDynamicImport: ResolveDynamicImportHook;
    	resolveFileUrl: ResolveFileUrlHook;
    	resolveId: ResolveIdHook;
    	resolveImportMeta: ResolveImportMetaHook;
    	shouldTransformCachedModule: ShouldTransformCachedModuleHook;
    	transform: TransformHook;
    	watchChange: WatchChangeHook;
    	writeBundle: (
    		this: PluginContext,
    		options: NormalizedOutputOptions,
    		bundle: OutputBundle
    	) => void;
}

/**
 * URL to a website with details about how to fund the package.
 */
declare type FundingUrl = string;

/**
 * Used to inform about ways to help fund development of the package.
 */
declare interface FundingWay {
    url: FundingUrl;
    /**
     * The type of funding or the platform through which funding can be provided, e.g. patreon, opencollective, tidelift or github.
     */
    type?: string;
}

declare interface GeneralSheet {
    /**
     * Specify indentation
     */
    indentation?: (
    | (null | number)
    | ("tab" | [])
    | [number, ...number[]]
    | [
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    ),
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | (null | number)
    | ("tab" | [])
    | [number, ...number[]]
    | [
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    ),
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    )
    ]
    ))
    | (number &
    (
    | (null | number)
    | ("tab" | [])
    | [number, ...number[]]
    | [
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    ),
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | (null | number)
    | ("tab" | [])
    | [number, ...number[]]
    | [
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    ),
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | (null | number)
    | ("tab" | [])
    | [number, ...number[]]
    | [
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    ),
    (number | ("tab" | {}) | CoreRule) &
    (
    | ((number | ("tab" | {}) | CoreRule) & number)
    | ((number | ("tab" | {}) | CoreRule) & string)
    | (number | ("tab" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    "max-empty-lines"?: IntegerRule2;
    /**
     * Limit the length of a line
     */
    "max-line-length"?: (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ))
    | (number &
    (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ))
    | ((
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ) &
    unknown[])
    );
    /**
     * Limit the allowed nesting depth
     */
    "max-nesting-depth"?: (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ))
    | (number &
    (
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ))
    | ((
    | (null | number)
    | [
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule)),
    (number | CoreRule) & (((number | CoreRule) & number) | (number | CoreRule))
    ]
    ) &
    unknown[])
    );
    /**
     * Disallow browser hacks that are irrelevant to the browsers you are targeting
     */
    "no-browser-hacks"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "no-descending-specificity"?: BooleanRule13;
    "no-duplicate-selectors"?: BooleanRule14;
    "no-empty-source"?: BooleanRule15;
    /**
     * Disallow end-of-line whitespace
     */
    "no-eol-whitespace"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "no-extra-semicolons"?: BooleanRule16;
    /**
     * Disallow colors that are suspiciously close to being identical
     */
    "no-indistinguishable-colors"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "no-invalid-double-slash-comments"?: BooleanRule17;
    "no-missing-end-of-source-newline"?: BooleanRule18;
    "no-unknown-animations"?: BooleanRule19;
    "unicode-bom"?: AlwaysNeverRule8;
    /**
     * Disallow features that are unsupported by the browsers that you are targeting
     */
    "no-unsupported-browser-features"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    [k: string]: unknown | undefined;
}

declare interface GeneratedCodeOptions extends Partial<NormalizedGeneratedCodeOptions> {
    	preset?: GeneratedCodePreset;
}

declare type GeneratedCodePreset = 'es5' | 'es2015';

/**
 * Reads the Dependencies field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns a Map of all dependencies.
 * @public
 */
declare function getDependencies(path?: string, cache?: boolean): Promise<Dependency>;

/**
 * Reads the DevDependencies field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns a Map of all devDependencies.
 * @public
 */
declare function getDevDependencies(path?: string, cache?: boolean): Promise<Dependency>;

declare type GetInterop = (id: string | null) => InteropType;

declare type GetManualChunk = (id: string, meta: ManualChunkMeta) => string | NullValue;

declare type GetModuleInfo = (moduleId: string) => ModuleInfo | null;

/**
 * Reads the node version to use under enginesToUse.node of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the type of the project package.json file ("commonjs" | "module" | undefined).
 * @public
 */
declare function getNodeVersionToUse(path?: string, cache?: boolean): Promise<string | undefined>;

/**
 * Reads the main field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the main entry point of the project package.json file.
 * @public
 */
declare function getPackageMain(path?: string, cache?: boolean): Promise<string | undefined>;

/**
 * Reads the name field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the type of the project package.json file ("commonjs" | "module" | undefined).
 * @public
 */
declare function getPackageName(path?: string, cache?: boolean): Promise<string | undefined>;

/**
 * Reads the type field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the type of the project package.json file ("commonjs" | "module" | undefined).
 * @public
 */
declare function getPackageType(path?: string, cache?: boolean): Promise<JSONSchemaForNPMPackageJsonFiles["type"]>;

/**
 * Reads the version field of the package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the type of the project package.json file ("commonjs" | "module" | undefined).
 * @public
 */
declare function getPackageVersion(path?: string, cache?: boolean): Promise<string | undefined>;

/**
 * Returns a list of Workspace Packages defined in pnpm-workspace.yaml.
 * @public
 */
declare function getPnpmPackages(): Promise<string[] | undefined>;

/**
 * Calculates the paths to the generated test files.
 * @param defaultConfigOpts - Normalized ConfigOptions returned from build.
 * @returns An Array of files wich includes the tests.
 * @public
 */
declare function getTestFiles(defaultConfigOpts: DefaultConfigOpts): string[];

/**
 * Reads the exports field of the package.json file and returns the top level export paths.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns an string[] containing all top level exports.
 * @public
 */
declare function getTopLevelExports(path?: string, cache?: boolean): Promise<string[]>;

/**
 * Set each global variable name equal to true to allow the variable to be overwritten or false to disallow overwriting.
 */
declare interface Globals {
    [k: string]: (("readonly" | "writable" | "off") | boolean) | undefined;
}

declare type GlobalsOption = { [name: string]: string } | ((name: string) => string);

/**
 * The name of the gulpfile.
 * @public
 */
declare const gulpFileName = "gulpfile.mjs";

/**
 * The path to the gulpfile.
 * @public
 */
declare const gulpFilePath: string;

declare type HashCharacters = 'base64' | 'base36' | 'hex';

declare type HasModuleSideEffects = (id: string, external: boolean) => boolean;

declare interface HttpsJsonSchemastoreOrgJscpdJson {
    /**
     * minimum size of code block in lines to check for duplication
     */
    minLines?: number;
    /**
     * maximum size of source file in lines to check for duplication
     */
    maxLines?: number;
    /**
     * maximum size of source file in bytes to check for duplication (e.g.,: 1kb, 1mb, 120kb)
     */
    maxSize?: string | number;
    /**
     * minimum size of code block in tokens to check for duplication
     */
    minTokens?: number;
    /**
     * maximum allowed duplicate lines expressed as a percentage; exit with error and exit code 1 when threshold exceeded
     */
    threshold?: number;
    /**
     * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts); see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    formatsExts?: {
        [k: string]: string[] | undefined;
    };
    /**
     * path to directory for non-console reports
     */
    output?: string;
    /**
     * paths that should be included in duplicate detection (default: [process.cwd()])
     */
    path?: string[];
    /**
     * glob pattern for files that should be included in duplicate detection (e.g., ** /*.txt); only used to filter directories configured via path option
     */
    pattern?: string;
    /**
     * ignore code blocks matching these regular expressions
     */
    ignorePattern?: string[];
    /**
     * mode of detection quality; see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
     */
    mode?: "mild" | "strict" | "weak";
    /**
     * glob pattern for files that should be excluded from duplicate detection
     */
    ignore?: string[];
    /**
     * list of formats for which to detect duplication (default: all); see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
     */
    format?: (
    | "abap"
    | "actionscript"
    | "ada"
    | "apacheconf"
    | "apl"
    | "applescript"
    | "arduino"
    | "arff"
    | "asciidoc"
    | "asm6502"
    | "aspnet"
    | "autohotkey"
    | "autoit"
    | "bash"
    | "basic"
    | "batch"
    | "bison"
    | "brainfuck"
    | "bro"
    | "c"
    | "c-header"
    | "clike"
    | "clojure"
    | "coffeescript"
    | "comments"
    | "cpp"
    | "cpp-header"
    | "crystal"
    | "csharp"
    | "csp"
    | "css-extras"
    | "css"
    | "d"
    | "dart"
    | "diff"
    | "django"
    | "docker"
    | "eiffel"
    | "elixir"
    | "elm"
    | "erb"
    | "erlang"
    | "flow"
    | "fortran"
    | "fsharp"
    | "gedcom"
    | "gherkin"
    | "git"
    | "glsl"
    | "go"
    | "graphql"
    | "groovy"
    | "haml"
    | "handlebars"
    | "haskell"
    | "haxe"
    | "hpkp"
    | "hsts"
    | "http"
    | "ichigojam"
    | "icon"
    | "inform7"
    | "ini"
    | "io"
    | "j"
    | "java"
    | "javascript"
    | "jolie"
    | "json"
    | "jsx"
    | "julia"
    | "keymap"
    | "kotlin"
    | "latex"
    | "less"
    | "liquid"
    | "lisp"
    | "livescript"
    | "lolcode"
    | "lua"
    | "makefile"
    | "markdown"
    | "markup"
    | "matlab"
    | "mel"
    | "mizar"
    | "monkey"
    | "n4js"
    | "nasm"
    | "nginx"
    | "nim"
    | "nix"
    | "nsis"
    | "objectivec"
    | "ocaml"
    | "opencl"
    | "oz"
    | "parigp"
    | "pascal"
    | "perl"
    | "php"
    | "plsql"
    | "powershell"
    | "processing"
    | "prolog"
    | "properties"
    | "protobuf"
    | "pug"
    | "puppet"
    | "pure"
    | "python"
    | "q"
    | "qore"
    | "r"
    | "reason"
    | "renpy"
    | "rest"
    | "rip"
    | "roboconf"
    | "ruby"
    | "rust"
    | "sas"
    | "sass"
    | "scala"
    | "scheme"
    | "scss"
    | "smalltalk"
    | "smarty"
    | "soy"
    | "sql"
    | "stylus"
    | "swift"
    | "tap"
    | "tcl"
    | "textile"
    | "tsx"
    | "tt2"
    | "twig"
    | "typescript"
    | "vbnet"
    | "velocity"
    | "verilog"
    | "vhdl"
    | "vim"
    | "visual-basic"
    | "wasm"
    | "url"
    | "wiki"
    | "xeora"
    | "xojo"
    | "xquery"
    | "yaml"
    )[];
    /**
     * store used to collect information about code (default: in-memory store); install @jscpd/leveldb-store and use leveldb for big repositories
     */
    store?: "leveldb" | "redis";
    /**
     * a list of reporters to use to output information about duplication; see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
     */
    reporters?: (
    | "xml"
    | "json"
    | "csv"
    | "markdown"
    | "consoleFull"
    | "html"
    | "console"
    | "silent"
    | "threshold"
    | "xcode"
    )[];
    /**
     * get information about authors and dates of duplicated blocks from Git
     */
    blame?: boolean;
    /**
     * do not write duplicate detection progress and result to console
     */
    silent?: boolean;
    /**
     * show full information during duplicate detection
     */
    verbose?: boolean;
    /**
     * use absolute paths in reports
     */
    absolute?: boolean;
    /**
     * do not follow symlinks
     */
    noSymLinks?: boolean;
    /**
     * skip duplicates within folders; just detect cross-folder duplicates
     */
    skipLocal?: boolean;
    /**
     * ignore case of symbols in code (experimental)
     */
    ignoreCase?: boolean;
    /**
     * ignore all files from .gitignore file
     */
    gitignore?: boolean;
    reportersOptions?: {
        badge?: {
            /**
             * output path for duplication level badge (default: path.join(output, 'jscpd-badge.svg'))
             */
            path?: string;
            /**
             * badge subject text (URL-encoding needed for spaces or special characters)
             */
            label?: string;
            /**
             * badge label color (name or RGB code without #); see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
             */
            labelColor?:
            | ("green" | "blue" | "red" | "yellow" | "orange" | "purple" | "pink" | "grey" | "gray" | "cyan" | "black")
            | string;
            /**
             * badge value text (URL-encoding needed for spaces or special characters, default: duplication %)
             */
            status?: string;
            /**
             * badge color (name or RGB code without #, default: green if beneath threshold, red if above threshold, grey if threshold not set); see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
             */
            color?:
            | ("green" | "blue" | "red" | "yellow" | "orange" | "purple" | "pink" | "grey" | "gray" | "cyan" | "black")
            | string;
            /**
             * badge look: flat or classic
             */
            style?: "flat" | "classic";
            /**
             * URL for icon to display in front of badge subject text (e.g., data:image/svg+xml;base64,...)
             */
            icon?: string;
            /**
             * SVG width of icon to display in front of badge subject text; set this if icon is not square
             */
            iconWidth?: number;
            /**
             * size of badge relative to default of 1
             */
            scale?: number;
        };
    };
    /**
     * exit code to use when at least one duplicate code block is detected but threshold is not exceeded
     */
    exitCode?: number;
}

/**
 * Configures how the API report files (*.api.md) will be generated.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigApiReport {
    /**
     * Whether to generate an API report.
     */
    enabled: boolean;
    /**
     * The filename for the API report files.  It will be combined with `reportFolder` or `reportTempFolder` to produce
     * a full output filename.
     *
     * @remarks
     * The file extension should be ".api.md", and the string should not contain a path separator such as `\` or `/`.
     */
    reportFileName?: string;
    /**
     * Specifies the folder where the API report file is written.  The file name portion is determined by
     * the `reportFileName` setting.
     *
     * @remarks
     * The API report file is normally tracked by Git.  Changes to it can be used to trigger a branch policy,
     * e.g. for an API review.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    reportFolder?: string;
    /**
     * Specifies the folder where the temporary report file is written.  The file name portion is determined by
     * the `reportFileName` setting.
     *
     * @remarks
     * After the temporary file is written to disk, it is compared with the file in the `reportFolder`.
     * If they are different, a production build will fail.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    reportTempFolder?: string;
    /**
     * Whether "forgotten exports" should be included in the API report file.
     *
     * @remarks
     * Forgotten exports are declarations flagged with `ae-forgotten-export` warnings. See
     * https://api-extractor.com/pages/messages/ae-forgotten-export/ to learn more.
     *
     * @defaultValue `false`
     */
    includeForgottenExports?: boolean;
}

/**
 * Determines how the TypeScript compiler engine will be invoked by API Extractor.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigCompiler {
    /**
     * Specifies the path to the tsconfig.json file to be used by API Extractor when analyzing the project.
     *
     * @remarks
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     *
     * Note: This setting will be ignored if `overrideTsconfig` is used.
     */
    tsconfigFilePath?: string;
    /**
     * Provides a compiler configuration that will be used instead of reading the tsconfig.json file from disk.
     *
     * @remarks
     * The value must conform to the TypeScript tsconfig schema:
     *
     * http://json.schemastore.org/tsconfig
     *
     * If omitted, then the tsconfig.json file will instead be read from the projectFolder.
     */
    overrideTsconfig?: {};
    /**
     * This option causes the compiler to be invoked with the `--skipLibCheck` option.
     *
     * @remarks
     * This option is not recommended and may cause API Extractor to produce incomplete or incorrect declarations,
     * but it may be required when dependencies contain declarations that are incompatible with the TypeScript engine
     * that API Extractor uses for its analysis.  Where possible, the underlying issue should be fixed rather than
     * relying on skipLibCheck.
     */
    skipLibCheck?: boolean;
}

/**
 * Configures how the doc model file (*.api.json) will be generated.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigDocModel {
    /**
     * Whether to generate a doc model file.
     */
    enabled: boolean;
    /**
     * The output path for the doc model file.  The file extension should be ".api.json".
     *
     * @remarks
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    apiJsonFilePath?: string;
    /**
     * Whether "forgotten exports" should be included in the doc model file.
     *
     * @remarks
     * Forgotten exports are declarations flagged with `ae-forgotten-export` warnings. See
     * https://api-extractor.com/pages/messages/ae-forgotten-export/ to learn more.
     *
     * @defaultValue `false`
     */
    includeForgottenExports?: boolean;
    /**
     * The base URL where the project's source code can be viewed on a website such as GitHub or
     * Azure DevOps. This URL path corresponds to the `<projectFolder>` path on disk.
     *
     * @remarks
     * This URL is concatenated with the file paths serialized to the doc model to produce URL file paths to individual API items.
     * For example, if the `projectFolderUrl` is "https://github.com/microsoft/rushstack/tree/main/apps/api-extractor" and an API
     * item's file path is "api/ExtractorConfig.ts", the full URL file path would be
     * "https://github.com/microsoft/rushstack/tree/main/apps/api-extractor/api/ExtractorConfig.js".
     *
     * Can be omitted if you don't need source code links in your API documentation reference.
     */
    projectFolderUrl?: string;
}

/**
 * Configures how the .d.ts rollup file will be generated.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigDtsRollup {
    /**
     * Whether to generate the .d.ts rollup file.
     */
    enabled: boolean;
    /**
     * Specifies the output path for a .d.ts rollup file to be generated without any trimming.
     *
     * @remarks
     * This file will include all declarations that are exported by the main entry point.
     *
     * If the path is an empty string, then this file will not be written.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    untrimmedFilePath?: string;
    /**
     * Specifies the output path for a .d.ts rollup file to be generated with trimming for an "alpha" release.
     *
     * @remarks
     * This file will include only declarations that are marked as `@public`, `@beta`, or `@alpha`.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    alphaTrimmedFilePath?: string;
    /**
     * Specifies the output path for a .d.ts rollup file to be generated with trimming for a "beta" release.
     *
     * @remarks
     * This file will include only declarations that are marked as `@public` or `@beta`.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    betaTrimmedFilePath?: string;
    /**
     * Specifies the output path for a .d.ts rollup file to be generated with trimming for a "public" release.
     *
     * @remarks
     * This file will include only declarations that are marked as `@public`.
     *
     * If the path is an empty string, then this file will not be written.
     *
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     */
    publicTrimmedFilePath?: string;
    /**
     * When a declaration is trimmed, by default it will be replaced by a code comment such as
     * "Excluded from this release type: exampleMember".  Set "omitTrimmingComments" to true to remove the
     * declaration completely.
     */
    omitTrimmingComments?: boolean;
}

/**
 * Configuration options for the API Extractor tool.  These options can be constructed programmatically
 * or loaded from the api-extractor.json config file using the {@link ExtractorConfig} class.
 *
 * @public
 */
declare interface IConfigFile {
    /**
     * Optionally specifies another JSON config file that this file extends from.  This provides a way for
     * standard settings to be shared across multiple projects.
     *
     * @remarks
     * If the path starts with `./` or `../`, the path is resolved relative to the folder of the file that contains
     * the `extends` field.  Otherwise, the first path segment is interpreted as an NPM package name, and will be
     * resolved using NodeJS `require()`.
     */
    extends?: string;
    /**
     * Determines the `<projectFolder>` token that can be used with other config file settings.  The project folder
     * typically contains the tsconfig.json and package.json config files, but the path is user-defined.
     *
     * @remarks
     *
     * The path is resolved relative to the folder of the config file that contains the setting.
     *
     * The default value for `projectFolder` is the token `<lookup>`, which means the folder is determined using
     * the following heuristics:
     *
     * If the config/rig.json system is used (as defined by {@link https://www.npmjs.com/package/@rushstack/rig-package
     * | @rushstack/rig-package}), then the `<lookup>` value will be the package folder that referenced the rig.
     *
     * Otherwise, the `<lookup>` value is determined by traversing parent folders, starting from the folder containing
     * api-extractor.json, and stopping at the first folder that contains a tsconfig.json file.  If a tsconfig.json file
     * cannot be found in this way, then an error will be reported.
     */
    projectFolder?: string;
    /**
     * Specifies the .d.ts file to be used as the starting point for analysis.  API Extractor
     * analyzes the symbols exported by this module.
     *
     * @remarks
     *
     * The file extension must be ".d.ts" and not ".ts".
     * The path is resolved relative to the "projectFolder" location.
     */
    mainEntryPointFilePath: string;
    /**
     * A list of NPM package names whose exports should be treated as part of this package.
     *
     * @remarks
     *
     * For example, suppose that Webpack is used to generate a distributed bundle for the project `library1`,
     * and another NPM package `library2` is embedded in this bundle.  Some types from `library2` may become part
     * of the exported API for `library1`, but by default API Extractor would generate a .d.ts rollup that explicitly
     * imports `library2`.  To avoid this, we can specify:
     *
     * ```js
     *   "bundledPackages": [ "library2" ],
     * ```
     *
     * This would direct API Extractor to embed those types directly in the .d.ts rollup, as if they had been
     * local files for `library1`.
     */
    bundledPackages?: string[];
    /**
     * Specifies what type of newlines API Extractor should use when writing output files.
     *
     * @remarks
     * By default, the output files will be written with Windows-style newlines.
     * To use POSIX-style newlines, specify "lf" instead.
     * To use the OS's default newline kind, specify "os".
     */
    newlineKind?: 'crlf' | 'lf' | 'os';
    /**
     * Set to true when invoking API Extractor's test harness.
     * @remarks
     * When `testMode` is true, the `toolVersion` field in the .api.json file is assigned an empty string
     * to prevent spurious diffs in output files tracked for tests.
     */
    testMode?: boolean;
    /**
     * Specifies how API Extractor sorts members of an enum when generating the .api.json file.
     *
     * @remarks
     * By default, the output files will be sorted alphabetically, which is "by-name".
     * To keep the ordering in the source code, specify "preserve".
     *
     * @defaultValue `by-name`
     */
    enumMemberOrder?: EnumMemberOrder;
    /**
     * {@inheritDoc IConfigCompiler}
     */
    compiler?: IConfigCompiler;
    /**
     * {@inheritDoc IConfigApiReport}
     */
    apiReport?: IConfigApiReport;
    /**
     * {@inheritDoc IConfigDocModel}
     */
    docModel?: IConfigDocModel;
    /**
     * {@inheritDoc IConfigDtsRollup}
     * @beta
     */
    dtsRollup?: IConfigDtsRollup;
    /**
     * {@inheritDoc IConfigTsdocMetadata}
     * @beta
     */
    tsdocMetadata?: IConfigTsdocMetadata;
    /**
     * {@inheritDoc IExtractorMessagesConfig}
     */
    messages?: IExtractorMessagesConfig;
}

/**
 * Configures reporting for a given message identifier.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigMessageReportingRule {
    /**
     * Specifies whether the message should be written to the the tool's output log.
     *
     * @remarks
     * Note that the `addToApiReportFile` property may supersede this option.
     */
    logLevel: ExtractorLogLevel;
    /**
     * When `addToApiReportFile` is true:  If API Extractor is configured to write an API report file (.api.md),
     * then the message will be written inside that file; otherwise, the message is instead logged according to
     * the `logLevel` option.
     */
    addToApiReportFile?: boolean;
}

/**
 * Specifies a table of reporting rules for different message identifiers, and also the default rule used for
 * identifiers that do not appear in the table.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigMessageReportingTable {
    /**
     * The key is a message identifier for the associated type of message, or "default" to specify the default policy.
     * For example, the key might be `TS2551` (a compiler message), `tsdoc-link-tag-unescaped-text` (a TSDOc message),
     * or `ae-extra-release-tag` (a message related to the API Extractor analysis).
     */
    [messageId: string]: IConfigMessageReportingRule;
}

/**
 * Configures how the tsdoc-metadata.json file will be generated.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IConfigTsdocMetadata {
    /**
     * Whether to generate the tsdoc-metadata.json file.
     */
    enabled: boolean;
    /**
     * Specifies where the TSDoc metadata file should be written.
     *
     * @remarks
     * The path is resolved relative to the folder of the config file that contains the setting; to change this,
     * prepend a folder token such as `<projectFolder>`.
     *
     * The default value is `<lookup>`, which causes the path to be automatically inferred from the `tsdocMetadata`,
     * `typings` or `main` fields of the project's package.json.  If none of these fields are set, the lookup
     * falls back to `tsdoc-metadata.json` in the package folder.
     */
    tsdocMetadataFilePath?: string;
}

/**
 * Configures how API Extractor reports error and warning messages produced during analysis.
 *
 * @remarks
 * This is part of the {@link IConfigFile} structure.
 *
 * @public
 */
declare interface IExtractorMessagesConfig {
    /**
     * Configures handling of diagnostic messages generating the TypeScript compiler while analyzing the
     * input .d.ts files.
     */
    compilerMessageReporting?: IConfigMessageReportingTable;
    /**
     * Configures handling of messages reported by API Extractor during its analysis.
     */
    extractorMessageReporting?: IConfigMessageReportingTable;
    /**
     * Configures handling of messages reported by the TSDoc parser when analyzing code comments.
     */
    tsdocMessageReporting?: IConfigMessageReportingTable;
}

/**
 * Installs all dependencies of the package using pnpm.
 * Will use the frozen lockfile in Production mode.
 * Can directly be used as an Rollup Task.
 * @param majorMinorPatch - how to increment the version string (same as [pnpm version ***](https://docs.npmjs.com/cli/v8/commands/npm-version)) (default = "patch").
 * @returns A Gulp Task.
 * @public
 */
declare function incrementVersion(semverInc?: CountVersionOption): TaskFunction;

/**
 * Installs all dependencies of the package using pnpm.
 * Will use the frozen lockfile in Production mode.
 * @param majorMinorPatch - how to increment the version string (same as [pnpm version ***](https://docs.npmjs.com/cli/v8/commands/npm-version)) (default = "patch").
 * @public
 */
declare function incrementVersion_2(semverInc?: CountVersionOption): Promise<void>;

declare enum InlineFunctions {
    Disabled = 0,
    SimpleFunctions = 1,
    WithArguments = 2,
    WithArgumentsAndVariables = 3
}

declare type InputOption = string | string[] | { [entryAlias: string]: string };

declare interface InputOptions {
    	cache?: boolean | RollupCache;
    	context?: string;
    	experimentalCacheExpiry?: number;
    	experimentalLogSideEffects?: boolean;
    	external?: ExternalOption;
    	input?: InputOption;
    	logLevel?: LogLevelOption;
    	makeAbsoluteExternalsRelative?: boolean | 'ifRelativeSource';
    	maxParallelFileOps?: number;
    	moduleContext?: ((id: string) => string | NullValue) | { [id: string]: string };
    	onLog?: LogHandlerWithDefault;
    	onwarn?: WarningHandlerWithDefault;
    	perf?: boolean;
    	plugins?: InputPluginOption;
    	preserveEntrySignatures?: PreserveEntrySignaturesOption;
    	preserveSymlinks?: boolean;
    	shimMissingExports?: boolean;
    	strictDeprecations?: boolean;
    	treeshake?: boolean | TreeshakingPreset | TreeshakingOptions;
    	watch?: WatcherOptions | false;
}

declare type InputPluginOption = MaybePromise<Plugin | NullValue | false | InputPluginOption[]>;

/**
 * Installs all dependencies of the package using pnpm.
 * Will use the frozen lockfile in Production mode.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function installDependencies(): TaskFunction;

/**
 * Installs all dependencies of the package using pnpm.
 * Will use the frozen lockfile in Production mode.
 * @public
 */
declare function installDependencies_2(): Promise<void>;

/**
 * Limit the number of declaration within a single line declaration block
 */
declare type IntegerRule = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of adjacent empty lines within functions
 */
declare type IntegerRule1 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of adjacent empty lines
 */
declare type IntegerRule2 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of decimal places allowed in numbers
 */
declare type IntegerRule3 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of compound selectors in a selector
 */
declare type IntegerRule4 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of adjacent empty lines within selectors
 */
declare type IntegerRule5 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the number of adjacent empty lines within value lists
 */
declare type IntegerRule6 = (
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| (number &
(
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
))
| ((
| (null | number)
| [
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & number) | ({} | CoreRule))
]
) &
unknown[])
);

declare type InternalModuleFormat = 'amd' | 'cjs' | 'es' | 'iife' | 'system' | 'umd';

declare type InteropType = 'compat' | 'auto' | 'esModule' | 'default' | 'defaultOnly';

declare type IsExternal = (
	source: string,
	importer: string | undefined,
	isResolved: boolean
) => boolean;

/**
 * Returns if it was run in production mode.
 * @returns true when it is in production mode.
 * @public
 */
declare function isProd(): boolean;

/**
 * Path where the js-build-tool was installed.
 * @public
 */
declare const jsBuildToolPath: string;

/** JSON representation of Typescript compiler options */
declare type JsonCompilerOptions = Omit<FlexibleCompilerOptions, EnumCompilerOptions> &
Record<EnumCompilerOptions, string>;

declare interface JSONSchemaForESLintConfigurationFiles {
    ecmaFeatures?: EcmaFeatures;
    env?: Env;
    /**
     * If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string | string[];
    globals?: Globals;
    /**
     * Prevent comments from changing config or rules
     */
    noInlineConfig?: boolean;
    parser?: string;
    parserOptions?: ParserOptions;
    plugins?: Plugins;
    /**
     * By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, set this to `true` in a configuration in the root of your project.
     */
    root?: boolean;
    /**
     * Tell ESLint to ignore specific files and directories. Each value uses the same pattern as the `.eslintignore` file.
     */
    ignorePatterns?: string | string[];
    rules?: Rules;
    settings?: Settings;
    overrides?: Overrides;
    [k: string]: unknown | undefined;
}

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

declare type JSONSchemaForNPMPackageJsonFiles = JSONSchemaForNPMPackageJsonFiles1 & JSONSchemaForNPMPackageJsonFiles2;

declare type JSONSchemaForNPMPackageJsonFiles1 = {
    [k: string]: unknown | undefined;
};

declare interface JSONSchemaForNPMPackageJsonFiles2 {
    /**
     * The name of the package.
     */
    name?: string;
    /**
     * Version must be parseable by node-semver, which is bundled with npm as a dependency.
     */
    version?: string;
    /**
     * This helps people discover your package, as it's listed in 'npm search'.
     */
    description?: string;
    /**
     * This helps people discover your package as it's listed in 'npm search'.
     */
    keywords?: string[];
    /**
     * The url to the project homepage.
     */
    homepage?: string;
    /**
     * The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
     */
    bugs?:
    | {
        /**
         * The url to your project's issue tracker.
         */
        url?: string;
        /**
         * The email address to which issues should be reported.
         */
        email?: string;
        [k: string]: unknown | undefined;
    }
    | string;
    /**
     * You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.
     */
    license?: string;
    /**
     * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or { "license": "(MIT OR Apache-2.0)" } see: 'https://docs.npmjs.com/files/package.json#license'.
     */
    licenses?: {
        type?: string;
        url?: string;
        [k: string]: unknown | undefined;
    }[];
    author?: Person;
    /**
     * A list of people who contributed to this package.
     */
    contributors?: Person1[];
    /**
     * A list of people who maintains this package.
     */
    maintainers?: Person1[];
    /**
     * The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.
     */
    files?: string[];
    /**
     * The main field is a module ID that is the primary entry point to your program.
     */
    main?: string;
    /**
     * The "exports" field is used to restrict external access to non-exported module files, also enables a module to import itself using "name".
     */
    exports?:
    | (string | null)
    | {
        /**
         * The module path that is resolved when the module specifier matches "name", shadows the "main" field.
         */
        "."?: PackageExportsEntry | PackageExportsFallback;
        /**
         * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^\./.+".
         */
        [k: string]: PackageExportsEntry | PackageExportsFallback | undefined;
    }
    | PackageExportsEntryObject1
    | PackageExportsFallback1;
    bin?:
    | string
    | {
        [k: string]: string | undefined;
    };
    /**
     * When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.
     */
    type?: "commonjs" | "module";
    /**
     * Set the types property to point to your bundled declaration file.
     */
    types?: string;
    /**
     * Note that the "typings" field is synonymous with "types", and could be used as well.
     */
    typings?: string;
    /**
     * The "typesVersions" field is used since TypeScript 3.1 to support features that were only made available in newer TypeScript versions.
     */
    typesVersions?: {
        /**
         * Contains overrides for the TypeScript version that matches the version range matching the property key.
         */
        [k: string]:
        | {
            /**
             * Maps all file paths to the file paths specified in the array.
             */
            "*"?: string[];
        }
        | undefined;
    };
    /**
     * Specify either a single file or an array of filenames to put in place for the man program to find.
     */
    man?: string[] | string;
    directories?: {
        /**
         * If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.
         */
        bin?: string;
        /**
         * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
         */
        doc?: string;
        /**
         * Put example scripts in here. Someday, it might be exposed in some clever way.
         */
        example?: string;
        /**
         * Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.
         */
        lib?: string;
        /**
         * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
         */
        man?: string;
        test?: string;
        [k: string]: unknown | undefined;
    };
    /**
     * Specify the place where your code lives. This is helpful for people who want to contribute.
     */
    repository?:
    | {
        type?: string;
        url?: string;
        directory?: string;
        [k: string]: unknown | undefined;
    }
    | string;
    funding?: FundingUrl | FundingWay | [FundingUrl | FundingWay, ...(FundingUrl | FundingWay)[]];
    /**
     * The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.
     */
    scripts?: {
        /**
         * Run code quality tools, e.g. ESLint, TSLint, etc.
         */
        lint?: string;
        /**
         * Run BEFORE the package is published (Also run on local npm install without any arguments).
         */
        prepublish?: string;
        /**
         * Run both BEFORE the package is packed and published, and on local npm install without any arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
         */
        prepare?: string;
        /**
         * Run BEFORE the package is prepared and packed, ONLY on npm publish.
         */
        prepublishOnly?: string;
        /**
         * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git dependencies).
         */
        prepack?: string;
        /**
         * Run AFTER the tarball has been generated and moved to its final destination.
         */
        postpack?: string;
        /**
         * Publishes a package to the registry so that it can be installed by name. See https://docs.npmjs.com/cli/v8/commands/npm-publish
         */
        publish?: string;
        postpublish?: ScriptsPublishAfter;
        /**
         * Run BEFORE the package is installed.
         */
        preinstall?: string;
        install?: ScriptsInstallAfter;
        postinstall?: ScriptsInstallAfter;
        preuninstall?: ScriptsUninstallBefore;
        uninstall?: ScriptsUninstallBefore;
        /**
         * Run AFTER the package is uninstalled.
         */
        postuninstall?: string;
        preversion?: ScriptsVersionBefore;
        version?: ScriptsVersionBefore;
        /**
         * Run AFTER bump the package version.
         */
        postversion?: string;
        pretest?: ScriptsTest;
        test?: ScriptsTest;
        posttest?: ScriptsTest;
        prestop?: ScriptsStop;
        stop?: ScriptsStop;
        poststop?: ScriptsStop;
        prestart?: ScriptsStart;
        start?: ScriptsStart;
        poststart?: ScriptsStart;
        prerestart?: ScriptsRestart;
        restart?: ScriptsRestart;
        postrestart?: ScriptsRestart;
        /**
         * Start dev server to serve application files
         */
        serve?: string;
        [k: string]: string | undefined | undefined;
    };
    /**
     * A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.
     */
    config?: {
        [k: string]: unknown | undefined;
    };
    dependencies?: Dependency;
    devDependencies?: Dependency;
    optionalDependencies?: Dependency;
    peerDependencies?: Dependency;
    /**
     * When a user installs your package, warnings are emitted if packages specified in "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to provide more information on how your peer dependencies are utilized. Most commonly, it allows peer dependencies to be marked as optional. Metadata for this field is specified with a simple hash of the package name to a metadata object.
     */
    peerDependenciesMeta?: {
        [k: string]:
        | {
            /**
             * Specifies that this peer dependency is optional and should not be installed automatically.
             */
            optional?: boolean;
            [k: string]: unknown | undefined;
        }
        | undefined;
    };
    /**
     * Array of package names that will be bundled when publishing the package.
     */
    bundledDependencies?: string[] | boolean;
    /**
     * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
     */
    bundleDependencies?: string[] | boolean;
    /**
     * Resolutions is used to support selective version resolutions using yarn, which lets you define custom package versions or ranges inside your dependencies. For npm, use overrides instead. See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
     */
    resolutions?: {
        [k: string]: unknown | undefined;
    };
    /**
     * Overrides is used to support selective version overrides using npm, which lets you define custom package versions or ranges inside your dependencies. For yarn, use resolutions instead. See: https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
     */
    overrides?: {
        [k: string]: unknown | undefined;
    };
    /**
     * Defines which package manager is expected to be used when working on the current project. This field is currently experimental and needs to be opted-in; see https://nodejs.org/api/corepack.html
     */
    packageManager?: string;
    engines?: {
        node?: string;
        [k: string]: string | undefined;
    };
    engineStrict?: boolean;
    /**
     * Specify which operating systems your module will run on.
     */
    os?: string[];
    /**
     * Specify that your code only runs on certain cpu architectures.
     */
    cpu?: string[];
    /**
     * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is purely there for informational purposes. It is now recommended that you install any binaries as local devDependencies wherever possible.
     */
    preferGlobal?: boolean;
    /**
     * If set to true, then npm will refuse to publish it.
     */
    private?: boolean | ("false" | "true");
    publishConfig?: {
        access?: "public" | "restricted";
        tag?: string;
        registry?: string;
        [k: string]: unknown | undefined;
    };
    dist?: {
        shasum?: string;
        tarball?: string;
        [k: string]: unknown | undefined;
    };
    readme?: string;
    /**
     * An ECMAScript module ID that is the primary entry point to your program.
     */
    module?: string;
    /**
     * A module ID with untranspiled code that is the primary entry point to your program.
     */
    esnext?:
    | string
    | {
        main?: string;
        browser?: string;
        [k: string]: string | undefined;
    };
    /**
     * Allows packages within a directory to depend on one another using direct linking of local files. Additionally, dependencies within a workspace are hoisted to the workspace root when possible to reduce duplication. Note: It's also a good idea to set "private" to true when using this feature.
     */
    workspaces?:
    | string[]
    | {
        /**
         * Workspace package paths. Glob patterns are supported.
         */
        packages?: string[];
        /**
         * Packages to block from hoisting to the workspace root. Currently only supported in Yarn only.
         */
        nohoist?: string[];
        [k: string]: unknown | undefined;
    };
    jspm?: JSONSchemaForNPMPackageJsonFiles1;
    eslintConfig?: JSONSchemaForESLintConfigurationFiles;
    prettier?: SchemaForPrettierrc;
    stylelint?: JSONSchemaForTheStylelintConfigurationFiles;
    ava?: AVAConfigSchema;
    release?: SemanticReleaseSchema;
    jscpd?: HttpsJsonSchemastoreOrgJscpdJson;
    /**
     * Any property starting with _ is valid.
     *
     * This interface was referenced by `JSONSchemaForNPMPackageJsonFiles2`'s JSON-Schema definition
     * via the `patternProperty` "^_".
     */
    [k: string]: any;
}

declare interface JSONSchemaForTheStylelintConfigurationFiles {
    extends?: SimpleStringOrArrayStringRule;
    plugins?: SimpleArrayStringRule1;
    /**
     * Specify a custom syntax to use on your code.
     */
    customSyntax?: string;
    /**
     * Provide rule and behavior overrides for files that match particular glob patterns.
     */
    overrides?: {
        files?: string[];
        customSyntax?: string;
        rules?: AllRules;
        [k: string]: unknown | undefined;
    }[];
    /**
     * Processors are functions that hook into stylelint's pipeline, modifying code on its way into stylelint and modifying results on their way out
     */
    processors?: (
    | string
    | []
    | [
    string,
    ...{
        [k: string]: unknown | undefined;
    }[]
    ]
    )[];
    /**
     * Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty * /) comments.
     */
    ignoreDisables?: boolean;
    ignoreFiles?: SimpleStringOrArrayStringRule1;
    /**
     * The default severity level for all rules that do not have a severity specified in their secondary options
     */
    defaultSeverity?: "warning" | "error";
    reportDescriptionlessDisables?: BooleanRule38;
    reportInvalidScopeDisables?: BooleanRule39;
    reportNeedlessDisables?: BooleanRule40;
    rules?: AllRules;
    [k: string]: unknown | undefined;
}

declare interface KeyframeDeclaration {
    "keyframe-declaration-no-important"?: BooleanRule20;
    [k: string]: unknown | undefined;
}

declare type KillOptions = {
    	/**
     	Milliseconds to wait for the child process to terminate before sending `SIGKILL`.

     	Can be disabled with `false`.

     	@default 5000
     	*/
    	forceKillAfterTimeout?: number | false;
};

declare interface Legacy {
    "max-depth"?: number | ("off" | "warn" | "error") | unknown[];
    "max-len"?: number | ("off" | "warn" | "error") | unknown[];
    "max-params"?: number | ("off" | "warn" | "error") | unknown[];
    "max-statements"?: number | ("off" | "warn" | "error") | unknown[];
    "no-bitwise"?: number | ("off" | "warn" | "error") | unknown[];
    "no-plusplus"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

declare interface Length {
    "length-zero-no-unit"?: BooleanRule21;
    [k: string]: unknown | undefined;
}

declare type LoadHook = (this: PluginContext, id: string) => LoadResult;

declare type LoadResult = SourceDescription | string | NullValue;

declare type LoggingFunction = (log: RollupLog | string | (() => RollupLog | string)) => void;

declare type LoggingFunctionWithPosition = (
	log: RollupLog | string | (() => RollupLog | string),
	pos?: number | { column: number; line: number }
) => void;

declare type LogHandler = (level: LogLevel, log: RollupLog) => void;

declare type LogHandlerWithDefault = (
	level: LogLevel,
	log: RollupLog,
	defaultHandler: LogOrStringHandler
) => void;

declare type LogLevel = 'warn' | 'info' | 'debug';

declare type LogLevelOption = LogLevel | 'silent';

declare type LogOrStringHandler = (level: LogLevel | 'error', log: RollupLog | string) => void;

/**
 * Specify lowercase or uppercase for at-rules names
 */
declare type LowerUpperRule = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for hex colors
 */
declare type LowerUpperRule1 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for media feature names
 */
declare type LowerUpperRule2 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for properties
 */
declare type LowerUpperRule3 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for pseudo-class selectors
 */
declare type LowerUpperRule4 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for pseudo-element selectors
 */
declare type LowerUpperRule5 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for type selectors
 */
declare type LowerUpperRule6 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify lowercase or uppercase for units
 */
declare type LowerUpperRule7 = (
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
))
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("lower" | "upper" | [])
| [
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
(("lower" | "upper" | {}) | CoreRule) &
(((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
]
) &
unknown[])
);

declare type MakeAsync<Function_> = Function_ extends (
	this: infer This,
	...parameters: infer Arguments
) => infer Return
	? (this: This, ...parameters: Arguments) => Return | Promise<Return>
	: never;

/**
 * ManageDependencies Rollup Plugin for managing bundled dependencies.
 * Either marks dependencies as External (are not bundled) or Blacklisted (Error when part of bundle).
 * @param config - Object defining External/Blacklisted Packages/Paths.
 * @returns Rollup Plugin Instance.
 * @public
 */
declare function manageDependencies(config: ManageDependenciesConfig): Plugin;

/**
 * Configuration Options for the ManageDependencies Rollup Plugin.
 * @public
 */
declare interface ManageDependenciesConfig {
    /**
     * Array of Packages/Paths wich should not be bundled.
     */
    external?: string[];
    /**
     * Array of Packages/Paths wich result in an Error when part of the bundle.
     */
    blacklist?: string[];
}

declare interface MangleOptions {
    eval?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fnames?: boolean | RegExp;
    module?: boolean;
    nth_identifier?: SimpleIdentifierMangler | WeightedIdentifierMangler;
    properties?: boolean | ManglePropertiesOptions;
    reserved?: string[];
    safari10?: boolean;
    toplevel?: boolean;
}

declare interface ManglePropertiesOptions {
    builtins?: boolean;
    debug?: boolean;
    keep_quoted?: boolean | 'strict';
    nth_identifier?: SimpleIdentifierMangler | WeightedIdentifierMangler;
    regex?: RegExp | string;
    reserved?: string[];
}

declare interface ManualChunkMeta {
    	getModuleIds: () => IterableIterator<string>;
    	getModuleInfo: GetModuleInfo;
}

declare type ManualChunksOption = { [chunkAlias: string]: string[] } | GetManualChunk;

declare type MaybePromise<T> = T | Promise<T>;

declare interface MediaFeature {
    "media-feature-colon-space-after"?: AlwaysNeverRule9;
    "media-feature-colon-space-before"?: AlwaysNeverRule10;
    "media-feature-name-case"?: LowerUpperRule2;
    /**
     * Disallow unknown media feature names
     */
    "media-feature-name-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "media-feature-name-no-vendor-prefix"?: BooleanRule22;
    "media-feature-no-missing-punctuation"?: BooleanRule23;
    "media-feature-parentheses-space-inside"?: AlwaysNeverRule11;
    "media-feature-range-operator-space-after"?: AlwaysNeverRule12;
    "media-feature-range-operator-space-before"?: AlwaysNeverRule13;
    [k: string]: unknown | undefined;
}

declare interface MediaQueryList {
    "media-query-list-comma-newline-after"?: NewlineRule7;
    "media-query-list-comma-newline-before"?: NewlineRule8;
    "media-query-list-comma-space-after"?: SpaceRule5;
    "media-query-list-comma-space-before"?: SpaceRule6;
    [k: string]: unknown | undefined;
}

declare interface MinifyOptions {
    compress?: boolean | CompressOptions;
    ecma?: ECMA;
    enclose?: boolean | string;
    ie8?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fnames?: boolean | RegExp;
    mangle?: boolean | MangleOptions;
    module?: boolean;
    nameCache?: object;
    format?: FormatOptions;
    /** @deprecated */
    output?: FormatOptions;
    parse?: ParseOptions;
    safari10?: boolean;
    sourceMap?: boolean | SourceMapOptions;
    toplevel?: boolean;
}

declare interface MinimalPluginContext {
    	debug: LoggingFunction;
    	error: (error: RollupError | string) => never;
    	info: LoggingFunction;
    	meta: PluginContextMeta;
    	warn: LoggingFunction;
}

declare type ModuleFormat = InternalModuleFormat | 'commonjs' | 'esm' | 'module' | 'systemjs';

declare interface ModuleInfo extends ModuleOptions {
    	ast: ProgramNode | null;
    	code: string | null;
    	dynamicImporters: readonly string[];
    	dynamicallyImportedIdResolutions: readonly ResolvedId[];
    	dynamicallyImportedIds: readonly string[];
    	exportedBindings: Record<string, string[]> | null;
    	exports: string[] | null;
    	hasDefaultExport: boolean | null;
    	id: string;
    	implicitlyLoadedAfterOneOf: readonly string[];
    	implicitlyLoadedBefore: readonly string[];
    	importedIdResolutions: readonly ResolvedId[];
    	importedIds: readonly string[];
    	importers: readonly string[];
    	isEntry: boolean;
    	isExternal: boolean;
    	isIncluded: boolean | null;
}

declare interface ModuleJSON extends TransformModuleJSON, ModuleOptions {
    	ast: ProgramNode;
    	dependencies: string[];
    	id: string;
    	resolvedIds: ResolvedIdMap;
    	transformFiles: EmittedFile[] | undefined;
}

declare interface ModuleOptions {
    	attributes: Record<string, string>;
    	meta: CustomPluginOptions;
    	moduleSideEffects: boolean | 'no-treeshake';
    	syntheticNamedExports: boolean | string;
}

declare type ModuleParsedHook = (this: PluginContext, info: ModuleInfo) => void;

declare type ModuleSideEffectsOption = boolean | 'no-external' | string[] | HasModuleSideEffects;

/**
 * Require a newline or disallow whitespace before the closing brace of blocks
 */
declare type NewlineRule = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline after the opening brace of blocks
 */
declare type NewlineRule1 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace before the commas of selector lists
 */
declare type NewlineRule10 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the commas of value lists
 */
declare type NewlineRule11 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace before the commas of value lists
 */
declare type NewlineRule12 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the semicolons of declaration blocks
 */
declare type NewlineRule2 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace before the semicolons of declaration blocks
 */
declare type NewlineRule3 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the commas of functions
 */
declare type NewlineRule4 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace before the commas of functions
 */
declare type NewlineRule5 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace on the inside of the parentheses of functions
 */
declare type NewlineRule6 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the commas of media query lists
 */
declare type NewlineRule7 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace before the commas of media query lists
 */
declare type NewlineRule8 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the commas of selector lists
 */
declare type NewlineRule9 = (
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "always-multi-line" | "never-multi-line" | [])
| [
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
),
(("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
(
| ((("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
| (("always" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the closing brace of blocks
 */
declare type NewlineSpaceRule = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
(
| (null &
(
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
))
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
string)
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the closing brace of blocks
 */
declare type NewlineSpaceRule1 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
(
| (null &
(
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
))
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
string)
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the opening brace of blocks
 */
declare type NewlineSpaceRule2 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
(
| (null &
(
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
))
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
string)
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
unknown[])
);

/**
 * Require a newline or disallow whitespace after the closing brace of blocks
 */
declare type NewlineSpaceWithIgnoreRule = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
string)
| (
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
string)
| (
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
)
)
]
) &
(
| (null &
(
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
))
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
string)
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the opening brace of blocks
 */
declare type NewlineSpaceWithIgnoreRule1 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | [])
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
string)
| (
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
string)
| (
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
)
)
]
) &
(
| (null &
(
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
))
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
string)
| ((
| null
| (
| "always"
| "never"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| []
)
| [
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
),
(
| ("always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line" | {})
| CoreRule
) &
(
| ((
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
) &
string)
| (
| (
| "always"
| "always-single-line"
| "never-single-line"
| "always-multi-line"
| "never-multi-line"
| {}
)
| CoreRule
)
)
]
) &
unknown[])
);

declare interface NodeAndCommonJs {
    /**
     * Require return statements after callbacks
     */
    "callback-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require require() calls to be placed at top-level module scope
     */
    "global-require"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require error handling in callbacks
     */
    "handle-callback-err"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow use of the Buffer() constructor
     */
    "no-buffer-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow require calls to be mixed with regular var declarations
     */
    "no-mixed-requires"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow new operators with calls to require
     */
    "no-new-require"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow string concatenation with __dirname and __filename
     */
    "no-path-concat"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of process.env
     */
    "no-process-env"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of process.exit()
     */
    "no-process-exit"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified modules when loaded by require
     */
    "no-restricted-modules"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow synchronous methods
     */
    "no-sync"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

/**
 * The node_modules folder inside the temporary project folder of the pnpm dlx operation.
 * @public
 */
declare const nodeModulesPath: string;

declare type NormalizedAmdOptions = (
	| {
    			autoId: false;
    			id?: string;
    	  }
	| {
    			autoId: true;
    			basePath: string;
    	  }
) & {
    	define: string;
    	forceJsExtensionForImports: boolean;
};

declare interface NormalizedGeneratedCodeOptions {
    	arrowFunctions: boolean;
    	constBindings: boolean;
    	objectShorthand: boolean;
    	reservedNamesAsProps: boolean;
    	symbols: boolean;
}

declare interface NormalizedInputOptions {
    	cache: false | undefined | RollupCache;
    	context: string;
    	experimentalCacheExpiry: number;
    	experimentalLogSideEffects: boolean;
    	external: IsExternal;
    	input: string[] | { [entryAlias: string]: string };
    	logLevel: LogLevelOption;
    	makeAbsoluteExternalsRelative: boolean | 'ifRelativeSource';
    	maxParallelFileOps: number;
    	moduleContext: (id: string) => string;
    	onLog: LogHandler;
    	perf: boolean;
    	plugins: Plugin[];
    	preserveEntrySignatures: PreserveEntrySignaturesOption;
    	preserveSymlinks: boolean;
    	shimMissingExports: boolean;
    	strictDeprecations: boolean;
    	treeshake: false | NormalizedTreeshakingOptions;
}

declare interface NormalizedOutputOptions {
    	amd: NormalizedAmdOptions;
    	assetFileNames: string | ((chunkInfo: PreRenderedAsset) => string);
    	banner: AddonFunction;
    	chunkFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
    	compact: boolean;
    	dir: string | undefined;
    	dynamicImportInCjs: boolean;
    	entryFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
    	esModule: boolean | 'if-default-prop';
    	experimentalMinChunkSize: number;
    	exports: 'default' | 'named' | 'none' | 'auto';
    	extend: boolean;
    	/** @deprecated Use "externalImportAttributes" instead. */
    	externalImportAssertions: boolean;
    	externalImportAttributes: boolean;
    	externalLiveBindings: boolean;
    	file: string | undefined;
    	footer: AddonFunction;
    	format: InternalModuleFormat;
    	freeze: boolean;
    	generatedCode: NormalizedGeneratedCodeOptions;
    	globals: GlobalsOption;
    	hashCharacters: HashCharacters;
    	hoistTransitiveImports: boolean;
    	indent: true | string;
    	inlineDynamicImports: boolean;
    	interop: GetInterop;
    	intro: AddonFunction;
    	manualChunks: ManualChunksOption;
    	minifyInternalExports: boolean;
    	name: string | undefined;
    	noConflict: boolean;
    	outro: AddonFunction;
    	paths: OptionsPaths;
    	plugins: OutputPlugin[];
    	preserveModules: boolean;
    	preserveModulesRoot: string | undefined;
    	reexportProtoFromExternal: boolean;
    	sanitizeFileName: (fileName: string) => string;
    	sourcemap: boolean | 'inline' | 'hidden';
    	sourcemapBaseUrl: string | undefined;
    	sourcemapExcludeSources: boolean;
    	sourcemapFile: string | undefined;
    	sourcemapFileNames: string | ((chunkInfo: PreRenderedChunk) => string) | undefined;
    	sourcemapIgnoreList: SourcemapIgnoreListOption;
    	sourcemapPathTransform: SourcemapPathTransformOption | undefined;
    	strict: boolean;
    	systemNullSetters: boolean;
    	validate: boolean;
}

declare interface NormalizedTreeshakingOptions {
    	annotations: boolean;
    	correctVarValueBeforeDeclaration: boolean;
    	manualPureFunctions: readonly string[];
    	moduleSideEffects: HasModuleSideEffects;
    	propertyReadSideEffects: boolean | 'always';
    	tryCatchDeoptimization: boolean;
    	unknownGlobalSideEffects: boolean;
}

declare type NullValue = null | undefined | void;

declare interface Number_2 {
    "number-leading-zero"?: AlwaysNeverRule14;
    "number-max-precision"?: IntegerRule3;
    "number-no-trailing-zeros"?: BooleanRule24;
    [k: string]: unknown | undefined;
}

declare type ObjectHook<T, O = {}> = T | ({ handler: T; order?: 'pre' | 'post' | null } & O);

/**
 * Specify a blacklist of disallowed property and unit pairs within declarations
 */
declare type ObjectRule = (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
(
| (null &
(
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
))
| (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
)
| ((
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed property and unit pairs within declarations
 */
declare type ObjectRule1 = (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
(
| (null &
(
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
))
| (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
)
| ((
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
unknown[])
);

/**
 * Specify a blacklist of disallowed property and value pairs within declarations
 */
declare type ObjectRule2 = (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
(
| (null &
(
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
))
| (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
)
| ((
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed property and value pairs within declarations
 */
declare type ObjectRule3 = (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
(
| (null &
(
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
))
| (
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
)
| ((
| null
| {
    [k: string]: SimpleArrayStringRule;
}
| [CoreRule, CoreRule]
) &
unknown[])
);

declare type OctokitRelease = RestEndpointMethodTypes['repos']['getLatestRelease']['response'];

declare type OctokitReleaseAssets = OctokitRelease['data']['assets'];

declare type OmittedEstreeKeys =
	| 'loc'
	| 'range'
	| 'leadingComments'
	| 'trailingComments'
	| 'innerComments'
	| 'comments';

declare interface Options extends MinifyOptions {
    nameCache?: Record<string, any>;
    maxWorkers?: number;
}

declare type Options_2<EncodingType extends EncodingOption = DefaultEncodingOption> = {
    	/**
     	Write some input to the `stdin` of your binary.

     	If the input is a file, use the `inputFile` option instead.
     	*/
    	readonly input?: string | Buffer_2 | Readable;

    	/**
     	Use a file as input to the the `stdin` of your binary.

     	If the input is not a file, use the `input` option instead.
     	*/
    	readonly inputFile?: string;
} & CommonOptions<EncodingType>;

declare interface OptionsDefinition {
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens?: "always" | "avoid";
    /**
     * Put > of opening tags on the last line instead of on a new line.
     */
    bracketSameLine?: boolean;
    /**
     * Print spaces between brackets.
     */
    bracketSpacing?: boolean;
    /**
     * Print (to stderr) where a cursor at the given position would move to after formatting.
     * This option cannot be used with --range-start and --range-end.
     */
    cursorOffset?: number;
    /**
     * Whether parse the .editorconfig file in your project and convert its properties to the corresponding Prettier configuration. This configuration will be overridden by .prettierrc, etc.
     */
    editorconfig?: boolean;
    /**
     * Control how Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting?: "auto" | "off";
    /**
     * Which end of line characters to apply.
     */
    endOfLine?: "lf" | "crlf" | "cr" | "auto";
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
    /**
     * How to handle whitespaces in HTML.
     */
    htmlWhitespaceSensitivity?: "css" | "strict" | "ignore";
    /**
     * Insert @format pragma into file's first docblock comment.
     */
    insertPragma?: boolean;
    /**
     * Use single quotes in JSX.
     */
    jsxSingleQuote?: boolean;
    /**
     * Which parser to use.
     */
    parser?:
    | "flow"
    | "babel"
    | "babel-flow"
    | "babel-ts"
    | "typescript"
    | "acorn"
    | "espree"
    | "meriyah"
    | "css"
    | "less"
    | "scss"
    | "json"
    | "json5"
    | "json-stringify"
    | "graphql"
    | "markdown"
    | "mdx"
    | "vue"
    | "yaml"
    | "glimmer"
    | "html"
    | "angular"
    | "lwc"
    | string;
    /**
     * Custom directory that contains prettier plugins in node_modules subdirectory.
     * Overrides default behavior when plugins are searched relatively to the location of Prettier.
     * Multiple values are accepted.
     */
    pluginSearchDirs?: string[] | false;
    /**
     * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
     */
    plugins?: string[];
    /**
     * The line length where Prettier will try wrap.
     */
    printWidth?: number;
    /**
     * How to wrap prose.
     */
    proseWrap?: "always" | "never" | "preserve";
    /**
     * Change when properties in objects are quoted.
     */
    quoteProps?: "as-needed" | "consistent" | "preserve";
    /**
     * Format code ending at a given character offset (exclusive).
     * The range will extend forwards to the end of the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeEnd?: number;
    /**
     * Format code starting at a given character offset.
     * The range will extend backwards to the start of the first line containing the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeStart?: number;
    /**
     * Require either '@prettier' or '@format' to be present in the file's first docblock comment
     * in order for it to be formatted.
     */
    requirePragma?: boolean;
    /**
     * Print semicolons.
     */
    semi?: boolean;
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     */
    singleAttributePerLine?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Number of spaces per indentation level.
     */
    tabWidth?: number;
    /**
     * Print trailing commas wherever possible when multi-line.
     */
    trailingComma?: "es5" | "none" | "all";
    /**
     * Indent with tabs instead of spaces.
     */
    useTabs?: boolean;
    /**
     * Indent script and style tags in Vue files.
     */
    vueIndentScriptAndStyle?: boolean;
    [k: string]: unknown | undefined;
}

/**
 * The options to apply for this override.
 */
declare interface OptionsDefinition1 {
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens?: "always" | "avoid";
    /**
     * Put > of opening tags on the last line instead of on a new line.
     */
    bracketSameLine?: boolean;
    /**
     * Print spaces between brackets.
     */
    bracketSpacing?: boolean;
    /**
     * Print (to stderr) where a cursor at the given position would move to after formatting.
     * This option cannot be used with --range-start and --range-end.
     */
    cursorOffset?: number;
    /**
     * Whether parse the .editorconfig file in your project and convert its properties to the corresponding Prettier configuration. This configuration will be overridden by .prettierrc, etc.
     */
    editorconfig?: boolean;
    /**
     * Control how Prettier formats quoted code embedded in the file.
     */
    embeddedLanguageFormatting?: "auto" | "off";
    /**
     * Which end of line characters to apply.
     */
    endOfLine?: "lf" | "crlf" | "cr" | "auto";
    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    filepath?: string;
    /**
     * How to handle whitespaces in HTML.
     */
    htmlWhitespaceSensitivity?: "css" | "strict" | "ignore";
    /**
     * Insert @format pragma into file's first docblock comment.
     */
    insertPragma?: boolean;
    /**
     * Use single quotes in JSX.
     */
    jsxSingleQuote?: boolean;
    /**
     * Which parser to use.
     */
    parser?:
    | "flow"
    | "babel"
    | "babel-flow"
    | "babel-ts"
    | "typescript"
    | "acorn"
    | "espree"
    | "meriyah"
    | "css"
    | "less"
    | "scss"
    | "json"
    | "json5"
    | "json-stringify"
    | "graphql"
    | "markdown"
    | "mdx"
    | "vue"
    | "yaml"
    | "glimmer"
    | "html"
    | "angular"
    | "lwc"
    | string;
    /**
     * Custom directory that contains prettier plugins in node_modules subdirectory.
     * Overrides default behavior when plugins are searched relatively to the location of Prettier.
     * Multiple values are accepted.
     */
    pluginSearchDirs?: string[] | false;
    /**
     * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
     */
    plugins?: string[];
    /**
     * The line length where Prettier will try wrap.
     */
    printWidth?: number;
    /**
     * How to wrap prose.
     */
    proseWrap?: "always" | "never" | "preserve";
    /**
     * Change when properties in objects are quoted.
     */
    quoteProps?: "as-needed" | "consistent" | "preserve";
    /**
     * Format code ending at a given character offset (exclusive).
     * The range will extend forwards to the end of the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeEnd?: number;
    /**
     * Format code starting at a given character offset.
     * The range will extend backwards to the start of the first line containing the selected statement.
     * This option cannot be used with --cursor-offset.
     */
    rangeStart?: number;
    /**
     * Require either '@prettier' or '@format' to be present in the file's first docblock comment
     * in order for it to be formatted.
     */
    requirePragma?: boolean;
    /**
     * Print semicolons.
     */
    semi?: boolean;
    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     */
    singleAttributePerLine?: boolean;
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote?: boolean;
    /**
     * Number of spaces per indentation level.
     */
    tabWidth?: number;
    /**
     * Print trailing commas wherever possible when multi-line.
     */
    trailingComma?: "es5" | "none" | "all";
    /**
     * Indent with tabs instead of spaces.
     */
    useTabs?: boolean;
    /**
     * Indent script and style tags in Vue files.
     */
    vueIndentScriptAndStyle?: boolean;
    [k: string]: unknown | undefined;
}

declare type OptionsPaths = Record<string, string> | ((id: string) => string);

declare interface OutputAsset extends PreRenderedAsset {
    	fileName: string;
    	needsCodeReference: boolean;
}

declare interface OutputBundle {
    	[fileName: string]: OutputAsset | OutputChunk;
}

declare interface OutputChunk extends RenderedChunk {
    	code: string;
    	map: SourceMap | null;
    	sourcemapFileName: string | null;
    	preliminaryFileName: string;
}

/**
 * Output format for a bundle:
 * "es" = ECMAScript Module syntax (mjs).
 * "commonjs" = CommonJs Module Syntax (cjs).
 * @public
 */
export declare type OutputFormat = "es" | "commonjs";

declare interface OutputOptions {
    	amd?: AmdOptions;
    	assetFileNames?: string | ((chunkInfo: PreRenderedAsset) => string);
    	banner?: string | AddonFunction;
    	chunkFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
    	compact?: boolean;
    	// only required for bundle.write
    	dir?: string;
    	dynamicImportInCjs?: boolean;
    	entryFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
    	esModule?: boolean | 'if-default-prop';
    	experimentalMinChunkSize?: number;
    	exports?: 'default' | 'named' | 'none' | 'auto';
    	extend?: boolean;
    	/** @deprecated Use "externalImportAttributes" instead. */
    	externalImportAssertions?: boolean;
    	externalImportAttributes?: boolean;
    	externalLiveBindings?: boolean;
    	// only required for bundle.write
    	file?: string;
    	footer?: string | AddonFunction;
    	format?: ModuleFormat;
    	freeze?: boolean;
    	generatedCode?: GeneratedCodePreset | GeneratedCodeOptions;
    	globals?: GlobalsOption;
    	hashCharacters?: HashCharacters;
    	hoistTransitiveImports?: boolean;
    	indent?: string | boolean;
    	inlineDynamicImports?: boolean;
    	interop?: InteropType | GetInterop;
    	intro?: string | AddonFunction;
    	manualChunks?: ManualChunksOption;
    	minifyInternalExports?: boolean;
    	name?: string;
    	noConflict?: boolean;
    	outro?: string | AddonFunction;
    	paths?: OptionsPaths;
    	plugins?: OutputPluginOption;
    	preserveModules?: boolean;
    	preserveModulesRoot?: string;
    	reexportProtoFromExternal?: boolean;
    	sanitizeFileName?: boolean | ((fileName: string) => string);
    	sourcemap?: boolean | 'inline' | 'hidden';
    	sourcemapBaseUrl?: string;
    	sourcemapExcludeSources?: boolean;
    	sourcemapFile?: string;
    	sourcemapFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
    	sourcemapIgnoreList?: boolean | SourcemapIgnoreListOption;
    	sourcemapPathTransform?: SourcemapPathTransformOption;
    	strict?: boolean;
    	systemNullSetters?: boolean;
    	validate?: boolean;
}

/**
 * Options for how to generate
 * @public
 */
export declare interface OutputOpts extends Partial<Omit<DefaultOutputOpts, "outputFileName" | "outputFormat" | "file" | "declarationTarget" | "declarationSource">> {
    /**
     * An callback function wich is called for each Output.
     * Used to modify the Output Options before the config is normalized.
     * If it returns undefined the output options are not changed.
     * @param options - the options for the current output
     * @returns the New Output Options wich should be used or undefined. Can return a Promise.
     */
    hookOutputOptions?(options: OutputOpts): Promise<OutputOpts | undefined> | OutputOpts | undefined;
    /**
     * The file name of the generated bundle.
     */
    outputFileName: string;
    /**
     * What format the output should be (es or commenjs).
     */
    outputFormat: OutputFormat;
}

declare interface OutputPlugin
	extends Partial<{ [K in OutputPluginHooks]: PluginHooks[K] }>,
		Partial<{ [K in AddonHooks]: ObjectHook<AddonHook> }> {
    	cacheKey?: string;
    	name: string;
    	version?: string;
}

declare type OutputPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'outputOptions'
	| 'renderChunk'
	| 'renderDynamicImport'
	| 'renderError'
	| 'renderStart'
	| 'resolveFileUrl'
	| 'resolveImportMeta'
	| 'writeBundle';

declare type OutputPluginOption = MaybePromise<OutputPlugin | NullValue | false | OutputPluginOption[]>;

declare enum OutputQuoteStyle {
    PreferDouble = 0,
    AlwaysSingle = 1,
    AlwaysDouble = 2,
    AlwaysOriginal = 3
}

/**
 * An Array of OutputOpts each defining an bundle wich should be emitted.
 * @public
 */
export declare type OutputsOpts = OutputOpts[];

/**
 * Allows to override configuration for files and folders, specified by glob patterns
 */
declare type Overrides = {
    /**
     * Glob pattern for files to apply 'overrides' configuration, relative to the directory of the config file
     */
    files: string | [string, ...string[]];
    /**
     * If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.
     */
    extends?: string | string[];
    /**
     * If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration won't apply
     */
    excludedFiles?: string | string[];
    ecmaFeatures?: EcmaFeatures;
    env?: Env;
    globals?: Globals;
    parser?: string;
    parserOptions?: ParserOptions;
    plugins?: Plugins;
    /**
     * To specify a processor, specify the plugin name and processor name joined by a forward slash
     */
    processor?: string;
    rules?: Rules;
    settings?: Settings;
    overrides?: Overrides;
}[];

declare interface OverridesDefinition {
    /**
     * Provide a list of patterns to override prettier configuration.
     */
    overrides?: {
        /**
         * Include these files in this override.
         */
        files: string | string[];
        /**
         * Exclude these files from this override.
         */
        excludeFiles?: string | string[];
        options?: OptionsDefinition1;
    }[];
    [k: string]: unknown | undefined;
}

declare type PackageExportsEntry = PackageExportsEntryPath | PackageExportsEntryObject;

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in older environments, so it's recommended to use the fallback array option if support for those environments is a concern.
 */
declare interface PackageExportsEntryObject {
    /**
     * The module path that is resolved when this specifier is imported as a CommonJS module using the `require(...)` function.
     */
    require?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this specifier is imported as an ECMAScript module using an `import` declaration or the dynamic `import(...)` function.
     */
    import?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this environment is Node.js.
     */
    node?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when no other export type matches.
     */
    default?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved for TypeScript types when this specifier is imported. Should be listed before other conditions.
     */
    types?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this environment matches the property name.
     *
     * This interface was referenced by `PackageExportsEntryObject`'s JSON-Schema definition
     * via the `patternProperty` "^(?![\.0-9]).".
     *
     * This interface was referenced by `PackageExportsEntryObject1`'s JSON-Schema definition
     * via the `patternProperty` "^(?![\.0-9]).".
     */
    [k: string]: PackageExportsEntry | PackageExportsFallback | undefined;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in older environments, so it's recommended to use the fallback array option if support for those environments is a concern.
 */
declare interface PackageExportsEntryObject1 {
    /**
     * The module path that is resolved when this specifier is imported as a CommonJS module using the `require(...)` function.
     */
    require?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this specifier is imported as an ECMAScript module using an `import` declaration or the dynamic `import(...)` function.
     */
    import?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this environment is Node.js.
     */
    node?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when no other export type matches.
     */
    default?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved for TypeScript types when this specifier is imported. Should be listed before other conditions.
     */
    types?: PackageExportsEntry | PackageExportsFallback;
    /**
     * The module path that is resolved when this environment matches the property name.
     *
     * This interface was referenced by `PackageExportsEntryObject`'s JSON-Schema definition
     * via the `patternProperty` "^(?![\.0-9]).".
     *
     * This interface was referenced by `PackageExportsEntryObject1`'s JSON-Schema definition
     * via the `patternProperty` "^(?![\.0-9]).".
     */
    [k: string]: PackageExportsEntry | PackageExportsFallback | undefined;
}

/**
 * The module path that is resolved when this specifier is imported. Set to `null` to disallow importing this module.
 */
declare type PackageExportsEntryPath = string | null;

/**
 * Used to allow fallbacks in case this environment doesn't support the preceding entries.
 */
declare type PackageExportsFallback = PackageExportsEntry[];

/**
 * Used to allow fallbacks in case this environment doesn't support the preceding entries.
 */
declare type PackageExportsFallback1 = PackageExportsEntry[];

/**
 * The type of a package.json file.
 * @public
 */
declare type PackageJsonSchema = JSONSchemaForNPMPackageJsonFiles;

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 *
 * When the returned function is executed, the tasks or functions will be executed in parallel,
 * all being executed at the same time. If an error occurs, all execution will complete.
 * @param tasks - list of tasks.
 * @public
 */
declare const parallel: parallel_2;

declare type ParallelPluginHooks = Exclude<
	keyof FunctionPluginHooks | AddonHooks,
	FirstPluginHooks | SequentialPluginHooks
>;

declare type ParseAst = (
	input: string,
	options?: { allowReturnOutsideFunction?: boolean }
) => ProgramNode;

declare interface ParseOptions {
    bare_returns?: boolean;
    /** @deprecated legacy option. Currently, all supported EcmaScript is valid to parse. */
    ecma?: ECMA;
    html5_comments?: boolean;
    shebang?: boolean;
}

/**
 * The JavaScript language options to be supported
 */
declare interface ParserOptions {
    ecmaFeatures?: EcmaFeatures;
    /**
     * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022 (same as 13) or 2023 (same as 14) to use the year-based naming. "latest" always enables the latest supported ECMAScript version.
     */
    ecmaVersion?:
    | 3
    | 5
    | 6
    | 2015
    | 7
    | 2016
    | 8
    | 2017
    | 9
    | 2018
    | 10
    | 2019
    | 11
    | 2020
    | 12
    | 2021
    | 13
    | 2022
    | 14
    | 2023
    | "latest";
    /**
     * set to "script" (default) or "module" if your code is in ECMAScript modules
     */
    sourceType?: "script" | "module";
    [k: string]: unknown | undefined;
}

/** Compiler options set by the plugin user. */
declare type PartialCompilerOptions =
| Partial<FlexibleCompilerOptions>
| Partial<JsonCompilerOptions>;

declare type PartialNull<T> = {
    	[P in keyof T]: T[P] | null;
};

declare interface PartialResolvedId extends Partial<PartialNull<ModuleOptions>> {
    	external?: boolean | 'absolute' | 'relative';
    	id: string;
    	resolvedBy?: string;
}

/**
 * AVA searches your entire project for `*.js`, `*.cjs`, `*.mjs` and `*.ts` files (or other extensions you've configured). It will ignore such files found in the `rewritePaths` targets (e.g. `build/`). If you use more specific paths, for instance `build/main/`, you may need to change AVA's `files` configuration to ignore other directories. Paths are relative to your project directory
 */
declare interface Paths {
    /**
     * This interface was referenced by `Paths`'s JSON-Schema definition
     * via the `patternProperty` "/$".
     */
    [k: string]: string;
}

/**
 * A person who has been involved in creating or maintaining this package.
 */
declare type Person = {
    name: string;
    url?: string;
    email?: string;
    [k: string]: unknown | undefined;
} & Person1;

declare type Person1 =
| {
    name: string;
    url?: string;
    email?: string;
    [k: string]: unknown | undefined;
}
| string;

declare interface Plugin<A = any> extends OutputPlugin, Partial<PluginHooks> {
    	// for inter-plugin communication
    	api?: A;
}

declare interface PluginCache {
    	delete(id: string): boolean;
    	get<T = any>(id: string): T;
    	has(id: string): boolean;
    	set<T = any>(id: string, value: T): void;
}

declare interface PluginContext extends MinimalPluginContext {
    	addWatchFile: (id: string) => void;
    	cache: PluginCache;
    	debug: LoggingFunction;
    	emitFile: EmitFile;
    	error: (error: RollupError | string) => never;
    	getFileName: (fileReferenceId: string) => string;
    	getModuleIds: () => IterableIterator<string>;
    	getModuleInfo: GetModuleInfo;
    	getWatchFiles: () => string[];
    	info: LoggingFunction;
    	load: (
    		options: { id: string; resolveDependencies?: boolean } & Partial<PartialNull<ModuleOptions>>
    	) => Promise<ModuleInfo>;
    	parse: ParseAst;
    	resolve: (
    		source: string,
    		importer?: string,
    		options?: {
        			attributes?: Record<string, string>;
        			custom?: CustomPluginOptions;
        			isEntry?: boolean;
        			skipSelf?: boolean;
        		}
    	) => Promise<ResolvedId | null>;
    	setAssetSource: (assetReferenceId: string, source: string | Uint8Array) => void;
    	warn: LoggingFunction;
}

declare interface PluginContextMeta {
    	rollupVersion: string;
    	watchMode: boolean;
}

declare type PluginHooks = {
    	[K in keyof FunctionPluginHooks]: ObjectHook<
    		K extends AsyncPluginHooks ? MakeAsync<FunctionPluginHooks[K]> : FunctionPluginHooks[K],
    		// eslint-disable-next-line @typescript-eslint/ban-types
    		K extends ParallelPluginHooks ? { sequential?: boolean } : {}
    	>;
};

/**
 * ESLint supports the use of third-party plugins. Before using the plugin, you have to install it using npm.
 */
declare type Plugins = string[];

declare namespace plugins {
    export {
        manageDependencies,
        ManageDependenciesConfig
    }
}

declare interface PossibleErrors {
    /**
     * Require or disallow trailing commas
     */
    "comma-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce "for" loop update clause moving the counter in the right direction
     */
    "for-direction"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce return statements in getters
     */
    "getter-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow await inside of loops
     */
    "no-await-in-loop"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow comparing against -0
     */
    "no-compare-neg-zero"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow assignment operators in conditional expressions
     */
    "no-cond-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of console
     */
    "no-console"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow constant expressions in conditions
     */
    "no-constant-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow control characters in regular expressions
     */
    "no-control-regex"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of debugger
     */
    "no-debugger"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate arguments in function definitions
     */
    "no-dupe-args"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate keys in object literals
     */
    "no-dupe-keys"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow duplicate case labels
     */
    "no-duplicate-case"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty block statements
     */
    "no-empty"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow empty character classes in regular expressions
     */
    "no-empty-character-class"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning exceptions in catch clauses
     */
    "no-ex-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary boolean casts
     */
    "no-extra-boolean-cast"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary parentheses
     */
    "no-extra-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unnecessary semicolons
     */
    "no-extra-semi"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow reassigning function declarations
     */
    "no-func-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow function or var declarations in nested blocks
     */
    "no-inner-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow invalid regular expression strings in RegExp constructors
     */
    "no-invalid-regexp"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow irregular whitespace outside of strings and comments
     */
    "no-irregular-whitespace"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negating the left operand in in expressions (deprecated)
     */
    "no-negated-in-lhs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow calling global object properties as functions
     */
    "no-obj-calls"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow calling some Object.prototype methods directly on objects
     */
    "no-prototype-builtins"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple spaces in regular expressions
     */
    "no-regex-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow sparse arrays
     */
    "no-sparse-arrays"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow template literal placeholder syntax in regular strings
     */
    "no-template-curly-in-string"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow confusing multiline expressions
     */
    "no-unexpected-multiline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     */
    "no-unreachable"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow control flow statements in finally blocks
     */
    "no-unsafe-finally"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negating the left operand of relational operators
     */
    "no-unsafe-negation"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require calls to isNaN() when checking for NaN
     */
    "use-isnan"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce valid JSDoc comments
     */
    "valid-jsdoc"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce comparing typeof expressions against valid strings
     */
    "valid-typeof"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

/**
 * Downloads the wixtoolset automatically and adds it to the path, so Electron Forge can use it.
 * Can be directly used as an Gulp Task.
 * @param releaseTag - wich release of the wixtoolset should be downloaded (default = latest).
 * @returns A Gulp Task
 * @public
 */
declare function prepareWixTools(releaseTag?: string): TaskFunction;

/**
 * Downloads the wixtoolset automatically and adds it to the path, so Electron Forge can use it.
 * @param releaseTag - wich release of the wixtoolset should be downloaded (undefined = latest).
 * @public
 */
declare function prepareWixTools_2(releaseTag?: string): Promise<void>;

declare interface PreRenderedAsset {
    	name: string | undefined;
    	source: string | Uint8Array;
    	type: 'asset';
}

declare interface PreRenderedChunk {
    	exports: string[];
    	facadeModuleId: string | null;
    	isDynamicEntry: boolean;
    	isEntry: boolean;
    	isImplicitEntry: boolean;
    	moduleIds: string[];
    	name: string;
    	type: 'chunk';
}

declare type PreserveEntrySignaturesOption = false | 'strict' | 'allow-extension' | 'exports-only';

/**
 * A combination of {@link setProd}, {@link selectPnpm} and {@link installDependencies}.
 * Set Production mode and after installing pnpm installing all dependencies.
 * Pnpm version specified by range in package.json engines.pnpm.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function prodInstallDependencies(): TaskFunction;

declare type ProgramNode = RollupAstNode<Program>;

declare interface ProgramTransformerFactory<T extends TransformerStage> {
    type: 'program';

    factory(program: Program_2): StagedTransformerFactory<T>;
}

/**
 * node_modules folder inside the project.
 * @public
 */
declare const projectNodeModulesPath: string;

/**
 * Project folder (current working directory).
 * @public
 */
declare const projectPath: string;

declare interface Property {
    "property-blacklist"?: ArrayStringRule6;
    "property-case"?: LowerUpperRule3;
    /**
     * Disallow unknown properties
     */
    "property-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "property-no-vendor-prefix"?: BooleanRule25;
    "property-whitelist"?: ArrayStringRule7;
    [k: string]: unknown | undefined;
}

/**
 * Publishes the Package using pnpm publish command.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function publishPackage(): TaskFunction;

/**
 * Publishes the Package using pnpm publish command.
 * @public
 */
declare function publishPackage_2(): Promise<void>;

/**
 * Reads the content of a file in the project.
 * @param relPath - path to the file relative to the project.
 * @returns the content of the file.
 * @public
 */
declare function read(relPath: string): Promise<string>;

/**
 * Reads the content of a file in the project as json.
 * @param relPath - path to the file relative to the project.
 * @returns the parsed json data.
 * @public
 */
declare function readJson(relPath: string): Promise<any>;

/**
 * Reads the contents of a package.json file.
 * @param path - path to the package.json file (default = projects package.json file).
 * @param cache - wether to use a previously cached result (default = true).
 * @returns the Object representing the content of the package.json file.
 * @public
 */
declare function readPackageJson(path?: string, cache?: boolean): Promise<JSONSchemaForNPMPackageJsonFiles>;

/**
 * Reads the content of a file in the project as yaml.
 * @param relPath - path to the file relative to the project.
 * @returns the parsed yaml data.
 * @public
 */
declare function readYaml(relPath: string): Promise<any>;

/**
 * Data of one of the Assets.
 * @public
 */
declare type ReleaseAsset = ReleaseAssets[number];

/**
 * A list of multiple Assets.
 * @public
 */
declare type ReleaseAssets = Parameters<Required<FetchReleaseOptions>["getAsset"]>[1];

declare type RenderChunkHook = (
	this: PluginContext,
	code: string,
	chunk: RenderedChunk,
	options: NormalizedOutputOptions,
	meta: { chunks: Record<string, RenderedChunk> }
) => { code: string; map?: SourceMapInput } | string | NullValue;

declare interface RenderedChunk extends PreRenderedChunk {
    	dynamicImports: string[];
    	fileName: string;
    	implicitlyLoadedBefore: string[];
    	importedBindings: {
        		[imported: string]: string[];
        	};
    	imports: string[];
    	modules: {
        		[id: string]: RenderedModule;
        	};
    	referencedFiles: string[];
}

declare interface RenderedModule {
    	readonly code: string | null;
    	originalLength: number;
    	removedExports: string[];
    	renderedExports: string[];
    	renderedLength: number;
}

declare interface RepoInfo {
    owner: string;
    repo: string;
}

declare type RequireReturnsDefaultOption = boolean | 'auto' | 'preferred' | 'namespace';

declare interface ResolvedId extends ModuleOptions {
    	external: boolean | 'absolute';
    	id: string;
    	resolvedBy: string;
}

declare interface ResolvedIdMap {
    	[key: string]: ResolvedId;
}

declare type ResolveDynamicImportHook = (
	this: PluginContext,
	specifier: string | AstNode,
	importer: string,
	options: { attributes: Record<string, string> }
) => ResolveIdResult;

declare type ResolveFileUrlHook = (
	this: PluginContext,
	options: {
    		chunkId: string;
    		fileName: string;
    		format: InternalModuleFormat;
    		moduleId: string;
    		referenceId: string;
    		relativePath: string;
    	}
) => string | NullValue;

declare type ResolveIdHook = (
	this: PluginContext,
	source: string,
	importer: string | undefined,
	options: { attributes: Record<string, string>; custom?: CustomPluginOptions; isEntry: boolean }
) => ResolveIdResult;

declare type ResolveIdResult = string | NullValue | false | PartialResolvedId;

declare type ResolveImportMetaHook = (
	this: PluginContext,
	property: string | null,
	options: { chunkId: string; format: InternalModuleFormat; moduleId: string }
) => string | NullValue;

/**
 * Resolves the absolute filepath of a module.
 * @param module - name of the module to resolve.
 * @returns
 * @public
 */
declare function resolveModule(module: string): string;

declare namespace rollup {
    export {
        plugins,
        tasks_2 as tasks,
        build_2 as build,
        bundleDeclarations,
        buildWithTests_2 as buildWithTests,
        buildAndRunTests_2 as buildAndRunTests,
        getTestFiles,
        run_2 as run,
        CommandOptions
    }
}
export { rollup }

declare namespace rollup_2 {
    export {
        build_2 as build,
        bundleDeclarations,
        buildWithTests_2 as buildWithTests,
        buildAndRunTests_2 as buildAndRunTests,
        getTestFiles,
        run_2 as run,
        CommandOptions
    }
}

declare type RollupAstNode<T> = Omit<T, OmittedEstreeKeys> & AstNodeLocation;

declare interface RollupCache {
    	modules: ModuleJSON[];
    	plugins?: Record<string, SerializablePluginCache>;
}

declare interface RollupCommonJSOptions {
    /**
     * A picomatch pattern, or array of patterns, which specifies the files in
     * the build the plugin should operate on. By default, all files with
     * extension `".cjs"` or those in `extensions` are included, but you can
     * narrow this list by only including specific files. These files will be
     * analyzed and transpiled if either the analysis does not find ES module
     * specific statements or `transformMixedEsModules` is `true`.
     * @default undefined
     */
    include?: FilterPattern;
    /**
     * A picomatch pattern, or array of patterns, which specifies the files in
     * the build the plugin should _ignore_. By default, all files with
     * extensions other than those in `extensions` or `".cjs"` are ignored, but you
     * can exclude additional files. See also the `include` option.
     * @default undefined
     */
    exclude?: FilterPattern;
    /**
     * For extensionless imports, search for extensions other than .js in the
     * order specified. Note that you need to make sure that non-JavaScript files
     * are transpiled by another plugin first.
     * @default [ '.js' ]
     */
    extensions?: ReadonlyArray<string>;
    /**
     * If true then uses of `global` won't be dealt with by this plugin
     * @default false
     */
    ignoreGlobal?: boolean;
    /**
     * If false, skips source map generation for CommonJS modules. This will
     * improve performance.
     * @default true
     */
    sourceMap?: boolean;
    /**
     * Some `require` calls cannot be resolved statically to be translated to
     * imports.
     * When this option is set to `false`, the generated code will either
     * directly throw an error when such a call is encountered or, when
     * `dynamicRequireTargets` is used, when such a call cannot be resolved with a
     * configured dynamic require target.
     * Setting this option to `true` will instead leave the `require` call in the
     * code or use it as a fallback for `dynamicRequireTargets`.
     * @default false
     */
    ignoreDynamicRequires?: boolean;
    /**
     * Instructs the plugin whether to enable mixed module transformations. This
     * is useful in scenarios with modules that contain a mix of ES `import`
     * statements and CommonJS `require` expressions. Set to `true` if `require`
     * calls should be transformed to imports in mixed modules, or `false` if the
     * `require` expressions should survive the transformation. The latter can be
     * important if the code contains environment detection, or you are coding
     * for an environment with special treatment for `require` calls such as
     * ElectronJS. See also the `ignore` option.
     * @default false
     */
    transformMixedEsModules?: boolean;
    /**
     * By default, this plugin will try to hoist `require` statements as imports
     * to the top of each file. While this works well for many code bases and
     * allows for very efficient ESM output, it does not perfectly capture
     * CommonJS semantics as the order of side effects like log statements may
     * change. But it is especially problematic when there are circular `require`
     * calls between CommonJS modules as those often rely on the lazy execution of
     * nested `require` calls.
     *
     * Setting this option to `true` will wrap all CommonJS files in functions
     * which are executed when they are required for the first time, preserving
     * NodeJS semantics. Note that this can have an impact on the size and
     * performance of the generated code.
     *
     * The default value of `"auto"` will only wrap CommonJS files when they are
     * part of a CommonJS dependency cycle, e.g. an index file that is required by
     * many of its dependencies. All other CommonJS files are hoisted. This is the
     * recommended setting for most code bases.
     *
     * `false` will entirely prevent wrapping and hoist all files. This may still
     * work depending on the nature of cyclic dependencies but will often cause
     * problems.
     *
     * You can also provide a picomatch pattern, or array of patterns, to only
     * specify a subset of files which should be wrapped in functions for proper
     * `require` semantics.
     *
     * `"debug"` works like `"auto"` but after bundling, it will display a warning
     * containing a list of ids that have been wrapped which can be used as
     * picomatch pattern for fine-tuning.
     * @default "auto"
     */
    strictRequires?: boolean | FilterPattern;
    /**
     * Sometimes you have to leave require statements unconverted. Pass an array
     * containing the IDs or a `id => boolean` function.
     * @default []
     */
    ignore?: ReadonlyArray<string> | ((id: string) => boolean);
    /**
     * In most cases, where `require` calls are inside a `try-catch` clause,
     * they should be left unconverted as it requires an optional dependency
     * that may or may not be installed beside the rolled up package.
     * Due to the conversion of `require` to a static `import` - the call is
     * hoisted to the top of the file, outside the `try-catch` clause.
     *
     * - `true`: Default. All `require` calls inside a `try` will be left unconverted.
     * - `false`: All `require` calls inside a `try` will be converted as if the
     *   `try-catch` clause is not there.
     * - `remove`: Remove all `require` calls from inside any `try` block.
     * - `string[]`: Pass an array containing the IDs to left unconverted.
     * - `((id: string) => boolean|'remove')`: Pass a function that controls
     *   individual IDs.
     *
     * @default true
     */
    ignoreTryCatch?:
    | boolean
    | 'remove'
    | ReadonlyArray<string>
    | ((id: string) => boolean | 'remove');
    /**
     * Controls how to render imports from external dependencies. By default,
     * this plugin assumes that all external dependencies are CommonJS. This
     * means they are rendered as default imports to be compatible with e.g.
     * NodeJS where ES modules can only import a default export from a CommonJS
     * dependency.
     *
     * If you set `esmExternals` to `true`, this plugin assumes that all
     * external dependencies are ES modules and respect the
     * `requireReturnsDefault` option. If that option is not set, they will be
     * rendered as namespace imports.
     *
     * You can also supply an array of ids to be treated as ES modules, or a
     * function that will be passed each external id to determine whether it is
     * an ES module.
     * @default false
     */
    esmExternals?: boolean | ReadonlyArray<string> | ((id: string) => boolean);
    /**
     * Controls what is returned when requiring an ES module from a CommonJS file.
     * When using the `esmExternals` option, this will also apply to external
     * modules. By default, this plugin will render those imports as namespace
     * imports i.e.
     *
     * ```js
     * // input
     * const foo = require('foo');
     *
     * // output
     * import * as foo from 'foo';
     * ```
     *
     * However, there are some situations where this may not be desired.
     * For these situations, you can change Rollup's behaviour either globally or
     * per module. To change it globally, set the `requireReturnsDefault` option
     * to one of the following values:
     *
     * - `false`: This is the default, requiring an ES module returns its
     *   namespace. This is the only option that will also add a marker
     *   `__esModule: true` to the namespace to support interop patterns in
     *   CommonJS modules that are transpiled ES modules.
     * - `"namespace"`: Like `false`, requiring an ES module returns its
     *   namespace, but the plugin does not add the `__esModule` marker and thus
     *   creates more efficient code. For external dependencies when using
     *   `esmExternals: true`, no additional interop code is generated.
     * - `"auto"`: This is complementary to how `output.exports: "auto"` works in
     *   Rollup: If a module has a default export and no named exports, requiring
     *   that module returns the default export. In all other cases, the namespace
     *   is returned. For external dependencies when using `esmExternals: true`, a
     *   corresponding interop helper is added.
     * - `"preferred"`: If a module has a default export, requiring that module
     *   always returns the default export, no matter whether additional named
     *   exports exist. This is similar to how previous versions of this plugin
     *   worked. Again for external dependencies when using `esmExternals: true`,
     *   an interop helper is added.
     * - `true`: This will always try to return the default export on require
     *   without checking if it actually exists. This can throw at build time if
     *   there is no default export. This is how external dependencies are handled
     *   when `esmExternals` is not used. The advantage over the other options is
     *   that, like `false`, this does not add an interop helper for external
     *   dependencies, keeping the code lean.
     *
     * To change this for individual modules, you can supply a function for
     * `requireReturnsDefault` instead. This function will then be called once for
     * each required ES module or external dependency with the corresponding id
     * and allows you to return different values for different modules.
     * @default false
     */
    requireReturnsDefault?:
    | RequireReturnsDefaultOption
    | ((id: string) => RequireReturnsDefaultOption);

    /**
     * @default "auto"
     */
    defaultIsModuleExports?:
    | DefaultIsModuleExportsOption
    | ((id: string) => DefaultIsModuleExportsOption);
    /**
     * Some modules contain dynamic `require` calls, or require modules that
     * contain circular dependencies, which are not handled well by static
     * imports. Including those modules as `dynamicRequireTargets` will simulate a
     * CommonJS (NodeJS-like) environment for them with support for dynamic
     * dependencies. It also enables `strictRequires` for those modules.
     *
     * Note: In extreme cases, this feature may result in some paths being
     * rendered as absolute in the final bundle. The plugin tries to avoid
     * exposing paths from the local machine, but if you are `dynamicRequirePaths`
     * with paths that are far away from your project's folder, that may require
     * replacing strings like `"/Users/John/Desktop/foo-project/"` -> `"/"`.
     */
    dynamicRequireTargets?: string | ReadonlyArray<string>;
    /**
     * To avoid long paths when using the `dynamicRequireTargets` option, you can use this option to specify a directory
     * that is a common parent for all files that use dynamic require statements. Using a directory higher up such as `/`
     * may lead to unnecessarily long paths in the generated code and may expose directory names on your machine like your
     * home directory name. By default, it uses the current working directory.
     */
    dynamicRequireRoot?: string;
}

declare interface RollupError extends RollupLog {
    	name?: string;
    	stack?: string;
    	watchFiles?: string[];
}

declare interface RollupJsonOptions {
    /**
     * All JSON files will be parsed by default,
     * but you can also specifically include files
     */
    include?: FilterPattern;
    /**
     * All JSON files will be parsed by default,
     * but you can also specifically exclude files
     */
    exclude?: FilterPattern;
    /**
     * For tree-shaking, properties will be declared as variables, using
     * either `var` or `const`.
     * @default false
     */
    preferConst?: boolean;
    /**
     * Specify indentation for the generated default export
     * @default '\t'
     */
    indent?: string;
    /**
     * Ignores indent and generates the smallest code
     * @default false
     */
    compact?: boolean;
    /**
     * Generate a named export for every property of the JSON object
     * @default true
     */
    namedExports?: boolean;
}

declare interface RollupLog {
    	binding?: string;
    	cause?: unknown;
    	code?: string;
    	exporter?: string;
    	frame?: string;
    	hook?: string;
    	id?: string;
    	ids?: string[];
    	loc?: {
        		column: number;
        		file?: string;
        		line: number;
        	};
    	message: string;
    	meta?: any;
    	names?: string[];
    	plugin?: string;
    	pluginCode?: unknown;
    	pos?: number;
    	reexporter?: string;
    	stack?: string;
    	url?: string;
}

declare interface RollupNodeResolveOptions {
    /**
     * Additional conditions of the package.json exports field to match when resolving modules.
     * By default, this plugin looks for the `'default', 'module', 'import']` conditions when resolving imports.
     *
     * When using `@rollup/plugin-commonjs` v16 or higher, this plugin will use the
     * `['default', 'module', 'import']` conditions when resolving require statements.
     *
     * Setting this option will add extra conditions on top of the default conditions.
     * See https://nodejs.org/api/packages.html#packages_conditional_exports for more information.
     */
    exportConditions?: string[];

    /**
     * If `true`, instructs the plugin to use the `"browser"` property in `package.json`
     * files to specify alternative files to load for bundling. This is useful when
     * bundling for a browser environment. Alternatively, a value of `'browser'` can be
     * added to the `mainFields` option. If `false`, any `"browser"` properties in
     * package files will be ignored. This option takes precedence over `mainFields`.
     * @default false
     */
    browser?: boolean;

    /**
     * A list of directory names in which to recursively look for modules.
     * @default ['node_modules']
     */
    moduleDirectories?: string[];

    /**
     * A list of absolute paths to additional locations to search for modules.
     * This is analogous to setting the `NODE_PATH` environment variable for node.
     * @default []
     */
    modulePaths?: string[];

    /**
     * An `Array` of modules names, which instructs the plugin to force resolving for the
     * specified modules to the root `node_modules`. Helps to prevent bundling the same
     * package multiple times if package is imported from dependencies.
     */
    dedupe?: string[] | ((importee: string) => boolean);

    /**
     * Specifies the extensions of files that the plugin will operate on.
     * @default [ '.mjs', '.js', '.json', '.node' ]
     */
    extensions?: readonly string[];

    /**
     * Locks the module search within specified path (e.g. chroot). Modules defined
     * outside this path will be marked as external.
     * @default '/'
     */
    jail?: string;

    /**
     * Specifies the properties to scan within a `package.json`, used to determine the
     * bundle entry point.
     * @default ['module', 'main']
     */
    mainFields?: readonly string[];

    /**
     * If `true`, inspect resolved files to assert that they are ES2015 modules.
     * @default false
     */
    modulesOnly?: boolean;

    /**
     * If `true`, the plugin will prefer built-in modules (e.g. `fs`, `path`). If `false`,
     * the plugin will look for locally installed modules of the same name.
     * @default true
     */
    preferBuiltins?: boolean;

    /**
     * An `Array` which instructs the plugin to limit module resolution to those whose
     * names match patterns in the array.
     * @default []
     */
    resolveOnly?: ReadonlyArray<string | RegExp> | null | ((module: string) => boolean);

    /**
     * Specifies the root directory from which to resolve modules. Typically used when
     * resolving entry-point imports, and when resolving deduplicated modules.
     * @default process.cwd()
     */
    rootDir?: string;

    /**
     * Allow folder mappings in package exports (trailing /)
     * This was deprecated in Node 14 and removed with Node 17, see DEP0148.
     * So this option might be changed to default to `false` in a future release.
     * @default true
     */
    allowExportsFolderMapping?: boolean;
}

declare interface RollupOptions extends InputOptions {
    	// This is included for compatibility with config files but ignored by rollup.rollup
    	output?: OutputOptions | OutputOptions[];
}

declare type RollupTypescriptOptions = RollupTypescriptPluginOptions & PartialCompilerOptions;

declare interface RollupTypescriptPluginOptions {
    /**
     * If using incremental this is the folder where the cached
     * files will be created and kept for Typescript incremental
     * compilation.
     */
    cacheDir?: string;
    /**
     * Determine which files are transpiled by Typescript (all `.ts` and
     * `.tsx` files by default).
     */
    include?: FilterPattern;
    /**
     * Determine which files are ignored by Typescript
     */
    exclude?: FilterPattern;
    /**
     * Sets the `resolve` value for the underlying filter function.  If not set will use the `rootDir` property
     * @see {@link https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter} @rollup/pluginutils `createFilter`
     */
    filterRoot?: string | false;
    /**
     * When set to false, ignores any options specified in the config file.
     * If set to a string that corresponds to a file path, the specified file
     * will be used as config file.
     */
    tsconfig?: string | false;
    /**
     * Overrides TypeScript used for transpilation
     */
    typescript?: typeof _typescript;
    /**
     * Overrides the injected TypeScript helpers with a custom version.
     */
    tslib?: Promise<string> | string;
    /**
     * TypeScript custom transformers
     */
    transformers?: CustomTransformerFactories;
    /**
     * When set to false, force non-cached files to always be emitted in the output directory.output
     * If not set, will default to true with a warning.
     */
    outputToFilesystem?: boolean;
    /**
     * Pass additional compiler options to the plugin.
     */
    compilerOptions?: PartialCompilerOptions;
    /**
     * Override force setting of `noEmit` and `emitDeclarationOnly` and use what is defined in `tsconfig.json`
     */
    noForceEmit?: boolean;
}

declare interface RootRule {
    "root-no-standard-properties"?: BooleanRule26;
    [k: string]: unknown | undefined;
}

declare interface Rule {
    /**
     * Require or disallow an empty line before nested rules
     */
    "rule-nested-empty-line-before"?: (
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    /**
     * Require or disallow an empty line before non-nested rules
     */
    "rule-non-nested-empty-line-before"?: (
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always" | "never" | "always-multi-line" | "never-multi-line" | [])
    | [
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    ),
    (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) &
    (
    | ((("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule) & string)
    | (("always" | "never" | "always-multi-line" | "never-multi-line" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    [k: string]: unknown | undefined;
}

/**
 * ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments or configuration files.
 */
declare type Rules = PossibleErrors &
BestPractices &
StrictMode &
Variables &
NodeAndCommonJs &
StylisticIssues &
EcmaScript6 &
Legacy;

/**
 * Run Rollup with an custom configuration.
 * Can directly be used as an Rollup Task.
 * @param rollupOptions - Rollup Options wich normally are defined by the rollup.config.js.
 * @param commandOptions - Options wich are normally provided through cli flags.
 * @returns A Gulp Task.
 * @public
 */
declare function run(rollupOptions: RollupOptions[] | RollupOptions, commandOptions: CommandOptions): TaskFunction;

/**
 * Run Rollup with an custom configuration.
 * @param rollupOptions - Rollup Options wich normally are defined by the rollup.config.js.
 * @param commandOptions - Options wich are normally provided through cli flags.
 * @public
 */
declare function run_2(rollupOptions?: RollupOptions[] | RollupOptions, commandOptions?: CommandOptions): Promise<void>;

/**
 * Runs the {@link https://api-extractor.com/ | ApiExtractor}.
 * Can directly be used as an Rollup Task.
 * @param projectPackageJsonPath - path to the package.json file
 * @param configObject - the {@link https://api.rushstack.io/pages/api-extractor.iextractorconfigprepareoptions/ | IExtractorConfigPrepareOptions} of the APIExtractor.
 * @returns A Gulp Task.
 * @public
 */
declare function runApiExtrator(projectPackageJsonPath: string, configObject: IConfigFile): TaskFunction;

/**
 * Runs the {@link https://api-extractor.com/ | ApiExtractor}.
 * @param projectPackageJsonPath - path to the package.json file
 * @param options - the {@link https://api.rushstack.io/pages/api-extractor.iextractorconfigprepareoptions/ | IExtractorConfigPrepareOptions} of the APIExtractor.
 * @public
 */
declare function runApiExtrator_2(projectPackageJsonPath: string, options: IConfigFile): void;

/**
 * Makes the electron app using electron forge.
 * Can be directly used as an Gulp Task.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.MakeOptions.html) for the make Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @returns A Gulp Task
 * @public
 */
declare function runForgeMake(options?: MakeOptions, config?: ForgeConfig): TaskFunction;

/**
 * Makes the electron app using electron forge.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.MakeOptions.html) for the make Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @public
 */
declare function runForgeMake_2(options?: MakeOptions, config?: ForgeConfig): Promise<void>;

/**
 * Package the electron app using electron forge.
 * Can be directly used as an Gulp Task.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.PackageOptions.html) for the package Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @returns A Gulp Task
 * @public
 */
declare function runForgePackage(options?: PackageOptions, config?: ForgeConfig): TaskFunction;

/**
 * Package the electron app using electron forge.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.PackageOptions.html) for the package Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @public
 */
declare function runForgePackage_2(options?: PackageOptions, config?: ForgeConfig): Promise<void>;

/**
 * Starts the electron app in the current folder (using electron forge).
 * Can be directly used as an Gulp Task.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.StartOptions.html) for the Start Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @returns A Gulp Task
 * @public
 */
declare function runForgePublish(options?: PublishOptions, config?: ForgeConfig): TaskFunction;

/**
 * Starts the electron app in the current folder (using electron forge).
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.StartOptions.html) for the Start Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @public
 */
declare function runForgePublish_2(options?: PublishOptions, config?: ForgeConfig): Promise<void>;

/**
 * Starts the electron app in the current folder (using electron forge).
 * Can be directly used as an Gulp Task.
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.StartOptions.html) for the Start Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @returns A Gulp Task
 * @public
 */
declare function runForgeStart(options?: StartOptions, config?: ForgeConfig): TaskFunction;

/**
 * Starts the electron app in the current folder (using electron forge).
 * @param options - [Options](https://js.electronforge.io/interfaces/_electron_forge_core.StartOptions.html) for the Start Command (default = {}).
 * @param config - Optional [configuration](https://js.electronforge.io/modules/_electron_forge_shared_types.html#ForgeConfig) wich will be used instead of the configuration on disk.
 * @public
 */
declare function runForgeStart_2(options?: StartOptions, config?: ForgeConfig): Promise<void>;

/**
 * Runs a pnpm script defined in the package.json file.
 * Can directly be used as an Rollup Task.
 * @param script - the name of the script to run.
 * @param args - an Array of arguments for the script (default = []).
 * @returns A Gulp Task.
 * @public
 */
declare function runScript(script: string, args?: string[]): TaskFunction;

/**
 * Runs a pnpm script defined in the package.json file.
 * @param script - the name of the script to run.
 * @param args - an Array of arguments for the script (default = []).
 * @public
 */
declare function runScript_2(script: string, args?: string[]): Promise<void>;

/**
 * Run the testfiles with jest.
 * Can directly be used as an Rollup Task.
 * @param testFiles - files wich should be executed as tests.
 * @returns A Gulp Task.
 * @public
 */
declare function runTestFiles(testFiles: string[]): TaskFunction;

/**
 * Run the testfiles with jest.
 * @param testFiles - files wich should be executed as tests.
 * @public
 */
declare function runTestFiles_2(testFiles: string[]): Promise<void>;

/**
 * Runs all testfiles from the jest config.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function runTests(): TaskFunction;

/**
 * Runs all testfiles from the jest config.
 * @public
 */
declare function runTests_2(): Promise<void>;

/**
 * Runs a script in one specific or all workspaces.
 * Can directly be used as an Rollup Task.
 * @param script - the name of the script to run.
 * @param filter - a pnpm filter to specify in which workspaces to run the script (default = "*").
 * @param args - an Array of arguments for the script (default = []).
 * @returns A Gulp Task.
 * @public
 */
declare function runWorkspaceScript(script: string, filter?: string, args?: string[]): TaskFunction;

/**
 * Runs a script in one specific or all workspaces.
 * @param script - the name of the script to run.
 * @param filter - a pnpm filter to specify in which workspaces to run the script (default = "*").
 * @param args - an Array of arguments for the script (default = []).
 * @public
 */
declare function runWorkspaceScript_2(script: string, filter?: string, args?: string[]): Promise<void>;

/**
 * Runs a script in one specific or all workspaces in parallel.
 * Can directly be used as an Rollup Task.
 * @param script - the name of the script to run.
 * @param filter - a pnpm filter to specify in which workspaces to run the script (default = "*").
 * @param args - an Array of arguments for the script (default = []).
 * @returns A Gulp Task.
 * @public
 */
declare function runWorkspaceScriptParallel(script: string, filter?: string, args?: string[]): TaskFunction;

/**
 * Runs a script in one specific or all workspaces in parallel.
 * @param script - the name of the script to run.
 * @param filter - a pnpm filter to specify in which workspaces to run the script (default = "*").
 * @param args - an Array of arguments for the script (default = []).
 * @public
 */
declare function runWorkspaceScriptParallel_2(script: string, filter?: string, args?: string[]): Promise<void>;

declare type SchemaForPrettierrc = (OptionsDefinition & OverridesDefinition) | string;

/**
 * Run AFTER the package is installed.
 */
declare type ScriptsInstallAfter = string;

/**
 * Run AFTER the package is published.
 */
declare type ScriptsPublishAfter = string;

/**
 * Run by the 'npm restart' command. Note: 'npm restart' will run the stop and start scripts if no restart script is provided.
 */
declare type ScriptsRestart = string;

/**
 * Run by the 'npm start' command.
 */
declare type ScriptsStart = string;

/**
 * Run by the 'npm stop' command.
 */
declare type ScriptsStop = string;

/**
 * Run by the 'npm test' command.
 */
declare type ScriptsTest = string;

/**
 * Run BEFORE the package is uninstalled.
 */
declare type ScriptsUninstallBefore = string;

/**
 * Run BEFORE bump the package version.
 */
declare type ScriptsVersionBefore = string;

/**
 * Install and activate node using the version range specified by package.json engines.pnpm.
 * If no version is pacified lts is used.
 * @param version - version string to use (default = package.enginesToUse.node || "lts").
 * @public
 */
declare function selectNode(version?: string): Promise<void>;

declare interface Selector {
    "selector-attribute-brackets-space-inside"?: AlwaysNeverRule15;
    "selector-attribute-operator-blacklist"?: ArrayStringRule8;
    "selector-attribute-operator-space-after"?: AlwaysNeverRule16;
    "selector-attribute-operator-space-before"?: AlwaysNeverRule17;
    "selector-attribute-operator-whitelist"?: ArrayStringRule9;
    "selector-attribute-quotes"?: AlwaysNeverRule18;
    /**
     * Specify a pattern for class selectors
     */
    "selector-class-pattern"?: (
    | (null | string)
    | [
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule)),
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | (null | string)
    | [
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule)),
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule))
    ]
    ))
    | ((
    | (null | string)
    | [
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule)),
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule))
    ]
    ) &
    string)
    | ((
    | (null | string)
    | [
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule)),
    (string | CoreRule) & (((string | CoreRule) & string) | (string | CoreRule))
    ]
    ) &
    unknown[])
    );
    "selector-combinator-space-after"?: AlwaysNeverRule19;
    "selector-combinator-space-before"?: AlwaysNeverRule20;
    "selector-descendant-combinator-no-non-space"?: BooleanRule27;
    "selector-id-pattern"?: StringRule2;
    "selector-max-compound-selectors"?: IntegerRule4;
    "selector-max-specificity"?: StringRule3;
    "selector-nested-pattern"?: StringRule4;
    "selector-no-attribute"?: BooleanRule28;
    "selector-no-combinator"?: BooleanRule29;
    "selector-no-id"?: BooleanRule30;
    /**
     * Disallow qualifying a selector by type
     */
    "selector-no-qualifying-type"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    /**
     * Disallow type selectors
     */
    "selector-no-type"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "selector-no-universal"?: BooleanRule31;
    "selector-no-vendor-prefix"?: BooleanRule32;
    "selector-pseudo-class-case"?: LowerUpperRule4;
    /**
     * Disallow unknown pseudo-class selectors
     */
    "selector-pseudo-class-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "selector-pseudo-class-parentheses-space-inside"?: AlwaysNeverRule21;
    "selector-pseudo-class-whitelist"?: ArrayStringRule10;
    "selector-pseudo-element-case"?: LowerUpperRule5;
    "selector-pseudo-element-colon-notation"?: SingleDoubleRule;
    /**
     * Disallow unknown pseudo-element selectors
     */
    "selector-pseudo-element-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "selector-root-no-composition"?: BooleanRule33;
    "selector-type-case"?: LowerUpperRule6;
    /**
     * Disallow unknown type selectors
     */
    "selector-type-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "selector-max-empty-lines"?: IntegerRule5;
    [k: string]: unknown | undefined;
}

declare interface SelectorList {
    "selector-list-comma-newline-after"?: NewlineRule9;
    "selector-list-comma-newline-before"?: NewlineRule10;
    "selector-list-comma-space-after"?: SpaceRule7;
    "selector-list-comma-space-before"?: SpaceRule8;
    [k: string]: unknown | undefined;
}

declare interface SemanticReleaseSchema {
    /**
     * List of modules or file paths containing a shareable configuration. If multiple shareable configurations are set, they will be imported in the order defined with each configuration option taking precedence over the options defined in a previous shareable configuration
     */
    extends?: string | string[];
    /**
     * The branches on which releases should happen.
     */
    branches?: string | BranchObject | (string | BranchObject)[];
    /**
     * The git repository URL
     */
    repositoryUrl?: string;
    /**
     * The Git tag format used by semantic-release to identify releases. The tag name is generated with Lodash template and will be compiled with the version variable.
     */
    tagFormat?: string;
    /**
     * Define the list of plugins to use. Plugins will run in series, in the order defined
     */
    plugins?: (string | unknown[])[];
    /**
     * The objective of the dry-run mode is to get a preview of the pending release. Dry-run mode skips the following steps: prepare, publish, success and fail. In addition to this it prints the next version and release notes to the console
     */
    dryRun?: boolean;
    /**
     * Set to false to skip Continuous Integration environment verifications. This allows for making releases from a local machine
     */
    ci?: boolean;
    [k: string]: unknown | undefined;
}

declare type SequentialPluginHooks =
	| 'augmentChunkHash'
	| 'generateBundle'
	| 'onLog'
	| 'options'
	| 'outputOptions'
	| 'renderChunk'
	| 'transform';

declare interface SerializablePluginCache {
    	[key: string]: [number, any];
}

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 *
 * When the returned function is executed, the tasks or functions will be executed in series,
 * each waiting for the prior to finish. If an error occurs, execution will stop.
 * @param tasks - List of tasks.
 * @public
 */
declare const series: series_2;

/**
 * Helper function to set the displayname of minified functions.
 * @param name - the name which should be applied to the task.
 * @param task - the task (async function) which should receive the label.
 * @returns the Taskfunktion with the displayName applied.
 * @public
 */
declare function setDisplayName<T extends TaskFunction>(name: string, task: T): T;

/**
 * Sets the environment to be Production.
 * All Tasks from now run in Production mode.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function setProd(): TaskFunction;

/**
 * Sets the environment to be Production.
 * All Tasks from now run in Production mode.
 * @public
 */
declare function setProd_2(): void;

/**
 * ESLint supports adding shared settings into configuration file. You can add settings object to ESLint configuration file and it will be supplied to every rule that will be executed. This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.
 */
declare interface Settings {
    [k: string]: unknown | undefined;
}

declare interface ShorthandProperty {
    "shorthand-property-no-redundant-values"?: BooleanRule34;
    [k: string]: unknown | undefined;
}

declare type ShouldTransformCachedModuleHook = (
	this: PluginContext,
	options: {
    		ast: ProgramNode;
    		code: string;
    		id: string;
    		meta: CustomPluginOptions;
    		moduleSideEffects: boolean | 'no-treeshake';
    		resolvedSources: ResolvedIdMap;
    		syntheticNamedExports: boolean | string;
    	}
) => boolean | NullValue;

/**
 * @minItems 1
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
declare type SimpleArrayStringRule = [string, ...string[]];

/**
 * Plugins are rules or sets of rules built by the community that support methodologies, toolsets, non-standard CSS features, or very specific use cases
 *
 * @minItems 1
 */
declare type SimpleArrayStringRule1 = [string, ...string[]];

/**
 * An identifier mangler for which the output is invariant with respect to the source code.
 */
declare interface SimpleIdentifierMangler {
    /**
     * Obtains the nth most favored (usually shortest) identifier to rename a variable to.
     * The mangler will increment n and retry until the return value is not in use in scope, and is not a reserved word.
     * This function is expected to be stable; Evaluating get(n) === get(n) should always return true.
     * @param n The ordinal of the identifier.
     */
    get(n: number): string;
}

/**
 * Your configuration can extend an existing configuration(s) (whether your own or a third-party config)
 */
declare type SimpleStringOrArrayStringRule = (string | SimpleArrayStringRule) &
(((string | SimpleArrayStringRule) & string) | ((string | SimpleArrayStringRule) & unknown[]));

/**
 * Provide a glob or array of globs to ignore specific files
 */
declare type SimpleStringOrArrayStringRule1 = (string | SimpleArrayStringRule) &
(((string | SimpleArrayStringRule) & string) | ((string | SimpleArrayStringRule) & unknown[]));

/**
 * Specify single or double colon notation for applicable pseudo-elements
 */
declare type SingleDoubleRule = (
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
))
| ((
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
unknown[])
);

/**
 * Specify single or double quotes around strings
 */
declare type SingleDoubleRule1 = (
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
(
| (null &
(
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
))
| ((
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
string)
| ((
| null
| ("single" | "double" | [])
| [
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule)),
(("single" | "double" | {}) | CoreRule) &
(((("single" | "double" | {}) | CoreRule) & string) | (("single" | "double" | {}) | CoreRule))
]
) &
unknown[])
);

declare interface SourceDescription extends Partial<PartialNull<ModuleOptions>> {
    	ast?: ProgramNode;
    	code: string;
    	map?: SourceMapInput;
}

declare interface SourceMap {
    	file: string;
    	mappings: string;
    	names: string[];
    	sources: string[];
    	sourcesContent?: string[];
    	version: number;
    	toString(): string;
    	toUrl(): string;
}

declare type SourcemapIgnoreListOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => boolean;

declare type SourceMapInput = ExistingRawSourceMap | string | null | { mappings: '' };

declare interface SourceMapOptions {
    /** Source map object, 'inline' or source map file content */
    content?: SectionedSourceMapInput | string;
    includeSources?: boolean;
    filename?: string;
    root?: string;
    asObject?: boolean;
    url?: string | 'inline';
}

declare type SourcemapPathTransformOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => string;

declare type SourceMapSegment =
	| [number]
	| [number, number, number, number]
	| [number, number, number, number, number];

declare interface SourcemapsPluginOptions {
    include?: Parameters<CreateFilter>[0];
    exclude?: Parameters<CreateFilter>[1];
    readFile?(path: string, callback: (error: Error | null, data: Buffer | string) => void): void;
}

/**
 * How should the sourcemap be generated:
 * "external" = A separate file with the Sourcemap is emitted.
 * "inline" = The sourcemap is inlined in to the bundle.
 * @public
 */
export declare type SourceMapType = "external" | "inline";

/**
 * Require a single space or disallow whitespace after the semicolons of declaration blocks
 */
declare type SpaceRule = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the semicolons of declaration blocks
 */
declare type SpaceRule1 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the commas of value lists
 */
declare type SpaceRule10 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the commas of functions
 */
declare type SpaceRule2 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the commas of functions
 */
declare type SpaceRule3 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace on the inside of the parentheses of functions
 */
declare type SpaceRule4 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the commas of media query lists
 */
declare type SpaceRule5 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the commas of media query lists
 */
declare type SpaceRule6 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the commas of selector lists
 */
declare type SpaceRule7 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace before the commas of selector lists
 */
declare type SpaceRule8 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

/**
 * Require a single space or disallow whitespace after the commas of value lists
 */
declare type SpaceRule9 = (
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
(
| (null &
(
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
))
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
string)
| ((
| null
| ("always" | "never" | "always-single-line" | "never-single-line" | [])
| [
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
),
(("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) &
(
| ((("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule) & string)
| (("always" | "never" | "always-single-line" | "never-single-line" | {}) | CoreRule)
)
]
) &
unknown[])
);

declare type StagedTransformerFactory<T extends TransformerStage> = ElementType<CustomTransformers[T]>;

declare type StdioOption =
	| 'pipe'
	| 'overlapped'
	| 'ipc'
	| 'ignore'
	| 'inherit'
	| Stream
	| number
	| undefined;

declare type StdoutStderrAll = string | Buffer_2 | undefined;

declare interface StrictMode {
    /**
     * require or disallow strict mode directives
     */
    strict?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

declare interface String_2 {
    "string-no-newline"?: BooleanRule35;
    "string-quotes"?: SingleDoubleRule1;
    [k: string]: unknown | undefined;
}

/**
 * Specify a pattern for custom media query names
 */
declare type StringRule = (
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
))
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
string)
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Specify a pattern for custom properties
 */
declare type StringRule1 = (
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
))
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
string)
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Specify a pattern for id selectors
 */
declare type StringRule2 = (
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
))
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
string)
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Limit the specificity of selectors
 */
declare type StringRule3 = (
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
))
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
string)
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Specify a pattern for the selectors of rules nested within rules
 */
declare type StringRule4 = (
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
(
| (null &
(
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
))
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
string)
| ((
| (null | string)
| [
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule)),
({} | CoreRule) & ((({} | CoreRule) & string) | ({} | CoreRule))
]
) &
unknown[])
);

/**
 * Create a stubPackages in the temporary directory of the dlx operation.
 * @param options - options for how to create the stubPackage.
 * @param location - path of the node_modules folder where the Packages can be found (default = node_modules folder of the project).
 * @public
 */
declare function stubPackage(options: StubPackageOptions, location?: string): Promise<void>;

/**
 * Options to create a stubPackage.
 * @public
 */
declare type StubPackageOptions = {
    /**
     * Name of the package which is the destination of the stubPackage.
     */
    name: string;
    /**
     * Normally the package is resolved when the stubPackage is created.
     * Set this to true do delay the resolving of the package to the time of requiring the stub.
     */
    resolveFromLocation?: boolean;
    /**
     * Subpath to also stub in the stubPackage.
     */
    subpaths?: string[];
};

/**
 * Create multiple stubPackages in the temporary directory of the dlx operation.
 * @param options - array of options for how to create the stubPackage.
 * @param location - path of the node_modules folder where the Packages can be found (default = node_modules folder of the project).
 * @public
 */
declare function stubPackages(options: StubPackageOptions[], location?: string): Promise<void>;

declare interface StylelintDisableComment {
    /**
     * Require a reason comment before or after `stylelint-disable` comments
     */
    "stylelint-disable-reason"?: (
    | null
    | ("always-before" | "always-after" | [])
    | [
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    ),
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    )
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("always-before" | "always-after" | [])
    | [
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    ),
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    )
    ]
    ))
    | ((
    | null
    | ("always-before" | "always-after" | [])
    | [
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    ),
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    )
    ]
    ) &
    string)
    | ((
    | null
    | ("always-before" | "always-after" | [])
    | [
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    ),
    (("always-before" | "always-after" | {}) | CoreRule) &
    (
    | ((("always-before" | "always-after" | {}) | CoreRule) & string)
    | (("always-before" | "always-after" | {}) | CoreRule)
    )
    ]
    ) &
    unknown[])
    );
    [k: string]: unknown | undefined;
}

declare interface StylisticIssues {
    /**
     * Enforce line breaks after opening and before closing array brackets
     */
    "array-bracket-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside array brackets
     */
    "array-bracket-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce line breaks after each array element
     */
    "array-element-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside single-line blocks
     */
    "block-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent brace style for blocks
     */
    "brace-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce camelcase naming convention
     */
    camelcase?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce or disallow capitalization of the first letter of a comment
     */
    "capitalized-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow trailing commas
     */
    "comma-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after commas
     */
    "comma-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent comma style
     */
    "comma-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside computed property brackets
     */
    "computed-property-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent naming when capturing the current execution context
     */
    "consistent-this"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce at least one newline at the end of files
     */
    "eol-last"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    "func-call-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require function names to match the name of the variable or property to which they are assigned
     */
    "func-name-matching"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow named function expressions
     */
    "func-names"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either function declarations or expressions
     */
    "func-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce line breaks between arguments of a function call
     */
    "function-call-argument-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent line breaks inside function parentheses
     */
    "function-paren-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified identifiers
     */
    "id-blacklist"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce minimum and maximum identifier lengths
     */
    "id-length"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require identifiers to match a specified regular expression
     */
    "id-match"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the location of arrow function bodies
     */
    "implicit-arrow-linebreak"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent indentation
     */
    indent?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent indentation (legacy, deprecated)
     */
    "indent-legacy"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     */
    "jsx-quotes"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing between keys and values in object literal properties
     */
    "key-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after keywords
     */
    "keyword-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce position of line comments
     */
    "line-comment-position"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow an empty line between class members
     */
    "lines-between-class-members"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent linebreak style
     */
    "linebreak-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require empty lines around comments
     */
    "lines-around-comment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow newlines around directives
     */
    "lines-around-directive"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum depth that blocks can be nested
     */
    "max-depth"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum line length
     */
    "max-len"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of lines per file
     */
    "max-lines"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum depth that callbacks can be nested
     */
    "max-nested-callbacks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of parameters in function definitions
     */
    "max-params"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of statements allowed in function blocks
     */
    "max-statements"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a maximum number of statements allowed per line
     */
    "max-statements-per-line"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce a particular style for multiline comments
     */
    "multiline-comment-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce newlines between operands of ternary expressions
     */
    "multiline-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require constructor function names to begin with a capital letter
     */
    "new-cap"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow an empty line after var declarations
     */
    "newline-after-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require an empty line before return statements
     */
    "newline-before-return"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require a newline after each call in a method chain
     */
    "newline-per-chained-call"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parentheses when invoking a constructor with no arguments
     */
    "new-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow Array constructors
     */
    "no-array-constructor"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow bitwise operators
     */
    "no-bitwise"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow continue statements
     */
    "no-continue"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow inline comments after code
     */
    "no-inline-comments"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow if statements as the only statement in else blocks
     */
    "no-lonely-if"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow mixed binary operators
     */
    "no-mixed-operators"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow mixed spaces and tabs for indentation
     */
    "no-mixed-spaces-and-tabs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow use of chained assignment expressions
     */
    "no-multi-assign"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow multiple empty lines
     */
    "no-multiple-empty-lines"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow negated conditions
     */
    "no-negated-condition"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow nested ternary expressions
     */
    "no-nested-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow Object constructors
     */
    "no-new-object"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the unary operators ++ and --
     */
    "no-plusplus"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified syntax
     */
    "no-restricted-syntax"?: number | ("off" | "warn" | "error") | unknown[];
    "no-spaced-func"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow tabs in file
     */
    "no-tabs"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow ternary operators
     */
    "no-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow trailing whitespace at the end of lines
     */
    "no-trailing-spaces"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow dangling underscores in identifiers
     */
    "no-underscore-dangle"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow ternary operators when simpler alternatives exist
     */
    "no-unneeded-ternary"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow whitespace before properties
     */
    "no-whitespace-before-property"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the location of single-line statements
     */
    "nonblock-statement-body-position"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent line breaks inside braces
     */
    "object-curly-newline"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside braces
     */
    "object-curly-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce placing object properties on separate lines
     */
    "object-property-newline"?: number | ("off" | "warn" | "error") | unknown[];
    "object-shorthand"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce variables to be declared either together or separately in functions
     */
    "one-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow newlines around var declarations
     */
    "one-var-declaration-per-line"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow assignment operator shorthand where possible
     */
    "operator-assignment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent linebreak style for operators
     */
    "operator-linebreak"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow padding within blocks
     */
    "padded-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow padding lines between statements
     */
    "padding-line-between-statements"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require quotes around object literal property names
     */
    "quote-props"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    quotes?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require JSDoc comments
     */
    "require-jsdoc"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow semicolons instead of ASI
     */
    semi?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before and after semicolons
     */
    "semi-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce location of semicolons
     */
    "semi-style"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Requires object keys to be sorted
     */
    "sort-keys"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require variables within the same declaration block to be sorted
     */
    "sort-vars"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before blocks
     */
    "space-before-blocks"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before function definition opening parenthesis
     */
    "space-before-function-paren"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing after the // or /* in a comment
     */
    "spaced-comment"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require spacing around operators
     */
    "space-infix-ops"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing inside parentheses
     */
    "space-in-parens"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce consistent spacing before or after unary operators
     */
    "space-unary-ops"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Enforce spacing around colons of switch statements
     */
    "switch-colon-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow spacing between template tags and their literals
     */
    "template-tag-spacing"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require or disallow Unicode byte order mark (BOM)
     */
    "unicode-bom"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Require parenthesis around regex literals
     */
    "wrap-regex"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

declare type SyncPluginHooks =
	| 'augmentChunkHash'
	| 'onLog'
	| 'outputOptions'
	| 'renderDynamicImport'
	| 'resolveFileUrl'
	| 'resolveImportMeta';

/**
 * Type representing a Gulp Task.
 * @public
 */
declare type TaskFunction = TaskFunction_2;

declare namespace tasks {
    export {
        setProd,
        installDependencies,
        prodInstallDependencies,
        cleanWithGit,
        runScript,
        runWorkspaceScript,
        runWorkspaceScriptParallel,
        exit,
        runTestFiles,
        runTests,
        runApiExtrator,
        wait,
        incrementVersion,
        publishPackage,
        updatePackages,
        electron,
        tasks_2 as rollup
    }
}
export { tasks }

declare namespace tasks_2 {
    export {
        run,
        build,
        buildWithTests,
        buildAndRunTests
    }
}

declare type TemplateExpression =
	| string
	| number
	| ExecaReturnValue<string | Buffer_2>
	| ExecaSyncReturnValue<string | Buffer_2>
	| Array<string | number | ExecaReturnValue<string | Buffer_2> | ExecaSyncReturnValue<string | Buffer_2>>;

declare interface Time {
    "time-no-imperceptible"?: BooleanRule36;
    [k: string]: unknown | undefined;
}

declare namespace tools {
    export {
        electron_2 as electron,
        rollup_2 as rollup,
        runApiExtrator_2 as runApiExtrator,
        exec,
        exitAfter,
        exit_2 as exit,
        file,
        read,
        readJson,
        readYaml,
        write,
        writeJson,
        fs,
        cleanWithGit_2 as cleanWithGit,
        downloadLatestGithubRelease,
        downloadGithubRelease,
        ReleaseAssets,
        ReleaseAsset,
        DownloadLatestGithubReleaseOptions,
        DownloadGithubReleaseOptions,
        series,
        parallel,
        TaskFunction,
        setDisplayName,
        wait_2 as wait,
        readPackageJson,
        getTopLevelExports,
        getDependencies,
        getDevDependencies,
        getPackageType,
        getNodeVersionToUse,
        getPackageVersion,
        getPackageName,
        getPackageMain,
        PackageJsonSchema,
        addToPath,
        findDlxPath,
        findJsBuildToolPath,
        __dirname_2 as __dirname,
        dlxPath,
        cwd,
        projectPath,
        projectNodeModulesPath,
        gulpFileName,
        gulpFilePath,
        jsBuildToolPath,
        nodeModulesPath,
        binPath,
        selectNode,
        installDependencies_2 as installDependencies,
        runScript_2 as runScript,
        runWorkspaceScript_2 as runWorkspaceScript,
        runWorkspaceScriptParallel_2 as runWorkspaceScriptParallel,
        getPnpmPackages,
        incrementVersion_2 as incrementVersion,
        publishPackage_2 as publishPackage,
        updatePackages_2 as updatePackages,
        CountVersionOption,
        isProd,
        setProd_2 as setProd,
        resolveModule,
        stubPackages,
        stubPackage,
        StubPackageOptions,
        runTestFiles_2 as runTestFiles,
        runTests_2 as runTests
    }
}
export { tools }

declare type TransformerFactory<T extends TransformerStage> =
| StagedTransformerFactory<T>
| ProgramTransformerFactory<T>
| TypeCheckerTransformerFactory<T>;

declare type TransformerStage = keyof CustomTransformers;

declare type TransformHook = (
	this: TransformPluginContext,
	code: string,
	id: string
) => TransformResult;

declare interface TransformModuleJSON {
    	ast?: ProgramNode;
    	code: string;
    	// note if plugins use new this.cache to opt-out auto transform cache
    	customTransformCache: boolean;
    	originalCode: string;
    	originalSourcemap: ExistingDecodedSourceMap | null;
    	sourcemapChain: DecodedSourceMapOrMissing[];
    	transformDependencies: string[];
}

declare interface TransformPluginContext extends PluginContext {
    	debug: LoggingFunctionWithPosition;
    	error: (error: RollupError | string, pos?: number | { column: number; line: number }) => never;
    	getCombinedSourcemap: () => SourceMap;
    	info: LoggingFunctionWithPosition;
    	warn: LoggingFunctionWithPosition;
}

declare type TransformResult = string | NullValue | Partial<SourceDescription>;

declare interface TreeshakingOptions
	extends Partial<Omit<NormalizedTreeshakingOptions, 'moduleSideEffects'>> {
    	moduleSideEffects?: ModuleSideEffectsOption;
    	preset?: TreeshakingPreset;
}

declare type TreeshakingPreset = 'smallest' | 'safest' | 'recommended';

declare interface TypeCheckerTransformerFactory<T extends TransformerStage> {
    type: 'typeChecker';

    factory(typeChecker: TypeChecker): StagedTransformerFactory<T>;
}

declare interface Unit {
    "unit-blacklist"?: UnitRule;
    "unit-case"?: LowerUpperRule7;
    /**
     * Disallow unknown units
     */
    "unit-no-unknown"?: (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | (boolean &
    (
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | (true | [])
    | [
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
    ((true | {}) | CoreRule) & ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "unit-whitelist"?: UnitRule1;
    [k: string]: unknown | undefined;
}

/**
 * Specify a blacklist of disallowed units
 */
declare type UnitRule = (
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
(
| (null &
(
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
))
| ((
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
string)
| ((
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
unknown[])
);

/**
 * Specify a whitelist of allowed units
 */
declare type UnitRule1 = (
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
(
| (null &
(
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
))
| ((
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
string)
| ((
| null
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
)
| [
(
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
),
...((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
(
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
string)
| ((
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
) &
unknown[])
| (
| (
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
| []
| {}
)
| [
(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
),
...(
| "em"
| "ex"
| "px"
| "%"
| "rem"
| "vw"
| "vh"
| "vm"
| "vmin"
| "vmax"
| "ch"
| "in"
| "cm"
| "mm"
| "q"
| "pt"
| "pc"
| "deg"
| "grad"
| "rad"
| "turn"
| "ms"
| "s"
| "Hz"
| "kHz"
| "dpi"
| "dpcm"
| "dppx"
| "fr"
)[]
]
| CoreRule
)
))[]
]
) &
unknown[])
);

/**
 * Update all the dependencies with pnpm update.
 * Can directly be used as an Rollup Task.
 * @returns A Gulp Task.
 * @public
 */
declare function updatePackages(): TaskFunction;

/**
 * Update all the dependencies with pnpm update.
 * @public
 */
declare function updatePackages_2(): Promise<void>;

declare interface Value {
    /**
     * Specify lowercase or uppercase for keywords values
     */
    "value-keyword-case"?: (
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    (
    | (null &
    (
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ))
    | ((
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    string)
    | ((
    | null
    | ("lower" | "upper" | [])
    | [
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule)),
    (("lower" | "upper" | {}) | CoreRule) &
    (((("lower" | "upper" | {}) | CoreRule) & string) | (("lower" | "upper" | {}) | CoreRule))
    ]
    ) &
    unknown[])
    );
    "value-no-vendor-prefix"?: BooleanRule37;
    [k: string]: unknown | undefined;
}

declare interface ValueList {
    "value-list-comma-newline-after"?: NewlineRule11;
    "value-list-comma-newline-before"?: NewlineRule12;
    "value-list-comma-space-after"?: SpaceRule9;
    "value-list-comma-space-before"?: SpaceRule10;
    "value-list-max-empty-lines"?: IntegerRule6;
    [k: string]: unknown | undefined;
}

declare interface Variables {
    /**
     * Require or disallow initialization in var declarations
     */
    "init-declarations"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow catch clause parameters from shadowing variables in the outer scope
     */
    "no-catch-shadow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow deleting variables
     */
    "no-delete-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow labels that share a name with a variable
     */
    "no-label-var"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow specified global variables
     */
    "no-restricted-globals"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow var declarations from shadowing variables in the outer scope
     */
    "no-shadow"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow identifiers from shadowing restricted names
     */
    "no-shadow-restricted-names"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of undeclared variables unless mentioned in /*global * / comments
     */
    "no-undef"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of undefined as an identifier
     */
    "no-undefined"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow initializing variables to undefined
     */
    "no-undef-init"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow unused variables
     */
    "no-unused-vars"?: number | ("off" | "warn" | "error") | unknown[];
    /**
     * Disallow the use of variables before they are defined
     */
    "no-use-before-define"?: number | ("off" | "warn" | "error") | unknown[];
    [k: string]: unknown | undefined;
}

/**
 * Waits for the specified amount of milliseconds and then continues with the following tasks.
 * Can directly be used as an Rollup Task.
 * @param time - time in milliseconds to wait (default = 0).
 * @public
 */
declare function wait(time?: number): TaskFunction;

/**
 * Waits for the specified amount of milliseconds and then resolves the Promise.
 * @param time - time in milliseconds to wait (default = 0).
 * @public
 */
declare function wait_2(time?: number): Promise<void>;

declare type WarningHandlerWithDefault = (
	warning: RollupLog,
	defaultHandler: LoggingFunction
) => void;

declare type WatchChangeHook = (
	this: PluginContext,
	id: string,
	change: { event: ChangeEvent }
) => void;

declare interface WatcherOptions {
    	buildDelay?: number;
    	chokidar?: ChokidarOptions;
    	clearScreen?: boolean;
    	exclude?: string | RegExp | (string | RegExp)[];
    	include?: string | RegExp | (string | RegExp)[];
    	skipWrite?: boolean;
}

/**
 * An identifier mangler that leverages character frequency analysis to determine identifier precedence.
 */
declare interface WeightedIdentifierMangler extends SimpleIdentifierMangler {
    /**
     * Modifies the internal weighting of the input characters by the specified delta.
     * Will be invoked on the entire printed AST, and then deduct mangleable identifiers.
     * @param chars The characters to modify the weighting of.
     * @param delta The numeric weight to add to the characters.
     */
    consider(chars: string, delta: number): number;
    /**
     * Resets character weights.
     */
    reset(): void;
    /**
     * Sorts identifiers by character frequency, in preparation for calls to get(n).
     */
    sort(): void;
}

/**
 * Writes a file in the project.
 * @param relPath - path to the file relative to the project.
 * @param data - the string to write to the file.
 * @returns the content of the file.
 * @public
 */
declare function write(relPath: string, data: string): Promise<void>;

/**
 * Writes the content of a file in the project as json.
 * @param relPath - path to the file relative to the project.
 * @param data - the object to stringify and write in to the file.
 * @param pretty - if the output should be indented with two spaces (default = true).
 * @returns the parsed json data.
 * @public
 */
declare function writeJson(relPath: string, data: any, pretty?: boolean): Promise<void>;

export { }

}
  