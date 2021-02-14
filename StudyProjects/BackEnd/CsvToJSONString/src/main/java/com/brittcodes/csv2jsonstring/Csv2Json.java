package com.brittcodes.csv2jsonstring;

import com.brittcodes.model.Customer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by brittanytinnin on 12/4/20 11:17 PM
 */
public class Csv2Json {

    public static void main(String[] args) {
        List<Customer> customers = readCsvFile();
        String jsonString = convertCustomerObjectToJsonString(customers);
        System.out.println(jsonString);
    }



    /**
     * This method reads from the parameter which is a CSV file, parses it,
     * creates Customer object, and assign values from the CSV
     * to each attribute of the Customer
     *
     * @return List of Customers
     */
    private static List<Customer> readCsvFile() {

        //use BufferedReader when reading CSV file

        BufferedReader fileReader = null;
        CSVParser csvParser = null;

        List<Customer> customers = new ArrayList<Customer>();


        try {
            fileReader = new BufferedReader(new FileReader("customers.csv"));
            csvParser = new CSVParser(fileReader, CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                Customer customer = new Customer(
                        Integer.parseInt(csvRecord.get("id")),
                        csvRecord.get("name"),
                        csvRecord.get("city"),
                        Integer.parseInt(csvRecord.get("age")));
                customers.add(customer);
            }

        } catch (Exception e) {
            System.out.println("Reading CSV Error!");
            e.printStackTrace();
        } finally {
            try {

                if (fileReader != null) {
                    fileReader.close();
                }

                if(csvParser != null){
                    csvParser.close();
                }

            } catch (Exception e) {
                System.out.println("Closing fileReader/csvParser Error!");
                e.printStackTrace();
            }
        }

        return customers;
    }





    //convert store customer objects into json string

    /**
     * This method reads the Customer objects from the parameter and
     * writes all the objects to an ObjectMapper to be return as a String
     *
     * @param customers List of Customer objects
     * @return JSON String
     */
    private static String convertCustomerObjectToJsonString(List<Customer> customers){

        ObjectMapper mapper = new ObjectMapper();
        String jsonString = "";

        try {
            jsonString = mapper.writeValueAsString(customers);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return jsonString;
    }

}
