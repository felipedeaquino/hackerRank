-- https://www.hackerrank.com/challenges/asian-population/

WITH asia AS (
    SELECT CODE
    FROM COUNTRY
    WHERE CONTINENT = 'Asia'
)
SELECT SUM(ci.POPULATION) as population
FROM
    CITY ci
INNER JOIN
    asia
ON asia.CODE = ci.COUNTRYCODE