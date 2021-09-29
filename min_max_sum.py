#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    listaMinimo = sorted(arr)
    listaMaximo = sorted(arr)
    listaMinimo.pop()
    minimo = 0
    maximo = 0
    for i in range(len(listaMinimo)):
        minimo += listaMinimo[i]   
    listaMaximo.pop(0)
    for i in range(len(listaMaximo)):
        maximo += listaMaximo[i]
    print(str(minimo) + " " + str(maximo))

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
