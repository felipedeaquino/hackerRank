-- https://www.hackerrank.com/challenges/african-cities/

WITH africa AS (
    SELECT CODE
    FROM COUNTRY
    WHERE CONTINENT = 'Africa'
)
SELECT ci.NAME
FROM
    CITY ci
INNER JOIN
    africa
ON africa.CODE = ci.COUNTRYCODE