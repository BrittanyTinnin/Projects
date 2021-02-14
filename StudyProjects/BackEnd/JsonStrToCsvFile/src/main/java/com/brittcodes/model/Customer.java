package com.brittcodes.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by brittanytinnin on 12/5/20 12:52 PM
 */

@Data
@NoArgsConstructor
public class Customer {

    private int id;
    private String name;
    private String city;
    private int age;

//    public Customer() {
//    }
//
//    public Customer(int id, String name, String city, int age) {
//        this.id = id;
//        this.name = name;
//        this.city = city;
//        this.age = age;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getCity() {
//        return city;
//    }
//
//    public void setCity(String city) {
//        this.city = city;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        Customer customer = (Customer) o;
//
//        if (id != customer.id) return false;
//        if (age != customer.age) return false;
//        if (name != null ? !name.equals(customer.name) : customer.name != null) return false;
//        return city != null ? city.equals(customer.city) : customer.city == null;
//    }
//
//    @Override
//    public int hashCode() {
//        int result = id;
//        result = 31 * result + (name != null ? name.hashCode() : 0);
//        result = 31 * result + (city != null ? city.hashCode() : 0);
//        result = 31 * result + age;
//        return result;
//    }
//
//    @Override
//    public String toString() {
//        return "Customer{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", city='" + city + '\'' +
//                ", age=" + age +
//                '}';
//    }
}
