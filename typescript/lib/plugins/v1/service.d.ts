import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message plugins.v1.GetPluginRequest
 */
export interface GetPluginRequest {
}
/**
 * @generated from protobuf message plugins.v1.GetPluginResponse
 */
export interface GetPluginResponse {
}
declare class GetPluginRequest$Type extends MessageType<GetPluginRequest> {
    constructor();
    create(value?: PartialMessage<GetPluginRequest>): GetPluginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPluginRequest): GetPluginRequest;
    internalBinaryWrite(message: GetPluginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message plugins.v1.GetPluginRequest
 */
export declare const GetPluginRequest: GetPluginRequest$Type;
declare class GetPluginResponse$Type extends MessageType<GetPluginResponse> {
    constructor();
    create(value?: PartialMessage<GetPluginResponse>): GetPluginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPluginResponse): GetPluginResponse;
    internalBinaryWrite(message: GetPluginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message plugins.v1.GetPluginResponse
 */
export declare const GetPluginResponse: GetPluginResponse$Type;
/**
 * @generated ServiceType for protobuf service plugins.v1.PluginService
 */
export declare const PluginService: ServiceType;
export {};
