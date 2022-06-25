import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class PluginVersion$Type extends MessageType {
    constructor() {
        super("kite.plugins.v1.PluginVersion", [
            { no: 1, name: "id", kind: "scalar", T: 6 /*ScalarType.FIXED64*/ },
            { no: 2, name: "tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "module_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { id: "0", tag: "", description: "", moduleHash: "" };
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
    internalBinaryWrite(message, writer, options) {
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
