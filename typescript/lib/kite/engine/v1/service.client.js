import { EngineService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.engine.v1.EngineService
 */
export class EngineServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = EngineService.typeName;
        this.methods = EngineService.methods;
        this.options = EngineService.options;
    }
    /**
     * @generated from protobuf rpc: CreateDeployment(kite.engine.v1.CreateDeploymentRequest) returns (kite.engine.v1.CreateDeploymentResponse);
     */
    createDeployment(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateDeployment(kite.engine.v1.UpdateDeploymentRequest) returns (kite.engine.v1.UpdateDeploymentResponse);
     */
    updateDeployment(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteDeployment(kite.engine.v1.DeleteDeploymentRequest) returns (kite.engine.v1.DeleteDeploymentResponse);
     */
    deleteDeployment(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListDeployments(kite.engine.v1.ListDeploymentsRequest) returns (kite.engine.v1.ListDeploymentsResponse);
     */
    listDeployments(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetDeployment(kite.engine.v1.GetDeploymentRequest) returns (kite.engine.v1.GetDeploymentResponse);
     */
    getDeployment(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: StreamDeploymentLogs(kite.engine.v1.StreamDeploymentLogsRequest) returns (stream kite.engine.v1.StreamDeploymentLogsResponse);
     */
    streamDeploymentLogs(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("serverStreaming", this._transport, method, opt, input);
    }
}
