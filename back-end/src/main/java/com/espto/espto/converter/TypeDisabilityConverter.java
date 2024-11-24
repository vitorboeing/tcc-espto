package com.espto.espto.converter;

import com.espto.espto.enums.TypeDisability;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.List;

@Converter
public class TypeDisabilityConverter implements AttributeConverter<List<TypeDisability>, String> {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<TypeDisability> attribute) {
        return null;
//        try {
//            return objectMapper.writeValueAsString(attribute);
//        } catch (JsonProcessingException e) {
//            throw new IllegalArgumentException("Erro ao converter lista para String JSON.", e);
//        }
    }

    @Override
    public List<TypeDisability> convertToEntityAttribute(String dbData) {
        return null;
//        try {
//            return objectMapper.readValue(dbData, objectMapper.getTypeFactory().constructCollectionType(List.class, TypeDisability.class));
//        } catch (IOException e) {
//            throw new IllegalArgumentException("Erro ao converter String JSON para lista.", e);
//        }
    }
}