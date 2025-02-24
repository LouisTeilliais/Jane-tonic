INSERT INTO "admin"  (id,email,"password","role")
    VALUES
        -- Generate password here: https://www.browserling.com/tools/bcrypt
        (1,'mail@mail.com' ,'$2a$10$vP6cP241PNAY/Pk.TtJbzuupe9lecXqIEjKLPJOcUNkb35I6Ue4fK', 'ADMIN'); -- yURvf8QQALTf6q3J!
		
INSERT INTO session_type ("sessionTypeId", session_type)
VALUES 
    (1, 'Pilates'),
    (2, 'Circuit training'),
    (3, 'Stretching & mobilité'),
    (4, 'Run & break'), 
    (5, 'Apéro(s)port'); 