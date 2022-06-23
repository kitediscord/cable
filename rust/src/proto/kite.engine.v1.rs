// @generated
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Deployment {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
    #[prost(fixed64, tag="3")]
    pub plugin_version_id: u64,
    #[prost(bool, tag="4")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeploymentLogEntry {
    #[prost(message, optional, tag="1")]
    pub timestamp: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(enumeration="DeploymentLogLevel", tag="2")]
    pub level: i32,
    #[prost(string, tag="3")]
    pub text: ::prost::alloc::string::String,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum DeploymentLogLevel {
    Unspecified = 0,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateDeploymentRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
    #[prost(fixed64, tag="3")]
    pub plugin_version_id: u64,
    #[prost(bool, tag="4")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateDeploymentResponse {
    #[prost(message, optional, tag="1")]
    pub deployment: ::core::option::Option<Deployment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateDeploymentRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
    #[prost(fixed64, tag="3")]
    pub plugin_version_id: u64,
    #[prost(bool, tag="4")]
    pub enabled: bool,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateDeploymentResponse {
    #[prost(message, optional, tag="1")]
    pub deployment: ::core::option::Option<Deployment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteDeploymentRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteDeploymentResponse {
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDeploymentsRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDeploymentsResponse {
    #[prost(message, repeated, tag="1")]
    pub deployments: ::prost::alloc::vec::Vec<Deployment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDeploymentRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDeploymentResponse {
    #[prost(message, optional, tag="1")]
    pub deployment: ::core::option::Option<Deployment>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StreamDeploymentLogsRequest {
    #[prost(fixed64, tag="1")]
    pub guild_id: u64,
    #[prost(fixed64, tag="2")]
    pub plugin_id: u64,
    #[prost(bool, optional, tag="3")]
    pub replay: ::core::option::Option<bool>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StreamDeploymentLogsResponse {
    #[prost(message, optional, tag="1")]
    pub entry: ::core::option::Option<DeploymentLogEntry>,
}
include!("kite.engine.v1.tonic.rs");
// @@protoc_insertion_point(module)