import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
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
declare class PluginVersion$Type extends MessageType<PluginVersion> {
    constructor();
    create(value?: PartialMessage<PluginVersion>): PluginVersion;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PluginVersion): PluginVersion;
    internalBinaryWrite(message: PluginVersion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.PluginVersion
 */
export declare const PluginVersion: PluginVersion$Type;
export {};
