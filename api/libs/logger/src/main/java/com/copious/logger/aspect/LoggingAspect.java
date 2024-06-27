package com.copious.logger.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;

@Aspect
@Slf4j
public class LoggingAspect {

    //@Pointcut("within(com.copious.authservice.web..*)")
    @Pointcut("execution(* com.copious.authservice..*.*(..))")
    public void applicationPackagePointcut(){}

    @AfterThrowing(pointcut = "applicationPackagePointcut()", throwing = "e")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable e){
        log.error("Exception in {}.{}() with cause: {}", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(), e.getCause() != null ? e.getCause(): "null");
    }

    @Around("applicationPackagePointcut()")
    public Object logAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        //LocalTime time
        if (log.isDebugEnabled())
            log.debug("Enter: {}.{}() with args: {}", proceedingJoinPoint.getSignature().getDeclaringType(),
                    proceedingJoinPoint.getSignature().getName(),
                    proceedingJoinPoint.getArgs());

        Object result = proceedingJoinPoint.proceed();

        if (log.isDebugEnabled())
            log.debug("Exit: {}.{}() with result: {}", proceedingJoinPoint.getSignature().getDeclaringType(),
                    proceedingJoinPoint.getSignature().getName(),
                    result);

        return result;
    }
}
