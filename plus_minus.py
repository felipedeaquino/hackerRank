#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    positivos = 0
    negativos = 0
    nulos = 0
    for i in arr:
        if i > 0:
           positivos += 1
        elif i < 0:
            negativos += 1
        else:
            nulos += 1
    print(positivos/n)
    print(negativos/n)
    print(nulos/n)
            

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
