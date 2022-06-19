# Kite Cable
Protocol definitions for communication between Kite services

Currently, code is generated for the following languages:
- rust (prost & tonic)
- typescript (protobuf-ts)

## How To Generate Code

### Install protoc

```
brew install protobuf
```

### Install protoc plugins

```
npm install -g @protobuf-ts/plugin

cargo install protoc-gen-prost

cargo install protoc-gen-tonic

cargo install protoc-gen-prost-crate
```

### Install buf

```
brew install bufbuild/buf/buf
```

### Generate Code

```
buf generate
```

