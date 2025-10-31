SELECT
    m.id AS id_murid,
    m.name,
    p.status AS pendidikan_terakhir,
    m.time_create,
    p.time_create time_update
FROM murid m
LEFT JOIN (
    SELECT
        pddk.*
    FROM (
        SELECT
            pdk.id_murid,
            pdk.status,
            pdk.time_create
        FROM pendidikan pdk
        ORDER BY time_create DESC
        LIMIT 10000
    ) pddk
    GROUP BY pddk.id_murid
) p ON m.id = p.id_murid;