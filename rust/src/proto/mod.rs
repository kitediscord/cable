// @generated
pub mod kite {
    pub mod discord {
        #[cfg(feature = "kite_discord_v1")]
        // @@protoc_insertion_point(attribute:kite.discord.v1)
        pub mod v1 {
            include!("kite.discord.v1.rs");
            // @@protoc_insertion_point(kite.discord.v1)
        }
    }
    pub mod engine {
        #[cfg(feature = "kite_engine_v1")]
        // @@protoc_insertion_point(attribute:kite.engine.v1)
        pub mod v1 {
            include!("kite.engine.v1.rs");
            // @@protoc_insertion_point(kite.engine.v1)
        }
    }
    pub mod plugins {
        #[cfg(feature = "kite_plugins_v1")]
        // @@protoc_insertion_point(attribute:kite.plugins.v1)
        pub mod v1 {
            include!("kite.plugins.v1.rs");
            // @@protoc_insertion_point(kite.plugins.v1)
        }
    }
}