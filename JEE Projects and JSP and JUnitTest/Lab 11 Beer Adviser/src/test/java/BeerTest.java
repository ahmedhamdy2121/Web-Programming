import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import java.util.ArrayList;
import java.util.List;

import cs472.miu.edu.model.BeerExpert;
import org.junit.Test;

/**
 * File created by Ahmed Hamdy at 12/12/2020.
 */
@SuppressWarnings("SpellCheckingInspection")
public class BeerTest {
    @Test
    public void testAmberAndNonAmber() {
        BeerExpert tester = new BeerExpert();

        List<String> amberList = new ArrayList<>();
        amberList.add("Kack Amber");
        amberList.add("Red Hosoe");


        List<String> nonAmberList = new ArrayList<>();
        nonAmberList.add("Jail Pale Ale");
        nonAmberList.add("Gout Stout");

        List<String> result1 = tester.getBrands("amber");
        List<String> result2 = tester.getBrands("light");
        assertThat(result1, is(amberList));
        assertThat(result2, is(nonAmberList));
    }
}
