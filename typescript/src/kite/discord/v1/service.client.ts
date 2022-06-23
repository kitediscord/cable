// @generated by protobuf-ts 2.7.0 with parameter long_type_string
// @generated from protobuf file "kite/discord/v1/service.proto" (package "kite.discord.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { DiscordService } from "./service";
import type { GetGuildResponse } from "./service";
import type { GetGuildRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ListGuildsResponse } from "./service";
import type { ListGuildsRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service kite.discord.v1.DiscordService
 */
export interface IDiscordServiceClient {
    /**
     * @generated from protobuf rpc: ListGuilds(kite.discord.v1.ListGuildsRequest) returns (kite.discord.v1.ListGuildsResponse);
     */
    listGuilds(input: ListGuildsRequest, options?: RpcOptions): UnaryCall<ListGuildsRequest, ListGuildsResponse>;
    /**
     * @generated from protobuf rpc: GetGuild(kite.discord.v1.GetGuildRequest) returns (kite.discord.v1.GetGuildResponse);
     */
    getGuild(input: GetGuildRequest, options?: RpcOptions): UnaryCall<GetGuildRequest, GetGuildResponse>;
}
/**
 * @generated from protobuf service kite.discord.v1.DiscordService
 */
export class DiscordServiceClient implements IDiscordServiceClient, ServiceInfo {
    typeName = DiscordService.typeName;
    methods = DiscordService.methods;
    options = DiscordService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: ListGuilds(kite.discord.v1.ListGuildsRequest) returns (kite.discord.v1.ListGuildsResponse);
     */
    listGuilds(input: ListGuildsRequest, options?: RpcOptions): UnaryCall<ListGuildsRequest, ListGuildsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListGuildsRequest, ListGuildsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetGuild(kite.discord.v1.GetGuildRequest) returns (kite.discord.v1.GetGuildResponse);
     */
    getGuild(input: GetGuildRequest, options?: RpcOptions): UnaryCall<GetGuildRequest, GetGuildResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetGuildRequest, GetGuildResponse>("unary", this._transport, method, opt, input);
    }
}