package com.espto.espto.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class BusinessException extends RuntimeException {

    private String message;

}
