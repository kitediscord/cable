import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { UpdatePluginVersionResponse } from "./service";
import type { UpdatePluginVersionRequest } from "./service";
import type { DeletePluginVersionResponse } from "./service";
import type { DeletePluginVersionRequest } from "./service";
import type { CreatePluginVersionResponse } from "./service";
import type { CreatePluginVersionRequest } from "./service";
import type { ListPluginVersionsResponse } from "./service";
import type { ListPluginVersionsRequest } from "./service";
import type { DeletePluginResponse } from "./service";
import type { DeletePluginRequest } from "./service";
import type { UpdatePluginResponse } from "./service";
import type { UpdatePluginRequest } from "./service";
import type { CreatePluginResponse } from "./service";
import type { CreatePluginRequest } from "./service";
import type { ListPluginsResponse } from "./service";
import type { ListPluginsRequest } from "./service";
import type { GetPluginResponse } from "./service";
import type { GetPluginRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.plugins.v1.PluginService
 */
export interface IPluginServiceClient {
    /**
     * @generated from protobuf rpc: GetPlugin(kite.plugins.v1.GetPluginRequest) returns (kite.plugins.v1.GetPluginResponse);
     */
    getPlugin(input: GetPluginRequest, options?: RpcOptions): UnaryCall<GetPluginRequest, GetPluginResponse>;
    /**
     * @generated from protobuf rpc: ListPlugins(kite.plugins.v1.ListPluginsRequest) returns (kite.plugins.v1.ListPluginsResponse);
     */
    listPlugins(input: ListPluginsRequest, options?: RpcOptions): UnaryCall<ListPluginsRequest, ListPluginsResponse>;
    /**
     * @generated from protobuf rpc: CreatePlugin(kite.plugins.v1.CreatePluginRequest) returns (kite.plugins.v1.CreatePluginResponse);
     */
    createPlugin(input: CreatePluginRequest, options?: RpcOptions): UnaryCall<CreatePluginRequest, CreatePluginResponse>;
    /**
     * @generated from protobuf rpc: UpdatePlugin(kite.plugins.v1.UpdatePluginRequest) returns (kite.plugins.v1.UpdatePluginResponse);
     */
    updatePlugin(input: UpdatePluginRequest, options?: RpcOptions): UnaryCall<UpdatePluginRequest, UpdatePluginResponse>;
    /**
     * @generated from protobuf rpc: DeletePlugin(kite.plugins.v1.DeletePluginRequest) returns (kite.plugins.v1.DeletePluginResponse);
     */
    deletePlugin(input: DeletePluginRequest, options?: RpcOptions): UnaryCall<DeletePluginRequest, DeletePluginResponse>;
    /**
     * @generated from protobuf rpc: ListPluginVersions(kite.plugins.v1.ListPluginVersionsRequest) returns (kite.plugins.v1.ListPluginVersionsResponse);
     */
    listPluginVersions(input: ListPluginVersionsRequest, options?: RpcOptions): UnaryCall<ListPluginVersionsRequest, ListPluginVersionsResponse>;
    /**
     * @generated from protobuf rpc: CreatePluginVersion(kite.plugins.v1.CreatePluginVersionRequest) returns (kite.plugins.v1.CreatePluginVersionResponse);
     */
    createPluginVersion(input: CreatePluginVersionRequest, options?: RpcOptions): UnaryCall<CreatePluginVersionRequest, CreatePluginVersionResponse>;
    /**
     * @generated from protobuf rpc: DeletePluginVersion(kite.plugins.v1.DeletePluginVersionRequest) returns (kite.plugins.v1.DeletePluginVersionResponse);
     */
    deletePluginVersion(input: DeletePluginVersionRequest, options?: RpcOptions): UnaryCall<DeletePluginVersionRequest, DeletePluginVersionResponse>;
    /**
     * @generated from protobuf rpc: UpdatePluginVersion(kite.plugins.v1.UpdatePluginVersionRequest) returns (kite.plugins.v1.UpdatePluginVersionResponse);
     */
    updatePluginVersion(input: UpdatePluginVersionRequest, options?: RpcOptions): UnaryCall<UpdatePluginVersionRequest, UpdatePluginVersionResponse>;
}
/**
 * @generated from protobuf service kite.plugins.v1.PluginService
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
     * @generated from protobuf rpc: GetPlugin(kite.plugins.v1.GetPluginRequest) returns (kite.plugins.v1.GetPluginResponse);
     */
    getPlugin(input: GetPluginRequest, options?: RpcOptions): UnaryCall<GetPluginRequest, GetPluginResponse>;
    /**
     * @generated from protobuf rpc: ListPlugins(kite.plugins.v1.ListPluginsRequest) returns (kite.plugins.v1.ListPluginsResponse);
     */
    listPlugins(input: ListPluginsRequest, options?: RpcOptions): UnaryCall<ListPluginsRequest, ListPluginsResponse>;
    /**
     * @generated from protobuf rpc: CreatePlugin(kite.plugins.v1.CreatePluginRequest) returns (kite.plugins.v1.CreatePluginResponse);
     */
    createPlugin(input: CreatePluginRequest, options?: RpcOptions): UnaryCall<CreatePluginRequest, CreatePluginResponse>;
    /**
     * @generated from protobuf rpc: UpdatePlugin(kite.plugins.v1.UpdatePluginRequest) returns (kite.plugins.v1.UpdatePluginResponse);
     */
    updatePlugin(input: UpdatePluginRequest, options?: RpcOptions): UnaryCall<UpdatePluginRequest, UpdatePluginResponse>;
    /**
     * @generated from protobuf rpc: DeletePlugin(kite.plugins.v1.DeletePluginRequest) returns (kite.plugins.v1.DeletePluginResponse);
     */
    deletePlugin(input: DeletePluginRequest, options?: RpcOptions): UnaryCall<DeletePluginRequest, DeletePluginResponse>;
    /**
     * @generated from protobuf rpc: ListPluginVersions(kite.plugins.v1.ListPluginVersionsRequest) returns (kite.plugins.v1.ListPluginVersionsResponse);
     */
    listPluginVersions(input: ListPluginVersionsRequest, options?: RpcOptions): UnaryCall<ListPluginVersionsRequest, ListPluginVersionsResponse>;
    /**
     * @generated from protobuf rpc: CreatePluginVersion(kite.plugins.v1.CreatePluginVersionRequest) returns (kite.plugins.v1.CreatePluginVersionResponse);
     */
    createPluginVersion(input: CreatePluginVersionRequest, options?: RpcOptions): UnaryCall<CreatePluginVersionRequest, CreatePluginVersionResponse>;
    /**
     * @generated from protobuf rpc: DeletePluginVersion(kite.plugins.v1.DeletePluginVersionRequest) returns (kite.plugins.v1.DeletePluginVersionResponse);
     */
    deletePluginVersion(input: DeletePluginVersionRequest, options?: RpcOptions): UnaryCall<DeletePluginVersionRequest, DeletePluginVersionResponse>;
    /**
     * @generated from protobuf rpc: UpdatePluginVersion(kite.plugins.v1.UpdatePluginVersionRequest) returns (kite.plugins.v1.UpdatePluginVersionResponse);
     */
    updatePluginVersion(input: UpdatePluginVersionRequest, options?: RpcOptions): UnaryCall<UpdatePluginVersionRequest, UpdatePluginVersionResponse>;
}
