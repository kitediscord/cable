import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Guild } from "./guild";
/**
 * @generated from protobuf message kite.discord.v1.ListGuildsRequest
 */
export interface ListGuildsRequest {
    /**
     * @generated from protobuf field: repeated fixed64 ids = 1;
     */
    ids: string[];
}
/**
 * @generated from protobuf message kite.discord.v1.ListGuildsResponse
 */
export interface ListGuildsResponse {
    /**
     * @generated from protobuf field: repeated kite.discord.v1.Guild guilds = 1;
     */
    guilds: Guild[];
}
/**
 * @generated from protobuf message kite.discord.v1.GetGuildRequest
 */
export interface GetGuildRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message kite.discord.v1.GetGuildResponse
 */
export interface GetGuildResponse {
    /**
     * @generated from protobuf field: kite.discord.v1.Guild guild = 1;
     */
    guild?: Guild;
}
declare class ListGuildsRequest$Type extends MessageType<ListGuildsRequest> {
    constructor();
    create(value?: PartialMessage<ListGuildsRequest>): ListGuildsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListGuildsRequest): ListGuildsRequest;
    internalBinaryWrite(message: ListGuildsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.discord.v1.ListGuildsRequest
 */
export declare const ListGuildsRequest: ListGuildsRequest$Type;
declare class ListGuildsResponse$Type extends MessageType<ListGuildsResponse> {
    constructor();
    create(value?: PartialMessage<ListGuildsResponse>): ListGuildsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListGuildsResponse): ListGuildsResponse;
    internalBinaryWrite(message: ListGuildsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.discord.v1.ListGuildsResponse
 */
export declare const ListGuildsResponse: ListGuildsResponse$Type;
declare class GetGuildRequest$Type extends MessageType<GetGuildRequest> {
    constructor();
    create(value?: PartialMessage<GetGuildRequest>): GetGuildRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetGuildRequest): GetGuildRequest;
    internalBinaryWrite(message: GetGuildRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.discord.v1.GetGuildRequest
 */
export declare const GetGuildRequest: GetGuildRequest$Type;
declare class GetGuildResponse$Type extends MessageType<GetGuildResponse> {
    constructor();
    create(value?: PartialMessage<GetGuildResponse>): GetGuildResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetGuildResponse): GetGuildResponse;
    internalBinaryWrite(message: GetGuildResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.discord.v1.GetGuildResponse
 */
export declare const GetGuildResponse: GetGuildResponse$Type;
/**
 * @generated ServiceType for protobuf service kite.discord.v1.DiscordService
 */
export declare const DiscordService: ServiceType;
export {};
