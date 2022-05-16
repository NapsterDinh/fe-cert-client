import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Accordion } from "react-bootstrap";
import { Container, Col } from '@themesberg/react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { topics } from 'app/data/topic';

const dataTest = {
    currentSection: {
        id: '111',
        title: 'Radix Conversion',
        slug: '/radix-conversion',
        body: `<div class="WordSection1" style="page: WordSection1;" id='radix-conversion-1'>
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 8px 60px 0px 54px; text-align: justify; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">The term
                “Radix<sup style="">1</sup> conversion” means, for instance, converting a decimal number
                to a binary number. Here, “10” in decimal numbers and “2” in binary numbers are
                called the radices. Inside a computer, all data is expressed as <strong style="">binary numbers </strong>since the two conditions
                of electricity, ON and <span style="letter-spacing: 0px;">OFF, </span>correspond
                to the binary numbers. Each digit of a binary number is either a “0” or a “1,”
                so all numbers are expressed by two symbols—0 and1.</span></p>
    
    
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify; line-height: 1.5; font-size: 15px;" id='test'><span style="font-size: 18px;">However,
                binary numbers, expressed as combinations of 0s and 1s, tend to be long and
                hard to understand, so the concept of <strong>hexadecimal
                    notation </strong>was introduced. In hexadecimal notation, 4 bits<sup>2</sup>
                (corresponding to numbers 0 through 15 in decimal notation) are represented by
                one digit (0 throughF).</span></p>
    
        <p class="MsoBodyText" style="margin: 1px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">&nbsp;<br></span></p>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">The table
                below shows the correspondence among the decimal, binary, and hexadecimal
                notations.</span></p>
    
    
        <table style="width: 84.5655%; margin-left: 7.393%;">
            <tbody>
                <tr>
                    <td style="width: 16.6667%; text-align: center; background-color: rgb(204, 204, 204);"><strong>Decimal</strong></td>
                    <td style="width: 16.6667%; text-align: center; background-color: rgb(204, 204, 204);"><strong>Binary</strong></td>
                    <td style="width: 16.6667%; background-color: rgb(204, 204, 204);"><strong>Hexadecimal</strong></td>
                    <td style="width: 16.6667%; text-align: center; background-color: rgb(204, 204, 204);"><strong>Decimal</strong></td>
                    <td style="width: 16.6667%; text-align: center; background-color: rgb(204, 204, 204);"><strong>Binary</strong></td>
                    <td style="width: 16.6667%; background-color: rgb(204, 204, 204);"><strong>Hexadecimal</strong></td>
                </tr>
                <tr>
                    <td style="width: 16.6667%; text-align: left;">0</td>
                    <td style="width: 16.6667%;">0000</td>
                    <td style="width: 16.6667%;">0</td>
                    <td style="width: 16.6667%;">8</td>
                    <td style="width: 16.6667%;">1000</td>
                    <td style="width: 16.6667%;">8</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%; text-align: left;">1</td>
                    <td style="width: 16.6667%;">0001</td>
                    <td style="width: 16.6667%;">1</td>
                    <td style="width: 16.6667%;">9</td>
                    <td style="width: 16.6667%;">1001</td>
                    <td style="width: 16.6667%;">9</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">2</td>
                    <td style="width: 16.6667%;">0010</td>
                    <td style="width: 16.6667%;">2</td>
                    <td style="width: 16.6667%;">10</td>
                    <td style="width: 16.6667%;">1010</td>
                    <td style="width: 16.6667%;">10</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">3</td>
                    <td style="width: 16.6667%;">0011</td>
                    <td style="width: 16.6667%;">3</td>
                    <td style="width: 16.6667%;">11</td>
                    <td style="width: 16.6667%;">1011</td>
                    <td style="width: 16.6667%;">11</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">4</td>
                    <td style="width: 16.6667%;">0100</td>
                    <td style="width: 16.6667%;">4</td>
                    <td style="width: 16.6667%;">12</td>
                    <td style="width: 16.6667%;">1100</td>
                    <td style="width: 16.6667%;">12</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">5</td>
                    <td style="width: 16.6667%;">0101</td>
                    <td style="width: 16.6667%;">5</td>
                    <td style="width: 16.6667%;">13</td>
                    <td style="width: 16.6667%;">1101</td>
                    <td style="width: 16.6667%;">13</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">6</td>
                    <td style="width: 16.6667%;">0110</td>
                    <td style="width: 16.6667%;">6</td>
                    <td style="width: 16.6667%;">14</td>
                    <td style="width: 16.6667%;">1110</td>
                    <td style="width: 16.6667%;">14</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;">7</td>
                    <td style="width: 16.6667%;">0111</td>
                    <td style="width: 16.6667%;">7</td>
                    <td style="width: 16.6667%;">15</td>
                    <td style="width: 16.6667%;">1111</td>
                    <td style="width: 16.6667%;">15</td>
                </tr>
                <tr>
                    <td style="width: 16.6667%;"><br></td>
                    <td style="width: 16.6667%;"><br></td>
                    <td style="width: 16.6667%;"><br></td>
                    <td style="width: 16.6667%;">16</td>
                    <td style="width: 16.6667%;">10000</td>
                    <td style="width: 16.6667%;">16</td>
                </tr>
            </tbody>
        </table>
    
    
    
        <p class="MsoBodyText" style="margin: 1px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;">
            &nbsp;&nbsp;&nbsp;<br></p>
        <hr style="line-height: 1.5;">
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 4px 50px 0px 44px; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;"><sup>1</sup> <strong>Radix</strong>:
                It is the number that forms a unit of weight for each digit in a numeration
                system such as binary, octal, decimal, and hexadecimal notations. The radix in
                each of these notations is 2, 8, 10, and 16, respectively.</span></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 44px; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Binary system:
                uses 0 and 1.</span></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 44px; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Octal system:
                uses 0 through 7.</span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 427px 0px 44px; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Decimal system: uses 0 through 9. Hexadecimal
                system: uses 0 through F.</span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 39px 0px 44px; text-align: justify; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;"><sup>2</sup> <strong>Bit</strong>: It means the smallest unit of information inside a computer,
                expressed by a “0” or a “1.” Data inside a computer is expressed in binary, so
                a bit represents one digit in binary notation. For the purpose of convenience,
                the hexadecimal and octal notations are represented by partitioning binary
                numbers as follows:</span></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 44px; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Quaternary: 2
                bits (0 through 3)</span></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 44px; font-family: &quot;Times New Roman&quot;, serif; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Octal: 3 bits
                (0 through 7)</span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0px 0in 0px 44px; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">Hexadecimal: 4 bits (0 through F)</span></p>
    
    </div>
    
    
    <div class="WordSection2" style="page: WordSection2; line-height: 1.5;" id='radix-conversion-2'>
    
    
    
    
    
    
    
        <h2 style="font-family: Arial, sans-serif; margin: 6px 0.95in 0px 0.7in; text-indent: -34px; font-size: 21px;"><span style="font-size: 18px;"><span style="font-family: Wingdings; font-weight: normal; font-size: 24px;">u</span><strong style="font-size: 24px;">Conversion
                    of Binary or Hexadecimal Numbers into DecimalNumbers</strong></span></h2>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 16px 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">In general,
                when a value is given in the numeration system with radix <em>r </em>(<em>r</em>-ary system), we
                multiply each digit value with its corresponding weight<sup>3</sup> and adds up
                the products in order to check what the value is in decimal. For digits to the
                left of the radix point, the weights are r<sup>0</sup>, r<sup>1</sup>, r<sup>2</sup>,
                … from the lowest digit. Thus, the conversion is shown below. (In these
                examples, (a) is shown in hexadecimal, and (b) is in binary.)</span></p>
    
        <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 13px;">&nbsp;</span><br></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; line-height: 20px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">(12A)</span><span style="font-family: TeXGyreSchola;">16 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">= 1 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">16</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">2 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 2 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">16</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">1 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ A </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">16</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">0</span></span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 104px; font-family: &quot;Times New Roman&quot;, serif; line-height: 18px; font-size: 15px;"><span style="font-family: TeXGyreSchola; font-size: 18px;">=
                256 + 32 + 10</span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 104px; font-family: &quot;Times New Roman&quot;, serif; line-height: 19px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">=(298)</span><span style="font-family: TeXGyreSchola;">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">…… (a)</span></span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 13px 0in 0px 54px; line-height: 20px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">(1100100)</span><span style="font-family: TeXGyreSchola;">2 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">= 1 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">6 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 1 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">5 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 0 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">4 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 0 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">3 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 1 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">2 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 0 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">1 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 0 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">0</span></span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 127px; font-family: &quot;Times New Roman&quot;, serif; line-height: 18px; font-size: 15px;"><span style="font-family: TeXGyreSchola; font-size: 18px;">=
                64 + 32 + 4</span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 127px; font-family: &quot;Times New Roman&quot;, serif; line-height: 19px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">=(100)</span><span style="font-family: TeXGyreSchola;">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">…… (b)</span></span></p>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 15px 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">For those
                digits to the right of the radix point, the weights are r<sup>-1</sup>, r<sup>-2</sup>,
                r<sup>-3</sup>, … in order. Thus, the conversion is shown below. (In these
                examples, (c) is shown in hexadecimal, and (d) is in binary.)</span></p>
    
        <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 13px;">&nbsp;</span><br></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; line-height: 20px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">(0.4B)</span><span style="font-family: TeXGyreSchola;">16 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">= 4 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">16</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-1
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ B </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">16</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-2</span></span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 103px; font-family: &quot;Times New Roman&quot;, serif; line-height: 18px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola;">=
                    4 / 16 + 11 / 16</span><span style="font-family: TeXGyreSchola; position: relative; top: -4px;">2</span></span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 103px; font-family: &quot;Times New Roman&quot;, serif; line-height: 18px; font-size: 15px;"><span style="font-family: TeXGyreSchola; font-size: 18px;">=
                0.25 + 0.04296875</span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 103px; font-family: &quot;Times New Roman&quot;, serif; line-height: 19px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">=(0.29296875)</span><span style="font-family: TeXGyreSchola;">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">…… (c)</span></span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 14px 0in 0px 54px; line-height: 20px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">(0.01011)</span><span style="font-family: TeXGyreSchola;">2 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">= 0 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-1
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 1 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-2 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 0 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-3 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 1 </span><span style="position: relative; top: -1px;">× </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-4 </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">+ 1 </span><span style="position: relative; top: -1px;">×
                </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">2</span><span style="font-family: TeXGyreSchola; position: relative; top: -5px;">-5</span></span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 117px; font-family: &quot;Times New Roman&quot;, serif; line-height: 18px; font-size: 15px;"><span style="font-family: TeXGyreSchola; font-size: 18px;">=
                0.25 + 0.0625 + 0.03125</span></p>
    
        <p class="MsoBodyText" style="margin: 0in 0in 0in 117px; font-family: &quot;Times New Roman&quot;, serif; line-height: 19px; font-size: 15px;"><span style="font-size: 18px;"><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">=(0.34375)</span><span style="font-family: TeXGyreSchola;">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-family: TeXGyreSchola; position: relative; top: -1px;">…… (d)</span></span></p>
    
        <p class="MsoBodyText" style="margin: 1px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-family: TeXGyreSchola; font-size: 21px;">&nbsp;</span><br></p>
    
        <h2 id='radix-conversion-3' style="margin: 0in 0in 0in 63px; text-indent: -30px; font-family: Arial, sans-serif; font-size: 21px;"><strong style="font-size: 24px;"><span style="font-family: Wingdings; font-weight: normal;">u</span>Conversion
                of Decimal Integers to BinaryNumbers</strong></h2>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 16px 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">Mathematically,
                using the fact that the <em>n</em>-th digit
                from the right (lowest) represents the place value of 2<em><sup>n</sup></em><sup>-1</sup> in binary, we can decompose a decimal
                number into a sum of powers of 2 (values 2<em><sup>n</sup>
                </em>for some <em>n</em>).</span></p>
    
        <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 15px 0in 0px 54px; line-height: 19px; text-align: center; font-size: 15px;"><img src="blob:https://xdsoft.net/517fc4a7-e550-4d32-b1b0-e079b205b5ab" alt="" style="font-size: 18px;"></p>
    
    </div>
    <div class="WordSection3" style="page: WordSection3; line-height: 1.5;">
    
    
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 6px 50px 0px 54px; font-size: 15px;"><span style="font-size: 18px;">However, we can also divide the
                given number by 2 sequentially and repeat it until the quotient becomes 0. This
                is a mechanical conversion method, so calculation errors can be reduced. <sup>4</sup></span></p>
    
        <p class="MsoBodyText" style="margin: 0in; font-family: &quot;Times New Roman&quot;, serif; text-align: center; font-size: 15px;"><img src="blob:https://xdsoft.net/418b2463-a785-4dd0-8bf6-a4336879a0c6" alt="" style="font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; text-align: left; font-size: 18px;"></p>
    
        <w:wrap anchorx="page" style="font-size: 18px;">
            <!--[endif]----><br>
    
    
    
            <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">In addition,
                    in order to convert a decimal number to a hexadecimal number, we can use 16
                    instead of 2 here. In general, to convert a decimal number to an <em style="">n</em>-ary number, use <em style="">n </em>instead of 2.</span></p>
    
            <p class="MsoBodyText" style="margin: 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 16px;">&nbsp;</span><br></p>
    
    
    
            <h2 id='radix-conversion-4' style="font-size: 21px; margin: 13px 0in 0in 63px; text-indent: -30px; font-family: Arial, sans-serif;"><strong><span style="font-family: Wingdings; font-weight: normal;">u</span>Conversion
                    of Decimal Numbers into BinaryNumbers</strong></h2>
    
            <p class="MsoBodyText" style="font-size: 15px; font-family: &quot;Times New Roman&quot;, serif; margin: 16px 60px 0px 54px; text-align: justify;"><span style="font-size: 18px;">Mathematically,
                    using the fact that the <em style="">n</em>-th digit
                    after the radix point in binary represents the place value of 2<sup style="">-<em>n</em></sup>, we can decompose a decimal
                    number into a sum of powers of 2 (values <span style="letter-spacing: 0px;">2<em><sup>n</sup></em></span>for some<em style="">n</em>).<img src="blob:https://xdsoft.net/cca3ab77-b043-4308-adff-2dc347035072" alt="" style="font-size: 18px; display: block; margin-left: auto; margin-right: auto;"></span></p>
    
    
    
    
    
            <p class="MsoBodyText" style="font-size: 15px; font-family: &quot;Times New Roman&quot;, serif; margin: 15px 60px 0px 54px; text-align: justify;"><span style="font-size: 18px;">However, we
                    can also multiply the fractional part (the part to the right of the decimal (or
                    radix) point) by 2 sequentially and repeat it until the fractional part becomes
                    0. This is a mechanical conversion method, so calculation errors can be
                    reduced.</span></p>
    
            <p class="MsoBodyText" style="font-size: 15px; margin: 1px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; text-align: center;"><img src="blob:https://xdsoft.net/9267a6da-f085-41a8-9fed-0310d4321f11" alt=""></p>
        </w:wrap>
    </div>
    <div class="WordSection4" style="page: WordSection4; line-height: 1.5;">
    
        <p class="MsoBodyText" style="margin: 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 13px;">&nbsp;</span><br></p>
    
    
    
        <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 13px;">&nbsp;</span><br></p>
    
        <h6 id='radix-conversion-5' style="margin: 6px 0in 0in 63px; text-indent: -30px; font-family: Arial, sans-serif; font-size: 21px;"><span style="font-size: 24px;"><span style="font-family: Wingdings; font-weight: normal;">u</span>Conversion
                between Hexadecimal and BinaryNumbers</span></h6>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 16px 0in 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">We can use the
                fact that each digit of a hexadecimal number corresponds to 4 bits in binary.</span></p>
    
        <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 18px;">&nbsp;<br></span></p>
    
        <p class="MsoNormal" style="margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; line-height: 17px; font-size: 15px;"><strong><span style="font-family: Arial, sans-serif; font-size: 18px;">FROM
                    BINARY TO HEXADECIMAL</span></strong></p>
    
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">As shown
                below, we can group the binary number into blocks of 4 bits, starting from the
                lowest bit (rightmost bit), and then assign the corresponding hexadecimal digit
                for each block. If the last (leftmost) block is less than 4 bits, it is padded
                with leading 0s.</span></p>
        <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: center; font-size: 15px;"><img src="blob:https://xdsoft.net/e6b33c83-2a14-42da-a4f3-a3f3ca5c1239" alt="" style="font-size: 18px;"></p>
    
        <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; font-size: 15px;"><span style="font-size: 18px;">&nbsp;<br></span></p>
    
        <w:wrap anchorx="page" style="font-size: 18px;">
            <w:wrap type="topAndBottom" anchorx="page" style="">
                <p class="MsoNormal" style="margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; line-height: 17px; font-size: 15px;"><strong><span style="font-family: Arial, sans-serif; font-size: 18px;">FROM
                            HEXADECIMAL TO BINARY</span></strong></p>
    
                <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify; font-size: 15px;"><span style="font-size: 18px;">As shown <span style="letter-spacing: 0px;">below, </span>we can assign the corresponding
                        4-bit binary number to each digit of the given hexadecimalnumber.</span></p>
    
                <p class="MsoBodyText" style="font-size: 15px; margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; text-align: center;">&nbsp;<img src="blob:https://xdsoft.net/d1808aae-daf0-4d6f-89cc-7a3e7b4f321c" alt="" style="font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;"></p>
    
                <p class="MsoBodyText" style="font-size: 15px; font-family: &quot;Times New Roman&quot;, serif; margin: 0in 330px 0px 117px; line-height: 182%;">
                    <v:shape id="image32.png" o:spid="_x0000_s2100" type="#_x0000_t75" style="position:absolute;
     left:0;text-align:left;margin-left:147.1pt;margin-top:13.9pt;width:11.45pt;
     height:13.5pt;z-index:-1896820224;visibility:visible;mso-wrap-style:square;
     mso-wrap-distance-left:0;mso-wrap-distance-top:0;mso-wrap-distance-right:0;
     mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
     mso-position-horizontal-relative:page;mso-position-vertical:absolute;
     mso-position-vertical-relative:text">
                        <v:imagedata src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image036.png" o:title="">
                            <w:wrap anchorx="page">
                            </w:wrap>
                        </v:imagedata>
                    </v:shape>
                    <!--[endif]----><span style="position: absolute; z-index: -1896820224; left: 0px; margin-left: 196px; margin-top: 18px; width: 15px; height: 18px;"><img width="15" height="18" src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image037.jpg" v:shapes="image32.png"></span>
                    <v:group id="_x0000_s2082" style="position:absolute;left:0;text-align:left;margin-left:107pt;
     margin-top:38pt;width:94.15pt;height:15.65pt;z-index:-1896069632;
     mso-position-horizontal-relative:page" coordorigin="2140,760" coordsize="1883,313">
                        <v:shape id="_x0000_s2083" style="position:absolute;left:2139;top:1064;
      width:1883;height:2" coordorigin="2140,1065" coordsize="1883,0" o:spt="100" adj="0,,0" path="m2140,1065r420,m2634,1065r420,m3122,1065r420,m3602,1065r420,e" filled="f" strokecolor="#010101">
                            <v:stroke joinstyle="round">
                                <v:formulas>
                                    <v:path arrowok="t" o:connecttype="segments">
                                    </v:path>
                                </v:formulas>
                            </v:stroke>
                        </v:shape>
                        <v:shape id="_x0000_s2084" style="position:absolute;left:2349;top:765;
      width:467;height:294" coordorigin="2350,766" coordsize="467,294" o:spt="100" adj="0,,0" path="m2420,946r-70,114l2484,1048r-20,-32l2435,1016r-4,-2l2426,1007r2,-3l2431,1001r17,-10l2420,946xm2448,991r-17,10l2428,1004r-2,3l2431,1014r4,2l2438,1013r18,-11l2448,991xm2456,1002r-18,11l2435,1016r29,l2456,1002xm2808,766r-4,2l2448,991r8,11l2812,780r3,-2l2816,773r-2,-3l2812,767r-4,-1xe" fillcolor="#010101" stroked="f">
                            <v:stroke joinstyle="round">
                                <v:formulas>
                                    <v:path arrowok="t" o:connecttype="segments">
                                    </v:path>
                                </v:formulas>
                            </v:stroke>
                        </v:shape>
                        <v:shape id="_x0000_s2085" type="#_x0000_t75" style="position:absolute;
      left:2826;top:765;width:138;height:303">
                            <v:imagedata src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image038.png" o:title="">
                            </v:imagedata>
                        </v:shape>
                        <v:shape id="_x0000_s2086" type="#_x0000_t75" style="position:absolute;
      left:3204;top:759;width:131;height:309">
                            <v:imagedata src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image039.png" o:title="">
                            </v:imagedata>
                        </v:shape>
                        <v:shape id="_x0000_s2087" style="position:absolute;left:3384;top:759;
      width:438;height:300" coordorigin="3384,760" coordsize="438,300" o:spt="100" adj="0,,0" path="m3719,998r-30,44l3822,1060r-27,-48l3738,1012r-2,-2l3719,998xm3727,986r-8,12l3736,1010r2,2l3743,1012r5,-7l3746,1000r-2,-2l3727,986xm3756,944r-29,42l3744,998r2,2l3748,1005r-5,7l3795,1012r-39,-68xm3392,760r-4,l3385,764r-1,3l3384,772r335,226l3727,986,3392,760xe" fillcolor="#010101" stroked="f">
                            <v:stroke joinstyle="round">
                                <v:formulas>
                                    <v:path arrowok="t" o:connecttype="segments">
                                    </v:path>
                                </v:formulas>
                            </v:stroke>
                        </v:shape>
                        <w:wrap anchorx="page">
                        </w:wrap>
                    </v:group>
                    <!--[endif]---->
                </p>
                <p class="MsoBodyText" style="font-size: 15px; margin: 1px 0in 0in; font-family: &quot;Times New Roman&quot;, serif;"><span style="font-size: 24px;"><br></span></p>
    
                <h6 id='radix-conversion-6' style="font-size: 21px; font-family: Arial, sans-serif; margin: 0in 123px 0px 0.7in; text-indent: -34px;"><span style="font-size: 24px;"><span style="font-family: Wingdings; font-weight: normal;">u</span>Conversion
                        between Hexadecimal Fractions and DecimalFractions</span></h6>
    
                <p class="MsoBodyText" style="font-size: 15px; font-family: &quot;Times New Roman&quot;, serif; margin: 16px 60px 0px 54px; text-align: justify;"><span style="font-size: 18px;">To convert
                        between hexadecimal fractions and decimal fractions, we can combine the
                        conversion between decimal and binary numbers together with the conversion
                        between binary and hexadecimal numbers to reduce errors.</span></p>
    
                <p class="MsoBodyText" style="font-size: 15px; margin: 0in; font-family: &quot;Times New Roman&quot;, serif;">&nbsp;<br></p>
    
                <p class="MsoNormal" style="font-size: 15px; margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; line-height: 17px;"><strong style=""><span style="font-family: Arial, sans-serif; font-size: 18px;">FROM
                            DECIMAL TO HEXADECIMAL FRACTION</span></strong></p>
    
                <p class="MsoBodyText" style="font-size: 15px; font-family: &quot;Times New Roman&quot;, serif; margin: 0in 60px 0px 54px; text-align: justify;"><span style="font-size: 18px;">We can convert
                        the given decimal number to binary first, and then convert the binary number to
                        the corresponding hexadecimal number. In converting binary to hexadecimal, we
                        can group the bits into 4-bit blocks, starting from the highest (leftmost) bit
                        of the fractional part, and convert each block to the corresponding hexadecimal
                        digit. If the last (rightmost) block is fewer than 4 bits, it is padded with
                        trailing 0s.</span></p>
    
                <p class="MsoBodyText" style="font-size: 15px; margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif;"><span style="font-size: 13px;">&nbsp;</span><br></p>
    
                <p class="MsoBodyText" style="font-size: 15px; margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; text-align: center;">
                    <v:shape id="_x0000_s2099" type="#_x0000_t75" style="position: absolute; left: 0px; margin-left: 190.1pt; margin-top: 13.6pt; width: 15pt; height: 13.5pt; z-index: -1896818176; visibility: visible;">
                        <v:imagedata src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image041.png" o:title="">
                            <w:wrap anchorx="page">
                            </w:wrap>
                        </v:imagedata>
                    </v:shape>
                    <!--[endif]---->
    
                    <img src="blob:https://xdsoft.net/67e695d3-0963-49c1-96bf-c2dbf408e772" alt="">
                </p>
            </w:wrap>
        </w:wrap>
    </div>
    
    
    
    
    <p class="MsoNormal" style="font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0in 0px 54px; line-height: 1.5; font-size: 15px;"><strong><span style="font-family: Arial, sans-serif; font-size: 18px;">FROM
                HEXADECIMAL TO DECIMAL<sup>6</sup></span></strong></p>
    
    <p class="MsoBodyText" style="font-family: &quot;Times New Roman&quot;, serif; margin: 0in 50px 0px 54px; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">First, we can convert the given
            hexadecimal number to the corresponding binary number, and then convert the
            binary number to the corresponding decimal number.</span></p>
    
    <p class="MsoBodyText" style="margin: 0px 0in 0in; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 1.5; font-size: 15px;"><span style="font-size: 18px;">&nbsp;<img src="blob:https://xdsoft.net/2b1e8e2f-1ec8-422a-90cc-a747a0ba1b99" alt="" style="font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;"></span></p>
    
    <p class="MsoBodyText" style="margin: 0in 0in 0in 54px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 1.5; font-size: 15px;">
        <v:shape id="_x0000_s2096" type="#_x0000_t75" style="position: absolute; left: 0px; margin-left: 175.7pt; margin-top: 14.65pt; width: 15pt; height: 13.5pt; z-index: -1896816128; visibility: visible;">
            <v:imagedata src="file:///C:/Users/tantu/AppData/Local/Temp/msohtmlclip1/01/clip_image041.png" o:title="" style="font-size: 18px;">
                <w:wrap anchorx="page">
                </w:wrap>
            </v:imagedata>
        </v:shape>
        <!--[endif]---->
    
    
        <br>
    </p>`,
        postIndex: [
            {
                id: 'radix-conversion-1',
                title: 'Radix Conversion',
            },
            {
                id: 'radix-conversion-2',
                title: 'Conversion of Binary or Hexadecimal Numbers into DecimalNumbers',
            },
            {
                id: 'radix-conversion-3',
                title: 'Conversion of Decimal Integers to BinaryNumbers',
            },
            {
                id: 'radix-conversion-4',
                title: 'Conversion of Decimal Numbers into BinaryNumbers',
            },
            {
                id: 'radix-conversion-5',
                title: 'Conversion between Hexadecimal and BinaryNumbers',
            },
            {
                id: 'radix-conversion-6',
                title: 'Conversion between Hexadecimal Fractions and DecimalFractions',
            },
        ],
        status: 'Done'
    },
    nextSection: {
        id: '12',
        title: 'Information and Logic',
        slug: '/information-and-logic',
    },
    prevSection: '',
    sections: [
        {
            id: '11',
            title: 'Basic Theory of Information',
            slug: '/basic-theory-of-information',
            lessons: [
                {
                    id: '111',
                    title: 'Radix Conversion',
                    slug: '/radix-conversion',
                    
                },
                {
                    id: '112',
                    title: 'Numerical Representations',
                    slug: '/numerical-representations',
                },
                {
                    id: '113',
                    title: 'Non-Numerical Representations',
                    slug: '/non-numerical-representations',
                },
                {
                    id: '114',
                    title: 'Operations and Accuracy',
                    slug: '/operations-and-accuracy',
                },
                {
                    id: '115',
                    title: 'Quiz',
                    slug: '/basic-theory-of-information-quiz',
                },
            ]
        },
        {
            id: '12',
            title: 'Information and Logic',
            slug: '/information-and-logic',
            lessons: [
                {
                    id: '121',
                    title: 'Logical Operations',
                    slug: '/logical-operations',
                },
                {
                    id: '122',
                    title: 'BNF',
                    slug: '/bnf',
                },
                {
                    id: '123',
                    title: 'Reverse Polish Notation',
                    slug: '/revers-polish-notation',
                },
                {
                    id: '124',
                    title: 'Quiz',
                    slug: '/information-and-logic-quiz',
                },
            ]
        },
        {
            id: '13',
            title: 'Data Structures',
            slug: '/data-structures',
            lessons: [
                {
                    id: '131',
                    title: 'Arrays',
                    slug: '/arrays',
                },
                {
                    id: '132',
                    title: 'Lists',
                    slug: '/lists',
                },
                {
                    id: '133',
                    title: 'Stacks',
                    slug: '/stacks',
                },
                {
                    id: '134',
                    title: 'Queues',
                    slug: '/queues',
                },
                {
                    id: '135',
                    title: 'Tree',
                    slug: '/tree',
                },
                {
                    id: '136',
                    title: 'Hash',
                    slug: '/hash',
                },
                {
                    id: '137',
                    title: 'Quiz',
                    slug: '/data-structures-quiz',
                },
            ]
        },
        {
            id: '14',
            title: 'Algorithms',
            slug: '/algorithms',
            lessons: [
                {
                    id: '141',
                    title: 'Search Algorithms',
                    slug: '/search-algorithms',
                },
                {
                    id: '142',
                    title: 'Sorting Algorithms',
                    slug: '/sorting-algorithms',
                },
                {
                    id: '143',
                    title: 'String Search Algorithms',
                    slug: '/string-search-algorithms',
                },
                {
                    id: '144',
                    title: 'Graph Algorithms',
                    slug: '/graph-algorithms',
                },
                {
                    id: '145',
                    title: 'Quiz',
                    slug: '/algorithms-quizz',
                },
            ]
        },
    ]
}

const TutorialPage = () => {
    const [data, setData] = useState('')
    const { slugSection } = useParams()
    const location = useLocation()

    useEffect(() => {
        setData(dataTest)
    }, [])

    return (
        <Container className="d-flex container-card">
            <Col className="layout-container-top tutorial">
                <div>
                    <h1>{data?.currentSection?.title}</h1>
                    <div className='body-content' dangerouslySetInnerHTML={{ __html: data?.currentSection?.body }}></div>
                </div> 
                <span className='span-reserved'>Hope you enjoying my website</span>
                <div className='border'></div>
                <div className='next-article'>
                    <div>
                        <p>Next section</p>
                        <a href={`/section${data?.nextSection?.slug}`}>{data?.nextSection?.title}</a>
                    </div>
                </div>
            </Col>
            <Col className="layout-container-body tutorial">
                <PostIndex data={data} location={location}/>
            </Col>
        </Container>
    );
}

const PostIndex = ({data, location}) => {
    return(
        <div className='sticky-sidebar'>
            <div class="post-index hidden-sm-down">
                <div class="section-title-line">
                    <h5 class="text-uppercase">
                        Tables of content
                    </h5>
                    <hr class="filler-line"></hr>
                </div>
                <ul class="content-outline list-unstyled">
                    {
                        data?.currentSection?.postIndex?.map((item, index) => (
                            <li class="content-outline__item content-outline__item--level-3"><a href={`#${item.id}`} class={
                                location.hash !== `#${item.id}` 
                                ? index === 0 && location.hash === ''? `link active` : `link`
                                : `link active`
                            }>{item.title}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div class="post-index hidden-sm-down">
                <div class="section-title-line">
                    <h5 class="text-uppercase">
                        Content in topic
                    </h5>
                    <hr class="filler-line"></hr>
                </div>
                <Accordion className="accordion-content-topic">
                    {
                        data?.sections?.map((item, index) =>
                        (
                            <Accordion.Item key={item.id} eventKey={item.id}>
                                <Accordion.Header>{`${item.title}`}</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        item?.lessons?.map((item2, index2) =>
                                        (
                                            <a key={item2.id} href={`/section${item2.slug}`}>{`${item2.title}`}</a>
                                        ))
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                        )
                    }
                </Accordion>
            </div>
        </div>
    )
}
export default TutorialPage;