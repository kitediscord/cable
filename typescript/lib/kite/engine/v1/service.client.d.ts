import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { StreamDeploymentLogsResponse } from "./service";
import type { StreamDeploymentLogsRequest } from "./service";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { GetDeploymentResponse } from "./service";
import type { GetDeploymentRequest } from "./service";
import type { ListDeploymentsResponse } from "./service";
import type { ListDeploymentsRequest } from "./service";
import type { DeleteDeploymentResponse } from "./service";
import type { DeleteDeploymentRequest } from "./service";
import type { UpdateDeploymentResponse } from "./service";
import type { UpdateDeploymentRequest } from "./service";
import type { CreateDeploymentResponse } from "./service";
import type { CreateDeploymentRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.engine.v1.EngineService
 */
export interface IEngineServiceClient {
    /**
     * @generated from protobuf rpc: CreateDeployment(kite.engine.v1.CreateDeploymentRequest) returns (kite.engine.v1.CreateDeploymentResponse);
     */
    createDeployment(input: CreateDeploymentRequest, options?: RpcOptions): UnaryCall<CreateDeploymentRequest, CreateDeploymentResponse>;
    /**
     * @generated from protobuf rpc: UpdateDeployment(kite.engine.v1.UpdateDeploymentRequest) returns (kite.engine.v1.UpdateDeploymentResponse);
     */
    updateDeployment(input: UpdateDeploymentRequest, options?: RpcOptions): UnaryCall<UpdateDeploymentRequest, UpdateDeploymentResponse>;
    /**
     * @generated from protobuf rpc: DeleteDeployment(kite.engine.v1.DeleteDeploymentRequest) returns (kite.engine.v1.DeleteDeploymentResponse);
     */
    deleteDeployment(input: DeleteDeploymentRequest, options?: RpcOptions): UnaryCall<DeleteDeploymentRequest, DeleteDeploymentResponse>;
    /**
     * @generated from protobuf rpc: ListDeployments(kite.engine.v1.ListDeploymentsRequest) returns (kite.engine.v1.ListDeploymentsResponse);
     */
    listDeployments(input: ListDeploymentsRequest, options?: RpcOptions): UnaryCall<ListDeploymentsRequest, ListDeploymentsResponse>;
    /**
     * @generated from protobuf rpc: GetDeployment(kite.engine.v1.GetDeploymentRequest) returns (kite.engine.v1.GetDeploymentResponse);
     */
    getDeployment(input: GetDeploymentRequest, options?: RpcOptions): UnaryCall<GetDeploymentRequest, GetDeploymentResponse>;
    /**
     * @generated from protobuf rpc: StreamDeploymentLogs(kite.engine.v1.StreamDeploymentLogsRequest) returns (stream kite.engine.v1.StreamDeploymentLogsResponse);
     */
    streamDeploymentLogs(input: StreamDeploymentLogsRequest, options?: RpcOptions): ServerStreamingCall<StreamDeploymentLogsRequest, StreamDeploymentLogsResponse>;
}
/**
 * @generated from protobuf service kite.engine.v1.EngineService
 */
export declare class EngineServiceClient implements IEngineServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: CreateDeployment(kite.engine.v1.CreateDeploymentRequest) returns (kite.engine.v1.CreateDeploymentResponse);
     */
    createDeployment(input: CreateDeploymentRequest, options?: RpcOptions): UnaryCall<CreateDeploymentRequest, CreateDeploymentResponse>;
    /**
     * @generated from protobuf rpc: UpdateDeployment(kite.engine.v1.UpdateDeploymentRequest) returns (kite.engine.v1.UpdateDeploymentResponse);
     */
    updateDeployment(input: UpdateDeploymentRequest, options?: RpcOptions): UnaryCall<UpdateDeploymentRequest, UpdateDeploymentResponse>;
    /**
     * @generated from protobuf rpc: DeleteDeployment(kite.engine.v1.DeleteDeploymentRequest) returns (kite.engine.v1.DeleteDeploymentResponse);
     */
    deleteDeployment(input: DeleteDeploymentRequest, options?: RpcOptions): UnaryCall<DeleteDeploymentRequest, DeleteDeploymentResponse>;
    /**
     * @generated from protobuf rpc: ListDeployments(kite.engine.v1.ListDeploymentsRequest) returns (kite.engine.v1.ListDeploymentsResponse);
     */
    listDeployments(input: ListDeploymentsRequest, options?: RpcOptions): UnaryCall<ListDeploymentsRequest, ListDeploymentsResponse>;
    /**
     * @generated from protobuf rpc: GetDeployment(kite.engine.v1.GetDeploymentRequest) returns (kite.engine.v1.GetDeploymentResponse);
     */
    getDeployment(input: GetDeploymentRequest, options?: RpcOptions): UnaryCall<GetDeploymentRequest, GetDeploymentResponse>;
    /**
     * @generated from protobuf rpc: StreamDeploymentLogs(kite.engine.v1.StreamDeploymentLogsRequest) returns (stream kite.engine.v1.StreamDeploymentLogsResponse);
     */
    streamDeploymentLogs(input: StreamDeploymentLogsRequest, options?: RpcOptions): ServerStreamingCall<StreamDeploymentLogsRequest, StreamDeploymentLogsResponse>;
}
