package com.brittcodes.csv2json;

import com.brittcodes.model.Customer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by brittanytinnin on 12/5/20 11:12 AM
 */
public class Csv2JsonFile {

    public static void main(String[] args) {

        List<Customer> customers = readCsvFile();
        convertListofCustomerObjectsToJsonFile(customers, "customers.json");

    }


    //Read CSV File into Java List Objects
    //Convert Java List Objects to JSON File


    /**
     * This method reads CSV File into memory.
     * The method creates Iterable CSV Records and
     * every Record iterated over with be added to an instantiated Customer object
     * and Customer object will be added to the List of Customers
     *
     * @return List of Customers
     */
    public static List<Customer> readCsvFile() {
        BufferedReader fileReader = null;
        CSVParser csvParser = null;

        List<Customer> customers = new ArrayList<>();

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
            System.out.println("Error reading CSV File!");
            e.printStackTrace();
        } finally {
            try {
                fileReader.close();
                csvParser.close();
            } catch (Exception e) {
                System.out.println("Closing fileReader/csvParser Error!");
                e.printStackTrace();
            }
        }


        return customers;
    }


    /**
     * This method writes the List of Customer objects as a Json File
     *
     * @param customers List of Customer objects
     * @param jsonFile  JSON File
     */
    public static void convertListofCustomerObjectsToJsonFile(List<Customer> customers, String jsonFile) {

        ObjectMapper mapper = new ObjectMapper();

        File file = new File(jsonFile);

        try {

            mapper.writerWithDefaultPrettyPrinter().writeValue(file, customers);

        } catch (Exception e) {
            System.out.println("Error mapping Customer objects!");
            e.printStackTrace();
        }

    }
}
