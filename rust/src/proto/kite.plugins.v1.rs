// @generated
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Plugin {
    #[prost(fixed64, tag="1")]
    pub id: u64,
    #[prost(fixed64, tag="2")]
    pub creator_id: u64,
    #[prost(bool, tag="3")]
    pub public: bool,
    #[prost(string, tag="4")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub short_description: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub long_description: ::prost::alloc::string::String,
    #[prost(enumeration="PluginTag", repeated, tag="7")]
    pub tags: ::prost::alloc::vec::Vec<i32>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PluginTag {
    Unspecified = 0,
    Utility = 1,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PluginVersion {
    #[prost(fixed64, tag="1")]
    pub id: u64,
    #[prost(string, tag="2")]
    pub tag: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub module_hash: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetPluginRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetPluginResponse {
    #[prost(message, optional, tag="1")]
    pub plugin: ::core::option::Option<Plugin>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPluginsRequest {
    #[prost(uint32, optional, tag="1")]
    pub limit: ::core::option::Option<u32>,
    #[prost(uint32, optional, tag="2")]
    pub skip: ::core::option::Option<u32>,
    #[prost(enumeration="PluginTag", repeated, tag="3")]
    pub tags: ::prost::alloc::vec::Vec<i32>,
    #[prost(string, tag="4")]
    pub text_search: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPluginsResponse {
    #[prost(uint32, tag="1")]
    pub total: u32,
    #[prost(message, repeated, tag="2")]
    pub plugins: ::prost::alloc::vec::Vec<Plugin>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreatePluginRequest {
    #[prost(string, tag="1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub short_description: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub long_description: ::prost::alloc::string::String,
    #[prost(enumeration="PluginTag", repeated, tag="4")]
    pub tags: ::prost::alloc::vec::Vec<i32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreatePluginResponse {
    #[prost(message, optional, tag="1")]
    pub plugin: ::core::option::Option<Plugin>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePluginRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
    #[prost(string, tag="2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub short_description: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub long_description: ::prost::alloc::string::String,
    #[prost(enumeration="PluginTag", repeated, tag="5")]
    pub tags: ::prost::alloc::vec::Vec<i32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePluginResponse {
    #[prost(message, optional, tag="1")]
    pub plugin: ::core::option::Option<Plugin>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePluginRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePluginResponse {
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPluginVersionsRequest {
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListPluginVersionsResponse {
    #[prost(message, repeated, tag="1")]
    pub versions: ::prost::alloc::vec::Vec<PluginVersion>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreatePluginVersionRequest {
    #[prost(string, tag="1")]
    pub tag: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub description: ::prost::alloc::string::String,
    #[prost(bytes="vec", tag="4")]
    pub module: ::prost::alloc::vec::Vec<u8>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreatePluginVersionResponse {
    #[prost(message, optional, tag="1")]
    pub version: ::core::option::Option<PluginVersion>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePluginVersionRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeletePluginVersionResponse {
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePluginVersionRequest {
    #[prost(fixed64, tag="1")]
    pub id: u64,
    #[prost(string, tag="2")]
    pub description: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdatePluginVersionResponse {
    #[prost(message, optional, tag="1")]
    pub version: ::core::option::Option<PluginVersion>,
}
include!("kite.plugins.v1.tonic.rs");
// @@protoc_insertion_point(module)