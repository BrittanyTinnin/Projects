package com.brittcodes.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by brittanytinnin on 12/5/20 4:17 PM
 */

@Data
@NoArgsConstructor
public class Customer {

    private int id;
    private String name;
    private String city;
    private int age;


}
