package com.brittcodes.jsontocsv;

import com.brittcodes.model.Customer;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;

/**
 * Created by brittanytinnin on 12/5/20 12:48 PM
 */
public class JsonToCsv {

    public static void main(String[] args) {

        String jsonStr = "[{\"id\":\"1\",\"name\":\"Jack Smith\",\"city\":\"Massachusetts\",\"age\":23},{\"id\":\"2\",\"name\":\"Adam Johnson\",\"city\":\"New York\",\"age\":27},{\"id\":\"3\",\"name\":\"Katherin Carter\",\"city\":\"Washington DC\",\"age\":26},{\"id\":\"4\",\"name\":\"Jack London\",\"city\":\"Nevada\",\"age\":33},{\"id\":\"5\",\"name\":\"Jason Bourne\",\"city\":\"California\",\"age\":36}]";

        List<Customer> customers = convertJsonFileToCustomerObjects(jsonStr);

        writeListofCustomerObjectsToCsvFile(customers, "customers.csv");

    }


    //string -> objects -> csv

    /**
     * This method returns a list of customer objects from a json string
     *
     * @param jsonString
     * @return List of Customer objects
     */
    public static List<Customer> convertJsonFileToCustomerObjects(String jsonString){

        List<Customer> customers = null;



        try {
            customers = new ObjectMapper().readValue(jsonString, new TypeReference<List<Customer>>(){});
        } catch (JsonParseException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }


        return customers;
    }


    /**
     * This method writes the List of Customer objects to Csv file
     *
     * @param customers List of Customer Objects
     * @param customerCsv CSV file of customer objects
     */
    public static void writeListofCustomerObjectsToCsvFile(List<Customer> customers, String customerCsv){
        final String[] CSV_HEADER = {"id", "name", "city", "age"};


        FileWriter fileWriter = null;
        CSVPrinter csvPrinter = null;

        try {
            fileWriter = new FileWriter(customerCsv);
            csvPrinter = new CSVPrinter(fileWriter, CSVFormat.DEFAULT.withHeader(CSV_HEADER));


            for(Customer customer : customers){
                List<String> data = Arrays.asList(
                        String.valueOf(customer.getId()),
                        customer.getName(),
                        customer.getCity(),
                        String.valueOf(customer.getAge()));

                csvPrinter.printRecord(data);
            }

        } catch (Exception e) {
            System.out.println("Writing CSV error!");
            e.printStackTrace();
        } finally {
            try {
                fileWriter.close();
                csvPrinter.close();
            } catch (Exception e){
                System.out.println("Flushing/closing error!");
                e.printStackTrace();
            }
        }


    }
}
