package cs472.miu.edu.controller;

import cs472.miu.edu.model.BeerExpert;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * File created by Ahmed Hamdy at 12/12/2020.
 */
@WebServlet("/BeerServlet")
public class BeerServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String color = request.getParameter("color");

        BeerExpert beerExpert = new BeerExpert();
        List<String> result = beerExpert.getBrands(color);

        request.setAttribute("advices", result);

        RequestDispatcher view = request.getRequestDispatcher("results.jsp");
        view.forward(request, response);
    }

}
