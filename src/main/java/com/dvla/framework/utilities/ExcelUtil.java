package com.dvla.framework.utilities;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import java.io.File;
import java.io.IOException;
import java.util.Hashtable;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */
public class ExcelUtil {
    /**
     * Excel Helpers act as library to read data from excel sheet, parse data and store data
     * in-memory java collections (HashTable of java) and reading data out from in-memory java collections
     * (with the help of 3rd party external libraries i.e. Java Excel API or jxl)
     */

    static Sheet wrksheet;
    static Workbook wrkbook ;
    static Hashtable dict= new Hashtable();

    //Create a Constructor to actually open the excel sheet
    public ExcelUtil(String ExcelSheetPath) throws BiffException, IOException
    {
        //todo: Initialize excel sheet path here
        wrkbook = Workbook.getWorkbook(new File(ExcelSheetPath));
        //todo: For Demo purpose the excel sheet name is hardcoded, but not recommended :)
        wrksheet = wrkbook.getSheet("Reg");

        //Call the Column Dictionary to store column Names
        ColumnDictionary();
    }

    //Returns the Number of Rows
    public static int RowCount()
    {
        //todo: calling in-built method getRows -telling us how many rows are there in the excel sheet
        return wrksheet.getRows();
    }

    //Returns the Cell value by taking row and Column values as argument
    private static String ReadCell(int column,int row)
    {
        //todo: Gets the exact CELL data from the excel sheet
        return wrksheet.getCell(column,row).getContents();
    }

    public static String ReadCell(String columnName, int rowNumber)
    {
        return ReadCell(GetCell(columnName), rowNumber);
    }

    //Create Column Dictionary to hold all the Column Names
    private static void ColumnDictionary()
    {
        //todo: Iterate through all the columns in the Excel sheet and store the value in Hashtable
        //todo: (i.e. populating all the columns values or names into the collection)
        for(int col=0;col < wrksheet.getColumns();col++)
        {
            dict.put(ReadCell(col,0), col);
        }
    }

    //Read Column Names
    private static int GetCell(String colName)//
    {
        try {
            int value;
            value = ((Integer) dict.get(colName)).intValue();
            return value;
        } catch (NullPointerException e) {
            return (0);

        }
    }
}
