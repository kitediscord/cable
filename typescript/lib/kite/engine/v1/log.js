import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * @generated from protobuf enum kite.engine.v1.DeploymentLogLevel
 */
export var DeploymentLogLevel;
(function (DeploymentLogLevel) {
    /**
     * @generated from protobuf enum value: DEPLOYMENT_LOG_LEVEL_UNSPECIFIED = 0;
     */
    DeploymentLogLevel[DeploymentLogLevel["UNSPECIFIED"] = 0] = "UNSPECIFIED";
})(DeploymentLogLevel || (DeploymentLogLevel = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DeploymentLogEntry$Type extends MessageType {
    constructor() {
        super("kite.engine.v1.DeploymentLogEntry", [
            { no: 1, name: "timestamp", kind: "message", T: () => Timestamp },
            { no: 2, name: "level", kind: "enum", T: () => ["kite.engine.v1.DeploymentLogLevel", DeploymentLogLevel, "DEPLOYMENT_LOG_LEVEL_"] },
            { no: 3, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { level: 0, text: "" };
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
                case /* google.protobuf.Timestamp timestamp */ 1:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* kite.engine.v1.DeploymentLogLevel level */ 2:
                    message.level = reader.int32();
                    break;
                case /* string text */ 3:
                    message.text = reader.string();
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
        /* google.protobuf.Timestamp timestamp = 1; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* kite.engine.v1.DeploymentLogLevel level = 2; */
        if (message.level !== 0)
            writer.tag(2, WireType.Varint).int32(message.level);
        /* string text = 3; */
        if (message.text !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.text);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.DeploymentLogEntry
 */
export const DeploymentLogEntry = new DeploymentLogEntry$Type();
