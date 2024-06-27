# Logging in Spring Boot

Logging is an essential aspect of any application for monitoring and troubleshooting purposes. Spring Boot provides flexible and configurable logging options to suit different requirements. Let's explore the various logging frameworks supported by Spring Boot and how to configure them.

## Overview

Spring Boot supports multiple logging frameworks out of the box, including:

- **Logback**: Default logging framework in Spring Boot, offering powerful features and configuration options.

- **Log4j2**: A versatile logging framework with advanced capabilities such as asynchronous logging and automatic configuration.

- **Java Util Logging (JUL)**: Java's built-in logging framework, suitable for simple logging needs.

### Default Configuration

By default, Spring Boot uses Logback as the logging framework. It provides sensible defaults and can be easily customized using configuration files or annotations.

## Configuring Logging

### 1. Logback

#### Configuration File (`logback.xml`)

Refer `./libs/logger/src/main/resources/logback-spring.xml`
