#!/bin/bash



cd $PWD/lib/swift-js-parser/
swift build
swift run swift-js-parser
# xcrun swift -emit-module swiftTest.swift -sdk $(xcrun --show-sdk-path --sdk macosx) -module-name swiftTest

# swift swiftTest.swift
