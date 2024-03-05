package com.copious.logger.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;

@Aspect
@Slf4j
public class LoggingAspect {

    @Pointcut("within(com.copious.authservice.web..*)")
    public void applicationPackagePointcut(){}

    @Around("applicationPackagePointcut()")
    public Object logAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        //if (log.isDebugEnabled())
        log.info("Enter: {}.{}() with args: {}", proceedingJoinPoint.getSignature().getDeclaringType(),
                proceedingJoinPoint.getSignature().getName(),
                proceedingJoinPoint.getArgs());

        Object result = proceedingJoinPoint.proceed();

        //if (log.isDebugEnabled())
        log.debug("Exit: {}.{}() with result: {}", proceedingJoinPoint.getSignature().getDeclaringType(),
                proceedingJoinPoint.getSignature().getName(),
                result);

        return result;
    }
}
