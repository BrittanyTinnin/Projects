import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * Created by brittanytinnin on 12/4/20 8:55 PM
 */
public class CsvToJson {

    public static void main(String[] args) {
        File input = new File("planets.csv");
        File output = new File("output.json");


        CsvSchema csvSchema = CsvSchema.builder().setUseHeader(true).build();
        CsvMapper csvMapper = new CsvMapper();

        //Read data from CSV file
        try {
            List<Object> readAll = csvMapper.readerFor(Map.class).with(csvSchema).readValues(input).readAll();
            ObjectMapper mapper = new ObjectMapper();

            // Write JSON formated data to output.json file
            mapper.writerWithDefaultPrettyPrinter().writeValue(output, readAll);

            // Write JSON formated data to stdout
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(readAll));
        } catch (IOException e) {
            e.printStackTrace();
        }



    }

}
