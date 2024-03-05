package com.copious.authservice.config;

import com.copious.logger.config.LoggingContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(LoggingContext.class)
public class ServiceContext {
}
