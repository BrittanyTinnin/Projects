package com.brittcodes.json2csv;

import com.brittcodes.model.Customer;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.*;
import java.util.Arrays;
import java.util.List;

/**
 * Created by brittanytinnin on 12/5/20 4:14 PM
 */
public class JsonToCsv {


    public static void main(String[] args) {
        List<Customer> customers = convertJsonFiletoListCustomerObjects("/customers.json");
        writeListofCustomerObjectToCsvFile(customers, "customers.csv");

    }

    //JSON File -> List of Customer Objects -> CSV File


    /**
     * This method convert JSON file to List of Customer objects
     *
     * @param jsonFile JSON file
     * @return List of Customer Objects
     */
    public static List<Customer> convertJsonFiletoListCustomerObjects(String jsonFile) {

        InputStream inputJson = Customer.class.getResourceAsStream(jsonFile); //turn json file in byte stream
        System.out.println("inputJson: " + inputJson);
        List<Customer> customers = null;

        try {
            System.out.println(inputJson);
            customers = new ObjectMapper().readValue(inputJson, new TypeReference<List<Customer>>(){});
        }catch (IOException e) {
            e.printStackTrace();
        }

        return customers;
    }


    /**
     * This method writes the List of Customer objects to a CSV File
     *
     * @param customers List of Customer object
     * @param csvFile   CSV File
     */
    public static void writeListofCustomerObjectToCsvFile(List<Customer> customers, String csvFile) {

        final String[] CSV_HEADER = {"id", "name", "city", "age"};

        FileWriter fileWriter = null;
        CSVPrinter csvPrinter = null;

        try {
            fileWriter = new FileWriter(csvFile);
            csvPrinter = new CSVPrinter(fileWriter, CSVFormat.DEFAULT.withHeader(CSV_HEADER));

            for (Customer customer : customers) {
                List<String> data = Arrays.asList(
                        String.valueOf(customer.getId()),
                        customer.getName(),
                        customer.getCity(),
                        String.valueOf(customer.getAge())
                );

                csvPrinter.printRecord(data);
            }

        } catch (Exception e) {
            System.out.println("Error writing CSV File!");
            e.printStackTrace();
        } finally {
            try {
                if(fileWriter != null){
                    fileWriter.flush();
                    fileWriter.close();
                }
                if(csvPrinter != null){
                    csvPrinter.close();
                }
            } catch (Exception e) {
                System.out.println("Flushing/closing error!");
                e.printStackTrace();
            }
        }
    }
}
