package com.copious.logger.config;

import com.copious.logger.aspect.LoggingAspect;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoggingContext {

    @Bean
    public LoggingAspect loggingAspect(){
        return new LoggingAspect();
    }
}
