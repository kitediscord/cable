import { PluginService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.plugins.v1.PluginService
 */
export class PluginServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = PluginService.typeName;
        this.methods = PluginService.methods;
        this.options = PluginService.options;
    }
    /**
     * @generated from protobuf rpc: GetPlugin(kite.plugins.v1.GetPluginRequest) returns (kite.plugins.v1.GetPluginResponse);
     */
    getPlugin(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListPlugins(kite.plugins.v1.ListPluginsRequest) returns (kite.plugins.v1.ListPluginsResponse);
     */
    listPlugins(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreatePlugin(kite.plugins.v1.CreatePluginRequest) returns (kite.plugins.v1.CreatePluginResponse);
     */
    createPlugin(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePlugin(kite.plugins.v1.UpdatePluginRequest) returns (kite.plugins.v1.UpdatePluginResponse);
     */
    updatePlugin(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeletePlugin(kite.plugins.v1.DeletePluginRequest) returns (kite.plugins.v1.DeletePluginResponse);
     */
    deletePlugin(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListPluginVersions(kite.plugins.v1.ListPluginVersionsRequest) returns (kite.plugins.v1.ListPluginVersionsResponse);
     */
    listPluginVersions(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreatePluginVersion(kite.plugins.v1.CreatePluginVersionRequest) returns (kite.plugins.v1.CreatePluginVersionResponse);
     */
    createPluginVersion(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeletePluginVersion(kite.plugins.v1.DeletePluginVersionRequest) returns (kite.plugins.v1.DeletePluginVersionResponse);
     */
    deletePluginVersion(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePluginVersion(kite.plugins.v1.UpdatePluginVersionRequest) returns (kite.plugins.v1.UpdatePluginVersionResponse);
     */
    updatePluginVersion(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
