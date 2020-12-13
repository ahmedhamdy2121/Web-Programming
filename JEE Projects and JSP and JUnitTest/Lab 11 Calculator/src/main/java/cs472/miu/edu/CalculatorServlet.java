package cs472.miu.edu;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiFunction;

/** File created by Ahmed Hamdy at 12/12/2020. */
@WebServlet("/CalculatorServlet")
public class CalculatorServlet extends HttpServlet {

    private final BiFunction<Integer, Integer, Integer> add = Integer::sum;
    private final BiFunction<Integer, Integer, Integer> mult = (a, b) -> a * b;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        String str1 = request.getParameter("value1");
        String str2 = request.getParameter("value2");
        String str3 = request.getParameter("value3");
        String str4 = request.getParameter("value4");

        Map<String, String> outputs = new LinkedHashMap<>();

        handleOperation(str1, str2, add)
                .ifPresent(res -> outputs.put("result1", res));

        handleOperation(str3, str4, mult)
                .ifPresent(res -> outputs.put("result2", res));

        String json = new Gson().toJson(outputs);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write(json);
    }

    private Optional<String> handleOperation(String str1, String str2,
                                   BiFunction<Integer, Integer, Integer> fun) {

        if (! str1.isEmpty() && ! str2.isEmpty()) {
            try {

                int val1 = Integer.parseInt(str1);
                int val2 = Integer.parseInt(str2);

                return Optional.of(fun.apply(val1, val2).toString());

            } catch (NumberFormatException e) {
                System.out.println("Number Format Exception");
            }
        }

        return Optional.of("");
    }
}
