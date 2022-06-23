// @generated by protobuf-ts 2.7.0 with parameter long_type_string
// @generated from protobuf file "kite/plugins/v1/version.proto" (package "kite.plugins.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message kite.plugins.v1.PluginVersion
 */
export interface PluginVersion {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string tag = 2;
     */
    tag: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: string module_hash = 4;
     */
    moduleHash: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class PluginVersion$Type extends MessageType<PluginVersion> {
    constructor() {
        super("kite.plugins.v1.PluginVersion", [
            { no: 1, name: "id", kind: "scalar", T: 6 /*ScalarType.FIXED64*/ },
            { no: 2, name: "tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "module_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PluginVersion>): PluginVersion {
        const message = { id: "0", tag: "", description: "", moduleHash: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PluginVersion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PluginVersion): PluginVersion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* fixed64 id */ 1:
                    message.id = reader.fixed64().toString();
                    break;
                case /* string tag */ 2:
                    message.tag = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* string module_hash */ 4:
                    message.moduleHash = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PluginVersion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* fixed64 id = 1; */
        if (message.id !== "0")
            writer.tag(1, WireType.Bit64).fixed64(message.id);
        /* string tag = 2; */
        if (message.tag !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.tag);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* string module_hash = 4; */
        if (message.moduleHash !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.moduleHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.PluginVersion
 */
export const PluginVersion = new PluginVersion$Type();