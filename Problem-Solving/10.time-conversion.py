#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    t = slice(0,2)
    tN = int(s[t])
    if s[-2] == 'A':
        if tN == 12:
            s = '00' + s[2:]
            s = s[:len(s)-2] 
            return s
        s = s[:len(s)-2]
        return s
    else:     
        s = s[:len(s)-2]
        if tN == 12:
            return s
        else:
            tN = tN + 12
            nT = str(tN)
            s = nT + s[2:]
        return s
            
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
