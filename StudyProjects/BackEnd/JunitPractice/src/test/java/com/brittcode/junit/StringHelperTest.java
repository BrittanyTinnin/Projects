package com.brittcode.junit;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by brittanytinnin on 11/30/20 12:25 PM
 */
class StringHelperTest {

    /**
     * NOTES:
     *
     * Every test must have @Test annotation above method signature
     * Signature always has to be public void - anything else won't allow test to run
     * name of test method should start with "test"+"name of method being tested"+"_condition being tested"
     * example: public void testBark_Woof(){} and public void testBark_Roar(){}
     */


    StringHelper helper = new StringHelper();


    //AACD=>CD, ACD=>CD, CDEF=>CDEF, CDAA=>CDAA

    @Test
    public void testTruncateAInFirst2Positions_AinFirst2Positions(){
        assertEquals("CD", helper.truncateAInFirst2Positions("AACD"));
    }


    @Test
    public void testTruncateAInFirst2Positions_AinFirstPosition(){
        assertEquals("CD", helper.truncateAInFirst2Positions("ACD"));

    }


    @Test
    public void testTruncateAInFirst2Positions_AinAnyPosition(){
        assertEquals("CDEF", helper.truncateAInFirst2Positions("CDEF"));
    }


    @Test
    public void testTruncateAInFirst2Positions_AinLast2Positions(){
        assertEquals("CDAA", helper.truncateAInFirst2Positions("CDAA"));
    }

}