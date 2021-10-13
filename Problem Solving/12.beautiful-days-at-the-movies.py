#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'beautifulDays' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER i
#  2. INTEGER j
#  3. INTEGER k
#

def beautifulDays(i, j, k):
    days = []
    distanceOfGivenDays = j - i
    resposta = 0
    for a in range(distanceOfGivenDays):
        b = a + i
        days.append(b)
    days.append(j)
    for day in days:
        yad = int(str(day)[::-1])
        if (abs((day-yad)) % k) == 0:
            resposta += 1
    return resposta

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    i = int(first_multiple_input[0])

    j = int(first_multiple_input[1])

    k = int(first_multiple_input[2])

    result = beautifulDays(i, j, k)

    fptr.write(str(result) + '\n')

    fptr.close()
