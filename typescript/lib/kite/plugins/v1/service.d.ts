import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PluginVersion } from "./version";
import { PluginTag } from "./plugin";
import { Plugin } from "./plugin";
/**
 * @generated from protobuf message kite.plugins.v1.GetPluginRequest
 */
export interface GetPluginRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message kite.plugins.v1.GetPluginResponse
 */
export interface GetPluginResponse {
    /**
     * @generated from protobuf field: kite.plugins.v1.Plugin plugin = 1;
     */
    plugin?: Plugin;
}
/**
 * @generated from protobuf message kite.plugins.v1.ListPluginsRequest
 */
export interface ListPluginsRequest {
    /**
     * @generated from protobuf field: optional uint32 limit = 1;
     */
    limit?: number;
    /**
     * @generated from protobuf field: optional uint32 skip = 2;
     */
    skip?: number;
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.PluginTag tags = 3;
     */
    tags: PluginTag[];
    /**
     * @generated from protobuf field: string text_search = 4;
     */
    textSearch: string;
}
/**
 * @generated from protobuf message kite.plugins.v1.ListPluginsResponse
 */
export interface ListPluginsResponse {
    /**
     * @generated from protobuf field: uint32 total = 1;
     */
    total: number;
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.Plugin plugins = 2;
     */
    plugins: Plugin[];
}
/**
 * @generated from protobuf message kite.plugins.v1.CreatePluginRequest
 */
export interface CreatePluginRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string short_description = 2;
     */
    shortDescription: string;
    /**
     * @generated from protobuf field: string long_description = 3;
     */
    longDescription: string;
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.PluginTag tags = 4;
     */
    tags: PluginTag[];
}
/**
 * @generated from protobuf message kite.plugins.v1.CreatePluginResponse
 */
export interface CreatePluginResponse {
    /**
     * @generated from protobuf field: kite.plugins.v1.Plugin plugin = 1;
     */
    plugin?: Plugin;
}
/**
 * @generated from protobuf message kite.plugins.v1.UpdatePluginRequest
 */
export interface UpdatePluginRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string short_description = 3;
     */
    shortDescription: string;
    /**
     * @generated from protobuf field: string long_description = 4;
     */
    longDescription: string;
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.PluginTag tags = 5;
     */
    tags: PluginTag[];
}
/**
 * @generated from protobuf message kite.plugins.v1.UpdatePluginResponse
 */
export interface UpdatePluginResponse {
    /**
     * @generated from protobuf field: kite.plugins.v1.Plugin plugin = 1;
     */
    plugin?: Plugin;
}
/**
 * @generated from protobuf message kite.plugins.v1.DeletePluginRequest
 */
export interface DeletePluginRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message kite.plugins.v1.DeletePluginResponse
 */
export interface DeletePluginResponse {
}
/**
 * @generated from protobuf message kite.plugins.v1.ListPluginVersionsRequest
 */
export interface ListPluginVersionsRequest {
}
/**
 * @generated from protobuf message kite.plugins.v1.ListPluginVersionsResponse
 */
export interface ListPluginVersionsResponse {
    /**
     * @generated from protobuf field: repeated kite.plugins.v1.PluginVersion versions = 1;
     */
    versions: PluginVersion[];
}
/**
 * @generated from protobuf message kite.plugins.v1.CreatePluginVersionRequest
 */
export interface CreatePluginVersionRequest {
    /**
     * @generated from protobuf field: string tag = 1;
     */
    tag: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: bytes module = 4;
     */
    module: Uint8Array;
}
/**
 * @generated from protobuf message kite.plugins.v1.CreatePluginVersionResponse
 */
export interface CreatePluginVersionResponse {
    /**
     * @generated from protobuf field: kite.plugins.v1.PluginVersion version = 1;
     */
    version?: PluginVersion;
}
/**
 * @generated from protobuf message kite.plugins.v1.DeletePluginVersionRequest
 */
export interface DeletePluginVersionRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message kite.plugins.v1.DeletePluginVersionResponse
 */
export interface DeletePluginVersionResponse {
}
/**
 * @generated from protobuf message kite.plugins.v1.UpdatePluginVersionRequest
 */
export interface UpdatePluginVersionRequest {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
}
/**
 * @generated from protobuf message kite.plugins.v1.UpdatePluginVersionResponse
 */
export interface UpdatePluginVersionResponse {
    /**
     * @generated from protobuf field: kite.plugins.v1.PluginVersion version = 1;
     */
    version?: PluginVersion;
}
declare class GetPluginRequest$Type extends MessageType<GetPluginRequest> {
    constructor();
    create(value?: PartialMessage<GetPluginRequest>): GetPluginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPluginRequest): GetPluginRequest;
    internalBinaryWrite(message: GetPluginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.GetPluginRequest
 */
export declare const GetPluginRequest: GetPluginRequest$Type;
declare class GetPluginResponse$Type extends MessageType<GetPluginResponse> {
    constructor();
    create(value?: PartialMessage<GetPluginResponse>): GetPluginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPluginResponse): GetPluginResponse;
    internalBinaryWrite(message: GetPluginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.GetPluginResponse
 */
export declare const GetPluginResponse: GetPluginResponse$Type;
declare class ListPluginsRequest$Type extends MessageType<ListPluginsRequest> {
    constructor();
    create(value?: PartialMessage<ListPluginsRequest>): ListPluginsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPluginsRequest): ListPluginsRequest;
    internalBinaryWrite(message: ListPluginsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.ListPluginsRequest
 */
export declare const ListPluginsRequest: ListPluginsRequest$Type;
declare class ListPluginsResponse$Type extends MessageType<ListPluginsResponse> {
    constructor();
    create(value?: PartialMessage<ListPluginsResponse>): ListPluginsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPluginsResponse): ListPluginsResponse;
    internalBinaryWrite(message: ListPluginsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.ListPluginsResponse
 */
export declare const ListPluginsResponse: ListPluginsResponse$Type;
declare class CreatePluginRequest$Type extends MessageType<CreatePluginRequest> {
    constructor();
    create(value?: PartialMessage<CreatePluginRequest>): CreatePluginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePluginRequest): CreatePluginRequest;
    internalBinaryWrite(message: CreatePluginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.CreatePluginRequest
 */
export declare const CreatePluginRequest: CreatePluginRequest$Type;
declare class CreatePluginResponse$Type extends MessageType<CreatePluginResponse> {
    constructor();
    create(value?: PartialMessage<CreatePluginResponse>): CreatePluginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePluginResponse): CreatePluginResponse;
    internalBinaryWrite(message: CreatePluginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.CreatePluginResponse
 */
export declare const CreatePluginResponse: CreatePluginResponse$Type;
declare class UpdatePluginRequest$Type extends MessageType<UpdatePluginRequest> {
    constructor();
    create(value?: PartialMessage<UpdatePluginRequest>): UpdatePluginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePluginRequest): UpdatePluginRequest;
    internalBinaryWrite(message: UpdatePluginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.UpdatePluginRequest
 */
export declare const UpdatePluginRequest: UpdatePluginRequest$Type;
declare class UpdatePluginResponse$Type extends MessageType<UpdatePluginResponse> {
    constructor();
    create(value?: PartialMessage<UpdatePluginResponse>): UpdatePluginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePluginResponse): UpdatePluginResponse;
    internalBinaryWrite(message: UpdatePluginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.UpdatePluginResponse
 */
export declare const UpdatePluginResponse: UpdatePluginResponse$Type;
declare class DeletePluginRequest$Type extends MessageType<DeletePluginRequest> {
    constructor();
    create(value?: PartialMessage<DeletePluginRequest>): DeletePluginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeletePluginRequest): DeletePluginRequest;
    internalBinaryWrite(message: DeletePluginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.DeletePluginRequest
 */
export declare const DeletePluginRequest: DeletePluginRequest$Type;
declare class DeletePluginResponse$Type extends MessageType<DeletePluginResponse> {
    constructor();
    create(value?: PartialMessage<DeletePluginResponse>): DeletePluginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeletePluginResponse): DeletePluginResponse;
    internalBinaryWrite(message: DeletePluginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.DeletePluginResponse
 */
export declare const DeletePluginResponse: DeletePluginResponse$Type;
declare class ListPluginVersionsRequest$Type extends MessageType<ListPluginVersionsRequest> {
    constructor();
    create(value?: PartialMessage<ListPluginVersionsRequest>): ListPluginVersionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPluginVersionsRequest): ListPluginVersionsRequest;
    internalBinaryWrite(message: ListPluginVersionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.ListPluginVersionsRequest
 */
export declare const ListPluginVersionsRequest: ListPluginVersionsRequest$Type;
declare class ListPluginVersionsResponse$Type extends MessageType<ListPluginVersionsResponse> {
    constructor();
    create(value?: PartialMessage<ListPluginVersionsResponse>): ListPluginVersionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPluginVersionsResponse): ListPluginVersionsResponse;
    internalBinaryWrite(message: ListPluginVersionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.ListPluginVersionsResponse
 */
export declare const ListPluginVersionsResponse: ListPluginVersionsResponse$Type;
declare class CreatePluginVersionRequest$Type extends MessageType<CreatePluginVersionRequest> {
    constructor();
    create(value?: PartialMessage<CreatePluginVersionRequest>): CreatePluginVersionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePluginVersionRequest): CreatePluginVersionRequest;
    internalBinaryWrite(message: CreatePluginVersionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.CreatePluginVersionRequest
 */
export declare const CreatePluginVersionRequest: CreatePluginVersionRequest$Type;
declare class CreatePluginVersionResponse$Type extends MessageType<CreatePluginVersionResponse> {
    constructor();
    create(value?: PartialMessage<CreatePluginVersionResponse>): CreatePluginVersionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePluginVersionResponse): CreatePluginVersionResponse;
    internalBinaryWrite(message: CreatePluginVersionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.CreatePluginVersionResponse
 */
export declare const CreatePluginVersionResponse: CreatePluginVersionResponse$Type;
declare class DeletePluginVersionRequest$Type extends MessageType<DeletePluginVersionRequest> {
    constructor();
    create(value?: PartialMessage<DeletePluginVersionRequest>): DeletePluginVersionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeletePluginVersionRequest): DeletePluginVersionRequest;
    internalBinaryWrite(message: DeletePluginVersionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.DeletePluginVersionRequest
 */
export declare const DeletePluginVersionRequest: DeletePluginVersionRequest$Type;
declare class DeletePluginVersionResponse$Type extends MessageType<DeletePluginVersionResponse> {
    constructor();
    create(value?: PartialMessage<DeletePluginVersionResponse>): DeletePluginVersionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeletePluginVersionResponse): DeletePluginVersionResponse;
    internalBinaryWrite(message: DeletePluginVersionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.DeletePluginVersionResponse
 */
export declare const DeletePluginVersionResponse: DeletePluginVersionResponse$Type;
declare class UpdatePluginVersionRequest$Type extends MessageType<UpdatePluginVersionRequest> {
    constructor();
    create(value?: PartialMessage<UpdatePluginVersionRequest>): UpdatePluginVersionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePluginVersionRequest): UpdatePluginVersionRequest;
    internalBinaryWrite(message: UpdatePluginVersionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.UpdatePluginVersionRequest
 */
export declare const UpdatePluginVersionRequest: UpdatePluginVersionRequest$Type;
declare class UpdatePluginVersionResponse$Type extends MessageType<UpdatePluginVersionResponse> {
    constructor();
    create(value?: PartialMessage<UpdatePluginVersionResponse>): UpdatePluginVersionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePluginVersionResponse): UpdatePluginVersionResponse;
    internalBinaryWrite(message: UpdatePluginVersionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.plugins.v1.UpdatePluginVersionResponse
 */
export declare const UpdatePluginVersionResponse: UpdatePluginVersionResponse$Type;
/**
 * @generated ServiceType for protobuf service kite.plugins.v1.PluginService
 */
export declare const PluginService: ServiceType;
export {};
