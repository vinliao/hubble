[@farcaster/js](../README.md) / [Exports](../modules.md) / Client

# Class: Client

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [\_grpcClient](Client.md#_grpcclient)

### Methods

- [getAllCastMessagesByFid](Client.md#getallcastmessagesbyfid)
- [getAllReactionMessagesByFid](Client.md#getallreactionmessagesbyfid)
- [getAllSignerMessagesByFid](Client.md#getallsignermessagesbyfid)
- [getAllUserDataMessagesByFid](Client.md#getalluserdatamessagesbyfid)
- [getAllVerificationMessagesByFid](Client.md#getallverificationmessagesbyfid)
- [getCast](Client.md#getcast)
- [getCastsByFid](Client.md#getcastsbyfid)
- [getCastsByMention](Client.md#getcastsbymention)
- [getCastsByParent](Client.md#getcastsbyparent)
- [getIdRegistryEvent](Client.md#getidregistryevent)
- [getNameRegistryEvent](Client.md#getnameregistryevent)
- [getReaction](Client.md#getreaction)
- [getReactionsByCast](Client.md#getreactionsbycast)
- [getReactionsByFid](Client.md#getreactionsbyfid)
- [getSigner](Client.md#getsigner)
- [getSignersByFid](Client.md#getsignersbyfid)
- [getUserData](Client.md#getuserdata)
- [getUserDataByFid](Client.md#getuserdatabyfid)
- [getVerification](Client.md#getverification)
- [getVerificationsByFid](Client.md#getverificationsbyfid)
- [submitMessage](Client.md#submitmessage)
- [subscribe](Client.md#subscribe)

## Constructors

### constructor

• **new Client**(`address`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

## Properties

### \_grpcClient

• **\_grpcClient**: `HubRpcClient`

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)

...
```

**`Param`**

## Methods

### getAllCastMessagesByFid

▸ **getAllCastMessagesByFid**(`fid`): HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

...

___

### getAllReactionMessagesByFid

▸ **getAllReactionMessagesByFid**(`fid`): HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

...

___

### getAllSignerMessagesByFid

▸ **getAllSignerMessagesByFid**(`fid`): HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

...

___

### getAllUserDataMessagesByFid

▸ **getAllUserDataMessagesByFid**(`fid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getAllVerificationMessagesByFid

▸ **getAllVerificationMessagesByFid**(`fid`): HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<(Readonly<Object\> \| Readonly<Object\>)[]\>

...

___

### getCast

▸ **getCast**(`fid`, `hash`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `hash` | `string` |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getCastsByFid

▸ **getCastsByFid**(`fid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getCastsByMention

▸ **getCastsByMention**(`mentionFid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mentionFid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getCastsByParent

▸ **getCastsByParent**(`parent`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`CastId`](../modules/types.md#castid) |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getIdRegistryEvent

▸ **getIdRegistryEvent**(`fid`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getNameRegistryEvent

▸ **getNameRegistryEvent**(`fname`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fname` | `string` |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getReaction

▸ **getReaction**(`fid`, `type`, `cast`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `type` | [`ReactionType`](../enums/protobufs.ReactionType.md) |
| `cast` | [`CastId`](../modules/types.md#castid) |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getReactionsByCast

▸ **getReactionsByCast**(`cast`, `type?`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cast` | [`CastId`](../modules/types.md#castid) |
| `type?` | [`ReactionType`](../enums/protobufs.ReactionType.md) |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getReactionsByFid

▸ **getReactionsByFid**(`fid`, `type?`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `type?` | [`ReactionType`](../enums/protobufs.ReactionType.md) |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getSigner

▸ **getSigner**(`fid`, `signer`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `signer` | `string` |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getSignersByFid

▸ **getSignersByFid**(`fid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getUserData

▸ **getUserData**(`fid`, `type`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `type` | [`UserDataType`](../enums/protobufs.UserDataType.md) |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getUserDataByFid

▸ **getUserDataByFid**(`fid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### getVerification

▸ **getVerification**(`fid`, `address`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |
| `address` | `string` |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### getVerificationsByFid

▸ **getVerificationsByFid**(`fid`): HubAsyncResult<Readonly<Object\>[]\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `fid` | `number` |

#### Returns

HubAsyncResult<Readonly<Object\>[]\>

...

___

### submitMessage

▸ **submitMessage**(`message`): HubAsyncResult<Readonly<Object\>\>

TODO DOCS: description

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Readonly`<{ `_protobuf`: [`Message`](../modules/protobufs.md#message) ; `data`: [`MessageData`](../modules/types.md#messagedata)<[`MessageBody`](../modules/types.md#messagebody), [`MessageType`](../enums/protobufs.MessageType.md)\> ; `hash`: `string` ; `hashScheme`: [`HashScheme`](../enums/protobufs.HashScheme.md) ; `signature`: `string` ; `signatureScheme`: [`SignatureScheme`](../enums/protobufs.SignatureScheme.md) ; `signer`: `string`  }\> |

#### Returns

HubAsyncResult<Readonly<Object\>\>

...

___

### subscribe

▸ **subscribe**(`filters?`): Promise<HubResult<ClientReadableStream<HubEvent\>\>\>

TODO DOCS: description

Note: Data from this stream can be parsed using `deserializeHubEvent`.

TODO DOCS: usage example, here's the structure:

**`Example`**

```typescript
import { ... } from '@farcaster/js';

const client = new Client(...)
const result = await client.get...
console.log(result)

// Output: ...
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`EventFilters`](../modules.md#eventfilters) |

#### Returns

Promise<HubResult<ClientReadableStream<HubEvent\>\>\>

...
