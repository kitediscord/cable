// @generated
/// Generated client implementations.
pub mod plugin_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    ///
    #[derive(Debug, Clone)]
    pub struct PluginServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl PluginServiceClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> PluginServiceClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> PluginServiceClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
            >>::Error: Into<StdError> + Send + Sync,
        {
            PluginServiceClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with `gzip`.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_gzip(mut self) -> Self {
            self.inner = self.inner.send_gzip();
            self
        }
        /// Enable decompressing responses with `gzip`.
        #[must_use]
        pub fn accept_gzip(mut self) -> Self {
            self.inner = self.inner.accept_gzip();
            self
        }
        ///
        pub async fn get_plugin(
            &mut self,
            request: impl tonic::IntoRequest<super::GetPluginRequest>,
        ) -> Result<tonic::Response<super::GetPluginResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/GetPlugin",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn list_plugins(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPluginsRequest>,
        ) -> Result<tonic::Response<super::ListPluginsResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/ListPlugins",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn create_plugin(
            &mut self,
            request: impl tonic::IntoRequest<super::CreatePluginRequest>,
        ) -> Result<tonic::Response<super::CreatePluginResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/CreatePlugin",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn update_plugin(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdatePluginRequest>,
        ) -> Result<tonic::Response<super::UpdatePluginResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/UpdatePlugin",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn delete_plugin(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePluginRequest>,
        ) -> Result<tonic::Response<super::DeletePluginResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/DeletePlugin",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn list_plugin_versions(
            &mut self,
            request: impl tonic::IntoRequest<super::ListPluginVersionsRequest>,
        ) -> Result<tonic::Response<super::ListPluginVersionsResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/ListPluginVersions",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn create_plugin_version(
            &mut self,
            request: impl tonic::IntoRequest<super::CreatePluginVersionRequest>,
        ) -> Result<tonic::Response<super::CreatePluginVersionResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/CreatePluginVersion",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn delete_plugin_version(
            &mut self,
            request: impl tonic::IntoRequest<super::DeletePluginVersionRequest>,
        ) -> Result<tonic::Response<super::DeletePluginVersionResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/DeletePluginVersion",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn update_plugin_version(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdatePluginVersionRequest>,
        ) -> Result<tonic::Response<super::UpdatePluginVersionResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/kite.plugins.v1.PluginService/UpdatePluginVersion",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod plugin_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    ///Generated trait containing gRPC methods that should be implemented for use with PluginServiceServer.
    #[async_trait]
    pub trait PluginService: Send + Sync + 'static {
        ///
        async fn get_plugin(
            &self,
            request: tonic::Request<super::GetPluginRequest>,
        ) -> Result<tonic::Response<super::GetPluginResponse>, tonic::Status>;
        ///
        async fn list_plugins(
            &self,
            request: tonic::Request<super::ListPluginsRequest>,
        ) -> Result<tonic::Response<super::ListPluginsResponse>, tonic::Status>;
        ///
        async fn create_plugin(
            &self,
            request: tonic::Request<super::CreatePluginRequest>,
        ) -> Result<tonic::Response<super::CreatePluginResponse>, tonic::Status>;
        ///
        async fn update_plugin(
            &self,
            request: tonic::Request<super::UpdatePluginRequest>,
        ) -> Result<tonic::Response<super::UpdatePluginResponse>, tonic::Status>;
        ///
        async fn delete_plugin(
            &self,
            request: tonic::Request<super::DeletePluginRequest>,
        ) -> Result<tonic::Response<super::DeletePluginResponse>, tonic::Status>;
        ///
        async fn list_plugin_versions(
            &self,
            request: tonic::Request<super::ListPluginVersionsRequest>,
        ) -> Result<tonic::Response<super::ListPluginVersionsResponse>, tonic::Status>;
        ///
        async fn create_plugin_version(
            &self,
            request: tonic::Request<super::CreatePluginVersionRequest>,
        ) -> Result<tonic::Response<super::CreatePluginVersionResponse>, tonic::Status>;
        ///
        async fn delete_plugin_version(
            &self,
            request: tonic::Request<super::DeletePluginVersionRequest>,
        ) -> Result<tonic::Response<super::DeletePluginVersionResponse>, tonic::Status>;
        ///
        async fn update_plugin_version(
            &self,
            request: tonic::Request<super::UpdatePluginVersionRequest>,
        ) -> Result<tonic::Response<super::UpdatePluginVersionResponse>, tonic::Status>;
    }
    ///
    #[derive(Debug)]
    pub struct PluginServiceServer<T: PluginService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: PluginService> PluginServiceServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with `gzip`.
        #[must_use]
        pub fn accept_gzip(mut self) -> Self {
            self.accept_compression_encodings.enable_gzip();
            self
        }
        /// Compress responses with `gzip`, if the client supports it.
        #[must_use]
        pub fn send_gzip(mut self) -> Self {
            self.send_compression_encodings.enable_gzip();
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for PluginServiceServer<T>
    where
        T: PluginService,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/kite.plugins.v1.PluginService/GetPlugin" => {
                    #[allow(non_camel_case_types)]
                    struct GetPluginSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::GetPluginRequest>
                    for GetPluginSvc<T> {
                        type Response = super::GetPluginResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetPluginRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).get_plugin(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetPluginSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/ListPlugins" => {
                    #[allow(non_camel_case_types)]
                    struct ListPluginsSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::ListPluginsRequest>
                    for ListPluginsSvc<T> {
                        type Response = super::ListPluginsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPluginsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).list_plugins(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListPluginsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/CreatePlugin" => {
                    #[allow(non_camel_case_types)]
                    struct CreatePluginSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::CreatePluginRequest>
                    for CreatePluginSvc<T> {
                        type Response = super::CreatePluginResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreatePluginRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).create_plugin(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CreatePluginSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/UpdatePlugin" => {
                    #[allow(non_camel_case_types)]
                    struct UpdatePluginSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::UpdatePluginRequest>
                    for UpdatePluginSvc<T> {
                        type Response = super::UpdatePluginResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdatePluginRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).update_plugin(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdatePluginSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/DeletePlugin" => {
                    #[allow(non_camel_case_types)]
                    struct DeletePluginSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::DeletePluginRequest>
                    for DeletePluginSvc<T> {
                        type Response = super::DeletePluginResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePluginRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).delete_plugin(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DeletePluginSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/ListPluginVersions" => {
                    #[allow(non_camel_case_types)]
                    struct ListPluginVersionsSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::ListPluginVersionsRequest>
                    for ListPluginVersionsSvc<T> {
                        type Response = super::ListPluginVersionsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListPluginVersionsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).list_plugin_versions(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListPluginVersionsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/CreatePluginVersion" => {
                    #[allow(non_camel_case_types)]
                    struct CreatePluginVersionSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::CreatePluginVersionRequest>
                    for CreatePluginVersionSvc<T> {
                        type Response = super::CreatePluginVersionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreatePluginVersionRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).create_plugin_version(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CreatePluginVersionSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/DeletePluginVersion" => {
                    #[allow(non_camel_case_types)]
                    struct DeletePluginVersionSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::DeletePluginVersionRequest>
                    for DeletePluginVersionSvc<T> {
                        type Response = super::DeletePluginVersionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeletePluginVersionRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).delete_plugin_version(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DeletePluginVersionSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/kite.plugins.v1.PluginService/UpdatePluginVersion" => {
                    #[allow(non_camel_case_types)]
                    struct UpdatePluginVersionSvc<T: PluginService>(pub Arc<T>);
                    impl<
                        T: PluginService,
                    > tonic::server::UnaryService<super::UpdatePluginVersionRequest>
                    for UpdatePluginVersionSvc<T> {
                        type Response = super::UpdatePluginVersionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdatePluginVersionRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).update_plugin_version(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdatePluginVersionSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        Ok(
                            http::Response::builder()
                                .status(200)
                                .header("grpc-status", "12")
                                .header("content-type", "application/grpc")
                                .body(empty_body())
                                .unwrap(),
                        )
                    })
                }
            }
        }
    }
    impl<T: PluginService> Clone for PluginServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: PluginService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: PluginService> tonic::transport::NamedService for PluginServiceServer<T> {
        const NAME: &'static str = "kite.plugins.v1.PluginService";
    }
}
