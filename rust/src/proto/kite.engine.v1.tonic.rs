// @generated
/// Generated client implementations.
pub mod engine_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    ///
    #[derive(Debug, Clone)]
    pub struct EngineServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl EngineServiceClient<tonic::transport::Channel> {
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
    impl<T> EngineServiceClient<T>
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
        ) -> EngineServiceClient<InterceptedService<T, F>>
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
            EngineServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn create_deployment(
            &mut self,
            request: impl tonic::IntoRequest<super::CreateDeploymentRequest>,
        ) -> Result<tonic::Response<super::CreateDeploymentResponse>, tonic::Status> {
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
                "/kite.engine.v1.EngineService/CreateDeployment",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn update_deployment(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateDeploymentRequest>,
        ) -> Result<tonic::Response<super::UpdateDeploymentResponse>, tonic::Status> {
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
                "/kite.engine.v1.EngineService/UpdateDeployment",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn delete_deployment(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteDeploymentRequest>,
        ) -> Result<tonic::Response<super::DeleteDeploymentResponse>, tonic::Status> {
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
                "/kite.engine.v1.EngineService/DeleteDeployment",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn list_deployments(
            &mut self,
            request: impl tonic::IntoRequest<super::ListDeploymentsRequest>,
        ) -> Result<tonic::Response<super::ListDeploymentsResponse>, tonic::Status> {
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
                "/kite.engine.v1.EngineService/ListDeployments",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn get_deployment(
            &mut self,
            request: impl tonic::IntoRequest<super::GetDeploymentRequest>,
        ) -> Result<tonic::Response<super::GetDeploymentResponse>, tonic::Status> {
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
                "/kite.engine.v1.EngineService/GetDeployment",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        ///
        pub async fn stream_deployment_logs(
            &mut self,
            request: impl tonic::IntoRequest<super::StreamDeploymentLogsRequest>,
        ) -> Result<
            tonic::Response<
                tonic::codec::Streaming<super::StreamDeploymentLogsResponse>,
            >,
            tonic::Status,
        > {
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
                "/kite.engine.v1.EngineService/StreamDeploymentLogs",
            );
            self.inner.server_streaming(request.into_request(), path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod engine_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    ///Generated trait containing gRPC methods that should be implemented for use with EngineServiceServer.
    #[async_trait]
    pub trait EngineService: Send + Sync + 'static {
        ///
        async fn create_deployment(
            &self,
            request: tonic::Request<super::CreateDeploymentRequest>,
        ) -> Result<tonic::Response<super::CreateDeploymentResponse>, tonic::Status>;
        ///
        async fn update_deployment(
            &self,
            request: tonic::Request<super::UpdateDeploymentRequest>,
        ) -> Result<tonic::Response<super::UpdateDeploymentResponse>, tonic::Status>;
        ///
        async fn delete_deployment(
            &self,
            request: tonic::Request<super::DeleteDeploymentRequest>,
        ) -> Result<tonic::Response<super::DeleteDeploymentResponse>, tonic::Status>;
        ///
        async fn list_deployments(
            &self,
            request: tonic::Request<super::ListDeploymentsRequest>,
        ) -> Result<tonic::Response<super::ListDeploymentsResponse>, tonic::Status>;
        ///
        async fn get_deployment(
            &self,
            request: tonic::Request<super::GetDeploymentRequest>,
        ) -> Result<tonic::Response<super::GetDeploymentResponse>, tonic::Status>;
        ///Server streaming response type for the StreamDeploymentLogs method.
        type StreamDeploymentLogsStream: futures_core::Stream<
                Item = Result<super::StreamDeploymentLogsResponse, tonic::Status>,
            >
            + Send
            + 'static;
        ///
        async fn stream_deployment_logs(
            &self,
            request: tonic::Request<super::StreamDeploymentLogsRequest>,
        ) -> Result<tonic::Response<Self::StreamDeploymentLogsStream>, tonic::Status>;
    }
    ///
    #[derive(Debug)]
    pub struct EngineServiceServer<T: EngineService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: EngineService> EngineServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for EngineServiceServer<T>
    where
        T: EngineService,
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
                "/kite.engine.v1.EngineService/CreateDeployment" => {
                    #[allow(non_camel_case_types)]
                    struct CreateDeploymentSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::UnaryService<super::CreateDeploymentRequest>
                    for CreateDeploymentSvc<T> {
                        type Response = super::CreateDeploymentResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreateDeploymentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).create_deployment(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CreateDeploymentSvc(inner);
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
                "/kite.engine.v1.EngineService/UpdateDeployment" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateDeploymentSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::UnaryService<super::UpdateDeploymentRequest>
                    for UpdateDeploymentSvc<T> {
                        type Response = super::UpdateDeploymentResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateDeploymentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).update_deployment(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateDeploymentSvc(inner);
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
                "/kite.engine.v1.EngineService/DeleteDeployment" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteDeploymentSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::UnaryService<super::DeleteDeploymentRequest>
                    for DeleteDeploymentSvc<T> {
                        type Response = super::DeleteDeploymentResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::DeleteDeploymentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).delete_deployment(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DeleteDeploymentSvc(inner);
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
                "/kite.engine.v1.EngineService/ListDeployments" => {
                    #[allow(non_camel_case_types)]
                    struct ListDeploymentsSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::UnaryService<super::ListDeploymentsRequest>
                    for ListDeploymentsSvc<T> {
                        type Response = super::ListDeploymentsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListDeploymentsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).list_deployments(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListDeploymentsSvc(inner);
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
                "/kite.engine.v1.EngineService/GetDeployment" => {
                    #[allow(non_camel_case_types)]
                    struct GetDeploymentSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::UnaryService<super::GetDeploymentRequest>
                    for GetDeploymentSvc<T> {
                        type Response = super::GetDeploymentResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetDeploymentRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).get_deployment(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetDeploymentSvc(inner);
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
                "/kite.engine.v1.EngineService/StreamDeploymentLogs" => {
                    #[allow(non_camel_case_types)]
                    struct StreamDeploymentLogsSvc<T: EngineService>(pub Arc<T>);
                    impl<
                        T: EngineService,
                    > tonic::server::ServerStreamingService<
                        super::StreamDeploymentLogsRequest,
                    > for StreamDeploymentLogsSvc<T> {
                        type Response = super::StreamDeploymentLogsResponse;
                        type ResponseStream = T::StreamDeploymentLogsStream;
                        type Future = BoxFuture<
                            tonic::Response<Self::ResponseStream>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::StreamDeploymentLogsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move {
                                (*inner).stream_deployment_logs(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = StreamDeploymentLogsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            );
                        let res = grpc.server_streaming(method, req).await;
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
    impl<T: EngineService> Clone for EngineServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: EngineService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: EngineService> tonic::transport::NamedService for EngineServiceServer<T> {
        const NAME: &'static str = "kite.engine.v1.EngineService";
    }
}
