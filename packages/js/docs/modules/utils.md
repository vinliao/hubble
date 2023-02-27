[@farcaster/js](../README.md) / [Exports](../modules.md) / utils

# Namespace: utils

## Table of contents

### Functions

- [deserializeBlockHash](utils.md#deserializeblockhash)
- [deserializeCastAddBody](utils.md#deserializecastaddbody)
- [deserializeCastId](utils.md#deserializecastid)
- [deserializeCastRemoveBody](utils.md#deserializecastremovebody)
- [deserializeEd25519PublicKey](utils.md#deserializeed25519publickey)
- [deserializeEd25519Signature](utils.md#deserializeed25519signature)
- [deserializeEip712Signature](utils.md#deserializeeip712signature)
- [deserializeEthAddress](utils.md#deserializeethaddress)
- [deserializeFname](utils.md#deserializefname)
- [deserializeHubEvent](utils.md#deserializehubevent)
- [deserializeIdRegistryEvent](utils.md#deserializeidregistryevent)
- [deserializeMessage](utils.md#deserializemessage)
- [deserializeMessageData](utils.md#deserializemessagedata)
- [deserializeMessageHash](utils.md#deserializemessagehash)
- [deserializeNameRegistryEvent](utils.md#deserializenameregistryevent)
- [deserializeReactionBody](utils.md#deserializereactionbody)
- [deserializeSignerBody](utils.md#deserializesignerbody)
- [deserializeTransactionHash](utils.md#deserializetransactionhash)
- [deserializeUserDataBody](utils.md#deserializeuserdatabody)
- [deserializeVerificationAddEthAddressBody](utils.md#deserializeverificationaddethaddressbody)
- [deserializeVerificationRemoveBody](utils.md#deserializeverificationremovebody)
- [serializeBlockHash](utils.md#serializeblockhash)
- [serializeCastAddBody](utils.md#serializecastaddbody)
- [serializeCastId](utils.md#serializecastid)
- [serializeCastRemoveBody](utils.md#serializecastremovebody)
- [serializeEd25519PublicKey](utils.md#serializeed25519publickey)
- [serializeEip712Signature](utils.md#serializeeip712signature)
- [serializeEthAddress](utils.md#serializeethaddress)
- [serializeFname](utils.md#serializefname)
- [serializeMessageHash](utils.md#serializemessagehash)
- [serializeReactionBody](utils.md#serializereactionbody)
- [serializeSignerBody](utils.md#serializesignerbody)
- [serializeUserDataBody](utils.md#serializeuserdatabody)
- [serializeVerificationAddEthAddressBody](utils.md#serializeverificationaddethaddressbody)
- [serializeVerificationRemoveBody](utils.md#serializeverificationremovebody)

## Functions

### deserializeBlockHash

▸ **deserializeBlockHash**(`bytes`): HubResult<string\>

Deserialize a block hash from a byte array to hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeCastAddBody

▸ **deserializeCastAddBody**(`protobuf`): HubResult<CastAddBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`CastAddBody`](protobufs.md#castaddbody) |

#### Returns

HubResult<CastAddBody\>

___

### deserializeCastId

▸ **deserializeCastId**(`protobuf`): HubResult<CastId\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`CastId`](protobufs.md#castid) |

#### Returns

HubResult<CastId\>

___

### deserializeCastRemoveBody

▸ **deserializeCastRemoveBody**(`protobuf`): HubResult<CastRemoveBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`CastRemoveBody`](protobufs.md#castremovebody) |

#### Returns

HubResult<CastRemoveBody\>

___

### deserializeEd25519PublicKey

▸ **deserializeEd25519PublicKey**(`publicKey`): HubResult<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeEd25519Signature

▸ **deserializeEd25519Signature**(`bytes`): HubResult<string\>

Deserialize an Ed25519 signature from a byte array to hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeEip712Signature

▸ **deserializeEip712Signature**(`bytes`): HubResult<string\>

Deserialize an EIP-712 signature from a byte array to hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeEthAddress

▸ **deserializeEthAddress**(`ethAddress`): HubResult<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeFname

▸ **deserializeFname**(`fname`): HubResult<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fname` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeHubEvent

▸ **deserializeHubEvent**(`protobuf`): HubResult<HubEvent\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`HubEvent`](protobufs.md#hubevent) |

#### Returns

HubResult<HubEvent\>

___

### deserializeIdRegistryEvent

▸ **deserializeIdRegistryEvent**(`protobuf`): HubResult<Readonly<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`IdRegistryEvent`](protobufs.md#idregistryevent) |

#### Returns

HubResult<Readonly<Object\>\>

___

### deserializeMessage

▸ **deserializeMessage**(`protobuf`): HubResult<Readonly<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`Message`](protobufs.md#message) |

#### Returns

HubResult<Readonly<Object\>\>

___

### deserializeMessageData

▸ **deserializeMessageData**(`protobuf`): HubResult<MessageData<MessageBody, MessageType\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`MessageData`](protobufs.md#messagedata) |

#### Returns

HubResult<MessageData<MessageBody, MessageType\>\>

___

### deserializeMessageHash

▸ **deserializeMessageHash**(`bytes`): HubResult<string\>

Deserialize a message hash from a byte array to hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeNameRegistryEvent

▸ **deserializeNameRegistryEvent**(`protobuf`): HubResult<Readonly<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`NameRegistryEvent`](protobufs.md#nameregistryevent) |

#### Returns

HubResult<Readonly<Object\>\>

___

### deserializeReactionBody

▸ **deserializeReactionBody**(`protobuf`): HubResult<ReactionBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`ReactionBody`](protobufs.md#reactionbody) |

#### Returns

HubResult<ReactionBody\>

___

### deserializeSignerBody

▸ **deserializeSignerBody**(`protobuf`): HubResult<SignerBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`SignerBody`](protobufs.md#signerbody) |

#### Returns

HubResult<SignerBody\>

___

### deserializeTransactionHash

▸ **deserializeTransactionHash**(`bytes`): HubResult<string\>

Deserialize a transaction hash from a byte array to hex string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

HubResult<string\>

___

### deserializeUserDataBody

▸ **deserializeUserDataBody**(`protobuf`): HubResult<UserDataBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`UserDataBody`](protobufs.md#userdatabody) |

#### Returns

HubResult<UserDataBody\>

___

### deserializeVerificationAddEthAddressBody

▸ **deserializeVerificationAddEthAddressBody**(`protobuf`): HubResult<VerificationAddEthAddressBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`VerificationAddEthAddressBody`](protobufs.md#verificationaddethaddressbody) |

#### Returns

HubResult<VerificationAddEthAddressBody\>

___

### deserializeVerificationRemoveBody

▸ **deserializeVerificationRemoveBody**(`protobuf`): HubResult<VerificationRemoveBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `protobuf` | [`VerificationRemoveBody`](protobufs.md#verificationremovebody) |

#### Returns

HubResult<VerificationRemoveBody\>

___

### serializeBlockHash

▸ **serializeBlockHash**(`hash`): HubResult<Uint8Array\>

Serializes a block hash from a hex string to byte array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeCastAddBody

▸ **serializeCastAddBody**(`body`): HubResult<CastAddBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`CastAddBody`](types.md#castaddbody) |

#### Returns

HubResult<CastAddBody\>

___

### serializeCastId

▸ **serializeCastId**(`castId`): HubResult<CastId\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `castId` | [`CastId`](types.md#castid) |

#### Returns

HubResult<CastId\>

___

### serializeCastRemoveBody

▸ **serializeCastRemoveBody**(`body`): HubResult<CastRemoveBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`CastRemoveBody`](types.md#castremovebody) |

#### Returns

HubResult<CastRemoveBody\>

___

### serializeEd25519PublicKey

▸ **serializeEd25519PublicKey**(`publicKey`): HubResult<Uint8Array\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeEip712Signature

▸ **serializeEip712Signature**(`hash`): HubResult<Uint8Array\>

Serializes an EIP-712 from a hex string to byte array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeEthAddress

▸ **serializeEthAddress**(`ethAddress`): HubResult<Uint8Array\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeFname

▸ **serializeFname**(`fname`): HubResult<Uint8Array\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fname` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeMessageHash

▸ **serializeMessageHash**(`hash`): HubResult<Uint8Array\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

HubResult<Uint8Array\>

___

### serializeReactionBody

▸ **serializeReactionBody**(`body`): HubResult<ReactionBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`ReactionBody`](types.md#reactionbody) |

#### Returns

HubResult<ReactionBody\>

___

### serializeSignerBody

▸ **serializeSignerBody**(`body`): HubResult<SignerBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`SignerBody`](types.md#signerbody) |

#### Returns

HubResult<SignerBody\>

___

### serializeUserDataBody

▸ **serializeUserDataBody**(`body`): HubResult<UserDataBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`UserDataBody`](types.md#userdatabody) |

#### Returns

HubResult<UserDataBody\>

___

### serializeVerificationAddEthAddressBody

▸ **serializeVerificationAddEthAddressBody**(`body`): HubResult<VerificationAddEthAddressBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`VerificationAddEthAddressBody`](types.md#verificationaddethaddressbody) |

#### Returns

HubResult<VerificationAddEthAddressBody\>

___

### serializeVerificationRemoveBody

▸ **serializeVerificationRemoveBody**(`body`): HubResult<VerificationRemoveBody\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`VerificationRemoveBody`](types.md#verificationremovebody) |

#### Returns

HubResult<VerificationRemoveBody\>
