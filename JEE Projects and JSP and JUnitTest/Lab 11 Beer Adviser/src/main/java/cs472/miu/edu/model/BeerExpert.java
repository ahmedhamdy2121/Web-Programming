package cs472.miu.edu.model;

import java.util.ArrayList;
import java.util.List;

/**
 * File created by Ahmed Hamdy at 12/12/2020.
 */
@SuppressWarnings("SpellCheckingInspection")
public class BeerExpert {
    public List<String> getBrands(String color) {
        List<String> brands = new ArrayList<>();

        if(color.equals("amber")) {
            brands.add("Kack Amber");
            brands.add("Red Hosoe");
        }
        else {
            brands.add("Jail Pale Ale");
            brands.add("Gout Stout");
        }

        return brands;
    }
}
