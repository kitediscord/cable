import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetGuildResponse } from "./service";
import type { GetGuildRequest } from "./service";
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
export declare class DiscordServiceClient implements IDiscordServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: ListGuilds(kite.discord.v1.ListGuildsRequest) returns (kite.discord.v1.ListGuildsResponse);
     */
    listGuilds(input: ListGuildsRequest, options?: RpcOptions): UnaryCall<ListGuildsRequest, ListGuildsResponse>;
    /**
     * @generated from protobuf rpc: GetGuild(kite.discord.v1.GetGuildRequest) returns (kite.discord.v1.GetGuildResponse);
     */
    getGuild(input: GetGuildRequest, options?: RpcOptions): UnaryCall<GetGuildRequest, GetGuildResponse>;
}
