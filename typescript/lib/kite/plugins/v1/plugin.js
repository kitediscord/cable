import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum kite.plugins.v1.PluginTag
 */
export var PluginTag;
(function (PluginTag) {
    /**
     * @generated from protobuf enum value: PLUGIN_TAG_UNSPECIFIED = 0;
     */
    PluginTag[PluginTag["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: PLUGIN_TAG_UTILITY = 1;
     */
    PluginTag[PluginTag["UTILITY"] = 1] = "UTILITY";
})(PluginTag || (PluginTag = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Plugin$Type extends MessageType {
    constructor() {
        super("kite.plugins.v1.Plugin", [
            { no: 1, name: "id", kind: "scalar", T: 6 /*ScalarType.FIXED64*/ },
            { no: 2, name: "creator_id", kind: "scalar", T: 6 /*ScalarType.FIXED64*/ },
            { no: 3, name: "public", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "short_description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "long_description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "tags", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["kite.plugins.v1.PluginTag", PluginTag, "PLUGIN_TAG_"] }
        ]);
    }
    create(value) {
        const message = { id: "0", creatorId: "0", public: false, name: "", shortDescription: "", longDescription: "", tags: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* fixed64 id */ 1:
                    message.id = reader.fixed64().toString();
                    break;
                case /* fixed64 creator_id */ 2:
                    message.creatorId = reader.fixed64().toString();
                    break;
                case /* bool public */ 3:
                    message.public = reader.bool();
                    break;
                case /* string name */ 4:
                    message.name = reader.string();
                    break;
                case /* string short_description */ 5:
                    message.shortDescription = reader.string();
                    break;
                case /* string long_description */ 6:
                    message.longDescription = reader.string();
                    break;
                case /* repeated kite.plugins.v1.PluginTag tags */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tags.push(reader.int32());
                    else
                        message.tags.push(reader.int32());
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
    internalBinaryWrite(message, writer, options) {
        /* fixed64 id = 1; */
        if (message.id !== "0")
            writer.tag(1, WireType.Bit64).fixed64(message.id);
        /* fixed64 creator_id = 2; */
        if (message.creatorId !== "0")
            writer.tag(2, WireType.Bit64).fixed64(message.creatorId);
        /* bool public = 3; */
        if (message.public !== false)
            writer.tag(3, WireType.Varint).bool(message.public);
        /* string name = 4; */
        if (message.name !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.name);
        /* string short_description = 5; */
        if (message.shortDescription !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.shortDescription);
        /* string long_description = 6; */
        if (message.longDescription !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.longDescription);
        /* repeated kite.plugins.v1.PluginTag tags = 7; */
        if (message.tags.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tags.length; i++)
                writer.int32(message.tags[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.Plugin
 */
export const Plugin = new Plugin$Type();
