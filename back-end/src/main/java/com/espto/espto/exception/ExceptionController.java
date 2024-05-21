package com.espto.espto.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(value = {BusinessException.class})
    private ResponseEntity<Object> handleBusinessException(BusinessException exception) {
        return new ResponseEntity<>(exception, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {MethodArgumentNotValidException.class})
    private ResponseEntity<Object> handleBusinessException(MethodArgumentNotValidException exception) {
        var fieldErrors = exception.getBindingResult().getFieldErrors()
                .stream()
                .map(res -> upperCaseFirst(res.getField() + " " + res.getDefaultMessage()))
                .toList();
        return new ResponseEntity<>(fieldErrors, HttpStatus.BAD_REQUEST);
    }

    public static String upperCaseFirst(String val) {
        char[] arr = val.toCharArray();
        arr[0] = Character.toUpperCase(arr[0]);
        return new String(arr);
    }
}
