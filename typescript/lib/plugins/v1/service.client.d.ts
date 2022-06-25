import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetPluginResponse } from "./service";
import type { GetPluginRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service plugins.v1.PluginService
 */
export interface IPluginServiceClient {
    /**
     * @generated from protobuf rpc: GetPlugin(plugins.v1.GetPluginRequest) returns (plugins.v1.GetPluginResponse);
     */
    getPlugin(input: GetPluginRequest, options?: RpcOptions): UnaryCall<GetPluginRequest, GetPluginResponse>;
}
/**
 * @generated from protobuf service plugins.v1.PluginService
 */
export declare class PluginServiceClient implements IPluginServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: GetPlugin(plugins.v1.GetPluginRequest) returns (plugins.v1.GetPluginResponse);
     */
    getPlugin(input: GetPluginRequest, options?: RpcOptions): UnaryCall<GetPluginRequest, GetPluginResponse>;
}
