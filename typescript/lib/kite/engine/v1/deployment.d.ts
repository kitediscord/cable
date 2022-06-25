import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * @generated from protobuf message kite.engine.v1.Deployment
 */
export interface Deployment {
    /**
     * @generated from protobuf field: fixed64 guild_id = 1;
     */
    guildId: string;
    /**
     * @generated from protobuf field: fixed64 plugin_id = 2;
     */
    pluginId: string;
    /**
     * @generated from protobuf field: fixed64 plugin_version_id = 3;
     */
    pluginVersionId: string;
    /**
     * @generated from protobuf field: bool enabled = 4;
     */
    enabled: boolean;
}
/**
 * @generated from protobuf message kite.engine.v1.DeploymentLogEntry
 */
export interface DeploymentLogEntry {
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * @generated from protobuf field: kite.engine.v1.DeploymentLogLevel level = 2;
     */
    level: DeploymentLogLevel;
    /**
     * @generated from protobuf field: string text = 3;
     */
    text: string;
}
/**
 * @generated from protobuf enum kite.engine.v1.DeploymentLogLevel
 */
export declare enum DeploymentLogLevel {
    /**
     * @generated from protobuf enum value: DEPLOYMENT_LOG_LEVEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0
}
declare class Deployment$Type extends MessageType<Deployment> {
    constructor();
    create(value?: PartialMessage<Deployment>): Deployment;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Deployment): Deployment;
    internalBinaryWrite(message: Deployment, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.Deployment
 */
export declare const Deployment: Deployment$Type;
declare class DeploymentLogEntry$Type extends MessageType<DeploymentLogEntry> {
    constructor();
    create(value?: PartialMessage<DeploymentLogEntry>): DeploymentLogEntry;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeploymentLogEntry): DeploymentLogEntry;
    internalBinaryWrite(message: DeploymentLogEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.DeploymentLogEntry
 */
export declare const DeploymentLogEntry: DeploymentLogEntry$Type;
export {};
