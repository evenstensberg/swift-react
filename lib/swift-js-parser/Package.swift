// swift-tools-version:4.2
import PackageDescription

let package = Package(
    name: "SwiftJsParser",
    products: [
        .library(
            name: "SwiftJsParser",
            targets: ["SwiftJsParser"]),
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-syntax.git", .exact("0.50000.0")),
        .package(url: "https://github.com/JohnSundell/Files.git", from: "2.2.1"),
    ],
    targets: [
        .target(
            name: "swift-js-parser",
            dependencies: ["SwiftJsParser", "Files"]),
        .target(
            name: "SwiftJsParser",
            dependencies: ["SwiftSyntax", "Files"]),
    ]
)