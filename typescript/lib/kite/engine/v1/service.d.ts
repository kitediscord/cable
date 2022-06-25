import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DeploymentLogEntry } from "./deployment";
import { Deployment } from "./deployment";
/**
 * @generated from protobuf message kite.engine.v1.CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
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
 * @generated from protobuf message kite.engine.v1.CreateDeploymentResponse
 */
export interface CreateDeploymentResponse {
    /**
     * @generated from protobuf field: kite.engine.v1.Deployment deployment = 1;
     */
    deployment?: Deployment;
}
/**
 * @generated from protobuf message kite.engine.v1.UpdateDeploymentRequest
 */
export interface UpdateDeploymentRequest {
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
 * @generated from protobuf message kite.engine.v1.UpdateDeploymentResponse
 */
export interface UpdateDeploymentResponse {
    /**
     * @generated from protobuf field: kite.engine.v1.Deployment deployment = 1;
     */
    deployment?: Deployment;
}
/**
 * @generated from protobuf message kite.engine.v1.DeleteDeploymentRequest
 */
export interface DeleteDeploymentRequest {
    /**
     * @generated from protobuf field: fixed64 guild_id = 1;
     */
    guildId: string;
    /**
     * @generated from protobuf field: fixed64 plugin_id = 2;
     */
    pluginId: string;
}
/**
 * @generated from protobuf message kite.engine.v1.DeleteDeploymentResponse
 */
export interface DeleteDeploymentResponse {
}
/**
 * @generated from protobuf message kite.engine.v1.ListDeploymentsRequest
 */
export interface ListDeploymentsRequest {
    /**
     * @generated from protobuf field: fixed64 guild_id = 1;
     */
    guildId: string;
}
/**
 * @generated from protobuf message kite.engine.v1.ListDeploymentsResponse
 */
export interface ListDeploymentsResponse {
    /**
     * @generated from protobuf field: repeated kite.engine.v1.Deployment deployments = 1;
     */
    deployments: Deployment[];
}
/**
 * @generated from protobuf message kite.engine.v1.GetDeploymentRequest
 */
export interface GetDeploymentRequest {
    /**
     * @generated from protobuf field: fixed64 guild_id = 1;
     */
    guildId: string;
    /**
     * @generated from protobuf field: fixed64 plugin_id = 2;
     */
    pluginId: string;
}
/**
 * @generated from protobuf message kite.engine.v1.GetDeploymentResponse
 */
export interface GetDeploymentResponse {
    /**
     * @generated from protobuf field: kite.engine.v1.Deployment deployment = 1;
     */
    deployment?: Deployment;
}
/**
 * @generated from protobuf message kite.engine.v1.StreamDeploymentLogsRequest
 */
export interface StreamDeploymentLogsRequest {
    /**
     * @generated from protobuf field: fixed64 guild_id = 1;
     */
    guildId: string;
    /**
     * @generated from protobuf field: fixed64 plugin_id = 2;
     */
    pluginId: string;
    /**
     * @generated from protobuf field: optional bool replay = 3;
     */
    replay?: boolean;
}
/**
 * @generated from protobuf message kite.engine.v1.StreamDeploymentLogsResponse
 */
export interface StreamDeploymentLogsResponse {
    /**
     * @generated from protobuf field: kite.engine.v1.DeploymentLogEntry entry = 1;
     */
    entry?: DeploymentLogEntry;
}
declare class CreateDeploymentRequest$Type extends MessageType<CreateDeploymentRequest> {
    constructor();
    create(value?: PartialMessage<CreateDeploymentRequest>): CreateDeploymentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDeploymentRequest): CreateDeploymentRequest;
    internalBinaryWrite(message: CreateDeploymentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.CreateDeploymentRequest
 */
export declare const CreateDeploymentRequest: CreateDeploymentRequest$Type;
declare class CreateDeploymentResponse$Type extends MessageType<CreateDeploymentResponse> {
    constructor();
    create(value?: PartialMessage<CreateDeploymentResponse>): CreateDeploymentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDeploymentResponse): CreateDeploymentResponse;
    internalBinaryWrite(message: CreateDeploymentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.CreateDeploymentResponse
 */
export declare const CreateDeploymentResponse: CreateDeploymentResponse$Type;
declare class UpdateDeploymentRequest$Type extends MessageType<UpdateDeploymentRequest> {
    constructor();
    create(value?: PartialMessage<UpdateDeploymentRequest>): UpdateDeploymentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateDeploymentRequest): UpdateDeploymentRequest;
    internalBinaryWrite(message: UpdateDeploymentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.UpdateDeploymentRequest
 */
export declare const UpdateDeploymentRequest: UpdateDeploymentRequest$Type;
declare class UpdateDeploymentResponse$Type extends MessageType<UpdateDeploymentResponse> {
    constructor();
    create(value?: PartialMessage<UpdateDeploymentResponse>): UpdateDeploymentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateDeploymentResponse): UpdateDeploymentResponse;
    internalBinaryWrite(message: UpdateDeploymentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.UpdateDeploymentResponse
 */
export declare const UpdateDeploymentResponse: UpdateDeploymentResponse$Type;
declare class DeleteDeploymentRequest$Type extends MessageType<DeleteDeploymentRequest> {
    constructor();
    create(value?: PartialMessage<DeleteDeploymentRequest>): DeleteDeploymentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteDeploymentRequest): DeleteDeploymentRequest;
    internalBinaryWrite(message: DeleteDeploymentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.DeleteDeploymentRequest
 */
export declare const DeleteDeploymentRequest: DeleteDeploymentRequest$Type;
declare class DeleteDeploymentResponse$Type extends MessageType<DeleteDeploymentResponse> {
    constructor();
    create(value?: PartialMessage<DeleteDeploymentResponse>): DeleteDeploymentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteDeploymentResponse): DeleteDeploymentResponse;
    internalBinaryWrite(message: DeleteDeploymentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.DeleteDeploymentResponse
 */
export declare const DeleteDeploymentResponse: DeleteDeploymentResponse$Type;
declare class ListDeploymentsRequest$Type extends MessageType<ListDeploymentsRequest> {
    constructor();
    create(value?: PartialMessage<ListDeploymentsRequest>): ListDeploymentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListDeploymentsRequest): ListDeploymentsRequest;
    internalBinaryWrite(message: ListDeploymentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.ListDeploymentsRequest
 */
export declare const ListDeploymentsRequest: ListDeploymentsRequest$Type;
declare class ListDeploymentsResponse$Type extends MessageType<ListDeploymentsResponse> {
    constructor();
    create(value?: PartialMessage<ListDeploymentsResponse>): ListDeploymentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListDeploymentsResponse): ListDeploymentsResponse;
    internalBinaryWrite(message: ListDeploymentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.ListDeploymentsResponse
 */
export declare const ListDeploymentsResponse: ListDeploymentsResponse$Type;
declare class GetDeploymentRequest$Type extends MessageType<GetDeploymentRequest> {
    constructor();
    create(value?: PartialMessage<GetDeploymentRequest>): GetDeploymentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDeploymentRequest): GetDeploymentRequest;
    internalBinaryWrite(message: GetDeploymentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.GetDeploymentRequest
 */
export declare const GetDeploymentRequest: GetDeploymentRequest$Type;
declare class GetDeploymentResponse$Type extends MessageType<GetDeploymentResponse> {
    constructor();
    create(value?: PartialMessage<GetDeploymentResponse>): GetDeploymentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDeploymentResponse): GetDeploymentResponse;
    internalBinaryWrite(message: GetDeploymentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.GetDeploymentResponse
 */
export declare const GetDeploymentResponse: GetDeploymentResponse$Type;
declare class StreamDeploymentLogsRequest$Type extends MessageType<StreamDeploymentLogsRequest> {
    constructor();
    create(value?: PartialMessage<StreamDeploymentLogsRequest>): StreamDeploymentLogsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamDeploymentLogsRequest): StreamDeploymentLogsRequest;
    internalBinaryWrite(message: StreamDeploymentLogsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.StreamDeploymentLogsRequest
 */
export declare const StreamDeploymentLogsRequest: StreamDeploymentLogsRequest$Type;
declare class StreamDeploymentLogsResponse$Type extends MessageType<StreamDeploymentLogsResponse> {
    constructor();
    create(value?: PartialMessage<StreamDeploymentLogsResponse>): StreamDeploymentLogsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamDeploymentLogsResponse): StreamDeploymentLogsResponse;
    internalBinaryWrite(message: StreamDeploymentLogsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message kite.engine.v1.StreamDeploymentLogsResponse
 */
export declare const StreamDeploymentLogsResponse: StreamDeploymentLogsResponse$Type;
/**
 * @generated ServiceType for protobuf service kite.engine.v1.EngineService
 */
export declare const EngineService: ServiceType;
export {};
