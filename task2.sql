SELECT o.customerNumber, COUNT(*) AS orderCount
FROM orders o
JOIN orderdetails od ON o.orderNumber = od.orderNumber
WHERE o.orderNumber IN (
    SELECT od2.orderNumber
    FROM orderdetails od2
    WHERE od2.productCode IN (
        SELECT p.productCode
        FROM products p
        WHERE p.productLine = 'Classic Cars'
    )
)
GROUP BY
    o.customerNumber
    HAVING COUNT(*) > 23;