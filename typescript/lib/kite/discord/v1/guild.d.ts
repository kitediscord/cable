import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message kite.discord.v1.Guild
 */
export interface Guild {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
declare class Guild$Type extends MessageType<Guild> {
    constructor();
    create(value?: PartialMessage<Guild>): Guild;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Guild): Guild;
    internalBinaryWrite(message: Guild, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.discord.v1.Guild
 */
export declare const Guild: Guild$Type;
export {};
