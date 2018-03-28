package com.example.demoReactApp.services;

import com.example.demoReactApp.dao.IColorRepository;
import com.example.demoReactApp.employee.Color;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by user on 3/28/18.
 */
public class ColorServiceImpl implements IColorServices {

    @Autowired
    IColorRepository colorRepository;


    @Override
    public Color findById(long id) {
        return colorRepository.getOne(id);
    }
}
