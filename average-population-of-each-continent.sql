-- https://www.hackerrank.com/challenges/average-population-of-each-continent

SELECT
    co.Continent,
    FLOOR(AVG(ci.Population))
FROM
    COUNTRY co
INNER JOIN
    CITY ci
ON co.Code = ci.CountryCode
GROUP BY
    co.Continent