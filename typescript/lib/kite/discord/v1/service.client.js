import { DiscordService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.discord.v1.DiscordService
 */
export class DiscordServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = DiscordService.typeName;
        this.methods = DiscordService.methods;
        this.options = DiscordService.options;
    }
    /**
     * @generated from protobuf rpc: ListGuilds(kite.discord.v1.ListGuildsRequest) returns (kite.discord.v1.ListGuildsResponse);
     */
    listGuilds(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetGuild(kite.discord.v1.GetGuildRequest) returns (kite.discord.v1.GetGuildResponse);
     */
    getGuild(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
