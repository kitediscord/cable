# Kite Cable

### Protocol definitions for communication between Kite services

Currently, code is generated for the following languages:

- rust (prost & tonic)
- typescript (protobuf-ts)

## Usage

The generated code is currently not published on any package manager. You must use the git capabilities of your package
manager to install them.

### Rust (cargo)

In your `Cargo.toml`:
```toml
[dependencies]
kite-cable = { git = "https://github.com/kitediscord/cable" }
```

### TypeScript (npm)

Install using [gitpkg](https://gitpkg.vercel.app/):
```
npm install 'https://gitpkg.now.sh/kitediscord/cable/typescript?<commit>'
```

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
