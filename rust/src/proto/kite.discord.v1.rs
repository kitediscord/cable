// @generated
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Guild {
    #[prost(fixed64, tag="1")]
    pub id: u64,
    #[prost(string, tag="2")]
    pub name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListGuildsRequest {
    #[prost(fixed64, repeated, tag="1")]
    pub ids: ::prost::alloc::vec::Vec<u64>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListGuildsResponse {
    #[prost(message, repeated, tag="1")]
    pub guilds: ::prost::alloc::vec::Vec<Guild>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetGuildRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetGuildResponse {
    #[prost(message, optional, tag="1")]
    pub guild: ::core::option::Option<Guild>,
}
include!("kite.discord.v1.tonic.rs");
// @@protoc_insertion_point(module)