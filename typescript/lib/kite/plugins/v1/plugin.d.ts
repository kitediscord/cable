import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message kite.plugins.v1.Plugin
 */
export interface Plugin {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: fixed64 creator_id = 2;
     */
    creatorId: string;
    /**
     * @generated from protobuf field: bool public = 3;
     */
    public: boolean;
    /**
     * @generated from protobuf field: string name = 4;
     */
    name: string;
    /**
     * @generated from protobuf field: string short_description = 5;
     */
    shortDescription: string;
    /**
     * @generated from protobuf field: string long_description = 6;
     */
    longDescription: string;
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.PluginTag tags = 7;
     */
    tags: PluginTag[];
}
/**
 * @generated from protobuf enum kite.plugins.v1.PluginTag
 */
export declare enum PluginTag {
    /**
     * @generated from protobuf enum value: PLUGIN_TAG_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PLUGIN_TAG_UTILITY = 1;
     */
    UTILITY = 1
}
declare class Plugin$Type extends MessageType<Plugin> {
    constructor();
    create(value?: PartialMessage<Plugin>): Plugin;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Plugin): Plugin;
    internalBinaryWrite(message: Plugin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.Plugin
 */
export declare const Plugin: Plugin$Type;
export {};
