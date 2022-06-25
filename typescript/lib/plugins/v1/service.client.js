import { PluginService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service plugins.v1.PluginService
 */
export class PluginServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = PluginService.typeName;
        this.methods = PluginService.methods;
        this.options = PluginService.options;
    }
    /**
     * @generated from protobuf rpc: GetPlugin(plugins.v1.GetPluginRequest) returns (plugins.v1.GetPluginResponse);
     */
    getPlugin(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
